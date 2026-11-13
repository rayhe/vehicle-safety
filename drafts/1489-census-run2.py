#!/usr/bin/env python3
"""#1489 Audi 2026-MY recall census, pass 2: trim-level queries.
Pass 1 (VPIC class names) 400'd on 95/107 queries and found only 26V209
(Q3 sunroof). The recalls API keys on NHTSA-filed trim spellings, so this
pass queries the full 2026 Audi trim vocabulary and MERGES into the pass-1
raw file (does not overwrite it). Keeps 26Vxxx with ReportReceivedDate in 2026.
"""
import json, time, urllib.request, urllib.parse, os

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1489-audi-recall-census-raw.json"

TRIMS = [
    # A3 / S3 / RS 3
    "a3", "a3 quattro", "s3", "rs 3",
    # A5 (replaces A4 for 2026) / S5 / RS 5
    "a5", "a5 quattro", "a5 sportback", "s5", "s5 sportback", "rs 5",
    # A6 / A6 allroad
    "a6", "a6 quattro", "a6 allroad", "a6 allroad quattro", "s6",
    # A8 L / S8
    "a8 l", "a8", "s8",
    # Q3
    "q3", "q3 quattro",
    # Q4 e-tron
    "q4 e-tron", "q4 45 e-tron", "q4 55 e-tron", "q4 sportback e-tron",
    # Q5 / SQ5
    "q5", "q5 quattro", "q5 sportback", "sq5", "sq5 sportback",
    # Q6 e-tron / SQ6
    "q6 e-tron", "q6 55 e-tron", "sq6 e-tron",
    # Q7 / SQ7
    "q7", "q7 quattro", "sq7",
    # Q8 / SQ8 / RS Q8
    "q8", "q8 quattro", "sq8", "rs q8",
    # e-tron GT family
    "e-tron gt", "rs e-tron gt", "s e-tron gt",
    # RS wagons/sedans
    "rs 6 avant", "rs 7",
    # class-name fallbacks
    "a3 sedan", "a5 sedan", "q3 suv", "q5 suv", "q7 suv", "q8 suv",
]

def query(make, model):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": 2026})
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1489"}), timeout=20) as r:
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

out = json.load(open(OUT)) if os.path.exists(OUT) else {"brands": {}}
brand = out["brands"].get("audi", {"campaigns": {}, "per_model": {}, "status_log": {}})
campaigns, per_model, status_log = brand["campaigns"], brand["per_model"], brand["status_log"]

nq = 0
for model in TRIMS:
    code, rows = query("audi", model)
    nq += 1
    status_log[f"trim/{model}"] = code
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
        per_model[f"trim/{model}"] = sorted(set(kept))
    time.sleep(0.05)

brand["campaigns"], brand["per_model"], brand["status_log"] = campaigns, per_model, status_log
brand["queries"] = brand.get("queries", 0) + nq
brand["done"] = True
out["brands"]["audi"] = brand
json.dump(out, open(OUT, "w"), indent=1)
print(f"== audi trim pass: {len(campaigns)} campaigns total, {nq} trim queries ==")
for cn in sorted(campaigns):
    c = campaigns[cn]
    print(f"  {cn} {c['date']} [{c['component']}] via {c['found_via']}")
for m, cns in sorted(per_model.items()):
    print(f"    {m}: {len(cns)} {cns}")
codes = {}
for v in status_log.values():
    codes[v] = codes.get(v, 0) + 1
print(f"  status codes: {codes}")
