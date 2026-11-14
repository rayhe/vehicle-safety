# Research: #1502 — Acura Filed One Recall for Its 2026 Cars. The Big One Covers 635,808 Older Ones.

**Number:** 1502
**Slug:** 1502-acura-recall-census-1-635k-excluded
**Journalist:** Clara Rollover (Consumer Safety Advocate; car-buying guidance, "what this means for you" — the article's payoff is exactly that: a 2026 Acura shopper reads "1 recall" and misses the 635,808-car steering recall on the used lot next door)
**Kicker:** The Gap
**Date:** November 14, 2026

## Angle (1-2 sentences)

Honda's luxury arm filed one recall campaign touching a 2026-model-year Acura. I ran the corrected-vocabulary census across Acura's five canonical 2026 models and found **exactly 1 campaign, 26V332, covering 4,806 Acuras — but Honda filed two more Acura recalls in 2026 that the census method excludes because they touch no 2026 model: the 635,808-vehicle steering recall (26V721) and the 880,514-vehicle subframe-rust recall (26V365)**. The count says 1. The fine print says 470,215 Acura vehicles were recalled in 2026, and the count misses all but 4,806 of them.

## Kill test

- **Genuinely newsworthy?** Yes. First Acura census on the site; completes the luxury-arm pair with Lexus #1501 and the Honda Motor Co picture (Honda 4, Acura 1, distinct defects 4). Fresh hooks: the method blind spot quantified (1 counted vs 470,215 excluded Acuras, a 98-to-1 ratio); the one-car TLX (a single 2023 TLX, built on one day, Feb 22, 2023, is the entire 2023 TLX population in 26V332); Acura adds zero distinct defects to Honda's 4, the mirror image of Lexus adding two to Toyota's 15; and the ZDX, the GM-built electric Acura, has zero campaigns.
- **Novel on site?** Yes. No prior brand-level Acura census exists. All three campaigns were covered as standalones (26V332 as #1135, 26V365 in the Honda corrosion pieces, 26V721 in full as #1457), but never as a census, never with the counted-vs-excluded arithmetic, and never with the Honda/Acura distinct-defect total. The original contribution is the 1-count, the per-model table, the 4,806 Acura-vehicle total, the 470,215 excluded-Acura total, the 1,615,214 three-filing campaign-unit total, and the distinct-defect finding — computed, not quoted.
- **Killed angles this run (duplicate screen):** GMC/Buick/Cadillac splits would recount GM's 15 (#1474/#1500). Kia standalone rehashes #1477 (Kia 4 inside the Hyundai-Kia census). Infiniti deferred — same luxury-arm pattern as Acura, but Acura goes first as the Honda parallel to Lexus #1501.

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 14, 2026. Method: VPIC canonical 2026 model list (5 Acura light-vehicle models: ADX, Integra, MDX, RDX, ZDX), queried make+model+modelYear=2026 for every canonical name plus Hybrid, Plug-In Hybrid, Electric, and Recharge suffix variants plus targeted trims (MDX Type S, Integra Type S, ZDX Type S, ZDX A-Spec) — 29 queries; kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. Raw results saved at drafts/1502-acura-recall-census-raw.json; deduped campaigns at drafts/1502-acura-recall-census-campaigns.json. **Date-format trap (same as #1476/#1501):** ReportReceivedDate comes back as DD/MM/YYYY ("22/05/2026"), not ISO. **API 400 trap:** the API returns HTTP 400 when a make/model/year combination has no recalls — 28 of 29 queries 400'd; only acura/mdx returned 200. A 400 is an empty result, not a failed query. A follow-up unfiltered query of acura/mdx/2026 returned only 26V332, confirming no 2025-filed campaign touches a 2026 Acura (unlike Lexus, which had two). https://www.nhtsa.gov/recalls
2. **NHTSA VPIC API** (vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear) — canonical 2026 model list for make "acura", Nov 14, 2026: 5 models (ADX, Integra, MDX, RDX, ZDX). The TLX is absent: Acura discontinued it after model year 2025, so there is no 2026 TLX to query.
3. **NHTSA Part 573 Safety Recall Report, 26V332** (May 21, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V332-6150.pdf — read in full Nov 14, 2026. 98,892 total, 1% defect estimate. Acura splits: TLX 2023: 1 (built Feb 22, 2023, a single day); TLX 2018-2021: 1,323; RDX 2019-2024: 1,083; MDX 2022-2026: 1,508; MDX 2017-2020: 891. Acura total 4,806. Defect: a capacitor in the printed circuit board of the front passenger seat weight sensor may crack from humidity and short, letting the frontal and knee airbags deploy despite an infant in a child seat, a child, or a smaller-than-AF5 adult for whom deployment should be suppressed. Cause: a natural disaster at a tier-2 supplier's plant led the tier-1 supplier (Aisin Electronics Illinois) to temporarily change the PCB base material without sufficient verification. Expansion attributed to three errors: supplier miscalculation of the defective-part production end date; inaccurate data correlating defective parts to vehicles; inadequate verification of vehicles affected by defective service parts. Chronology: Jan 25, 2024 defect determination for the original recall 24V064; Feb 18, 2025 supplier flagged additional units; Mar 10, 2025 a vehicle repaired outside the population surfaced; Apr 2025-Apr 2026 analysis including service parts; May 14, 2026 defect determination for this expansion. 228 warranty claims, 0 injuries, 0 deaths as of May 14, 2026. Production corrected Jan 7, 2022 (original verified base material restored). Remedy: dealer replaces the seat weight sensor, free; owner letters July 6, 2026.
4. **NHTSA Part 573 / acknowledgement record, 26V721** (Oct 29, 2026): https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V721-6050.pdf — 635,808 total; Acura 252,698 (MDX 2022-2024: 177,100; TLX 2021-2025: 75,598); Honda Pilot 2023-2025: 383,110. EPS software (Robert Bosch Automotive Steering) divides by zero in the Driver Attention Monitor road-condition compensation calculation; the error handler is configured to disable power steering assist. 100% defect estimate. 146 warranty claims, 1 injury, 0 deaths. First report Nov 29, 2021; defect determination Oct 22, 2026 (1,788 days); filed Oct 29, 2026. Owner letters Dec 14, 2026; VINs searchable Nov 11, 2026. Covered in full on this site as #1457.
5. **#1457 research + article files** (drafts/1457-honda-steering-divide-by-zero-failsafe-research.md, drafts/1457-honda-steering-divide-by-zero-failsafe.html) — the site's own verified 26V721 account (Vin Wreckage, Nov 10, 2026, avg 8.77, queued 2028-07-09): the two-bug mechanism, the deleted error codes that cost two years, the 24V744 worm-gear and 25V582 RDX-calibration predecessors, the owner complaint signature (straight road, sudden heaviness, dash lit up).
6. **Autoblog, "Honda Recalls More Than 880,000 Vehicles Over Rear Suspension Failure Risk"** (Jun 10, 2026): https://www.autoblog.com/news/recall-honda-suspension-failure-pilot-ridgeline-passport-acura-mdx — 26V365 per-model split: 2014-2020 Acura MDX, 217,517 affected. Total 880,514 across four model lines; salt-belt 23 states + DC; paint defect lets road salt corrode the rear subframe at the suspension mounting points; Honda aware since December 2021; 0 warranty claims, 0 injuries as of May 28, 2026; 1% defect estimate; owner letters July 7, 2026; dealers inspect and install a reinforcement kit.
7. **#1476 research file** (drafts/1476-honda-recall-census-4-corrected-count-research.md) — the Honda baseline (4 campaigns: 26V332, 26V366, 26V424, 26V663) and the corrected-vocabulary method; 26V332 is one of Honda's 4, counted via the Odyssey.
8. **#1135 research file** (drafts/1135-honda-cracked-capacitor-airbag-child-seat-research.md) — prior site coverage of 26V332; confirms 98,892 / 1% / 228 claims / 0 injuries and the 24V064 expansion.
9. **Consumer Reports, "Honda and Acura Recall SUVs and Trucks for Suspension Rust"** (Jun 2026): https://www.consumerreports.org/cars/car-recalls-defects/honda-and-acura-recall-suvs-and-trucks-for-suspension-rust-a1814402116/ — independent confirmation of 26V365 (880,514, MDX 2014-2020, salt-belt states, paint defect, no crashes or injuries reported).

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 14, 2026)

| Brand | 2026 campaigns | Models queried | Models with ≥1 campaign |
|---|---|---|---|
| **Acura** | **1** | 5 | 1 |
| Honda (for comparison) | 4 | 12 | 5 |

### The 1 Acura campaign

| Campaign | Date | Component | What it is |
|---|---|---|---|
| 26V332 | May 22 | Seat weight sensor (airbag occupant classification) | Capacitor in the sensor PCB cracks from humidity and shorts, so the passenger frontal and knee airbags can fire at a child or small adult they should stay silent for. 98,892 total; Acura 4,806. 1% defect estimate. 228 claims, 0 injuries. Expands 24V064. Dealer sensor replacement, free. |

### Acura vehicles in 26V332 (Part 573 model entries)

| Model | Years | Vehicles |
|---|---|---|
| TLX | 2023 | 1 |
| TLX | 2018-2021 | 1,323 |
| RDX | 2019-2024 | 1,083 |
| MDX | 2022-2026 | 1,508 |
| MDX | 2017-2020 | 891 |
| **Acura total** | | **4,806** |

The 2023 TLX population is one car, built February 22, 2023. One vehicle, one production day, its own line in a federal filing. The MDX 2022-2026 entry (1,508) is the only slice that touches a 2026 model year at all, and it spans five model years — the 2026-only count cannot be isolated from the filing.

### Per-model campaign counts (2026 MY, 2026 filings)

| Model | Campaigns |
|---|---|
| MDX | 1 (26V332) |
| ADX, Integra, RDX, ZDX | 0 |

Four of five nameplates carry zero 2026-filed campaigns touching a 2026 vehicle, including the brand-new ADX and the ZDX, the GM Ultium electric SUV.

### The excluded filings: what the count misses

| Campaign | Date | Component | Acura vehicles | Campaign total |
|---|---|---|---|---|
| 26V365 | Jun 4 | Rear subframe corrosion (salt belt) | 217,517 (MDX 2014-2020) | 880,514 |
| 26V721 | Oct 29 | EPS divide-by-zero, loss of assist | 252,698 (MDX 177,100; TLX 75,598) | 635,808 |
| **Excluded Acura total** | | | **470,215** | **1,516,322** |

All three 2026 filings touching any Acura, counted together: **1,615,214 campaign-units, 475,021 Acura vehicles**. The census counts 4,806 of those Acuras — 1.0%. For every Acura the census counts, 98 more were recalled in 2026 under campaigns the method excludes.

### The Honda comparison

| Brand | 2026 campaigns | Campaign-units (all three Acura filings) | Largest single campaign |
|---|---|---|---|
| Honda | 4 | — | 26V366, 1,049,883 |
| **Acura** | **1** | **1,615,214** | **26V365, 880,514** |

Honda filed 4 campaigns for its 2026 cars; Acura filed 1. But 26V332 is one of Honda's 4, so Acura adds zero distinct defects to the parent company: Honda Motor Co has 4 distinct 2026 defects across both brands. Lexus added two to Toyota's 15 (distinct 17). Acura added none to Honda's 4. The "Acura 1" is not a separate record; it is Honda's record with an Acura badge on one line.

### Updated census-series table (2026 campaigns, corrected-vocabulary method unless noted)

Ford 40, Stellantis 27, GM 15, Toyota 15, Hyundai 15, Chevrolet 13 (of GM's 15), Volvo 12, Mercedes 8, JLR 7, Nissan 7, BMW 7, Lexus 6, Lucid 5, Subaru 5, Honda 4, Kia 4, Tesla 4, VW 4, Genesis 3, Rivian 3, **Acura 1**, Audi 1, Mazda 0, Porsche 0. Acura ties Audi at the bottom of the brands that filed anything — and Audi's single campaign was a sunroof.

### Component mix (1 distinct campaign, counted)

Airbag sensor 1. **0 of 1 flagged overTheAirUpdate=true** — same 0-for-15 as Toyota, 0-for-4 as Honda, 0-for-40 as Ford. The excluded 26V721 remedy is a dealer software reprogram, not an over-the-air update, so the flag and the filings agree here as they did for Lexus.

### Timing

May: 1 (26V332). June: 1 excluded (26V365). October: 1 excluded (26V721). January-April, July-September, November: 0 counted filings. The two excluded filings bracket the counted one, and the biggest Acura recall of the year landed six days before Halloween.

## Strongest counterargument

Campaign counts are not severity scores, and the 1-count flatters Acura twice over. First, the method excludes the two biggest Acura filings of the year by construction: 26V721 and 26V365 touch no 2026 model, so a reader who takes "Acura: 1" as the brand's 2026 safety record is wrong by 470,215 vehicles. Second, the one counted campaign is not an Acura defect at all — it is a Honda defect (a seat sensor shared across 23 Honda/Acura model entries) that happens to include 4,806 Acuras, and only 1% of those (~48 cars) are estimated to actually carry the cracked capacitor. Strip the shared filing and Acura's own 2026 record is zero campaigns, zero defects, which is a true statement about new Acura metal and a misleading statement about Acura owners, since 252,698 of them are driving MDXs and TLXs that can lose power steering on a straight road. The honest headline is not "Acura had a clean year." It is "Acura's new cars had a clean year; Acura's recent cars did not."

The counterargument weakens on the one thing the count does prove: no 2026-model-year Acura carries a defect Honda has admitted to in 2026, and the census checked every nameplate including the brand-new ADX and the GM-built ZDX. That is a real finding about the cars on the lot today, even if it says nothing about the cars in driveways. And the method's exclusion is disclosed, not hidden: the 470,215 is in the article, in a table, with campaign numbers.

## Limitations

- Campaign counts are not vehicle counts or severity scores (see counterargument). The counted-vs-excluded distinction is the article's spine; both numbers are stated alongside the headline.
- Unit counts are the manufacturers' filed estimates for all model years in each campaign, not 2026-MY-only counts; the article states this. The 2026-MY-only Acura vehicle total cannot be computed from the filings (26V332's MDX 2022-2026 slice spans five model years). The 4,806 is Acura vehicles across all model years in the one campaign.
- Unlike Lexus, Acura has no 2025-filed campaigns touching a 2026 model: the unfiltered acura/mdx/2026 query returned only 26V332, and ADX/Integra/RDX/ZDX 2026 queries returned no rows at all. The exclusions in this article are all 2026 filings touching only older model years, not 2025 filings.
- NHTSA API vocabulary gaps remain the central risk: this census queried 5 canonical names plus 24 suffix/trim variants (29 queries), but a campaign could still hide under an untested spelling. Mitigation: the two largest Acura filings of 2026 (26V721, 26V365) were found independently through press and prior site coverage and cross-checked against the API; the direction of any remaining bias is undercount, same as before.
- The 26V365 MDX split (217,517) comes from Autoblog's reading of the Part 573, not from the filing read directly; the campaign total (880,514), 1% estimate, and 0 claims are confirmed in the NHTSA notice as republished by multiple outlets.
- The 2026 model year is still in progress and late filings will move the count.
- NHTSA's overTheAirUpdate flag undercounts software remedies (26V721's dealer reprogram is software, not flagged OTA).

## Actionable takeaways

- If you own a 2022-2026 MDX: the seat sensor recall (26V332) is a free dealer sensor replacement. The warning sign is the SRS light on with the passenger airbag indicator staying off. Only about 1% of the 1,508 MDXs in that slice are estimated to carry the defect, but the check is free.
- If you own a 2022-2024 MDX or a 2021-2025 TLX: the steering recall (26V721) is the one that matters, and it is not in the census count. Check your VIN at nhtsa.gov/recalls now; do not wait for the December 14 letter. The signature is steering that suddenly goes heavy while driving straight, with EPS warning lights on the dash. The fix is a free dealer reprogram. Full account: #1457 on this site.
- If you own a 2014-2020 MDX and live in one of the 23 salt-belt states plus DC: the rear subframe recall (26V365) is a free inspection plus reinforcement kit, and if the subframe is corroded the dealer repairs or replaces it free. Salt-belt owners should check their VIN even if the car spent winters elsewhere; the recall keys on where the car was sold or registered.
- If you are shopping a 2026 Acura: the census says one recall across five nameplates, and that is accurate for new metal — the ADX, Integra, RDX, and ZDX carry zero 2026 filings. But shop used Acuras by campaign, not by badge: a 2022-2024 MDX and a 2021-2025 TLX each carry the steering recall, and a 2014-2020 MDX in the salt belt carries the subframe recall. Check any used Acura VIN against 26V721 and 26V365 before signing, not just 26V332.
