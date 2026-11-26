# Research: #1586 — We Re-Ran the Recall Census With the Fixed Method. Ford Didn't Move. Toyota Did.

**Number:** 1586
**Slug:** 1586-ford-gm-recall-recount-toyota-16
**Journalist:** Axle McScatter (Data Visualization Editor; statistical roundups, methodology pieces)
**Kicker:** By The Numbers
**Date:** November 25, 2026

## Angle (1-2 sentences)

#1475 ended with a debt: re-run the Ford and GM recall censuses with the corrected vocabulary that doubled Toyota's count. I ran it. Ford is still 40 and GM is still 15, campaign for campaign identical to November 11, which proves the vocabulary bug only ever bit Toyota. But Toyota moved anyway: a Tundra camshaft recall filed November 12, the day after the corrected census, takes Toyota from 15 to 16 and past GM.

## Kill test

- **Genuinely newsworthy?** Yes. This is the follow-up #1475 explicitly owed, and it produced a new fact rather than a shrug: the recount confirms two counts and overturns a third within 24 hours of publication. The new campaign is a real defect (a camshaft that can snap and stall a 62,490-truck population), not paperwork. The updated four-brand table is the site's current record as of November 25.
- **Novel on site?** Yes. No prior draft covers 26V750. No prior draft re-ran Ford/GM with the corrected vocabulary. The combined 0-of-73 over-the-air finding (all four brands) is new.
- **Original contribution:** the full re-run census below (NHTSA recalls API, November 25, 2026, 81 Ford/GM queries + 43 Toyota/Honda queries), the name-validity check on the 31 model names that 400, the filing-gap analysis, and the corrected four-brand table — computed, not quoted.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted November 25, 2026. Method: VPIC canonical 2026 model lists for Ford, Chevrolet, GMC, Cadillac, Buick, Toyota, Honda, queried make+model+modelYear=2026 plus hybrid/PHEV/EV/trim variants (e.g. "mustang mach e", "camry hybrid", "rav4 plug-in hybrid", "silverado 1500", "blazer ev", "escalade iq"); kept campaigns with ReportReceivedDate in calendar 2026; deduped by NHTSA campaign number. Raw results saved at /tmp/rcl1586/census.json, census_toyota_honda.json, census_out.txt, verify_out.txt. https://www.nhtsa.gov/recalls
2. **#1473 research file** (drafts/1473-ford-recall-census-40-new-model-campaigns-research.md) — the November 11 Ford baseline: 40 campaigns, Explorer 12, Bronco 9, F-150 8.
3. **#1474 research file** (drafts/1474-gm-recall-census-15-new-model-campaigns-research.md) — the November 11 GM baseline: 15 campaigns, Express/Savana 4 each.
4. **#1475 research file** (drafts/1475-toyota-recall-census-15-corrected-count-research.md) — the November 11 corrected Toyota baseline: 15 campaigns, and the explicit follow-up owed: "Ford/GM re-run with corrected vocabulary."
5. **NHTSA recalls API record, campaign 26V750000** — 2022-2023 and 2025-2026 Tundra; one engine camshaft may have been manufactured incorrectly, allowing cracks that can cause the camshaft to snap, possibly leading to an engine stall and loss of drive power; dealers inspect and replace the camshaft free of charge; owner letters from December 28, 2026; Toyota numbers 26TB26 and 26TA26; customer service 1-800-331-4331. Filed November 12, 2026.
6. **RecalledOrNot, "Toyota Tundra Camshaft Recall: Check VIN (26V750)"** (updated November 20, 2026): https://www.recalledornot.com/toyota-tundra-camshaft-recall — 62,490 vehicles; Part 573 report RCLRPT-26V750-5940 and November 19, 2026 acknowledgment; covers gas Tundras only, hybrids with the V35A engine excluded, 2024 model year excluded; affected camshafts installed as original equipment on 2025-2026 trucks or as service parts on 2022-2023 trucks; as of October 30, 2026, Toyota had 31 Field Technical Reports and 60 U.S. warranty claims relating or possibly relating to the condition; notifications by January 11, 2027; Toyota's November 13 U.S. newsroom release describes timing as mid-January 2027; separate Tundra engine campaigns 25V767 and 26V320 (debris/main bearing) are different defects and include 2024 trucks.
7. **ConsumerSun, "Toyota Loss Drive Power Recall (26V-750)"** (checked November 25, 2026): https://consumersun.com/recall/nhtsa-26v750000-toyota-motor-engineering-and-manufacturing-cracks — confirms 62,490 potentially affected, November 12, 2026 filing date, remedy and letter timing.
8. **MotorSafety.org, November 2026 recalls roundup**: https://www.motorsafety.org/2026/11/ — confirms the November filing landscape: Toyota RAV4 PHEV 26V659 (November 24 article, filed October 7), Hyundai Ioniq 9 26V588, BMW 26V733, Jaguar Land Rover 26V599, Rivian 26V597, Ford Ranger 26V605 (filed September 22), Volkswagen Tiguan 26V587. No Ford or GM campaign filed November 12-25 appears in the roundup.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 25, 2026)

| Brand | Sep 3 (#815) | Nov 11 (#1473/#1474/#1475) | Nov 25 (#1586, re-run) |
|---|---|---|---|
| Ford | 25 | 40 | **40** (identical set) |
| GM | — | 15 | **15** (identical set) |
| **Toyota** | 5 | **15** | **16** (+26V750) |
| Honda | 2 | 2 | **2** |

Toyota passes GM by one campaign. Ford's lead over Toyota narrows from 2.7x to 2.5x. Ex-manual/paperwork: GM 14 (26V114 is a missing owner's manual), Toyota 12 (four of its 16 are load-capacity labels), Ford 40 (no lineup-wide paperwork campaign), Honda 2.

### The recount result, brand by brand

- **Ford, 40 campaigns, set identical to #1473.** Same 40 campaign numbers, same per-model table (Explorer 12, Bronco 9, F-150 8, Ranger 7, F-250 Super Duty 6, Bronco Sport 5, Maverick 5, F-350 Super Duty 5, Mustang 4, Expedition 2, Escape 1, Transit 2, Mustang Mach-E 0, Edge 0). New queries added since #1473 (F-450/F-550 Super Duty, Mustang GTD, Expedition MAX, E-Transit, F-150 Lightning, GT) returned no additional campaigns. Ford's last filing remains November 2, 2026 (26V725, 26V726, 26V727, three campaigns in one day).
- **GM, 15 campaigns, set identical to #1474.** Verified campaign-for-campaign against #1474's table. Same per-model table (Express/Savana 4 each; Escalade/Tahoe/Suburban/Yukon 3 each). GM's last filing remains October 29, 2026 (26V717 brakes, 26V718 steering nut, again).
- **Toyota, 16 campaigns.** The 15 from #1475 plus 26V750 (Tundra camshaft, filed November 12, 2026). Tundra is now a three-campaign model in the census (26V179 labels, 26V433 labels, 26V750 camshaft).
- **Honda, 2 campaigns.** 26V332 (air-bag occupant sensor, May 22) and 26V424 (rear suspension, July 2). Unchanged.

### The new campaign: 26V750

| Item | Detail |
|---|---|
| Filed | November 12, 2026 — the day after #1475's corrected census |
| Vehicles | 62,490 Tundras, model years 2022-2023 and 2025-2026, gasoline only |
| Defect | One engine camshaft may have been manufactured incorrectly; cracks can develop and the camshaft can snap |
| Consequence | Engine stall, loss of drive power |
| Excluded | 2024 model year entirely; hybrid Tundras (V35A engine) not involved; affected camshafts were original equipment on 2025-2026 trucks or service parts on 2022-2023 trucks |
| Evidence | 31 Field Technical Reports and 60 U.S. warranty claims as of October 30, 2026 |
| Remedy | Dealers inspect and replace the camshaft as necessary, free of charge |
| Letters | From December 28, 2026; notifications by January 11, 2027 (Toyota newsroom: mid-January 2027) |
| Numbers | NHTSA 26V750; Toyota 26TB26 / 26TA26; Toyota customer service 1-800-331-4331 |

### Toyota's loss-of-power problem is now four campaigns, four causes

26V393 (bZ battery ECU memory fault, June), 26V570 (C-HR regen overcharge, September), 26V659 (RAV4 Plug-in Hybrid motor-generator ECU, October), and now 26V750 (Tundra camshaft, November). Four different root causes, three of them software, one of them a piece of metal that can snap. Same outcome in all four: the vehicle stops. The Tundra is also on its third distinct engine defect pattern in two years: machining debris (25V767), main bearing (26V320), and now camshaft (26V750). The debris and bearing recalls include 2024 trucks; the camshaft recall pointedly does not.

### The silence is normal (filing-gap check)

- Ford: 23 distinct filing dates in 2026; longest gap 28 days; current silence (November 2 to November 25) is 23 days, inside the year's range. No story in the quiet.
- GM: 12 distinct filing dates; longest gap 63 days; current 27-day silence is routine for GM.
- Toyota: 14 distinct filing dates; longest gap 45 days; last filing November 12.

### Over-the-air: 0 of 73

Across all four brands' 2026-model-year campaigns (Ford 40, GM 15, Toyota 16, Honda 2), **zero** carry NHTSA's over-the-air flag. Every software fix in the census is still a dealer visit, including all three of Toyota's software loss-of-power campaigns and the Tundra camshaft inspection.

## Strongest counterargument

A recount that confirms two numbers and moves a third by one is a methodology story, and methodology stories flatter the counter, not the reader. Campaign counts are not severity scores: Toyota's 16th campaign is a camshaft inspection on 62,490 trucks, while Ford's 40th is a wiper-arm nut. Toyota passing GM 16-to-15 is a one-campaign margin on a metric that counts a missing owner's manual (26V114) the same as a steering nut recalled twice. Strip the paperwork and the order flips back: GM 14 real-defect campaigns, Toyota 12. The vocabulary bug's real lesson is narrower than the headline too: it only ever bit Toyota because only Toyota sells hybrid-only nameplates, so the recount's confirmation of Ford and GM was the expected result, not a discovery. And 26V750 is a new filing, not a recount finding; the corrected method found nothing the old method missed for Ford or GM.

The counterargument weakens on the one thing the recount did prove: the corrected method is now verified against three independent baselines on the same day, and the Toyota number it produced on November 11 was already stale within 24 hours. A census is a photograph, and this one expired the morning after it was taken. That is worth saying out loud, because the site published 15 as the corrected number and the correct number today is 16.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The manual/labels campaigns inflate per-model counts; the article states ex-paperwork totals alongside headlines.
- NHTSA API vocabulary gaps: 31 of the 124 make+model queries returned HTTP 400 with an empty-results body. Cross-check: names that return rows for 2024/2025 (Blazer, Corvette, Trax, Suburban, XT4, XT5, XT6, Envista, Edge) confirm genuine zero 2026 campaigns. Names that never return rows in any year (F-250 Super Duty, F-150 Lightning, Silverado, Sierra, Suburban HD, CT4, Bolt) are API vocabulary dead-ends; campaigns touching those models surface through sibling-model queries (26V653 via F-150, 26V606 via Expedition, 26V104 via F-150), and the Ford/GM campaign sets match the November 11 censuses exactly, which bounds the miss risk to campaigns touching only a dead-end model name. The census covers consumer lineups; commercial chassis (F-600, 4500HD/5500XD/6500XD, BrightDrop) are excluded, as in #1473/#1474.
- NHTSA's overTheAirUpdate flag may undercount software remedies not flagged as such.
- 26V750 unit count (62,490) and field-report/warranty-claim counts come from NHTSA filings via secondary reporting (RecalledOrNot, ConsumerSun); the Part 573 report RCLRPT-26V750-5940 is the primary source and is cited.
- Filing dates are NHTSA ReportReceivedDate; a campaign filed late on November 25 could post after this census ran.
