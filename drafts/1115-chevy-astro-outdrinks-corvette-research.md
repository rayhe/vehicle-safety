# Research: #1115 — The Chevy Astro Out-Drinks the Corvette

## Angle (1-2 sentences)
The Chevrolet Astro van — a boxy, rear-drive workhorse discontinued in 2005 — has the 4th-highest impairment rate of any vehicle in the FARS toxicology data: 27.0% of its drivers in fatal crashes were alcohol- or drug-impaired, beating the Corvette (26.2%). The least cool vehicle in the top five is out-drinking America's sports car.

## Self-critique gate
- Is this genuinely surprising after 300+ articles? Yes. The queue has covered the Corvette as "drunkest car in America" (#1007) — but the FARS data says a 1990s Chevy van actually tops it. It's a data-correction story AND a paradox. The uncool-van camouflage angle is fresh.
- Real data with sources? Yes — FARS toxicology cross-tab (n=281 for the Astro, solid sample), NHTSA 2023 alcohol-impaired fatality stats, Astro production history.
- Shareable? "Your neighbor's box van is a better DUI candidate than a Corvette" is a share trigger.

## Core FARS numbers (fars_output.js, FARS 2014–2023, toxicology = BAC > 0 or drug-positive)
| Vehicle | Drivers tested | Any impaired | Alcohol | Drug |
|---|---|---|---|---|
| Chevrolet Astro Van | 281 | **27.0%** (76) | 21.4% (60) | 11.7% (33) |
| Chevrolet Corvette | 1,147 | 26.2% (300) | 21.3% (244) | 10.4% (119) |
| Chevrolet Express | 1,778 | 19.0% (338) | 14.2% | 7.9% |
| Fleet-weighted average (all models) | 490,736 | 20.0% | — | — |

- Astro ranks **4th of all models with n>=150** behind Buick Park Avenue (31.7%), Chevrolet C/K Pickup (28.0%), Audi A3 (27.1%).
- Astro is **35% above the fleet average** (27.0 vs 20.0).
- **Van-class leader by a mile**: next is Ford Windstar at 23.1%, then E-150 22.1%, Caravan 21.9%. Same-brand Chevy Express sits 8 points lower at 19.0%.
- FARS_BY_MODEL: Astro deaths 93 total across the window (rate 0.6 per 100M VMT est.) — so the Astro is not especially deadly overall; its DRIVERS are the story, not the vehicle dynamics.

## Primary sources
1. NHTSA FARS 2014–2023 toxicology data (via site fars_output.js; query tool: https://cdan.dot.gov/query). Primary data behind every impairment number.
2. NHTSA "2023 Data: Alcohol-Impaired Driving" — 12,429 alcohol-impaired fatalities in 2023 (30% of all traffic deaths), one every 42 minutes; down 7.6% from 2022 (13,458). http://crashstats.nhtsa.dot.gov/Api/Public/Publication/813713
3. Chevrolet Astro production history: produced 1985–2005, last unit rolled off the Baltimore line May 13, 2005 (~3.7M Astro + Safari built); body-on-frame, rear-drive; poor crash-test scores per Consumer Guide 2005 review. https://en.wikipedia.org/wiki/GMC_Safari and http://blog.consumerguide.com/review-flashback-2005-chevrolet-astro/
4. IIHS fatality statistics context: https://www.iihs.org/topics/fatality-statistics

## Original contribution
- A cross-tabulation nobody ran: impairment rate × vehicle model × class for work vans. Finding: the boxy midsize van is the most-impaired van class leader by 4+ points and ranks above every sports car in the dataset.
- The "camouflage hypothesis": DUI enforcement profiles sports cars and loud rides; the Astro is invisible — the anti-profile vehicle. Plus the affordability confound: cheap, 20-year-old vans attract high-risk drivers (work crews, rural miles, late-night driving).
- Same-brand contrast: Astro 27.0% vs Express 19.0% — two Chevy vans, one 8 points drunker.

## Limitations (must state in article)
- FARS toxicology covers FATAL crashes only — 281 tested Astro drivers across a decade. Impairment rate among all Astro drivers is certainly lower.
- n=281 for Astro vs n=1,147 for Corvette — the Astro's 0.8-point edge over the Corvette is within statistical noise; the honest claim is "on par with / essentially tied with the Corvette," not "definitively worse."
- Confounders: driver age, rural vs urban miles, vehicle age, alcohol-testing rates by state — none controlled. Cheap old vans are driven by different people than new Corvettes.
- The Astro died in 2005; this is a historical profile of a fleet, not a current product warning. Remaining Astros are 21+ years old.

## Strongest counterargument (full strength)
The entire finding might be a demographic artifact, not a vehicle story. A 20-year-old work van costs a fraction of a Corvette; its drivers are younger work-crew laborers and rural drivers — populations with higher baseline impairment regardless of vehicle. The Astro didn't make anyone drink; it just happens to be what some impaired people could afford to drive. The Corvette's 26.2% (on n=1,147, a much tighter estimate) is arguably the scarier number because it's the same rate among people with money and choices.

## Actionable takeaways (gate)
- Buying a cheap work van? Budget for a dash cam and know the vehicle's DUI-adjacent statistical profile; insurers have already priced this in (or soon will).
- The enforcement lesson: if profiling targets sports cars, the Astro is the counterexample — behavior beats vehicle stereotypes.
- If you're shopping used vans: the data says nothing about the Express vs Astro on crashworthiness, only about who tends to be at the wheel. Check VIN at nhtsa.gov/recalls regardless.

## Journalist
Dale Impactor III (Toxicology Desk Chief). Kicker: Sobriety Report.
