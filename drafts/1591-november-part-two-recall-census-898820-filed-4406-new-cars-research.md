# Research — #1591: November's Second Half Recalled 898,820 Vehicles. 4,406 of Them Were New Cars.

**Slug:** `1591-november-part-two-recall-census-898820-filed-4406-new-cars`
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundups; 5 appearances in last 40, rotation-appropriate; the part-one census #1528 was Clara Rollover, so the sequel goes to the numbers desk)
**Kicker:** By The Numbers
**Date researched:** 2026-11-26
**Target ship_date:** 2028-11-20 (1 day after #1590's 2028-11-19)

## Story in one line
Eleven recall campaigns were filed November 13–20, 2026 covering 898,820 vehicles, and only six of them touch a 2026-model-year vehicle at all — 4,406 vehicles, 0.49% of the half-month's filed population. One Takata airbag recall of 13-year-old Hondas is 90.2% of everything filed. And the same re-count that produced this half-month census proves the first-half census (#1528) undercounted November 1–12 by 471,509 vehicles: the true first half was 27 campaigns and 1,327,053 vehicles, not 15 and 855,544.

## Kill test
- **Genuinely newsworthy?** YES. Sequel to #1528, the site's first month-slice census, with two things #1528 could not have: the second half of the month's filings, and a correction of the first half. The headline number is a checkable fact nobody has published: 11 campaigns, 898,820 vehicles filed Nov 13–20, 6 touching a 2026 vehicle, 4,406 vehicles, 0.49%.
- **Novel angle on data?** YES. The original contributions: (1) the Nov 13–20 census itself, computed from the NHTSA API (78 makes, ~6,500 queries) plus a campaign-number sweep (26V746–26V766) via AnyRecalls; (2) the corrected Nov 1–12 census — 27 campaigns, 1,327,053 vehicles, 14 campaigns touching 2026, 197,604 vehicles, 14.9% — which reverses #1528's 8.0% headline to 14.9% and its 855,544 total to 1,327,053; (3) the full-month-to-date census through Nov 20: 38 campaigns, 2,225,873 vehicles, 20 touching 2026, 202,010 vehicles, 9.1%; (4) the Takata pair: 26V748 (314,029, Nov 12) + 26V765 (810,592, Nov 19) = 1,124,621 inflators, 50.5% of the whole month; (5) the single-day concentration: Nov 19 alone filed 7 campaigns and 896,048 vehicles, 99.7% of the half-month's total.
- **Duplicate screen (queue + full-content grep, Nov 26, 2026):** No queue entry or story covers "898,820", "4,406", 26V760, 26V766, "part two", or a November second-half census. The only file mentioning 26V760/26V766 is #1528's own research file, which asserted (correctly, as of Nov 16) that no campaign above 26V745 existed. Killed in research, all already covered: Honda Takata 26V765 standalone (#1583); Ram 26V756 standalone (#1547); PACCAR radar 26V744 (#1542); Toyota Takata 26V748 standalone (#1563); Toyota Tundra camshaft 26V750 (#1507, #1586); VW Atlas LATCH 26V732 (#1540, #1577); Ford Transit BCMC 26V727 (#1537); JLR hybrid stall 26V599 (#1352); BMW water pump 26V733 (#1490, #1548); Honda steering 26V721 (#1533); GM EV brake 26V717 (#1387); Explorer airbag burns PE26008 (#1447, #1590); Waymo RQ26006 (#1445, #1461, #1523); Chicco Fit360 PE26009 (#1572); Doona PE26005 (#1589); Intoxalock DP26014 (#1571).
- **Verdict:** PROCEED.

## Primary sources (3+)
1. **NHTSA recalls API, api.nhtsa.gov/recalls/recallsByVehicle** — census conducted Nov 26, 2026. Method: VPIC canonical 2026 model lists per make + Hybrid / Plug-In Hybrid / Electric suffix variants + targeted trims (same corrected-vocabulary method as #1475/#1478/#1480/#1528), 78 makes, ~6,500 queries, 30-worker thread pool; kept 26Vxxx campaigns with ReportReceivedDate Nov 13–26, 2026 (DD/MM/YYYY). Found 3 campaigns directly: 26V760 (dodge/durango), 26V761 (rivian/r1s), 26V766 (genesis/gv80). Runner at drafts/1591-census-run.py; raw results at drafts/1591-november-part-two-recall-census-raw.json; log at drafts/1591-census-run.log. https://www.nhtsa.gov/recalls
2. **Campaign-number sweep, 26V746–26V766** — independent completeness check via AnyRecalls (NHTSA-data mirror), /latest page (100 most recent, NHTSA data as of Nov 25, 2026) plus direct per-campaign pages. The sweep found the other 8 in-window campaigns (26V752, 26V753, 26V755, 26V756, 26V757, 26V758, 26V759, 26V765) and established that no vehicle recall exists under 26V751, 26V754, 26V760 (found by enumeration, not the mirror), 26V762, 26V763, or 26V764 (all 404 on AnyRecalls). Every sweep-found campaign was re-verified against the NHTSA API live this run except 26V759 (Mack API queries return HTTP 400 for every mack model key; verified via AnyRecalls + KnownCarIssues mirror pages instead). https://www.anyrecalls.com/latest
3. **NHTSA recalls API records, 26V752 / 26V753 / 26V755 / 26V756 / 26V757 / 26V758 / 26V760 / 26V761 / 26V765 / 26V766** (verified live Nov 26, 2026) — ReportReceivedDate, component, summary, consequence, remedy, park_it / park_outside / overTheAirUpdate flags quoted in the campaign table below. 26V759 verified via mirrors (see source 2).
4. **KnownCarIssues (NHTSA-data mirror)** — vehicle counts for the two campaigns the mirrors had not yet ingested: 26V760, 15 vehicles, report date Nov 19, 2026; 26V766, 188 vehicles, report date Nov 19, 2026 (NHTSA API says ReportReceivedDate 20/11/2026; one-day discrepancy noted in limitations). Also cross-checked 26V759: 141 vehicles, report date Nov 19, 2026, no park-outside/do-not-drive language. https://knowncarissues.com/recalls/26V760000, https://knowncarissues.com/recalls/26V766000, https://knowncarissues.com/recalls/26V759000
5. **#1528 research file** (drafts/1528-november-2026-recall-census-eight-campaigns-new-cars-barely-touched-research.md) — the first-half census being corrected: 15 campaigns, 855,544 vehicles, 8 touching 2026, 68,666 vehicles, 8.0%; its own stated limitation ("filings on November 13–16 would appear under higher numbers and are not in this census. The month is not over.") is what this piece closes.
6. **#1583 research file** (Honda Takata 26V765, 810,592 cars) and **#1547 research file** (Ram 26V756, 82,843 trucks + 669 Mopar modules) — standalone coverage of the half-month's two big campaigns, reused for defect detail, not re-reported.
7. **#1496 research file** (Rivian recall census, 3 campaigns through Nov 13) — 26V761 is Rivian's fourth 2026 campaign, filed Nov 19, six days after the census closed.

## The numbers

### Headline census (campaigns filed Nov 13–20, 2026, touching a 2026-model-year vehicle)

| Campaign | Filed | Make / models | Defect | Vehicles |
|---|---|---|---|---|
| 26V752 | Nov 13 | Altec AM/AN Series Aerial Device (2025–2026) | Platform stow valve handle assembled without thread-locking compound; can separate, ejecting hot oil | 1,100 |
| 26V753 | Nov 13 | Altec AT Series (2024–2026) | Rear-suspension U-bolt not properly tightened after modification work; rear axle can loosen or detach | 161 |
| 26V755 | Nov 18 | Gillig Low Floor (2023–2026) | EV resolver cable loses connectivity; bus switches from drive to neutral with no warning | 1,323 |
| 26V760 | Nov 19 | Dodge Durango (2026) | Manufactured with an incorrect powertrain; may lose drive power. Remedy: replace the engine and catalytic converters | 15 |
| 26V761 | Nov 19 | Rivian R1S/R1T (2022–2027), R2 (2027) | Tire placard/certification label misstates wheel, tire, and spare configuration (FMVSS 110) | 1,619 |
| 26V766 | Nov 20 | Genesis GV80 (2026) | Front-left upper control arm ball joint may detach from the steering knuckle; loss of vehicle control | 188 |
| **TOTAL** | | **6 campaigns, 4 makes** | | **4,406** |

### The half-month around it (all campaigns filed Nov 13–20, 2026, any model year)
- **11 campaigns, 898,820 vehicles.** No campaign numbered above 26V766 exists in NHTSA data as published through Nov 26, 2026; no filing dated Nov 21–26 had been published by this run.
- The 6 census campaigns are **0.49%** of the half-month's filed vehicles (4,406 / 898,820).
- The 5 half-month campaigns that do NOT touch a 2026 vehicle: 26V756 (82,843, 2022–2024 Ram), 26V757 (83, 2027 BMW convertibles), 26V758 (755, 2027 Volvo trucks), 26V759 (141, 2027 Mack trucks), 26V765 (810,592, 2012–2013 Honda/Acura) — **894,414 vehicles, 99.51% of the half-month**.
- Honda 26V765 alone is **90.2%** of the half-month's filed vehicles (810,592 / 898,820). Ram 26V756 is **9.2%** (82,843). The other nine campaigns combined are **5,385 vehicles, 0.6%**.
- **Nov 19 filed 7 campaigns and 896,048 vehicles — 99.7% of the half-month's total in a single day.** Nov 13 filed 2 campaigns (1,261 vehicles), Nov 18 filed 1 (1,323), Nov 20 filed 1 (188).
- Zero park-it advisories, zero park-outside advisories, zero over-the-air remedies among the 11 campaigns (10 verified in NHTSA API records; 26V759 verified via mirror pages). Three of the 11 are label corrections (26V752 is a valve-kit instruction, 26V761 is a placard/label swap; 26V753 is a torque inspection). The smallest filing is 15 Durangos; the largest 2026-touching filing is 1,619 Rivians.
- The Volvo/Mack pair: 26V758 (755 trucks) + 26V759 (141 trucks) = 896 trucks, same steering-knuckle manufacturing error, same Nov 19 filing date, same inspect-and-replace remedy, same Jan 18, 2027 owner letters. Two makes, one bad knuckle.

### The correction: November 1–12 was undercounted (what #1528 missed)
#1528 ran Nov 16 and counted 15 campaigns / 855,544 vehicles filed Nov 1–12, with 8 touching 2026 (68,666 vehicles, 8.0%). Twelve campaigns filed Nov 2–12 were not yet in the NHTSA data on Nov 16 — NHTSA publishes a recall a few days after the manufacturer reports it — and all twelve are in the data now, each verified live against the NHTSA API this run:

| Campaign | Filed | Make / models | Vehicles | Touches 2026? |
|---|---|---|---|---|
| 26V727 | Nov 2 | Ford Transit (2026) | 60,956 | Yes |
| 26V732 | Nov 4 | Volkswagen Atlas (2027) | 3,914 | No |
| 26V738 | Nov 6 | Altec AA/AM/AN Aerial Device (2025–2026) | 3,083 | Yes |
| 26V740 | Nov 9 | Rosenbauer Commander/Warrior/Avenger (2021–2026) | 937 | Yes |
| 26V741 | Nov 10 | New Flyer XD40/XD35/XD60 (2021–2026) | 1,182 | Yes |
| 26V742 | Nov 11 | Indian Chief / Chief Bobber (2025–2026) | 290 | Yes |
| 26V744 | Nov 11 | PACCAR Kenworth/Peterbilt (2027) | 6,185 | No |
| 26V746 | Nov 12 | Volvo VN/VNL/VNR (2027) | 1,078 | No |
| 26V747 | Nov 12 | Mack Anthem/Pioneer/Pinnacle/Granite/TerraPro/LR (2027) | 978 | No |
| 26V748 | Nov 12 | Toyota/Lexus Takata inflators (2002–2017) | 314,029 | No |
| 26V749 | Nov 12 | Honda S2000 (2004–2005) | 16,387 | No |
| 26V750 | Nov 12 | Toyota Tundra (2022–2023, 2025–2026) | 62,490 | Yes |
| **TOTAL MISSED** | | **12 campaigns** | **471,509** | **6 touch 2026** |

- **Corrected Nov 1–12: 27 campaigns, 1,327,053 vehicles** (855,544 + 471,509). The missed 12 are **35.5%** of the corrected total.
- **Corrected 2026-touching Nov 1–12: 14 campaigns, 197,604 vehicles** (68,666 + 128,938), **14.9%** of the corrected total — not 8.0%. #1528's headline share nearly doubles on the recount.
- Two of the missed twelve were later covered standalone (#1537 for 26V727, #1540/#1577 for 26V732); the other ten were never individually covered. The correction is the recount, not a re-report.

### The full month through Nov 20 (as published Nov 26, 2026)
- **38 campaigns, 2,225,873 vehicles** (27 + 11; 1,327,053 + 898,820).
- **20 campaigns touch a 2026 vehicle, 202,010 vehicles, 9.1%** of the month (197,604 + 4,406).
- **The Takata pair owns the month:** 26V748 (314,029) + 26V765 (810,592) = **1,124,621 inflators, 50.5%** of everything filed in November. Two campaigns, both about propellant degrading in old airbags, are half the month.
- By campaign count, 20 of 38 (52.6%) touch a 2026 vehicle. By vehicles, 9.1%. Both numbers are in the article; the vehicle share is the headline because it is what owners experience.

### Method audit (why the census is 6, not 4, and why the correction is real)
- The make/model enumeration (78 makes, ~6,500 queries, Nov 13–26 window) found 3: 26V760 (Dodge Durango), 26V761 (Rivian), 26V766 (Genesis GV80). It missed 26V752/26V753 because Altec is not in the makes list (same gap as #1528: Spencer, Lamar, Utilimaster were never queried either), and it missed 26V755 because the VPIC lookup for Gillig timed out, so Gillig ran zero queries.
- The campaign-number sweep found the other 3 2026-touching campaigns (26V752, 26V753, 26V755) plus all 5 non-2026 campaigns, and it is the only reason the census is 6 and not 3. The sweep is also what proved the gap numbers (26V751, 26V754, 26V762–26V764) hold no vehicle recall: all 404 on AnyRecalls.
- The enumeration earned its keep the other way: it found 26V766 (filed Nov 20), which the AnyRecalls mirror had not yet ingested — its data is as of Nov 25 and its newest campaign is still 26V765. Each method caught what the other missed.
- The enumeration's tail degraded: 175 query failures and 32 VPIC failures (timeouts) across the RV/bus makes in the second half of the run. None of those makes appears in any in-window campaign in the sweep, so the failures do not change the census — but they are why the census leans on the sweep for completeness, and they are recorded here rather than hidden.
- The Mack API quirk: every recalls-API query with make=mack returned HTTP 400 this run (anthem, pinnacle, pioneer; 2026 and 2027). 26V759 is verified through AnyRecalls + KnownCarIssues mirror pages instead, the same fallback #1528 used for its four sweep-found campaigns.
- Date discrepancy, recorded not smoothed: KnownCarIssues lists 26V766's report date as Nov 19, 2026; the NHTSA API's ReportReceivedDate is 20/11/2026. The census uses the API date (Nov 20), consistent with every other campaign in both censuses.
- Same scope caveat as #1528 and the brand censuses: campaign populations are full-campaign totals, not 2026-only slices (e.g., 26V761's 1,619 spans 2022–2027; the 2026 slice is not published). The census counts campaigns that touch a 2026 vehicle, not 2026 vehicles alone.
- The window is filings, not announcements: a campaign filed Nov 12 and announced Nov 24 (Toyota 26V748) is a Nov 12 campaign here. Readers who track announcements will see a different month. Filings dated Nov 21–26 had not been published by this run; the month is still not over.

## What the reader should do
- Own a 2026 Durango: 15 trucks got the wrong powertrain. The fix is a new engine and catalytic converters, free. VINs searchable on NHTSA.gov from December 1, 2026; letters December 15.
- Own a 2026 Genesis GV80: 188 cars, ball joint can detach from the steering knuckle. Inspect, tighten, replace hardware, alignment, free. VINs searchable now (since Nov 24); letters January 18, 2027.
- Own a 2022–2027 Rivian: 26V761 is a label recall — the tire placard may list the wrong wheel, tire, and spare. Wrong inflation or wrong replacement tire after reading it. New labels free; letters January 18, 2027.
- Own a 2012–2013 Honda or Acura: the month's real story is yours. 26V765 is 810,592 cars with Takata inflators that can rupture and throw metal fragments. Interim letters December 18, 2026; the final remedy letter comes later. Check the VIN now.
- Own a 2022–2024 Ram 1500 Classic: 26V756, ABS software misreads the brake pedal — brake lights wrong, truck can roll out of Park, stability control and forward collision warning can drop out. Free software update; letters January 14, 2027.
- The general lesson, second verse: a recall filed in November is usually about a car you bought years ago. November filed 2,225,873 vehicles through Nov 20 and 90.9% of them were not 2026 models. The census that told you otherwise last week was undercounted by a third, and the recount is the story.

## Limitations / counterarguments (must state at full strength)
- The census window is filings as published, not filings as filed: a campaign filed Nov 24 and published Nov 28 is invisible to this census. The Nov 21–26 tail is uncounted by construction, and the Nov 13–20 count (898,820) will grow when late publications land — exactly as Nov 1–12 grew 55% (855,544 to 1,327,053) between Nov 16 and Nov 26.
- The correction cuts both ways: if #1528 undercounted by 35.5% because of publication lag, this census undercounts by an unknown amount for the same reason. The 0.49% share and the 9.1% month share are snapshots of published data, not final totals. A reader who treats them as the month's final numbers is making the same mistake #1528 made.
- Campaign populations are full-campaign totals; the 2026-only slice of mixed-year campaigns (26V752, 26V753, 26V755, 26V761) is not published, so 4,406 overstates the number of 2026 vehicles. The 0.49% is an upper bound on the 2026-vehicle share, not the share itself.
- Zero crashes/injuries is claimed only where the filings state it; most of these Part 573 reports do not state crash/injury counts, and the article does not invent them. The Durango's 15 vehicles with the wrong powertrain produced no reported incidents in the filing — that is absence of a report, not proof of safety.
- The "one bad knuckle" Volvo/Mack pairing is circumstantial: both filings describe the same failure (front steering knuckles may crack and break from a manufacturing error) with the same remedy and dates, but neither filing names the knuckle supplier, so a shared supplier is an inference, not a fact in the record.
- The Takata 50.5%-of-the-month figure counts vehicles, not inflators per vehicle or risk: a 2012 Civic with a rupturing passenger inflator and a 2026 GV80 with a detaching ball joint are not comparable hazards, and the month's biggest number is not the month's biggest risk.
