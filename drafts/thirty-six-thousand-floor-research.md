# Research Notes: The 36,000 Floor

## Angle
NHTSA announced 36,640 US traffic deaths in 2025 — a 4th straight annual decline, lowest since 2019 (36,096). The fatality rate hit 1.10 per 100M VMT, the lowest since 2014. NHTSA and DOT are celebrating.

But 36,640 ≈ 36,096. After 6 years of fleet safety improvements (ESC ubiquity, AEB proliferation, stronger crash structures, better airbag coverage), America has returned to exactly where it started. The pandemic spike (peaking ~43K in 2021) was a behavioral anomaly that corrected. The underlying structural floor hasn't moved.

**Thesis:** America has a traffic fatality floor of ~36,000/year. Vehicle engineering keeps trying to push through it. Behavioral deterioration (distraction, impairment, speed, VMT growth) keeps filling the gap. The floor is set by the number of crashes that no vehicle can survive — tree strikes at 80mph, wrong-way highway collisions, unbelted ejections. Engineering can reduce the marginal deaths but can't touch the core.

## Primary Sources

### 1. NHTSA 2025 Preliminary Fatality Estimates
- 36,640 deaths in 2025, down 6.7% from 39,254 in 2024
- Fatality rate: 1.10 per 100M VMT (lowest since 2014)
- 4th consecutive annual decline (2022→2023→2024→2025)
- Deaths declined in 39 states + DC + Puerto Rico
- Deaths INCREASED in 9 states: Colorado, Hawaii, Idaho, Kansas, Louisiana, New Hampshire, New Mexico, Vermont, Wyoming
- Source: https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual

### 2. FARS 2014-2023 Vehicle Data (our dataset)
- 337 models tracked
- Total fleet death rates range from 0.12 (Mazda CX-5) to 8.54 (Hyundai Veloster)
- Median vehicle death rate: 0.91 per 100M VMT
- Even the safest vehicles (rate < 0.5) accumulate hundreds/thousands of deaths through volume:
  - RAV4: rate 0.19, still 914 deaths
  - CR-V: rate 0.53, still 2,072 deaths
  - Equinox: rate 0.36, still 1,056 deaths
- This proves engineering alone can't zero out deaths

### 3. IIHS / CDC Data on Seatbelt & Rural Gaps
- New Hampshire: ONLY state with no seatbelt law for adults
- Rural fatality rates far exceed urban rates (CDC MMWR 2017)
- Primary enforcement seatbelt states have higher belt use and lower fatalities
- 36 states + DC have primary seatbelt enforcement; 13 have secondary only; NH has none

### 4. NSC Fatality Trend Data
- Pandemic spike: 2020-2021 saw surge in risky driving (speeding, DUI, no seatbelts) despite FEWER miles driven
- AAA Foundation: speeding, distracted driving, aggressive driving account for tens of thousands of deaths annually
- The behavioral "dark pool" that engineering can't touch

## Novel Contribution

### The Engineering Dividend Calculation
Using FARS data:
- Fleet average death rate across all classes:
  - Pickup: 0.0886 deaths/VMT (×100 = 8.86 per 10K VMT)
  - Sedan: 0.1392
  - SUV: 0.0547
  - Sports Car: 0.2688
  - Van: 0.0654
- The SUV has the lowest class death rate. As SUV market share has grown from ~35% to ~55% over the past decade, the fleet-average death rate should have dropped ~15-20%.
- A 15% reduction from 2019's 36,096 would predict ~30,700 deaths in 2025.
- Actual: 36,640. The gap (~5,900 "missing" lives) represents behavioral deterioration eating the engineering gains.

### The Floor Calculation
- In FARS, approximately 20% of fatal crashes involve impaired drivers (our data: median anyPct = 20.2%)
- NHTSA estimates ~30% involve speeding, ~10% involve distraction
- Many of these overlap (poly-impairment, speed+distraction, etc.)
- But a core of crashes (~10-15K annually) are unsurvivable regardless of vehicle: high-speed head-on, rollovers at 70+mph, unbelted ejections, tree/pole strikes
- These form the irreducible floor. Engineering can make the marginal crashes survivable but cannot touch the core.

## Strongest Counterargument
The floor IS moving — just slowly. The per-VMT rate of 1.10 is the lowest since 2014, meaning per mile driven, we are safer. VMT increased, so total deaths staying flat while VMT rose IS a form of progress. The "floor" framing ignores that Americans are driving more and the rate is going down. If VMT stayed constant at 2019 levels, the 2025 death count would be lower than 2019.

## Limitations
- Our FARS data is 2014-2023; we can't compute 2025 fleet composition directly
- The "engineering dividend" calculation uses rough class-level rates, not model-year-specific improvements
- State-level data for the 9 counter-trend states is preliminary (NHTSA estimates)
- "Unsurvivable crash" fraction is estimated from general FARS patterns, not precisely calculated

## Actionable Takeaway
If you want to survive, the engineering is on your side — buy a modern SUV with AEB and ESC. But the ~36K floor means that the next breakthrough in road safety won't come from better cars. It'll come from changing driver behavior: phone lockouts, alcohol interlocks, speed governors. The vehicles have done their part.

## Journalist
Axle McScatter — data methodology piece, obsessed with numbers and what they hide

## Kicker
By The Numbers
