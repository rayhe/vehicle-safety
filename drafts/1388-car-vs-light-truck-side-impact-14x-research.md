# Research: #1388 — When a truck T-bones a car, the death ratio is 14 to 1

**Slug:** 1388-car-vs-light-truck-side-impact-14x
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundups, methodology beat)
**Kicker:** The Gap
**Date researched:** 2026-11-04

## Kill test: PASS

**Proposed angle:** NHTSA's October 2026 Passenger Vehicles fact sheet (DOT HS 813 837, FARS 2024 ARF) publishes a two-vehicle fatal-crash breakdown that nobody has turned into a story on this site: when a passenger car and a light truck collide, who dies depends violently on impact geometry. Head-on, a car occupant dies 2.7 times as often as a light-truck occupant. Flip the geometry so the truck's front hits the car's side, and the ratio explodes to 13.9 to 1. Flip it again so the car's front hits the truck's side, and the ratio reverses: the truck occupant dies 1.4 times as often. Same two vehicle classes, same year, same dataset. The ratio swings from a 1.4x reversal to a 13.9x rout depending on which bumper meets which door.

**Challenge — is this surprising after 1,387 articles?** Yes, three ways. (1) No existing draft covers the DOT HS 813 837 two-vehicle section: filename grep for side-impact-14x, car-vs-light, and head-on-ratio returns nothing; content grep for "13.9" and "2.7 times" in the two-vehicle context returns nothing (the only "three times" hits are unrelated). Nearest neighbors are different stories: #1281 (Cavalier always loses, a model-level FARS rate story), #1324 (who dies in a fatal crash, demographics), #1312 (IIHS rear-seat test, lab ratings not real-world fatality ratios). (2) The 13.9x figure is the most extreme vehicle-to-vehicle asymmetry in the fact sheet, and it is not the head-on number everyone assumes is worst. (3) The reversal case (car front into truck side, truck occupant worse off) breaks the naive "heavier always wins" story and forces an honest discussion of what the ratios do and do not adjust for.

**Newsworthy?** Yes. 3,309 car-vs-light-truck two-vehicle fatal crashes in 2024 alone, 3,642 occupant deaths inside them, in a year when light-truck registrations (184.1 million) nearly doubled passenger-car registrations (98.8 million). The fleet is sorting itself into heavier and lighter halves, and the fact sheet quantifies exactly what that sorting costs in the crash type where it matters most.

**3+ primary sources?** Yes:
1. NHTSA, *Traffic Safety Facts: Passenger Vehicles, 2024 Data*, DOT HS 813 837, October 2026 (FARS 2020-2023 Final File, 2024 Annual Report File) — the two-vehicle section, Table 4, Figure 3, registration and rate tables.
2. NHTSA, *Overview of Motor Vehicle Traffic Crashes in 2024*, DOT HS 813 791, April 2026 — national totals cross-check (39,254 deaths; 36,297 fatal crashes).
3. IIHS, vehicle size and weight topic page — physics context for why mass and geometry drive two-vehicle outcomes (heavier vehicle imposes disproportionate risk on the lighter one; side structures are thinner than front structures).

## Verified facts (primary source: DOT HS 813 837 unless noted)

- Two-vehicle car-vs-light-truck fatal crashes, 2024: **3,309**, representing 25% of all two-vehicle fatal crashes (13,278) and 9% of total fatal traffic crashes (36,297).
- Occupant deaths in those crashes, 2024: passenger cars **2,687** (down 9.9% from 2,982 in 2023); light trucks **955** (down 9.2% from 1,052 in 2023). Overall ratio 2024: **2.8** (range 2.7-3.1 across 2020-2024).
- By impact configuration, 2024 ratios (occupant killed in one vehicle vs the other):
  - Head-on: car occupant **2.7x** light-truck occupant (2020-2024 range 2.7-3.2).
  - Car front into light-truck side: light-truck occupant **1.4x** car occupant (range 1.4-1.8). The reversal.
  - Light-truck front into car side: car occupant **13.9x** light-truck occupant (range 12.4-14.2).
- All passenger-vehicle occupants killed, 2024: **22,713** (down 5% from 24,017); cars 10,675 (47%), light trucks 12,038 (53%).
- Registrations, 2024 (Polk/S&P Global Mobility via NHTSA): cars **98,766,175** (down 3% from 2023); light trucks **184,130,937** (up 3%). SUVs up 5%, pickups up 1%, vans down 1% within light trucks.
- Occupant fatality rate per 100,000 registered vehicles, 2024: cars **10.81** (down 7% from 11.64); light trucks **6.54** (down 4% from 6.82); pickups 7.26, SUVs 6.23, vans 6.14. Cars have the highest rate of any passenger-vehicle type.
- Seat belts, per the fact sheet: belts reduce fatal-injury risk by an estimated **45%** for passenger-car front occupants and **60%** for light-truck front occupants. In 2024, 50% of rural passenger-vehicle occupant deaths were unrestrained (known restraint use) vs 47% urban.
- Rollover context: 28% of passenger-vehicle occupant deaths in 2024 were in vehicles that rolled over; rollover share of deaths by type: pickups 39%, SUVs 32%, vans 23%, cars 20%.

## Computations (original to this article)

- Overall pair-crash death share: 2,687 / (2,687 + 955) = **73.8%** of deaths in car-vs-light-truck two-vehicle fatal crashes were car occupants.
- Deaths per pair crash: 3,642 / 3,309 = **1.10** occupant deaths per crash.
- Geometry swing: 13.9 / 2.7 = **5.1x** — the side-impact ratio is more than five times the head-on ratio for the same vehicle pair.
- Fleet imbalance: 184,130,937 / 98,766,175 = **1.86x** — nearly two registered light trucks for every registered car in 2024, and the gap widened during 2024 (cars -3%, light trucks +3%).
- Rate paradox: the car occupant fatality rate per registered vehicle (10.81) is **1.65x** the light-truck rate (6.54), even though light trucks dominate two-vehicle pair crashes. Cars lose the pair crashes and still post the worse overall rate, because the per-registered rate counts every crash type, including single-vehicle crashes where there is no heavier opponent to blame.

## Strongest counterargument

These are raw fatality-count ratios, not controlled experiments. NHTSA's fact sheet does not adjust them for speed, belt use, driver age, alcohol, rural vs urban roads, or occupant counts per vehicle, and it does not publish the crash counts behind each configuration ratio, so the 13.9x figure cannot be decomposed further from this document. A skeptic can fairly argue that part of the side-impact gap reflects where T-bones happen (intersections, often at speed, often with an unrestrained or younger driver) rather than pure vehicle physics. The reversal case cuts the same way: if mass alone decided everything, the car-front-into-truck-side ratio would not flip. Geometry, structure, and crash circumstances all load into these numbers, and the fact sheet alone cannot apportion them. Also, both pair-crash death counts fell about 9-10% in 2024, so the asymmetry persists inside an improving total.

## Limitations

- 2024 data is the Annual Report File (ARF), NHTSA's first release, subject to revision when the Final File lands; totals may move slightly.
- "Light truck" lumps SUVs, pickups, and vans (plus other/unknown) with very different masses and bumper heights; the fact sheet does not split the 13.9x ratio by light-truck subtype.
- Ratios describe occupants killed in fatal crashes only. FARS is a census of fatal crashes, not of all crashes, so these ratios say nothing about injury-only or property-damage outcomes.
- The fact sheet's "nearly three times" key-finding phrasing rounds the head-on ratio; the precise 2024 figure in the two-vehicle section is 2.7, and this article uses 2.7, not 3.

## Actionable for readers

- If you drive a passenger car: the side of your car is the weak axis against a truck's front end, and no driving skill changes the mass ratio. Prioritize the IIHS side-impact rating and side curtain airbags when shopping, and wear the belt: NHTSA credits belts with a 45% fatal-risk reduction for car occupants.
- At intersections, the T-bone geometry is the one that produces the 13.9x ratio. Treat a stale green and a turning truck as the highest-lethality ordinary situation a car driver faces.
- If you drive a light truck: your mass advantage disappears when a car hits your side, the one configuration where the truck occupant dies more often. Side protection is not a car-only concern.
- Check any specific model at iihs.org/ratings before buying; the fleet-level ratios here do not rank individual models.
