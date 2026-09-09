# Research: #859 — Four Stars, Zero Dummies in the Back Seat

Journalist: Mia Crumplezone | Kicker: Investigation | Date: 2026-09-09

## Angle (1-2 sentences)

The 2026 GMC Canyon just flunked IIHS's updated moderate-overlap test (Marginal overall, rear-dummy head/neck Marginal) and earned a Poor in vehicle-to-vehicle front crash prevention — and GM's official response was to wave its 4-star NHTSA rating. The problem: no federal crash test has ever put a dummy in the back seat, so the 4-star badge doesn't measure what the Canyon just failed.

## Kill test

- Newsworthy: YES. IIHS released the results Sept 3, 2026 (6 days ago); 7 vehicles tested, only 2 earned Top Safety Pick+ (2027 Kia Telluride, 2026-27 Tesla Model Y). Detroit Free Press + Autoblog + GM Authority coverage Sept 2-4. Zero coverage on vehicle-safety.org (no canyon slug exists).
- Novel: YES. The site has NHTSA-vs-IIHS-gap pieces (mg3-seat-broke-four-stars-anyway) but none built on the rear-dummy test gap: NHTSA NCAP's frontal test seats dummies only in the driver and front-passenger positions — there is no federal back-seat frontal test at all. Cross-referenced with the Canyon nameplate's FARS record (209 deaths, 385 fatal involvements, rate 0.59/100M VMT, 2014-2023, overwhelmingly prior generation).
- Mia-appropriate: safety-engineering deep dive — dummy kinematics, belt geometry, why the rear seat lags. Proceed.

## The test results (IIHS ratings page, primary source)

Tested vehicle: 2026 GMC Canyon AT4 Crew Cab 4WD (test ID CEF2622). Ratings apply to 2026 models; Canyon redesigned for 2023 MY (ratings do not apply to Chevrolet Colorado).

Updated moderate overlap front:
- Overall: **M (Marginal)**
- Structure and safety cage: G
- Driver injury: head/neck G, chest G, thigh/hip G, leg/foot A; restraints/kinematics G
- Rear passenger injury: head/neck **M**, chest A, thigh G; restraints and dummy kinematics A
- Rear dummy's head pitched forward "dangerously close to the front seatback" (Autoguide); belts held position over pelvis/torso but head excursion failed the metric
- Technical: chest index 40, shoulder belt tension 5.7 kN (GM Authority)

Rest of the scorecard:
- Small overlap front: G (driver and passenger)
- Updated side: G
- Headlights: Acceptable
- Pedestrian front crash prevention: Acceptable
- Vehicle-to-vehicle front crash prevention (updated 2.0, higher speeds): **Poor** — "failed to consistently mitigate collisions"

The batch: 7 vehicles eligible in IIHS's fourth 2026 testing wave; only Telluride + Model Y reached TSP+. Also fell short: 2026 BMW 3 Series (Acceptable moderate overlap/headlights, Marginal V2V), BMW i4 (headlight Marginal/Poor, Poor V2V), Lexus IS (Marginal moderate overlap — rear-seat vulnerability per Autoblog — plus Acceptable side), Toyota Crown Signia (Marginal moderate overlap). IIHS now rates ~214 MY2026 vehicles: 53 TSP+, 17 TSP.

GM's response (Mark Lubin, spokesman, emailed statement to Detroit Free Press, Sept 2): "the safety of our vehicles is the highest priority for the entire GM team. We are confident in the safety of 2026 GMC Canyon that achieved a four-star rating in NHTSA's New Car Assessment Program. We respect the consumer metric ratings from IIHS and look to incorporate their findings into our vehicle designs."

## Original computations (the novel contribution)

1. **The federal back-seat gap.** NHTSA NCAP's 35-mph full-width frontal test seats crash dummies in the driver and front-passenger positions only. No NHTSA frontal test has ever seated a dummy in the rear. IIHS added the rear dummy to the moderate overlap test in 2022 precisely because rear-seat protection had stagnated while front-seat protection improved. GM's 4-star defense cites a test protocol that cannot see the failure IIHS found — the two ratings are measuring different cars, effectively.
2. **FARS Canyon record (2014-2023):** 209 occupant deaths across 385 fatal crash involvements, rate 0.59 per 100M VMT — below the pickup-class norm and unremarkable next to its twin, the Chevrolet Colorado (348 deaths, rate 0.28), and midsize rivals (Frontier 1.45, Tacoma 0.80, Ranger 2.91). The honest reading: FARS describes the last-generation truck and cannot score back-seat kinematics at all — which is the point. The failure mode IIHS found is invisible to both FARS (no seating-position split) and NHTSA stars.
3. **The Poor V2V score matters more than the Marginal.** A Marginal rear-kinematics result is about injury risk to belted rear occupants in a crash that already happened; a Poor in the updated higher-speed vehicle-to-vehicle prevention test means the standard AEB failed to consistently avoid the crash in the first place — on a 2026 vehicle, when the tech is supposed to be mature.
4. **Pattern, not one truck:** 5 of 7 vehicles in the batch failed; the Lexus IS failed the same updated test on the same rear-seat vulnerability. The back seat is where the industry's safety progress stopped.

## Primary sources

1. IIHS ratings page, 2026 GMC Canyon crew cab pickup (overall M, subscores, test ID CEF2622, video): https://www.iihs.org/ratings/vehicle/gmc/canyon-crew-cab-pickup/2026
2. Detroit Free Press, Sept 3, 2026 — "GMC Canyon falls short in updated crash and crash avoidance tests": only Detroit Three entry in the batch; Marginal moderate overlap + Poor V2V prevention; GM's Mark Lubin statement with the 4-star NHTSA defense; batch context (7 tested, 2 TSP+): https://www.freep.com/story/money/cars/general-motors/2026/09/03/gmc-canyon-crew-cab-falls-short-in-updated-iihs-crash-testing/91580466007/
3. Autoblog, Sept 3, 2026 — "The IIHS Tested Seven New Cars, But Only Two Earned Safety Awards": full disqualification table (BMW 3, i4, Lexus IS, Crown Signia + Canyon); notes the updated test "involves a 40-mph test where 40% of the vehicle's width strikes a deformable barrier" and rear-seat vulnerability finding: https://www.autoblog.com/news/the-iihs-tested-seven-new-cars-but-only-two-earned-safety-awards
4. Autoguide — "GMC Canyon 'Flunks' New Crash Test": rear dummy head pitched forward close to front seatback; full scorecard table (Small overlap G, Side G, Headlights Acceptable, Pedestrian Acceptable, V2V Poor): https://www.autoguide.com/auto/manufacturers/gmc/gmc-canyon-flunks-new-crash-test-44638069
5. GM Authority, Sept 2026 — technical measurements (chest index 40, belt tension 5.7 kN), AT4 test video: https://gmauthority.com/blog/2026/09/2026-gmc-canyon-fails-iihs-updated-moderate-overlap-crash-test-video/
6. NHTSA FARS 2014-2023 (site's fars_output.js): GMC Canyon — 209 deaths, 385 fatal involvements, rate 0.59/100M VMT; Colorado 348 / 0.28; Frontier 1,030 / 1.45; Tacoma 2,274 / 0.80; Ranger 3,089 / 2.91.
7. IIHS vehicle ratings index (methodology: 2026 TSP+ requires Good in small overlap, updated moderate overlap, side + Acceptable/Good headlights + Good pedestrian prevention + Acceptable/Good V2V 2.0): https://www.iihs.org/ratings

## Thesis

GM answered an IIHS rear-seat failure with a NHTSA star rating from a test that has never seated a dummy in the back. The Canyon's Marginal isn't a scandal about one truck — it's a demonstration that the federal rating on the window sticker is blind to the exact thing the newest, toughest test measures. If you regularly carry people in the back seat, the stars are not telling you what you think they're telling you.

## Strongest counterargument (state at full strength)

GM's defense is not empty. The Canyon earned Good in small overlap (both sides), Good in the updated side test, Good structure with zero A-pillar movement, and Good driver injury measures across the board — in most crash modes this is a genuinely protective truck, and the 4-star NCAP reflects real testing, not vibes. The Marginal is narrowly about rear-dummy head excursion in one specific 40-mph offset scenario; crew-cab rear seats disproportionately carry children in car seats, cargo, or nobody, so the real-world exposure to this exact failure is smaller than the headline suggests. And the Poor V2V score is a track-test result for the standard system — optioned trims and real-world AEB performance vary, and IIHS's updated 2.0 protocol at higher speeds is deliberately hard to pass (most of the industry is still catching up; BMW and Lexus failed pieces of the same batch).

## Limitations

- FARS 2014-2023 covers the previous-generation Canyon (redesigned for 2023 MY); the tested 2026 truck's real-world record doesn't exist yet.
- FARS_BY_MODEL has no seating-position split — rear-seat deaths cannot be isolated from this dataset.
- One tested trim (AT4 Crew Cab 4WD); IIHS applies the rating to all 2026 Canyons, but trim-level equipment (including crash-prevention calibration) can vary.
- The V2V Poor is a closed-course result; on-road AEB effectiveness depends on conditions, maintenance (sensor cleanliness), and software version.
- NHTSA's NCAP is mid-overhaul discussions; future protocols may add rear-seat assessment — the "never" claim is about the current/historical test, not the future.

## Actionable insights

- If you carry rear passengers regularly — kids in boosters, carpool, adult passengers — look up the IIHS *updated moderate overlap* rear-seat subscores for your specific model year at iihs.org/ratings. The NHTSA star rating on the window sticker does not grade back-seat frontal protection at all.
- Shopping midsize pickups: the Canyon's twin, the Chevrolet Colorado, was not covered by this rating (IIHS: "These ratings do not apply to the Chevrolet Colorado") — check its page separately before assuming shared results.
- AEB is not a solved problem: a 2026 model-year vehicle just scored Poor in the updated vehicle-to-vehicle prevention test. Don't buy the truck for the driver-assist suite alone; verify the specific system's IIHS prevention scores.
