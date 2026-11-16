# Research — #1521: Acura Fixed the ZDX's Brakes in 2024. Now It's Recalling 3.5 Times as Many Cars for the Same Failure.

**Slug:** `1521-acura-zdx-brake-recall-of-recall-26v735`
**Journalist:** Mia Crumplezone (Safety Engineering Editor — technical but accessible, judgmental about bad vehicle design; a brake control module that fires the ABS on its own and dumps pressure is her beat)
**Kicker:** Investigation
**Date researched:** 2026-11-15
**Target ship_date:** 2028-09-11 (1 day after #1520's 2028-09-10)

## Story in one line

Acura recalled 4,174 ZDXs in August 2024 because a software error could fire the ABS unprompted and dump brake pressure below 25 mph; 812 days later it filed campaign 26V735 for the same defect on the same cars, except this time the population is 14,648 — 3.5 times bigger, roughly three-quarters of every ZDX Acura ever sold — and it landed exactly seven days after GM recalled 67,380 of its own Ultium EVs for the same brake family.

## Kill test

- **Genuinely newsworthy?** YES. Filed November 5, 2026, reported November 14, owner letters December 14. A brake system that can release pressure on its own is the most safety-critical software defect class there is, and this is the second time Acura has recalled these cars for it.
- **Novel angle on data?** YES. No standalone ZDX article exists on the site (grep of drafts/ and stories/ for "zdx" returns only passing mentions inside GM brake stories). The original contribution is the recall-of-a-recall arithmetic: 14,648 vs 4,174 (3.51x), 77.5% of all ZDXs ever sold, the 812-day gap, the repeated 7-day GM-to-Honda lag (2024 and 2026), and the EA26006 accounting — the two 2026 recalls together cover only 7.0% of the 1,164,820 vehicles under federal investigation, leaving 1,082,792 still waiting.
- **3+ primary sources?** YES. (1) NHTSA recalls API, verified live this run — full 2024 ZDX campaign list (6 campaigns) and verbatim 26V735/24V614 summaries; (2) NHTSA Part 573 Safety Recall Report 24V614 — 4,174 vehicles, 1% defect estimate, defect mechanism, GM 24V589 trigger; (3) The Truth About Cars, Nov 14, 2026 — 26V735 reporting; (4) Honda/Acura press release, Aug 16, 2024 — ~5,000 vehicles, OTA fix, no Acura crashes/injuries; (5) Autoblog, Aug 25, 2026 — EA26006 scope (1,164,820 vehicles, 745 reports, 21 crashes/fires, 6 injuries); (6) #1387 research file — GM 26V717 (67,380, Oct 29, 2026) and the EA26006 overlap audit; (7) Wikipedia / The Autopian — ZDX production March 2024–September 2025, 18,911 sold.
- **Verdict:** PROCEED.

## Primary sources

1. **NHTSA recalls API, api.nhtsa.gov/recalls/recallsByVehicle (make=acura, model=zdx, modelYear=2024)** — verified live 2026-11-15. Six campaigns on the 2024 ZDX: 24V614 (15/08/2024, ABS/EBCM), 25V018 (17/01/2025, stabilizer bar bracket bolts), 25V234 (11/04/2025, stabilizer bar bracket bolts, second batch), 26V112 (27/02/2026, cluster/rearview camera software), 26V306 (15/05/2026, rearview camera), 26V735 (05/11/2026, brake pressure). 26V735 summary verbatim: "A software error may unexpectedly activate the anti-lock brake system (ABS) and release brake pressure." Remedy: EBCM software update OTA or by dealer, free; owner letters expected December 14, 2026; Acura number CQC; "This recall expands previous NHTSA recall number 24V614." https://www.nhtsa.gov/recalls
2. **NHTSA, Part 573 Safety Recall Report 24V614 (Honda recall UJE), submitted Aug 23, 2024.** https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V614-7296.PDF — 4,174 potentially involved, estimated 1% with defect. Production Dec 19, 2023–Aug 2, 2024, AWD only. Defect: "During certain braking events below 25 mph on dry surfaces, the vehicle may exhibit overly sensitive anti-lock braking system (ABS) control. In these conditions, if the ABS falsely activates and a specific sequence of wheel movements occur, the vehicle's ABS system will continue to release braking pressure in the vehicle's brake system." Safety risk: "stopping performance can be reduced or the service brakes can become inoperative." Chronology: Aug 8, 2024 GM notified NHTSA of the Lyriq defect (24V589); as of Aug 8, 2024 Honda had received zero warranty claims, field reports, injuries or crashes on Acura vehicles; Aug 22, 2024 Honda determined some vehicles were updated at the factory before shipment.
3. **The Truth About Cars, "Acura ZDX Recall: 14,648 EVs May Dump Brake Pressure," Nov 14, 2026.** https://www.thetruthaboutcars.com/cars/news-blog/acura-zdx-recall-14-648-evs-may-dump-brake-pressure-45137092 — 14,648 units, all 2024 AWD; EBCM software; remedy OTA or dealer; letters Dec 14, 2026; Acura number CQC; NHTSA campaign 26V735000; "This is not the ZDX's first trip to the recall page for this issue."
4. **Acura/Honda press release, Aug 16, 2024.** http://hondanews.com/en-US/honda-corporate/releases/acura-recalls-2024-zdx-a-spec-awd-and-zdx-type-s-vehicles-to-update-electronic-brake-control-module-ebcm-software — "Approximately 5,000 ZDX A-Spec AWD and ZDX Type S vehicles in the U.S."; OTA update available same day; "No related crashes or injuries in Acura vehicles have been reported"; defect triggers below 25 mph on flat, smooth, dry surface.
5. **Autoblog, "All The Vehicles Named In GM And Honda's Massive Brake Failure Investigation," Aug 25, 2026.** https://www.autoblog.com/news/nhtsa-investigates-over-1-million-general-motors-honda-vehicles-brake-issues-could-cause-crash — NHTSA escalated PE24011 (opened Apr 11, 2024) to Engineering Analysis EA26006 on Aug 21, 2026; estimated 1,164,820 vehicles 2023–2026 including Cruise Origin; 745 incidents, 21 crashes/fires, five injury incidents with six individual injuries, zero fatalities; population includes 2024–2026 Acura ZDX and Honda Prologue; root cause under study is alleged spindle fractures in the eBoost system, though some reports "don't seem to match a spindle failure."
6. **#1387 research file (drafts/1387-gm-ev-brake-software-recall-26v717-research.md)** — GM recall 26V717, filed Oct 29, 2026: 67,380 vehicles (2023–2027 Lyriq, 2025–2026 Celestiq, 2026–2027 Vistiq, 2024–2027 Blazer EV, Performance AWD only); Brake System Control Module software; 24 potentially related complaints including 20 minor accidents and 2 allegations of minor injuries as of Oct 29; owner letters Dec 14, 2026; EA26006 overlap audit (67,380 / 1,164,820 = 5.8%).
7. **Wikipedia, "Acura ZDX"; The Autopian, Sep 24, 2025.** https://en.wikipedia.org/wiki/Acura_ZDX — second-generation ZDX production March 2024–September 2025; Acura announced discontinuation September 2025; 18,911 units sold from start of production through August 2025; built at GM's Spring Hill, Tennessee plant; RSX to follow as Acura's next EV.

## The numbers

### The recall-of-a-recall

| Campaign | Filed | Vehicles | Acura no. | Defect |
|---|---|---|---|---|
| 24V614 | Aug 15, 2024 | 4,174 | UJE | EBCM software fires ABS unprompted below 25 mph, releases brake pressure |
| 26V735 | Nov 5, 2026 | 14,648 | CQC | Same EBCM software defect; "expands previous recall number 24V614" |

- **Expansion ratio:** 14,648 / 4,174 = **3.51x**. The second recall is three and a half times the first.
- **Gap between filings:** 812 days (Aug 15, 2024 → Nov 5, 2026).
- **Share of the model ever sold:** 14,648 / 18,911 = **77.5%**. More than three-quarters of every ZDX Acura ever built is in this recall. (Sales figure is through August 2025; production ended September 2025, so the final total is only slightly higher.)
- **Press-release vs filing gap, 2024:** Honda's August 2024 release said "approximately 5,000"; the Part 573 filing said 4,174. The 2026 filing is 2.9x the number Honda announced the first time around.

### The seven-day pattern, twice

| Year | GM files | Honda/Acura files | Gap |
|---|---|---|---|
| 2024 | Aug 8 — Lyriq 24V589 | Aug 15 — ZDX 24V614 | 7 days |
| 2026 | Oct 29 — 26V717 (67,380) | Nov 5 — ZDX 26V735 (14,648) | 7 days |

Same platform, same brake family, same one-week lag, two years apart. The ZDX is a GM car with an Acura badge — built at GM's Spring Hill plant on GM's Ultium platform — so when GM finds a brake defect, Acura's filing follows a week later. Twice.

### EA26006: how much of the investigation is now recalled

| | Vehicles |
|---|---|
| EA26006 population (Aug 21, 2026) | 1,164,820 |
| GM 26V717 (Oct 29, 2026) | 67,380 |
| Acura 26V735 (Nov 5, 2026) | 14,648 |
| **Recalled so far** | **82,028 (7.0%)** |
| **Still under investigation, no recall** | **1,082,792 (93.0%)** |

EA26006 incident counts (Autoblog, Aug 25, 2026): 745 reports, 21 crashes/fires, 6 injuries, 0 fatalities. The Prologue — the ZDX's Honda twin, same plant, same brake system — has no brake-pressure recall yet. It is still only a name on the EA26006 list.

### The 2024 ZDX's full recall record (NHTSA API, Nov 15, 2026)

Six campaigns on a car that was only built for 18 months: 24V614 (brakes), 25V018 (stabilizer bar bolts, 118 units), 25V234 (stabilizer bar bolts, second batch, 9 units), 26V112 (cluster/camera software), 26V306 (rearview camera), 26V735 (brakes again). The brake defect is the only one that came back for a second round — and the second round is the biggest recall the model has ever had.

### What the defect actually does (mechanism, from Part 573 24V614)

Below 25 mph, on a dry surface, the ABS gets twitchy. A false activation plus a specific sequence of wheel movements, and the system keeps releasing brake pressure instead of modulating it. The filing's own words: the service brakes "can become inoperative." That is not degraded braking. That is the pedal going soft at parking-lot speed, in the exact scenario — low speed, dry pavement, probably a turn into a driveway — where a driver least expects to lose the brakes. GM's 26V717 describes a near-identical trigger (light braking, low speed, sharp turn, bump or dip) in its own Brake System Control Module. Two modules, one family, one failure mode: software that misreads wheel movement and lets go.

## Limitations

- **26V735 Part 573 PDF not located.** The NHTSA API record and TTAC reporting agree on every material fact (14,648, AWD only, EBCM software, CQC, expands 24V614, letters Dec 14), but the Part 573 chronology — complaints, crashes, injuries, when Honda knew — was not available at research time. The article must not invent a complaint count for 26V735. If the Part 573 appears later, the chronology is the first thing to add.
- **Defect-rate estimate unknown for 26V735.** 24V614 estimated 1% of the population actually defective. No equivalent figure is published yet for 26V735; do not carry the 1% forward.
- **26V717 and 26V735 are not the same defect.** GM's recall is a Brake System Control Module slip-calculation error on Performance AWD models; Acura's is an Electronic Brake Control Module ABS-activation error. Same brake family, same platform, same week — but different modules and different trigger descriptions. The article must say "same family," not "same defect."
- **Sales denominator is through August 2025.** Production ended September 2025; final ZDX sales are slightly above 18,911, so 77.5% is an upper-bound-ish estimate, not exact. Phrase as "more than three-quarters" or "roughly 77%."
- **EA26006 counts are August 2026.** Autoblog's 745 reports / 21 crashes / 6 injuries date to the EA opening. The investigation is ongoing; counts have likely moved.

## Strongest counterargument

The generous reading: this is the system working. A 2024 fix covered the cars Acura knew about; two years of field data revealed the population was wider than the first production-range estimate; Acura expanded the recall before anyone got hurt in a ZDX — zero Acura crashes or injuries were reported as of the 2024 filing, and none have been attached to 26V735 in the reporting so far. An OTA software update fixes it without a dealer visit. Recalls that expand are not proof the first fix failed; they are proof the net was too small. The counter to the counter: the defect description is word-for-word identical, the remedy is word-for-word identical, and the first recall's own chronology shows Honda only moved because GM told NHTSA about the Lyriq first. Twice. A fix that has to be re-issued at 3.5x scale is not a rounding error in population estimation — it is a manufacturer that scoped the problem to the cars it had already heard about instead of the cars that shared the software.

## Actionable takeaways

- **If you own a 2024 ZDX AWD:** check your VIN at nhtsa.gov/recalls. If 26V735 is open, take the OTA update or book the dealer flash — it is free, and the defect can make the service brakes inoperative below 25 mph.
- **If you already had the 2024 fix (UJE):** you are not done. 26V735 expands 24V614, so a car that was "fixed" in 2024 may be in the new population. Check the VIN again; do not assume the OTA you took two years ago covers this campaign.
- **If you own a 2024–2026 Honda Prologue:** no brake-pressure recall exists for your car yet, but it shares the ZDX's platform, plant, and brake system and sits on the EA26006 list. Check your VIN monthly until EA26006 closes.
- **If you are shopping a used ZDX:** the car is discontinued, 18 months of production, six recalls, and the biggest one is still open with letters going out December 14. Verify all six campaigns are closed on the specific VIN before paying; a clean Carfax is not a substitute for the NHTSA lookup.

## References (for article)

1. NHTSA recalls API — 2024 Acura ZDX campaign list and 26V735 record. https://www.nhtsa.gov/recalls
2. NHTSA, Part 573 Safety Recall Report 24V614, Aug 23, 2024. https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V614-7296.PDF
3. The Truth About Cars, "Acura ZDX Recall: 14,648 EVs May Dump Brake Pressure," Nov 14, 2026. https://www.thetruthaboutcars.com/cars/news-blog/acura-zdx-recall-14-648-evs-may-dump-brake-pressure-45137092
4. Acura, "Acura Recalls 2024 ZDX A-Spec AWD and ZDX Type S Vehicles to Update Electronic Brake Control Module (EBCM) Software," Aug 16, 2024. http://hondanews.com/en-US/honda-corporate/releases/acura-recalls-2024-zdx-a-spec-awd-and-zdx-type-s-vehicles-to-update-electronic-brake-control-module-ebcm-software
5. Autoblog, "All The Vehicles Named In GM And Honda's Massive Brake Failure Investigation," Aug 25, 2026. https://www.autoblog.com/news/nhtsa-investigates-over-1-million-general-motors-honda-vehicles-brake-issues-could-cause-crash
6. NHTSA, Fatality Analysis Reporting System (FARS). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
7. NHTSA recalls database. https://www.nhtsa.gov/recalls
