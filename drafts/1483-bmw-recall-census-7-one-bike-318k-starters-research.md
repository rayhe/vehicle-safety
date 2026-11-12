# Research: #1483 — BMW Recalled Its New Cars 7 Times. One Recall Is a Single Motorcycle. Another Is 318,495 Starters That Can Catch Fire.

**Number:** 1483
**Slug:** 1483-bmw-recall-census-7-one-bike-318k-starters
**Journalist:** Vin Wreckage (Existential Dread — paradoxes, counterintuitive findings; tied least-used in last 40: 4)
**Kicker:** By The Numbers
**Date:** November 12, 2026

## Angle (1-2 sentences)

The recall-census series has now counted ten car companies on the corrected-vocabulary method: Ford 41, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Nissan 7, Subaru 5, Honda 4, Kia 4. BMW is the tenth, and it ties Nissan at **7 campaigns** — but the count hides the whole story: the seven campaigns span a population range of **1 to 318,495**, a single motorcycle recalled because its turn signal cancels itself, a Z4 that is the only 2026 car in a starter-fire campaign covering 318,495 vehicles, and a 13-car steering recall that started with one owner saying the wheel felt light.

## Kill test

- **Genuinely newsworthy?** Yes. First BMW-wide census on this site. Fresh pegs: 26V115 is the smallest recall population in the entire series (one motorcycle, unsold); 26V438 is the largest single campaign population in the series so far at 318,495 and the third starter-fire recall of the year for the same Valeo part; 26V524 is a 13-car steering recall triggered by a single complaint; 26V525 carries a live NHTSA defect-petition investigation opened Sep 1, 2026 alleging total driveshaft failure rather than wear.
- **Novel on site?** Yes. No prior BMW company-level census exists. The starter saga was covered as news (stories/bmw-starter-fire-third-recall.html, Jul 23, 2026; bmw-phev-starter-fire.html) but never counted, never compared across the lineup, and never placed in the ten-brand table. The original contribution is the corrected 7 census below, the API-vocabulary failure the cross-check exposed (two campaigns missed because the NHTSA API 400s on sedan/coupe model names for MY2026), the 1-to-318,495 range finding, the Z4-as-lone-2026-car finding, and the completed ten-brand table.
- **Original contribution:** the corrected 7 census below (NHTSA recalls API, Nov 12, 2026, 230 queries + outside-source cross-check), the 1-vehicle minimum finding (smallest population in the series, beating Subaru's 8), the 318,495 maximum finding (largest single campaign in the series), the API 400-vocabulary failure documented with a full model-by-model matrix, the Z4 finding (the only 2026 model-year car in the 318,495-vehicle starter campaign), the 0-for-7 over-the-air finding, the three-starter-recalls-one-supplier finding, and the completed ten-brand table.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model list for BMW (57 names, cars + Motorrad), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants and targeted trims (M2/M3/M4/M5/M8/XM/iX/i4/i5/i7/Z4/X1–X7); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. 230 queries total. Raw results saved at drafts/1483-bmw-recall-census-raw.json; runner at drafts/1483-census-run.py. API pass returned 5 campaigns. https://www.nhtsa.gov/recalls
2. **Outside-source cross-check (corrects the API pass from 5 to 7):** CarBuzz "All 2026 BMW Recalls By Model" (updated Sep 3, 2026) surfaced 26V064, which the API missed because model "228" returns HTTP 400 for MY2026; a starter-expansion search surfaced 26V438, missed because model "z4" returns HTTP 400 for MY2026. A full model-by-model API matrix (33 spellings, upper- and lowercase) confirmed the API 400s on 330i, 430i (partially), 530i, 540i, 740i, 750e, 760i, i4, i5, i7, iX, XM, M2, M3, M8, M850i, M440i, M240i, M235i, 230i, 228i, Z4, 550e, and others, while X1/X2/X3/X4/X5/X6/X7/M4/M5/840i/S 1000 RR return 200. Both added campaigns were then verified against their NHTSA Part 573 / RCAK PDFs (sources 3–9 below). The API 400-vocabulary gap is the series' known failure mode (cf. #1480 Kicks MPV gap, #1481 25V889 boundary case) — this run's contribution is documenting it with a matrix instead of a single anecdote.
3. **NHTSA Part 573 Safety Recall Report, 26V064:** https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V064-4909.pdf — 202 vehicles, 2026 228i Gran Coupe / 228i xDrive Gran Coupe / M235i xDrive Gran Coupe; rear lamps with inappropriate firmware (Valeo), FMVSS 108, 100% defect estimate; decision Jan 28, 2026; delivery stop Jan 29, 2026; owner letters Mar 27, 2026. RCAK: https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V064-3176.pdf
4. **NHTSA owner notification letter, 26V096:** https://static.nhtsa.gov/odi/rcl/2026/RCONL-26V096-8019.pdf — 58,713 vehicles; A/C wiring harness damaged by a cabin-filter housing screw, short circuit, fire risk; <1% defect estimate; no accidents or injuries; vehicles previously repaired under 24V-104 need the new remedy; remedy is harness inspection/replacement plus a retaining strap/bracket; owner letters Apr 16, 2026. Chronology via The Autopian, Feb 25, 2026: investigation from Mar 2025 after thermal events in a Feb 22 2024 7 Series, a Mar 9 2023 7 Series, and a Dec 2024 7 Series. https://www.theautopian.com/bmw-just-recalled-58713-cars-because-a-routine-maintenance-item-could-result-in-a-fire/
5. **NHTSA recall acknowledgement, 26V115:** https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V115-4023.pdf — exactly 1 vehicle, a 2026 S 1000 RR motorcycle; turn-signal reset button can activate with the signal (Sensata switch, improperly reworked production tooling), FMVSS 108; caught by end-of-line functional tests Jan 2026; the bike had not been sold, so no owner letters; remedy is a replacement combination switch. Carscoops, Mar 7, 2026. https://www.carscoops.com/2026/03/bmw-s1000rr-turn-signal-recall/
6. **NHTSA recall acknowledgement, 26V438:** https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V438-1981.pdf — 318,495 vehicles, filed Jul 8, 2026; expansion of 26V056; starter motor may overheat and catch fire (Valeo, metallic buildup in the relay chamber); defect estimate under 0.1% (fewer than ~318 vehicles actually at risk, per CarBuzz Jul 24, 2026); owner letters Aug 28, 2026. Reuters, Jul 23, 2026. https://www.carbuzz.com/bmw-330i-x3-z4-supra-recall-july-2026/
7. **NHTSA recall acknowledgement, 26V478:** https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V478-2438.pdf — 16,736 S 1000 RR motorcycles (2020–2026); motorcycle vibration can fail an internal ignition-lock component, killing the instrument display, rear lighting, and ABS, or stalling the engine while riding; remedy under development at filing; letters Sep 14, 2026; ~77,000 affected worldwide per BMW via MOTORRAD.
8. **NHTSA recall acknowledgement, 26V524:** https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V524-3178.pdf — 13 X3s (2024–2026 sDrive30i, 30 xDrive, M50 xDrive; built Aug 2023–Feb 2026); steering spindle may have been incorrectly attached to the steering column; 5% defect estimate; no crashes or injuries; triggered by a single owner complaint (non-US vehicle, steering gone light); owner letters Oct 2, 2026. Autoblog, Aug 20, 2026. https://www.autoblog.com/news/one-bmw-x3-complaint-triggered-a-recall-of-just-13-cars
9. **NHTSA Part 573 Safety Recall Report, 26V525:** https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V525-9403.pdf — 27,720 vehicles (2022–2026 840i/xDrive, 2021–2023 540i/xDrive, M550i xDrive, 2024–2026 750e xDrive, including the 2026 Alpina B8 Gran Coupe per the dealer bulletin); driveshaft-to-rear-differential connection wears, cutting rear-wheel power or letting a parked car roll away in Park; 0.2% defect estimate; no crashes or injuries; decision Aug 5, 2026; owner letters Oct 2, 2026. RCAK: https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V525-9573.pdf
10. **NHTSA defect petition / investigation (26V525 follow-on):** Autoblog, Sep 17, 2026 — NHTSA received a defect petition Sep 1, 2026 alleging the driveshaft-to-differential connection fails outright (total loss of powertrain engagement), not merely wears, focused on the 2022 540i; NHTSA opened an investigation. https://www.autoblog.com/news/feds-now-investigating-18000-bmw-5-series-sedans-for-alleged-rear-diff-failures
11. **#1481 research file** (drafts/1481-subaru-recall-census-5-eight-car-do-not-drive-research.md) — the corrected-vocabulary method and the nine-brand table this piece extends; also the source of the 8-car minimum this piece beats.
12. **Site prior coverage:** stories/bmw-starter-fire-third-recall.html (Jul 23, 2026) and stories/bmw-phev-starter-fire.html — the starter saga as news; this census is the first count.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Brand | 2026 campaigns |
|---|---|
| **BMW** | **7** |

### Ten-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Nissan (+ Infiniti, company 7) | 7 |
| **BMW** | **7** |
| Subaru | 5 |
| Honda | 4 |
| Kia | 4 |

BMW ties Nissan at 7, sixth of ten. Ten-group total: 140 campaigns.

### The 7 BMW campaigns

| Campaign | Filed | Component | Vehicles (US) | Defect est. | What happened |
|---|---|---|---|---|---|
| 26V064 | Feb 4 | Rear lamps | 202 | 100% | 2026 2 Series Gran Coupes got rear lamps with the wrong firmware; taillight, brake light, or turn signal may not work. FMVSS 108. Delivery stop Jan 29, then a recall. |
| 26V096 | Feb 19 | A/C wiring harness | 58,713 | <1% | A screw from the cabin air filter housing can nick the climate-control wiring harness; short circuit, fire risk. Three 7 Series had thermal events before BMW acted. Cars already fixed under 24V-104 need the new fix. |
| 26V115 | Feb 26 | Turn signal switch | 1 | 100% (of 1) | One unsold 2026 S 1000 RR: the turn-signal reset button can fire at the same time as the signal, cancelling it. Caught on the factory test line. |
| 26V438 | Jul 8 | Starter motor | 318,495 | <0.1% | The Valeo starter can corrode, short, and catch fire. Third starter recall of 2026; expansion of 26V056. The only 2026 car in it is the Z4. |
| 26V478 | Jul 23 | Ignition lock | 16,736 | not stated | Vibration shakes an ignition-lock component to failure on the S 1000 RR; dash, rear lights, and ABS can die, or the engine can stall mid-ride. No fix existed at filing. |
| 26V524 | Aug 12 | Steering spindle | 13 | 5% | Thirteen X3s may have a steering spindle that was never properly attached to the column. One owner complaint found it. |
| 26V525 | Aug 12 | Driveshaft | 27,720 | 0.2% | The driveshaft-to-differential joint wears out on 5/7/8 Series sedans; lose rear-wheel power while driving, or the parked car rolls away in Park. Now under a separate NHTSA investigation. |

### Per-model counts (2026 model year)

| Model | Campaigns |
|---|---|
| S 1000 RR | 2 (26V115, 26V478) |
| 228i Gran Coupe | 1 (26V064) |
| 228i xDrive Gran Coupe | 1 (26V064) |
| M235i xDrive Gran Coupe | 1 (26V064) |
| M5 | 1 (26V096) |
| 550e xDrive | 1 (26V096) |
| i5 | 1 (26V096) |
| 5 Series | 1 (26V096) |
| Z4 | 1 (26V438) |
| X3 | 1 (26V524) |
| 840i / 840i xDrive | 1 (26V525) |
| 750e xDrive | 1 (26V525) |

Twelve 2026 model names carry a campaign. Zero-campaign 2026 models include the 3 Series, 4 Series, 7 Series, i7, X1, X2, X5, X6, X7, XM, i4, iX, M2, M3, M4, and Z4's stablemates — and every other Motorrad model. The 3 Series, BMW's volume car, has zero 2026-filed campaigns touching a 2026 car.

### Component mix

Seven campaigns, five component families: exterior lighting x2 (rear lamps, turn signal switch), electrical x3 (wiring harness, starter motor, ignition lock), steering x1, powertrain x1. No campaign is a software-only fix delivered over the air: **0-for-7 OTA** (26V064's bad lamp firmware is fixed by replacing the lamps, not by pushing new code).

### Campaign-vehicle arithmetic

Summing the seven campaign populations: 202 + 58,713 + 1 + 318,495 + 16,736 + 13 + 27,720 = **421,880 campaign-vehicle instances**. Cars: 405,143. Motorcycles: 16,737. The starter campaign alone (318,495) is **75.5%** of the total; the other six campaigns combined (103,385) are less than a third of it. The range inside one company's year runs from 1 to 318,495 — a factor of 318,495.

### The Z4 finding

26V438 covers model years 2022–2026 of the Z4, and the Z4 is the *only* 2026 model-year vehicle in the campaign. Every other nameplate in the 318,495 stops at 2025 or earlier. A buyer cross-shopping a 2026 Z4 against a 2026 3 Series is looking at a car with one open 2026-filed recall and a car with none — and the recall is a starter that can catch fire.

### The starter trilogy

BMW filed three starter-motor fire recalls in 2026 for the same Valeo part: 26V056 (Jan 30, 87,394 vehicles, MY2021–2024 — no 2026 car, correctly outside this census), 26V441 (Jul 8, 29,119 plug-in hybrids, MY2016–2020 — also outside), and 26V438 (Jul 8, 318,495, includes the 2026 Z4 — in). A fourth campaign, 26V695 (Oct 21, 45 PHEVs, MY2018–2020), recalls cars already repaired under 26V441 because a replacement starter's battery cable can loosen. Same supplier, same failure (metallic buildup in the relay chamber, corrosion, short, fire), four filings. The site covered the trilogy as news on Jul 23, 2026 (stories/bmw-starter-fire-third-recall.html); the census adds the count and the Z4 detail.

### The Supra straddle

26V438 is BMW-filed but includes 2023–2024 Toyota Supras (the Supra shares BMW's B48 engine and Z4 platform). It sits in BMW's 7. It was not counted in Toyota's 15 (#1475's research file does not list 26V056 or 26V438), so the series has no double count here — but a Supra owner checking either company's census would find the campaign only under BMW's. Same platform, one filing, one count.

### The boundary cases: 25V857, 25V717, 25V643

Three 2025-filed campaigns touch 2026 BMWs and are correctly **outside** this census, which counts campaigns filed in calendar 2026:
- **25V857** (filed Dec 2025): 36,922 X3s (2025–2026), steering torque sensor — the wheel can move on its own while the car is stationary. Decided Dec 4, 2025; letters Feb 2026. A reader counting "2026 X3 recalls" on a VIN site will see two steering recalls (25V857 + 26V524); the census counts one filed in 2026.
- **25V717** (filed Oct 21, 2025): 1,024 2026 228i/M235i Gran Coupes, rear seat-belt retractor pins damaged in production. Same cars as 26V064, different system, different year.
- **25V643** (filed Sep 25, 2025): 4 2026 M4/430i cars, improperly connected positive battery cables.

### The excluded 2026 filings (no 2026 model-year vehicle)

- **26V056** (Jan 30): 87,394, starter fire, MY2021–2024. The original starter recall; expanded by 26V438.
- **26V422** (Jul 1): 428, integrated brake system — a re-check of the 24V-104/24V-739 remedy on MY2023–2025 BMWs, MINIs, and one Rolls-Royce Spectre. No 2026 car.
- **26V441** (Jul 8): 29,119, starter fire on PHEV 3/5/7 Series, MY2016–2020.
- **26V658** (Oct 19): 4,630 R 18 motorcycles (MY2021–2024), reverse-gear control unit may overheat; a redo of 24V716, whose first fix was just unplugging the reverse gear.
- **26V695** (Oct 21): 45 PHEVs (MY2018–2020), starter battery cable can loosen after the 26V441 repair.

## What this means for buyers (Vin's beat, with Clara's practicality)

- **If you own a 2026 Z4:** you are in the starter recall. The fire risk is real but tiny (under 0.1% of the 318,495), the fix is a free starter replacement, and the letters went out Aug 28, 2026. Do not wait for a second letter.
- **If you own a 2026 2 Series Gran Coupe:** two campaigns, both from the same model year but different systems — rear lamps (26V064, replace the lamps) and seat-belt retractors (25V717, filed 2025). Both free. The lamps are the one to check: a dead brake light is a crash risk for the car behind you.
- **If you own a 2026 X3:** two steering recalls, one per year — the 2025-filed torque-sensor one (25V857, software) and the 2026-filed spindle one (26V524, 13 cars, inspect the spindle). If your VIN is in the 13, the dealer replaces the spindle and column.
- **If you own a 2026 840i or 750e:** the driveshaft recall (26V525) is the one that matters, and it now has a federal investigation attached alleging the joint fails outright rather than wearing. Check the VIN, get the inspection, and use the parking brake until it is done — a parked car rolling away in Park is the failure mode.
- **If you own a 2026 S 1000 RR:** the ignition-lock recall (26V478) had no remedy at filing and covers your bike if it was built Mar 2019–Jul 2026. An engine stall at lean is not a paperwork problem. Call the dealer and ask whether the remedy exists yet.
- **If you own a 2026 3 Series, 7 Series, X5, or iX:** zero 2026-filed campaigns touch your car. That is the whole point of a census — the absence is data.

## Limitations

- The census counts campaigns **filed Jan 1–Nov 12, 2026** covering 2026-model-year vehicles, found via the NHTSA recalls API queried by VPIC canonical model name plus suffix variants, **plus** an outside-source cross-check that added 26V064 and 26V438. A campaign filed after Nov 12, 2026 would not appear; the count is a snapshot, not a year-end total.
- The API's model-name vocabulary is the known failure mode of this series, and this run documents it precisely: the API returns HTTP 400 for make=bmw with model=228/230i/330i/430i(partial)/530i/540i/740i/750e/760i/i4/i5/i7/iX/XM/M2/M3/M8/M850i/M440i/M240i/M235i/Z4/550e and modelYear=2026, while X1/X2/X3/X4/X5/X6/X7/M4/M5/840i and the Motorrad names return 200. A campaign touching only a 400-model could still be missed; the cross-checks used were the CarBuzz 2026 BMW recalls page (updated Sep 3, 2026), targeted news searches for BMW recalls in Sep/Oct/Nov 2026, and the starter-expansion search. No additional 2026-filed campaign touching a 2026 BMW surfaced in any of them.
- Campaign populations overlap: summing them (421,880) double-counts vehicles in multiple campaigns (e.g., a 2026 840i in 26V525 only once, but a 2026 5 Series could appear in 26V096 and nowhere else — overlap here is small, but the sum is still campaign-vehicle instances, not unique vehicles). Unique-vehicle counts would require VIN-level data NHTSA does not publish.
- The 26V438 population (318,495) includes 2023–2024 Toyota Supras; the BMW-only population is slightly smaller, but NHTSA's filing does not break out the Supra count within 26V438 (the 26V056 filing put the Supra at 803 of 87,394). The census counts the campaign, not the marque split.
- Defect estimates are the manufacturers' own figures in their Part 573 filings, not independent measurements. 26V478 states no defect estimate in the documents reviewed.
- The Sep 1, 2026 defect petition on the 540i rear differential is an allegation under investigation, not a finding; do not present it as established.

## Strongest counterargument

Seven campaigns sounds like a lot until you look at what they are: a one-motorcycle turn-signal recall, a 13-car steering recall, a 202-car lamp recall, and a 318,495-car starter recall in which BMW itself estimates fewer than 318 cars are actually at risk. Four of the seven campaigns touch fewer than 30,000 vehicles combined, and three of the seven (the two motorcycle campaigns and the starter expansion) are BMW finding problems through its own testing and supplier audits rather than through crashes — there are zero reported crashes or injuries across 26V096, 26V524, and 26V525, and the site's own July article notes the same for the starter trilogy. BMW's defenders will say this census proves the system working: a manufacturer that recalls a single unsold motorcycle over a turn signal is a manufacturer taking the rules seriously, not one cutting corners. That reading is mostly fair — and the article should say so. The counterweight is the starter trilogy itself: the same Valeo starter, the same failure mode, four filings in ten months, and a fourth campaign (26V695) recalling cars because the *repair* for the third campaign introduced a new fire risk. A company that has to recall its recall repair is a company whose fix process deserves the same scrutiny as its cars.
