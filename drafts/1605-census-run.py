#!/usr/bin/env python3
"""#1605 November 2026 recall census finale (2026-model-year vehicles), Nov 1-27 filings — full-month recount.
Same method as #1475/#1478/#1480: VPIC canonical 2026 model lists + Hybrid /
Plug-In Hybrid / Electric suffix variants + targeted trims. Keeps 26Vxxx
campaigns with ReportReceivedDate in November 2026 (DD/MM/YYYY). Deduped by
campaign number across all makes. Scope: 2026-model-year vehicles only;
equipment (26E) and tire campaigns excluded, consistent with the series.
Queries run in a 12-worker thread pool (sequential was ~2s/query).
"""
import json, time, urllib.request, urllib.parse, os
from concurrent.futures import ThreadPoolExecutor

BASE = "https://api.nhtsa.gov/recalls/recallsByVehicle"
VPIC = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/{make}/modelYear/2026?format=json"
OUT = "/home/hatch/workspace/vehicle-safety/drafts/1605-november-recall-census-finale-raw.json"

MAKES = ["ford", "lincoln", "chevrolet", "gmc", "cadillac", "buick",
         "toyota", "lexus", "honda", "acura", "hyundai", "kia", "genesis",
         "nissan", "infiniti", "subaru", "bmw", "mini", "mercedes-benz",
         "audi", "volkswagen", "porsche", "volvo", "tesla", "rivian",
         "lucid", "polestar", "mazda", "mitsubishi", "jaguar", "land rover",
         "vinfast", "harley-davidson", "jeep", "ram", "dodge", "chrysler",
         "fiat", "alfa romeo", "mack", "autocar", "wabash", "freightliner",
         "international", "kenworth", "peterbilt", "western star", "thomas built",
         "blue bird", "gillig", "new flyer", "prevost", "motor coach industries",
         "forest river", "winnebago", "thor motor coach", "jayco", "keystone",
         "heartland", "grand design", "airstream", "tiffin", "newmar", "entegra",
         "navistar", "ic bus", "hino", "isuzu", "mitsubishi fuso", "oshkosh",
         "pierce", "spartan", "e-one", "collins", "starcraft", "champion",
         "eldorado", "enc"]

EXTRA = {
    "ford": ["f-150 hybrid", "escape hybrid", "maverick hybrid", "mustang mach e",
             "explorer hybrid", "f-150 lightning", "e-transit", "transit connect",
             "f-250 super duty", "f-350 super duty", "f-450 super duty", "f-550 super duty"],
    "lincoln": ["navigator", "aviator", "corsair", "nautilus"],
    "chevrolet": ["silverado 1500", "silverado 2500", "silverado 3500", "silverado ev",
                  "suburban 1500", "blazer ev", "equinox ev", "corvette e-ray",
                  "express 2500", "express 3500"],
    "gmc": ["sierra 1500", "sierra 2500", "sierra 3500", "sierra ev",
            "yukon xl", "savana 2500", "savana 3500", "hummer ev pickup", "hummer ev suv"],
    "cadillac": ["escalade esv", "escalade iq", "escalade iql", "lyriq", "optiq", "vistiq", "celestiq"],
    "buick": ["encore gx", "envista"],
    "toyota": ["rav4 hybrid", "rav4 plug-in hybrid", "prius prime", "corolla cross hybrid",
               "sienna hybrid", "tacoma hybrid", "tundra hybrid", "sequoia hybrid",
               "highlander hybrid", "grand highlander hybrid", "crown", "bz4x", "camry hybrid"],
    "lexus": ["rx hybrid", "nx hybrid", "tx hybrid", "gx", "lx", "rz", "ux hybrid", "es hybrid"],
    "honda": ["cr-v hybrid", "accord hybrid", "civic hybrid", "prologue"],
    "acura": ["zdx", "mdx", "rdx"],
    "hyundai": ["ioniq 5", "ioniq 6", "ioniq 9", "tucson hybrid", "santa fe hybrid",
                "elantra hybrid", "sonata hybrid", "kona electric"],
    "kia": ["ev6", "ev9", "ev3", "sportage hybrid", "sorento hybrid", "telluride",
            "niro hybrid", "ev4"],
    "genesis": ["gv60", "gv70 electrified", "g80 electrified", "electrified gv70"],
    "nissan": ["leaf", "ariya", "z", "gt-r", "frontier", "titan xd", "kicks",
               "armada", "nv200", "rogue sport", "pathfinder rock creek"],
    "infiniti": ["qx50", "qx55", "qx60", "qx80", "q50", "q60"],
    "subaru": ["solterra", "crosstrek hybrid", "forester hybrid"],
    "bmw": ["ix", "i4", "i5", "i7", "ix3"],
    "mercedes-benz": ["eqs", "eqe", "eqb", "gle plug-in hybrid", "glc plug-in hybrid"],
    "audi": ["q4 e-tron", "q6 e-tron", "q8 e-tron", "a6 e-tron", "e-tron gt", "rs e-tron gt"],
    "volkswagen": ["id.4", "id. buzz", "id.7", "atlas", "tiguan"],
    "porsche": ["taycan", "macan electric", "cayenne e-hybrid", "panamera e-hybrid"],
    "volvo": ["ex30", "ex90", "xc40 recharge", "c40 recharge",
              "xc90 plug-in hybrid", "xc60 plug-in hybrid"],
    "tesla": ["model 3", "model y", "model s", "model x", "cybertruck"],
    "rivian": ["r1t", "r1s", "r2", "edv"],
    "lucid": ["air", "gravity"],
    "polestar": ["2", "3", "4"],
    "mazda": ["cx-90 plug-in hybrid", "cx-70 plug-in hybrid", "cx-50 hybrid", "mx-30"],
    "mitsubishi": ["outlander plug-in hybrid", "eclipse cross"],
    "jaguar": ["i-pace", "f-pace"],
    "land rover": ["range rover", "range rover sport", "defender", "discovery"],
    "vinfast": ["vf 8", "vf 9", "vf 6", "vf 7"],
    "harley-davidson": ["flhx", "flhxl", "flhxlse", "flhxse", "flhxstse",
             "fltr", "fltrxl", "fltrxp", "fltrxstse", "flhr", "flht", "flhtk", "fltrk",
             "fxfb", "fxbr", "fxst", "fxlrs", "fxlrst", "xl883", "xl1200", "rh975",
             "rh1250", "pan america", "ra1250", "ra1250s"],
    "jeep": ["wrangler 4xe", "grand cherokee 4xe", "wagoneer", "grand wagoneer"],
    "ram": ["1500", "promaster", "promaster ev", "2500", "3500"],
    "dodge": ["hornet", "durango", "charger"],
    "chrysler": ["pacifica", "pacifica hybrid", "voyager"],
    "fiat": ["500e"],
    "mack": ["md", "md electric", "anthem", "pinnacle", "granite", "terrapro", "lr", "lr electric"],
    "autocar": ["legend", "dc", "acx", "xpert", "xspotter", "actt"],
    "wabash": ["platform trailer", "stake truck body", "dry van", "reefer"],
    "freightliner": ["cascadia", "m2", "114sd", "108sd", "econic sd", "mt45", "mt55"],
    "international": ["lt", "rh", "hv", "mv", "hx", "lone star", "prostar"],
    "kenworth": ["t680", "t880", "w900", "t370", "t380", "t480"],
    "peterbilt": ["579", "567", "389", "379", "337", "348", "520"],
    "western star": ["49x", "47x", "57x", "4900"],
    "thomas built": ["saf-t-liner c2", "saf-t-liner efx", "saf-t-liner hdx", "jouley"],
    "blue bird": ["vision", "all american", "micro bird"],
    "gillig": ["low floor", "brt", "trolley"],
    "new flyer": ["xcelsior", "xd40", "xe40", "xde40"],
    "prevost": ["h3-45", "x3-45"],
    "motor coach industries": ["j4500", "d4500", "d45 crt"],
    "forest river": ["forester", "sunseeker", "georgetown", "rockwood", "flagstaff"],
    "winnebago": ["vista", "journey", "revel", "solos"],
    "thor motor coach": ["ace", "hurricane", "windsport", "challenger"],
    "jayco": ["jay flight", "eagle", "greyhawk", "redhawk"],
    "keystone": ["montana", "cougar", "passport", "bullet"],
    "heartland": ["bighorn", "landmark", "cyclone"],
    "grand design": ["solitude", "reflection", "imagine", "momentum"],
    "airstream": ["classic", "flying cloud", "international", "basecamp"],
    "tiffin": ["allegro", "phaeton", "bus"],
    "newmar": ["dutch star", "mountain aire", "essex", "bay star"],
    "entegra": ["coach", "aspire", "anthem", "cornerstone"],
    "navistar": ["lt", "rh", "hv", "mv"],
    "ic bus": ["ce series", "re series"],
    "hino": ["l series", "xl series", "m series"],
    "isuzu": ["npr", "nqr", "nrr", "ftr", "fvr"],
    "mitsubishi fuso": ["fe140", "fe160", "fg4x4"],
    "oshkosh": ["striker", "s-series"],
    "pierce": ["enforcer", "velocity", "impel", "arrow xt"],
    "spartan": ["gladiator", "metro star", "furion"],
    "e-one": ["typhoon", "cyclone"],
    "collins": ["grand brougham", "super bantam"],
    "starcraft": ["allstar", "starlite"],
    "champion": ["defender", "challenger"],
    "eldorado": ["axess", "escort"],
    "enc": ["ez rider", "xhf"],
    "alfa romeo": ["tonale", "stelvio", "giulia"],
}
SUFFIXES = ["Hybrid", "Plug-In Hybrid", "Electric"]

def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "vehicle-safety-census/1528"})
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.load(r)

def vpic_models(make):
    try:
        d = get_json(VPIC.format(make=urllib.parse.quote(make)))
        return sorted({x["Model_Name"] for x in d.get("Results", []) if x.get("Model_Name")})
    except Exception as e:
        print(f"VPIC {make} FAILED: {e}", flush=True)
        return []

def query(args):
    make, model = args
    url = BASE + "?" + urllib.parse.urlencode({"make": make, "model": model, "modelYear": 2026})
    try:
        return (make, model, get_json(url).get("results", []) or [])
    except urllib.error.HTTPError as e:
        if e.code in (400, 404):
            return (make, model, [])
        return (make, model, "ERR" + str(e))
    except Exception as e:
        return (make, model, "ERR" + str(e))

def in_window(ds):
    try:
        dd, mm, yyyy = ds.split("/")
        return yyyy == "2026" and mm == "11" and 1 <= int(dd) <= 27
    except Exception:
        return False

out = {"brands": {}}
if os.path.exists(OUT):
    out = json.load(open(OUT))

t0 = time.time()
for make in MAKES:
    if out["brands"].get(make, {}).get("done"):
        print(f"== {make}: already done, skipping ==", flush=True)
        continue
    models = vpic_models(make)
    qset = []
    for m in models:
        qset.append(m.lower())
        for s in SUFFIXES:
            qset.append(f"{m.lower()} {s.lower()}")
    for e in EXTRA.get(make, []):
        qset.append(e.lower())
    seen, qs = set(), []
    for q in qset:
        if q not in seen:
            seen.add(q); qs.append(q)
    campaigns, per_model = {}, {}
    with ThreadPoolExecutor(max_workers=30) as ex:
        for make2, model, rows in ex.map(query, [(make, q) for q in qs]):
            if isinstance(rows, str):
                print(f"QUERY {make2}/{model} FAILED: {rows}", flush=True)
                continue
            kept = []
            for r in rows:
                cn = r.get("NHTSACampaignNumber", "")
                if not cn.startswith("26V") or not in_window(r.get("ReportReceivedDate", "")):
                    continue
                kept.append(cn)
                if cn not in campaigns:
                    campaigns[cn] = {"campaign": cn, "date": r.get("ReportReceivedDate"),
                                     "component": r.get("Component"), "summary": r.get("Summary"),
                                     "ota": r.get("overTheAirUpdate"),
                                     "park_it": r.get("parkIt"), "park_outside": r.get("parkOutSide"),
                                     "found_via": f"{make}/{model}"}
            if kept:
                per_model[f"{make}/{model}"] = sorted(set(kept))
    out["brands"][make] = {"campaigns": campaigns, "count": len(campaigns),
                           "per_model": per_model, "queries": len(qs), "done": True}
    json.dump(out, open(OUT, "w"), indent=1)
    print(f"== {make}: {len(campaigns)} campaigns, {len(qs)} queries, {time.time()-t0:.0f}s ==", flush=True)

allc = {}
for make, b in out["brands"].items():
    for cn, c in b["campaigns"].items():
        allc.setdefault(cn, c)
print(f"\nTOTAL distinct November 2026 campaigns (2026-MY vehicles): {len(allc)}")
for cn in sorted(allc):
    c = allc[cn]
    print(f"  {cn} {c['date']} [{c['component']}] via {c['found_via']}")
