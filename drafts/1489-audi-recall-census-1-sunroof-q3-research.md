# Research: #1489 — Audi Recalled Its New Cars Once in 2026. The Fires and the Blind Cameras Don't Count.

**Number:** 1489
**Slug:** 1489-audi-recall-census-1-sunroof-q3
**Journalist:** Clara Rollover (Consumer Safety Advocate — car-buying guidance, "what this means for you"; the census count is a trap for buyers, and the actionable half of this story is the three bigger Audi recalls the count hides: the Q4 e-tron battery fire, the 356,894-car blind-camera recall, and the child-seat belt retractors)
**Kicker:** By The Numbers
**Date:** November 13, 2026

## Angle (1-2 sentences)

The recall-census series reaches its fourteenth brand, and Audi's count is **1 campaign** filed in 2026 touching a 2026-model-year car — a sunroof software compliance issue on 6,077 Q3s, found in internal testing with zero crashes or injuries. The count is a trap: the year's three scariest Audi defects all sit outside it — a Q4 e-tron battery that can catch fire if charged past 80% (filed October 2026, but only 2024-2025 cars), a rearview camera that can go blank on 356,894 cars including 2026 models (filed December 2025, nine days too early), and child-seat belt retractors that may not lock on 2026 Q4 e-trons (filed September 2025). Audi is the quietest real car brand in the census. The quiet is a filing-calendar artifact, not a safety record.

## Kill test

- **Genuinely newsworthy?** Yes. A one-recall year for a major luxury brand is itself the news — Mazda is the only brand quieter (0), and Mazda's zero was a sticker. But the real finding is what the filing-year rule hides: Audi's 2026 safety story is a battery-fire recall with no fix, a 356,894-car camera recall, and a child-seat defect on the newest EV, and none of them appear in the count. The Q4 e-tron sold eight cars in the US in Q3 2026 (down from 2,956 a year earlier) while its owners were told not to charge past 80% — the recall and the sales collapse are the same story about the same car. The China coda sharpens it: on November 4, 2026, China recalled 388,258 FAW-Volkswagen Audi Q3s for a corroded subframe-to-steering-gear bolt, a defect the US Q3 census never sees.
- **Novel on site?** Yes. No prior Audi company-level census exists. The individual campaigns were covered as news — the Q4 fire recall as #1268 ("Audi's Electric SUV Gets the 80% Haircut") and the VW/Audi 80% cap comparison as #1336 — but never counted, never compared across the 24-model 2026 lineup, and never placed in the fourteen-brand table. The original contribution is the corrected 1 census below (NHTSA recalls API, Nov 13, 2026, 190 queries across three passes), the MY2025 control sweep proving the zeros are real empties rather than vocabulary failures, the per-model zero confirmations, the fourteen-brand table (total 153), and the outside-the-census table that reframes the count.
- **Original contribution:** the corrected 1 census; the 190-query API failure matrix (156 HTTP 400, 34 HTTP 200) with MY2025 controls; the per-model zero confirmations from the control sweep; the fourteen-brand table; the 26V209 chronology (found in testing early February, committee late March, filed April 1, letters April 22); the 25V900 / 26V698 / 25V638 outside-census triad; and the 107,667-vehicle sales denominator with the EV-collapse context (3,867 North American BEVs Jan–Sep, down 87.8%).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 13, 2026. Method: VPIC canonical 2026 model list for Audi (24 names), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants (pass 1: 107 queries, 95 HTTP 400, 1 campaign); then a trim-level pass with 50 NHTSA-filed trim spellings (pass 2: 0 new campaigns); then a third pass with 25 more spellings (A6/S6/Q6 Sportback e-tron, Q4 40/50 e-tron, A7/S7, Q8 e-tron, A4/S4, RS 3 sedan) plus 8 MY2025 control queries (pass 3: 0 new campaigns). Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. **Result: 1 campaign.** Runners at drafts/1489-census-run.py, drafts/1489-census-run2.py, drafts/1489-census-run3.py; raw results at drafts/1489-audi-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API vocabulary failure, documented:** pass 1 400'd on 95/107 queries, pass 2 on 35/50, pass 3 on 26/33 — 156 of 190 total. The 400s are empty result sets, proven by the MY2025 controls: the same spellings return 200 with real campaigns for MY2025 ("q5" returns 26V266; "a5" returns 25V638 + 25V899; "q4 e-tron" returns 25V125 + 26V698; "q3" returns 25V082; "a6" returns 25V899 + 25V900; "q7" returns 25V777 + 25V900; "e-tron gt" returns 25V428 + 25V900). Seven of eight controls returned 200; the eighth ("a3" MY2025) 400s, consistent with no 2025 A3 campaign on file. The cleanest zeros are the 200-with-empty-results queries: "q4 e-tron" MY2026 returns 200 and no 2026 campaign, so the Q4's zero is API-confirmed, not inferred.
3. **26V209 (Q3 sunroof) — NHTSA Part 573 acknowledgment letter RCAK-26V209-8006 + dealer bulletin RCRIT-26V209-2497 (code 57KS) + Carscoops (Apr 16, 2026) + autoevolution (Apr 10, 2026):** 6,077 US vehicles (1,336 Canada), all 2026 Q3, built Nov 26, 2025–Mar 20, 2026. The sunroof control unit's target data container was programmed incorrectly, so the remote sunroof-closing function may operate from a distance where the operator cannot clearly see the sunroof; fails FMVSS 118. Found during internal testing in early February 2026; Audi Product Safety Committee decided late March; manufacturer report date Apr 1, 2026; API ReportReceivedDate Jan 4, 2026. Zero crashes, fires, injuries, or deaths known. Fix: dealer software update to the sunroof control module plus an owner's manual update, free. VINs searchable Apr 7, 2026; owner letters mailed Apr 22, 2026 (per the NHTSA API record; the Apr 9 filing estimated May 29). Audi customer service 1-800-253-2834. The 2026 Q3 had only just reached US dealers in Q1 2026, in a single S Line Quattro specification. https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V209-2497.pdf and https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V209-8006.pdf and https://www.carscoops.com/2026/04/audi-q3-sunroof-recall/
4. **26V698 (Q4 e-tron battery fire) — NHTSA campaign record + Vehicle Service Pros (Oct 30, 2026) + MotorBiscuit (Oct 31, 2026) + Motor Illustrated (Oct 27, 2026):** filed Oct 21, 2026; 9,048 vehicles (7,040 Q4 e-tron + 2,008 Q4 Sportback e-tron), MY2024-2025 only. The high-voltage battery may fail and cause a fire; certain charging profiles combined with a state of charge above 80% may trigger thermal propagation. Cells from SK Battery Manufacturing (SK On) in Hungary. Audi knows of zero Q4 e-tron fires from this issue; the mechanically similar VW ID.4 sibling recall (22,524 cars, MY2023-2026) has 22 incident claims Jan 2024–Aug 2026. Root cause still unknown; no permanent fix; Audi recommends charging to no more than 80% and has not forced a limit on Audi cars (VW capped ID.4s remotely). Interim letters Dec 18, 2026. Audi's number 93SK. Covered as #1268 and #1336 on this site. https://www.vehicleservicepros.com/industry-news/service-repair/article/55415530/nhtsa-recalls-oct-2630-toyota-audi-ford-lexus and https://www.motorbiscuit.com/volkswagen-is-capping-22524-id-4s-at-80-charge-over-a-battery-fire-risk/
5. **25V900 (rearview camera) — NHTSA dealer bulletin RCRIT-25V900-4315 (code 90TV) + VINDecoder360 RS e-tron GT page + Lemon Law Group Partners Audi page:** filed Dec 19, 2025; 356,894 vehicles, MY2019-2026: A6, A6 allroad, A7, A8, Q7, Q8, e-tron, e-tron GT and their S and RS versions. A software error may prevent the rearview camera image from displaying; fails FMVSS 111. Owner letters mailed Jan 14, 2026. The RS e-tron GT tracker lists it as the only 2026-MY campaign for that model; the Q4 e-tron tracker lists 8 campaigns total, the newest filed Oct 21, 2026 (26V698). https://static.nhtsa.gov/odi/rcl/2025/RCRIT-25V900-4315.pdf and https://lemonlawgrouppartners.com/manufacturer/audi/
6. **25V638 (rear seat-belt retractors) — NHTSA API control sweep + thechargeport Q4 e-tron page:** filed Sep 24, 2025; certain 2025 GTI, Golf R, Audi A5, A6 Sportback e-tron, S5, S6 Sportback e-tron, 2026 Q4 Sportback e-tron and Q4 e-tron vehicles. Rear automatic locking retractors may not engage when a child seat is installed. Audi's number 69UM; Volkswagen's 694T. It is the only 2026-MY Audi recall in the file that involves a child seat not locking, and it is not in this census because it was filed in 2025. https://thechargeport.com/ev/audi-q4-e-tron/reliability
7. **26V266 (2025 Q5 seat belts) — NHTSA API control sweep + Lemon Law Group Partners Audi page:** filed 2026; 7,425 2025 Q5, Q5 Sportback, SQ5 and SQ5 Sportback models; front seat belts may have been manufactured incorrectly and fail to restrain occupants properly in a crash. Found by the "q5" MY2025 control query (returns 200 with 26V266); it is outside the census because it touches no 2026 car. https://lemonlawgrouppartners.com/manufacturer/audi/
8. **Audi US sales (denominator) — Audi Fact Pack Q3 2026 + Audi of America Q3 release (Oct 14, 2026) via ooooiykyk/AudiWorld:** 107,667 US deliveries Jan–Sep 2026, down 16% YoY (128,709 in the same period of 2025); Q3 2026: 39,751, down 15%. Q5 is the volume leader (33,509 YTD, +3%); Q3: 17,866 YTD (−2%), 6,960 in Q3 (+24%). North American BEV deliveries Jan–Sep 2026: 3,867, down 87.8%; Q4 e-tron sold 8 cars in Q3 2026 (vs 2,956 a year earlier); Q6 e-tron 619 (vs 10,059). Q3 2025 was the final quarter of the $7,500 federal EV tax credit. https://ooooiykyk.com/blog/2026/10/14/audi-u-s-sales-fall-15-in-third-quarter-despite-growth-across-core-models/ and https://www.audi.com/en/publications/corporate/audi-fact-pack-q3-2026-1849/download
9. **China Q3 recall (geographic coda) — myelectricsparks (Nov 7, 2026):** on Nov 4, 2026, China recalled more than 800,000 cars in a single day (a media tally of the day's notices, not an official total). Audi leads the list: the FAW-Volkswagen Audi Q3 accounts for 388,258 of them — a bolt joining the subframe to the steering gear can corrode and weaken, and steering can fail if it gives way. Covers Q3 cars built June 2018–Sep 2025; the fix opens Jan 15, 2027. Same model line as the US census's single recall, a different defect, a different continent, 64 times the population. https://myelectricsparks.com/china-vehicle-recall-wave/

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Campaign | Filed | Model(s) | Defect | US vehicles |
|---|---|---|---|---|
| 26V209 | Jan 4, 2026 (mfr report Apr 1) | Q3 | Sunroof control software allows remote closing out of the operator's sight; FMVSS 118 | 6,077 |
| **Total** | | | | **6,077** |

### Per-model counts (2026 model year)

| Model | Campaigns |
|---|---|
| Q3 | 1 (26V209) |
| A3 | 0 |
| A5 | 0 |
| A6 | 0 |
| A6 allroad | 0 |
| A8 L | 0 |
| Q4 | 0 |
| Q5 | 0 |
| Q6 | 0 |
| Q7 | 0 |
| Q8 | 0 |
| RS 3 | 0 |
| RS 6 Avant | 0 |
| RS 7 | 0 |
| RS Q8 | 0 |
| RS e-tron GT | 0 |
| S e-tron GT | 0 |
| S3 | 0 |
| S5 | 0 |
| S8 | 0 |
| SQ5 | 0 |
| SQ6 | 0 |
| SQ7 | 0 |
| SQ8 | 0 |

Twenty-four 2026 models in the VPIC list. One campaign, one model touched, twenty-three lines clean — including the entire dedicated EV lineup (Q4, Q6, e-tron GT), the flagships (A8 L, S8), and the volume leader (Q5, 33,509 sold this year).

### Fourteen-brand table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| **Mercedes-Benz** | **8** |
| Nissan (+ Infiniti, company 7) | 7 |
| BMW | 7 |
| Subaru | 5 |
| Honda | 4 |
| Kia | 4 |
| Volkswagen | 4 |
| **Audi** | **1** |
| Mazda | 0 |

Fourteen-group total: **153 campaigns**. Fourteen-brand average: 10.9. Audi sits 9.9 below the average — quieter than every brand except Mazda, one forty-first of Ford, a quarter of its VW Group sibling Volkswagen's count. The count says Audi had the quietest real year in the series. The populations say the count is measuring the calendar, not the cars: Audi's single counted campaign covers 6,077 vehicles, while the three numbered uncounted Audi campaigns in the file below (25V900, 26V698, 26V266) cover 373,367.

### The campaigns just outside the census

| Campaign | Filed | Models | Defect | US vehicles |
|---|---|---|---|---|
| 25V900 | Dec 19, 2025 | 2019-2026 A6, A6 allroad, A7, A8, Q7, Q8, e-tron, e-tron GT (+ S/RS) | Rearview camera software may blank the image; FMVSS 111 | 356,894 |
| 26V698 | Oct 21, 2026 | 2024-2025 Q4 e-tron, Q4 Sportback e-tron | HV battery may fail and cause a fire above 80% charge; no fix yet | 9,048 |
| 25V638 | Sep 24, 2025 | incl. 2026 Q4 e-tron, Q4 Sportback e-tron | Rear child-seat retractors may not engage | (part of a multi-model filing) |
| 26V266 | 2026 | 2025 Q5, Q5 Sportback, SQ5 | Front seat belts may fail to restrain in a crash | 7,425 |

Plus one filed in China, not the US: **FAW-Volkswagen Audi Q3 subframe bolt** (Nov 4, 2026, 388,258 cars, corrosion can weaken the bolt joining subframe to steering gear; steering can fail). It is the only Audi recall in the file that involves losing steering, and it is not in this census twice over — wrong country, and the US Q3's only recall is a sunroof.

## What this means for buyers (Clara's beat)

- **If you own a 2026 Q3:** you are in 26V209, the only counted recall. Your sunroof's remote-closing function may operate when you cannot see the roof. The fix is a free software update plus a manual update; letters went out in April 2026. It was found in Audi's own testing with zero injuries, which is the good version of a recall story. Check your VIN anyway — 6,077 cars built between Nov 26, 2025 and Mar 20, 2026 are in it.
- **If you own a 2024-2025 Q4 e-tron or Q4 Sportback e-tron:** you are in 26V698, the recall that matters most and is not in the count. Do not charge past 80% until Audi has a fix, because there is no fix yet and nobody knows the root cause. Audi has not forced a limit on your car — unlike VW, which capped ID.4s remotely — so the 80% cap is on you, in the car or the app. Interim letters arrive December 18. This was covered as #1268 when it filed; the census does not change the advice.
- **If you own a 2019-2026 A6, A6 allroad, A7, A8, Q7, Q8, e-tron or e-tron GT:** you are probably in 25V900, the 356,894-car camera recall. Your backup camera may not display. The fix is a software update, free; letters went out in January 2026. It was filed nine days before the census window opened, which is why the count says Audi had one recall while your car had two.
- **If you own a 2026 Q4 e-tron:** you are in 25V638, filed last September. Your rear seat belts may not lock a child seat. That is the defect to check before you check the sunroof — and it is the one the census cannot see, because the filing date is 2025.
- **If you own a 2025 Q5 or SQ5:** you are in 26V266, filed this year, 7,425 cars, front seat belts that may not restrain you in a crash. It is outside the census because your car is a 2025. The census counts model years, not danger.
- **If you are shopping a 2026 Audi against a 2026 BMW or Mercedes:** the census says Audi filed 1 recall, BMW 7, Mercedes 8. That is nearly meaningless as a safety comparison and exactly meaningful as a paperwork comparison. Audi's quiet year is real in one sense — 23 of 24 lines have no 2026 filing — and misleading in every sense that matters to an owner, because the battery fire, the blind camera, and the child-seat belts all happened to Audis too, just on the wrong side of a date line.

## Limitations

- The census counts campaigns **filed Jan 1–Nov 13, 2026** covering 2026-model-year vehicles. A campaign filed after Nov 13, 2026 would not appear; the count is a snapshot, not a year-end total.
- The NHTSA recalls API returned HTTP 400 for 156 of 190 queries across the three passes. For most models the zero is confirmed by MY2025 controls (same spelling returns 200 with real campaigns) plus press cross-checks (Carscoops, VINDecoder360, thechargeport, Lemon Law Group Partners, Car Safety DB, which lists the 2026 Q3 with exactly 1 recall). The "a3" spelling 400s for both MY2025 and MY2026, so the A3 zero rests on the absence of any press or tracker record of a 2026 A3 campaign, not on a clean API query. A campaign touching only a 2026 A3 and filed in 2026 would have to have escaped both the API and the press; that is possible but unlikely, and the article must say so.
- The API's ReportReceivedDate for 26V209 is Jan 4, 2026 while the manufacturer's report date in the Part 573 letter is Apr 1, 2026. The census counts by the API receipt date, consistent with the series. The owner-letter dates also differ between documents (API record: mailed Apr 22, 2026; Apr 9 filing: expected May 29, 2026); the article uses the API record's April 22 date and should not overstate the precision.
- Campaign populations are the manufacturers' own numbers in their Part 573 filings, not independent measurements. The 107,667 sales figure is US deliveries Jan–Sep 2026 across all model years (including 2025 models still selling); it is a denominator for scale, not a precise population. The 356,894 figure for 25V900 spans MY2019-2026; only a fraction is a 2026-MY vehicle. The 6,077 total is campaign-vehicle instances for one campaign, so it is also a distinct-vehicle count in this case — the only census in the series where the total is a single campaign.
- The China Q3 recall figure (388,258) comes from a media tally of Nov 4, 2026 notices, not an official total; the article must say so.
- Complaint counts were not collected for this census; the 22 ID.4 incident claims and the zero known Q4 fires are manufacturer-reported figures from the Part 573 filings and press coverage, not NHTSA complaint counts.

## Strongest counterargument

One recall is a good year, and a census that counts filings counts paperwork, not safety. Audi's single campaign covers 6,077 cars, was found in internal testing, hurt nobody, and is fixed with a software update. Twenty-three of twenty-four model lines have no 2026 filing at all, including the volume-leading Q5 and the entire EV lineup. A skeptic will say the honest headline is that Audi built a quiet year, and the article's framing — that the quiet is a calendar artifact — is a way of manufacturing a story out of a non-event. That reading is mostly fair, and the article should say so. The counterweight is that the three uncounted defects are not small in the ways that matter: a battery that can catch fire with no known cause and no fix, a backup camera that can go blank on 356,894 cars, and a child-seat belt that may not lock are each, on their own, a bigger safety story than a sunroof that closes from too far away. A recall count of one is good news for Audi. A battery-fire recall with no fix is not good news for anyone who owns the car, and the count is the wrong place to look for it.
