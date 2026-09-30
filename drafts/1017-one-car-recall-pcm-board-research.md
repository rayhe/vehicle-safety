# Research: #1017 — The One-Car Federal Recall (NHTSA 26V607000)

**Journalist:** Axle McScatter (Data Visualization Editor — statistical absurdities, methodology pieces)
**Kicker:** By The Numbers
**Article number:** 1017
**Slug:** `1017-one-car-recall-pcm-board`

## News peg (primary source: NHTSA API, fetched 2026-09-29)

NHTSA Campaign **26V607000**, ReportReceivedDate 09/23/2026:
- Manufacturer: Jaguar Land Rover North America, LLC
- Component: POWER TRAIN:AUTOMATIC TRANSMISSION:CONTROL MODULE (TCM/PCM/TECM)
- Summary (verbatim): "Jaguar Land Rover North America, LLC (Land Rover) is recalling **one 2026 Range Rover Sport vehicle**. The circuit board in the powertrain control module (PCM) was misaligned during production and may be deformed."
- Consequence (verbatim): "A deformed circuit board may cause a loss of drive power, increases the risk of a crash."
- Remedy: "A dealer will replace the PCM, free of charge. An interim letter notifying the owner of the safety risk is expected to be mailed November 20, 2026. An additional letter will be sent once the final remedy is available. Owners may contact Land Rover's customer service at 800-637-6837. Land Rover's number for this recall is D164."
- parkIt: false, parkOutside: false, overTheAirUpdate: false

URL: https://api.nhtsa.gov/recalls/recallsByVehicle?make=Land%20Rover&model=Range%20Rover%20Sport&modelYear=2026

## Context: five 2026 Range Rover Sport campaigns in 2026 (same API query)

1. 26V005000 (reported 09/01/2026) — certification label weight info incorrect (JLR D082; owner letters mailed Feb 27, 2026)
2. 26V097000 (reported 19/02/2026) — panoramic sunroof side finisher trim may detach (JLR D095)
3. 26V297000 (reported 12/05/2026) — seatbelt warning chime may not sound; FMVSS 208 non-compliance (JLR D105; audio amplifier replacement)
4. 26V607000 (reported 23/09/2026) — ONE vehicle, PCM circuit board misaligned/deformed (JLR D164)
5. 26V613000 (reported 24/09/2026) — 2024-2026 Range Rover Sport rear subframe cracks (JLR D165/D166; interim letters Nov 20, 2026) — covered by site article #1011

## Secondary coverage

- ConsumerAffairs "Auto Safety Recall Derby — Week of September 28" (2026-09-28): lists 26V607000 as "Powertrain Control Module May Cause a Loss of Drive Power," 2026 Range Rover Sport. URL: https://www.consumeraffairs.com/news/auto-safety-recall-derby-week-of-september-28-092826.html
- Same roundup lists the week's other campaigns: Forest River 26V608 (sleeper sofa blocks bunkroom door), Ford Ranger 26V605 (rearview camera, already covered by site #994), Nova Bus 26V604 (parking brake may activate), Forest River 26V603.

## Novel angle (kill test: PASS)

A federal safety recall campaign — campaign number, Part 573 report, interim owner letters, quarterly status reports under 49 U.S.C. § 30118(f) — filed for a population of **exactly one vehicle**. This is the smallest possible recall: n=1. The full weight of the federal recall apparatus mobilized around a single misaligned circuit board in a single SUV.

Original contribution: counting and contextualizing — the 2026 Range Rover Sport now has five distinct 2026 campaigns, and the smallest (26V607, n=1) sits one day apart from the subframe-crack campaign (26V613). The one-car recall is a window into manufacturing traceability: JLR could isolate the defect to a single VIN, which means the supplier/board-level trace worked. The absurdity is real, but so is the signal.

## Limitations

- No public Part 573 chronology retrieved yet (browser task dispatched to fetch RCLRPT PDF; fold in when it arrives).
- Unknown how the defect was discovered (supplier self-report vs. dealer finding vs. field incident). Do not speculate beyond "misaligned during production."
- No crash/injury/fire counts published in the API record — state explicitly that none are listed, not that none occurred.
- NHTSA API "ReportReceivedDate" uses DD/MM/YYYY format (23/09/2026).

## Strongest counterargument

This is the system working exactly as designed. 49 U.S.C. § 30112 requires manufacturers to report any safety-related defect regardless of population size; a single-vehicle campaign proves traceability works — JLR traced one deformed board to one VIN rather than guessing at thousands. The deformed PCM board genuinely can kill drive power at speed, and the owner of that one car deserves the same federal paper trail as the owner of one of 300,000. Mocking the paperwork misses the point: the paperwork IS the protection.

## Actionable takeaway

If you own a 2026 Range Rover Sport: check your VIN at nhtsa.gov/recalls — there are five open 2026 campaigns on this model, and one of them has a population of one. The odds it is you are effectively zero, but the other four are not.

## References (to cite inline)

1. NHTSA API, recalls by vehicle (Land Rover / Range Rover Sport / 2026), campaign 26V607000 summary. https://api.nhtsa.gov/recalls/recallsByVehicle?make=Land%20Rover&model=Range%20Rover%20Sport&modelYear=2026
2. ConsumerAffairs, "Auto Safety Recall Derby — Week of September 28," 2026-09-28. https://www.consumeraffairs.com/news/auto-safety-recall-derby-week-of-september-28-092826.html
3. NHTSA recalls database (general). https://www.nhtsa.gov/recalls
4. NHTSA FARS database (site standard). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
