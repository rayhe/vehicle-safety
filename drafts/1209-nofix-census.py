#!/usr/bin/env python3
"""#1209 census: 2026 NHTSA campaigns (26Vxxx) with no remedy ready at filing.
Replicates the #1208 census method across high-volume model x MY combos."""
import json, re, time, urllib.request, urllib.parse

QUERIES = [
    # (make, model, [years])
    ("Ford","F-150",[2024,2025,2026]), ("Ford","F-250",[2024,2025,2026]),
    ("Ford","Explorer",[2024,2025,2026]), ("Ford","Escape",[2024,2025,2026]),
    ("Ford","Bronco",[2024,2025,2026]), ("Ford","Mustang",[2024,2025,2026]),
    ("Ford","Transit",[2024,2025,2026]), ("Ford","Ranger",[2024,2025,2026]),
    ("Chevrolet","Silverado 1500",[2024,2025,2026]), ("Chevrolet","Silverado 2500",[2024,2025,2026]),
    ("Chevrolet","Equinox",[2024,2025,2026]), ("Chevrolet","Tahoe",[2024,2025,2026]),
    ("Chevrolet","Traverse",[2024,2025,2026]), ("Chevrolet","Colorado",[2024,2025,2026]),
    ("GMC","Sierra 1500",[2024,2025,2026]), ("GMC","Sierra 2500",[2024,2025,2026]),
    ("Ram","1500",[2024,2025,2026]), ("Ram","2500",[2024,2025,2026]),
    ("Ram","ProMaster",[2024,2025,2026]),
    ("Toyota","RAV4",[2024,2025,2026]), ("Toyota","Camry",[2024,2025,2026]),
    ("Toyota","Corolla",[2024,2025,2026]), ("Toyota","Tacoma",[2024,2025,2026]),
    ("Toyota","Highlander",[2024,2025,2026]), ("Toyota","Tundra",[2024,2025,2026]),
    ("Toyota","Sienna",[2024,2025,2026]), ("Toyota","4Runner",[2024,2025,2026]),
    ("Honda","CR-V",[2024,2025,2026]), ("Honda","Civic",[2024,2025,2026]),
    ("Honda","Accord",[2024,2025,2026]), ("Honda","Pilot",[2024,2025,2026]),
    ("Honda","Odyssey",[2024,2025,2026]),
    ("Nissan","Rogue",[2024,2025,2026]), ("Nissan","Altima",[2024,2025,2026]),
    ("Nissan","Sentra",[2024,2025,2026]), ("Nissan","Frontier",[2024,2025,2026]),
    ("Hyundai","Tucson",[2024,2025,2026]), ("Hyundai","Santa Fe",[2024,2025,2026]),
    ("Hyundai","Elantra",[2024,2025,2026]), ("Hyundai","Sonata",[2024,2025,2026]),
    ("Hyundai","Palisade",[2024,2025,2026]),
    ("Genesis","G80",[2024,2025,2026]),
    ("Kia","Sportage",[2024,2025,2026]), ("Kia","Sorento",[2024,2025,2026]),
    ("Kia","Telluride",[2024,2025,2026]), ("Kia","Seltos",[2024,2025,2026]),
    ("Kia","Carnival",[2024,2025,2026]),
    ("Subaru","Outback",[2024,2025,2026]), ("Subaru","Forester",[2024,2025,2026]),
    ("Subaru","Crosstrek",[2024,2025,2026]),
    ("Mazda","CX-5",[2024,2025,2026]), ("Mazda","CX-90",[2024,2025,2026]),
    ("Volkswagen","Tiguan",[2024,2025,2026]), ("Volkswagen","Atlas",[2024,2025,2026]),
    ("Jeep","Wrangler",[2024,2025,2026]), ("Jeep","Grand Cherokee",[2024,2025,2026]),
    ("Chrysler","Pacifica",[2024,2025,2026]),
    ("Tesla","Model Y",[2024,2025,2026]), ("Tesla","Model 3",[2024,2025,2026]),
    ("Tesla","Cybertruck",[2024,2025,2026]),
]

def get(make, model, year):
    q = urllib.parse.urlencode({"make":make,"model":model,"modelYear":year})
    url = f"https://api.nhtsa.gov/recalls/recallsByVehicle?{q}"
    req = urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r).get("results", [])

camps = {}
for make, model, years in QUERIES:
    for y in years:
        try:
            for rec in get(make, model, y):
                c = rec.get("NHTSACampaignNumber") or ""
                if re.match(r"26V\d{3}0{0,3}$", c.replace(" ","")) or c.startswith("26V"):
                    key = c[:6]
                    if key.startswith("26V") and key not in camps:
                        camps[key] = rec
        except Exception as e:
            print("ERR", make, model, y, e)
    time.sleep(0.15)

print("unique 2026 campaigns found:", len(camps))

nofix_pat = re.compile(r"under development|not (yet|currently) available|remedy.*(developing|pending|forthcoming)|being developed|no remedy", re.I)
nofix, parkoutside, donotdrive, ota = [], [], [], []
for k, r in sorted(camps.items()):
    rem = (r.get("Remedy") or "")
    if nofix_pat.search(rem):
        nofix.append((k, r.get("Manufacturer"), (r.get("Summary") or "")[:110], rem[:180]))
    if r.get("parkOutSide"): parkoutside.append(k)
    if r.get("parkIt"): donotdrive.append(k)
    if r.get("overTheAirUpdate"): ota.append(k)

print("NO-FIX campaigns:", len(nofix))
for k, mfr, summ, rem in nofix:
    print(" -", k, "|", mfr, "|", summ.replace("\n"," "))
    print("    remedy:", rem.replace("\n"," ")[:220])
print("parkOutSide:", parkoutside)
print("doNotDrive(parkIt):", donotdrive)
print("OTA:", ota)

with open("/tmp/1209-census.json","w") as f:
    json.dump({k: {"mfr": r.get("Manufacturer"), "comp": r.get("Component"),
                   "recv": r.get("ReportReceivedDate"), "remedy": r.get("Remedy"),
                   "parkOutSide": r.get("parkOutSide"), "parkIt": r.get("parkIt"),
                   "ota": r.get("overTheAirUpdate")} for k,r in camps.items()}, f, indent=1)
