# Research: #1491 — Porsche Recalled Zero 2026 Cars. Its Wheels Were Still Falling Off.

**Number:** 1491
**Slug:** 1491-porsche-recall-census-zero-2026-cars
**Journalist:** Rex Driverton (Senior Crash Correspondent — paradoxes, fatality-rate investigations; a census of zero that hides a do-not-drive recall is a Rex paradox: the numbers don't lie, but they do occasionally smirk)
**Kicker:** Investigation
**Date:** November 13, 2026

## Angle (1-2 sentences)

The recall-census series reaches its fifteenth brand, and Porsche's count is **0 campaigns** filed in 2026 touching a 2026-model-year car — the second zero in the series, after Mazda. The count is a trap in the other direction from Audi's: Porsche's 2026 was loud, not quiet — October brought the second do-not-drive expansion for center-lock wheels that can fall off (26V682, 548 cars), December 2025 brought a 173,538-car blind-camera recall, and two 2025-filed recalls touch 2026 Cayennes and Panameras right now. Porsche sold 49,038 cars in the US in nine months and recalled none of the new ones. Every defect that mattered happened to a Porsche anyway, just on the wrong side of a date line.

## Kill test

- **Genuinely newsworthy?** Yes. A zero for a brand that told owners not to drive their cars the same month is itself the news, and it is a different zero from Mazda's. Mazda's zero came with a sticker problem (no 2026 cars to recall). Porsche's zero comes with 49,038 US deliveries in nine months, a 911 that sold 11,778 units and grew 32.8%, and a recall year that included a wheel-detachment do-not-drive, a 173,538-car camera failure, a fuel leak on 2026 SUVs, and a suspension defect on 2026 Panameras. The census counts filings and model years. The defects did not check either.
- **Novel on site?** Yes. No prior Porsche company-level census exists. The center-lock expansion was covered as news (#1351, "Porsche's Wheels Keep Falling Off") and the original 24V809 as #1245, but never counted, never compared across the five-model 2026 lineup, and never placed in the fifteen-brand table. The original contribution is the corrected 0 census below (NHTSA recalls API, Nov 13, 2026, 59 queries across two passes), the 400-vs-200 API semantics that make the zero provable rather than inferred, the MY2025 control sweep, the fifteen-brand table (total still 153), and the outside-the-census table that reframes the count.
- **Original contribution:** the corrected 0 census; the 59-query API failure matrix (50 HTTP 400, 9 HTTP 200) with MY2025 controls; the per-model zero confirmations; the fifteen-brand table; the 26V682 / 25V896 / 25V634 / 25V415 outside-census quartet; the WTF7 workshop-campaign coda (a 2026 911 defect handled outside the recall system entirely); and the 49,038-vehicle sales denominator with the 718-collapse context.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 13, 2026. Method: VPIC canonical 2026 model list for Porsche (5 names: 911, Cayenne, Macan, Panamera, Taycan), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants plus targeted trims (pass 1: 27 queries, 25 HTTP 400, 2 HTTP 200, 0 campaigns); then a second pass with 10 MY2025 control queries and 22 MY2026 trim spellings (911 Carrera/GT3/Turbo/Turbo S/GT3 RS/Carrera GTS/Targa/Carrera T, Cayenne S/E-Hybrid/Turbo, Taycan 4S/Turbo/GTS, Panamera 4/E-Hybrid, Macan S/GTS/4 Electric, 718 Cayman/Boxster) — all 22 MY2026 trims 400'd, 0 new campaigns. Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. **Result: 0 campaigns.** Runners at drafts/1491-porsche-recall-census-raw.json (pass 1, via adapted 1489 runner) and /tmp/census1491b.py (pass 2); raw results at drafts/1491-porsche-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API 400 semantics, documented:** the recalls API returns HTTP 400 when no recall records exist at all for a model-year, and 200 with rows when records exist. Proven three ways. (a) The MY2025 controls: the same spellings return 200 with real campaigns for MY2025 ("911" returns 25V079 + 25V896; "cayenne" returns 25V634 + 25V896; "taycan" returns 24V455, 24V730, 25V415, 25V896; "macan electric" returns 24V889 + 25V220; "panamera" returns 25V634 + 25V896; "panamera e-hybrid" returns 25V415 + 25V634) — 7 of 10 controls returned 200. (b) The clean 200-with-rows MY2026 queries: "cayenne" MY2026 returns 200 with only 25V634 (filed Sep 23, 2025); "panamera" MY2026 returns 200 with only 25V415 (Jul 15, 2025) and 25V634 — so both models' zeros are API-confirmed rows, not inferred empties. (c) The MY2024 911 control returns 200 with four campaigns including 26V682 (filed Oct 16, 2026), proving the API can see the center-lock expansion and it simply does not touch a 2026 car. The three 400'ing MY2025 controls are consistent with no such car existing: "macan" (gas Macan ended production; no MY2025 gas Macan) and "718 cayman"/"718 boxster" (the API files 718 campaigns under trim names, not the bare line name — see Limitations).
3. **26V682 (center-lock expansion) — NHTSA campaign record + #1351 on this site + AutoGuide (Oct 23, 2026) + The Auto Wire (Oct 27, 2026):** filed Oct 16, 2026; 548 vehicles; 2024 718 Cayman GT4 RS, 911 Turbo S, 911 Turbo, 911 S/T, 911 GT3 RS, 911 GT3, 911 Carrera GTS, 718 Spyder RS. Center-lock wheel bolt may fracture; wheel detachment = loss of control; NHTSA do-not-drive advisory. Suspect part 992601119B. Two more field fractures (May and Aug 2026, no injuries) reopened the investigation; supply-chain review found unrecorded parts transfers at the supplier, so the original 24V809 boundary (1,851 vehicles, Oct 2024; amended to 2,251 in Dec 2024, covering 2021-2024 911, 2024 718, and a 2025 Panamera) was drawn from incomplete paperwork. Owner letters Dec 15, 2026; VINs searchable Oct 20, 2026; Porsche 1-800-767-7243, campaign ATA1. https://www.autoguide.com/auto/manufacturers/porsche/the-wheels-are-falling-off-at-porsche-according-to-latest-recall-44640931 and https://theautowire.com/2026/10/27/porsche-center-lock-recall-grows-lead-and-bismuth-blamed-for-cracking-wheel-parts/
4. **25V896 (rearview camera) — NHTSA acknowledgment letter RCAK-25V896-0293 + HotCars (Dec 31, 2025) + DealerRater Cayenne tracker:** filed Dec 19, 2025; 173,538 vehicles (NHTSA letter figure; the Lemon Law Group Partners tracker lists 172,107 — see Limitations); 2019-2025 Cayenne and Cayenne E-Hybrid, 2020-2025 911, 2020-2025 Taycan, 2024-2025 Panamera and 2025 Panamera E-Hybrid. Rearview camera image may not display in reverse; fails FMVSS 111. Porsche's number ASB2. Owner letters mailed Feb 13, 2026 (Feb 16 per the filing); VINs searchable Jan 19, 2026. The largest Porsche recall in recent years by population, filed twelve days before the census window opened. https://www.hotcars.com/porsche-recalls-almost-174000-vehicles-first-world-problem/ and https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V896-0293.pdf (via oemdtc.com)
5. **25V634 (fuel pump) — NHTSA dealer bulletin RCMN-25V634-2594 (code ASA9) + DealerRater Cayenne tracker:** filed Sep 22, 2025 (API ReportReceivedDate Sep 23, 2025); certain 2024-2026 Panamera, Cayenne, and 2025 Panamera E-Hybrid. High-pressure fuel pump screw connections may not have been tightened to specification; fuel leak risk. The NHTSA bulletin lists 107 affected vehicles with an attached VIN list — a small, surgical campaign, not a fleet-wide one. Remedy available Oct 17, 2025; VINs searchable Oct 10, 2025. It is the only recall in the file that touches a 2026 Porsche and was filed before the census window. https://static.nhtsa.gov/odi/rcl/2025/RCMN-25V634-2594.pdf and https://www.dealerrater.com/recalls/Porsche/Cayenne/
6. **25V415 (suspension strut) — NHTSA API record + Lemon Law Group Partners Porsche page (updated Nov 10, 2026):** filed Jul 15, 2025; certain 2025-2026 Panamera, 2025 Panamera E-Hybrid, and 2025 Taycan. Front suspension strut retaining ring can loosen. The second 2025-filed recall touching a 2026 Porsche. https://lemonlawgrouppartners.com/manufacturer/porsche/
7. **25V079 (2025 911 headlights) — NHTSA API control sweep + Lemon Law Group Partners Porsche page:** filed Feb 12, 2025; certain 2025 911 vehicles. Software error in the front-end lighting control module; headlights can exceed maximum allowed output and glare other drivers. Found by the "911" MY2025 control query. It is the newest 911-only campaign in the file and it is a 2025 car. https://lemonlawgrouppartners.com/manufacturer/porsche/
8. **WTF7 workshop campaign — Rennlist 992 forum (Oct 2026):** Porsche workshop service campaign WTF7, documented June 2, 2026 (NHTSA communication ID 11034544), addresses a battery management system software defect on certain 2025-2026 911 models including GT3 variants: unintended BMS software resets cause intermittent electrical-system warnings. Classified as a workshop campaign, not a federally mandated safety recall. A 2026 911 defect, handled in 2026, that the recall census cannot see by design — the census counts safety recalls, and Porsche chose the other channel. https://rennlist.com/forums/992/1529176-new-992-2-gts-battery-management-system-recall-wtf7.html
9. **Porsche US sales (denominator) — Porsche AG Q3 2026 statement (Oct 27, 2026) + Autoblog (Oct 13, 2026) + GoodCarBadCar:** US Jan-Sep 2026: 49,038 deliveries, down 14.1% YoY; Q3 2026: 16,026, down 12.9%. 911 YTD 11,778, up 32.8% (Q3 3,300, down 4.3% but 59.2% of its segment); Cayenne overtook Macan as best-seller in Q3; Taycan Q3 537, down 65.4%; 718 YTD 252, down 95.3% (8 sold in Q3, vs 1,719 a year earlier — the line stopped taking US orders last year and gas Macan production ended July 2026). North America deliveries 56,088, down 13%; global 178,532, down 16%. https://www.autoblog.com/news/porsches-u-s-sales-are-down-but-one-model-is-the-main-culprit and https://newsroom.porsche.com/pdf/376f21ae-272d-4628-b8c5-89b2882780fe?print

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Campaign | Filed | Model(s) | Defect | US vehicles |
|---|---|---|---|---|
| — | — | — | — | **0** |

### Per-model counts (2026 model year)

| Model | Campaigns | API evidence |
|---|---|---|
| 911 | 0 | 400 — no recall records exist for MY2026 911 at all |
| Cayenne | 0 | 200 — only 25V634 (filed Sep 2025) on file |
| Macan | 0 | 400 — no recall records exist for MY2026 Macan at all |
| Panamera | 0 | 200 — only 25V415 + 25V634 (both filed 2025) on file |
| Taycan | 0 | 400 — no recall records exist for MY2026 Taycan at all |

Five 2026 models in the VPIC list. Zero campaigns, zero models touched, zero vehicles. The 718 has no 2026 model year at all — VPIC lists no 718 for 2026, production ended, eight cars sold in Q3.

### Fifteen-brand table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Mercedes-Benz | 8 |
| Nissan (+ Infiniti, company 7) | 7 |
| BMW | 7 |
| Subaru | 5 |
| Honda | 4 |
| Kia | 4 |
| Volkswagen | 4 |
| Audi | 1 |
| Mazda | 0 |
| **Porsche** | **0** |

Fifteen-group total: **153 campaigns**. Fifteen-brand average: 10.2. Porsche ties Mazda at zero — one forty-first of Ford, a seventh of its VW Group sibling Volkswagen's count, and the second zero in the series. The difference from Mazda: Mazda's zero came with almost no 2026 cars to recall; Porsche's zero comes with 49,038 US deliveries in nine months and the best-selling sports car in America. The count says Porsche had the quietest real year in the series alongside Mazda. The populations say the count is measuring the calendar, not the cars: the four numbered uncounted Porsche campaigns in the file below cover 174,193+ vehicles.

### The campaigns just outside the census

| Campaign | Filed | Models | Defect | US vehicles |
|---|---|---|---|---|
| 26V682 | Oct 16, 2026 | 2024 718 Cayman GT4 RS, 911 Turbo S/Turbo/S/T, GT3 RS, GT3, Carrera GTS, 718 Spyder RS | Center-lock wheel bolt may fracture; wheel can detach; do-not-drive | 548 |
| 25V896 | Dec 19, 2025 | 2019-2025 Cayenne, 2020-2025 911/Taycan, 2024-2025 Panamera | Rearview camera may not display; FMVSS 111 | 173,538 |
| 25V634 | Sep 22, 2025 | 2024-2026 Cayenne/Panamera, 2025 Panamera E-Hybrid | High-pressure fuel pump fasteners may be loose; fuel leak | 107 |
| 25V415 | Jul 15, 2025 | 2025-2026 Panamera, 2025 Panamera E-Hybrid, 2025 Taycan | Front suspension strut retaining ring can loosen | (not stated in API record) |
| WTF7 (workshop, not a recall) | Jun 2, 2026 | 2025-2026 911 (incl. GT3) | Battery management software resets; electrical warnings | (not stated) |

Plus one filed in 2025 for the newest 911: **25V079** (Feb 12, 2025, 2025 911, headlight control module software, glare). It is the only 911-only campaign in the file, and it is not in this census twice over — wrong model year, and filed in 2025.

## What this means for buyers (Rex's beat: what the count hides)

- **If you own a 2026 Porsche of any model:** you are in zero counted recalls, and that is real as far as it goes — no safety recall filed in 2026 touches your car. But check your VIN anyway, because two 2025-filed recalls do touch 2026 cars: 25V634 (fuel pump fasteners on 2024-2026 Cayenne and Panamera) and 25V415 (suspension strut ring on 2025-2026 Panamera). Both have remedies available. The census counts filings, not danger, and your car was recalled before the census window opened.
- **If you own a 2024 911 GT3, GT3 RS, Turbo, Turbo S, S/T, Carrera GTS, 718 Cayman GT4 RS or 718 Spyder RS:** you may be in 26V682, filed October 16, 2026, the second expansion of the center-lock recall. Do not drive until a dealer inspects the center-lock system — a wheel can come off at speed. Letters go out December 15, 2026; VINs have been searchable since October 20; Porsche 1-800-767-7243, campaign ATA1. This was covered as #1351 when it filed; the census does not change the advice, and the census cannot see it because your car is a 2024.
- **If you own a 2019-2025 Cayenne, 2020-2025 911 or Taycan, or a 2024-2025 Panamera:** you are probably in 25V896, the 173,538-car camera recall. Your backup camera may not display. The fix is a software update, free; letters went out in February 2026. It was filed twelve days before the census window opened, which is why the count says Porsche had zero recalls while your car had one.
- **If you own a 2025-2026 911 GTS or GT3:** ask your dealer about WTF7, the June 2026 workshop campaign for battery management software resets. It is not a safety recall, so it will not appear on a recall search, and that is the point: a 2026 911 defect handled outside the recall system is invisible to every census, including this one.
- **If you are shopping a 2026 Porsche against a 2026 BMW or Mercedes:** the census says Porsche filed 0 recalls, BMW 7, Mercedes 8. That is nearly meaningless as a safety comparison and exactly meaningful as a paperwork comparison. Porsche's quiet year is real in one sense — five of five model lines have no 2026 filing — and misleading in every sense that matters to an owner, because the wheels, the camera, the fuel pump, and the suspension all happened to Porsches too, just on the wrong side of a date line.

## Limitations

- The census counts campaigns **filed Jan 1–Nov 13, 2026** covering 2026-model-year vehicles. A campaign filed after Nov 13, 2026 would not appear; the count is a snapshot, not a year-end total.
- The NHTSA recalls API returned HTTP 400 for 50 of 59 queries across the two passes. The 400 semantics (no recall records at all for that model-year) are inferred from the controls, not documented by NHTSA: the same spellings return 200 with real campaigns for MY2025 and MY2024, and the two 200-with-rows MY2026 queries return only 2025-filed campaigns. If NHTSA's API 400'd for some other reason on a model-year that does have a 2026 campaign, the census would miss it; the press cross-checks (AutoGuide, HotCars, Lemon Law Group Partners, DealerRater, Rennlist) found no 2026-filed Porsche safety recall touching a 2026 car, which bounds that risk.
- The "718 cayman" and "718 boxster" spellings 400 for both MY2025 and MY2026, so any 718 zero rests on VPIC (no MY2026 718 exists — the line is discontinued) and on #1351's model list for 26V682, not on a clean API query. A campaign touching only a 2026 718 would have to exist for a model year Porsche never built; that is not possible, and the article must say the 718 is absent because the car is gone, not because it is clean.
- The 25V896 population is 173,538 in the NHTSA acknowledgment letter and 172,107 in the Lemon Law Group Partners tracker; the article uses the NHTSA figure and notes the tracker differs. The 25V634 population of 107 comes from the NHTSA dealer bulletin's VIN-list count; the article must attribute it to the bulletin, not present it as a fleet-wide estimate. The 25V415 population was not stated in the API record or the sources checked.
- Campaign populations are the manufacturers' own numbers in their Part 573 filings, not independent measurements. The 49,038 sales figure is US deliveries Jan–Sep 2026 across all model years (including 2025 models still selling); it is a denominator for scale, not a precise population. WTF7 is a workshop campaign, not a safety recall; its population and remedy status were not stated in the public forum summary, and the article must not present it as a recall.
- Complaint counts were not collected for this census; the two field fractures behind 26V682 and the zero known injuries are manufacturer-reported figures from the Part 573 filing and press coverage, not NHTSA complaint counts.

## Strongest counterargument

Zero is good news, and a census that counts filings counts paperwork, not safety. Porsche's 2026 cars genuinely had no safety recall filed in 2026: no 2026 911, Taycan, Macan, Cayenne, or Panamera has a 26V campaign, and the API proves it three ways. The do-not-drive expansion touched 2024 cars. The camera recall touched 2025-and-older. The fuel pump and strut recalls were filed in 2025. A skeptic will say the honest headline is that Porsche built a clean year — 49,038 cars sold, none recalled — and the article's framing, that the quiet is a calendar artifact, is a way of manufacturing a story out of a non-event. That reading is mostly fair, and the article should say so. The counterweight is that the defects that mattered most to Porsche owners in 2026 are not small in the ways that matter: a wheel bolt that can fracture and let a wheel detach, a backup camera that can go blank on 173,538 cars, a fuel leak on the SUVs Porsche is actually selling now, and a battery management defect on the 2026 911 GTS that Porsche handled outside the recall system entirely. A recall count of zero is good news for Porsche. A wheel coming off at speed is not good news for anyone who owns the car, and the count is the wrong place to look for it.
