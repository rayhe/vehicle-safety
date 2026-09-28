# Research: #1004 — Kia Forte newer-deadlier trend

## Angle (1-2 sentences)
The Kia Forte is the only compact sedan in FARS whose newest model years kill MORE than its oldest: MY2019-2021 Fortes racked up 182 deaths vs 91 for MY2010-2012, a 2.0x ratio, while every segment rival (Elantra 0.49, Civic 0.31, Corolla 0.47) declined as exposure math predicts. After adjusting for sales growth and road exposure, new Fortes die at roughly 5x the per-vehicle-year rate of old ones, despite the 2019 redesign earning IIHS Top Safety Pick+.

## Kill test
Genuinely newsworthy? YES. Novel cross-tab (model-year death ratio vs segment controls) nobody ran. Contradicts the "newer = safer" assumption with a 5x effect size. Consumer-actionable (used-car shoppers). Passes.

## Primary sources (3+)
1. **NHTSA FARS 2014-2023**, via `fars_output.js` (FARS_MODEL_YEAR: Kia FORTE deaths by model year; FARS_TOXICOLOGY: Forte anyPct 20.1%, n=1746 drivers; FARS_BY_MODEL: Forte rate 0.4, deaths 604)
2. **Kia Forte US sales by year** — GoodCarBadCar (https://www.goodcarbadcar.net/kia-forte-sales-figures/): 2010: 68,500; 2011: 76,294; 2012: 75,681; 2019: 95,609; 2020: 84,997; 2021: 115,929. Cross-checked vs Wikipedia Kia Forte sales table.
3. **IIHS 2019 Top Safety Pick+** — MotorTrend (https://WWW.MOTORTREND.COM/news/iihs-announces-2019-safety-awards-stricter-criteria-go-into-effect): 2019 Forte among 30 TSP+ winners; requires Good in all crash tests + Advanced/Superior front crash prevention.
4. **IIHS 2020 Top Safety Pick** — The News Wheel (https://thenewswheel.com/6-kia-vehicles-awarded-top-safety-pick-ratings-from-the-iihs/): 2020 Forte TSP when equipped with front crash prevention and specific headlights.
5. **Internal**: `stories/forte-poor-headlights-six-years.html` (Mia Crumplezone, Jul 2026) — base-trim halogen headlights rated Poor 2019-2024; 22.5m left-edge illumination 2019-2021.

## Key numbers
| Model | MY2010-12 deaths | MY2019-21 deaths | Ratio |
|---|---|---|---|
| Kia Forte | 91 | 182 | **2.00** |
| Hyundai Elantra | 364 | 179 | 0.49 |
| Honda Civic | 729 | 225 | 0.31 |
| Toyota Corolla | 592 | 278 | 0.47 |

- Forte sales: 2010-12 total 220,475; 2019-21 total 296,535 (1.35x growth).
- Exposure: MY2010-12 averaged ~12 yrs on road in FARS window; MY2019-21 averaged ~3.2 yrs.
- Per-vehicle-year math: (182/296535/3.2) / (91/220475/12) ≈ **5.6x**. Report as "roughly five times".
- Forte full MY series: 2010:25, 2011:24, 2012:42, 2013:23, 2014:34, 2015:39, 2016:61, 2017:81, 2018:57, 2019:56, 2020:50, 2021:76, 2022:14, 2023:20 (total 602 per MY table; by_model deaths 604, rate 0.4).
- Impairment: Forte 20.1% any-impaired (n=1746) vs Elantra 18.6%, Civic 20.4%, Corolla 19.2% — NOT a drunk-driver story.
- Forte not in #884 ghost-code contamination list. No coding-transition artifact (unlike Ram 1500/Dodge RAM split).

## Candidate mechanisms (state as hypotheses, not conclusions)
1. **Headlights**: base trims (the volume sellers) had Poor-rated halogens 2019-2024; 22.5m left-edge illumination 2019-2021 = 1.12s visibility at 45mph vs 2.5s AASHTO reaction standard (from internal article).
2. **Buyer shift**: Forte became the default sub-$20k new car as Rio/Fit/Versa Note died; younger, higher-mileage, urban-night drivers.
3. **Trim mix**: GT (LEDs, TSP-qualifying) is a small share; the TSP/TSP+ awards were earned "when equipped with... specific headlights" — the award car is not the car most people bought.

## Strongest counterargument
COVID-era exposure distortion: MY2019-2021 deaths concentrate in 2020-2023 calendar years when traffic patterns were abnormal (emptier roads, higher speeds, more nighttime driving). BUT the three segment controls lived through the same pandemic and still show the expected ~0.3-0.5 decline. COVID cannot explain a Forte-specific divergence. State this at full strength anyway.

## Limitations
- No model-year-specific fleet or VMT data; sales used as fleet proxy (±error for scrappage/export differences).
- FARS captures fatal crashes only; injury-only crashes invisible.
- 2022-2023 MYs have thin exposure (excluded from ratio; reported separately).
- Cannot separate driver-behavior shift from vehicle-design shift with this data alone.

## Actionable takeaway
Shopping used compacts: a 2019-2021 Forte is not the bargain its price suggests vs a same-year Elantra/Civic. If you buy one, get the GT trim (LED headlights, the TSP-qualifying configuration) and check the VIN at nhtsa.gov/recalls.

## Journalist / kicker
Mia Crumplezone (safety engineering, design analysis; owns the Forte beat from the headlight piece). Kicker: Trend Watch.
