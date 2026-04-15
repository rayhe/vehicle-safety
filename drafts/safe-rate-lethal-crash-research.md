# Research: The Rate Lie — Vehicles With "Safe" Death Rates That Kill Their Occupants

## Angle
Some vehicles look safe by the standard metric (deaths per 100 million VMT) but have shockingly high per-crash lethality — meaning when they ARE in a fatal crash, their occupants are almost always the ones who die. The death rate flatters them because their drivers accumulate fewer highway miles. Per-crash lethality strips away the exposure variable and isolates structural protection.

## Kill Test
- Is this genuinely newsworthy? YES. Most safety comparisons use death rate per VMT or per registration. Nobody cross-tabulates rate vs. per-crash lethality to find the "false safety" zone.
- Novel contribution: First analysis (in our dataset) identifying vehicles that appear safe by rate but are structurally vulnerable by lethality. The insight is that rate = (exposure × vulnerability) while lethality = pure vulnerability.
- After 165 articles, is this a new angle? YES. We've covered crash-lethality-ratio, aggressor-vehicles, and sedan-death-penalty, but never specifically the "rate ≤ 1.0 but lethality > 0.70" cohort — the false-safety zone.

## Key Data Points (FARS 2014-2023)
**"Safe rate, lethal crash" vehicles (rate ≤ 1.0/100M VMT, lethality > 0.70):**
| Vehicle | Rate (per 100M VMT) | Per-Crash Lethality | Deaths |
|---------|---------------------|---------------------|--------|
| Nissan Kicks | 0.69 | 0.739 | 339 |
| Nissan Versa | 0.90 | 0.723 | 722 |
| Honda Fit | 0.72 | 0.720 | 290 |
| Hyundai Accent | 0.80 | 0.717 | 360 |

**Compare to genuinely safe vehicles (low rate AND low lethality):**
| Vehicle | Rate | Lethality | Deaths |
|---------|------|-----------|--------|
| Toyota RAV4 | 0.19 | 0.498 | 914 |
| Chevrolet Traverse | 0.20 | 0.393 | 265 |
| Ram 1500 | 0.13 | 0.341 | 714 |

**Class-level lethality:**
- Sedans: 0.645 (64.5% of fatal crashes kill the sedan occupant)
- SUVs: 0.524 (52.4%)
- Pickups: 0.489 (48.9%)

## Primary Sources
1. NHTSA FARS 2014-2023 (our dataset): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS driver death rates by vehicle type: https://www.iihs.org/news/detail/driver-death-rates-remain-high-among-small-cars
3. IIHS vehicle size and weight research: https://www.iihs.org/topics/vehicle-size-and-weight
4. IIHS fatality statistics: https://www.iihs.org/research-areas/fatality-statistics/detail/passenger-vehicle-occupants

## Methodology
- **Death rate per VMT** = deaths ÷ (estimated fleet × avg annual miles × 10 years) × 100M. Measures frequency of fatal outcomes per mile driven. Confounded by driving patterns (city vs highway, short commute vs road trip).
- **Per-crash lethality** = deaths ÷ crashes (FARS crash events involving this vehicle). Measures: given a fatal crash has occurred, what fraction of the time is THIS vehicle's occupant the fatality? Isolates structural protection from exposure.
- **The gap**: A vehicle can have a low rate (its drivers don't drive enough to be in many fatal crashes) but high lethality (when they ARE in one, they lose). These are the "false safety" vehicles.

## Limitations
- FARS only captures fatal crashes, not all crashes. A vehicle could have low lethality in fatal crashes but high injury rates in non-fatal crashes.
- "Deaths" in FARS includes ALL deaths in crashes involving this vehicle (other vehicle occupants, pedestrians), though the dataset appears to assign deaths to the vehicle whose occupant died.
- VMT estimates have ±15% uncertainty for low-volume models.
- Per-crash lethality is influenced by opponent mix (who these cars crash into). Small cars disproportionately crash into bigger vehicles.

## Strongest Counterargument
The reason these vehicles have low death rates might be BECAUSE their drivers are cautious — driving less, driving slower, sticking to city streets. That's not a "lie" — it's a genuine safety benefit of the driving pattern. If you never take the Versa on the interstate, its weak structure matters less. The rate accurately reflects your real-world risk as a Versa owner; the lethality reflects a worst-case scenario that may be rare for the typical driver.

Rebuttal: True, but the rate creates a false equivalence with vehicles like the RAV4 (rate 0.19, lethality 0.498) where BOTH the rate AND the structural protection are better. A Versa buyer deserves to know: your rate is "safe" only as long as nothing goes wrong. When something goes wrong, you're in a 2,500-lb coffin.

## Journalist
**Mia Crumplezone** — forensic crash analysis. This is about structural crash protection vs. statistical illusions. Perfect fit for her voice.
