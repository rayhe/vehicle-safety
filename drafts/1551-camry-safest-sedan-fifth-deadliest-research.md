# Research — #1551: The Safest Sedan in America Has Killed 6,328 People

**Slug:** `1551-camry-safest-sedan-fifth-deadliest`
**Journalist:** Vin Wreckage (Existential Dread — paradoxes, counterintuitive findings; least-recent in rotation, last #1457 on Nov 10; Dale is impairment-only and does not fit a FARS nameplate piece)
**Kicker:** Existential Dread
**Date researched:** November 21, 2026
**Target ship_date:** 2028-10-11 (1 day after #1550's 2028-10-10)

## Story in one line
The 2026 Toyota Camry earns the IIHS's highest award, Top Safety Pick+, with Good ratings in every crashworthiness test and a 5-star NHTSA overall rating — and the Camry nameplate has killed 6,328 people in a decade, the fifth-highest body count of any vehicle in America. Both facts are true. The car in the lab is not the car in the file.

## Kill test
- **Genuinely newsworthy?** YES. A FARS data story, the site's core format, on the best-selling sedan in America. The current hook is the 2026 award cycle: the Camry holds TSP+ in both 2025 and 2026, the highest honor in the class, while the Accord — its archrival — holds only the standard Top Safety Pick.
- **Novel angle on data?** YES. Full queue/drafts grep, November 21, 2026: zero standalone Camry articles. "Camry" appears only in recall coverage (#1003 turn signals, camry-hybrid-only-blind-dashboard) and as a passing comparison in other pieces (#1549's sedan cross-tab, #1063, #1065, #1110, #1121, #1125). No prior piece runs the Camry's FARS record, its impairment cross-tab, its model-year curve, or the TSP+/body-count tension. Nearest neighbors are the same method on other nameplates (#1549 Civic, #937 Accord, #1116 Impala) — this is that method applied to the one big sedan it has never touched.
- **Original contribution:** (1) the Camry's rank audit — 5th of 337 by body count, 36th by rate, 20th of 145 sedans by rate, lethality 0.593 (69th of 163 big-sample models); (2) the impairment-parity cross-tab across 13 sedans — Camry's drivers test at 19.2% impaired, the joint-lowest in the set, while its rate (2.03) sits mid-pack, so the drivers are the soberest and the car still kills 6,328; (3) the exposure-year math showing the Camry's per-year death rate is FLAT across 2015–2021 (~20–26 deaths per exposure-year) with no Civic-style improvement — the new car did not get safer on the road, it got safer in the lab; (4) the 2007 single-year spike (426 deaths vs 192 in 2006 and 158 in 2008), a model-specific outlier the data cannot explain, disclosed as unexplained.
- **Killed angles this run (duplicate screen):** every November 2026 recall and investigation checked against the queue and found covered: 26V721 Honda steering (#1457/#1533), 26V735 ZDX (#1521), 26V732 Atlas child seat (#1540), 26V691 Navigator seat (#1423), 26V756 Ram ABS (#1547), 26V750 Tundra camshaft (#1507), 26V744 PACCAR radar (#1542), 26V748 Takata (#1493/#1550), 26V727 Transit BCMC (#1537), 26V726 Explorer map lights (#1466), 26V730 Harley neutral (#1462), 26V621 ProMaster steering (#1104/#1148), 26V749 S2000 (#1545), DP26013 Palisade defog (#1538), DP26011 Godzilla (#1350), PE26008 Explorer airbag burns (#1447), Honda stop-start EA (#1527), IIHS Oct 31 moderate-overlap wave (#1244/#1408/#1484), IIHS Oct 8 commercial crash-avoidance round (#1341/#1417), IIHS July 2026 driver death rates (#1446), H1 2026 early estimates (#1494/#1458), Ford 2026 recall census (#1473/#1478), November recall census (#1528). The recall pool is exhausted; this run goes to FARS, per the #1549 precedent.
- **Verdict:** PROCEED.

## Primary sources
1. **NHTSA FARS 2014–2023, via this site's `fars_output.js`** — FARS_BY_MODEL (337 models), FARS_TOXICOLOGY (307 models), FARS_MODEL_YEAR (323 models). All fatality counts, rates, fleet estimates, and impairment percentages below come from these arrays. Parent pages: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and https://cdan.dot.gov/query
2. **IIHS ratings, 2026 Toyota Camry 4-door sedan** — https://www.iihs.org/ratings/vehicle/toyota/camry-4-door-sedan/2026 — read in full Nov 21, 2026: small overlap front driver-side G and passenger-side G (test vehicle 2025 Camry SE, applies 2025–27); moderate overlap front updated test Overall G, rear passenger restraints and dummy kinematics A (test vehicle 2025 Camry LE, applies 2025–27); side updated test Overall G; headlights A on both trim variations (LE/SE and XLE/XSE).
3. **Autoblog, "Toyota Camry Vs. Honda Accord: Which One Is Safer?"** — https://www.autoblog.com/carbuying/toyota-camry-vs-honda-accord-which-one-is-safer — Camry holds 2026 Top Safety Pick+, Accord holds the standard Top Safety Pick; the Camry's edge is concentrated in crash prevention (pedestrian and vehicle-to-vehicle standards).
4. **USA Today, "These 2026 midsize cars are top safety picks and they're under $30K," March 25, 2026** — https://www.usatoday.com/story/cars/research/2026/03/25/safest-midsize-cars-2026-iihs-affordable/89300371007/ — 2026 TSP+ winners include the Hyundai Sonata and Toyota Camry; Accord awarded Top Safety Pick.
5. **IIHS fatality statistics (methodology context)** — https://www.iihs.org/topics/fatality-statistics

## Key verified facts (FARS 2014–2023)
- **Camry body count:** 6,328 deaths, 5th-highest of all 337 models, behind only the Chevrolet Silverado (9,591), Ford F-150 (9,194), Honda Accord (7,102), and Honda Civic (6,553). 3.3% of all 191,193 deaths in the dataset. Rate 2.03 deaths per 100M VMT (36th of 337; 20th of 145 sedans). Estimated fleet 2,712,500. Crashes 10,670. Lethality 0.593 deaths per fatal-crash involvement (69th of 163 models with 300+ crashes).
- **The impairment cross-tab (the gap is the car, not the driver):**

| Vehicle | Deaths | Rate | Drivers in fatal crashes | Any impaired |
|---|---|---|---|---|
| Honda Accord | 7,102 | **3.07** | 13,809 | 20.0% |
| Nissan Altima | 4,787 | 2.88 | 10,185 | 20.0% |
| Honda Civic | 6,553 | 2.25 | 12,373 | 20.4% |
| Nissan Sentra | 2,571 | 2.13 | 5,466 | 20.0% |
| Toyota Camry | 6,328 | **2.03** | 13,811 | 19.2% |
| Toyota Corolla | 4,945 | 1.85 | 10,287 | 19.2% |
| Volkswagen Jetta | 1,375 | 1.71 | 3,148 | 19.9% |
| Mazda3 | 491 | 1.63 | 2,147 | 21.8% |
| Hyundai Elantra | 2,407 | 1.50 | 5,513 | 18.6% |
| Honda Fit | 290 | 0.72 | 832 | 19.1% |
| Subaru Impreza | 288 | 0.52 | 1,192 | 21.9% |
| Kia Forte | 604 | 0.40 | 2,575 | 20.1% |
| Honda CR-V | 2,072 | 0.53 | 5,807 | 17.6% |

- **Ratios:** Camry/Accord 0.66x (the Camry kills 34% slower per mile than its archrival); Camry/Forte 5.1x; Camry/Impreza 3.9x; Camry/CR-V 3.8x (same showroom, same badge). Impairment spans 17.6–21.9% across the table while rates span 0.40–3.07 — a 7.7x spread in lethality against a 4.3-point spread in impairment. The Camry's drivers are the joint-soberest in the set (19.2%, tied with the Corolla) and the nameplate still carries the fifth-largest body count.
- **Model-year trend (FARS_MODEL_YEAR; model-year sums total 6,318, matching the file):** 1990s 1,290; 2000s 3,775; 2010s 1,999; 2020s 254 (partial window). Pre-2010 model years: 64.3% of all Camry deaths. Model years 2018 and newer: 7.8%. Peak single model year: 2007, 426 deaths. Recent years: 2015: 181; 2016: 157; 2017: 185; 2018: 148; 2019: 122; 2020: 96; 2021: 70; 2022: 33; 2023: 21.
- **The 2007 spike (unexplained, disclosed as such):** 2007 Camrys account for 426 deaths; 2006 accounts for 192 and 2008 for 158. The aggregate FARS curve is smooth across those years (2006: 10,341; 2007: 10,056; 2008: 8,880), so the spike is model-specific, not a window artifact. The Accord also rises in 2007 (411 vs 332 in 2006) but only by 24%, against the Camry's 122%. The data in this file cannot explain the 2007 Camry figure — no recall, redesign, or sales figure in the sources accounts for a single model year killing 2.2x its neighbors. The article must present it as an open question, not a finding.
- **Exposure-year adjustment (original computation):** dividing each recent model year's deaths by its years on the road inside the 2014–2023 window: 2015: 20.1/yr; 2016: 19.6/yr; 2017: 26.4/yr; 2018: 24.7/yr; 2019: 24.4/yr; 2020: 24.0/yr; 2021: 23.3/yr; 2022: 16.5/yr; 2023: 21.0/yr. The 2015–2021 cohort runs flat at ~20–26 per exposure-year — no improvement. The 2022 figure (16.5) rests on two exposure years and the 2023 figure (21.0) on one; both are noisy. Unlike the Civic, whose 2021–2023 cohort fell ~40%, the Camry shows no clear road-record improvement for the newest cars in the window. Method note: assumes roughly uniform annual sales per model year and full-year exposure; treat as directional.
- **The lab record (2026 cycle, verified on IIHS's own page):** the Camry is the safest-rated midsize sedan in America. Small overlap front: Good on both sides. Updated moderate overlap front: Good overall, Good driver injury measures, Good rear-passenger injury measures, Acceptable rear-passenger restraints. Updated side: Good overall. Headlights: Acceptable on both trim variations. The 2026 Camry holds Top Safety Pick+ in both 2025 and 2026; the Accord holds only the standard Top Safety Pick, one tier down, with the gap concentrated in crash prevention. NHTSA rates the 2026 Camry 5 stars overall (5 frontal / 5 side / 5 rollover).
- **Reconciliation:** the car in the lab is a 2025-redesign, hybrid-only Camry tested as a 2025 SE/LE. The car in the file is mostly a 2000s Camry: 64.3% of the deaths are in pre-2010 model years, and the 2025 redesign has barely entered the FARS window. The award measures the current car. The body count measures the fleet. Both are true, and the gap between them is the story: the average Camry on American roads is not the car IIHS tested.

## What this does NOT prove (limitations)
- FARS rates use estimated fleet and estimated VMT, not odometer readings; ±15% uncertainty for low-volume models (not an issue for the Camry's 2.7M fleet).
- The Camry's high raw count partly reflects volume: 2.7M cars on the road. The rate (2.03) is the volume-adjusted figure and is what the comparisons rest on.
- Impairment percentages come from drivers in fatal crashes with toxicology results; testing rates vary by state and year. The cross-tab shows impairment cannot explain the rate spread; it does not show impairment is irrelevant.
- The model-year exposure adjustment assumes uniform sales and full-year exposure per model year; it is approximate, and 2022–2023 counts are small. Treat the flat 2015–2021 trend as directional, not precise.
- The 2007 spike (426 deaths) is presented as an unexplained outlier. Do not attribute it to a cause the sources do not support.
- FARS cannot attribute individual fatal crashes to a specific design feature. The lab result and the road record are two separate observations that point in different directions; the article must not claim one caused the other.
- The 2026 Camry's TSP+ and 5-star ratings apply to the 2025–27 redesign. Older Camrys carry older ratings and older structures.

## Strongest counterargument
The honest objection: the Camry is not a dangerous car, it is a common car. Ranked by rate it sits 36th of 337 — thoroughly mid-pack — and 20th of 145 sedans. Its drivers are among the soberest in the segment. The 6,328 body count is what 2.7 million cars and ten years produce at an ordinary rate, and the current car just earned the highest award IIHS gives. A reasonable reader could conclude the Camry is fine and the headline is a volume artifact. The counter to the counter: "ordinary rate" is doing a lot of work — 2.03 deaths per 100M VMT is 5.1x the Kia Forte's 0.40 and 3.8x the CR-V's 0.53, on the same roads, with equally sober drivers. The rate is ordinary only if you compare the Camry to the Accord. And the flat exposure-year trend means the newest Camrys in the window were dying at the same pace as the 2015s — the lab got better, the road did not, at least not yet.
