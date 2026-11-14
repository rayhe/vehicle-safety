# Research: #1499 — Jaguar Had Zero Recalls in 2026. Land Rover Had All Seven.

**Number:** 1499
**Slug:** 1499-jlr-recall-census-7-jaguar-zero
**Journalist:** Rex Driverton (Senior Crash Correspondent; deadpan paradox beat — the 7-0 badge split inside one company is his kind of story)
**Kicker:** Investigation
**Date:** November 13, 2026
**Target ship_date:** 2028-08-20 (1 day after #1498's 2028-08-19)

## Angle (1-2 sentences)

Jaguar Land Rover is one company, and in 2026 its two badges filed like two different companies: Jaguar filed zero recalls, Land Rover filed all seven. The seven campaigns span the full absurdity range of the modern recall system, from a fuel tank recall covering six Defenders to an airbag recall covering 250,857 SUVs whose fix is a syringe of gel.

## Kill test

- **Genuinely newsworthy?** Yes. The recall-census series has now counted twenty car companies on the corrected-vocabulary method; Jaguar Land Rover is the 21st and the last major manufacturer without a census. The 7-0 split is the hook no other census in the series has produced: one manufacturer, two badges, a shutout on one side.
- **Novel angle on data?** Yes. No JLR census exists on the site. The count (7), the per-model table, the unit distribution (two campaigns carry 99.75% of all units), and the cross-brand ranking are computed from the NHTSA API, not quoted. Two of the seven campaigns were covered before as standalones (26V678 as #1251, 26V389 as an unnumbered research file), but never as a census — the same was true of the Honda census (#1476), whose campaigns had all been covered individually.
- **Killed angles this run (duplicate screen):** Waymo school-bus recall query RQ26006 is #1461 (and #1445, #1177). Honda steering divide-by-zero 26V721 is #1457. Harley gear-sensor 26V730 is #1462. BMW water-pump recall-of-recall 26V733 is #1490. Ford Explorer airbag-burn probe PE26008 is #1447. IIHS Kicks/RAV4 October round is #1244 and #1278. Ford Maverick frozen-camera recall query RQ26004 is #1311 and #1345. Every fresh news lead from the November cycle is already on the site; the census is the uncovered angle.
- **3+ primary sources?** Yes. (1) NHTSA recalls API census, run Nov 13, 2026; (2) NHTSA VPIC API canonical 2026 model list; (3) Part 573 reports for 26V163, 26V263, 26V297, 26V097 (unit counts, defect estimates); (4) NHTSA acknowledgement letters (RCAK) for 26V263; (5) prior census research files (#1476, #1479, #1480, #1481, #1483, #1495) for the comparison table.
- **Verdict:** PROCEED.

## Primary sources

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle), census conducted Nov 13, 2026. Method: VPIC canonical 2026 JLR light-vehicle list (Jaguar: F-PACE; Land Rover: Defender, Discovery, Discovery Sport, Range Rover, Range Rover Evoque, Range Rover Sport, Range Rover Velar), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, and PHEV suffix variants (48 queries); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1499-jlr-recall-census-raw.json; deduped campaigns at drafts/1499-jlr-recall-census-campaigns.json. **Date-format trap (same as #1476):** ReportReceivedDate comes back as DD/MM/YYYY ("18/03/2026"), not ISO. **API 400 trap (same as #1476):** the API returns HTTP 400 when a make/model/year combination has no recalls at all — "Discovery Sport" 2026 400s, as do all suffix variants and the VPIC artifacts "Black Jaguar" and the legacy "90/110/88-inch WB" Series entries. A 400 is an empty result, not a failed query. https://www.nhtsa.gov/recalls
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model lists for makes "jaguar" and "land rover", Nov 13, 2026.
3. **Part 573 Safety Recall Report 26V163** (JLR D098/D113): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V163-1114.pdf — total potentially involved 582 (498 in the US and Federalized Territories), estimated 100% with defect; 2026 Defender built Nov 3, 2025–Mar 24, 2026 at Nitra; third-row lower seat belt anchorage bracket weld stud of insufficient ISO strength due to material contamination at the supplier; 84 vehicles added Apr 22, 2026 after the PSCC found at-risk parts missed by the initial recall and quarantine.
4. **NHTSA acknowledgement letter, 26V263** (Apr 29, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V263-4095.pdf — potential units affected **6**; 2026 Defender fuel tank walls too thin.
5. **Part 573 Safety Recall Report 26V297** (JLR D105): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V297-6747.pdf — total potentially involved **76** (30 Velar + 30 Range Rover Sport + 16 Range Rover); audio amplifiers water-damaged in manufacturing, killing the seat belt reminder chime; FMVSS 208 noncompliance.
6. **Part 573 Safety Recall Report 26V097** (JLR D095), via oemdtc mirror of the NHTSA PDF: total potentially involved **178** (91 Range Rover + 87 Range Rover Sport), estimated 100% with defect; panoramic sunroof side finisher adhesion failed after factory rework; 68 US claims and field reports, 0 accidents, injuries, or fires.
7. **NHTSA recall record 26V389000** (via Pickup Truck Talk, Jul 3, 2026, quoting the NHTSA notice; corroborated by Morningstar/Dow Jones, Jun 25, 2026, and the site's own research file `land-rover-clockspring-gel-fix-research.md`): **250,857** units (97,552 Defender + 83,620 Discovery + 69,685 Range Rover); driver's airbag clockspring connector fretting corrosion; 0 US claims of airbag non-deployment, 0 accidents, injuries, or fires; warning lamp illuminates 300–400 miles before the potential non-deployment point; remedy is protective lubricant gel on the connector terminals.
8. **NHTSA recall record 26V678000** (via Reuters, Oct 23, 2026; site research #1251): **93,997** Range Rovers (2022–2026); rearview camera drain holes insufficient, water damages camera; 2,295 US claims and field reports, 0 injuries, accidents, or fires; remedy is drilling additional drain holes in the tailgate trim.
9. **CarBuzz, "All 2026 Land Rover Recalls By Model In One Place"** (updated Apr 28, 2026) — independent confirmation of 26V005 (**8** Range Rover Sport, certification-label weight error) and 26V097 (178). https://CarBuzz.com/land-rover-latest-recalls/
10. **Prior census research files** for the comparison table: #1476 (Honda 4; method), #1477 (Hyundai 15, Kia 4), #1479 (Stellantis 27), #1480 (Nissan 7), #1481 (Subaru 5), #1483 (BMW 7), #1495 (Volvo 12).

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Badge | Campaigns | Campaign-units |
|---|---|---|
| Jaguar | **0** | 0 |
| Land Rover | **7** | 345,704 |
| **Jaguar Land Rover** | **7** | **345,704** |

### The 7 campaigns

| Campaign | Date filed | Component | What it is | Units |
|---|---|---|---|---|
| 26V005 | Jan 9 | Labels | 2026 Range Rover Sport certification label lists the wrong vehicle weight. Overloading risk. Fix: a new sticker. | 8 |
| 26V097 | Feb 19 | Sunroof trim | 2023–2026 Range Rover + Range Rover Sport panoramic sunroof side finishers may detach; factory rework glue failed. 68 claims, 0 injuries. | 178 |
| 26V163 | Mar 18 | Seat belts | 2026 Defender third-row seat belt anchorage weld stud too weak (supplier material contamination). 100% defect estimate. | 582 (498 US) |
| 26V263 | Apr 23 | Fuel tank | 2026 Defender fuel tank walls manufactured too thin; leak + fire risk in a crash. | 6 |
| 26V297 | May 12 | Seat belt warning | 2026 Velar, Range Rover Sport, Range Rover audio amplifiers water-damaged in manufacturing; no seat belt chime. FMVSS 208. | 76 |
| 26V389 | Jun 13 | Airbags | 2020–2026 Defender, 2021–2026 Discovery, 2022–2026 Range Rover driver's airbag clockspring corrodes from normal driving vibration; airbag may not deploy. Fix: gel. 0 US non-deployments, 0 injuries. | 250,857 |
| 26V678 | Oct 15 | Rearview camera | 2022–2026 Range Rover tailgate trim lacks drain holes; trapped water kills the rearview camera. Fix: drill holes. 2,295 claims, 0 injuries. | 93,997 |

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

| Model | Campaigns |
|---|---|
| Range Rover | 4 (26V097, 26V297, 26V389, 26V678) |
| Range Rover Sport | 3 (26V005, 26V097, 26V297) |
| Defender | 3 (26V163, 26V263, 26V389) |
| Discovery | 1 (26V389) |
| Range Rover Velar | 1 (26V297) |
| Range Rover Evoque | 0 |
| Discovery Sport | 0 |
| Jaguar F-PACE | 0 |

### The skew (original math)

- **Total campaign-units: 345,704.** Two campaigns carry 344,854 of them (99.75%): 26V389 (250,857, 72.6%) and 26V678 (93,997, 27.2%).
- **The other five campaigns combined: 850 units (0.25%).** Five of the seven campaigns cover fewer than 600 vehicles each (8, 6, 76, 178, 582).
- **Smallest-to-largest ratio: 6 to 250,857**, a 41,810x spread — the widest in the census series so far (BMW's was 1 to 318,495).
- **Zero park-outside, zero do-not-drive, zero over-the-air fixes** across all seven campaigns (all three flags false in every API record).
- **100% defect estimates** on four campaigns: 26V097, 26V163, 26V389, 26V678.
- **Zero injuries reported** in the verified filings (26V097, 26V389, 26V678: explicitly 0; the other four API summaries state no injury counts).
- **Jaguar's only 2026-MY recall is a 2025 filing:** 25V705 (filed Oct 16, 2025) covers the 2026 F-PACE and Range Rover Evoque for moisture in the gear shift module. It does not count under the census's 2026-filing rule.

### Cross-brand ranking (corrected counts, as published in each brand's census)

| Brand | Campaigns | Brand | Campaigns |
|---|---|---|---|
| Ford | 41 | Subaru | 5 |
| Stellantis | 27 | Lucid | 5 |
| GM | 15 | Honda | 4 |
| Toyota | 15 | Kia | 4 |
| Hyundai | 15 | Volkswagen | 4 |
| Volvo | 12 | Tesla | 4 |
| Mercedes | 8 | Rivian | 3 |
| BMW | 7 | Genesis | 3 |
| Nissan | 7 | Audi | 1 |
| **Jaguar Land Rover** | **7** | Mazda | 0 |
| Lincoln | 10 (counted separately, #1478) | Porsche | 0 |

JLR ties BMW and Nissan at 7, mid-pack. The ranking counts campaigns, not units: JLR's 345,704 campaign-units would rank far higher on a units table, driven almost entirely by 26V389.

## Original contribution

1. **The 7-0 badge split.** No prior census in the series has produced a shutout inside one company. Jaguar's 2026 lineup is a single model (F-PACE) and it filed nothing in 2026; Land Rover filed all seven. The split is the story, and it is computed, not quoted.
2. **The skew.** 99.75% of JLR's 2026 recall units sit in two campaigns; the other five total 850 vehicles. The census counts campaigns, so the headline number (7) and the human number (345,704 units, of which 344,854 are two old-model defects) tell opposite stories about how bad JLR's year was. Both are in the table.
3. **The small-batch pattern.** Five of the seven campaigns are tiny manufacturing escapes (6 fuel tanks, 8 labels, 76 amplifiers, 178 trim pieces, 582 weld studs) — quality-control failures caught in batches of dozens, not design failures. The two big ones are the opposite: design-level defects (a clockspring that corrodes from the act of driving; a camera housing without enough drain holes) affecting a quarter-million older SUVs.
4. **The Defender carries the count.** Three of the seven campaigns touch the Defender, the brand's go-anywhere flagship; the Range Rover carries four. The two models JLR sells on invincibility are the two most-recalled nameplates in the census.
5. **21st brand counted**, completing the census series for every major manufacturer selling in the US except the ultra-low-volume exotic badges.

## Strongest counterargument

Seven campaigns is mid-pack, and the count flatters the severity in both directions at once. The two big campaigns (26V389, 26V678) mostly cover older vehicles — a 2020 Defender is in the airbag recall, and only a fraction of the 345,704 units are 2026 models. The genuinely-2026 exposure is five tiny campaigns totaling 850 vehicles, and zero injuries were reported in any of the verified filings. Jaguar's zero may say less about quality than about arithmetic: one model, one nameplate, and a company that has spent 2026 winding down its old lineup before an all-electric relaunch. And the census's own scope hides JLR's biggest 2026 recall: the 170,169-unit mild-hybrid DC-DC converter recall (26V248, April 2026) covers 2019–2024 models only, so it scores zero here — the count measures new-model quality, not the company's whole recall year. A reader who wants the full picture needs both numbers.

## Limitations

- **Snapshot date:** counts are as of Nov 13, 2026. Campaigns filed later in 2026 are not included; later censuses in the series will have later snapshot dates, so cross-brand comparisons carry a few days of filing drift (same caveat as #1476).
- **Scope is 2026-model-year vehicles, 2026 filings.** Campaigns covering only pre-2026 models are excluded by design, including the 170,169-unit mild-hybrid DC-DC converter recall (26V248, April 2026; remedy still under development at filing; now subject to a proposed class action) and a 15,535-unit Discovery rearview-camera recall (2021–2025 models). The census measures new-model-year recall activity, not JLR's total 2026 recall volume.
- **Unit counts** come from Part 573 reports and press quoting NHTSA filings; 26V163's 582 is the global total (498 in the US and Federalized Territories). Campaign-units double-count vehicles appearing in more than one campaign (a 2022–2026 Range Rover can be in both 26V389 and 26V678).
- **API 400 = no rows** is the method's standing assumption from #1476; a model-name mismatch in NHTSA's database would look identical to a true zero. The Discovery Sport and Evoque zeros rest on that assumption plus the absence of any such campaign in the other models' query results.
- **VPIC artifacts ignored:** "Black Jaguar" and the legacy "90/110/88-inch WB" Series entries are not real 2026 models.
- **Injury counts** are as stated in the verified filings (0 for 26V097, 26V389, 26V678); the other four campaigns' API summaries do not state injury counts, and none was pulled from their Part 573 reports.
