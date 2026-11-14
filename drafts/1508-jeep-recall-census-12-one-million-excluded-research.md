# Research: #1508 — Jeep Recalled Its 2026 Cars 12 Times. Its Biggest Recall of the Year Isn't One of Them.

**Number:** 1508
**Slug:** 1508-jeep-recall-census-12-one-million-excluded
**Journalist:** Mia Crumplezone (Safety Engineering Editor; model year trends, "what this means for you" — the article's payoff is exactly that: a 2026 Jeep shopper reads "12 recalls" and misses the 1.47-million-vehicle fire recall on the used lot next door)
**Kicker:** The Gap
**Date:** November 14, 2026

## Angle (1-2 sentences)

Jeep is the biggest brand inside Stellantis's 27-campaign census (#1479), and this is its brand-level split. I ran the corrected-vocabulary census across Jeep's ten canonical 2026 models and confirmed **exactly 12 campaigns** — but Jeep filed seven more recalls in 2026 that the census method excludes because they touch no 2026 model, and the excluded set contains the year's biggest Jeep recall by vehicles: the 1,076,999-vehicle steering-pump fire recall (26V363), a park-outside campaign with 51 fires behind it. The count says 12. The fine print says at least 1,467,098 Jeeps were recalled in 2026 under campaigns the count misses, plus the Wagoneer S share of a 20,271-vehicle instrument-cluster recall.

## Kill test

- **Genuinely newsworthy?** Yes. First Jeep brand-level census on the site; completes the Stellantis split the series started with GMC #1505 (GM 15) and Chevrolet #1500, and mirrors the Acura #1502 counted-vs-excluded structure. Fresh hooks: the excluded set (1.47M vehicles) is 2.6x the verified counted Jeep vehicles (558,521); the single biggest Jeep recall of 2026 is excluded, not counted; the same coil spring has now been recalled three times (23V413, 26V051, 26V562), and the third recall replaces the first two; the Cherokee's power transfer unit has been recalled four times since 2020 and the newest fix still is not available; and the census contains both a 7-vehicle recall and a 16-vehicle recall next to an 844,027-vehicle one.
- **Novel on site?** Yes. No prior brand-level Jeep census exists. Individual campaigns were covered standalone (26V531 in #1409 and #1479, 26V363's probe in #1032, the coil spring in the unnumbered 847/882/886/891 files, the PTU in the unnumbered cherokee-ptu file), but never as a census, never with the counted-vs-excluded arithmetic, and never with the Jeep-only vehicle totals. The original contribution is the 12-count (independently reproduced, matches #1479), the 7-campaign excluded set with unit totals, the 1,467,098 excluded-Jeep total, the 558,521 verified counted-Jeep total, the 2.63-to-1 ratio, the per-model table, and the component mix — computed, not quoted.
- **Killed angles this run (duplicate screen):** Honda EPS recall 26V721 (635,808, loss of power steering) — covered in full as #1457, and already folded into the Acura census #1502. IIHS Kicks-beats-RAV4 rear-seat test — covered as #1244, #1278, #1346, #1408, #1484. IIHS commercial-vehicle crash avoidance (Oct 8, 2026) — covered in ~15 articles (#1093 through #1452). Ford Explorer Police Interceptor map lights 26V726 — #1466. GM Savana/Express steering-nut recall-of-recall 26V718 — #1391. Mazda and Porsche censuses — #1486 and #1491. Ram/Chrysler/Dodge splits of Stellantis deferred — Jeep goes first as the largest Stellantis brand; the others follow the same method.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model list (10 Jeep light-vehicle models: Wrangler, Cherokee, Compass, Grand Cherokee, Grand Wagoneer, Gladiator, Grand Cherokee L, Grand Wagoneer L, Wagoneer S, Recon), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, Electric suffix variants plus targeted trims (Wrangler 4xe, Grand Cherokee 4xe, Cherokee Hybrid) — 42 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Excluded analysis: same models queried at model years 2025, 2024, 2023 (plain names plus 4xe variants) for 2026-filed campaigns touching no 2026 Jeep. Raw results saved at drafts/1508-jeep-recall-census-raw.json; deduped campaigns at drafts/1508-jeep-recall-census-campaigns.json; runner at drafts/1508-census-run.py. **Date-format trap (same as #1476/#1501/#1502):** ReportReceivedDate comes back as DD/MM/YYYY ("02/02/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — a 400 is an empty result, not a failed query. https://www.nhtsa.gov/recalls
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "jeep", Nov 14, 2026: 10 models (Wrangler, Cherokee, Compass, Grand Cherokee, Grand Wagoneer, Gladiator, Grand Cherokee L, Grand Wagoneer L, Wagoneer S, Recon).
3. **NHTSA Part 573 Safety Recall Report, 26V363** (Jun 4, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V363-5757.pdf — 1,076,999 US vehicles (787,887 Wrangler, 289,112 Gladiator, model years 2021-2025); electric hydraulic power steering pump connection may overheat and cause fire even with ignition off; 0.1% defect estimate; 72 field reports (35 confirmed at the pump interface), 63 customer assistance records, 1 injury, 0 accidents as of May 18, 2026; NHTSA consumer alert Jun 9, 2026 cites 51 fires and 1 injury; FCA campaign 21D; park-outside warning; owner letters from Jul 9, 2026. Worldwide total 1,331,258 (Canada 106,258; Mexico 23,704; other markets 124,297).
4. **NHTSA Part 573 Safety Recall Report, 26V290** (May 7, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V290-1107.pdf — 61,711 Jeep Cherokees (2019-2023, two-speed PTU, built Dec 12, 2018-Feb 24, 2023); internally failed PTU can cause loss of motive power at any speed or rolling in Park; 0.5% defect estimate; 387 warranty claims, 9 customer assistance records, 5 field reports, 1 accident, 1 injury as of Apr 22, 2026; remedy under development; interim letters Jun 25, 2026; FCA campaign 40D; fourth Cherokee PTU recall since 2020.
5. **NHTSA acknowledgement record, 26V327** (May 21, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V327-5253.pdf — 16 vehicles total (2019 and 2023 Pacifica, 2024 Ram 1500, Ram 2500, 2024-2025 Wrangler); contamination in the central vision processing module or improper programming may blank the rearview camera image; FMVSS 111; FCA campaign 46D; VINs searchable May 28, 2026.
6. **NHTSA recall bulletin, 26V531** (FCA 78D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V531-1267.pdf — 844,027 US vehicles built with the suspect Uconnect5 R1 High radio software; 100% defect estimate; rearview camera image may fail to display; FMVSS 111; owner letters Sep 1-25, 2026. Jeep per-model split (filing, via trade coverage): Wrangler 170,033; Grand Cherokee 49,036; Gladiator 39,738; Cherokee 33,047; Grand Wagoneer 26,225; Grand Cherokee L 22,950; Grand Wagoneer L 10,379; Compass 4,119 — **Jeep total 355,527**.
7. **NHTSA recall bulletin, 26V059** (FCA 03D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V059-1857.pdf — 456,287 vehicles; trailer tow module lacks electrical-overstress protection; trailer lights and brakes may fail with no warning; owner letters from Mar 24, 2026. Jeep share: Wagoneer S 321 + Cherokee 57 = **378**.
8. **#1479 research file** (drafts/1479-stellantis-recall-census-27-one-radio-bug-research.md) — the Stellantis baseline (Jeep 12, Ram 11, Chrysler 5, Dodge 2, Alfa Romeo 1, Fiat 0; company 27), the 26V531/26V059 totals, the Cherokee-first-year finding, and the corrected-vocabulary method.
9. **AutoEvolution, "Stellantis Recalls Jeep Wagoneer S and Dodge Charger Daytona for Instrument Panel Software Issue"** (Apr 2026): https://www.autoevolution.com/news/stellantis-recalls-jeep-wagoneer-s-and-dodge-charger-daytona-for-instrument-panel-software-issue-269341.html — 26V262: 20,271 US vehicles (2024-2025 Wagoneer S and Charger Daytona BEVs); Valeo instrument-cluster software may blank federally mandated displays; FMVSS 108/126; dealers notified Apr 30, 2026; owner letters May 21, 2026. Jeep-vs-Dodge split not broken out in the coverage consulted. Also notes there is no 2026 Wagoneer S, "partly due to abysmally poor sales."
10. **TFLcar / Mopar Insiders / Autoblog, September 2026** — 26V562 coil-spring expansion: https://tflcar.com/2026/09/jeep-grand-cherokee-rear-suspension-recall-update/ ; https://moparinsiders.com/jeep-recalls-328381-grand-cherokees-over-rear-springs/ ; https://www.autoblog.com/news/jeep-recalls-328381-grand-cherokees-for-a-problem-two-recalls-didnt-fix — 328,381 Grand Cherokees (215,433 L; 97,477 two-row; 15,471 4xe); replaces 26V051 and 23V413; third recall for the same rear coil spring; dealers replace both rear coil spring lower isolators; 0.1% defect estimate; 29 customer assistance records, 406 warranty claims, 0 accidents, 0 injuries as of Aug 6, 2026; interim letters Sep 29-Oct 7, 2026; FCA campaign 89D.
11. **Mopar Insiders, "Stellantis Recalls Jeep SUVs Over Shifter Module Software Defect"** (Jul 2026): https://moparinsiders.com/stellantis-recalls-jeep-suvs-over-shifter-module-software-defect/ — 26V413: **seven vehicles** (four 2022/2024 Grand Cherokee, one 2023 Wagoneer, one 2024 Grand Cherokee L, one 2024 Wagoneer L); shifter module software may blank the PRND display; FMVSS 102; stop sale in effect; FCA campaign 30D; letters Aug 21, 2026.
12. **The Auto Wire / MetalCloak, July-August 2026** — 26V456 steel wheels: http://theautowire.com/2026/08/03/jeep-wrangler-gladiator-steel-wheel-recall/ ; https://metalcloak.com/blog/2026-jeep-wrangler-gladiator-steel-wheel-recall — 641 vehicles (606 Wrangler, 35 Gladiator, 2026 model year, steel wheels sales code WAA); thin-wall condition may crack or separate with no warning; 100% defect estimate within the suspect population; 0 claims, 0 injuries as of Jun 24, 2026; FCA campaign 05D; letters Sep 4, 2026. NHTSA bulletin: https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V456-5136.pdf
13. **CheckMyVin, "Vehicle Recalls Sep 2026"**: https://checkmyvin.net/recalls/reports/2026-09 — 26V559: 201,975 vehicles (all Jeep: Cherokee, Grand Cherokee, Grand Cherokee L, Grand Wagoneer, Grand Wagoneer L, Wagoneer, Wagoneer L); TPMS software error. 26V562: 328,381 confirmed as September's largest campaign.
14. **The Auto Wire, "Jeep Wrangler, Gladiator Fire Recall: NHTSA Closes Probe"** (Sep 30, 2026): https://theautowire.com/2026/09/30/jeep-wrangler-gladiator-fire-probe-closed-park-outside/ — NHTSA closed Preliminary Evaluation PE24-024 on Sep 24, 2026 because recall 26V363 "directly covers the vehicles and issues examined"; NHTSA closing resume lists 67 incidents, 51 crashes or fires, 4 injury incidents, 0 deaths; park-outside guidance remains in the NHTSA database until the repair is done.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Jeep** | **12** | 10 | 9 |

### The 12 Jeep campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V059 | Feb 2 | Trailer tow module | Trailer lights and brakes may fail with no warning; 456,287 vehicles (Jeep share 378: Wagoneer S 321, Cherokee 57). 100% defect estimate. Shared with Ram. |
| 26V141 | Mar 12 | Liftgate hinge | Wagoneer S liftgate hinge cover may detach. |
| 26V223 | Apr 9 | ESC | 2026 Cherokee brake module may fail; loss of ABS and ESC. |
| 26V224 | Apr 9 | Child seat tether | 2026 Wrangler second-row tether welds insufficient; FMVSS 225. |
| 26V326 | May 21 | Back-over camera | Grand Wagoneer front camera wiring; rearview image may not display. |
| 26V328 | May 21 | Airbag software | Grand Cherokee side airbags may deploy late (software). |
| 26V414 | Jun 30 | ESC | Grand Wagoneer brake module software; loss of ESC and brake assist. |
| 26V456 | Jul 16 | Steel wheels | Wrangler/Gladiator steel wheels too thin; may crack or detach with no warning. 641 vehicles, 100% defect estimate. |
| 26V529 | Aug 13 | Wipers | Grand Cherokee BCM software; wipers may fail. |
| **26V531** | **Aug 13** | **Back-over camera** | **Radio software may blank the rearview camera. 844,027 US vehicles (848,511 announced), 15 model lines, 4 brands. 100% defect estimate. Jeep share 355,527. THE BIG ONE, counted.** |
| 26V559 | Sep 1 | TPMS | TPMS software error; 201,975 vehicles, all Jeep. |
| 26V584 | Sep 10 | Roof rack | Wagoneer/Grand Wagoneer roof rack crossbar bolts may detach. |

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

| Model | Campaigns |
|---|---|
| Grand Wagoneer | 5 (26V326, 26V414, 26V531, 26V559, 26V584) |
| Grand Wagoneer L | 5 (same five) |
| Cherokee | 4 (26V059, 26V223, 26V531, 26V559) |
| Grand Cherokee | 4 (26V328, 26V529, 26V531, 26V559) |
| Grand Cherokee L | 3 (26V529, 26V531, 26V559) |
| Wrangler | 3 (26V224, 26V456, 26V531) |
| Gladiator | 2 (26V456, 26V531) |
| Wagoneer S | 2 (26V059, 26V141) |
| Compass | 1 (26V531) |
| Recon | 0 |

Nine of ten nameplates carry at least one campaign. The Recon, Jeep's new electric SUV, is the only zero. The resurrected Cherokee carries 4 campaigns in its first model year back, including an ESC-loss recall (26V223).

### The excluded filings: what the count misses

| Campaign | Date | Component | Jeep vehicles | Campaign total |
|---|---|---|---|---|
| 26V363 | Jun 4 | Steering pump wiring fire | 1,076,999 (Wrangler 787,887; Gladiator 289,112) | 1,076,999 (US; 1,331,258 worldwide) |
| 26V562 | Sep 1 | Rear coil spring, third recall | 328,381 (L 215,433; two-row 97,477; 4xe 15,471) | 328,381 |
| 26V290 | May 7 | Cherokee PTU failure | 61,711 | 61,711 |
| 26V262 | Apr 23 | Instrument cluster software | Wagoneer S share of 20,271 (split unpublished) | 20,271 (Wagoneer S + Charger Daytona) |
| 26V327 | May 21 | Rearview camera, 16 vehicles | Jeep share of 16 (multi-brand) | 16 |
| 26V413 | Jun 30 | Shifter display blank | 7 | 7 |
| 26V051 | Jan 29 | Rear coil spring (superseded) | 0 additional (same population as 26V562) | superseded by 26V562 |
| **Excluded Jeep total** | | | **at least 1,467,098 + Wagoneer S share of 26V262** | |

26V051 and 26V562 cover the same Grand Cherokees: 26V562 replaces 26V051 (and the 2023 recall 23V413), so the population is counted once. Vehicles repaired under either earlier recall still need the new remedy.

### Counted vs excluded, Jeep vehicles

| | Campaigns | Jeep vehicles (verified) |
|---|---|---|
| **Counted** | **12** | **at least 558,521** (26V531 Jeep 355,527 + 26V559 201,975 + 26V059 Jeep 378 + 26V456 641; the other eight campaigns' Jeep splits are in their Part 573 filings and are not summed here) |
| **Excluded** | **7** | **at least 1,467,098** + Wagoneer S share of 26V262 |
| **Ratio** | | **excluded Jeeps outnumber counted Jeeps 2.63 to 1** on the verified figures |

For every Jeep the census counts, about 2.6 more were recalled in 2026 under campaigns the method excludes. The single biggest Jeep recall of the year is excluded, not counted.

### Component mix (12 counted)

ESC 2, Structure 2, Back-over prevention 2, Exterior lighting 1, Child seat tether 1, Air bags 1, Wheels 1, Visibility (wipers) 1, TPMS 1. **0 of 12 flagged overTheAirUpdate=true** — same 0-for-everything result as every prior census in the series (Ford 0/41, Stellantis 0/27, GM 0/15, Toyota 0/15, Honda 0/4). Note: 26V531's remedy is in fact a radio software update delivered over the air or at the dealer (per #1409 and trade coverage), so the API flag undercounts OTA remedies; the flag is reported as-is. The one park-outside flag in the Jeep 2026 picture sits on the excluded side: 26V363.

### Timing

Counted: Feb 1, Mar 1, Apr 2, May 2, Jun 1, Jul 1, Aug 2, Sep 2. Excluded: Jan 1 (26V051), Apr 1 (26V262), May 2 (26V290, 26V327), Jun 2 (26V363, 26V413), Sep 1 (26V562). January and November (through Nov 14) produced zero counted filings. The biggest excluded recall (26V363) landed in June, two months before the biggest counted one (26V531, August).

### The coil-spring trilogy

The same rear coil spring has now been recalled three times. 23V413 (June 2023) first. 26V051 (January 2026) after detachments continued. 26V562 (September 2026) after NHTSA sent more complaints in July and FCA opened another investigation: vehicles that had already received the 23V413 or 26V051 repair were detaching springs again. The third recall replaces the first two and changes the remedy to new lower isolators on both rear springs. Three campaigns, one spring, zero crashes or injuries reported — and 328,381 owners told to come back a third time.

### The PTU quartet

26V290 is the fourth Cherokee power transfer unit recall since 2020. Each covers a different production window and, except for the newest, a different known cause. Every Cherokee model year from 2014 to 2023 is in at least one of them. The newest one has no fix yet: the plan is new software for the drivetrain control module, PTU, and electronic park brake, then a new PTU if needed. A failed PTU can cut drive power at any speed or let the vehicle roll while in Park.

## Strongest counterargument

Campaign counts are not severity scores, and this census proves it in both directions at once: the headline 12 contains one campaign covering 844,027 vehicles and the excluded set contains one covering 7. Counting them equally is absurd on its face, and the counted total (558,521 verified Jeeps) is dominated by a single radio-software bug (26V531, 355,527 Jeeps) that most owners fix with an over-the-air update. Jeep's 12 also partly reflects that it sells ten nameplates — a brand with more models files more campaigns, and the per-model numbers (Grand Wagoneer 5, Cherokee 4) are the honest comparison against another brand's count, not the company-wide 12. The excluded 1.47 million is dominated by one campaign too (26V363, 1.08M), and its 0.1% defect estimate means only about 1,077 of those Jeeps actually carry the faulty pump connection. The 2.63-to-1 ratio compares a fully verified excluded total against a partially verified counted total (four campaigns summed, eight not), so the ratio is a floor on the counted side and the true ratio is lower. And the coil-spring trilogy's three campaigns are the same defect counted three times across three years, which inflates any campaign-count reading of Jeep's 2026 record.

The counterargument weakens on the structure: the excluded campaigns are not trivia. 26V363 is a park-outside fire recall with 51 fires. 26V290 is a fourth PTU recall with no remedy available. 26V562 is a third attempt at one spring. A reader who takes "Jeep: 12" as the brand's 2026 safety record is wrong by 1.47 million vehicles, and the biggest one can burn a parked car in a driveway. The counted-vs-excluded distinction is disclosed, not hidden: both numbers are in the article, in a table, with campaign numbers. And the undercount direction on the counted side cuts against the headline, not for it: the true counted Jeep total is higher than 558,521, which makes the ratio smaller but the absolute excluded gap (about 900,000 vehicles) no less real.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The counted Jeep-vehicle total (558,521) sums only the four campaigns with verified Jeep splits; the other eight counted campaigns are not summed, so it is a floor, not a total. The excluded total (1,467,098) is also a floor: the Wagoneer S share of 26V262's 20,271 vehicles is not broken out in the sources consulted, and the Jeep share of 26V327's 16 vehicles is a subset of 16.
- 26V531's 844,027 vs 848,511 discrepancy is stated: 844,027 is the Part 573 population built with the suspect radio; 848,511 is Stellantis's announced figure. #1409 used the same split.
- Unit counts are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 2026-MY-only Jeep vehicle total cannot be computed from the filings (26V531's Wrangler slice, for example, spans the 2026 model year only for Jeep but the campaign total spans four brands).
- 26V051's population is not added to the excluded total because 26V562 supersedes it over the same vehicles; the 328,381 is counted once. If 26V051's filed population differed slightly from 26V562's, the excluded total moves by that difference.
- NHTSA API vocabulary gaps remain the central risk: this census queried 10 canonical names plus 24 suffix/trim variants (42 queries) for 2026, plus 36 older-year queries for the excluded set, but a campaign could still hide under an untested spelling. Mitigation: every 2026-filed campaign found was cross-checked against its summary's model list; the two largest items (26V531, 26V363) were confirmed in Part 573 filings and independent coverage; the direction of any remaining bias is undercount, same as before. The Recon returned zero rows under every spelling, consistent with #1479.
- The 2026 model year is still in progress and late filings will move all counts.
- NHTSA's overTheAirUpdate flag undercounts software remedies: 26V531's fix is delivered over the air per trade coverage, yet the flag is false for all 12 counted and all 7 excluded.

## Actionable takeaways

- If you own a 2021-2025 Wrangler or Gladiator: check your VIN at nhtsa.gov/recalls for 26V363 now. The steering pump wiring can overheat and start a fire even with the car parked and off. Park outside, away from buildings and other cars, until the dealer has checked the wiring. NHTSA knows of 51 fires and one injury. The fix is free.
- If you own a 2021-2023 Grand Cherokee L, 2022-2023 Grand Cherokee, or 2022-2023 Grand Cherokee 4xe with coil-spring (not air) suspension: the coil spring recall is on its third campaign (26V562). Even if you already had the 2023 or January 2026 repair done, you need the new remedy: dealers replace both rear coil spring lower isolators, free. Check your VIN; do not assume the earlier visit cleared you.
- If you own a 2019-2023 Cherokee with the two-speed PTU: 26V290 is the fourth PTU recall, and the fix is not available yet. Interim letters went out June 25, 2026. The warning sign is a loss of drive power or the vehicle rolling in Park. Check your VIN and keep the FCA recall line (1-800-853-1403) in mind; a second letter comes when the fix exists.
- If you own a 2026 Jeep: check for 26V531 (rearview camera, free radio software update, over the air or at the dealer) and 26V559 (TPMS software). The camera is federally mandated because backover crashes kill about 210 people a year.
- If you are shopping a 2026 Jeep: the Grand Wagoneer carries 5 campaigns, the Cherokee and Grand Cherokee 4 each, the Wrangler 3. The Recon carries zero. A resurrected nameplate (Cherokee) with an ESC-loss recall in its first year back is a reason to buy the second year, or to negotiate like you know.
- If you run a recall census of your own: never trust a bare model name in the NHTSA API, never trust a single make to cover a company, and never trust a model year to cover a brand — query the VPIC canonical list, then the hybrid and plug-in variants, then the older model years separately. A 400 is not always a zero, and a count is not always the record.
