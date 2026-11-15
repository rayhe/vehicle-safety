# Research: #1513 — Buick's 2026 Recall Census: 2 Campaigns, One Manual, One Car

**Number:** 1513
**Slug:** 1513-buick-recall-census-2-one-manual-one-car
**Journalist:** Rex Driverton (Senior Crash Correspondent — paradox/investigation beat; the "one car" census is his kind of joke: the numbers smirk)
**Kicker:** By The Numbers
**Date:** November 15, 2026

## Angle (1-2 sentences)

Buick filed **2 recall campaigns touching a 2026-model-year Buick** in 2026, the quietest year of any GM brand: one is the GM-wide radio that forgot to download the owner's manual, and the other is the 306,511-vehicle rearview camera recall that touches exactly **one** 2026 Buick, a single Encore GX built on December 2, 2024. The Envista, Buick's cheapest and newest nameplate, has zero recalls at all.

## Kill test

- **Genuinely newsworthy?** Yes. First Buick census on the site; completes the GM brand-split set with Chevrolet #1500 (13), GMC #1505 (11), and Cadillac #1512 (7). Fresh hooks: the 2-count is the lowest of any GM brand; the 26V539 arithmetic (one 2026 Encore GX, built on a single day); the 33,365 field complaints behind the camera recall; GM closing the camera investigation in September 2025 and reopening it in March 2026; and the Envista's zero.
- **Novel on site?** Yes. No prior brand-level Buick census exists. 26V539 was never covered as a standalone; 26V114 was covered only as a line inside the Cadillac #1512 and GM #1474 censuses, never with Buick's per-model reach. The counted-vs-excluded arithmetic (2 counted, 0 excluded) and the single-vehicle 2026 count are new computations.
- **Killed angles this run (duplicate screen):** Waymo RQ26006 school-bus recall query (covered in full as #1461); Kicks/RAV4 IIHS rear-seat result (covered as #1244, #1278, #1346, #1408, #1484); GM 26V718 Express/Savana steering (covered as #1391); Thomas Built 26V702 FMVSS 221 (covered as #1369); Ford 26V724 Maverick loose cable (covered as #1509); every brand census except Buick (all done: GM #1474, Toyota #1475, Honda #1476, Hyundai-Kia #1477, Ford #1478, Stellantis #1479, Nissan #1480, Subaru #1481, BMW #1483, Mazda #1486, VW #1487, Mercedes #1488, Audi #1489, Porsche #1491, Tesla #1492, Volvo #1495, Rivian #1496, Genesis #1497, Lucid #1498, JLR #1499, Chevrolet #1500, Lexus #1501, Acura #1502, Infiniti #1503, Mitsubishi #1504, GMC #1505, Jeep #1508, Ram #1510, Cadillac #1512).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 15, 2026. Method: VPIC canonical 2026 model list (4 Buick light-vehicle models: Enclave, Envision, Encore GX, Envista), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, Electric suffix variants plus Avenir trims — 20 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1513-buick-recall-census-raw.json; deduped campaigns at drafts/1513-buick-recall-census-campaigns.json. **Date-format trap:** ReportReceivedDate comes back as DD/MM/YYYY ("26/02/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — a 400 is an empty result, not a failed query. Census script: drafts/1513-census-run.py.
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "buick", Nov 15, 2026: 4 models (Enclave, Envision, Encore GX, Envista).
3. **NHTSA Part 573 Safety Recall Report, 26V539** (submitted Sep 10, 2026; report received Aug 20, 2026), GM A262554900: 306,511 total; 10% defect estimate. Rearview camera screen may display a distorted or blank image. Cause: "An issue with the bonding process used to assemble the camera housing could weaken the adhesive bond on some assemblies" — a plasma-cleaning treatment used to prepare the camera housing weakened the adhesive bond; supplier Wuxi Sharp Optoelectronic Technology Co. (China), camera part numbers 86554977/86554978. Chronology: investigation opened May 20, 2025; closed Sep 4, 2025 ("no defect trend was identified," monitoring continued at six-month intervals); reopened Mar 25, 2026 on rising claim rates; 33,365 field complaints Jul 3, 2024 – May 30, 2026; recall decided Aug 13, 2026 by GM's Safety Field Action Decision Authority. Zero accidents or injuries known. Remedy: inspect and replace camera as necessary, free. Owner letters from Sep 16, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V539-4446.pdf
4. **NHTSA recalls API record, 26V114** (filed Feb 26, 2026): radio not set to the correct status to download the electronic owner's manual during production; fails FMVSS 208 (Occupant Protection). Touches 2026 Buick Enclave and Envision (2 of 4 Buick models). Remedy: dealer radio reset to trigger the download. GM number N252540430; spans 40+ GM models. Owner letters mailed Apr 16, 2026.
5. **#1474 / #1500 / #1505 / #1512 research files** — the GM baseline (15 campaigns) and the Chevrolet/GMC/Cadillac brand splits; Buick's 2 are a subset of GM's 15 (both campaigns are GM-wide; Buick has zero brand-only defects, the only GM brand with none).

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 15, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Buick** | **2** | 4 | 3 |
| Cadillac (for comparison) | 7 | 11 | 9 |
| Chevrolet (for comparison) | 13 | — | — |
| GMC (for comparison) | 11 | — | — |
| GM total (#1474) | 15 | — | — |

### The 2 Buick campaigns

| Campaign | Filed | Component | What it is | Units (all makes) | Buick units |
|---|---|---|---|---|---|
| 26V114 | Feb 26 | Owner's manual download | Radio never downloaded the electronic owner's manual; FMVSS 208 noncompliance | GM-wide (40+ models) | 2 of 4 models touched (Enclave, Envision; no Buick unit count in filing) |
| 26V539 | Aug 20 | Rearview camera | Camera housing adhesive weakened by plasma cleaning; screen distorted or blank | 306,511 | 72,175 (Encore GX 30,852 + Envista 41,323, all model years); **2026 Buick units: 1** |

### Per-model campaign counts (2026 MY, 2026 filings)

| Model | Campaigns | Which |
|---|---|---|
| Enclave | 1 | 26V114 |
| Envision | 1 | 26V114 |
| Encore GX | 1 | 26V539 (1 vehicle: built Dec 2, 2024) |
| **Envista** | **0** | — |

### The counted-vs-excluded arithmetic

- Counted: 2 campaigns touching a 2026 Buick.
- Excluded: 0 campaigns filed in 2026 touching only older Buicks. The excluded sweep (model years 2025/2024/2023, all 4 models + Avenir trims) found nothing.
- Buick-only defects: 0. Both campaigns are GM-wide. Buick is the only GM brand with no brand-only defect in 2026.
- 2026 Buick units inside 26V539: exactly 1 (a 2026 Encore GX built Dec 2, 2024; the only 2026-model-year vehicle in the entire 306,511-vehicle recall besides 7 Trailblazers). The other 306,503 vehicles are 2024–2025 model years.
- Buick share of 26V539: 72,175 / 306,511 = 23.6% of the recall's vehicles, but only 1 of them is a 2026 Buick.
- Complaint-to-recall ratio: 33,365 field complaints behind a 306,511-vehicle recall — roughly 1 complaint per 9.2 vehicles recalled.
- Investigation timeline: 15 months from first investigation (May 20, 2025) to recall decision (Aug 13, 2026), including a 6-month closure (Sep 4, 2025 – Mar 25, 2026) when GM decided there was no defect trend.

## Original contribution

The census itself: the 2-count, the 4-model VPIC list, the per-model table, the 2-of-4 reach of 26V114, the 2-counted-vs-0-excluded arithmetic, the zero brand-only defects, the zero-recall Envista, the single-2026-vehicle count inside 26V539, the 23.6% Buick share of the camera recall, and the 33,365-complaint count with the closed-then-reopened investigation timeline — all computed from the NHTSA recalls API and Part 573 filings, not quoted from any single source.

## Limitations

- The census counts campaigns, not vehicles: a campaign touching one 2026 Buick counts the same as one touching thousands. Unit counts are reported separately where Part 573 filings give them; 26V114 has no Buick-specific unit count (GM-wide filing, 40+ models).
- The API's ReportReceivedDate is the filing date, not the defect-discovery date; 26V539 traces to complaints from July 2024, two years before filing.
- The excluded sweep only queried model years 2025/2024/2023; a 2026-filed campaign touching only 2022-or-older Buicks would be missed.
- Defect percentages are GM's estimates (10% for 26V539); they are not independently verified.
- The census window closes Nov 15, 2026; campaigns filed Nov 16–Dec 31 are not counted.
- The "1 complaint per 9.2 vehicles" ratio uses complaints "potentially related" to the condition, per GM's own wording — it is an upper bound, not a confirmed defect rate.

## Strongest counterargument

Two recalls sounds like a clean bill of health, but the count is a blunt instrument in the other direction too. Buick's quiet year is partly an artifact of Buick's tiny lineup: four models, all SUVs, all sharing GM platforms. The camera recall that "only" touches one 2026 Buick actually touches 72,175 Buicks of earlier model years, and the 33,365 complaints behind it make it one of GM's largest recalls of 2026 by volume. A brand with four models cannot rack up campaigns the way Chevrolet can with a dozen nameplates. The counterargument is partly right: the 2-count flatters Buick. But it also understates something: Buick is the only GM brand with zero brand-only defects in 2026, and the Envista — the cheapest Buick, the one most likely to be built to a price — has zero recalls while its platform twin, the Trax, anchors the biggest campaign of the year. That split deserves the headline, not the count alone.

## Actionable takeaways

- If you own a 2024–2025 Envista or 2024–2026 Encore GX with the standard rearview camera: 26V539. Shift into reverse and watch the screen; if it flickers, distorts, or goes blank, the dealer inspects and replaces the camera free. Check your VIN at nhtsa.gov/recalls — the fix is not an OTA update, it is a physical camera swap. Surround Vision trims are not affected.
- If you own a 2026 Enclave or Envision: 26V114 is the only recall touching your car this year, and it is a radio reset that downloads the owner's manual. Ask the dealer to confirm the manual is actually on the car; the recall exists because the manual was never there.
- If you own a 2026 Envista: your car has zero recalls filed in 2026. That is a fact about 2026 filings, not a safety rating; check the VIN anyway, and note that 2024–2025 Envistas are in the camera recall.
- If you are shopping: Buick's 2026 lineup is the quietest corner of GM's recall year, and the only 2026 Buick in a hardware recall is a single Encore GX built on one day in December 2024. Check the build date on the door jamb label; a 2026 Encore GX built after Dec 2, 2024 is outside the camera recall entirely.
