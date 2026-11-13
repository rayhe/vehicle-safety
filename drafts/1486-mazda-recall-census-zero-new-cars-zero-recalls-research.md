# Research: #1486 — Mazda Recalled Its New Cars Zero Times in 2026. The Only Thing It Recalled Was a Sticker.

**Number:** 1486
**Slug:** 1486-mazda-recall-census-zero-new-cars-zero-recalls
**Journalist:** Axle McScatter (By The Numbers — statistical roundups, methodology pieces; the census series is his beat)
**Kicker:** By The Numbers
**Date:** November 12, 2026

## Angle (1-2 sentences)

The recall-census series has now counted eleven car companies on the corrected-vocabulary method: Ford 41, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Nissan 7, BMW 7, Subaru 5, Honda 4, Kia 4. Mazda is the eleventh, and it breaks the series: **zero campaigns** filed in 2026 touching a 2026-model-year Mazda. Seven models, 341,714 cars sold through October, and not one NHTSA safety recall. The only 2026 Mazda action on file is an emissions recall whose fix is sticking the correct label on a battery.

## Kill test

- **Genuinely newsworthy?** Yes. First zero in the series, and it lands against a loud 2025: Mazda filed three 2025 campaigns covering 277,273 vehicles (airbag sensors that switch off, fuel gauges that lie, suspension bolts that were never tightened), and it is currently under a live federal recall query (RQ26002, opened Feb 6, 2026) alleging its CX-90 steering fix did not fix the steering. A company can go from 277,000 recalled cars to zero in one year. That is either a quality turnaround or a quiet year before the next filing, and the census cannot tell which — which is itself the honest finding.
- **Novel on site?** Yes. No prior Mazda company-level census exists. The 2025 campaigns were covered as news and in the CX-90 steering-query coverage, but never counted, never compared across the lineup, and never placed in the eleven-brand table. The original contribution is the corrected 0 census below (NHTSA recalls API, Nov 12, 2026, 32 queries + full-vocabulary failure documentation + five independent outside confirmations), the total API-vocabulary failure finding (every Mazda spelling 400s for MY2026, including the exact VPIC names), the 277,273-vehicle 2025 contrast, the 8026C sticker boundary case, and the completed eleven-brand table.
- **Original contribution:** the corrected 0 census; the API failure matrix (17 spellings, all HTTP 400 for MY2026, while MY2024/MY2025 queries return 200); the recallsByManufacturer 403 finding; the 2025-vs-2026 contrast arithmetic (277,273 recalled in 2025 filings vs 0 in 2026 filings); the 341,714-vehicles-sold denominator; the 8026C emissions-label boundary case; the RQ26002 open-query counterweight; and the completed eleven-brand table (total still 140).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model list for Mazda (7 names: CX-30, CX-5, CX-50, CX-70, CX-90, MX-5, Mazda3), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants and targeted trims; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. 32 queries total. **Result: 0 campaigns — but every MY2026 query returned HTTP 400, so the API pass is void, not a finding.** Runner at drafts/1486-census-run.py; raw results at drafts/1486-mazda-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API vocabulary failure, documented:** 17 spellings tested for MY2026, all HTTP 400: cx-30, cx-5, cx-50, cx-70, cx-90, mx-5, mazda3 (lowercase), CX-30, CX-5, CX-50, CX-70, CX-90, MX-5, Mazda3 (VPIC case), CX30, CX5, CX50, CX70, CX90, MX5 (no hyphen), Mazda 3, MX-5 Miata, CX-90 PHEV, CX-70 PHEV. Control queries prove the API itself works for Mazda: MY2025 cx-90 returns 200 with 2 campaigns (24V814, 25V568); MY2025 cx-50 returns 4; MY2025 mazda3 returns 1 (25V357); MY2024 cx-90 returns 11. The recallsByManufacturer endpoint returns HTTP 403 for every manufacturer-name spelling tried. This is the series' known failure mode at its extreme (cf. #1483 BMW partial 400s, #1480 Kicks MPV gap) — here it is total, which is why the zero rests on the outside confirmations below, not on the API.
3. **Outside confirmation 1 — CarBuzz, "America's Most-Recalled Mazda Of The Last 10 Years," Mar 31, 2026:** "at the time of writing, no Mazda models had been recalled for that model year [2026]." Ten-year table shows 0 in the 2026 column for every model (CX-70, Mazda3, MX-5 Miata, CX-90, CX-90 PHEV, CX-30, CX-5, CX-50, CX-50 Hybrid). Also: "Mazda's last recall was for the CX-50 and CX-50 Hybrid models, issued late in 2025, for front suspension bolts not tightened properly... Just 1,007 cars." https://carbuzz.com/most-recalled-mazda-of-the-last-10-years/
4. **Outside confirmation 2 — modelyears.com, 2026 Mazda CX-5 recalls page, updated Nov 12, 2026:** "NHTSA lists 0 safety recalls and 19 owner complaints for the 2026 Mazda CX-5." "NHTSA lists no safety recalls for the 2026 Mazda CX-5 in its recall file dated Nov 12, 2026." "NHTSA's investigations file, dated Nov 12, 2026, lists no investigations for the 2026 Mazda CX-5." https://modelyears.com/mazda/cx-5/2026/recalls
5. **Outside confirmation 3 — CarBuzz, Oct 28, 2026 (CX-90 vs MDX/TX):** "According to the NHTSA, the 2026 CX-90 does not have any recalls to date." https://carbuzz.com/mazda-cx-90-is-as-powerful-as-mdx-and-tx-350-for-a-lot-less/
6. **Outside confirmation 4 — CarBuzz, Aug 16, 2026 (CX-50 reliability, updated):** "The current 2026 model year is recall free." "The CX-50 has... sailed through 2026 with nary a recall at this time." https://carbuzz.com/mazda-cx-50-reliability/
7. **Outside confirmation 5 — CarBuzz, Nov 11, 2026 (CX-5 vs RAV4):** "the last Mazda CX-5 model year that got recalled was all the way back in 2019." "While the Mazda CX-5 has been recall-free since the 2019 model year..." Also: 2026 CX-5 has 75 manufacturer communications (TSBs), vs 32 for the 2026 RAV4. https://carbuzz.com/mazda-cx-5-vs-toyota-rav4-reliability/
8. **Outside confirmation 6 — informedforlife.com, 2026 Mazda CX-70 PHEV safety rating (retrieved Oct 21, 2026):** "No recalls on record. The saved NHTSA lookup found no recall campaigns for this model year as of 2026-10-21." https://www.informedforlife.com/cars/mazda_cx-70-phev-4-door-suv_2026
9. **Mazda USA sales (denominator):** Mazda North American Operations, Nov 3, 2026 — October sales 31,446 (+25% YoY, second-best October in brand history); year-to-date 341,714 vehicles sold, down 0.9% vs 2025. https://www.prnewswire.com/news-releases/mazda-reports-2nd-best-ever-october-sales-results-302928014.html
10. **2025 contrast campaigns (NHTSA, via lemon-law tracker and CarBuzz):** 25V357 — 171,412 2024-2025 Mazda3 and CX-30, Sophisticated Air Bag Sensor sets an error code and deactivates the airbags under a low-battery condition. 25V568 — 104,854 2024-2025 CX-90 and 2025 CX-70 mild hybrids, body control module software reports an inaccurate fuel level, vehicle can run dry and stall. 25V737 — 1,007 2025 CX-50 and CX-50 Hybrid, front suspension fastener bolts improperly tightened, suspension component or wheel can detach. https://badvehicle.yahdm.com/mazda-lemon-law-attorney/
11. **RQ26002 (the open query):** NHTSA Office of Defects Investigation opened Recall Query RQ26002 on Feb 6, 2026, into MY2024 CX-90s subject to recall 24V022 (43,754 vehicles, steering worm-gear defect, Mazda campaign 6524A): 26 reports of sudden increases in steering effort after the remedy. Mazda's response (INRL-RQ26002-10778, April 2026) says the condition also appears in some 2025 CX-90 and 2025-2026 CX-70 peer vehicles. No recall has resulted yet. https://static.nhtsa.gov/odi/inv/2026/INRL-RQ26002-10778.pdf
12. **Boundary case — emissions recall 8026C:** Mazda voluntary emissions recall, May/June 2026, on 2026 CX-50 Hybrid vehicles built Sep 8-25, 2025: incorrect battery labels attached to the B-pillar and the hybrid battery beneath the rear seat; violates California Code of Regulations Title 13 §1962.6 (battery labeling). Fix: dealer attaches the correct labels, free. Not a NHTSA safety recall — no 26V number, no safety defect. https://static.nhtsa.gov/odi/tsbs/2026/MC-11033218-0001.pdf
13. **#1483 research file** (drafts/1483-bmw-recall-census-7-one-bike-318k-starters-research.md) — the corrected-vocabulary method and the ten-brand table this piece extends.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Brand | 2026 campaigns |
|---|---|
| **Mazda** | **0** |

### Eleven-brand corrected table (same method family)

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
| **Mazda** | **0** |

Eleven-group total: 140 campaigns. Mazda adds zero. Ford alone filed 41 times as many campaigns as Mazda; the eleven-brand average is 12.7, and Mazda sits 12.7 below it.

### Per-model counts (2026 model year)

| Model | Campaigns |
|---|---|
| CX-30 | 0 |
| CX-5 | 0 |
| CX-50 | 0 |
| CX-70 | 0 |
| CX-90 | 0 |
| MX-5 | 0 |
| Mazda3 | 0 |

Seven 2026 models, zero campaigns. Zero-campaign models include the volume cars: the CX-5 (all-new third generation for 2026), the CX-50, and the CX-90 flagship.

### The 2025 contrast

Mazda's 2025-filed campaigns touching 2024-2025 models, all correctly outside this census (filed in 2025, no 2026 model-year vehicle):

| Campaign | Filed | Vehicles | Defect |
|---|---|---|---|
| 25V357 | 2025 | 171,412 | Airbag sensor error under low battery deactivates the airbags (Mazda3, CX-30) |
| 25V568 | 2025 | 104,854 | Fuel gauge misreads, car can run dry and stall (CX-90, CX-70 mild hybrid) |
| 25V737 | 2025 | 1,007 | Front suspension bolts never tightened properly (CX-50) |

Total: **277,273 vehicles** recalled in 2025 filings. In 2026 filings: **0 vehicles**. The year-over-year swing is the whole story: from the airbags switching themselves off to nothing at all.

### Campaign-vehicle arithmetic

Summing Mazda's 2026 census: **0 campaign-vehicle instances**. The starter campaign alone in BMW's census (318,495) is infinitely larger than Mazda's entire year, which is a joke, but the serious version is this: Mazda sold 341,714 vehicles in the US through October 2026, and the number of those under a 2026-filed safety recall is zero. Ford's 41 campaigns covered millions of campaign-vehicle instances in the same window.

### The complaints that did not become recalls

Zero recalls does not mean zero complaints. The 2026 CX-5 carries 19 owner complaints in NHTSA's file dated Nov 12, 2026 (17 on Oct 30), most-described problem infotainment/touchscreen failures (6 of 19, 32%). In early October 2026 a US owner reported her new CX-5 braking hard on its own three or four times on one drive; NHTSA has opened no investigation. The 2026 CX-50 has 12 complaints. The 2026 CX-90 has 12 complaints, mostly electrical. Complaints are unverified owner reports, not findings — but they are the raw material recalls are made from, and so far in 2026 none of them has become one.

### The TSB tell

The 2026 CX-5 has 75 manufacturer communications (technical service bulletins) on file with NHTSA, against 32 for the 2026 RAV4. TSBs are not recalls — they are the manufacturer's quiet instructions to dealers — but a brand-new model with 75 of them and zero recalls is a car being fixed in the service bay rather than in the recall file. Whether that is good (problems caught early, fixed quietly) or bad (problems kept out of the public record) is exactly the question a census cannot answer.

## What this means for buyers (Axle's beat, with Clara's practicality)

- **If you own a 2026 Mazda of any model:** as of Nov 12, 2026, there is no safety recall on your car. Check your VIN at nhtsa.gov/recalls anyway — the census is a snapshot, and a campaign filed Nov 13 would not appear here.
- **If you own a 2026 CX-50 Hybrid built Sep 8-25, 2025:** you are in the 8026C emissions recall. It is not a safety defect — the battery labels are wrong. The fix is a dealer sticking the right labels on. Free, five minutes, and the only recall-shaped thing Mazda did all year.
- **If you own a 2024-2025 Mazda3, CX-30, CX-90, or CX-70:** your car is in one of the three 2025 campaigns (airbag sensor, fuel gauge, suspension bolts). Those are the recalls that matter for your VIN, and they are all 2025 filings — do not let the zero headline talk you out of checking.
- **If you own a 2024 CX-90:** you are also inside the RQ26002 recall query. NHTSA is investigating whether the steering fix from 24V022 actually fixed the steering. Twenty-six owners say it did not. There is no new recall yet, and no owner instruction — but if your steering effort changes suddenly after the remedy, report it to NHTSA. That is how queries become recalls.
- **If you are shopping a 2026 Mazda against a 2026 Ford, Toyota, or Stellantis product:** the census says the Mazda has zero 2026-filed recalls and the others have 15 to 41. That is real information, and it is also incomplete information — it says nothing about defects that have not been found yet, complaints that have not become investigations, or the 75 TSBs on the new CX-5.

## Limitations

- The census counts campaigns **filed Jan 1–Nov 12, 2026** covering 2026-model-year vehicles. A campaign filed after Nov 12, 2026 would not appear; the count is a snapshot, not a year-end total.
- The NHTSA recalls API could not be queried for any Mazda 2026 model: all 17 spellings tested return HTTP 400 for modelYear=2026, and the recallsByManufacturer endpoint returns HTTP 403. The zero therefore rests on six independent outside confirmations (CarBuzz Mar 31, Aug 16, Oct 28, Nov 11; modelyears.com Nov 12; informedforlife Oct 21) plus a control sweep showing the API returns 200 with real campaigns for MY2024/MY2025 Mazdas and zero 26V campaigns in any model-year sweep (2022-2025). A campaign touching only a 2026 Mazda and filed in 2026 would have to have escaped all six sources and the NHTSA website's own recall file dated Nov 12, 2026; that is possible but unlikely, and the article must say so.
- Campaign populations and sales figures are the manufacturers' own numbers in their filings and press releases, not independent measurements. The 341,714 sales figure is US sales through October 2026, not 2026-model-year production; some of those cars are 2025 models, and some 2026 models were sold before Jan 1, 2026. It is a denominator for scale, not a precise population.
- The 25V357 / 25V568 / 25V737 population figures come from a lemon-law tracker summarizing NHTSA filings, cross-checked against CarBuzz's reporting of the same campaigns; the article should attribute them as NHTSA filings via those sources.
- Complaint counts (19 for the CX-5, 12 for the CX-50 and CX-90) are unverified owner reports in NHTSA's complaint file, not findings of defect. The phantom-braking CX-5 report is a single owner account with no investigation opened.
- RQ26002 is an open recall query, not a finding. The 26 post-remedy steering reports are allegations under investigation.

## Strongest counterargument

Zero recalls is not the same as zero defects, and a census that counts filings counts paperwork, not safety. Mazda's 2026 models carry real complaint traffic (19 on the CX-5 alone), a phantom-braking report with no investigation, 75 TSBs on the brand-new CX-5, an emissions recall for mislabeled batteries, and a live federal query into whether its last big steering fix actually worked. A skeptic will say Mazda's zero is what you get when a small manufacturer with 341,714 sales and a thin dealer network finds its problems in the service bay instead of the recall file — and that Ford's 41 recalls, for all their embarrassment, are at least public. That reading is mostly fair, and the article should say so. The counterweight is the scale: BMW, a company of similar size and premium ambition, filed 7 campaigns in the same window, including a one-motorcycle recall. Mazda filed none. Either Mazda built a genuinely clean model year — the CX-5's first year on a new generation, no less — or it has defects it has not found yet. Both readings fit the data, and the census is honest about which one it can prove: neither.
