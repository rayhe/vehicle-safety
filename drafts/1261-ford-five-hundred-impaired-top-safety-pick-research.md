# Research: #1261 — The Ford Five Hundred, Top Safety Pick With the Most Impaired Drivers in Its Class

**Slug:** `1261-ford-five-hundred-impaired-top-safety-pick`
**Journalist:** Dale Impactor III (Toxicology Desk Chief — impairment beat; rotation from Axle McScatter at #1260)
**Working title:** "Ford's Safest Sedan Had the Drunkest Drivers in Its Class. It Still Won the Safety Trophy."

## The angle
The Ford Five Hundred (2005-2007) is the only IIHS Top Safety Pick Gold winner sitting in the FARS impairment top five. Among 216 Five Hundred drivers in fatal crashes with toxicology results, **26.4% tested positive for alcohol or drugs** — 5th-highest of 290 models with 150+ tested drivers, edging the Chevrolet Corvette (26.2%). Its drug-positive rate, **13.0%**, ranks 3rd of 290, behind only the Buick Park Avenue (16.6%) and Buick Verano (13.1%). And the car then lost its Top Safety Pick for 2007 for a reason that had nothing to do with crashworthiness: it did not offer electronic stability control, which IIHS had just added to the award criteria. The trophy-winning sedan, the trophy-losing omission, and the most impaired driver pool in its class, all in one forgotten nameplate.

## Kill test: PASS
- Novel vs queue: grep five-hundred / five hundred: **0 prior articles**. The impairment leaders already covered are Park Avenue (#868, drug side), Astro (#1115), Audi A3 (#1212, alcohol side), Corvette (#1007). None is a Top Safety Pick winner, and none pairs the impairment rank with an award won and lost.
- Paradox, not a data dump: a Volvo-engineered sedan (P2 platform, SPACE side-protection architecture) that protected its occupants well enough to post a **0.57 death rate** — near the dataset median of 0.54 — while its drivers tested impaired at sports-car rates. Impairment and lethality decouple here, and the decoupling is the story.
- Same-nameplate arc: Five Hundred (2005-2007) renamed Taurus for 2008, gained ESC as an option plus standard side airbags, and regained Top Safety Pick. The award's own history tells you what the car was missing.

## Core FARS numbers (fars_output.js, FARS 2014-2023; toxicology = BAC > 0 or drug-positive; tested-driver subsets only)
| Vehicle | Tested drivers | Any impaired | Alcohol | Drug | Death rate (per 100M VMT est.) |
|---|---|---|---|---|---|
| Ford Five Hundred | 216 | **26.4% (57)** | 19.9% (43) | 13.0% (28) | 0.57 |
| Buick Park Avenue | 259 | 31.7% | 24.3% | 16.6% | — |
| Chevrolet C/K Pickup | 282 | 28.0% | 21.6% | 11.0% | — |
| Audi A3 | 203 | 27.1% | 22.7% | 7.9% | — |
| Chevrolet Astro Van | 281 | 27.0% | 21.4% | 11.7% | — |
| Chevrolet Corvette | 1,147 | 26.2% | 21.3% | 10.4% | — |
| Fleet-weighted average (all models) | 490,736 | 20.0% | — | — | median 0.54 |
| Big-sedan peers: Crown Victoria 22.3% (n=936), Buick Lucerne 22.0% (n=569), Toyota Avalon 21.7% (n=1,706), Chevrolet Impala 21.4% (n=5,807), Chrysler 300 20.5% (n=2,373) | | | | | |

- Five Hundred ranks **#5 of 290** for any-impairment (n>=150), **#3 of 290** for drug-positive rate, #11 for alcohol-positive rate.
- Five Hundred is **32% above the fleet impairment average** (26.4 vs 20.0) and **4.1 points above its closest big-sedan peer** (Crown Victoria, 22.3%).
- The Five Hundred's twin, the Mercury Montego, does not appear in the toxicology cross-tab (sample too small to meet the threshold); the later Mercury Sable nameplate sits at 20.9% (n=287), a different and much larger population spanning older Sables, so no clean twin comparison is claimed.

## The safety-award history (primary sources 3-4)
- **2006:** Five Hundred with optional side airbags earned Good in IIHS front, side, and rear tests: **Top Safety Pick Gold**. NHTSA gave it five stars for front- and side-impact performance.
- **June 2006 IIHS side test of the car WITHOUT optional side airbags:** rated Poor for side impact. Ford made side airbags standard on cars built from September 2006.
- **2007:** IIHS tightened Top Safety Pick criteria to require ESC. The Five Hundred did not offer ESC, so it lost the designation. Its successor, the 2008 Taurus (the renamed Five Hundred), offered ESC as an option plus standard side airbags and regained Top Safety Pick.
- **Platform:** Volvo P2-derived D3 platform with SPACE (Side Protection and Cabin Enhancement) architecture adapted from Volvo's Side Impact Protection System; hydroformed cross-car beam between the B-pillars; Volvo co-engineered collapsible steering column and roof-mounted airbags.

## Primary sources
1. **NHTSA FARS bulk data 2014-2023**, toxicology cross-tab processed into the site's `fars_output.js` (FARS_TOXICOLOGY, 307 models; FARS_BY_MODEL, 337 models). Reader-facing links: NHTSA FARS page (https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars) and CDAN query tool (https://cdan.dot.gov/query). Alcohol-positive = any BAC > 0, NOT the 0.08 legal-impairment threshold.
2. **NHTSA, "Alcohol-Impaired Driving: 2023 Data" (Traffic Safety Facts):** 12,429 alcohol-impaired-driving fatalities in 2023 (30% of all traffic deaths; one every 42 minutes). https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813713
3. **IIHS, June 2006 large-car side-impact release (via The Auto Channel / Autoblog):** Five Hundred without optional side airbags rated Poor; with optional side airbags rated Good and Top Safety Pick Gold 2006; side airbags standard from September 2006 builds. https://www.theautochannel.com/news/2006/06/18/011770.html
4. **IIHS, May 2007 Top Safety Pick release (via Claims Journal / Auto Channel):** 2008 Taurus regains Top Safety Pick; Five Hundred lost the 2007 designation when ESC became a criterion, which it did not offer. https://amp.claimsjournal.com/news/national/2007/05/15/79713.htm
5. **Ford Five Hundred production history (Wikipedia, citing Ford/IIHS sources):** Volvo P2-derived D3 platform, SPACE architecture, 203 hp 3.0L Duratec V6, 2005-2007 model years, renamed Taurus for 2008. https://en.wikipedia.org/wiki/Ford_Five_Hundred
6. **IIHS, "The ultimate solution to impaired driving is in reach":** ~9,409 deaths/year (2015-18) avertable by blocking BAC >= 0.08 drivers from starting. https://www.iihs.org/news/detail/the-ultimate-solution-to-impaired-driving-is-in-reach

## Limitations (must appear in article)
- Alcohol-positive in FARS toxicology = **any detected alcohol (BAC > 0)**, not the 0.08 legal threshold. Drug-positive covers any detected drug, not impairment level. Do not conflate with NHTSA's alcohol-impaired fatality counts.
- Toxicology testing is **incomplete and inconsistent** across states and years; the tested subset may not be random, and n=216 for the Five Hundred is small — a handful of cases would move the ranking.
- FARS covers **fatal crashes only**. The 26.4% is the share among Five Hundred drivers in fatal crashes with test results, not among all Five Hundred drivers.
- The data cannot prove **why**: buyer age, used-car price, urban/rural mix, and testing-rate differences by state are all plausible mechanisms, unmeasured at model level. Correlation, not causation.
- The death-rate figure (0.57) comes from the site's FARS_BY_MODEL estimates (fleet/VMT estimation), not a NHTSA-published rate; treat as approximate.

## Strongest counterargument (must appear)
Testing bias could manufacture the ranking: if the states that test most aggressively also have the most surviving Five Hundreds on the road, the rate inflates without any behavioral difference. And the car's low death rate cuts both ways: it may show Volvo engineering absorbing impaired driving, or it may show that the Five Hundred's fatal crashes skew toward single-car, late-night, rural crashes where the driver dies regardless of the car's structure. The award history is also thinner than the headline: the Gold pick required the optional side airbags most early cars lacked, and the 2007 loss was a criteria change, not a failed crash test.

## Actionable insight (required gate)
Shopping a cheap big sedan? The Five Hundred's lesson is twofold: first, check the build date — cars built before September 2006 may lack the side airbags the Top Safety Pick depended on, so verify equipment rather than trusting the award year. Second, the badge and the body cannot fix the driver: the only impairment countermeasure with evidence behind it is not starting the car, and IIHS's own math says blocking BAC >= 0.08 starts would have averted roughly 9,400 deaths a year. If you drive a car this old, the safety feature that matters most is the one between the seat and the steering wheel.
