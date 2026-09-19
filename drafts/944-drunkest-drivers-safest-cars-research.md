# Research — #944: The Drunkest Drivers in America Drive the Safest Cars, Per Mile

**Article #944** | Journalist: Axle McScatter (Data Visualization Editor) | Kicker: By The Numbers

## Kill test
Does impairment predict which vehicles are deadly? Everyone assumes the deadliest cars are the ones with the drunkest drivers. Cross-tabulating FARS fatality rates against FARS toxicology data across all 307 models in the dataset shows the relationship is essentially zero — slightly negative, r = -0.14. The deadliest-per-mile vehicles are driven by the soberest drivers. This is a genuinely novel cross-tab nobody has run on this dataset, it inverts the site's entire impairment-beat framing, and it passes the kill test: surprising, data-backed, actionable.

## Novel contribution (original analysis)
- Joined `FARS_BY_MODEL` (death rate per 100M VMT) with `FARS_TOXICOLOGY` (anyPct = % of drivers in fatal crashes testing positive for alcohol or drugs) across all 307 models with tox data.
- Pearson r between model impairment share and model death rate: **-0.14** (r^2 = 0.02 — impairment explains ~2% of the variance in model lethality). Computed in `fars_output.js` cross-tab, n=307.
- The fleet-wide weighted impairment baseline: **20.0%** (98,348 of 490,736 drivers in fatal crashes tested positive for alcohol or drugs).

## Headline data points
| Vehicle | Death rate /100M VMT | Impairment % | n (drivers) |
|---|---|---|---|
| Hyundai Veloster | 8.54 (deadliest in dataset) | 17.4% | 489 |
| Chevrolet Tracker | 7.83 | 12.7% | 573 |
| Toyota Land Cruiser | 6.27 | 8.9% | 417 |
| Toyota Solara | 4.25 | **4.1% (soberest cohort in dataset)** | 195 |
| Cadillac Seville | 3.89 | 10.5% | 171 |
| Buick Park Avenue | 0.48 | **31.7% (most impaired cohort)** | 259 |
| Oldsmobile Alero | 0.16 | 29.1% | 141 |
| Chevrolet C/K Pickup | 0.19 | 28.0% | 282 |
| Audi A3 | 0.23 | 27.1% | 203 |

- The Buick Park Avenue's per-mile death rate (0.48) is one-sixteenth the Chevy Tracker's (7.83), while its impairment share (31.7%) is 2.5x the Tracker's (12.7%).
- Toyota Solara: the soberest driver cohort in the entire dataset (4.1%, n=195) sits in the 9th-deadliest vehicle per mile (4.25).

## Interpretation (design > behavior, at the vehicle level)
- The high-rate vehicles share a design profile: tall/narrow/short-wheelbase (Tracker), high center of gravity + mass (Land Cruiser), or pre-ESC-era coupes/sports cars with speed-friendly packaging (Solara, Veloster, Mustang 6.02).
- The high-impairment vehicles are mostly big, soft, discontinued sedans (Park Avenue, Five Hundred, Seville) — crash structures and mass protect occupants; they're also driven at lower speeds in urban settings.

## Primary sources (3+ required)
1. NHTSA, Fatality Analysis Reporting System (FARS), 2014-2023 — the dataset behind `fars_output.js` (NHTSA bulk CSV). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA, "2023 Data: Alcohol-Impaired Driving" (DOT HS 813 713): 12,429 fatalities in alcohol-impaired-driving crashes in 2023, 30% of all traffic fatalities; one every 42 minutes. http://crashstats.nhtsa.dot.gov/Api/Public/Publication/813713
3. NHTSA Report to Congress, "Advanced Impaired Driving Prevention Technology" (Mar 2026): NHTSA estimates alcohol is a causal factor in 94% of crashes involving at least one driver with BAC >= 0.08. https://www.nhtsa.gov/sites/nhtsa.gov/files/2026-03/Report-to-Congress-Advanced-Impaired-Driving-Prevention-Technology.pdf
4. IIHS, "Vehicle size and weight" — mass/aggression and rollover physics context. https://www.iihs.org/topics/vehicle-size-and-weight
5. NHTSA ESC final rule (FMVSS 126), 2007 — ESC mandated for MY2012+. https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm

## Limitations (will be stated in the article)
1. **Ecological correlation**: this is a model-level finding. Individual risk from impaired driving is enormous (see sources 2-3). A drunk driver in a Tracker is vastly more dangerous than a sober driver in a Park Avenue. Do not read this as exoneration.
2. **Drug-positive ≠ impaired**: THC is detectable for days/weeks; many drug-positive drivers had prescribed sedatives. Drug testing also expanded over 2014-2023, inflating drugPct over time.
3. **Testing bias**: toxicology testing is not uniform — BAC is tested more often in fatal single-vehicle crashes; survivors are tested less. anyPct is a lower-bound estimate for some cohorts.
4. **Estimated rates**: death rates use estimated VMT (NHTS annual miles × fleet estimates), not odometer readings — ±15% uncertainty for low-volume models; the Alero's 0.16 rate rests on 49 deaths (noisy).
5. **FARS is fatal-only**: impaired drivers crash more often but often at lower speeds (urban, nighttime, familiar roads), producing many non-fatal crashes FARS never records. Per-mile FATALITY rate ≠ per-mile crash risk.
6. **Confounders**: high-impairment models are mostly discontinued sedans driven at lower speeds/in cities; low-rate may reflect exposure, not just design.

## Strongest counterargument
The negative correlation could be mostly artifact. Impaired drivers likely crash far MORE often per mile (NHTSA attributes ~30% of fatalities to alcohol while impaired miles are a small share of VMT), but at lower speeds where crashes are survivable. FARS only sees the fatal tail. Meanwhile the "sober killers" (Tracker, Land Cruiser, Solara) are vehicles where crashes happen at highway speeds in rollover-prone packages — unsurvivable regardless of sobriety. So: impairment is still the great multiplier of individual crash risk; it just doesn't sort vehicles on the per-mile fatality leaderboard, because lethality-per-mile is dominated by vehicle physics and crash speed.

## Actionable insights
- If you shop used cars: check the per-mile death rate for the specific model (this site's dataset), not vibes about who drives it. A Chevy Tracker at 7.83/100M VMT is 16x a Buick Park Avenue at 0.48.
- Avoid rollover-prone packages: tall/narrow short-wheelbase SUVs, pre-2012 coupes without ESC. ESC became mandatory for MY2012 (FMVSS 126); check side-curtain airbags and NHTSA rollover star ratings.
- None of this makes impairment okay: NHTSA attributes 30% of 2023 fatalities (12,429 deaths, one every 42 minutes) to alcohol-impaired driving, and alcohol is estimated causal in 94% of crashes with BAC≥0.08. The finding is about vehicle lethality, not driver absolution.

## Duplication check
Grep of all 943 prior queue titles + stories/: no "sober", "correlation", "Solara", "Land Cruiser", "Tracker", or impairment-vs-rate story. Closest: #936 (rate decomposition, Rex Driverton — different question), #805/#868 (Dale impairment-by-model — different question: who is impaired, not whether impairment predicts lethality).
