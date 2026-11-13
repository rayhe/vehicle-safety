# Research: #1488 — Mercedes Recalled Its New Cars 8 Times. The Smallest Is 10 Cars. The Biggest Can Roll Away.

**Number:** 1488
**Slug:** 1488-mercedes-recall-census-8-ten-cars-rollaway
**Journalist:** Mia Crumplezone (Safety Engineering Editor — vehicle design analysis, safety tech, model-year trends; three of the eight campaigns are seat-belt defects and one is an airbag fabric defect, which is her engineering beat; the census series rotates off Rex after #1487)
**Kicker:** By The Numbers
**Date:** November 12, 2026

## Angle (1-2 sentences)

The recall-census series reaches its thirteenth brand, and Mercedes-Benz's count is **8 campaigns** filed in 2026 touching a 2026-model-year car — but the count is the least interesting number in the file: two of the eight cover 10 and 16 cars, two cover 144,049 and 310,667, three of the eight are seat belts, and the two biggest defects are a screen that goes blank while driving and a door lock that can let the car roll away after you get out. Meanwhile the flagship S-Class, the G-Class, and every EQ electric model have zero 2026 recalls, and the only 2026 Mercedes recall filed after July was an S-Class brake-hose expansion that covers no 2026 cars at all.

## Kill test

- **Genuinely newsworthy?** Yes. The shape of the eight is the story, not the total: a 10-car recall and a 310,667-car recall filed in the same census year, from the same manufacturer, for defects discovered the same way (internal quality monitoring and field reports). The 310,667-car rollaway recall is the largest single Mercedes recall of 2026 and it exists because a supplier put the wrong housing material on a microswitch, letting moisture in over five model years. The 144,049-car infotainment recall exists because Mercedes turned an over-the-air software campaign into a safety recall only after NHTSA pointed out that other OEMs treat blank instrument panels as safety recalls. And the 16-car CLA EV seat-belt recall was invisible to the standard API vocabulary — it only surfaced through a press cross-check, which is itself a finding about how recall data hides. The S-Class brake-hose expansion (26V638, Oct 2, 30,064 cars, 2022-2025 only) is the year's scariest Mercedes defect and it is not in the census, because it touches no 2026 car.
- **Novel on site?** Yes. No prior Mercedes-Benz company-level census exists. The individual campaigns were covered as news (26V281, 26V481, 26V638) but never counted, never compared across the 21-model 2026 lineup, and never placed in the thirteen-brand table. The original contribution is the corrected 8 census below (NHTSA recalls API, Nov 12, 2026, 130 + 43 + 15 trim/control queries, plus the (EV)-spelling catch that found 26V278), the 455,948-vehicle campaign-instance total, the thirteen-brand table (total 152), the per-model zero confirmations, the 10-car/16-car/20-car micro-recall trio, and the 2025-filed campaigns that sit just outside the census (25V533 steering, 25V255 fuse box).
- **Original contribution:** the corrected 8 census; the API vocabulary failure matrix (113 of 130 trim queries HTTP 400 in pass 2, including all EQS/AMG GT/SL spellings, plus the (EV) catch); the per-model zero confirmations from MY2025 control sweeps; the 455,948 campaign-vehicle arithmetic; the thirteen-brand table; the 26V481 supplier-material root cause; the 26V281 OTA-to-recall conversion chronology; and the 248,700-vehicle sales denominator.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model list for Mercedes-Benz (21 names), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants (pass 1: 94 queries, 92 HTTP 400, 1 campaign); then a trim-level pass with 130 NHTSA-filed trim spellings (pass 2: 17 HTTP 200, 7 campaigns); then a 43-query third pass with (EV), AMG, Maybach and plug-in spellings that found 26V278 via "cla 250+ (ev)" and "cla 350 4matic (ev)"; then 15 MY2025 control queries. Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. **Result: 8 campaigns.** Runners at drafts/1488-census-run.py, drafts/1488-census-run2.py; raw results at drafts/1488-mercedes-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API vocabulary failure, documented:** pass 1 (VPIC class names: "glc-class", "gle-class", "c-class") 400'd on 92/94 queries while the same API returned real 2026-MY campaigns for trim spellings ("glc 300", "gle 350 4matic"). Pass 2 400'd on 113/130 queries. The 400s are a mix of (a) empty result sets — proven by MY2025 controls, where the same spelling returns 200 with real campaigns ("s 500 4matic" MY2025 returns 26V638; "g 550" MY2025 returns 200; "eqe 350" MY2025 returns 200; "gls 450 4matic" MY2025 returns 200; "esprinter" MY2025 returns 26V099) — and (b) genuinely broken vocabulary: no spelling tried for EQS, AMG GT, or SL returns 200 for any model year, so those three lines have no working API spelling and their zero rests on press cross-checks, not on the API. The (EV) catch is the proof that (b) matters: "cla 250" 400s for both years, but "cla 250+ (ev)" returns 200 with 26V278, a 16-car 2026-MY recall the first two passes missed entirely.
3. **Outside confirmation — tools.vege.club GLC 300 page (NHTSA data, updated Nov 12, 2026):** "2026 Mercedes-Benz GLC 300 recalls (3)": 26V281 (May 2), 26V172 (Mar 20), 25V533 (Aug 20, 2025, steering coupling bolt, 2023-2026 EQE and GLC). The third is filed in 2025, so it sits outside this census — but its presence confirms the API's 2026-MY GLC count of two 2026 filings is complete, and it is the 2025-filed campaign that touches 2026-MY cars. https://tools.vege.club/en/car-recalls/mercedes-benz/glc-300/
4. **Outside confirmation — MotorGPA 2026 CLE Coupe page (NHTSA data, as of Oct 19, 2026):** "1 for the 2026" — only 26V281. VINDecoder360 AMG SL55 4MATIC+ page: 2 campaigns covering 2023-2026, the 2026 one is 26V281. thechargeport EQS SUV page: 3 recalls on file, most recent filed Jun 5, 2025 (25V366) — no 2026 EQS campaign. Edmunds 2025 EQS 450 4MATIC: "no recalls." https://motorgpa.com/cars/mercedes-benz/cle-coupe/2026 and https://www.vindecoder360.com/vin-decoder/mercedes-benz/amg-sl55-4matic and https://thechargeport.com/ev/mercedes-benz-eqs-suv/reliability
5. **26V063 (Tourrider door latch) — NHTSA API + Motor Verso recall list:** Daimler Coaches North America recalling certain 2026 Mercedes-Benz Tourrider Business and Premium transit buses; door control valve may not release the self-holding mechanism, preventing the door from opening. Filed Feb 4, 2026. **51 vehicles.** https://www.motorverso.com/recalls/mercedes-benz/
6. **26V134 (GLA bowden cable) — NHTSA Part 573 / dealer launch notification RCMN-26V134-1067 + MotorBiscuit (Mar 2026):** 10 vehicles, all 2026 GLA 250, built June 30–July 1, 2025. Bowden cable on the interior door release may not have been correctly mounted; the cable can detach and the door cannot be opened from inside, trapping occupants. Found during a routine pre-delivery inspection on an international vehicle in July 2025. Zero US warranty claims or field reports. Fix: inspect and correctly install, free. Filed Mar 6, 2026; owner letters May 1. https://static.nhtsa.gov/odi/rcl/2026/RCMN-26V134-1067.pdf
7. **26V172 (GLC center rear seat belt) — NHTSA Part 573 RCLRPT-26V172-3940 + CBT News:** 20 vehicles, all 2026 GLC (AMG GLC43, GLC 300, GLC 300 4MATIC, GLC 300 4MATIC Coupe), built Sep 16–18, 2025. A seat-belt variant without the child-seat protection function was installed in the center rear position; the belt cannot lock a child restraint. Fails FMVSS 208 and 209. Decided Mar 13, 2025 (sic — the Part 573 chronology dates the MBAG decision to March 13, 2025; filed Mar 20, 2026). Zero US claims or reports. Supplier: Lear Corporation. Fix: inspect and replace the center rear seat-belt assembly, free. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V172-3940.pdf
8. **26V199 (GLE/GLS passenger airbag) — NHTSA acknowledgment letter RCAK-26V199-8688 + dealer notification RCMN-26V199-2362 + The Recall Desk:** 932 vehicles, all 2026 GLE/GLS (11 variants incl. AMG and Maybach GLS 600). Passenger airbag fabric may have been manufactured incorrectly; the bag may not deploy as intended. Interim letters May 22, 2026; remedy is passenger airbag module replacement, free. Filed Mar 27, 2026 (mfr report date); VINs searchable Apr 3. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V199-8688.pdf
9. **26V278 (CLA EV front passenger seat belt) — NHTSA Part 573 RCLRPT-26V278-5063 + VINDecoder360 CLA 250+ (EV) page:** 16 vehicles (12 CLA 250+ (EV), 4 CLA 350 4MATIC (EV)), all 2026, built Nov 11, 2024–Nov 10, 2025. Front passenger seat-belt retractor may have been manufactured with a defect preventing deactivation of the child-seat safety function (automatic locking retractor); the belt may remain locked and cannot be extended. Decided Apr 24, 2026. Zero US warranty claims, field or service reports, deaths or injuries. Fix: replace the front passenger seat belt, free. Design change Nov 17, 2025. Filed May 1, 2026; owner letters Jun 30 (VINDecoder360 says mailed Jul 24). https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V278-5063.pdf
10. **26V281 (infotainment reset blanks instrument panel) — NHTSA Part 573 RCLRPT-26V281-6950 + USA Today (May 8, 2026) + Delaware Online:** 144,049 vehicles, MY2024-2026 AMG GT, C-Class, E-Class, SL, CLE, GLC. Infotainment control unit software may trigger repeated system resets as part of an intended fallback behavior; the instrument cluster display goes blank while driving, hiding speedometer and warning lights. Chronology: new display software rolled out Aug 2025; Korea demanded a recall Dec 2025 (foreign recall report 25F-232 filed Dec 19, 2025); NHTSA discussed it with MBAG in April 2026 and "emphasized that other OEMs had addressed IP display issues through safety recalls"; MBAG converted the remaining OTA campaign into a safety recall Apr 27, 2026. 721 US warranty claims + 652 field/service reports Oct 25, 2023–Apr 29, 2026. Zero crashes or injuries known. Fix: dealer software update, free. Filed May 1, 2026 (report date May 2 in API); VINs searchable May 8; letters Jun 26/29. MBUSA campaign 2026050004. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V281-6950.pdf
11. **26V353 (GLE/GLS rear seat-belt bolts) — NHTSA Part 573 RCLRPT-26V353-8677 + AutoEvolution (June 2026):** 203 vehicles, all 2026 GLE/GLS, built Jan 21–Feb 16, 2026 at MBUSI (Tuscaloosa). Rear seat-belt bolt connection to the vehicle body may not meet production specifications — bolts not tightened to the specified torque after a rework, found by internal quality monitoring in February 2026. 100% defect estimate. Zero US field reports, warranty claims, or injuries. Fix: tighten/replace bolts, free. Filed May 29, 2026; owner letters Jul 28. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V353-8677.pdf
12. **26V481 (door-lock microswitch rollaway) — NHTSA Part 573 RCLRPT-26V481-9237 + Autoblog (Jul 30, 2026) + Reuters (Jul 30, 2026) + CarScoops:** 310,667 vehicles, MY2019-2026: 2020-2021 CLA, 2019-2022 A-Class, 2022-2023 C-Class, 2024 CLE, 2020-2026 GLA/GLB, 2023-2024 GLC (72 variants). Microswitch in the driver's door lock may corrode — supplier development error put the wrong housing material on the switch, letting moisture permeate — and fail to detect an open door, so the electronic parking brake / Auto-Park may not engage and the car can roll away after the driver gets out. 176 US field cases Mar 1, 2021–Jun 9, 2026, all comfort-function related (radios/lights not switching off); zero US rollaways known, though rollaways have happened overseas. Fix: replace the driver's door lock, free; phased remedy, production change May 20, 2026. Filed Jul 24, 2026; VINs searchable Jul 31; letters Sep 18. Largest Mercedes recall of 2026; Autoblog noted it was the biggest of the 10 Mercedes recalls filed in the US that year as of Jul 30. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V481-9237.pdf and https://www.autoblog.com/news/mercedes-benz-rollaway-recall
13. **The campaigns just outside the census (filed 2026, no 2026-MY vehicles) — 26V638 S-Class brake hose:** filed Oct 2, 2026; 30,064 vehicles, MY2022-2025 S-Class (S 500, S 580, S 580 e, Maybach S 580/S 680, AMG S 63), built Feb 2, 2021–Nov 28, 2024. Front brake hoses (Continental part A2234201800) can weaken and leak fluid, reducing braking in one circuit. Expands 25V116 (Feb 24, 2025, 20,339 cars) after three US failure reports Apr/May/Aug 2026 on cars outside the original population; MBAG decided Sep 25, 2026. Dealers notified Oct 9; letters Nov 27. Fix: replace both front brake hoses, free. Sources: The Brake Report (Oct 12, 2026), AutoGuide (Oct 15, 2026), California Lemon Law blog. https://thebrakereport.com/mercedes-benz-s-class-brake-hose-recall-expanded/
14. **Also outside the census — 26V099 (eSprinter, MY2025 only):** found in the MY2025 control sweep ("esprinter" MY2025 returns 200 with 26V099). Filed 2026, covers 2025 eSprinter only. And **25V533 (steering coupling bolt, filed Aug 20, 2025):** 2023-2026 EQE and GLC; a loose steering coupling can cause loss of steering. It touches 2026-MY cars but was filed in 2025, so it is outside the census by the filing-year rule — the same rule that excluded VW's 25V835 do-not-drive wheel-bolt recall.
15. **Mercedes-Benz US sales (denominator):** MBUSA Q3 2026 release (Oct 7, 2026): 76,200 passenger cars in Q3 (+4%), 9,600 vans; total retail YTD Q3 2026 **248,700** (221,200 passenger cars + 27,500 vans), down 1% YoY. Mercedes-Benz Group release: US Cars sales 238,300 YTD (+12%). CarPro YTD table: Mercedes-Benz 248,800. The article uses the MBUSA retail figure, 248,700. https://media.mbusa.com/download-media/51014

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Campaign | Filed | Model(s) | Defect | US vehicles |
|---|---|---|---|---|
| 26V063 | Feb 4, 2026 | Tourrider Business/Premium buses | Door control valve won't release self-holding mechanism; door won't open | 51 |
| 26V134 | Mar 6, 2026 | GLA 250 | Bowden cable incorrectly installed; door can't be opened from inside | 10 |
| 26V172 | Mar 20, 2026 | GLC | Center rear seat belt lacks child-seat lock function; FMVSS 208/209 | 20 |
| 26V199 | Mar 27, 2026 | GLE, GLS | Passenger airbag fabric manufactured incorrectly; may not deploy as intended | 932 |
| 26V278 | May 1, 2026 | CLA 250+ / CLA 350 EV | Front passenger seat-belt retractor won't release child-seat lock | 16 |
| 26V281 | May 1, 2026 | AMG GT, C, E, SL, CLE, GLC | Infotainment reset blanks instrument panel while driving | 144,049 |
| 26V353 | May 29, 2026 | GLE, GLS | Rear seat-belt bolts not torqued to spec | 203 |
| 26V481 | Jul 24, 2026 | CLA, A, C, CLE, GLA, GLB, GLC | Door-lock microswitch corrodes; car may roll away after driver exits | 310,667 |
| **Total** | | | | **455,948** |

### Per-model counts (2026 model year)

| Model | Campaigns |
|---|---|
| GLA 250 | 2 (26V134, 26V481) |
| GLC 300 | 2 (26V172, 26V281) |
| GLE | 2 (26V199, 26V353) |
| GLS | 2 (26V199, 26V353) |
| C-Class | 1 (26V281) |
| E-Class | 1 (26V281) |
| CLE | 1 (26V281) |
| AMG GT | 1 (26V281) |
| SL | 1 (26V281) |
| GLB 250 | 1 (26V481) |
| CLA 250+ / 350 EV | 1 (26V278) |
| Tourrider | 1 (26V063) |
| S-Class | 0 |
| G-Class | 0 |
| EQE | 0 |
| EQS | 0 |
| Sprinter / eSprinter | 0 |

Twenty-one 2026 models in the VPIC list. Eight campaigns, twelve models touched, five model lines clean (S, G, EQE, EQS, Sprinter). The clean five include the flagship sedan, the G-Wagen, and the entire dedicated EV lineup. The dirtiest lines are the cheapest (GLA) and the Alabama SUVs (GLE/GLS, two each).

### Thirteen-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Nissan (+ Infiniti, company 7) | 7 |
| BMW | 7 |
| Subaru | 5 |
| Honda | 4 |
| Kia | 4 |
| **Mercedes-Benz** | **8** |
| Volkswagen | 4 |
| Mazda | 0 |

Thirteen-group total: **152 campaigns**. Thirteen-brand average: 11.7. Mercedes-Benz sits 3.7 below the average — quieter than the German rivals BMW (7) is not; Mercedes at 8 is one above BMW and double Volkswagen, a third of Stellantis, a fifth of Ford. The count says mid-pack. The populations say something else: Mercedes' 455,948 campaign-vehicle instances are the second-largest in the series after Ford's millions, and 99.7% of them sit in just two campaigns.

### Campaign-vehicle arithmetic

Summing the eight US populations: **455,948 campaign-vehicle instances**. Against 248,700 Mercedes-Benz vehicles retailed in the US through September 2026, that is roughly 1.83 recalled-vehicle instances per vehicle sold — but the populations span model years 2019-2026, so it is not a rate on 2026 sales; it is a scale figure. The distribution is the story: the two big campaigns (26V281 + 26V481 = 454,716) are 99.7% of the total; the other six campaigns together cover 1,232 vehicles. The median Mercedes recall in 2026 covered 127 vehicles. The mean covered 56,994. That gap is the whole census.

### The micro-recalls (10, 16, 20 cars)

Three of the eight campaigns cover 46 vehicles combined. 26V134 (10 GLA 250s, two days of production, June 30–July 1, 2025) and 26V172 (20 GLCs, three days, Sep 16–18, 2025) and 26V278 (16 CLA EVs, a year of production but a 16-car population) are what a recall looks like when the defect is a supplier installing the wrong variant of a part for a few days and the manufacturer catches it in production records. Zero US claims or field reports across all three. They are, in a sense, the system working: a wrong seat belt variant installed for three days, found, recalled, fixed. The contrast is 26V481, where the wrong material sat in a door lock for five model years and 176 field cases accumulated before the recall.

### The campaigns just outside the census

| Campaign | Filed | Models | Defect | US vehicles |
|---|---|---|---|---|
| 25V533 | Aug 20, 2025 | 2023-2026 EQE, GLC | Steering coupling bolt improperly tightened; coupling can loosen from rack; loss of steering | not in census (filed 2025) |
| 26V638 | Oct 2, 2026 | 2022-2025 S-Class | Front brake hoses leak; expands 25V116 | 30,064 |
| 26V099 | 2026 | 2025 eSprinter | (found in MY2025 control sweep; 2025 MY only) | — |

Plus one filed in 2025 that touches 2026 models and is the scariest 2026-MY Mercedes defect not counted: **25V533** (steering coupling bolt, loss of steering) covers 2026 EQE and GLC. It is the only 2026-MY Mercedes recall in the file that involves losing steering, and it is not in this census, because the census counts filings in 2026. The vege.club GLC 300 page lists it as the third 2026 GLC recall for exactly that reason.

## What this means for buyers (Mia's beat, with Clara's practicality)

- **If you own a 2020-2026 GLA or GLB:** you are in 26V481, the big one. A corroded microswitch in the driver's door lock can fail to detect an open door, so the electronic parking brake may not engage and the car can roll away after you get out. Dealers replace the driver's door lock, free. 176 US field cases, no US rollaway known — but rollaways have happened overseas, so do not rely on the parking brake engaging itself; set it manually until the lock is replaced.
- **If you own a 2024-2026 AMG GT, C-Class, E-Class, SL, CLE or GLC:** you are in 26V281. Your instrument panel can go blank while driving when the infotainment unit resets. The fix is a dealer software update, free. It started as an over-the-air campaign and became a recall only after NHTSA noted other manufacturers treat blank dashboards as safety recalls — which is worth remembering the next time a manufacturer calls a safety fix a software update.
- **If you own a 2026 GLE or GLS:** you are in two recalls, 26V199 (passenger airbag fabric, 932 cars) and 26V353 (rear seat-belt bolts, 203 cars, built Jan 21–Feb 16, 2026). Both are small, both are free fixes, and both were found by internal monitoring with zero US field reports. Check your VIN; the odds are low but the defects are a non-deploying airbag and a loose seat belt.
- **If you own a 2026 GLC:** you are in 26V172 (center rear seat belt, 20 cars, built Sep 16–18, 2025) and 26V281. You are also covered by 25V533, filed last August: a steering coupling bolt that can loosen and cost you steering. That one is the urgent one.
- **If you own a 2026 CLA EV (250+ or 350 4MATIC):** you are in 26V278, 16 cars. Your front passenger seat belt may lock and refuse to extend. Free replacement. The recall is so small it hid from the standard NHTSA search vocabulary — check your VIN even if the recall lists say your model has none.
- **If you own a 2026 GLA 250:** you are in 26V134 (10 cars) and 26V481. The 10-car recall is a door that cannot be opened from inside. Ten cars, two days of production, one pre-delivery inspection that caught it.
- **If you own a 2026 S-Class, G-Class, EQE, EQS or Sprinter:** as of Nov 12, 2026, there is no safety recall on your car. Check your VIN at nhtsa.gov/recalls anyway — the census is a snapshot, and a campaign filed Nov 13 would not appear here. And if your S-Class is a 2022-2025, you are in 26V638: front brake hoses that can leak, letters November 27.
- **If you are shopping a 2026 Mercedes against a 2026 BMW or Audi:** the census says Mercedes filed 8 recalls and BMW 7. That is nearly identical, and it is also incomplete information — it says nothing about the 310,667-car rollaway recall, or the blank-dashboard recall that started life as a software update, or the steering recall from last August that still covers 2026 cars.

## Limitations

- The census counts campaigns **filed Jan 1–Nov 12, 2026** covering 2026-model-year vehicles. A campaign filed after Nov 12, 2026 would not appear; the count is a snapshot, not a year-end total.
- The NHTSA recalls API returned HTTP 400 for 113 of 130 trim queries in pass 2 and 92 of 94 VPIC queries in pass 1. For most models the zero is confirmed by MY2025 controls (same spelling returns 200 with real campaigns) plus press cross-checks (vege.club, MotorGPA, VINDecoder360, thechargeport, Edmunds). But no spelling tried for EQS, AMG GT, or SL returns 200 for any model year, so the zero for those three lines rests on the press cross-checks (EQS SUV: 3 recalls on file, latest filed Jun 5, 2025; AMG SL55: 2 campaigns, the 2026 one is 26V281; CLE: 1 for 2026) and on the fact that any campaign touching C/E/GLC/GLE/GLS would have surfaced in the 17 successful trim queries. A campaign touching only a 2026 EQS, AMG GT, or SL and filed in 2026 would have to have escaped both the API and the press; that is possible but unlikely, and the article must say the zero for those lines is confirmed by independent trackers, not by a single clean API query.
- The (EV) catch is a warning in the other direction: the first two passes missed 26V278 entirely because "cla 250" is not the NHTSA spelling and "cla 250+ (ev)" is. The census was corrected before publication, but the same failure mode could hide a campaign on another line whose NHTSA spelling was not guessed. The third pass tried 43 additional spellings (AMG, Maybach, plug-in, (EV)) and found nothing new.
- Campaign populations are the manufacturers' own numbers in their Part 573 filings, not independent measurements. The 248,700 sales figure is US retail Jan–Sep 2026 across all model years (including vans and 2025 models); it is a denominator for scale, not a precise population. The group release gives 238,300 US Cars and CarPro gives 248,800 — the article uses the MBUSA retail figure and should not overstate the precision.
- The 26V481 population (310,667) and 26V281 population (144,049) are US figures spanning MY2019-2026 and MY2024-2026 respectively; only a fraction of either population is a 2026-MY vehicle. The 455,948 total is campaign-vehicle instances, not distinct vehicles — a 2026 GLA 250 in both 26V134 and 26V481 counts twice.
- 26V172's Part 573 chronology dates the MBAG decision to March 13, 2025, a year before the March 20, 2026 filing; the filing date is what the census counts. 26V063 is filed by Daimler Coaches North America, not MBUSA — it is counted because it is a Mercedes-Benz vehicle recall touching 2026 MY, but it is a transit bus, not a passenger car.
- The Japan eCall speaker campaign (Gai-4178, May 14, 2026, 4,141 vehicles, MY2024 EQS/EQE/GLE/C/E/S/SL/CLE/GLC) is a Japanese-market action with no US NHTSA equivalent found; it is noted as a geographic caveat, not counted. The European EQS/EQE BMS software recall (May 11, 2026, ~75,000 cars, MY2023-2025) is likewise European-only and outside the census.
- Complaint counts were not collected for this census; the 176 field cases for 26V481 and the 721 warranty claims + 652 field reports for 26V281 are manufacturer-reported figures from the Part 573 filings, not NHTSA complaint counts.

## Strongest counterargument

Eight recalls is a small number, and a census that counts filings counts paperwork, not safety. Mercedes' eight campaigns cover 455,948 vehicle instances, but 99.7% of that total sits in two campaigns, and the other six cover 1,232 vehicles combined — three of them cover 10, 16, and 20 cars, found by internal monitoring with zero US field reports. A skeptic will say the honest headline is that Mercedes built a quiet year: the S-Class, the G-Wagen, and the entire EV lineup have zero recalls; the GLA's 10-car recall is a rounding error; the CLA EV's 16-car recall is a rounding error; the GLC's 20-car recall is a rounding error. The two big ones are a software update and a door lock, neither of which has killed anyone in the US. That reading is mostly fair, and the article should say so. The counterweight is that the small numbers cut both ways: a defect rate of 100% in a 10-car recall is only comforting if you are not one of the ten, and the door that cannot be opened from inside is a trap, not a statistic. And the two big campaigns are not small in the ways that matter: 26V481 is a five-model-year corrosion defect that took 176 field cases to recall, and 26V281 is a blank dashboard that Mercedes treated as a software update until NHTSA said otherwise. A recall count of eight is good news for Mercedes. A rollaway defect that took five years to find is not good news for anyone who owns the car.
