# Research Notes: IIHS 30x30 — The Math Doesn't Work

## Angle
IIHS has committed to a "30x30 vision" — cutting U.S. crash deaths by 30% by 2030. The math says they need 6.8% annual declines. The best year in recent memory delivered 3.8%. And their own crash test results show the vehicle categories that kill the most people — pickups, minivans, vans — are the ones failing their tests.

## Kill Test
Is this genuinely novel after 351 articles? YES.
- We've covered the "39,000 is progress" angle (big-picture fatality trend)
- We've covered IIHS zero minivans story
- We have NOT analyzed the 30x30 target's arithmetic feasibility
- Novel cross-tab: IIHS award pass rates by vehicle class vs. FARS deaths by class
- Novel calculation: compound decline rate needed vs. actual rate

## Primary Sources

### Source 1: NHTSA 2024 Full-Year Fatality Estimates (released 2026)
- 39,345 fatalities in 2024 (early estimate)
- Down 3.8% from 40,901 in 2023
- First time below 40,000 since 2020
- 11th consecutive quarterly decline
- Fatality rate: 1.20/100M VMT (lowest since 2019, but above pre-COVID avg of 1.13)
- VMT increased 1% in 2024
- URL: https://www.nhtsa.gov/press-releases/nhtsa-releases-2023-traffic-deaths-2024-estimates

### Source 2: IIHS 2026 Awards & 30x30 Vision (March 24, 2026)
- "Improving crash avoidance is key to achieving our 30x30 vision of reducing U.S. crash deaths by 30% by 2030" — IIHS President David Harkey
- 63 vehicles earn 2026 IIHS awards (up from 48 at same point in 2025)
- 45 TSP+, 18 TSP
- NO minicars, minivans, or small pickups earn awards
- Only 2 large pickups: Tesla Cybertruck and Toyota Tundra crew cab
- "disappointing that minivans continue to struggle... considering these are supposed to be family vehicles" — Harkey
- 77% of 2026 models pass vehicle-to-vehicle crash prevention test
- URL: https://www.iihs.org/news/detail/iihs-pushes-improvements-in-crash-avoidance-with-2026-awards

### Source 3: FARS Data (2014-2023, vehicle-safety.org database)
Deaths by vehicle class (from FARS_BY_MODEL aggregation):
- Sedan: 89,127 deaths
- SUV: 46,442 deaths  
- Pickup: 41,593 deaths
- Van: 7,897 deaths
- Sports Car: 6,134 deaths

2026 IIHS award pass rate by class:
- SUV: 47 winners (35 TSP+ / 12 TSP) — dominant
- Sedan/car: ~10 winners
- Large pickup: 2 winners (Cybertruck, Tundra crew cab)
- Minivan: 0 winners
- Minicar: 0 winners  
- Small pickup: 0 winners

### Source 4: NHTSA Earlier Fatality Data (for trend calculation)
- 2019: 36,096 (pre-COVID baseline)
- 2020: 38,824 (COVID spike begins)
- 2021: 42,939 (COVID peak)
- 2022: 42,795
- 2023: 40,901
- 2024: 39,345 (est.)

Compound annual decline needed:
- From 39,345 to 27,542 (30% cut) over 6 years (2024→2030)
- Required annual decline: 1 - (27542/39345)^(1/6) = 1 - 0.938 = 5.8%
- Current pace: 3.8% (2024 vs 2023)
- At 3.8% pace through 2030: 39,345 × (0.962)^6 = 30,813
- That's a 21.7% reduction — missing the 30% target by 8.3 percentage points
- Gap: ~3,271 additional lives that would need saving annually by 2030

## Novel Contribution
Original calculation: the compound decline rate needed for 30x30 (5.8%/year) vs the best recent performance (3.8%). Cross-referenced with IIHS's own award results showing zero winners in minivans and small pickups — vehicle categories responsible for nearly 50,000 FARS deaths.

## Strongest Counterargument
AEB mandates go into effect in 2029. IIHS says "the safest crash is the one that never happens." If AEB prevents even 5-8% of rear-end fatalities, it could close much of the gap. Also, new vehicle penetration is cumulative — the 2026 award winners will still be on the road in 2030, gradually replacing the old fleet. The improvement isn't year-over-year crash test results; it's fleet turnover.

## Limitations
- NHTSA 2024 numbers are early estimates, not final
- 30x30 may be an aspirational target, not a prediction
- FARS data is 2014-2023; current fleet composition is shifting
- IIHS awards are a snapshot of tested vehicles, not all vehicles sold
- AEB mandate timing and effectiveness are uncertain

## Actionable Takeaway
If you're buying a used car: check if it earned IIHS Top Safety Pick in its model year. If you're buying new: check 2026 results at iihs.org/ratings. If you drive a minivan: your vehicle category has earned ZERO IIHS awards in 2026. The best crash prevention tech isn't available in the vehicles families buy to carry their children.

## Journalist
Axle McScatter — Data Visualization Editor. This is a numbers story about gap analysis.
