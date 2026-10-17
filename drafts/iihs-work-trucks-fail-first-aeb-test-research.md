# Research Notes: IIHS First Crash-Avoidance Ratings for Commercial Vehicles (Oct 8, 2026)

## Slug: iihs-work-trucks-fail-first-aeb-test
## Journalist: Mia Crumplezone (safety engineering beat — crash-avoidance tech)

## News Hook (October 8, 2026)
On Oct 8, 2026, IIHS released its first-ever vehicle-to-vehicle and pedestrian front crash prevention ratings for cargo vans and Class 3 heavy-duty pickups (GVWR 10,001-14,000 lbs). Four work pickups tested: not one earned a Good in either category.

### The Ratings (IIHS news release, embargoed Oct 8, 2026)
**Class 3 pickups — vehicle-to-vehicle:**
- Chevrolet Silverado 3500HD (2025-26): Poor
- Ford F-350 (2025): Poor
- GMC Sierra 3500HD (2025-26): Poor
- Ram 3500 (2026-27): Marginal

**Class 3 pickups — pedestrian:**
- F-350: Acceptable
- Ram 3500: Acceptable
- Silverado 3500HD: Marginal
- Sierra 3500HD: Marginal

**Cargo vans — standouts and failures:**
- Mercedes-Benz Sprinter 2500: Good (vehicle-to-vehicle), Acceptable (pedestrian) — the ONLY Good in V2V among 11 vehicles
- Chevrolet BrightDrop 400: Good (pedestrian)
- Rivian RCV-Delivery 500: Good (pedestrian)
- Ford Transit T250: Poor (V2V), Marginal (pedestrian) — pre-collision assist failed to warn in time in motorcycle scenarios, warnings only 0.6-1.6s before pedestrian impact
- Ram ProMaster 2500: Poor (V2V), Marginal (pedestrian)
- Chevrolet Express 2500: Poor/Poor — NO automatic emergency braking offered
- GMC Savana 2500: Poor/Poor — NO automatic emergency braking offered

**IIHS worst-case details:** Ford F-350 could only avoid a passenger-car target at 31 mph; in a 43-mph test it failed to reduce speed AT ALL. Chevy's systems never avoided the passenger car in all six tests. IIHS called motorcycle detection the biggest failure point across the board.

### Key Facts
- 9 of 11 vehicles rated marginal or poor on vehicle-to-vehicle; 7 of 11 rated Poor (the two lowest ratings)
- IIHS President David Harkey: "These results are a wake-up call for commercial vehicle makers."
- Stakes: 6,215 people died in 2024 in U.S. crashes involving heavy-/medium-duty vehicles or light vans = 16% of all traffic deaths (IIHS citing NHTSA data)
- IIHS aims to cut that number 30% by 2030
- No manufacturer announced a fix as of Oct 12, 2026
- Next: IIHS plans headlight evaluations, then Class 4-6 trucks

### Regulatory Gap (FMVSS 127)
- NHTSA finalized FMVSS 127 (AEB mandate) May 2024: requires AEB + pedestrian AEB on passenger cars and light trucks up to **10,000 lbs GVWR**, effective Sept 1, 2029
- Class 3 pickups (10,001-14,000 lbs): EXEMPT from the federal AEB mandate
- NHTSA projects FMVSS 127 saves at least 360 lives, prevents 24,000 injuries annually — none of which accrue to the commercial segment
- Heavy-truck AEB rule exists only as a proposal, on a separate regulatory track
- Many passenger-car standards (airbag requirements) also don't apply to these vehicles

### THE MATH — Original Contribution (FARS cross-tab, 2014-2023)
Cross-referencing the IIHS test roster against FARS per-model fatality data (estimated deaths per 100M VMT):
- Chevrolet Express: 475 deaths, rate **0.92**
- GMC Savana: 166 deaths, rate **0.54**
- Ford Transit: 178 deaths, rate **0.14**
- Ford F-350: 164 deaths, rate **0.15**

The two vans IIHS dinged for not offering AEB at all (Express, Savana) are also the two deadliest vans in FARS by estimated VMT rate:
- Express rate 0.92 vs Transit 0.14 = **6.6x the Transit**
- Savana rate 0.54 vs Transit 0.14 = **3.9x the Transit**

The lab results and the morgue ledger point the same direction: the oldest, AEB-less full-size vans are the ones killing occupants at multiples of the rate of the modern Transit. The market already ran this experiment for a decade and the AEB-less platform lost.

### Sources (4 primary)
1. IIHS news release, "Cargo vans and work pickups struggle in IIHS crash avoidance tests," embargoed Oct 8, 2026 (PDF): https://www.multivu.com/iihs/image/94234141-iihs-news-100826-emb-2.pdf
2. IIHS news page (go.iihs.org/news-cargo-vans) — cited via IIHS official YouTube release Oct 8, 2026: https://www.youtube.com/watch?v=4Qjv1_kMh2c
3. NHTSA FMVSS 127 final rule details (AASHTO Journal, May 2024): https://aashtojournal.transportation.org/nhtsa-finalizes-automatic-emergency-braking-mandate/
4. NHTSA FARS database 2014-2023 (cross-tabbed in fars_output.js): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
5. Autoblog, "Heavy-Duty Pickups Are Failing New Crash-Prevention Tests" (Oct 8, 2026): https://www.autoblog.com/news/heavy-duty-pickups-are-failing-new-crash-prevention-tests
6. Safety+Health Magazine, "IIHS unveils front crash prevention ratings for small commercial vehicles" (Oct 16, 2026): https://www.safetyandhealthmagazine.com/iihs-unveils-front-crash-prevention-ratings-for-small-commercial-vehicles/

### Kill Test
Is this genuinely newsworthy after 1,190+ articles? YES.
- Site covered the June/July driver-protection checklist phase (iihs-heavy-truck-first-scorecard) — but NEVER the Oct 8 crash-avoidance test results
- First-ever lab-grade AEB ratings for commercial vehicles; all four heavy-duty pickups flunked
- The Express/Savana FARS cross-tab (6.6x/3.9x fatality multiples on the two AEB-less vans) is a novel finding no coverage ran
- The regulatory punchline: FMVSS 127's 2029 AEB mandate draws the line at 10,000 lbs — every vehicle in this test sits above it

### Strongest Counterargument
IIHS tests measure lab performance, not crash outcomes: a Poor rating means the system missed under a specific protocol, not that these trucks kill more people. Heavy-duty pickups have intrinsically low fatality rates in FARS (F-350: 0.15/100M VMT — one of the safest vehicles in the database). AEB ratings and occupant death rates answer different questions; conflating them is the actuary's original sin. Ford and GM may also argue their fleets skew to low-mileage work cycles where low-speed crashes dominate and high-speed AEB matters less. And the 2029 mandate exemption for >10,000 lbs is a policy gap, not a defect: NHTSA made a cost-benefit call for a segment with different duty cycles.

### Limitations
- FARS window is 2014-2023; IIHS tested 2025-2027 model years. Rates reflect older model mixes, not the tested vehicles.
- FARS per-model rates are estimated from fleet/VMT estimates, not odometer data; ±15% uncertainty for low-volume models
- FARS fatality rates are occupant deaths only; they don't measure danger these vehicles pose to OTHER road users (where 6,215 deaths/year live)
- express/savana fatality multiples are correlation, not causation: age of platform, usage patterns (construction, towing), and driver behavior confound the AEB hypothesis
- IIHS test scores are manufacturer-reported vehicles under lab conditions; field performance may differ
