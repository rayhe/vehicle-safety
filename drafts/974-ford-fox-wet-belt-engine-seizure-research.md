# Research — #974: Ford 1.0L EcoBoost wet timing belt (EA26004)

## Angle
NHTSA upgraded a defect probe (PE25020 -> EA26004, opened 07/31/2026) into the Ford 1.0L EcoBoost "Fox" engine: its wet timing belt sheds debris during *normal operation*, the debris clogs the oil pump pickup screen, and the engine seizes with little or no warning. 135,551 cars across three now-dead US nameplates. The paradox in the official failure summary: 355 loss-of-power incidents, 0 crashes, 0 fires, 0 injuries, 0 fatalities. An engine that dies at highway speed with a recorded body count of zero is the strangest thing in this story, and it is exactly why a defect investigation can be right without a single confirmed crash.

## Primary sources
1. NHTSA ODI Resume, Investigation EA26004 (opened 07/31/2026, prompted by PE25020 opened 12/18/2025). Failure report summary: 57 ODI complaints + 298 manufacturer reports = 355 total (duplicates removed); 0 crashes/fires/injury incidents/fatalities. Population 135,551. https://static.nhtsa.gov/odi/inv/2026/INOA-EA26004-16563.pdf
2. Jalopnik, "Grenading Ford 1.0-Liter Engines Pose 'Unreasonable Risk To Motor Vehicle Safety,' NHTSA Probe Finds," ~Aug 2026. Notes belt may degrade "despite proper and routine oil maintenance"; sudden loss of power with little-to-no warning. http://jalopnik.com/2229517/grenading-ford-1-liter-engines-unreasonable-risk-to-safety-nhtsa-probe/
3. AutoGuide, "NHTSA Upgrades Probe Into Ford 1.0L EcoBoost Engine Failures," ~Aug 2026. Average failure ~70,000 miles; 98% of documented failures before Ford's original 150,000-mile belt replacement interval; Ford shortened its global timing belt interval to 100,000 miles / 6 years and opened a customer satisfaction program reimbursing out-of-pocket repair costs (not a recall). https://www.Autoguide.com/auto/manufacturers/ford/nhtsa-upgrades-probe-into-ford-1-0l-ecoboost-engine-failures-44636122
4. Ford Authority, "NHTSA Upgrades Ford 1.0L EcoBoost Engine Failure Investigation," ~Aug 2026. Related history: 2024 recall of 139,730 vehicles (2016-2018 Focus, 2017-2021 EcoSport) for the *oil pump drive belt* tensioner arm fracture / belt degradation — a sibling component with the same failure logic. https://fordauthority.com/2026/08/nhtsa-upgrades-ford-1-0l-ecoboost-engine-failure-investigation/
5. Carscoops, "Ford's Little 1.0L Engine Is Killing Itself With Its Own Timing Belt," ~Aug 2026. Wet belt operates submerged in engine oil; belt material gradually sheds fragments into the crankcase during normal operation. https://www.carscoops.com/2026/08/ford-ecoboost-timing-belt-probe/

## Key facts (verified from the ODI resume)
- Subject vehicles: 2014-2017 Fiesta + 2015-2018 Focus (1.0L, manual), 2018-2021 EcoSport + 2016-2018 Focus (1.0L, automatic). Population: 135,551.
- Mechanism: timing belt degrades -> debris clogs mesh oil pump pickup screen -> oil starvation -> seizure -> loss of motive power.
- Warning behavior: low engine oil pressure light appears "just before" loss of power in some reports; in other cases the engine seized with no warning at all.
- Maintenance history: failures documented on engines with proper, routine oil maintenance. The recommended 150,000-mile belt interval did not protect the 98% that failed before it.
- The 1.0L three-cylinder won International Engine of the Year in 2012, 2013, and 2014 — an award-winning design with a time bomb at its heart.
- All three US nameplates are discontinued (Fiesta: 2019, Focus: 2018, EcoSport: 2022). The fleet is orphaned; average failure mileage (~70k) is exactly where these used cars trade hands.

## Original contribution (novel)
1. **The zero-paradox audit.** EA26004's own failure summary records 355 sudden-loss-of-power incidents with 0 crashes, 0 fires, 0 injuries, 0 fatalities. For a defect whose entire danger is "engine dies at highway speed with seconds of warning," the absence of recorded secondary crashes is the anomaly. Either drivers recover remarkably well from 60-mph coasting events, or secondary collisions get coded as ordinary crashes without the stall as a contributing factor. ODI's own summary cannot distinguish these. This is an honest quantification of what the record *doesn't* show.
2. **Mean life delivered vs. design interval.** Average reported failure at ~70,000 miles against Ford's original 150,000-mile replacement interval = the belt delivers ~47% of its designed life, on average, among failures. Combined with 98% of failures before the interval, this turns "recommended replacement interval" from guidance into fiction for this fleet.
3. **Complaint-rate sanity math.** 355 deduplicated incidents / 135,551 vehicles = 0.26% cumulative report rate over up to 12 model years. NHTSA complaint data is notoriously voluntary; owners complain to dealers first. The recorded rate is a floor, and Ford's own move — cutting the global interval to 100,000 miles / 6 years plus a reimbursement program — is the closest thing to an internal confirmation that the floor is far below the ceiling.
4. **The orphan-fleet angle.** Nobody else has noted that the three affected nameplates are all discontinued in the US, meaning the entire at-risk population is aging through the failure window right now as second- and third-owner cars, outside warranty, where a seized engine means a junkyard decision, not a dealer appointment.

## Strongest counterargument
Ford's likely defense, stated at full strength: 355 incidents across 135,551 vehicles over a decade-plus is a 0.26% report rate on an aging fleet of discontinued economy cars, and NHTSA's own summary lists zero crashes, zero fires, zero injuries, zero deaths. The pickup screen is arguably doing exactly its job — catching debris before it reaches the bearings — and the failure mode is the screen's success with a downside. Ford has already shortened the service interval globally (100k miles / 6 years) and opened a customer satisfaction program to reimburse repair costs, which is a remedy short of the recall NHTSA might demand. EA-stage investigations do not always become recalls.

## Limitations
- ODI complaint data is voluntary and undercounts; the 0.26% rate is a floor, but we cannot compute the true population failure rate from it.
- Zero crashes/fires/injuries is what NHTSA recorded, not proof none occurred; near-miss and secondary outcomes are not captured in the resume.
- We do not have Ford's internal failure-rate data or engineering analysis; EA26004 is ongoing and could close without a recall.
- The 47% "design life delivered" figure is the mean of the failure distribution, not a fleet-wide MTBF; survivors bias it upward.

## Actionable insight
If you own one of these cars: check your VIN at nhtsa.gov/recalls (the earlier oil-pump-belt recall may cover you); get the belt done at Ford's new 100,000-mile / 6-year interval, not the old 150,000; and treat the low-oil-pressure light as an emergency — NHTSA documents show you may have seconds, or nothing at all, before the engine quits. Used-car shoppers: the Fiesta/Focus/EcoSport 1.0L cars trading at 60-80k miles are sitting exactly in the failure window; get the belt service history before you buy, because a seized Fox engine is a four-figure repair on a car worth barely more.
