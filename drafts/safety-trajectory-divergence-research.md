# Research Notes: Safety Trajectory Divergence (#487)

## Angle
Most vehicles get safer with each generation — fewer deaths per model year vintage as structural improvements, ESC, AEB, and curtain airbags propagate. But a specific cluster of popular crossovers and sedans are going the wrong direction: their newer model years produce MORE deaths per vintage than older ones. Their segment peers improved. They didn't.

## Methodology
- Source: FARS 2014–2023 (10 years of fatal crash data), FARS_MODEL_YEAR array in fars_output.js.
- Comparison: Model years 2009–2016 ("mid") vs. 2017–2023 ("recent").
- Normalization: Average deaths per model year vintage in each period (total deaths ÷ number of model years present). This accounts for vehicles having different numbers of model years in each window.
- Filter: Require ≥4 model years in each period and ≥30 deaths per period. Eliminates launch-year artifacts and low-volume noise.

## Key Findings

### Vehicles getting WORSE (per-year average deaths):
| Model              | Cls     | Mid Avg | Recent Avg | Ratio | Change |
|--------------------|---------|---------|------------|-------|--------|
| Nissan Kicks       | SUV     | 6.8     | 16.6       | 2.43x | +144%  |
| Mitsubishi Outlander | SUV   | 8.3     | 16.7       | 2.00x | +100%  |
| Kia Sportage       | SUV     | 10.4    | 19.7       | 1.90x | +90%   |
| Toyota RAV4        | SUV     | 38.5    | 55.1       | 1.43x | +43%   |
| Kia Forte          | Sedan   | 35.4    | 50.6       | 1.43x | +43%   |
| Nissan Rogue       | SUV     | 51.0    | 69.9       | 1.37x | +37%   |
| Chevy Equinox      | SUV     | 51.2    | 70.2       | 1.37x | +37%   |

### Vehicles getting SAFER:
| Model              | Cls     | Mid Avg | Recent Avg | Ratio | Change |
|--------------------|---------|---------|------------|-------|--------|
| Honda Civic        | Sedan   | 224.1   | 79.0       | 0.35x | -65%   |
| Honda Accord       | Sedan   | 193.1   | 72.6       | 0.38x | -62%   |
| Ford F-150         | Pickup  | 223.2   | 84.4       | 0.38x | -62%   |
| Nissan Altima      | Sedan   | 279.0   | 87.1       | 0.31x | -69%   |
| Chevy Camaro       | Sports  | 85.6    | 29.6       | 0.35x | -65%   |

### Key Contrast
Honda Civic (compact sedan): 65% fewer deaths per model year vintage.
Kia Forte (compact sedan): 43% MORE deaths per model year vintage.
Same segment, same decade, opposite trajectories.

## Caveats (to include in article)
1. **Absolute vs. rate**: More deaths per model year ≠ higher death rate per vehicle. Sales volume matters. RAV4 sales grew from ~300K/yr to ~400K+ recently. Part of the increase reflects more RAV4s on the road, not worse engineering.
2. **Fleet age exposure**: FARS covers 2014–2023. A 2009 model year has 6 years of exposure; a 2017 model year has 7 years. Roughly comparable but not identical.
3. **Demographics**: Who buys the vehicle changes between generations. Subprime buyers shifted toward affordable crossovers during this window.
4. **Discontinued confound**: Some "improving" vehicles (Impala, Focus, Fusion) are discontinued — they naturally have fewer recent model years. Filtered by requiring 4+ recent years, but Camaro (7 recent MYs, still improving) shows it's not just a discontinuation artifact.

## Strongest Counterargument
This is absolute deaths, not per-vehicle rates. A vehicle that doubled its sales and saw a 37% increase in deaths actually got modestly safer per unit sold. Without model-year-level registration data (which FARS doesn't include), we can't cleanly separate volume growth from safety regression. The direction is the story — most vehicles go DOWN with newer tech, these go UP — but the magnitude is uncertain.

## Primary Sources
1. NHTSA FARS 2014–2023 (bulk CSV / query tool): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS Vehicle Ratings (Civic, RAV4, Equinox, Forte): https://www.iihs.org/ratings
3. NHTS VMT Estimates: https://nhts.ornl.gov/
4. IIHS Fatality Statistics (general): https://www.iihs.org/topics/fatality-statistics
