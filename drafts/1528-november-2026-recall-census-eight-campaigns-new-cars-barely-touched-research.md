# Research — #1528: November Recalled 855,544 Vehicles. Only 8% of Them Were 2026 Models.

**Slug:** `1528-november-2026-recall-census-eight-campaigns-new-cars-barely-touched`
**Journalist:** Clara Rollover (Consumer Safety Advocate — car-buying guidance, "what this means for you"; 6 appearances in last 40, rotation-appropriate; Dale is impairment-only and does not fit a census story)
**Kicker:** By The Numbers
**Date researched:** 2026-11-16
**Target ship_date:** 2028-09-18 (1 day after #1527's 2028-09-17)

## Story in one line
Fifteen recall campaigns were filed in November 2026 covering 855,544 vehicles, and only eight of them touch a 2026-model-year vehicle at all. One BMW recall of 720,796 cars built between 2012 and 2018 is 84% of the month's entire filed population. November's recall system was not about new cars. It was about old ones.

## Kill test
- **Genuinely newsworthy?** YES. First month-slice census on this site: every campaign filed November 1–12, 2026, counted across every make, split by whether it touches a 2026-model-year vehicle. The headline number is a checkable fact nobody has published: 8 campaigns, 68,666 vehicles, 8.0% of the month's filed population.
- **Novel angle on data?** YES. The per-brand censuses (#1473–#1522) counted 2026-model-year campaigns filed January–November; #1526 counted November's three smallest. Nobody has counted the month itself, and nobody has shown that the month's biggest recalls systematically miss the current model year. The original contributions: (1) the 8-campaign / 68,666-vehicle November census, computed from the NHTSA API (6,559 queries across 81 makes); (2) the completeness audit — the make/model enumeration found only 4 of the 8, and an independent campaign-number sweep (26V700–26V760) caught the other 4, including a BMW i5 spelling gap and three makes the enumeration never queried (Spencer, Lamar Trailers, Utilimaster/Shyft); (3) the 8.0% share arithmetic against the month's 855,544 filed vehicles; (4) four campaigns new to the site as standalone coverage (26V729, 26V731, 26V734, 26V739 — the other four were covered standalone at #1526, #1466, #1462, and nowhere yet for 26V745, which is also new).
- **Duplicate screen (filenames + queue + full-content grep, no truncation), Nov 16, 2026:** No queue entry or story covers a November-month recall census, "855,544", "68,666", 26V729, 26V731, 26V734, 26V739, or 26V745. Killed in research, all already covered: Honda 26V721 steering divide-by-zero (#1457); GM EV brake 26V717 (#1387); Hyundai ACU 26V728 (#1400, #1429, #1435, #1444); VW steering bolt 26V590 (#929, #938, #953, #992, #1042, #1071, #1091); Ford Explorer PE26008 airbag burns (#1447); Waymo RQ26006 (#1445, #1461); Honda stop-start EA second probe (#1527); Ford Maverick loose cable 26V724 (#1509); BMW 26V733 water-pump park-outside (#1490); Harley 26V730 neutral lie (#1462, standalone — counted here, not re-reported); Ford Bronco 26V725 (#1526, standalone — counted here); Explorer PI map lights 26V726 (#1466, standalone — counted here); Rivian 26V597 camera (#1496 census); Toyota Sienna 26V690 (#1292, #1313); Lincoln Nautilus 26V688 (#1321, #1356); Jeep coil spring 26V562 (jeep-grand-cherokee-third-coil-spring-recall); F-150 fuel tank 26V578 (#1045); JLR 26V599 (#1352); Ford Ranger camera 26V605 (#1215, #1075); NHTSA H1 2026 estimates DOT HS 813 875 (#1494); IIHS July 2026 driver death rates (#1446, #1472, #993); IIHS Kicks/RAV4 TSP round (#1244, #1278, #1346, #1408, #1484); IIHS whiplash test (whiplash-test-78-percent-fail, whiplash-test-tsp-blind-spot, whiplash-test-speed-gap); IIHS commercial crash prevention (#1093, #1102, #1110, #1121, #1327); Cybertruck wind-down + 11 recalls (#1422); Maverick frozen camera RQ (#1311, #1345); Rivian toe-link investigation (#rivian-toe-link-investigation-115k).
- **Verdict:** PROCEED.

## Primary sources (3+)
1. **NHTSA recalls API, api.nhtsa.gov/recalls/recallsByVehicle** — census conducted Nov 16, 2026. Method: VPIC canonical 2026 model lists per make + Hybrid / Plug-In Hybrid / Electric suffix variants + targeted trims (same corrected-vocabulary method as #1475/#1478/#1480), 81 makes, 6,559 queries; kept 26Vxxx campaigns with ReportReceivedDate in November 2026; deduped by campaign number. Runner at drafts/1528-census-run.py; raw results at drafts/1528-november-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **Campaign-number sweep, 26V700–26V760** — independent completeness check: every campaign number in range looked up via AnyRecalls (NHTSA-data mirror), then all four sweep-found campaigns re-verified against the NHTSA API live this run (full records saved at drafts/1528-sweep-campaigns.json). The sweep is the only reason the census is 8 campaigns and not 4.
3. **NHTSA recalls API records, 26V729 / 26V731 / 26V734 / 26V739 / 26V745** (verified live Nov 16, 2026) — defect summaries, consequences, remedies, dates quoted verbatim in the campaign table below.
4. **#1526 research file** (drafts/1526-november-smallest-recalls-three-campaigns-1539-vehicles-research.md) — 26V725 (330 Broncos, 100% defect, plant torque audit Sep 22, zero complaints) and the 26V719/26V722 October-filing correction (both filed Oct 29, not November).
5. **#1462 research file** (drafts/1462-harley-neutral-lie-gear-position-sensor-research.md) — 26V730 (21,643 bikes, <1% defect estimate, 2 injuries, CycleTrader pre-recall observation).
6. **#1466 research file** (drafts/1466-explorer-police-interceptor-map-lights-wont-turn-off-research.md) — 26V726 (33,578 Explorer Police Interceptors, phantom "Global On").
7. **#1490 research file** (drafts/1490-bmw-water-pump-recall-of-recall-720k-park-outside-research.md) — 26V733 (720,796, 2012–2018, park-outside, no remedy, repeat of 24V608).
8. **#1521 research file** (drafts/1521-acura-zdx-brake-recall-of-recall-26v735-research.md) — 26V735 (14,648, 2024 ZDX only, filed Nov 5).
9. **USA Today, "BMW recall affects more than 720K vehicles," Nov 13, 2026** — 26V733 announcement, ~10 US incidents, letters Dec 25. https://www.usatoday.com/story/cars/recalls/2026/11/13/bmw-recall-thousands-vehicles/92765957007/
10. **Reuters, Nov 10, 2026 (via NHTSA DOT HS 813 875)** — context only, not counted: H1 2026 deaths 16,750, rate 1.02.

## The numbers

### Headline census (campaigns filed Nov 1–12, 2026, touching a 2026-model-year vehicle)

| Campaign | Filed | Make / models | Defect | Vehicles |
|---|---|---|---|---|
| 26V725 | Nov 2 | Ford Bronco (2026) | Driver-side wiper arm nut under-torqued; wipers can detach | 330 |
| 26V726 | Nov 2 | Ford Explorer Police Interceptor (2026–2027) | Phantom "Global On" lights the map lights, cannot turn off (FMVSS 101) | 33,578 |
| 26V729 | Nov 3 | Spencer Rescue (2026) + Initial Attack (2025), Pumper (2024–2025) | Display stops responding / fails to power on; emergency lights and firefighting equipment cannot activate | 5 |
| 26V730 | Nov 3 | Harley-Davidson FLHX/FLTRX family (2026) | ECM reports neutral when the transmission is in gear; bike can lurch forward | 21,643 |
| 26V731 | Nov 4 | BMW i5 eDrive40 / xDrive40 / M60 (2026–2027) + i7 (2027) | High-voltage battery charging software incorrect; electric-shock risk | 286 |
| 26V734 | Nov 5 | Lamar gooseneck trailers (2021–2027) | Spare tire improperly secured; can detach and become a road hazard | 8,407 |
| 26V739 | Nov 9 | Utilimaster Upfit (2017, 2020–2026) | Tire and loading label omits combined weight value (FMVSS 110) | 4,399 |
| 26V745 | Nov 12 | Winnebago Thrive travel trailers (2026) | GVWR/GAWR missing from certification label after alterations (49 CFR 567) | 18 |
| **TOTAL** | | **8 campaigns, 7 makes** | | **68,666** |

### The month around it (all campaigns filed Nov 1–12, 2026, any model year)
- **15 campaigns, 855,544 vehicles** (26V724–26V745; no campaign numbered above 26V745 existed as of Nov 16).
- The 8 census campaigns are **8.0%** of the month's filed vehicles (68,666 / 855,544).
- The 7 November-filed campaigns that do NOT touch a 2026 vehicle: 26V724 (8,650, 2022 Maverick), 26V728 (37,901, 2019–2023 Hyundai), 26V733 (720,796, 2012–2018 BMW), 26V735 (14,648, 2024 Acura ZDX), 26V736 (7, 2020/2024/2027 DTNA), 26V737 (3,894, 2027 DTNA), 26V743 (982, 2027 Kenworth) — **786,878 vehicles, 92.0% of the month**.
- BMW 26V733 alone is **84.3%** of November's filed vehicles (720,796 / 855,544).
- October-filed but November-announced (not in the month's filed count): Honda 26V721 (635,808, filed Oct 29) + GM 26V717 (67,380, filed Oct 29) = **703,188** more vehicles. November's *announced* recall population is roughly 1.56 million; the 2026-model-year share of that is 4.4%.
- Ford carries **49.4%** of the census population (33,908 of 68,666, two campaigns); Harley carries **31.5%** (21,643). The other five campaigns combined are 19.1%.
- Zero park-it advisories, zero park-outside advisories, zero over-the-air remedies among the 8 census campaigns. Two of the 8 are label corrections (26V739, 26V745). The smallest November filing is 5 fire trucks; the largest 2026-touching filing is 33,578 police SUVs.

### Method audit (why the census is 8, not 4)
- The make/model enumeration (81 makes, 6,559 queries) found 4: 26V725, 26V726, 26V730, 26V745.
- The campaign-number sweep found 4 more the enumeration missed: 26V731 (BMW i5 — the API's model key is "i5 edrive40", not "i5"; the enumeration queried "i5" and got nothing), 26V729 (Spencer — a fire-apparatus make never queried), 26V734 (Lamar Trailers — a trailer make never queried), 26V739 (Utilimaster — the API's make key is "utilimaster", not "shyft group").
- Two traps the sweep also settled: 26V719 (Mack) and 26V722 (Autocar) look like November campaigns from their acknowledgment-letter dates (Nov 4, Nov 12) but were both filed October 29, 2026 — correctly excluded. 26V737 (DTNA, 3,894 trucks) is a November filing but 2027-model-year only — correctly excluded from a 2026-model-year census.
- Same scope caveat as the brand censuses: campaign populations are full-campaign totals, not 2026-only slices (e.g., 26V734's 8,407 spans 2021–2027; the 2026 slice is not published). The census counts campaigns that touch a 2026 vehicle, not 2026 vehicles alone.

## What the reader should do
- Own a 2026 Bronco, Explorer Police Interceptor, Harley touring bike, BMW i5, Spencer Rescue, Lamar gooseneck, Utilimaster Upfit, or Winnebago Thrive: check the VIN at nhtsa.gov/recalls. The Bronco fix is a torque check, the Harley fix is a sensor swap, the BMW fix is a software update, the two label recalls are corrected stickers — all free.
- Own a 2012–2018 BMW: the month's real story is yours. 26V733 is a park-outside fire-risk recall with no remedy yet and letters starting December 25. Park it outside, away from buildings, until the fix exists.
- The general lesson: a recall announced in November is usually about a car you bought years ago. November filed 855,544 vehicles and 92% of them were not 2026 models.

## Limitations / counterarguments (must state at full strength)
- The census window is filings, not announcements: a campaign filed October 29 and announced November 10 (Honda 26V721) is an October campaign here. Readers who track announcements will see a different month.
- No campaigns numbered above 26V745 existed as of November 16; filings on November 13–16 would appear under higher numbers and are not in this census. The month is not over.
- Campaign populations are full-campaign totals; the 2026-only slice of mixed-year campaigns (26V734, 26V739, 26V731, 26V726) is not published, so 68,666 overstates the number of 2026 vehicles.
- The enumeration method demonstrably misses campaigns (it found 4 of 8); the sweep caught the misses in the 26V700–26V760 range, but a November filing with a number outside that range (e.g., a late-October number filed in November — impossible, numbers are sequential — or a 26E equipment campaign, excluded by design) would not appear. Equipment campaigns (26E) and tire campaigns are out of scope, consistent with the series.
- The "92% are not 2026 models" framing counts vehicles, not campaigns: by campaign count the split is 8 of 15 (53%) touching a 2026 vehicle. Both numbers are in the article; the vehicle share is the headline because it is what owners experience.
- Zero crashes/injuries is claimed only where the filings state it; several of these Part 573 reports do not state crash/injury counts, and the article does not invent them.
