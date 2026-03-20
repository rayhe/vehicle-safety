# Research: Brand Safety Roulette

## Angle
The within-brand safety spread is enormous. "Buy a Toyota" or "buy a Chevrolet" is meaningless safety advice when the death rate varies 33-39x within a single brand's showroom. The novel finding: some brands are safe bets (low spread, any model is OK) while others are roulette wheels.

## Journalist
Clara Rollover — Consumer Safety Advocate (car-buying guidance, class comparisons, "what this means for you")

## Kicker
The Gap

## Key Data (from FARS 2014-2023, FARS_BY_MODEL, models with 200+ deaths)

### Brand Consistency Rankings (standard deviation of death rates)

**SAFEST BETS (tight spread, buy blind):**
- Kia: 6 models, 0.28-1.07 rate, 3.8x spread, stdev 0.27
- Subaru: 5 models, 0.26-0.95 rate, 3.7x spread, stdev 0.24
- Chrysler: 5 models, 1.18-1.87 rate, 1.6x spread, stdev 0.26 (but higher floor)
- Jeep: 6 models, 0.41-1.73 rate, 4.2x spread, stdev 0.46

**MODERATE SPREAD:**
- Buick: 4 models, 0.52-2.67 rate, 5.1x spread, stdev 0.97
- GMC: 6 models, 0.29-2.55 rate, 8.8x spread, stdev 0.88
- Honda: 6 models, 0.29-3.07 rate, 10.6x spread, stdev 1.01
- Dodge: 10 models, 0.23-2.62 rate, 11.4x spread, stdev 0.66

**ROULETTE WHEELS (massive spread, model choice critical):**
- Ford: 14 models, 0.43-6.02 rate, 14.0x spread, stdev 1.39
- Nissan: 12 models, 0.35-5.11 rate, 14.6x spread, stdev 1.29
- Hyundai: 6 models, 0.34-8.54 rate, 25.1x spread, stdev 2.88
- Toyota: 14 models, 0.19-6.27 rate, 33.0x spread, stdev 1.62
- Chevrolet: 25 models, 0.2-7.83 rate, 39.1x spread, stdev 1.81

## Novel Contribution
Cross-tabulation: within-brand standard deviation of death rates per 100M VMT. No public analysis compares brand-level consistency this way. The finding contradicts the common heuristic of "buy Brand X for safety."

## Specific Insights
1. **Hyundai has the highest stdev (2.88)** despite only 6 models — Veloster (8.54) vs Tucson (0.34). One model is 25x deadlier than another from the same brand.
2. **Toyota: RAV4 (0.19) vs Land Cruiser (6.27)** — 33x spread. "Toyota safety" depends entirely on WHICH Toyota.
3. **Chevrolet: Traverse (0.2) vs Tracker (7.83)** — 39x spread. Largest absolute range of any brand.
4. **Subaru has ALL models below 1.0** — the only major brand where every model is below the overall average. Stdev 0.24.
5. **Kia: ALL models below 1.1** — similar to Subaru, remarkably tight. Stdev 0.27.

## Methodology
- Death rate = deaths per 100M VMT (vehicle miles traveled)
- Only models with 200+ deaths in FARS 2014-2023 included (statistical significance threshold)
- Only brands with 4+ qualifying models analyzed (meaningful spread calculation)
- Stdev calculated on death rates across models within brand

## Limitations
- Fleet size estimates introduce ±15% uncertainty for low-volume models
- VMT derived from NHTS averages, not actual odometer readings per model
- Model mix changes over the decade (some models discontinued, some launched)
- Doesn't account for driver demographics — expensive vehicles may attract different driver profiles
- A brand with many old/cheap models (Chevy) inherently has more spread than a brand with a narrow lineup (Subaru)

## Strongest Counterargument
Comparing within-brand spread conflates different vehicle classes. A Chevy Tracker (tiny SUV, 1999-2004) and a Chevy Traverse (large modern crossover) target completely different buyers and exist in different eras. The spread reflects lineup diversity, not brand quality control. Subaru/Kia's tight spread may simply reflect their narrow, homogeneous lineup rather than superior engineering.

## Sources
1. NHTSA FARS 2014-2023 (death counts, crash counts)
2. NHTS annual miles traveled estimates
3. IIHS fatality statistics methodology
4. Industry sales data for fleet size estimates
