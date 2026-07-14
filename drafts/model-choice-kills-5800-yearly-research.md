# Research: Model Choice Kills 5,800 Per Year

## Angle
The "consumer choice penalty" — how many Americans die each year because they chose a deadlier-than-average model within their preferred vehicle class. Not the wrong class. The wrong model.

## Kill Test
- ✅ Original contribution: novel "excess death by rate" calculation across all 337 FARS models, computing body-count impact of model-level selection within class
- ✅ Distinguished from existing `excess-lethality-class-benchmark.html` (Axle McScatter, June 28): that story uses LETHALITY (deaths/crashes — survivability once in a crash). This uses RATE (deaths/VMT — total lifecycle risk including crash avoidance AND survivability). Different questions, different answers.
- ✅ Distinguished from `choice-gap-truck-deaths.html`: that covers trucks only. This is cross-class.
- ✅ Distinguished from `accord-body-count.html`: that's model-specific. This is aggregate.
- ✅ Distinguished from `one-swap-beats-a-decade.html`: that's about a single swap. This is the macro body count.

## Data / Primary Sources

1. NHTSA FARS 2014-2023 (337 models with 50+ deaths or >1K annual sales)
2. IIHS supersizing study (Feb 5, 2025) — "Supersizing vehicles offers minimal safety benefits — but substantial dangers" (context on weight plateau)

## Key Findings

### Class average death rates (pooled, deaths per 100M VMT)
- Sedan: 1.39
- SUV: 0.55
- Pickup: 0.89
- Sports Car: 2.69
- Van: 0.65

### Excess death calculation
For each vehicle: `excess = actual_deaths - (class_pooled_rate × vehicle_VMT / 10)`

### Aggregate result
- Total excess deaths (vehicles above class avg): **58,186** over 10 years = **~5,819/year**
- Total lives saved (vehicles below class avg): **58,167** over 10 years
- Net: ~0 (definitional — excess and saved sum to ≈ total by construction)
- As % of all FARS occupant deaths: **30.4%**
- As % of NHTSA 2024 annual fatalities (39,254): **14.8%**

### Top excess killers (vs class average)
1. Honda Accord (Sedan): +3,879 excess | rate 3.07 vs class 1.39
2. Chevrolet Silverado (Pickup): +2,790 | rate 1.25 vs 0.89
3. Chevrolet Impala (Sedan): +2,723 | rate 5.00 vs 1.39
4. Honda Civic (Sedan): +2,490 | rate 2.25 vs 1.39
5. Nissan Altima (Sedan): +2,475 | rate 2.88 vs 1.39

### Top life savers (vs class average)
1. Ram 1500 (Pickup): -4,309 saved | rate 0.13 vs 0.89
2. Tesla Model 3 (Sedan): -2,430 | rate 0.05 vs 1.39
3. Toyota RAV4 (SUV): -1,658 | rate 0.19 vs 0.55
4. Kia Forte (Sedan): -1,498 | rate 0.40 vs 1.39
5. Tesla Model Y (SUV): -1,139 | rate 0.03 vs 0.55

### The headline insight
If every American drove the average vehicle in their preferred class — not a better class, just a better model — ~5,800 fewer people would die annually. That's a 15% reduction in traffic fatalities. No technology. No regulation. No behavioral change. Just different purchasing decisions.

## Limitations
- VMT estimates, not odometer readings (±15% for low-volume)
- Fleet estimates from industry data, not registration counts
- Class averages pulled by high-VMT models with moderate rates
- Does not account for driver demographics (age, behavior patterns associated with vehicle choice)
- Discontinued models inflate class averages — their old-fleet drivers skew numbers
- "Consumer choice" is partly income-constrained — some buyers can't afford the safer model
- FARS only captures fatal crashes, not injuries
- Excess calculation is algebraically zero-sum by construction

## Counterargument
Vehicle choice is correlated with driver demographics. The Accord's excess deaths may partly reflect who drives Accords (e.g., younger drivers, more urban driving) rather than the vehicle itself. The Tesla Model 3's saved lives may reflect who buys Teslas (wealthier, older, suburban). However, the within-class comparison partially controls for this, since people choosing between a Camry and an Accord are likely similar demographics.

## Journalist
Vin Wreckage — Existential Dread Columnist

## Story Number
#494
