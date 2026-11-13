import json, time, urllib.request, urllib.parse
BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1491-porsche-recall-census-raw.json"
def query(make, model, year):
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": year})
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1491"}), timeout=20) as r:
            return 200, json.load(r).get("results", []) or []
    except urllib.error.HTTPError as e:
        return e.code, []
    except Exception as e:
        print("ERR", make, model, year, e); return "ERR", []
out = json.load(open(OUT))
b = out["brands"]["porsche"]
log = b.setdefault("pass2", {})
# MY2025 controls: same spellings should return 200 with real campaigns if vocabulary is right
controls = ["911","cayenne","cayenne e-hybrid","taycan","panamera","panamera e-hybrid","macan","macan electric","718 cayman","718 boxster"]
for m in controls:
    code, rows = query("porsche", m, 2025)
    camps = sorted({r.get("NHTSACampaignNumber","") for r in rows})
    log[f"MY2025/{m}"] = {"code": code, "campaigns": camps}
    print(f"MY2025 {m}: {code} {camps}", flush=True)
    time.sleep(0.05)
# MY2026 trim spellings
trims = ["911 carrera","911 carrera s","911 gt3","911 turbo","911 turbo s","911 gt3 rs","cayenne s","cayenne e-hybrid","cayenne turbo","taycan 4s","taycan turbo","taycan gts","panamera 4","panamera e-hybrid","macan s","macan gts","macan 4 electric","718 cayman","718 boxster","911 carrera gts","911 targa","911 carrera t"]
kept26 = {}
for m in trims:
    code, rows = query("porsche", m, 2026)
    c26 = sorted({r.get("NHTSACampaignNumber","") for r in rows if r.get("NHTSACampaignNumber","").startswith("26V") and r.get("ReportReceivedDate","").endswith("/2026")})
    allc = sorted({r.get("NHTSACampaignNumber","") for r in rows})
    log[f"MY2026/{m}"] = {"code": code, "campaigns": allc}
    print(f"MY2026 {m}: {code} all={allc} 26V2026={c26}", flush=True)
    for c in c26: kept26[c] = m
    time.sleep(0.05)
print("KEPT26:", kept26)
json.dump(out, open(OUT, "w"), indent=1)
