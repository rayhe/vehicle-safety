#!/usr/bin/env python3
"""#1508 Jeep 2026-MY recall census (brand split of Stellantis #1479).
Corrected-vocabulary method per #1479/#1502: VPIC canonical 2026 list +
Hybrid / Plug-In Hybrid / Electric suffix variants + targeted trims, deduped
by campaign number. Keeps 26Vxxx campaigns with ReportReceivedDate in 2026.
Excluded analysis: query model years 2025/2024/2023 (plain names + 4xe
variants) for 2026-filed campaigns touching no 2026 Jeep.
"""
import json, time, urllib.request, urllib.parse, os

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
VPIC = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/{make}/modelyear/{year}?format=json"
OUT_RAW = "/home/hatch/workspace/vehicle-safety/drafts/1508-jeep-recall-census-raw.json"
OUT_SUM = "/home/hatch/workspace/vehicle-safety/drafts/1508-jeep-recall-census-campaigns.json"

def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1508"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.load(r)

def vpic_models(make, year):
    d = get_json(VPIC.format(make=urllib.parse.quote(make), year=year))
    return sorted({x["Model_Name"] for x in d.get("Results", []) if x.get("Model_Name")})

def query(make, model, year):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": year})
    try:
        return get_json(url).get("results", []) or []
    except urllib.error.HTTPError as e:
        if e.code in (400, 404):
            return []
        raise
    except Exception as e:
        print(f"QUERY {make}/{model}/{year} FAILED: {e}", flush=True)
        return []

def in_2026(ds):
    try:
        dd, mm, yyyy = ds.split("/")
        return yyyy == "2026"
    except Exception:
        return False

SUFFIXES = ["Hybrid", "Plug-In Hybrid", "Electric"]
EXTRA = ["wrangler 4xe", "grand cherokee 4xe", "cherokee hybrid",
         "grand cherokee l", "grand wagoneer l", "wagoneer s"]

models2026 = vpic_models("jeep", 2026)
print("Jeep VPIC 2026 (%d): %s" % (len(models2026), models2026), flush=True)

qset = []
for m in models2026:
    qset.append(m.lower())
    for s in SUFFIXES:
        qset.append(f"{m.lower()} {s.lower()}")
for e in EXTRA:
    qset.append(e.lower())
seen, qs = set(), []
for q in qset:
    if q not in seen:
        seen.add(q)
        qs.append(q)
print("Counted queries: %d" % len(qs), flush=True)

raw = {"counted": {}, "excluded": {}}
counted, per_model = {}, {}
n200 = 0
for q in qs:
    rows = query("jeep", q, 2026)
    raw["counted"][q] = rows
    kept = []
    for r in rows:
        nhtsa = r.get("NHTSACampaignNumber", "")
        if nhtsa.startswith("26V") and in_2026(r.get("ReportReceivedDate", "")):
            kept.append(r)
            if nhtsa not in counted:
                counted[nhtsa] = r
    if kept:
        per_model[q] = sorted({r["NHTSACampaignNumber"] for r in kept})
    n200 += 1 if rows else 0
    time.sleep(0.15)

print("Counted campaigns (%d): %s" % (len(counted), sorted(counted)), flush=True)
print("Per-model: %s" % json.dumps(per_model, indent=1), flush=True)

# Excluded: older model years, plain names + 4xe variants
excluded = {}
for year in (2025, 2024, 2023):
    for m in models2026:
        rows = query("jeep", m.lower(), year)
        raw.setdefault("excluded", {}).setdefault(str(year), {})[m.lower()] = rows
        for r in rows:
            nhtsa = r.get("NHTSACampaignNumber", "")
            if nhtsa.startswith("26V") and in_2026(r.get("ReportReceivedDate", "")) and nhtsa not in counted:
                excluded.setdefault(nhtsa, {"first_seen": f"{m.lower()}/{year}", "row": r})
        time.sleep(0.15)
    # 4xe variants for the two volume plug-ins
    for v in ("wrangler 4xe", "grand cherokee 4xe"):
        rows = query("jeep", v, year)
        raw["excluded"][str(year)][v] = rows
        for r in rows:
            nhtsa = r.get("NHTSACampaignNumber", "")
            if nhtsa.startswith("26V") and in_2026(r.get("ReportReceivedDate", "")) and nhtsa not in counted:
                excluded.setdefault(nhtsa, {"first_seen": f"{v}/{year}", "row": r})
        time.sleep(0.15)

print("Excluded 2026-filed campaigns touching only older Jeeps (%d): %s" % (len(excluded), sorted(excluded)), flush=True)
for n in sorted(excluded):
    r = excluded[n]["row"]
    print("  %s filed %s component=%s summary=%s" % (n, r.get("ReportReceivedDate"), r.get("Component"), (r.get("Summary") or "")[:120]), flush=True)

json.dump(raw, open(OUT_RAW, "w"), indent=1)
json.dump({"counted": {k: v for k, v in counted.items()},
           "per_model": per_model,
           "excluded": {k: v["row"] for k, v in excluded.items()},
           "models2026": models2026},
          open(OUT_SUM, "w"), indent=1)
print("Wrote", OUT_RAW, "and", OUT_SUM, flush=True)
