# Research: The Safest Cars in America Are Mostly Just the Newest Ones
## #1529 — Axle McScatter — November 16, 2026

## Angle (1-2 sentences)
The Crash Report's own "safest cars" leaderboard is flattered by a time-exposure bug: every model's death rate divides 10 years of FARS deaths by 10 years of estimated driving, even for models that only existed for 3 or 4 of those years. The Tesla Model Y's famous 0.03 rate is understated by roughly 2.5x. New cars really are safer, but the ranking exaggerates it.

## Kill test
Genuinely newsworthy? Yes. Original finding from our own pipeline's source code, not a press-release rewrite. It corrects the site's flagship metric (story #52 covered fleet-bin error; this is the separate time-exposure error, never covered). Novel angle: a leaderboard that ranks newness as much as safety.

## Primary sources
1. **NHTSA FARS 2014-2023** via `fars_output.js` (337 models) and `fars_process.py` — the rate formula itself. `estimate_vmt()` computes `est_total_vmt = est_registered x annual_miles x len(FARS_YEARS)` where `FARS_YEARS = [2014..2023]`, 10 years, applied identically to every model regardless of launch year. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **IIHS** — AEB cuts rear-end crashes by about 50% (forward collision warning alone 27%); PARTS study: 52% front-to-rear reduction for 2021-2023 cars vs 46% for 2015-2017. IIHS driver death rate analysis (July 30, 2026) uses deaths per million *registered vehicle years*, an exposure-adjusted denominator. https://www.iihs.org/news/detail/iihs-eyes-higher-speed-test-for-automatic-emergency-braking
3. **Launch-year verification** — Tesla Model Y first deliveries March 2020 (first model year 2020); Kia Telluride first model year 2020 (on sale spring 2019); Kia Seltos first US model year 2021; Tesla Model 3 deliveries began 2017. Sources: Wikipedia/Carvana (Model Y), Kia Media (Telluride), CarGurus (Seltos).

## Data (from fars_output.js, FARS 2014-2023)
Median death rate across all 337 models: **0.54** per 100M VMT.

Lowest-rate models (rate < 0.10, fleet >= 150k), with exposure correction (corrected rate = published rate x 10 / years on sale through 2023):

| Model | Published rate | Deaths | Fleet | Launched | Years in window | Corrected rate |
|---|---|---|---|---|---|---|
| Tesla Model Y | 0.03 | 57 | 1.75M | 2020 | 4 | 0.08 |
| Kia Telluride | 0.04 | 31 | 0.61M | 2020 | 4 | 0.10 |
| Kia Seltos | 0.04 | 21 | 0.44M | 2021 | 3 | 0.13 |
| Ford Bronco | 0.05 | 25 | 0.44M | 2021 | 3 | 0.17 |
| Tesla Model 3 | 0.05 | 92 | 1.57M | 2017 | 7 | 0.07 |
| Hyundai Palisade | 0.06 | 38 | 0.53M | 2020 | 4 | 0.15 |
| VW Atlas | 0.06 | 26 | 0.35M | 2018 | 6 | 0.10 |

**7 of the 15 lowest-rate models launched in 2017 or later.** Flattery factor: 2.5x for 2020 launches, 3.3x for 2021 launches.

Contrast (worst rates, full 10-year exposure): Ford Mustang 6.02 (2,739 deaths), Nissan Maxima 5.11, Chevrolet Cobalt 5.10, Chevrolet Impala 5.00.

## Counterpoints (honest)
- Even corrected, the newcomers cluster at 0.07-0.17, still 3-7x below the 0.54 median. New cars genuinely are safer: AEB, better structures, standard ESC. The IIHS/PARTS data backs that. The ranking is exaggerated, not invented.
- Porsche Macan (0.03, 7 deaths, launched 2015, near-full exposure) and Subaru Crosstrek (0.08, 86 deaths, launched 2013, full exposure) sit at the top without any time flattery. Some low rates are real.
- Ram 3500: rate 0.00, zero deaths, 0.44M fleet. A zero should have been the tell that something structural is off (heavy-duty pickups likely fall outside FARS passenger-vehicle coding). Presented as a canary, not a claim about the mechanism.

## Limitations
- Correction is approximate: launch-year counting uses calendar years (2020-2023 = 4), not exact months on sale; fleet grew over the window, so early years had fewer cars on the road than the current fleet implies. Both effects push the same direction but the exact factor is an estimate, not a measurement.
- FARS only captures fatal crashes. Low fatality rates say nothing about injury rates.
- Fleet estimates are binned (see story #52) and VMT uses class-average annual miles from NHTS, not odometer readings.
- Did not re-run fars_process.py with corrected denominators; correction is arithmetic on published rates, shown transparently.

## Methodology (for the article)
rate = total FARS deaths 2014-2023 / (estimated registered fleet x class-average annual miles x 10 years). The 10 is hard-coded via len(FARS_YEARS) in estimate_vmt(). A 2020 launch contributes deaths from 4 years but is divided by 10 years of driving. Corrected rate = published rate x 10 / years on sale.

## Actionable takeaway
Do not shop from a "safest cars" list built on per-mile rates without checking when the model launched. For cross-model comparison, use IIHS driver death rates per million registered vehicle years (exposure-adjusted) and Top Safety Pick+ status. If a car has only existed for three years, its death rate has barely been tested.

## Prior coverage check
- #52 "Every Death Rate on This Site Is Built on 52 Guesses" covered fleet-bin denominator error, not time exposure. Distinct.
- "wrong-list-rate-vs-volume" covered rate vs body-count divergence. Distinct.
- No prior story on launch-year/time-exposure flattery (grep: no "Model Y"/"Telluride"/"exposure artifact" story).
