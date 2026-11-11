# Research: #1465 — Six Tire Recalls in 2026, One Failure Mode: The Tire Coming Apart

**Slug:** `1465-tire-recalls-2026-tread-separation-census`
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundups, methodology pieces; last used #1458)
**Kicker:** By The Numbers
**Date researched:** 2026-11-10

## Story in one line
Six tire recalls reached NHTSA's files in 2026, covering 12,643 tires from six brands, and every single one is the same failure: the tire coming apart at speed — tread separation, belt separation, or sidewall separation — on the one component with no backup system and no dashboard warning.

## Kill test: PASS

- **Newsworthy:** YES. Fresh hook is 5 days old: Yokohama recalled 610 Geolandar M/T G003 tires on November 5, 2026. The census framing is new: nobody has tallied the year's tire recalls together.
- **Novel:** YES. Three original findings: (1) the 2026 tire-recall census itself — 6 campaigns, 12,643 tires, one shared failure mode across six manufacturers on three continents; (2) two of the six recalls were caught by NHTSA's own lab testing, not by crashes or complaints — the compliance test caught what the road didn't; (3) the completion-rate trap: Toyo's October 2025 recall (36,919 tires) had only ~11% remedied by April 2026, because tire recalls have no VIN, no registration, and no dealer visit to trigger the fix — owners have to read a code molded into the sidewall.
- **Not a rehash:** Full-content grep, November 10, 2026: zero prior drafts, stories, or queue entries about any tire recall. The site has never covered a tire recall. "tire" greps return only a Honda tire-kit recall (#1247) and a rollover-test file. PROCEED.

## Primary sources (3+)

1. **NHTSA Part 573 Safety Recall Report 26T009 (Kumho Solus TA11)** — via oemdtc.com mirror of the NHTSA filing. 11,169 tires; two samples failed NHTSA's contracted-lab FMVSS 139 testing; cause uncertain; no accidents or injuries known.
2. **NHTSA Part 573 Safety Recall Report 26T006 (VeeRubber Taiga AT)** — static.nhtsa.gov/odi/rcl/2026/RCLRPT-26T006-0997.pdf. 144 tires; FMVSS 139 endurance lab test failure (sidewall + innerliner separation, air loss); cause: contamination (moisture) in the tire building area.
3. **NHTSA recall acknowledgment 26T015 (Otani WM1000)** — static.nhtsa.gov/odi/rcl/2026/RCAK-26T015-5140.pdf. 84 tires; tread may separate; FMVSS 139.
4. **Toyo Tires Safety Recall Feb 2026 FAQ + owner letter (26T005)** — toyotires.com + static.nhtsa.gov/odi/rcl/2026/RCONL-26T005-7657.pdf. Campaign ends October 5, 2026.
5. **NHTSA campaign 26T005 record via oemdtc.com** — 567 units, production July 20-24, 2025, report received February 6, 2026, owner letters mailed April 15, 2026. (Verified via live browser read, 2026-11-10.)
6. **Yokohama Tire recalls page + Modern Tire Dealer (Nov 6, 2026)** — 610 Geolandar M/T G003 tires, Mie plant, May 31-June 6, 2026; improper sidewall compound. https://www.yokohamatire.com/owners-circle/recalls and https://www.moderntiredealer.com/suppliers/news/55417395/yokohama-tire-recalls-sizes-of-geolandar-m-t-g003
7. **The Lyon Firm summary of NHTSA 26T011 (Goodyear Eagle F1 Supersport)** — 69 US tires (247 globally), Hanau plant, Aug 31-Sep 20, 2025; letters by May 15, 2026. https://www.thelyonfirm.com/blog/goodyear-eagle-f1-supersport-tire-recall-tread-separation-lawsuit
8. **NHTSA Recall Quarterly Report 25T018 (Toyo/Nitto, Oct 2025)** — via oemdtc.com. Q1 2026: 2,814 remedied of 36,919 (7.6% in the quarter), 5,106 unreachable; 2025-Q4: 1,240 remedied. Cumulative ~4,054 remedied by April 2026, ~11%.
9. **NHTSA recalls database (canonical)** — https://www.nhtsa.gov/recalls and NHTSA TireWise lookup.

## Verified facts

### The 2026 census (campaigns filed with NHTSA in 2026)

| Campaign | Brand / model | Units | Filed | Failure mode |
|---|---|---|---|---|
| 26T005 | Toyo Open Country A/T III (265/60R20, 265/70R18) | 567 | Feb 6, 2026 | Mixing-process incident; reduced tread rubber strength; tread separation |
| 26T006 | VeeRubber Taiga AT (LT235/85R16) | 144 | Mar 5, 2026 | FMVSS 139 endurance lab failure: sidewall + innerliner separation, air loss; contamination (moisture) in building area |
| 26T009 | Kumho Solus TA11 (225/60R16) | 11,169 | Mar 4, 2026 | Two samples failed NHTSA lab FMVSS 139 testing; tread separation under severe conditions; cause uncertain |
| 26T011 | Goodyear Eagle F1 Supersport (305/30ZR21, 255/35ZR20) | 69 US (247 global) | Apr 2026 | Tread separation / high-speed nonconformity |
| 26T015 | Otani WM1000 (235/65R-16C) | 84 | Oct 28, 2026 | Tread may separate; FMVSS 139 |
| (no no. cited) | Yokohama Geolandar M/T G003 (LT245/75R16, LT285/70R17) | 610 | Nov 5, 2026 | Improper sidewall compound; carcass-ply separation, air leakage, rapid air loss |

- **Total: 12,643 tires.** Kumho alone is 11,169, or 88.3% of the year's recalled tires.
- **One failure mode:** all six are tread, belt, or sidewall separation — the tire coming apart. All six cite FMVSS 139 (New Pneumatic Radial Tires for Light Vehicles) or tread-separation risk. No other tire failure mode appears in the 2026 file.
- **Geography:** six manufacturers, plants in South Korea (Kumho, Gwangju), Japan (Yokohama, Mie), Germany (Goodyear, Hanau), Thailand (VeeRubber), plus Otani (Foreign Tire Sales). The defect is not a country problem; it is a process problem (mixing, contamination, compound, curing).
- **Counts are small by design:** tire recalls name specific production weeks (Toyo: one 5-day window, July 20-24, 2025; Yokohama: one week, May 31-June 6, 2026; Goodyear: 3 weeks, Aug 31-Sep 20, 2025). The recall is a scalpel, not a net.

### How two of them were caught

- **Kumho 26T009:** NHTSA's contracted lab tested two Solus TA11 samples; both were potentially noncompliant with FMVSS 139. Kumho states the precise reason the two tires failed "remains uncertain" and it knows of no accidents or injuries. The compliance test caught it; the road did not.
- **VeeRubber 26T006:** a random market sample failed the FMVSS 139 endurance test in January 2026 (NHTSA notified the company January 14). One tire from a shop shelf. The recall exists because a lab bought a tire.

### Why tire recalls barely get fixed

- **Toyo/Nitto 25T018 (Oct 2025, 36,919 tires):** by April 2026, only ~4,054 tires remedied (~11%); 5,106 owners unreachable in Q1 2026 alone. Compare: vehicle recalls average far higher completion because the VIN ties the recall to a registered owner and a dealer visit.
- **Tires have no VIN.** There is no registration database for tires. The owner must read the DOT Tire Identification Number (TIN) molded into the sidewall — plant code, size code, and the last four digits (week + year of manufacture) — and check it against the recall list at nhtsa.gov or the USTMA database (recallinfo.ustires.org). Second owners, used-tire buyers, and spare tires are effectively invisible to the system.
- **Toyo's own FAQ tells owners to check the spare.** The spare is the tire nobody checks.

### Context (not the story, but the scale)

- The most famous tread-separation recall in the file: Goodyear G159 motorhome tires, 173,237 units (22T009, 2022). The 2026 census (12,643) is 7% of that one recall. The failure mode has not changed in 25 years; the counts have shrunk because the defect is now caught in weeks, not years.
- Toyo's October 2025 recall (25T018, 36,919 tires, contamination in the belt process) is the immediate predecessor: same failure mode, same company family, one year earlier. Its remedy program ran through June 20, 2026.

## Original contribution (required)

1. **The 2026 tire-recall census:** six campaigns, 12,643 tires, one failure mode. Nobody has published the year's tire recalls as a single file. The table is the article's spine.
2. **The lab-caught finding:** two of the six recalls (Kumho, VeeRubber) exist only because NHTSA's lab tested random tires. The compliance system, not the crash data, found them — and in both cases the manufacturer could not name the cause.
3. **The completion-rate math:** ~11% remedied for Toyo/Nitto 25T018 by April 2026, from NHTSA's own quarterly report. Tire recalls don't get fixed because the system has no way to find the tires.
4. **The TIN how-to:** the actionable core — where the DOT code lives, what the last four digits mean, and the two lookup tools (NHTSA TireWise, USTMA). Plus: check the spare.

## Limitations (required)

- **Census completeness:** the six campaigns were verified against Part 573 records, NHTSA acknowledgment letters, and manufacturer notices. The NHTSA flat-file download (RCL.txt) was unreachable from this VM during research, so completeness rests on the 26T-series search (26T001-26T016 checked; no additional 2026 tire campaigns surfaced). A small-volume tire recall filed late in 2026 could exist outside this count; the total should be read as "verified 2026 filings," not an audited NHTSA total.
- **Yokohama campaign number:** Yokohama's own recalls page and Modern Tire Dealer confirm the recall, the count (610), and the dates, but neither publishes an NHTSA campaign number. The article will not invent one.
- **No crash counts:** none of the six 2026 campaigns reports a crash, injury, or death tied to the defect. The risk is stated as tread separation leading to loss of control, not as a body count. Do not manufacture one.
- **Defect-rate language varies:** Kumho estimates no defect percentage; Goodyear's 69 US tires are the entire population. Do not apply one campaign's defect rate to another.
- **FARS cannot see this:** FARS tracks fatal crashes by vehicle, not by tire brand. A tire-failure fatality would appear as a vehicle crash, so the data cannot say how many deaths involve a separating tire. The article must not claim a death toll.
- **Toyo 26T005 remedy window:** the campaign expired October 5, 2026, per Toyo's FAQ. Owners reading this after that date should still call Toyo (800-442-8696); the article must say the deadline has passed, not imply it is open.

## Strongest counterargument (required)

The counts are trivial. 12,643 tires against roughly 300 million tires on American roads is a rounding error, and zero crashes are tied to any of the six recalls. A skeptic can fairly say this is a quality-control footnote, not a safety story — and that the small counts prove the system works: production-week precision, lab testing, and recalls before anyone gets hurt. That reading is partly right, and the article should say so: the small numbers ARE the good news. The story is not that 12,643 tires might fail; it is that the only reason anyone would ever know is a code molded into rubber that almost nobody reads, and that the fix rate for the one big recent tire recall is 11%. The risk is small; the blindness is total.

## Actionable insights (required)

- **Read your sidewall now.** Find "DOT" on the tire's sidewall, followed by a code. The last four digits are the birth date: first two = week, last two = year (e.g., 2925 = week 29 of 2025). Match the full TIN against the recall list.
- **Check all five tires, including the spare.** Toyo's recall notice says so explicitly.
- **Two lookups:** NHTSA's TireWise tool at nhtsa.gov (enter the DOT number) and the USTMA database at recallinfo.ustires.org (search by TIN).
- **If it matches:** the replacement is free, including mounting and balancing (Yokohama states this explicitly; all six campaigns offer free replacement). Call the manufacturer's customer service line in the table — do not wait for a letter, because tire recalls may never reach a second owner by mail.
- **Warning signs while driving:** localized tread wear, vibration, noise, or bulging in the tread area (Kumho's own Part 573 lists these). A bulge is a tire telling you it is coming apart; do not drive on it.
- **If you bought used tires:** ask the seller for the DOT codes before paying. There is no VIN check for a used tire.

## Sources & references (for the article)

1. NHTSA, Part 573 Safety Recall Report 26T009 (Kumho Solus TA11), March 4, 2026. https://www.nhtsa.gov/recalls
2. NHTSA, Part 573 Safety Recall Report 26T006 (VeeRubber Taiga AT), March 5, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26T006-0997.pdf
3. NHTSA, Recall Acknowledgment 26T015 (Otani WM1000), October 28, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26T015-5140.pdf
4. Toyo Tire U.S.A., Safety Recall Campaign FAQ, NHTSA 26T005, February 2026. https://www.toyotires.com/media/h2hfon3t/toyo-tires-safety-recall-feb-2026-faqs.pdf
5. Yokohama Tire Corporation, "Yokohama Tire Announces Voluntary Recall of 610 Light Truck Tires," November 5, 2026. https://www.yokohamatire.com/owners-circle/recalls
6. Modern Tire Dealer, "Yokohama Tire Recalls Sizes of Geolandar M/T G003," November 6, 2026. https://www.moderntiredealer.com/suppliers/news/55417395/yokohama-tire-recalls-sizes-of-geolandar-m-t-g003
7. The Lyon Firm, "Goodyear Eagle F1 Supersport Tire Recall," April 2026 (NHTSA 26T011). https://www.thelyonfirm.com/blog/goodyear-eagle-f1-supersport-tire-recall-tread-separation-lawsuit
8. NHTSA, Recall Quarterly Report 25T018 (Toyo/Nitto), April 16, 2026.
9. USTMA tire recall database (TIN lookup). https://recallinfo.ustires.org

## Site overlap check (full-content grep, no truncation, 2026-11-10)

- "tire" in drafts/: only #1247 Honda tire-kit recall and the rollover fishhook test (#1236). No tire-recall article exists.
- "kumho", "solus", "geolandar", "yokohama", "otani", "26T005/006/009/011/015", "taiga", "veERubber": zero hits.
- "goodyear": zero hits. "g159": zero hits.
- "tread separation": zero hits.
- "toyo": zero hits outside this research.
- No duplicate. PROCEED.

## Killed in research (duplicates, do not revive)

GM EV brake software 26V717 (#1387); Hyundai airbag ACU 26V728 (#1435); Ford tailgate cable 26S78 (#1297); Paccar fuel-filter hose (#1337); IIHS commercial-vehicle crash avoidance ratings (15+ articles, latest #1452); NHTSA 2025 early fatality estimates (published on site); GHSA pedestrian 2025 (#1374); Cybertruck Top Safety Pick+ (published twice on site); Ford Explorer airbag burns PE26008 (#1447); GM L87 EA26005 (#864, #1025, #1344, #1367); VW ID.4 battery 26V630 (#1105, #1194); Ford/Lincoln IPM neutral shift 26V688 (#1321, #1356); Honda steering 26V721 (#1457); Lincoln Navigator chauffeur seat (#1423); Ford Godzilla DP26011 (#1295, #1326, #1350); Ford F-150 fuel tank 26V578 (#1045); backover/backup camera (published twice on site); Altec double recall (#1161); GM Express/Savana 26V718 recall-of-recall (#1391).
