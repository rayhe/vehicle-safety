# Research: #1501 — Toyota Recalled Its Cars 15 Times. Lexus Recalled 6. One Missing Capacitor Was 90% of It.

**Number:** 1501
**Slug:** 1501-lexus-recall-census-6-one-capacitor-90-percent
**Journalist:** Mia Crumplezone (Safety Engineering Editor; vehicle design analysis, safety tech — the capacitor/software + structural-hardware mix fits her beat)
**Kicker:** The Gap
**Date:** November 14, 2026

## Angle (1-2 sentences)

Toyota filed 15 recall campaigns for its 2026 models. Its luxury arm filed 6. I ran the corrected-vocabulary census the site built for Toyota and Honda (#1475, #1476) across Lexus's 11 canonical 2026 models and found **Lexus filed 6 campaigns touching its 2026 cars — but 144,200 of the 159,849 Lexus vehicles involved (90.2%) come from a single campaign: a missing capacitor in a USB charger that blanks the backup camera**. The count says 6; the vehicle count says one defect did almost all the damage, and the TX — Toyota's newest three-row — is in 4 of the 6.

## Kill test

- **Genuinely newsworthy?** Yes. First Lexus census on the site; completes the Toyota Motor Corp picture (Toyota 15 vs Lexus 6) and adds the 22nd brand to the series. Fresh hooks: the 90% concentration (one campaign, 144,200 cars, a capacitor worth cents), the TX in 4 of 6 campaigns, and the GX550 label quirk — 4,709 of the 8,230 cars in a sticker recall are one Lexus model. The RZ's battery ECU fault is the same RoadEthos loss-of-power pattern the Toyota census found in the bZ and C-HR, now confirmed in the third sibling.
- **Novel on site?** Yes. No prior brand-level Lexus census exists. Individual campaigns were covered as standalones (26V598 steering knuckles as #1163, with the 8-day aging-furnace containment story), but never as a census, never with the Toyota-vs-Lexus comparison, and never with per-model counts or the 90% concentration finding. The original contribution is the 6-count, the per-model table, the 159,849 Lexus-vehicle total, and the concentration analysis — computed, not quoted.
- **Killed angles this run (duplicate screen):** Kia standalone census would rehash #1477 (Kia 4 already counted inside the Hyundai-Kia census). GMC split would recount GM's 15 (#1474/#1500). The Lexus census is the uncovered angle.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model list (11 Lexus light-vehicle models: LS, IS, LX, RX, GX, ES, NX, LC, UX, RZ, TX), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, and Electric suffix variants (44 queries); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1501-lexus-recall-census-raw.json; deduped campaigns at drafts/1501-lexus-recall-census-campaigns.json. **Date-format trap (same as #1476):** ReportReceivedDate comes back as DD/MM/YYYY ("18/02/2026"), not ISO. **API 400 trap (same as #1476):** the API returns HTTP 400 when a make/model/year combination has no recalls at all — "ES", "IS", "LS", "LC", "UX", "GX", "NX Hybrid" all 400. A 400 is an empty result, not a failed query. https://www.nhtsa.gov/recalls
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "lexus", Nov 14, 2026: 11 models.
3. **NHTSA Part 573 Safety Recall Report, 26V094** (Feb 18, 2026): https://static.nhtsa.gov/odi/rcl/2026/RMISC-26V094-2257.pdf — 4,374 Lexus LX600 (2025-2026); 10-speed automatic transmission linear solenoid failure breaks communication between transmission ECU and engine ECU; over-rev, transmission damage, loss of drive, fluid leak/fire risk; defect percentage unknown; 0 field technical reports and 0 warranty claims as of Feb 2, 2026; dealer ECU software update.
4. **NHTSA Part 573 Safety Recall Report, 26V162** (Mar 18, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V162-6517.pdf — 144,200 total, 100% defect estimate: RX350 71,084 (2023-2026), NX350 43,744 (2022-2025), NX250 25,529 (2022-2025), TX350 3,843 (2024-2026). Root cause: in-cabin USB charger lacks a capacitor to mitigate voltage drop; ignition cycled OFF to ON within ~8 seconds drops voltage during camera boot, blank screen in reverse; FMVSS 111 noncompliance. Gas-only models with a specific multimedia system + USB charger. Dealer software update or camera replacement.
5. **NHTSA Part 573 Safety Recall Report, 26V179** (Mar 24, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V179-5005.pdf — 8,230 total, 100% defect estimate; Lexus split 4,723: GX550 4,709, TX350 6, TX500h 1, NX350h 7. System error miscalculated accessory weight; load carrying capacity modification label understates the reduction by more than 1% of added weight; FMVSS 110 noncompliance. Found in an August 2025 internal audit. Dealer label replacement.
6. **NHTSA Part 573 Safety Recall Report, 26V393** (Jun 18, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V393-3335.pdf — 20,991 total, 100% defect estimate: Toyota bZ 11,495, Subaru Solterra 4,757, Lexus RZ 4,739. Denso battery ECU memory fault shuts down the drive system at speed; loss of drive power. Dealer battery ECU software update.
7. **NHTSA Part 573 Safety Recall Report, 26V437** (Jul 8, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V437-7166.pdf — 5,408 total; Lexus TX split 1,449 (TX 1,191, TX Hybrid 212, TX Plug-In Hybrid 46); Grand Highlander 3,959. Bharat Forge Aluminum USA rear axle carriers made with insufficient material strength; can break, sudden loss of stability. Only ~5% of the 5,408 actually contain the bad part (~270 vehicles). 0 field technical reports and 0 warranty claims as of Jun 30, 2026. Dealer inspection + sub-assembly replacement. Built Apr 10-27, 2026.
8. **#1163 research file** (drafts/1163-toyota-lexus-steering-knuckle-aging-furnace-recall-research.md) — 26V598 detail: 617 total, all 2026 MY: 196 Lexus RX350, 127 Grand Highlander Hybrid, 126 Grand Highlander, 83 Lexus RX350h, 61 Lexus TX350, 23 Lexus TX500h, 1 Lexus RX500h. Forged-aluminum front steering knuckles shipped without the aging-furnace heat treatment; 8-day production window (Jun 18-26, 2026), caught by the supplier's own quality audit; 0 warranty claims, 0 field reports as of Sep 9. Lexus portion: 364.
9. **#1475 research file** (drafts/1475-toyota-recall-census-15-corrected-count-research.md) — the Toyota baseline (15) and the corrected-vocabulary method; also independently lists 26V179, 26V393, 26V437, 26V598 as Toyota-counted campaigns, cross-validating all four.
10. **AutoEvolution, "Toyota's Lexus Brand Recalls NX, RX, and TX for Rearview Camera Image Display Issue"** (Mar 2026): https://www.autoevolution.com/news/toyota-s-lexus-brand-recalls-nx-rx-and-tx-for-rearview-camera-image-display-issue-267621.html — independent confirmation of the 144,200 count and the missing-capacitor root cause (Panasonic camera assemblies, six part numbers).
11. **CarBuzz, "Toyota Recalls 5,408 SUVs To Find The 270 With Bad Rear Axles"** (Jul 24, 2026): https://www.carscoops.com/2026/07/toyota-lexus-axle-recall/ — independent confirmation of the 5,408 / 5% / ~270 arithmetic for 26V437.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Lexus** | **6** | 11 | 6 |
| Toyota (for comparison) | 15 | — | — |

### The 6 Lexus campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V094 | Feb 18 | Transmission ECU / solenoid | LX600 10-speed automatic: solenoid failure breaks ECU-to-ECU communication, over-rev, transmission damage, loss of drive + fluid leak/fire risk. 4,374 vehicles, all Lexus. 0 claims. Dealer software fix. |
| 26V162 | Mar 18 | Backup camera (FMVSS 111) | Missing capacitor in USB charger; voltage drop on fast ignition cycle blanks the rearview image in reverse. 144,200 vehicles, all Lexus (RX350 71,084; NX350 43,744; NX250 25,529; TX350 3,843). 100% defect estimate. Dealer software update or camera replacement. |
| 26V179 | Mar 24 | Load-capacity label (FMVSS 110) | System error miscalculated accessory weight; label understates the reduction. 8,230 total; Lexus 4,723 (GX550 4,709, TX350 6, TX500h 1, NX350h 7). Dealer label replacement. |
| 26V393 | Jun 18 | Battery ECU / propulsion | Denso battery ECU memory fault kills drive power at speed. 20,991 total; Lexus RZ 4,739 (bZ 11,495, Solterra 4,757). 100% defect estimate. Dealer software fix. |
| 26V437 | Jul 8 | Rear axle carrier | Bharat Forge carriers with insufficient material strength can break; sudden loss of stability. 5,408 total; Lexus TX 1,449. Only ~5% actually defective (~270). 0 claims. Dealer inspection + replacement. |
| 26V598 | Sep 17 | Steering knuckles | Forged-aluminum knuckles shipped without aging-furnace heat treatment; can crack and break, loss of steering. 617 total; Lexus 364. 8-day window, supplier audit caught it. 0 claims. Dealer inspection + replacement. |

### Campaign-unit totals

- **Campaign totals summed: 183,820** (4,374 + 144,200 + 8,230 + 20,991 + 5,408 + 617). This counts every vehicle in each campaign across all model years and both brands.
- **Lexus vehicles only: 159,849** (4,374 + 144,200 + 4,723 + 4,739 + 1,449 + 364).
- **Concentration: 26V162 alone is 144,200 of 159,849 Lexus vehicles — 90.2%.** One campaign, one missing capacitor, nine-tenths of the brand's recalled cars.
- **Smallest-to-largest ratio: 617 to 144,200**, a 234x spread. (Toyota's was wider; the census series' widest remains Chevrolet's 51,085x per #1500.)

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

| Model | Campaigns |
|---|---|
| TX / TX Hybrid / TX Plug-In Hybrid | 4 (26V162, 26V179, 26V437, 26V598) |
| RX / RX Hybrid | 2 (26V162, 26V598) |
| NX / NX Hybrid | 2 (26V162, 26V179) |
| GX | 1 (26V179) |
| LX | 1 (26V094) |
| RZ | 1 (26V393) |
| ES, IS, LC, UX, LS | 0 |

The TX is in 4 of 6 campaigns — every kind of defect the brand filed this year touched the three-row: software (camera), paperwork (label), structure (axle), steering (knuckles). The RX is second at 2. Five of eleven nameplates had zero 2026-filed campaigns touching a 2026-MY vehicle, including the ES and LS sedans.

### Component mix (6 distinct campaigns)

Software/electrical control units 3 (26V094 transmission ECU, 26V162 camera, 26V393 battery ECU — all dealer software remedies), structural hardware 2 (26V437 axle carriers, 26V598 knuckles — both forged-aluminum supplier escapes, both caught with 0 field claims), labels 1 (26V179). **0 of 6 flagged overTheAirUpdate=true in the API** — same 0-for-15 as Toyota, 0-for-40 as Ford — even though all three software fixes are software. The flag undercounts software remedies, same as in every prior census.

### Timing

February: 1. March: 2. June: 1. July: 1. September: 1. October: 0. November: 0 (yet).

### The Toyota comparison

| Brand | 2026 campaigns | Campaign-units | Largest single campaign |
|---|---|---|---|
| Toyota | 15 | not totaled in #1475 | — |
| **Lexus** | **6** | **183,820** | **26V162, 144,200** |

Toyota filed 2.5x as many campaigns. Lexus's campaign-unit total (183,820) is dominated by its single biggest campaign (26V162, 144,200); Toyota's largest single campaign is bigger still (26V690, 228,367 Siennas, per #1475), so the concentration finding is a Lexus story, not a parent-company ranking. Campaign counts rank manufacturers; vehicle counts rank defects. Both tables are in the article.

### Updated census-series table (2026 campaigns, corrected-vocabulary method unless noted)

Ford 40, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Chevrolet 13 (of GM's 15), Volvo 12, Mercedes 8, JLR 7, Nissan 7, BMW 7, **Lexus 6**, Lucid 5, Subaru 5, Honda 4, Kia 4, Tesla 4, Genesis 3, Rivian 3, VW 4, Audi 1, Mazda 0, Porsche 0. Lexus slots between BMW/Nissan (7) and Lucid/Subaru (5).

### The shared-defect findings

Four of the six campaigns are shared with Toyota's lineup — they are the same defect wearing two badges, and all four were already counted in the Toyota census (#1475): 26V179 (labels), 26V393 (battery ECU), 26V437 (axle), 26V598 (knuckles). The two Lexus-only campaigns are 26V094 (LX transmission) and 26V162 (backup camera). Count distinct Toyota Motor Corp defects once and the parent company has 15 + 2 = 17 distinct 2026 defects across both brands — Lexus added only two defects Toyota didn't already have, and one of them (26V162) is 90% of the brand's recalled cars.

The RoadEthos pattern continues: 26V393 is the third sibling of the battery-ECU loss-of-power family (bZ in June, C-HR in September per #1475, RAV4 PHEV in October) — now the RZ, the same Denso ECU fault in the luxury twin. Three brands, one supplier, one failure mode, all dealer software updates.

## Strongest counterargument

Campaign counts are not severity scores, and the 6-count flatters Lexus more than the reality. Four of the six campaigns are shared Toyota defects, so the "Lexus 6" is really "Toyota 15, of which 4 also touch a Lexus badge" plus two Lexus-only filings. The TX's 4-of-6 is partly an artifact of the TX sharing the Grand Highlander's platform — the axle and knuckle campaigns are Grand Highlander defects that happen to include the TX, not TX defects. Strip the shared campaigns and Lexus's own record is 2 campaigns: a transmission software fix (4,374 cars, 0 claims) and a backup camera (144,200 cars). And the 144,200 is itself inflated as a safety story: the camera only blanks when the ignition is cycled OFF to ON within ~8 seconds — a narrow trigger — and the fix is a software update. By vehicles actually likely to experience the failure, the count overstates the risk the same way every census overstates it.

The counterargument weakens on the two campaigns that are not paperwork and not shared: the knuckles that can crack and kill steering (617 cars, but a steering-loss defect with an 8-day containment window is a manufacturing story worth telling) and the RZ losing drive power at speed (4,739 cars, 100% defect estimate). And the concentration finding survives the counterargument entirely: whether you count campaigns or cars, one missing capacitor is the story of Lexus's 2026.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). Shared Toyota/Lexus campaigns (4 of 6) are stated alongside the headline; the distinct-defect total for Toyota Motor Corp is 17.
- Unit counts are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 2026-MY-only Lexus vehicle total cannot be computed from the filings (26V162's 71,084 RX350s span 2023-2026; 26V179's GX550s span 2024-2025). The 159,849 is Lexus vehicles across all model years in the six campaigns.
- NHTSA API vocabulary gaps remain the central risk: this census queried 11 canonical names plus Hybrid/PHEV/Electric suffix variants (44 queries), but a campaign could still hide under an untested spelling (e.g., "TX 500h" vs "TX Hybrid" — the API returned 26V437 under "TX Hybrid", and the Part 573 model list was cross-checked against every campaign found; the 26V179 Part 573 names TX500h/TX350/NX350h/GX550, all covered by the queries that returned it). The direction of any remaining bias is undercount, same as before.
- Two 2025-filed campaigns also touch 2026-MY Lexus vehicles and are excluded by the method (same as #1475/#1476): 25V744 (RX/TX back-over display, Oct 30, 2025 — the predecessor to 26V162, same FMVSS 111 family) and 25V595 (RX instrument panel may not show speed/warnings at startup). Including them would make the count 8, not 6. The article states the exclusion.
- The 2026 model year is still in progress and late filings will move the count.
- NHTSA's overTheAirUpdate flag undercounts software remedies (all three software fixes are dealer visits per the filings; none flagged OTA).
- Injury/crash counts: the Part 573 reports for 26V094, 26V437, and 26V598 state 0 field technical reports and 0 warranty claims as of their filing dates. 26V162, 26V179, and 26V393 filings do not state injury counts in the summaries reviewed; the article does not claim zero injuries for those three.

## Actionable takeaways

- If you own a 2023-2026 RX350, 2022-2025 NX250/NX350, or 2024-2026 TX350: the backup-camera recall (26V162) is a free dealer software update or camera replacement. The trigger is cycling the ignition OFF to ON within ~8 seconds — if your screen ever goes blank in reverse, don't guess what's behind you; the fix is free and the dealer has it now.
- If you own a 2026 RZ: the battery ECU recall (26V393) is a free dealer software update. A sudden loss of drive power at speed is the failure mode — do not wait for the letter; the fix exists and the defect estimate is 100%.
- If you own a 2026 TX (any powertrain) built April 10-27, 2026: the rear axle recall (26V437) covers 1,449 TXs. Only ~5% actually have the bad carrier, but the dealer inspection is free and the consequence is a sudden loss of stability. Check your VIN at nhtsa.gov/recalls.
- If you own a 2026 RX or TX built June 18-26, 2026: the steering-knuckle recall (26V598) covers 364 Lexus vehicles. A cracked knuckle means loss of steering. The dealer inspection is free.
- If you own a 2025-2026 LX600: the transmission recall (26V094) is a free dealer ECU software update. No claims have been filed, but a failed solenoid can over-rev the transmission and leak fluid.
- If you are shopping a 2026 Lexus: 6 vs Toyota's 15 is the headline, but read it as a shared-platform story, not a brand-quality verdict. The TX carries the count; the ES, IS, LC, UX, and LS carry zero. Shop by model, not by badge — and check any 2026 Lexus VIN against the two 2025-filed campaigns (25V744, 25V595) the census method excludes.
