#!/usr/bin/env python3
"""#1506 extras pass: close the vocabulary gaps the main sweep could not.
- Mercedes EXTRA spellings (per #1488: c-class, e-class, ...).
- Silverado/Sierra 1500/2500/3500/EV splits (per #1500/#1505).
- BMW 228i / M235i / Z4 spellings + Z4 MY2025 (26V064, 26V438 per #1483).
- Nissan bare "kicks" (26V331 per #1480).
Merges into drafts/1506-park-outside-census-raw.json under brands[<make>],
keeping a separate extras log per make. Same 26V + ReportReceivedDate-2026 rule.
"""
import json, time, urllib.request, urllib.parse
from concurrent.futures import ThreadPoolExecutor

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1506-park-outside-census-raw.json"

def query(make, model, year=2026):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": year})
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1506-extras"}), timeout=30) as r:
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

JOBS = []  # (make, model, year)
def add(make, models, year=2026, suffixes=True):
    for m in models:
        JOBS.append((make, m, year))
        if suffixes:
            for s in SUFFIXES:
                JOBS.append((make, f"{m} {s}", year))

# Mercedes EXTRA spellings per #1488
add("mercedes-benz", ["c-class", "e-class", "s-class", "gla", "glb", "glc",
                      "gle", "gls", "eqs", "eqe", "g-class", "amg gt",
                      "cle", "cla", "eqa", "eqb"])
# Silverado / Sierra splits per #1500 / #1505
add("chevrolet", ["silverado 1500", "silverado 2500", "silverado 3500", "silverado ev"], suffixes=False)
add("gmc", ["sierra 1500", "sierra 2500", "sierra 3500", "sierra ev"], suffixes=False)
# BMW 228 / Z4 spellings per #1483 (+ Z4 MY2025 for 26V438)
add("bmw", ["228i", "228i gran coupe", "m235i", "z4"], suffixes=False)
JOBS.append(("bmw", "z4", 2025))
JOBS.append(("bmw", "z4", 2024))
# Nissan bare kicks per #1480
add("nissan", ["kicks"], suffixes=False)

out = json.load(open(OUT))
seen = set()
def run_one(job):
    make, model, year = job
    code, rows = query(make, model, year)
    kept, recs = [], {}
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
                    "found_via": f"{make}/{model}/{year}-extras"}
    return make, model, year, code, sorted(set(kept)), recs

extras_log = out.setdefault("extras", {})
with ThreadPoolExecutor(max_workers=8) as ex:
    for make, model, year, code, kept, recs in ex.map(run_one, JOBS):
        key = f"{make}/{model}/{year}"
        extras_log[key] = {"code": code, "campaigns": kept}
        b = out["brands"].setdefault(make, {"queries": 0, "campaigns": {}, "per_model": {}, "status_log": {}})
        b["queries"] = b.get("queries", 0) + 1
        b["status_log"][key] = code
        b["per_model"][model] = kept
        for cn, rec in recs.items():
            if cn not in b["campaigns"]:
                b["campaigns"][cn] = rec
                print(f"  NEW {make}: {cn} parkOutSide={rec.get('parkOutSide')} parkIt={rec.get('parkIt')} via {model}/{year}", flush=True)
        if kept and any(recs[c].get("parkOutSide") or recs[c].get("parkIt") for c in kept):
            print(f"  FLAG {key}: {kept}", flush=True)

json.dump(out, open(OUT, "w"), indent=1)
print(f"Extras done: {len(JOBS)} queries", flush=True)
for make in ["mercedes-benz", "chevrolet", "gmc", "bmw", "nissan"]:
    b = out["brands"][make]
    fl = [(c, x.get("parkOutSide"), x.get("parkIt")) for c, x in b["campaigns"].items() if x.get("parkOutSide") or x.get("parkIt")]
    print(f"{make}: {len(b['campaigns'])} campaigns total, flagged={fl}", flush=True)
