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

## Part 573 detail (RCLRPT retrieved 2026-09-29, via nhtsa.gov)

- RCLRPT: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V607-0797.pdf (4 pages, submitted 09/23/2026, JLR D164). RCAK: https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V607-7415.pdf. No separate chronology document; chronology is in the RCLRPT (pages 2-3).
- Defect (verbatim): "A concern has been identified where a misalignment may have occurred during printed circuit board assembly resulting in potential deformation to the circuit board within the Powertrain Control Module (PCM)." Safety risk: "Deformation of the circuit board in the PCM can result in various effects including engine stall without prior warning."
- **Discovery: supplier self-report.** On 18 Aug 2026, PCM supplier Robert Bosch Elektronik GmbH (Salzgitter, Germany) informed JLR that a review of production records had identified modules with anomalous production parameters; JLR then traced affected modules to vehicles.
- 24 Aug 2026: pre stop-shipment meeting confirmed at-risk PCMs had been assembled into new vehicles; quarantine notice + Update Prior to Sale; PSCC investigation requested.
- 16 Sep 2026: PSCC Decision Forum agreed it constitutes a safety defect, requested recall. 23 Sep 2026: Part 573 submitted.
- Population: exactly 1 vehicle ("Total number of potentially involved: 1", 100% estimated defective). One 2026 Range Rover Sport, production date 02/16/2026, built at Solihull Vehicle Assembly Plant. Recall population basis: "supplier analysis of build records, matched against JLR production records."
- Nuance: chronology notes 4 additional vehicles were manufactured in this condition but were in customers' hands (US campaign = exactly 1).
- Crashes/injuries/fires: ZERO. "JLR has not received any claims or field reports in the US related to this issue. There have been no reported accidents, injuries or fires in the US as a result of this concern."
- Remedy: repair — replace PCM (part R8A2-14C568-JB), no charge; replacement modules confirmed defect-free; supplier QC updated. Dealer notifications Oct 7, 2026; owner letters on or before Nov 20, 2026.
- 5th reference: RCLRPT PDF; 6th: RCAK PDF.

## Novel angle (kill test: PASS)

A federal safety recall campaign — campaign number, Part 573 report, interim owner letters, quarterly status reports under 49 U.S.C. § 30118(f) — filed for a population of **exactly one vehicle**. This is the smallest possible recall: n=1. The full weight of the federal recall apparatus mobilized around a single misaligned circuit board in a single SUV.

Original contribution: counting and contextualizing — the 2026 Range Rover Sport now has five distinct 2026 campaigns, and the smallest (26V607, n=1) sits one day apart from the subframe-crack campaign (26V613). The one-car recall is a window into manufacturing traceability: JLR could isolate the defect to a single VIN, which means the supplier/board-level trace worked. The absurdity is real, but so is the signal.

## Limitations

- Part 573 RCLRPT retrieved 2026-09-29: discovery was a Bosch supplier production-record review (Aug 18, 2026), not a dealer/warranty finding. Zero US claims, accidents, injuries, fires per JLR.
- Chronology mentions 4 additional vehicles built with suspect PCMs in customers' hands; US campaign = exactly 1.
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
