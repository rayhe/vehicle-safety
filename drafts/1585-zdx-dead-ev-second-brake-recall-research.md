# Research: #1585 — Acura's First EV Is Dead. Its Brakes Just Got Recalled a Second Time.

**Slug:** 1585-zdx-dead-ev-second-brake-recall
**Journalist:** Vin Wreckage (Existential Dread Columnist — the paradox beat: a discontinued car whose brakes keep failing, fixed by the company that built it for a different badge)
**Kicker:** Existential Dread
**Date researched:** 2026-11-25

## Story in one line
Acura recalled 14,648 all-wheel-drive 2024 ZDX electric SUVs on November 5, 2026, because brake software can silently release brake pressure at low speeds — a 3.5x expansion of a 2024 recall for the same defect, triggered not by Acura's own testing but by General Motors, the company that built the car and supplied the brake software, handing Honda the results of its own investigation; the ZDX is no longer in production, and the brake recall is both the first and the latest of six campaigns on the car.

## Kill test
- **Genuinely newsworthy?** YES. NHTSA campaign 26V735, filed November 5, 2026, reported November 13-17. A brake-pressure-loss defect on a car whose entire AWD production run is affected (Part 573 estimates 100% of the recalled population carries the defect). No prior article on this site covers 26V735 — full-repo grep for "26V735" returns zero hits. ZDX mentions on the site are only about GM's eBoost investigation (#790, #835, #1050, #1380, #1387), never this campaign.
- **Novel angle on data?** YES, four ways. (1) The 3.5x expansion: 4,174 cars in 24V614 (August 2024) to 14,648 in 26V735 — and the public record does not say whether the first 4,174 sit inside the new total, so owners who already got the 2024 fix cannot tell from the filing whether they need another one. (2) The GM homework: GM manufactured the ZDX, GM is the Tier 1 supplier of the brake software, GM investigated its own Ultium brake software (its own recall 26V717 covered 67,380 Cadillacs and Chevrolets), and GM handed the findings to Honda on October 19-22, 2026. Honda decided on the expanded recall ten days later. The same software, two badges, two recalls. (3) The dead-car frame: the Part 573 filing's own words — "The affected model is no longer in production." Six NHTSA campaigns on the 2024 ZDX in 27 months (verified against the NHTSA recalls API, count 6), and the brake software bookends the list: first campaign, August 2024; latest campaign, November 2026. (4) The five-condition coincidence: the defect only fires when wheel slip from turning and light braking coincides with a road disturbance and a release-and-reapply of the pedal, on a high-friction surface. A bug that needs five things to go wrong at once, at parking-lot speed, with no warning.
- **3+ primary sources?** YES. (1) NHTSA Part 573 Safety Recall Report 26V735 (RCLRPT-26V735-0595.pdf), read directly — population, defect, cause, chronology, remedy, schedule, 100% defect estimate. (2) NHTSA acknowledgment letter RCAK-26V735-6219.pdf, November 13, 2026, read directly. (3) NHTSA recalls API (api.nhtsa.gov, queried Nov 25, 2026): exactly 6 campaigns on the 2024 ZDX, confirming the bookend frame. (4) The Brake Report, November 16-17, 2026, corroborating the Part 573 chronology and the nine software part numbers. (5) GM recall 26V717 context from this site's own #1387 research (67,380 Lyriq/Blazer EV/Celestiq/Vistiq, October 29, 2026).
- **Verdict:** PROCEED.

## Verified facts (primary sources)
1. **The recall (NHTSA Part 573, RCLRPT-26V735-0595.pdf, filed Nov 5, 2026):** 14,648 2024 Acura ZDX, all-wheel-drive only, built December 19, 2023 to January 22, 2025. Rear-wheel-drive ZDXs not affected. "Estimated percentage with defect: 100%." Defect: "Due to an improper software configuration of the electric brake control module (EBCM), certain operating conditions may cause a temporary reduction or loss of brake pressure at low speeds." Safety risk: "A reduction or loss of brake pressure can result in reduced braking capability and increased stopping distance without warning, increasing the risk of a crash or injury."
2. **The cause (same Part 573):** "General Motors (GM), which manufactured the affected vehicles, informed Honda of the software miscalculation and condition. The software logic used to calculate vehicle reference speed (Vref) may become unstable when wheel slip associated with turning and light braking occurs together with travel over a road disturbance and release/reapplication of the brake pedal. On a high-friction surface, the unstable calculation may incorrectly determine that the wheels are in deep slip and command an inappropriate reduction in brake pressure." GM is listed as the Tier 1 supplier of the EBCM software; the filing names nine software part numbers (88357331-88357336, 86404384, 86404385, 86345589).
3. **The chronology (same Part 573):** August 8, 2024 — Honda determined a defect existed and recalled 4,174 ZDXs (24V614). October 19, 2026 — Honda received new information from GM and opened further investigation. October 22, 2026 — GM provided Honda the results of its investigation and analysis. October 29, 2026 — Honda decided to conduct the expanded recall. "As of October 29, 2026, Honda has not received any warranty claims, nor reports of injury or death related to this issue."
4. **The remedy and schedule (Part 573 + RCAK letter):** Free EBCM software update, over-the-air for owners who accepted the terms, or at an Acura dealer. Dealer notification November 6, 2026. Owner letters December 14, 2026 — 39 days after the filing. Acura recall number CQC; Acura customer service 1-800-382-2238; NHTSA hotline 1-888-327-4236. "Identify how/when recall condition was corrected in production: The affected model is no longer in production."
5. **The six campaigns (NHTSA recalls API, queried Nov 25, 2026):** 2024 Acura ZDX, count 6 — 24V614 (brakes, Aug 15, 2024), 25V018 (propulsion system cables, Jan 17, 2025), 25V234 (front stabilizer bar, Apr 11, 2025), 26V112 (back-over prevention software, Feb 27, 2026), 26V306 (back-over prevention camera, May 15, 2026), 26V735 (brake software, Nov 5, 2026). Brake software is the first and the latest.
6. **The GM side (site's own #1387 + secondary coverage):** GM recalled 67,380 Lyriq, Blazer EV, Celestiq and Vistiq EVs under 26V717 (October 29, 2026) for brake software of its own. GM's investigation into its own cars produced the findings it handed Honda on October 19-22. The ZDX expansion and GM's own recall were decided within days of each other. The ZDX is a GM Ultium vehicle wearing an Acura badge — the same platform, the same brake module supplier, the same software family.

## Original computations (show work in article)
- Expansion ratio: 14,648 / 4,174 = **3.51x**. The second recall is three and a half times the first.
- Time between decisions: August 8, 2024 to October 29, 2026 = **812 days**. The defect lived in the open for 27 months between the first recall and the admission that the first recall was not enough.
- Defect rate: Part 573 estimates **100%** of the recalled population carries the defect — all 14,648 cars, not a fraction of them. Compare GM's 26V717, where the defect estimate was a small percentage of the population.
- Letter lag: November 5 filing to December 14 letters = **39 days**. The 2024 letters also took 39 days (Aug 15 report, Sept 23 letters). Same delay, twice.
- Campaign density: 6 recalls in 27 months on a single model year of a car that sold in small numbers and is now discontinued — roughly one federal safety action every 4.5 months of the car's life.

## Strongest counterargument (must appear at full strength)
Fourteen thousand cars is a small recall, nobody has been hurt, there are zero warranty claims, and the fix is free and arrives over the air without a dealer visit. The 2024 recall may have covered the cars that actually exhibited the fault, and the expansion may simply be Honda and GM being conservative about a software edge case that requires five simultaneous conditions to trigger. The "3.5x expansion" framing overstates the drama: 26V735 may include the original 4,174 inside the 14,648, meaning the genuinely new population is 10,474, not 14,648. And the ZDX's six recalls include a rear camera and a stabilizer bar — ordinary car stuff, not evidence of a cursed vehicle. A fair reader could conclude this is the system working: a supplier found a bug, told the customer, the customer recalled the cars, nobody got hurt. That reading is available and the article should not hide it. But it is worth noting what it leaves out: the first recall was filed in August 2024, GM's investigation did not reach Honda until October 2026, and in between, every AWD ZDX on the road carried brake software that could silently release pressure at low speed. Zero claims is good luck, not proof of safety, when the failure mode produces no warning and leaves no code an owner would notice.

## Limitations (must appear in article)
- FARS has no ZDX data: the model is too new for the 2014-2023 FARS file, so there is no real-world fatality rate to cross-check. The article says so rather than borrowing a rate from another car.
- The 14,648 vs 4,174 overlap is unresolved in the public record. NHTSA's summary and the Part 573 do not state whether the original 4,174 are counted inside the new total. The article must flag this as an open question, not pick an interpretation.
- No warranty claims and no injury or death reports as of October 29, 2026, per Honda's own filing. The severity claim rests on the failure mode (silent brake-pressure loss), not on observed harm.
- The 2024 recall's own defect description (ABS "overly sensitive" below 25 mph on dry pavement) and the 2026 description (Vref instability) are the two filings' words; whether they describe the same root cause or two facets of it is not stated in either filing.
- GM's 26V717 is a related but distinct campaign: different defect description (eBoost software), different population. The article connects them through the shared Ultium brake-software lineage and the October 2026 information-sharing, not by claiming they are the same defect.

## Actionable takeaways (required)
- If you own a 2024 Acura ZDX AWD: your VIN will be searchable at nhtsa.gov/recalls (the Part 573 does not give a VIN-searchable date; check now and again after December 14). Do not assume the 2024 brake update cleared you — call Acura at 1-800-382-2238, give recall number CQC, and ask two things: whether your car is in the expanded population, and whether you need a second update even if you already had the first one.
- If the OTA update is offered: take it. It is free, it arrives without a dealer visit, and it is the only fix. Owners who declined OTA terms in the car's setup need a dealer appointment instead.
- If you are shopping for a used ZDX: the car is discontinued, the brake software is on its second recall, and there are five other campaigns on the 2024 model year. Check the VIN against all six before buying, and confirm the EBCM update is installed — a used ZDX with the old software still carries a silent brake-pressure-loss defect at low speed.
- The broader lesson: on a software-defined car, the recall and the remedy can both arrive over the air, but so can the defect. A brake bug that needs five simultaneous conditions to trigger is exactly the kind of bug no test drive will find.

## Killed angles this run (do not resurrect)
- BMW water-pump fire recall 26V733 (720,796, park outside): #1490. Dead.
- Honda Takata desiccant 26V765 (810,592): #1583. Dead.
- Toyota Takata 26V748 (314,029): #1563. Dead.
- Honda power steering EPS 26V721 (635,808): #1457. Dead.
- Ford Transit BCMC freeze 26V727 (60,956): #1537. Dead.
- Ram 1500 Classic ABS 26V756 (82,843): #1568. Dead.
- JLR hybrid stall 26V599: #1352. Dead.
- Toyota RAV4 PHEV stall 26V659 (30,978): #1130, #1166, #1233. Dead.
- Hyundai Ioniq 9 seat trap 26V588: #933 (Sept 2026 filing; the Nov 18 trade-press piece re-reports the same campaign). Dead.
- VW Tiguan BCM 26V587: #951. Dead.
- Lincoln Navigator chauffeur-seat 26V691: #1423. Dead.
- Ford Explorer side-airbag burns PE26008: #1447. Dead.
- White House trucker-crackdown claim / H1 2026 NHTSA estimates: #1569, #1494. Dead.
- Waymo school-bus RQ26006: #1445; Waymo thread saturated. Dead.
- Honda stop-start EA (1,033,632, 701 complaints): #1527. Dead.
- Rivian tire placard / tire-info recall (1,619, Nov 25): #1581 covered the tire-sticker theme. Dead.
- NHTSA H1 2026 early estimates DOT HS 813 875 (16,750 deaths, rate 1.02): #1494. Dead.
