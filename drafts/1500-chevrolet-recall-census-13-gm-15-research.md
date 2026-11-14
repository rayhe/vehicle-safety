# Research: #1500 — Chevrolet Carried 13 of GM's 15 Recalls. Cadillac Got the Other Two.

**Number:** 1500
**Slug:** 1500-chevrolet-recall-census-13-gm-15
**Journalist:** Axle McScatter (Data Visualization Editor; statistical roundups, methodology pieces — a brand census with a broken OTA metric is his beat)
**Kicker:** By The Numbers
**Date:** November 13, 2026
**Target ship_date:** 2028-08-21 (1 day after #1499's 2028-08-20)

## Angle (1-2 sentences)

General Motors filed 15 recall campaigns on its 2026-model-year vehicles this year, and Chevrolet's name is on 13 of them. The two campaigns Chevrolet escaped are both Cadillac-only, which means the brand that sells the most cars in America also carries nearly all of its parent company's recall load — and the van that carries the worst of it is the same Express that GM has now recalled for the same loose steering nut twice.

## Kill test

- **Genuinely newsworthy?** Yes. Chevrolet is the biggest-selling American brand and the 22nd brand counted in the census series, and the first census of the series to produce a within-company split from the top down: 13 of GM's 15 campaigns touch a Chevrolet. The count (13), the per-model table, the unit distribution (two campaigns carry 86.0% of all campaign-units), the 51,085x smallest-to-largest spread (widest in the series), and the OTA-flag finding are computed from the NHTSA API and Part 573 reports, not quoted.
- **Novel angle on data?** Yes. No Chevrolet census exists on the site. The GM group census (#1474, Nov 11) counted 15 campaigns but never split them by brand; this is the first per-brand count for Chevrolet, GMC, Buick, or Cadillac. Seven of the thirteen campaigns were covered before as standalones (26V539 as #1057, 26V289 as #941/#1031, 26V494 as gm-ten-vehicle-battery-swap-fire-recall, 26V399/26V718 as gm-express-thirty-years-cant-tighten-a-nut), but never as a census — the same was true of the Honda census (#1476), whose campaigns had all been covered individually.
- **Original contribution:** (1) the Chevrolet 13 count with per-model table; (2) the OTA-flag finding — NHTSA's API flags 0 of 13 campaigns as over-the-air, but GM's own remedy text says two of them (26V129, 26V717) are fixed by dealer or OTA update, so the flag the last three censuses quoted is wrong; (3) the 2026-Chevrolet unit floor: at least 14,145 verified 2026-model-year Chevrolet units across the campaigns where Part 573 reports split by brand, against a 434,977 GM-wide campaign-unit total that is mostly other brands' and other model years' cars.
- **Killed angles this run (duplicate screen):** Waymo school-bus recall query RQ26006 is #1461 (and #1445, #1177). Honda steering divide-by-zero 26V721 is #1457. Harley gear-sensor 26V730 is #1462. BMW water-pump recall-of-recall 26V733 is #1490. Ford Explorer airbag-burn probe PE26008 is #1447. Ford Maverick frozen-camera recall query RQ26004 is #1311 and #1345. Every fresh news lead from the November cycle is already on the site; the census is the uncovered angle.
- **3+ primary sources?** Yes. (1) NHTSA recalls API census, run Nov 13, 2026; (2) NHTSA VPIC API canonical 2026 Chevrolet model list; (3) Part 573 reports for 26V114 (amended, read directly, Chevrolet subtotal computed), 26V304 (read directly, Chevrolet split computed), 26V345 (read directly), 26V494 (amended, read directly), 26V539 (read directly), 26V696 (acknowledgement letter), 26V718/26V399 (acknowledgement letters); (4) prior census research files (#1474 GM 15, #1473 Ford 40, #1499 JLR 7) for the comparison table and method.
- **Verdict:** PROCEED.

## Primary sources

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle), census conducted Nov 13, 2026. Method: VPIC canonical 2026 Chevrolet light-vehicle list (23 entries incl. commercial chassis and BrightDrop), queried make+model+modelYear=2026 for every canonical name plus trim variants (Silverado 1500/2500/3500/EV, Suburban 1500, Blazer EV, Equinox EV, Express 2500/3500/Cutaway, Corvette Z06/ZR1, Tahoe RST, Traverse RS — 37 queries); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1500-chevrolet-recall-census-raw.json; deduped campaigns at drafts/1500-chevrolet-recall-census-campaigns.json. **Date-format trap (same as #1476):** ReportReceivedDate comes back as DD/MM/YYYY ("26/02/2026"), not ISO. **API 400 trap (same as #1476):** the API returns HTTP 400 when a make/model/year combination has no recalls at all — Blazer, Corvette, Silverado, Suburban, Trax, and all commercial chassis 400, as do all suffix variants. A 400 is an empty result, not a failed query. https://www.nhtsa.gov/recalls
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "chevrolet", Nov 13, 2026. 23 entries: 3500HG, 4500HD, 4500HG, 4500XD, 5500HG, 5500XD, 5500XG, 6500XD, 7500XD, Blazer, BrightDrop, Colorado, Corvette, Equinox, Express, Silverado, Silverado HD, Suburban, Suburban HD, Tahoe, Trailblazer, Traverse, Trax. Note VPIC does not list Blazer EV, Equinox EV, or Silverado EV as separate models; they were queried as variants per #1474.
3. **Part 573 Safety Recall Report 26V114** (amended Apr 30, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V114-5620.pdf — total potentially involved **5,486** (amended from 4,054 in the Feb 26 filing), estimated 100% with defect. Chevrolet subtotal computed by reading all 40 vehicle rows: **2,500 Chevrolets** (2,371 of them 2026-model-year; the rest are one 2025 Equinox EV, eleven 2025 Colorados, and 117 2027 Bolt EVs). Largest Chevrolet rows: 2026 Silverado EV 1,136; 2026 Equinox 445; 2026 Traverse 299; 2026 Silverado 1500 195; 2026 Tahoe 149.
4. **Part 573 Safety Recall Report 26V304**: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V304-2718.pdf — total **2,464**. Chevrolet rows read directly: 2026 Suburban 1500: 35; 2026 Tahoe: 51; 2025 Tahoe: 83; 2025 Suburban 1500: 76. 2026 Chevrolet subtotal: **86**. Seven field complaints, 0 crashes or injuries known.
5. **Part 573 Safety Recall Report 26V345**: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V345-2629.pdf — total **232** (199 Express + 33 Savana), estimated 100% with defect. Supplier Nexteer; the shifter can give false tactile gear feedback while the cluster display is correct. Found via a GM engineer's Speak Up For Safety report Apr 21, 2026; stop-delivery Apr 24.
6. **Part 573 Safety Recall Report 26V494** (amended Sep 10, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V494-6339.pdf — total **11** (10 US + 1 2022 Hummer EV Pickup); 4 Silverado EVs. A press machine at the Ramos plant was misadjusted during scheduled downtime; two modules found unsecured May 17, 2026. Remedy is a full high-voltage battery replacement, 9.5 hours of labor. 0 field incidents.
7. **Part 573 Safety Recall Report 26V539**: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V539-4446.pdf — total **306,511**, estimated 10% with defect. 2026 Chevrolet Trailblazer: **7 units**. 2025 Trailblazer: 73,665; 2025 Trax: 159,821. Plasma-cleaning step weakened the camera-housing adhesive; 33,000+ complaints before filing.
8. **NHTSA acknowledgement letter, 26V696** (Oct 29, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V696-1453.pdf — potential units affected **4** (US); 6 total in North America (3 Traverse + 3 Acadia, 2 in Canada). Supplier reviewed laser-welding data from 94,000+ seat components after a Traverse seatback frame was replaced in July 2026; six suspect parts, all made Nov 3, 2025. 0 accidents or injuries.
9. **NHTSA acknowledgement letter, 26V718** (via Motoring Chronicle, Nov 2026; corroborated by NHTSA record): **12,715** vans (5,434 2025 Express + 3,259 2026 Express + 3,568 2025 Savana + 454 2026 Savana); ~1% estimated with defect. 108 suspect steering-gear serial numbers were left out of 26V399's inspection list; GM revised the 26V399 bulletin Oct 8. 0 injuries as of Oct 8.
10. **NHTSA acknowledgement letter, 26V399** (Jun 26, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V399-0494.pdf — **26,541** vans (14,615 2025 Express + 6,389 2026 Express + 4,786 2025 Savana + 751 2026 Savana); ~1% with defect. Nine field reports, 0 crashes or injuries. Supplier Nexteer; a faulty sensor let hand-tightened nuts pass.
11. **NHTSA acknowledgement letter, 26V129** (Mar 6, 2026, via oemdtc mirror): **11,787** Silverado/Sierra 3500 trucks. Remedy: "The vehicle's engine control module (ECM) will be updated by a dealer or through an over-the-air (OTA) update." 20 complaints, 0 crashes or injuries. Found by a GM engineer Oct 2025 via Speak Up For Safety.
12. **The Brake Report, "GM Recalls 67,380 Cadillac, Chevrolet EVs Over Brake Software Defect"** (Nov 2026): https://thebrakereport.com/gm-recall-cadillac-lyriq-blazer-ev-brake-software-26v717/ — 26V717 total **67,380**; Chevrolet Blazer EV 3,911 (1,314 of them 2026); 100% defect estimate. "GM will update the BSCM software over the air or at a dealer." Only pAWD vehicles (Blazer EV SS and PPV trims). GM previously recalled 21,469 Lyriqs for a similar brake issue in 2024 and the patch did not hold.
13. **MotorBiscuit, "GM Issues Urgent Do-Not-Drive Recall Over Sudden Wheel Lock-Up Risk"** (May 14, 2026): https://www.motorbiscuit.com/gm-issues-urgent-do-not-drive-recall-over-sudden-wheel-lock-up-risk-on-chevrolet-gmc-cadillac-vehicles/ — 26V289 covers **66** vehicles; 68 suspect transfer-case assemblies, 46 in 2026-MY US vehicles (per #1474's Part 573 read). One 2026 Silverado 1500 locked a wheel in a parking lot; the missing oil pickup tube was found on teardown after an Apr 14, 2026 Speak Up For Safety report. API flag parkIt=true — the only one of the thirteen with a park-it advisory.
14. **GM dealer bulletin N252542620 / Carscoops, "GM Warns Some Pickups Could Stall Even With Fuel Still Onboard"** (Mar 9, 2026): https://www.carscoops.com/2026/03/gm-pickup-stall-recall/ — 26V127 covers **826** Express/Savana Cutaway vans (781 in the US per GM's dealer bulletin); tires with sidewall chunking damage.
15. **GM-Trucks / Pickup Truck Talk, Silverado EV recall guides** (Jul–Nov 2026): https://www.gm-trucks.com/silverado-ev-sierra-ev-wheel-battery-recalls/ and https://pickuptrucktalk.com/2026/11/2024-2026-chevrolet-silverado-ev-and-gmc-sierra-ev-known-problems-recalls-and-service-bulletins/ — 26V496 total **952** (513 Silverado EV + 439 Sierra EV; 911 in the US per GM bulletin), 74% defect estimate, supplier Topy America. Neither 26V494 nor 26V496 carries a do-not-drive or park-outside advisory.
16. **Prior census research files** for the comparison table and method: #1474 (GM 15), #1473 (Ford 40, Toyota 7, Honda 2), #1476 (Honda 4), #1477 (Hyundai 15, Kia 4), #1479 (Stellantis 27), #1480 (Nissan 7), #1481 (Subaru 5), #1483 (BMW 7), #1495 (Volvo 12), #1499 (JLR 7).

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Brand | Campaigns | Campaign-units (GM-wide totals) |
|---|---|---|
| Chevrolet | **13** | 434,977 (see caveat) |
| GM group (#1474) | 15 | — |
| Cadillac-only campaigns | 2 | 26V394, 26V612 |

Thirteen of GM's fifteen 2026-MY campaigns touch at least one Chevrolet. The only two that do not are Cadillac-only: 26V394 (Vistiq third-row seatback) and 26V612 (Optiq express-up windows). Buick and GMC appear only in campaigns shared with Chevrolet.

### The 13 campaigns

| Campaign | Date filed | Component | What it is | GM-wide units | Verified 2026 Chevrolet units |
|---|---|---|---|---|---|
| 26V114 | Feb 26 | Manual | Radio didn't download the electronic owner's manual; FMVSS 208 noncompliance. Touches ~35 GM nameplates. Fix: radio reset. | 5,486 | 2,500 (2,371 MY2026) |
| 26V127 | Mar 5 | Tires | Express/Savana Cutaway tires with sidewall chunking damage; sudden air loss. | 826 | — |
| 26V129 | Mar 5 | Fuel system | Silverado/Sierra 3500 gas, dual tanks: rear fuel pump starves front tank, engine stalls. ECM fix, dealer or OTA. | 11,787 | — |
| 26V289 | May 7 | Transfer case | Missing oil pickup tube can lock wheels without warning. 68 suspect assemblies; 46 in 2026-MY US vehicles. Park-it advisory. | 66 | — |
| 26V304 | May 14 | Wheels / hub | 24-inch-wheel Escalade/Suburban/Tahoe/Yukon: wrong hub bolts loosen or deform. Dealer-installed brake kits used the wrong bolt. | 2,464 | 86 (Tahoe 51, Suburban 35) |
| 26V345 | May 28 | Steering column | Express/Savana shifter gives false tactile gear feedback; cluster display correct. 100% defect. | 232 | 199 Express |
| 26V399 | Jun 23 | Steering | Express/Savana steering-gear nut not properly tightened (Nexteer sensor fault). | 26,541 | 6,389 MY2026 Express |
| 26V494 | Jul 30 | Traction battery | Escalade IQ/IQL, Silverado EV, Sierra EV, Hummer EV: battery module component improperly secured; fire risk. Full battery swap, 9.5 hrs labor. | 11 | 4 Silverado EV |
| 26V496 | Jul 30 | Wheels | Silverado EV / Sierra EV steel wheels may crack at vent holes; disc separation. 74% defect estimate. | 952 | 513 Silverado EV |
| 26V539 | Aug 20 | Rearview camera | Encore GX / Trailblazer / Envista / Trax: camera shows distorted or blank image. 33,000+ complaints; plasma-cleaning glue failure. | 306,511 | 7 MY2026 Trailblazer |
| 26V696 | Oct 21 | Seats | Traverse / Acadia: seat-back recliner welds may be insufficient. Six vehicles in North America. | 6 | 3 Traverse |
| 26V717 | Oct 29 | Brakes / ABS module | Lyriq / Celestiq / Blazer EV / Vistiq: brake control module software defect, temporary loss of braking at low speed. OTA or dealer fix. Repeat of a 2024 Lyriq brake recall. | 67,380 | 1,314 MY2026 Blazer EV |
| 26V718 | Oct 29 | Steering | Express/Savana steering-gear nut AGAIN: re-inspection of vehicles not properly inspected under 26V399 (108 serial numbers left out). | 12,715 | 3,259 MY2026 Express |

### Campaign-unit math (original)

- **GM-wide campaign-unit total for the 13: 434,977.** Two campaigns carry 373,891 of them (86.0%): 26V539 (306,511, 70.5%) and 26V717 (67,380, 15.5%).
- **Verified 2026-model-year Chevrolet units, campaigns where Part 573 reports split by brand: 14,145.** That is the floor, not the total — the Chevrolet shares of 26V127 (826), 26V129 (11,787), and 26V289 (66) are not split in the filings I read, so the true 2026-Chevrolet count is higher and unknowable from public filings alone. Campaign-units double-count vehicles appearing in more than one campaign.
- **Smallest-to-largest ratio: 6 to 306,511**, a 51,085x spread — the widest in the census series so far (JLR's was 6 to 250,857, 41,810x).
- **The camera recall is the paradox of the census.** 26V539 names 306,511 vehicles and drew 33,000+ complaints, but only 7 of them are 2026-model-year Chevrolets. The biggest campaign in Chevrolet's census barely touches a 2026 Chevrolet.
- **The van carries the count.** Three of the thirteen campaigns are steering, and all three belong to the Express (26V345, 26V399, 26V718). The Express is Chevrolet's most-recalled 2026 vehicle at 4 campaigns; the Silverado EV is next at 3.
- **The manual recall, again.** 26V114 touches 13 Chevrolet models and 2,500 Chevrolets while representing no mechanical danger. Strip it out and Chevrolet's real-defect count is 12 — and the Corvette, Equinox, Colorado, Silverado 2500, and Equinox EV drop to zero campaigns. GM filed the same missing-manual defect once before, as 25V815 in November 2025 (Silverado 1500/2500/3500 only).
- **The OTA flag is wrong.** NHTSA's API flags 0 of 13 campaigns as over-the-air. GM's own remedy text says 26V129's ECM update is "by a dealer or through an over-the-air (OTA) update" and 26V717's brake software is "over the air or at a dealer." At least 2 of 13 are OTA-capable. The last three censuses in this series quoted the flag as fact ("0 of 40", "0 of 15"); the flag undercounts, and this article corrects the record.
- **One park-it advisory:** 26V289 (transfer case) is the only campaign of the thirteen with the API's parkIt flag set. Zero park-outside advisories across all thirteen.
- **Zero injuries reported** in the verified filings (26V304, 26V345, 26V399, 26V494, 26V696, 26V718: explicitly 0; 26V129: 20 complaints, 0 crashes/injuries; 26V539: GM not aware of accidents/injuries; 26V289: one parking-lot lock-up, 4 complaints).

### Per-model campaign counts (2026 filings; multi-model campaigns count once per model)

| Model | Campaigns |
|---|---|
| Express | 4 (26V127, 26V345, 26V399, 26V718) |
| Silverado EV | 3 (26V114, 26V494, 26V496) |
| Tahoe | 3 (26V114, 26V289, 26V304) |
| Suburban 1500 | 3 (26V114, 26V289, 26V304) |
| Silverado 1500 | 2 (26V114, 26V289) |
| Silverado 3500 | 2 (26V114, 26V129) |
| Blazer EV | 2 (26V114, 26V717) |
| Traverse | 2 (26V114, 26V696) |
| Equinox EV | 1 (26V114) |
| Equinox | 1 (26V114) |
| Colorado | 1 (26V114) |
| Trailblazer | 1 (26V539) |
| Corvette | 1 (26V114 — Coupe, Convertible, E-Ray rows in the Part 573) |
| Silverado 2500 | 1 (26V114) |
| Trax | 0 (26V539 covers 2025 Trax only) |
| Blazer (gas) | 0 |
| BrightDrop | 0 |
| Commercial chassis (3500HG–7500XD) | 0 in 2026 filings (6500XD/7500XD hits are 2025 Isuzu filings 25V630/25V719) |

### Cross-brand ranking (corrected counts, as published in each brand's census)

| Brand | Campaigns | Brand | Campaigns |
|---|---|---|---|
| Ford | 41 | Subaru | 5 |
| Stellantis | 27 | Lucid | 5 |
| GM (group) | 15 | Honda | 4 |
| Toyota | 15 | Kia | 4 |
| Hyundai | 15 | Volkswagen | 4 |
| **Chevrolet** | **13** | Tesla | 4 |
| Volvo | 12 | Rivian | 3 |
| Lincoln | 10 (counted separately, #1478) | Genesis | 3 |
| Mercedes | 8 | Audi | 1 |
| BMW | 7 | Mazda | 0 |
| Nissan | 7 | Porsche | 0 |
| Jaguar Land Rover | 7 | | |

Chevrolet slots sixth, between Hyundai/Toyota (15) and Volvo (12). The ranking double-counts by design: GM's 15 includes Chevrolet's 13, just as Ford's 41 and Lincoln's 10 overlap. The ranking counts campaigns, not units.

### Timing

- February: 1. March: 2. May: 3 (26V289, 26V304, 26V345). June: 1. July: 2. August: 1. October: 3 — including two on Oct 29 (26V717 brakes, 26V718 steering nut, again).
- No September-style single-day cluster like Ford's six-campaign Sep 9; Chevrolet's filings spread evenly across the year, same as GM's group pattern.

### Component mix (13 distinct campaigns)

Steering 3, Wheels 2, Equipment/manual 1, Tires 1, Fuel system 1, Power train 1, Traction battery 1, Back-over prevention 1, Seats 1, Service brakes 1.

## Original contribution

1. **The 13-of-15 split.** No prior article has counted Chevrolet separately from GM. The finding that Chevrolet carries 13 of GM's 15 campaigns, and that the only two it escapes are both Cadillac-only, reframes #1474's group number: GM's recall year is, to a first approximation, Chevrolet's recall year.
2. **The OTA flag is wrong.** The census series has quoted NHTSA's overTheAirUpdate flag three times running. Reading GM's remedy text shows two of Chevrolet's thirteen campaigns are OTA-capable despite the flag. The flag is not a remedy count, and the series' past "0 OTA" claims need the same correction.
3. **The 2026-Chevrolet unit floor.** 14,145 verified 2026-model-year Chevrolet units across the nine campaigns where Part 573 reports split by brand, set against a 434,977 GM-wide campaign-unit total that is 86% two campaigns — one of which (26V539) touches seven 2026 Chevrolets. The headline total and the human total point in opposite directions, and both are in the table.
4. **The 51,085x spread.** Six vehicles (26V696) to 306,511 (26V539) is the widest smallest-to-largest spread in the census series, beating JLR's 41,810x.
5. **22nd brand counted**, and the milestone #1500 article. The census series now covers every major manufacturer selling in the US except the ultra-low-volume exotic badges and the remaining GM sub-brands (GMC, Buick, Cadillac) and Japanese luxury arms (Lexus, Acura, Infiniti).

## Strongest counterargument

Campaign counts are not severity scores, and Chevrolet's 13 flatters it twice over. First, 26V114 is a paperwork recall — a missing manual — that pads eleven models' counts by one while representing no mechanical danger; the honest count is 12. Second, the biggest campaign in the census (26V539, 306,511 units) touches seven 2026 Chevrolets, and the second-biggest (26V717, 67,380) touches 1,314 — so the 434,977 campaign-unit total is mostly other brands' and other model years' cars, and the genuinely-2026 Chevrolet exposure is a few thousand vans and trucks plus a paperwork recall. Zero injuries were reported in any verified filing. A low-severity reading is available: Chevrolet's year is one van with a steering-nut problem, one software brake fix, and a lot of shared paperwork.

The counterargument weakens on breadth and on the repeat: Chevrolet's 13 spread across vans, full-size SUVs, heavy-duty pickups, EVs, and the cheapest SUV it sells — steering, wheels, seats, brakes, batteries, fuel, tires, cameras — with the van's repeat steering failure as a genuine pattern, not a reporting artifact. And 26V717 is a repeat recall: GM recalled 21,469 Lyriqs for a similar brake-software fault in 2024, and the patch did not hold. A count of 13 that includes a recall-of-a-recall (26V718) and a fix-that-didn't-fix (26V717) is not a clean bill of health.

## Limitations

- **Snapshot date:** counts are as of Nov 13, 2026. Campaigns filed later in 2026 are not included; later censuses in the series will have later snapshot dates, so cross-brand comparisons carry a few days of filing drift (same caveat as #1476).
- **Scope is 2026-model-year vehicles, 2026 filings.** Six campaigns filed in 2025 also touch 2026-model-year Chevrolets and are excluded by design: 25V594 (Silverado EV ESC warning light), 25V704 (Equinox EV tires), 25V815 (Silverado manual), 25V878 (Equinox EV pedestrian alert), 25V630/25V719 (Isuzu-built 6500XD/7500XD chassis). The census measures new-model-year recall activity in 2026 filings, not Chevrolet's total 2026 recall volume.
- **Campaign-unit totals are GM-wide, not Chevrolet-only.** The 434,977 total sums each campaign's full Part 573 population across all GM brands and model years. The Chevrolet-verified floor (14,145) covers only the nine campaigns where filings split by brand; the Chevrolet shares of 26V127, 26V129, and 26V289 are not split in the filings read. Campaign-units double-count vehicles appearing in more than one campaign.
- **Unit-count discrepancies between sources:** 26V304 is 2,464 in the Part 573 and 2,457 in the NHTSA API record (Part 573 used); 26V129 is 11,787 in the acknowledgement letter and 11,807 in oemdtc's mirror (letter used); 26V496 is 952 total and 911 in the US per GM's dealer bulletin (952 used); 26V494 is 11 total and 10 in the US (11 used); 26V696 is 6 in North America and 4 in the US (6 used). The article uses the Part 573 / acknowledgement-letter figure in each case and states the basis.
- **API 400 = no rows** is the method's standing assumption from #1476; a model-name mismatch in NHTSA's database would look identical to a true zero. The Trax, Blazer (gas), and BrightDrop zeros rest on that assumption plus the absence of any such campaign in the other models' query results and in the campaign summaries.
- **VPIC artifacts ignored:** commercial chassis entries (3500HG–7500XD) are not consumer models; their 2026-filing count is zero either way (the only hits are 2025 Isuzu filings).
- **OTA counts** rest on GM's remedy text for 26V129 and 26V717; the NHTSA API flag says False for all thirteen. The article reports both and treats the flag as unreliable.
- **Injury counts** are as stated in the verified filings; campaigns whose Part 573 reports were not read (26V127, 26V129 is read via RCAK, 26V289 via #1474) carry the counts from the sources cited.
- **The GM group count (15) is from #1474's Nov 11 census;** this census re-ran the Chevrolet subset on Nov 13 and found no new Chevrolet campaigns in the two-day gap. The two Cadillac-only campaigns (26V394, 26V612) were not re-queried; their exclusion rests on #1474.
