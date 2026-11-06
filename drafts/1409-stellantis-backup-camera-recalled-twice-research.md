# Research — #1409: Stellantis Recalled the Backup Camera. Then It Recalled the Backup Camera Again.

**Slug:** 1409-stellantis-backup-camera-recalled-twice
**Journalist:** Rex Driverton (Senior Crash Correspondent — investigations, paradoxes; deadpan noir)
**Kicker:** Investigation
**Date:** November 6, 2026

## The news hook

Two recalls, five weeks apart, same defect, same supplier, same truck.

- **August 17, 2026 — 26V531 (FCA 78D):** 844,027 US vehicles (848,511 announced; 954,885 worldwide) across Chrysler, Dodge, Jeep, and Ram. Radio software from Harman Becker Automotive Systems may prevent the rearview camera image from displaying during a backing event. Uconnect5 R1 High radios only. FMVSS 111 noncompliance. NHTSA estimates 100% of the recalled vehicles have the defect. Largest single population: 211,114 Ram 1500s (2026, built April 9, 2025–July 21, 2026). Owner letters September 1–25, 2026.
- **September 1, 2026 — 26V560 (FCA 83D):** 239,131 Ram 1500s (2025–2026, built October 6, 2023–February 23, 2026). Same Harman Becker radio software, same failure: shift into reverse, screen stays blank. FMVSS 111 noncompliance. NHTSA estimates 100% of the recalled vehicles have the defect. FCA opened its investigation March 17, 2026; Vehicle Regulations Committee approved the recall August 26. Owner letters from September 24, 2026. Remedy: free radio software update, over-the-air or at the dealer.
- **September 29, 2026 — 26V623 (FCA 51D):** 16,385 2026 Ram 1500s. Different defect, same truck, same month: TPMS sensors (Sensata Technologies) may report false tire pressure or fail to light the warning lamp. FMVSS 138 noncompliance. 100% defect estimate. Owner letters October 27, 2026. Dealers inspect and replace sensors free.

Combined: **1,083,158 US vehicles** (844,027 + 239,131) with backup cameras that can go dark, recalled in five weeks. The three Ram 1500 campaigns together total **263,845 trucks** (MotorBiscuit count). Zero crashes or injuries reported across all three.

## Why this is the story: the recall that proved the first recall wrong

The August recall covered 2026 and 2027 models. The September recall covers 2025 and 2026 models built as far back as October 2023. The defect was already in the field for nearly three years when Stellantis announced the first recall, and the first recall's scope missed the oldest and largest cohort of affected trucks. The 2026 Ram 1500 sits in both camera recalls: 211,114 of them in August, plus an unknown share of the 239,131 in September. Some trucks need the radio fixed twice, under two campaign numbers, for the same failure.

The deeper point is architectural. The backup camera is not a camera problem. It is a radio problem. Since May 2018, federal law has required every new light vehicle to show a rearview image when shifted into reverse (FMVSS 111). Stellantis routed that legally mandated safety display through the infotainment radio, built by a supplier, running software that can fail to render the image. The camera works. The lens works. The screen works. The software in between decides not to show you what is behind the truck.

## Original contribution: the arithmetic nobody ran

1. **The million-truck addition.** 844,027 + 239,131 = 1,083,158 US vehicles recalled for the same defect in five weeks. Neither recall's press coverage added them together; each was reported as a standalone number. The combined figure is more than double the August headline.
2. **The overlap.** 2026 Ram 1500s appear in both camera recalls (211,114 in 26V531, built April–July 2025; the 26V560 window runs October 2023–February 2026 and includes 2026s). NHTSA did not say the populations are identical, and the build windows suggest they are not — which is worse, not better: it means the defect spans two different radio/software configurations and Stellantis needed two campaigns to catch both.
3. **FARS cross-tab (repo `fars_output.js`, FARS_BY_MODEL).** The Ram 1500 has the lowest fatality rate in the entire dataset: 0.13 per 100M VMT, 714 deaths 2014–2023. The truck itself is not the problem. The problem is the screen going dark at the exact moment the driver is reversing toward something the camera was mandated to show.
4. **The stakes number.** NHTSA has estimated backover crashes kill about 210 people and injure about 15,000 every year in the US, with young children a significant share of the fatalities. That is why FMVSS 111 exists, and why a blank screen is a federal noncompliance, not a glitch.

## Kill test

Genuinely newsworthy? Yes. Over a million vehicles, same supplier, same defect, two recalls in five weeks, plus a third Ram recall in the same month. Novel angle? Yes: no prior article on this site covers 26V531, 26V560, or 26V623 (checked drafts/stories filenames for harman, 26V560, 83D, 26V623, ram camera — zero hits). The "recalled it twice" framing and the combined 1,083,158 figure are original. Not a data dump: regulatory-forensic follow-up with a FARS cross-tab that cuts against the scary framing (the Ram 1500 is the safest truck per mile in the dataset).

## Actionable takeaways

- Own a 2025–2026 Ram 1500 (or any 2026–27 Chrysler, Dodge, Jeep, or Ram with Uconnect5)? Check your VIN at nhtsa.gov/recalls now. The camera fix is a free software update, available over the air — no dealer visit required for most trucks.
- Own a 2026 Ram 1500? Check for all three campaigns (26V560 camera, 26V623 TPMS, and 26V531 if built April–July 2025). One VIN can carry multiple open recalls.
- If your backup camera ever goes blank: stop, get out, look. Do not reverse on mirrors alone in a parking lot full of children. The camera is the legally required system; the mirrors are not a substitute for it.
- When shopping: ask whether the backup camera image runs through the infotainment radio or a dedicated display path. A safety system that shares a computer with the radio fails when the radio does.

## Limitations / counterargument (for the article)

- Both camera recalls are software defects with a 100% estimated defect rate, which sounds catastrophic but is the honest arithmetic of software: every unit ships the same code. The fix is a reflash, not a parts replacement, and it is free and largely over-the-air. Nobody has been hurt.
- The two camera recalls may not be the same software bug: 26V531 covers Uconnect5 R1 High radios in 2026–27 models; 26V560 covers 2025–26 Ram 1500s with a different radio/software configuration. Stellantis has not said the root cause is identical, only that the failure mode and supplier are the same. The article must say "same failure, same supplier" and not claim "same bug" without evidence.
- The 1,083,158 combined figure counts vehicles, not distinct defects; the overlap between the two Ram 1500 populations is unknown, so the number of distinct trucks is somewhat less than the sum. State the sum as the sum of the two recall populations, not as a count of unique vehicles.
- The Ram 1500's 0.13 FARS rate covers 2014–2023 and predates both recalls; it is not a rating of the 2025–26 trucks.
- Backover death estimates (210/year) are NHTSA's pre-mandate figures, cited in coverage of the August recall; they describe the risk the camera mandate was written to address, not deaths caused by this defect.

## Sources (primary)

1. NHTSA Part 573 / recall bulletin, 26V531 (FCA 78D), August 2026 — https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V531-1267.pdf
2. NHTSA Part 573 / recall bulletin, 26V623 (FCA 51D), October 2026 — https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V623-7468.pdf
3. WardsAuto, "FCA US recalls 239K Ram 1500 pickup trucks over backup camera failure," Sept 18, 2026 — https://www.wardsauto.com/news/fca-us-recalls-239k-ram-1500-pickup-trucks-over-backup-camera-failure/830589/
4. MoparInsiders, "Ram Recalls 239,131 Ram 1500 Pickups Over Camera Issue," Sept 8, 2026 — https://moparinsiders.com/ram-recalls-239131-ram-1500-pickups-over-camera-issue/
5. MotorBiscuit, "239,131 RAM 1500s Recalled Because the Backup Camera Can Go Blank in Reverse," Oct 29, 2026 — https://www.motorbiscuit.com/239131-ram-1500s-recalled-because-the-backup-camera-can-go-blank-in-reverse/
6. AutoEvolution, "Multiple Stellantis North America Brands Hit With 844,027-Vehicle Recall," Aug 2026 — https://www.autoevolution.com/news/multiple-stellantis-north-america-brands-hit-with-844027-vehicle-recall-274956.html
7. RoadEthos, "Ram Recalls 239,131 Trucks Over a Camera Bug Stellantis Keeps Fixing" — https://roadethos.com/news/ram-recalls-239131-trucks-over-a-camera-bug-stellantis-keeps-fixing
8. Pickup Truck Talk, "2026 Ram 1500 Recall: 16K Trucks May Have Faulty Tire Pressure Sensors," Oct 18, 2026 — https://pickuptrucktalk.com/2026/10/2026-ram-1500-recall-16k-trucks-may-have-faulty-tire-pressure-sensors/
9. NHTSA FARS 2014–2023 via repo `fars_output.js` (FARS_BY_MODEL: Ram 1500, rate 0.13, deaths 714)
10. NHTSA FARS / IIHS fatality statistics — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and https://www.iihs.org/topics/fatality-statistics
11. NHTSA recalls database — https://www.nhtsa.gov/recalls
