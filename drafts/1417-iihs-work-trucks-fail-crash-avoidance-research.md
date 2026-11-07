# Research: IIHS Work Trucks Fail Crash Avoidance (#1417)

## Angle
IIHS published its first-ever crash-avoidance ratings for commercial vehicles on October 8, 2026: 11 cargo vans and Class 3 pickups put through the same vehicle-to-vehicle and pedestrian front-crash-prevention tests as passenger cars. The results are grim, and the regulatory gap behind them is the real story: light vehicles get a federal AEB mandate by September 2029, while heavy vehicles have no rule at all, the 2023 proposal never finalized and now restarted as a supplemental NPRM.

## Kill test
PASS. Genuinely newsworthy: first crash-avoidance ratings ever for commercial vehicles; the class of vehicles involved in 16% of all US road deaths (6,215 killed in 2024) mostly cannot stop itself. Novel angle: this site's June 2026 story (#iihs-heavy-truck-first-scorecard) covered IIHS's first commercial-vehicle evaluation, the driver-protection checklist (seatbelt reminders, airbags). This is part two, the crash-avoidance tests, a different evaluation with different results. No duplicate: grep of stories/ and research files finds no prior coverage of the October 8 crash-avoidance ratings, Sprinter/BrightDrop/RCV ratings, or the motorcycle-detection failures.

## Primary sources (3+)
1. IIHS news release, October 8, 2026: "Cargo vans and work pickups struggle in IIHS crash avoidance tests" — https://www.iihs.org/news/detail/cargo-vans-and-work-pickups-struggle-in-iihs-crash-avoidance-tests — ratings, Harkey quote, 6,215 deaths / 16% of 2024 fatalities, program launched June 2026, Class 4-6 testing later.
2. NHTSA/FMCSA NPRM, 88 FR 43174 (July 6, 2023): proposed FMVSS requiring AEB on heavy vehicles >10,000 lbs GVWR; estimated 19,118 crashes prevented, 155 lives saved, 8,814 injuries reduced per year. Never finalized. 2026 regulatory agenda lists a joint supplemental NPRM; final rule likely 2027-2028 (Landline, July 9, 2026).
3. NHTSA FMVSS No. 127 final rule (May 9, 2024): AEB, pedestrian AEB, and forward collision warning required on new light vehicles (GVWR <= 10,000 lbs) by September 1, 2029. Heavy vehicles excluded.
4. Autoblog, October 8, 2026: full ratings table + F-350 test detail (avoided car target only at 31 mph; at 43 mph failed to reduce speed at all; Silverado failed to avoid in all six V2V tests). https://www.autoblog.com/news/heavy-duty-pickups-are-failing-new-crash-prevention-tests

## The ratings (IIHS, October 8, 2026)
Vehicle-to-vehicle / Pedestrian. G=Good, A=Acceptable, M=Marginal, P=Poor.

Cargo vans:
- 2025-26 Chevrolet BrightDrop 400: A / G
- 2025-27 Chevrolet Express 2500: P / P (no AEB; optional forward collision warning only)
- 2025 Ford Transit T250: P / M
- 2025-27 GMC Savana 2500: P / P (no AEB; optional forward collision warning only)
- 2025 Mercedes-Benz Sprinter 2500: G / A (only Good in V2V; no Poor or Marginal anywhere)
- 2025-27 Ram ProMaster 2500: P / M
- 2025 Rivian RCV-Delivery 500: M / G

Class 3 pickups (GVWR 10,001-14,000 lbs):
- 2025-26 Chevrolet Silverado 3500HD: P / M
- 2025 Ford F-350: P / A
- 2025-26 GMC Sierra 3500: P / M
- 2025-27 Ram 3500: M / A

## Original calculation (this article's contribution)
Tallying all 22 ratings (11 vehicles x 2 tests): Good 3, Acceptable 4, Marginal 6, Poor 9. Poor = 9 of 22 (41%). Good = 3 of 22 (14%). Vehicle-to-vehicle: 7 of 11 rated Poor; only 1 Good (Sprinter). No Class 3 pickup earned a Good in either test: 0 of 8 pickup ratings Good. Pedestrian test was better (2 Poor of 11) than vehicle-to-vehicle (7 Poor of 11), a 3.5x gap in Poor rates between the two tests.

## Key details
- Motorcycle target was the biggest challenge in V2V testing: several systems did not warn or slow at all in most motorcycle trials.
- Child dummy problem: several vehicles, including the Acceptable-rated F-350 and Ram 3500, had a harder time detecting the child in daylight than the adult at night; the child dummy was detected at a distance then "disappeared" as the vehicle got closer, likely because sensors sit near the rearview mirror and front ends are tall.
- F-350: avoided the passenger-car target only at 31 mph; in four tests above that speed it failed; in one 43-mph test it failed to reduce speed at all.
- Silverado 3500HD: failed to avoid the passenger car in all six V2V tests.
- Express/Savana platform dates to 1996; neither offers AEB at all.
- IIHS commercial vehicle program launched June 2026 with driver protection (airbags, seatbelt tech, reminders); crash avoidance is the second phase; headlights and rear AEB ratings for Class 3 coming through 2027; Class 4-6 trucks later.
- 2024 toll: 6,215 people killed in crashes involving heavy- or medium-duty vehicles or light vans, 16% of all US roadway fatalities (IIHS, citing NHTSA data).
- NPRM benefit estimate: 19,118 crashes prevented, 155 lives saved, 8,814 non-fatal injuries reduced per year once covered vehicles have AEB + ESC.

## Counterargument (strongest)
IIHS track tests are controlled scenarios, not real-world crash outcomes; a Poor rating means the system failed the Institute's protocol, not that the vehicle is proven dangerous on public roads. Commercial vehicles are also driven mostly by professionals who brake earlier than the test assumes, and fleet buyers weigh payload, uptime, and cost over a safety rating. The Express/Savana have no AEB because the platform predates the technology and fleets keep buying them anyway, which suggests buyers either don't know or don't care, and a rating alone may not move them.

## Limitations
- FARS per-model data (fars_output.js) contains no Express/Savana/Transit/Sprinter/ProMaster entries, so no FARS fatality-rate cross-tab was possible for these specific models.
- IIHS tested 11 vehicles; the commercial fleet is far larger, and Class 4-6 trucks (the biggest killers by mass) have not been tested yet.
- The 6,215-death figure covers crashes *involving* heavy/medium-duty vehicles or light vans, not crashes *caused by* them.
- The NPRM benefit estimates (155 lives/year) are the agencies' 2023 projections, not observed outcomes.

## Actionable takeaways
- Fleet buyers: the Sprinter 2500 is the only tested work vehicle with no Poor or Marginal rating; the BrightDrop 400 and Rivian RCV-Delivery 500 are the only ones with a Good pedestrian rating. If you buy Express/Savana vans, know they have no AEB at all, only optional forward collision warning.
- Motorcyclists and pedestrians: the vehicles most likely to hit you are the ones least able to stop themselves; the motorcycle-detection failures are the sharpest single finding.
- Everyone else: there is no federal AEB requirement for any vehicle over 10,000 lbs GVWR, and the rulemaking has restarted from scratch, so a final rule is likely 2027-2028 at the earliest. Until then, IIHS ratings are the only public scorecard.

## Journalist
Mia Crumplezone (Safety Engineering Editor; safety tech / design analysis beat). Last used #1408; rotation: 1413 Rex, 1414 Clara, 1415 Vin, 1416 Axle.

## Proposed headline
"IIHS Tested 11 Work Trucks and Vans. Seven of Them Couldn't Stop for a Car in Front of Them."

## Kicker
The Gap
