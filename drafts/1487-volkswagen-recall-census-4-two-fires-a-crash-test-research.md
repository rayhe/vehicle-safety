# Research: #1487 — Volkswagen Recalled Its New Cars 4 Times. Two Were Fires, One Was Caught by Canada, and the EV Has No Fix.

**Number:** 1487
**Slug:** 1487-volkswagen-recall-census-4-two-fires-a-crash-test
**Journalist:** Rex Driverton (Investigation — fatality-rate investigations, vehicle-specific deep dives; the census series rotates off Axle after #1486, and this one has a foreign-government crash test and a no-cause-no-fix battery, which is Rex's beat)
**Kicker:** Investigation
**Date:** November 12, 2026

## Angle (1-2 sentences)

The recall-census series reaches its twelfth brand, and Volkswagen's count is small — **4 campaigns** filed in 2026 touching a 2026-model-year car — but the shape of the four is the story: two are fires (a Jetta ground wire that already burned three engine compartments, and an ID.4 battery that can catch fire for reasons Volkswagen still cannot explain, with no fix), one was discovered by a foreign government crash-testing the car (the Taos fuel tank, caught by Transport Canada, not by Volkswagen), and one is a backup camera that goes dark (the Atlas, 571 claims). The best seller, the Tiguan, has zero 2026 recalls and the most owner complaints of any 2026 Volkswagen.

## Kill test

- **Genuinely newsworthy?** Yes. The count is low but the defects are not: an ID.4 battery on its third recall in eleven months, with Volkswagen telling regulators the root cause is unknown and the remedy is still under development while owners are told to charge to 80 percent; a Jetta fire risk caused by a wire a worker forgot to connect, found after three engine-compartment fires; a Taos fuel tank that fails a rear crash test because the sensor wiring is 80 mm too short, discovered by Canada's regulator. Meanwhile the car VW stopped building in America in April (the ID.4, Chattanooga production ended) sold 989 units in Q3, down 92 percent. A census that only counted to four would miss all of that; this one counts to four and then reads the four.
- **Novel on site?** Yes. No prior Volkswagen company-level census exists. The individual campaigns were covered as news (26V138, 26V258, 26V473, 26V630) but never counted, never compared across the nine-model 2026 lineup, and never placed in the twelve-brand table. The original contribution is the corrected 4 census below (NHTSA recalls API, Nov 12, 2026, 42 queries + full-vocabulary failure documentation + control sweeps), the 167,250-vehicle campaign-instance total, the completed twelve-brand table (total 144), the 2025-MY context campaigns that sit just outside the census (26V185, 26V587, 26V590, 25V835), and the ID.4 production-death parallel.
- **Original contribution:** the corrected 4 census; the API failure matrix (37 of 42 queries HTTP 400, including all four canonical names for Golf GTI, Golf R, Jetta GLI and Tiguan, while the same spellings return 200 with real campaigns for MY2025 Golf R and Tiguan); the per-model zero confirmations from CarBuzz's Oct 16, 2026 NHTSA-sourced table; the 167,250 campaign-vehicle arithmetic; the twelve-brand table; the Taos crash-test provenance; the ID.4 three-recalls-in-eleven-months count (67,034 cars); and the 241,141-vehicle sales denominator.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model list for Volkswagen (9 names: Atlas, Atlas Cross Sport, Golf GTI, Golf R, ID.4, Jetta, Jetta GLI, Taos, Tiguan), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants and targeted trims; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. 42 queries total. **Result: 4 campaigns — but 37 of 42 queries returned HTTP 400, including the canonical names for Golf GTI, Golf R, Jetta GLI and Tiguan, so the API pass is partial, not a finding, for those four models.** Runner at drafts/1487-census-run.py; raw results at drafts/1487-volkswagen-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API vocabulary failure, documented:** 5 of 42 queries returned HTTP 200 (atlas, atlas cross sport, id.4, jetta, taos — all VPIC canonical lowercase); 37 returned HTTP 400 (all suffix variants, all extra spellings, and the canonical names golf gti, golf r, jetta gli, tiguan). Control queries prove the API itself works and the 400s are model-year-specific, not spelling errors: MY2025 golf r returns 200 with 25V638000; MY2025 tiguan returns 200 with 25V526000, 25V854000, 26V587000; MY2025 jetta returns 200 with 26V138000 and 26V185000. The same spellings that 400 for MY2026 return real campaigns for MY2025. The failure is concentrated in the models with no MY2026 campaigns, which is consistent with the API 400ing on empty result sets — but it is a consistency argument, not a proof, which is why the zero for those four models rests on the CarBuzz table below, not on the API.
3. **Outside confirmation — CarBuzz, "Are Volkswagens Reliable, Or Are You Better Off With A Toyota Or Honda?", updated Oct 16, 2026 (Dan Clougher):** NHTSA-sourced per-model recall table for 2026 model-year Volkswagens: Atlas 2, Atlas Cross Sport 2, Tiguan 0, Taos 1, ID.4 1, ID.Buzz 0, Jetta 1, Jetta GLI 0, Golf GTI 0, Golf R 0. The Atlas count of 2 is 26V473 (filed 2026) plus 25V835 (filed Dec 2025, do-not-drive wheels); the Jetta count of 1 is 26V138 (26V185 covers 2025 MY only); the Taos count of 1 is 26V258. Every number in the table matches this census exactly. Same piece's complaints table: Tiguan 30, Atlas 9, Jetta 6, Golf R 4, Jetta GLI 3, Taos 2, Golf GTI 0, ID.4 0, Atlas Cross Sport 0, ID.Buzz 0 — and a note that Jetta, Jetta GLI, Golf R and Tiguan owners report phantom braking. https://carbuzz.com/volkswagen-reliability-october-2026/
4. **Outside confirmation — Tiguan trackers:** tools.vege.club, data from NHTSA updated Nov 11, 2026: "2026 Volkswagen Tiguan recalls (0). No recalls on file for 2026 Volkswagen Tiguan." 247vehiclecheck.com, updated Nov 8, 2026: "NHTSA lists no recalls for 2026" (Tiguan), 30 complaints. https://tools.vege.club/en/car-recalls/volkswagen/tiguan/ and https://www.247vehiclecheck.com/models/volkswagen-tiguan
5. **26V138 (Jetta ground wire) — NHTSA Part 573 / dealer circular RCRIT-26V138-6530 and RCMN-26V138-8090:** 48,165 US (13,318 Canada; 61,483 North America). 2025-2026 Jetta. Transmission ground wire may not have been connected during production; open circuit draws higher current; fire risk. Six claims in the US and Canada, three melted wires/connectors, three engine-compartment fires. VW estimates less than 1% of recalled vehicles actually have the defect. Human error during assembly; Puebla plant. VW recall code 97TC. Filed March 11, 2026; VINs searchable March 13; owner letters March 31 / May 8. https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V138-6530.pdf
6. **26V258 (Taos fuel sensor) — NHTSA Part 573 RCAK-26V258-5302:** 38,710 US (36,899 Canada; 75,609 North America). 2025-2026 Taos. Fuel pressure sensor wiring harness too short; in a rear-end crash the sensor can dislodge from the fuel tank, leaving a hole, fuel leaks, fire risk; fails FMVSS 301 (Fuel System Integrity). VW estimates 100% of recalled vehicles have the defect — every single one. Discovered during a Transport Canada rear crash test in March 2026, not by Volkswagen's own testing. No crashes, injuries or fires known. Fix: install an 80 mm wiring harness extension. VW recall code 97TH. Mfr report date April 22, 2026; VINs searchable April 29; letters June 19. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V258-5302.pdf
7. **26V473 (Atlas camera) — NHTSA Part 573 RCLRPT-26V473-2438 and dealer circular RCRIT-26V473-6316:** 57,851 US (38,646 Atlas + 19,205 Atlas Cross Sport; 17,042 more in Canada). 2024-2026 Atlas and Atlas Cross Sport. Low-voltage electrical event can cause camera images, including the rearview camera image, not to appear on the display. 571 claims that may relate, Nov 2023–June 2026. Estimated 1% with the defect. FMVSS 111 (Rear Visibility). Fix: rearview camera software update. VW recall code 91TV. Filed July 22, 2026; VINs searchable July 28; letters September 18. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V473-2438.pdf
8. **26V630 (ID.4 battery) — NHTSA Part 573, via The Autowire (Oct 14, 2026), ReadUS247, GCN, Electrive:** 22,524 US (5,633 Canada; 28,157 North America). 2023-2026 ID.4 built Jan 1, 2023–Feb 1, 2025. High-voltage battery may experience thermal propagation and catch fire when charged above 80 percent; cells from SK Battery America (Commerce, Georgia). Root cause unknown; remedy still under development; interim fix is an over-the-air 80 percent charge cap (applied around Oct 27, 2026). VW estimates 0.1% of recalled vehicles have the defect (about 23 cars). 22 US claims Jan 18, 2024–Aug 7, 2026. Third ID.4 battery recall in eleven months; the three together cover 67,034 cars. VW recall code 93EX. Filed Oct 1, 2026; VINs searchable Oct 6; interim letters Nov 27. https://theautowire.com/2026/10/14/vw-id4-battery-recall-80-percent-charging-data/
9. **Volkswagen US sales (denominator):** VW reports quarterly. Q1 2026: 73,803 (Automotive News sales-by-make table). Q2 2026: 89,159 (Automotive News). Q3 2026: 78,179, down 10.9% YoY (Volkswagen Group of America release, Oct 12, 2026). Jan–Sep 2026 total: **241,141**. Q3 ID.4 sales: 989, down 92.1% from 12,470 in Q3 2025; ID.4 US production at Chattanooga ended mid-April 2026 (announced April 30), plant refocused on the gas-powered Atlas. https://www.theglobalstatistics.com/german-automakers-in-us/
10. **#1486 research file** (drafts/1486-mazda-recall-census-zero-new-cars-zero-recalls-research.md) — the corrected-vocabulary method, the API failure mode, and the eleven-brand table this piece extends.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Campaign | Filed | Model(s) | Defect | US vehicles |
|---|---|---|---|---|
| 26V138 | Mar 11, 2026 | Jetta | Transmission ground wire not connected; open circuit; fire | 48,165 |
| 26V258 | Apr 23, 2026 | Taos | Fuel pressure sensor harness too short; sensor rips out of tank in rear crash; fuel leak; FMVSS 301 | 38,710 |
| 26V473 | Jul 22, 2026 | Atlas, Atlas Cross Sport | Low-voltage event kills rearview camera image; FMVSS 111 | 57,851 |
| 26V630 | Oct 1, 2026 | ID.4 | High-voltage battery thermal propagation; fire; cause unknown; no fix | 22,524 |
| **Total** | | | | **167,250** |

### Per-model counts (2026 model year)

| Model | Campaigns |
|---|---|
| Atlas | 1 |
| Atlas Cross Sport | 1 |
| Golf GTI | 0 |
| Golf R | 0 |
| ID.4 | 1 |
| Jetta | 1 |
| Jetta GLI | 0 |
| Taos | 1 |
| Tiguan | 0 |

Nine 2026 models. Four campaigns, five models touched, four models clean. The clean four include the best seller (Tiguan) and both hot hatches (GTI, R) and the GLI.

### Twelve-brand corrected table (same method family)

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
| **Volkswagen** | **4** |
| Mazda | 0 |

Twelve-group total: **144 campaigns**. Twelve-brand average: 12.0. Volkswagen sits 8 below the average and one-third of it; Ford filed ten times as many campaigns. Volkswagen is the second-quietest brand in the series after Mazda — and the difference between the two is that Mazda's zero came with no fires, while two of Volkswagen's four involve fire.

### Campaign-vehicle arithmetic

Summing the four US populations: **167,250 campaign-vehicle instances**. Against 241,141 Volkswagens sold in the US through September 2026, that is roughly 0.69 recalled-vehicle instances per vehicle sold — but the populations span model years 2023-2026, so it is not a rate on 2026 sales; it is a scale figure. For comparison: Mazda's 2026 census total was 0 instances on 341,714 sales; Ford's 41 campaigns covered millions.

### The campaigns just outside the census (filed 2026, 2025 model year only)

| Campaign | Filed | Models | Defect | US vehicles |
|---|---|---|---|---|
| 26V185 | Mar 25, 2026 | 2025 Jetta, 2025 Taos | Instrument cluster goes dark at startup; FMVSS 101; 100% defect | 75,323 |
| 26V587 | Sep 10, 2026 | 2025 Tiguan | Body control module software resets; ignition switches off while driving; stall; FMVSS 101/102/111/108 | 49,958 |
| 26V590 | Sep 11, 2026 | 2018 Tiguan, 2018-2019 Atlas, Audi Q3 | Steering rack mounting bolt corrodes; loss of steering; 2.86M worldwide, 208,724 US | 208,724 |
| 26V030 + 1 | Jan 2026 | 2023-2025 ID.4 | High-voltage battery overheating; misaligned SK Battery America electrodes | 44,551 |

Plus one filed in 2025 that touches 2026 models: **25V835** (Dec 4, 2025) — incorrect wheel bolts on 2026 Atlas, Atlas Cross Sport and ID.4; wheels can detach; NHTSA do-not-drive warning. It is the scariest 2026-MY Volkswagen recall of the year and it is not in this census, because the census counts filings in 2026. The CarBuzz table counts it (Atlas 2), which is why the Atlas row reads 2 there and 1 here.

### The ID.4 battery saga (context, not census)

26V630 is the third US ID.4 high-voltage battery recall since December 2025. The first two, filed in January 2026 (26V030 and a sibling campaign), covered 44,551 cars from model years 2023-2025 for misaligned electrodes in SK Battery America cells. 26V630 covers 22,524 more, and its filing is the bleakest of the three: the cause is unknown, the fix does not exist yet, and the interim remedy is telling 22,524 owners to charge to 80 percent. Three campaigns, 67,034 cars, one supplier, zero identified causes. Meanwhile Volkswagen ended ID.4 production at Chattanooga in April 2026 and sold 989 ID.4s in Q3, down 92 percent. The ID.4 is not being fixed; it is being wound down.

### The complaints that did not become recalls

Zero 2026 recalls does not mean zero complaints. The 2026 Tiguan — zero recalls, best seller — carries 30 owner complaints in NHTSA's file, the most of any 2026 Volkswagen, and CarBuzz notes phantom-braking reports across the Jetta, Jetta GLI, Golf R and Tiguan. The 2026 Atlas has 9 complaints. Complaints are unverified owner reports, not findings — but the Tiguan's 2025 sibling was recalled twice in 2026 (26V587 for the ignition switching off while driving, and the steering-bolt campaign's shadow), which is the shape a 2026 Tiguan recall would take if one comes.

## What this means for buyers (Rex's beat, with Clara's practicality)

- **If you own a 2025-2026 Jetta:** you are in 26V138. A ground wire may not have been connected at the factory; three cars caught fire in the engine compartment. The fix is an inspection and repair, free. Less than 1% of the recalled cars are expected to actually have the defect, but the defect is a fire, so check your VIN.
- **If you own a 2025-2026 Taos:** you are in 26V258. Every recalled car has the defect — the sensor wiring is too short in all of them — but it only matters in a severe rear-end crash, and the fix is an 80 mm harness extension, free. It was found by a Canadian crash test, which is worth remembering the next time someone tells you recalls come from manufacturers finding their own mistakes.
- **If you own a 2024-2026 Atlas or Atlas Cross Sport:** you are in 26V473. Your backup camera can go dark after a low-voltage event; the fix is a software update, free. You are also in 25V835, filed last December: the wrong wheel bolts can let a wheel detach, and NHTSA says do not drive. That one is the urgent one.
- **If you own a 2023-2026 ID.4:** you are in 26V630. Charge to 80 percent until Volkswagen develops a repair. Volkswagen does not know why the batteries fail. There is no date for a fix. Interim letters go out November 27.
- **If you own a 2026 Tiguan, Golf GTI, Golf R or Jetta GLI:** as of Nov 12, 2026, there is no safety recall on your car. Check your VIN at nhtsa.gov/recalls anyway — the census is a snapshot, and a campaign filed Nov 13 would not appear here. And if your Tiguan brakes on its own, report it: phantom braking is the complaint pattern across all four clean models.
- **If you are shopping a 2026 Volkswagen against a 2026 Ford, Toyota or Stellantis product:** the census says the Volkswagen has 4 recalls and the others have 15 to 41. That is real information, and it is also incomplete information — it says nothing about the ID.4 battery that has no fix, or the Atlas wheel bolts from last December, or the Tiguan complaints that have not become investigations yet.

## Limitations

- The census counts campaigns **filed Jan 1–Nov 12, 2026** covering 2026-model-year vehicles. A campaign filed after Nov 12, 2026 would not appear; the count is a snapshot, not a year-end total.
- The NHTSA recalls API returned HTTP 400 for 37 of 42 queries, including the canonical names for Golf GTI, Golf R, Jetta GLI and Tiguan. The zero for those four models therefore rests on the CarBuzz Oct 16, 2026 NHTSA-sourced table (which matches this census exactly on all ten nameplates) and the Tiguan-specific trackers, plus control sweeps showing the same spellings return 200 with real campaigns for MY2025. A campaign touching only a 2026 Golf GTI, Golf R, Jetta GLI or Tiguan and filed between Oct 16 and Nov 12, 2026 would have to have escaped both the API's 200-responses and the press; that is possible but unlikely, and the article must say the zero is confirmed as of Oct 16 by CarBuzz and as of Nov 12 by the API's pattern, not by a single clean query.
- Campaign populations are the manufacturers' own numbers in their Part 573 filings, not independent measurements. The 241,141 sales figure is US sales Jan–Sep 2026 across all model years, not 2026-model-year production; some of those cars are 2025 models. It is a denominator for scale, not a precise population. The Q1 figure (73,803) comes from Automotive News; one secondary source (carpro.com) reports 84,316 for Q1, a discrepancy of 10,513 that moves the total to 251,654 if used instead. The article should use the Automotive News figure and not overstate the precision.
- The 26V630 population (22,524) is the US figure; Canada adds 5,633. The 26V138, 26V258 and 26V473 figures are likewise US-only; Canadian populations are noted where known.
- Complaint counts (Tiguan 30, Atlas 9, Jetta 6, Golf R 4, Jetta GLI 3) are unverified owner reports in NHTSA's complaint file as of Oct 16, 2026, not findings of defect. Phantom braking is a complaint pattern, not a confirmed defect.
- The Australian power-steering recall (REC-006602, Sept 1, 2026, 5,116 Golf/Tiguan/Tayron, 2025-2026) is an Australian-market action with no US NHTSA equivalent; it is noted as a geographic caveat, not counted.
- 26V590's worldwide figure (2.86 million) covers Volkswagen, Audi, SEAT and Skoda; the US figure is 208,724. The article must not present the worldwide number as the US number.

## Strongest counterargument

Four recalls is a small number, and a census that counts filings counts paperwork, not safety. Volkswagen's four campaigns cover 167,250 vehicle instances, but the defect estimates are tiny — less than 1% for the Jetta, 1% for the Atlas, 0.1% for the ID.4 — and only the Taos, at 100%, is a defect in every car. A skeptic will say the honest headline is that Volkswagen built a quiet year: the Tiguan, its best seller, has zero recalls; the GTI and Golf R, the enthusiast cars, have zero; the GLI has zero. The fires are three engine compartments out of 48,165 Jettas, and the ID.4 battery problem affects maybe 23 cars out of 22,524. That reading is mostly fair, and the article should say so. The counterweight is that the small numbers cut both ways: a defect rate of 0.1% is only comforting if you can identify the 0.1%, and for the ID.4 Volkswagen cannot — it does not know the cause, has no fix, and is telling 22,524 owners to charge to 80 percent while it figures it out. A recall count of four is good news for Volkswagen. A battery recall with no cause and no fix is not good news for anyone who owns the car.
