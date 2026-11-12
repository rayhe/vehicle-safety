# Research: #1475 — We Undercounted Toyota's Recalls by Half. The Real Number Is 15.

**Number:** 1475
**Slug:** 1475-toyota-recall-census-15-corrected-count
**Journalist:** Axle McScatter (Data Visualization Editor; statistical roundups, methodology pieces)
**Kicker:** By The Numbers
**Date:** November 11, 2026

## Angle (1-2 sentences)

This site has published Toyota's 2026-model-year recall count twice: 5 in September (#815), 7 this morning (#1473). Both were wrong. I re-ran the census with the full model-name vocabulary and found **15 campaigns** — double the published number — including three loss-of-drive-power software recalls on Toyota's brand-new EVs and a fuel-leak recall on the Land Cruiser whose fix doesn't exist yet.

## Kill test

- **Genuinely newsworthy?** Yes. A correction of our own published data, with a mechanism that generalizes: the NHTSA recalls API silently 400s on hybrid-only model names (Camry, Land Cruiser, Sienna, RAV4), so any census queried by base model name undercounts exactly the electrified models. The corrected count ties Toyota with GM at 15 and collapses Ford's lead from 5.7x to 2.7x. Fresh pegs: 26V659 (RAV4 Plug-in Hybrid, Oct 7, ~31,000 vehicles), 26V673 (Land Cruiser fuel leak, 105,794 vehicles, clamp not ready until December), 26V690 (Sienna seatbacks, 228,367 vehicles).
- **Novel on site?** Yes. No prior Toyota brand-level census exists; #1473/#815 only quoted Toyota's count as a comparison column. No prior draft covers 26V179, 26V393, 26V511, 26V512, 26V570, 26V659, 26V673, or 26V690. The RoadEthos loss-of-power pattern (bZ, C-HR, RAV4 PHEV) has never been covered here.
- **Original contribution:** the corrected 15-campaign census below (NHTSA recalls API, Nov 11, 2026), the vocabulary-gap diagnosis (base-name queries vs VPIC canonical names vs hybrid/PHEV suffixes), per-model counts, component mix, and the three-way comparison reset — computed, not quoted.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 11, 2026. Method: VPIC canonical 2026 Toyota model list (24 models, GetModelsForMakeYear), queried make+model+modelYear=2026 for every canonical name, plus hybrid/PHEV suffix variants (camry hybrid, land cruiser hybrid, sienna hybrid, rav4 hybrid, rav4 plug-in hybrid, grand highlander hybrid, tundra hybrid, prius plug-in hybrid, corolla cross hybrid); kept campaigns with ReportReceivedDate in calendar 2026; deduped by NHTSA campaign number. Raw results saved at /tmp/rcl1475/census.json, census_vpic.json, campaigns.json, campaign_26V659.json. https://www.nhtsa.gov/recalls
2. **#1473 research file** (drafts/1473-ford-recall-census-40-new-model-campaigns-research.md) — the Nov 11 Ford baseline this piece corrects: Ford 40, Toyota 7, Honda 2; the 7 came from base-name queries only.
3. **#1474 research file** (drafts/1474-gm-recall-census-15-new-model-campaigns-research.md) — the Nov 11 GM baseline: GM 15, same method, same day.
4. **#815 research file** (drafts/815-ford-2026-model-year-recall-census-research.md) — the Sep 3, 2026 baseline: Ford 25, Toyota 5, Honda 2.
5. **NHTSA recall acknowledgement letter, 26V673** (Oct 20, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V673-6622.pdf — 105,794 Land Cruiser Hybrids, 2024-2027; fuel tube may disconnect and leak.
6. **NHTSA Part 573 Safety Recall Report, 26V393** (Jun 18, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V393-3335.pdf — 20,991 vehicles total (11,495 bZ); Denso battery ECU memory fault shuts down the drive system at speed; 100% defect share in the involved population.
7. **RoadEthos, "Toyota Keeps Recalling Its Newest Cars for the Same Loss of Power"** (Oct 18, 2026): https://roadethos.com/news/toyota-keeps-recalling-its-newest-cars-for-the-same-loss-of-power — the four-campaign loss-of-power pattern (bZ, C-HR, RAV4 PHEV, plus 2023 RAV4 Prime 23V-041); RAV4 PHEV ~31,000 vehicles, Oct 7.
8. **MotorSafety.org, Toyota recalls** (Oct 27, 2026): https://www.motorsafety.org/category/toyota-recalls/ — 26V570: 8,521 US 2026 C-HR electric SUVs.
9. **Eastward Drive, "105,794 Land Cruisers Need a Fuel-Line Clamp That Isn't Here Yet"** (Oct 24, 2026): https://www.eastwarddrive.com/drive-notes/toyota-land-cruiser-hybrid-fuel-tube-recall-2026 — 23 field reports, 64 US warranty claims as of Oct 6; clamp estimated ready in December; owner letters Nov 29-Dec 13.
10. **NextCarReview, "Car Recalls October 2026"** (updated Oct 29, 2026): https://nextcarreview.com/car-recalls-october-2026/ — 26V690: ~228,367 2022-2026 Sienna Hybrids; 26V673: ~105,794 Land Cruisers; NHTSA API as source.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 11, 2026)

| Brand | Sep 3 (#815) | Nov 11, as published (#1473/#1474) | Nov 11, corrected |
|---|---|---|---|
| Ford | 25 | 40 | 40 |
| GM | — | 15 | 15 |
| **Toyota** | 5 | **7** | **15** |
| Honda | 2 | 2 | 2 |

Ford's new-model campaign count is 2.7x Toyota's (was 5.7x against the wrong 7). GM and Toyota are now tied at 15. Toyota's count doubled in the recount; Ford's and GM's did not move, because their lineups have no hybrid-only nameplate that the base-name query misses — Ford's and GM's 2026 models all return rows under their base names.

### The 15 campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V049 | Jan 28 | Electrical: door switches | Prius: water enters rear door switch, short circuit, unlocked door can open while moving. Expands/replaces 24V274; previously repaired cars need the new remedy. |
| 26V110 | Feb 25 | Headlights | Corolla: missing headlight aim markings, FMVSS 108 noncompliance; headlights replaced. |
| 26V179 | Mar 24 | Labels | Tundra Hybrid / Grand Highlander Hybrid: load capacity label shows wrong added weight, FMVSS 110. |
| 26V282 | May 4 | Labels | 4Runner (Gulf States Toyota): wrong load capacity label, FMVSS 110. |
| 26V393 | Jun 18 | Propulsion: battery ECU | bZ (11,495 US; 20,991 incl. Lexus RZ, Subaru Solterra): Denso battery ECU memory fault shuts down drive system at speed. |
| 26V433 | Jul 7 | Labels | Tundra (Southeast Toyota Distributors): wrong load capacity label on ONE truck, FMVSS 110. |
| 26V437 | Jul 8 | Power train: rear axle | Grand Highlander (+ Lexus TX): rear axle carriers made with insufficient material strength, can break; sudden loss of stability. |
| 26V511 | Aug 6 | Instrument cluster display | Camry Hybrid (2025-2026): display may fail at startup, killing hazard lights, turn signals, seat-belt warning, smart-key reminder; FMVSS 101/108/114/208. Dealer software update. |
| 26V512 | Aug 6 | Electrical: tow converter | bZ Woodland: short circuit in tow converter board disables stability control and leaves brake lights on; FMVSS 126/108. Tow converter replaced. |
| 26V570 | Sep 2 | Propulsion: BEV ECU | C-HR (8,521 US, ~10,000 North America): regen braking overcharges battery at high state of charge; drive system shuts down. Software update. |
| 26V571 | Sep 2 | Labels | 4Runner / RAV4 Hybrid: load capacity label shows wrong added weight, FMVSS 110. |
| 26V598 | Sep 17 | Steering: knuckles | Grand Highlander (+ Lexus TX/RX): front steering knuckles may crack and break; loss of steering control. |
| 26V659 | Oct 7 | Engine ECM software | RAV4 Plug-in Hybrid (~31,000): motor generator ECU error reduces power or shuts down the plug-in hybrid system at higher speeds. Software update; letters from Nov 22. |
| 26V673 | Oct 14 | Fuel system: fuel tube | Land Cruiser Hybrid (105,794, 2024-2027): resin fuel tube can disconnect from metal tube and leak; fire risk. 23 field reports, 64 US warranty claims, no injuries or fires; cause not identified; clamp not ready until December. |
| 26V690 | Oct 20 | Seats: second-row recliner | Sienna Hybrid 7-passenger (228,367, 2022-2026): second-row seatbacks may not stay secured in a crash. SRS software update; letters from Dec 7. |

### Per-model campaign counts (2026 filings; multi-model campaigns count once per model)

| Models | Campaigns |
|---|---|
| Grand Highlander | 3 (26V179, 26V437, 26V598) |
| 4Runner | 2 (26V282, 26V571) |
| Tundra | 2 (26V179 Hybrid, 26V433) |
| RAV4 | 2 (26V571 Hybrid, 26V659 Plug-in Hybrid) |
| Prius, Corolla, Camry Hybrid, Sienna Hybrid, Land Cruiser Hybrid, C-HR, bZ, bZ Woodland | 1 each |
| Tacoma, Sequoia, Highlander, Corolla Cross, GR86, Supra, GR Corolla, Crown, Crown Signia, Mirai, Prius Prime | 0 |

### Component mix (15 distinct campaigns)

Labels 4, Electrical/propulsion control-unit faults 3 (26V393, 26V570, 26V659 — all loss of drive power, all software remedies), Electrical other 3 (26V049 door switch, 26V511 cluster display, 26V512 tow converter), Power train 1, Steering 1, Fuel system 1, Seats 1, Lighting 1. **0 of 15 flagged overTheAirUpdate=true** — same 0-for-40 result as Ford, 0-for-15 as GM. Every software fix in this census is a dealer visit.

### Timing

January: 1. February: 1. March: 1. May: 1. June: 1. July: 2. August: 2. September: 3. October: 3. No filings in April or November (yet).

### How the undercount happened

The NHTSA recalls API returns HTTP 400 for a make+model+modelYear combination with no matching rows, and prior runs treated 400 as zero campaigns. That rule is correct for gas models with no recalls — but it is also what the API returns when the model name is wrong. Toyota's 2026 lineup is full of hybrid-only nameplates whose base names 400 even when campaigns exist under the suffixed name: "camry" 400s, "camry hybrid" returns 26V511; "land cruiser" 400s, "land cruiser hybrid" returns 26V673; "sienna" 400s, "sienna hybrid" returns 26V690; "rav4" 400s, "rav4 hybrid" returns 26V571 and "rav4 plug-in hybrid" returns 26V659. The three brand-new 2026 EVs — C-HR, bZ, bZ Woodland — were never in the old query list at all; the list was built from the 2025 lineup, and all three are 2026 debuts. Six of the eight missed campaigns hide behind the vocabulary gap; the other two (26V393 bZ, 26V570 C-HR) hide behind the stale model list. Cross-check: "crown signia" 2025 returns 26V179 but 2026 400s, confirming 26V179's Crown Signia coverage is 2025-only; the census counts 26V179 only for its explicit 2024-2026 Tundra Hybrid and 2025-2026 Grand Highlander Hybrid coverage.

### The loss-of-power trio

Three of the eight newly found campaigns are the same failure in three new cars: a control-unit fault that shuts down propulsion, fixed by a dealer software update, no parts. bZ in June (26V393), C-HR in September (26V570), RAV4 Plug-in Hybrid in October (26V659). RoadEthos counted a fourth: the 2023 RAV4 Prime under 23V-041, the previous-generation car with the same outcome. The redesigned RAV4 — America's best-selling SUV, 479,288 sold in 2025, all-hybrid for 2026 — inherited the failure mode of the car it replaced in its first model year.

### The fuel-leak recall with no fix on the shelf

26V673 is the largest single-vehicle-count campaign in the census by units affected (105,794) and the only one where the remedy part does not exist yet: Toyota filed October 14 without naming a cause, told dealers the same day, and estimates the supplemental clamp will be ready in December. Owner letters run November 29 to December 13. A Land Cruiser owner who smells fuel today is told to wait for a part that is still being made.

## Strongest counterargument

Campaign counts are not severity scores, and the corrected 15 flatters Toyota's critics as much as the 7 flattered its fans. Four of the 15 are wrong stickers: load-capacity labels, two of them filed by regional distributors (Gulf States, Southeast Toyota) for a handful of vehicles — 26V433 covers exactly one truck. Strip the labels and Toyota is at 11 real-defect campaigns, still ahead of GM's 14 ex-manual but the gap narrows to noise. And the recount's headline — "we were wrong" — is a methodology story, not a safety story: the eight missed campaigns were missed by us, not hidden by Toyota; every one of them was in NHTSA's public database the whole time, filed on schedule, with owner letters mailed. Toyota's reporting looks diligent here, not evasive. The count also cannot tell quality from reporting threshold: Ford's 40 partly reflects its November 2024 consent order pushing aggressive early filing, and Toyota's 15 may partly reflect the opposite. Finally, the three loss-of-power campaigns share a failure mode but not a root cause — a Denso battery ECU memory fault, a regen overcharge bug, and a motor-generator ECU error are three different bugs in three different control units, and calling them one pattern overstates the case.

The counterargument weakens on the two campaigns that are not paperwork and not software: the Grand Highlander has three campaigns including a steering knuckle that can crack and break, and the Land Cruiser has a fuel tube that can disconnect and leak with 105,794 vehicles and no clamp until December. Those are hardware, they are new-model-year hardware, and no label-strip removes them.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The labels total (4) is stated alongside the headline (15); the ex-labels total is 11.
- NHTSA API vocabulary gaps remain the central risk: this census queried 24 VPIC canonical names plus 13 suffix variants, but a campaign could still hide under an untested spelling. Mitigation: every 2026-filed campaign found was cross-checked against its summary's model list, and the two largest October campaigns (26V673, 26V690) were confirmed in independent news coverage; the direction of any remaining bias is undercount, same as before.
- Unit counts (105,794 Land Cruiser; 228,367 Sienna; 11,495 bZ; 8,521 C-HR; ~31,000 RAV4 PHEV) are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this.
- Ford/GM/Honda counts are from #1473/#1474's same-day (Nov 11) censuses, which used the same base-name method and may carry the same vocabulary risk for their hybrid-only nameplates (GM's Equinox EV/Blazer EV were queried under trim names; Ford has no hybrid-only 2026 nameplate). A re-run of the Ford and GM censuses with the corrected vocabulary is owed; the article says so.
- The 2026 model year is still in progress and late filings will move all four counts.
- NHTSA's overTheAirUpdate flag may undercount software remedies not flagged as such.

## Actionable takeaways

- If you own a 2026 Toyota: run your VIN at nhtsa.gov/recalls. The Grand Highlander carries three campaigns; the RAV4, 4Runner, and Tundra carry two each. The Land Cruiser fuel-tube fix needs a dealer visit once the clamp ships in December — do not wait for the letter if you smell fuel.
- If you own a 2026 bZ, C-HR, or RAV4 Plug-in Hybrid: the loss-of-drive-power fix is a free dealer software update, no parts, short appointment. No symptom warns you first.
- If you are shopping a first-model-year Toyota EV or redesign: the reputation was built on mature cars. The bZ, C-HR, redesigned RAV4, and Land Cruiser are all recent launches, and nearly everything in this census sits on a new nameplate.
- If you run a recall census of your own: never trust a bare model name in the NHTSA API. Query the VPIC canonical list, then the hybrid and plug-in variants. A 400 is not always a zero.
