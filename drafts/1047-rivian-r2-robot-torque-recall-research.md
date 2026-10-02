# Research Notes — #1047: Rivian R2 Under-Torqued Battery Fastener Recall

**Slug:** 1047-rivian-r2-robot-torque-recall
**Journalist:** Mia Crumplezone
**Number:** 1047
**Angle:** The robot forgot to tighten the bolt; a human caught it. Rivian's second R2 recall in six weeks — and the dangerous one (HV battery, loss of drive power) is the tiny one (14 cars), while the trivial one (camera pop-up, software) was 98,828.

## Facts

- **Recall population:** 14 model-year 2027 Rivian R2 vehicles, built May 18 – Aug 27, 2026 (AutoGuide).
- **Defect:** A high-voltage battery circuit fastener may not have been properly torqued during assembly. An improperly tightened fastener can cause intermittent or complete loss of electrical connection, leading to a sudden loss of drive power (AutoGuide, TechCrunch).
- **Cause:** An automated station on the Normal, Illinois assembly line under-torqued the fastener. First spotted Sept 17 by a "manufacturing operator" who noticed the under-torqued fastener; Rivian investigated and reprogrammed the station to reject improperly torqued fasteners (TechCrunch, NHTSA filing via AutoGuide).
- **Rivian awareness:** "Not aware of any customer reports, accidents, injuries, or fatalities related to this issue" (TechCrunch). However, some owners were told by service to stop driving immediately; at least one vehicle was towed (TechCrunch; RivianTrackr).
- **Internal recall number:** FSAM-1888. Owner notification letters mailed Nov 28, 2026; VINs searchable on NHTSA.gov Nov 28. Rivian customer service 1-888-748-4261 (AutoGuide).
- **Remedy:** Technicians inspect affected vehicles, tighten the connection or replace damaged high-voltage components, free of charge (AutoGuide).
- **Second R2 recall:** First was Sept 16 filing — 98,828 vehicles (R1T, R1S, R2) for a rearview camera pop-up overlap issue, FMVSS 111 noncompliance, fixed OTA (95%+ already patched). Of the 98,828, only 2,481 were R2s built Apr 23 – Aug 10 (eletric-vehicles.com, topclassactions).
- **Precedent:** Rivian recalled 12,212 vehicles in October 2022 because the nut connecting the front upper control arm and steering knuckle "may not have been sufficiently torqued" (eletric-vehicles.com). Same failure mode, four years earlier, 870x the volume.
- **Production context:** R2 deliveries began June 2026. At least 2,481 R2s built by Aug 10 (from the camera-recall filing). Rivian plans 20,000–25,000 R2s by year end, second production shift by end of Q3 (TechCrunch, eletric-vehicles.com). 65,000–70,000 total 2026 deliveries guidance after 22,559 in H1 (eletric-vehicles.com).

## Original calculations (verifiable)

- 14 / 2,481 (R2s built through Aug 10, the only disclosed production figure) = ~0.56% — the recall covers at most about half a percent of disclosed early R2 production. Caveat: production continued past Aug 10, so the true denominator is larger and the share smaller.
- Recall-population ratio between R2 recalls #1 and #2: 98,828 : 14 ≈ 7,059 : 1. The defect with the lethal failure mode is four orders of magnitude rarer than the paperwork one.

## Counterargument

- A 14-car recall is the system working: the operator caught it, the station was reprogrammed, the footprint is tiny. Criticizing Rivian for this recall is arguably punishing transparency; NHTSA filings this small exist precisely so owners of those 14 cars get a federal paper trail.
- Loss of drive power ≠ crash; the vehicle coasts. The "lethal failure mode" framing may overstate the risk if the failure is detectable and gradual.
- We don't know the actual torque values or how many fasteners per pack were affected; the filing language ("may not have been properly torqued") is deliberately broad.

## Limitations

- We do not have the actual NHTSA Part 573 report text; details come from press summaries of the filing (TechCrunch, AutoGuide). The NHTSA campaign number was not yet published as of Oct 2.
- No torque spec, no per-vehicle fastener count, no inspection results published yet.
- Owner tow/stop-driving reports are secondhand (Reddit, RivianTrackr) and unverified against service records.
- We don't know how many R2s total were built by Aug 27; only the Aug 10 floor (2,481) is public.

## Actionable takeaways

- R2 owners: VINs searchable at nhtsa.gov/recalls starting Nov 28; call 1-888-748-4261 (ref FSAM-1888) if your R2 was built May–Aug 2026.
- General lesson: torque-verification stations exist on modern lines; this recall is evidence QC caught it — but owners of early-production vehicles of any new model should treat the first six months as a beta program.

## Sources

1. Sean O'Kane, "Rivian issues R2 recall for poorly tightened battery packs," TechCrunch, Oct 2, 2026. https://techcrunch.com/2026/10/02/rivian-issues-r2-recall-for-poorly-tightened-battery-packs/
2. "Rivian Recalls Early 2027 R2 Models Because AI Forgot To Tighten Bolts," AutoGuide, Oct 2, 2026. https://www.autoguide.com/auto/rivian-recalls-early-2027-r2-models-because-ai-forgot-to-tighten-bolts-44639635
3. "Rivian Tells Some R2 Owners to Stop Driving Pending High-Voltage Checks," eletric-vehicles.com, ~Sept 28, 2026. https://eletric-vehicles.com/rivian/rivian-tells-some-r2-owners-to-stop-driving-pending-high-voltage-checks/
4. "Rivian Recall Reveals at Least 2,481 R2s Built by August 10," eletric-vehicles.com. https://eletric-vehicles.com/rivian/rivian-recall-reveals-at-least-2481-r2s-built-by-august-10/
5. "Rivian Grounding Some R2s for High Voltage Battery Fastener Inspection," RivianTrackr, Sept 26, 2026. https://riviantrackr.com/news/rivian-r2-high-voltage-inspection/
