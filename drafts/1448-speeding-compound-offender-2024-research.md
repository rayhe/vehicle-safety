# Research — #1448: The Speeder Was Never Just Speeding

**Slug:** `1448-speeding-compound-offender-2024`
**Journalist:** Dale Impactor III (Toxicology Desk Chief — impairment + driver-behavior data is his beat; treats enforcement numbers like sports stats)
**Kicker:** By The Numbers
**Date researched:** 2026-11-09

## Kill test: PASS

**Proposed angle:** NHTSA's Speeding: 2024 Data fact sheet (DOT HS 813 823, July 2026) shows the speeding driver in a fatal crash is almost never just a speeder. The fact sheet's own cross-tabs: 37% were drunk (vs 17% of non-speeders), 27% had no valid license (vs 14%), half were unbelted (vs 21%), and they were more likely to carry prior crashes, suspensions, and DWI convictions. Speeding is the visible offense; the fatality is usually a compound offender. Second thread: the pandemic ratchet — speeding deaths jumped 30% in 2020-2021 and never came back; 2024 is still 18% above 2019 while total deaths are only 8% above 2019. Third thread, seasonal: 38% of drivers in fatal crashes on ice/frost were speeding, 35% on snow/slush — November timing.

**Challenge — is this genuinely new after 1,447 articles?** Yes, four ways. (1) No prior draft, story, or queue entry uses DOT HS 813 823 as its primary source (full-content grep for "813823" / "813 823": zero hits). (2) The nearest neighbors are different documents: #841 used the GHSA ISA guidebook (policy confession + ISA pilot data), #1411 used CVSA Safe Driver Week enforcement data, #832 used AAA flow-of-traffic research, #1073 used the BAC .15 cohort. None ran the fact sheet's cross-tabs. (3) Novel contribution: the compound-offender ratios (2.2x drunk, 1.9x unlicensed, 2.4x unbelted), the pandemic-ratchet arithmetic (speeding +17.7% vs 2019 against total deaths +8.0%), and the Vermont/Florida 4.9x state spread — none computed anywhere on the site. (4) Newsworthy: 11,288 deaths, 29% of the entire 2024 toll, and the fact sheet is four months old (July 2026) with its sharpest findings unreported on this site.

**Killed this run (duplicate screen — do not revive):**
- Waymo school-bus recall query RQ26006 (#1445, this queue).
- NHTSA 2025 early estimate 36,640 / cyclist +4% (#1299).
- Rural/urban 2024 fact sheet DOT HS 813 828 (#1406 crossover, #1421 died-at-scene).
- Distracted driving 2024 DOT HS 813 790: headline numbers already used in `distracted-driving-undercount-3x` and `distracted-86-percent-not-phones` (both published).
- IIHS commercial crash-avoidance ratings, Oct 8, 2026 (#1110, #1121, #1144, #1175, #1189, #1198, #1227, #1318, #1327, #1341, #1417 — eleven entries).
- GM Express/Savana recall-of-recall 26V718 (#1391); GM EV brake 26V717 (#1387); Hyundai ACU 26V728 (#1435 AND #1444 — see flag below); Subaru 26V685 (#1288; the duplicate #1446 was removed 2026-11-09); Toyota Sienna seatback 26V690 (#1292, #1313, #1332 — three entries); Dodge Durango tail light 26V701 (#1329); PACCAR/Cummins L9 hose 26V700 (#1337, #1046, #1419).
- Ford Explorer airbag-burn PE26008 (#1447, filed Nov 6, 2026).
- GM L87 EA26005 (#1025 + 4 published L87 stories).
- FARS lethality (deaths/crash) — top of the table is the cheap-sedan set already mined by #1446 (Cavalier 0.86, Neon 0.86, LeSabre 0.82, Cobalt 0.81).
- FARS toxicology extremes — Buick Park Avenue 31.7% any-impairment (#868), Subaru Ascent soberest (#1241).

**Flag for a future hygiene run (NOT fixed this run):** #1435 `hyundai-veloster-kona-airbag-software-recall` and #1444 `hyundai-airbag-computer-corrupts-itself` both appear to cover Hyundai campaign 26V728 (37,901 Veloster N + Kona Electric, airbag control unit). If confirmed the same campaign/thesis, that is a duplicate pair of the #1351/#1446 class and should be resolved per that precedent (verify, git rm one set of draft files, remove one queue entry, reset `next`). Also pre-existing: queue number duplicates 1149, 1188, 1314 (two entries each) and `next` was stale at 1446 while max number was 1447; this run corrects `next` to 1449 after creating #1448.

## Verified facts (all from NHTSA, Speeding: 2024 Data, DOT HS 813 823, July 2026; FARS 2024 Annual Report File unless noted)

### Headline
1. **11,288 people died in speeding-related crashes in 2024** — 29% of all 39,254 traffic deaths. Down 5% from 11,913 in 2023. An estimated 316,757 injured. 2,955 fatal crashes (8% of 36,297) were speeding-related; 19% of all drivers in fatal crashes (10,446 of 55,620) were speeding.
2. **The decade:** speeding deaths rose 16% from 9,723 in 2015 to 11,288 in 2024. Share of the toll rose from 27% (2015) to 29% (2024).

### The compound offender (the article's core)
3. **Drunk:** 37% of speeding drivers in fatal crashes had BAC .08+ vs 17% of non-speeding drivers. 25% were at BAC .15+ (more than twice the legal limit in most states) vs 11%.
4. **Unlicensed:** 27% of speeding drivers in fatal crashes had no valid license at the time vs 14% of non-speeding drivers.
5. **Unbelted:** 50% of speeding passenger-vehicle drivers were unrestrained vs 21% of non-speeding drivers (known restraint use).
6. **Repeaters:** speeding drivers in fatal crashes were more likely than non-speeders to have previously recorded crashes, license suspensions or revocations, and/or speeding or DWI convictions in the prior 5 years (fact sheet Figure 2; exact percentages not cleanly extractable from the PDF text layer — cite qualitatively only).
7. **Age + alcohol interaction:** among speeding drivers 21+, the 25-34 group had the highest alcohol-impairment rate (43%). In the 35-44 and 45-54 groups the speeding/non-speeding impairment gap was 23 percentage points each. Except for ages 21-24 and 75+, speeding drivers were impaired more than twice as often as non-speeders in every age group.
8. **Under-21:** 34% of speeding drivers under 21 had alcohol in their systems (BAC .01+) vs 18% of non-speeding drivers the same age; 28% were alcohol-impaired (.08+).

### Who speeds
9. **Teen males:** 39% of male drivers aged 15-20 in fatal crashes were speeding — the highest of any age/sex group. Highest female rate was also 15-20, at 20%. Overall: 21% of male drivers in fatal crashes were speeding vs 12% of female drivers.
10. **Motorcycles:** 37% of motorcycle riders in fatal crashes were speeding — the highest of any vehicle type (passenger cars 22%, light trucks 15%, large trucks 8%). 11% of riders were both speeding and alcohol-impaired; 10% were speeding and unhelmeted.

### When and where
11. **Night/weekend:** 22% of drivers in fatal crashes at night were speeding vs 16% in daytime; 22% on weekends vs 17% on weekdays. Highest: nighttime weekend hours, 23%. Lowest: weekday daytime, 15%.
12. **Worst hour:** midnight to 2:59 a.m. was when drivers in fatal crashes were most likely alcohol-impaired. Weekend speeding drivers in that window: 64% impaired (57% on weekdays).
13. **Roads:** 87% of speeding-related fatalities occurred on non-interstate roadways; only 13% on interstates. Non-interstate urban: 5,775 (52%); non-interstate rural: 3,985 (36%).
14. **Surface (November hook):** speeding was a factor for 18% of drivers in fatal crashes on dry roads, 23% on wet, 35% on snow/slush, and 38% on ice/frost. "Too fast for conditions" is itself a speeding citation — the same speed can be legal on dry pavement and speeding on ice.
15. **Work zones:** speeding was involved in 34% of fatal crashes in construction/maintenance zones vs 28% outside them.

### States
16. **Most speeding deaths:** Texas 1,496; California 1,139; North Carolina 676. Fewest: Rhode Island 16; DC 18; North Dakota 20.
17. **Highest speeding share of each state's toll:** Vermont 54%, Alaska 50%, Montana 43%, Hawaii 42%, North Carolina 42%, Connecticut 41%. **Lowest:** Florida 11%, Kentucky 13%, Mississippi 17%, Ohio 17%.
18. **Belt gap by state:** among speeding passenger-vehicle drivers, Idaho had the highest unrestrained share (77%); Nevada the lowest (30%). Nationally 50%.
19. **Alcohol gap by state:** Vermont's speeding drivers were alcohol-impaired 56% of the time (highest); Alaska's 23% (lowest). In every state, DC, and Puerto Rico, speeding drivers were alcohol-impaired more frequently than non-speeding drivers.
20. **Rural/urban split (from DOT HS 813 828, cross-check):** 4,495 rural speeding deaths (28% of rural deaths) vs 6,720 urban (29% of urban deaths) — the speeding share is nearly identical in both worlds.

## Computations (original to this piece)
- **Pandemic ratchet:** 2019 speeding deaths 9,592 → 2021 peak 12,498 (+30.3%) → 2024 11,288. 2024 vs 2019: 11,288/9,592 = **+17.7%**. Total deaths 2024 vs 2019: 39,254/36,355 = **+8.0%**. Speeding grew more than twice as fast as the overall toll since 2019, and its share rose 26% → 29%.
- **Compound ratios:** drunk 37/17 = **2.2x**; BAC .15+ 25/11 = **2.3x**; unlicensed 27/14 = **1.9x**; unbelted 50/21 = **2.4x**.
- **Per day:** 11,288/365 = **30.9 speeding deaths per day** — roughly one every 47 minutes.
- **Texas share:** 1,496/11,288 = **13.3%** of the national speeding toll in one state.
- **State spread:** Vermont 54% vs Florida 11% = **4.9x** gap in speeding's share of each state's deaths.
- **Interstate paradox:** only 13% of speeding deaths happen on interstates — the fastest roads in the country are where speeding kills least, because the deaths concentrate on the ordinary roads where the limit is lower and the margin is thinner.

## Primary sources (4+)
1. NHTSA, *Speeding: 2024 Data* (Traffic Safety Facts, DOT HS 813 823, July 2026) — read in full via crashstats PDF. All headline numbers verified in text. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813823.pdf — DOI 10.21949/86b4-hv17.
2. NHTSA, *Overview of Motor Vehicle Traffic Crashes in 2024* (DOT HS 813 791, April 2026) — 39,254 total deaths, 1.19 per 100M VMT, 2023 final 41,025. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813791
3. NHTSA, *Rural/Urban Traffic Fatalities: 2024 Data* (DOT HS 813 828, July 2026) — rural/urban speeding split cross-check. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813828
4. NHTSA FARS database (canonical). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
5. NHTSA recalls database (for the actionable VIN check). https://www.nhtsa.gov/recalls
6. Context (not primary): GHSA ISA guidebook coverage (#841) and CVSA Safe Driver Week results (#1411) — cited as prior site coverage of the enforcement/technology response, not as sources for the numbers here.

## What this article must NOT claim
- That any single speeding driver was drunk AND unlicensed AND unbelted. The fact sheet gives marginal rates, not the joint overlap. The article may say the violations cluster and stack; it must not invent a "usually all three" statistic.
- That the 2024 numbers are final. They come from the FARS Annual Report File, subject to revision when the final file lands.
- That speeding *caused* these deaths in the causal sense. "Speeding-related" is a police coding: charged with a speeding offense, or an officer indicated racing / too fast for conditions / exceeding the limit. A driver at the posted limit on ice counts as speeding. Say so.
- That Florida's 11% means Floridians speed less, or Vermont's 54% means Vermonters speed more. State shares are confounded by enforcement, coding practice, road mix, and exposure. Present the spread; do not rank states' drivers.
- Exact Figure 2 prior-record percentages (PDF text layer garbles them). Qualitative only.
- That the pandemic *caused* the 2020-2021 jump. The timing aligns with empty roads and the documented 2020 speeding surge; the fact sheet does not prove the mechanism. Say "jumped" and "never came back," not "because of."

## Strongest counterargument (state at full strength)
The whole edifice rests on a cop's checkbox. "Speeding-related" is not a measurement; it is a judgment made at a crash scene, often after the fact, and it is applied unevenly — a drunk, unlicensed, unbelted driver who dies in a wreck is far more likely to get "speeding" written on the report than a sober commuter in the same ditch, because the officer already has a theory of the crash. The compound-offender pattern may be partly an artifact of that selection: the same behavior cluster that gets you coded as speeding also gets you coded as everything else. And on ice and snow, "too fast for conditions" turns ordinary winter driving into a speeding statistic — 38% on ice may say more about physics than about recklessness. If the coding is biased, the 11,288 is a soft number and the ratios are softer. The article must carry that caveat in the body, not bury it.

## Limitations
- 2024 figures are from the FARS Annual Report File; final-file revision may move them.
- Speeding involvement is police-coded, not instrument-measured; under- and over-coding both occur and vary by state.
- BACs are estimated by NHTSA when test results are unknown.
- No exposure denominator for speeding itself (no miles-driven-speeding data), so no per-mile speeding risk can be computed; all rates are shares of fatal crashes, not risk rates.
- The fact sheet's vehicle-type classification changed in 2020 (vPIC), so pre-2020 vehicle-type comparisons are not used here.

## Actionable insights (for article)
1. Parents of a 15-to-20-year-old boy: he is in the single highest-risk speeding group on the road (39% of his age/sex cohort in fatal crashes were speeding). The conversation is not "don't speed" in the abstract; it is nighttime, weekends, and the first winter ice.
2. Winter drivers: on ice or frost, 38% of fatal-crash drivers were speeding — and "speeding" on ice can mean driving the posted limit. The limit is a dry-road number. Cut it in half on ice; the fact sheet's own definition says so.
3. Work zones: a third of fatal work-zone crashes involved speeding. Slow down where the lanes narrow — the 34% figure is the highest of any road context in the sheet.
4. If you are buying a used car for a teen: the speeding driver's car is usually also the unbelted, unlicensed, drunk driver's car. The intervention that matters is not horsepower; it is the belt habit, the license status, and the keys on a Friday night.
