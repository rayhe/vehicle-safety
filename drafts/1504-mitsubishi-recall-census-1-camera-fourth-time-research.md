# Research: #1504 — Mitsubishi Filed One Recall for Its 2026 Cars. It Was the Same Backup Camera, for the Fourth Time.

**Number:** 1504
**Slug:** 1504-mitsubishi-recall-census-1-camera-fourth-time
**Journalist:** Axle McScatter (Data Visualization Editor; statistical roundups, national trends, methodology — the angle is a one-campaign census whose single campaign is the fourth filing for the same defect, so the count and the thread tell opposite stories)
**Kicker:** By The Numbers
**Date:** November 14, 2026

## Angle (1-2 sentences)

Mitsubishi sells three passenger models in 2026. I ran the corrected-vocabulary census across all three and found **exactly 1 campaign, 26V549, a backup-camera software defect covering 67,146 Outlanders — and it is the fourth NHTSA filing for the same A-IVI rearview-camera defect in four years** (22V470 in 2022, 23V345 in 2023, 25V369 in 2025, 26V549 in 2026), with the 2025 filing alone covering 198,940 vehicles and explicitly replacing the 2023 fix that was supposed to have fixed it.

## Kill test

- **Genuinely newsworthy?** Yes. First Mitsubishi census on the site; it completes the census series for every major brand selling cars in the US (Ford, GM, Toyota, Honda, Stellantis, Nissan, Subaru, BMW, Mazda, VW, Mercedes, Audi, Porsche, Tesla, Volvo, Rivian, Genesis, Lucid, JLR, Chevrolet, Lexus, Acura, Infiniti, Hyundai+Kia all done). Fresh hooks: the 1-count is a single-model census (Outlander carries it; Outlander Sport and Eclipse Cross carry zero); the single campaign is the fourth filing for one defect, and the 2025 predecessor (25V369) is nearly 3x larger than the counted campaign (198,940 vs 67,146) yet touches zero 2026 models, so the census excludes it by the calendar while the defect is the same; the defect estimate is 1% in both filings, meaning roughly 671 of the 67,146 counted vehicles and 1,989 of the 198,940 excluded ones actually have the bug; and the "fix" timeline reads as a confession — investigation opened May 2023, 358 warranty claims and 6 field reports by June 2025, production countermeasure April 2025, then the same defect filed again in August 2026 for the next two model years.
- **Novel on site?** Yes. No prior brand-level Mitsubishi census exists. 26V549 was covered as a standalone (#816, Sep 4, 2026, "Mitsubishi Recalled 67,146 Outlanders Because the Backup Camera Can Just Go Blank") but never as a census, never with the per-model table, never with the 1-count against the full 2026 lineup, never with the four-filing camera thread totaled, and never with the series-table comparison. The original contribution is the 1-count, the per-model table, the 67,146 counted vs 198,940 excluded comparison, the four-filing thread, and the completed series table — computed, not quoted.
- **Killed angles this run (duplicate screen):** A standalone 26V549 piece would duplicate #816. A standalone 25V369 piece would duplicate the June 2025 coverage pattern (and 25V369 touches no 2026 model, so it cannot anchor a 2026 census). A Kia/Hyundai split would recount #1477's joint census (Hyundai 15, Kia 4). A "Mitsubishi is invisible" body-count piece already exists (mitsubishi-invisible-brand-body-count).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model list (3 passenger models: Outlander, Outlander Sport, Eclipse Cross; "Low Speed Vehicle" excluded as a non-passenger NEV), queried make+model+modelYear=2026 for every canonical name plus the Outlander PHEV variant — 4 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1504-mitsubishi-recall-census-raw.json. **Date-format trap (same as #1476/#1501/#1502/#1503):** ReportReceivedDate comes back as DD/MM/YYYY ("26/08/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — Outlander Sport and Eclipse Cross both 400'd; Outlander and Outlander PHEV both returned 200 with the same single campaign. A 400 is an empty result, not a failed query.
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "mitsubishi", Nov 14, 2026: 4 models (Outlander, Outlander Sport, Eclipse Cross, Low Speed Vehicle). The Mirage and Mirage G4 are absent: Mitsubishi discontinued both after model year 2024, so there is no 2026 Mirage to query. Mitsubishi's 2026 passenger lineup is three models, the second-smallest in the census series after Infiniti's two.
3. **NHTSA recalls API, 26V549000** (report received Aug 25, 2026; record created Aug 26, 2026) — read in full Nov 14, 2026. 67,146 vehicles: certain 2025-2026 Outlander and 2026 Outlander PHEV. Defect: improper software programming in the Alliance In-Vehicle Infotainment (A-IVI) system; the rearview camera image may fail to display when the vehicle is placed in reverse; fails FMVSS 111 "Rear Visibility." Consequence: reduced view behind the vehicle, increased crash risk. Remedy: dealers update the A-IVI software, free of charge; **overTheAirUpdate: false**. Owner letters expected Sep 24, 2026; VINs searchable Sep 9, 2026. MMNA number SR-26-002. No crashes or injuries cited in the NHTSA record.
4. **NHTSA Part 573 Safety Recall Report, 25V369** (filed Jun 2, 2025): https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V369-0728.pdf — read via search-indexed full text Nov 14, 2026. **198,940 total** (2022-2024 Outlander: 179,248, built Feb 8, 2021–Dec 20, 2024; 2023-2025 Outlander PHEV: 19,692, built Sep 27, 2022–Apr 21, 2025). **1% defect estimate.** Same A-IVI defect: software error may freeze the image or show a black screen during a backing event. **Replaces and expands 23V345** — vehicles repaired under 23V345 need the new remedy. Investigation opened May 2023; **358 warranty claims and 6 field reports** by filing. Production countermeasure: updated A-IVI software from Apr 22, 2025. Dealer notification Jun 16, 2025; owner letters Jun 30, 2025. MMNA number SR-25-001.
5. **Claim Owed Money, "Mitsubishi Outlander recall: 67,146 SUVs, camera fix"** (Sep 1, 2026): https://www.claimowedmoney.com/blog/mitsubishi-outlander-recall-2026 — independent confirmation of the 26V549 Part 573 details the API does not carry: per-model split **65,940 Outlander + 1,206 Outlander PHEV = 67,146**; **1% defect estimate**; Outlanders built Dec 20, 2024–Jul 28, 2026, PHEVs Jan 22–Jul 24, 2026; production after Jul 28, 2026 carries updated software; A-IVI supplied by Bosch; first report Oct 2025, a field report from Canada describing a 12.3-inch touchscreen going intermittently unresponsive; symptoms include fail to boot, freeze, restart unexpectedly, black out, or scroll on its own.
6. **Autoblog, "Mitsubishi's Best-Selling SUV Recalled Over Safety Issue"** (Sep 1, 2026): https://www.autoblog.com/news/recall-2026-mitsubishi-outlander-suv-outlander-phev-backup-camera — independent confirmation of 26V549 (67,146, 1% defective, FMVSS 111, investigation from Oct 2025 Canada report, production fix Jul 28, 2026).
7. **Site story #816: "Mitsubishi Recalled 67,146 Outlanders Because the Backup Camera Can Just Go Blank"** (stories/816-mitsubishi-outlander-blank-camera, Sep 4, 2026) — prior site coverage of 26V549, including Mitsubishi's 2025 US sales (35,895 Outlanders + 6,294 Outlander PHEVs). The census article cites this rather than re-deriving it. Note the arithmetic the standalone implies: the 67,146-vehicle campaign is 1.6x Mitsubishi's entire 2025 Outlander+PHEV sales year (42,189).
8. **CarWhere, "Mitsubishi Outlander Problems & Recalls by Generation"** (updated Nov 6, 2026): https://www.carwhere.com/mitsubishi/known-issues/outlander — independent confirmation of the camera thread: 22V470 (2022, rearview camera display inoperable), 23V345 (89,907 vehicles, freeze/not display), 25V369 (198,940), 26V549 (67,146); and that 25V369 replaces/expands 23V345.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Mitsubishi** | **1** | 3 (+1 PHEV variant) | 1 |

### The 1 Mitsubishi campaign

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V549 | Aug 25 | Back over prevention: software (A-IVI) | Rearview camera image may fail to display in reverse; FMVSS 111. 67,146 vehicles (65,940 Outlander 2025-2026 + 1,206 Outlander PHEV 2026). 1% defect estimate. 0 crashes/injuries cited. Dealer software flash; OTA flag false. |

### Per-model campaign counts (2026 MY, 2026 filings)

| Model | Campaigns |
|---|---|
| Outlander (incl. PHEV) | 1 (26V549) |
| Outlander Sport | 0 |
| Eclipse Cross | 0 |

One of three nameplates carries the entire census. The Outlander Sport and Eclipse Cross carry zero 2026 filings — and zero filings in the 2024-2026 sweep at all.

### The excluded filing: what the count misses

| Campaign | Date | Component | Vehicles | Touches 2026 MY? |
|---|---|---|---|---|
| 25V369 | Jun 2, 2025 | A-IVI software, blank/frozen rearview image (FMVSS 111) | 198,940 (2022-2024 Outlander + 2023-2025 PHEV) | No |
| **Excluded total** | | | **198,940** | |

The excluded filing is the same defect, the same system, the same supplier, nearly three times the size of the counted campaign — and it misses the census only because its newest model year is 2025. The 2025 PHEV in 25V369 and the 2026 PHEV in 26V549 are the same vehicle one model year apart, split across two filings by the calendar. All Mitsubishi vehicles in 2025-2026 filings touching any Mitsubishi, counted together: **266,086**. The census counts 67,146 of them — 25.2%. For every Mitsubishi the census counts, 2.96 more were recalled under the filing the method excludes.

### The four-filing camera thread (same defect, same system)

| Campaign | Date | Vehicles | Population |
|---|---|---|---|
| 22V470 | Jul 2022 | 56,080 | 2022 Outlander |
| 23V345 | May 2023 | 89,907 | 2022-2023 Outlander + 2023 PHEV |
| 25V369 | Jun 2025 | 198,940 | 2022-2024 Outlander + 2023-2025 PHEV (replaces/expands 23V345) |
| 26V549 | Aug 2026 | 67,146 | 2025-2026 Outlander + 2026 PHEV |
| **Four filings, summed** | | **412,073** | |

The summed total overcounts unique vehicles: 25V369 explicitly replaces and expands 23V345, so every 23V345 vehicle is inside 25V369's population, and 22V470's 2022 Outlanders sit inside 25V369's 2022-2024 range too. The honest statement is that Mitsubishi has filed the same A-IVI backup-camera defect four times in four years, with the three filings that can be summed without double-counting (22V470, 25V369, 26V549) totaling 322,166 vehicles — against 2025 US Outlander+PHEV sales of 42,189. The "fixed" software has now been recalled, replaced, expanded, and re-filed across every Outlander model year from 2022 through 2026.

### Component mix (1 distinct campaign, counted)

Back over prevention: software 1. **0 of 1 flagged overTheAirUpdate=true** — same 0-for-1 as Infiniti, 0-for-7 as Nissan, 0-for-15 as Toyota, 0-for-40 as Ford. The flag is wrong in the other direction here too: the remedy is a software flash a dealer performs in minutes, and the API still says false. No Mitsubishi campaign in the series has ever carried a true OTA flag.

### Timing

August: 1 (26V549). January-July, September-November: 0 counted filings. The last filing was Aug 25 — nearly three months of silence through Nov 14. The excluded filing (25V369) came fourteen months earlier, June 2025, and the investigation behind it opened in May 2023 — the camera thread is older than the 2026 model year itself.

### Updated census-series table (2026 campaigns, corrected-vocabulary method unless noted)

Ford 40, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Chevrolet 13 (of GM's 15), Volvo 12, Mercedes 8, JLR 7, Nissan 7, BMW 7, Lexus 6, Lucid 5, Subaru 5, Honda 4, Kia 4, Tesla 4, VW 4, Genesis 3, Rivian 3, Acura 1, Audi 1, Infiniti 1, **Mitsubishi 1**, Mazda 0, Porsche 0. Mitsubishi ties Acura, Audi, and Infiniti at the bottom of the brands that filed anything — and all four of those single campaigns are, in order: an airbag sensor, a sunroof, a sticker, and a backup camera that has now been recalled four times.

### The series is complete

With Mitsubishi, every major brand selling passenger vehicles in the US now has a 2026 census on the site. The final spread: 40 at the top (Ford), 0 at the bottom (Mazda, Porsche), and a four-way tie at 1. The census series ran 24 brand entries (plus the Hyundai/Kia joint filing and the Chevrolet/GM split) across #1473-#1504. Total counted campaigns across the series: 40+27+15+15+15+13+12+8+7+7+7+6+5+5+4+4+4+4+3+3+1+1+1+1 = 208 brand-level campaigns (Chevrolet double-counted inside GM's 15; the distinct-defect total is lower where brands share filings).

## Strongest counterargument

Campaign counts are not severity scores, and the 1-count flatters Mitsubishi three ways. First, the method excludes the filing that actually covers more Mitsubishis: 25V369 (198,940 vehicles, same defect, same system) is nearly three times the counted campaign, and a reader who takes "Mitsubishi: 1" as the brand's safety record is wrong about 198,940 vehicles — including every 2022-2024 Outlander on the road. Second, the one counted campaign is not a new defect at all — it is the fourth filing for a software bug Mitsubishi has been "fixing" since July 2022, and the 1% defect estimate in both 25V369 and 26V549 means the vast majority of recalled vehicles were never going to go blank; the count measures filings, not broken cars. Third, the count partly measures a shrinking catalog, not improving quality: Mitsubishi sells three passenger models, down from six nameplates a few years ago (Mirage and Mirage G4 gone after 2024), so there are fewer nameplates to recall — the same caveat the Infiniti census applied to Infiniti's two. Strip the shared defect thread and Mitsubishi's own 2026 record is one campaign for one software bug its supplier has now shipped four times.

The counterargument weakens on the one thing the count does prove: no 2026-model-year Mitsubishi carries a defect Mitsubishi has admitted to in 2026 other than this one, and the census checked every nameplate including the Outlander Sport and Eclipse Cross, which carry zero filings across the entire 2024-2026 sweep. That is a real finding about the cars on the lot today, even if it says nothing about the 2022-2025 Outlanders whose cameras have now been recalled up to three times each. And the method's exclusion is disclosed, not hidden: the 198,940 is in the article, in a table, with a campaign number.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The counted-vs-excluded distinction is the article's spine; both numbers are stated alongside the headline.
- Unit counts are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 2026-MY-only Mitsubishi vehicle total cannot be computed from the filings (26V549's 2026 slice is not broken out in the API record; the per-model split 65,940/1,206 covers 2025-2026 Outlanders and 2026 PHEVs together).
- The four-filing summed total (412,073) double-counts vehicles: 25V369 replaces/expands 23V345 and covers 22V470's model years. The article states this and uses the no-double-count sum (322,166) for the headline comparison.
- The 26V549 per-model split (65,940 + 1,206), build dates, Bosch supplier, and 1% defect estimate come from Claim Owed Money's reading of the Part 573, not from the Part 573 read directly; the API record confirms the campaign total (67,146), dates, component, and remedy. The 25V369 Part 573 was read directly via search-indexed full text.
- The 2026 model year is still in progress and late filings will move the count.
- NHTSA's overTheAirUpdate flag undercounts software remedies (a dealer software flash is flagged false, as in every census in the series).
- "Low Speed Vehicle" was excluded from the VPIC model list as a non-passenger NEV; it is not a car a reader can buy and drive on a highway, and no census in the series has counted NEVs.

## Actionable takeaways

- If you own a 2025-2026 Outlander or a 2026 Outlander PHEV: the camera recall (26V549) is a free dealer software update. The screen can fail to boot, freeze, restart, black out, or scroll on its own — any of which kills the rearview image in reverse. Check your VIN at nhtsa.gov/recalls; owner letters went out Sep 24, 2026, and VINs have been searchable since Sep 9.
- If you own a 2022-2024 Outlander or a 2023-2025 Outlander PHEV: you are in the bigger, excluded filing (25V369), and if your car was "fixed" under 23V345, the fix did not hold — 25V369 explicitly replaces it and your car needs the new remedy. Check your VIN now; do not assume the 2023 repair covered you.
- If you are shopping a 2026 Mitsubishi: the census says one recall across three nameplates, and that is accurate for new metal — the Outlander Sport and Eclipse Cross carry zero filings. But shop used Outlanders by campaign, not by badge: every 2022-2026 Outlander has now been recalled at least once for the same camera defect, some three times. Check any used Outlander VIN against 22V470, 23V345, 25V369, and 26V549 before signing.
- If you own any 2022-2026 Outlander: test the camera before you trust it. Shift into reverse and watch the screen — if it hesitates, freezes, or stays black, that is the defect, and the fix is free.
