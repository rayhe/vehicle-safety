# Research Notes — 1253-class3-aeb-blind-spot

**Slug:** 1253-class3-aeb-blind-spot
**Journalist:** Rex Driverton (investigations, FARS deep dives)
**News peg:** Oct 8, 2026 — IIHS released first-ever front crash prevention ratings for Class 3 pickups (GVWR 10,001–14,000 lbs) and cargo vans
**Working headline:** "America's Heaviest Pickups Just Flunked the Brake Test the Law Doesn't Require"

## Kill test
Genuinely newsworthy? YES. First-ever IIHS ratings for commercial-vehicle crash avoidance. IIHS president called it "a wake-up call for commercial vehicle makers." Fresh (Oct 8, 2026, two weeks before this run). Novel angle: the kinetic-energy/regulatory-gap cross-tab — the vehicles carrying the most kinetic energy on American roads are the ones the federal AEB mandate doesn't cover (FMVSS 127 tops out at 10,000 lbs GVWR; Class 3 starts at 10,001), and the first-ever tests of their brakes are a failure. Nobody in the coverage ran the KE numbers.

## Primary sources (3+)
1. IIHS, "Cargo vans and work pickups struggle in IIHS crash avoidance tests" (Oct 8, 2026) — https://www.iihs.org/news/detail/cargo-vans-and-work-pickups-struggle-in-iihs-crash-avoidance-tests — full ratings table, Harkey quote, child-dummy finding, motorcycle finding
2. NHTSA FMVSS No. 127 (finalized May 2024, effective Sept 1, 2029) — applies to passenger cars and light trucks ≤10,000 lbs GVWR; requires avoid-contact with lead vehicle up to 62 mph, auto-brake up to 90 mph, pedestrian detection up to 45 mph. Source: fleetmaintenance.com summary of the rule; AASHTO Journal summary; nelsonmullins legal analysis
3. NHTSA FARS bulk CSV 2014–2023 (via our fars_output.js): Ford F-250 909 deaths/rate 0.43; Ford F-350 164 deaths/rate 0.15; Ram 2500 153/0.13; Ford Transit 178/0.14; Dodge RAM (all variants) 4,407 deaths/rate 0.78
4. IIHS 2024 toll figure cited in release: 6,215 people killed in crashes involving heavy- or medium-duty vehicles or light vans = 16% of all U.S. roadway fatalities (38,800-40,000 range)

## Secondary sources
- motor.com (Oct 19, 2026) — IIHS commercial vehicle ratings writeup
- fordauthority.com (Oct 9, 2026) — Ford Transit poor/marginal detail; Transit "failed to produce a timely warning regardless of speed and position" in motorcycle trials
- carscoops.com (Oct 2026) — "some trucks lost sight of child-sized pedestrians as they approached"
- Detroit Free Press (Oct 8, 2026) — 11 commercial vehicles tested: 4 Class 3 pickups + 7 cargo vans

## Key facts from the IIHS release
- Class 3 pickups tested: 2025 Ford F-350, 2025–26 Chevy Silverado 3500HD, 2025–26 GMC Sierra 3500, 2025–27 Ram 3500. Cargo vans: BrightDrop 400, Express 2500, Transit T250, Savana 2500, Sprinter 2500, ProMaster 2500, Rivian RCV-Delivery 500.
- Vehicle-to-vehicle: F-350 / Silverado 3500HD / Sierra 3500 = POOR; Ram 3500 = Marginal. No pickup earned Good or Acceptable. Sprinter 2500 = Good (only one); BrightDrop 400 = Acceptable.
- Pedestrian: BrightDrop 400 & Rivian RCV-Delivery 500 = Good; Sprinter 2500 = Acceptable; F-350 & Ram 3500 = Acceptable. Chevrolet Express 2500 & GMC Savana 2500 = POOR in both — they have NO AEB, only optional forward collision warning. These are still being sold as 2025–27 model years.
- Motorcycle target: "the biggest challenge. Several systems did not issue warnings or slow at all in most of the motorcycle trials."
- Child dummy: tall front ends + sensors near the rearview mirror mean the child dummy was detected at distance then "disappeared" as the vehicle got closer. Several acceptable-rated trucks struggled more with the child in daylight than the adult at night.
- IIHS commercial vehicle program launched June 2026 with driver-protection checks (airbags, advanced belts); many government standards for passenger vehicles — including airbag requirements — don't apply to these vehicles at all.
- Test protocols and rating thresholds identical to passenger vehicles.

## Original contribution: the kinetic-energy math
KE = 1/2 m v². At the same speed, stopping-energy scales linearly with mass.
- A 14,000-lb GVWR Class 3 pickup at 62 mph carries ~2.44 MJ of kinetic energy; a 3,500-lb passenger car at 62 mph carries ~0.61 MJ — a 4.0x ratio.
- FMVSS 127 demands light vehicles avoid contact with a lead vehicle up to 62 mph. The mandate's per-vehicle life-saving projections (360 deaths/yr) were computed for light vehicles. No equivalent mandate exists above 10,000 lbs GVWR — precisely where the energy to dissipate is 2–4x higher.
- So: the first time IIHS has ever measured whether these trucks can brake themselves, all four pickups flunk the car-avoidance test, and federal law still won't require them to do it. The regulatory gap and the performance gap overlap exactly at 10,001 lbs GVWR.

## FARS cross-tab (our data, 2014–2023)
- F-250: 909 deaths, 90.9/yr, rate 0.43 — highest death count among named HD pickups
- F-350: 164 deaths, 16.4/yr, rate 0.15 — one of the lowest rates in the dataset
- Ram 3500: 0 recorded deaths (nameplate inconsistency — "Dodge RAM" carries 4,407 deaths across all variants; model granularity breaks down for HD variants)
- Ford Transit: 178 deaths, 17.8/yr, rate 0.14
- Important: FARS deaths count people killed in crashes *involving* the vehicle, including occupants of other vehicles. The low occupant-style rates for HD pickups don't capture the asymmetry — the people they kill.

## Strongest counterargument
HD pickups' FARS death rates are low (F-350 at 0.15 is near the dataset floor) — driven by professionals, maintained fleets, and the mass advantage protecting the driver. A low rating on an AEB test doesn't prove these trucks are killing people; the 6,215-death figure includes tractor-trailers, box trucks, and medium-duty vehicles, not just Class 3 pickups and cargo vans. The IIHS ratings also test factory-standard systems, and fleets routinely spec better driver-assist packages — ratings may understate equipped fleets. Also: no crashes, injuries, or deaths were reported from the specific AEB failures; this is prevention-capability measurement, not body counts.

## Limitations
- FARS 2014–2023 predates all tested vehicles (2025–27 models); can't directly correlate ratings to real-world fatalities.
- IIHS test targets are dummies at a closed track; motorcycle dummy ≠ real rider behavior; low-beam vs high-beam variance was significant.
- GVWR max (14,000) is a worst case — typical curb weight of an F-350 is ~6,500–7,800 lbs; the 4.0x KE ratio uses loaded GVWR against a light car. Even at curb weight (~7,000 vs 3,500 lbs) the ratio is 2x at identical speed — and KE grows with the square of speed, which is the real point.
- "Ram 3500: 0 deaths" in our FARS extract is a nameplate-normalization artifact, not evidence of zero fatalities.

## Actionable takeaways
- Fleet buyers: check IIHS's commercial vehicle ratings before the next order cycle — the Express 2500 / Savana 2500 (still on sale 2025–27) ship without AEB entirely; only the Sprinter 2500 earned Good in vehicle-to-vehicle; BrightDrop 400 and Rivian RCV-Delivery 500 lead on pedestrians.
- If you drive a Class 3 pickup for work: your truck's AEB was rated under the same protocol as a passenger car — and flunked. Do not assume it watches motorcycles; IIHS found several systems didn't brake at all in most motorcycle trials. Watch the mirrors like 2015.
- If you ride a motorcycle: the work trucks around you cannot reliably see you — their systems failed to warn OR brake in most trials. Give them the space they can't give themselves.
- Policy: FMVSS 127's 10,000-lb cutoff means the heaviest class of vehicles the average driver encounters daily is untouched by the 2029 AEB mandate. That cutoff deserves scrutiny.
