# Research Notes — #1611: Every Vehicle Occupant Died Less in 2024. Except SUV Occupants.

**Slug:** `1611-every-occupant-died-less-except-suvs`
**Journalist:** Rex Driverton (FARS deep dives, paradoxes)
**Kicker:** The Gap
**Date:** 2026-11-27
**Status:** RESEARCH complete, kill test PASSED

## The finding

NHTSA's Overview of Motor Vehicle Traffic Crashes in 2024 (DOT HS 813 791, April 2026)
breaks 2024 deaths down by occupant type. Total deaths fell 4.3% (41,025 → 39,254),
the third straight annual decline. Every occupant category fell — except one.

| Occupant type | 2023 deaths | 2024 deaths | Change |
|---|---|---|---|
| Passenger car occupants | 11,828 | 10,675 | −1,153 (−9.7%) |
| **SUV occupants** | **6,901** | **7,013** | **+112 (+1.6%)** |
| Pickup occupants | 4,321 | 4,111 | −210 (−4.9%) |
| Van occupants | 965 | 910 | −55 (−5.7%) |
| Large-truck occupants | 962 | 920 | −42 (−4.4%) |
| Motorcyclists | 6,366 | 6,228 | −138 (−2.2%) |
| Pedestrians | 7,367 | 7,080 | −287 (−3.9%) |
| Pedalcyclists | 1,173 | 1,103 | −70 (−6.0%) |

SUV occupants are the ONLY fatality category in the whole table that rose. NHTSA's own
summary says so: "Traffic fatalities increased in 2024 compared to 2023 in the following
categories: fatalities in traffic crashes involving older drivers (+115) and SUV occupant
fatalities (+112)." Everything else on the list fell.

## Original calculations (run 2026-11-27)

- **SUV share of passenger-vehicle occupant deaths:** 6,901/24,017 = 28.7% (2023) →
  7,013/22,713 = 30.9% (2024). SUVs took nearly a third of all car-occupant deaths.
- **SUV/car death ratio:** 6,901/11,828 = 0.58 (2023) → 7,013/10,675 = 0.66 (2024).
  In one year the SUV closed a sixth of the gap with the sedan.
- **SUV deaths vs pickup + van combined:** 7,013 vs 4,111 + 910 = 5,021. SUV occupants
  alone died in greater numbers than pickup and van occupants put together — by 1,992.
- **Injuries tell the same story, louder:** SUV occupants injured rose 28,952 (+4.2%,
  statistically significant) to 723,240, while total injuries FELL 0.8% and car occupants
  injured fell 4.6%. SUV injuries are 29.9% of all injuries (723,240 / 2,422,195).
- **The inside/outside flip:** occupants killed "inside the vehicle" fell to a record-low
  62% of all deaths (from 80% in 1996); "outside the vehicle" hit a record-high 38%.

## The paradox (why this is a story, not a data dump)

The site's own FARS per-model data (2014–2023, fars_output.js) says SUVs are the
SAFEST vehicles per mile. 11 of the 15 lowest death-rate models with 500+ deaths are
SUVs: Toyota RAV4 (0.19), Honda Pilot (0.29), Hyundai Tucson (0.34), Nissan Rogue
(0.35), Chevrolet Equinox (0.36), Hyundai Santa Fe (0.39), Toyota Highlander (0.42),
Subaru Outback (0.45), Ford Edge (0.46), Jeep Grand Cherokee (0.51), Honda CR-V (0.53).
The deadliest-rate models are sedans and sports cars (Veloster 8.54, Impala 5.00,
Mustang 6.02). So the safest individual vehicles are SUVs — and the SUV class still
killed more people. That is an exposure story, not a per-vehicle safety story: the fleet
kept shifting toward SUVs, and more SUV miles outran the per-mile safety advantage.
The article must say this plainly, or it misleads.

## Counterargument (strongest, stated at full strength)

One year is noise. +112 deaths on a base of 6,901 is +1.6%, and NHTSA notes fatality
counts are a census (not significance-tested). The SUV rise could be a blip, and the
2025 early estimate (36,640 deaths, −6.7%) may show it reversing. Also, the per-model
FARS rates end in 2023, so no 2024 per-model rate can confirm or refute the exposure
thesis yet. The honest framing: a one-year divergence worth watching, not a verdict on
SUV safety. If 2025 data shows SUV deaths falling again, this piece ages badly — say so.

## Limitations

- FARS 2024 is the Annual Report File (ARF), subject to revision when the Final File lands.
- No per-model 2024 rates exist yet; the exposure explanation is inferred from fleet
  trends and the 2014–2023 per-model rates, not proven for 2024.
- Injury counts are CRSS estimates (sampled), not a census; only the flagged changes
  (SUV injuries +4.2%, car injuries −4.6%, pickup injuries −9.2%) are statistically
  significant at α=.05.
- The +112 SUV death rise is small in absolute terms; do not present it as a surge.

## Actionable insight

If you drive an SUV, the vehicle is not the problem — the numbers say individual SUV
models are among the safest per mile. The risk that rose is the class-level one, driven
by how many SUVs are on the road and how they are driven. The practical takeaway for
shoppers: a 2026 Top Safety Pick+ SUV (RAV4 missed it; Forester, Palisade, CX-90 made
it) with a Good rear-seat moderate-overlap rating is the buy; check the rear-seat
rating specifically, because that is where SUVs and pickups keep failing IIHS tests.

## Killed angles (duplicate screen, 2026-11-27)

- H1 2026 early estimates → #1598. Takata 26V765 → #1550/#1583. BMW 26V733 fire →
  #1490/#1548/#1595. Waymo school bus RQ26006 → #1599. IIHS commercial-vehicle ratings →
  ~20 pieces (#1093 etc.). IIHS driver death rates / other-driver asymmetry → #993.
  Pedestrian 2024 → #1374/#1184/#1269/#943. Cyclists 2025 → #1299/#1053. Rivian toe-link
  / 26V597 → #1133/#977/#1496. Jeep coil spring → #847/#858/#865/#882/#886/#891.
  Honda start-stop EA → #1604. Explorer airbag PE26008 → #1590. FARS tox extremes
  (Park Avenue/Alero/NV200) → #868/#805/#883/#1065. FARS rate extremes (Veloster/
  Impala/Mustang) → #1064/#1116/#1122/#1363. Zombie nameplates → #935. Model-year cliff
  → #1358/#1539. Minivan IIHS shutout → #1171/#961. Pickup rear-seat failure →
  PUBLISHED stories/pickup-rear-seat-seatbelt-failure. NOPUS 2024/2025 → #1379.
  Occupant Protection 813 840 (seat-belt paradox) → #1415. Speeding 2024 → #1448.
  Alcohol sub-.08 (2,028) → PUBLISHED stories/legal-bac-2028-killed-below-limit.
  Children 2024 divergence + alcohol cross-tab → #1450 (uses the "rose 1% while total
  fell 4.3%" line). Brand recall censuses → complete sweep #1476–#1522. IIHS 2026
  75-model safest list, build-date asterisks → #874/#906/#1278/#1314/#1346/#1425.
  2025 NOPUS 91.3% → #1379. State alcohol estimates / imputation → #1601 (today).
  Large trucks FARS 2024 → #1610 (today). H1 2026 state (Maine) → #1609.
- Secondary finding NOT used as lead (kept in notes only): large-truck drivers were the
  only vehicle type whose alcohol-impaired driver count ROSE in 2024, +46 (+26%,
  178 → 224, DOT HS 813 791 Table 6), while every other type fell. Adjacent to #1610;
  do not build a second article on it.

## Primary sources (3+)

1. NHTSA, *Overview of Motor Vehicle Traffic Crashes in 2024*, DOT HS 813 791,
   April 2026, Table 3 (occupant deaths/injuries by type) and p.1 summary of risers.
   https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813791
2. NHTSA FARS per-model data 2014–2023, `fars_output.js` (site dataset): lowest-rate
   models table; 11 of 15 lowest-rate 500+ death models are SUVs.
   https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
3. IIHS, *Driver death rates remain high for small cars, models with powerful engines*,
   July 30, 2026 (2023-model rates; SUVs among lowest own-driver rates, e.g. Audi Q7
   lowest overall). https://www.iihs.org/news/detail/driver-death-rates-remain-high-for-small-cars-models-with-powerful-engines
4. NHTSA, *Traffic Safety Facts: Occupant Protection in Passenger Vehicles, 2024 Data*,
   DOT HS 813 840, October 2026 (context: 48% of PV occupant deaths unrestrained).
   https://crashstats.nhtsa.dot.gov/Api/Public/Publication/813840

## Headline options

- "Every Vehicle Occupant Died Less in 2024. Except SUV Occupants."
- "Cars Got 10% Safer in a Year. SUVs Got Deadlier."
- "SUV Deaths Rose in 2024 While Car Deaths Fell 10%. The Fleet Picked a Side."
