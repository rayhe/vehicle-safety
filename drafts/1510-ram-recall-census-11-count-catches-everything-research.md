# Research: #1510 — Ram Recalled Its 2026 Trucks 11 Times. The Count Misses Almost Nothing.

**Number:** 1510
**Slug:** 1510-ram-recall-census-11-count-catches-everything
**Journalist:** Axle McScatter (Data Visualization Editor; statistical roundups, methodology pieces — the census is a counting exercise and the story is what the count does and does not catch)
**Kicker:** The Gap
**Date:** November 14, 2026

## Angle (1-2 sentences)

Ram is the second-largest brand inside Stellantis's 27-campaign census (#1479), and this is its brand-level split. I ran the corrected-vocabulary census across Ram's eight canonical 2026 models and confirmed **exactly 11 campaigns** — and unlike Jeep (#1508), whose excluded set held 1.47 million vehicles, Ram's excluded set holds **one campaign covering 16 vehicles across four model lines**. The count says 11. The fine print says the count misses almost nothing: the biggest Ram recall of the year, the 1,271,294-truck seat-belt recall (26V495), is counted, not excluded.

## Kill test

- **Genuinely newsworthy?** Yes. First Ram brand-level census on the site; completes the Stellantis split the series has been running (Jeep #1508, GMC #1505, Chevrolet #1500, Acura #1502). Fresh hooks: the inversion of the Jeep finding (excluded 16 vehicles vs counted 2,401,650 campaign-units, a 150,000-to-1 ratio the other way); the Ram 1500 carries 8 of the 11 campaigns and the Ram 2500 carries 6, while the ProMaster carries zero despite being named in the biggest campaign's own summary; the 2500's ESC recall was filed twice because the first scope missed 1,724 trucks (+26%); the smallest campaign covers exactly five trucks; and the 1500's electrical cluster (instrument panel, headlamps, radio/camera) is four campaigns on one truck's wiring.
- **Novel on site?** Yes. No prior brand-level Ram census exists. Individual campaigns were covered standalone (26V531/26V560/26V623 in #1409, 26V622 in #1120, 26V651 in #1262/#1343, 26V495 in the July seat-belt coverage), but never as a census, never with the counted-vs-excluded arithmetic, and never with the Ram-only vehicle totals. The original contribution is the 11-count (independently reproduced, matches #1479), the 1-campaign excluded set, the 2,401,650 verified counted campaign-unit total, the 150,000-to-1 counted-to-excluded ratio, the per-model table, and the component mix — computed, not quoted.
- **Killed angles this run (duplicate screen):** BMW water-pump recall-of-recall 26V733 (720,796, park-outside) — covered in full as #1490, and already folded into the park-outside census #1506. Honda EPS recall 26V721 (635,808) — #1457, folded into #1502. Ford Explorer Police Interceptor map lights 26V726 — #1466. GM Savana/Express steering-nut recall-of-recall 26V718 — #1391. Ford Maverick Hybrid loose battery cable 26V724 — #1509 (this morning). Chrysler/Dodge splits of Stellantis deferred — Ram goes second as the second-largest Stellantis brand; Chrysler (5) and Dodge (2) follow the same method.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model list for make "ram" is polluted with 84 trailer manufacturers and frame shops, so the query set was filtered to the 8 real Ram light-vehicle models (1500, 2500, 3500, 4500, 5500, ProMaster 1500, ProMaster 2500, ProMaster 3500), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, Electric suffix variants plus targeted trims (1500 REV, 1500 Ramcharger, ProMaster EV, 1500 Classic, ProMaster City) — 37 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Excluded analysis: same models queried at model years 2025, 2024, 2023 (plain names + REV/Ramcharger/EV variants) and 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015 (plain pickup names) for 2026-filed campaigns touching no 2026 Ram. Raw results saved at drafts/1510-ram-recall-census-raw.json; deduped campaigns at drafts/1510-ram-recall-census-campaigns.json; runner at drafts/1510-census-run.py. **Date-format trap (same as #1476/#1501/#1502/#1508):** ReportReceivedDate comes back as DD/MM/YYYY ("02/02/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — a 400 is an empty result, not a failed query. https://www.nhtsa.gov/recalls
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "ram", Nov 14, 2026: 92 names, of which 8 are real Ram light vehicles (1500, 2500, 3500, 4500, 5500, ProMaster 1500, ProMaster 2500, ProMaster 3500); the other 84 are trailer manufacturers, frame shops, and custom builders sharing the "ram" make string.
3. **NHTSA recall bulletin, 26V495** (FCA 67D) via Reuters, Jul 31, 2026: https://www.reuters.com/world/stellantis-recall-15-million-ram-1500-pickup-trucks-over-seat-belt-issue-2026-07-31/ — 1,271,294 US vehicles (2019-2026 Ram 1500, built Feb 17, 2018-Apr 27, 2026); 1.5M worldwide (156,138 Canada; 15,088 Mexico; ~75,000 elsewhere); second-row center and driver-side seat belt buckle anchors may not have been properly attached to the body structure; FMVSS 210; 0.1% defect estimate; one potentially related injury, no fatalities; Transport Canada flagged the concern Jan 20, 2026; FCA Vehicle Regulations Committee determined noncompliance Jul 23, 2026; Part 573 filed Jul 30, 2026. TestMiles corroboration (Part 573 reading): https://testmiles.com/ram-1500-recall-check-the-back-seat-before-you-buy/
4. **NHTSA recall bulletin, 26V531** (FCA 78D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V531-1267.pdf — 844,027 US vehicles built with the suspect Uconnect5 R1 High radio software; 100% defect estimate; rearview camera image may fail to display; FMVSS 111; owner letters Sep 1-25, 2026. Ram per-model split (filing, via AutoEvolution per #1479): Ram 1500 211,114; Ram 2500 108,804; ProMaster EV 3 — **Ram total 319,921**.
5. **#1409 research file** (drafts/1409-stellantis-backup-camera-recalled-twice-research.md) — the Nov 6 standalone on 26V531 + 26V560 + 26V623: 26V531 is 844,027 US (848,511 announced; 954,885 worldwide); 26V560 is 239,131 Ram 1500s (2025-2026) for the same camera defect, five weeks later; combined 1,083,158 US vehicles with cameras that can go dark; Ram 1500 largest in both; Harman Becker radio software; FMVSS 111; backover crashes kill ~210 people and injure ~15,000 a year (NHTSA estimate).
6. **NHTSA recall bulletin, 26V059** (FCA 03D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V059-1857.pdf — 456,287 vehicles; trailer tow module lacks electrical-overstress protection; trailer lights and brakes may fail with no warning; owner letters from Mar 24, 2026. Ram share: Ram 1500 312,365 (per #1479); Jeep share 378 (Wagoneer S 321 + Cherokee 57, per #1508); **Ram total 455,909** (456,287 minus the 378 Jeeps). 100% defect estimate.
7. **FCA dealer safety recall bulletin, 26V225** (FCA 35D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V225-6041.pdf — 65,348 vehicles (2025-2026 Ram 1500/2500/3500/4500/5500 with the 3.5-inch instrument panel cluster); IPC software may leave the cluster inoperative at startup and while driving, blanking BRAKE, ESC, and TPMS warning lights and the gear indicator; FMVSS 108/138/208; remedy is an IPC software reprogram; remedy available for 2025s, not yet for 2026s at bulletin time.
8. **FCA dealer safety recall bulletin, 26V421** (FCA 62D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V421-7746.pdf — 12,592 vehicles (2026 Ram 1500 with premium headlamps, sales code LM6, built Oct 29, 2025-Feb 16, 2026); internal harness connector terminals not fully connected; parking lamps and DRLs may flicker or fail; FMVSS 108; headlamp assemblies supplied by Marelli North America; stop sale in effect; interim inspection only, final repair remedy not available at filing; 0 injuries/crashes as of Jul 1, 2026. Mopar Insiders corroboration: https://moparinsiders.com/stellantis-recalls-12592-ram-1500-trucks-for-headlamp-defect/
9. **Autoblog, "Ram 2500 Recall Warns Trucks Could Outrun Their Own Tires"** (May 10, 2026): https://www.autoblog.com/news/ram-2500-recall-warns-trucks-could-outrun-their-own-tires — 26V288: 12,736 Ram 2500s (2023-2026, built Jun 21, 2022-Apr 14, 2026); powertrain control module software may let vehicle speed exceed the tire speed rating; 100% defect estimate; 0 customer assistance records, 0 warranty claims, 0 accidents, 0 injuries; remedy is a PCM reprogram; VINs searchable May 14, 2026.
10. **#1343 research file** (drafts/1343-ram-2500-esc-recall-expansion-26v651-research.md) — 26V651: 8,329 2026 Ram 2500s; steering column control module can kill ESC; expansion of 26V244 (Apr 2026, 6,605 trucks), a 26% undercount in the first scope (1,724 trucks missed).
11. **#1120 research file** (drafts/1120-ram-1500-five-truck-airbag-recall-26v622-research.md) — 26V622: exactly five 2026 Ram 1500 crew cabs (built Feb 28-May 18, 2026); side-airbag connector may not be secured; FMVSS 208/214.
12. **#1479 research file** (drafts/1479-stellantis-recall-census-27-one-radio-bug-research.md) — the Stellantis baseline (Jeep 12, Ram 11, Chrysler 5, Dodge 2, Alfa Romeo 1, Fiat 0; company 27), the 26V531/26V059 totals, and the corrected-vocabulary method.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Ram** | **11** | 8 | 5 |

### The 11 Ram campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V059 | Feb 2 | Trailer tow module | Trailer lights and brakes may fail with no warning; 456,287 vehicles (Ram share 455,909; Ram 1500 312,365). 100% defect estimate. Shared with Jeep. |
| 26V225 | Apr 9 | Instrument cluster | 3.5-inch IPC software may blank the cluster at startup; 65,348 trucks. FMVSS 108/138/208. |
| 26V244 | Apr 16 | ESC | 2026 Ram 2500 steering column module may kill ESC; 6,605 trucks. Superseded in scope by 26V651. |
| 26V288 | May 7 | Powertrain software | Ram 2500 software may let speed exceed tire speed rating; 12,736 trucks. 100% defect estimate. |
| 26V421 | Jul 1 | Headlights | 2026 Ram 1500 premium headlamps; harness terminals not fully connected; 12,592 trucks. Stop sale; final remedy not yet available. |
| **26V495** | **Jul 30** | **Seat belts** | **Second-row buckle anchors may not be attached to the body. 1,271,294 US trucks (1.5M worldwide). 0.1% defect estimate. THE BIG ONE, counted.** |
| **26V531** | **Aug 13** | **Back-over camera** | **Radio software may blank the rearview camera. 844,027 US vehicles; Ram share 319,921 (1500 211,114; 2500 108,804; ProMaster EV 3). 100% defect estimate.** |
| 26V560 | Sep 1 | Back-over camera | Same camera defect, second campaign; 239,131 Ram 1500s (2025-2026). Radio software, OTA or dealer. |
| 26V622 | Sep 29 | Side airbags | Connector may not be secured; exactly 5 trucks. |
| 26V623 | Sep 29 | TPMS | Sensors may fail to detect low pressure; 16,385 trucks. |
| 26V651 | Oct 6 | ESC | Same steering column module as 26V244; expansion to 8,329 trucks (first scope missed 1,724, +26%). |

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

| Model | Campaigns |
|---|---|
| Ram 1500 | 8 (26V059, 26V225, 26V421, 26V495, 26V531, 26V560, 26V622, 26V623) |
| Ram 2500 | 6 (26V059, 26V225, 26V244, 26V288, 26V531, 26V651) |
| Ram 3500 | 2 (26V059, 26V225) |
| Ram 4500 | 2 (26V059, 26V225) |
| Ram 5500 | 2 (26V059, 26V225) |
| ProMaster 1500 / 2500 / 3500 | 0 via API (see Limitations: 26V531's summary covers ProMaster, but every ProMaster query returns zero rows) |

Five of eight nameplates carry at least one campaign. The 1500 carries 8, the 2500 carries 6, and the three heavy chassis cabs share the same two. The ProMaster carries zero — on paper.

### The excluded filings: what the count misses

| Campaign | Date | Component | Ram vehicles | Campaign total |
|---|---|---|---|---|
| 26V327 | May 21 | Rearview camera, 16 vehicles | Ram share of 16 (2024 Ram 1500 + Ram 2500, multi-brand) | 16 (2019/2023 Pacifica, 2024 Ram 1500/2500, 2024-2025 Wrangler) |
| **Excluded Ram total** | | | **at most 16** | |

The excluded set is one campaign and at most sixteen trucks. The supplemental sweep (model years 2015-2022, plain pickup names) found zero additional 2026-filed campaigns touching only older Rams.

### Counted vs excluded, Ram vehicles (campaign-unit totals)

| | Campaigns | Ram vehicles (verified) |
|---|---|---|
| **Counted** | **11** | **at least 2,401,650** (26V059 Ram 455,909 + 26V225 65,348 + 26V288 12,736 + 26V421 12,592 + 26V495 1,271,294 + 26V531 Ram 319,921 + 26V560 239,131 + 26V622 5 + 26V623 16,385 + 26V651 8,329; 26V244's 6,605 counted inside 26V651's expanded 8,329, not added twice) |
| **Excluded** | **1** | **at most 16** |
| **Ratio** | | **counted Rams outnumber excluded Rams by at least 150,000 to 1** on the verified figures |

For every Ram the census misses, it catches at least 150,000. Jeep's census ran the other way (excluded 2.63x counted). Ram is the brand where the method's blind spot is nearly empty — and the biggest Ram recall of the year is inside the count, not outside it.

### Component mix (11 counted)

ESC 2 (26V244 + 26V651, same defect filed twice), Back-over prevention 2 (26V531 + 26V560, same defect filed twice), Exterior lighting 2 (26V059 trailer tow, 26V421 headlamps), Electrical 1 (26V225 instrument cluster), Powertrain 1 (26V288 speed calibration), Seat belts 1 (26V495), Air bags 1 (26V622), TPMS 1 (26V623). **0 of 11 flagged overTheAirUpdate=true** — same 0-for-everything result as every prior census in the series (Ford 0/41, Stellantis 0/27, GM 0/15, Toyota 0/15, Honda 0/4, Jeep 0/12). Note: 26V531's and 26V560's remedies are in fact radio software updates delivered over the air or at the dealer (per the API summaries themselves), so the API flag undercounts OTA remedies; the flag is reported as-is. **0 park-outside flags, 0 do-not-drive flags** in the counted or excluded Ram picture — the one park-outside flag in the Stellantis 2026 picture (26V363, Jeep steering-pump fire) sits on Jeep's side.

### Timing

Counted: Feb 1, Apr 2, May 1, Jul 2, Aug 1, Sep 3, Oct 1. March, June, and November (through Nov 14) produced zero counted filings. The biggest counted recall (26V495, July 30) landed the same month as the headlamp recall; September filed three campaigns in one month, all Ram 1500.

### The 1500's electrical cluster

Four of the 1500's eight campaigns are electrical: the instrument cluster (26V225), the headlamps (26V421), and the radio/camera twice (26V531, 26V560). The Auto Wire counted a fourth wiring fix in the months before 26V421: a December 2025 instrument-panel recall for the same truck, filed outside the 2026 census window. The 2026 Ram 1500's electrical system has now been recalled in four campaigns inside the census and at least one more just outside it. The wiring is the story, not any single campaign.

### The ESC expansion

26V244 (April) covered 6,605 Ram 2500s. 26V651 (October) covers 8,329 of the same trucks for the same steering column control module. The first scope missed 1,724 trucks, a 26% undercount, and the expansion came six months later. Owners cleared under the April recall need to check again; the October filing is the one that counts.

### The five-truck recall

26V622 covers exactly five 2026 Ram 1500 crew cabs, built Feb 28-May 18, 2026. A side-airbag connector may not be secured. Five VINs, out of hundreds of thousands of trucks built. Modern traceability can isolate a defect to five trucks — and the federal system still counts it as a full campaign, same as the 1,271,294-truck seat-belt recall. Campaign counts are not severity scores; this census contains both extremes in the same table.

## Strongest counterargument

Campaign counts are not severity scores, and this census proves it in both directions at once: the headline 11 contains one campaign covering 1,271,294 trucks and another covering five. Counting them equally is absurd on its face, and the counted total (2,401,650 campaign-units) is dominated by a single seat-belt recall (26V495, 1,271,294) whose own defect estimate is 0.1% — about 1,271 trucks actually carry the loose anchor. The 150,000-to-1 ratio compares a fully verified counted total against an excluded total that is a ceiling (at most 16, and the Ram share of 26V327 is a subset of 16, possibly as small as 2), so the ratio is a floor and the true ratio is larger, not smaller. The 2,401,650 figure is a campaign-unit sum, not a count of distinct trucks: a 2026 Ram 1500 can appear in both 26V531 and 26V560 (same camera defect, two campaigns), and every 26V244 truck is inside 26V651's population, so the distinct-truck total is lower — the article states the sum as campaign-units, not trucks. And Ram's 11 partly reflects that it sells five pickup nameplates plus three vans; the per-model numbers (1500: 8, 2500: 6) are the honest comparison against another brand's count, not the company-wide 11.

The counterargument weakens on the structure: the excluded campaigns are not trivia in the Jeep sense, but here they are nearly nonexistent, which is itself the finding. A reader who takes "Ram: 11" as the brand's 2026 safety record is wrong by at most 16 trucks, and the biggest one — the seat-belt recall that covers seven model years and 1.27 million trucks — is inside the count. The counted-vs-excluded distinction is disclosed, not hidden: both numbers are in the article, in a table, with campaign numbers. And the undercount direction on the ProMaster side cuts against the headline, not for it: the ProMaster is named in 26V531's summary and invisible to every query, so the true counted Ram total is higher than 2,401,650.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The counted Ram-vehicle total (2,401,650) is a campaign-unit sum: a truck can appear in two campaigns (26V531 + 26V560 both touch 2026 Ram 1500s), so it is not a distinct-truck total. 26V244's 6,605 trucks are inside 26V651's 8,329 and are counted once. The excluded total (at most 16) is a ceiling: the Ram share of 26V327 is a subset of 16 vehicles across four model lines.
- 26V531's 844,027 vs 848,511 discrepancy is stated: 844,027 is the Part 573 population built with the suspect radio; 848,511 is Stellantis's announced figure. #1409 used the same split. The Ram share (319,921) uses the AutoEvolution per-model split cited in #1479 (1500 211,114; 2500 108,804; ProMaster EV 3).
- 26V059's Ram total (455,909) is computed as the campaign total (456,287) minus the Jeep share (378, per #1508); the filing's per-model Ram 2500/3500/4500/5500 split was not broken out in the sources consulted.
- Unit counts are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 2026-MY-only Ram vehicle total cannot be computed from the filings (26V495's 1,271,294, for example, spans model years 2019-2026).
- NHTSA API vocabulary gaps remain the central risk: this census queried 8 canonical names plus 24 suffix/trim variants (37 queries) for 2026, plus 51 older-year queries for the excluded set, but a campaign could still hide under an untested spelling. The ProMaster hole is confirmed, not hypothetical: 26V531's summary explicitly covers Ram ProMaster and ProMaster EV, yet queries for "promaster", "promaster 1500", "promaster 2500", "promaster 3500", and "promaster ev" return zero 2026 campaigns. Same failure class as the Corsair Hybrid corollary in #1478 (26V688 covers 63 Corsair Hybrids but "corsair hybrid" returns zero rows) and the Super Duty hole in #1473/#1478. Direction of any remaining bias: undercount.
- The 2026 model year is still in progress and late filings will move all counts.
- NHTSA's overTheAirUpdate flag undercounts software remedies: 26V531's and 26V560's fixes are delivered over the air per their own API summaries, yet the flag is false for all 11 counted and the 1 excluded.
- The December 2025 instrument-panel recall for the 2026 Ram 1500 (cited by The Auto Wire as the third of four wiring fixes) is outside the 2026 filing window and is not counted; it is mentioned as context only.

## Actionable takeaways

- If you own a 2019-2026 Ram 1500: check your VIN at nhtsa.gov/recalls for 26V495 now. The second-row seat belt buckle anchors may not be attached to the body. There is no noise, no warning light, no symptom — the anchor either holds in a crash or it does not. The fix is a free dealer inspection and attachment. FCA estimates 0.1% of the trucks carry the defect, but you cannot tell from the driver's seat whether yours is one of the ~1,271.
- If you own a 2026 Ram 2500: check for 26V651 — and know it is an expansion. If your truck was cleared under the April recall (26V244), check again; the first scope missed 1,724 trucks. The steering column control module can kill electronic stability control.
- If you own a 2025-2026 Ram 1500: check for 26V560 (rearview camera, free radio software update, over the air or at the dealer) and 26V531 (same defect, wider population). The camera is federally mandated because backover crashes kill about 210 people a year.
- If you tow with a 2025-2026 Ram: check for 26V059. The trailer tow module can kill your trailer's lights and brakes with no dashboard warning. The fix is a free replacement module. Check the VIN even if the truck has never pulled a trailer.
- If you own a 2026 Ram 1500 with premium headlamps: 26V421 is a stop-sale recall with an interim inspection only — the final repair was not available at filing. If your truck is in dealer inventory, it cannot be sold until inspected. Check your VIN; the suspect window is Oct 29, 2025-Feb 16, 2026.
- If you are shopping a 2026 Ram: the 1500 carries 8 campaigns, the 2500 carries 6, the heavy chassis cabs 2 each. The ProMaster carries zero on paper and one in the fine print. A truck whose electrical system needed four recall campaigns in one year is a reason to check the VIN twice, or to negotiate like you know.
- If you run a recall census of your own: never trust a bare model name in the NHTSA API, never trust a single make to cover a company, and never trust a model year to cover a brand — query the VPIC canonical list, then the hybrid and plug-in variants, then the older model years separately. A 400 is not always a zero, and a count is not always the record.
