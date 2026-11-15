#!/usr/bin/env python3
"""#1510 Ram 2026-MY recall census (brand split of Stellantis #1479).
Corrected-vocabulary method per #1479/#1502/#1508: VPIC canonical 2026 list
(filtered to real Ram light vehicles; VPIC 'ram' is polluted with trailer
manufacturers) + Hybrid / Plug-In Hybrid / Electric suffix variants +
targeted trims, deduped by campaign number. Keeps 26Vxxx campaigns with
ReportReceivedDate in 2026. Excluded analysis: query model years
2025/2024/2023 (plain names + REV/Ramcharger/EV variants) for 2026-filed
campaigns touching no 2026 Ram.
"""
import json, time, urllib.request, urllib.parse

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
OUT_RAW = "/home/hatch/workspace/vehicle-safety/drafts/1510-ram-recall-census-raw.json"
OUT_SUM = "/home/hatch/workspace/vehicle-safety/drafts/1510-ram-recall-census-campaigns.json"

def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1510"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.load(r)

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

# Real Ram light-vehicle models in VPIC 2026 (the other 84 names are trailer
# manufacturers, frame shops, and other junk sharing the 'ram' make).
MODELS = ["1500", "2500", "3500", "4500", "5500",
          "promaster 1500", "promaster 2500", "promaster 3500"]
SUFFIXES = ["hybrid", "plug-in hybrid", "electric"]
EXTRA = ["1500 rev", "1500 ramcharger", "promaster ev",
         "1500 classic", "promaster city"]

qset = []
for m in MODELS:
    qset.append(m)
    for s in SUFFIXES:
        qset.append(f"{m} {s}")
for e in EXTRA:
    qset.append(e)
seen, qs = set(), []
for q in qset:
    if q not in seen:
        seen.add(q)
        qs.append(q)
print("Counted queries: %d" % len(qs), flush=True)

raw = {"counted": {}, "excluded": {}}
counted, per_model = {}, {}
for q in qs:
    rows = query("ram", q, 2026)
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
    time.sleep(0.15)

print("Counted campaigns (%d): %s" % (len(counted), sorted(counted)), flush=True)
print("Per-model: %s" % json.dumps(per_model, indent=1), flush=True)
for n in sorted(counted):
    r = counted[n]
    print("  %s filed %s component=%s summary=%s" % (n, r.get("ReportReceivedDate"), r.get("Component"), (r.get("Summary") or "")[:140]), flush=True)

# Excluded: older model years, plain names + REV/Ramcharger/EV variants
excluded = {}
EXCL_VARIANTS = ["1500 rev", "1500 ramcharger", "promaster ev"]
for year in (2025, 2024, 2023):
    for m in MODELS:
        rows = query("ram", m, year)
        raw.setdefault("excluded", {}).setdefault(str(year), {})[m] = rows
        for r in rows:
            nhtsa = r.get("NHTSACampaignNumber", "")
            if nhtsa.startswith("26V") and in_2026(r.get("ReportReceivedDate", "")) and nhtsa not in counted:
                excluded.setdefault(nhtsa, {"first_seen": f"{m}/{year}", "row": r})
        time.sleep(0.15)
    for v in EXCL_VARIANTS:
        rows = query("ram", v, year)
        raw["excluded"][str(year)][v] = rows
        for r in rows:
            nhtsa = r.get("NHTSACampaignNumber", "")
            if nhtsa.startswith("26V") and in_2026(r.get("ReportReceivedDate", "")) and nhtsa not in counted:
                excluded.setdefault(nhtsa, {"first_seen": f"{v}/{year}", "row": r})
        time.sleep(0.15)

print("Excluded 2026-filed campaigns touching only older Rams (%d): %s" % (len(excluded), sorted(excluded)), flush=True)
for n in sorted(excluded):
    r = excluded[n]["row"]
    print("  %s filed %s component=%s summary=%s" % (n, r.get("ReportReceivedDate"), r.get("Component"), (r.get("Summary") or "")[:140]), flush=True)

json.dump(raw, open(OUT_RAW, "w"), indent=1)
json.dump({"counted": counted,
           "per_model": per_model,
           "excluded": {k: v["row"] for k, v in excluded.items()},
           "models2026": MODELS},
          open(OUT_SUM, "w"), indent=1)
print("Wrote", OUT_RAW, "and", OUT_SUM, flush=True)
