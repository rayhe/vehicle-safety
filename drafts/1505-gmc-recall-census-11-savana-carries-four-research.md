# Research: #1505 — GMC Recalled Its 2026 Lineup 11 Times. The Van Did Four of Them.

**Number:** 1505
**Slug:** 1505-gmc-recall-census-11-savana-carries-four
**Journalist:** Clara Rollover (Consumer Safety Advocate; car-buying guidance, class comparisons, "what this means for you" — the angle is a work-truck/van census whose headline count hides that five nameplates ride on one paperwork filing and whose biggest GMC defect is excluded by the calendar)
**Kicker:** The Gap
**Date:** November 14, 2026

## Angle (1-2 sentences)

GMC is the last GM division without a census, and I ran the corrected-vocabulary count across its full 2026 lineup: **11 campaigns**, the most of any GM brand except Chevrolet — and the distribution is the story. The Savana, a van GM has built unchanged since 1996, carries **4 of the 11**, including the same steering-gear nut filed twice (26V399 in June, 26V718 in October, after the first recall's inspections missed 108 suspect serial numbers); five other GMC nameplates carry exactly one campaign each, and it is the same one — a missing owner's manual — while the defect that actually defines GMC ownership in 2026, the seizing L87 V8, is excluded by the calendar at 297,404 GMC trucks and now sits under a federal engineering analysis.

## Kill test

- **Genuinely newsworthy?** Yes. First GMC census on the site; it completes the GM family (GM 15, Chevrolet 13, GMC 11 all now counted). Fresh hooks: the Savana carries 4 of 11 and three of its four are steering defects on a 30-year-old platform; the 26V399-to-26V718 recall-of-recall is the only same-defect double filing in the GM family this year, triggered by a dealer finding a loose nut in a van already cleared under the first recall; the census contains exactly one do-not-drive (26V289, 66 trucks, a missing oil pickup tube that can lock a wheel at speed); and the excluded L87 filing (25V274, 597,571 vehicles, 297,404 of them GMCs) is five times the entire counted vehicle total, with NHTSA's Engineering Analysis EA26-005 (997,743 vehicles, opened August 2026) questioning whether the remedy holds.
- **Novel on site?** Yes. No prior brand-level GMC census exists. Individual campaigns were covered as standalones — 26V718/26V399 as the recall-of-recall (#1391), 26V289's transfer case (#941, #1031), 26V114 inside the GM and Chevrolet censuses (#1474, #1500) — but never as a census, never with the 11-count against the full 2026 lineup, never with the per-model table, never with the counted-vs-excluded L87 comparison, and never with the five-nameplates-one-paperwork-filing observation. The original contribution is the 11-count, the per-model table, the 59,606 counted vs 297,404 excluded comparison, and the completed GM-family table — computed, not quoted.
- **Killed angles this run (duplicate screen):** A standalone 26V718 piece would duplicate #1391 (same defect, same numbers, published Nov 4). A standalone 26V289 piece would duplicate #941/#1031. A standalone 26V114 piece would duplicate its coverage inside #1474/#1500. A Buick or Cadillac standalone census would double-count the GM 15 (both brands' 2026 campaigns are already inside #1474's count; neither has a standalone census and neither needs one — the family table is the right home).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model list (10 models: Acadia, Savana, Sierra, Terrain, Yukon, Canyon, Yukon XL, Sierra HD, Hummer EV SUV, Hummer EV Pickup), queried make+model+modelYear=2026 for every VPIC name plus the Sierra 1500/2500/3500/EV splits the API files separately — 14 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1505-gmc-recall-census-raw.json. **Date-format trap (same as #1476/#1501/#1502/#1503/#1504):** ReportReceivedDate comes back as DD/MM/YYYY ("26/02/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — "SIERRA" and "SIERRA HD" both 400'd (no recalls filed under those exact names; the splits carry them). A 400 is an empty result, not a failed query.
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "gmc", Nov 14, 2026: 10 models (Acadia, Savana, Sierra, Terrain, Yukon, Canyon, Yukon XL, Sierra HD, Hummer EV SUV, Hummer EV Pickup). The API files Sierra recalls under Sierra 1500/2500/3500/EV rather than "Sierra" or "Sierra HD", so the census queried all four splits.
3. **NHTSA Part 573 Safety Recall Report, 26V114** (filed Feb 26, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V114-0714.pdf — read via search-indexed full text Nov 14, 2026. **Total 4,054 vehicles.** Defect: radio may not have been set to the correct status to download the electronic owner's manual; fails FMVSS 208 S4.5.1.(f). GM number N252540430. Per-model GMC entries in the filing include 161 Terrains, 93 Yukons, 54 Yukon XLs, 50 Acadias.
4. **GM dealer bulletin DCS7446 / NHTSA RCRIT-26V127** (Mar 5, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V127-6000.pdf — 26V127, Savana/Express Cutaway tires with sidewall damage. "The total number of U.S. vehicles involved is 781." GM number N252542620. (Carscoops reported 826, likely including Canada; the article uses GM's 781 U.S. figure.)
5. **NHTSA acknowledgement letter, 26V129** (Mar 6, 2026), via oemdtc mirror of the NHTSA record: 26V129, Sierra/Silverado 3500 rear fuel pump. **Potential Number of Units Affected: 11,787.** Per-model split: 6,543 2025 Silverado 3500, 3,282 2026 Silverado 3500, 1,135 2025 Sierra 3500, 827 2026 Sierra 3500 — GMC share 1,962. GM number N262544420. Defect: incorrect ECM software calibration can disable fuel transfer from the rear tank, causing an engine stall despite fuel onboard.
6. **NHTSA Part 573 Safety Recall Report, 26V304** (filed May 14, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V304-2718.pdf — **total 2,464 vehicles.** Incorrect front wheel hub bolts on 2025-2026 Escalade, Suburban, Tahoe, Yukon, Yukon XL with 24-inch wheels (dealer-installed accessory brake package RPO 5JL or a hub replacement in service). GMC entries: 49 2026 Yukons, 21 2026 Yukon XLs, 12 2025 Yukons, 7 2025 Yukon XLs — GMC share 89. Seven field complaints, Jan 2025–Apr 2026. GM number N262554630.
7. **NHTSA acknowledgement letter, 26V345** (Jun 3, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V345-4884.pdf — 26V345, 2026 Express/Savana gear shifter. **Potential Number of Units Affected: 232.** Incorrectly manufactured steering column assembly gives false tactile gear-selection feedback; the cluster display is correct, the shifter feel is not — unintended vehicle motion risk. GM number N262558671.
8. **NHTSA Part 573 / secondary reporting, 26V399 and 26V718** — 26V399 (Jun 23, 2026): **26,541 vans** (14,615 2025 Express, 6,389 2026 Express, 4,786 2025 Savana, 751 2026 Savana). Steering gear nut not properly tightened; supplier Nexteer Automotive, a malfunctioning sensor let assemblies leave with hand-tightened nuts; 51 suspect serial numbers; ~1% defect estimate; nine field reports, no crashes or injuries. 26V718 (Oct 29, 2026): **12,715 vans** (5,434 2025 Express, 3,259 2026 Express, 3,568 2025 Savana, 454 2026 Savana) — **GMC share 4,022.** Same nut, filed because 108 suspect serial numbers were inadvertently excluded from 26V399's inspection list; a dealer found a loose nut in a van already inspected and closed under 26V399 via GM's Speak Up for Safety program (Sep 28, 2026); GM revised the 26V399 bulletin Oct 8 and filed 26V718 Oct 22. Owner letters Dec 14, 2026. GM numbers N262563570 / N262579350. Sources: NHTSA API records (both campaigns), Margarian Law and Motoring Chronicle Part 573 readings, site story #1391.
9. **NHTSA acknowledgement letter, 26V494** (Aug 6, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V494-7039.pdf — 26V494, high-voltage battery. **Potential Number of Units Affected: 10** (U.S.): 4 Silverado EV, 3 Escalade IQL, 2 Escalade IQ, **1 Sierra EV**. Improperly secured internal battery module component; loose component can damage the battery, fire risk. Remedy is a complete high-voltage battery replacement, 9.5 hours labor. GM number N262562600. (PickupTruckTalk notes an amended September filing identifying 11 vehicles across five models including a 2022 Hummer EV Pickup; the article uses the NHTSA ack letter's 10 U.S. figure.)
10. **GM-Trucks / PickupTruckTalk reporting on 26V496** (Jul 30, 2026): 26V496, steel wheels. **952 vehicles: 513 Silverado EV + 439 Sierra EV.** Steel road/spare wheels may crack at the disc vent holes; supplier Topy America (Frankfort, Kentucky); hairline cracks found in fatigue testing. Sierra EV scope is the steel spare (RPO SG8) only. GM number N262556920.
11. **NHTSA acknowledgement letter, 26V696** (Oct 29, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V696-1453.pdf — 26V696, front seats. **Potential Number of Units Affected: 4** (U.S.; 6 in North America — 3 Traverse + 3 Acadia, 2 in Canada). Driver or front passenger seat may not have sufficient welds where the seat back recliner pivot attaches to the seat frame. GM lists the six VINs in its bulletin. GM number N262576830.
12. **NHTSA recalls API, 26V289000** (report received May 7, 2026) + GM Authority / Carscoops coverage — 26V289, transfer case. **66 vehicles total**, do-not-drive (parkIt: true). Missing oil pickup tube in transfer cases built by Magna Powertrain de México – Ramos; bearings run dry, front or rear wheel can lock up. **12 of the 66 are 2026 Sierra 1500s**; the rest are 2026 Yukon/Yukon XL and 2015-2020 full-size SUVs that received a replacement transfer case in service. Four field complaints, no crashes or injuries cited. GM number N262557620. The only parkIt flag in the census. Site stories #941/#1031 covered the defect; the census is the first brand-level count to include it.
13. **Excluded filings (25Vxxx, filed 2025, touching 2026 GMC models):** 25V594 (Sep 11, 2025) — ESC malfunction indicator may fail to illuminate on the next key cycle after an ESC malfunction; **1,191** 2026 Silverado EV/Sierra EV trucks; remedy is brake-control-module software, dealer or OTA. 25V769 (Nov 6, 2025) — 2026 Hummer EV Pickup/SUV front passenger airbag, improperly crimped wire; **354** vehicles; supplier Yazaki North America, manual crimping during a three-day maintenance window. 25V856 (Dec 2025) — Canyon AT4X AEV passenger airbag, wrong SDM calibration, second-stage inflator can fire when only first-stage is intended; **1,120** trucks (2024-2026, AEV package only). Excluded total: **2,665**.
14. **The L87 elephant (excluded on both prongs):** campaign 25V274 (filed April 2025), 6.2L L87 V8 rod/crankshaft defect — **597,571 vehicles total, 297,404 of them GMCs** (153,637 Sierra 1500, 82,841 Yukon, 60,926 Yukon XL). GM had logged **28,102 L87 engine failure reports** before filing. In **August 2026 NHTSA opened Engineering Analysis EA26-005 covering 997,743 vehicles** because the remedy may not hold. Source: badvehicle.yahdm.com GMC lemon-law page (NHTSA figures as of Sep 23, 2026) and prior site coverage; the 25V274 filing touches model years 2021-2024, so it is excluded from the 2026 census twice over — wrong year filed, wrong model years covered.
15. **Site story #1391: "GM Recalled the Vans, Then Recalled the Recall"** (Nov 4, 2026) — prior site coverage of the 26V399→26V718 thread, including the 47.9% re-inspection share (12,715/26,541), the 128 days between filings, and the 39,488 recall mentions across the Savana's three 2026 steering campaigns. The census cites this rather than re-deriving it.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **GMC** | **11** | 12 nameplates (+2 VPIC aliases) | 12 of 12 |

### The 11 GMC campaigns

| Campaign | Date | Component | Vehicles (all models/years in filing) | What it is |
|---|---|---|---|---|
| 26V114 | Feb 26 | Equipment: owner's manual | 4,054 | Radio not set to download the electronic owner's manual; FMVSS 208. Touches all 11 non-Savana GMC nameplates. |
| 26V127 | Mar 5 | Tires: sidewall | 781 (U.S.) | Express/Savana Cutaway tires with sidewall damage; sudden air loss risk. |
| 26V129 | Mar 5 | Fuel pump control module | 11,787 | Sierra/Silverado 3500 dual-tank gas trucks can stall with fuel onboard; bad ECM calibration disables rear-to-front transfer. GMC share 1,962. |
| 26V289 | May 7 | Transfer case | 66 | **Do-not-drive.** Missing oil pickup tube (Magna Powertrain, Mexico); wheel lock-up risk. 12 are 2026 Sierra 1500s. |
| 26V304 | May 14 | Wheels: hub | 2,464 | Wrong front hub bolts on 24-inch-wheel full-size SUVs; 7 field complaints. GMC share 89. |
| 26V345 | May 28 | Steering: column | 232 | 2026 Express/Savana shifter gives false tactile gear feedback; driver can think it is in Park when it is not. |
| 26V399 | Jun 23 | Steering | 26,541 | Steering gear nut not properly tightened (Nexteer sensor failure, 51 suspect serials, ~1% defective). GMC share 5,537. |
| 26V494 | Jul 30 | Traction battery | 10 (U.S.) | Loose internal battery module component, fire risk; full pack replacement, 9.5 hrs. 1 Sierra EV. |
| 26V496 | Jul 30 | Wheels | 952 | Steel wheels crack at vent holes (Topy America). 439 Sierra EVs, spare only. |
| 26V696 | Oct 21 | Seats | 4 (U.S.; 6 N. America) | Front seat back frames insufficiently welded at the recliner pivot. 3 Acadias, 3 Traverses; GM lists all six VINs. |
| 26V718 | Oct 29 | Steering | 12,715 | Same steering nut as 26V399, re-filed: 108 suspect serials were missed; a cleared van came back with a loose nut. GMC share 4,022. |
| **Counted total** | | | **59,606 mentions** | Unique vehicles lower: 26V718 re-inspects vans already counted in 26V399, so the no-double-count total is **46,891**. |

### Per-model campaign counts (2026 MY, 2026 filings)

| Model | Campaigns | Which |
|---|---|---|
| Savana | 4 | 26V127, 26V345, 26V399, 26V718 |
| Sierra EV | 3 | 26V114, 26V494, 26V496 |
| Yukon | 3 | 26V114, 26V289, 26V304 |
| Yukon XL | 3 | 26V114, 26V289, 26V304 |
| Sierra 1500 | 2 | 26V114, 26V289 |
| Sierra 3500 | 2 | 26V114, 26V129 |
| Acadia | 2 | 26V114, 26V696 |
| Sierra 2500 | 1 | 26V114 |
| Terrain | 1 | 26V114 |
| Canyon | 1 | 26V114 |
| Hummer EV Pickup | 1 | 26V114 |
| Hummer EV SUV | 1 | 26V114 |

Five nameplates carry exactly one campaign, and it is the same one: the missing owner's manual. Strip 26V114 and GMC's count falls to 10, with the Terrain, Canyon, both Hummer EVs, and the Sierra 2500 at zero. The Savana is the only nameplate whose count survives on its own defects — four of them, three steering-related, on a van platform in production since 1996.

### The excluded filings: what the count misses

| Campaign | Date | Component | Vehicles | Touches 2026 MY? |
|---|---|---|---|---|
| 25V594 | Sep 11, 2025 | ESC warning-light software | 1,191 (Silverado EV/Sierra EV) | Yes — filed 2025 |
| 25V769 | Nov 6, 2025 | Hummer EV airbag, bad crimp | 354 | Yes — filed 2025 |
| 25V856 | Dec 2025 | Canyon AT4X AEV airbag calibration | 1,120 | Yes — filed 2025 |
| **Excluded 25V total** | | | **2,665** | |
| 25V274 (L87 V8) | Apr 2025 | Engine seizes without warning | 597,571 (297,404 GMC) | No — 2021-2024 MY, filed 2025 |
| **Excluded total, all** | | | **600,236** | |

The excluded filings are 10x the counted vehicle total. The L87 alone (297,404 GMCs) is 5.0x the entire counted census (59,606 mentions, 46,891 unique). For every GMC the census counts, 5.0 more were recalled under filings the method excludes — and the excluded ones include the only GMC defect under an open federal engineering analysis (EA26-005, 997,743 vehicles, August 2026).

### Component mix (11 distinct campaigns, counted)

Steering 3 (26V345, 26V399, 26V718 — all Savana/Express), wheels 2 (26V304 hub bolts, 26V496 steel wheels), equipment 1, tires 1, fuel system 1, powertrain 1, traction battery 1, seats 1. **0 of 11 flagged overTheAirUpdate=true** — same 0-for-11 as the rest of the GM family. The flag is wrong in the other direction again: 25V594's remedy is explicitly "dealer or over-the-air," and the API still says false.

### Timing

February: 1 (26V114). March: 2 (26V127, 26V129). May: 3 (26V289, 26V304, 26V345). June: 1 (26V399). July: 2 (26V494, 26V496). October: 2 (26V696, 26V718). January, April, August, September, November: 0 counted filings. The last filing was Oct 29 — two weeks of silence through Nov 14, and the newest campaign (26V718) is a confession that a June inspection program failed.

### Updated census-series table (2026 campaigns, corrected-vocabulary method unless noted)

Ford 40, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Chevrolet 13 (of GM's 15), Volvo 12, **GMC 11**, Mercedes 8, JLR 7, Nissan 7, BMW 7, Lexus 6, Lucid 5, Subaru 5, Honda 4, Kia 4, Tesla 4, VW 4, Genesis 3, Rivian 3, Acura 1, Audi 1, Infiniti 1, Mitsubishi 1, Mazda 0, Porsche 0. GMC slots eighth, between Volvo (12) and Mercedes (8) — and the GM family is now complete: GM 15, Chevrolet 13, GMC 11, with heavy overlap (26V114 counts for all three; the Savana's four are GMC-only in the family table, shared only with Chevrolet's Express). Series total to date: 219 brand-level campaign mentions (208 through #1504, plus GMC's 11).

## Strongest counterargument

Campaign counts are not severity scores, and the 11-count flatters GMC four ways. First, the count's breadth is mostly one paperwork filing: 26V114 (a missing owner's manual) is the sole campaign for five of twelve nameplates, and without it GMC's count is 10 with five nameplates at zero — the 11 says more about how GM files one defect across every badge than about eleven distinct things wrong with GMC trucks. Second, the count's volume is mostly vans: 26V399 + 26V718 alone are 39,256 of the 59,606 counted mentions (65.8%), and the Savana is a low-volume fleet van — the 2026 Savana contributes 454 vans to 26V718 against the Express's 3,259, so GMC is the minority twin in its own biggest recall. Third, the count excludes the filing that actually defines GMC ownership in 2026: the L87 (297,404 GMCs, 28,102 failure reports, now under EA26-005) is five times the counted total, and a reader who takes "GMC: 11" as the brand's safety record is wrong about 297,404 trucks — including every 2021-2024 Sierra 1500, Yukon, and Yukon XL with the 6.2L V8. Fourth, the count partly measures a small catalog, not improving quality: GMC sells ten nameplates, and the Sierra EV's three campaigns on a truck that barely sells is a rate story the count hides.

The counterargument weakens on the one thing the count does prove: every 2026 GMC nameplate was touched by at least one 2026 filing, and the Savana's four are real, distinct defects on the same van in one calendar year — three of them steering. That is a real finding about the vehicles on the lot today, even if the headline number is mostly a manual, a van, and a nut filed twice. And the method's exclusion is disclosed, not hidden: the 297,404 is in the article, in a table, with a campaign number.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The counted-vs-excluded distinction is the article's spine; both numbers are stated alongside the headline.
- Unit counts are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 2026-MY-only GMC vehicle total cannot be computed from the filings (26V114's GMC share is not fully broken out in the Part 573 read; only four per-model entries were captured).
- The 59,606 counted total double-counts vehicles: 26V718 re-inspects vans already counted in 26V399. The article states both the 59,606 mentions and the 46,891 no-double-count total.
- The 26V127 count is GM's 781 U.S. figure from its dealer bulletin; Carscoops reported 826, likely including Canada. The 26V129 oemdtc field reads 11,807 but the NHTSA letter text and the per-model split both confirm 11,787. The 26V494 count is 10 U.S. per the NHTSA ack letter; an amended September filing identifies 11 vehicles across five models. The 26V696 count is 4 U.S. / 6 North America.
- The 26V289 GMC model split beyond the 12 Sierra 1500s is not broken out in the sources read; the article states 12 Sierra 1500s and describes the rest as 2026 Yukon/Yukon XL plus 2015-2020 SUVs with replacement transfer cases.
- The L87 figures (597,571 total, 297,404 GMC, 28,102 failure reports, EA26-005 997,743 vehicles) come from the lemon-law page's NHTSA-derived summary and prior site coverage, not from the Part 573 read directly this run.
- The 2026 model year is still in progress and late filings will move the count.
- NHTSA's overTheAirUpdate flag undercounts software remedies (25V594's OTA remedy is flagged false).
- "Sierra" and "Sierra HD" 400'd in the API (no recalls filed under those exact names); the census queried the 1500/2500/3500/EV splits instead. The Savana Cutaway in 26V127 is filed under the Savana name and counted.

## Actionable takeaways

- If you own a 2025-2026 Express or Savana: you have been recalled up to three times for steering in 2026 (26V345, 26V399, 26V718). If a dealer cleared your van under 26V399 in the summer, check your VIN again — 26V718 exists because 108 suspect steering gears were missed, and owner letters go out December 14, 2026. Check your VIN at nhtsa.gov/recalls; the fix is a free serial-number inspection and, on a match, a free steering gear replacement.
- If you own a 2025-2026 Sierra 3500 or Silverado 3500 with a gas engine and dual tanks: the rear fuel pump can stop transferring fuel and stall the truck with fuel still onboard (26V129, 11,787 trucks). The fix is a free ECM software update. Owner letters went out April 8, 2026.
- If you own a 2026 Sierra EV: check for two July recalls — a steel spare wheel that can crack at the vent holes (26V496, 439 Sierras) and, on exactly one truck, a loose battery module component that means a full pack replacement (26V494). Also check the 2025-filed ESC warning-light recall 25V594 (1,191 trucks), which the census excludes only because it was filed in September 2025.
- If you own a 2026 Yukon or Yukon XL with 24-inch wheels: the front hub bolts may be wrong (26V304, 2,464 vehicles, 7 field complaints). Dealers replace both front hub bolts free. Only trucks with the dealer-installed accessory brake package or a hub replacement in service are affected.
- If you own a 2021-2024 Sierra 1500, Yukon, or Yukon XL with the 6.2L V8: you are in the excluded filing (25V274, 297,404 GMCs) and NHTSA has opened Engineering Analysis EA26-005 because the remedy may not hold. Check your VIN now; do not assume the recall repair settled it.
- If you are shopping a 2026 GMC: the census says 11 recalls across twelve nameplates, and that is accurate for new metal — but five of those nameplates carry exactly one recall, and it is a missing owner's manual. Shop by campaign, not by count: the Savana carries four real defects, the Sierra EV three, and the L87 trucks are all used now, so any 2021-2024 Sierra or Yukon with the 6.2 needs its 25V274 remedy verified before signing.
