# Research: #1478 — We Recounted Ford's Recalls. It's 41, Not 40. And Lincoln Was Never Counted at All.

**Number:** 1478
**Slug:** 1478-ford-recall-census-41-lincoln-10-corrected-count
**Journalist:** Axle McScatter (Data Visualization Editor; statistical roundups, methodology pieces)
**Kicker:** By The Numbers
**Date:** November 12, 2026

## Angle (1-2 sentences)

This site published Ford's 2026-model-year recall count as 40 yesterday (#1473), and GM's as 15 (#1474). Both were computed with the base-name method that Toyota (#1475) and Honda (#1476) already proved undercounts. I re-ran Ford and GM with the corrected vocabulary, and I ran Lincoln for the first time — a brand no census on this site has ever queried, because it is a separate make in NHTSA's API. The corrected results: **Ford 41, GM 15, Lincoln 10** — and Ford Motor Company as a whole carries **44 distinct campaigns**, three of which live only under the Lincoln badge.

## Kill test

- **Genuinely newsworthy?** Yes. A correction of our own published Ford count (40 to 41), the first Lincoln census on the site (10 campaigns, 3 Lincoln-only), and the completion of the corrected-vocabulary table: all six brands in the series are now on the same method. Fresh pegs: 26V415 (66,383 hybrid SUVs that may go silent below 30 kph, no pedestrian warning sound), 26V688 (a supplier changed anti-rust oil without telling Ford, and 11,623 Lincolns can shift themselves into neutral), 26V691 (36,994 Navigators whose front passenger seat moves on its own, in the news November 9).
- **Novel on site?** Yes. No prior Lincoln brand-level census exists; no prior draft covers 26V415 as a census item. 26V688 was covered standalone twice (#1321, #1356) and 26V691 plus 26V120 in #1423 — but never counted, never compared, and never as part of a Ford Motor Company total. The original contribution is the 41/10/15 recount, the 44 combined total, the Super Duty non-reproducibility finding, and the completed six-brand corrected table — computed, not quoted.
- **Original contribution:** the corrected 41/10/15 census below (NHTSA recalls API, Nov 12, 2026, 404 queries), the Lincoln-first finding, the vocabulary-gap catches (26V415 under "explorer hybrid", 26V688 invisible under "corsair hybrid"), the Super Duty API gap, per-model counts, component mix, and the six-brand comparison — computed, not quoted.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model lists per make (Ford 42 names incl. body-builder junk, Lincoln, Chevrolet, GMC, Cadillac, Buick), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants and targeted trims (F-150 Hybrid, Explorer Hybrid, Maverick Hybrid, Mustang Mach-E as "mustang mach e", F-250/F-350/F-450/F-550 Super Duty, Silverado/Sierra 1500/2500/3500/EV, Blazer EV, Equinox EV, Escalade ESV/IQ/IQL, Yukon XL, Hummer EV Pickup/SUV); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026 (DD/MM/YYYY); deduped by campaign number. 404 queries total (Ford 176, Lincoln 20, GM 208). Raw results saved at drafts/1478-ford-gm-recall-census-corrected-raw.json; runner at drafts/1478-census-run.py. https://www.nhtsa.gov/recalls
2. **#1473 research file** (drafts/1473-ford-recall-census-40-new-model-campaigns-research.md) — the Nov 11 Ford baseline this piece corrects: Ford 40, Toyota 7, Honda 2; base-name method; per-model table (Explorer 12, Bronco 9, F-150 8, Ranger 7, F-250 Super Duty 6, Bronco Sport 5, Maverick 5, F-350 Super Duty 5, Mustang 4, Expedition 2, Escape 1, Transit 1).
3. **#1474 research file** (drafts/1474-gm-recall-census-15-new-model-campaigns-research.md) — the Nov 11 GM baseline: GM 15, same base-name method, same day.
4. **#1475 research file** (drafts/1475-toyota-recall-census-15-corrected-count-research.md) — the corrected-vocabulary method and the corrected Toyota baseline (15); also the source of the "Ford/GM re-run is owed" flag.
5. **#1476 research file** (drafts/1476-honda-recall-census-4-corrected-count-research.md) — the corrected Honda baseline (4) and the DD/MM/YYYY trap documentation; repeats the Ford/GM re-run flag.
6. **#1477 research file** (drafts/1477-hyundai-kia-recall-census-15-to-4-research.md) — the corrected Hyundai (15) and Kia (4) baselines completing the six-brand table.
7. **NHTSA Part 573 Safety Recall Report, 26V415** (Jun 28, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V415-6798.pdf — 66,383 vehicles (18,242 Explorer Hybrid 2025-2027, 48,141 Nautilus Hybrid 2024-2027); Harman 24-channel DSP module; audio processing software error; pedestrian warning sound may not emit below 30 kph in electric mode; 72 warranty claims (65 Nautilus, 7 Explorer) as of May 1, 2026; expansion of 25V691; DSP module replacement for 28-speaker Nautilus, other remedies under development; interim letters Aug 3, 2026. Acknowledgement letter: https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V415-9662.pdf
8. **NHTSA Part 573 Safety Recall Report, 26V688** (Oct 20, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V688-0857.pdf — 11,623 vehicles (11,560 Nautilus Hybrid 2026-2027, 63 Corsair Hybrid 2027); HF55 transmission; IPM supplier changed anti-rust oil without notifying Ford or validating compatibility; oil degrades conformal coating on the PCB, corrosion drops voltage on the rotary sensor; unexpected shift to Neutral while driving, or inability to shift out of Park when stationary; DTC P271A; 15 US warranty claims (106 global), 1 US field report, 1 US customer report, 0 crashes/fires/injuries as of Sep 28, 2026; remedy is IPM replacement; repair instructions expected Dec 21, 2026. Acknowledgement letter: https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V688-2238.pdf
9. **USA Today, "Ford recalls over 36K vehicles. See the affected model"** (Nov 9, 2026): https://www.usatoday.com/story/cars/recalls/2026/11/09/ford-recalls-vehicles-lincoln-navigator-model/92687705007/ — 26V691, 36,994 2025-2027 Lincoln Navigators; Rear Audio Control Module may command the chauffeur seat feature, front passenger seat moves unexpectedly; Ford 26S77; owner letters in November.
10. **#1423 research file** (drafts/1423-navigator-audio-module-moves-seat-research.md) — prior standalone coverage of 26V691 and 26V120: 26V120 covers 1,189 2026 Navigators built Nov 26–Dec 16, 2025 at Kentucky Truck Plant; driver-seat obstacle-detection software may reverse the seat unexpectedly, moving the driver away from the pedals; Gentherm module; remedy removes the automatic reversal feature; owner letters Mar 13–27, 2026; 0 crashes/injuries. Also notes Oct 20, 2026 was a four-recall filing day (26V688, 26V689, 26V691, Toyota 26V690).
11. **WardsAuto, "Ford recalls 66K hybrid SUVs for missing pedestrian warning sounds"** (Jul 9, 2026): https://www.wardsauto.com/news/ford-recalls-66k-hybrid-suvs-for-missing-pedestrian-warning-sounds/824753/ — independent confirmation of 26V415's 66,383 count, the 25V691 expansion (Oct 2025, ~43,000 Nautilus), and the 100% defect estimate.
12. **The Autowire, "Lincoln Nautilus Hybrid Recall: 11,623 Can Shift to Neutral"** (Nov 3, 2026): https://theautowire.com/2026/11/03/lincoln-nautilus-hybrid-recall-supplier-anti-rust-oil-park-module/ — independent confirmation of 26V688's supplier-oil mechanism, unit split, and claim counts.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Brand | Nov 11, as published | Nov 12, corrected |
|---|---|---|
| **Ford** | 40 (#1473) | **41** |
| **Lincoln** | never counted | **10** |
| **GM** | 15 (#1474) | **15** (confirmed) |
| **Ford Motor Company (Ford + Lincoln, deduped)** | — | **44** |

### Six-brand corrected table (same method family, all re-run or confirmed)

| Brand | 2026 campaigns |
|---|---|
| Ford | **41** |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Honda | 4 |
| Kia | 4 |

Ford's lead over the three-way tie at 15 is 2.7x. Lincoln, counted for the first time, would sit between Hyundai and Honda at 10 — and 7 of its 10 are shared with Ford, so the company-wide total is 44, not 51.

### The 41 Ford campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V024 | Jan 21 | Visibility: windshield | Explorer |
| 26V062 | Feb 4 | Electrical: traction battery | E-Transit |
| 26V104 | Feb 21 | Electrical: integrated trailer brake control | Expedition, F-150, Maverick, Ranger, E-Transit, Navigator |
| 26V118 | Mar 3 | Back-over prevention: warnings | E-350, E-450 |
| 26V121 | Mar 3 | Exterior lighting: headlights | Explorer |
| 26V124 | Mar 4 | Back-over prevention: software | Bronco |
| 26V157 | Mar 17 | Visibility: sun/moon roof | Maverick |
| 26V159 | Mar 17 | Seat belts | Explorer, Aviator |
| 26V201 | Mar 31 | Air bags: occupant classification sensor | Bronco Sport, Maverick |
| 26V202 | Mar 31 | Visibility: defroster | Explorer, Aviator |
| 26V205 | Mar 31 | Engine: hard parts | Explorer, Mustang |
| 26V238 | Apr 14 | Structure: sun visor | Ranger |
| 26V239 | Apr 14 | Equipment: engine block heater | Bronco Sport |
| 26V268 | Apr 28 | Seats: critical fasteners | Bronco, Ranger |
| 26V301 | May 13 | Power train: park pawl | Escape, Corsair |
| 26V335 | May 26 | Equipment: labels | Bronco, Ranger |
| 26V340 | May 27 | Suspension: lower ball joint | Bronco Sport, Maverick |
| 26V343 | May 27 | Engine: hard parts | Bronco, Explorer, Ranger |
| 26V403 | Jun 24 | Structure: body | Bronco |
| **26V415** | **Jun 30** | **Back-over prevention: warnings** | **Explorer Hybrid, Nautilus Hybrid — THE NEW ONE. Pedestrian warning sound may not emit below 30 kph in EV mode. 66,383 vehicles.** |
| 26V418 | Jun 30 | Visibility: wiper motor | Mustang, Mustang GTD (67,994 vehicles) |
| 26V451 | Jul 14 | Seats: mid/rear assembly | Explorer, Aviator |
| 26V468 | Jul 21 | Engine | Bronco engine-compartment wiring, fire risk (565,691 vehicles) |
| 26V470 | Jul 21 | Seats: front power adjust | Explorer, Aviator |
| 26V532 | Aug 13 | Engine: hard parts | Explorer |
| 26V547 | Aug 25 | Electrical: wiring | Mustang ground eyelet (148,663 vehicles) |
| 26V548 | Aug 25 | Engine: hard parts | Bronco, Bronco Sport, Mustang, Ranger, Explorer |
| 26V550 | Aug 25 | Structure: body | Bronco Sport, F-150, Maverick (23-vehicle torque check) |
| 26V576 | Sep 9 | Power train: differential | F-150 |
| 26V577 | Sep 9 | Suspension: rear | F-150 |
| 26V578 | Sep 9 | Fuel system: tank mounting | F-150 |
| 26V579 | Sep 9 | Seat belts: rear buckle | Transit |
| 26V580 | Sep 9 | Air bags: curtain | Bronco |
| 26V581 | Sep 9 | Air bags: frontal | Explorer |
| 26V605 | Sep 22 | Back-over prevention: display | Ranger |
| 26V606 | Sep 22 | Exterior lighting: headlights | Expedition (also F-250/F-350 per summary) |
| 26V653 | Oct 6 | Electrical: instrument cluster | F-150 (also F-250/F-350 per summary) |
| 26V655 | Oct 6 | Seats | F-150 |
| 26V689 | Oct 20 | Structure: tailgate | F-150 tailgate cable (30,123 vehicles; also F-250/F-350 per summary) |
| 26V725 | Nov 2 | Visibility: wiper | Bronco wiper arm nut |
| 26V726 | Nov 2 | Interior lighting | Explorer Police Interceptor map lights |

### The 10 Lincoln campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V104 | Feb 21 | Electrical: integrated trailer brake control | Navigator (shared with Ford) |
| 26V120 | Mar 3 | Seats: front power adjust | Navigator driver seat reverses unexpectedly (1,189 vehicles; Lincoln-only; covered standalone #1423) |
| 26V159 | Mar 17 | Seat belts | Aviator (shared) |
| 26V202 | Mar 31 | Visibility: defroster | Aviator (shared) |
| 26V301 | May 13 | Power train: park pawl | Corsair (shared) |
| 26V415 | Jun 30 | Back-over prevention: warnings | Nautilus Hybrid (shared; see above) |
| 26V451 | Jul 14 | Seats: mid/rear assembly | Aviator (shared) |
| 26V470 | Jul 21 | Seats: front power adjust | Aviator (shared) |
| 26V688 | Oct 20 | Power train: automatic transmission | Nautilus Hybrid + Corsair Hybrid shift to neutral; supplier changed anti-rust oil without telling Ford (11,623 vehicles; Lincoln-only; covered standalone #1321, #1356) |
| 26V691 | Oct 20 | Seats: front power adjust | Navigator front passenger seat moves on its own via the stereo module (36,994 vehicles; Lincoln-only; covered standalone #1423) |

### The 15 GM campaigns (confirmed, identical set to #1474)

26V114 (Feb 26, owner's manual), 26V127 (Mar 5, Express/Savana tires), 26V129 (Mar 5, Silverado/Sierra 3500 fuel pump), 26V289 (May 7, transfer case), 26V304 (May 14, hub bolts), 26V345 (May 28, Express/Savana steering column), 26V394 (Jun 18, Vistiq seats), 26V399 (Jun 23, Express/Savana steering nut), 26V494 (Jul 30, EV traction battery), 26V496 (Jul 30, EV steel wheels), 26V539 (Aug 20, rearview camera), 26V612 (Sep 24, Optiq windows), 26V696 (Oct 21, Traverse/Acadia seats), 26V717 (Oct 29, brake control module), 26V718 (Oct 29, Express/Savana steering nut again). No new GM campaign surfaced under any corrected-vocabulary query. GM's base-name count happened to be complete.

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

**Ford:** Explorer 12, Bronco 9, F-150 8, Ranger 7, Bronco Sport 5, Maverick 5, Mustang 4, Expedition 2, E-Transit 2, Escape 1, Transit 1, E-350 1, E-450 1, Explorer Hybrid 1, Mustang GTD 1. Mustang Mach-E 0, Edge 0 (discontinued). Super Duty: the API returns zero rows for F-250/F-350/Super Duty under every spelling tried, with or without modelYear; campaign summaries mention F-250/F-350 in 4 of the 41 (26V104, 26V606, 26V653, 26V689). See Limitations.
**Lincoln:** Aviator 4, Navigator 3, Nautilus Hybrid 2, Corsair 1 by query (plus 26V688 by summary — "corsair hybrid" itself returns zero rows; see below).
**GM:** Express/Savana 4, Escalade/ESV/Tahoe/Suburban 1500/Yukon/Yukon XL 3, Silverado EV/Sierra EV 3, Vistiq 3, Silverado 1500/Sierra 1500 2, Silverado 3500/Sierra 3500 2, Blazer EV/Lyriq 2, Optiq 2, Escalade IQ/IQL 2, Traverse/Acadia 2, Silverado 2500/Sierra 2500 1, Equinox/Colorado/Canyon/Terrain/Enclave/Envision/CT5/Hummer EV/Equinox EV/Corvette 1 (26V114), Encore GX/Trailblazer 1 (26V539), Celestiq 1 (26V717). Trax, Blazer (gas), XT4, XT5, XT6, Envista, CT4: 0.

### Component mix

**Ford 41:** Visibility 5, Seats 4, Engine/cooling 4, Electrical 4, Structure 4, Back-over prevention 4, Air bags 3, Power train 2, Suspension 2, Seat belts 2, Exterior lighting 2, Equipment 2, Interior lighting 1, Fuel system 1, Engine (plain) 1. **0 of 41 flagged overTheAirUpdate=true.**
**Lincoln 10:** Seats 4, Power train 2, Seat belts 1, Visibility 1, Back-over prevention 1, Electrical 1. **0 of 10 flagged over-the-air.**
**GM 15:** Steering 3, Wheels 2, Seats 2, Equipment/manual 1, Tires 1, Fuel system 1, Power train 1, Traction battery 1, Back-over prevention 1, Service brakes 1, Visibility 1. **0 of 15 flagged over-the-air.** Same 0-for-everything result as Toyota (0/15), Honda (0/4), Hyundai (0/15), Kia (0/4). No brand in this census has shipped a single software fix over the air.

### Timing

**Ford:** Jan 1, Feb 2, Mar 8, Apr 3, May 4, Jun 3, Jul 3, Aug 4, Sep 8, Oct 3, Nov 2. March and September tie at 8; Sep 9 alone produced 6 (26V576–26V581). Newest: Nov 2 (26V725, 26V726). No filings Nov 3–12.
**Lincoln:** Feb 1, Mar 3, May 1, Jun 1, Jul 2, Oct 2. October 20 produced two Lincoln-only campaigns in one day (26V688, 26V691).
**GM:** Feb 1, Mar 2, May 3, Jun 2, Jul 2, Aug 1, Sep 1, Oct 3. No filings in November (yet).

### How the undercount happened (Ford)

The NHTSA recalls API returns HTTP 400 for a make+model+modelYear combination with no matching rows, and prior runs treated 400 as zero campaigns. That rule is correct for gas models with no recalls — but it is also what the API returns when the model name is wrong. "Explorer" returns 12 campaigns and none of them is 26V415, because 26V415's vehicles are filed under "Explorer Hybrid" — a distinct model name in the API. Only the "explorer hybrid" query returns it. The same trap caught Toyota (Camry, Land Cruiser, Sienna, RAV4) and Honda (Accord Hybrid, CR-V Hybrid). Ford's exposure was exactly one campaign, because only the Explorer Hybrid is a hybrid-only nameplate in Ford's 2026 lineup whose campaigns don't also appear under a gas sibling's name. The Mustang Mach-E returns zero under both "mustang mach-e" and "mustang mach e".

### The Lincoln blind spot

Lincoln is a separate make in NHTSA's API. A census that queries make=ford never sees a Lincoln campaign, even one shared with a Ford model — unless the Ford sibling's query returns it. Seven of Lincoln's 10 are shared and were visible anyway; three were not: 26V120 (Navigator seat, March), 26V688 (Nautilus/Corsair neutral shift, October), 26V691 (Navigator seat, October). All three were covered as standalone stories (#1423, #1321, #1356), so the site knew about them — it just never counted them. The brand-level table understated Ford Motor Company by 3 campaigns for the entire series.

### The Corsair Hybrid corollary

26V688 covers 2027 Corsair Hybrids — 63 of them — but "corsair hybrid" returns zero rows from the API. The campaign is only visible via the Nautilus Hybrid query. A census that queried only Corsair models would miss a Corsair recall. The vocabulary trap is not a Toyota problem or a Honda problem; it is an API-shape problem, and it reproduces inside the very census built to catch it.

### The Super Duty hole

The API returns zero rows for F-250, F-350, F-250 Super Duty, F-350 Super Duty, F-450 Super Duty, F-550 Super Duty, and Super Duty, at modelYear=2026 and with no year filter at all. Yet four of the 41 campaign summaries explicitly cover F-250/F-350 (26V104, 26V606, 26V653, 26V689). #1473 credited the F-250 with 6 campaigns and the F-350 with 5; those counts are not reproducible from the API under any spelling tried, and the discrepancy is unresolved. The honest statement is the summary-supported 4. Direction of any remaining bias: undercount.

## Strongest counterargument

Campaign counts are not severity scores, and the headline correction — 40 to 41 — is one campaign, a software recall that expands an October 2025 campaign (25V691) rather than a new defect. Counting an expansion as a fresh campaign flatters the "Ford keeps climbing" frame: strip the expansion and Ford is at 40 with a different composition. Lincoln's 10 is mostly shared with Ford (7 of 10), so the company-wide 44 is only 3 more than the Ford-only count — the "never counted" framing oversells a 3-campaign delta. GM's 15 didn't move at all under the corrected method, which shows the vocabulary trap is brand-specific, not universal; Toyota's doubling does not generalize. And the Super Duty hole cuts the other way too: if the API cannot see Super Duty campaigns, the Ford count could be missing more than it found — 41 is a floor with an unknown ceiling, and presenting it as "corrected" implies a precision the method cannot support for trucks. Finally, Ford's 41 partly reflects its November 2024 consent order pushing aggressive early filing, and Toyota's 15 may partly reflect the opposite threshold. Counts measure reporting, not danger.

The counterargument weakens on the Lincoln-only three: 26V688 is a loss-of-drive-power defect with a supplier that changed a chemical without telling Ford, and 26V691 is a stereo module moving a seat — both are real defects on real 2026 vehicles that no Ford-make query could ever return. The method's limit on trucks is stated, not hidden. And the six-brand table is now fully corrected, so the comparison it supports is apples-to-apples for the first time in the series.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The expansion (26V415) is stated alongside the headline (41); the ex-expansion total is 40 with a different composition.
- Super Duty: the API returns no 2026 rows for any Super Duty spelling; per-model counts for F-250/F-350 rest on campaign summaries (4 campaigns), not queries. #1473's 6/5 counts are not reproducible; the discrepancy is flagged, not resolved.
- NHTSA API vocabulary gaps remain the central risk: this census queried 42 VPIC Ford names (including body-builder junk that 400s harmlessly) plus suffix variants and targeted trims, 404 queries total, but a campaign could still hide under an untested spelling. Mitigation: every 2026-filed campaign found was cross-checked against its summary's model list; the two largest new items (26V415, 26V688) were confirmed in Part 573 filings and independent coverage; the direction of any remaining bias is undercount.
- Unit counts (66,383 for 26V415; 11,623 for 26V688; 36,994 for 26V691; 1,189 for 26V120) are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 26V691 population spans 2025-2027; 26V688 spans 2026-2027.
- The 2026 model year is still in progress and late filings will move all counts. No campaigns were filed Nov 3–12, 2026 in this census; that window is short and proves nothing.
- NHTSA's overTheAirUpdate flag may undercount software remedies not flagged as such.
- GM commercial chassis (4500HD/5500XD/6500XD, BrightDrop) return no 2026 campaigns in the API; the census covers the consumer lineup, same as #1474.

## Actionable takeaways

- If you own a 2025–2027 Explorer Hybrid or 2024–2027 Nautilus Hybrid: check your VIN at nhtsa.gov/recalls for 26V415. The symptom is silence — no pedestrian warning sound below 30 kph in electric mode. The 28-speaker Nautilus gets a new DSP module; other vehicles' remedy is still under development, so check whether your interim letter has arrived.
- If you own a 2026–2027 Nautilus Hybrid or 2027 Corsair Hybrid: check for 26V688. Warning signs are a wrench light with "Service Vehicle Soon" or "Shifting System Error," and diagnostic code P271A. The fix (a new park module) has no firm date — repair instructions were expected December 21, 2026. Do not ignore a shift-to-neutral event; pull over and call the dealer.
- If you own a 2025–2027 Navigator: check for 26V691. If the front passenger seat moves on its own, the fix is a software update that disables chauffeur mode — free, and the dealer already has it. The March seat recall (26V120) applies to 2026 Navigators built Nov 26–Dec 16, 2025.
- If you are shopping a 2026 Ford or Lincoln: the Explorer carries 12 campaigns, the Bronco 9, the F-150 8, the Aviator 4, the Navigator 3. A first-year redesign with a dozen federal campaigns is a reason to buy the second year, or to negotiate like you know.
- If you run a recall census of your own: never trust a bare model name in the NHTSA API, and never trust a single make to cover a company. Query the VPIC canonical list, then the hybrid and plug-in variants — and query the luxury division separately. A 400 is not always a zero, and a make is not always a company.
