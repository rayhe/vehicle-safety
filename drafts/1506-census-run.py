#!/usr/bin/env python3
"""#1506 Park-outside / do-not-drive census, 2026 model year, all brands.
Corrected-vocabulary method per #1502: VPIC canonical 2026 model lists +
Hybrid / Plug-In Hybrid / Electric suffix variants + targeted trims,
deduped by campaign number. Keeps 26Vxxx campaigns with ReportReceivedDate
in 2026. Records parkOutSide and parkIt flags for every kept campaign.
Records HTTP status per query so a zero is never mistaken for a finding.
"""
import json, time, urllib.request, urllib.parse, sys, os

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
VPIC = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/{make}/modelYear/2026?format=json"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1506-park-outside-census-raw.json"

MAKES = ["acura", "alfa romeo", "audi", "bmw", "buick", "cadillac",
         "chevrolet", "chrysler", "dodge", "fiat", "ford", "genesis",
         "gmc", "honda", "hyundai", "infiniti", "jaguar", "jeep",
         "kia", "land rover", "lexus", "lincoln", "lucid", "maserati",
         "mazda", "mercedes-benz", "mini", "mitsubishi", "nissan",
         "polestar", "porsche", "ram", "rivian", "subaru", "tesla",
         "toyota", "volkswagen", "volvo"]

def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1506"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def vpic_models(make):
    try:
        d = get_json(VPIC.format(make=urllib.parse.quote(make)))
        return sorted({x["Model_Name"] for x in d.get("Results", []) if x.get("Model_Name")})
    except Exception as e:
        print(f"VPIC {make} FAILED: {e}", flush=True)
        return []

def query(make, model, year=2026):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": year})
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1506"}), timeout=30) as r:
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

SUFFIXES = ["Hybrid", "Plug-In Hybrid", "Electric", "Recharge"]

out = {"brands": {}}
if os.path.exists(OUT):
    out = json.load(open(OUT))

total_q = 0
for make in MAKES:
    if make in out.get("brands", {}):
        print(f"{make}: already in raw file, skipping", flush=True)
        continue
    campaigns, per_model, status_log = {}, {}, {}
    nq = 0
    CURATED = {
        "ram": ["1500", "2500", "3500", "4500", "5500", "ProMaster 1500", "ProMaster 2500", "ProMaster 3500"],
        "mini": ["Cooper", "Cooper S", "Countryman"],
    }
    if make in CURATED:
        models = CURATED[make]
        print(f"{make}: CURATED 2026 ({len(models)}): {models} (VPIC make name polluted with trailer/motorcycle makers)", flush=True)
    else:
        models = vpic_models(make)
        print(f"{make}: VPIC 2026 ({len(models)}): {models}", flush=True)
    qset = []
    for m in models:
        qset.append(m.lower())
        for s in SUFFIXES:
            qset.append(f"{m.lower()} {s.lower()}")
    seen, qs = set(), []
    for q in qset:
        if q not in seen:
            seen.add(q); qs.append(q)
    from concurrent.futures import ThreadPoolExecutor
    def run_one(model):
        code, rows = query(make, model)
        kept = []
        recs = {}
        for r in rows:
            cn = r.get("NHTSACampaignNumber", "")
            if not cn.startswith("26V") or not in_2026(r.get("ReportReceivedDate", "")):
                continue
            kept.append(cn)
            recs[cn] = {"campaign": cn, "date": r.get("ReportReceivedDate"),
                        "component": r.get("Component"), "summary": r.get("Summary"),
                        "consequence": r.get("Consequence"), "remedy": r.get("Remedy"),
                        "ota": r.get("overTheAirUpdate"),
                        "parkOutSide": r.get("parkOutSide"),
                        "parkIt": r.get("parkIt"),
                        "found_via": f"{make}/{model}"}
        return model, code, sorted(set(kept)), recs
    with ThreadPoolExecutor(max_workers=8) as ex:
        for model, code, kept, recs in ex.map(run_one, qs):
            nq += 1
            status_log[f"{make}/{model}"] = code
            for cn, rec in recs.items():
                if cn not in campaigns:
                    campaigns[cn] = rec
            per_model[model] = kept
            if kept and (any(campaigns[c].get("parkOutSide") for c in kept) or any(campaigns[c].get("parkIt") for c in kept)):
                print(f"  FLAG {make}/{model}: {code} -> {kept}", flush=True)
    out["brands"][make] = {"queries": nq, "campaigns": campaigns, "per_model": per_model, "status_log": status_log}
    total_q += nq
    flagged = [c for c, v in campaigns.items() if v.get("parkOutSide") or v.get("parkIt")]
    print(f"{make}: {nq} queries, {len(campaigns)} distinct 2026 campaigns, flagged: {flagged}", flush=True)
    json.dump(out, open(OUT, "w"), indent=1)

json.dump(out, open(OUT, "w"), indent=1)
print(f"Wrote {OUT}; total queries this run: {total_q}", flush=True)
