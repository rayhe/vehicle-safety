#!/usr/bin/env python3
"""#1481 Subaru 2026-MY recall census.
Corrected-vocabulary method per #1475/#1476/#1478/#1480: VPIC canonical 2026
lists + Hybrid / Plug-In Hybrid / Electric suffix variants + targeted trims,
deduped by campaign number. Keeps 26Vxxx campaigns with ReportReceivedDate
in 2026.
"""
import json, time, urllib.request, urllib.parse, sys, os

ONLY = sys.argv[1] if len(sys.argv) > 1 else None

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
VPIC = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/{make}/modelYear/2026?format=json"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1481-subaru-recall-census-raw.json"

def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1481"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)

def vpic_models(make):
    d = get_json(VPIC.format(make=urllib.parse.quote(make)))
    return sorted({x["Model_Name"] for x in d.get("Results", []) if x.get("Model_Name")})

def query(make, model):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": 2026})
    try:
        return get_json(url).get("results", []) or []
    except urllib.error.HTTPError as e:
        if e.code in (400, 404):
            return []
        raise
    except Exception as e:
        print(f"QUERY {make}/{model} FAILED: {e}", flush=True)
        return []

def in_2026(ds):
    try:
        dd, mm, yyyy = ds.split("/")
        return yyyy == "2026"
    except Exception:
        return False

# targeted extra spellings per make (beyond VPIC canonical names)
EXTRA = {
    "subaru": ["outback wilderness", "forester wilderness", "crosstrek wilderness",
               "solterra", "wrx", "brz", "ascent", "legacy", "impreza",
               "outback", "forester", "crosstrek"],
}
SUFFIXES = ["Hybrid", "Plug-In Hybrid", "Electric"]

out = {"brands": {}}
if os.path.exists(OUT):
    out = json.load(open(OUT))

for brand, makes in [("subaru", ["subaru"])]:
    if ONLY and brand != ONLY:
        continue
    campaigns, per_model = {}, {}
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
            rows = query(make, model)
            nq += 1
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
                            "per_model": per_model, "queries": nq, "done": True}
    json.dump(out, open(OUT, "w"), indent=1)
    print(f"== {brand}: {len(campaigns)} campaigns, {nq} queries ==", flush=True)

for brand, b in out["brands"].items():
    print(f"\n### {brand}: {b['count']} campaigns")
    for cn in sorted(b["campaigns"]):
        c = b["campaigns"][cn]
        print(f"  {cn} {c['date']} [{c['component']}] via {c['found_via']}")
    for m, cns in sorted(b["per_model"].items()):
        print(f"    {m}: {len(cns)} {cns}")
