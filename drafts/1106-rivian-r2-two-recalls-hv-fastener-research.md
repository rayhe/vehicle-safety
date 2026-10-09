# Research: #1106 — Rivian's R2 Is Four Months Old and on Its Second Recall. The Second One Was Caught by a Human.

**Slug:** `1106-rivian-r2-two-recalls-hv-fastener`
**Journalist:** Rex Driverton (Senior Crash Correspondent — deadpan noir, paradox-hunter; R2's two recalls in four months are a paradox: the software-defined car got fixed by software, the hardware car got saved by a human eye)
**Kicker:** Investigation
**Date:** 2026-10-09

## Angle (1-2 sentences)
Rivian's R2 began reaching customers June 9, 2026. Four months later it is on its second recall: the first (26V597, Sept 2026) was Rivian's largest ever at 98,828 vehicles and was 95%+ fixed over-the-air before owner letters went out; the second (26V625, Oct 2026) covers exactly 14 cars with an under-torqued high-voltage battery fastener that a manufacturing operator spotted by hand, which the automated station had failed to catch. One recall proves the software car; the other proves the wrench still matters.

## Kill test
- **Newsworthy:** YES. 26V625 published early October 2026, press Oct 4-5. Five days old.
- **Novel:** YES. No prior R2-specific Crash Report article (only the older R1 toe-link investigation). The compression angle (two campaigns in four months of customer deliveries) + the human-vs-automation contrast (operator caught what the automated torque station missed; software fixed what paper couldn't) has not been published anywhere. Press covered each recall standalone; nobody ran the pair as one story.
- **Not a rehash:** #1105 (ID.4 fourth battery recall), #1104 (ProMaster steering water intrusion), #1103 (headlight complaints), #1102 (IIHS work-truck sensors losing the kid), #1101 (EV9 ODS mat), #1100 (sobriety/night) — none touch Rivian. PROCEED.

## Primary sources
1. **Autoblog (Oct 4, 2026):** "Rivian's Make-or-Break EV Is Already on Its Second Recall" — https://www.autoblog.com/news/rivians-make-or-break-ev-is-already-on-its-second-recall
   - NHTSA 26V625: 14 MY2027 R2s built May 18 - Aug 27, 2026; improperly torqued fastener connected to the high-voltage battery; loss of motive power without warning; Rivian found it after a manufacturing operator identified an under-torqued fastener Sept 17, 2026; week-long investigation; voluntary recall; automated station reprogrammed to reject improperly torqued fasteners; Rivian estimates 100% of the recall population has the defect; TechCrunch reports all affected vehicles already at service centers; owner notifications on or before Nov 29, 2026; no customer reports, crashes, injuries, or fatalities; Q3 deliveries 19,248; full-year guidance 65,000-70,000; R2 Standard $44,990 (spring 2027), Performance $57,990 (now), Premium $53,990 (late 2026); competes with Tesla Model Y.
2. **pickuptrucktalk (Oct 2026):** NHTSA 26V597 notice text — https://pickuptrucktalk.com/2026/10/rivian-multiple-model-recall-98k-obstructed-rearview-camera-image/
   - 98,828 units; R1T 2022-2026, R1S 2022-2027, R2 2027; rearview camera image may be overlapped by drive-mode notification (FMVSS 126 stability-control prompt) before vehicle moves; fails FMVSS 111 rear visibility; suspect period Aug 23, 2021 - Aug 10, 2026; no customer reports/accidents/injuries/fatalities; software update already available, installed in 95%+ of impacted vehicles (96% of R2s).
3. **gcn.com (Oct 2026):** "Rivian's largest-ever recall covers 98,828 R1S, R1T and R2 EVs" — https://gcn.com/rivian-s-largest-ever-recall-covers/22058/
   - Breakdown: 62,259 R1S, 34,088 R1T, 2,481 R2; previous largest Rivian recall was 34,824 electric delivery vans (Dec 2025); first recall to include the R2; R2 customer deliveries began June 9, 2026; corrected software in 2026.31 series (R2: 2026.31.40); owner letters Nov 9, 2026.
4. **TheStreet (Sept 23, 2026):** CNBC/Reuters context — https://www.thestreet.com/automotive/rivian-rearview-camera-software-recall
   - Recall announced Sept 23, 2026; ~100,700 vehicles per CNBC (covers most of Rivian's production history); backover crashes killed ~210/year when NHTSA mandated backup cameras (from May 2018 builds); Reuters: noncompliance matter, not crash-driven.
5. **NHTSA recalls database (parent page):** https://www.nhtsa.gov/recalls — campaigns 26V597 and 26V625.

## Key facts
- R2 timeline: deliveries begin June 9, 2026 -> 26V597 (Sept 23, 2026, camera software, 98,828 incl. 2,481 R2s) -> 26V625 (Oct 2026, HV fastener, 14 R2s). Two campaigns in the first four months of customer deliveries.
- 26V597 defect: rare sequence (stability control off in certain drive modes + driver leaves and returns + shifts to reverse without dismissing the FMVSS 126 prompt) overlaps the rearview image; violates FMVSS 111. Fix: OTA update 2026.31.40; 96% of R2s already updated at filing.
- 26V625 defect: under-torqued fastener at the high-voltage battery; loss of motive power without prior warning; build window May 18 - Aug 27, 2026; operator caught it Sept 17; voluntary recall after ~1 week investigation; automated station reprogrammed; 100% defect estimate on the 14 cars; all 14 reportedly already at service centers; letters by Nov 29, 2026.
- Zero customer reports, crashes, injuries, or fatalities on either campaign.
- Same month, same regulation, bigger scale: Stellantis 26V531 (844,027 vehicles, FMVSS 111 rearview camera noncompliance) — the camera-image recall wave is industry-wide, not a Rivian story alone.
- Scale check: 19,248 vehicles delivered in Q3 2026 (all models; Rivian does not break out R2); full-year guidance 65,000-70,000.

## Site overlap check (311 queue entries)
- `rivian-toe-link-investigation-115k.html`: R1 toe link NHTSA investigation (older, different defect, different model). DIFFERENT.
- No prior R2 coverage. No prior 26V597/26V625 coverage. No prior FMVSS-111-camera-wave coverage. PROCEED.

## Original contribution (required)
1. The compression timeline: two federal safety campaigns in the R2's first four months of customer hands — quantified as a rate (June 9 deliveries -> Sept 23 -> Oct 4).
2. The inversion: recall #1 (98,828 cars) was the biggest in company history yet functionally invisible (95%+ OTA-remedied before the Nov 9 letters); recall #2 (14 cars) is the smallest yet the most old-fashioned (wrench, torque spec, service visit). Nobody published the pair.
3. The human catch: the automated torque station under-torqued the fastener; a human operator found it; the station was then reprogrammed to reject bad fasteners. The QA loop ran human -> machine, not machine -> machine.
4. The paperwork lag quantified: both recalls fixed/contained before the legally required letters (Nov 9 and Nov 29) — the notification system trailing the fix by weeks.

## Limitations (to state in article)
- 14 vehicles: cannot generalize a per-vehicle failure rate; the "100% defect" estimate applies only to the recall population, per Rivian.
- We do not know the torque shortfall magnitude or the spec — only that it was "improperly" / "under" torqued.
- No crashes, injuries, or fatalities on either campaign — the loss-of-motive-power risk for 26V625 is a potential, not an observed outcome.
- R2-specific delivery counts are undisclosed (Rivian reports company totals only), so we cannot compute recalls-per-R2-delivered.
- The "all 14 already at service centers" detail is per TechCrunch via Autoblog, not the NHTSA filing; attribute accordingly.

## Strongest counterargument (to state at full strength)
Both recalls are the safety system working, not failing. A line operator caught a defect, the company investigated for a week, filed a voluntary recall, reprogrammed the automated station, and had all 14 cars back at service centers before the notification deadline — with zero incidents. And the first recall was remedied to 96% of R2s before the letters were even mailed: that is the fastest recall fix in automotive history, a feature of the software-defined car, not a scandal. Early-production teething on a brand-new assembly line is normal; four months in, Rivian has hurt no one and fixed nearly everything. Compare Ford's multi-year, multi-million-unit repeat campaigns (Autoblog's own framing) and this barely registers.

## Actionable insights (required)
- R2 owners: check your VIN at nhtsa.gov/recalls; install software update 2026.31.40 (or newer) for the camera fix; if your R2 is one of the 14 fastener-recall cars, Rivian says it is already at a service center — expect the Nov 29 letter and confirm the torque repair is logged.
- Used/new shoppers: early VINs of a brand-new platform carry teething risk — that is what the data shows, four months in. It is also what early production always shows.
- General: OTA recalls are still recalls — install vehicle software updates the way you install phone updates. And if a manufacturer tells you your car needs a torque wrench, it needs a torque wrench; do not skip the service visit.
