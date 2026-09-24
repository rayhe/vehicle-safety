# Research: #984 — Nissan VC-Turbo recall math

Journalist: Axle McScatter (Data Visualization Editor). Kicker: "By The Numbers".
Slug: 984-nissan-vc-turbo-recall-math
Working title: "Nissan's Miracle Engine Has Been Recalled Three Times. The Warranty Lasts Ten Years."

## Kill test
Genuinely newsworthy? Yes. Nissan bet its best-selling vehicle (the Rogue) on the first mass-market variable-compression engine, and that engine is now on its third round of federal recalls, with engines seizing mid-drive and Nissan extending warranties to 10 years / 120,000 miles. The novel angle is Axle's: the arithmetic of the failure. Nissan's own numbers (444,000 recalled, 1.2% defect estimate, 690 warranty claims by Feb 2026) plus the shrinking interval between fixes (2023 probe -> 2025 recall -> Feb 2026 dual recall -> Mar 2026 warranty extension: 18 months, then 7, then 1) show a problem accelerating, not resolving. And the official "fix" is a mechanic eyeballing your oil pan for metal shavings.

## Timeline (verified)
- 2019: VC-Turbo 1.5L 3-cylinder debuts in Infiniti QX50; first mass-market variable-compression engine. Later in Altima (2.0L) and Rogue.
- 2023: federal NHTSA investigation into VC-Turbo engine failures opened (per CarComplaints).
- 2025-06-27: NHTSA campaign 25V437 (ENGINE HARD PARTS INTERNAL/MECHANICAL) for 2021-2024 Rogue, 2019-2020 Altima, 2019-2022 QX50, 2022 QX55. ~444,000 vehicles. Defective main, A-, C-, L-link bearings. Nissan told NHTSA only ~1.2% of engines may have bad bearings. Owner notices mailed Aug 2025.
- 2026-02-12: NHTSA campaign 26V080 (ENGINE HARD PARTS) - bearing failure expansion for 2023-2025 Rogue VC-Turbo; damaged blocks leak oil, fire risk.
- 2026-02-12: NHTSA campaign 26V081 (THROTTLE BODY) - ECM software defect weakens throttle body internal gears until they fracture; 2024-2025 Rogue.
- 2026-03-11: second warranty extension - 10 years / 120,000 miles on VC-Turbo long block assemblies for 2023-2025 Rogues (follows 2025 extension for 2021-2024). Covers only recalled defects; vehicle must be registered and maintained per Nissan schedule. Nissan reimburses prior out-of-pocket repairs within VIN range.
- As of mid-Feb 2026: 690 warranty claims related to engine failure; Nissan estimates less than 1% of 323,917 vehicles have failed.

## Original calculations (Axle's contribution)
- 1.2% of 444,000 = ~5,328 engines Nissan itself expects to have bad bearings. 690 warranty claims is already ~13% of that estimated population, with the fleet still young.
- Less than 1% of 323,917 failed = fewer than ~3,239 failures so far, but failures skew to higher mileage/heat exposure, and the 2022-2026 fleet is barely broken in.
- Fix cadence: 2023 investigation -> Jun 2025 recall (18 months) -> Feb 2026 dual recall (7 months) -> Mar 2026 warranty extension (1 month). The interval between interventions is collapsing.
- NHTSA complaints API (queried 2026-09-24): 2023 Rogue returns 130 ENGINE + 108 ENGINE AND ENGINE COOLING complaints, the two largest complaint buckets by far; 2024 Rogue is lower (40 UNKNOWN OR OTHER, 21 POWER TRAIN/ENGINE) but the VC-Turbo population skews newer.
- The recall remedy for bearings is inspection of the oil pan for metal debris; clean = oil change + ECU reprogram, debris = full engine replacement. A visual check for metal confetti is the diagnostic for a 2020s powertrain.

## Site overlap check
No prior Rogue, VC-Turbo, engine-failure, or warranty-extension coverage in the 191-item queue or published stories. Zero Nissan coverage site-wide until #984. Takata/airbag angles (808, 824, 932, 958) are unrelated.

## Primary sources (3+ required)
1. NHTSA recalls API, api.nhtsa.gov, queried 2026-09-24: 2024 Rogue recalls 24V748 (2024-03-10, back-over prevention), 25V437 (2025-06-27, engine hard parts), 26V080 (2026-02-12, engine hard parts), 26V081 (2026-02-12, throttle body); 2025 Rogue 26V080 + 26V081. (primary)
2. NHTSA complaints API, api.nhtsa.gov, queried 2026-09-24: 2023 Rogue complaint component counts (130 ENGINE, 108 ENGINE AND ENGINE COOLING). (primary)
3. CarComplaints.com, "Nissan Rogue Engine Warranty Extension For VC-Turbo," March 11, 2026: two February recalls, bearing/oil-leak/fire details, throttle body assembly, 10yr/120k extension scope, reimbursement. https://www.carcomplaints.com/news/2026/nissan-rogue-engine-warranty-extension-vc-turbo.shtml
4. CarComplaints.com, "Nissan VC-Turbo Engine Warranty Extension," August 30, 2025: 444,000 recalled, 1.2% estimate, vehicle list, 2023 investigation. https://www.carcomplaints.com/news/2025/nissan-vc-turbo-engine-warranty-extension.shtml
5. Autoblog, "Nissan Rogue Owners Get 10-Year Engine Warranty After Multiple Recalls" (crawled 2026-09-24): three Rogue recalls enumerated, extension terms, VC-Turbo specs. https://www.autoblog.com/news/nissan-rogue-warranty-extension-vc-turbo-engine
6. Secondary detail: 690 warranty claims mid-Feb 2026, <1% of 323,917 failed, oil-pan inspection procedure (aggregators of NHTSA filings; flagged as secondary).

## Counterargument (full strength)
Only ~1% of these engines fail; 99% of VC-Turbo Rogues run fine. Variable compression is genuine engineering innovation, not a gimmick. The 10-year/120k warranty is one of the strongest consumer protections an automaker has offered on a powertrain, and Nissan reimburses prior repairs. A recall remedy that inspects and replaces engines is the system working. Complaint counts are owner-reported and skew toward the vocal minority.

## Limitations
- Complaint and warranty-claim counts are owner/manufacturer-reported, not independently verified; cannot derive a true per-vehicle failure rate from public data.
- The 1.2% and <1% figures are Nissan's own estimates to NHTSA.
- Engine seizure at speed is dangerous, but FARS does not attribute fatalities to engine failure, so no fatality-rate claim is made.
- Throttle-body gear fracture cost figures ($2,000-3,500) appear only in secondary aggregators; not asserted as fact.
- Some recall population figures come from press aggregators of Part 573 filings, not the PDFs themselves.

## Actionable takeaways
- Own a 2021-2025 Rogue, 2019-2020 Altima, 2019-2022 QX50, or 2022 QX55? Check your VIN at nhtsa.gov/recalls and get the recall work done; the 10yr/120k extension only covers recalled defects and requires the vehicle be registered and maintained per schedule.
- Warning signs per Nissan: check-engine light, knocking/ticking, rough idle, oil pressure warning. Do not keep driving on a knocking VC-Turbo.
- Keep every receipt: Nissan's reimbursement plan covers prior out-of-pocket engine repairs within the VIN range.
