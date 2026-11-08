# Research — #1430: The Most-Recalled 2026 Vehicles Are an Explorer and a School Bus

**Slug:** `1430-most-recalled-2026-explorer-school-bus`
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundups, census pieces; beat fit: a leaderboard census built from a fresh NHTSA API pull)
**Kicker:** By The Numbers
**Date researched:** 2026-11-08

## Angle
Count the recalls, not the press releases. Pulling NHTSA's own recalls API on November 7-8, 2026, the most-recalled 2026-model-year passenger vehicle in America is the Ford Explorer, with 14 separate safety campaigns. The runner-up is not a car at all. It is a school bus: the IC Bus CESB, with 13. A vehicle that carries children to school has been recalled 13 times before its first birthday, including twice for the parking brake and once for the service brakes.

## Kill test
- **Newsworthy:** Yes. Fresh data pull (Nov 7-8, 2026), not a rehash of an old filing. The Explorer count moved from 11 (when #1325 was researched) to 14. The school-bus runner-up has never been the frame of a Crash Report piece.
- **Novel angle:** A cross-model leaderboard from NHTSA's own API, with the twist that #2 carries kids. Distinct from #1325 (Explorer-only), #815 (Ford 2026 model-year census, published), #1390 (Q3 recall surge), #821 (rear-camera census).
- **Killed this run:** Ford Maverick camera query RQ26004 (#1311/#1345); Ford 7.3L Godzilla DP26011 (#1295/#1326); F-150 fuel tank 26V578 (eight queue entries: #895/#910/#913/#915/#920/#923/#930/#1045); Cybercab school-zone petition DP26010 (#1145/#1167/#1205/#1315); GM L87 EA26005 (#1025/#1344/#1367); Hyundai ACU 26V728 (#1429, just shipped); GM EV brake 26V717 (#1387); IIHS Oct 31 moderate-overlap wave (#1244/#1408); Sienna 26V690 (#1292/#1313/#1332); Lexus knuckle 26V598 (#1163); Ford tailgate cable 26V689/26S78 (#1297); Lincoln neutral-shift 26V688/26S75 (#1321/#1356); VW steering bolt 26V590 (#953/#1042/#1071/#1091); Honda bottle-cap re-recall 26V663 (#1178); Altec 26V666 (#1161/#1303); VW ID.4 battery (#866/#1105/#1172/#1194); Tesla I-80 FSD crashes (#1225 Fairfield, #1300 Vallejo); NHTSA Tesla door-release denial (#1086); GM eBoost EA26006 (#790/#835/#979/#1050); GMC Sierra grille RQ26003 (eight entries); IIHS taller-vehicle pedestrian geometry (#0 hood-height piece, June NYT/IIHS piece); GHSA pedestrian 2025 (#1374 + published 2025-traffic-deaths piece); Utah .05 BAC (#826/#1323); DST fall-back pedestrian transfer (#1157); hot-car deaths (#955 + published pieces); FARS toxicology extremes — Park Avenue (#868), Corvette (#1007), Tracker (#908), Astro (#1115); FARS who-dies/deaths-per-crash (#993/#1324 + aggressor-vehicles); Tesla safest-carmaker ranking (#1412 correction: time-weighted Tesla ~0.37, Audi #1 at 0.20); Mustang death rate (#1122).

## Facts (verified Nov 8, 2026 via NHTSA Recalls API, api.nhtsa.gov)

1. **Leaderboard (2026 model year, campaigns naming the model, NHTSA API):**
   - Ford Explorer: **14 recalls**
   - IC Bus CESB (school bus): **13 recalls**
   - Ram 1500: **9 recalls**
   - Cross-check: independent NHTSA-data aggregator lists the same top order for 2026 models (Volvo VNL semi truck 17, Explorer 14, IC Bus CESB 13, Grand Design Lineage RV 10, Ram 1500 9) as of Nov 7, 2026. The VNL count could not be independently verified in NHTSA's API under that make/model spelling, so it is excluded from this piece's leaderboard and noted as unverified.
2. **Explorer's 14 campaigns (NHTSA campaign numbers):** 25V730 (windshield), 25V828 (engine), 25V687 (trailer hitch), 26V024 (windshield), 26V121 (headlights), 26V159 (seat belts), 26V202 (defroster/HVAC fan), 26V205 (engine), 26V343 (engine), 26V451 (seats, mid/rear), 26V470 (seats, front power adjust), 26V532 (engine, 2.3L), 26V548 (engine), 26V581 (frontal air bags). **Five of the 14 are engine-related.** Several are multi-year legacy defects (e.g., 26V159 covers 2020-2026 seat belts; 26V451 covers 2020-2027 seats), not 2026 build issues.
3. **IC Bus CESB's 13 campaigns:** 25V176 (headlights), 25V266 (seat belt fasteners), 25V323 (wheelchair lift), 25V522 (parking brake), 25V580 (structure/body), 25V640 (wipers), 25V646 (parking brake, air), 25V703 (transmission clutches/solenoids), 25V783 (labels), 25V879 (wheelchair restraints), 26V111 (service brake hoses/lines), 26V168 (structure/body), 26V460 (structure/body). Two parking-brake campaigns and a service-brake campaign on a school bus.
4. **Ram 1500's 9 campaigns:** 25V826 + 26V225 (instrument cluster), 26V059 (brake lights), 26V421 (headlights), 26V495 (rear seat belt anchorage), 26V531 (backup camera), 26V560 (backup camera software), 26V622 (side air bags), 26V623 (tire pressure monitoring).
5. **Context:** NHTSA's database held 26,804 recalls and 1,599,358 complaints as of Nov 7, 2026. Ford set an all-time record with 153 recalls in 2025 (per prior Crash Report coverage) and was running a record pace in 2026 (#1048). The Explorer's count rose from 11 to 14 between #1325's research and this pull.
6. **What a recall count does and does not mean:** a campaign count is not a danger ranking. One campaign can cover 200,000 vehicles or 6 (GM's Traverse/Acadia seat-weld recall, Oct 31, covered six vehicles). Multi-year campaigns count once here even when the defect predates 2026. A high count can also mean the system is working: defects found, free fix offered.

## Original contribution
First Crash Report leaderboard built by querying NHTSA's recalls API model-by-model for the 2026 model year, with the verified counts (Explorer 14, IC Bus CESB 13, Ram 1500 9) and the system-by-system breakdown of the Explorer's 14 (5 engine-related). The school-bus runner-up framing is new to the site.

## Limitations
- Counts are campaigns naming the model year, not vehicles affected and not confirmed defects on any individual VIN; check your VIN at nhtsa.gov/recalls.
- Multi-year campaigns (e.g., seat belts 2020-2026) inflate a 2026 model's count with older defects.
- The NHTSA API returns campaigns by make/model/year; make/model spelling quirks can hide entries (the Volvo VNL could not be verified and is excluded).
- Recall counts say nothing about completion rates; many recalled vehicles never get fixed.

## Strongest counterargument
Fourteen recalls sounds damning, but most Explorer campaigns are narrow (a subset of a subset) or legacy multi-year defects, and every one of them comes with a free fix. A car with 14 small, fixed recalls may be safer than a car with zero recalls because nobody looked. The count measures scrutiny as much as quality, and Ford's record recall pace partly reflects an automaker actually filing paperwork instead of burying defects.

## Actionable takeaways
- Explorer owners (2020-2026): check your VIN at nhtsa.gov/recalls right now; 14 campaigns means even a brand-new truck can have multiple open items, including engine and air-bag ones.
- School districts running IC Bus CESB fleets: verify the parking-brake and service-brake campaigns are complete before the buses roll; these are not label typos.
- Ram 1500 owners: the backup-camera campaigns (26V531/26V560) are the ones that affect daily driving; a camera that does not display is a failed back-over prevention system, not an inconvenience.
- Everyone: a recall count is a starting point, not a verdict. The VIN lookup settles whether your specific vehicle is included.

## Sources
1. NHTSA Recalls API (api.nhtsa.gov/recalls/recallsByVehicle), queried Nov 8, 2026 for 2026 Ford Explorer (14 campaigns), 2026 IC Bus CESB (13), 2026 Ram 1500 (9). https://api.nhtsa.gov/recalls/recallsByVehicle?make=ford&model=explorer&modelYear=2026 (and equivalent queries for IC Bus CESB and Ram 1500)
2. NHTSA recalls lookup (canonical VIN check): https://www.nhtsa.gov/recalls
3. AnyRecalls, NHTSA-data aggregator, "Most recalled 2026 models" list as of Nov 7, 2026 (26,804 recalls, 1,599,358 complaints in NHTSA data): https://www.anyrecalls.com/
4. NHTSA FARS database (context for the site's fatality-rate methodology): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
