# Research: Pickup Deaths Rising While National Rate Falls

## Angle
The national fatality rate dropped to 1.06 per 100M VMT in H1 2025 — lowest since 2014. But IIHS 2024 occupant data reveals pickup truck occupant deaths rose 31% from 2018-2024 while car deaths fell 11% and SUV deaths fell 4%. The total passenger vehicle occupant death count barely moved (~22,500 → ~22,450). America isn't killing fewer people on the road — it's just shifting WHO dies.

## Self-Critique Gate
**Proposed:** National fatality rate decline masks a vehicle-class divergence where pickup deaths surge while sedan deaths fall — a zero-sum shift.
**Challenge:** Is this genuinely surprising after 478 articles? We have pickup-body-count, pickup-size-death-inversion, pickup-zombie-fleet, etc.
**Verdict:** PROCEED — the specific IIHS 2024 rollover/non-rollover split showing pickup non-rollover deaths surged 51% in 6 years is a novel cross-tabulation not covered in any existing article. The zero-sum math (net change ~0) is an original calculation. The timing with 2025 H1 data makes it timely.

## Primary Sources (3+)

### 1. IIHS Passenger Vehicle Occupant Deaths Data (2024)
- URL: https://www.iihs.org/topics/fatality-statistics/detail/passenger-vehicle-occupants
- Data (from rollover breakdown table):
  - 2018: Car rollover=2,678 (20%), Car non-rollover=10,588 (80%) | SUV rollover=1,679 (40%), SUV non-rollover=2,542 (60%) | Pickup rollover=2,119 (42%), Pickup non-rollover=2,950 (58%)
  - 2024: Car rollover=2,412 (20%), Car non-rollover=9,357 (80%) | SUV rollover=1,553 (38%), SUV non-rollover=2,481 (62%) | Pickup rollover=2,200 (33%), Pickup non-rollover=4,448 (67%)
- Key findings:
  - Pickup non-rollover deaths: 2,950 → 4,448 = +50.8% (2018-2024)
  - Pickup rollover deaths: 2,119 → 2,200 = +3.8% 
  - Car total deaths: 13,266 → 11,769 = −11.3%
  - SUV total deaths: 4,221 → 4,034 = −4.4%
  - Pickup total deaths: 5,069 → 6,648 = +31.2%
  - Total passenger vehicle deaths: 22,556 → 22,451 = −0.5%

### 2. NHTSA Early Estimates — 2025 H1 (released 2025)
- URL: https://www.nhtsa.gov (Traffic Crash Deaths | Early Estimates Jan-June 2025)
- 17,140 deaths in H1 2025 (down 8.2% from 18,680 in H1 2024)
- Fatality rate: 1.06 per 100M VMT — lowest mid-year rate since 2014
- VMT increased by 12.1 billion miles during H1 2025

### 3. NHTSA Early Estimates — 2024 Full Year
- URL: https://www.nhtsa.gov 
- 39,345 deaths in 2024 (down 3.8% from 40,901 in 2023)
- First time below 40,000 since 2020
- Rate: 1.20 per 100M VMT (lowest since 2019, but still above pre-COVID avg of 1.13)

### 4. FARS Per-Model Data (2014-2023)
- Source: NHTSA FARS bulk CSV, processed in fars_output.js
- 26 pickup models, 41,593 total deaths, 85,128 fatal crashes
- Pickup share: 21.8% of all FARS deaths from only 26 models (vs 145 sedan models with 46.6%)
- Top killers: Silverado (9,591), F-150 (9,194), Ram (4,407), Sierra (3,337), Ranger (3,089)
- Highest rate pickups: S-10 (4.83), Ranger (2.91), Dakota (2.62), Sonoma (2.13), GMT-400 (1.81)
- Lowest rate: Ram 1500 (0.13), Colorado (0.28), F-250 (0.43)

## Original Contribution
1. Zero-sum calculation: Total passenger vehicle occupant deaths barely changed (22,556 → 22,451 = −0.5%) while the MIX shifted dramatically. Sedans shed ~1,500 deaths/yr, pickups gained ~1,580. Net: approximately zero.
2. Non-rollover pickup death surge quantified: +50.8% (2018-2024). ESC mandate "solved" rollover for pickups (proportion dropped 42% → 33%) but non-rollover deaths filled the gap and then some.
3. Per-death-per-crash efficiency: FARS pickups average 0.49 deaths per fatal crash (41,593/85,128) vs sedans at 0.65 (89,127/138,154). Pickup crashes kill more people OUTSIDE the truck — but the ones dying inside are increasingly from non-rollover impacts.

## Journalist
Axle McScatter — Data Visualization Editor. National trend piece with counterintuitive finding. His "I ran the numbers" style fits perfectly.

## Kicker
Trend Watch
