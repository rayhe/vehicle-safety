# Research: #835 — Rex Driverton — "GM Said Its Brake Failures Only Happen After You've Stopped. 745 Incident Reports Say Otherwise."

## Slug
`gm-eboost-brake-failure-while-driving`

## Angle (1-2 sentences)
NHTSA escalated its GM brake investigation to a full Engineering Analysis (EA26006, opened Aug 21, 2026) covering ~1.16 million vehicles — because drivers keep reporting brake assist dying *while they're braking*, which contradicts GM's two-year-old explanation that the failure only bites after the car has already stopped. The scope now includes every GM vehicle with the eBoost system plus the Honda Prologue and Acura ZDX, which are GM-built.

## Kill test
- Genuinely newsworthy? Yes. EA26006 is the last investigative step before NHTSA can demand a recall; opened Aug 21, 2026 (17 days ago). 745 incident reports, 22 crashes/fires, 5 injury incidents, 6 injuries. Covered by WSJ, TechCrunch, Autoblog, Carscoops, Electrek (Aug 24-27, 2026).
- Novel angle? Yes. No existing story or draft covers EA26006, the eBoost system, or the spindle-fracture-vs-mid-braking contradiction. Existing brake stories: `brake-pedal-before-brakes-work`, `fmvss-135-thirty-one-year-old-brake-standard`, `ford-cant-park-nhtsa-removes-brake-pedals`, `grand-wagoneer-born-without-brakes`, `nhtsa-brake-pedal-removed-software-recalled`, `volvo-camera-fix-broke-brakes` — all different defects. The "GM's failure sequence vs the drivers' failure sequence" framing and the Honda/Acura peer-vehicle kicker are original.
- Data-backed? Yes: NHTSA ODI Opening Resume (primary, read in full), WSJ, TechCrunch, Autoblog, Carscoops, Electrek, The BRAKE Report, gm-trucks.com.

## Primary sources
1. **NHTSA ODI Opening Resume, EA26006** (opened 08/21/2026, prompted by PE24011): https://static.nhtsa.gov/odi/inv/2026/INOA-EA26006-17028.pdf — read in full, all numbers below verified against it.
   - Population: 1,164,820 (estimated). Subject: "Electronic Brake Module Component Failure." Problem: "Failure of eBoost system causing loss of braking and steering assist functions."
   - Failure reports: 745 total incidents (227 ODI complaints + 531 manufacturer EWR reports, duplicates eliminated). 22 crashes/fires (21 ODI-confirmed + 1 manufacturer). 5 injury incidents, 6 injuries. 0 fatalities.
   - GM's stated failure sequence: spindle fracture in eBoost -> ABS/stability/traction functional until complete stop -> then all lost -> 3 DTCs (EBCM performance criteria) -> chime + "Service Brake System" message + MILs -> speed limited to 70 KPH (43 MPH).
   - The contradiction: "Some of these reports describe symptoms inconsistent with GM's description of a spindle failure. These reports allege an immediate loss of brake assist functionality as opposed to the loss occurring after the vehicle comes to a complete stop." ODI: "The sudden loss of brake assist during a braking event could result in extended braking distance, which increases the risk of a crash or injury."
   - Vehicles: 2023-2026 MY Cadillac Lyriq, Chevrolet Colorado, GMC Canyon; 2024-2026 MY Buick Enclave, Envision, Chevrolet Blazer EV, Equinox EV, Traverse, Cruise Origin, GMC Acadia; 2025-2026 MY Cadillac Celestiq, Optiq. Peer vehicles: 2024-2026 MY Acura ZDX and 2024-2026 MY Honda Prologue "manufactured by GM in a joint venture with Honda."
2. **WSJ, "NHTSA Expands Investigation Into GM Braking System," ~Aug 24, 2026** (Katherine Hamilton): https://www.wsj.com/business/autos/nhtsa-expands-investigation-into-gm-braking-system-c92725c5 — EA upgrade, 1.2M vehicles, 745 incidents / 22 crashes-or-fires / 5 injury incidents. GM's position quoted; driver reports allege immediate loss instead.
3. **TechCrunch, "Brake problems in GM EVs draw greater federal scrutiny," Aug 24, 2026**: https://techcrunch.com/2026/08/24/brake-problems-in-gm-evs-draw-greater-federal-scrutiny/ — EA is the highest ODI investigation level, "often a step the office takes before telling a company to issue a recall."
4. **Autoblog, "GM Brake Investigation Explodes From One Cadillac to 1.2 Million Vehicles," Aug 24, 2026**: https://www.autoblog.com/news/gm-brake-investigation-explodes-from-one-cadillac-to-1-2-million-vehicles + vehicle list: https://www.autoblog.com/news/nhtsa-investigates-over-1-million-general-motors-honda-vehicles-brake-issues-could-cause-crash
5. **Carscoops, "US Escalates Probe Into 1.1 Million GM Vehicles," Aug 2026**: https://www.carscoops.com/2026/08/gm-brake-failure-investigation/ — PE24011 opened April 11, 2024 on 2023 Lyriq complaints; escalation after continued reports.
6. **Electrek, "Over 1.1M GM vehicles, including EVs, under NHTSA investigation," Aug 24, 2026**: https://electrek.co/2026/08/24/over-1-1m-gm-vehicles-evs-nhtsa-investigation/
7. **The BRAKE Report, "GM eBoost Brake Investigation Expands to 1.16M Vehicles," Aug 2026**: https://thebrakereport.com/gm-eboost-brake-investigation-nhtsa-ea26006/ — EA typically completes within 18 months; no defect determination yet.
8. **gm-trucks.com, "NHTSA Escalates Brake Probe: Colorado, Canyon Included," Aug 2026**: https://www.gm-trucks.com/nhtsa-eboost-brake-investigation-colorado-canyon/
9. **aeromechinsider, "NHTSA Expands GM Brake-Assist Probe to 1.16 Million Vehicles After 745 Incidents," Aug 27, 2026**: https://aeromechinsider.com/2026/08/27/nhtsa-expands-gm-brake-assist-probe-to-1-16-million-vehicles-after-745-incidents/ — GM's 2023 Lyriq OTA software program (81.7% completion June 2024) was NOT a recall.

## Original computations (the novel contribution)
1. **The timeline**: PE24011 opened April 11, 2024 -> EA26006 opened Aug 21, 2026 = 28+ months of investigation, 745 incident reports, and still no recall. NHTSA's ladder has four rungs (preliminary evaluation -> engineering analysis -> recall request); this just climbed to rung three.
2. **The two failure sequences, formalized**:
   - GM's version: spindle fractures during ABS event -> everything works -> car stops -> THEN assist dies (with warnings + 43 mph cap).
   - Drivers' version: braking mid-traffic -> pedal goes hard -> assist gone NOW, car still moving.
   - NHTSA's resume quotes both and sides with neither yet — but the EA exists precisely because the second sequence keeps showing up.
3. **The peer-vehicle kicker**: Honda Prologue and Acura ZDX are included as "peer vehicles" because they were "manufactured by GM in a joint venture with Honda" with the same eBoost hardware. A Honda under a GM brake-failure investigation.

## Key numbers for the piece
- EA26006 opened 08/21/2026; PE24011 opened 04/11/2024.
- 1,164,820 estimated vehicles; 14 nameplates (12 GM + 2 GM-built Honda/Acura).
- 745 incidents; 22 crashes/fires; 5 injury incidents; 6 injuries; 0 fatalities.
- Speed cap on failure: 43 mph. DTCs: 3 (EBCM). Warning: "Service Brake System."

## Limitations (must appear in article)
- EA is not a defect finding and not a recall; it can end with no action. No fatalities recorded across 745 incidents.
- GM's position is that conventional (unassisted) braking remains available — the car still stops, it just demands much more pedal force. The disputed question is only whether assist loss happens mid-braking or only post-stop.
- "Inconsistent with GM's description" is ODI's characterization of driver reports, not proof of a different failure mode.
- FARS 2014-2023 predates nearly all affected model years; no fatality-rate cross-tab is possible for these vehicles.

## Strongest counterargument (must appear in article)
GM's engineering case is genuinely reassuring on paper: even in the failure mode it acknowledges, the hydraulic circuit still works — you keep a heavy but functional pedal, get a dashboard full of warnings, and the car caps itself at 43 mph. Zero fatalities in 745 incidents suggests the real-world consequence so far is extended stopping distance, not brakeless cars. NHTSA may find the mid-braking reports are mischaracterized post-stop events and close the EA with nothing.

## Actionable insights (hard gate)
- Own a 2023-2026 Lyriq/Colorado/Canyon, 2024-2026 Enclave/Envision/Blazer EV/Equinox EV/Traverse/Acadia, 2025-2026 Celestiq/Optiq, 2024-2026 Prologue/ZDX? Know the symptoms: suddenly hard brake pedal, "Brake System Failure" or "Service Brake System" message, chimes, MILs, car capping itself at 43 mph.
- If it happens: press harder (unassisted braking still works), pull over safely, and file a complaint at NHTSA's safercar.gov — ODI complaints are literally what escalated this from a PE to an EA.
- Check your VIN at nhtsa.gov/recalls, but know there is NO recall yet — an EA is an investigation, not a remedy.
