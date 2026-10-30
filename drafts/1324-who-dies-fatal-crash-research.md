# RESEARCH — 1324-who-dies-fatal-crash
**Journalist:** Axle McScatter | **Kicker:** The Gap | **Date:** 2026-10-29

## Angle
A new cross-tabulation of NHTSA FARS 2014-2023: for each nameplate, the ratio of *deaths in the vehicle itself* to *vehicles involved in fatal crashes* (occupant deaths per fatal-crash involvement). When a fatal crash involves a Chevrolet Cavalier, the Cavalier's own occupants are the dead ones 86% of the time. When it involves a Ram 1500, the Ram's occupants die only 34% of the time. The rest of the time, someone else died: the other car's occupants, a pedestrian, a cyclist, a motorcyclist. Pickups survive their own fatal crashes and export the dying to the other vehicle. Sedans and sports cars die in theirs.

## Kill test
- Newsworthy: yes. Reframes the "trucks are safe" narrative: a 5-star crash rating measures what happens to *your* occupants, not what your truck does to the sedan across the intersection.
- Novel: no existing queue title covers deaths-per-crash-involvement ("aggressiv 0", "other-driver 0", "heavier 0" in title grep). Prior award-gap pieces cover IIHS test-vs-reality; this is FARS-on-FARS.
- Verifiable: all ratios computed from fars_output.js (FARS_BY_MODEL: deaths = occupant deaths in the vehicle per FARS VEHICLE-file DEATHS field; crashes = vehicles of that make/model involved in fatal crashes).

## Key numbers (computed from fars_output.js, 2014-2023)
By class, occupant deaths per fatal-crash involvement:
- Sports Car 0.68 | Sedan 0.65 | SUV 0.52 | Van 0.51 | Pickup 0.49

Extremes (min 1,000 vehicles involved):
- Chevrolet Cavalier (Sedan): 1,225 deaths / 1,429 vehicles = 0.86
- Chevrolet Cobalt (Sedan): 1,540 / 1,907 = 0.81
- Chevrolet S-10 Pickup: 1,427 / 1,890 = 0.76
- Ford Mustang (Sports Car): 2,739 / 3,938 = 0.70
- Honda Civic: 6,553 / 9,627 = 0.68
- Ram 1500: 714 / 2,095 = 0.34
- Ford F-250: 909 / 2,499 = 0.36
- Toyota Tundra: 1,223 / 2,947 = 0.42
- Honda Odyssey (Van): 864 / 2,028 = 0.43
- Dodge RAM: 4,407 / 10,110 = 0.44
- Ford F-150: 9,194 / 20,066 = 0.46
- Chevrolet Silverado: 9,591 / 19,732 = 0.49

Other-vehicle math: Ram 1500 involved in 2,095 fatal crashes; its own occupants died in only 714 (34%). In the other 1,381 (66%), the Ram's occupants did not die, so the fatality was someone else's. Cavalier: 1,429 involvements, 1,225 own deaths (86%).

## Primary sources
1. NHTSA FARS 2014-2023 bulk data via fars_process.py (deaths = occupant fatalities per vehicle; crashes = vehicle involvements in fatal crashes). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and query tool https://cdan.dot.gov/query
2. IIHS, "Vehicle size and weight" topic page (verified live 2026-10-29): physics of crash compatibility — heavier vehicle pushes lighter one backward; in 2017-22 pickups were "nearly twice as likely to kill the driver of a car they crashed into, compared with a car colliding with another car (Monfort, 2025)"; car occupants at no greater risk dying vs SUVs than vs cars in 2017-22 (gap closed from 28% in 2013-16, 59% in 2009-12). https://www.iihs.org/topics/vehicle-size-and-weight
3. IIHS driver death rates, 2026 report (Jul 30, 2026): average driver death rate 37 per million registered vehicle years vs. average other-driver death rate 53 — other parties die more often than the vehicle's own driver across the fleet. Via daxstreet summary: https://daxstreet.com/cars/432737/6-vehicles-with-no-driver-fatalities-in-iihs-crash-data/

## Original contribution
The deaths-per-involvement ratio by nameplate and body class, computed from FARS. IIHS measures compatibility in two-vehicle crash pairs; this metric captures it in one number across all crash types, including pedestrian and cyclist deaths.

## Limitations (to state in article)
- FARS VEHICLE-file DEATHS counts occupant deaths in the vehicle. "Other" deaths include occupants of other vehicles, pedestrians, bicyclists, motorcyclists — the ratio cannot distinguish which.
- FARS covers only fatal crashes (36,640 in 2025 vs ~6.7M total crashes); non-fatal injury patterns may differ.
- Ratios for low-volume nameplates have higher variance; extremes listed all have 1,000+ vehicle involvements.
- IIHS compatibility studies (Monfort 2025) use 2017-22 model years; FARS data spans 2014-23 and includes older vehicles with worse compatibility engineering.
- Single-vehicle crashes are included: a rollover that kills only its driver raises the ratio; a vehicle involved in a fatal pedestrian strike lowers it.

## Strongest counterargument
The ratio mixes crashworthiness (how well the vehicle protects its own occupants) with aggressivity (how dangerous it is to others) and crash circumstances (truck drivers more often hit pedestrians or cross centerlines on rural roads). A low ratio doesn't prove the truck is badly built — it may just as well prove the truck is *well* built, protecting its occupants while the sedan it hit was the fragile one. Physics says it's usually the second. Also: pickups and SUVs skew rural, where higher-speed crashes are likelier to kill the struck pedestrian — exposure, not just physics, drives some of the gap.

## Actionable takeaway
A 5-star rating and Top Safety Pick grade what happens to *your* occupants. If you share the road (or the driveway, or the crosswalk) with lighter vehicles, the FARS record says the truck survives and the other car doesn't. For buyers: don't read a low death rate as low *harm* — ask what the vehicle does to the other party.

## Working headline
"The Ram 1500's Occupants Survive Two-Thirds of Its Fatal Crashes. The Other Car's Don't."
Alt: "Your Truck Doesn't Kill Its Driver. It Kills the Guy in the Civic."
Alt kicker framing: The Gap.
