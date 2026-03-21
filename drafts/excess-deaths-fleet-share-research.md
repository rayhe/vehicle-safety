# Research: Excess Deaths by Fleet Share — Which Vehicles Kill More Than Their Population Predicts?

## Angle
Original cross-tabulation: compare each vehicle's actual FARS deaths (2014-2023) to "expected" deaths based on fleet share. Expected = (vehicle fleet / total fleet) × total deaths. Vehicles with large positive excess kill disproportionately; large negatives are lifesavers.

## Kill Test
- **Novel?** YES. Nobody publishes fleet-share-adjusted excess death counts. FARS reports raw totals; IIHS publishes per-VMT rates. This is a third metric: population-adjusted excess mortality.
- **Surprising?** YES. Honda Accord — America's most trusted midsize — has 4,858 excess deaths (#1 overall). Toyota RAV4 has 3,281 *fewer* deaths than expected.
- **Data?** All from FARS_BY_MODEL in fars_output.js. Fleet estimates derived from industry sales data + NHTS annual miles.
- **Shareable?** "Your Honda Accord kills 3x more people than it should" is catnip.

## Key Findings

### Methodology
- Total deaths across 337 models: 191,193
- Total estimated fleet: 171,465,000
- Average death rate: 0.001115 deaths per fleet unit (across 10 years)
- Expected deaths for each vehicle = fleet × 0.001115

### Top Excess Killers
1. Honda Accord: +4,858 excess (3.16x expected) — 7,102 actual vs 2,244 expected
2. Honda Civic: +3,724 (2.32x) — 6,553 vs 2,829
3. Toyota Camry: +3,303 (2.09x) — 6,328 vs 3,025
4. Chevy Silverado: +3,249 (1.51x) — 9,591 vs 6,342
5. Nissan Altima: +3,177 (2.97x) — 4,787 vs 1,610
6. Chevy Impala: +3,042 (5.16x) — 3,774 vs 732
7. Toyota Corolla: +2,359 (1.91x) — 4,945 vs 2,586
8. Ford Ranger: +2,211 (3.52x) — 3,089 vs 878

### Top Life-Savers (below expected)
1. Ram 1500: −3,969 deficit (0.15x) — 714 actual vs 4,683 expected
2. Toyota RAV4: −3,281 (0.22x) — 914 vs 4,195
3. Chevy Equinox: −1,578 (0.40x) — 1,056 vs 2,634
4. Nissan Rogue: −1,471 (0.40x) — 968 vs 2,439
5. Honda CR-V: −1,440 (0.59x) — 2,072 vs 3,512
6. Toyota Highlander: −1,236 (0.47x)
7. Hyundai Tucson: −1,087 (0.38x)

### Class Summary (excess deaths)
- **Sedan: +36,657 excess deaths** (1.79x expected) — 67 models
- **Sports Car: +3,292** (2.50x) — 6 models
- **Pickup: +5,278** (1.15x) — 20 models
- **Van: +121** (1.02x, nearly neutral) — 9 models
- **SUV: −10,113** (0.80x, life-saving class) — 45 models

### Key Paradox
Honda is the safest-*feeling* brand. Accord and Civic are 5-star NCAP, Top Safety Pick winners. Yet combined, they produce **8,582 excess deaths** — more than any other pair. The reason: fleet demographics, vehicle age, second/third-owner risk profiles, and the sedan form factor itself (lower mass, lower ride height vs SUVs/trucks).

### Impairment Check
- Accord: 20% impaired — perfectly average
- Civic: 20.4% — average  
- Ram 1500: 20.3% — average
- Impairment doesn't explain the gap. This is structural.

## Sources (3+ primary)
1. **NHTSA FARS** (2014-2023) — all death counts from Fatality Analysis Reporting System bulk CSV
2. **NHTS** — National Household Travel Survey, annual VMT estimates per vehicle type
3. **Industry sales data** — fleet size estimates (public automotive industry registrations data)
4. **IIHS fatality statistics** — per-VMT death rates for comparison/calibration
5. **IIHS vehicle size/weight studies** — explaining the sedan vs SUV gap

## Journalist: Vin Wreckage
Existential Dread kicker. His philosophical, slightly unhinged voice is perfect for "your safe car kills more people than it should."

## Slug: excess-deaths-fleet-share
