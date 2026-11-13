#!/usr/bin/env python3
"""#1488 Mercedes-Benz 2026-MY recall census, pass 2: trim-level queries.
The VPIC class-name pass (#1488 pass 1) 400'd on 92/94 queries while web
evidence proves real 2026-MY campaigns exist (26V281, 26V481, 26V172,
26V199, 26V353). The recalls API keys on NHTSA-filed trim spellings
(e.g. 'glc 300', 'gle 350 4matic'), not VPIC class names. This pass queries
the full 2026 trim vocabulary, dedupes by campaign number, keeps 26Vxxx
with ReportReceivedDate in 2026.
"""
import json, time, urllib.request, urllib.parse

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1488-mercedes-recall-census-raw.json"

TRIMS = [
    # C-Class
    "c 300", "c 300 4matic", "amg c 43", "amg c 63 s e performance",
    # E-Class
    "e 350", "e 350 4matic", "e 450", "e 450 4matic", "e 450 all-terrain",
    "amg e 53", "amg e 53 hybrid",
    # S-Class / Maybach
    "s 500", "s 500 4matic", "s 580", "s 580 4matic", "s 580e",
    "maybach s 580", "maybach s 580 4matic", "maybach s 680", "maybach s 680 4matic",
    "amg s 63", "amg s 63 e performance",
    # CLA / CLE
    "cla 250", "cla 250 4matic", "amg cla 35", "amg cla 45",
    "cle 300", "cle 300 4matic", "cle 300 cabriolet", "cle 450", "cle 450 4matic",
    "cle 450 cabriolet", "amg cle 53", "amg cle 53 cabriolet",
    # AMG GT / SL
    "amg gt 55", "amg gt 63", "amg gt 63 s e performance", "amg gt 43",
    "sl 43", "sl 55", "sl 63", "amg sl 43", "amg sl 55", "amg sl 63",
    # GLA / GLB
    "gla 250", "gla 250 4matic", "amg gla 35",
    "glb 250", "glb 250 4matic", "amg glb 35",
    # GLC
    "glc 300", "glc 300 4matic", "glc 300 coupe", "glc 300 4matic coupe",
    "glc 350e", "glc 350e 4matic", "amg glc 43", "amg glc 63", "amg glc 63 s e performance",
    # GLE
    "gle 350", "gle 350 4matic", "gle 450", "gle 450 4matic", "gle 450e",
    "gle 450e 4matic", "gle 580", "gle 580 4matic", "gle 350 coupe", "gle 450 coupe",
    "amg gle 53", "amg gle 63", "amg gle 63 s", "amg gle 63 s coupe",
    # GLS
    "gls 450", "gls 450 4matic", "gls 580", "gls 580 4matic",
    "maybach gls 600", "maybach gls 600 4matic", "amg gls 63", "amg gls 63 4matic",
    # G-Class
    "g 550", "g 580", "amg g 63", "g 63",
    # EQE / EQS
    "eqe 350", "eqe 350 4matic", "eqe 500", "eqe 500 4matic", "amg eqe",
    "eqe 350 suv", "eqe 500 suv", "amg eqe suv",
    "eqs 450", "eqs 450 4matic", "eqs 580", "eqs 580 4matic", "amg eqs",
    "eqs 450 suv", "eqs 580 suv", "amg eqs suv",
    "eqa 250", "eqb 250", "eqb 300", "eqb 350",
    # Vans / buses
    "sprinter 2500", "sprinter 3500", "sprinter 4500", "sprinter",
    "esprinter", "metris",
    "tourrider business", "tourrider premium",
    # class names as fallback
    "c-class", "e-class", "s-class", "gla-class", "glb-class", "glc-class",
    "gle-class", "gls-class", "g-class", "cla-class", "cle", "amg gt",
    "eqe-class sedan", "eqe-class suv", "eqs-class sedan", "eqs-class suv",
    "sl-class",
]

def query(make, model):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": 2026})
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1488"}), timeout=20) as r:
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

campaigns, per_model, status_log = {}, {}, {}
nq = 0
for model in TRIMS:
    code, rows = query("mercedes-benz", model)
    nq += 1
    status_log[model] = code
    kept = []
    for r in rows:
        cn = r.get("NHTSACampaignNumber", "")
        if not cn.startswith("26V") or not in_2026(r.get("ReportReceivedDate", "")):
            continue
        kept.append(cn)
        if cn not in campaigns:
            campaigns[cn] = {"campaign": cn, "date": r.get("ReportReceivedDate"),
                             "component": r.get("Component"), "summary": r.get("Summary"),
                             "found_via": f"mercedes-benz/{model}"}
    if kept:
        per_model[model] = sorted(set(kept))
    time.sleep(0.05)

out = {"brands": {"mercedes-benz": {"campaigns": campaigns, "count": len(campaigns),
       "per_model": per_model, "queries": nq, "done": True, "status_log": status_log}}}
json.dump(out, open(OUT, "w"), indent=1)
print(f"== mercedes-benz trim pass: {len(campaigns)} campaigns, {nq} queries ==")
for cn in sorted(campaigns):
    c = campaigns[cn]
    print(f"  {cn} {c['date']} [{c['component']}] via {c['found_via']}")
for m, cns in sorted(per_model.items()):
    print(f"    {m}: {len(cns)} {cns}")
codes = {}
for v in status_log.values():
    codes[v] = codes.get(v, 0) + 1
print(f"  status codes: {codes}")
