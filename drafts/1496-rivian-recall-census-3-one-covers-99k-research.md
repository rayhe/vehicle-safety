# Research: #1496 — Rivian Recalled 3 Times in 2026. One of Them Covered 99,000 Vehicles.

**Number:** 1496
**Slug:** 1496-rivian-recall-census-3-one-covers-99k
**Journalist:** Rex Driverton (Investigation — rotation: Axle McScatter filed the last four censuses, #1492–#1495; the census series rotates back to Rex for this one)
**Kicker:** By The Numbers
**Date:** November 13, 2026
**Target ship_date:** 2028-08-17 (1 day after #1495's 2028-08-16)

## Angle (1-2 sentences)

The recall-census series reaches its eighteenth brand, and Rivian's count is **3 campaigns** filed in 2026 touching a 2026-model-year vehicle, covering **103,526 vehicles**. The count is the least interesting number in the file: one campaign (26V597, a notification that can cover the rearview camera image) accounts for **98,828 of those vehicles, 95% of the census population**, and it includes **2,481 model-year 2027 R2s** — a car that does not exist in VPIC's 2026 model list yet is already recalled. Rivian filed the second-fewest campaigns of any brand in the series that filed anything (behind only Audi's one) and one of the largest populations, because the census counts filings and one filing can be most of the fleet.

## Kill test

- **Genuinely newsworthy?** Yes. First company-level census of Rivian's 2026 recalls on this site. The news is the shape of the count, not the count: three campaigns, one of them nearly the whole census. 26V597's 100% defect estimate on 98,828 vehicles makes it Rivian's largest recall by population and more than twenty times the other two campaigns combined. The census also catches two traps: (a) the R2 is a 2027 model year, so a naive 2026-model-year query misses the R2 slice of 26V597 entirely, and (b) the two biggest Rivian safety stories of 2026 (the 19,641-vehicle toe-link recall and the 34,824-van EDV seat belt recall) both sit outside the census because they touch no 2026 vehicle.
- **Novel on site?** Yes. No prior Rivian company-level census exists. Individual Rivian recalls were covered as news (the toe-link investigation in May 2026, the R2 loose-bolt pair, the turn-signal expansion in August), but never counted, never placed in the eighteen-brand table, and never split by campaign population. The original contribution is the corrected 3 census below (NHTSA recalls API, Nov 13, 2026, 25 queries plus MY2025 controls), the 95%-in-one-campaign concentration, the R2 paradox (recalled before it exists as a 2026 model), the 26V508 supplier-containment failure, and the eighteen-brand table (total now 172).
- **Original contribution:** the corrected 3 census; the 25-query API failure matrix (23 HTTP 400, 2 HTTP 200) with MY2025 controls; the concentration finding (26V597 = 95.5% of census population); the R2 finding (2,481 MY2027 R2s inside a 2026 census campaign, while VPIC lists no 2026 R2 at all); the 26V508 expansion story (supplier Myotek failed to quarantine suspect lamps, 17 failures in 14 months after the original recall); the 26V009 discovery story (a service tech found a loose seat belt bolt on Sep 16, 2025, and Rivian traced it to a four-year production window); and the outside-census pair (26V003 toe link, 19,641; 25V816 EDV seat belt, 34,824).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 13, 2026. Method: VPIC canonical 2026 model list for make "rivian" (4 names: EDV, R1S, R1T, RCV), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric / Recharge suffix variants plus targeted trims (pass 1: 25 queries, 23 HTTP 400, 2 HTTP 200, 3 campaigns). Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. **Result: 3 campaigns.** Runner at drafts/1496-census-run.py; raw results at drafts/1496-rivian-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API 400 semantics, documented:** the recalls API returns HTTP 400 when no recall records exist at all for a model-year, and 200 with rows when records exist. Proven by the MY2025 controls: the same spellings return 200 with real campaigns for MY2025 (r1s returns 11 campaigns incl. 26V003, 26V009, 26V508, 26V597; r1t returns 8; edv returns 25V816) — 3 of 4 model controls returned 200 with rows. The fourth, rcv, returns 400 for both MY2025 and MY2026, consistent with the RCV (commercial van) having no NHTSA recall records at all. The EDV's MY2026 400 is confirmed by the EDV recall record itself: 25V816 covers MY2022–2025 only, so no 2026 EDV exists in any campaign.
3. **26V009 (seat belt retractor bolts) — NHTSA Part 573 report RCLRPT-26V009-9507 + Autoblog (Jan 26, 2026) + Carscoops (Jan 22, 2026) + Drive Tesla Canada:** filed Jan 16, 2026; **869** vehicles (434 R1T 2022–2025 + 435 R1S 2022–2026), built Sep 15, 2021–May 15, 2025. Second-row driver/passenger seat belt retractor bolts may not have been properly installed; a loose retractor increases injury risk in a crash. Rivian estimates **~1%** of the population actually has the defect. Discovered Sep 16, 2025, when a service technician found an improperly secured retractor during routine service on an R1T; no other improperly secured retractors found during the investigation. No crashes or injuries. Remedy: inspect and tighten bolts, free. Owner letters by Mar 9, 2026. https://driveteslacanada.ca/wp-content/uploads/2026/01/RCLRPT-26V009-9507.pdf and https://www.autoblog.com/news/rivian-recalls-r1t-and-r1s-over-seat-belt-safety-issue
4. **26V508 (front turn signals) — NHTSA Part 573 report RCLRPT-26V508-6656 + Autoblog (Aug 12, 2026) + Motoring Chronicle + RivianTrackr:** filed Aug 6, 2026 (Part 573 submission Aug 5); **3,829** vehicles (3,204 R1S 2025–2026 + 625 R1T 2025–2026), built Jun 12, 2024–May 26, 2026. One or both front turn signals may fail to illuminate; fails FMVSS 108. Expansion of 25V387 (filed Jun 11, 2025, 27,882 vehicles): supplier Myotek **failed to properly quarantine** suspect lamp assemblies, so they kept being installed after the original recall. Rivian found **17 instances** of turn-signal failure between June 2025 and July 2026, then determined on Jul 31, 2026 that 3,829 more vehicles should be added. Rivian estimates **fewer than 1%** actually affected. No crashes, injuries or fatalities. Remedy: inspect and/or replace front turn-signal lamps, free. VINs searchable Aug 31, 2026; letters Sep 29, 2026. Rivian FSAM-1833. Q3 2026 remedy report: 1,842 additional vehicles remedied in Q3. https://driveteslacanada.ca/wp-content/uploads/2026/08/RCLRPT-26V508-6656.pdf and https://www.autoblog.com/news/rivian-recalls-more-evs-after-supplier-failed-to-contain-the-same-bad-parts
5. **26V597 (rearview camera notification) — NHTSA acknowledgment RCAK-26V597-7378 + Part 573 RCLRPT-26V597-1248 + Pickup Truck Talk (Oct 7, 2026) + AutoIgloo:** filed Sep 16, 2026; **98,828** vehicles (34,088 R1T 2022–2026 + 62,259 R1S 2022–2027 + **2,481 R2 2027**), built Aug 23, 2021–Aug 10, 2026. A drive-mode notification can obstruct the rearview camera image when the driver shifts into reverse without answering a stability-control prompt; fails FMVSS 111 (rear visibility). Rivian estimates **100%** of the population carries the defect (the suspect software is present in all of them). Discovered in **internal testing** Jul–Sep 2026; on Sep 10, 2026 Rivian determined a noncompliance could not be ruled out. No customer reports, accidents, injuries or fatalities. Remedy: free **over-the-air software update** (software versions before 2026.23 for R1, before 2026.31.40 for R2); the fix was already installed on **over 95%** of impacted vehicles at filing. Owner letters Nov 9, 2026. Rivian FSAM-1866; Transport Canada 2026-443. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V597-7378.pdf and https://pickuptrucktalk.com/2026/10/rivian-multiple-model-recall-98k-obstructed-rearview-camera-image/
6. **Outside the census — 26V003 (toe link):** filed Jan 5, 2026; **19,641** vehicles (12,610 R1T + 7,031 R1S), MY2022–2025 only, so no 2026 vehicle and outside the census. Rear toe-link joints may have been reassembled incorrectly during service under a pre-Mar 10, 2025 procedure; a separated toe link can cause loss of control. One crash with alleged minor injuries; ~1% defect estimate. Then on May 28, 2026 NHTSA opened a preliminary evaluation on **114,922** R1S/R1T vehicles over the same component — nearly six times the recall population — after two owner questionnaires described toe links separating while driving. Covered on this site as "Rivian Recalled 20,000 Trucks for a Suspension Defect Its Own Technicians Created. Now 115,000 Are Under Investigation." (May 28, 2026). https://www.vehicle-safety.org/stories/rivian-toe-link-investigation-115k
7. **Outside the census — 25V816 (EDV seat belt pretensioner):** filed Nov 25, 2025 (a 2025 filing, so outside the 2026 census); **34,824** EDVs, MY2022–2025, built Dec 10, 2021–Nov 8, 2025. Driver-side seat belt pretensioner cable may be damaged from repeated misuse (drivers sitting on the belt while buckled underneath). Rivian estimates **100%** of the population has the defect. Followed ODI preliminary evaluation PE25011 (opened Sep 22, 2025, 14 owner questionnaires). Remedy: OTA misuse-detection software plus inspection/replacement, free. Owner letters Jan 19, 2026 — which is why it reads like a January 2026 recall. Rivian FSAM-1770. https://driveteslacanada.ca/wp-content/uploads/2025/12/RCLRPT-25V816-8746.pdf
8. **Denominators — Rivian Q3 2026 results (SEC 8-K, Oct 2, 2026; earnings Oct 29, 2026):** Q3 production **19,751** vehicles, deliveries **19,248** (record quarter, +46% YoY); H1 deliveries 22,559 (Q1 10,365 + Q2 12,194); nine-month deliveries **41,807**. Full-year 2026 delivery guidance raised to **67,000–70,000**. R2 became Rivian's best-selling vehicle in Q3, outselling R1 and EDV; R2 deliveries began Jun 9, 2026. Combined R1 + EDV volume for full-year 2025 was 42,247. https://www.sec.gov/Archives/edgar/data/1874178/000187417826000057/ex-9913q26deliveryproducti.htm

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Campaign | Filed | Vehicle(s) | Defect | US vehicles |
|---|---|---|---|---|
| 26V009 | Jan 16, 2026 | R1T 2022–2025, R1S 2022–2026 | Second-row seat belt retractor bolts may be loose | 869 |
| 26V508 | Aug 6, 2026 | R1S / R1T 2025–2026 | Front turn signals may not illuminate (FMVSS 108) | 3,829 |
| 26V597 | Sep 16, 2026 | R1T 2022–2026, R1S 2022–2027, R2 2027 | Notification can obstruct rearview camera image (FMVSS 111) | 98,828 |
| **Total** | | | | **103,526** |

Two of three campaigns are fixed without a wrench in the owner's driveway: 26V597 is an OTA software update (already on 95%+ of vehicles at filing). 26V009 and 26V508 need a service visit. All three: zero crashes, zero injuries, zero fatalities reported.

### The concentration

| Campaign | Vehicles | Share of census population |
|---|---|---|
| 26V597 (camera) | 98,828 | 95.5% |
| 26V508 (turn signals) | 3,829 | 3.7% |
| 26V009 (seat belts) | 869 | 0.8% |

### Per-model counts (2026 model year)

| Model | Campaigns | API evidence |
|---|---|---|
| R1S | 3 | 200 — 26V009, 26V508, 26V597 |
| R1T | 2 | 200 — 26V508, 26V597 |
| EDV | 0 | 400 — no recall records exist for MY2026 (its recall, 25V816, covers MY2022–2025 only) |
| RCV | 0 | 400 — no recall records exist for MY2025 or MY2026 |
| R2 | — | Not in VPIC's 2026 model list (R2 is a 2027 model year); 2,481 MY2027 R2s are inside 26V597 anyway |

### Outside the census (filed in 2026, touches no 2026 vehicle — or filed in 2025)

| Campaign | Filed | Model(s) | Defect | US vehicles |
|---|---|---|---|---|
| 26V003 | Jan 5, 2026 | R1T / R1S 2022–2025 | Rear toe link reassembled wrong during service | 19,641 |
| 25V816 | Nov 25, 2025 | EDV 2022–2025 | Seat belt pretensioner cable damaged by misuse | 34,824 |

The outside-census pair (54,465 vehicles) is more than half the size of the census itself, and it contains the only crash in Rivian's 2026 recall year (one minor-injury crash, 26V003). The census counts filings on 2026 cars; the danger, such as it is, lives one model year back.

### Eighteen-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Volvo (cars 2 + trucks 10) | 12 |
| Mercedes | 8 |
| Nissan (+ Infiniti, company 7) | 7 |
| BMW | 7 |
| Subaru | 5 |
| Honda | 4 |
| Kia | 4 |
| Volkswagen | 4 |
| Tesla | 4 |
| **Rivian** | **3** |
| Audi | 1 |
| Porsche | 0 |
| Mazda | 0 |

Eighteen-group total: **172 campaigns**. Rivian adds 3 and lands fifteenth, between Tesla's 4 and Audi's 1. By campaign count Rivian had the second-quietest year of any brand that filed anything. By population it had one of the loudest: 103,526 vehicles, more than four times Volvo's 21,984, because a single software bug can cover most of the fleet and a single loose bolt cannot.

## Original contribution (Rex's math and synthesis)

1. **Three campaigns, one fleet.** The census is the most concentrated in the series: a single campaign holds 95.5% of the population. Rivian's recall year is not three problems; it is one problem (a notification covering a camera image) plus two footnotes (869 seat belt bolts, 3,829 turn signals). Any ranking by campaign count says Rivian had a quiet year. Any ranking by vehicles says it recalled 103,526 vehicles on three filings. Both rankings are true and both are useless alone, which is the point of counting both.
2. **The R2 paradox.** The R2 is Rivian's best-selling vehicle in Q3 2026 and it does not exist in VPIC's 2026 model list, because it is a 2027 model year. Yet 2,481 R2s are inside 26V597, built Apr 23–Aug 10, 2026. A model-year census that trusted VPIC alone would miss the R2 slice entirely. The R2 was recalled before it had a full quarter of sales behind it, and before most buyers had heard of it outside a launch event.
3. **The supplier that did not quarantine.** 26V508 is a recall of a recall: the original turn-signal campaign (25V387, June 2025, 27,882 vehicles) did not end the defect, because Myotek failed to quarantine the suspect lamp assemblies and they kept going into new cars for another 14 months. Rivian found 17 more failures between June 2025 and July 2026, then added 3,829 vehicles. The defect was not discovered twice; it was never contained once.
4. **The technician who found a bolt.** 26V009 exists because one service technician, on Sep 16, 2025, noticed a loose second-row seat belt retractor during routine service on an R1T. Rivian traced the suspect installation window back to Sep 15, 2021 — four years of production — and found 869 vehicles. The smallest campaign in the census is also the one with the best origin story: a person, not a sensor, caught it.
5. **The 100% club, both ends.** Two campaigns estimate 100% of their population carries the defect: 26V597 (98,828 vehicles, suspect software in all of them) and, outside the census, 25V816 (34,824 EDVs, pretensioner cable in all of them). At the other end, 26V009 and 26V508 both estimate under 1%. The census population (103,526) is dominated by vehicles whose defect is a software version number, not a broken part.
6. **The OTA inversion.** The biggest recall in Rivian's history was fixed before it was filed: the 26V597 remedy was already installed on over 95% of the 98,828 vehicles when NHTSA published the campaign. The recall exists as paperwork for a fix that already happened. That is the opposite of the Volvo truck pattern in #1495, where every fix needed a dealer, a valve, or a fastener. Rivian's safety problems are increasingly software problems, and software problems increasingly fix themselves before the letter arrives.

## Limitations

- The census counts NHTSA campaign filings, not defects fixed, not vehicles repaired, and not crashes caused. A campaign with a sub-1% defect estimate (26V009, 26V508) and a campaign with a 100% estimate (26V597) both count as one, and the population figures are upper bounds, not counts of broken vehicles.
- The API's 400-means-no-records semantics is validated by controls, but a model spelling the API does not recognize returns 400 too. The VPIC canonical list plus suffix variants plus targeted trims (25 queries) is the mitigation; a 2026 Rivian model sold in the US under a name VPIC does not list would be missed. No such model is known. The R2 gap is the reverse trap: the model exists but VPIC lists it under 2027, so it enters the census only through the campaign record, not through the model query.
- 26V597's population includes 2,481 MY2027 R2s. The census counts the campaign once because it touches 2026 vehicles; the R2 slice is counted in the population total (98,828) because NHTSA reports the campaign as one population. A reader who wants the strictly-2026-vehicle population should subtract the R2 slice: 103,526 minus 2,481 is 101,045.
- Populations are NHTSA "potential number of units affected" figures from acknowledgment letters and Part 573 reports, not counts of vehicles with the defect. Where the Part 573 gives a defect estimate, it is stated; where it does not, the population is an upper bound.
- Rivian does not break out R1 vs R2 vs EDV deliveries, so no per-model denominator is given. The nine-month delivery total (41,807) is used for scale only.

## Strongest counterargument

The honest reading is that Rivian had an excellent year. Three campaigns is the second-fewest of any brand in the series that filed anything, behind only Audi's one, the biggest campaign was a software notification that Rivian had already fixed on 95% of the fleet before the filing, the other two campaigns cover fewer than 5,000 vehicles combined with sub-1% defect estimates, and zero crashes or injuries are attached to any of the three. The toe-link investigation that looks alarming (114,922 vehicles) is an investigation, not a recall, and Rivian's position is that the two owner complaints do not implicate the joint itself. The census counts filings, and filings are what a regulator sees, but the 26V597 filing is mostly paperwork for a fix that already shipped, and the 26V508 filing is mostly paperwork for a supplier's quarantine failure that Rivian caught by monitoring. If the census were a safety ranking, Rivian would look worse than it is: the population number is inflated by a software version present in every car, and the campaign count is inflated by a supplier that did not quarantine. The count is a filing census, not a danger ranking, and the article says so.

## Actionable takeaways

- **If you own a 2022–2026 R1T or 2022–2027 R1S:** check your VIN at nhtsa.gov/recalls for 26V597 (rearview camera). The fix is an OTA update to software 2026.23 or later; if your truck has updated since September, it is probably already fixed, but the VIN lookup is the confirmation, not the version number.
- **If you own a 2025–2026 R1S or R1T:** check for 26V508 (turn signals). If your signals were already replaced under the June 2025 recall (25V387), you are not automatically clear: the expansion covers vehicles that got the same bad lamps after the original recall, so only the VIN lookup settles it.
- **If you own a 2022–2025 R1 vehicle that had rear suspension service before March 10, 2025:** check for 26V003 (toe link) and confirm the remedy was applied; the May 2026 NHTSA investigation into the same joint covers 114,922 vehicles and is still open.
- **If you drive an Amazon EDV (or any Rivian delivery van):** the seat belt pretensioner recall (25V816) covers 2022–2025 vans, and the defect comes from sitting on the belt while buckled. Do not sit on a buckled seat belt.
