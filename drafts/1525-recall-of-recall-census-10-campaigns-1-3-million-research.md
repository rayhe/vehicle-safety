# Research — #1525: The 2026 Recall-of-Recall Census

**Slug:** `1525-recall-of-recall-census-10-campaigns-1-3-million`
**Journalist:** Axle McScatter (Data Visualization Editor — statistical roundups, "By The Numbers")
**Kicker:** By The Numbers
**Date:** 2026-11-16

## Proposed angle
In 2026, ten distinct NHTSA campaigns re-recalled vehicles that had already been recalled for the same defect, because the first remedy failed, was installed wrong, or was itself defective. Total population: **1,294,050 vehicles**. Two campaigns (BMW water pump, Kia Telluride seat fire) account for 91.5% of it. The census, with a failure-mode taxonomy, is the original contribution: nobody has counted the re-recalls as a class.

## Kill test
- **Genuinely newsworthy?** Yes. 1.29M vehicles told twice that their car is unsafe, in the same calendar year, for the same defect. The BMW case alone (720,796) re-recalls an identical population with identical defect wording and no remedy yet.
- **Novel angle?** Yes. The site has covered each re-recall individually (#916, #1178, #1209, #1294, #1302, #1387, #1391, #1490, #1521, #1522) but never aggregated them. No prior queue/drafts slug contains "recall-of-recall-census" or "re-recall census" (full grep, 2026-11-16).
- **Killed in research (duplicates, do not revive):** Kicks/RAV4 IIHS award (#1244, #1408, #1484, #1278, #1314, #1346); Ford Maverick 26V724 loose 12V cable (#1509); Explorer Police Interceptor map lights 26V726 (#1466); Navigator chauffeur seat 26V691 (#1423); GM 26V718 (#1391, in the census); GM 26V717 (#1387, in the census); Toyota RAV4 PHEV 26V659 (#1166/#1233 — first recall for that defect, NOT a re-recall, excluded); Rivian R2 26V625 (#1087 — second recall, different defect, excluded); Wabash 26V683 (#1370 — third recall in five months but different defects each time, excluded from strict count, noted as context); Jeep 4xe 25V741 (#1349 — third battery-fire recall, 9 fires in already-remedied cars, but filed Oct 2025, outside the 2026 scope; noted as precedent).

## Scope definition (stated in-article)
Strict Type A: a 2026-filed NHTSA campaign (26V/26E) that re-recalls vehicles already recalled for the same defect because the first remedy failed, was performed incorrectly, or was itself defective. Every entry verified in this site's own 2026 research files, each anchored to a NHTSA filing or Part 573 report. This is a census of verified cases, not an exhaustive NHTSA flat-file count; smaller equipment recalls could hide additional cases. That limitation is stated in the article.

## The census table (Type A, 2026-filed)

| # | Campaign | Vehicles | First recall | Failure mode |
|---|---|---|---|---|
| 1 | BMW 26V733 water-pump connector | 720,796 | 24V608 (Aug 2024) | Fix didn't work: identical population, identical defect wording; remedy under development; park outside |
| 2 | Kia Telluride 26V430 seat fire | 462,869 | 24V407 (Jun 2024) | Fix installed wrong: reinforcing bracket frequently installed incorrectly; 7 fires + 11 melted motors in "fixed" cars |
| 3 | GM Ultium brake 26V717 | 67,380 | 24V589 (Aug 2024) | Fix didn't address defect: car built WITH the remedy still failed; remedy covers both conditions |
| 4 | Acura ZDX 26V735 brake pressure | 14,648 | 24V614 (Aug 2024) | Expansion: 3.51x the original 4,174; 77.5% of all ZDXs ever sold |
| 5 | GM Express/Savana 26V718 steering nut | 12,715 | 26V399 (Jun 2026) | Inspections done wrong: 47.9% of June population called back for re-inspection |
| 6 | Honda 26V663 tire-kit nozzle | 4,804 | 26V366 (Jun 2026) | Wrong part shipped as the fix: supplier mixed pre-countermeasure nozzles into remedy stock |
| 7 | BMW R18 26V658 reverse gear | 4,630 | 24V716 (Sep 2024) | Second bite: motorcycles previously recalled under 24V716 |
| 8 | Ford 26E073 replacement ABS modules | 3,376 | — (equipment) | Replacement part was the defect: service modules programmed with wrong software, cannot do ABS |
| 9 | Freightliner 26V583 brake modulator | 2,404 | 22V817 / 23V073 | Wrong part installed as the fix: dealers fitted corrosion-vulnerable valves during the repair |
| 10 | BMW/Mini/Rolls 26V422 brake system | 428 | 24V104 / 24V739 | Remedy not performed per procedures: audit found 428 vehicles; 4 of them Minis |

**Total: 1,294,050 vehicles across 10 campaigns.**
- BMW 26V733 share: 720,796 / 1,294,050 = **55.7%**
- Telluride share: 462,869 / 1,294,050 = **35.8%**
- Top two combined: **91.5%**
- Median campaign: (12,715 + 14,648) / 2 = **13,681** — the mean is meaningless here; the distribution is two giants and eight small ones.

## Failure-mode taxonomy (original contribution)
- **Wrong part shipped as the fix (3 campaigns, 10,584 vehicles):** Freightliner 26V583 (wrong valves), Honda 26V663 (pre-countermeasure nozzles), Ford 26E073 (wrong software in replacement modules). The remedy channel itself delivered the defect.
- **Fix installed incorrectly (3 campaigns, 480,012 vehicles):** Telluride 26V430 (bracket), GM 26V718 (inspections), Mini 26V422 (remedy not per procedures). The dealer network is the failure point.
- **Fix didn't address the defect (4 campaigns, 803,454 vehicles):** BMW 26V733, GM 26V717, Acura ZDX 26V735, BMW R18 26V658. The engineering was wrong, not the execution.

## Notable sub-findings
- **The smallest re-recall is four cars.** Mini's 26V422 population includes exactly 4 Minis (1 Cooper S built on a single day, Mar 26, 2024; 3 Countryman S ALL4). At BMW's 1% defect estimate, the expected number of actually-defective Minis is 0.04. The recall exists because the paperwork could not prove the fix.
- **The pipeline recalled the same recall four times.** Honda 26V663 was covered as #1178, #1216, #1247, and #1274 — four separate articles about one 4,804-car campaign. Even the site that counts re-recalls re-recalled one.
- **The gap that matters most:** BMW 26V733 (720,796 cars, filed Nov 4, 2026) has no remedy yet — owners are told to park outside while BMW invents a second fix for a defect it already "fixed" in 2024. Telluride owners waited 25 months between the failed fix and the replacement recall; 7 seat fires happened in already-repaired cars in that window.
- **Repeat offenders outside the strict count:** Pacifica PHEV 26V362 (17,277; fourth fire recall, different cells each time), Genesis G80 (94,622; second park-outside exile, different component), Kia Seltos Canada (48,070; second salt-fire recall, same defect, new model years, Canada only), Jeep 4xe 25V741 (320,065; third battery-fire recall, filed Oct 2025). These are same-model repeat fires, not same-defect remedy failures; listed separately so the strict count stays honest.

## Counterargument (full strength)
Ten campaigns sounds damning, but the system is mostly working. Seven of the ten were caught by the manufacturers' own audits, warranty reviews, or internal process checks — not by crashes. Zero injuries or deaths are attributed to any of the ten re-recalls' defects in the filings. The two giants (BMW, Telluride) are software/hardware issues with park-outside advisories, not imminent-failure defects. And the count is bounded by what this site verified; NHTSA files roughly 1,000 campaigns a year, so ten re-recalls is a small failure rate for a system that processes millions of repairs. The honest read: the recall system catches its own mistakes at a rate the original defect system does not always match. The scary number is not 1,294,050 — it is the 25-month Telluride gap and the 9 fires in already-fixed Jeeps, the cases where the fix was trusted while it was failing.

## Limitations
- Census is bounded to campaigns verified in this site's 2026 research files; it is not an exhaustive NHTSA flat-file count. Smaller equipment recalls (26E) and non-US campaigns (BMW China DSCI, 218 cars; Kia Seltos Canada, 48,070) are excluded from the strict total and noted separately.
- Population figures are NHTSA "potentially involved" counts, not confirmed-defective counts; manufacturers' own defect estimates are typically ~1%.
- The 110-campaign figure from #1209's census sample is a sample, not a denominator; no re-recall rate is computed against it.
- Jeep 4xe 25V741 (filed Oct 2025) is excluded from the 2026 total despite being the clearest remedy-failure case (9 fires in remedied cars).

## Sources
1. NHTSA recalls API (api.nhtsa.gov) — campaign records for 26V733, 26V430, 26V717, 26V735, 26V718, 26V663, 26V658, 26E073, 26V583, 26V422; live spot-checks this run confirmed 26V658 (report received Oct 7, 2026) and 26V430 (Jul 2, 2026). https://www.nhtsa.gov/recalls
2. NHTSA Part 573 Safety Recall Reports — 26V733 (RCLRPT-26V733), 26V663 (RCLRPT-26V663-7659.pdf), 26V422 (RCLRPT-26V422-8095.pdf), 24V614 (RCLRPT-24V614-7296.PDF). https://static.nhtsa.gov/odi/rcl/2026/
3. Reuters, Nov 13, 2026 — BMW 720,796-vehicle water-pump recall announcement (26V733).
4. This site's verified research files (all in drafts/): 916-freightliner-modulator-recall-of-recall-research.md; 1178-honda-26v663-recall-of-a-recall-research.md; 1209-telluride-seat-fire-second-recall-research.md; 1294-ford-replacement-abs-module-no-abs-research.md; 1302-bmw-r18-reverse-recall-second-time-research.md; 1387-gm-ev-brake-software-recall-26v717-research.md; 1391-gm-express-savana-recall-of-recall-research.md; 1490-bmw-water-pump-recall-of-recall-720k-park-outside-research.md; 1521-acura-zdx-brake-recall-of-recall-26v735-research.md; 1522-mini-recall-census-1-four-cars-third-brake-recall-research.md.
5. NHTSA Part 573 chronology for Jeep 4xe 25V741 (via #1349 research file) — 9 fires in vehicles that received the 24V720 remedy; cited as excluded precedent.
6. Transport Canada recall notices (via #1203 research file) — Kia Seltos 48,070 Canada-only second salt-fire recall; cited as excluded non-US case.
