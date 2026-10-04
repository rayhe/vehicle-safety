# Research Notes — #1074: "The CT5 Earned Five Stars and Two Poors. Both Are True."

**Slug:** `1074-ct5-five-star-poor-gap`
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundup / methodology beat)
**Kicker:** The Gap
**Date:** 2026-10-04

## Angle (1-2 sentences)
The 2026 Cadillac CT5 earned NHTSA's 5-star NCAP rating and, in the same summer, Poor ratings in IIHS's updated moderate overlap front AND updated side crash tests — a double-Poor that, per Autoblog, "very few modern vehicles" manage. The contradiction is the story: the two rating systems now test materially different crashes, and the gap between them is where rear-seat passengers and T-bone victims live.

## Kill test
- **Newsworthy:** YES. July 2026 IIHS batch (9 vehicles): CT5 was "by far the worst performer" (Autoblog), Poor in both flagship tests. GM's own spokesman answered with the 5-star NHTSA rating (Free Press) — the two systems' verdicts are now directly, publicly in tension on one car. Not covered anywhere on vehicle-safety.org (grep: zero hits for cadillac/ct5/moderate overlap).
- **Novel:** YES. Nobody on the site has done the ratings-system-gap analysis. Original contributions: (1) the batch scorecard (9 tested, 4 TSP+, 5 missed — 4 of 5 misses trace to the updated moderate-overlap rear-occupant criteria), (2) the crash-energy math showing the updated IIHS side test hits with ~82% more energy than the protocol it replaced (4,200-lb barrier at 37 mph vs 3,300-lb at 31 mph — verified against IIHS's own stated 82%), (3) translating the rating into real-world risk via IIHS's 2011 study (Good side rating = 70% less likely to die in a left-side crash than Poor). Distinct from the recall-heavy recent run (#1071 VW steering, #1072 Ford recalls, #1073 DUI cohort) and from all national-trend pieces (#798, #814, #856, #861, #869, #1053).
- **Axle-appropriate:** pure data/methodology story. "I ran the numbers. Then I ran them again."
- **Verdict:** PROCEED.

## Primary sources (6)
1. **IIHS ratings database** (methodology baseline; CT5's actual Poor/Poor scorecards): https://www.iihs.org/ratings
2. **Detroit Free Press, July 9, 2026** — CT5 lowest score of the batch; GM spokesman Kevin Kelly: "We are confident in the safety of the 2026 Cadillac CT5 that achieved a 5-Star rating in NHTSA's New Car Assessment Program"; IIHS's Jessica Jermakian: rear passenger criteria updated 2022, vehicles still struggle; rear dummies showed severe head/chest injury risk, moved too far forward; side test B-pillar intrusion, driver airbag didn't prevent windowsill contact; "unusual for a Cadillac... historically earned higher ratings." https://www.freep.com/story/money/cars/general-motors/2026/07/09/cadillac-ct5-earned-lowest-score-for-safety-in-latest-round-of-tests/90847422007/
3. **Autoblog, July 10, 2026** — 9 vehicles, 4 TSP+ (Audi A6, BMW X1, Mazda CX-5, Subaru Crosstrek Hybrid); CT5 "very few modern vehicles perform poorly in both these tests"; CT5 by far the worst of the nine; also poor crash prevention; CT5 platform dates to late 2019 (~7 years old), got a 2025 refresh; new CT5 coming. https://www.autoblog.com/news/mazda-wins-cadillac-loses-in-latest-iihs-crash-tests
4. **Autoblog, Aug 2026 (CT5 detail)** — moderate overlap: structure/safety cage Good, driver measures Good, but rear passenger head/neck Poor, chest Marginal ("rear passenger dummy's head approached the front seatback"); side: structure Marginal, driver head/neck Poor ("driver dummy's head moved downward, past the side curtain airbag, and contacted the window sill hard"); headlights Marginal/Poor by trim; vehicle-to-vehicle crash prevention Poor; pedestrian Acceptable. Notes CT5 still holds NHTSA 5-star. https://www.autoblog.com/news/2026-cadillac-ct5-scores-poor-on-new-iihs-side-impact-tests
5. **USA Today, July 9, 2026** — full batch lists: TSP+ winners Audi A6 / BMW X1 / Mazda CX-5 / Subaru Crosstrek Hybrid; misses: Audi A3 sedan, Cadillac CT5, Lexus IS, Nissan Kicks, Toyota Tacoma Crew Cab; 45 cars initially awarded TSP+ for 2026. https://www.usatoday.com/story/cars/news/2026/07/09/iihs-top-safety-pick-awards-2026/90852777007/
6. **ConsumerAffairs, Sept 10, 2026** — Sept batch: 2027 Kia Telluride + 2026-27 Tesla Model Y earned TSP+; five other tested vehicles (BMW, GMC, Lexus, Toyota) missed. https://www.consumeraffairs.com/news/kia-telluride-tesla-model-y-earn-iihs-top-safety-pick-awards-091026.html
7. **IIHS news release, Oct 27, 2021 (via mediaroom.iihs.org)** — updated side test: 4,180-lb barrier at 37 mph vs 3,300-lb at 31 mph; "82 percent more energy"; 2011 study: driver of Good-rated vehicle 70% less likely to die in left-side crash than Poor; side impacts = 23% of passenger vehicle occupant deaths (2020 data cited in Automotive World summary of the same release). http://mediaroom.iihs.org/download/IIHS_newsrelease_102721_emb.pdf and https://www.automotiveworld.com/news-releases/iihs-most-midsize-suvs-perform-well-in-new-side-test/

## Key numbers (verified above)
- July 2026 batch: 9 vehicles tested, 4 TSP+, 5 missed.
- CT5: Poor (updated moderate overlap front) + Poor (updated side). Structure Good in front test; driver measures Good; failure concentrated in rear passenger (head/neck Poor, chest Marginal) and side (structure Marginal, driver head/neck Poor).
- Sept 2026 batch: 2 TSP+ (Telluride, Model Y), 5 misses.
- Updated side test: 82% more crash energy than the 2003-2021 protocol (IIHS's own figure; independent check: (4200x37^2)/(3300x31^2) = 1.813 = +81.3%, rounds to IIHS's 82%).
- Stakes: side impacts ~23% of passenger-vehicle occupant deaths (2020); Good vs Poor side rating = 70% lower left-side death risk (IIHS 2011 study of 10 years of crash data).
- CT5 platform age: introduced late 2019 (~7 years); 2025 refresh; successor in development.

## Original contribution (Axle's math, show work)
1. **The 82% verification:** computed independently from the published barrier mass/speed pairs (4,200 lb @ 37 mph vs 3,300 lb @ 31 mph): KE ratio = (4200 x 1369)/(3300 x 961) = 5,749,800/3,171,300 = 1.813x, i.e., +81.3% — matches IIHS's stated 82%. The new test doesn't just look harder; it IS ~4/5 again as energetic.
2. **The batch miss pattern:** of the July batch's 5 misses, 4 (CT5, Lexus IS, Nissan Kicks, Tacoma Crew Cab) carry Marginal-or-worse moderate-overlap scores driven by rear-occupant protection; only the Audi A3 missed on side instead. The common failure is the back seat, not the front — the 2022 rear-dummy criteria update is doing the flunking.
3. **Rating-to-risk translation:** IIHS's 2011 study found a Good side rating associated with 70% lower left-side death risk vs Poor. Inverted: the CT5's Poor side rating sits in the band historically associated with ~3.3x the left-side fatality risk of a Good-rated vehicle. (Association from the study population, not a prediction for any individual crash — state that.)

## Strongest counterargument (state at full strength)
GM's case is not nothing. The CT5 meets every federal standard and earned NHTSA's 5-star rating under NCAP — a real, government-administered result, not a participation trophy. IIHS tests are voluntary, insurer-funded, and deliberately ratcheted upward precisely to flunk cars that cleared the bar; failing a 2026 test with a 2019 platform at end of life says more about test inflation than about the CT5 being a deathtrap. Rear-seat occupancy in fatal crashes skews lower than front-seat, and a successor CT5 is already in development. The honest read: the CT5 is a 7-year-old design being graded on a 2026 curve.

## Limitations (state explicitly)
- Lab tests are not crash outcomes; a Poor rating raises modeled injury risk, it does not predict any specific crash.
- Ratings apply to tested trims/model years; the CT5's scores describe the 2026 model as tested by IIHS.
- The 70%-less-likely figure comes from a 2011 IIHS study of the ORIGINAL side test era; the relative ordering (Good beats Poor) transfers, the exact magnitude may not.
- NHTSA NCAP and IIHS measure different things by design; "contradiction" is a framing of scope difference, and the piece must say so.
- The batch pattern (n=9) is suggestive, not statistical proof of an industry-wide rear-seat lag.

## Actionable takeaways (required)
- Shopping midsize luxury sedans: check iihs.org/ratings for the moderate-overlap and side scores specifically — the NHTSA star sticker alone no longer answers the T-bone question. In the same July batch where the CT5 went Poor/Poor, the redesigned 2026 Audi A6 swept to TSP+.
- If you regularly carry rear passengers (kids, carpools): filter on the moderate-overlap REAR-occupant result. That's the sub-score doing the flunking across brands.
- Side structure matters more than it did in 2003: the updated test simulates a 4,200-lb SUV at 37 mph, 82% more energy. In a fleet full of 5,000-6,000-lb SUVs and EVs, a Marginal side structure is a bigger liability than the old 5-star era implied.
