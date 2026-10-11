# Research: #1131 — Ford's Recall Machine: 146 Campaigns in 2025

**Article #1131** | Journalist: Axle McScatter (Data Visualization Editor) | Kicker: By The Numbers
**Slug:** `1131-ford-recall-machine-146-campaigns`
**Working title:** "Ford Filed 146 Recalls in 2025. The Backup Camera Got Recalled Twice."

## Story in one line
NHTSA's own recall flat file shows Ford Motor Company filed 146 Part-573 vehicle campaigns in 2025 — one every 2.5 days, an all-time record for any automaker, covering 12.9 million potential units — and the single largest defect cluster was the rearview camera, recalled twice in the same year.

## Kill test
- **Genuinely newsworthy?** Yes. Primary DOT data, analyzed Oct 11, 2026: Ford's 146 vehicle campaigns in calendar 2025 is the all-time record in NHTSA's post-2010 flat file (next: GM's 77 in the 2014 ignition-switch year). Ford's own prior year was 62. The number more than doubled.
- **Novel angle?** Yes. The queue has covered ~30 individual Ford recalls but never the aggregate machine. Original findings: (a) the 105-defect/41-compliance split; (b) the backup-camera trilogy — three campaigns, ~4.0M units, and 25V572000 explicitly "expands previous NHTSA recall number 25V270," i.e., the same cameras recalled twice in one year; (c) 10 of 146 campaigns are backup-camera related; (d) only 8 of 146 mention over-the-air remedies despite the software-heavy defect mix; (e) 23 ODI-influenced vs 121 voluntary — Ford files most of these itself.
- **Data legs?** Yes. Every number below was computed from NHTSA's official FLAT_RCL_POST_2010 flat file (downloaded from static.nhtsa.gov Oct 11, 2026), deduplicated to one row per campaign number, max potential-units. Methodology is reproducible: field 16 (RCDATE) in 2025, field 8 MFGNAME = "Ford Motor Company", field 11 RCLTYPECD = V.

## Key facts (all from NHTSA FLAT_RCL_POST_2010, analyzed 2026-10-11)

1. **146 vehicle campaigns numbered 25Vxxx** filed by Ford Motor Company with Part-573 report received in calendar 2025. Potential units affected: **12,914,776**. One campaign every 2.5 days.
2. **105 defect campaigns + 41 FMVSS noncompliance campaigns.** The widely cited ~103 figure in press coverage corresponds to the defect subset; the full filing count is 146.
3. **All-time record** for any automaker in the post-2010 file. Next highest: General Motors 2014 (77 campaigns, 26,561,655 units — the ignition-switch year). Ford's own trajectory: 2021: 53, 2022: 67, 2023: 58, 2024: 62, 2025: 146. 2026 already at 74 through Oct 11 (partial year).
4. **The gap to everyone else:** 2025 vehicle campaigns — Chrysler (FCA US) 41 / 2.69M units; GM 28 / 1.08M; Honda 23 / 1.16M; VW 26 / 1.02M; Toyota 15 / 3.22M. Ford filed 3.5x the campaigns of the next automaker.
5. **The camera trilogy.** Three backup-camera campaigns alone cover ~3.98M units:
   - 25V572000 (1,456,417 units): rearview camera "may display a distorted, inverted, or blank image" — 2015-2019 vehicles. Fix: dealer inspect/replace. **The filing states: "This recall expands previous NHTSA recall number 25V270."** Same cameras, recalled twice in one calendar year.
   - 25V695000 (1,448,655 units): rearview camera "distorted, intermittent, or blank image" — 2015-2020 vehicles.
   - 25V315000 (1,076,138 units): APIM software error "may cause the rearview camera image to delay, freeze, or not display" — 2021-2025 vehicles. Fix: dealer or **over-the-air update**.
   - 10 of the 146 campaigns carry BACK OVER PREVENTION component codes (camera or software).
6. **Other top campaigns:** 25V455000 (850,318 units): low-pressure fuel pump may fail → engine stall. 25V467000 (694,271): fuel injector may crack and leak fuel → fire risk. 25V544000 (499,129): rear brake jounce hose may rupture → brake fluid leak. 25V540000 (355,656): instrument panel cluster "may fail at startup" → OTA update fix.
7. **Initiation split:** 121 MFR (voluntary) / 23 ODI-influenced / 2 OVSC. Ford files the overwhelming majority of these itself — this is a self-reporting machine, not a regulator dragging it to the altar.
8. **Only 8 of 146 campaigns mention over-the-air remedies** (5.5%), even though several of the largest campaigns (25V315000, 25V540000) are software fixes.

## Original contribution
- The 146-campaign record tabulation with the defect/compliance split (105/41), the MFR/ODI/OVSC initiation split (121/23/2), and the year-over-year Ford trajectory (53→67→58→62→146).
- The camera-cluster finding: ~4.0M units across three backup-camera campaigns in one year, with 25V572000 explicitly expanding 25V270 — the same cameras recalled twice in 2025.
- The OTA paradox: software defects dominate the largest campaigns, yet only 8 of 146 fixes mention over-the-air delivery.
- The cross-manufacturer gap table: Ford 146 vs next-best 41 (Chrysler), with units.

## Strongest counterargument
- Campaigns are not unique vehicles: one F-150 can appear in the camera, APIM, fuel-pump, and brake-hose campaigns simultaneously. 146 campaigns ≠ 146 distinct problems per truck.
- "Potential units affected" is the maximum exposed population, not the defect rate — most recalled units are fine.
- Ford's count partly reflects the industry's most aggressive self-reporting culture: 121 of 146 were filed voluntarily, and 23 ODI-influenced suggests the regulator trusts Ford to file. A quieter automaker with the same defects would show fewer campaigns, not fewer problems.
- By units, GM's 2014 (26.5M) was more than double Ford's 2025 (12.9M). The record is for campaign count, not scale of exposure.
- 41 of 146 are FMVSS noncompliance campaigns — paperwork-grade issues (labels, lighting photometry), not things that strand you.

## Limitations
- Counts are Part-573 filings (campaigns), not distinct VINs; no deduplication across campaigns is possible from this file alone.
- "Potential units" is NHTSA's term for maximum exposure, not confirmed defects.
- Flat file covers 2010+; pre-2010 automaker records are not compared.
- Historical Ford counts could be split across MFGNAME variants (minor; 2025 uses a single name).
- 2026 figure (74) is a partial year through Oct 11 and will grow.

## Actionable takeaways
- Ford owners: check your VIN at nhtsa.gov/recalls — recalls now stack on the same vehicle (a 2022 F-250 could sit in the camera, APIM, and fuel-pump campaigns at once). Multiple open recalls on one truck is the norm.
- Turn on OTA auto-updates: 8 of 146 fixes arrive over the air (APIM, instrument cluster). An overnight download beats a dealer visit.
- Used-Ford buyers: a clean VIN recall check matters more than ever — and ask whether software recalls were actually applied, since OTA fixes leave no service-record paper trail at the dealer.

## Duplicate check
Grep of the full 336-item queue for: ford-103, 103-ford, recall-volume, ford-recall-record, ford-most-recalls, recall-machine — **zero hits**. Queue covers individual Ford recalls (#749 trailer module, #1054/#1097 LED headlights, #1128 Ranger capacitor, #914 Transit seatbelt reminder, #932 Bronco airbag burr) but nothing on the 2025 aggregate. #749's 4.3M-trailer campaign is a separate (earlier) campaign, not one of the 25Vxxx set.

## Primary sources (3+)
1. **NHTSA ODI recalls flat file, FLAT_RCL_POST_2010.zip** — https://static.nhtsa.gov/odi/ffdd/rcl/FLAT_RCL_POST_2010.zip — all 146 campaign records, defect summaries, units, initiation codes; downloaded and analyzed 2026-10-11. (primary DOT data)
2. **NHTSA recalls data dictionary, RCL.txt** — https://static.nhtsa.gov/odi/ffdd/rcl/RCL.txt — field definitions (RCDATE field 16, POTAFF field 12, INFLUENCED_BY field 14). (primary)
3. **Individual NHTSA campaign records** (from source 1): 25V572000 (1,456,417 units, "expands previous NHTSA recall number 25V270"), 25V695000 (1,448,655), 25V315000 (1,076,138, OTA fix), 25V455000 (850,318, fuel pump stall), 25V467000 (694,271, injector fire risk), 25V540000 (355,656, IPC OTA fix). (primary)
4. **NHTSA recalls dashboard announcement** — https://www.nhtsa.gov/press-releases/nhtsa-launches-interactive-searchable-recall-dashboard — 50+ years of recall data, daily updates. (primary, context)
