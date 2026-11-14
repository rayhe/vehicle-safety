#!/usr/bin/env python3
"""#1502 Acura 2026-MY recall census.
Corrected-vocabulary method per #1491/#1492/#1496/#1501: VPIC canonical 2026
lists + Hybrid / Plug-In Hybrid / Electric suffix variants + targeted trims,
deduped by campaign number. Keeps 26Vxxx campaigns with ReportReceivedDate
in 2026. Records HTTP status per query so a zero is never mistaken for a finding.
"""
import json, time, urllib.request, urllib.parse, sys, os

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
VPIC = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/{make}/modelYear/2026?format=json"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1502-acura-recall-census-raw.json"

def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1502"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def vpic_models(make):
    d = get_json(VPIC.format(make=urllib.parse.quote(make)))
    return sorted({x["Model_Name"] for x in d.get("Results", []) if x.get("Model_Name")})

def query(make, model, year=2026):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": year})
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1502"}), timeout=30) as r:
            return 200, json.load(r).get("results", []) or []
    except urllib.error.HTTPError as e:
        return e.code, []
    except Exception as e:
        print(f"QUERY {make}/{model}/{year} FAILED: {e}", flush=True)
        return "ERR", []

def in_2026(ds):
    try:
        dd, mm, yyyy = ds.split("/")
        return yyyy == "2026"
    except Exception:
        return False

EXTRA = {
    "acura": ["mdx type s", "integra type s", "zdx type s", "zdx a-spec"],
}
SUFFIXES = ["Hybrid", "Plug-In Hybrid", "Electric", "Recharge"]

out = {"brands": {}}
if os.path.exists(OUT):
    out = json.load(open(OUT))

for brand, makes in [("acura", ["acura"])]:
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
                                     "consequence": r.get("Consequence"), "remedy": r.get("Remedy"),
                                     "ota": r.get("overTheAirUpdate"), "found_via": f"{make}/{model}"}
            per_model[model] = sorted(set(kept))
            if kept:
                print(f"  {make}/{model}: {code} -> {sorted(set(kept))}", flush=True)
            time.sleep(0.4)
    out["brands"][brand] = {"queries": nq, "campaigns": campaigns, "per_model": per_model, "status_log": status_log}
    print(f"{brand}: {nq} queries, {len(campaigns)} distinct 2026 campaigns: {sorted(campaigns)}", flush=True)

json.dump(out, open(OUT, "w"), indent=1)
print(f"Wrote {OUT}", flush=True)
