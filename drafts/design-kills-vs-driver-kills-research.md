# Research: Design Kills vs. Driver Kills

## Thesis
By cross-referencing FARS death rates with FARS toxicology (impairment) rates and computing z-score gaps, we can separate vehicles into two categories: those where the **vehicle design** explains the fatality rate (high death rate, low impairment) and those where **driver behavior** explains it (high impairment, low death rate). This is a novel cross-tabulation not performed by NHTSA, IIHS, or existing vehicle safety coverage.

## Key Data Points

### Method
- Merged FARS_BY_MODEL with FARS_TOXICOLOGY (vehicles with ≥50 drivers, ≥100 crashes)
- Normalized death rate and impairment rate to z-scores
- Computed gap = rate_z - impairment_z
- Positive gap = vehicle is deadlier than its drivers explain ("design kills")
- Negative gap = vehicle has more impaired drivers than deaths explain ("driver kills")

### Averages
- Average death rate across fleet: 1.10 per 100M VMT
- Average impairment rate: 20.2%

### Design Kills (high rate, low impairment — the car's fault)
| Vehicle | Class | Rate | Impairment | Gap |
|---------|-------|------|-----------|-----|
| Chevy Tracker | SUV | 7.83 | 12.7% | 8.07 |
| Toyota Land Cruiser | SUV | 6.27 | 8.9% | 8.06 |
| Toyota Solara | Sedan | 4.25 | 4.1% | 7.99 |
| Hyundai Veloster | Sports | 8.54 | 17.4% | 7.09 |
| Cadillac Seville | Sedan | 3.89 | 10.5% | 5.55 |

The **Toyota Solara** is the star finding: 4.1% impairment rate is the LOWEST in the entire dataset (195 drivers), yet 4.25 deaths/100M VMT is nearly 4x the fleet average. These are sober, responsible drivers dying in a car that can't protect them.

### Driver Kills (low rate, high impairment — the driver's fault)
| Vehicle | Class | Rate | Impairment | Gap |
|---------|-------|------|-----------|-----|
| Buick Park Avenue | Sedan | 0.48 | 31.7% | -4.38 |
| Chevy C/K Pickup | Pickup | 0.19 | 28.0% | -3.38 |
| Chevy Astro Van | Van | 0.60 | 27.0% | -2.70 |
| Ford Five Hundred | Sedan | 0.57 | 26.4% | -2.53 |
| Toyota FJ Cruiser | SUV | 0.43 | 25.3% | -2.27 |

**Buick Park Avenue**: 0.48 deaths/100M VMT (well below average), but 31.7% of its fatal crash drivers were impaired — highest in the dataset with 100+ drivers. The car is actually quite safe. The people driving them? Not so much.

### Class-Level Averages
- Sedans: 64.4% crash lethality
- Sports Cars: 67.7%
- SUVs: 52.5%
- Vans: 51.3%
- Pickups: 48.9%

### Original Contribution
This is a genuine novel cross-tabulation: no one else has published a z-score gap analysis between per-model death rates and per-model impairment rates. NHTSA publishes both datasets separately. IIHS uses different methodologies. This analysis reveals a clean separation between vehicles that kill through design failure and vehicles that kill through driver behavior — and the implications for safety policy are different for each.

### Sources
1. NHTSA FARS 2014-2023 — fatality and toxicology data
2. IIHS vehicle size/weight studies — context for why smaller vehicles have higher rates
3. NHTSA estimated VMT data — denominators for death rates
4. IIHS on supersizing vehicles (Feb 2025) — weight beyond fleet average offers minimal benefit

### Kill Test
- **Genuinely newsworthy?** Yes — this is original analysis, not a data dump. The z-score methodology is novel.
- **Would a reader share this?** The Toyota Solara finding (most sober drivers, still deadly) is a genuine shock.
- **Not covered before?** We've covered lethality ratios and impairment separately, but never cross-referenced them with z-score gap analysis.

### Journalist
**Mia Crumplezone** — Safety Engineering Editor. This is about vehicle design failure vs. driver behavior, right in her wheelhouse. Technical but accessible.
