# Research — #1560: The Same Truck, Four Times the Death Rate (GMC Yukon vs Cadillac Escalade)

**Slug:** `1560-yukon-same-truck-four-times-escalade-death-rate`
**Journalist:** Vin Wreckage (Existential Dread Columnist — paradoxes, counterintuitive findings, the big picture)
**Kicker:** Existential Dread
**Date researched:** November 21, 2026
**Target ship_date:** 2028-10-20 (1 day after #1559's 2028-10-19)

## Story in one line
The GMC Yukon and the Cadillac Escalade are the same truck — same GMT800/900 platform, same frame, same era, same basic structure — and the Yukon kills at 2.55 deaths per 100 million miles while the Escalade kills at 0.64, a four-fold gap with nearly identical drunk-driver profiles, which means the difference is not the drivers, not the road, and not the crash. It is the truck, or who buys it, or both, and nobody selling either one will say which.

## Kill test
- **Genuinely newsworthy?** YES. A 4.0x fatality-rate gap between two nameplates of the same vehicle is the largest platform-controlled spread in the FARS file, and it has never been the subject of a Crash Report article. #931 compared the Navigator vs Escalade on impairment and listed the Yukon (2.55) only as a peer line in its context section; it never ran the four-way GMT sibling comparison, never computed the impairment-adjusted gap, and never looked at the model-year distribution.
- **Novel angle on data?** YES. Original contribution: (1) the platform-controlled four-way comparison — Yukon 2.55, Tahoe 2.49, Suburban 1.36, Escalade 0.64, all GMT800/900, all 2014-2023 FARS; (2) the impairment-adjusted check showing the gap does NOT shrink when impaired drivers are removed (it stays 4.0x); (3) the model-year distribution showing Yukon deaths concentrated in 2001-2005 while Escalade deaths are spread thin across all years; (4) the counterfactual: at the Escalade's rate, the Yukon fleet would have produced ~280 deaths instead of 1,114.
- **3+ primary sources?** YES. (1) NHTSA FARS 2014-2023 per-model data in the repo's fars_output.js (derived from FARS bulk CSV + US sales + NHTS VMT); (2) FARS toxicology table in the same file; (3) FARS model-year table in the same file; (4) IIHS fatality statistics page and IIHS ESC effectiveness study for the stability-control context; (5) NHTSA ESC final rule (FMVSS 126 phase-in) for the mandate timeline.
- **Not covered?** YES. Full drafts/queue grep for "yukon" as a research subject: zero dedicated articles. Nearest neighbors: #931 (Navigator vs Escalade impairment paradox — different comparison, different thesis, Yukon appears once as a peer number), #1126 (Silverado/Sierra twin gap — pickups, not SUVs), #1432 (Expedition 2007 cliff — Ford, not GM). No article has compared the four GMT siblings or asked why the same truck has a 4x spread.
- **Verdict:** PROCEED.

## Killed angles this run (duplicate screen)
Every November 2026 recall and investigation was checked against the queue and found covered: 26V721 Honda steering (#1457/#1533), 26V735 ZDX (#1521), 26V732 Atlas child seat (#1540), 26V691 Navigator seat (#1423), 26V756 Ram ABS (#1547), 26V750 Tundra camshaft (#1507), 26V748 Takata (#1493/#1550), 26V749 S2000 (#1545), 26V765 Honda Takata second wave (#1550), 26V727 Transit BCMC (#1537), 26V726 Explorer map lights (#1466), 26V730 Harley neutral (#1462), 26V717 GM EV brakes (#1387), 26V733 BMW water pump (#1548), 26V718 Express/Savana nut (#1391), 26V728 Hyundai airbag (#1435), 26V690 Sienna seats (#1332), 26V687 Lexus NX (#1277), 26V678 Range Rover camera (#1251), 26V673 Land Cruiser fuel (#1248), 26V664 Genesis fire (#1224), 26V701 Durango tail lights (#1329), 26V744 PACCAR radar (#1542), 26V747/26V746 truck snap-ring (#1544), 26V741 New Flyer fuel hose (bus, 1,182 units — too small, and the Cummins L9 parent recall 26E066 already covered by #1046), 26V724 Maverick cable (#1546/#1468), PE26008 Explorer airbag burns (#1447), EA26007 Honda stop-start (#1527), DP26011 Godzilla (#1350), DP26013 Palisade defog (#1538), EA26005 GM L87 (#1025), IIHS Oct 8 commercial crash-avoidance round (#1110/#1121), IIHS Oct 31 moderate-overlap wave (#1244/#1408/#1484), IIHS Nov 2026 small-SUV back-seat results (Kicks/RAV4/CR-V — #1244/#1278/#1346/#1408/#1484/#1557), NHTSA H1 2026 early estimates (#1458/#1494), 2025 full-year estimate (#1053/#1299), November recall census (#1528), automakers sue New Jersey (#1556), Byassee counterfeit airbag verdict (#1555). The recall pool is exhausted; this run goes to FARS, per the #1549/#1551 precedent.
- **FARS angles killed:** Corolla safest-sedan paradox (already the original contribution of `corolla-rear-seat-two-fixes-still-marginal`); Land Cruiser sober-killer (#1118); Solara impairment inversion (#1013); Tracker deadliest SUV sober (#908); Veloster deadliest sober drivers (#1064); druggiest drivers Alero/Park Avenue/M5 (#1065); midsize pickup spread (confounded by fleet age, no platform control); F-150 body count (#1217 + `f150-americas-favorite-body-count`); Ram 1500 brand-split (`ram-1500-americas-other-truck` already in stories/); Camry (#1551), Civic (#1549), Avalon (#1552) safe-sedan series (Corolla would be the fourth identical frame in a row).

## Verified facts

### The four-way GMT sibling table (FARS 2014-2023, fars_output.js)
| Model | Deaths | Rate per 100M VMT | Est. fleet | Crashes |
|---|---|---|---|---|
| GMC Yukon | 1,114 | **2.55** | 350,000 | 2,339 |
| Chevrolet Tahoe | 2,592 | **2.49** | 831,250 | 5,078 |
| Chevrolet Suburban | 593 | **1.36** | 350,000 | 1,151 |
| Cadillac Escalade | 211 | **0.64** | 262,500 | 452 |

Same GMT800/900 platform. Same frame, same body structure, same era. The Yukon kills at **3.98x** the Escalade's rate. The Tahoe at 3.89x. Even the Suburban, the longest and heaviest of the four, kills at 2.13x the Escalade.

### Impairment does not explain it (FARS toxicology, drivers in fatal crashes)
| Model | Any impaired | Alcohol-positive | Drug-positive | Drivers tested |
|---|---|---|---|---|
| GMC Yukon | 21.4% | 16.5% | 8.7% | 3,491 |
| Chevrolet Tahoe | 20.6% | 15.7% | 8.8% | 6,317 |
| Chevrolet Suburban | 20.3% | 16.2% | 8.2% | 2,978 |
| Cadillac Escalade | 22.0% | 15.9% | 9.7% | 1,169 |

The Escalade's drivers are the *most* impaired of the four (22.0% any-impaired, 9.7% drug-positive) and the Escalade is still the safest by a factor of four. Impairment-adjusted check (same method as #931): Yukon non-impaired rate ≈ 2.55 × (1 − 0.214) = **2.00**; Escalade non-impaired rate ≈ 0.64 × (1 − 0.220) = **0.50**. Adjusted ratio: **4.0x**. The gap does not shrink. It is not the drivers.

### The counterfactual
At the Escalade's rate of 0.64, the Yukon's fleet (350,000) would have produced about **280 deaths** over the decade instead of 1,114. That is **834 deaths** of gap on one nameplate. At the Suburban's rate (1.36), the Yukon would have produced ~595 deaths — 519 fewer than observed. The badge alone is worth hundreds of lives in this file, and the file cannot say why.

### Model-year distribution (FARS_MODEL_YEAR, deaths by model year of vehicle)
- **Yukon:** deaths peak 2001-2005 (105, 117, 115, 136, 90 per year), then fall off a cliff: 25 in 2006, 91 in 2007, 49 in 2008, 18 in 2009, single digits to teens from 2010 on. 2001-2005 account for 563 of 1,114 deaths (51%).
- **Tahoe:** same shape, bigger scale: 278-311 per year in 2001-2005, 1,355 of 2,592 deaths (52%) in those five model years.
- **Escalade:** no peak at all. Deaths spread thin: 28 in 2002, 30 in 2007, 21 in 2004, 18 in 2005 and 2008, single digits most other years. The Escalade never had a bad vintage.
- **Suburban:** peak 2001-2005 as well (51-72/yr), 290 of 593 (49%) in those years.
- Caveat: model-year counts are confounded by exposure — a 2004 truck had ten years inside the 2014-2023 crash window and a 2019 truck had five. The peak is still informative because all four nameplates share the same exposure structure, and the Escalade's flat distribution under identical exposure is the anomaly.

### Context: the segment
- Ford Expedition: 1,515 deaths, rate 2.31 (from #931). Lincoln Navigator: 209 deaths, rate 1.06. The Navigator and Escalade are the two safest full-size body-on-frame SUVs in the dataset — and they bracket a 66% gap between themselves.
- IIHS driver death rates (July 2026 release, 2023 and equivalent models) and the IIHS ESC study put the mechanism in frame: electronic stability control cuts fatal single-vehicle crashes by roughly half, and the federal ESC mandate (FMVSS 126) phased in 2009-2012 — exactly the model years where the Yukon/Tahoe death counts fall off. The FARS file cannot prove ESC timing caused the gap (it does not record ESC fitment per vehicle), so the article presents it as the leading hypothesis, not a finding.

## Original contribution
Nobody has run the platform-controlled comparison: four nameplates, one frame, one era, rates from 0.64 to 2.55. The impairment-adjusted check (gap stays 4.0x) and the counterfactual (834 deaths) are new calculations. The model-year distribution comparison across all four siblings is new. The article's thesis is the question itself: GM sold the same truck four ways, and the death rate depends on which badge is on the grille. The honest answer is that the file cannot separate the candidate causes — ESC fitment timing, buyer demographics and age, usage (towing, rural, livery, police use for the Tahoe), price and model-year mix, and denominator uncertainty — and the article says so at full strength instead of picking a favorite.

## Strongest counterargument (state at full strength)
The rate denominator is an estimate, not a measurement. Fleet and VMT come from sales data and NHTS mileage surveys, not odometers, and low-volume nameplates carry real uncertainty. The Escalade's fleet (262,500) is the smallest of the four, and its buyers are the wealthiest and oldest, drive the fewest miles, garage their trucks, and replace them soonest — so the Escalade's rate may measure who buys it and how they drive it, not how it protects them. The Tahoe's rate is inflated by police use (high-speed pursuit, high mileage, high exposure). The Yukon sits in the middle on price and use, and its rate may simply reflect a middle-aged fleet driven harder than the Escalade's and longer than the Suburban's. If the denominator and the usage mix explain the gap, the "same truck" framing is a statistical artifact, and the article's 4x number is a property of the buyers, not the badge. The data cannot rule this out. The article must not pretend otherwise.

## Limitations (for the article)
1. FARS captures fatal crashes only. A vehicle with a low fatality rate can still have high injury rates.
2. Rates use estimated fleet/VMT from sales data and NHTS mileage, not odometer readings. Low-volume models carry meaningful denominator uncertainty; the 4.0x gap is directional, not precise to two decimals.
3. Impairment is measured only for drivers in fatal crashes with toxicology reported; testing practices vary by state.
4. Cannot separate occupant deaths from deaths the vehicle inflicted on others. Large SUVs are aggressor vehicles; part of any nameplate's death count is other people's deaths.
5. The FARS file does not record ESC fitment, trim level, or buyer demographics per vehicle, so the mechanism behind the gap is unidentified. The ESC-timing hypothesis is consistent with the model-year cliff but unproven.
6. Model-year death counts are confounded by exposure time inside the 2014-2023 window.

## Actionable takeaways (for the article)
- Shopping a used full-size GM SUV: the 2001-2005 Yukon/Tahoe vintages are the deadliest in the file (over half of each nameplate's deaths). A 2010-or-newer truck from the same lines carries a fraction of the risk, and every 2012-or-newer vehicle has ESC by federal mandate.
- The badge is not the safety feature. A used Escalade is not four times safer than a used Yukon because of the crest; the data says the gap tracks with who bought it, when, and how it was driven. Buy on model year and condition, not the badge.
- Check any used Yukon/Tahoe/Suburban/Escalade VIN at nhtsa.gov/recalls before buying; the GMT900 trucks have their own recall histories, and the 2007-2014 airbag and stability-control campaigns matter more than the badge.

## Sources
1. NHTSA FARS 2014-2023 per-model data, repo file `fars_output.js` (FARS_BY_MODEL, FARS_TOXICOLOGY, FARS_MODEL_YEAR) — all numbers above computed from this file, Nov 21, 2026.
2. NHTSA, Fatality Analysis Reporting System (FARS): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
3. IIHS, Fatality statistics: https://www.iihs.org/topics/fatality-statistics
4. IIHS, "Life-saving benefits of ESC continue to accrue": https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
5. NHTSA ESC final rule (FMVSS 126 phase-in, 2009-2012): https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
6. Prior Crash Report coverage for context: #931 Navigator vs Escalade impairment paradox; #1126 Silverado/Sierra twin gap.
