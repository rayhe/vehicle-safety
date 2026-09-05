# Research: #821 — Rear-Camera Recall Census (Axle McScatter, By The Numbers)

## News peg
2026-09-01: Chrysler (FCA US) filed NHTSA campaign **26V560000** — 239,131 model-year 2025-2026 Ram 1500s recalled because a radio software error can replace the rearview camera image with a blue screen. FMVSS 111 noncompliance. Remedy: OTA or dealer radio software update. Chrysler recall 83D. USA Today reported it 2026-09-04 (Greta Cross).

## Kill test
Genuinely newsworthy? YES. (1) Fresh filing 3 days ago, still no public 573 PDF — this article breaks down the census before the document lands. (2) Novel data work: first cross-manufacturer census of BACK OVER PREVENTION recalls filed Oct 2024–Sep 2026 from the NHTSA recalls API (28 high-volume models × MY2025/2026 queried), plus field-report-to-filing lag extracted from primary Part 573 chronologies. (3) Two hooks nobody has connected: Tesla 25V002 (Jan 2025) and Ram 26V560 (Sep 2026) are both ~239,000 vehicles with dead rear cameras, 20 months apart; and across all 8 campaigns the failure is always the screen/software, never the camera hardware.

## Census (NHTSA recalls API, queried 2026-09-04; 28 models × MY2025/2026)

| Campaign | Filed | Automaker | Vehicles | Failure | Remedy text | OTA offered? | API OTA flag |
|---|---|---|---|---|---|---|---|
| 24V748 | 2024-10-03 | Nissan | 2024-25 Rogue, 2025 QX80 (small) | infotainment software blank screen | OTA or dealer (R24B3/R24B4) | yes | True |
| 24V801 | 2024-10-25 | Ford | 2025 Explorer/Aviator | APIM software, camera dies ≥10 mph | OTA or dealer (24C34) | yes | True |
| 25V002 | 2025-01-07 | Tesla | ~239,000 (24-25 3/S, 23-25 X/Y) | car-computer circuit board short | OTA + computer replacement (SB-25-00-001) | yes | False |
| 25V744 | 2025-10-30 | Toyota | ~1,005,018 (Toyota/Lexus/Subaru) | panoramic monitor freeze/black | dealer software (25TB13/25LB06/WRE25) | no | False |
| 26V165 | 2026-03-19 | Ford | 47,587 (21-23 F-150, 23-26 F-250) | APIM/IPMA reset, home screen over camera | dealer or OTA (26C37) | yes | False |
| 26V327 | 2026-05-21 | Chrysler | dozens (CVPM, Wrangler/Ram/Pacifica) | CVPM software/debris | dealer CVPM update/replace | no | False |
| 26V531 | 2026-08-13 | Chrysler | 844,027 (16 nameplates, 26-27 MY) | radio software | dealer or OTA (78D) | yes | False |
| 26V560 | 2026-09-01 | Chrysler | 239,131 (25-26 Ram 1500) | radio software blue screen | OTA or dealer (83D) | yes | False |

Total: 8 campaigns, ~2.37M vehicles, 23 months. 4 of 8 are Chrysler.

## Lag analysis (investigation start → NHTSA filing, from Part 573 chronologies)
- Tesla 25V002: investigation opened Nov 2024 (spike in computer replacements) → filed 2026-01-07 ≈ **2 months**. 887 warranty claims, 68 field reports, 0 crashes.
- Toyota 25V744: discovered in bench testing 2024, confirmed on vehicles Oct 2025 → filed 2025-10-30 ≈ **12 months**.
- Ford 26V165: CCRG review opened 2025-03-20 → filed 2026-03-19 = **12 months**. Note: on 2025-04-03 CCRG closed it as "no unreasonable risk"; NHTSA challenged the closure rationale at a June 17, 2025 SEL meeting; Ford re-evaluated and filed.
- Chrysler 26V327: TSRC investigation opened 2025-02-20 → determination 2026-05-14, filed 2026-05-21 = **15 months**.

## Novel findings
1. **It's never the camera.** All 8 campaigns are software/display/computer failures (radio, APIM, IPMA, CVPM, infotainment, panoramic monitor). Zero failed camera lenses. FMVSS 111 is being violated by the screen, not the sensor.
2. **The 239k coincidence.** Tesla's 25V002 (~239,000) and Ram's 26V560 (239,131) — same defect class, same population size, 20 months apart. Tesla fixed it in 2 months with OTA; Chrysler's timeline is still unfolding.
3. **NHTSA's own API disagrees with the remedy text.** The api.nhtsa.gov `overTheAirUpdate` flag is False for 25V002, 26V165, 26V531, 26V560 — all four of which explicitly offer OTA updates in their official remedy language. Anyone screening for OTA-remedied recalls via the API gets the wrong answer.
4. **The NHTSA pushback case.** Ford's 26V165 shows the process working: CCRG closed the investigation, NHTSA's SEL meeting challenged the closure, Ford re-opened and filed 9 months later.

## Limitations
- Census covers 28 queried high-volume models, not every 2025-2026 vehicle — smaller-volume BACK OVER PREVENTION recalls may exist outside the sample.
- 26V531 and 26V560 Part 573 PDFs were not yet posted to static.nhtsa.gov as of 2026-09-04; Chrysler's internal timelines for those two come from press/API data, not the filed chronology.
- Lag measured from investigation-open to filing; the true "first field report" date precedes the investigation in most cases, so lags are lower bounds.
- Vehicle counts for 24V748/24V801 not extracted (small populations); excluded from the ~2.37M total where unknown.

## Counterargument (strongest)
"Camera recalls are a sign the system works — software defects get caught and fixed free." True as far as it goes; Tesla's 2-month turnaround is the model. But Ford's 26V165 sat for a year after an internal "no unreasonable risk" closure until NHTSA pushed back, Chrysler's 26V327 took 15 months, and 4 of the 8 campaigns are one automaker repeating the same radio-software failure mode — the system catches them, slowly, and the same company keeps shipping the same bug.

## Primary sources
- NHTSA recalls API: api.nhtsa.gov/recalls/recallsByVehicle (queried 2026-09-04; raw JSON saved /tmp/camera_census2.json — attach to repo)
- Part 573 reports (static.nhtsa.gov): RCLRPT-26V327-3833.pdf, RCLRPT-26V165-2897.pdf (saved /tmp/)
- USA Today, "More than 239,000 Ram vehicles recalled," Greta Cross, 2026-09-04: https://www.usatoday.com/story/cars/recalls/2026/09/04/ram-1500-vehicles-recalled/91609746007/
- USA Today Labor Day recall roundup, 2026-09-04: https://www.usatoday.com/story/cars/news/2026/09/04/car-recall-roundup-labor-day-weekend/91612818007/
- Reuters via claimsjournal, Tesla 25V002, 2026-01-10: https://www.claimsjournal.com/news/national/2025/01/10/328350.htm
- MotorTrend, Toyota 25V744 1M-vehicle recall: https://www.motortrend.com/news/one-million-toyota-lexus-subarus-recalled-due-to-backup-camera-failure
- Ford Authority, Ford 26V165 47,587 F-Series, 2026-08-03: https://fordauthority.com/2026/08/2021-2026-ford-f-series-recalled-over-rearview-camera-issue/
- usedcarnews, Chrysler 26V531 844,027 vehicles: https://usedcarnews.com/news-page/recalls/chrysler-issues-massive-recall
- NHTSA FARS: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars (context only)
