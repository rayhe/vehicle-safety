# Research: #1400 — Hyundai ACU software deactivates airbags while the ZF-TRW settlement is still open

**Slug:** 1400-hyundai-acu-software-deactivates-airbags
**Journalist:** Mia Crumplezone (Safety Engineering Editor — the ACU decides in the first 150 milliseconds; this is literally her beat)
**Kicker:** Investigation
**Started:** 2026-11-05

## Proposed angle
Hyundai recalled 37,901 Veloster N and Kona Electric cars because a software error in the airbag control unit can silently deactivate the airbags and seat belt pretensioners. The only warning is an airbag light. The same model families sit on the "unrecalled" list of the $62.1M ZF-TRW airbag control unit settlement, whose claims window is still open until April 8, 2027. Two different defects, one component, one set of owners caught between a recall and a settlement at the same time.

## Challenge (kill test)
Is this genuinely new after 1,399 articles? PASS, four ways. (1) Fresh: NHTSA received the report November 3, 2026; USA Today reported it November 5, 2026; VINs become searchable November 6, 2026. (2) Not a duplicate: full-content greps, no truncation — zero drafts, stories, or queue entries mention 26V728, Hyundai recall 311, or an ACU software recall. #1064 covered the Veloster's FARS death rate (a fatality-rate piece, not this recall). #1359/#1291/#1317 covered Hyundai loose-nut recalls; #1173 covered a Genesis park-outside recall; #989 covered the immobilizer settlement. None covers an airbag control unit defect. (3) Novel angle: the settlement cross-reference is original — nobody has mapped 26V728's population against the ZF-TRW settlement's two lists, and the overlap arithmetic (below) is a new calculation. (4) Newsworthy: airbags that may not deploy, with a single dashboard light as the only warning, on cars up to seven model years old.

## The recall (26V728)
1. **Campaign:** NHTSA 26V728000; Hyundai recall number 311. Report received by NHTSA November 3, 2026 (API string "03/11/2026," read as day/month — consistent with the campaign-number sequence: 26V717 and 26V718 were received October 29, 2026, and press coverage landed November 5). Population: certain 2019-2022 Hyundai Veloster N and 2019-2023 Hyundai Kona Electric. Potentially affected: **37,901**. Component: AIR BAGS: AIR BAG/RESTRAINT CONTROL MODULE: SOFTWARE.
2. **Defect:** "A software error in the air bag control unit (ACU) may improperly deactivate the air bag system and seat belt pretensioners." Consequence per NHTSA: "Air bags and seat belt pretensioners that do not activate in a crash increases the risk of injury."
3. **Warning sign:** illumination of the airbag malfunction indicator lamp (MIL). No other warning is stated.
4. **Remedy:** dealers update the ACU software, free of charge. Not an over-the-air update (API: overTheAirUpdate False). Owner notification letters expected January 1, 2027. VINs searchable on NHTSA.gov from November 6, 2026. Hyundai contact: 1-855-371-9460.
5. **What the record does NOT state:** no crash, injury, or fatality count tied to this defect appears in the campaign record. That is absence of a published count, not a claim of zero incidents. No Veloster N vs. Kona Electric split of the 37,901 is published. No supplier is named.

## The settlement cross-reference (original contribution)
6. **The ZF-TRW settlement:** In re ZF-TRW Airbag Control Units Products Liability Litigation, No. 2:19-ml-02905-JAK-JPR, U.S. District Court for the Central District of California. Fund: **$62,100,100** in payments and credits. Court granted final approval October 8, 2025. Claims close **April 8, 2027**. Administrator: JND Legal Administration, official site acusettlement.com. Hyundai, Kia, and Mobis deny the allegations.
7. **The alleged defect (settlement):** electrical overstress — a surge during a crash knocking out the control unit at the moment the airbag is supposed to fire. Different mechanism from 26V728's software error. The article must not conflate them.
8. **The two lists:** Recalled vehicles (NHTSA 18V-137 Hyundai / 18V-363 Kia: certain 2011-2013 Sonata, 2011-2012 Sonata Hybrid, 2010-2012/2013 Forte, 2010-2012/2013 Forte Koup, 2011-2012/2013 Optima, 2011/2012 Optima Hybrid, 2011-2012 Sedona) can claim out-of-pocket reimbursement, a residual payment capped at **$350**, and a ten-year parts warranty (to April 2035, follows the car). Unrecalled vehicles cap at **$150** residual, no expenses, no warranty.
9. **The overlap (new calculation):** the settlement's unrecalled list includes **2018-2023 Kona** and **2019-2021 Veloster**. 26V728 covers 2019-2022 Veloster N and 2019-2023 Kona Electric. Overlap: Veloster model years 2019-2021 (3 of the 4 model years in the recall) and Kona model years 2019-2023 (all 5 model years in the recall, noting the settlement list says "Kona" without specifying the Electric trim, so trim-level overlap is approximate and VIN lookup is decisive). In other words, the same owners who are currently deciding whether to file a $150 residual claim for an airbag computer that might have failed them are now being told by a second recall that their airbag computer has a different defect that can switch the airbags off.
10. **The timing arithmetic:** settlement approved October 8, 2025; this recall reported November 3, 2026 — roughly 13 months later, with the claims window still open for another five months (to April 8, 2027). Recall letters go out January 1, 2027, three months before the claims deadline. An owner who files the settlement claim in January will be holding a recall letter for the same component in the same envelope pile.
11. **The list-movement caveat (do not overclaim):** the settlement page states that if Hyundai or Kia issue a ZF-TRW recall for an unrecalled model before the claims period ends, owners of that model become able to claim out-of-pocket expenses too. 26V728 is NOT a ZF-TRW recall on the available record — it is a software error, with no supplier named and a different stated mechanism. The article must state plainly that 26V728 does not, on the public record, move anyone between the settlement's two lists. The overlap is suggestive and newsworthy, not legally operative.

## Secondary context
12. **Hyundai's recall drumbeat on this site:** #989 (immobilizer, 9M cars), #1173 (Genesis park-outside), #1291/#1359 (41 cars, loose nuts, twice), #1317 (lug nuts). Hyundai is a frequent flyer here; the ACU recall is the first airbag-computer defect in that run.
13. **Kona Electric restraint-system footnote:** the Kona Electric was also in the July 2026 seat-belt buckle recall 26V452 (47,749 vehicles) — but only 16 of those were Kona Electrics; the rest were 2026 gas Konas. Do not present this as a pattern for the EV. One sentence max, with the 16-vehicle caveat, or cut it.
14. **The Veloster N's prior appearance:** #1064 found the Veloster the deadliest car in America with the soberest drivers (FARS). That was a fatality-rate finding, not a defect finding. The two stories rhyme but do not overlap; cite #1064 only if it strengthens the piece, and do not imply the death rate was caused by the ACU.

## Original calculations (for the article)
- Overlap years: Veloster 2019-2021 = 3 of 4 recall model years; Kona 2019-2023 = 5 of 5 recall model years.
- Settlement fund $62,100,100; residual caps $350 vs $150 — the unrecalled owner gets at most 43% of the recalled owner's cap.
- Gap: settlement approval (Oct 8, 2025) to recall report (Nov 3, 2026) = 391 days. Claims deadline April 8, 2027 is 97 days after recall letters mail (Jan 1, 2027).
- 37,901 cars, one dashboard light as the only warning, and a fix that requires a dealer visit (no OTA).

## Limitations (must appear in the article)
- FARS cannot help here: this is a defect story, not a fatality-rate story, and no crash/injury count is published for 26V728.
- The settlement's unrecalled list is defined by VIN, not model year; several model years sit on both lists. Model-year overlap is approximate; the article must say so and point readers at the VIN lookup.
- The ACU supplier for 26V728 is not named in the public record; the article must not assert it is ZF-TRW.
- The software error's trigger conditions are not published: nobody knows what driving conditions deactivate the system, or how long a car can drive deactivated before the light comes on.

## Strongest counterargument (must appear at full strength)
Hyundai fixed this the cheap, fast way: a free software update, no parts, no park-outside order, no injuries reported. The ZF-TRW settlement is about a different defect from a different era (2011-2013 cars), and dragging it into a 2026 software recall is guilt by component association. The overlap is a coincidence of model names, not evidence of a single ongoing failure. If the article's thesis is "Hyundai's airbag computers keep failing," the honest reply is: one was an alleged electrical surge in decade-old cars that Hyundai denies; the other is a software bug with no reported injuries and a same-day fix. Say that, then answer it: the coincidence still matters because the same owners are holding both pieces of paper, and because the only warning for a silently dead airbag is a light most drivers are trained to ignore.

## What NOT to claim
- That 26V728 is the ZF-TRW defect, or that it moves owners between settlement lists.
- Any crash/injury/fatality count for 26V728.
- A Veloster N / Kona Electric split of the 37,901.
- That the ACU supplier is ZF-TRW (unnamed in the record).
- That the Veloster's FARS death rate (#1064) was caused by the ACU.

## Actionable insights (required)
- If you own a 2019-2022 Veloster N or 2019-2023 Kona Electric: check your VIN at nhtsa.gov/recalls. VINs searchable from November 6, 2026. Do not wait for the January 1 letter.
- If your airbag light is on: go to the dealer now. That light is the only warning that the system may be deactivated, and the fix is a free software update.
- If you owned or leased a Hyundai or Kia on April 14, 2025: check acusettlement.com before April 8, 2027. Unrecalled-list owners can still claim up to $150 with nothing but a claim form. The VIN lookup, not the model year, decides which list you are on.

## Sources (primary, 3+)
1. NHTSA recalls API, campaign 26V728000 (Veloster N 2021 / Kona Electric 2021 queries) — population, defect, consequence, remedy, dates. https://api.nhtsa.gov/recalls/recallsByVehicle
2. NHTSA recalls database — https://www.nhtsa.gov/recalls
3. USA Today, Taylor Ardrey, "Hyundai recalls over 37,000 vehicles," November 5, 2026 — https://www.usatoday.com/story/cars/recalls/2026/11/05/hyundai-recalls-vehicles-veloster-n-kona-electric-models/92622632007/
4. Class Action Buddy, "Hyundai & Kia Airbag Settlement: Which List Is Your Car On," last reviewed June 29, 2026 (checked against the official administrator site) — fund $62,100,100, lists, caps, deadlines, case number. https://classactionbuddy.com/settlements/621m-hyundai-kia-airbag-settlement-2027-deadline/
5. Official settlement administrator — https://www.acusettlement.com (VIN lookup; cited via source 4's verification note)

## Killed in research (duplicates, do not revive)
- Lincoln Nautilus/Corsair neutral-shift 26V688 (#1321, #1356); GM EV brake software 26V717 (#1387); GM Express/Savana steering re-inspection 26V718 (#1391); Ford F-150 tailgate cable 26V689 (#1297); Audi Q4 e-tron 26V698 (#1268, #1351 duplicate); Genesis G80 seat-switch 26V664 (#1290, #1330); Thomas Built FMVSS 221 (#1369); Paccar fuel hose cascade (#1337).
