# Research Notes — Article #1273: Traffic Deaths Fell for Three Straight Years. Nobody Drove Better.

**Working title:** "Traffic Deaths Fell for Three Straight Years. Nobody Drove Better."
**Journalist:** Rex Driverton (Senior Crash Correspondent — fatality rate investigations, vehicle-specific deep dives)
**Kicker:** Investigation
**Slug:** 1273-deaths-fell-nobody-drove-better
**Started:** 2026-10-25 (PDT)

## Kill test

**Proposed angle (1-2 sentences):** A Stanford-led JAMA Network Open study of all 166,230 US motor vehicle deaths from 2021 to 2024 decomposed the post-pandemic mortality decline and found it was NOT driven by better behavior: seat belt use stayed flat near 91%, self-reported speeding stayed flat, yet unrestrained-involved deaths accounted for 51% of the per-mile risk decline, while bicyclist deaths did not decline at all.

**Challenge:** After 1,272 articles, is this just another "deaths fell" story? No. Three reasons: (1) queue/stories grep 2026-10-25: no JAMA/Kiang/Kitagawa coverage, no postpandemic-decomposition coverage; #950 covered the GHSA pedestrian decline, not this mechanism paper; (2) the finding inverts the usual moral: the decline happened while every measured behavior stayed the same or got no better, which means the standard "drive safer" story cannot explain it, and the honest answer is that researchers do not fully know why unrestrained deaths fell while belt use did not rise; (3) the bicyclist flatline plus the state map (Louisiana, Georgia, South Carolina with the largest drops; VMT up in 44 of 51 jurisdictions, no state with a significant mortality increase) give concrete, checkable texture no prior article has.

**Verdict:** PROCEED.

## Verified facts (all sourced, no fabrication)

1. **The study.** Kiang MV et al., "Factors Associated With Postpandemic Decline in US Motor Vehicle Mortality," JAMA Network Open, published October 8, 2026 (accepted August 13, 2026), doi:10.1001/jamanetworkopen.2026.38041. Open access. Corresponding author Mathew V. Kiang, ScD, Stanford School of Medicine, Department of Epidemiology and Population Health.
2. **The decline.** National motor vehicle mortality rate peaked in 2021 at 13.0 deaths per 100,000, then declined 3 consecutive years to 11.5 per 100,000 in 2024. Total decline 1.48 deaths per 100,000 (95% UI, -1.69 to -1.26). Study population: 166,230 deaths, 2021-2024; median age 42; 72.1% male.
3. **More driving, less risk.** VMT rose from 3.13 trillion miles (2021) to 3.29 trillion (2024). The VMT component alone would have ADDED 0.33 deaths per 100,000; per-mile risk fell 1.81 per 100,000, more than offsetting it. The decline is a risk story, not a less-driving story.
4. **Unrestrained deaths drove half the decline.** Fatalities involving an unrestrained occupant, alone or combined with speeding or alcohol, accounted for 51% of the per-mile risk decline. Unrestrained-only: -0.42 per 100,000, the single largest contribution, 23% of the per-mile risk decline. Speed-only -0.10; alcohol-only -0.11; speed+unrestrained -0.21; alcohol+unrestrained -0.19. Fatalities not flagged by any behavioral factor: -0.33 (18%).
5. **Behavior did NOT improve.** Seat belt use remained stable near 91%, so the decline was not driven by increased belt use (study's own words). Self-reported speeding remained stable across 2019-2024, so the speeding-fatality decline is not explained by reduced speeding.
6. **Pedestrians down, cyclists flat.** Pedestrian deaths declined 0.23 per 100,000. Bicyclist contribution: 0.02 (95% UI -0.01 to 0.05), flat. Other road users: -0.05, flat. Study: this perpetuates "a long-standing gap relative to peer countries."
7. **State variation.** VMT increased in 44 of 51 jurisdictions; NO state experienced a statistically significant increase in mortality. Largest decreases: Louisiana -4.62, Georgia -4.22, South Carolina -4.11 per 100,000. 13 states had at least one behavioral risk category with a statistically significant decline.
8. **Methods.** Kitagawa decomposition of the crude mortality rate change into a VMT component and a per-mile risk component, further split into 11 mutually exclusive categories. Death data: NHTSA FARS (census of fatal crashes on public roads, deaths within 30 days). Population: US Census Bureau. VMT: Federal Highway Administration. Uncertainty via Monte Carlo simulation.
9. **Context: NHTSA early estimates.** 2025 estimated 36,640 traffic deaths, down 6.7% from 39,254 in 2024, rate 1.10 per 100M VMT (Crash-Stats DOT HS 813 800, July 2026) — the decline continued past the study window.
10. **IIHS context.** IIHS fatality statistics: pedestrian deaths 7,080 in 2024, 18% of all crash fatalities, up 72% since the 2009 low (posted June 2026).

## Original calculations (verifiable, show work in article)

- **The paradox ratio:** unrestrained-involved share of per-mile risk decline = 51%, while belt use stayed at ~91% flat. If belt use did not rise, the unrestrained death count fell for some other reason: fewer unrestrained people per mile, fewer miles driven unrestrained, better crashworthiness for the unrestrained, or a composition shift. The study cannot distinguish these; the article must say so.
- **Share check:** unrestrained-only 0.42 / 1.81 per-mile risk decline = 23.2%, matching the study's stated 23%. Combinations: (0.42+0.21+0.19) = 0.82 / 1.81 = 45%; the study's 51% includes the unrestrained share of the total decline accounting (rounding and UI). Use the study's 51% figure, not a recomputed one.
- **Rate translation:** 13.0 to 11.5 per 100,000 = an 11.5% relative decline in the crude rate over three years, while VMT rose 5.1% (3.13 to 3.29 trillion). Per-mile risk fell faster than the crude rate because more miles were driven.
- **Cyclist gap:** bicyclist contribution 0.02 with UI crossing zero means statistically indistinguishable from no change, while pedestrian deaths fell 0.23. Cyclists captured none of the improvement pedestrians got.

## Story spine (Rex Driverton voice)

- Lede: the good news everyone reported (deaths down three straight years) with the number that breaks the story (nobody behaved better).
- The decomposition, plainly: more miles, fewer deaths per mile, and half the improvement came from the exact group that did not change its behavior.
- The mystery, stated honestly: belt use flat at 91%, speeding self-reports flat, yet unrestrained and speeding deaths fell. Possible explanations (newer fleet, better crash structures, enforcement mix, post-pandemic composition) labeled as hypotheses, not findings.
- The cyclists left behind: flat while pedestrians fell, and the peer-country gap the authors flag.
- The state map: Louisiana, Georgia, South Carolina led the drops; no state got significantly worse. Geography as a hint that something structural, not moral, moved.
- Closer: the deadpan Rex beat — the road got safer the way a casino gets safer, not because the gamblers reformed but because the table changed, and the one group still losing at the same rate rides a bicycle.

## Limitations (for the limitations section)

- FARS 2024 data are preliminary and subject to revision (study's own caveat).
- Decomposition is accounting, not causation: it partitions the change; it does not identify WHY unrestrained deaths fell while belt use stayed flat.
- VMT and FARS data quality vary by state; uncertainty intervals capture stochasticity and VMT sampling error, not systematic biases.
- No decomposition by age, race, or ethnicity possible because VMT is not stratified that way; the study could not assess whether pandemic-era disparities narrowed.
- Study window ends 2024; 2025 early estimates suggest the decline continued, but the mechanism split for 2025 is unknown.
- Self-reported speeding and observed belt use are different instruments with different biases; flat self-reports do not prove flat actual speeding.

## Strongest counterargument

The decline might be a regression artifact of the pandemic spike: 2021 was an abnormally lethal year (13.0 per 100,000), and part of any fall from a spike is just the spike unwinding, not a structural improvement. Grant it: the study decomposes a change from a peak, so some of the "improvement" is mean reversion. But that does not explain the composition: mean reversion should shrink all categories roughly proportionally, yet unrestrained-involved deaths drove half the per-mile decline while cyclist deaths did not move at all. The shape of the decline, not just its size, is the finding.

## Reference URLs (verified to exist — do not invent others)

- https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2854976
- https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
- https://cdan.dot.gov/query
- https://www.iihs.org/topics/fatality-statistics
- https://www.iihs.org/research-areas/fatality-statistics/detail/pedestrians
- https://www.nhtsa.gov/recalls
