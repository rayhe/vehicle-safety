# Research: #1477 — Same Company, Same Parts Bin. Hyundai Recalled Its New Cars 15 Times. Kia Recalled 4.

**Number:** 1477
**Slug:** 1477-hyundai-kia-recall-census-15-to-4
**Journalist:** Clara Rollover (Consumer Safety Advocate; car-buying guidance, class comparisons, "what this means for you")
**Kicker:** The Gap
**Date:** November 12, 2026

## Angle (1-2 sentences)

Hyundai and Kia are the same company. They share platforms, suppliers, and a parts bin, and their 2026 lineups even share the year's biggest defect: a blank instrument cluster that took 84,328 cars off the road in two parallel recalls. I ran the corrected-vocabulary census the site built for Toyota and Honda (#1475, #1476) across both brands and found **Hyundai filed 15 campaigns for its 2026 models and Kia filed 4** — a 15-to-4 gap inside one company, with Hyundai tied with Toyota and GM at 15 and Kia tied with Honda at 4.

## Kill test

- **Genuinely newsworthy?** Yes. First Hyundai/Kia census on the site; completes the six-brand 2026 table (Ford 40, GM 15, Toyota 15, Hyundai 15, Honda 4, Kia 4). Fresh pegs: the October pair of loose-nut recalls (26V692, 26V693) from the same supplier, Samjin Nut, including 17 cars whose wheels may detach; and the vocabulary trap strikes again — the Elantra Hybrid fire-risk recall (26V308, 54,337 cars) is invisible to base-name queries, so a naive census would print Hyundai 14, not 15.
- **Novel on site?** Yes. No prior brand-level Hyundai or Kia census exists. Individual campaigns were covered as standalone stories (Palisade power seats, the cluster recalls), but never as a census, never as a sister-brand comparison, and never with the corrected-vocabulary method applied to Hyundai Motor Group. The original contribution is the 15/4 count, the per-model table, the shared-defect analysis, and the completed six-brand table — computed, not quoted.
- **Original contribution:** the corrected 15/4 census below (NHTSA recalls API, Nov 12, 2026), the vocabulary-gap diagnosis for Hyundai (one campaign hides under a hybrid-only nameplate), per-model counts, component mix, the shared-supplier/shared-defect findings (cluster PMIC, Samjin Nut), and the six-brand comparison — computed, not quoted.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model lists (Hyundai 15 light-vehicle models, Kia 10), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, and Electric suffix variants (100 queries); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at /tmp/rcl1477/census_raw.json, campaigns at /tmp/rcl1477/campaigns.json, VPIC lists at /tmp/rcl1477/vpic.json. **Date-format trap (from #1476):** ReportReceivedDate comes back as DD/MM/YYYY ("27/01/2026"), not ISO — a naive `startswith("2026")` filter returns zero campaigns. https://www.nhtsa.gov/recalls
2. **#1475 research file** (drafts/1475-toyota-recall-census-15-corrected-count-research.md) — the corrected-vocabulary method this census applies to Hyundai/Kia, and the corrected Toyota baseline (15) used in the comparison table.
3. **#1476 research file** (drafts/1476-honda-recall-census-4-corrected-count-research.md) — the Honda baseline (4) and the DD/MM/YYYY trap documentation; also flags that the Ford/GM counts used the base-name method and a re-run is owed.
4. **#1473 research file** (drafts/1473-ford-recall-census-40-new-model-campaigns-research.md) — the Ford baseline (40) and GM baseline (15) from Nov 11.
5. **NHTSA Part 573 Safety Recall Report, 26V047** (Jan 26, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V047-9175.pdf — 41,651 Hyundai vehicles; instrument panel cluster may reboot from electrical noise in the Power Management Integrated Circuit (PMIC), blanking the speedometer; FMVSS 101 noncompliance; OTA or dealer software fix.
6. **Kia recall notice, 26V046** (Jan 27, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCMN-26V046-8034.pdf — 42,677 Kia vehicles (K4 14,256; Carnival 2,875; Carnival HEV 4,162; Sorento 4,623; Sorento PHEV 318; Sorento HEV 1,638; K5 1,327; EV9 447; Sportage 7,340; Sportage PHEV 866; Sportage HEV 4,825); same PMIC defect family, clusters enter overheat protection and go blank; OTA or dealer fix.
7. **CarBuzz, "Hyundai, Kia Recall 83,000 Vehicles For Glitchy Speedometers"** (Jan 30, 2026): https://carbuzz.com/hyundai-kia-vehicles-recalled-display-problem/ — independent confirmation of the combined 84,328 count and the two different root-cause wordings for the same shared part.
8. **NHTSA Part 573 Safety Recall Report, 26V160** (Mar 17, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V160-3144.pdf — 61,093 Palisade/Palisade Hybrid (40,729 gas, 20,364 hybrid), Limited/Calligraphy trims; 2nd/3rd-row power seats may not detect a person and keep moving; 1 fatality (2-year-old girl, Ohio, Mar 7, 2026), 4 minor injuries, 17 unique vehicles with claims; fix finalized Apr 8, 2026 (software update; tailgate must be open to stow).
9. **Reuters, "Hyundai to recall over 61,000 Palisade SUVs in US after fatal incident"** (Mar 20, 2026): https://www.reuters.com/legal/litigation/hyundai-recall-over-61000-palisade-suvs-us-after-fatal-incident-nhtsa-says-2026-03-20/ — independent confirmation of the fatality, the stop-sale, and the 61,093 count.
10. **NHTSA Part 573 Safety Recall Report, 26V308** (May 15, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V308-8651.pdf — 54,337 Elantra Hybrids (2024-2026); MOSFET in the Hybrid Power Control Unit can overheat under high electrical loads, fire risk; 4 incidents including 1 fire, 0 crashes/injuries; dealer software fix; owner letters Jul 13, 2026.
11. **Autoblog, "Hyundai's Two New Recalls Boil Down to Loose Nuts"** (Oct 24, 2026): https://www.autoblog.com/news/hyundais-two-new-recalls-boil-down-to-loose-nuts — 26V692 (24 vehicles: 20 Elantra, 4 Tucson Hybrid; loose strut fasteners) and 26V693 (17 vehicles: 8 Venue, 4 Elantra, 4 Elantra Hybrid, 1 Elantra N; loose lug nuts, wheel may detach); same supplier (Samjin Nut), same Ulsan plant, manufacturing lapses not defective parts; owner letters Dec 19, 2026.
12. **NHTSA Part 573 Safety Recall Report, 26V068** (Feb 6, 2026): https://oemdtc.com/?pdf_link_url=https%3A%2F%2Fstatic.nhtsa.gov%2Fodi%2Frcl%2F2026%2FRCLRPT-26V068-2387.pdf — 27 vehicles (21 Ioniq 5, 6 Ioniq 9); high-voltage battery bus bar bolts insufficiently tightened, arcing/fire risk; 0 incidents; dealers tighten bolts and replace battery as needed.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Hyundai** | **15** | 15 | 12 |
| **Kia** | **4** | 10 | 8 |
| **Hyundai Motor Group** | **19** | 25 | 20 |

### Six-brand table (same method family; Ford/GM base-name, others corrected)

| Brand | 2026 campaigns |
|---|---|
| Ford | 40 |
| GM | 15 |
| Toyota | 15 |
| **Hyundai** | **15** |
| Honda | 4 |
| **Kia** | **4** |

Hyundai ties Toyota and GM at 15. Kia ties Honda at 4. The spread inside one company (15 vs 4) is as wide as the spread across the whole industry table. Per model: Hyundai averages 1.0 campaigns per nameplate, Kia 0.4.

### The 15 Hyundai campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V047 | Jan 27 | Instrument cluster | Cluster reboots from PMIC electrical noise, blanking the speedometer. 41,651 vehicles. OTA/dealer software fix. |
| 26V068 | Feb 6 | HV battery bus bar | Ioniq 5/Ioniq 9 battery bus bar bolts under-tightened, arcing/fire risk. 27 vehicles. 0 incidents. |
| 26V069 | Feb 6 | Steering knuckle | 2026 Kona front steering knuckles may crack and break. Loss of steering. |
| 26V160 | Mar 17 | Power rear seats | Palisade 2nd/3rd-row seats may not detect a person and keep moving. 61,093 vehicles. 1 child fatality, 4 minor injuries. |
| 26V169 | Mar 20 | Rear seat belt buckle | Palisade rear seat belt buckle assembly (Limited/Calligraphy). |
| 26V218 | Apr 7 | Front seat belt anchorage | Santa Fe driver seat belt anchorage (2024-2026 Santa Fe, plus Ioniq 6 and Genesis G90 in the same campaign). |
| 26V254 | Apr 11 | Side-impact airbag sensor | B-pillar impact sensor, Tucson/Elantra. |
| 26V308 | May 15 | Hybrid power control unit | Elantra Hybrid MOSFET overheats, fire risk. 54,337 vehicles. 4 incidents, 1 fire. **Invisible to base-name queries — only "Elantra Hybrid" returns it.** |
| 26V314 | May 19 | Rear suspension fasteners | Ioniq 9 (and 2025 Ioniq 5) rear suspension fasteners may loosen and detach. |
| 26V316 | May 19 | Forward collision avoidance | Front-camera software, Santa Cruz/Tucson. AEB may not work as intended. |
| 26V400 | Jun 24 | Instrument cluster | Tucson cluster software error, blank display (second cluster recall of the year for Tucson). |
| 26V452 | Jul 15 | Rear seat belt buckle | Kona rear center seat belt buckle may fail to restrain. |
| 26V588 | Sep 11 | Power rear seats | Ioniq 9 second-row power seats (Limited/Calligraphy/Calligraphy Design) — the Palisade defect, again, on the new flagship. |
| 26V692 | Oct 20 | Front strut fasteners | Elantra/Tucson Hybrid strut fasteners not tightened properly. 24 vehicles. Samjin Nut. |
| 26V693 | Oct 21 | Wheel lug nuts | Venue/Elantra lug nuts may loosen, wheel may detach. 17 vehicles. Samjin Nut. |

### The 4 Kia campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V046 | Jan 27 | Instrument cluster | Same PMIC blank-cluster defect as Hyundai's 26V047, filed the same week. 42,677 vehicles. OTA/dealer fix. |
| 26V135 | Mar 7 | Rear seat belt anchor | K4 rear center seat belt anchor buckle; also 2027 Telluride third-row center buckle. |
| 26V232 | Apr 11 | Fuel system | Carnival fuel may leak at the pipe-to-fuel-rail connection (2022-2026 Carnival). |
| 26V545 | Aug 22 | Occupant classification sensor | EV9 Occupant Detection System may not deactivate the passenger airbag for a child or small adult. |

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

| Model | Campaigns |
|---|---|
| Tucson Hybrid | 5 (26V047, 26V254, 26V316, 26V400, 26V692) |
| Tucson | 4 (26V047, 26V254, 26V316, 26V400) |
| Tucson Plug-In Hybrid | 4 (26V047, 26V254, 26V316, 26V400) |
| Ioniq 9 | 3 (26V068, 26V314, 26V588) |
| Kona | 3 (26V047, 26V069, 26V452) |
| Palisade / Palisade Hybrid | 3 each (26V047, 26V160, 26V169) |
| Elantra | 3 (26V254, 26V692, 26V693) |
| Elantra Hybrid | 2 (26V308, 26V693) |
| Santa Cruz | 2 (26V047, 26V316) |
| Santa Fe / Santa Fe Hybrid | 2 each (26V047, 26V218) |
| Ioniq 5 | 2 (26V047, 26V068) |
| Sonata / Sonata Hybrid | 1 each (26V047) |
| Elantra N | 1 (26V693) |
| Venue | 1 (26V693) |
| Ioniq 6, Ioniq 6 N, Ioniq 5 N, Nexo | 0 |
| Carnival | 2 (26V046, 26V232) |
| EV9 | 2 (26V046, 26V545) |
| K4, K5, Sorento, Sorento Hybrid, Sportage, Sportage Hybrid, Carnival Hybrid | 1 each (26V046, except K4 also 26V135) |
| EV6, Niro, Seltos, Telluride | 0 |

Note: K4 has 2 (26V046 + 26V135). Niro, Seltos, Telluride, EV6: zero 2026-filed campaigns touching 2026-MY vehicles.

### Component mix (19 distinct campaigns)

Seat belts 4 (26V135, 26V169, 26V218, 26V452), electrical/instrument cluster 3 (26V046, 26V047, 26V400), power seats 2 (26V160, 26V588), loose fasteners 3 (26V692, 26V693, 26V314), airbag sensors 2 (26V254, 26V545), battery/HPCU 2 (26V068, 26V308), steering 1 (26V069), fuel 1 (26V232), forward collision avoidance 1 (26V316). **0 of 19 flagged overTheAirUpdate=true in the API** — same 0-for-40 as Ford, 0-for-15 as GM/Toyota, 0-for-4 as Honda — even though both cluster recalls were actually delivered OTA. The flag undercounts software remedies, same as in every prior census.

### Timing

January: 2 (the cluster pair). February: 2. March: 3. April: 3. May: 3. June: 1. July: 1. August: 1. September: 1. October: 2. November: 0 (yet).

### How the undercount happened (Hyundai)

The NHTSA recalls API returns HTTP 400 for a make+model+modelYear combination with no matching rows, and prior runs treated 400 as zero campaigns. That rule is correct for gas models with no recalls — but it is also what the API returns when the model name is wrong. "Elantra" returns 26V254, 26V692, 26V693 — but not 26V308, because that campaign's model list names only "Elantra Hybrid." A base-name-only census prints Hyundai 14. The corrected census prints 15. One campaign, 54,337 cars, a fire risk — hidden behind a suffix.

### The shared-defect findings

Three of the 19 campaigns are the same defect wearing two badges. The January cluster pair (26V046 Kia, 26V047 Hyundai) is one PMIC part, one failure mode, two filings, 84,328 cars combined — and Genesis filed a third parallel recall (83,877 vehicles) for the identical failure, excluded here only because Genesis is a separate make in the API. The October loose-nut pair (26V692 struts, 26V693 wheels) shares one supplier, Samjin Nut, one plant, Ulsan, and one cause: a temporary manual torquing process after tooling changes. The Palisade power-seat defect (26V160) reappears five months later on the Ioniq 9 (26V588) — same feature, same failure, new flagship. Count the shared defects once and Hyundai Motor Group has 16 distinct defects, not 19 campaigns.

### The gap, explained honestly

Kia's 4 is not evidence Kia builds better cars. Kia sells fewer 2026 nameplates (10 vs 15) and its two biggest sellers by volume (Telluride, Seltos) had zero campaigns — but the Telluride's zero is partly timing: its rear seat belt buckle recall (26V135) names the 2027 Telluride, not the 2026. Hyundai's 15 is inflated by the Palisade, which alone carries 3 campaigns and the year's only fatality, and by the Tucson family, which carries 4-5 campaigns per powertrain because every Tucson variant inherits every Tucson defect. Strip the shared-defect duplicates and the gap narrows to 13 distinct Hyundai defects vs 3 distinct Kia defects — still 4x, but the mechanism is visible: Hyundai's new-model-year hardware (redesigned Palisade, new Ioniq 9, Tucson Hybrid volume) is where the defects live, and Kia's 2026 lineup is older metal.

## Strongest counterargument

Campaign counts are not severity scores, and the 15-to-4 gap flatters the headline more than the reality. Hyundai's 15 includes two 17-and-24-car recalls (26V692, 26V693) that together cover 41 vehicles — fewer cars than a single apartment building's parking lot — and a 27-car battery recall (26V068). Strip the three micro-recalls and Hyundai is at 12. Kia's 4 includes the 42,677-car cluster recall, which alone covers more vehicles than Hyundai's three micro-recalls and its 27-car battery recall combined a thousand times over. By vehicles affected, the gap nearly vanishes: the two biggest Hyundai campaigns (61,093 Palisade + 54,337 Elantra Hybrid) total ~115,000 cars, while Kia's single biggest (42,677) is a third of that — but Kia's total across 4 campaigns is roughly 50,000-60,000 cars against Hyundai's ~200,000+, so the vehicle-count gap is ~3-4x, same direction as the campaign gap. The ranking does not move. The count also cannot tell quality from reporting threshold: Hyundai's October micro-recalls (17 and 24 cars) are evidence of aggressive early filing — a manufacturer that recalls 17 cars for lug nuts is one that catches problems in production sampling, not one hiding them. The Palisade fatality is the one campaign that is unambiguously a safety story rather than a counting story, and it is also the one campaign both brands' critics should keep separate from the census math.

The counterargument weakens on the three campaigns that are not paperwork and not micro: the Palisade power seats that killed a 2-year-old, the Elantra Hybrid HPCU that caught fire, and the blank instrument clusters that took the speedometer off 84,328 dashboards. Those are hardware and software, they are recent, and no duplicate-strip removes them.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The shared defects (cluster pair, loose-nut pair, Palisade/Ioniq 9 seats) are stated alongside the headline (19 campaigns, 16 distinct defects); the distinct-defect total is 16.
- NHTSA API vocabulary gaps remain the central risk: this census queried 15 Hyundai + 10 Kia canonical names plus Hybrid/PHEV/Electric suffix variants (100 queries), but a campaign could still hide under an untested spelling (e.g., "Kona Electric" returned nothing under every spelling tried; the 2026 Kona Electric may genuinely have zero campaigns, or its campaigns may live under a name this census never guessed). Mitigation: every 2026-filed campaign found was cross-checked against its summary's model list. The direction of any remaining bias is undercount, same as before.
- Unit counts (61,093 Palisade; 54,337 Elantra Hybrid; 41,651 + 42,677 cluster; 27 Ioniq; 24 struts; 17 lug nuts) are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 26V047/26V046 populations overlap in model years but not in vehicles (different brands).
- Three campaigns filed in 2025 also touch 2026-MY vehicles and are excluded by the method (same as #1475/#1476): 25V549 (Tucson/Santa Fe connecting rod bolts), 25V745 (Telluride/Sorento incorrect spare tire), 25V809 (Tucson/Santa Cruz/Santa Fe curtain airbags). Including them would make the group total 22, not 19. The article states the exclusion.
- Genesis is excluded (separate make in the API) even though it shares the cluster defect (83,877 vehicles) and the group; including Genesis would add at least 1 campaign and 83,877 vehicles.
- Ford/GM counts are from #1473/#1474's Nov 11 censuses using the base-name method; the #1475/#1476 limitations already flag a Ford/GM re-run as owed. The six-brand table inherits that caveat.
- The 2026 model year is still in progress and late filings will move all six counts.
- NHTSA's overTheAirUpdate flag undercounts software remedies (both cluster recalls were delivered OTA but flag false).

## Actionable takeaways

- If you own a 2026 Palisade or Palisade Hybrid (Limited/Calligraphy): the power-seat recall (26V160) fix is a free software update, available OTA or at the dealer. Do not use the one-touch tilt-and-slide or power-fold functions with a child near the seat until it is done. Check your VIN at nhtsa.gov/recalls.
- If you own a 2024-2026 Elantra Hybrid: the HPCU fire-risk recall (26V308) is a free dealer software update. A no-start condition, limp mode, or the malfunction indicator lamp lighting up are the warning signs. Do not wait for the letter.
- If you own a 2026 Tucson (any powertrain), Ioniq 5, Santa Cruz, Kona, Santa Fe, Sonata, Palisade, K4, Sorento, Carnival, EV9, K5, or Sportage: your instrument cluster may go blank while driving (26V046/26V047). The fix is free and can arrive over the air. If the screen blanks, the car still drives; pull over, do not guess your speed.
- If you own a 2026 Venue or Elantra built in August 2026 at Ulsan: the lug-nut recall (26V693) covers 17 cars. Check your VIN; the fix is a free inspection and re-torque, and a loose wheel is the one failure in this census that can kill someone in the other lane.
- If you are shopping a 2026 Hyundai or Kia: 15 vs 4 is the headline, but read it as a new-hardware story, not a brand-quality verdict. The Tucson and Palisade carry the count; the Telluride, Seltos, Niro, and EV6 carry zero. Shop by model, not by badge.
