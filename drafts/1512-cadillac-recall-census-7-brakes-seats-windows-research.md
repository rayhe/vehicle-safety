# Research: #1512 — Cadillac's 2026 Recall Census: 7 Campaigns, 2 Cadillac-Only Defects, and a Missing Owner's Manual

**Number:** 1512
**Slug:** 1512-cadillac-recall-census-7-brakes-seats-windows
**Journalist:** Axle McScatter (Data Visualization Editor; statistical roundups, methodology pieces — the census is exactly his beat: a counted table, a per-model breakdown, and a method blind spot quantified)
**Kicker:** By The Numbers
**Date:** November 14, 2026

## Angle (1-2 sentences)

Cadillac filed **7 recall campaigns touching a 2026-model-year Cadillac** in 2026, and the count hides the real story: the biggest one is a brake computer that briefly quits on 67,380 EVs, the smallest covers 10 trucks whose $38,000 batteries must be swapped whole, one campaign exists only because a radio failed to download an owner's manual, and the two models Cadillac actually sells in volume, the XT5 and CT4, have zero recalls at all.

## Kill test

- **Genuinely newsworthy?** Yes. First Cadillac census on the site; completes the GM brand-split set with Chevrolet #1500 (13) and GMC #1505 (11). Fresh hooks: the 26V114 absurdity (a missing owner's-manual download is a FMVSS 208 safety recall touching 9 of 11 Cadillac models); the spread from 10 vehicles (26V494) to 67,380 (26V717) inside one brand's year; the two Cadillac-only defects (Vistiq seat trap, Optiq window pinch) that add 2 distinct defects to GM's 15; the zero-recall XT5 and CT4; and the counted-vs-excluded arithmetic (7 counted, 1 excluded: the 2024 Lyriq camera recall 26V082).
- **Novel on site?** Yes. No prior brand-level Cadillac census exists. Three campaigns were covered as standalones (26V494 as the ten-vehicle battery-swap piece, 26V717 inside the Lyriq brake coverage, 26V289 inside the GM transfer-case coverage), but never as a census, never with the per-model table, never with the counted-vs-excluded arithmetic, and never with the GM distinct-defect total.
- **Killed angles this run (duplicate screen):** Honda 26V721 steering recall (covered in full as #1457, and again as census #1502); Ford 26V724 Maverick loose cable (covered as #1509); Ford 26V726 Explorer police map lights (covered as #1466); Mack 26V719 (151 units, no story). Buick census deferred: same luxury-arm pattern, but Cadillac goes first as the GM flagship parallel to Lexus #1501 / Acura #1502 / Infiniti #1503.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model list (11 Cadillac light-vehicle models: Escalade, Escalade ESV, XT5, CT4, CT5, Lyriq, Escalade IQ, Celestiq, Optiq, Vistiq, Escalade IQL), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, Electric suffix variants plus targeted trims (Escalade V, CT4-V, CT5-V, Lyriq-V, Optiq-V, Vistiq-V) — 50 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1512-cadillac-recall-census-raw.json; deduped campaigns at drafts/1512-cadillac-recall-census-campaigns.json. **Date-format trap (same as #1476/#1501/#1502):** ReportReceivedDate comes back as DD/MM/YYYY ("26/02/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — a 400 is an empty result, not a failed query. Census script: drafts/1512-census-run.py.
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "cadillac", Nov 14, 2026: 11 models (Escalade, Escalade ESV, XT5, CT4, CT5, Lyriq, Escalade IQ, Celestiq, Optiq, Vistiq, Escalade IQL). XT5 appears twice in the raw VPIC response (deduped).
3. **NHTSA Part 573 Safety Recall Report, 26V717** (Oct 29, 2026), via The Brake Report / Margarian Law / Motoring Chronicle summaries of the filing: 67,380 total; 100% defect estimate. Cadillac Lyriq 44,585 (2023: 474; 2024: 22,819; 2025: 11,926; 2026: 9,322; 2027: 44), Vistiq 18,802 (2026: 13,627; 2027: 5,175), Celestiq 82 (2025: 51; 2026: 31), Chevrolet Blazer EV 3,911. Cadillac share 63,469 (94.2%). 2026 Cadillac units: 22,980. Defect: BSCM slip calculation misreads wheel movement, temporary loss of braking at low speeds, only on performance AWD (pAWD, RPO X0E); normal braking returns on the next press. Predecessor: 24V589 (Aug 2024, 21,469 Lyriq AWD, ABS releasing brake pressure); pAWD vehicles from 24V589 are folded into 26V717. Remedy: OTA or dealer BSCM software update. Owner letters Dec 14, 2026. https://thebrakereport.com/gm-recall-cadillac-lyriq-blazer-ev-brake-software-26v717/
4. **NHTSA Part 573 Safety Recall Report, 26V289** (May 7, 2026), via MyLemonRights / GM Authority coverage: 66 total; 69.7% defect estimate. Do-not-drive. Missing oil pickup tube in the transfer case (Magna Powertrain de Mexico, Ramos); wheels can lock up without warning. 2026 Escalade: 4, Escalade ESV: 2; plus 2015 Escalade/ESV (1 each) that received a suspect replacement transfer case at one of 54 dealers. 4 field complaints, 0 crashes or injuries. GM number N262557620. https://mylemonrights.com/blog/gm-recalls-2026/
5. **NHTSA Part 573 Safety Recall Report, 26V304** (May 14, 2026), via Autoblog / Pickup Truck Talk: 2,464 total; 100% defect estimate. Wrong front wheel-hub bolts on 24-inch-wheel SUVs (dealer accessory brake kit RPO 5JL shipped without the correct fasteners; GM's electronic parts catalog listed the wrong bolt). Cadillac 2,130 of 2,464 (86.4%): 2025 Escalade 737, 2025 ESV 411, 2026 Escalade 647, 2026 ESV 335. 7 field complaints, 0 crashes or injuries. https://www.autoblog.com/news/gm-recalls-escalade-tahoe-and-yukon-suvs-over-wheel-hub-bolt-crash-risk
6. **NHTSA Part 573 Safety Recall Report, 26V394** (Jun 18, 2026), via Autoblog / GM-Trucks: 14,540 Vistiq (2026: 13,629; 2027: 911); 100% defect estimate; effectively every Vistiq built to date. Third-row power seatback fails to reverse on encountering a person; a child can be trapped. 6 complaints, 0 injuries. Investigation opened March 2026 after Hyundai's Palisade recall 26V160 for the same failure mode. Stop-ship June 8; dealers disable the fold feature pending a redesigned seat module (Yanfeng Seating). https://www.autoblog.com/news/gm-halts-vistiq-sales-and-recalls-nearly-15000-suvs-for-seat-entrapment-risk
7. **NHTSA Part 573 Safety Recall Report, 26V494** (Jul 30, 2026): 10 US vehicles (14 worldwide); 0.8% defect estimate. Escalade IQ 2, Escalade IQL 3, Silverado EV 4, Sierra EV 1 (US). High-voltage battery internal module component not fully secured (press machine misadjusted during downtime at Ramos); loose component can damage the battery, fire risk. Remedy: replace the entire battery assembly (approx. $38,000 per vehicle at the $190/kWh Bolt benchmark on a 200 kWh pack). Covered on this site as a standalone: stories/gm-ten-vehicle-battery-swap-fire-recall. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V494-0988.pdf
8. **NHTSA Part 573 Safety Recall Report, 26V612** (Sep 24, 2026): 29,347 Optiq (2025: 12,558; 2026: 10,201; 2027: 6,588); 100% defect estimate. Key-fob express-up fails to stop and reverse in the final 13 mm of travel (FMVSS 118); supplier Kwangjin America set the anti-pinch upper range too low. Found via a dealer report on 4 Optiqs (Jun 26, 2026); GM tested 5 vehicles, 4 failed. Remedy: BCM software update, OTA or dealer. Owner letters Nov 9, 2026. https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V612-3779.pdf
9. **NHTSA recalls API record, 26V114** (filed Feb 26, 2026): radio not set to the correct status to download the electronic owner's manual during production; fails FMVSS 208 (Occupant Protection). Touches 9 of 11 Cadillac 2026 models (every model except CT4 and XT5). Remedy: dealer radio reset to trigger the download. GM number N252540430; spans 40+ GM models across Chevrolet, GMC, Buick, and Cadillac. https://www.nhtsa.gov/recalls
10. **#1474 / #1500 / #1505 research files** (drafts/1474-gm-recall-census-15-new-model-campaigns-research.md, drafts/1500-chevrolet-recall-census-13-gm-15-research.md, drafts/1505-gmc-recall-census-11-savana-carries-four-research.md) — the GM baseline (15 campaigns) and the Chevrolet/GMC brand splits; Cadillac's 7 are a subset of GM's 15 plus the two Cadillac-only defects (26V394, 26V612), so Cadillac adds 2 distinct defects to GM's count.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Cadillac** | **7** | 11 | 9 |
| Chevrolet (for comparison) | 13 | — | — |
| GMC (for comparison) | 11 | — | — |
| GM total (#1474) | 15 | — | — |

### The 7 Cadillac campaigns

| Campaign | Filed | Component | What it is | Units (all makes) | Cadillac units |
|---|---|---|---|---|---|
| 26V114 | Feb 26 | Owner's manual download | Radio never downloaded the electronic owner's manual; FMVSS 208 noncompliance | GM-wide (40+ models) | 9 of 11 models touched |
| 26V289 | May 7 | Transfer case | Missing oil pickup tube; wheels can lock up; DO NOT DRIVE | 66 | 8 (2026 Escalade 4, ESV 2; 2015: 1+1) |
| 26V304 | May 14 | Wheel hub bolts | Wrong bolts on 24-in wheels; can loosen or break | 2,464 | 2,130 (86%) |
| 26V394 | Jun 18 | 3rd-row seat | Power seatback won't reverse on a person; child can be trapped | 14,540 | 14,540 (all Vistiq) |
| 26V494 | Jul 30 | HV battery | Loose internal module component; fire risk; whole battery replaced | 10 US | 5 (IQ 2, IQL 3) |
| 26V612 | Sep 24 | Power windows | Key-fob express-up blind in final 13 mm; FMVSS 118 | 29,347 | 29,347 (all Optiq) |
| 26V717 | Oct 29 | Brake software | BSCM briefly loses braking at low speed; pAWD only | 67,380 | 63,469 (94%) |

### Per-model campaign counts (2026 MY, 2026 filings)

| Model | Campaigns | Which |
|---|---|---|
| Escalade | 3 | 26V114, 26V289, 26V304 |
| Escalade ESV | 3 | 26V114, 26V289, 26V304 |
| Vistiq | 3 | 26V114, 26V394, 26V717 |
| Lyriq | 2 | 26V114, 26V717 |
| Escalade IQ | 2 | 26V114, 26V494 |
| Escalade IQL | 2 | 26V114, 26V494 |
| Optiq | 2 | 26V114, 26V612 |
| Celestiq | 1 | 26V717 |
| CT5 | 1 | 26V114 |
| **CT4** | **0** | — |
| **XT5** | **0** | — |

### The counted-vs-excluded arithmetic

- Counted: 7 campaigns touching a 2026 Cadillac.
- Excluded: 1 campaign filed in 2026 touching only older Cadillacs: **26V082** (Feb 12, 2026), 2024 Lyriq only, rearview camera screen goes gray (back-over prevention software).
- Cadillac-only defects (not shared with any other GM brand): 2 — 26V394 (Vistiq seat) and 26V612 (Optiq window). The other 5 are GM-wide campaigns.
- GM distinct-defect total: GM's 15 counted campaigns plus Cadillac's 2 brand-only defects. Note the brand splits double-count shared campaigns: Chevrolet 13 + GMC 11 + Cadillac 7 = 31 brand-campaign pairs, but only 15 distinct GM campaigns plus 2 Cadillac-only ones.
- Smallest vs largest: 26V494 covers 10 US vehicles; 26V717 covers 67,380. A 6,738-to-1 spread inside one brand's year.
- 2026 Cadillac units in the brake recall (26V717): 22,980 (Lyriq 9,322 + Vistiq 13,627 + Celestiq 31).

## Original contribution

The census itself: the 7-count, the 11-model VPIC list, the per-model table, the 9-of-11 reach of 26V114, the 7-counted-vs-1-excluded arithmetic, the 2 Cadillac-only defects, the zero-recall CT4 and XT5, the 6,738-to-1 unit spread, and the 22,980 2026-Cadillac unit count inside 26V717 — all computed from the NHTSA recalls API and Part 573 filings, not quoted from any single source.

## Limitations

- The census counts campaigns, not vehicles: a campaign touching one 2026 Cadillac counts the same as one touching 22,980. Unit counts are reported separately where Part 573 filings give them; 26V114 has no Cadillac-specific unit count (GM-wide filing, 40+ models).
- The API's ReportReceivedDate is the filing date, not the defect-discovery date; several campaigns (26V289, 26V304) trace to defects found months earlier.
- The excluded sweep only queried model years 2025/2024/2023; a 2026-filed campaign touching only 2022-or-older Cadillacs would be missed. The 26V717 Lyriq population reaches back to 2023, which the sweep caught; nothing older surfaced.
- Defect percentages are GM's estimates (100% for four campaigns, 69.7% for 26V289, 0.8% for 26V494); they are not independently verified.
- The census window closes Nov 14, 2026; campaigns filed Nov 15–Dec 31 are not counted.

## Strongest counterargument

Seven recalls sounds damning, but the count is a blunt instrument. One of the seven is a radio that forgot to download a PDF, and two more cover a combined 76 vehicles. The two campaigns that actually matter, 26V717 (brakes) and 26V394 (seat trap), are both software or module fixes with no reported injuries, and the brake fix arrives over the air. By unit count, the story is one big brake recall plus paperwork. The counterargument is partly right: the count overstates the danger. But it understates something else, which is that Cadillac's two brand-only defects both hit the brand's electric flagships, and the brake recall is the second Lyriq brake recall in two years (24V589 preceded it), which is a pattern the count alone does not show either.

## Actionable takeaways

- If you own a 2023–2027 Lyriq, 2026–2027 Vistiq, or 2025–2026 Celestiq with performance AWD: 26V717 is the one that matters. The fix is a BSCM software update, OTA or dealer, and owner letters go out Dec 14, 2026. Check your VIN at nhtsa.gov/recalls now; the braking loss is temporary and returns on the next press, but it happens at low speed, which is exactly where pedestrians are.
- If you own a 2026–2027 Vistiq: the third-row power fold can trap a child. Until the redesigned seat module arrives, dealers can disable the fold feature. Do not let a child sit in the third row while anyone operates the fold switch.
- If you own a 2025–2027 Optiq: do not use the key-fob express-up with anyone's hand near the window. The anti-pinch blind spot is the final 13 mm. The BCM update is OTA.
- If you own a 2026 Escalade with 24-inch wheels and a dealer-installed accessory brake package: 26V304. Check your VIN; the fix is eight bolts.
- If you are shopping: the XT5 and CT4 are the only 2026 Cadillacs with zero recalls filed this year. That is a fact about 2026 filings, not a safety rating; check the VIN anyway.
