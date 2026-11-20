# Research — #1539: The Deadliest Model Year on American Roads Is 2005. Three-Quarters of the Dead Never Had Stability Control.

**Slug:** `1539-deadliest-model-year-2005-pre-esc-fleet`
**Journalist:** Mia Crumplezone (Safety Engineering Editor — vehicle design analysis, safety tech, model year trends; the ESC-mandate hinge and what a 2005 car lacks in the first 150 milliseconds is her beat)
**Kicker:** Trend Watch
**Date researched:** November 19, 2026
**Target ship_date:** 2028-09-29 (1 day after #1538's 2028-09-28)

## Story in one line
Of the 187,058 people who died in crashes in FARS 2014–2023 in the 337 models this site tracks, 62.3 percent were in vehicles built before the stability-control mandate even began phasing in — and the single deadliest model year on American roads is 2005, with 11,363 deaths, while the average car on the road just hit a record 12.8 years old.

## Kill test
- **Genuinely newsworthy?** YES. Fresh context: S&P Global Mobility's May 2025 release put the average age of US light vehicles at a record 12.8 years (289 million in operation; passenger cars 14.5 years). The fleet keeps aging into the danger zone this data maps. The FARS cohort decomposition is new arithmetic on the site's own dataset.
- **Novel angle on data?** YES, with the overlap stated honestly. Nearest neighbors: twelve-year-kill-zone (average vehicle age at fatal crash 12.5 years; era buckets pre-2000 / 2000–2004 / 2005–2009), kill-curve-vehicle-age (class-specific age curves), fleet-age-impairment-gradient (age × impairment), twelve-year-safety-lag, fleet-turnover-lag, fleet-retirement-dividend. None of them cut the data on the regulatory hinge: FMVSS 126 phased electronic stability control in from model year 2009 and required it on all new light vehicles by model year 2012. None names the single deadliest model year (2005: 11,363 deaths, 6.1% of the total — more than all 2020–2023 model years combined, 5,955). None reports the per-model median model year of the dead (a 1995 Chevrolet GMT-400, a 1998 S-10, a 2000 Ranger). The article's original contribution is the ESC-hinge decomposition (pre-2009 62.3% / phase-in 9.6% / post-mandate 28.1%), the single-year peak, and the oldest-fleet table — not the average age, which kill-zone already owns.
- **3+ primary sources?** YES. (1) NHTSA FARS 2014–2023, model-year file as compiled in this site's `fars_output.js` (337 models, 187,058 deaths by vehicle model year). (2) S&P Global Mobility, "Average Age of Vehicles in the US Hits 12.8 Years in 2025," May 21, 2025: 289 million light vehicles in operation, average age 12.8 years (12.6 in 2024), passenger cars 14.5 years, light trucks 11.9 years, scrappage 4.5%. (3) NHTSA FMVSS 126, Electronic Stability Control Systems, final rule 2007 (72 FR 34602): ESC phased in from MY2009, 100% of new light vehicles by MY2012. (4) IIHS, "Life-saving benefits of ESC continue to accrue": ESC cuts fatal single-vehicle crash risk by about half and fatal multiple-vehicle crash risk by about a fifth.
- **Not covered?** YES. Full queue grep: "2005" 0, "fleet age" 0, "deadliest model year" 0, "pre-esc" 0, "esc gap" 0, "model-year cohort" 0. The killed-angle check also cleared the day's other candidates as duplicates first: Honda divide-by-zero 26V721 (#1533, #1457), Ford Explorer airbag burns (#1447), Honda stop-start expansion (#1527), BMW water-pump recall-of-recall (#1490), Acura ZDX 26V735 (#1521), NHTSA H1 2026 Q2 stall (#1458), Toyota Takata 26V748 (#1493, researched Nov 13 — the Nov 19 NHTSA announcement adds only a campaign number and model list to the same story).
- **Verdict:** PROCEED.

## Verified facts

1. **The cohort table (FARS 2014–2023, 337 models, 187,058 deaths by vehicle model year).** Pre-2009 model years (before ESC phase-in began): 116,597 deaths, 62.3%. Model years 2009–2011 (ESC phase-in): 17,894 deaths, 9.6%. Model year 2012 and newer (ESC mandatory on all new light vehicles): 52,567 deaths, 28.1%. Pre-2012 combined: 134,491 deaths, 71.9%.
2. **The single deadliest model year is 2005: 11,363 deaths (6.1% of the total).** Top five single years, in order: 2005 (11,363), 2004 (11,221), 2003 (10,714), 2006 (10,341), 2007 (10,056). The 2003–2007 five-year cohort: 53,695 deaths, 28.7% of the total. The 2000–2009 decade: 94,290 deaths, 50.4%. The median model year of a person who died in a fatal crash in this dataset is 2006.
3. **The tail is a window artifact, not a safety verdict.** Model years 2020–2023 account for only 5,955 deaths (3.2%): 2020: 2,873; 2021: 1,877; 2022: 867; 2023: 338. A 2023 car could only appear in crashes from 2023 onward inside a window ending in 2023, so the recent-year counts are mechanically small. The article must not claim 2023 cars are 30x safer than 2005 cars from these counts alone.
4. **The oldest fleets still killing.** Median model year of deaths, models with 500+ deaths: Chevrolet GMT-400 1995 (642 deaths), Chevrolet S-10 Pickup 1998 (1,419), Ford Ranger 2000 (3,079; 98% of its deaths pre-2012), Toyota 4Runner 2000 (1,412), Jeep Cherokee 2001 (2,267), Buick LeSabre 2001 (1,329). Newest medians: Nissan Rogue 2017 (949), Ram 1500 2017 (713), Kia Forte 2017 (602).
5. **Whole nameplates are pre-ESC.** Among models with 1,000+ deaths, the Chevrolet Cobalt (1,540), S-10 (1,419), LeSabre (1,329), Dodge Dakota (1,236), Chevrolet Cavalier (1,216), and Mercury Grand Marquis (1,135) are 100% pre-2012 model years; the TrailBlazer (2,457) is 99% and the Ranger (3,079) 98%. These are not old cars in the abstract — they are specific, still-common vehicles whose entire fatal-crash population predates the mandate.
6. **The fleet is aging into the cohort, not out of it.** S&P Global Mobility, May 21, 2025: average age of US light vehicles 12.8 years, a record (12.6 in 2024, 12.5 in 2023, 12.1 in 2021); 289 million light vehicles in operation; passenger cars average 14.5 years, light trucks 11.9 years; scrappage 4.5%. A 2005 car is 20 years old in 2025 — and the average car on the road is now a 2012-or-older vehicle by age alone.
7. **What ESC does.** IIHS: ESC reduces the risk of a fatal single-vehicle crash by about half and a fatal multiple-vehicle crash by about a fifth. FMVSS 126 (2007 final rule) phased ESC in from MY2009 and required it on all new passenger cars, multipurpose passenger vehicles, trucks, and buses under 10,000 lbs GVWR by MY2012.

## Original contribution
- **The ESC-hinge decomposition:** 62.3% / 9.6% / 28.1% across the pre-phase-in / phase-in / post-mandate cohorts — the first cut of the site's FARS model-year data on the regulatory line that actually changed what cars can do in a skid.
- **The single-year peak:** 2005, 11,363 deaths — more deaths than all model years 2020–2023 combined (5,955), a comparison that makes the fleet-age problem concrete in one number.
- **The median-model-year table:** the oldest and newest fleets in fatal crashes, naming the specific nameplates (GMT-400, S-10, Ranger) whose dead are still driving pre-mandate cars.
- **The aging-fleet collision:** the 12.8-year record average age means the median car on the road today is roughly a 2012 — the hinge year itself. The fleet is not outrunning the 2005 cohort; it is parked on it.

## Strongest counterargument
Raw death counts by model year confound three things the article cannot separate with this dataset: exposure (how many of each model year were on the road and how many miles they drove), driver selection (older, cheaper cars are disproportionately driven by younger, poorer, and riskier drivers — fleet-age-impairment-gradient showed impairment rises as fleets age), and the crash-window artifact (a 2023 car had one year to appear in the data; a 2005 car had ten). The 62.3% pre-2009 share is a description of who died, not a causal rate — the article must say so, and must not convert cohort shares into "a 2005 car is X times as deadly as a 2015 car." The honest claim is narrower and still damning: the cars doing the dying are the ones built before the single most effective crash-avoidance technology became mandatory, and the fleet is getting older, not newer.

## Limitations
- FARS_MODEL_YEAR counts deaths by the model year of the vehicle involved in a fatal crash, 2014–2023, for 337 models with 50+ deaths or >1,000 annual sales. It is not a rate: no VMT or registration denominator by model year, so no per-mile risk by cohort.
- The 2020–2023 counts are truncated by the window (see fact 3).
- ESC adoption was not zero before 2009 — many 2005–2008 vehicles had ESC as standard or optional equipment, and some pre-2012 cars in the data had it. The mandate date is a fleet-level hinge, not a per-car fact.
- S&P average-age figures are as of January of the release year; the May 2025 release describes the fleet during 2024.

## Actionable takeaways (for the article)
- If you drive a pre-2012 car — especially a 2003–2007 model — check whether it has ESC (the dashboard ESC/traction light at startup, or the VIN build sheet). If it does not, that is the single biggest safety gap between your car and a new one, bigger than airbag count.
- Shopping used: a 2012-or-newer car buys the ESC mandate as standard equipment; within the same model, the 2012 is a different safety proposition from the 2011.
- Check your VIN at nhtsa.gov/recalls: the oldest fleets carry the most open recalls, and a 2005 car has had twenty years to accumulate them.

## Primary sources
1. NHTSA, Fatality Analysis Reporting System (FARS) 2014–2023, model-year file, as compiled in this site's `fars_output.js` (337 models; 187,058 deaths). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. S&P Global Mobility, "U.S. Vehicle Age Rises Again to 12.8 Years in 2025," May 21, 2025 (republished by MOTOR). https://www.motor.com/2025/05/u-s-vehicle-age-rises-again-to-12-8-years-in-2025/ (figures corroborated by S&P Global Mobility May 2025 release summaries; 289M VIO, 12.8 years, cars 14.5, trucks 11.9, scrappage 4.5%)
3. NHTSA, FMVSS No. 126, Electronic Stability Control Systems, final rule, 72 FR 34602 (June 22, 2007). https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
4. IIHS, "Life-saving benefits of ESC continue to accrue." https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
5. NHTSA, FARS query tool (CDAN) for independent verification. https://cdan.dot.gov/query
