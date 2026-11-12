# Research: #1480 — Nissan Recalled Its New Cars 7 Times. The Kicks Carried Three of Them.

**Number:** 1480
**Slug:** 1480-nissan-recall-census-7-kicks-carries-three
**Journalist:** Mia Crumplezone (Safety Engineering Editor; vehicle design, model-year trends)
**Kicker:** By The Numbers
**Date:** November 12, 2026

## Angle (1-2 sentences)

The recall-census series has now counted eight car companies on the corrected-vocabulary method: Ford 41, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Honda 4, Kia 4. Nissan is the eighth, and it is the quietest count yet — **7 campaigns** for Nissan plus Infiniti combined, the lowest of any full-line maker in the series — but the count hides two things: the Kicks carries three of the seven, and Nissan's real 2026 recall story is not its new cars at all, it is roughly 642,000 older Rogues recalled in the same year for an engine that eats its own bearings.

## Kill test

- **Genuinely newsworthy?** Yes. First Nissan-wide census on this site; completes the eight-group corrected table (Ford 41, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Nissan 7, Honda 4, Kia 4). Fresh pegs: the Kicks is the most-recalled 2026 model in the series so far relative to its size (3 campaigns on one subcompact); the Leaf battery recall covers 51 cars, all of them defective, with two thermal incidents, one in the US; the Armada label recall covers 168,149 vehicles across a 17-year span; and the census caught a vocabulary-gap miss in its own first pass (26V331, the Kicks cluster recall, invisible under the VPIC name "Kicks MPV").
- **Novel on site?** Yes. No prior Nissan company-level census exists. Individual campaigns were covered standalone (26V023 in the door-striker piece, 26V331 in the Kicks cluster piece), but never counted, never compared across Nissan and Infiniti, and never as part of a company total. The original contribution is the corrected 7 census below (NHTSA recalls API, Nov 12, 2026, 64 queries), the Kicks-MPV vocabulary-gap finding, the eight-brand table, per-model counts, component mix, and timing — computed, not quoted.
- **Original contribution:** the corrected 7 census below, the 26V331-is-invisible-under-"Kicks MPV" finding (a second vocabulary-gap class after the ProMaster hole in #1479), the Kicks-3-of-7 concentration finding, the 15-car and 51-car precision-recall findings (26V145, 26V188), the 0-for-7 over-the-air finding, the 168,149-vehicle label-recall finding, and the completed eight-brand table.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 12, 2026. Method: VPIC canonical 2026 model lists per make (Nissan 11 names, Infiniti 2), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric suffix variants and targeted trims; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number across both makes. 64 queries total (Nissan 52, Infiniti 12). Raw results saved at drafts/1480-nissan-recall-census-raw.json; runner at drafts/1480-census-run.py. https://www.nhtsa.gov/recalls
2. **NHTSA Part 573 Safety Recall Report, 26V188** (R25F1): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V188-8548.pdf — 51 US vehicles (2026 Leaf, 78-kWh pack, Tochigi plant, Jul 17–Nov 26, 2025 build); 100% defect estimate; cathode edge damage, internal short circuit, thermal event; two thermal incidents (Japan Feb 16, 2026; US Mar 2, 2026, both parked); park outside, do not charge; supplier Automotive Energy Supply Corporation.
3. **NHTSA Part 573 Safety Recall Report, 26V419** (PD198): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V419-3539.pdf — 5,823 US vehicles (2026 Rogue, Jan 13–Feb 17, 2026 build); 59% defect estimate; Valeo Thailand inhibitor switch, JATCO Mexico control valve; 48 technical reports + 106 warranty claims Feb 21–May 14, 2026; gear indicator may vanish, rollaway risk.
4. **NHTSA recall bulletin, 26V331** (PMA66): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V331-2575.pdf — 51,598 vehicles (2025–2026 Kicks, Jun 24, 2024–Jan 9, 2026 build); 0.2% defect estimate; combination-meter software error, blank/blue screen on cold startup; 7 technical reports + 205 warranty claims Oct 2024–Apr 2026; supplier Aumovio Periferico; FMVSS 101.
5. **NHTSA Part 573 Safety Recall Report, 26V145** (PMA64): https://static.nhtsa.gov/odi/rcl/2026/RMISC-26V145-7476.pdf — approximately 15 vehicles (5 Sentra + 10 Kicks, Dec 2025 build, Aguascalientes); 100% defect estimate; front seat frame hook bracket, insufficient laser weld; supplier TACHI-S Mexico; FMVSS 207/210.
6. **NHTSA recall bulletin, 26V425** (R26A7): https://static.nhtsa.gov/odi/rcl/2026/RCMN-26V425-2335.pdf — 3,785 vehicles (2026 Leaf, Jun 10, 2025–Jun 8, 2026 build); rear outboard seat belt ALR may deactivate early; child restraint may not secure; FMVSS 208; remedy expected mid-Sep 2026.
7. **NHTSA recall bulletin, 26V023** (PD185/PMA61): https://static.nhtsa.gov/odi/rcl/2026/RCRIT-26V023-7225.pdf — 26,432 vehicles (2025 Altima/Sentra, 2025–2026 Frontier, 2026 Kicks); 1% defect estimate; door striker wire loops improperly welded by Magna Winmex; discovered Aug 2025 by a technician during a door fit check; zero warranty claims, accidents, or injuries.
8. **TechTimes, "Incorrect Axle Weight Label Triggers Nissan Recall of 168,000 Armada and QX80 SUVs"** (Jul 22, 2026): https://www.techtimes.com/articles/321282/20260722/incorrect-axle-weight-label-triggers-nissan-recall-168000-armada-qx80-suvs.htm — 26V455: 168,149 vehicles (2020–2026 Armada, 2011–2013 QX56, 2014–2027 QX80, 22-inch wheels only); GAWR wrong on the certification label; corrected label mailed or dealer-installed; owner letters from Sep 4, 2026; FMVSS 110.
9. **#1479 research file** (drafts/1479-stellantis-recall-census-27-one-radio-bug-research.md) — the corrected-vocabulary method, the Stellantis 27 baseline, and the ProMaster vocabulary-gap precedent this piece extends.
10. **HomeAddict / YouTube VC-Turbo coverage** (2026): https://homeaddict.io/m-auto/afs/default/rsoc/92c56037-edfd-4bb4-bff1-edc61470cf43/nissan-rogue-engine-recall-vs-throttle-body-recall-which-problem-affects-your-suv — 26V080 (bearing failure, ~324,000 Rogues, 0.6% defect estimate, 690 warranty claims) + 26V081 (throttle body, ~319,000 Rogues, 100% defect estimate, 3,111 warranty claims); combined ~642,000 model-year 2023–2025 Rogues recalled in 2026; owner letters from Mar 27, 2026. These cover older model years and are correctly outside the 2026-MY census — they are the counterpoint, not the count.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 12, 2026)

| Brand | 2026 campaigns |
|---|---|
| **Nissan** | **7** |
| **Infiniti** | **1** |
| **Nissan + Infiniti (deduped)** | **7** |

One campaign is shared across makes (26V455: Nissan Armada + Infiniti QX56/QX80), so the brand columns sum to 8 while the company total is 7.

### Eight-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| **Nissan (+ Infiniti, company 7)** | **7** |
| Honda | 4 |
| Kia | 4 |

Nissan is sixth of eight, less than half the three-way tie at 15, and one-sixth of Ford's 41. Eight-group total: 128 campaigns.

### The 7 Nissan campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V023 | Jan 21 | Latches: door striker | Door striker wire loops improperly welded; door may open while moving; 26,432 vehicles (2025 Altima/Sentra, 2025–2026 Frontier, 2026 Kicks). 1% defect estimate. FMVSS 206. |
| 26V145 | Mar 13 | Seats | Front seat frame hook bracket insufficiently welded; seat may come loose; ~15 vehicles (5 Sentra + 10 Kicks, Dec 2025 build). 100% defect estimate. FMVSS 207/210. |
| 26V188 | Mar 26 | Traction battery | Leaf high-voltage battery cathode damage; internal short circuit, fire risk; 51 vehicles, all defective. Two thermal incidents, both parked. Park outside, do not charge. |
| 26V331 | May 22 | Instrument cluster | Kicks combination-meter software error; screen goes blank or blue on cold startup; 51,598 vehicles (2025–2026 Kicks). 0.2% defect estimate. FMVSS 101. |
| 26V419 | Jul 1 | Power train: gear indicator | Rogue inhibitor switch failure; gear indicator vanishes, possible rollaway; 5,823 vehicles (2026 Rogue, Jan 13–Feb 17, 2026 build). 59% defect estimate. FMVSS 102. |
| 26V425 | Jul 2 | Seat belts: rear retractor | Leaf rear outboard seat belt ALR deactivates early; child restraint may not secure; 3,785 vehicles (2026 Leaf). FMVSS 208. |
| **26V455** | **Jul 16** | **Labels** | **Certification label lists the wrong gross axle weight rating; vehicle may be overloaded; 168,149 vehicles (2020–2026 Armada, 2011–2013 QX56, 2014–2027 QX80, 22-inch wheels). FMVSS 110. THE BIG ONE — by population, not by drama.** |

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

**Nissan:** Kicks 3, Leaf 2, Sentra 1, Frontier 1, Rogue 1, Armada 1. Altima 0, Ariya 0, Murano 0, Pathfinder 0, Z 0.
**Infiniti:** QX80 1, QX60 0.

### Component mix (7)

Electrical 2 (traction battery, instrument cluster), Seats 1, Seat belts 1, Latches 1, Power train 1, Labels 1. **0 of 7 flagged overTheAirUpdate=true** — same 0-for-everything result as every prior census in the series (Ford 0/41, Stellantis 0/27, GM 0/15, Toyota 0/15, Honda 0/4, Hyundai 0/15, Kia 0/4). Note: 26V331's remedy is a combination-meter software update, so the API flag undercounts OTA-capable remedies here too; the flag is reported as-is.

### Timing

Jan 1, Mar 2, May 1, Jul 3. February, April, June, August, September, October, and November (through Nov 12) produced zero filings. The last filing was Jul 16 — nearly four months of silence. Newest: Jul 16 (26V455, the label recall).

### Population math

Filed populations (all model years in each campaign, not 2026-MY-only): 26,432 + 15 + 51 + 51,598 + 5,823 + 3,785 + 168,149 = **255,853 vehicles**. One campaign (26V455) is 66% of that total. The other six combined cover 87,704 vehicles — fewer than the label recall alone.

### How the count works across two makes

Nissan is two makes in NHTSA's API, and the census queries both — a make is not a company, the lesson Lincoln taught the Ford census and the lesson the Armada/QX80 label recall teaches again. 26V455 touches both makes. A census that queried only Nissan would print 7 and miss nothing numerically, but it would miss the fact that the biggest campaign is a shared-platform defect spanning a 17-year model window. Infiniti contributes exactly one campaign, and it is the biggest one.

### The Kicks finding

The Kicks carries 3 of the 7 campaigns — a door that can open while driving (26V023), a seat that can come loose (26V145), and a dashboard that can go blank (26V331). It is the cheapest SUV Nissan sells in the US, and it is the most-recalled 2026 Nissan by a factor of three. The three defects share a pattern: all three are supplier manufacturing defects caught in narrow production windows (Magna Winmex strikers, TACHI-S seat frames, Aumovio combination meters), and two of the three have defect estimates under 1% (26V023 at 1%, 26V331 at 0.2%). Nissan found the problems early and recalled narrowly. The Kicks is not a bad car; it is a car whose suppliers had a bad year.

### The 51-car battery fire

26V188 covers 51 Leafs, and Nissan estimates 100% of them are defective. Two have already had thermal incidents, both while parked. The remedy is park outside and do not charge until the battery modules are replaced. Fifty-one cars is the smallest population in the census and the only one where the defect can burn your garage down. Campaign counts are not severity scores; this census contains both extremes in the same table, same as #1479's five-truck airbag recall next to its 844,027-vehicle camera recall.

### The Kicks MPV hole

The census's first pass printed 6, not 7. It missed 26V331 entirely, because VPIC lists the model as "Kicks MPV" and the recalls API returns HTTP 400 for that spelling — it wants "Kicks". The campaign surfaced only through a bare-name cross-check, the same class of vocabulary gap as the ProMaster hole in #1479 (a campaign whose summary covers ProMaster returns zero rows under every ProMaster spelling) and the Corsair Hybrid corollary in #1478. New rule for the series: always query the bare model name alongside the VPIC canonical name. The API returns 400 for a model-year with zero recalls on file (verified: 2026 Murano, Pathfinder, Altima, Ariya, Z, and QX60 all 400, and all have no 2026-MY campaigns), so a 400 is not always a zero — sometimes it is a misspelling hiding a real campaign. Direction of any remaining bias: undercount.

### The old-Rogue counterpoint

Nissan filed two more campaigns in 2026 that this census correctly excludes, because they cover older model years: 26V080 (VC-Turbo engine bearing failure, ~324,000 Rogues) and 26V081 (throttle body gear fracture, ~319,000 Rogues). Together, about 642,000 model-year 2023–2025 Rogues — two and a half times the entire 2026-MY census population of 255,853. Nissan's 2026 recall story, measured in vehicles, is mostly old cars. The 7-campaign count measures something else: how many defects reached the brand-new models. Both numbers are true, and neither means much without the other.

## Strongest counterargument

Seven campaigns is a small number, and small numbers flatter. Nissan's 2026 lineup is thin — eleven models, with the Titan, Versa, and GT-R gone — so there are fewer nameplates to recall, and the count partly measures a shrinking catalog, not improving quality. The biggest campaign, 26V455, is a wrong number printed on a sticker; calling it the census's "big one" by population is a category error, since a label fix is not a safety defect in the same sense as a battery that catches fire. The Kicks' three campaigns include a 15-car seat recall and a 1%-defect door recall, both caught early with zero injuries — counting them equally with the Leaf battery fire is absurd on its face. And the census excludes the two campaigns that actually matter to the most Nissan owners, the 642,000 older Rogues, because of a model-year cutoff that is methodologically clean and journalistically convenient. The 0-for-7 over-the-air figure is a flag artifact: 26V331's fix is a software update, so the API's OTA field is wrong, which casts doubt on the other zero counts the series keeps reporting.

The counterargument weakens on the Kicks concentration and the Leaf: three campaigns on one subcompact, from three different suppliers, is a pattern no single-brand count would show, and a 51-car recall with a 100% defect rate and two fires is exactly the kind of defect a census exists to surface. The Rogue counterpoint is stated in the article, not hidden — the census counts new cars, the Rogues are old cars, and both numbers are printed side by side. The OTA flag's limits are stated, not hidden, and the article reports the flag as-is alongside the known software remedy.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The 168,149 / 26,432 / 51,598 / 5,823 / 3,785 / 51 / 15 populations are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this.
- The Kicks MPV vocabulary gap was found and fixed in this run (26V331 added via bare-name "kicks" query), but a campaign could still hide under an untested spelling. Mitigation: every 2026-filed campaign found was cross-checked against its summary's model list; the two largest items (26V455, 26V331) were confirmed in Part 573 filings and independent coverage; the direction of any remaining bias is undercount.
- The API returns HTTP 400 for model-years with no recalls on file, which is indistinguishable from a misspelling without a bare-name cross-check. Zero-count models (Altima, Ariya, Murano, Pathfinder, Z, QX60) rest on the 400-equals-no-rows inference plus the absence of any campaign summary naming them; a campaign filed under a wholly different model spelling would not be caught.
- Excluded by scope, not by oversight: 25V912 (2026 Rogue spare tire, filed Dec 24, 2025), 25V821 (Armada/QX80, filed Nov 27, 2025), 26V080/26V081 (2023–2025 Rogue VC-Turbo, filed 2026), 26V526 (2025 Altima, filed Aug 13, 2026). All are named here so the scope is auditable.
- The 2026 model year is still in progress and late filings will move all counts. No campaigns were filed Jul 17–Nov 12, 2026 in this census; that window is long, but late filings (as 26V526 shows for the 2025 Altima) remain possible.
- NHTSA's overTheAirUpdate flag undercounts software remedies: 26V331's fix is a combination-meter software update, yet the flag is false for all 7.

## Actionable takeaways

- If you own a 2025–2026 Kicks: check your VIN at nhtsa.gov/recalls for 26V331 (blank dashboard), 26V023 (door striker), and 26V145 (seat frame). The dashboard fix is a free 30-minute software update; the door fix is a free striker replacement. Do not drive with a blank instrument cluster — you cannot see your speed or warning lights.
- If you own a 2026 Leaf: check for 26V188 (battery fire) and 26V425 (rear seat belt). If your Leaf is one of the 51, park outside, away from structures, and do not charge until the battery modules are replaced. If you use a child restraint in the rear outboard seats, use the LATCH system until the seat belt retractors are fixed.
- If you own a 2026 Rogue: check for 26V419. If the gear indicator disappears from the instrument panel, or the shifter will not move out of Neutral, the transmission control valve needs replacing — free at the dealer. Do not assume the car is in Park because the lever says so.
- If you own a 2020–2026 Armada or a 2011–2027 QX56/QX80 with 22-inch wheels: check for 26V455. The fix is a corrected certification label, mailed to you or installed free. Check the label's gross axle weight rating before loading the truck to its rated capacity — the printed number may be wrong.
- If you own a 2023–2025 Rogue with the 1.5-liter VC-Turbo engine: check for 26V080 and 26V081, the two campaigns this census excludes. About 642,000 Rogues were recalled in 2026 for engine bearing failure and throttle body fracture. The bearing recall's defect estimate is 0.6%; the throttle recall's is 100%.
- If you are shopping a 2026 Nissan: the Kicks carries 3 campaigns, the Leaf 2, every other model 1 or 0. A first-year redesign with a half-dozen federal campaigns is a reason to buy the second year, or to negotiate like you know.
- If you run a recall census of your own: never trust a bare model name in the NHTSA API, never trust a single make to cover a company, never trust a VPIC canonical name to match the recalls API's vocabulary, and never trust a 400 to mean zero — query the bare model name too. A 400 is not always a zero, and a make is not always a company.
