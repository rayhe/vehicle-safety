#!/usr/bin/env python3
"""#1487 Volkswagen 2026-MY recall census.
Corrected-vocabulary method per #1475/#1476/#1478/#1480/#1486: VPIC canonical 2026
lists + Hybrid / Plug-In Hybrid / Electric suffix variants + targeted trims,
deduped by campaign number. Keeps 26Vxxx campaigns with ReportReceivedDate
in 2026. Records HTTP status per query (400 = vocabulary failure, cf. #1486
Mazda total failure) so a zero is never mistaken for a finding.
"""
import json, time, urllib.request, urllib.parse, sys, os

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
VPIC = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/{make}/modelYear/2026?format=json"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1487-volkswagen-recall-census-raw.json"

def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1487"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)

def vpic_models(make):
    d = get_json(VPIC.format(make=urllib.parse.quote(make)))
    return sorted({x["Model_Name"] for x in d.get("Results", []) if x.get("Model_Name")})

def query(make, model):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": 2026})
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1487"}), timeout=20) as r:
            return 200, json.load(r).get("results", []) or []
    except urllib.error.HTTPError as e:
        return e.code, []
    except Exception as e:
        print(f"QUERY {make}/{model} FAILED: {e}", flush=True)
        return "ERR", []

def in_2026(ds):
    try:
        dd, mm, yyyy = ds.split("/")
        return yyyy == "2026"
    except Exception:
        return False

EXTRA = {
    "volkswagen": ["jetta", "jetta gli", "golf gti", "golf r", "tiguan",
                   "atlas", "atlas cross sport", "taos", "id.4", "id. buzz",
                   "id.buzz", "id4", "arteon", "passat", "golf"],
}
SUFFIXES = ["Hybrid", "Plug-In Hybrid", "Electric"]

out = {"brands": {}}
if os.path.exists(OUT):
    out = json.load(open(OUT))

for brand, makes in [("volkswagen", ["volkswagen"])]:
    campaigns, per_model, status_log = {}, {}, {}
    nq = 0
    for make in makes:
        models = vpic_models(make)
        print(f"{make}: VPIC 2026 ({len(models)}): {models}", flush=True)
        qset = []
        for m in models:
            qset.append(m.lower())
            for s in SUFFIXES:
                qset.append(f"{m.lower()} {s.lower()}")
        for e in EXTRA.get(make, []):
            qset.append(e.lower())
        seen, qs = set(), []
        for q in qset:
            if q not in seen:
                seen.add(q); qs.append(q)
        for model in qs:
            code, rows = query(make, model)
            nq += 1
            status_log[f"{make}/{model}"] = code
            kept = []
            for r in rows:
                cn = r.get("NHTSACampaignNumber", "")
                if not cn.startswith("26V") or not in_2026(r.get("ReportReceivedDate", "")):
                    continue
                kept.append(cn)
                if cn not in campaigns:
                    campaigns[cn] = {"campaign": cn, "date": r.get("ReportReceivedDate"),
                                     "component": r.get("Component"), "summary": r.get("Summary"),
                                     "ota": r.get("overTheAirUpdate"), "found_via": f"{make}/{model}"}
            if kept:
                per_model[f"{make}/{model}"] = sorted(set(kept))
            time.sleep(0.05)
    out["brands"][brand] = {"campaigns": campaigns, "count": len(campaigns),
                            "per_model": per_model, "queries": nq, "done": True,
                            "status_log": status_log}
    json.dump(out, open(OUT, "w"), indent=1)
    print(f"== {brand}: {len(campaigns)} campaigns, {nq} queries ==", flush=True)

for brand, b in out["brands"].items():
    print(f"\n### {brand}: {b['count']} campaigns")
    for cn in sorted(b["campaigns"]):
        c = b["campaigns"][cn]
        print(f"  {cn} {c['date']} [{c['component']}] via {c['found_via']}")
    for m, cns in sorted(b["per_model"].items()):
        print(f"    {m}: {len(cns)} {cns}")
    codes = {}
    for v in b["status_log"].values():
        codes[v] = codes.get(v, 0) + 1
    print(f"  status codes: {codes}")
