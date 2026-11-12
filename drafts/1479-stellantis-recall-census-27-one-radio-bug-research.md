# Research: #1479 — Stellantis Recalled Its New Cars 27 Times. One Radio Bug Blinded 848,511 of Them.

**Number:** 1479
**Slug:** 1479-stellantis-recall-census-27-one-radio-bug
**Journalist:** Rex Driverton (Senior Crash Correspondent; investigations, paradoxes)
**Kicker:** By The Numbers
**Date:** November 12, 2026

## Angle (1-2 sentences)

The recall-census series has counted six car companies on the corrected-vocabulary method: Ford 41, GM 15, Toyota 15, Hyundai 15, Honda 4, Kia 4. Stellantis was the missing seventh, and it is the messiest count yet — six makes in NHTSA's API (Jeep, Chrysler, Dodge, Ram, Alfa Romeo, Fiat), one campaign that touches four of them at once, and a brand (Dodge) whose entire 2026 lineup fits in a single sentence. The corrected result: **Stellantis 27** — Jeep 12, Ram 11, Chrysler 5, Dodge 2, Alfa Romeo 1, Fiat 0 — and one of those 27, the rearview-camera blackout 26V531, covers **844,027 US vehicles**, more than every other Stellantis campaign combined by an order of magnitude.

## Kill test

- **Genuinely newsworthy?** Yes. First Stellantis-wide census on this site (no prior draft counts the company as a whole); completes the seven-group corrected table (Ford 41, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Honda 4, Kia 4). Fresh pegs: 26V531's 844,027-vehicle camera blackout is the single largest 2026 campaign in the entire series; 26V059's 456,287-vehicle trailer-tow failure is the second largest; the resurrected 2026 Cherokee carries 4 campaigns in its first model year, including an ESC/ABS loss (26V223); and the census's smallest campaign (26V622) covers exactly five trucks.
- **Novel on site?** Yes. No prior Stellantis company-level census exists. Individual campaigns were covered standalone (26V531 in the 848k-mirrors piece, 26V560/26V623 in #1409, 26V561 in #850/#926, 26V622 in #1120, 26V651 in #1262/#1343), but never counted, never compared across the six makes, and never as part of a company total. The original contribution is the 27/12/11/5/2/1/0 census below (NHTSA recalls API, Nov 12, 2026, 469 queries), the ProMaster vocabulary-gap finding, the seven-brand table, per-model counts, component mix, and timing — computed, not quoted.
- **Original contribution:** the corrected 27 census below, the 26V531-is-four-brands finding (one campaign, 15 model lines), the 26V059 trailer-tow finding (456,287 vehicles, 100% defect estimate), the ProMaster invisibility finding (a campaign whose summary explicitly covers ProMaster returns zero rows under every ProMaster spelling), the Cherokee-first-year finding, the 26V622 five-truck precision finding, and the completed seven-brand table.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model lists per make (Jeep 10 names, Chrysler 3, Dodge 5 incl. body-builder junk, Ram 92 incl. trailer-manufacturer junk, Alfa Romeo 3, Fiat 2), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants and targeted trims (Wrangler 4xe, Grand Cherokee 4xe, Cherokee Hybrid, Pacifica Hybrid/PHEV, Charger Daytona, Hornet PHEV, Ram 1500 REV/Ramcharger, ProMaster EV, Tonale PHEV, 500e); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026 (DD/MM/YYYY); deduped by campaign number across all six makes. 469 queries total (Jeep 42, Chrysler 12, Dodge 24, Ram 371, Alfa Romeo 12, Fiat 8). Raw results saved at drafts/1479-stellantis-recall-census-raw.json; runner at drafts/1479-census-run.py. https://www.nhtsa.gov/recalls
2. **NHTSA Part 573 Safety Recall Report / recall bulletin, 26V531** (FCA 78D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V531-1267.pdf — 844,027 US vehicles built with the suspect Uconnect5 R1 High radio software; 100% defect estimate; Ram 1500 largest population (211,114); owner letters Sep 1–25, 2026.
3. **NHTSA recall bulletin, 26V059** (FCA 03D): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V059-1857.pdf — 456,287 vehicles; trailer tow module lacks electrical-overstress protection; trailer lights and brakes may fail with no warning; owner letters from Mar 24, 2026.
4. **#1409 research file** (drafts/1409-stellantis-backup-camera-recalled-twice-research.md) — the Nov 6 standalone on 26V531 + 26V560 + 26V623: 26V531 is 844,027 US (848,511 announced; 954,885 worldwide); 26V560 is 239,131 Ram 1500s (2025–2026) for the same camera defect, five weeks later; combined 1,083,158 US vehicles with cameras that can go dark; Ram 1500 largest in both; Harman Becker radio software; FMVSS 111; backover crashes kill ~210 people and injure ~15,000 a year (NHTSA estimate).
5. **#850 research file** (drafts/850-chrysler-26v561-cracked-capacitor-kills-esc-research.md) — 26V561: 2,017 vehicles (2025–2026 Voyager, Pacifica, 2026 Voyager PHEV); brake pedal position sensor capacitor may be cracked, loss of ESC; FMVSS 126.
6. **#1120 research file** (drafts/1120-ram-1500-five-truck-airbag-recall-26v622-research.md) — 26V622: exactly five 2026 Ram 1500 crew cabs (built Feb 28–May 18, 2026); side-airbag connector may not be secured; FMVSS 208/214.
7. **#1343 research file** (drafts/1343-ram-2500-esc-recall-expansion-26v651-research.md) — 26V651: 8,329 2026 Ram 2500s; steering column control module can kill ESC; expansion of 26V244 (Apr 2026, 6,605 trucks), a 26% undercount in the first scope.
8. **#1478 research file** (drafts/1478-ford-recall-census-41-lincoln-10-corrected-count-research.md) — the corrected-vocabulary method, the Ford 41 / Lincoln 10 / GM 15 baselines, and the six-brand table this piece extends to seven.
9. **#1475 / #1476 / #1477 research files** — Toyota 15, Honda 4, Hyundai 15, Kia 4 baselines completing the table.
10. **AutoEvolution, "Multiple Stellantis North America Brands Hit With 844,027-Vehicle Recall"** (Aug 2026): https://www.autoevolution.com/news/multiple-stellantis-north-america-brands-hit-with-844027-vehicle-recall-274956.html — independent confirmation of 26V531's 844,027 count, 100% defect estimate, Harman Becker supplier, Ram 1500 211,114 / Wrangler 170,033 / Pacifica 131,681 / Ram 2500 108,804 splits, ProMaster EV only 3 units.
11. **GCN, "Stellantis recalls nearly 849,000 Jeep, Ram and Chrysler vehicles over rearview camera blackout"** (Sep 7, 2026): https://gcn.com/rearview-camera-stellantis-recalls-nearly-849/21446/ — 848,511 US-market figure per Stellantis press release; ~955,000 worldwide; 107,000 outside North America.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Brand | 2026 campaigns |
|---|---|
| **Jeep** | **12** |
| **Ram** | **11** |
| **Chrysler** | **5** |
| **Dodge** | **2** |
| **Alfa Romeo** | **1** |
| **Fiat** | **0** |
| **Stellantis (deduped across makes)** | **27** |

Two campaigns are shared across makes (26V059: Jeep+Ram; 26V531: Jeep+Chrysler+Dodge+Ram), so the brand columns sum to 31 while the company total is 27.

### Seven-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| **Stellantis** | **27** |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Honda | 4 |
| Kia | 4 |

Stellantis is second in the table, 1.8x the three-way tie at 15, and 27 is 12 more than the next American group (GM). Seven-group total: 121 campaigns.

### The 27 Stellantis campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V059 | Feb 2 | Exterior lighting: brake lights | Trailer tow module kills trailer lights and brakes; 456,287 vehicles (Ram 1500 312,365; Wagoneer S 321; Cherokee 57). 100% defect estimate. Jeep + Ram. |
| 26V141 | Mar 12 | Structure: liftgate hinge | Wagoneer S liftgate hinge cover may detach |
| 26V189 | Mar 26 | Air bags: side curtain | Pacifica/Voyager curtain airbags may not hold pressure (FMVSS 226) |
| 26V223 | Apr 9 | ESC | 2026 Cherokee brake module may fail; loss of ABS and ESC |
| 26V224 | Apr 9 | Child seat tether anchor | 2026 Wrangler second-row tether welds insufficient |
| 26V225 | Apr 9 | Electrical: instrument cluster | Ram 1500–5500 instrument panel display may fail (software) |
| 26V244 | Apr 16 | ESC: control module | 2026 Ram 2500 steering column module may kill ESC; 6,605 trucks |
| 26V288 | May 7 | Power train: transmission module | Ram 2500 software may let speed exceed tire speed rating |
| 26V296 | May 12 | Equipment: wheelchair restraints | Braun Pacifica wheelchair retractors may not lock |
| 26V326 | May 21 | Back-over prevention: camera | Grand Wagoneer front camera wiring; rearview image may not display |
| 26V328 | May 21 | Air bags: restraint module software | Grand Cherokee side airbags may deploy late (software) |
| 26V358 | Jun 3 | Air bags: frontal | Braun Pacifica/Voyager seat harness connector spring may contact terminals |
| 26V414 | Jun 30 | ESC | Grand Wagoneer brake module software; loss of ESC and brake assist |
| 26V421 | Jul 1 | Exterior lighting: headlights | Ram 1500 headlight wiring; parking/DRL flicker or failure |
| 26V456 | Jul 16 | Wheels | Gladiator/Wrangler steel wheels too thin; may crack or detach |
| 26V495 | Jul 30 | Seat belts: rear anchorage | Ram 1500 (2019–2026) second-row buckle anchors improperly installed |
| 26V510 | Aug 6 | Seat belts: front retractor | Tonale (and 2023–2025 Hornet) rear seat belts may twist and fail to retract |
| 26V529 | Aug 13 | Visibility: wipers | Grand Cherokee BCM software; wipers may fail |
| **26V531** | **Aug 13** | **Back-over prevention: camera** | **Radio software may blank the rearview camera. 844,027 US vehicles (848,511 announced), 15 model lines, 4 brands. 100% defect estimate. THE BIG ONE.** |
| 26V559 | Sep 1 | TPMS | Wagoneer/Grand Cherokee/Cherokee TPMS software error |
| 26V560 | Sep 1 | Back-over prevention: software | Ram 1500 radio software; same camera blackout as 26V531, second campaign; 239,131 trucks (2025–2026) |
| 26V561 | Sep 1 | ESC | Pacifica/Voyager brake pedal sensor capacitor cracked; ESC loss; 2,017 vehicles |
| 26V584 | Sep 10 | Structure: roof and pillars | Wagoneer/Grand Wagoneer roof rack crossbar bolts may detach |
| 26V622 | Sep 29 | Air bags: side/window | Ram 1500 side-airbag connector may not be secured; exactly 5 trucks |
| 26V623 | Sep 29 | TPMS | Ram 1500 TPMS sensors may fail to detect low pressure; 16,385 trucks |
| 26V651 | Oct 6 | ESC: control module | Ram 2500 steering column module; expansion of 26V244; 8,329 trucks (first scope missed 1,724, +26%) |
| 26V701 | Oct 22 | Exterior lighting: tail lights | Durango tail light harness terminals may be damaged; lights may fail |

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

**Jeep:** Grand Wagoneer 5, Grand Wagoneer L 5, Cherokee 4, Grand Cherokee 4, Grand Cherokee L 3, Wrangler 3, Gladiator 2, Wagoneer S 2, Compass 1, Recon 0.
**Chrysler:** Pacifica 5, Voyager 4 (Pacifica Plug-In Hybrid 2 of the 5).
**Dodge:** Charger 1, Durango 1, Hornet 0 (2026 MY; the Hornet's only campaign, 26V510, covers 2023–2025 Hornets and counts toward Alfa Romeo via the Tonale).
**Ram:** 1500 8, 2500 6, 3500 2, 4500 2, 5500 2. ProMaster: covered by 26V531's summary but invisible to every ProMaster query (see Limitations).
**Alfa Romeo:** Tonale 1, Giulia 0, Stelvio 0.
**Fiat:** 500e 0, Topolino 0.

### Component mix (27)

ESC 5, Air bags 4, Back-over prevention 3, Exterior lighting 3, Seat belts 2, TPMS 2, Structure 2, Child seat tether 1, Electrical (instrument cluster) 1, Power train (transmission module) 1, Wheels 1, Visibility (wipers) 1, Equipment (wheelchair restraints) 1. **0 of 27 flagged overTheAirUpdate=true** — same 0-for-everything result as every prior census in the series (Ford 0/41, Lincoln 0/10, GM 0/15, Toyota 0/15, Honda 0/4, Hyundai 0/15, Kia 0/4). Note: 26V531's remedy is in fact a radio software update that Stellantis delivers over the air or at the dealer (per #1409 and trade coverage), so the API flag undercounts OTA remedies; the flag is reported as-is.

### Timing

Feb 1, Mar 2, Apr 3, May 5, Jun 2, Jul 2, Aug 4, Sep 4, Oct 4. January and November (through Nov 12) produced zero filings. May is the busiest month (5); Aug 13 and Sep 1 each produced two campaigns in a day (26V529 + 26V531; 26V559 + 26V560 + 26V561 is three on Sep 1). Newest: Oct 22 (26V701, Durango tail lights).

### How the count works across six makes

Stellantis is six makes in NHTSA's API, and the census queries all six — a make is not a company, the lesson Lincoln taught the Ford census. Two campaigns cross makes: 26V059 (Jeep + Ram) and 26V531 (Jeep + Chrysler + Dodge + Ram). A census that queried only Jeep would print 12 and miss 15; a census that queried only Ram would print 11 and miss 16. The brand columns sum to 31; dedupe brings the company to 27.

### The Cherokee finding

The Cherokee is a resurrected nameplate — discontinued after 2023, back for 2026 as a hybrid-only SUV — and its first model year already carries 4 campaigns: 26V059 (trailer tow module, 57 Cherokees), 26V223 (brake module, loss of ABS and ESC), 26V531 (camera blackout), 26V559 (TPMS software). A brand-new model with an ESC-loss recall in its first year is the kind of thing that should make a shopper wait for year two.

### The ProMaster hole

Campaign 26V531's summary explicitly covers Ram ProMaster and ProMaster EV. Yet queries for "promaster", "promaster 1500", "promaster 2500", "promaster 3500", and "promaster ev" return zero 2026 campaigns. The campaign is visible only through the Ram 1500 / Jeep queries. Same failure class as the Corsair Hybrid corollary in #1478 (26V688 covers 63 Corsair Hybrids but "corsair hybrid" returns zero rows) and the Super Duty hole in #1473/#1478. Direction of any remaining bias: undercount.

### The five-truck recall

26V622 covers exactly five 2026 Ram 1500 crew cabs, built Feb 28–May 18, 2026. A side-airbag connector may not be secured. Five VINs, out of hundreds of thousands of trucks built. Modern traceability can isolate a defect to five trucks — and the federal system still counts it as a full campaign, same as the 844,027-vehicle camera recall. Campaign counts are not severity scores; this census contains both extremes in the same table.

## Strongest counterargument

Campaign counts are not severity scores, and this census proves it in both directions at once: the headline 27 contains one campaign covering 844,027 vehicles and another covering five. Counting them equally is absurd on its face, and the 26V531 camera bug alone (844,027) is larger than the next two campaigns combined (26V059's 456,287 plus 26V560's 239,131 is 695,418). Stellantis's 27 also partly reflects that it sells six brands under one roof — a company with more nameplates files more campaigns, and the per-brand numbers (Jeep 12, Ram 11) are the honest comparison against Ford's 41 or GM's 15, not the company-wide 27. Dodge's 2 is not a safety triumph; Dodge barely sells cars anymore (Charger, Durango, Hornet), and Fiat's 0 is a rounding artifact of selling one EV. The camera recall was also already covered as a standalone story, so the census's biggest number is not new information — it is a recount. And the 0-for-27 over-the-air figure is a flag artifact: 26V531's fix is delivered over the air, so the API's OTA field is wrong, which casts doubt on the other zero counts the series keeps reporting.

The counterargument weakens on the cross-make structure: 26V531 is one defect in one shared radio module that blinded 15 model lines across four brands, and that is exactly what a company-level census is for — no single-brand count could show it. The Cherokee's 4 campaigns in a first model year, the Ram 2500's ESC recall needing a 26% scope expansion five months later, and the five-truck precision recall are all real findings the count surfaces. The OTA flag's limits are stated, not hidden, and the article reports the flag as-is alongside the known OTA remedy.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The 844,027 / 848,511 discrepancy for 26V531 is stated: 844,027 is the Part 573 population built with the suspect radio; 848,511 is Stellantis's announced figure. #1409 used the same split.
- Unit counts (456,287 for 26V059; 844,027 for 26V531; 239,131 for 26V560; 2,017 for 26V561; 8,329 for 26V651; 6,605 for 26V244; 5 for 26V622; 16,385 for 26V623) are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this.
- ProMaster: the API returns no 2026 rows for any ProMaster spelling, yet 26V531's summary covers ProMaster and ProMaster EV. Per-model counts for ProMaster rest on the campaign summary, not queries. Direction of remaining bias: undercount.
- Dodge Hornet: 26V510 covers 2023–2025 Hornets, so it does not appear under any 2026-MY Dodge query; it counts toward Alfa Romeo (Tonale 2023–2026). A 2026-MY-only census understates Dodge's defect exposure by the Hornet's pre-2026 population.
- NHTSA API vocabulary gaps remain the central risk: this census queried 10 Jeep + 3 Chrysler + 5 Dodge + 92 Ram + 3 Alfa Romeo + 2 Fiat VPIC names (including body-builder and trailer-manufacturer junk that 400s harmlessly) plus suffix variants and targeted trims, 469 queries total, but a campaign could still hide under an untested spelling. Mitigation: every 2026-filed campaign found was cross-checked against its summary's model list; the two largest items (26V531, 26V059) were confirmed in Part 573 filings and independent coverage; the direction of any remaining bias is undercount.
- The 2026 model year is still in progress and late filings will move all counts. No campaigns were filed Nov 3–12, 2026 in this census; that window is short and proves nothing.
- NHTSA's overTheAirUpdate flag undercounts software remedies: 26V531's fix is delivered over the air per trade coverage, yet the flag is false for all 27.

## Actionable takeaways

- If you own a 2026 Jeep, Ram, Chrysler, or Dodge: check your VIN at nhtsa.gov/recalls for 26V531. If your rearview camera image fails to appear when you shift into reverse, the fix is a free radio software update, over the air or at the dealer. Do not wait — the camera is federally mandated because backover crashes kill about 210 people a year.
- If you tow with a 2025–2026 Ram or a 2024–2026 Wagoneer S: check for 26V059. The trailer tow module can kill your trailer's lights and brakes with no dashboard warning. The fix is a free replacement module. Check the VIN even if the truck has never pulled a trailer.
- If you own a 2026 Cherokee: check for 26V223 (ESC/ABS loss) and 26V559 (TPMS). Four campaigns in the first model year of a resurrected nameplate is a reason to buy the second year.
- If you own a 2026 Ram 2500: check for 26V651 — and know it is an expansion. If your truck was cleared under the April recall (26V244), check again; the first scope missed 1,724 trucks.
- If you are shopping a 2026 Stellantis vehicle: the Grand Wagoneer carries 5 campaigns, the Cherokee and Grand Cherokee 4 each, the Ram 1500 8, the Ram 2500 6. The Pacifica carries 5. A first-year redesign with a half-dozen federal campaigns is a reason to buy the second year, or to negotiate like you know.
- If you run a recall census of your own: never trust a bare model name in the NHTSA API, never trust a single make to cover a company, and never trust a model name to cover a van — query the VPIC canonical list, then the hybrid and plug-in variants, then the luxury and commercial divisions separately. A 400 is not always a zero, and a make is not always a company.
