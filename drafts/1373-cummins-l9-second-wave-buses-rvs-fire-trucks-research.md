# Research Notes — #1373: The Cummins L9 hose reaches fire trucks, motorhomes, and city buses

## Story thesis
The defective Cummins L9 remote fuel filter hose is not done cascading. After Cummins' own September equipment recall (39,052 engines, 26E066) and PACCAR's October 21 truck recall (26,729 trucks, 26V700, covered as #1337), a second wave of manufacturers filed in October: Daimler Truck North America (2,592 vehicles, 26V660), Tiffin motorhomes (177, 26V662), and Sutphen fire trucks (410, 26V661). Then, on October 27, Nova Bus filed the same-wording defect for 453 transit buses (26V712). The new angle is who carries the risk now: not just freight, but passengers on city buses, families sleeping in motorhomes, and fire crews driving to emergencies in trucks that can stall and leak diesel near an ignition source.

## Kill test — PASS
- Novel? Yes. #1337 covered PACCAR 26V700 plus the MX-13 lawsuit; it listed Daimler/Autocar counts as unknown. The DTNA count (2,592), Tiffin count (177) with Part 573 detail, Sutphen count (410), and Nova Bus filing (Oct 27, after #1337's research window) are all new. No existing draft covers 26V660, 26V661, 26V662, or 26V712 (verified: filename grep + drafts grep for the campaign numbers and Sutphen/Nova-LFS return only unrelated older files).
- Newsworthy? Yes. Fire risk + stall risk in passenger-carrying and emergency vehicles; notification letters stretch to December 26 for Nova Bus; the cascade total keeps climbing.
- 3+ primary sources? Yes: NHTSA Part 573 report for Tiffin 26V662 (static.nhtsa.gov PDF), NHTSA campaign records via automotor.news (Nova 26V712, Sutphen 26V661, both checked against nhtsa.gov records), Transport Canada recalls (PACCAR 2026518, Tiffin 2026487), Land Line Media (Paccar/Cummins background), RV News weekly list (DTNA 2,592).
- Data-driven? Yes: second-wave tally, full-cascade tally, notification-gap arithmetic, 3%-vs-100% denominator observation, remedy part numbers.

## Primary sources
1. NHTSA Part 573 Safety Recall Report 26V662 (Tiffin, submitted Oct 8, 2026; static.nhtsa.gov PDF): 177 units (144 Allegro Bus + 33 Phaeton), 2022-2025, Cummins L9 part D563027BX03, population set by Cummins engine-serial-number list; "Estimated percentage with defect: 100%"; remedy = hoses with improved connector crimps (Cummins parts 6552994, 6553001, 6553018); Cummins stopped using suspect hoses on new engine builds 04/11/2026; letters expected Nov 20, 2026; Tiffin TIF-150, contact 1-256-356-8661. Chronology: Tiffin got Cummins' email Oct 6; 191 chassis identified, 177 US + 14 Canada.
2. NHTSA campaign 26V661 (Sutphen, report received Oct 8, 2026; via automotor.news checked against nhtsa.gov): 410 model-year 2021 fire trucks, Cummins L9 part D563027BX03, same hose-separation defect; Cummins dealers replace hoses free; letters expected Dec 7, 2026; Cummins C7311; no park-it/park-outside advisory in the record reviewed. Same article notes Sutphen's earlier fuel-hose recall 21V-581 (received July 29, 2021).
3. NHTSA campaign 26V660 (DTNA, report received Oct 7, 2026; via automotor Sutphen article + RV News weekly list): 2,592 vehicles — 2022-2025 Freightliner Business Class M2, 2022-2027 FCCC XCM/XCR, 2023 Freightliner 108SD, 2024-2027 FCCC XCS/XBS with Cummins L9; letters expected Nov 20, 2026; DTNA F1042; contacts DTNA 1-800-547-0712, Cummins 1-800-286-6467.
4. NHTSA campaign 26V712 (Nova Bus, report received Oct 27, 2026; via automotor.news checked against nhtsa.gov): 453 buses — 2022-2024 LFS, 2023 LFS Artic; remote fuel filter hoses may separate from fitting; letters expected Dec 26, 2026; Nova CR5969, contact 1-800-350-6682; record reviewed does NOT name the Cummins engine part, so the Cummins link for Nova is unconfirmed — the filing uses identical defect wording.
5. NHTSA equipment recall 26E066 (Cummins, Sept 29, 2026; via oemdtc): 39,052 L9 engines, part D563027BX03; letters expected Nov 20, 2026; Cummins C7311; engines remedied under 23E055/24E038/25E004 need the new redesigned parts.
6. NHTSA campaign 26V700 (PACCAR, Oct 21, 2026; via #1337 research + Land Line Oct 28): 26,729 Kenworth/Peterbilt trucks; Paccar 26PACJ; letters Dec 20, 2026; Cummins estimates only 3% of the recalled population actually carries the defective hose.
7. Land Line Media, Oct 28, 2026: "more than a dozen manufacturers purchased the Cummins L9 engines"; Paccar + Daimler Truck account for ~75% of all Cummins L9 engine recalls; drivers' early warnings are diesel smell, visible leak, low fuel pressure warning; no warranty claims or injuries reported at that time.

## Computations
- Second-wave tally (confirmed L9): DTNA 2,592 + Tiffin 177 + Sutphen 410 = 3,179 vehicles.
- Second-wave tally including Nova (same wording, Cummins link unconfirmed): 3,179 + 453 = 3,632.
- Full cascade tally (known counts): Cummins 39,052 + Paccar 26,729 + DTNA 2,592 + Tiffin 177 + Sutphen 410 = 68,960; with Nova = 69,413. Autocar ACX count still unknown; a dozen-plus L9 buyers total, so the tally is a floor, not a ceiling.
- 3% vs 100%: Cummins/Paccar estimate ~3% of the broad recalled population actually has the defective hose. Tiffin's Part 573 lists 100% — but that is a different denominator: Tiffin's 177 were matched by engine serial number to Cummins' suspect list, so every one of them carries a suspect hose. Not a contradiction; a lesson in reading the denominator. Applied: 3% of Paccar's 26,729 is ~800 trucks actually defective; 100% of Tiffin's 177 are suspect by construction.
- Notification gaps: DTNA/Tiffin filed Oct 7-8, letters Nov 20 = ~43 days. Sutphen filed Oct 8, letters Dec 7 = 60 days. Nova filed Oct 27, letters Dec 26 = 60 days, landing the day after Christmas. Paccar filed Oct 21, letters Dec 20 = 60 days. The pattern is a two-month silence in every case.
- Sutphen irony check: 410 fire trucks, a vehicle class whose job is responding to fires, recalled for a defect whose stated consequence is fire. No injuries reported in sources reviewed; none claimed.
- Remedy specificity: improved connector crimps, not a new hose design — the crimp is the fix. Production fix date Apr 11, 2026 (Cummins new builds).

## Strongest counterargument
The cascade is arguably the system working as designed: Cummins identified the defect, every downstream manufacturer filed promptly with free remedies, and zero injuries have been reported anywhere in the chain. The 3% defect estimate means the vast majority of recalled vehicles were never in danger, and the two-month letter gaps reflect parts logistics, not concealment. Linking Nova Bus to the Cummins cascade without a part-number confirmation would overstate the case, and the fire-truck framing risks implying danger that the incident record does not show.

## Limitations
- Nova Bus Cummins link unconfirmed: the Nova record reviewed names the defect and component category but not the Cummins L9 part number. The article must say so explicitly.
- Autocar ACX count unknown; DTNA 26V660 count comes via trade-press weekly lists, not a Part 573 PDF reviewed firsthand.
- No crash, fire, or injury counts for the second wave appear in the sources reviewed; none are claimed.
- #1337 covered the Paccar leg and the MX-13 litigation; this piece deliberately covers only the second wave plus the Nova coda.

## Actionable for readers
- Transit agencies running 2022-2024 Nova LFS / 2023 LFS Artic: call Nova at 1-800-350-6682 (CR5969); do not wait for the December 26 letter. Diesel smell or a low fuel pressure warning is the early warning system.
- Tiffin Allegro Bus / Phaeton owners (2022-2025, PowerGlide chassis): call Tiffin at 1-256-356-8661 (TIF-150) or any Cummins dealer; the fix is free and the letters arrive November 20.
- Fire departments with 2021 Sutphen trucks: Cummins dealers do the replacement free (C7311); letters December 7.
- Anyone buying a used medium/heavy vehicle with a Cummins L9 from 2021-2027: verify the hose replacement (crimped-connector parts) was done; the suspect hose spans buses, trucks, RVs, and fire apparatus, not one brand.
- Check any VIN at nhtsa.gov/recalls.
