# Research — #972: The Back-Seat Census (IIHS updated moderate overlap, fleet-wide)

**Journalist:** Axle McScatter (data visualization editor; beat: statistical roundups, methodology pieces)
**Kicker:** By The Numbers
**Slug:** `iihs-back-seat-dummy-census`
**Ship slot:** 2027-01-07 (SHIP_BLOCKED; 1/day; queue now holds 178 entries incl. #971 fix)

## News peg
ForCar founder Denis Kataev (Sept 2026) compiled a fleet-wide census from IIHS ratings data: **227 vehicles held a Good rating under IIHS's original moderate overlap front test; after IIHS added a rear-seat dummy in 2022, only 58 kept Good and 147 dropped to Poor or Marginal.** Two-thirds of top-rated cars lost the top score without a single bolt changing. The car didn't get worse; the question got harder.

## What changed in the test
- IIHS's moderate overlap front test dates to 1995 (40% of vehicle width strikes a barrier at 40 mph). Original version: one Hybrid III dummy (average-size man) in the driver seat. By the 2010s essentially every vehicle rated Good — the test stopped discriminating.
- In 2022 IIHS updated the test: a second Hybrid III dummy, sized as a small woman or 12-year-old, placed in the second-row seat behind the driver, plus new metrics for rear-occupant injuries (chest force, head excursion, submarining — the dummy sliding under the lap belt). (The Autopian, Dec 2022; IIHS)
- Why: IIHS research found that in 2007-and-newer vehicles, the risk of fatal injury is now **higher for belted rear occupants than front occupants** — not because the rear got worse, but because the front got dramatically safer (load limiters, pretensioners, occupant-specific airbags) and the rear belt hardware never caught up. IIHS President David Harkey: the test is "a challenge to manufacturers to bring those same benefits to the back seat." (IIHS, small pickups release)
- Sept 3, 2026 round (Autoblog): IIHS tested 7 new models; only 2 (2027 Kia Telluride, 2026 Model Y) earned Top Safety Pick+. Moderate overlap failures: BMW 3 Series (Acceptable), GMC Canyon (Marginal), Lexus IS (Marginal), Toyota Crown Signia (Marginal).

## The census numbers (ForCar, compiled from IIHS ratings)
- 227 vehicles rated Good on the original test -> 58 still Good with rear dummy -> 147 dropped to Poor or Marginal.
- Arithmetic note: 58 + 147 = 205, leaving 22 unaccounted. ForCar's table has no "Acceptable" row; the 22 almost certainly rated Acceptable under the updated test. I state this as the likely reading, not a confirmed fact.
- Brand table (brands with 15+ vehicles rated on updated test): Jeep 26/32 Poor-or-Marginal, Lexus 12/15, Toyota 37/53, Chevrolet 22/30, Subaru 21/34, Ford 23/40. ForCar's gloss: Lexus/Toyota appearing here matters — not a cheap-vs-expensive problem, a front-vs-rear problem.
- Model-year trend of updated-test failure share: 2022: 30/39 (77%) -> 2023: 54/77 (70%) -> 2024: 55/112 (49%) -> 2025: 60/150 (40%) -> 2026: 46/147 (31%). Being fixed fast; the fix is mostly rear belt hardware (load limiters + pretensioners).

## The 46% stat (IIHS primary)
- IIHS: "a model from 2007 or newer [has] a 46 percent higher risk of fatal injury in the back than the front" — quoted in IIHS-adjacent reporting of the updated test rationale. Verify against iihs.org wording before publishing; the mediaroom small-pickups release phrases it as "the risk of a fatal injury is now higher for belted occupants in the rear than for those in front."

## Novel contribution (kill-test pass)
1. **The census itself.** Prior site coverage is model-specific: #960 (Canyon), #962 (Lexus IS), #906/#874 (Telluride build-date split). Nobody has run the fleet-wide 227/58/147 arithmetic — "two-thirds of Good-rated cars lost Good overnight, zero bolts changed."
2. **The missing-22 audit.** 58+147=205 != 227. The gap (presumably Acceptable) is a stated-uncertainty moment that models the site's verifiability standard.
3. **The used-car arbitrage.** Every vehicle built before 2022 was designed against the old test; its old Good rating says nothing about the seat your kid sits in. Choosing between a 2021 and a 2024 of the same model, this is a real invisible difference — check the UPDATED moderate overlap rating for the exact model year.
4. **The fix-is-fast trend.** 77% -> 31% failure share in four model years: a rare "the system worked" coda, with the specific hardware named.

## Limitations
- ForCar is a one-person blog (Denis Kataev); the census is compiled from IIHS ratings, not an IIHS publication. Numbers are directional until cross-checked against iihs.org/ratings.
- The 22-vehicle gap in the census table is my inference (likely Acceptable), not a published figure.
- "Back seat more dangerous than front" applies to belted adult-sized occupants in frontal crashes; the back seat remains the safest place for children (front airbag risk). Say this explicitly.
- IIHS ratings are per-model-year; a 2024 redesign can differ entirely from a 2023 of the same nameplate.

## Counterargument (full strength)
The census is a re-grading artifact, not a safety decline: no car got more dangerous, and a 2021 Camry that lost its Good is exactly as safe as the day it earned it. IIHS deliberately moves goalposts to force engineering progress; the 77%-to-31% trend proves the industry responds. One could argue the honest headline is "test got tougher," full stop — and that older cars shouldn't be stigmatized for failing a test that didn't exist when they were designed. The article's answer: that's precisely why the consumer advice is "check the updated rating for your model year," not "sell your 2021."

## Actionable insights
- Look up the UPDATED moderate overlap rating (not the original) for your exact model year at iihs.org/ratings. A pre-2022 Good does not cover the back seat.
- Shopping used: a 2024 of the same model can differ from a 2021 in rear belt hardware (load limiters, pretensioners) — invisible in price, listing, and star rating.
- Kids still ride in back, always. This is about belt hardware for adult-sized occupants, not a reason to move a child seat forward.
- 2026-model shoppers: 69% now pass; the fix is arriving — prioritize models with updated-test Good if rear passengers are usually adults.

## Primary sources (4)
1. ForCar / Denis Kataev, "IIHS Put a Dummy in the Back Seat. 147 Cars That Scored Good Now Don't." (Sept 2026) — 227/58/147 census, brand table, model-year trend. https://forcar.org/blog/rear-passenger-crash-test-failures/
2. IIHS, "Small pickups fall short when it comes to rear-seat safety" (iihs.org) — updated-test methodology: rear dummy sizing, submarining, new injury metrics; rear-vs-front fatal risk rationale. https://iihs.org/news/detail/small-pickups-fall-short-when-it-comes-to-rear-seat-safety/
3. Autoblog, "The IIHS Tested Seven New Cars, But Only Two Earned Safety Awards" (Sept 3, 2026) — Sept 2026 round; Telluride/Model Y TSP+; BMW 3/Canyon/IS/Crown Signia moderate-overlap misses. https://www.autoblog.com/news/the-iihs-tested-seven-new-cars-but-only-two-earned-safety-awards
4. The Autopian, "IIHS's Signature 'Moderate Overlap' Crash Now Includes A Rear Passenger" (Dec 2022) — original test since 1995; IIHS quote on the 2022 update and second dummy; "today, all vehicles earn good ratings in that original evaluation." https://www.theautopian.com/iihss-signature-moderate-overlap-crash-now-includes-a-rear-passenger-watch-as-lots-of-cars-fail/
Supporting: NHTSA FARS https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars; IIHS ratings https://www.iihs.org/ratings; IIHS fatality statistics https://www.iihs.org/topics/fatality-statistics.
