# Research — #1596: Three of Four New SUVs Hit the Car Pulling Out of a Side Street. All Four Aced the Test That Counts.

**Slug:** `1596-aaa-intersection-aeb-three-of-four-fail-turn-into-path`
**Journalist:** Mia Crumplezone (Safety Engineering Editor — AEB/safety-tech beat; last wrote #1592)
**Kicker:** Investigation
**Date researched:** 2026-11-26
**Target ship_date:** 2028-11-25 (1 day after #1595's 2028-11-24)

## Story in one line
AAA tested the intersection automatic emergency braking on four 2026 SUVs in 74 closed-course runs, and every one of them passed the standardized left-turn test that regulators grade — then three of the four slammed into a car pulling out of a side street in every single run, because the test that counts is not the test that saves you.

## Kill test
- **Genuinely newsworthy?** YES. AAA study released November 12, 2026, four 2026-model-year vehicles, 74 runs, same-week news. It lands twelve days before NHTSA proposed delaying the AEB mandate (FMVSS 127, Nov 24) on the grounds that current systems struggle — and this study shows a struggle the mandate does not even test for.
- **Novel angle on data?** YES. Original contributions: (1) the protocol-dependence finding — same four cars, same lab, same week: 0 collisions in the graded Euro NCAP left-turn scenario, 13 collisions in 16 turn-into-path runs; the rating measures the test, not the intersection; (2) the turn-signal dependency — the Tucson goes from 100% avoid to 0% when the driver forgets the blinker, so one system's competence is conditional on the driver's own signaling; (3) the 2022-to-2026 progress audit — AAA's 2022 systems did nothing in any intersection run, and the 2026 systems now warn and brake in the standardized scenario, but the ungraded scenario is still 3-of-4 failing, so the progress is real and narrow; (4) the regulatory gap — NHTSA drafted an Intersection Safety Assist test procedure in 2019 and never finalized it, and FMVSS 127 covers rear-end and pedestrian AEB only, so intersection AEB is currently graded by nobody.
- **Duplicate screen (queue + full-content grep, Nov 26, 2026):** Zero queue entries or stories mention "turn-into-path", "intersection AEB", "AAA" intersection testing, or the four test vehicles in this combination. Nearest neighbors, all different stories: #1574 (FMVSS 127 delay NPRM, Nov 24 — cited here as context, not re-reported); #986/#999 (AEB mandate test performance and litigation timeline); #1110/#1121/#1189 (IIHS commercial-vehicle crash avoidance, Oct 8); the site's own Aug 2026 urban-intersection story (8,518 urban intersection deaths in 2024 — cited as context). Killed this run, all already covered: NHTSA H1 2026 estimates (#1458/#1494/#1532); November recall census part two (#1591, no filings above 26V766 published as of Nov 26); Honda Takata 26V765 (#1583); Ram 26V756 (#1568); BMW 26V733 second recall (#1595); Waymo RQ26006 (#1461) and DMV freeway ban (#1579); IIHS Oct 31 moderate-overlap round (#1592); IIHS driver death rates Nov 21 (same 2021-2024 data as #993/#985); NHTSA seat-belt interlock proposal (published story `interlock-52-year-detour`); Thanksgiving 2026 (#1553/#1578); FARS model-year distribution (#1005).
- **Verdict:** PROCEED.

## Primary sources (3+)
1. **AAA, "Intersection AEB May Help Prevent Some Crashes, but Limitations Remain," November 12, 2026** — the study itself: four 2026 vehicles, 74 closed-course runs, scenario definitions, key results, methodology (5 planned runs per vehicle/configuration, testing stopped after 3 no-response runs), recommendations, and the 2022 baseline. https://centralpenn.aaa.com/blog/intersection-aeb-may-help-prevent-some-crashes-but-limitations-remain/?zip=17102&devicecd=PC
2. **AAA full report, 2026 Automotive Engineering Intersection AEB Report (newsroom.aaa.com)** — the underlying research report with per-vehicle run detail. https://newsroom.aaa.com/asset/2026_automotiveengineering_intersectionaeb/
3. **Collision Repair Magazine, "Automatic Emergency Braking Fails in Popular 2026 Models," November 2026** — per-vehicle results: Model Y stopped in all five turn-into-path attempts; Equinox warned 4 times, braked once, hit in all five; Explorer and Tucson hit in all three attempts without warning or braking; Tucson no-signal left turn failure; 74 runs; study released Nov 12; vehicles named (2026 Equinox, Explorer, Tucson, Model Y). https://www.collisionrepairmag.com/buyers-guide/software-management/adas/article/16425710/automatic-emergency-braking-fails-in-popular-2026-models
4. **Autoblog, "AAA Tests Show Automatic Braking Failed to Stop 3 of 4 SUVs," Nov 18, 2026** — corroborating per-vehicle results and the "major capability gap" framing. https://www.autoblog.com/news/aaa-tests-show-automatic-braking-failed-to-stop-3-of-4-suvs
5. **The Autowire, "Side-Street Blind Spot," Nov 16, 2026** — stopping distances: Model Y stopped an average of 1.60 m from the target; Tucson human-steering warning averaged 0.74 s before impact, stopped 0.46 m away; early-stop rule after 3 no-response runs; NHTSA's 2019 draft Intersection Safety Assist procedure never finalized. https://theautowire.com/2026/11/16/side-street-blind-spot-aaa-finds-most-new-crossovers-intersection-braking-misses-a-turning-car/
6. **FHWA, "About Intersection Safety"** — roughly one-quarter of traffic fatalities and about one-half of all traffic injuries are attributed to intersections; 2022 table: 12,036 intersection fatalities of 42,514 total. https://highways.dot.gov/safety/intersection-safety/about
7. **NHTSA FMVSS 127 NPRM, Nov 24, 2026 (Docket NHTSA-2026-2476)** — compliance 2029 to 2031; cited via #1574's research and the Nov 24 announcement; FMVSS 127 covers forward-collision warning and AEB for rear-end and pedestrian scenarios, not intersection turn-into-path.

## The numbers

### The four scenarios (all daylight, closed course, robotic soft target)
| Scenario | Setup | Result |
|---|---|---|
| Turn-into-path | Test vehicle straight at 30 mph; soft car turns right into its path from a perpendicular road at 5 mph | Model Y avoided 5/5; Equinox hit 5/5 (warned 4/5, braked 1/5); Explorer hit 3/3, no warning, no braking; Tucson hit 3/3, no warning, no braking |
| Turn-across-path, standardized Euro NCAP | Test vehicle left turn at 9.3 mph across oncoming soft target at 18.6 mph; turn signal on; steering robot | All four avoided in every run |
| Turn-across-path, no turn signal | Same speeds, signal off, steering robot | Tucson: no warning, no braking, hit in all runs. Other three avoided every time |
| Turn-across-path, manual steering | Same speeds, signal on, human driver steering | All four warned, braked, avoided. Tucson margin smallest: warning avg 0.74 s before impact, stopped avg 0.46 m away |

### Original calculations
- **Turn-into-path hit rate:** 13 collisions in 16 runs (81.3%). All 3 avoids came from a single vehicle. Three of four vehicles (75%) struck the target in 100% of their runs.
- **Graded vs ungraded, same cars, same week:** 0 collisions in the standardized left-turn scenario; 13 in the turn-into-path scenario. The difference is not the cars. It is which scenario the industry grades.
- **2022 to 2026:** AAA's 2022 test of four vehicles with standard (non-intersection) AEB produced no alerts and no automatic braking in any run of two intersection scenarios. In 2026, all four warn and brake in the standardized left turn. The ungraded scenario is still 3-of-4 failing. Four years of progress, confined to the scenario with a grade attached.
- **Warning without braking:** the Equinox warned in 4 of 5 turn-into-path runs and braked in 1. A warning the driver cannot act on in time is a dashboard light, not a safety system. (Time available is not published; the article does not invent a reaction-time number.)
- **Turn-signal dependency:** the Tucson's left-turn record is 100% avoid with the signal on, 0% with it off. One of four tested systems apparently keys its intersection logic off the driver's own blinker.
- **The stakes:** intersections account for roughly a quarter of US traffic fatalities (FHWA) — 12,036 of 42,514 in 2022, 28.3% — and about half of all traffic injuries. The site's own Aug 2026 story put 2024 urban intersection deaths at 8,518.

## What the reader should do
- Own a 2026 Equinox, Explorer, or Tucson: your intersection AEB is an assist, not a guarantee. Cover the brake at intersections, especially when a car could pull out of a side street or a strip-mall exit. The system that is supposed to catch that car did not catch it once in AAA's testing.
- Own a 2026 Model Y: yours stopped in all five runs, an average of 1.60 m short of the target. That is the only passing grade in the test, and it is a single data point from one lab, in daylight, against a soft target.
- Shopping for a car with "intersection AEB" on the window sticker: ask what scenarios it was tested in. The sticker does not say. The graded scenario is the left turn across oncoming traffic; the scenario that failed three of four cars is not graded by anyone.
- Signal your left turns. One tested system apparently needs the blinker to know a turn is happening, and without it the car did nothing at all.

## Limitations / counterarguments (must state at full strength)
- Four vehicles, daylight only, closed course, soft targets, one lab. This is not a brand ranking and not a fleet-wide verdict. The Model Y's win is a single data point, and Tesla's system has its own documented false-positive (phantom braking) tradeoff that AAA did not test here.
- The turn-into-path scenario is hard by design: a car pulling out at 5 mph into the path of a vehicle doing 30 mph. Many human drivers would fail it too. The claim is about the gap between "intersection AEB standard" and performance in an ungraded scenario, not about perfection.
- The Equinox's 4-of-5 warnings deserve credit: a warning can still help an attentive driver, and the article should say so rather than counting warnings as zero.
- Standardized tests exist for repeatability, and the Euro NCAP left-turn test is a real test that real cars pass. AAA's argument is to broaden the protocols, not to scrap them — and NHTSA's 2019 draft Intersection Safety Assist procedure shows the regulator knew the gap seven years ago and still has not finalized a standard.
- AAA tested in daylight. Low-light performance, which NHTSA cited in the Nov 24 FMVSS 127 delay proposal, is a separate untested gap here. This study says nothing about night intersections.
- The article must not claim FMVSS 127 was supposed to cover intersection scenarios. It covers rear-end and pedestrian AEB. The point is narrower and sharper: the mandate being delayed is about the scenarios that are already graded, while the scenario that failed three of four cars is graded by nobody.
