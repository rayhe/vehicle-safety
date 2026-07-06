# Research: Kia Forte POOR Headlights for Six Years

## Story Angle
Kia sold the Forte compact sedan with IIHS POOR-rated headlights on every volume trim for six consecutive model years (2019–2024). The LED projector headlights that earned a GOOD rating were available on the GT trim the entire time — same factory, same assembly line. Instead of making LEDs standard across the lineup, Kia discontinued the Forte and replaced it with the K4, which finally ships LED headlights on all trims. The K4 was recalled for seatbelt defects within months of launch.

## Primary Sources

### 1. IIHS Headlight Ratings — Kia Forte
- **2022–2024 Forte (FE, LXS, GT-Line trims):** Overall headlight rating: **POOR**
  - Low-beam headlight type: Halogen projector
  - High-beam headlight type: Halogen projector
  - Curve-adaptive: No
  - High-beam assist: No
  - Low beams straightaway: right edge 88.2m, **left edge 47.4m**
  - Curves: "inadequate in all 4 tests"
  - Source: https://www.iihs.org/ratings/vehicle/kia/forte-4-door-sedan/2022

- **2019–2021 Forte base trims (FE, LXS, EX):** Overall headlight rating: **POOR**
  - Low-beam headlight type: Halogen projector
  - High-beam headlight type: Halogen reflector
  - Low beams straightaway: right edge 96.3m, **left edge 22.5m**
  - Curves: "inadequate in all 4 tests"
  - Source: https://www.iihs.org/ratings/vehicle/kia/forte-4-door-sedan/2020

- **2019–2021 Forte GT trim:** Overall headlight rating: **GOOD**
  - Low-beam headlight type: LED projector
  - High-beam headlight type: LED projector
  - High-beam assist: Yes
  - Low beams straightaway: right edge 131.7m, **left edge 68.3m**
  - Curves: "good on both right curves and fair on both left curves"
  - Source: https://www.iihs.org/ratings/vehicle/kia/forte-4-door-sedan/2020

### 2. NHTSA FARS Data — Kia Forte
- Total deaths (2014–2023): **604**
- Estimated fleet rate: **0.40 per 100K registrations**
- Lethality ratio: 0.668
- Model year deaths (2019–2023): **216 deaths (35.9% of total)**
- Source: NHTSA FARS 2014–2023 via fars_output.js

### 3. NHTSA Recall — K4 Seatbelt Buckle (26V-081)
- **Vehicles affected:** 1,371 K4 hatchback + 13,499 Telluride (same campaign)
- **Defect:** Samsong Mexico incorrectly assembled third-row center seatbelt buckle mechanisms
- **Result:** Stop-sale order issued
- **Timeline:** March 2026
- Source: https://www.nhtsa.gov/recalls

### 4. NHTSA Consumer Complaints — Kia Forte
- **2020 Forte GT (May 2026 complaint):** Turbo engine full of metal shavings at 37K miles. Same "infamous recalled Kia engines" issue but not recalled because of low production volume.
- **2022 Forte (complaint):** Driver door popping open while driving, seatbelt randomly releasing.
- **2022 Forte (complaint):** IIHS "Poor" headlight rating, inadequate illumination at night.
- Source: https://www.nhtsa.gov/complaints

## Original Contribution: Reaction-Time Deficit Calculation

Using IIHS illumination distance data and AASHTO stopping sight distance standards:

**2019–2021 Forte base trims, left edge:**
- Illumination distance: 22.5m (73.8 feet)
- At 45 mph (20.1 m/s): visibility = 1.12 seconds
- AASHTO perception-reaction time standard: 2.5 seconds
- **Deficit: -1.38 seconds** — you need to react 1.38 seconds BEFORE the obstacle enters the beam
- At any speed above ~20 mph, you are overdriving these headlights on the left side

**2022–2024 Forte base trims, left edge:**
- Illumination distance: 47.4m (155.5 feet)
- At 45 mph (20.1 m/s): visibility = 2.36 seconds
- AASHTO perception-reaction time: 2.5 seconds
- **Deficit: -0.14 seconds** — still insufficient, and this doesn't include braking distance

**For comparison — 2019–2021 Forte GT trim (LED), left edge:**
- Illumination distance: 68.3m (224.1 feet)
- At 45 mph: visibility = 3.40 seconds
- **Surplus: +0.90 seconds** — enough time to perceive, react, and begin braking

The LED headlights on the GT provided 3x the left-edge illumination distance of the 2019–2021 base trims (68.3m vs. 22.5m). Kia had the engineering solution in-house for the entire production run.

## Limitations
- IIHS headlight tests are laboratory track tests; real-world conditions vary with road geometry, ambient lighting, weather, and oncoming headlights
- FARS cannot attribute specific fatalities to headlight inadequacy vs. other factors
- The IIHS headlight rating scale was introduced in 2016 and has been updated; older ratings may not be directly comparable
- FARS estimated_rate uses VMT estimates from registration/travel survey data, not odometer readings, introducing ±15% uncertainty for moderate-volume models

## Strongest Counterargument
IIHS headlight ratings are one of many safety dimensions. The Forte earned GOOD ratings in all IIHS crashworthiness tests (small overlap front, moderate overlap front, side, roof strength) and GOOD in front crash prevention. A car can have Poor headlights and still be structurally sound in a crash. The 0.40 death rate is among the lowest for compact sedans — suggesting the Forte protects occupants well when collisions occur. The headlight deficit is a prevention-layer failure, not a protection-layer failure.
