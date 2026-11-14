# Research: #1503 — Infiniti Filed One Recall for Its 2026 Cars. It Was a Typo, and 82 Percent of the Cars Were Infinitis.

**Number:** 1503
**Slug:** 1503-infiniti-recall-census-1-sticker-82-percent-infiniti
**Journalist:** Vin Wreckage (Existential Dread Columnist; paradoxes, counterintuitive findings, the big picture — the angle is a brand with two models left, one recall, and the recall is a wrong number printed on a sticker, while the engine recall that can seize and burn is excluded by the calendar)
**Kicker:** Existential Dread
**Date:** November 14, 2026

## Angle (1-2 sentences)

Infiniti sells two models in 2026. I ran the corrected-vocabulary census across both and found **exactly 1 campaign, 26V455, a wrong Gross Axle Weight Rating printed on the certification label — but 138,572 of the 168,150 vehicles in that campaign are Infinitis, 82.4 percent, so the "Nissan recall" the press covered in July was mostly an Infiniti recall**. The count says 1. The fine print says the census misses the 89,660 Infiniti QX50s and QX55s whose VC-Turbo engines can seize (25V437, filed June 2025) and the 18,505 QX80s whose backup camera can go blank (25V821, filed November 2025) — 108,165 excluded Infinitis against 138,572 counted ones.

## Kill test

- **Genuinely newsworthy?** Yes. First Infiniti census on the site; completes the luxury-arm trio with Lexus #1501 and Acura #1502 and the Nissan Motor Co picture (Nissan 7, Infiniti 1, distinct defects 7). Fresh hooks: the 82.4 percent Infiniti share of Nissan's biggest campaign (the Armada is the minority nameplate in its own recall); the one-car 2027 QX80 (a single 2027-model-year vehicle, its own line in the filing, the Acura one-car TLX parallel); the QX60 carrying zero campaigns, so the census is really a one-model census; the QX80's third rear-camera recall in fourteen months (24V747, 24V748, 25V821); and the counted-vs-excluded inversion — the counted campaign is a sticker with zero injuries, the excluded one is an engine that can seize and catch fire.
- **Novel on site?** Yes. No prior brand-level Infiniti census exists. 26V455 was covered as a standalone (#armada-qx56-overloaded-over-served, July 21, 2026, with the QX56's 7th-highest impairment rate) but never as a census, never with the per-model-year table, never with the 82.4 percent Infiniti share, and never with the Nissan/Infiniti distinct-defect total. The original contribution is the 1-count, the per-model table, the 138,572 Infiniti total, the 82.4 percent share, the 108,165 excluded-Infiniti total, and the distinct-defect finding — computed, not quoted.
- **Killed angles this run (duplicate screen):** GMC/Buick/Cadillac splits would recount GM's 15 (#1474/#1500). Kia standalone rehashes #1477. A standalone 26V455 piece would duplicate the July 21 story. A VC-Turbo standalone would duplicate the Nissan census's excluded-filings treatment and the weeklydriver coverage; it appears here only as the excluded filing it is.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model list (2 Infiniti light-vehicle models: QX80, QX60), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, Electric, and Recharge suffix variants plus targeted trims (QX80 Autograph/Sensory/Luxe/Pure, QX60 Autograph/Sensory/Luxe/Pure) — 18 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1503-infiniti-recall-census-raw.json; deduped campaigns at drafts/1503-infiniti-recall-census-campaigns.json. **Date-format trap (same as #1476/#1501/#1502):** ReportReceivedDate comes back as DD/MM/YYYY ("16/07/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — 17 of 18 queries 400'd; only infiniti/qx80 returned 200. A 400 is an empty result, not a failed query. A follow-up unfiltered query of infiniti/qx80/2026 returned 25V821 and 26V455 only, confirming exactly one 2025-filed campaign touches a 2026 Infiniti (unlike Lexus, which had two).
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "infiniti", Nov 14, 2026: 2 models (QX80, QX60). The QX50 and QX55 are absent: Infiniti discontinued both after model year 2025, so there is no 2026 QX50 or QX55 to query. Infiniti's 2026 lineup is the smallest in the census series.
3. **NHTSA Noncompliance Information Report, 26V455, second amendment** (Jul 24, 2026): https://static.nhtsa.gov/odi/rcl/2026/RMISC-26V455-8956.pdf — read in full Nov 14, 2026. ~168,150 total (announced as 168,149; the amended filing totals 168,150). 100% defect estimate — every affected vehicle carries the wrong label. Per-model-year table reproduced below; Infiniti QX56 2011-2013: 24,277; Infiniti QX80 2014-2027: 114,295; Nissan Armada 2020-2026: 29,578. Defect: certification label printed with incorrect Gross Axle Weight Rating values; vehicles fail FMVSS 110 / 49 CFR Part 567. Cause: Nissan's engineering standards calculated GAWR from maximum tire pressure only, not maximum plus manufacturer-recommended pressure, after ambiguity in the standard; discovered May 2025 during development of a new model; production countermeasure adopted Mar 16, 2026; defect determination Jul 8, 2026; stop sale Jul 16, 2026. **Zero warranty claims, zero accidents, zero injuries** ("Nissan is not aware of any warranty claims, accident or injuries related to the subject condition"). Remedy: corrected certification label, dealer-installed or mailed to owners for self-application, free, under 30 minutes. Interim letters Aug 21, 2026 (API summary says Sep 2; the Part 573 says Aug 21 — the API summary is the later, operative notice date; use Sep 2 for owner letters). One 2027 QX80 in the population.
4. **NHTSA recalls API, 25V821** (filed Nov 27, 2025) + **Infiniti service bulletin R25D7** (Dec 12, 2025): https://static.nhtsa.gov/odi/rcl/2025/RCMN-25V821-0908.pdf — read in full Nov 14, 2026. 64,085 total (2025 Murano, 2025-2026 Armada, 2025-2026 QX80); Infiniti QX80 population **18,505** (2025-2026, built Apr 16, 2024–Aug 27, 2025). Defect: IVI software error at startup enables a power-saving mode that can blank the display, including the rear-view image in reverse; FMVSS 111. Remedy: IVI software reprogram by dealer **or over-the-air** — the API flags overTheAirUpdate=false anyway, the same flag artifact the Nissan census caught on 26V331. Owner letters Feb 2, 2026 (bulletin says January 2026; API summary says Feb 2 — use Feb 2). Nissan numbers R25D6/R25D5/R25D7.
5. **NHTSA Part 573 Safety Recall Report, 25V437** (filed Jun 27, 2025): https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V437-9564.pdf — read via search-indexed full text Nov 14, 2026. 443,899 total. Per-model split: Rogue 2021-2024: 348,554; **QX50 2019-2022: 84,536; QX55 2022: 5,124**; Altima 2019-2020: 5,685. **Infiniti total 89,660.** Defect: manufacturing defect in VC-Turbo engine bearings (main, A-, C-, L-link) in the 1.5L KR15DDT and 2.0L KR20DDET; engine damage and failure; bearing failure can breach the engine block, discharging hot oil, fire risk. 1.2% defect estimate. Closed federal investigation PE23023 (opened Dec 2023). Zero accidents, injuries, or fatalities as of May 20, 2025. Remedy: inspect oil pan for metal debris. Owner letters Aug 25, 2025 (2.0L Infiniti owners notified January 2026 per the amended filing). Two follow-up campaigns on the same engine, 26V080/26V081, filed Feb 11, 2026, touch Rogues only — named here so the scope is auditable; they touch no Infiniti.
6. **#1480 research file** (drafts/1480-nissan-recall-census-7-kicks-carries-three-research.md) — the Nissan baseline (7 campaigns: 26V023, 26V145, 26V188, 26V331, 26V419, 26V425, 26V455) and the corrected-vocabulary method; 26V455 is one of Nissan's 7, counted via the Armada. "Infiniti contributes exactly one campaign, and it is the biggest one." The Nissan census's excluded list (25V912, 25V821, 26V080/26V081, 26V526) cross-checked against this run's sweep.
7. **Site story: "168,000 SUVs Had the Wrong Weight Limit. The Infiniti Version Had the 7th-Highest Impairment Rate in America."** (stories/armada-qx56-overloaded-over-served, Jul 21, 2026) — prior site coverage of 26V455. FARS 2014-2023: QX56 drivers in fatal crashes, 274 drivers, 72 any-impairment-positive (26.3%), 51 alcohol-positive (18.6%), 30 drug-positive (10.9%) — 7th highest impairment rate of 307 vehicles tracked. The census article cites this rather than re-deriving it.
8. **TechTimes, "Incorrect Axle Weight Label Triggers Nissan Recall of 168,000 Armada and QX80 SUVs"** (Jul 22, 2026): https://www.techtimes.com/articles/321282/20260722/incorrect-axle-weight-label-triggers-nissan-recall-168000-armada-qx80-suvs.htm — independent confirmation of 26V455 (168,149, FMVSS 110, 22-inch wheels only, owner letters Sep 4, 2026) and the 14V129 predecessor (Apr 2014, 468 MY2014 QX80s, 20-inch wheels).
9. **The Weekly Driver, "2019-2025 Nissan and Infiniti Recall: Engine Failure"** (updated Jul 27, 2026): https://theweeklydriver.com/recalls/2021-2025-nissan-rogue-vc-turbo-engine-recall/ — independent confirmation of the 25V437 split (348,554 Rogues, 84,536 QX50s, 5,685 Altimas, 5,124 QX55s, reconciling to 443,899) and the 26V080/26V081 follow-ups (Feb 11, 2026, Rogue-only).

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Infiniti** | **1** | 2 | 1 |
| Nissan (for comparison) | 7 | 11 | 6 |

### The 1 Infiniti campaign

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V455 | Jul 16 | Certification label (GAWR) | Label lists the wrong Gross Axle Weight Rating, so the truck can be overloaded past its certified axle limit. 168,149 total; Infiniti 138,572 (82.4%). 100% defect estimate. 0 claims, 0 injuries. A sticker. Dealer installs a corrected label free, or Nissan mails you one to stick on yourself. |

### Infiniti vehicles in 26V455 (Part 573 model-year table)

| Model | Years | Vehicles |
|---|---|---|
| QX56 | 2011: 7,531; 2012: 11,166; 2013: 5,580 | 24,277 |
| QX80 | 2014: 11,281; 2015: 11,685; 2016: 7,825; 2017: 10,378; 2018: 6,215; 2019: 11,485; 2020: 3,611; 2021: 8,144; 2022: 4,869; 2023: 8,620; 2024: 6,019; 2025: 13,663; 2026: 10,499; 2027: 1 | 114,295 |
| **Infiniti total** | | **138,572** |
| Nissan Armada (for comparison) | 2020-2026 | 29,578 |

The 2027 QX80 population is one car. One vehicle, its own line in a federal filing, a model year that had barely started. The 2026 QX80 slice (10,499) is the only piece that touches a 2026 model year at all, and it is 7.6 percent of the Infiniti total in the campaign. The QX56 stopped production in 2013 and still contributes 24,277 vehicles — more than double the 2026 QX80s.

### Per-model campaign counts (2026 MY, 2026 filings)

| Model | Campaigns |
|---|---|
| QX80 | 1 (26V455) |
| QX60 | 0 |

One of two nameplates carries the entire census. The QX60, Infiniti's volume seller, carries zero 2026 filings — its last campaign was 25V173, a brake caliper, filed March 2025.

### The excluded filings: what the count misses

| Campaign | Date | Component | Infiniti vehicles | Campaign total |
|---|---|---|---|---|
| 25V821 | Nov 27, 2025 | IVI software, blank rear-view image (FMVSS 111) | 18,505 (QX80 2025-2026) | 64,085 |
| 25V437 | Jun 27, 2025 | VC-Turbo engine bearings, seizure/fire | 89,660 (QX50 84,536; QX55 5,124) | 443,899 |
| **Excluded Infiniti total** | | | **108,165** | **507,984** |

All Infiniti vehicles in 2025-2026 filings touching any Infiniti, counted together: **246,737**. The census counts 138,572 of them — 56.2%. For every Infiniti the census counts, 0.78 more were recalled under filings the method excludes. The excluded filings are the ones with the actual danger: an engine that can seize and catch fire (25V437) and a backup camera that can go blank (25V821). The counted filing is a sticker with zero injuries.

### The Nissan comparison

| Brand | 2026 campaigns | Campaign-units (all filings) | Largest single campaign |
|---|---|---|---|
| Nissan | 7 | 255,853 (2026 filings, all model years) | 26V455, 168,149 |
| **Infiniti** | **1** | **168,150 (26V455 amended total)** | **26V455, 168,149** |

Nissan filed 7 campaigns for its 2026 cars; Infiniti filed 1. But 26V455 is one of Nissan's 7, so Infiniti adds zero distinct defects to the parent company: Nissan Motor Co has 7 distinct 2026 defects across both brands. Lexus added two to Toyota's 15. Acura added none to Honda's 4. Infiniti adds none to Nissan's 7. The "Infiniti 1" is not a separate record; it is Nissan's record with an Infiniti badge on 82 percent of the cars.

### Updated census-series table (2026 campaigns, corrected-vocabulary method unless noted)

Ford 40, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Chevrolet 13 (of GM's 15), Volvo 12, Mercedes 8, JLR 7, Nissan 7, BMW 7, Lexus 6, Lucid 5, Subaru 5, Honda 4, Kia 4, Tesla 4, VW 4, Genesis 3, Rivian 3, **Infiniti 1**, Acura 1, Audi 1, Mazda 0, Porsche 0. Infiniti ties Acura and Audi at the bottom of the brands that filed anything — and Acura's single campaign was an airbag sensor, Audi's a sunroof. Infiniti's is a sticker.

### The QX80 camera thread

The QX80 has now had three rear-visibility recalls in fourteen months, all software, all FMVSS 111: 24V748 (Oct 3, 2024; 37,236 Rogue + QX80, backup camera software), 24V747 (Oct 3, 2024; 5,176 MY2025 QX80, Around View Monitor, 1% defect estimate — the software was present in 3,320 units when the port hold went on), 25V821 (Nov 27, 2025; 64,085, IVI blank screen). The flagship's backup camera has failed three different ways in three different filings. Only the third touches a 2026 model, and only because the filing date fell in 2025 does it miss the census entirely.

### Component mix (1 distinct campaign, counted)

Certification label 1. **0 of 1 flagged overTheAirUpdate=true** — same 0-for-7 as Nissan, 0-for-15 as Toyota, 0-for-40 as Ford. The flag is wrong in the other direction here too: 25V821's remedy is explicitly dealer OR over-the-air, and the API still says false.

### Timing

July: 1 (26V455). January-June, August-November: 0 counted filings. The last filing was Jul 16 — four months of silence through Nov 14, the same four-month silence Nissan's census noted. The two excluded filings bracket the counted one in the other direction: June 2025 and November 2025.

## Strongest counterargument

Campaign counts are not severity scores, and the 1-count flatters Infiniti three ways. First, the method excludes the two filings that actually endanger Infiniti owners: 25V437 (an engine that can seize and breach its block, 89,660 Infinitis) and 25V821 (a backup camera that can go blank, 18,505 QX80s). A reader who takes "Infiniti: 1" as the brand's safety record is wrong about 108,165 vehicles. Second, the one counted campaign is not an Infiniti defect at all — it is a Nissan Shatai plant defect (a miscalculated label value) that happens to include 138,572 Infinitis, and the defect estimate is 100 percent only because every label was printed wrong, not because every truck is dangerous; zero claims, zero injuries. Third, the count partly measures a shrinking catalog, not improving quality: Infiniti sells two models, down from five nameplates a few years ago, so there are fewer nameplates to recall — the same caveat Nissan's census applied to Nissan's seven. Strip the shared filing and Infiniti's own 2026 record is zero campaigns, zero defects, which is a true statement about new Infiniti metal and a misleading statement about Infiniti owners, since 89,660 of them are driving QX50s and QX55s with engines that can fail. The honest headline is not "Infiniti had a clean year." It is "Infiniti's new cars had a clean year; Infiniti's recent cars did not."

The counterargument weakens on the one thing the count does prove: no 2026-model-year Infiniti carries a defect Nissan has admitted to in 2026, and the census checked every nameplate including the volume-selling QX60, which carries zero filings. That is a real finding about the cars on the lot today, even if it says nothing about the cars in driveways. And the method's exclusion is disclosed, not hidden: the 108,165 is in the article, in a table, with campaign numbers.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The counted-vs-excluded distinction is the article's spine; both numbers are stated alongside the headline.
- Unit counts are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 2026-MY-only Infiniti vehicle total cannot be computed from the filings (26V455's QX80 2026 slice, 10,499, is the only 2026-MY number in the campaign; the QX56 has no 2026 model year). The 138,572 is Infiniti vehicles across all model years in the one campaign.
- Unlike Lexus, Infiniti has one 2025-filed campaign touching a 2026 model (25V821), not two. The unfiltered infiniti/qx80/2026 query returned only 25V821 and 26V455.
- The amended 26V455 filing totals 168,150 while the announced total was 168,149 — a one-vehicle discrepancy between the original and amended filings; the article uses 168,149 as announced and the amended per-year table, which sums to 168,150. The Infiniti total (138,572) is computed from the amended per-year table.
- The 25V821 campaign total (64,085) comes from The Recall Desk's reading of the NHTSA filing, not from the Part 573 read directly; the QX80 population (18,505) comes from Infiniti's own service bulletin R25D7, read in full.
- The iSeeCars "latest recalls" list shows January 2026 dates for QX50/QX55 engine and QX80 back-over-prevention items; the API sweep of QX50/QX55/QX80 across model years 2019-2026 found no 26V campaign for any Infiniti other than 26V455, so those dates are feed artifacts (owner-notification timing for 25V437/25V821), not filings. The sweep results are saved at drafts/1503-infiniti-recall-census-excluded-sweep.json.
- The 2026 model year is still in progress and late filings will move the count.
- NHTSA's overTheAirUpdate flag undercounts software remedies (25V821's dealer-or-OTA reprogram is flagged false).

## Actionable takeaways

- If you own a 2014-2027 QX80 or a 2011-2013 QX56 with 22-inch wheels: the label recall (26V455) is a free corrected certification label, dealer-installed or mailed to you. Check the GAWR on your door-jamb label before loading to rated capacity — the printed number may be wrong. Check your VIN at nhtsa.gov/recalls; interim letters went out in September 2026.
- If you own a 2025-2026 QX80: the camera recall (25V821) is the one that matters, and it is not in the census count. The IVI screen can go blank at startup, including the rear-view image. The fix is a free software reprogram, dealer or over-the-air. Check your VIN now; do not wait for a letter that already went out in February.
- If you own a 2019-2022 QX50 or a 2022 QX55 with the VC-Turbo engine: the engine recall (25V437) is the one that matters most. The bearings can fail, the engine can seize, hot oil can escape. The dealer inspects the oil pan for metal debris, free. Check your VIN now — this one can end your engine, not just your sticker.
- If you are shopping a 2026 Infiniti: the census says one recall across two nameplates, and that is accurate for new metal — the QX60 carries zero 2026 filings. But shop used Infinitis by campaign, not by badge: a 2025-2026 QX80 carries the camera recall, a 2019-2022 QX50 carries the engine recall, and any QX80 or QX56 with 22-inch wheels carries the label recall. Check any used Infiniti VIN against 25V437, 25V821, and 26V455 before signing.
