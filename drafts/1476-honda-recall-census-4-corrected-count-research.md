# Research: #1476 — Honda's Recall Count Was Wrong Too. It's 4, Not 2.

**Number:** 1476
**Slug:** 1476-honda-recall-census-4-corrected-count
**Journalist:** Mia Crumplezone (Safety Engineering Editor; model-year trends, airbag deployment angles)
**Kicker:** Trend Watch
**Date:** November 11, 2026

## Angle (1-2 sentences)

We published Honda's 2026-model-year recall count as 2 in September (#815) and again on November 11 (#1473). Both were wrong. I re-ran the census with the full model-name vocabulary, the same fix that doubled Toyota's count yesterday (#1475), and found **4 campaigns** — including a recall and its own re-recall of the same tire-repair kit, and a loose-subframe-bolt recall on brand-new 2026 Pilots and Passports that the earlier tally never saw.

## Kill test

- **Genuinely newsworthy?** Yes. Second correction in two days from the same methodology flaw, completing the four-brand corrected census (Ford 40, GM 15, Toyota 15, Honda 4). The miss mechanism is the mirror image of Toyota's: the two campaigns the old tally missed hide behind hybrid-only nameplates ("Accord" 400s, "Accord Hybrid" returns rows). Fresh pegs: 26V663 (Sep 10) is a re-recall of cars already "fixed" under 26V366, and 26V424 (Jul 2) is new-model-year hardware — rear subframe bolts torqued wrong on the Alabama line.
- **Novel on site?** Yes. No prior brand-level Honda census exists; #1473/#815 only quoted Honda's count as a comparison column. 26V424 has never been covered here at all. 26V366/26V663 were covered as standalone stories (#1178, #1216, #1247, #1274) and 26V332 as #1135, but never as a census correction — the original contribution is the corrected count, the per-model table, and the four-brand comparison reset.
- **Original contribution:** the corrected 4-campaign census below (NHTSA recalls API, Nov 11, 2026), the vocabulary-gap diagnosis for Honda (base names 400, hybrid suffixes return rows), per-model counts, component mix, and the completed four-brand table — computed, not quoted.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 11, 2026. Method: VPIC canonical 2026 Honda light-vehicle list (12 models: Accord, Civic, Civic Si, Civic Type R, CR-V, HR-V, Odyssey, Passport, Pilot, Prelude, Prologue, Ridgeline), queried make+model+modelYear=2026 for every canonical name plus Hybrid and Plug-In Hybrid suffix variants (36 queries); kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at /tmp/rcl1476/census_raw.json and /tmp/rcl1476/campaigns.json. **Date-format trap:** ReportReceivedDate comes back as DD/MM/YYYY ("22/05/2026"), not ISO — a naive `startswith("2026")` filter returns zero campaigns. https://www.nhtsa.gov/recalls
2. **#1473 research file** (drafts/1473-ford-recall-census-40-new-model-campaigns-research.md) — the Nov 11 baseline this piece corrects: Ford 40, Toyota 7, Honda 2; "Honda 2 across 11 models." The 2 came from base-name queries only (Odyssey and Pilot/Passport return rows under their base names); the hybrid campaigns were invisible because "Accord" and "CR-V" 400.
3. **#1475 research file** (drafts/1475-toyota-recall-census-15-corrected-count-research.md) — the corrected-vocabulary method this census applies to Honda, and the corrected Toyota baseline (15) used in the comparison table.
4. **#815 research file** (drafts/815-ford-2026-model-year-recall-census-research.md) — the Sep 3, 2026 baseline: Ford 25, Toyota 5, Honda 2.
5. **#1135 research file** (drafts/1135-honda-cracked-capacitor-airbag-child-seat-research.md) — 26V332 details from the Part 573 report: 98,892 vehicles, 23 model entries (2016-2026 Honda/Acura), est. 1% with defect; capacitor in the front passenger seat weight sensor PCB may crack from humidity and short, letting frontal and knee airbags deploy at a child or small adult; expands 24V064 (750,000+ vehicles in 2024); 228 warranty claims, 0 injuries/deaths; remedy is a sensor swap.
6. **#1178 research file** (drafts/1178-honda-26v663-recall-of-a-recall-research.md) — 26V366: 1,049,883 vehicles (744,350 CR-V Hybrid, 305,013 Accord Hybrid, 340 CR-V Fuel Cell EV); 8 injuries from the sealant-bottle cap before the original recall. 26V663: 4,804 vehicles (2,058 Accord Hybrid, 2,745 CR-V Hybrid, 1 CR-V Fuel Cell EV); Honda estimates ~1% carry the defective nozzle, about 48 vehicles; the re-recall happened because a warehouse mix-up shipped pre-countermeasure nozzles as remedy parts and destroyed traceability.
7. **Honda News, "2026 Honda Pilot and Passport Rear Subframe Bolts Safety Recall"** (Jul 10, 2026): https://hondanews.com/en-US/honda-corporate/releases/release-197619b9ee3ec0adfccef0bd5f05bcef-2026-honda-pilot-and-passport-rear-subframe-bolts-safety-recall — 26V424: 3,933 vehicles (2,134 Pilot, 1,799 Passport), built Apr 27-May 15, 2026 at the Alabama plant; a new rear subframe pallet changed the line without updating the bolt-tightening equipment settings; 0 warranty claims; corrected in production May 15 by reverting to the old pallet; 75-minute fix.
8. **NHTSA owner notification letter, 26V424** (Aug 2026): https://static.nhtsa.gov/odi/rcl/2026/RCONL-26V424-0020.pdf — confirms the defect, the detachment risk, and the free inspection/bolt replacement.
9. **AutoEvolution, "Honda Issues 2026 Pilot and Passport Safety Recall Over Insufficiently Tightened Bolts"** (Jul 2026): https://www.autoevolution.com/news/honda-issues-2026-pilot-and-passport-safety-recall-over-insufficiently-tightened-bolts-272898.html — independent confirmation of 26V424's unit counts, production window, and cause.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1-Nov 11, 2026)

| Brand | Sep 3 (#815) | Nov 11, as published (#1473/#1474) | Nov 11, corrected |
|---|---|---|---|
| Ford | 25 | 40 | 40 |
| GM | — | 15 | 15 |
| Toyota | 5 | 7 | **15** (#1475) |
| **Honda** | 2 | **2** | **4** |

Honda is still the lowest by a wide margin: Ford's count is 10x Honda's (was 20x against the wrong 2), GM's and Toyota's are 3.75x. The correction halves the gap but does not change the ranking. Per model queried: Honda 4 across a 12-model lineup (5 nameplates with at least one campaign); Ford 40 across 14 models; Toyota 15 across 24; GM 15.

### The 4 campaigns

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V332 | May 22 | Air bags: occupant classification sensor | Front passenger seat weight sensor may crack and short, firing airbags at a child or small adult. Expands 24V064. 98,892 vehicles, 23 Honda/Acura model entries; 2026-MY coverage is the Odyssey (2018-2026). 228 warranty claims, 0 injuries. Sensor replaced. |
| 26V366 | Jun 5 | Tires: temporary/emergency spare tire | Tire repair kit sealant bottle builds pressure; the cap detaches and becomes a projectile. 1,049,883 vehicles (2023-2026 CR-V Hybrid, Accord Hybrid; 2025-2026 CR-V Fuel Cell EV). 8 injuries before the recall. Nozzle/sealant bottle replaced. |
| 26V424 | Jul 2 | Suspension: rear | 2026 Pilot and Passport rear subframe bolts tightened improperly — new pallet on the Alabama line, torque settings never updated. 3,933 vehicles (2,134 Pilot, 1,799 Passport), built Apr 27-May 15, 2026. 0 warranty claims; caught by production sampling. Bolts inspected/replaced; 75-minute fix. |
| 26V663 | Sep 10 | Tires: temporary/emergency spare tire | The same tire-kit defect, again. Cars already remedied under 26V366 need a new remedy: the warehouse shipped pre-countermeasure nozzles as fix parts. 4,804 vehicles; ~48 actually carry a bad nozzle, but traceability is gone so all 4,804 come back. |

### Per-model campaign counts (2026 MY, 2026 filings; multi-model campaigns count once per model)

| Model | Campaigns |
|---|---|
| Accord Hybrid | 2 (26V366, 26V663) |
| CR-V Hybrid | 2 (26V366, 26V663) |
| Odyssey | 1 (26V332) |
| Pilot | 1 (26V424) |
| Passport | 1 (26V424) |
| Civic, Civic Si, Civic Type R, CR-V (gas), HR-V, Prelude, Prologue, Ridgeline | 0 |

### Component mix (4 distinct campaigns)

Tires 2 (same defect, counted twice because the fix failed), Air bags sensor 1, Suspension 1. **0 of 4 flagged overTheAirUpdate=true** — same 0-for-40 as Ford, 0-for-15 as GM, 0-for-15 as Toyota. No brand in this census has shipped a single software fix over the air.

### Timing

May: 1. June: 1. July: 1. September: 1. No filings in January-April, August, October, or November (yet).

### How the undercount happened

The NHTSA recalls API returns HTTP 400 for a make+model+modelYear combination with no matching rows, and prior runs treated 400 as zero campaigns. That rule is correct for gas models with no recalls — but it is also what the API returns when the model name is wrong. Honda's 2026 lineup has the same trap Toyota's did: "accord" 400s, "accord hybrid" returns 26V366 and 26V663; "cr-v" 400s, "cr-v hybrid" returns the same two. The two campaigns the old tally counted — 26V332 (Odyssey) and 26V424 (Pilot/Passport) — are exactly the ones whose models answer under their base names. The two it missed are exactly the ones that only exist under hybrid suffixes. A second, independent trap: ReportReceivedDate arrives as DD/MM/YYYY ("22/05/2026"), so any filter that checks for a leading "2026" silently returns zero campaigns — the first pass of this census printed 0 before the parse was fixed.

### The recall of a recall

Two of Honda's four campaigns are the same defect. 26V366 (June, 1.05M vehicles) replaced the tire-kit nozzle; the warehouse then shipped pre-countermeasure nozzles as the remedy, so 26V663 (September, 4,804 vehicles) recalls the already-recalled cars for a second fix. Honda estimates about 48 of the 4,804 actually carry a bad nozzle. The other 4,756 come back because nobody can tell which boxes held the bad parts. Distinct defects in this census: three. Campaigns: four. Both numbers are in the article.

### The new-model-year hardware recall

26V424 is the only campaign in the census that touches 2026-only metal, and it is pure assembly error: a new subframe pallet went on the Alabama line, the bolt-tightening equipment settings were never re-evaluated, grease and gearbox adjustment were off, and the pallet clamp was misadjusted. Honda caught it by production sampling with zero warranty claims — the system worked — but 3,933 Pilots and Passports built over 19 days in April-May left the plant with under-torqued rear subframe bolts. The fix is a 75-minute inspection.

## Strongest counterargument

Campaign counts are not severity scores, and the corrected 4 flatters Honda's critics less than the headline suggests. Two of the four are the same tire-kit defect, so Honda has three distinct defects, not four — and one of those three (26V332) is an expansion of a 2024 recall whose 2026-MY footprint is a single model, the Odyssey. Strip the duplicate and the expansion and Honda is at two genuinely new 2026 defects, one of which (26V424) covers 3,933 vehicles with zero warranty claims and a 75-minute fix. The ranking does not move: Honda is still the lowest by a wide margin, and the correction is a methodology story, not a safety story — every one of these campaigns was in NHTSA's public database the whole time, filed on schedule, with owner letters mailed. Honda's reporting looks diligent here, not evasive. The count also cannot tell quality from reporting threshold: Ford's 40 partly reflects its November 2024 consent order pushing aggressive early filing.

The counterargument weakens on the two campaigns that are not paperwork and not duplicates: the tire-kit cap that injured eight people before the recall and then had to be recalled a second time because the fix itself was mis-shipped, and the subframe bolts on brand-new 2026 SUVs. Those are hardware, they are recent, and no duplicate-strip removes them.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The duplicate (26V366/26V663) is stated alongside the headline (4); the distinct-defect total is 3.
- NHTSA API vocabulary gaps remain the central risk: this census queried 12 VPIC canonical names plus 24 suffix variants, but a campaign could still hide under an untested spelling (e.g., "Prologue" 400s under every spelling tried; the 2026 Prologue may genuinely have zero campaigns, or its campaigns may live under a name this census never guessed). Mitigation: every 2026-filed campaign found was cross-checked against its summary's model list, and the two largest campaigns (26V332, 26V366) were confirmed in independent coverage and prior site research; the direction of any remaining bias is undercount, same as before.
- Unit counts (1,049,883 tire-kit; 98,892 seat sensor; 3,933 subframe bolts; 4,804 re-recall) are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 26V663 population overlaps 26V366's; the summed ~1.16M double-counts those 4,804 cars.
- Ford/GM/Toyota counts are from #1473/#1474/#1475's Nov 11 censuses; the Ford and GM counts used the base-name method and may carry the same vocabulary risk (the #1475 limitations section already flags a Ford/GM re-run as owed; Honda's correction is the third data point for that re-run, not a substitute for it).
- The 2026 model year is still in progress and late filings will move all four counts.
- NHTSA's overTheAirUpdate flag may undercount software remedies not flagged as such.

## Actionable takeaways

- If you own a 2023-2026 Accord Hybrid or CR-V Hybrid and had the June 2026 tire-kit recall done: check your VIN at nhtsa.gov/recalls. You may owe the dealer a second visit under 26V663, and the fix is free. Do not use the sealant kit on a flat before then.
- If you own a 2026 Pilot or Passport built April 27-May 15, 2026: the rear subframe bolt inspection is free and takes about 75 minutes. Listen for abnormal noise from the rear; if you hear it, do not wait for the letter.
- If you own a 2018-2026 Odyssey: the seat weight sensor recall (26V332) is a free sensor replacement. The warning sign is the SRS light plus the passenger airbag indicator staying off.
- If you are shopping a 2026 Honda: four campaigns across five nameplates is still the cleanest new-model record of the four brands — but "cleanest" now means four, not two, and two of the four are the same defect twice.
