# Research: #1075 — "Ford Recalled 11,405 Rangers. Then It Recalled the Replacement Screens Too."

**Journalist:** Clara Rollover (Consumer Safety Advocate)
**Kicker:** The Gap
**Slug:** `1075-ranger-recall-follows-the-part`
**Date:** 2026-10-04

## Angle (1-2 sentences)
Ford's September 2026 Ranger screen recall is actually TWO recalls: 26V605000 covers 11,405 factory 2026 Rangers, but 26E065000 — an equipment campaign — covers 46 of the same 10.1-inch screens sold as SERVICE REPLACEMENT parts for 2024–2026 Rangers. The recall follows the part, not the VIN: a truck whose screen was swapped at a dealer for an unrelated failure can carry a recalled display even though its VIN was never in the factory campaign.

## Kill test
- Genuinely newsworthy? Yes. The 26V605 vehicle campaign is widely covered (USA Today, Autoblog, Freep), but the parallel equipment campaign 26E065000 is nearly invisible in coverage — Ford Authority only wrote it up today (Oct 4, 2026). Equipment recalls are a poorly understood corner of the recall system.
- Novel angle? Yes. Site covered the counterfeit-capacitor vehicle campaign (#994) but never the equipment campaign, and never the VIN-vs-part tracking gap. Most outlets report "11,405 Rangers recalled" as one campaign. It is two.
- Not a data dump: this is a mechanism story — how equipment recalls work and the specific consumer action (check the part, not just the VIN).

## Verified facts (do not invent others)
- **NHTSA 26V605000** (Ford 26C42), ReportReceived 09/22/2026 (verified via NHTSA recalls API this run): certain 2026 Ranger vehicles with 10.1-inch center stack screen; "screen may lose power and fail to display the rearview camera image"; fails FMVSS 111 "Rear Visibility." 11,405 units. Build window Apr 21 – Sep 3, 2026 (per #994 research).
- Root cause per safety recall report: cracked multilayer ceramic capacitor (MLCC), suspected counterfeit; failure chain cracked MLCC → short → blown fuse → dead SYNC 4 screen → no backup camera. 15 warranty claims in North America, no accidents or injuries reported.
- Remedy under development for both campaigns. Interim owner letters for the vehicle campaign expected Oct 5, 2026. VINs searchable on NHTSA.gov from Sept 25, 2026.
- **NHTSA 26E065000** (Ford 26C42 equipment filing): 46 units — 10.1-inch center stack screens "installed in 2024-2026 Ranger vehicles during service." Same defect, same FMVSS 111 noncompliance. Screens produced Dec 1, 2025 – Aug 14, 2026 (Ford Authority, Oct 4, 2026).
- Ford Customer Service Division issued a Quality Reject Notification on Sept 2, 2026 to quarantine suspect service inventory (roadethos; single source — attribute carefully).
- Discovery timeline: Aug 14, 2026 warranty-claim trend flagged by Michigan Assembly Plant team → Aug 20 Critical Concern Review Group confirmed cracked capacitor root cause on six returned parts → Sept 23 recall filed (roadethos).

## Sources (3+ primary)
1. NHTSA recalls API, verified live this run (26V605000, ReportReceived 22/09/2026, BACK OVER PREVENTION:DISPLAY FUNCTION, FMVSS 111): https://api.nhtsa.gov/recalls/recallsByVehicle?make=ford&model=ranger&modelYear=2026
2. NHTSA recalls database: https://www.nhtsa.gov/recalls
3. oemdtc.com, "NHTSA Recall 26E065" (46 units, service-installed screens, interim letters Oct 5, 2026): https://oemdtc.com/recall/26E065000/
4. Ford Authority, "2024-2026 Ford Ranger Center Stack Screen Recalled Over Power Issue" (Oct 4, 2026; 46 service screens, production window, Ford ref 26E065): https://fordauthority.com/2026/10/2024-2026-ford-ranger-center-stack-screen-recalled-over-power-issue/
5. USA Today, "Ford recalls over 11K vehicles" (Sept 28, 2026; 26C42, 11,405 units): https://www.usatoday.com/story/cars/recalls/2026/09/28/ford-recalls-vehicles-2026-ford-ranger-model/91983495007/
6. Detroit Free Press, "Ford files 4 new recalls" (Sept 14, 2026; context on the recall batch): https://www.freep.com/story/money/cars/ford/2026/09/14/ford-recall-fuel-tank-pickup-trucks/91756597007/

## Original contribution
The VIN-vs-part tracking gap, stated plainly: the 11,405-truck vehicle campaign is VIN-scoped and VIN-searchable; the 46-screen equipment campaign tracks components through dealer service records. A 2024 or 2025 Ranger — model years outside the vehicle campaign entirely — that received a replacement screen between Dec 2025 and Aug 2026 could carry the defective display. Nobody has written the consumer instruction for this: if your Ranger's screen was replaced in that window, call the servicing dealer and ask whether the part falls under 26E065000; the VIN lookup alone is the wrong tool for a parts-scoped recall.

## Strongest counterargument
Ford's system worked here. Warranty trend analysis caught a counterfeit component within weeks of the first claims, the root cause was confirmed on six teardowns, the population was sized in under a month, and service inventory was quarantined Sept 2 — before the recall was even filed. The equipment campaign exists precisely because the system tracks service parts; this is the recall apparatus functioning as designed, not a loophole. And 46 units is tiny — the individual risk is minuscule.

## Limitations
- Exact installed-vs-quarantined split of the 46 service screens is not public; some may never have left dealer shelves.
- Whether NHTSA's VIN tool surfaces equipment-campaign vehicles is ambiguous (oemdtc shows VIN-searchable language on the 26E065 page, likely boilerplate). The article must not overclaim that "the VIN lookup misses it" — frame as: the vehicle campaign's VIN list is the wrong population; the equipment campaign is part-number-scoped, so confirm with the dealer/part record.
- The Sept 2 quarantine detail comes from a single secondary source (roadethos); attribute, don't assert as Ford-confirmed.
- No accidents or injuries reported for either campaign — state this; the risk is prospective, not realized.

## Actionable takeaways (required)
1. Own a 2026 Ranger with the 10.1-inch screen? Check your VIN at nhtsa.gov/recalls (campaign 26V605000); interim letters mail Oct 5.
2. Had ANY 2024–2026 Ranger's center screen replaced at a dealer between Dec 2025 and Aug 2026? Call that dealer, reference equipment campaign 26E065000, and ask for the replacement part's production date — the VIN lookup is not the right check for a service part.
3. Screen goes black in reverse before the fix arrives? Treat the truck as having no backup camera: FMVSS 111 exists because backover crashes kill — walk around the truck, use mirrors, get a spotter.
