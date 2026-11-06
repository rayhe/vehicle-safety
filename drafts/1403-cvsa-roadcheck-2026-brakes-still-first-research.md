# Research: CVSA Roadcheck 2026 — One in Five Trucks Ordered Off the Road, Brakes Still First

**Slug:** 1403-cvsa-roadcheck-2026-brakes-still-first
**Journalist:** Vin Wreckage (Existential Dread / Investigation)
**Number:** 1403
**News peg:** CVSA released 2026 International Roadcheck results Aug 25, 2026 (event May 12–14, 2026). Primary source: cvsa.org.
**Date:** 2026-11-05

## Kill test
- Genuinely newsworthy? Yes. A three-day, continent-wide inspection blitz is the only hard measurement of how many commercial trucks on American roads are mechanically unfit, and the answer barely moves year to year.
- Novel angle? Yes, three of them: (1) the driver-violation leaderboard flipped — no-medical-card went from #3 (493, 14.9%) to #1 (1,072, 27.0%), more than doubling in a year, while hours-of-service fell from #1 to #2; (2) the unbelted paradox — only 1.25% of inspected drivers were unbelted, yet FARS shows 64% of truck drivers killed in 2021 were unbelted, an overrepresentation of roughly 140x; (3) brakes are still 39.1% of every vehicle violation, two years running, while the industry talks about everything except the thing that stops 80,000 pounds.
- Duplicate screen: queue grep for roadcheck/cvsa = zero hits. FARS extremes mined out (Park Ave, Land Cruiser, Tracker, Ascent, deaths-per-crash #904/#993 all covered). GM EV brake recall #1387, Hyundai ACU #1400, Thomas Built FMVSS 221 #1369, IIHS Oct 31 batch #1244/#1278, NTSB toll plaza #917, GHSA pedestrian 2025 #1374 all killed as already covered this run.

## Primary sources
1. CVSA, "CVSA Releases 2026 International Roadcheck Results," Aug 25, 2026. https://cvsa.org/news/2026-roadcheck-results
2. CVSA, "CVSA Releases 2025 International Roadcheck Results," 2025. https://cvsa.org/news/2025-roadcheck-results
3. NHTSA FARS via FreightWaves, "Feds report more truck drivers dying from not using seat belts" (2021 data: 872 large-truck driver deaths, 555 unbelted = 64%; 2019: 59%; 2020: 44%). https://www.freightwaves.com/news/feds-report-more-truck-drivers-dying-from-not-using-seat-belts
4. NHTSA FARS 2014–2023 (site dataset, fars_output.js) for large-truck context.
5. Land Line Media, "CVSA unveils results from 2026 International Roadcheck," Aug 26, 2026 (corroboration). https://landline.media/less-than-6-of-drivers-placed-out-of-service-during-international-roadcheck/

## Verified numbers (2026, all from CVSA primary page)
- 54,575 inspections across US/Canada/Mexico, May 12–14, 2026; ~13 vehicles inspected per minute
- 10,350 vehicles (19.0%) placed out of service; 3,184 drivers (5.8%) placed OOS
- 44,047 Level I/II/V vehicle inspections → 10,350 vehicles OOS (23.5%); 13,924 vehicle OOS violations
- Level I (37-step full inspection): 31,241 inspections, vehicle OOS rate 24.8%, driver OOS 5.2%
- Level II: 11,502 inspections, vehicle OOS 22.2%; Level V (vehicle-only, no driver present): 1,304 inspections, 3.8% OOS
- Brake systems 3,379 (24.3% of vehicle OOS violations) + 20%-defective-brakes 2,072 (14.9%) = 5,451 brake-related = 39.1% of all vehicle OOS violations
- Tires 2,914 (20.9%), cargo securement 1,724 (12.4%), lights 1,659 (11.9%)
- Driver OOS violations total 3,969: no medical card 1,072 (27.0%), hours of service 929 (23.4%), no CDL 620 (15.6%), English proficiency 361 (9.1%), false records of duty status 266 (6.7%)
- Focus areas: ELD tampering 146 OOS (3.7%, 7th most-cited driver violation); cargo securement 1,724 (12.4% of vehicle violations)
- Seat belts: 667 violations; 1.25% of inspected drivers unbelted
- HM/DG: 2,590 inspections, 141 OOS violations, placarding top (40, 28.4%)
- Passenger-carrying vehicles: 458 inspections, 207 violations, 28 vehicle OOS, 8 driver OOS
- 17,680 CVSA decals (clean inspections)

## Original calculation 1: year-over-year (2025 → 2026, both CVSA primary pages)
- Inspections: 56,178 → 54,575 (−1,603, −2.9%)
- Vehicle OOS rate: 18.1% → 19.0% (+0.9 pts); of inspected vehicles: 22.6% → 23.5%
- Driver OOS rate: 5.9% → 5.8% (−0.1 pts)
- Vehicle OOS violations: 13,553 → 13,924 (+371, +2.7%)
- Brake share of vehicle violations: 41.1% (5,561) → 39.1% (5,451) — down 2.0 pts, still #1 by a wide margin
- Medical card: 493 (14.9%, #3) → 1,072 (27.0%, #1): +579, +117%, rank #3 → #1
- Hours of service: 1,076 (32.4%, #1) → 929 (23.4%, #2)
- No CDL: 810 (24.4%, #2) → 620 (15.6%, #3)
- English proficiency: not in 2025 top five → 361 (9.1%, #4) in 2026
- False records: 332 (10.0%) → 266 (6.7%)
- Seat belt violations: 726 → 667 (−59, −8.1%)
- HM/DG OOS violations: 177 → 141; top violation flipped loading (2025) → placards (2026)
- Decals: 16,521 → 17,680 (+7.0%)
- Level I vehicle OOS rate: 24.2% → 24.8%

## Original calculation 2: the unbelted paradox (Roadcheck observed vs FARS dead)
- Roadcheck 2026 observed unbelted rate: 667 / 54,575 ≈ 1.22% (CVSA rounds to 1.25% of drivers inspected)
- FARS 2021: 64% of large-truck drivers killed were unbelted (555 of 872); only 42.6% of large-truck occupants killed were belted; ~75% of the unbelted dead were totally ejected
- Overrepresentation math: (0.64 / 0.0125) / (0.36 / 0.9875) ≈ 51.2 / 0.365 ≈ 140x. An unbelted truck driver is roughly 140 times overrepresented among the dead relative to their share of drivers on the road.
- Caveats (state them): different years (2021 FARS vs 2026 Roadcheck); Roadcheck is a blitz, drivers behave better when inspectors are visible, so 1.25% is a floor, not a population rate; FMCSA's standing estimate is that 14% of CMV drivers don't wear belts (cited on CVSA's 2025 results page), which would cut the ratio to ~11x — still double-digit overrepresentation either way. The direction is robust; the exact multiplier depends on which denominator you trust.
- Site's own "The Unbuckled 8%" covered passenger vehicles (8.8% unbelted → 44% of deaths). The truck version is the same pattern at far higher amplitude, and it is not covered anywhere in the queue.

## Original calculation 3: the inspection paradox
- Level I full inspections fail vehicles at 24.8%; Level V vehicle-only inspections (no driver present, often at terminals) fail at 3.8%. The trucks that get the real inspection fail one in four. The 19% headline rate understates the full-inspection failure rate because Level III driver-only inspections dilute it.
- Brake arithmetic: 5,451 brake-related violations across 44,047 vehicle inspections = one brake OOS violation per 8.1 vehicles inspected.

## Strongest counterargument
- Roadcheck is a 72-hour blitz with announced focus areas; fleets and drivers clean up beforehand, so the failure rates are a best case, not a representative sample — the real everyday rate is worse, which strengthens the article's point rather than weakening it. Conversely, inspectors target likely violators (weigh stations, known corridors), which inflates rates versus the general fleet. Both selection effects exist; the YoY comparison is the cleanest read because the methodology is identical year to year, and it shows near-stasis: brakes still ~40%, one in five trucks still parked.
- The medical-card surge may reflect enforcement emphasis (new FMCSA medical-certification verification) rather than a real deterioration in driver health paperwork. Say so.

## Limitations
- CVSA Roadcheck covers the US, Canada, and Mexico combined; US-only splits are published for top-five tables but not for every figure. State-level breakdowns are not in the release.
- FARS large-truck restraint data cited is 2021 (latest year with the published 64% figure); 2022–2024 restraint splits were not in the sources consulted.
- OOS rates are per inspection, not per truck on the road; a truck can be inspected more than once in three days.
- The 140x figure is an illustrative ratio across different years and sampling frames, not an attributable fraction.

## Actionable takeaways
- If you drive near trucks: the truck next to you has a roughly 1-in-4 chance of failing a full inspection, and 2-in-5 of its violations would be its brakes. Give it room, especially downhill.
- If you manage a fleet: brakes + tires = 60% of all vehicle OOS violations (39.1% + 20.9%). Pre-trip brake checks are the cheapest compliance in the industry.
- If you drive a truck: the belt is the whole game. 1.25% of drivers skip it; they are ~64% of the dead drivers. Buckle up before the key turns.
- Check the medical card date: the #1 driver violation in 2026 was an expired or missing medical certificate, up 117% in one year. It is paperwork, and it parks trucks.

## References (for article)
1. CVSA, "CVSA Releases 2026 International Roadcheck Results," Aug 25, 2026. https://cvsa.org/news/2026-roadcheck-results
2. CVSA, "CVSA Releases 2025 International Roadcheck Results," 2025. https://cvsa.org/news/2025-roadcheck-results
3. NHTSA FARS via FreightWaves, "Feds report more truck drivers dying from not using seat belts," 2023 (2021 data). https://www.freightwaves.com/news/feds-report-more-truck-drivers-dying-from-not-using-seat-belts
4. NHTSA, Fatality Analysis Reporting System (FARS), 2014–2023. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
5. FMCSA, roadside inspection violation data (cited via CVSA 2025 results). https://ai.fmcsa.dot.gov
