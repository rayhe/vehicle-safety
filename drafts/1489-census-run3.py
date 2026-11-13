#!/usr/bin/env python3
"""#1489 Audi census, pass 3: remaining e-tron/Sportback spellings + MY2025 controls.
Merges into the pass-1/2 raw file. Controls prove whether a 400 on a 2026
query means 'empty result' (same spelling returns 200 for MY2025 with a
real campaign) or 'broken vocabulary' (400s for every model year).
"""
import json, time, urllib.request, urllib.parse, os

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1489-audi-recall-census-raw.json"

TRIMS3 = [
    "a6 sportback e-tron", "s6 sportback e-tron", "q6 sportback e-tron",
    "a6 e-tron", "q4 40 e-tron", "q4 50 e-tron",
    "a5 sportback", "s5 sportback", "rs 5 sportback",
    "a7", "a7 sportback", "s7", "rs 7 sportback",
    "q8 e-tron", "sq8 e-tron", "q8 sportback e-tron",
    "a4", "a4 quattro", "s4",
    "q5 sportback", "sq5 sportback",
    "q4 e-tron quattro", "q6 e-tron quattro",
    "rs 3 sedan", "rs 3 sportback",
]
# (model, modelYear) controls: spellings that should return real campaigns for MY2025
CONTROLS = [
    ("q5", 2025),        # expect 26V266 (2025 Q5 seat belts)
    ("a5", 2025),        # expect 25V899 (2025 A5 rear retractors)
    ("q4 e-tron", 2025), # expect 26V698 (2024-2025 Q4 battery fire)
    ("q3", 2025),        # expect 200 empty or a 2025 campaign
    ("a6", 2025),
    ("q7", 2025),
    ("e-tron gt", 2025),
    ("a3", 2025),
]

def query(make, model, year=2026):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": year})
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1489"}), timeout=20) as r:
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

out = json.load(open(OUT))
brand = out["brands"]["audi"]
campaigns, per_model, status_log = brand["campaigns"], brand["per_model"], brand["status_log"]

nq = 0
for model in TRIMS3:
    code, rows = query("audi", model)
    nq += 1
    status_log[f"trim3/{model}"] = code
    kept = []
    for r in rows:
        cn = r.get("NHTSACampaignNumber", "")
        if not cn.startswith("26V") or not in_2026(r.get("ReportReceivedDate", "")):
            continue
        kept.append(cn)
        if cn not in campaigns:
            campaigns[cn] = {"campaign": cn, "date": r.get("ReportReceivedDate"),
                             "component": r.get("Component"), "summary": r.get("Summary"),
                             "found_via": f"audi/{model}"}
    if kept:
        per_model[f"trim3/{model}"] = sorted(set(kept))
    time.sleep(0.05)

print("== controls (MY2025) ==")
for model, year in CONTROLS:
    code, rows = query("audi", model, year)
    nq += 1
    status_log[f"control/{model}/{year}"] = code
    cns = sorted({r.get("NHTSACampaignNumber") for r in rows})
    print(f"  {model} MY{year}: {code} {cns}")
    time.sleep(0.05)

brand["campaigns"], brand["per_model"], brand["status_log"] = campaigns, per_model, status_log
brand["queries"] = brand.get("queries", 0) + nq
brand["done"] = True
out["brands"]["audi"] = brand
json.dump(out, open(OUT, "w"), indent=1)
print(f"== audi pass 3: {len(campaigns)} campaigns total, {nq} queries ==")
for cn in sorted(campaigns):
    c = campaigns[cn]
    print(f"  {cn} {c['date']} [{c['component']}] via {c['found_via']}")
codes = {}
for v in status_log.values():
    codes[v] = codes.get(v, 0) + 1
print(f"  status codes: {codes}")
