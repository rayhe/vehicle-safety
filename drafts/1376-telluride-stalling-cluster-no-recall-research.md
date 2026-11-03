# Research Notes — Article #1376: The 2025 Telluride Keeps Stalling. No Recall Covers It.

**Slug:** 1376-telluride-stalling-cluster-no-recall
**Journalist:** Mia Crumplezone (Safety Engineering Editor — component-level failure analysis)
**Kicker:** Investigation
**Working title:** "The 2025 Telluride Keeps Stalling. No Recall Covers It."
**Date researched:** 2026-11-03

## Kill test: PASS

**Proposed angle (1-2 sentences):** Owners of the 2025 Kia Telluride have filed 35 NHTSA complaints describing the engine shutting off, several at 45 to 50 mph with power steering and brakes lost, and more than half of those owners say their dealer could not reproduce the problem. No recall and no NHTSA investigation covers the stalling, while Kia's own September 2026 technician bulletin quietly tells dealers to swap two parts and send the old ones back for analysis, with no notice to customers.

**Challenge — is this surprising after 1,375 articles?** Yes, three ways. (1) Zero prior site coverage of Telluride stalling: queue/filename grep 2026-11-03 for "stall" finds only #1174 (Honda fuel-pump stall saga, a different defect); Telluride coverage is seat fires (#1209, 26V430), seatbacks (#1313, #1332-era family is Sienna, not Telluride; Telluride seatback is 26V105 below), and TSP/build-month pieces. (2) The complaint concentration is extreme for a one-year-old model: 35 of 124 complaints (28%) describe stalling, versus 6% for the 2020, and 54 powertrain complaints already exceed the 2023's 50 despite two fewer years on the road. (3) The manufacturer paper trail cuts against the "no action" surface: Kia's Pitstop PS815 (September 2026) is an active internal investigation by parts collection, which means the company is studying the failure while owners get told "could not duplicate."

**Killed this run (all verified duplicates, do not re-propose):** IIHS commercial crash avoidance (#1110, #1121, #1144, #1175, #1318, #1327, #1341); Lincoln Nautilus/Corsair 26V688 anti-rust neutral shift (#1321, #1356); Toyota RAV4 PHEV 26V659 power loss (#1130, #1166, #1233); Toyota Land Cruiser fuel tube (#1204, #1230, #1248, #1340); Ford F-150 tailgate cable 26V689 (#1297); GM L87 EA26005 Nov 13 deadline (#1367, #1344, #1025); GM eBoost brake investigation (#790, #835, #979, #1050); Ford 741k rollaway (#1339); Thomas Built FMVSS 221 (#1369); RV power-seat cord trio 26V710/26V712/26V714 (#1371); Great Dane k-brace (#1348, #1310); Wabash wrong grease (#1370); IIHS crossover moderate overlap batch (#1244, #1278, #1312, #1314, #1346); Cybercab school-zone DP26010 (#1145, #1167, #1205, #1315); Cybercab AQ26002 (#839, #844, #848, #887, #949, #1016, #1113, #1240); NHTSA cyan ADS marker lamp NPRM (#1308); NHTSA FMVSS 108 headlamp rulemaking (#1226, #1103); Ford recall-pace record (#1048); Toyota Sienna seatback 26V690 (#1332); Toyota PVM camera recall 25V744 (October/November 2025 news, stale, not November 2026 news); Rivian toe-link PE26004 (#1133); Kia Telluride seat-fire 26V430 (#1209); Kia Telluride seatback 26V105 is a *different* 2025 recall (see below) and is not this story.

## Verified facts (all sourced, no fabrication)

1. **The complaint cluster.** As of November 2, 2026, owners filed 124 NHTSA complaints on the 2025 Telluride; 35 describe the engine shutting off, several at speed. Accounts describe the engine cutting out while slowing for intersections, in turns, and at 45 to 50 mph, with the dash showing "Engine Off! Shift to P or N then start engine." (The Weekly Driver, NHTSA complaint data as of Nov 2, 2026; database built on NHTSA data fetched Oct 9, 2026.)
2. **The dealer dead end.** In 18 of the 35 stalling complaints, the owner says the dealer could not reproduce the problem or found no fault. (The Weekly Driver, Nov 2, 2026.)
3. **No federal action.** No recall or NHTSA investigation covered the 2025's stalling as of November 2, 2026. (The Weekly Driver, Nov 2, 2026.)
4. **The 2025's three recalls cover everything except stalling.** Door belt molding delamination (25V494, 2023-2025); incorrect spare tire (25V745, 24 Tellurides built Aug 28, 2025, FMVSS 110 noncompliance, ABS/TCS risk); front seat-back frames that may not restrain occupants in rear impacts (26V105 / Kia SC362, 85,515 SUVs built Nov 1, 2024 - Aug 8, 2025, remedy inspect-and-replace seatback frame). (The Weekly Driver; NHTSA Part 573 report 26V105; Kia dealer notice 25V745.)
5. **Kia's quiet internal investigation.** Kia Pitstop PS815 (September 2026, filed on NHTSA's server as MC-11037370-0001): "ALLEGED STALL AT LOW SPEED" on some 2025MY Telluride vehicles. Guidance applies where the customer reports stalling, with the "Engine OFF! Shift to P or N, then start engine" message, and no warning light or DTC is found at the dealer. Technicians are told to replace the variable force solenoid (VFS) on each cylinder bank and the manifold absolute pressure (MAP) sensor, and replaced parts "will be collected by Kia for further analysis." The document states: "A Pitstop is an informational guide for technicians that does not involve customer notification."
6. **Individual complaints (NHTSA complaints mirrored by CarProblemZoo, failure dates Sept-Oct 2026).** Oct 24, 2026: engine shuts off without warning, alarm sounds, dash reads "engine off! shift to p or n, then start engine," power steering and power brakes lost until restart; five events, including three within minutes. Sept 17, 2026: repeated stalling escalating from low-speed stops to complete shutoff at 45-50 mph, "power steering and power brakes are lost, creating an immediate life-threatening situation." Multiple owners report dealers unable to reproduce; one reports a dealer calling it "likely a computer fluke."
7. **The generation context.** Kia built 698,672 first-generation Tellurides for model years 2020-2025 in West Point, Georgia, every one with the 291-hp 3.8-liter V6. There is no 2026 Telluride; Kia jumped to a redesigned 2027 with a 2.5-liter turbo four and a hybrid. The 2025 is therefore the final year of the V6, and its defect record is the one used buyers will inherit. 2025 production: 167,060; 124 complaints = 0.7 per 1,000 built (lowest rate in the generation, because the cars are newest — raw rates fall with age, which is exactly why the *share* of complaints matters more than the count). (The Weekly Driver.)
8. **FARS context (site dataset, 2014-2023, verified this run from fars_output.js):** Kia Telluride: 31 deaths, rate 0.04 per 100M VMT, fleet estimate 612,500. Model-year deaths in FARS: 2020: 11, 2021: 10, 2022: 5, 2023: 5. FARS ends at 2023, so it contains no 2025 Telluride data at all; the fatality record describes earlier model years, not the stalling cluster. Toxicology: 308 drivers, 17.5% any impairment. The Telluride is, by fatality rate, one of the safest vehicles in the dataset — which makes the stall cluster a defect story, not a death-rate story, and the article must not imply otherwise.

## Original calculations / analysis (verifiable, show work in article)

- **28.2% share:** 35 / 124 = 28.2% of all 2025 Telluride complaints describe stalling, versus 6% for the 2020 (The Weekly Driver's keyword count). A complaint profile where more than one in four reports is the same failure mode, on a one-year-old model, is a cluster, not background noise.
- **Powertrain pace:** 54 powertrain complaints on the 2025 already exceed the 2023's 50, though the 2023 has been on the road two years longer. Age-adjusted, the 2025 is out-complaining its older sibling on powertrain alone.
- **51% no-fault rate:** 18 / 35 = 51.4% of stalling complaints end with the dealer unable to reproduce or finding no fault. That is the mechanism by which a real defect stays unrecalled: intermittent, code-free failures leave no paper trail at the dealer, and the Pitstop's own trigger condition (no warning light, no DTC) confirms the failure leaves no diagnostic trace.
- **The Pitstop logic, stated plainly:** Kia's bulletin only applies when there is no code and no warning light. A defect that sets no code cannot be confirmed by the dealer's scan tool, so the "could not duplicate" outcome is built into the diagnostic process. Collecting the VFS and MAP sensors for analysis is how a manufacturer investigates a code-free failure without opening a recall: warranty parts become the dataset.
- **Recall contrast:** the 2025's largest recall (26V105, 85,515 SUVs) concerns a seatback that might not restrain an occupant in a rear impact. The stalling cluster has no crash count attached yet, but a stall at 45-50 mph with steering and brake assist lost is an immediate loss-of-control event, not a hypothetical one. The article must keep both facts in view: the recalled defect is proven by manufacturing records; the unrecalled defect is proven only by owner reports so far.

## Story spine (Mia Crumplezone voice: technical but accessible, excited about mechanisms, judgmental about bad design process)

- Lede: the engine quits, the dash orders you to shift to park, and the dealer finds nothing. 35 owners, same script.
- The numbers: 35 of 124, 28%, at intersections and at 50 mph, steering and brakes gone with the engine.
- The dealer dead end: 51% no-fault, and why — no code, no light, no trace. Intermittent failures defeat the scan tool.
- The quiet bulletin: Kia's September Pitstop tells techs to swap the VFS on both banks plus the MAP sensor and mail the parts back. That is an investigation wearing a service bulletin costume, and customers are never notified.
- What the 2025's actual recalls cover (molding, a 24-car spare tire error, seatbacks) — everything except the thing owners keep reporting.
- FARS honesty: the Telluride's fatality rate is 0.04, among the lowest in the dataset. This is not a death-trap story. It is a "your car can go dark at speed and the system has no box to check" story.
- Actionable: if you own a 2025 Telluride, file the complaint (that is how clusters become investigations); ask the dealer specifically about Pitstop PS815 and the VFS/MAP replacement, not a generic "check the engine"; if it stalls, note speed, gear, and whether any light appeared, because "no code" is itself diagnostic information. Shopping used: drive a 2025 through slow turns and stops, and ask for stalling service records.
- Closer: the last year of the V6 will be the used market's problem for a decade. The fix, if one comes, starts with complaint #36.

## Limitations (for the limitations section)

- Complaint counts come from The Weekly Driver's keyword analysis of NHTSA complaints (data fetched Oct 9, 2026; counts as of Nov 2, 2026). Complaints are owner-reported, unverified, and self-selected; 35 complaints do not mean 35 confirmed defects, and the true incidence could be higher (most owners never file) or lower (some reports may describe the auto stop-start system or other causes).
- This desk has not independently pulled the full NHTSA complaint file; the 35/124/18/54 figures are quoted from The Weekly Driver's published analysis, cross-checked against individual complaint narratives mirrored by CarProblemZoo.
- The Pitstop's VFS + MAP replacement is a diagnostic step for parts collection, not a confirmed root cause. Kia has not stated that either part causes the stalls.
- No crashes, injuries, or fatalities are attributed to the 2025 stalling cluster in the sources reviewed. The loss-of-steering/brakes consequence follows from engine-off physics (assist lost with the engine), as owners themselves report, but no crash has been tied to it.
- FARS data ends at 2023 and contains no 2025 Telluride records; all FARS figures describe earlier model years.
- "No recall or investigation" is as of November 2, 2026 (The Weekly Driver's check). NHTSA could open a file after that date.

## Strongest counterargument

Thirty-five complaints on 167,060 vehicles is 0.02% of production, and owner complaints are the noisiest dataset in auto safety: they mix real defects with misunderstood features (auto stop-start feels like a stall to a new owner), one-off electrical gremlins, and bad fuel. More than half the dealers found nothing, which is also consistent with nothing being wrong — an intermittent complaint with no code is often a ghost. Kia's Pitstop is standard practice, not a cover-up: manufacturers routinely collect parts on emerging issues, and a bulletin that replaces two inexpensive sensors is a cheap diagnostic sweep, not an admission. And the 2025's overall complaint rate (0.7 per 1,000 built) is the lowest in the generation. On that view, this article is 35 anecdotes in search of a defect, and the honest headline is that a cluster worth watching is not yet a defect worth recalling. The article must carry that reading at full strength, because the difference between "cluster" and "defect" is exactly what the next 35 complaints will decide.

## Reference URLs (verified to exist — do not invent others)

- https://theweeklydriver.com/kia-telluride-years-to-avoid/
- https://static.nhtsa.gov/odi/tsbs/2026/MC-11037370-0001.pdf
- https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V105-2893.pdf
- https://static.nhtsa.gov/odi/rcl/2025/RCHRN-25V745-5400.pdf
- https://www.carproblemzoo.com/kiamotor/telluride/engine-and-engine-cooling-problems.php
- https://www.nhtsa.gov/recalls
- https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
