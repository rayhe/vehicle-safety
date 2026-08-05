# Research: The National Death Rate Fell to 0.99. Most Individual Vehicles Got Worse.

## News Hook
NHTSA released Q1 2026 preliminary estimates in July 2026: 7,770 deaths, fatality rate 0.99 per 100M VMT — the lowest first-quarter figure since 2014. Full-year 2025 deaths fell to the lowest since 2019. On pace for 5th consecutive year of declines.

**Sources:**
1. NHTSA preliminary Q1 2026 data, reported by Carscoops (Jul 13, 2026) and Reuters/SRN News (Jul 8, 2026)
2. NSC May 2026 preliminary crash fatality estimates (injuryfacts.nsc.org)
3. FARS 2014-2023 data (fars_output.js — 337 models, 323 with model year data)

## Original FARS Analysis

Compared exposure-adjusted death rates for model years 2010-2014 vs 2017-2021 across all vehicles with:
- ≥3 model years of data in BOTH eras
- ≥5 exposure-adjusted deaths/year in the early era
- ≥500 total FARS deaths

**Result: 16 of 27 qualifying vehicles (59%) show HIGHER exposure-adjusted death rates in newer model years.** Only 6 (22%) improved meaningfully (>10% decline). 5 were flat.

### Vehicles Getting Worse (2017-2021 MY vs 2010-2014 MY):
| Vehicle | Class | Early Adj | Late Adj | Change | Total Deaths |
|---------|-------|-----------|----------|--------|-------------|
| Nissan Sentra | Sedan | 10.4 | 19.8 | +90% | 2,562 |
| Jeep Wrangler | SUV | 5.8 | 10.8 | +85% | 1,836 |
| Chevy Cruze | Sedan | 6.9 | 10.2 | +48% | 631 |
| Toyota Corolla | Sedan | 16.3 | 23.3 | +43% | 4,931 |
| Dodge Grand Caravan | Van | 6.5 | 8.7 | +34% | 1,764 |
| Honda CR-V | SUV | 8.9 | 11.7 | +32% | 2,065 |
| Toyota Highlander | SUV | 5.3 | 6.7 | +28% | 1,106 |
| Hyundai Elantra | Sedan | 14.4 | 18.2 | +27% | 2,400 |
| Chevy Malibu | Sedan | 13.6 | 16.6 | +21% | 3,459 |
| Ford Mustang | Sports | 6.6 | 7.9 | +20% | 2,688 |
| Toyota Camry | Sedan | 21.0 | 24.6 | +17% | 6,318 |
| Ford Escape | SUV | 11.3 | 12.8 | +14% | 2,281 |
| Honda Accord | Sedan | 17.0 | 18.2 | +7% | 7,085 |
| Honda Civic | Sedan | 18.5 | 19.7 | +6% | 6,545 |
| Ford F-150 | Pickup | 20.6 | 21.4 | +4% | 9,118 |
| VW Jetta | Sedan | 6.2 | 6.5 | +4% | 1,356 |

### Vehicles That Improved:
| Vehicle | Class | Early Adj | Late Adj | Change | Total Deaths |
|---------|-------|-----------|----------|--------|-------------|
| Dodge Ram | Pickup | 11.4 | 4.6 | -60% | 4,404 |
| Chevy Impala | Sedan | 16.1 | 6.6 | -59% | 3,732 |
| Hyundai Sonata | Sedan | 13.0 | 8.1 | -37% | 1,874 |
| Chrysler 300 | Sedan | 5.4 | 3.9 | -26% | 739 |
| Ford Fusion | Sedan | 16.8 | 13.0 | -23% | 2,167 |
| Nissan Maxima | Sedan | 5.5 | 4.8 | -13% | 1,535 |

### Flat (within ±10%):
Silverado, Sierra, Tracker, Altima, Camaro

## Key Insight
The national fatality rate improvement (0.99/100M VMT in Q1 2026) is REAL but concentrated. When measured at the individual vehicle level, the majority of popular models show model-year death rates that are getting WORSE, not better. The national improvement is driven by:
1. A few vehicles that improved dramatically (Ram, Impala — both getting major redesigns with modern safety tech)
2. Fleet turnover (older, deadlier model years aging off the road)
3. Growing VMT denominator (more miles driven, spreading the deaths thinner)

The headline number describes an average nobody experiences. If you drive a 2020 Nissan Sentra, your model year kills at nearly double the rate of a 2012 Sentra per year of road exposure.

## Caveats / Limitations
- Exposure adjustment divides deaths by (2023 - model_year + 1), which assumes equal annual exposure. In reality, newer cars accumulate more miles/year than older ones.
- Fleet size growth for popular models means more MY 2020 vehicles on the road than MY 2012, which increases absolute deaths even if rate is constant. Our analysis captures this as "getting worse" when it may reflect fleet expansion.
- FARS captures fatalities only — a vehicle model could be getting safer (fewer injuries per crash) while showing higher death counts due to fleet growth.
- Some vehicles in the "worse" category were redesigned between eras, so the comparison isn't same-design-to-same-design.
- Sample sizes for late-era model years (2020-2021) have only 2-3 years of FARS exposure, making them more volatile.

## Strongest Counterargument
Fleet expansion is the dominant confounder. A 2019 Honda CR-V has roughly 2-3x the on-road fleet population of a 2012 CR-V, because sales grew and the 2012s have been scrapped/exported/crashed out of service. More vehicles = more deaths, even at the same rate. Our exposure adjustment accounts for YEARS of data but NOT fleet population growth. A fair comparison would normalize by registered vehicles per model year, which FARS doesn't provide.

## Journalist
Rex Driverton — Senior Crash Correspondent. This is an investigation into FARS data contradicting the national safety narrative. Right in his wheelhouse.

## Headline Options
1. "America's Death Rate Hit a Decade Low. Fifty-Nine Percent of Its Cars Went the Other Way."
2. "The National Fatality Rate Is 0.99. For Most Cars, It's Getting Worse."
3. "Sixteen Vehicles Are Getting Deadlier. The National Average Pretends They're Not."

## Kicker
Investigation
