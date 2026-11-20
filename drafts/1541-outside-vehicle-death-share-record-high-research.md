# Research — #1541: The Car Got Safe. The Street Didn't.

**Slug:** `1541-outside-vehicle-death-share-record-high`
**Journalist:** Rex Driverton (Senior Crash Correspondent — deadpan dark humor, paradoxes)
**Kicker:** Trend Watch
**Date researched:** November 20, 2026

## Angle
In 1996, 80 percent of American road deaths happened inside a vehicle. In 2024, only 62 percent did. The other 38 percent, the highest share ever recorded, died outside one: on foot, on a bike, on a motorcycle. The car has never been safer for the person sitting in it. The street has never been a bigger share of the killing. The safety story of the last thirty years is not that roads got safer. It is that the car got safer and the street got left behind.

## Kill test
- **Newsworthy?** Yes. NHTSA's Overview of Motor Vehicle Traffic Crashes in 2024 (DOT HS 813 791, April 2026) publishes the 50-year inside/outside split as Figure 3, and the November 2026 early estimate (DOT HS 813 875) shows the overall decline continuing into H1 2026 (16,750 deaths, rate 1.02) without changing the composition problem.
- **Novel angle?** Yes. Duplicate screen run November 20, 2026: no research file or story frames the 1975-2024 inside/outside share time series. #1053 covers vulnerable-user divergence in 2025-2026 (bicyclist deaths near a 40-year high) but never runs the 1996-vs-2024 inversion. #1413 covers SUV occupant deaths rising in 2024. The injury-plateau piece covers deaths-vs-injuries. The zero-sum piece (`occupant-pedestrian-zero-sum`) is a design-tradeoff argument from FARS class data plus the NYT/IIHS hood-height study, not the NHTSA time series. Nothing on the site computes the absolute inside/outside counts across the 1996 peak.
- **Original contribution:** The absolute-count inversion arithmetic (1996 vs 2024 inside/outside deaths), the 2024 decomposition from Table 3, and the "safety budget" framing: occupant-protection engineering has nearly exhausted its gains, so the next decade of lives saved has to come from outside-vehicle protection.

## Primary sources
1. **NHTSA, "Overview of Motor Vehicle Traffic Crashes in 2024," DOT HS 813 791, April 2026** — https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813791 — Figure 3: inside-vehicle share of fatalities fell from a high of 80% in 1996 to a low of 62% in 2024; outside-vehicle share rose from a low of 20% in 1996 to a high of 38% in 2024. Table 3: 2024 totals by person type. Total deaths 39,254 (-4.3% vs 41,025 in 2023); rate 1.19 per 100M VMT (-5.6%).
2. **NHTSA, "Early Estimates of Motor Vehicle Traffic Fatalities and Fatality Rate for the First Half (January-June) of 2026," DOT HS 813 875, November 2026** — https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813875 — H1 2026: an estimated 16,750 deaths, -2.5% vs 17,175 projected for H1 2025; rate 1.02 per 100M VMT, down from 1.05. Q1 2026 -5.0%, Q2 2026 -0.2%.
3. **NHTSA FARS Encyclopedia, Trends - General** — https://www-fars.nhtsa.dot.gov/Trends/TrendsGeneral.aspx — annual fatalities 1994-2024: 1996 total 42,065; 2024 total 39,254. Fatal crashes 1996: 37,494; 2024: 36,297.
4. **IIHS, Fatality statistics** — https://www.iihs.org/topics/fatality-statistics — long-run person-type trends corroborating the outside-vehicle rise (pedestrian and motorcyclist shares).
5. **TRIP, "Addressing America's Traffic Safety Crisis," September 2026** (via #1053 research) — pedestrian deaths +5% from 2020 to 2025 (6,236 to 6,529); bicyclist deaths +29% (891 to 1,148); pedestrians plus bicyclists = 21% of all 2025 US traffic deaths.

## Key facts (verified)
- **2024 decomposition (DOT HS 813 791, Table 3):** Total deaths 39,254. Occupants (inside): 24,473 (62.3%). Outside: motorcyclists 6,228 + nonoccupants 8,553 (pedestrians 7,080 + pedalcyclists 1,103 + other 370) = 14,781 (37.7%, rounds to the report's 38%).
- **1996 baseline:** 42,065 total deaths; report's Figure 3 puts the inside share at 80% that year, so about 33,650 inside and about 8,410 outside.
- **The inversion, in absolute terms:** Outside-vehicle deaths rose from ~8,410 (1996) to 14,781 (2024), about +76%. Inside-vehicle deaths fell from ~33,650 to 24,473, about -27%. Total deaths fell 6.7% over the same span. The street absorbed the entire improvement and then some.
- **2024 category moves (all vs 2023):** Passenger-car occupant deaths -1,153 (-9.7%). SUV occupant deaths +112 (+1.6%), the only occupant class that rose. Pedestrian deaths -287 (-3.9%) but pedestrian injuries +3,394 (+5.0%, statistically significant). Motorcyclist deaths -138 (-2.2%) but motorcyclist injuries +4,320 (+5.2%, significant). Pedalcyclist deaths -70 (-6.0%) but injuries +2,898 (+5.8%).
- **The injury tell:** total injuries fell only 0.8% (2,442,694 to 2,422,195, not statistically significant) while deaths fell 4.3%. People are surviving crashes more often and getting hurt in them more often, and the hurt is concentrated outside the car.
- **2025-2026 context:** 2025 full-year early estimate 36,640 deaths (-6.7%), rate 1.10 (DOT HS 813 800). H1 2026: 16,750 deaths, rate 1.02. The decline is real and it is slowing: Q2 2026 was nearly flat (-0.2%) after Q1's -5.0%.

## What this does NOT prove (limitations)
- The share shift is partly compositional: the outside share rises whenever occupant deaths fall faster than outside deaths, even if outside deaths are flat. It is not, by itself, proof that streets got more dangerous in absolute terms. They did in absolute terms too (8,410 to 14,781), but the two effects must not be conflated.
- "Outside the vehicle" includes motorcyclists, who are vehicle operators, not bystanders. Pedestrians plus pedalcyclists alone are 8,183 deaths (20.8% of the total), not 38%.
- 2024 figures are from the FARS Annual Report File, subject to revision in the final file. Percentages in Figure 3 are rounded; the 1996 absolute counts are computed from the report's rounded 80/20 split, not from a published 1996 person-type table.
- FARS counts deaths, not exposure-adjusted risk: it cannot say whether walking got riskier per mile walked, only that more pedestrians died and they are a bigger share of the total.

## Strongest counterargument
The shift is good news wearing a scary costume. It means occupant protection worked: airbags, ESC, better structures, and AEB cut inside deaths by more than a quarter while the population grew and VMT hit records. The outside share rising is the arithmetic consequence of success, not a new failure. Pedestrian deaths even fell in 2024 (-3.9%), and the 2025 estimate has total deaths at a record-low rate. A reasonable reader could conclude the system is working and the 38% figure is a denominator trick. The counter to the counter: the absolute outside count rose 76% since 1996 while total deaths fell, and pedestrian and motorcyclist injuries rose significantly in 2024 even as their deaths fell. The car learned to keep its occupants alive. It has not learned to stop hitting everyone else, and the injuries say the collisions are still happening at the same rate or worse.

## Actionable insights
- Shopping for a car: check the IIHS pedestrian front crash prevention rating, not just the occupant crash scores. The window sticker's five stars measure the person inside; the pedestrian rating measures everyone else.
- Speed is the lever for the outside: most pedestrian deaths happen on roads posted 40 mph or higher (League of American Bicyclists data via #1053). Slowing down on arterials is the highest-yield thing a driver can do for people outside the car.
- For pedestrians and cyclists: the injury numbers say the crash is increasingly survivable for the driver and still catastrophic for you. Assume the car does not see you.
