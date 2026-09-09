# Article #855 — Research Notes

## Angle
Stellantis recalled 201,976 Jeep vehicles TODAY (Sep 9, 2026) because a software error in the radio frequency hub may prevent the tire pressure monitoring system from detecting low pressure or lighting the warning. The failure mode is silence: the federally mandated warning never fires, and nothing tells the driver the warning is broken. This is the second Stellantis recall in four weeks where radio/RF-hub software disabled a federally mandated safety system: August's 844,000-vehicle recall (26V531) for the rearview camera image failing to display (FMVSS 111). Combined: over 1 million vehicles in ~4 weeks whose mandated safety warnings were eaten by infotainment-adjacent software.

## Journalist
Mia Crumplezone — Safety Engineering Editor. Technical but accessible, gets excited about safety tech, slightly judgmental about bad design. Natural sequel: she wrote the July 1, 2026 TPMS piece ("Congress Mandated a Tire Safety System That Warns You After the Damage Is Done. 600 People Die Every Year Anyway."). Beat fit: safety tech architecture.

## Kicker
Investigation

## Working Headline
"Stellantis Recalled 202,000 Jeeps Because the Radio Forgot to Watch the Tires"

Alternatives:
- "Your Tire-Pressure Warning Runs on the Radio. This Month, the Radio Forgot."
- "Two Federally Mandated Safety Warnings, One Radio, Zero Warnings: 1 Million Stellantis Vehicles in Four Weeks"

## Core Data (Primary Sources)

### The new recall (announced Sep 9, 2026)
- **Population:** 201,976 Jeep vehicles in the US [1]
- **Defect:** software error may cause TPMS to fail to detect low tire pressure or illuminate the warning light [1]
- **Regulatory:** fails to comply with US federal TPMS safety requirements (FMVSS 138); "increases crash risk" per NHTSA [1]
- **Affected:** certain Jeep Wagoneer, Grand Cherokee, Grand Cherokee L, Grand Cherokee 4xe, Grand Wagoneer, Wagoneer L, Grand Wagoneer L, Cherokee, Grand Wagoneer L PHEV [1]
- **Remedy:** dealers update the radio frequency hub software free of charge [1]
- **NHTSA campaign number:** not yet published in NHTSA's public database as of writing (announcement ~2 hours old); will be linked when available

### The pattern: August's radio-software recall
- **26V531** (announced ~Aug 13-18, 2026): ~844,000-848,000 Stellantis vehicles (2026-27 Chrysler Pacifica/Voyager, Dodge Charger, Jeep Cherokee/Compass/Gladiator/Grand Cherokee/Grand Cherokee L/Grand Wagoneer/Grand Wagoneer L/Wrangler, Ram 1500/2500/ProMaster/ProMaster EV) recalled because radio software may prevent the rearview camera image from displaying [2][3]
- **Regulatory:** fails FMVSS 111 (rear visibility); some vehicles showed a blue screen instead of the camera image [4]
- **Remedy:** radio software update, dealer or OTA [2]
- **Combined math:** ~844,000 + 201,976 = over 1,045,000 vehicles in ~4 weeks recalled because radio/RF-hub software disabled a federally mandated safety warning

### The standard (FMVSS 138)
- 49 CFR 571.138 S4.2: warning telltale must illuminate not more than 20 minutes after inflation pressure in one or more tires drops to 25% below the manufacturer's recommended cold inflation pressure [5]
- Key architectural point: the 20-minute clock never starts if the hub software never processes the sensor data. The driver gets no telltale that the telltale is broken. There is no watchdog the driver can see.

### The stakes (NHTSA)
- ~11,000 tire-related crashes per year; 600+ fatalities annually [6]
- Pre-TPMS survey: 1 in 4 cars, 1 in 3 light trucks on significantly underinflated tires; 85% of drivers never check pressure manually [6]

### Precedent: Stellantis TPMS recall history
- 2025 Wrangler recall 56C: pinched remote-start antenna cable could leave TPMS unable to detect low pressure; FMVSS 138 noncompliance [7]
- Recurring theme: TPMS as a system whose failure is invisible to the driver

## Original Contribution
The synthesis nobody drew: two FMVSS-mandated safety systems (111 rear visibility, 138 tire pressure), both implemented in/through the radio/RF-hub software stack, both recalled within four weeks for silent failure, totaling 1M+ vehicles. The article's novel claim: consolidating safety warnings into the infotainment compute stack creates a correlated failure mode — one software bug class, two federal standards, a million silent cars. Plus the watchdog argument: neither FMVSS requires the vehicle to tell you the warning system itself has failed.

## Limitations (must state in article)
- NHTSA campaign number for the Sep 9 recall not yet published; Part 573 chronology (when Stellantis found the bug, field reports) unavailable at press time
- Recall population (201,976) is not the defect count; the fraction of vehicles actually exhibiting the software error is unknown
- No crashes or injuries tied to the TPMS bug reported yet (NHTSA/Reuters); the "increases crash risk" is the regulatory determination, not an observed body count
- Whether the RF hub update will be offered OTA or dealer-only: Reuters says dealers; Stellantis may expand to OTA
- The 1.045M combined figure spans two distinct defects; it measures exposure to the pattern, not a single root cause

## Strongest Counterargument (must state at full strength)
Software consolidation is the industry's direction for good reasons: a software defect is fixable in minutes at a dealer (or overnight via OTA) versus a hardware recall that takes months and physical parts. No injuries have been reported for either recall, which suggests the detection systems (internal testing, NHTSA monitoring) caught both before the failure mode met the real world. And TPMS was always a backstop, not a primary control: the July piece established the legal threshold is already a lax 25%, and 85% of drivers never check tires manually — the marginal safety loss of a temporarily silent TPMS on top of an already-permissive system is genuinely small. The correlated-failure critique cuts both ways: one software stack also means one fix deploys everywhere at once.

## Kill Test
Pass. Announced today, 202K vehicles, FMVSS noncompliance, and the two-recall/one-radio synthesis is a genuinely novel angle, not a data dump. Distinct from the July TPMS threshold piece (different defect class, different argument). Timely: letters haven't gone out yet; readers can check VINs now.

## References
1. Reuters, "Stellantis to recall over 200,000 Jeep vehicles in US over tire-pressure monitor issue," Sep 9, 2026. https://www.reuters.com/legal/litigation/stellantis-recall-over-200000-jeep-vehicles-us-over-tire-pressure-monitor-issue-2026-09-09/
2. Democrat & Chronicle / USA Today Network, "Jeep, Chrysler, more vehicles recalled. See list of affected cars," Aug 18, 2026. https://www.usatoday.com/story/cars/recalls/2026/08/18/jeep-chrysler-dodge-car-recall-stellantis-list/91354331007/
3. CarBuzz, "All 2026 Jeep Recalls By Model In One Place" (Recall 26V531000, rearview camera, 844,027 vehicles, Aug 13, 2026). https://CarBuzz.com/jeep-latest-recalls/ ; NHTSA: https://www.nhtsa.gov/recalls?nhtsaId=26V531000
4. USA Today, "More than 239,000 Ram vehicles recalled" (blue screen instead of rearview image), Sep 4, 2026. https://www.usatoday.com/story/cars/recalls/2026/09/04/ram-1500-vehicles-recalled/91609746007/
5. 49 CFR 571.138, FMVSS 138. https://www.law.cornell.edu/cfr/text/49/section-571.138
6. NHTSA, "Safety and Savings Ride on Your Tires" (11,000 crashes, 600+ fatalities). https://www.nhtsa.gov/equipment/tires/safety-and-savings-ride-your-tires
7. FCA US recall 56C (2024-2025 Jeep Wrangler TPMS antenna cable), via autoevolution. https://www.autoevolution.com/pdf/news_attachements/stellantis-recalls-jeep-wrangler-vehicles-over-tpms-issue-256210.pdf
8. NHTSA recalls database. https://www.nhtsa.gov/recalls
