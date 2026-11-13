# Research: #1495 — Volvo Recalled 12 Times in 2026. Ten of Them Were Trucks.

**Number:** 1495
**Slug:** 1495-volvo-recall-census-12-trucks-carry-ten
**Journalist:** Axle McScatter (By The Numbers — statistical roundups, methodology pieces; the census series is his beat)
**Kicker:** By The Numbers
**Date:** November 13, 2026
**Target ship_date:** 2028-08-16 (1 day after #1494's 2028-08-15)

## Angle (1-2 sentences)

The recall-census series reaches its seventeenth brand, and Volvo's count is **12 campaigns** filed in 2026 touching a 2026-model-year vehicle, covering **21,984 vehicles**. The count is the least interesting number in the file: **ten of the twelve campaigns are Volvo Trucks, and both car campaigns are the same car** — the EX30. Every other 2026 Volvo car (XC40, XC60, XC90, S60, S90, V60, EX90) went the whole year without a single NHTSA filing. The brand with the safest reputation in the business split clean in half: its cars were nearly clean, its trucks were not.

## Kill test

- **Genuinely newsworthy?** Yes. First company-level census of Volvo's 2026 recalls on this site, and the split is the news. Volvo Cars sells safety as its identity; Volvo Trucks sells uptime. In 2026 the car side filed twice (both times the EX30, the cheapest car Volvo sells) while the truck side filed ten times, including a Do Not Drive wheel-detachment recall, a steering recall on 3,794 trucks, and a brake recall where the release timing missed the federal standard by six hundredths of a second. The census also catches the series' first make-level vocabulary trap: NHTSA's "volvo" make covers cars, trucks, buses and trailers in one bucket, so a naive count mashes two companies together.
- **Novel on site?** Yes. No prior Volvo company-level census exists. Individual Volvo recalls were covered as news (the EX30 battery pair in early 2026, the VNL steering recall in July), but never counted, never split cars from trucks, and never placed in the seventeen-brand table. The original contribution is the corrected 12 census below (NHTSA recalls API, Nov 13, 2026, 329 queries plus 6 MY2025 controls), the cars-vs-trucks split, the EX30 monopoly on the car side, the 26V513 API-vs-acknowledgment model-year discrepancy, the outside-the-census EX30 battery pair, and the seventeen-brand table (total now 169).
- **Original contribution:** the corrected 12 census; the 329-query API failure matrix (322 HTTP 400, 7 HTTP 200) with MY2025 controls; the cars-vs-trucks split (2 car campaigns / 11,514 vehicles vs 10 truck campaigns / 10,470 vehicles); the per-model zero confirmations for every 2026 Volvo car except the EX30; the 26V513 discrepancy (API row says 2026-2027, the NHTSA acknowledgment letter lists 2027 only); the 26V186 six-hundredths-of-a-second finding (0.61s vs the 0.55s FMVSS 121 maximum); the 26V677 five-truck minimum (smallest campaign in the census); and the outside-census battery pair (26V001 + 26V103, 40,323 cars worldwide, $195M+ estimate).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 13, 2026. Method: VPIC canonical 2026 model list for make "volvo" (65 names: cars, trucks, buses, trailers), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric / Recharge suffix variants plus targeted trims (pass 1: 329 queries, 322 HTTP 400, 7 HTTP 200, 12 campaigns). Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. **Result: 12 campaigns.** Runner at drafts/1495-census-run.py; raw results at drafts/1495-volvo-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API 400 semantics, documented:** the recalls API returns HTTP 400 when no recall records exist at all for a model-year, and 200 with rows when records exist. Proven three ways. (a) The MY2025 controls: the same spellings return 200 with real campaigns for MY2025 (xc90 returns 25V282 + 25V908; xc60 returns 25V282 + 25V818 + 25V908; s60 returns 25V282 + 25V908; s90 returns 25V104 + 25V282 + 25V908; vnl (4) returns 8 campaigns; ex30 returns 26V001 + 26V103 + 26V136 + 26V671) — 6 of 6 model controls returned 200. (b) The clean 200-with-rows MY2026 query: ex40 returns 200 with only pre-2026 campaigns, so its zero is API-confirmed rows, not an inferred empty. (c) The car-model 400s are confirmed by outside aggregators: CarFactSheet's 2026 XC90 page states "NHTSA has no recall campaigns on file for this vehicle" and "Zero recalls on file (SUV average: 2.5)."
3. **26V444 (steering) — NHTSA Part 573 report RCLRPT-26V444-9666 + Land Line (Jul 21, 2026) + TruckDriverNews + CCJ Digital:** filed Jul 9, 2026; **3,794** model-year 2026 VNL, VNR, VN, VAH and VHD trucks (2,001 VNL, 1,101 VN, 533 VHD, 148 VAH, 11 VNR), built Feb 3–Jul 24, 2025. Steering knuckles may have insufficiently tightened steering arms; a loose arm can cause loss of steering control. Volvo estimates **0.1%** of the population actually has the defect. 5 field reports + 6 warranty claims across 7 unique VINs; no crashes or injuries. Cause under investigation with the third-party supplier that assembles steering knuckles. Remedy: inspect and tighten fasteners, free. Owner letters Sep 7, 2026. Volvo number RVXX2607. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V444-9666.pdf and https://landline.media/volvo-trucks-issues-recall-after-reports-of-potential-steering-loss/
4. **26V350 (wheel detach, Do Not Drive) — NHTSA acknowledgment RCAK-26V350-0515 + CCJ Digital (Jun 16, 2026) + TruckDriverNews:** filed May 28, 2026; **155** trucks (2026 VAH, 2026–2027 VN, VHD, VNL, 2027 VNR). Masking material from a painting process left between wheels and axle hubs compresses, lug nuts loosen, wheel can detach. **Do Not Drive** advisory until repaired. 4 warranty claims; no field reports, crashes or injuries. Remedy: inspect/replace, free. Volvo number RVXX2606. Mack filed the parallel 26V351 (644 trucks). https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V350-0515.pdf
5. **26V076 (parking brake rollaway) — NHTSA acknowledgment + Part 573 RCLRPT-26V076-9311 + Land Line (Feb 18, 2026):** filed Feb 10, 2026; **800** model-year 2024–2027 VNL (4) trucks, 6x4 axle with electronic suspension, no auxiliary parking brakes. In weight-bias mode there may not be enough weight on the parking-brake axle; inadequate holding force can cause a rollaway. Volvo estimates **100%** of the population has the defect. 0 warranty claims, 0 field reports, 0 accidents, 0 injuries — the recall was triggered by a roll observed on Volvo's own corporate transport site, Nov 19, 2025. Remedy: replace brake chambers with ones including auxiliary parking brakes, free. Letters Apr 10, 2026. Volvo number RVXX2601. https://landline.media/volvo-trucks-recalled-over-rollaway-risk-tied-to-parking-brake/
6. **26V184 + 26V186 (instrument panel / brake release) — Land Line (Apr 6, 2026) + TruckDriverNews + The Brake Report:** both filed Mar 25, 2026, both 2025–2026 VNL (4). 26V184: **115** trucks, instrument panel may go blank while driving (Visteon soldering-process error); 18 warranty claims + 8 field reports. Remedy: replace cluster, free. Volvo RVXX2603. 26V186: **222** trucks, service brake release timing measured **0.61 seconds** against the FMVSS 121 maximum of **0.55 seconds** (11% over); specific rear-suspension/axle/chamber/traction-control combination starves pneumatic airflow. Remedy: install an additional brake valve and fittings, free. Volvo RVXX2602. The Brake Report notes a **Do Not Drive and Park Outside** advisory on 26V186. https://landline.media/pair-of-volvo-trucks-recalls-include-delayed-braking-and-blank-instrument-panels/
7. **26V208 (turn signals) — Land Line (Apr 15, 2026) + The Trucker (Apr 13, 2026):** filed Apr 1, 2026; **336** trucks (2025–2027 VNL, 2026–2027 VNR). Software does not provide adequate current for incandescent trailer turn-signal indicators; fails FMVSS 108. 0 warranty claims, 0 field reports, 0 incidents, 0 injuries. Remedy: software update, free. Letters May 31, 2026. Volvo RVXX2604. Mack filed the parallel 26V207. https://landline.media/faulty-turn-signals-prompt-volvo-and-mack-trucks-recall/
8. **26V260 (ABS/ESC loss) — The Brake Report (Apr 29 / May 5, 2026) + NHTSA owner letter RCONL-26V260-2441:** filed Apr 23, 2026; **2,800** Volvo VNL/VNR tractors (2025–2027 VNL, 2026–2027 VNR) plus 2,337 Mack tractors under 26V261 — **5,137 combined**. Bendix rear brake modulators (part 24710104) left with unprotected electrical connectors; moisture or contamination can short-circuit them and kill ABS and electronic stability control. Stop-shipment order issued Apr 16 to all Volvo Group facilities. Bendix clarified the modulator itself is not defective — the missing protective cover (Volvo Group part 995115) is the defect. Letters by Jun 22, 2026. Volvo RVXX2605. https://thebrakereport.com/volvo-group-recalls-5137-heavy-trucks-over-bendix-brake-modulator-defect/
9. **26V513 (marker lights) — NHTSA acknowledgment RCAK-26V513-7041 + Land Line (Aug 17, 2026) + The Trucker:** filed Aug 6, 2026; **1,851** trucks. Center roof marker lights may fail to illuminate (wrong connector-housing lengths, supplier Grote); fails FMVSS 108. ~1% of the population expected to have the defect; 33 Volvo warranty claims. Remedy: replace the marker light, free. Letters Oct 5, 2026. Volvo RVXX2608. Mack filed the parallel 26V515. **Discrepancy:** the API row for model-year 2026 lists "2026-2027 VNL (4) and VNR (4)", while the NHTSA acknowledgment letter lists 2027 models only. The census keeps it on the API's model-year attribution, which is the same attribution rule used for every other campaign in the series.
10. **26V619 (tanker braking software) — The Brake Report + Tank Transport (Oct 2026) + SGIB Inc:** filed Sep 28, 2026; **392** Volvo VNL/VNR tractors (2025–2027 VNL, 2026–2027 VNR) with a tanker application package, plus 850 Mack tractors under 26V620 — **1,242 combined**. Software can miscalculate dynamic axle loads while pulling smoothbore (unbaffled) tank trailers, reducing trailer braking effectiveness and extending stopping distance, with no warning. 3 Volvo field reports; no warranty claims, accidents or injuries. Remedy: software update disabling the dynamic trailer-braking calculation, free. Letters Nov 27, 2026. Volvo RVXX2610. Supplier: Bendix. https://thebrakereport.com/volvo-mack-tanker-truck-recall-braking-software/
11. **26V677 (cab bolts) — Truckinguru (Oct 29, 2026):** filed Oct 15, 2026; **5** model-year 2025–2026 VNL trucks. Cab structural bolts may be loose or missing, reducing crash performance. Smallest campaign in the census. Letters Dec 14, 2026. Volvo RVXX2612. https://www.truckinguru.com/a/kenworth-peterbilt-sleeper-bunk-restraint-recall-volvo-vnl-cab-bolts
12. **26V671 (EX30 head restraint) — NHTSA acknowledgment RCAK-26V671-8249 + Volvo retailer notice RCMN-26V671-8235 + Charge News + Nile1:** filed Oct 9, 2026; **9,930** US vehicles (12,627 North America incl. Canada): 2025–2026 EX30 (8,825) and 2026 EX30 Cross Country (3,802), built Sep 4, 2023–Jul 16, 2026. Head restraint cushion may detach in a severe, high-speed, multi-direction crash. Volvo estimates **100%** of the population has the defect. Supplier: Magna Seating Baoji (China). No injuries reported. Remedy: dealers apply two-component epoxy adhesive at three attachment points on both front seats, free; stop-delivery on undelivered VINs. Letters Nov 30, 2026. Volvo R10396. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V671-8249.pdf
13. **26V136 (EX30 seat belt chime) — NHTSA API record + RefundYourLemon table:** filed Mar 11, 2026; **1,584** vehicles: 2025–2026 EX30 and 2026 EX30CC. Seat belt warning system may not activate the audible chime; fails FMVSS 208. Remedy: dealers replace terminals at the audio module connector, free. Letters Mar 26, 2026. Volvo R10365.
14. **Outside the census — the EX30 battery pair (26V001 + 26V103):** filed Jan 2 and Feb 20, 2026; both touch 2025-model-year EX30s only, so neither enters the 2026-model-year census. 26V001: 40 US vehicles. 26V103: 189 US vehicles per the February acknowledgment (an amended May 6 filing lists 161). High-voltage battery may short-circuit and overheat; fire risk even parked and switched off. Interim remedy: cap charging at 70% until dealers replace battery modules. Worldwide: **40,323** cars (Reuters, Feb 23, 2026). Cells from Shandong Geely Sunwoda Power Battery; lithium plating from a manufacturing-process deviation. Estimated cost to Volvo: **$195M+** (Reuters-derived estimate). A Quebec class action (ML Kaufman, filed Oct 2026) alleges owners waited nine months for repairs. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V103-9274.pdf
15. **Denominators — Volvo Car USA sales:** Q3 2026 sales 23,766, down 8.7% YoY; year-to-date through Q3 down 11% vs 2025; full-year 2025 total 121,607 (Volvo Cars / dsf.my, Oct 29, 2026). EX30 US sales Jan–Sep 2026: **3,222** (down 31.6% YoY); XC90 Jan–Sep 2026: 31,329 (up 7.9%) (goodcarbadcar.net). The 26V671 head-restraint recall alone (9,930 vehicles) covers roughly three times as many EX30s as Volvo sold in the US in the first nine months of 2026 — because it reaches back to the 2025 model year.
16. **Series table source:** #1492 research file (drafts/1492-tesla-recall-census-4-zero-ota-fixes-research.md) — sixteen-brand table, total 157 campaigns.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Campaign | Filed | Vehicle(s) | Defect | US vehicles |
|---|---|---|---|---|
| 26V076 | Feb 10, 2026 | VNL 2024–2027 | Parking brake too weak in weight-bias mode; rollaway | 800 |
| 26V136 | Mar 11, 2026 | EX30 / EX30CC 2025–2026 | Seat belt warning chime may not sound (FMVSS 208) | 1,584 |
| 26V184 | Mar 25, 2026 | VNL 2025–2026 | Instrument panel may go blank while driving | 115 |
| 26V186 | Mar 25, 2026 | VNL 2025–2026 | Brake release 0.61s vs 0.55s FMVSS 121 max | 222 |
| 26V208 | Apr 1, 2026 | VNL 2025–2027, VNR 2026–2027 | Turn signals may not work (FMVSS 108) | 336 |
| 26V260 | Apr 23, 2026 | VNL 2025–2027, VNR 2026–2027 | ABS/ESC loss from unprotected modulator connector | 2,800 |
| 26V350 | May 28, 2026 | VAH/VN/VHD/VNL 2026–2027, VNR 2027 | Wheel lug nuts may loosen; wheel may detach — Do Not Drive | 155 |
| 26V444 | Jul 9, 2026 | VNL/VNR/VN/VAH/VHD 2026 | Steering arm fasteners under-torqued; steering loss | 3,794 |
| 26V513 | Aug 6, 2026 | VNL/VNR 2026–2027 | Center roof marker lights may not illuminate (FMVSS 108) | 1,851 |
| 26V619 | Sep 28, 2026 | VNL 2025–2027, VNR 2026–2027 (tanker pkg) | Axle-load miscalculation cuts tanker-trailer braking | 392 |
| 26V671 | Oct 9, 2026 | EX30 / EX30CC 2025–2026 | Head restraint cushion may detach in a crash | 9,930 |
| 26V677 | Oct 15, 2026 | VNL 2025–2026 | Cab structural bolts loose or missing | 5 |
| **Total** | | | | **21,984** |

All twelve campaigns: `overTheAirUpdate: false` in the NHTSA API. Zero OTA fixes in the census — the car campaigns are fixed with a wrench and glue, the truck campaigns with valves, fasteners and software installed at a dealer.

### The split

| Side | Campaigns | Vehicles | Share of campaigns | Share of vehicles |
|---|---|---|---|---|
| Volvo Cars | 2 | 11,514 | 17% | 52% |
| Volvo Trucks | 10 | 10,470 | 83% | 48% |

### Per-model counts (2026 model year)

| Model | Campaigns | API evidence |
|---|---|---|
| EX30 / EX30CC | 2 | 200 — 26V136, 26V671 |
| VNL (4) | 10 | 200 — 26V076, 26V184, 26V186, 26V208, 26V260, 26V350, 26V444, 26V513, 26V619, 26V677 |
| VNR (4) | 4 | 200 — 26V208, 26V260, 26V444, 26V619 |
| VAH / VHD / VN | 2 | 200 — 26V350, 26V444 |
| XC40, XC60, XC90, S60, S90, V60, V60CC, V90CC, EC40, EX40, EX90 | 0 | 400 — no recall records exist for MY2026 (EX40 returns 200 with only pre-2026 campaigns) |

### Outside the census (filed in 2026, touches no 2026 vehicle)

| Campaign | Filed | Model(s) | Defect | US vehicles |
|---|---|---|---|---|
| 26V001 | Jan 2, 2026 | EX30 2025 | HV battery short circuit; fire risk; 70% charge cap | 40 |
| 26V103 | Feb 20, 2026 | EX30 2025 | HV battery short circuit; fire risk; 70% charge cap | 189 (amended filing: 161) |

The battery pair is the biggest Volvo safety story of 2026 by dollars ($195M+) and by global population (40,323 cars) — and it sits outside the census because the census counts filings and model years, and the 2025 EX30 is neither a 2026 filing on a 2026 car nor a 2026 car at all. The EX30 is also the only Volvo car with any 2026 filing: four campaigns across two model years (26V001, 26V103, 26V136, 26V671), all four on the same nameplate.

### Seventeen-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| **Volvo (cars 2 + trucks 10)** | **12** |
| Mercedes | 8 |
| Nissan (+ Infiniti, company 7) | 7 |
| BMW | 7 |
| Subaru | 5 |
| Honda | 4 |
| Kia | 4 |
| Volkswagen | 4 |
| Tesla | 4 |
| Audi | 1 |
| Porsche | 0 |
| Mazda | 0 |

Seventeen-group total: **169 campaigns**. Volvo adds 12 and lands sixth — ahead of Mercedes, behind the five car companies that filed 15 or more. Strip out the trucks and Volvo Cars alone (2) would sit fifteenth, between Audi's 1 and Honda's 4. The make-level count flatters the car company and buries the truck company, or the reverse, depending on which Volvo you mean. NHTSA's API does not distinguish them; the census counts the make as filed.

## Original contribution (Axle's math and synthesis)

1. **Two Volvos, one make.** NHTSA files Volvo Cars and Volvo Trucks under a single make name, and the VPIC 2026 list for "volvo" runs to 65 names — cars, Class 8 tractors, buses, trailers. The census is the first count in the series that has to split its subject in two to say anything true. The headline number (12) belongs to neither company: Volvo Cars filed twice, Volvo Trucks filed ten times.
2. **The EX30 monopoly.** Both car campaigns are the EX30, and the outside-census battery pair is the EX30 too. Four campaigns, one nameplate, zero campaigns on the XC90 — the flagship, the car Volvo's safety reputation was built on, the one that sells 31,329 units in nine months. The cheapest Volvo is the only Volvo car that got recalled in 2026. The EX30's US sales (3,222 in nine months) are smaller than any single one of its recall populations except the chime.
3. **The six-hundredths finding.** 26V186 fails FMVSS 121 by 0.06 seconds: brakes release in 0.61 seconds against a 0.55-second maximum. It is the smallest margin in the census and the only campaign whose defect is a measured number with a federal ceiling attached. A brake that is eleven percent too slow is a federal violation; a brake that is eleven percent too slow is also a brake no driver would ever notice.
4. **The five-truck minimum.** 26V677 covers five VNLs with loose or missing cab bolts. Five trucks is the smallest population in the census and the smallest in the series to date. It exists because a cab bolt is a structural component: if the cab cannot stay bolted to the chassis, the crash test is fiction.
5. **The 100% club.** Three campaigns estimate 100% of their population carries the defect: 26V076 (800 trucks, rollaway), 26V671 (9,930 EX30s, head restraint). At the other end, 26V444 estimates 0.1% — four trucks out of 3,794. The recall count says nothing about how many vehicles are actually broken; the defect estimate does, and the two numbers point in opposite directions on the two biggest campaigns.
6. **The Mack shadow.** Five of the ten truck campaigns have a parallel Mack filing (26V207, 26V261, 26V351, 26V515, 26V620) because Volvo Group builds both brands on shared platforms with shared suppliers (Bendix modulators, Grote lights). The Volvo census is half of a Volvo Group census; the Mack half adds 2,337 + 644 + 850 trucks on the same defects. Counting Volvo alone understates the shared-platform failure by roughly half.

## Limitations

- The census counts NHTSA campaign filings, not defects fixed, not vehicles repaired, and not crashes caused. A campaign with a 0.1% defect estimate (26V444) and a campaign with a 100% estimate (26V076) both count as one.
- The API's 400-means-no-records semantics is validated by controls, but a model spelling the API does not recognize returns 400 too. The VPIC canonical list plus suffix variants plus targeted trims (329 queries) is the mitigation; a 2026 Volvo model sold in the US under a name VPIC does not list would be missed. No such model is known.
- 26V513's model-year attribution differs between the API (2026–2027) and the NHTSA acknowledgment letter (2027 only). If the letter is right, the census is 11, not 12, and the truck count is 9. The census follows the API, the same rule as every prior article in the series, and flags the discrepancy rather than resolving it.
- Populations are NHTSA "potential number of units affected" figures from acknowledgment letters and Part 573 reports, not counts of vehicles with the defect. Where the Part 573 gives a defect estimate, it is stated; where it does not, the population is an upper bound.
- Volvo Trucks North America retail sales for 2026 were not available at census time, so no trucks-sold denominator is given. Volvo Car USA sales are used for the car side only.

## Strongest counterargument

The honest reading is that Volvo had a good year. Twelve campaigns is a mid-table count, the car side filed twice on its cheapest model, the biggest truck campaign (26V444) is 99.9% trucks that do not have the defect, and the five-truck cab-bolt recall is the system working exactly as designed: a supplier flags a torque record, five cabs get checked. The census counts filings, and filings are what a regulator sees, but filings are not failures. The EX30 battery pair — the one story with a fire risk, a 70% charge cap, a nine-month repair wait and a class action — touches no 2026 car and sits outside the count entirely. If the census were a safety ranking, Volvo Cars would look worse than it is (two campaigns, both on one car) and Volvo Trucks would look worse than it is (ten campaigns, most of them small, most of them zero-injury). The count is a filing census, not a danger ranking, and the article says so.

## Actionable takeaways

- **If you own a 2025–2026 EX30:** check your VIN at nhtsa.gov/recalls for 26V136 (chime) and 26V671 (head restraint). The head-restraint fix is epoxy at three points on both front seats — a 2026 letter goes out November 30, but the VIN lookup has been live since October 9. If you own a 2025 EX30, also check 26V001/26V103 (battery): cap charging at 70% until the modules are replaced.
- **If you own any other 2026 Volvo car (XC40, XC60, XC90, S60, S90, V60, EX90):** zero NHTSA filings touch your car in 2026. The 2025 filings that do touch older models (25V282/25V908 rear camera, 25V392 brake loss) are a different model year — check your VIN anyway, since a 2025 car and a 2026 car can share a platform and a defect.
- **If you run Volvo VNL/VNR trucks:** ten campaigns, and two carry Do Not Drive advisories (26V350 wheel detach, 26V186 brake timing). Check VINs before dispatch, not after.
