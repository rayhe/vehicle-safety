# Research: #1492 — Tesla Recalled Four Times in 2026. Not One of Them Could Be Fixed Over the Air.

**Number:** 1492
**Slug:** 1492-tesla-recall-census-4-zero-ota-fixes
**Journalist:** Vin Wreckage (Existential Dread Columnist — paradoxes, counterintuitive findings; a census where the over-the-air company has zero over-the-air recalls is a Vin paradox: the numbers don't lie, but they do occasionally smirk)
**Kicker:** Existential Dread
**Date:** November 13, 2026

## Angle (1-2 sentences)

The recall-census series reaches its sixteenth brand, and Tesla's count is **4 campaigns** filed in 2026 touching a 2026-model-year car, covering **14,782 vehicles**. The count is the least interesting number in the file: all four campaigns are marked `overTheAirUpdate: false` in NHTSA's own API, the biggest one is a missing sticker, the smallest one ends in a full buyback of 15 cars, and the Cybertruck campaign accidentally reveals that Tesla sold exactly 173 rear-wheel-drive Cybertrucks in the truck's entire life. The company that taught the industry cars could be fixed while you sleep had a year where nothing could be fixed while you sleep.

## Kill test

- **Genuinely newsworthy?** Yes. Tesla is the most-covered automaker in the world and this is the first company-level census of its 2026 recalls on this site. The zero-OTA finding is the news: Tesla's brand promise is that software fixes defects, yet every 2026 filing that touched a new car required a service visit, a wrench, a sticker, or a buyback. The real OTA recall of Tesla's 2026, 26V283 (218,868 cars, fixed on 99.92% of the fleet before the notice was even filed), sits outside the census because it touches no 2026 car. The census counts filings and model years. The software did not check either.
- **Novel on site?** Yes. No prior Tesla company-level census exists. Individual Tesla recalls were covered as news (26V558 suspension, the 25V690 contactor story in October press), but never counted, never compared across the seven-model 2026 lineup, and never placed in the sixteen-brand table. The original contribution is the corrected 4 census below (NHTSA recalls API, Nov 13, 2026, 33 queries plus 8 MY2025 controls), the per-model zero confirmations, the sixteen-brand table (total now 157), the outside-the-census table that reframes the count, and the 173-unit RWD Cybertruck sales reveal.
- **Original contribution:** the corrected 4 census; the 33-query API failure matrix (30 HTTP 400, 3 HTTP 200) with MY2025 controls; the zero-OTA finding across all four campaigns; the 14,782-vehicle population total; the 26V445 fifteen-car buyback; the 26V255 173-vehicle RWD Cybertruck sales reveal; the 25V690 date correction (the October 2026 press darling was a 2025 filing); and the 26V283 outside-census coda (218,868 cars, OTA-fixed before filing).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 13, 2026. Method: VPIC canonical 2026 model list for Tesla (7 names: Cybercab, Cybertruck, Model 3, Model S, Model X, Model Y, Semi), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants plus targeted trims (pass 1: 33 queries, 30 HTTP 400, 3 HTTP 200, 4 campaigns). Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. **Result: 4 campaigns.** Runner at drafts/1492-tesla-recall-census-raw.json (adapted from the 1491 Porsche runner). https://www.nhtsa.gov/recalls
2. **API 400 semantics, documented:** the recalls API returns HTTP 400 when no recall records exist at all for a model-year, and 200 with rows when records exist. Proven three ways. (a) The MY2025 controls: the same spellings return 200 with real campaigns for MY2025 ("model 3" returns 24V935 + 25V002 + 25V690; "model y" returns 24V935 + 25V002 + 26V315; "model s" returns 24V967 + 25V002; "model x" returns 24V967 + 25V002 + 25V172; "cybertruck" returns 25V170 + 25V699 + 26V255) — 5 of 5 model controls returned 200. (b) The clean 200-with-rows MY2026 query: "model 3" MY2026 returns 200 with only 25V410 (filed Jun 18, 2025) — so Model 3's zero is API-confirmed rows, not an inferred empty. (c) The "semi" and "cybercab" controls 400 in both MY2025 and MY2026, consistent with no such cars having recall records at all (Semi has no 2026 recall history; Cybercab is not yet sold). Model S and Model X 400 for MY2026 while returning 200 for MY2025 — the vocabulary is fine; the records simply do not exist, consistent with the S/X product sunset in mid-2026 (see source 9).
3. **26V255 (Cybertruck wheel studs) — NHTSA Part 573 report RCLRPT-26V255-4257 + NHTSA acknowledgment RCAK-26V255-1525 + WeTalkTesla (Apr 30, 2026):** filed Apr 21, 2026 (API ReportReceivedDate Apr 22); 173 vehicles; 2024-2026 Cybertruck with 18-inch steel wheels (RWD Long Range only). Brake rotor stud holes may crack under road perturbations and cornering; stud can separate from the hub; loss of vehicle control. Production of the affected trim stopped Nov 25, 2025 "due to limited demand." 3 warranty claims that may be related; no crashes, injuries, or fatalities reported. Remedy: replace front and rear brake rotors, hubs, and lug nuts, free. Owner letters mailed Jun 20, 2026. Tesla number SB-26-33-003. The 173 figure is the entire US population of RWD Cybertrucks ever sold. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V255-1525.pdf and https://wetalktesla.com/2026/04/30/nhtsa-recalls-just-173-cybertrucks-18-inch-steel/
4. **26V315 (Model Y certification label) — NHTSA owner letter RCONL-26V315-1565 + USA Today (May 22, 2026) + Auto123:** filed May 11, 2026 (API ReportReceivedDate May 19); 14,575 vehicles: 11,878 MY2026 + 2,697 MY2025 Model Y, built Nov 17, 2024–Apr 21, 2026. Certification label (49 CFR Part 567) may not have been installed; missing weight information could lead to overloading. Root cause: the automated vision-scanning tool at Fremont "performing inconsistently." Tesla estimates only ~45% of the recalled pool actually lacks the label. No warranty claims, field reports, collisions, fatalities, or injuries as of mid-May. Remedy: inspect and affix a label if necessary, under 10 minutes, free. Owner letters mailed Jul 17, 2026. Tesla number SB-26-19-002. https://www.usatoday.com/story/cars/recalls/2026/05/22/tesla-recalls-vehicles-model-y/90213351007/ and https://www.auto123.com/en/news/tesla-recall-model-y-missing-label/73929/
5. **26V445 (foreign-market buyback) — NHTSA owner letter RCONL-26V445-2561 + Tork.buzz (Jul 17 and Jul 24, 2026):** filed Jul 7, 2026; 15 vehicles: 2024 Model 3 and 2026 Model Y built at Gigafactory Shanghai or Gigafactory Berlin for the Canadian market, bought by Canadian customers who cross-border imported them into the US. No driver or passenger knee airbags; fails FMVSS 208 unbelted test requirements (S5.1.2(b), S15.2); Model Y lacks FMVSS 201 S6 interior countermeasures; Model 3 never tested to Part 581 bumper impact procedures. Tesla had issued Certificates of Conformity falsely confirming US compliance; those letters are rescinded. Remedy: Tesla will repurchase vehicles currently registered in the US, or replace them with fully compliant US-spec models, free of charge. The smallest population in the census with the largest remedy. https://tork.buzz/carnews/cross-border-telemetry-failure-tesla-accidental-import-recall-exposes-hidden-safety-differences-in-canadian-spec-models-20260717-0007.html
6. **26V558 (Model Y suspension fasteners) — NHTSA Part 573 report RCLRPT-26V558-7885 + NHTSA acknowledgment RCAK-26V558-6623 + CleanTechnica (Sep 2, 2026):** filed Aug 31, 2026 (API ReportReceivedDate Sep 1); 19 vehicles; 2026 Model Y built Jul 26–Aug 4, 2026. Front suspension lateral link attached to the sub-frame with two fasteners; if a fastener was not secured to specification it may loosen or separate, shifting wheel alignment and causing loss of vehicle control. Root cause: a PLC control function in the manufacturing system was mistakenly deactivated Jul 26, 2026; reinstated Aug 7 with access restricted. Estimated 75% of the 19 have the defect. 1 warranty claim or field report; no crashes, injuries, or deaths. Remedy: tighten or replace fasteners, check alignment, free. Owner letters mailed Oct 30, 2026. Tesla number SB-26-31-004. The same failure mode as 22V895 (2023 Model Y) — Tesla has now recalled this exact defect three model generations apart. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V558-7885.pdf and http://cleantechnica.com/2026/09/02/tesla-model-y-suspension-problem-china-us-ev-sales/
7. **25V690 (battery contactor — the October press darling that is a 2025 filing) — NHTSA owner letter RCONL-25V690-4759 + Tesla support page + Reuters via Carc.com (Oct 26, 2026):** filed Oct 10, 2025; 12,963 vehicles: 7,925 MY2026 Model Y (built Mar 15–Aug 15, 2025) + 5,038 MY2025 Model 3 (built Mar 8–Aug 12, 2025). Battery pack contactor solenoid (InTiCa, via SongChuan) may open unexpectedly from a poor coil termination connection, causing sudden loss of propulsion with no warning. 36 warranty claims + 26 field reports as of Oct 7, 2026; no collisions, injuries, or fatalities. Remedy: replace contactor, ~1 hour, free. Press coverage in October 2026 (Reuters, Oct 2026; Carc.com Oct 26) reported it as current news; the filing is a year old. It appears in the API's Model Y MY2026 rows, which is how the census excludes it by date rather than by model. https://www.tesla.com/support/recall-battery-pack-contactor and https://www.carc.com/news/tesla-battery-contactor-recall-12963-october-2026
8. **26V283 (rearview camera — the real OTA recall, outside the census) — NHTSA Part 573 report RCLRPT-26V283-8114 + USA Today (May 6, 2026) + TFLcar (May 6, 2026):** filed May 4, 2026 (API ReportReceivedDate May 5); 218,868 vehicles: 2017 + 2021-2023 Model 3, 2020-2023 Model Y, 2021-2023 Model S, 2021-2023 Model X, all on Hardware 3 running software 2026.8.6. On power-up, a software configuration could delay the rearview camera image up to 11 seconds after shifting into reverse; fails FMVSS 111 S5.5.3. Remedy: OTA software update 2026.8.6.1, pushed Apr 11 — 99.92% of the fleet had it before NHTSA filed the notice. 27 warranty claims + 2 field reports; no collisions, injuries, or fatalities. Tesla number SB-26-00-016. The largest Tesla recall of 2026 by population, and it touches no 2026 car. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V283-8114.pdf and https://www.usatoday.com/story/cars/recalls/2026/05/06/tesla-recalls-vehicles-models/89960883007/
9. **Tesla US sales (denominator) — Cox Automotive / Kelley Blue Book Q3 2026 EV Sales Report (Oct 12, 2026) via Electric Cars Report + Tesla Q3 2026 10-Q:** Tesla sold an estimated 386,194 EVs in the US in Jan–Sep 2026 (144,094 in Q3 alone, down 19.7% YoY; 52.9% of the US EV market). Model Y: 262,491 YTD (99,037 in Q3); Model 3: 106,962 YTD (40,346 in Q3); Cybertruck: 11,586 YTD. Global deliveries Jan–Sep 2026: 1,324,681, up 8.8% YoY (Q3: 486,532). The 10-Q notes Model S and Model X deliveries fell after "the product sunset in mid-2026." Tesla does not publish model-level US sales; all US figures are Cox/KBB estimates from registration data. https://electriccarsreport.com/2026/10/u-s-ev-sales-rebound-in-q3-2026-as-toyota-rivian-and-subaru-gain-ground/ and https://ir.tesla.com/_flysystem/s3/sec/000162828026066775/tsla-20260930-gen.pdf
10. **25V410 (seat-back fasteners — the other 2025 filing on 2026 cars) — NHTSA Part 573 report RCLRPT-25V410-8258:** filed Jun 18, 2025; 48 vehicles: 30 MY2026 Model Y + 18 MY2026 Model 3, built Apr 3–May 7, 2025. Seat-back-to-seat-bottom fasteners may have been improperly torqued; the seat may not properly restrain the occupant in a crash. Discovered when service found 2 of 4 fasteners missing on a driver's seat. 1 warranty claim; no collisions, fatalities, or injuries. The only other campaign in the API's Model 3 MY2026 rows. https://static.nhtsa.gov/odi/rcl/2025/RCONL-25V410-1393.pdf

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Campaign | Filed | Model(s) | Defect | US vehicles |
|---|---|---|---|---|
| 26V255 | Apr 22, 2026 | Cybertruck 2024–2026 | Brake rotor stud holes crack; stud may separate from hub | 173 |
| 26V315 | May 19, 2026 | Model Y 2025–2026 | Certification label may not be installed (49 CFR 567) | 14,575 |
| 26V445 | Jul 7, 2026 | Model 3 2024, Model Y 2026 | Foreign-market cars lack knee airbags, FMVSS 208/201/581 | 15 |
| 26V558 | Sep 1, 2026 | Model Y 2026 | Suspension lateral link fasteners not torqued | 19 |
| **Total** | | | | **14,782** |

All four campaigns: `overTheAirUpdate: false` in the NHTSA API. Zero OTA fixes in the census.

### Per-model counts (2026 model year)

| Model | Campaigns | API evidence |
|---|---|---|
| Model Y | 3 | 200 — 26V315, 26V445, 26V558 |
| Cybertruck | 1 | 200 — 26V255 |
| Model 3 | 0 | 200 — only 25V410 (filed Jun 2025) on file |
| Model S | 0 | 400 — no recall records exist for MY2026 Model S at all; product sunset mid-2026 |
| Model X | 0 | 400 — no recall records exist for MY2026 Model X at all; product sunset mid-2026 |
| Semi | 0 | 400 — no recall records exist for MY2026 Semi at all |
| Cybercab | 0 | 400 — no recall records exist for MY2026 Cybercab at all; not yet sold |

Seven 2026 models in the VPIC list. Four campaigns, two models touched, 14,782 vehicles. One campaign (26V315) accounts for 98.6% of the population. The other three combined cover 207 cars.

### Sixteen-brand table (same method family)

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
| **Tesla** | **4** |
| Audi | 1 |
| Mazda | 0 |
| **Porsche** | **0** |

Sixteen-group total: **157 campaigns**. Sixteen-brand average: 9.8. Tesla ties Volkswagen at 4 — one-tenth of Ford, a quarter of GM — despite selling an estimated 386,194 cars in the US in nine months, more than every other brand on the table except the legacy giants. The count says Tesla had a quiet recall year. The populations say the count is measuring the calendar, not the cars: the campaigns just outside the census cover 231,879 more vehicles.

### The campaigns just outside the census

| Campaign | Filed | Models | Defect | US vehicles |
|---|---|---|---|---|
| 26V283 | May 5, 2026 | 2017, 2021–2023 Model 3; 2020–2023 Model Y; 2021–2023 Model S/X | Rearview camera delayed up to 11 sec; FMVSS 111; fixed OTA, 99.92% before filing | 218,868 |
| 26V507 | Aug 5, 2026 | 2022–2023 Model 3/Y (per API rows) | Headlights | (not verified — population not pulled) |
| 25V690 | Oct 10, 2025 | 2025 Model 3, 2026 Model Y | Battery contactor may open; sudden loss of propulsion | 12,963 |
| 25V410 | Jun 18, 2025 | 2026 Model 3/Y | Seat-back fasteners improperly torqued | 48 |

Plus three more 2025 filings touching MY2026 Model Y in the API rows: 25V359 (wiper linkage, May 30, 2025), 25V490 (horn, Jul 28, 2025), 25V658 (wiring, Oct 2, 2025). The Model Y's 2026 file holds eight campaigns; only three were filed in 2026.

## Angles for the draft

- **The OTA paradox (lead):** Tesla built its reputation on fixing cars overnight, over the air, while owners slept. In 2026, not one recall touching a new Tesla could be fixed that way. The sticker needs a service visit. The wheel studs need a wrench. The suspension bolts need a torque spec and a human. The fifteen Canadian cars need to be bought back. The one recall that *was* fixed over the air, 26V283, was fixed on 99.92% of the fleet before NHTSA even filed the paperwork — and it touched no 2026 car at all.
- **The 173:** 26V255 is a recall of every rear-wheel-drive Cybertruck Tesla ever sold. The trim lasted from August to November 2025. One hundred seventy-three people bought the budget Cybertruck. All 173 got recalled. The cheapest Cybertruck was also the rarest, and the rarest was also the one whose wheels could fall off.
- **The 15:** 26V445 is the smallest recall in the census and the most expensive per car. Fifteen people imported Canadian Teslas that Tesla itself had certified as US-compliant. They were not. The cars are missing knee airbags, the part of the car you never think about until the one crash where it matters. Tesla's remedy is not a repair. It is a buyback.
- **The 19:** 26V558 happened because someone turned off a PLC control function on July 26, 2026, and turned it back on August 7. Nine days of production. Nineteen cars. One of them flagged for a handling and noise concern. The same lateral-link failure mode was recalled on the 2023 Model Y (22V895) — Tesla has now recalled this exact bolt three model generations apart.
- **The sticker:** 26V315 is 98.6% of the census population and the least dramatic defect in it. A camera at Fremont could not consistently tell whether a weight label was stuck to a door. Fourteen thousand five hundred seventy-five owners need a service appointment for a sticker, and Tesla estimates only 45% of them are actually missing it. The other 55% get to drive to a service center to be told they already have one.
- **The October ghost:** the most-covered Tesla recall of October 2026, the battery contactor story (12,963 cars, sudden loss of power), was filed in October 2025. The press covered a year-old filing as breaking news while the actual 2026 filings went unnoticed. The census is the only thing that dates the campaigns correctly.

## Limitations

- The census counts NHTSA safety recall campaigns filed Jan 1–Nov 13, 2026, touching a 2026-model-year vehicle. It does not count workshop/service campaigns, EU Safety Gate actions (e.g., the October 2026 Model 3 Premium far-side airbag recall, 131,726 cars in Europe), or NHTSA investigations (e.g., the October 2026 FSD investigation covering ~2.88M vehicles). A defect handled outside the US recall system is invisible to this count by design.
- The API's 400 responses are interpreted as "no recall records exist for that model-year," per the method validated in #1486/#1491. The MY2025 controls (5 of 5 returning 200 with real campaigns) and the Model 3 MY2026 200-with-only-25V410 result support that reading for Tesla, but a 400 is still an absence of records, not a positive confirmation of zero defects.
- US sales figures are Cox Automotive / Kelley Blue Book estimates from registration data, not Tesla disclosures. Tesla reports global deliveries only (1,324,681 Jan–Sep 2026). The 386,194 US figure and per-model splits carry estimation error.
- 26V507's population was not pulled from its Part 573 report; it is listed without a vehicle count. 25V359/25V490/25V658 populations were not pulled either.
- The Cybercab and Semi appear in VPIC's 2026 model list but neither has recall records; the Cybercab is not yet sold to the public and the Semi's US deliveries are minimal. Their zeros are inventory zeros, not safety findings.
- Campaign populations are NHTSA "potentially involved" figures, not confirmed-defect counts. 26V315's own filing estimates only 45% of its population actually lacks the label; 26V558 estimates 75% have the defect.
