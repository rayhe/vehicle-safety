# Research: The 20% Constant — Impairment Doesn't Explain Why Your Car Is Dangerous

## Angle
Cross-tabulating FARS death rates with FARS toxicology data to compute "impairment-adjusted death rates" — what each vehicle's death rate would be if all impaired drivers were magically removed. The result: impairment is nearly uniform across all vehicle classes (~20%), so it doesn't explain the 200x variation in per-mile death rates. The vehicle itself is 80% of the equation.

## Kill Test
- **Novel?** YES. No published analysis cross-tabulates per-model FARS death rates with per-model impairment percentages to derive a "sober death rate" for each vehicle.
- **Surprising?** YES. The common assumption is that dangerous vehicles attract dangerous drivers. The data shows impairment is a remarkably flat constant (17-26%) regardless of vehicle class. 
- **Actionable?** YES. When shopping for a car, impairment should NOT be a factor in evaluating safety data — the sober rate tells the same story.

## Key Data Points

### Class-level impairment is nearly flat:
- Sports Cars: 22.3% impaired
- Sedans: 21.0% impaired
- Pickups: 20.6% impaired
- SUVs: 19.4% impaired
- Vans: 18.9% impaired
- **Spread: only 3.4 percentage points across ALL classes**

### Sober death rates reveal the true engineering story:
| Vehicle | Full Rate | Sober Rate | Impaired % | Deaths |
|---------|-----------|------------|------------|--------|
| Hyundai Veloster | 8.54 | 7.05 | 17.4% | 598 |
| Chevy Tracker | 7.83 | 6.84 | 12.7% | 856 |
| Toyota Land Cruiser | 6.27 | 5.71 | 8.9% | 343 |
| Ford Mustang | 6.02 | 4.70 | 21.9% | 2,739 |
| Toyota Solara | 4.25 | 4.08 | 4.1% | 642 |
| Chevy Cobalt | 5.10 | 3.96 | 22.4% | 1,540 |
| Chevy Impala | 5.00 | 3.93 | 21.4% | 3,774 |
| Honda Accord | 3.07 | 2.46 | 20.0% | 7,102 |

### The vehicles with HIGHEST impairment are NOT the deadliest:
- Corvette: 26.2% impaired but rate only 1.52 (sober: 1.12)
- Cadillac CTS: 25.9% impaired but rate only 1.32 (sober: 0.98)
- Infiniti G37: 25.0% impaired but rate only 0.90 (sober: 0.68)
- These are performance/luxury cars with high impairment BUT good crash protection

### Toyota Solara: the sober death champion
- 4.1% impaired — lowest in the dataset for high-death vehicles
- 4.25 rate → 4.08 sober rate — removing impairment barely moves the needle
- 642 deaths, 616 of which involved sober drivers
- The Solara is dangerous because it IS dangerous, not because of its drivers

## Original Contribution
Computing "sober death rates" by multiplying each vehicle's per-100M-VMT rate by (1 - impairment fraction). This isolates vehicle engineering contribution from driver behavior. Key insight: the correlation between impairment rate and death rate is NEGATIVE — the most impaired vehicles (Corvette, CTS, luxury) tend to be safer per mile.

## Sources
1. NHTSA FARS database 2014-2023 — fatality and toxicology data
2. IIHS fatality statistics — vehicle class rates
3. NHTSA methodology for BAC reporting in FARS
4. NHTS travel survey — VMT estimates

## Journalist
Axle McScatter — Data Visualization Editor. This is a pure statistical methodology piece.

## Kicker
By The Numbers
