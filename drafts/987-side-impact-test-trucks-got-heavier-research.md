# Research — #987: "The Crash Test Didn't Get Harder. The Trucks Did."
**Journalist:** Rex Driverton | **Kicker:** Investigation | **Date:** 2026-09-25

## Angle (1-2 sentences)
When IIHS launched its updated side crash test, the moving barrier got heavier (3,300 -> 4,200 lbs) and faster (31 -> 37 mph) because the vehicles striking people in real crashes had outgrown the old test. Ratings collapsed, then recovered from 17% failures to 5% in three model years — which reads like an engineering victory, but is really an admission that the American fleet became too heavy for its own safety ratings.

## Self-critique gate
- Genuinely surprising after 750+ articles? YES. The usual frame is "test got harder, cars got better." The inverted frame — "test got harder because the fleet became the thing the test was protecting against" — has not been covered (checked: queue has zero side-impact/barrier articles; #946 sedan-vs-SUV overlaps only on the rate stat, not the thesis).
- Real data with sources? YES: IIHS's own news release (82% more crash energy, ~1/4 of fatalities are side impacts), an IIHS ratings census (2023-2026 failure rates), my own FARS_BY_MODEL cross-tab (191,193 deaths, class medians, 46.6% sedan share).

## Primary sources (3+)
1. **IIHS (primary):** "IIHS prepares to launch new, more challenging side crash test" — old barrier 3,300 lbs at 31 mph; new 4,200 lbs at 37 mph; "the 6 mph speed increase alone produces 42 percent more crash energy... Together with the weight increase, the modified test configuration has 82 percent more energy." Research showed many real-world side impacts "account for nearly a quarter of passenger vehicle occupant fatalities." Test vehicles struck by a real popular pickup, SUV, and car as well as the barrier. https://www.iihs.org/news/detail/iihs-prepares-to-launch-new-more-challenging-side-crash-test
2. **ForCar IIHS ratings census (attributed secondary, links back to IIHS ratings):** Updated side-impact failures by model year — 2023: 135 rated, 23 poor/marginal (17%); 2024: 163, 16 (10%); 2025: 178, 11 (6%); 2026: 167, 9 (5%). "From 17% to 5% in three model years." https://forcar.org/blog/side-impact-test-made-harder/
3. **NHTSA FARS via local fars_output.js (2014-2023, 191,193 deaths):** my cross-tab — class median fatality rates per 100M VMT: SUV 0.35, Van 0.46, Sedan 0.68, Pickup 0.80, Sports Car 1.00. Sedans = 89,127 deaths, 46.6% of all model-attributed deaths. High-rate small sedans: Cobalt 5.10, Impala 5.00, Accord 3.07 (deaths >= 500). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
4. **IIHS vehicle ratings (primary, referenced):** https://www.iihs.org/ratings — where readers verify whether a rating is the updated-test version.

## Key figures to cite
- Old barrier: 3,300 lbs at 31 mph. New barrier: 4,200 lbs at 37 mph. Delta: +82% crash energy (IIHS).
- Side impacts: "nearly a quarter" of passenger vehicle occupant fatalities (IIHS).
- Failure census: 17% (2023) -> 10% -> 6% -> 5% (2026). (ForCar compilation of IIHS ratings)
- FARS class medians: sedans die at ~2x the rate of SUVs (0.68 vs 0.35 per 100M VMT).
- Sedans account for 46.6% of model-attributed deaths, 2014-2023.
- The research round struck a Camry, Accord, Atlas, and QX50 with a real pickup, SUV, car, and the barrier — the barrier was meant to mimic "a higher-riding pickup or SUV" hitting a sedan (IIHS President David Harkey).

## Original contribution
The FARS_BY_MODEL class cross-tab (nobody at the site has run struck-side vulnerability by class for this peg): the vehicles most likely to be struck from the side (sedans, 46.6% of deaths, 2x SUV rate) are exactly the class the heavier barrier was calibrated against, while the striking class (SUVs/pickups) dies at the lowest per-mile rate. The test didn't just get harder; it was re-aimed at the fleet's own weight distribution.

## Limitations (will state in article)
- FARS_BY_MODEL cannot isolate side impacts from frontal/rollover; the class-rate gradient is a vulnerability proxy, not a side-crash census.
- estimated_rate uses VMT estimates, not odometer readings; ±15% uncertainty for low-volume models (e.g., Tracker 7.83 on 856 deaths).
- ForCar census is a secondary compilation; numbers presented as their aggregation of IIHS ratings, not independently re-counted here.
- Driver behavior confounds class rates (pickups driven by riskier demographics).

## Strongest counterargument (will state at full strength)
The recovery (17% -> 5% in three model years) is a genuine engineering success: stronger B-pillars, wider curtain airbag coverage, better door beams. Automakers fixed the problem fast, and the rating exists precisely to force those fixes. The heavier barrier protects occupants of heavier vehicles too, not just sedans.

## Actionable insights
- Used-car shoppers: a 2020 side-impact rating and a 2024 rating are NOT on the same scale. Verify the rating is the updated-test version before comparing model years.
- On older vehicles, curtain airbag coverage is the single spec most worth confirming — it's the component doing most of the work in exactly this crash.
- If you drive a small sedan: the old test assumed a 3,300-lb striker. The real one averages 4,200.
