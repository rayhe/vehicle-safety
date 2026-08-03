# Research: The Light Truck Split — Pickups vs SUVs Diverge in 2024 FARS

## Core Finding
NHTSA classifies pickups and SUVs together as "light trucks." In 2024 FARS, they diverged in opposite safety directions:

### Pickups (improving):
- Deaths: 4,321 → 4,111 (-210, -4.9%)
- Injuries: 240,323 → 218,231 (-22,092, **-9.2% statistically significant**)

### SUVs (deteriorating):
- Deaths: 6,901 → 7,013 (+112, **+1.6% — ONLY vehicle category where deaths increased**)
- Injuries: 694,288 → 723,240 (+28,952, +4.2%)

### Combined "light truck" line hides this:
- Light truck deaths: 12,189 → 12,038 (-151, -1.2%) — looks like minor improvement
- Light truck injuries: 1,028,302 → 1,031,049 (+2,747, +0.3%) — looks flat

The aggregate masks a 14-point injury swing: pickups down 9.2%, SUVs up 4.2%.

## Why This Matters
1. NHTSA reports "light trucks" as a single line item in its annual report
2. Policymakers, insurers, and consumers see one number for both categories
3. The pickup improvement suggests design/engineering/enforcement is working for work trucks
4. The SUV deterioration suggests the mass migration from sedans to SUVs is creating problems

## Sources
1. NHTSA, "Overview of Motor Vehicle Traffic Crashes in 2024," DOT HS 813 791, April 2026. Table 3. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813791
2. IIHS state-by-state fatality data, posted June 2026. https://www.iihs.org/topics/fatality-statistics/detail/state-by-state
3. FARS 2014-2023 per-model data (fars_output.js) — internal dataset

## FARS Per-Model Context (2014-2023 cumulative)
- Top pickups by volume: Silverado (9,591 deaths, 1.25 rate), F-150 (9,194, 1.04), Sierra (3,337, 1.01)
- Top SUVs by volume: Explorer (3,797, 1.54), Tahoe (2,592, 2.49), Trailblazer (2,473, 2.83)
- Weighted avg death rate: Pickups 1.34, SUVs 1.28 — VERY close historically
- But the 2024 trend shows SUVs diverging upward

## Possible Explanations
- Fleet growth: SUV registrations growing 5-7% annually; more SUVs = more exposure
- Fleet composition: older SUVs (pre-ESC era) aging into high-mileage, high-risk phase
- Driver demographics: SUV buyers trending younger, less experienced
- Overconfidence effect: research shows SUV drivers take more risks (higher seating, feeling of invincibility)
- Pickup fleet renewal: construction/fleet sector replacing older trucks faster due to tax incentives (Section 179)

## Journalist
Rex Driverton — data investigation, paradox in the numbers

## Self-Critique Gate
Angle: NHTSA's "light truck" category is hiding a safety divergence between pickups and SUVs
Challenge: Is this genuinely surprising after 674 articles? YES — we've never examined the within-category split. We've covered SUV deaths increasing and sedan extinction, but never the PICKUP improvement as a contrast within the same classification.
Verdict: PROCEED
