# Research: Five Stars Up Front, Poor in the Back Seat

**Slug:** 1392-tiguan-crv-five-star-poor-back-seat | **Journalist:** Mia Crumplezone (Safety Engineering Editor) | **Kicker:** The Gap | **Date researched:** 2026-11-04

## Kill test: PASS

- **Newsworthy:** Two of America's best-selling family SUVs, the redesigned Volkswagen Tiguan and the Honda CR-V, both carry five-star NHTSA overall ratings and both earn the lowest possible grade, Poor, on the one IIHS test that puts a dummy in the back seat.
- **Novel for this site:** Full-filename greps, no truncation. Zero queue entries, drafts, or stories cover the Tiguan's IIHS moderate-overlap Poor rating or the CR-V's IIHS moderate-overlap Poor rating as their subject. Nearest neighbors are different stories: #951 (Tiguan BCM-reset recall, all 49,958 have the bug), #1354 (CX-5 vs CR-V FARS death gap), #983 (CR-V sticky steering recall), #960 (Pilot vs Highlander rear-seat), #1244 (RAV4 misses TSP, Kicks wins lab), #1312 (Trailblazer rear-belt fix failed). None pairs Tiguan with CR-V, and none uses the identical-subscore pattern below.
- **Novel angle (original synthesis):** The two failures are the same failure. Both cars earn Good for structure and for the driver, then lose the test in the back seat with the identical subscore pattern: rear chest Marginal, rear restraints and dummy kinematics Poor. And the road data splits them anyway: the CR-V's FARS death rate (0.53) is 3.8 times the Tiguan's (0.14), while their impairment profiles are close (any-impaired 17.6% vs 20.0%). Same lab failure, different body counts. A Poor grade predicts the mechanism, not the magnitude.

## Verified facts (3+ primary sources)

1. **2026 Volkswagen Tiguan, IIHS updated moderate overlap front test, Test ID CEF2556.** Tested vehicle: 2025 Tiguan S 4-door 4wd; rating applies to 2025-26 models. Overall evaluation: **Poor**. Structure and safety cage: Good. Driver restraints and dummy kinematics: Good. Rear passenger injury measures: head/neck Acceptable, chest Marginal, thigh Good. Rear passenger restraints and dummy kinematics: **Poor**. Small overlap front: Good. Side: Good. Front crash prevention (vehicle-to-vehicle and pedestrian): Good. Headlights: Good or Acceptable by trim. Source: IIHS ratings page for the 2026 Tiguan (primary).
2. **2026 Honda CR-V, IIHS updated moderate overlap front test, Test ID CEF2343.** Tested vehicle: 2024 CR-V LX 4-door 4wd; rating applies to 2023-27 models. Overall evaluation: **Poor**. Structure and safety cage: Good. Driver injury measures all Good; driver restraints and dummy kinematics Good. Rear passenger injury measures: head/neck Good, chest Marginal, thigh Good. Rear passenger restraints and dummy kinematics: **Poor**. Rear technical measurements: chest index 42, shoulder belt tension 4.3 kN. Small overlap front: Good both sides. Side (updated test): Good. Headlights: Good. Source: IIHS ratings page for the 2026 CR-V (primary, read directly 2026-11-04).
3. **What the test is:** IIHS updated the moderate overlap front test in 2022 to add a second dummy behind the driver, sized like a small woman or a 12-year-old child. The crash is a 40 mph, 40-percent-offset frontal impact against a deformable barrier. The rear dummy measures whether the belt stays on the pelvis and off the neck, and whether the occupant submarines under the lap belt. A Good rating in this test is required for any IIHS Top Safety Pick award under 2026 criteria. Sources: IIHS test description; Autoblog Tiguan vs CR-V comparison (both miss the 2026 award on this test); AutoEvolution on the Tiguan (shoulder belt rides toward the neck, lap belt moves from pelvis to abdomen).
4. **NHTSA star ratings:** Both models carry a five-star NHTSA overall rating, as reported in the Autoblog Tiguan vs CR-V comparison and dealer/buyer-guide summaries of NHTSA ratings. NHTSA's five-star program does not include a rear-seat offset-frontal test of this kind, which is exactly why the two rating systems can disagree this sharply. The article states the five-star claim as reported, not as an IIHS result.
5. **FARS 2014-2023 (local fars_output.js):**
   - Volkswagen Tiguan: deaths 126, crashes 267, fleet 743,750, rate **0.14** deaths per 100M VMT.
   - Honda CR-V: deaths 2,072, crashes 3,886, fleet 3,150,000, rate **0.53** per 100M VMT.
   - Ratio: 0.53 / 0.14 = **3.8x**. CR-V deaths are 16.4 times the Tiguan's in raw count, but most of that is fleet size (4.2x); the rate gap is the honest comparison.
   - Toxicology: Tiguan drivers 913, any-impaired 20.0% (alcohol 15.3%, drug 7.7%). CR-V drivers 5,807, any-impaired 17.6% (alcohol 13.5%, drug 7.5%). Impairment does not explain the rate gap; the two profiles are within 2.4 points.

## What this article must NOT claim

- That either car is "unsafe" overall. Both earn Good in small overlap and side tests, Good structure, and Good driver protection in this very test. The failure is rear-occupant-specific.
- That the Poor grade caused any specific real-world death. FARS does not break deaths down by seating position at the model level in this dataset, and the FARS window (2014-2023) covers earlier generations than the IIHS test vehicles.
- That five stars and Poor contradict each other as a matter of fraud. They measure different things. NHTSA tests front occupants in full-frontal and side configurations; IIHS added the rear dummy to an offset frontal test precisely because that gap existed.
- A precise belt-movement claim for the CR-V beyond the published subscores. The neck/abdomen belt-migration description is documented for the Tiguan (AutoEvolution video analysis); for the CR-V the article sticks to the published subscores (chest Marginal, restraints Poor) and the shared mechanism the subscores imply.

## Strongest counterargument (state at full strength)

A Poor rear-seat grade in a lab may not move real-world outcomes much at all. The Tiguan's own road rate is 0.14, among the lowest in the dataset, despite the same Poor grade. Real crashes vary in speed, angle, seating position, and belt use in ways a single 40 mph offset test cannot capture, and the rear dummy is an instrumented stand-in, not a child. If the grade mattered as much as the headline suggests, the Tiguan would not be sitting near the bottom of the death-rate table. The honest frame: the test found a real belt-geometry weakness in both cars, and the road data says that weakness has not, so far, translated into a high death rate for either nameplate, least of all the Tiguan.

## Actionable takeaways

- Shopping either SUV: read the IIHS moderate-overlap result, not just the star rating on the window sticker. A five-star car can still earn Poor where your kids sit.
- If kids ride in the second row, check the specific model year and build: the Tiguan rating applies to 2025-26 models, the CR-V rating to 2023-27 models.
- Keep second-row belts snug and low on the hips, and do not let a child ride with the shoulder belt tucked under an arm or behind the back; the failure mode in this test is belt migration, and correct belt fit is the one variable an owner controls.
- Check any used Tiguan or CR-V for open recalls at nhtsa.gov/recalls regardless; the IIHS grade is not a recall.

## Primary sources (3+)

1. IIHS, 2026 Volkswagen Tiguan ratings, updated moderate overlap front test CEF2556. https://www.iihs.org/ratings/vehicle/volkswagen/tiguan-4-door-suv/2026
2. IIHS, 2026 Honda CR-V ratings, updated moderate overlap front test CEF2343. https://www.iihs.org/ratings/vehicle/honda/cr-v-4-door-suv/2026
3. Autoblog, "Volkswagen Tiguan Vs. Honda CR-V: Which One Is Safer?" (both miss the 2026 IIHS award on the updated moderate-overlap test; both carry five-star NHTSA overall ratings). https://www.autoblog.com/carbuying/volkswagen-tiguan-vs-honda-cr-v-which-one-is-safer
4. AutoEvolution, "2025 Volkswagen Tiguan Receives Poor Rating in the IIHS Moderate Overlap Front Crash Test" (belt migration description). https://www.autoevolution.com/news/2025-volkswagen-tiguan-receives-poor-rating-in-the-iihs-moderate-overlap-front-crash-test-263231.html
5. NHTSA, Fatality Analysis Reporting System (FARS), 2014-2023, via local fars_output.js. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
6. IIHS vehicle ratings parent page (award criteria; updated moderate overlap test background). https://www.iihs.org/ratings
