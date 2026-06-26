# Research: Three-Axis Safety Model

## Angle
Vehicle death rates conflate three independent dimensions: crash frequency, crash lethality, and impairment rate. Prior Crash Report analysis decomposed rates into two axes (frequency × lethality, r² = 3.3%). This article extends that by proving impairment is a THIRD independent axis — the three pairwise correlations average just 4.7% R², meaning each axis tells you effectively nothing about the other two.

## Novel Contribution
First analysis to compute all three pairwise correlations across FARS crash frequency, crash lethality, and impairment rate. The "triple threat" composite score ranks 182 vehicles on all three dimensions simultaneously.

## Key Data (N = 182 vehicles, fleet ≥100K, crashes ≥200, tox drivers ≥50)

### Correlation Matrix
| Pair | r | R² |
|------|---|----|
| Frequency vs Lethality | 0.292 | 8.5% |
| Frequency vs Impairment | -0.045 | 0.2% |
| Lethality vs Impairment | 0.231 | 5.3% |
| **Average** | — | **4.7%** |

### Triple Threat (worst on all 3 axes)
1. Chevrolet Cobalt — freq: 72.6/10k (98%ile), leth: 0.808 (98%ile), imp: 22.4% (90%ile), combo: 2.86/3.0, 1,540 deaths
2. Buick LeSabre — freq: 37.3 (86%ile), leth: 0.823 (98%ile), imp: 23.5% (96%ile), combo: 2.81, 1,344 deaths
3. Chevrolet Cavalier — freq: 32.7 (77%ile), leth: 0.857 (99%ile), imp: 22.4% (90%ile), combo: 2.66, 1,225 deaths

### Triple Safe (best on all 3 axes)
1. Ford Transit — freq: 5.5 (6%ile), leth: 0.308 (1%ile), imp: 13.6% (2%ile), combo: 0.09/3.0, 178 deaths
2. Jeep Renegade — freq: 7.0 (9%ile), leth: 0.381 (4%ile), imp: 17.9% (11%ile), combo: 0.24, 141 deaths
3. Hyundai Tucson — freq: 9.3 (16%ile), leth: 0.454 (14%ile), imp: 17.6% (9%ile), combo: 0.40, 669 deaths

### The Frequency-Impairment Surprise
r = -0.045 (R² = 0.2%) — effectively ZERO correlation. Vehicles that crash frequently are NOT disproportionately driven by impaired people, and vice versa. This is counterintuitive — you'd expect "crash-prone" vehicles to attract riskier drivers. They don't.

## Sources
1. NHTSA FARS database 2014-2023 (death rates, crash counts)
2. NHTSA FARS toxicology data (impairment rates by vehicle)
3. Prior Crash Report analysis: "Crash Frequency Explains 3% of Whether You'll Die" (frequency-lethality independence, r² = 3.3%)

## Strongest Counterargument
Fleet age confounds all three metrics. Older vehicles have higher crash frequency (worse brakes, no ESC), higher lethality (less crashworthy), AND higher impairment rates (cheaper to buy, more likely owned by financially stressed drivers). The independence might be partially masking an underlying age/income driver. Counter-counter: the correlations are computed across models, not model years, and fleet composition within a model is mixed. If fleet age were the dominant driver, we'd see much higher inter-axis correlations.

## Limitations
- FARS covers only fatal crashes — nonfatal crash patterns may differ
- Impairment = BAC > 0 or drug-positive, which includes low-level cannabis metabolites detectable days after use
- "Fleet" estimates are from industry data, not registration counts — ±15% uncertainty for low-volume models
- Combined "percentile score" is equal-weighted across axes; no empirical basis for different weightings
- This is an ecological analysis (vehicle-level, not driver-level) — individual risk varies enormously
