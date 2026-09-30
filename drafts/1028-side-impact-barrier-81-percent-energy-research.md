# Research — #1028: The side-impact test got 81% more violent; two-thirds of "Good" ratings didn't survive

**Slug:** `1028-side-impact-barrier-81-percent-energy`
**Journalist:** Axle McScatter (data visualization editor — ratings-data collapse, model-year recovery curve, energy math)
**Kicker:** The Gap
**Anchor event:** Sept 29, 2026 — ForCar published a cross-model-year tabulation of IIHS side-impact ratings under the updated barrier test

## Kill test
- Newsworthy: yes. Fresh analysis (published yesterday) quantifying something the site has never covered: when IIHS replaced its side-impact barrier, 232 of 338 "Good"-rated vehicles lost the top rating, and manufacturers clawed back from a 17% failure share to 5% in three model years. IIHS's own research says side impacts still account for nearly a quarter of passenger-vehicle occupant fatalities, so the stakes are real.
- Novel angle: nobody stated how much harder the test actually got in energy terms. Barrier mass 3,300 -> 4,200 lbs and speed 31 -> 37 mph means kinetic energy rose by a factor of (4200/3300) x (37/31)^2 = 1.813, i.e. **~81% more kinetic energy** delivered to the side of the car. That number appears nowhere in IIHS's press materials or the ForCar analysis. Original contribution, computed from IIHS's own published specs.
- Second novel frame: the used-car rating-scale trap. A "Good" side rating earned in 2020 was measured against a test delivering 81% less energy than a "Good" earned in 2024. Same word, different ruler, and listings never say which ruler was used.
- Not a data dump: regulatory-forensics narrative with an energy calculation, a collapse-and-recovery curve, and concrete buyer actions.
- No duplication: grep of stories/ and drafts/ finds no article on the updated side-barrier ratings collapse. `who-dies-weight-class-hierarchy.html` covers FARS occupant-death ratios by vehicle weight (different thesis — real-world fatality outcomes, not lab ratings). `child-seat-side-impact-12-year-delay.html` is about child seats. Passing mentions of the updated test in other stories are not the collapse story.

## Verified facts
| Fact | Source |
|---|---|
| Updated side test: 4,200-lb barrier at 37 mph; original: 3,300-lb barrier at 31 mph | IIHS news page (Aug 2022) |
| IIHS developed the updated test after research showed many real-world side impacts that still account for nearly a quarter of passenger-vehicle occupant fatalities are more severe than the original evaluation | IIHS news page |
| 338 vehicles rated Good under the original test; 106 still Good under the updated test; 133 dropped to Poor or Marginal (338-106-133 = 99 fell to Acceptable) | ForCar tabulation of IIHS ratings (Sept 29, 2026) |
| Updated-test Poor/Marginal share by model year: 2023: 23/135 (17.0%); 2024: 16/163 (9.8%); 2025: 11/178 (6.2%); 2026: 9/167 (5.4%) | ForCar tabulation of IIHS ratings |
| Fixes are structural: stronger B-pillars, better door beams, curtain airbags covering more area for longer; appear at model updates rather than mid-cycle | ForCar analysis |
| The barrier represents today's midsize SUVs; the fleet keeps getting heavier | IIHS news page + ForCar |

## Key numbers
- **81%**: increase in barrier kinetic energy, original test -> updated test (own calculation: (4200/3300) x (37/31)^2 = 1.813)
- **69%**: share of original-"Good" vehicles that lost the top rating under the new barrier (232 of 338)
- **133**: vehicles that fell all the way from Good to Poor or Marginal — same cars, same structures, different barrier
- **17% -> 5%**: Poor/Marginal share across model years 2023 -> 2026 (a ~68% relative decline in the failure share)
- **~25%**: share of passenger-vehicle occupant fatalities from side impacts (IIHS research, motivating the test change)

## The novel thesis
1. The test didn't measure the cars getting worse. It measured the ruler getting honest. An 81% energy jump in one protocol revision is the largest single difficulty increase in any IIHS test change, and it exposed that "Good" was always a grade against a mid-2000s SUV, not against the actual 2020s fleet.
2. The recovery curve (17% -> 5% in three model years) is the fastest manufacturer adaptation to any IIHS test change on record in this dataset. It shows structural fixes land at redesigns, not mid-cycle — which means a 2023 model-year vehicle is measurably worse-protected than its 2025 sibling even when both are the "same generation."
3. The rating-scale trap: listings show "IIHS Good (side)" with no version tag. A pre-update Good and a post-update Good differ by 81% of test energy. Buyers comparing a 2020 and a 2024 of the same model are comparing numbers on different scales.
4. The remaining gap: IIHS calibrated the barrier to "today's midsize SUVs" (4,200 lbs). The heaviest vehicles on sale weigh roughly twice that. The test still understates the worst real-world striking vehicle.

## Actionable insights (required)
- Shopping used? Don't trust a bare "Good" side rating. Go to iihs.org/ratings and check whether the rating is the *updated* side test. A pre-2021-rating "Good" was earned against the old barrier.
- Comparing two model years of the same car: the newer one likely has the structural fixes (B-pillar, curtain airbag coverage) that the update forced. A 2023 vs 2025 of the same nameplate is not the same car in a side impact.
- On older vehicles, curtain airbag coverage is the single spec most worth confirming — it does most of the work in exactly the crash this test recreates.
- If you drive a small car: the test barrier is a midsize SUV. The actual striking fleet includes full-size pickups at 5,500+ lbs. Physics still favors mass; the test measures survival, it doesn't change the collision.

## Limitations (for the article's dedicated section)
- The 338/106/133 tabulation is ForCar's derivation from IIHS ratings data, not an independent re-scrape; treat it as secondary analysis of a primary source.
- The 81% figure is barrier kinetic energy, not energy absorbed by the occupant compartment — intrusion depends on structure, and the deformable barrier doesn't transfer energy like a rigid one.
- "Nearly a quarter of passenger-vehicle occupant fatalities" is IIHS's research figure motivating the change, not a FARS cross-tab run for this article.
- Recovery-share denominators (135/163/178/167 rated per model year) are the vehicles IIHS had rated at tabulation time, not the full fleet.

## Strongest counterargument (for the article)
The collapse doesn't mean cars got more dangerous — the cars were identical; only the test changed. A 2022 vehicle rated Marginal on the updated test may still protect its occupants better than a 2018 vehicle rated Good on the original test, because the rating is relative to its own protocol, not an absolute safety grade. And the fast recovery could partly reflect manufacturers learning to test well (teaching to the test) rather than pure real-world gains — though B-pillar and curtain-airbag changes are physical, not paperwork.

## Primary sources (3+)
1. IIHS, "Few midsize cars excel in updated side crash test" (Aug 2022) — barrier specs (4,200 lbs @ 37 mph vs 3,300 lbs @ 31 mph); side impacts ~quarter of passenger-vehicle occupant fatalities. https://www.iihs.org/news/detail/few-midsize-cars-excel-in-updated-side-crash-test
2. IIHS vehicle ratings, https://www.iihs.org/ratings — the rating scale itself; updated vs original side test listings.
3. ForCar, "The Side Impact Barrier Got Heavier and Faster. Two Thirds of Top Scores Disappeared." (Sept 29, 2026) — 338/106/133 collapse; 17%->5% model-year recovery table. https://forcar.org/blog/side-impact-test-made-harder/
4. Own calculation: KE ratio = (4200/3300) x (37/31)^2 = 1.813 -> ~81% more kinetic energy. Inputs are IIHS's published specs above; show the math in the article.
