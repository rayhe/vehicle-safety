# Research: #829 — The Deer Vote for Standard Time
Journalist: Rex Driverton | Kicker: Investigation | Date: 2026-09-06
Slug: `deer-season-clock-change-33-deaths`

## Angle (1-2 sentences)
September is when deer start moving and October-December is when they start dying under bumpers: a University of Washington study in Current Biology estimates 2.1 million deer-vehicle collisions a year killing ~440 people, and found permanent daylight saving would prevent 33 of those deaths annually — which makes the November 1 clock change, shoving sunset directly into the 5-7 p.m. commute at the height of the rut, a scheduled worsening of the deadliest animal hazard on American roads.

## Kill test
- Newsworthy? YES. Seasonal peg is live now (deer movement ramping in September; collisions more than double Oct-Dec per State Farm). The fall-back lands Nov 1, 2026, eight weeks out, at the exact peak of mating season. AAA is already running its annual deer warnings.
- Novel after 800+ articles? YES. Zero deer/animal-strike stories in stories/ or drafts/ (grepped 2026-09-06: no hits for deer|animal.strike). Nobody has framed the clock change as a deer-safety event, and nobody has published the FARS-vs-study death-toll discrepancy (440 vs ~200).
- 3+ primary sources? YES (see below).
- Rex-appropriate? YES. Deadpan paradox beat: the most dangerous animal on the road is a 150-pound herbivore, and Congress's clock ritual feeds it. Proceed.

## Primary sources
1. Cunningham, Prugh et al., University of Washington, Current Biology (Nov 2, 2022), via phys.org and Newswise summaries.
   - ~2.1M deer-vehicle collisions/yr in the US; ~440 human deaths; 59,000 injuries; $10B+ costs.
   - Dataset: 1M+ collisions from 23 states, 1994-2021, mostly white-tailed and mule deer.
   - Collisions 14x more frequent two hours after sunset than two hours before sunset. Deer crepuscular (most active dawn/dusk); most collisions between sunset and sunrise.
   - Permanent DST would reduce collisions and "likely prevent an estimated 36,550 deer deaths, 33 human deaths, 2,054 human injuries and $1.19 billion in costs each year," because skies stay brighter later into the evening.
   - URLs: https://phys.org/news/2022-11-permanent-daylight-deer-vehicle-collisions.html ; https://www.newswise.com/articles/permanent-daylight-saving-time-would-reduce-deer-vehicle-collisions-study-shows
2. State Farm annual deer-claims study, via moneygeek.com (page updated ~Sept 3, 2026).
   - Top risk states: West Virginia 1 in 40, Montana 1 in 53, Wisconsin 1 in 58, Michigan 1 in 59, Pennsylvania 1 in 61. PA has the most claims nationally: 148,000/yr.
   - Lowest: Hawaii 1 in 775, Nevada 1 in 834.
   - November peak: 12-14 claims per 1,000 insured vehicle years, roughly triple the lowest-risk months (April, August at 4). October-December = 650,000 incidents, 38% of all animal collisions in the year. Collision likelihood "more than doubles" Oct-Dec.
   - URL: https://www.moneygeek.com/living/driving/deer-car-accidents/
3. USDA / US Forest Service, "Think Like a Deer" (Sandra Jacobson, wildlife biologist).
   - 1-2M collisions with large animals/yr; ~200 fatalities; 26,000 injuries; $1B+ costs. About a third of rural-road collisions are wildlife-related; two-lane highways with limits over 55 mph worst.
   - Deer vision: eyes stationary (unlike humans), detect motion poorly, see less detail; keen night vision makes headlights blinding. "Knowing that animals won't perceive what is happening - and indeed can't understand what is happening - will help us drive more safely."
   - URL: https://www.usda.gov/about-usda/news/blog/think-deer-award-winning-video-aims-reduce-wildlife-vehicle-collisions
4. AAA East Central (fall deer warning; NHTSA figures).
   - NHTSA: ~1M car accidents with deer/yr kill 200 Americans, cause 10,000+ injuries, $1B in vehicle damage. Most dangerous: dusk and dawn.
   - AAA Insurance avg deer claim ~$5,600, up $600+ year over year. Recommends comprehensive coverage (collision coverage does NOT cover animal strikes).
   - URL: https://news.eastcentral.aaa.com/news/aaa-its-the-peak-time-of-year-for-deer-collisions
5. State Farm safety guidance (via Automotive Fleet / Work Truck Online, longstanding).
   - Deer most active 6-9 p.m. If a collision seems inevitable: brake, do NOT swerve (swerving risks loss of control or oncoming traffic). Deer travel in herds: if you see one, expect more. Deer whistles not proven effective. Use high beams at night.
   - URL: https://www.automotive-fleet.com/136947/safety-tip-avoiding-deer-vehicle-collisions

## Original contributions (novel analysis)
1. **The death-toll discrepancy, quantified.** Federal sources say ~150-200 deaths/yr (IIHS "more than 150"; NHTSA/USDA "~200"). The UW study's claims+crash-data method says ~440. That is a 2x+ undercount in the official number, and the mechanism is visible: FARS codes crashes by first harmful event and manner of collision, so a driver who swerves to miss a deer and rolls into a ditch is not necessarily recorded as an animal-strike fatality. The insurance-claims data sees the deer; the fatality database often sees only the ditch. (Caveat: methodologies differ in scope and period; this is an inference, stated as such.)
2. **The clock-change framing.** Daylight saving ends 2 a.m. Sunday, Nov 1, 2026 (verified: Nov 1, 2026 is a Sunday). Sunset shifts roughly an hour earlier, from ~6:45 p.m. into ~5:45 p.m. territory, dropping the entire evening commute into peak deer-activity hours (6-9 p.m. most active) at the exact peak of the rut (Nov = 12-14 claims per 1k vehicle-years, triple the summer rate). The 33 preventable deaths/yr from the UW study is the quantified cost of the time regime we are about to re-enter.
3. **The counterintuitive safety advice, sourced.** The instinct that kills is the swerve, not the deer: both State Farm and AAA say brake, don't swerve. Combined with Jacobson's vision research (the deer literally cannot see your car coming the way you think it can), the article's actionable core is: the animal is not the variable you control; your hands on the wheel are.

## Strongest counterargument
Permanent DST darkens mornings, which could shift some collisions to dawn commutes; the study's net effect is still a reduction, but the 33-death figure is a modeled estimate, not an observed experiment. Bigger drivers than the clock: deer populations are at or above pre-settlement highs (~30M white-tails) and sprawl keeps pushing subdivisions into habitat; no clock policy fixes that. And the 440 figure includes crashes where the deer was the trigger but not the impact, which some would argue over-attributes.

## Limitations
- State Farm data reflects insurance claims from one insurer's book, methodology changed (licensed drivers vs registered vehicles); uninsured and unreported strikes are invisible.
- UW study period 1994-2021; deer populations and traffic patterns have shifted since.
- FARS window on this site is 2014-2023; animal-strike coding detail not broken out in fars_output.js, so no original FARS computation is claimed here.
- "Sunset ~6:45 to ~5:45" is approximate for mid-latitude US; varies by location.

## Actionable insights (required)
- Brake, don't swerve. High beams at night on rural roads. Dusk/dawn vigilance, especially 6-9 p.m.
- If you see one deer, expect more (herds).
- Check your policy: animal strikes are covered by comprehensive, not collision. AAA's avg claim is $5,600.
- Highest-risk states: WV, MT, WI, MI, PA. If you drive there Oct-Dec, this is your season.
