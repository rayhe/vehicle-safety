# Research: #1514 — Chrysler's 2026 Recall Census: 5 Campaigns, and One Names a Car That Doesn't Exist

**Number:** 1514
**Slug:** 1514-chrysler-recall-census-5-one-phantom-phev
**Journalist:** Clara Rollover (Consumer Safety Advocate — census is a buying guide; her beat is "what this means for you." Last 8 articles rotated Rex/Mia/Axle/Vin; Clara hasn't appeared recently.)
**Kicker:** By The Numbers
**Date:** November 15, 2026

## Angle (1-2 sentences)

Chrysler filed **5 recall campaigns touching a 2026-model-year Chrysler** in 2026 — the middle child of Stellantis' brand splits (Jeep 12, Ram 11, Chrysler 5, Dodge 2, per #1479) — and the smallest campaign in the set, the 2,017-van ESC recall 26V561, is filed against a vehicle that does not exist: NHTSA's own summary lists a "2026 Chrysler Voyager Plug-In Hybrid Electric," a car Chrysler has never built. The other four campaigns are a 293,264-van curtain-airbag expansion, an 844,027-vehicle camera blackout, and two Braun wheelchair-van conversions.

## Kill test

- **Genuinely newsworthy?** Yes. First Chrysler brand census on the site; completes the Stellantis brand-split set with Jeep #1508 (12) and Ram #1510 (11), confirming #1479's company total of 27. Fresh hooks: the phantom Voyager PHEV in NHTSA's own 26V561 summary (the 8 plug-in hybrids are Pacificas, per the Part 573 and three outlets); the Grand Caravan's return as a VPIC-listed 2026 Chrysler with zero US recalls (Canada-only); two of Chrysler's five campaigns filed by Braun, not Chrysler; and the 26V189 expansion arithmetic (178,246 announced, 293,264 in the Part 573 after migration from 25V302/25V573).
- **Novel on site?** Yes. No prior brand-level Chrysler census exists. Individual campaigns were covered standalone (26V561 in #850, 26V531 in #1409, 26V189 in #1393) but never counted as a brand, never per-model, never with the counted-vs-excluded arithmetic. The 5-count, the per-model table, the 5-counted-vs-2-excluded arithmetic, the phantom-PHEV finding, and the Grand Caravan zero are new computations.
- **Killed angles this run (duplicate screen):** Every other brand census (all done: GM #1474, Toyota #1475, Honda #1476, Hyundai-Kia #1477, Ford #1478, Stellantis #1479, Nissan #1480, Subaru #1481, BMW #1483, Mazda #1486, VW #1487, Mercedes #1488, Audi #1489, Porsche #1491, Tesla #1492, Volvo #1495, Rivian #1496, Genesis #1497, Lucid #1498, JLR #1499, Chevrolet #1500, Lexus #1501, Acura #1502, Infiniti #1503, Mitsubishi #1504, GMC #1505, Jeep #1508, Ram #1510, Cadillac #1512, Buick #1513). Dodge is the only remaining Stellantis brand split; it stays for a future run.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 15, 2026. Method: VPIC canonical 2026 model list (3 Chrysler light-vehicle models: Pacifica, Voyager, Grand Caravan), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, Electric suffix variants plus Pinnacle/Limited/Touring/LX trims — 16 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1514-chrysler-recall-census-raw.json; deduped campaigns at drafts/1514-chrysler-recall-census-campaigns.json. Extended excluded sweep (model years 2025–2019, all models + trims) saved at drafts/1514-chrysler-recall-census-excluded-older.json. **Date-format trap:** ReportReceivedDate comes back as DD/MM/YYYY ("26/03/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — a 400 is an empty result, not a failed query. Census script: drafts/1514-census-run.py.
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "chrysler", Nov 15, 2026: 3 models (Pacifica, Voyager, Grand Caravan).
3. **NHTSA Part 573 Safety Recall Report, 26V189** (submitted May 7, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V189-9040.pdf — 293,264 total (Pacifica 247,580 + Voyager 45,684); 30% defect estimate; supplier Autoliv ASP, Inc.; improperly sealed curtain-airbag seams; FMVSS 226; expands 25V302 and 25V573; Chrysler numbers 06D/10D/11D. NHTSA acknowledgment letter (Mar 30, 2026) lists 178,246 — the earlier, pre-expansion count.
4. **NHTSA Part 573 / recall bulletin, 26V531** (FCA 78D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V531-1267.pdf — 844,027 US vehicles with suspect Uconnect5 R1 High radio software; 100% defect estimate; Pacifica 131,681 (per AutoEvolution split); FMVSS 111. Reuters, Aug 17, 2026: 955,000 worldwide, 848,000 US announced.
5. **#1479 research file** (drafts/1479-stellantis-recall-census-27-one-radio-bug-research.md) — Stellantis company total 27; Chrysler 5 of 27; 26V531/26V561 figures cross-checked against it.
6. **#850 research file** (drafts/850-chrysler-26v561-cracked-capacitor-kills-esc-research.md) — 26V561 standalone: 2,017 vehicles; brake pedal position sensor capacitor cracked; FMVSS 126; supplier CTS Corporation (Elkhart, IN), part 68236598AA; 10% defect estimate; investigation opened Mar 25, 2026.
7. **Autoblog, "America's Best-Selling Minivan Recalled Over Concerning ESC Failure"** (Sep 9, 2026): https://www.autoblog.com/news/chrysler-pacifica-and-voyager-minivans-recalled-over-esc-failure — 26V561 population: 1,652 Pacifica + 357 Voyager + **8 Pacifica Plug-in Hybrid** = 2,017. Confirms the 8 PHEVs are Pacificas, not Voyagers.
8. **MoparInsiders, "Braun Recalls 476 Chrysler Pacifica Wheelchair Vans Over Faulty Retractors"** (May 2026): https://moparinsiders.com/braun-recalls-476-chrysler-pacifica-wheelchair-vans-over-faulty-retractors/ — 26V296: 476 vans, built Nov 25, 2025–May 5, 2026; ~2% defect estimate; Part 573 filed May 11, 2026.
9. **NHTSA owner letter / dealer notice, 26V358** (Jun–Jul 2026): https://static.nhtsa.gov/odi/rcl/2026/RCONL-26V358-0017.pdf and https://static.nhtsa.gov/odi/rcl/2026/RCMN-26V358-4584.pdf — BraunAbility conversions built May 7–22, 2026; incorrect spring in front-seat harness wall connector may contact terminals and impair airbags/pretensioners; 30-minute inspection.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 15, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Chrysler** | **5** | 3 | 2 |
| Jeep (for comparison, #1508) | 12 | — | — |
| Ram (for comparison, #1510) | 11 | — | — |
| Dodge (for comparison, #1479) | 2 | — | — |
| Stellantis total (#1479) | 27 | — | — |

### The 5 Chrysler campaigns

| Campaign | Filed | Component | What it is | Units (all makes) | Chrysler units |
|---|---|---|---|---|---|
| 26V189 | Mar 26 | Side curtain air bags | Improperly sealed seams; insufficient pressure retention; FMVSS 226 | 293,264 (Part 573) | Pacifica 247,580 + Voyager 45,684 |
| 26V296 | May 12 | Wheelchair restraints (Braun) | Q'Straint retractors may not lock; wheelchair unsecured in transit | 476 (Part 573, per MoparInsiders) | 476 Pacifica conversions |
| 26V358 | Jun 3 | Frontal air bags (Braun) | Wrong spring in front-seat harness connector may contact terminals; can impair airbags/pretensioners | Not stated in public filing excerpts | Pacifica + Voyager conversions built May 7–22, 2026 |
| 26V531 | Aug 13 | Rearview camera | Uconnect5 radio software may blank the camera; FMVSS 111 | 844,027 US (100% defect) | Pacifica 131,681 (per AutoEvolution) |
| 26V561 | Sep 1 | ESC | Cracked capacitor in brake pedal position sensor; loss of ESC; FMVSS 126 | 2,017 | Pacifica 1,652 + Voyager 357 + Pacifica PHEV 8 |

### Per-model campaign counts (2026 MY, 2026 filings)

| Model | Campaigns | Which |
|---|---|---|
| Pacifica | 5 | 26V189, 26V296, 26V358, 26V531, 26V561 |
| Voyager | 4 | 26V189, 26V358, 26V531, 26V561 |
| **Grand Caravan** | **0** | — (Canada-only nameplate; no US recall touches it) |

### The counted-vs-excluded arithmetic

- Counted: 5 campaigns touching a 2026 Chrysler.
- Excluded: 2 campaigns filed in 2026 touching only older Chryslers — 26V327 (May 21, camera, 2019 + 2023 Pacifica only) and 26V362 (Jun 4, Pacifica PHEV battery fire, 17,277 model-year 2020–2022 vans, park-outside order). The 26V362 catch required extending the excluded sweep to model years 2022/2021/2020/2019; the standard 2025/2024/2023 sweep missed it. Lesson for future censuses: sweep back to 2019.
- Chrysler-only defects: 3 of 5 (26V189, 26V296, 26V358 are Chrysler-only; 26V531 and 26V561 are Stellantis-shared). Braun filed 2 of the 5 — the conversion company, not the automaker.

### The phantom Voyager PHEV

- NHTSA's recalls-API summary for 26V561 reads: "certain 2025-2026 Chrysler Voyager, Chrysler Pacifica, and **2026 Chrysler Voyager Plug-In Hybrid Electric (PHEV)** vehicles." There is no Voyager PHEV. The Voyager is the gas-only fleet sibling of the Pacifica; only the Pacifica has a plug-in hybrid. The Part 573 population is 1,652 Pacifica + 357 Voyager + **8 Pacifica Plug-in Hybrid**. Autoblog, MoparInsiders, and daxstreet all list the 8 as Pacifica PHEVs. NHTSA's summary text mislabels the model; the underlying filing is correct.
- The 8 PHEVs are 0.4% of the recall — the smallest population slice in the whole census — and the error is in the summary, not the scope. But it is the federal recall database naming a car that doesn't exist, in the same sentence as the cars that do.

### 26V189 expansion arithmetic

- Announced Mar 26, 2026: 178,246 vehicles (154,367 Pacifica + 23,879 Voyager, per press/NHTSA letter).
- Part 573 (May 7, 2026): 293,264 (247,580 Pacifica + 45,684 Voyager) — a 64% expansion, absorbing vehicles migrated out of the earlier recalls 25V302 and 25V573. Dealer bulletin: "about 253,481" need both curtain airbags replaced. 30% defect estimate throughout.
- The airbag supplier is Autoliv; the suspect period ran May 2022–Aug 2025, meaning the defect rode in production for over three years before the first recall.

### 26V531: the big one

- 844,027 US vehicles across 15 model lines and 4 Stellantis brands; Pacifica is 131,681 of them (15.6%). 100% defect estimate — every one of those radios can blank the camera. It is the largest single campaign in the entire census series, and it touches a 2026 Chrysler only because the Pacifica's Uconnect5 radio is the same unit as the Ram's.

## Original contribution

The census itself: the 5-count, the 3-model VPIC list, the per-model table, the 5-counted-vs-2-excluded arithmetic (including the 26V362 catch from the extended 2019 sweep), the 3-of-5 Chrysler-only split, the 2-of-5 Braun share, the 64% 26V189 expansion, the Pacifica 131,681 / 844,027 share of 26V531, and the phantom-Voyager-PHEV finding — all computed from the NHTSA recalls API and Part 573 filings, not quoted from any single source.

## Limitations

- The census counts campaigns, not vehicles: a campaign touching eight PHEVs counts the same as one touching 293,264 vans. Unit counts are reported separately where Part 573 filings give them.
- **26V296 unit-count conflict (unresolved):** MoparInsiders reports 476 vans citing the Part 573; MotorBiscuit reports 1,571 vehicles for the same campaign number. The Part 573 PDF for 26V296 was not directly verified this run. The article uses 476 with attribution and flags the conflict here.
- **26V358 unit count:** not stated in the public filing excerpts reviewed (owner letter + dealer notice give only the May 7–22, 2026 conversion window). The article reports the window, not a count.
- The API's ReportReceivedDate is the filing date, not the defect-discovery date; 26V189 traces to airbags built from May 2022.
- The excluded sweep queried model years 2025–2019; a 2026-filed campaign touching only 2018-or-older Chryslers would be missed.
- The census window closes Nov 15, 2026; campaigns filed Nov 16–Dec 31 are not counted.
- Defect percentages are manufacturer estimates (30% for 26V189, 10% for 26V561, 2% for 26V296); they are not independently verified.
- The "Voyager PHEV" error is in NHTSA's summary text; the Part 573 population table is correct. The article attributes the error to the summary, not the filing.

## Strongest counterargument

Five recalls sounds like a middling year, but the count flatters and misleads in both directions. The biggest number in the set, 26V531's 844,027, is a radio-software bug shared across Stellantis — it says almost nothing about Chrysler's minivans specifically, and the Pacifica is only 15.6% of it. The smallest, 26V561's 2,017, is a genuine Chrysler-specific defect with a federal-standard violation attached. And two of the five were filed by Braun, a conversion company, against a few hundred wheelchair vans — counting them as "Chrysler recalls" is a census convention, not a statement about Chrysler's engineering. The counterargument is partly right: the 5-count mixes three different kinds of thing. But the mix is the point. A 2026 Chrysler buyer faces one airbag recall that grew 64% after filing, one camera recall shared with a million trucks, one ESC recall with a phantom car in the paperwork, and two conversion recalls that only exist because the minivan is the default wheelchair van in America. That is a more honest picture than any single number.

## Actionable takeaways

- If you own a 2022–2026 Pacifica or Voyager: 26V189. Your curtain airbags may not hold pressure in a rollover. The recall expanded once already — if your van was "fixed" under the 2025 recalls 25V302 or 25V573, check the VIN again; migrated vehicles get the new remedy. Check at nhtsa.gov/recalls.
- If you own a 2026 Pacifica or Voyager: 26V531. Shift into reverse and watch the screen; if it goes black, the radio software is the suspect and the fix is a dealer or over-the-air update, free.
- If you own a 2025–2026 Pacifica or Voyager built June–October 2025: 26V561. A cracked capacitor in the brake pedal sensor can kill stability control. The ESC warning light is the tell. Only 2,017 vans are in it — check the VIN, because the build window is narrow.
- If you own a BraunAbility-converted Pacifica or Voyager: 26V296 and 26V358. The wheelchair retractors may not lock, and a wrong spring in the seat harness can impair the airbags. Both fixes are free inspections; call BraunAbility at 1-800-488-0359 with your VIN.
- If you own a 2020–2022 Pacifica PHEV: 26V362 is not in this census (it touches no 2026 car), but it is the one that matters to you — battery fire risk, park outside, do not charge. It was filed June 4, 2026 and covers 17,277 vans.
- If you are shopping: the 2026 Chrysler lineup is two minivans and a nameplate that only exists in Canada. The Pacifica carries all five campaigns; the Voyager carries four; the Grand Caravan carries none, because you cannot buy one here.
