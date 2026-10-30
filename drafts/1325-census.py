#!/usr/bin/env python3
"""#1325 census: all 2026 (26Vxxx) NHTSA recall campaigns across high-volume models.
Outputs: unique campaigns, fire-related subset, do-not-drive/park-outside subset,
per-model campaign counts. Run: python3 drafts/1325-census.py"""
import json, time, urllib.request, urllib.parse

MODELS = [
    ("Ford","F-150",2026),("Ford","F-250",2026),("Ford","Explorer",2026),("Ford","Escape",2026),
    ("Ford","Bronco",2026),("Ford","Maverick",2026),("Ford","Mustang",2026),("Ford","Edge",2025),
    ("Chevrolet","Silverado 1500",2026),("Chevrolet","Silverado",2026),("Chevrolet","Equinox",2026),
    ("Chevrolet","Tahoe",2026),("Chevrolet","Traverse",2026),("Chevrolet","Colorado",2026),
    ("Chevrolet","Malibu",2025),("Chevrolet","Trailblazer",2026),
    ("GMC","Sierra 1500",2026),("GMC","Sierra",2026),("GMC","Yukon",2026),("GMC","Acadia",2026),
    ("Ram","1500",2026),("Ram","2500",2026),("Ram","ProMaster",2026),
    ("Toyota","RAV4",2026),("Toyota","Camry",2026),("Toyota","Corolla",2026),("Toyota","Tacoma",2026),
    ("Toyota","Highlander",2026),("Toyota","4Runner",2026),("Toyota","Sienna",2026),("Toyota","Tundra",2026),
    ("Honda","Civic",2026),("Honda","Accord",2026),("Honda","CR-V",2026),("Honda","Pilot",2026),
    ("Honda","Odyssey",2026),("Honda","HR-V",2026),
    ("Nissan","Rogue",2026),("Nissan","Altima",2026),("Nissan","Sentra",2026),("Nissan","Pathfinder",2026),
    ("Nissan","Frontier",2026),
    ("Hyundai","Tucson",2026),("Hyundai","Elantra",2026),("Hyundai","Santa Fe",2026),("Hyundai","Palisade",2026),
    ("Hyundai","Sonata",2026),("Hyundai","Kona",2026),
    ("Kia","Sportage",2026),("Kia","Sorento",2026),("Kia","Telluride",2026),("Kia","K5",2026),("Kia","Forte",2025),
    ("Subaru","Forester",2026),("Subaru","Outback",2026),("Subaru","Crosstrek",2026),
    ("Jeep","Wrangler",2026),("Jeep","Grand Cherokee",2026),("Jeep","Compass",2026),
    ("Mazda","CX-5",2026),("Mazda","CX-50",2026),("Mazda","Mazda3",2026),
    ("Volkswagen","Tiguan",2026),("Volkswagen","Atlas",2026),("Volkswagen","Jetta",2026),
    ("Tesla","Model Y",2026),("Tesla","Model 3",2026),("Tesla","Cybertruck",2026),
    ("Chrysler","Pacifica",2026),("Dodge","Durango",2026),
    ("Lexus","RX",2026),("Lexus","NX",2026),
    ("Audi","Q5",2026),("Audi","Q4 E-Tron",2025),("BMW","X3",2026),("BMW","X5",2026),
]

def fetch(make, model, year):
    q = urllib.parse.urlencode({"make": make, "model": model, "modelYear": year})
    url = "https://api.nhtsa.gov/recalls/recallsByVehicle?" + q
    req = urllib.request.Request(url, headers={"User-Agent": "crashreport-census/1.0"})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except Exception as e:
            if attempt == 2:
                print("FAIL", make, model, year, repr(e)[:100])
                return {"Count": 0, "results": []}
            time.sleep(2)

camps = {}   # campaign number -> record
per_model = {}
n_queries = 0
for make, model, year in MODELS:
    d = fetch(make, model, year)
    n_queries += 1
    n = 0
    for r in d.get("results", []):
        cn = (r.get("NHTSACampaignNumber") or "").strip()
        if not cn.startswith("26V"):
            continue
        n += 1
        if cn not in camps:
            camps[cn] = r
    per_model[f"{year} {make} {model}"] = n
    time.sleep(0.4)
    if n_queries % 20 == 0:
        print(f"...{n_queries}/{len(MODELS)} queries, {len(camps)} unique 26V campaigns", flush=True)

print(f"QUERIES: {n_queries}, UNIQUE 26V CAMPAIGNS: {len(camps)}")

def text(r):
    return ((r.get("Component") or "") + " " + (r.get("Summary") or "")).lower()

fire, dnd, parkout = [], [], []
for cn, r in camps.items():
    t = text(r)
    if "fire" in t:
        fire.append(cn)
    if "do not drive" in t or "stop driving" in t or "do not operate" in t:
        dnd.append(cn)
    if "park outside" in t or "park outdoors" in t or "park away" in t:
        parkout.append(cn)

print(f"FIRE-RELATED: {len(fire)}")
for cn in sorted(fire):
    r = camps[cn]
    print(" ", cn, "|", r.get("Make"), "|", (r.get("Component") or "")[:60], "|", (r.get("Summary") or "")[:100].replace("\n"," "))
print(f"DO-NOT-DRIVE: {len(dnd)}", sorted(dnd))
print(f"PARK-OUTSIDE: {len(parkout)}", sorted(parkout))

ranked = sorted(per_model.items(), key=lambda x: -x[1])[:15]
print("TOP MODELS BY 26V CAMPAIGN COUNT:")
for m, c in ranked:
    print(f"  {c:3d}  {m}")

json.dump({"campaigns": camps, "per_model": per_model,
           "fire": sorted(fire), "dnd": sorted(dnd), "parkout": sorted(parkout)},
          open("drafts/1325-census-results.json", "w"), indent=1)
print("saved drafts/1325-census-results.json")
