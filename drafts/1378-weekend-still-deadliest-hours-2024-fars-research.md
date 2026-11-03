# Research: The Weekend Got Safer Faster Than the Week (#1378)

## Angle
America's roads got safer in 2024, but the improvement was not spread evenly across the calendar. Weekend deaths fell 6.9% while weekday deaths fell only 2.4%, and nighttime deaths fell 5.6% versus 2.7% in daytime. The deadliest hours are still the weekend night hours, just slightly less deadly than they were.

## Self-critique gate
- Surprising after 1,377 articles? Yes: the headline "deaths fell 4.3%" hides a 3x gap in improvement rates between weekend and weekday, and the per-hour math shows weekends still run about 26% deadlier per hour than weekdays. Nobody on this site has framed FARS by the clock.
- Novel calculations (computed here, not quoted): (1) weekend deaths per hour vs weekday deaths per hour, 2024 and 2023; (2) weekend share of all deaths vs weekend share of all hours.
- Kill test: passes. Primary source is NHTSA's own final 2024 overview (DOT HS 813 791, April 2026), not a press release summary. Timely: the 2024 final file plus 2025 early estimates were released together, and the site's own 2024 coverage (#749-era "below 40,000" piece) used the preliminary estimate, not this final breakdown.

## Verified facts (primary source: NHTSA DOT HS 813 791, April 2026)
1. Total 2024 fatalities: 39,254, down 1,771 (4.3%) from 41,025 in 2023. Fatality rate 1.19 per 100M VMT, down from 1.26 (5.6% decrease). Third straight year-to-year decrease in both fatalities and rate since 2021. VMT rose 1.5% (3,247B to 3,294B miles). Police-reported crashes 6.18M (+0.7%, not statistically significant); injuries 2.42M (-0.8%, not statistically significant).
2. Nighttime (6 p.m. to 5:59 a.m.) fatalities: 22,219 in 2023 to 20,971 in 2024, down 5.6%. Daytime (6 a.m. to 5:59 p.m.): 18,525 to 18,017, down 2.7%.
3. Weekend (Friday 6 p.m. to Monday 5:59 a.m.) fatalities: 17,321 in 2023 to 16,128 in 2024, down 6.9%. Weekday (Monday 6 a.m. to Friday 5:59 p.m.): 23,630 to 23,059, down 2.4%.
4. Behavioral factors 2024: speeding-related 11,288 (29% of deaths, down 5.2% / 625 fewer); alcohol-impaired 11,904 (30%, down 3.9% / 478 fewer); unrestrained passenger-vehicle occupant deaths down 7.4% (775 fewer); distraction-affected 3,208 (8.2%, down 2.3%); hit-and-run 2,758 (down 5.3%).
5. Person types: passenger-car occupant deaths down 9.7% (1,153 fewer); SUV occupant deaths UP 1.6% (112 more), the only occupant category to rise; older-driver (65+) fatal crashes up 0.9%; young-driver (15-20) fatal crashes down 5.1%; motorcyclist deaths down 2.2% but motorcyclist injuries up 5.2% (statistically significant); pedestrian deaths down 3.9% (287 fewer) but pedestrian injuries up 5.0%.
6. Rural 16,006 (41%) vs urban 22,905, both down 4.7%. State extremes: California largest reduction (-293); Minnesota largest increase (+75).
7. Caveat from the publication itself: 2024 figures are the Annual Report File (ARF), subject to revision when finalized; the 2023 final file replaced the 2023 ARF (40,901 -> 41,025).

## Original calculations
- Weekend window = Friday 6 p.m. to Monday 5:59 a.m. = 60 hours/week = 3,120 hours/year. Weekday window = 108 hours/week = 5,616 hours/year. Total = 168 hours/week.
- 2024 deaths per hour: weekend 16,128 / 3,120 = 5.17; weekday 23,059 / 5,616 = 4.11. Weekend hours run 26% deadlier per hour (5.17 / 4.11 = 1.26).
- 2023 deaths per hour: weekend 17,321 / 3,120 = 5.55; weekday 23,630 / 5,616 = 4.21. Per-hour rates fall by the same percentages as counts (hours are constant), so the gap narrowed from 32% (5.55/4.21 = 1.32) in 2023 to 26% in 2024.
- Weekend share of deaths: 16,128 / 39,254 = 41.1% of deaths in 60/168 = 35.7% of hours.
- Nighttime share: 20,971 / 39,254 = 53.4% of deaths in half the hours.
- Absolute split of the 1,771-death improvement: weekend contributed 1,193 (67%) of the decline while covering 41% of 2023 deaths. Weekday contributed 571 (32%).

## Limitations
- 2024 data are ARF (preliminary-final), subject to revision; the 2023 revision moved the total by 124 deaths, so small category changes could shift slightly.
- FARS counts deaths, not exposure by hour: VMT by time of day is not published in this note, so per-hour rates use clock hours, not miles driven per hour. Weekend nights likely carry fewer miles per hour than weekday rush hours, which would make the per-hour gap understate the per-mile weekend risk, not overstate it. Say that explicitly.
- The note does not break weekend improvement down by alcohol/speed/restraint, so this article cannot attribute the weekend gain to any single behavior. The behavioral declines are national totals.
- Correlation is not cause: nothing in the note proves why weekends improved faster.

## Strongest counterargument
- The weekend improvement is mostly arithmetic, not a safety breakthrough. Weekend deaths started higher and more volatile, so a 6.9% fall still leaves weekends 26% deadlier per hour than weekdays, and 16,128 weekend deaths is not a victory lap. The weekday number barely moved (2.4%), which is where most driving happens, and SUV occupant deaths actually rose. If the goal is fewer total deaths, the weekday commute and the SUV fleet matter more than celebrating a weekend percentage.

## Actionable takeaways
- If you drive Friday night through Monday morning, that window still carries 41% of deaths in 36% of hours: treat it as the high-risk window it is, not as downtime.
- The three behaviors that still dominate: speed (29%), alcohol (30%), belts. The unrestrained decline (7.4%) is the largest behavioral improvement in the note; buckling up remains the cheapest intervention in the dataset.
- Do not read a 4.3% national decline as uniform: your state's direction may be opposite (Minnesota +75, California -293). Check your state table in the same publication.

## Sources (3+ primary)
1. NHTSA, Traffic Safety Facts Research Note: Overview of Motor Vehicle Traffic Crashes in 2024, DOT HS 813 791 (April 2026). https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813791
2. NHTSA, FARS database / query system. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and https://cdan.dot.gov/query
3. NHTSA press release, 2025 early estimates + 2024 annual data. https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual
4. IIHS fatality statistics (context for rate comparisons). https://www.iihs.org/topics/fatality-statistics

## Journalist
Axle McScatter (data visualization editor; statistical roundups beat). Kicker: By The Numbers.

## Duplicate check (2026-11-03, full filenames + queue slugs, no truncation)
- L87/EA26005: DUPLICATE (#1367, #1344, #1025, #864) — abandoned, research file deleted.
- RAV4 PHEV ECU, work-truck crash avoidance, F-150 tailgate cable, Lincoln neutral-shift, Sienna seatback, Thomas Built FMVSS 221, Durango tail lights, Wabash: all previously covered — abandoned.
- Weekend / day-of-week / time-of-day FARS 2024: zero queue-slug or filename matches. PROCEED.
