# Research: #1481 — Subaru Recalled Its New Cars 5 Times. Eight Cars Got a Do-Not-Drive Order. 541,237 Got a Sticker in the Mail.

**Number:** 1481
**Slug:** 1481-subaru-recall-census-5-eight-car-do-not-drive
**Journalist:** Clara Rollover (Consumer Safety Advocate; car-buying guidance, class comparisons)
**Kicker:** By The Numbers
**Date:** November 12, 2026

## Angle (1-2 sentences)

The recall-census series has now counted nine car companies on the corrected-vocabulary method: Ford 41, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Nissan 7, Honda 4, Kia 4. Subaru is the ninth, and it is the strangest count yet — **5 campaigns** that span the entire absurdity range of the modern recall system in a single company: a do-not-drive order covering exactly **8 cars**, and a certification-label error covering **541,237 vehicles** whose remedy is a sticker Subaru mails to owners to apply themselves.

## Kill test

- **Genuinely newsworthy?** Yes. First Subaru-wide census on this site; completes the nine-group corrected table (133 campaigns). Fresh pegs: 26V685 is the smallest recall population in the series so far (8 cars, one field report, one loose castle nut); 26V436 is a 541,237-vehicle label recall spanning eight model years of the Ascent, with a DIY sticker remedy and owner letters stretching into January 2027; 26V106 is a 100%-defect fuel-cap leak on 69,153 hybrids where the interim advice is "park outside and keep the tank half full"; 26V346 is a moonroof that can fly off 69,663 Foresters because a supplier skipped primer; and 26V393 is a Toyota-filed EV power-loss recall that counts in both Toyota's 15 and Subaru's 5.
- **Novel on site?** Yes. No prior Subaru company-level census exists. Individual campaigns were never covered standalone on this site (26V106, 26V346, 26V393, 26V436, 26V685 all first-time coverage), and never counted, never compared across the lineup, and never as part of a company total. The original contribution is the corrected 5 census below (NHTSA recalls API, Nov 12, 2026, 44 queries), the 8-car minimum finding, the five-components-five-campaigns finding, the 25V889 boundary case, the shared-campaign double count, and the completed nine-brand table.
- **Original contribution:** the corrected 5 census below, the 8-car do-not-drive finding (smallest population in the series), the five-different-components finding (fuel, visibility, propulsion, labels, suspension — no component repeats), the 541,237-vehicle label recall as the largest single campaign population in the Subaru count and the second GAWR-label recall in the series after Nissan's 26V455, the 26V393-is-filed-by-Toyota finding (shared campaign counted in two companies' totals), the 25V889 boundary case (a fourth Forester campaign touching MY2026 that was filed in December 2025 and is correctly outside the 2026-filed census), the 0-for-5 over-the-air finding, and the completed nine-brand table.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model list for Subaru (10 names: Ascent, BRZ, Crosstrek, Forester, Impreza, Outback, Solterra, Trailseeker, Uncharted, WRX), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants and targeted trims (Wilderness trims, Solterra, WRX, BRZ); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. 44 queries total. Raw results saved at drafts/1481-subaru-recall-census-raw.json; runner at drafts/1481-census-run.py. https://www.nhtsa.gov/recalls
2. **NHTSA Part 573 Safety Recall Report, 26V106** (WRD-26): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V106-8604.pdf — 69,153 US vehicles (17,446 Crosstrek Hybrid 2026 + 51,707 Forester Hybrid 2025); 100% defect estimate; fuel filler cap gasket cannot seal when a near-full tank heats up, fuel leaks from the filler cap; park outside, keep tank at or below 50%; 10-minute gasket replacement. Dealer bulletin revised Apr 2, 2026 restates the population as 66,332. Owner letters mailed Mar 25, 2026.
3. **NHTSA recall acknowledgement, 26V346** (WRF-26): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V346-2086.pdf — 69,663 vehicles (65,656 Forester + 4,007 Forester Hybrid, all 2026); moonroof sliding glass panel improperly bonded to the sliding frame, may detach; supplier Webasto Roof Systems Inc. US, improper primer application; ~2.9% defect estimate (~2,000 vehicles); production corrected Mar 10, 2026; owner letters mailed Jul 6, 2026.
4. **NHTSA Part 573 Safety Recall Report, 26V393** (Toyota-filed; Subaru WRG26): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V393-3335.pdf — 20,991 vehicles total (11,495 Toyota bZ + 4,739 Lexus RZ + 4,757 Subaru Solterra, all 2026); 100% defect estimate; Denso battery ECU software fault shuts down the electric drive system at speed while steering and brakes keep working; remedy is a free battery ECU software update; owner letters mailed Aug 17, 2026. Also counted in Toyota's 15 in #1475.
5. **NHTSA dealer bulletin, 26V436** (WRH-26): https://static.nhtsa.gov/odi/tsbs/2026/MC-11035642-0001.pdf — 541,237 US vehicles (384,407 Ascent MY2019–2026; 77,504 Forester Hybrid MY2025–2026; 49,946 Forester MY2025–2026; 29,380 Crosstrek Hybrid MY2026); certification label states the wrong rear Gross Axle Weight Rating, FMVSS 110 noncompliance; remedy is a corrected overlay label mailed to owners to apply themselves; interim letters Aug 25–27, 2026; remedy letters Jan 7–14, 2027. NHTSA flagged the error; Subaru recalculated and agreed.
6. **NHTSA recall record, 26V685** (WRI26): https://oemdtc.com/recall/26V685000/ and https://www.vehicleservicepros.com/industry-news/service-repair/article/55417032/nhtsa-recalls-nov-26-gm-hyundai-subaru-dodge — 8 vehicles (4 Crosstrek + 4 Forester, all 2026, built Aug 4–13, 2026); castle nut on the left-front lower control arm ball joint may be improperly fastened, ball joint can separate, loss of vehicle control; **do-not-drive** advisory; triggered by a single field report Sep 15, 2026 of a separated ball joint; supplier TOA (USA), LLC, Mooresville, Indiana; owner letters expected Dec 16, 2026.
7. **#1480 research file** (drafts/1480-nissan-recall-census-7-kicks-carries-three-research.md) — the corrected-vocabulary method and the Nissan 7 baseline this piece extends; also the source of the 26V455 GAWR-label parallel (168,149 Armada/QX80).
8. **#1475 research file** (drafts/1475-toyota-recall-census-15-corrected-count-research.md) — confirms 26V393 sits in Toyota's 15 as well, the shared-campaign precedent for this piece's double count.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Brand | 2026 campaigns |
|---|---|
| **Subaru** | **5** |

### Nine-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Nissan (+ Infiniti, company 7) | 7 |
| **Subaru** | **5** |
| Honda | 4 |
| Kia | 4 |

Subaru is seventh of nine, one-eighth of Ford's 41 and one-third of the three-way tie at 15. Nine-group total: 133 campaigns.

### The 5 Subaru campaigns

| Campaign | Filed | Component | Vehicles (US) | Defect est. | What happened |
|---|---|---|---|---|---|
| 26V106 (WRD-26) | Feb 24 | Fuel filler cap | 69,153 (66,332 revised) | 100% | Near-full tank + temperature rise = fuel leaks from the filler cap. Park outside, half tank, 10-min gasket swap. |
| 26V346 (WRF-26) | May 28 | Moonroof glass | 69,663 | ~2.9% | Glass panel improperly bonded (bad primer, Webasto), can detach while driving. Inspect, replace if needed. |
| 26V393 (WRG26) | Jun 18 | Battery ECU | 4,757 Solterra (20,991 w/ Toyota bZ + Lexus RZ) | 100% | Battery ECU fault kills drive power at speed. Software update. Filed by Toyota. |
| 26V436 (WRH-26) | Jul 8 | Certification label | 541,237 | 100% (label wrong on all) | Wrong rear GAWR on the door-jamb label, FMVSS 110. Remedy: a sticker in the mail. |
| 26V685 (WRI26) | Oct 19 | Lower ball joint | 8 | 100% (of the 8) | Castle nut may never have been tightened. Do not drive. One field report. |

### Per-model counts (2026 model year)

| Model | Campaigns |
|---|---|
| Forester | 3 (26V346, 26V436, 26V685) |
| Crosstrek Hybrid | 2 (26V106, 26V436) |
| Forester Hybrid | 2 (26V346, 26V436) |
| Ascent | 1 (26V436) |
| Crosstrek | 1 (26V685) |
| Solterra | 1 (26V393) |
| Outback, Impreza, Legacy, WRX, BRZ, Trailseeker, Uncharted | 0 |

The Forester carries 3 of the 5. The two brand-new 2026 EVs, Trailseeker and Uncharted, have zero campaigns in their first year. The Outback — Subaru's best-known wagon — has zero.

### Component mix

Five campaigns, five different components: fuel system, visibility, electrical/propulsion, labels, suspension. No component repeats. No campaign is a software-only fix delivered over the air: **0-for-5 OTA** (the Solterra fix is a dealer software update, not OTA).

### Campaign-vehicle arithmetic

Summing the five campaign populations (using the Part 573 figure for 26V106): 69,153 + 69,663 + 4,757 + 541,237 + 8 = **684,818 campaign-vehicle instances**. That is not a count of unique vehicles — the same Forester Hybrid can appear in 26V106, 26V346, and 26V436 — but it shows the scale: one label campaign (541,237) is 79% of the total, and the other four campaigns combined (143,581) are barely a quarter of it.

### The boundary case: 25V889

The 2026 Forester actually has **four** campaigns touching it, not three. The fourth is 25V889 (WRG-25), a rear hatch support bracket that can detach and let the tailgate fall: 5,603 vehicles, filed December 18–19, 2025, letters January 2026. It is correctly **outside** this census because the series counts campaigns *filed* in calendar 2026, and 25V889 was filed in 2025. Same boundary logic as #1480's Rogue counterpoint (26V080/26V081 covered older model years). A reader counting "2026 Forester recalls" on a VIN-lookup site will see four; the census counts three filed in 2026. Both are right; the difference is the filing window, and it is stated here so nobody has to discover it by arguing.

### The shared-campaign double count

26V393 was filed by Toyota Motor Engineering & Manufacturing and covers three 2026 EVs on the shared e-TNGA platform. It sits in Toyota's 15 (#1475) and in Subaru's 5 here. That is not an error: the series counts per company, and a campaign that hits two companies' cars counts for both. The same logic already applied to 26V455, shared across Nissan and Infiniti inside #1480's 7.

### The label-recall class, now two makers deep

Nissan's 26V455 (#1480) was a GAWR label error on 168,149 Armada/QX80 SUVs. Subaru's 26V436 is the same failure class at 3.2x the scale: 541,237 vehicles, wrong rear GAWR, FMVSS 110. Two makers, same year, same regulation, same fix (a corrected sticker). The difference is the remedy channel: Nissan's owners get the label at the dealer; Subaru mails the overlay to owners with instructions to stick it on themselves.

## What this means for buyers (Clara's beat)

- **If you own a 2026 Forester or Forester Hybrid:** you have three 2026-filed campaigns (moonroof, label, ball joint) plus the December 2025 hatch-bracket one. Run the VIN at nhtsa.gov/recalls. The moonroof inspection is the one that matters — a detached glass panel is a road hazard to everyone behind you.
- **If you own a 2026 Crosstrek Hybrid:** fuel-cap gasket (park outside, keep the tank at half until the 10-minute fix) plus the label overlay. Both are free.
- **If you own a 2026 Solterra:** the battery ECU software update is free at the dealer. It is not over-the-air — you have to go in.
- **If you own a 2019–2026 Ascent:** you are probably in the label recall. The fix is a sticker in the mail, arriving January 2027. Check the GAWR on your door jamb against the owner's manual in the meantime, and do not overload the rear axle.
- **If you own one of the eight:** Subaru knows who you are and is calling you directly. Do not drive it.

## Limitations

- The census counts campaigns **filed Jan 1–Nov 12, 2026** covering 2026-model-year vehicles, found via the NHTSA recalls API queried by VPIC canonical model name plus suffix variants. A campaign filed after Nov 12, 2026 would not appear; the count is a snapshot, not a year-end total.
- The API's model-name vocabulary is the known failure mode of this series (the Kicks MPV gap in #1480, the ProMaster hole in #1479). This run queried all 10 VPIC 2026 Subaru names plus Hybrid/PHEV/Electric suffixes plus Wilderness trims. A campaign filed under a model spelling NHTSA does not use for 2026 (e.g., a trim-only name) could still be missed; the 25V889 cross-check (found via web search, correctly excluded) is the evidence the vocabulary was checked against an outside source.
- Campaign populations overlap: summing them (684,818) double-counts vehicles in multiple campaigns. Unique-vehicle counts would require VIN-level data NHTSA does not publish.
- The 26V106 population is stated two ways in Subaru's own filings: 69,153 in the Feb 26 Part 573 report, 66,332 in the Apr 2 dealer bulletin. The article uses 69,153 as the filed figure and notes the revision.
- Defect estimates are the manufacturers' own figures in their Part 573 filings, not independent measurements.

## Strongest counterargument

Five campaigns is a small number, and three of the five are paperwork or supplier-process failures (a label, a primer coat, a gasket) rather than engineering failures. Subaru's defenders will say this census proves the opposite of a safety crisis: no engine failures, no transmission failures, no airbag failures, no driver-assistance failures, and the single most dangerous defect (the ball joint) touched eight cars that Subaru identified by VIN and told not to drive. That reading is mostly fair — and the article should say so. The counterweight is the scale of the label recall: 541,237 vehicles with the wrong weight rating on the certification label is not a typo, it is a compliance failure across eight model years of the company's largest vehicle, and it took NHTSA flagging it for Subaru to recalculate. A company that gets the sticker wrong on half a million cars for eight years is a company whose quality process deserves the same scrutiny as its crash test scores.
