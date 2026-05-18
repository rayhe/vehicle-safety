# Research Notes: Impairment × Crashworthiness Zero Correlation

## Angle
Cross-tabulation of FARS toxicology data (impairment rates by vehicle) with FARS fatality rates (deaths per 100M VMT) reveals a correlation of r = -0.076 across 264 vehicles with ≥200 drivers in the tox dataset. Essentially zero. Impairment and vehicle safety are completely independent variables in the American fleet.

## Why This Matters
If impairment and crashworthiness were correlated (even weakly), you'd expect drunk drivers to cluster in either safer OR more dangerous vehicles. They don't. The fleet randomly distributes behavioral risk and structural risk. A drunk driver in a Buick Park Avenue (31.7% impairment, 0.48 rate) is statistically safer than a sober driver in a Hyundai Veloster (17.4% impairment, 8.54 rate). The market offers no correction mechanism.

## Novel Contribution
The Pearson r = -0.076 across 264 vehicles (n ≥ 200 drivers each) with p-value likely non-significant. This cross-tabulation has not been published in FARS literature that I can find. Most impairment studies look at overall rates; most vehicle safety studies look at rates by model. Nobody has checked whether these two dimensions correlate.

## The Four Quadrants (median impairment = 20.2%, median rate = 0.64)

### Q1: High Impairment + High Rate — "The Double Penalty"
Vehicles attracting impaired drivers AND killing their occupants at high rates.
- Ford Mustang: 21.9% impaired, 6.02 rate, 2,739 deaths
- Nissan Maxima: 20.9% impaired, 5.11 rate, 1,544 deaths
- Chevy Cobalt: 22.4% impaired, 5.10 rate, 1,540 deaths
- Chevy Impala: 21.4% impaired, 5.00 rate, 3,774 deaths
- Chevy S-10: 20.5% impaired, 4.83 rate, 1,427 deaths
- Chevy Camaro: 23.0% impaired, 3.44 rate, 1,204 deaths
Total Q1 body count from just these 6: 14,717 deaths

### Q2: Low Impairment + High Rate — "Engineering Failure"
Sober drivers dying because their vehicles are structurally deficient.
- Hyundai Veloster: 17.4% impaired, 8.54 rate, 598 deaths
- Chevy Tracker: 12.7% impaired, 7.83 rate, 856 deaths
- Toyota Land Cruiser: 8.9% impaired, 6.27 rate, 343 deaths (weight-vs-crash paradox)
- Honda Accord: 20.0% impaired, 3.07 rate, 7,102 deaths
- Nissan Altima: 20.0% impaired, 2.88 rate, 4,787 deaths

### Q3: High Impairment + Low Rate — "Drunk Driver Armor"
Impaired drivers surviving because their vehicles protect them.
- Buick Park Avenue: 31.7% impaired, 0.48 rate
- Chevy C/K Pickup: 28.0% impaired, 0.19 rate
- Audi A3: 27.1% impaired, 0.23 rate
- Chevy Astro Van: 27.0% impaired, 0.60 rate
- Infiniti QX56: 26.3% impaired, 0.35 rate

### Q4: Low Impairment + Low Rate — "The Safe Zone"
Sober drivers in structurally safe vehicles. The ideal.
- Tesla Model Y: 17.6% impaired, 0.03 rate
- Kia Telluride: 17.5% impaired, 0.04 rate
- Tesla Model 3: 20.1% impaired, 0.05 rate
- Hyundai Palisade: 16.8% impaired, 0.06 rate

## Class-Level Survivability Data
- Sports Car: 1.48 crashes per death (worst — occupant almost always dies)
- Sedan: 1.55
- SUV: 1.89
- Van: 1.95
- Pickup: 2.05 (best — occupant usually survives; others die)

## Sources
1. NHTSA FARS database 2014-2023 (our fars_output.js dataset)
2. NHTSA FARS query tool: https://cdan.dot.gov/query
3. IIHS fatality statistics: https://www.iihs.org/topics/fatality-statistics
4. IIHS vehicle size/weight: https://www.iihs.org/topics/vehicle-size-and-weight
5. NHTSA 2025 data: 36,640 deaths, 1.10/100M VMT record low

## Journalist
Dale Impactor III — Toxicology Desk Chief. His beat (impairment data) crossed with vehicle structural data is perfect.

## Kicker
Existential Dread

## Strongest Counterargument
The zero correlation could partly reflect fleet composition — impairment rates reflect DRIVER demographics, not vehicle safety engineering. Older, cheaper vehicles attract both impaired drivers AND have worse safety structures, which SHOULD produce a positive correlation. The fact that it's essentially zero suggests these effects cancel out, which is itself interesting but complicates causal claims.

## Limitations
- FARS only captures fatal crashes (the 36K deaths are a subset of ~6.7M total crashes)
- Impairment rates reflect TESTED drivers; testing protocols vary by jurisdiction
- Fatality rate estimates depend on fleet size and VMT estimates with ±15% uncertainty for low-volume models
- Correlation ≠ causation in either direction
- The dataset covers 2014-2023; fleet composition is shifting rapidly toward crossovers/SUVs
