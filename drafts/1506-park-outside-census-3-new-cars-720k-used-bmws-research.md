# Research: #1506 — Three New Cars Got the Park-Outside Order This Year. The 720,796-Car One Went to Used BMWs.

**Number:** 1506
**Slug:** 1506-park-outside-census-3-new-cars-720k-used-bmws
**Journalist:** Vin Wreckage (Existential Dread Columnist; paradoxes, counterintuitive findings — the angle is a flag census whose headline count is 3, whose biggest finding is the 720,796-car order the method excludes, and whose do-not-drive list contains the same ball joint twice at wildly different scales)
**Kicker:** Investigation
**Date:** November 14, 2026

## Angle (1-2 sentences)

I ran the corrected-vocabulary census across every 2026 model-year vehicle sold in America, 39 makes, 2,782 API queries, and counted not campaigns but flags: the two strongest orders NHTSA can give a car, park-outside and do-not-drive. The count is **3 park-outside campaigns and 4 do-not-drive campaigns** touching a 2026 model-year vehicle, covering 96,389 and 4,882 vehicles respectively, and all three park-outside campaigns carry a **100 percent defect estimate**. The order that defines 2026, BMW's 26V733 park-outside on 720,796 cars with no remedy, touches zero 2026 models, which is the point: park-outside is now a used-car problem, and the new-car list is a fuel cap, a battery, and a software fuse.

## Kill test

- **Genuinely newsworthy?** Yes. First flag census on the site: nobody has counted park-outside and do-not-drive orders as a population. Fresh hooks: the 3-and-4 count itself; the 100-percent-defect pattern across all three park-outside campaigns; the ball-joint pair (Ford 26V340 at 4,653 cars and Subaru 26V685 at 8 cars, same component, same year, 581x scale gap); the 51-car Nissan LEAF park-outside, the smallest population in the census, with two cars that already burned while parked outside and not charging; the Lucid OTA irony (park outside, then fix the car from your driveway with software 2.10.0, while NHTSA's API insists the fix is not over-the-air); and the Mack twin (26V351, 644 trucks, same defect and same week as Volvo's 26V350) that the API cannot see at all.
- **Novel on site?** Yes. Individual campaigns were covered as standalones or inside brand censuses (26V540 inside #1498, 26V188 inside #1480, 26V289 inside #1474/#1500/#1505, 26V340 inside #1473's Ford 40), but never as a flag census, never with the 3-and-4 count against the full 2026 lineup, never with the per-flag vehicle totals, never with the 100-percent-defect pattern, never with the ball-joint pair, and never with the 720,796-car excluded comparison. The original contribution is the 3-and-4 count, the 96,389 / 4,882 vehicle totals, the 100-percent pattern, the ball-joint pair, the Mack cross-check, and the completed 39-make table — computed, not quoted.
- **Killed angles this run (duplicate screen):** A standalone 26V733 piece would duplicate #1490 (Nov 13). A standalone 26V721 piece would duplicate #1457. A standalone 26V540 piece would duplicate #1498's Lucid census (which already carries the 27,185 / 100% / 3-fires finding). A brand census for Buick or Cadillac would double-count the GM 15 (per #1505's killed-angles note). The IIHS Kicks/RAV4 round would duplicate #1244/#1278/#1346/#1408/#1484. The NHTSA H1 2026 numbers would duplicate #1494. The FARS deaths-per-crash angle would duplicate "who-dies-weight-class-hierarchy."

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) + **VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model lists for 38 makes + curated lists for Ram and Mini (VPIC make names polluted with trailer/motorcycle makers) + Mack cross-check; every canonical name plus Hybrid / Plug-In Hybrid / Electric / Recharge suffix variants; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number; recorded parkOutSide and parkIt flags per campaign. **2,782 queries, 188 distinct 26V campaigns, 225 brand-level mentions.** Raw results saved at drafts/1506-park-outside-census-raw.json; run scripts drafts/1506-census-run.py + drafts/1506-census-extras.py. **Date-format trap (same as #1476/#1501/#1502/#1503/#1504/#1505):** ReportReceivedDate comes back as DD/MM/YYYY ("21/08/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — a 400 is an empty result, not a failed query, except when it is a vocabulary failure (see limitations).
2. **NHTSA Part 573 Safety Recall Report 26V540** (filed Aug 20, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V540-2255.pdf — **27,185** 2022-2026 Lucid Air, 100% defect estimate, 3 fires + 4 smoke incidents, eFuse overcurrent, remedy software 2.10.0 released OTA July 2026, 20,719 updated / 6,466 not at filing, letters Oct 16, 2026. NHTSA subject line: "Park Outside: Exterior Lighting Circuit May Cause Fire." Cross-checked against site story #1498, which carried the same finding inside the Lucid census.
3. **NHTSA Part 573 Safety Recall Report 26V188** (filed Mar 25, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V188-8548.pdf — **51** 2026 Nissan LEAF, 100% defect estimate, cathode edge damage in supplier manufacturing, battery ID-to-VIN traceability, **2 thermal incidents** (Osaka, Feb 16, 2026: car off, parked outside, not charging; U.S., Mar 2, 2026: same conditions), 0 accidents/injuries. NHTSA subject line: "Park Outside: High Voltage Battery Modules May Short Circuit." Remedy: park outside, do not charge, dealer inspects/replaces battery modules; letters Sep 2, 2026 (API record; interim letters Apr 17, 2026 per RCAK).
4. **NHTSA Part 573 Safety Recall Report 26V106** (filed Feb 23, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V106-8604.pdf — **69,153** total (17,446 2026 Crosstrek Hybrid + 51,707 2025 Forester Hybrid), 100% defect estimate, fuel filler cap gasket, fuel can spill from the filler neck when the tank is near full and ambient temperature rises, **33 leak reports in the U.S., 0 fires, 0 injuries**. Remedy: park outside, limit fuel to 50%, dealer replaces the gasket with an O-ring design; letters Mar 25, 2026. (Subaru's dealer bulletin lists 66,332 U.S. vehicles; the 69,153 filed total includes Canada.)
5. **NHTSA Part 573 Safety Recall Report 26V340** (filed May 27, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V340-0609.pdf — **4,653** (2,296 2021-2026 Bronco Sport + 2,357 2022-2026 Maverick), 1% defect estimate, front lower control arm ball joint may be improperly assembled or repaired, ball stud partially engaged, separation = loss of control. **0 crashes/injuries known.** Do-not-drive; letters June 4-5, 2026; Ford 26S36.
6. **NHTSA acknowledgement letter, 26V350** (Jun 3, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V350-0515.pdf — **155** U.S. Volvo Trucks (2026 VAH, 2026-2027 VN/VHD/VNL, 2027 VNR), wheel lug nuts may loosen and wheel detach; masking material from painting left between wheels and axle hubs. Subject line: "Do Not Drive: Wheel May Detach." Letters June 15, 2026; Volvo RVXX2606.
7. **NHTSA acknowledgement letter, 26V289** (report received May 7, 2026): 66 vehicles, do-not-drive, transfer case missing oil pickup tube (Magna Powertrain de Mexico – Ramos); 12 are 2026 Sierra 1500s. Source: site stories #941/#1031 and #1505 research (GM N262557620). The only parkIt flag in the GM family.
8. **Subaru 26V685 field reporting, Oct 2026** (Autoblog, KBB, automotor.news, fastlaneonly — all reading the Part 573): **8 vehicles** (4 2026 Crosstrek built Aug 4-6 + 4 2026 Forester built Aug 5-13), left-front lower control arm ball joint castle nut may not be tightened to spec, supplier TOA (USA) LLC (Mooresville, Indiana), **one field report Sep 15, 2026 of a separated ball joint**, decision Oct 10, 2026, letters Dec 16, 2026, Subaru WRI26. KBB notes Subaru says there may be no warning before failure.
9. **Mack 26V351 cross-check (outside the API sweep):** CCJ Digital / Overdrive, Jun 15-16, 2026 — **644 Mack trucks** (2026 Anthem, 2026-2027 Pinnacle/Pioneer/Granite, 2027 Anthem), same wheel-lug defect and same week as Volvo 26V350, do-not-drive, Mack SC0495. The API returns HTTP 400 for every Mack model spelling tried (anthem, pinnacle, pioneer, granite, md, mde, anthem an, pinnacle pi) — the campaign is invisible to the sweep, same vocabulary-gap class as #1480's Kicks MPV hole and #1483's Z4 hole. Included as a disclosed cross-check, not in the 7-count.
10. **BMW 26V733 context (excluded elephant):** NHTSA consumer alert Nov 13, 2026 + Reuters; site story #1490. **720,796** 2012-2018 BMWs, water pump connector, park-outside, **no remedy available**, letters Dec 25, 2026, ~10 field incidents, 0 crashes/injuries. Verified not to touch any 2026 model year (2012-2018 only), so it is excluded from the census by the model-year rule — the same exclusion logic as the L87 in #1505.
11. **BMW 26V438 negative check:** NHTSA acknowledgement letter RCAK-26V438-1981 (Jul 22, 2026), read Nov 14, 2026: subject "Starter Motor May Overheat and Cause a Fire," **318,495** vehicles including the 2026 Z4, remedy is dealer starter replacement, **no park-outside advisory**. The API cannot return this campaign (model "z4" 400s for MY2026, per #1483), but the RCAK confirms it is not flagged, so the 3-count is not missing a fourth park-outside.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Flag | Campaigns | Vehicles |
|---|---|---|
| **Park outside** | **3** | **96,389** |
| **Do not drive** | **4** | **4,882** |
| **Total flagged** | **7** | **101,271** |
| Unflagged 2026 campaigns | 181 | — |
| **All 2026 campaigns** | **188** | — |

7 of 188 campaigns carry an extreme advisory: 3.7%. The other 181 are bring-it-in-when-convenient.

### The 3 park-outside campaigns

| Campaign | Date | Brand / models | Vehicles | Defect estimate | What it is |
|---|---|---|---|---|---|
| 26V106 | Feb 24 | Subaru Crosstrek Hybrid 2026 + Forester Hybrid 2025 | 69,153 (66,332 U.S.) | 100% | Fuel cap gasket; near-full tank + heat = fuel spills from the filler neck. Park outside + half a tank. 33 leak reports, 0 fires. |
| 26V188 | Mar 25 | Nissan LEAF 2026 | 51 | 100% | Battery cathode damage in manufacturing; internal short. Park outside + do not charge. 2 thermal incidents, both cars off and parked outside and not charging. |
| 26V540 | Aug 20 | Lucid Air 2022–2026 | 27,185 | 100% | eFuse overcurrent on exterior lighting circuits. Park outside until software 2.10.0. 3 fires + 4 smoke incidents. 20,719 already updated at filing; 6,466 had not. |

All three carry a 100% defect estimate. Park-outside is not issued for "some cars might." It is issued when every car in the population carries the defect.

### The 4 do-not-drive campaigns

| Campaign | Date | Brand / models | Vehicles | Defect estimate | What it is |
|---|---|---|---|---|---|
| 26V289 | May 7 | GM Sierra 1500 / Yukon / Yukon XL 2026 (+ older SUVs with replacement transfer cases) | 66 | — | Transfer case missing oil pickup tube; wheel can lock up. 12 are 2026 Sierra 1500s. 4 field complaints, 0 crashes/injuries. |
| 26V340 | May 27 | Ford Bronco Sport 2021–2026 + Maverick 2022–2026 | 4,653 | 1% | Front lower control arm ball joint improperly assembled/repaired; separation = loss of control. 0 crashes/injuries known. |
| 26V350 | May 28 | Volvo Trucks VAH/VN/VHD/VNL/VNR 2026–2027 | 155 | — | Wheel lug nuts loosen (paint masking material between wheel and hub); wheel can detach. |
| 26V685 | Oct 19 | Subaru Crosstrek / Forester 2026 | 8 | — | Left-front lower control arm ball joint castle nut not tightened to spec; separation = loss of control. 1 field report of a separation. |

Two of the four do-not-drives are the same component: the front lower control arm ball joint, at Ford (4,653 cars) and Subaru (8 cars). Same part, same year, 581x scale gap. The ball joint is 2026's do-not-drive defect.

### The excluded elephant

| Campaign | Date | Vehicles | Why excluded |
|---|---|---|---|
| 26V733 (BMW water pump) | Nov 4, 2026 | 720,796 | Model years 2012–2018; touches zero 2026 models. Park-outside, no remedy. |
| 26V351 (Mack wheel lug) | May 28, 2026 | 644 | Cross-check only: API returns 400 for every Mack model spelling; found via CCJ/Overdrive. Do-not-drive, same defect as 26V350. |

The excluded park-outside population (720,796) is 7.5x the entire counted park-outside population (96,389). For every new car NHTSA told to park outside this year, 7.5 used cars got the same order.

### Per-brand campaign counts (2026 MY, 2026 filings — corrected, cross-checked against every standalone brand census)

Ford 40, Toyota 15, Hyundai 15, Chevrolet 13, Volvo 12, Jeep 12, GMC 11, Ram 11, Lincoln 10, Cadillac 7, Land Rover 7, Mercedes 7, Nissan 7, BMW 6, Lexus 6, Subaru 5, Lucid 5, Honda 4, Kia 4, Tesla 4, VW 4, Genesis 3, Rivian 3, Buick 2, Chrysler 5, Dodge 2, Acura 1, Alfa Romeo 1, Audi 1, Infiniti 1, Mitsubishi 1, Fiat 0, Jaguar 0, Maserati 0, Mazda 0, Mini 0, Polestar 0, Porsche 0. Total distinct: 188. Brand-level mentions: 225 (shared campaigns counted once per brand).

### The OTA flag is wrong again

NHTSA's API flags **0 of the 7 flagged campaigns** as over-the-air. The remedy text says otherwise for 26V540: Lucid "has released an over-the-air (OTA) software update" — the fix is software 2.10.0, installed in the driveway. Same failure mode as the series found in #1500 (26V129, 26V717) and #1505 (25V594): the flag undercounts software remedies. The census counts the flag as filed and the remedy text as written; they disagree, and the remedy text is right.

### Timing

February: 1 park-outside (26V106). March: 1 park-outside (26V188). May: 3 do-not-drives (26V289, 26V340, 26V350). August: 1 park-outside (26V540). October: 1 do-not-drive (26V685). The two advisories never share a month. The last flagged filing was Oct 19 — three and a half weeks of silence through Nov 14.

## Strongest counterargument

Seven campaigns is a small number, and the flags flatter the new-car market four ways. First, the count is small because the method is narrow: it counts campaigns touching 2026 model-year vehicles, and most park-outside and do-not-drive orders hit older cars by design — the 720,796 BMWs are the rule, not the exception, and a reader who takes "3 park-outsides" as the year's fire risk is wrong about three-quarters of a million cars. Second, the vehicle totals are dominated by one campaign: 26V106's 69,153 is 72% of the park-outside total and 68% of the flagged total, and it is a fuel cap gasket, a fifty-cent part, with zero fires. Third, the 100-percent-defect pattern is partly definitional: manufacturers only issue the extreme advisories when they can trace the defect to every car, so the pattern says more about when lawyers allow the order than about how dangerous new cars are. Fourth, the do-not-drive list is dominated by precision recalls (8 Subarus, 66 GMs, 155 Volvos) that are really traceability exercises — the manufacturer found the eight bad nuts, not eight thousand. The honest headline might be that the extreme advisories are working as designed: rare, precise, and mostly aimed at cars already out of production.

The counterargument weakens on the one thing the count does prove: for a buyer of a 2026 car, the extreme advisories are nearly extinct — 7 of 188 campaigns, 3.7% — and the three park-outsides are all 100-percent-defect, all fire, all real. The LEAF's two burned cars were parked outside, turned off, and not charging, which is the advisory already in effect by luck. And the Ball-joint pair shows the same component failing at two manufacturers in the same year, which is a supply-chain story the count surfaces and the counterargument does not answer.

## Limitations

- The census counts campaigns touching 2026-model-year vehicles, filed Jan 1–Nov 14, 2026. A flagged campaign filed after Nov 14, 2026 would not appear; the count is a snapshot, not a year-end total.
- The API's vocabulary gaps are documented, not solved: "z4" 400s for MY2026 (26V438 recovered via RCAK read and confirmed not flagged); "blazer ev" is absent from VPIC's Chevrolet list (26V717 recovered via direct query); "kicks mpv" 400s (26V331 recovered via bare-name query); Mercedes needs trim-level spellings ("c 300", not "c-class"); Mack returns 400 for every spelling tried (26V351 included as a disclosed cross-check only). The direction of any remaining bias is undercount.
- Vehicle counts are the manufacturers' filed estimates for all model years in each campaign, not 2026-only counts; the article states this. The 96,389 park-outside total counts 26V106's 69,153, which includes 51,707 2025 Forester Hybrids and a Canadian share (66,332 U.S. per Subaru's bulletin); the 2026-only park-outside total is smaller and cannot be computed exactly from the filings.
- The 26V106 total: Part 573 says 69,153; Subaru's dealer bulletin says 66,332 U.S. vehicles. The article uses 69,153 as the filed total and notes the U.S. figure.
- The 26V685 population (8) and the "no warning before failure" line come from secondary readings of the Part 573 (Autoblog, KBB, automotor.news), not from the Part 573 read directly this run.
- The Mack 26V351 figures (644 trucks, do-not-drive) come from CCJ Digital / Overdrive coverage of the NHTSA documents, not from the API or a Part 573 read directly this run. It is excluded from the 7-count and stated as a cross-check.
- NHTSA's overTheAirUpdate flag undercounts software remedies (26V540's OTA fix is flagged false). The article states the flag and the remedy text side by side.
- "Park outside" and "do not drive" are NHTSA consumer-advisory flags in the API record, cross-checked against each campaign's subject line and remedy text. For 26V289 the do-not-drive status comes from site coverage and #1505's research, not from a fresh RCAK read this run.

## Actionable takeaways

- If you own a 2022–2026 Lucid Air: you are in 26V540 until software 2.10.0 or later is installed. Check your software version now; 20,719 cars had it at filing and 6,466 did not. Park outside and away from structures until you update. The fix is free and over-the-air, which means the car can be fixed in the driveway it is parked outside in.
- If you own a 2026 Nissan LEAF: check your VIN for 26V188. Only 51 cars are in it, every one of them carries the defect, and two already burned while parked outside, turned off, and not charging. Park outside and do not charge until a dealer inspects and replaces the battery modules. The battery ID is traceable to the VIN, so the lookup is definitive.
- If you own a 2026 Crosstrek Hybrid or 2025 Forester Hybrid: check for 26V106. Keep the tank at half or below and park outside until the dealer replaces the fuel filler cap gasket. The defect needs a near-full tank plus a temperature rise, so a half tank is a real mitigation, not a platitude.
- If you own a 2021–2026 Bronco Sport or 2022–2026 Maverick: check for 26V340. Do not drive it until a dealer inspects the front lower control arm ball joints. The defect estimate is 1% of 4,653, but the failure is a wheel connection coming apart, and Ford issued the do-not-drive because there is no safe way to tell if yours is the one.
- If you own a 2026 Crosstrek or Forester: check for 26V685. Eight cars, four of each, built in August 2026. If yours is one of the eight, do not drive it; Subaru says there may be no warning before the ball joint separates. Letters go out December 16, 2026.
- If you own a 2012–2018 BMW 2, 3, 4, or 5 Series, X1, X3, X4, X5 xDrive40e, or Z4: you are in the excluded filing (26V733, 720,796 cars). Park outside and away from structures. There is no remedy yet, and a 2024 repair receipt does not exempt you. VINs become searchable December 25, 2026.
- If you are shopping a 2026 car: the census says 7 extreme advisories across the whole model year, and that is accurate for new metal. Shop by campaign, not by count: the three park-outsides are a fuel cap, a battery, and a software fuse, and the four do-not-drives are two ball joints, a transfer case, and a truck wheel. Check any VIN at nhtsa.gov/recalls before you sign, and check a used BMW twice.
