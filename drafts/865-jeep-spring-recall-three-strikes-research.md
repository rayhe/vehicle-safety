# Research Notes — #865: Jeep Grand Cherokee Rear Coil Spring Recall (Third Campaign)

**Slug:** 865-jeep-spring-recall-three-strikes
**Journalist:** Mia Crumplezone (Safety Engineering Editor — suspension engineering analysis)
**Kicker:** Investigation
**Date:** 2026-09-09

## Kill test
- Fresh: recall announced Sept 2026, interim owner letters Sept 29–Oct 7, VINs searchable on NHTSA from Sept 9. ✅
- Novel angle: this is the THIRD NHTSA campaign for the same rear coil spring defect on the same vehicles. Campaign genealogy with population growth 345K → 80.6K → 328K, and the remedy changed from "inspect and repair if needed" to "replace both lower isolators on every vehicle." Nobody in the press coverage framed it as: FCA stopped trusting its own inspection after the repair of the repair failed. ✅
- Duplication check: no coil-spring/Jeep suspension story in stories/ (jlr-clockspring-grease-recall is a Land Rover electrical part, unrelated). Closest thematic neighbor is #864 (GM L87 engine recall-of-recall) — different defect family, different journalist (Rex), distinct. ✅
- Paradox for Mia: Grand Cherokee FARS rate 0.51/100M VMT — safer than Explorer (1.54), Wrangler (0.84), Cherokee (1.73). Statistically safe in crashes, structurally coming apart at the springs. Engineering story, not a "Jeep bad" story.

## Campaign genealogy (all from cited press / NHTSA filings)
1. **23V413 / FCA 64A (June 1, 2023):** rear coil spring may be incorrectly installed / detach. ~345,000 Grand Cherokee + Grand Cherokee L. Dealer instruction: inspect rear spring assembly, repair where necessary (~20 min inspection, up to 4 hrs repair).
2. **26V051 / FCA 20D (Jan 2026):** 80,620 vehicles — "recall of the repair." Defect: rear coil spring may not have been correctly installed during the 23V413 repair, or 23V413 never completed. Estimated defect rate 0.5%. Vehicles inspected-without-repair excluded. Formally replaced 23V413. Known at filing: 20 customer assistance records, 284 warranty claims; no accidents/injuries.
3. **26V562 / FCA 89D (Sept 2026):** 328,381 vehicles. Replaces 26V051 AND 23V413. Remedy change: **replace both lower rear coil-spring isolators on every affected vehicle** — inspection alone no longer accepted. Estimated defect rate 0.1%. No accidents/injuries reported.

Population math (original): 328,381 / 80,620 = **4.07x** growth between campaign 2 and 3. 0.1% × 328,381 ≈ **328** vehicles estimated actually defective. So ~328K dealer visits to fix ~328 cars.

Breakdown (TFLcar, from FCA filing): 97,477 two-row GC (built May 17, 2021–May 31, 2023); 215,433 GC L (built Dec 5, 2020–May 31, 2023); 15,471 GC 4xe (built Aug 4, 2021–May 31, 2023). Air-suspension vehicles excluded (different design). Post-2023 model years not affected.

## FARS data (primary, fars_output.js)
- Jeep Grand Cherokee: deaths 1161 (10 yr), annual 116.1, crashes 2637, fleet 1,837,500, vmt 22,969, **rate 0.51** deaths/100M VMT.
- Segment comparison: Explorer 1.54, Tahoe 2.49, Wrangler 0.84, Cherokee 1.73, Highlander 0.42, RAV4 0.19, Equinox 0.36. Grand Cherokee sits in the safer half of midsize/large SUVs — 3x safer than Explorer per mile, 5x safer than Tahoe.
- Model-year deaths trend: 2021:27, 2022:7 (WL generation is new in FARS window; 2014-2023 data barely covers the 2021-2023 WL population in the recall).

## Engineering note (for the article's technical core)
- Coil spring sits on lower isolator (rubber/polymer pad) on the spring seat; isolator centers the spring, absorbs vibration, prevents metal-on-metal fretting. If the isolator is worn/cracked/misinstalled, the spring can walk off the seat under load (pothole, cornering) and detach at speed. Detached spring = road hazard for others + sudden loss of rear ride height/alignment for the driver.
- The interesting engineering tell: FCA moved from inspection-based remedy to blanket isolator replacement. That is an admission that visual inspection could not reliably catch the failure mode — either because the misalignment is subtle or because the dealer network botched the earlier inspections (see 26V051: the repair of the repair).

## Actionable takeaways (required)
1. Own a 2021–2023 Grand Cherokee (two-row, L, or 4xe) WITHOUT air suspension? Check your VIN at nhtsa.gov/recalls — searchable from Sept 9, 2026.
2. Already had the 23V413 or 26V051 repair done? You are STILL included. Go back. The new remedy is different (replace both lower isolators, not inspect).
3. Interim letters Sept 29–Oct 7; final-remedy availability letter date TBA. Do not wait for the letter if you hear clunking from the rear suspension.
4. Recall 89D is free; FCA customer service 1-800-853-1403.

## Limitations (required)
- FARS data covers 2014–2023 and does not isolate spring-detachment crashes; I cannot attribute any specific fatality to this defect.
- NHTSA and FCA both report zero known accidents/injuries linked to the defect. The risk is theoretical-but-plausible, not demonstrated.
- Stellantis's 0.1% defect estimate means ~99.9% of the 328,381 dealer visits will find nothing — the owner cost is time, not safety, for most.
- FARS model-year data barely covers the WL generation (2021–2023); the 0.51 rate is dominated by older WK2-generation vehicles, so the rate comparison is approximate for the recalled population.

## Strongest counterargument (required)
This may be regulatory theater, not a safety crisis: zero injuries across three campaigns, a 0.1% estimated defect rate, and the WL Grand Cherokee's fatality record is genuinely good. The recall exists because the defect is cheap to imagine killing someone (spring on the freeway) and expensive to ignore legally — not because springs are raining off Grand Cherokees. FCA's blanket isolator replacement is the cheapest way to close an open file, not proof the inspection regime was blind. A reader could fairly conclude the safest move was the one FCA took and the whole saga is paperwork.

## Sources
1. USA Today, "FCA recalls 328K Jeep Grand Cherokees. See impacted vehicles," Taylor Ardrey, Sept 8, 2026. https://www.usatoday.com/story/cars/recalls/2026/09/08/jeep-grand-cherokee-recall-rear-coil-springs/91655083007/
2. TFLcar, "Jeep Recalls More Than 328K Grand Cherokee SUVs for Rear Suspension Defect," Sept 2026. https://tflcar.com/2026/09/jeep-grand-cherokee-rear-suspension-recall-update/
3. Road Ethos, "Jeep's Third Grand Cherokee Spring Recall Is Four Times Bigger Than the Last," Sept 2026. https://roadethos.com/car-buying/jeeps-third-grand-cherokee-spring-recall-is-four-times-bigger-than-the-last
4. ConsumerAffairs, "Auto Safety Recall Derby - Week of September 07," Sept 8, 2026 (NHTSA ID 26V562000). https://www.consumeraffairs.com/news/auto-safety-recall-derby-week-of-september-07-090826.html
5. Autoblog, "Jeep Recalls 328,381 Grand Cherokees for a Problem Two Recalls Didn't Fix," Sept 6, 2026. https://www.autoblog.com/news/jeep-recalls-328381-grand-cherokees-for-a-problem-two-recalls-didnt-fix
6. Carscoops, "Jeep Fixed These SUVs Once, But The Suspension Could Fall Off Anyway" (26V051 detail: 80,620 vehicles, 20 customer records, 284 warranty claims). https://www.carscoops.com/2026/02/jeep-grand-cherokee-recall-repair-failure/
7. NHTSA FARS 2014–2023 (local fars_output.js) / https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
8. NHTSA recalls database. https://www.nhtsa.gov/recalls
