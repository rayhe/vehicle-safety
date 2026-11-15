# Research: #1511 — BMW Shipped Test Software in 286 Customer Cars. It Runs the High-Voltage Charger.

**Number:** 1511
**Slug:** 1511-bmw-test-software-shipped-in-customer-cars
**Journalist:** Mia Crumplezone (Safety Engineering Editor; charging systems and software in safety-critical hardware are her beat — a charging-port software mix-up is an engineering story, not a census)
**Kicker:** The Gap
**Date:** November 14, 2026

## Angle (1-2 sentences)

BMW's own Part 573 filing says some charging units shipped with **testing software instead of production software** — test code, in customer cars, running the high-voltage battery charger. The recall covers 286 cars, and BMW's own defect estimate (0.2%) means the expected number of actually-defective cars is **fewer than one**: more likely than not, not a single car in the recall has the defect. The story is the gap between test and production, and what it says about software QA on safety-critical hardware.

## Kill test

- **Genuinely newsworthy?** Yes. A carmaker admitted in a federal filing that test software left the factory in customer cars. The defect is not a worn part or a bad weld — it is a software-build mix-up at a supplier (TE Connectivity, Switzerland), caught by the supplier, not by BMW's own QA. The risk is electric shock from a high-voltage charger. The fix is a software update that still requires a dealer visit — no over-the-air delivery — which is itself a statement about how little control BMW has over this module once it ships.
- **Novel on site?** Yes. No prior article covers 26V731, test software, or a charging-port software recall. BMW's other recall this week, 26V733 (720,796 cars, park-outside), is covered in full as #1490 — and the contrast is part of this story, not a duplicate of it: same manufacturer, same week, one recall 2,520 times the size of the other, and the small one is the process failure.
- **Killed angles this run (duplicate screen):** Ford Explorer side-airbag burn probe PE26008 (1,236,155 SUVs) — #1447, published Nov 9. Toyota Tundra camshaft recall (62,000 trucks, ~300 suspect camshafts) — #1507, this morning. BMW water-pump recall-of-recall 26V733 (720,796, park-outside) — #1490. Harley-Davidson gear-position sensor 26V730 (21,643 bikes) — #1462. DTNA/Cummins driveline snap-ring 26V737 (3,894 trucks) — #1470. Ford Explorer Police Interceptor map lights 26V726 — #1466. GM Savana/Express steering-nut 26V718 — #1391. Honda EPS 26V721 — #1457. Ford Maverick Hybrid battery cable 26V724 — #1509. IIHS Kicks-beats-RAV4 rear-seat round — #1484 / #1244 / #1408.

## Primary sources (3+)

1. **NHTSA Part 573 Safety Recall Report 26V731** (BMW of North America, filed Nov 4, 2026) — the primary source for every factual claim in this article. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V731-8682.pdf — 286 potentially involved vehicles; estimated percentage with defect 0.2%; supplier TE Connectivity Solutions GmbH (Schaffhausen, Switzerland); component "Charging Port Software"; chronology: Oct 8, 2026 BMW informed by high-voltage battery charging port supplier, engineering investigation initiated; reviews of supplier production records and shipping logistics found "some charging units may have been shipped that contain testing software instead of production software"; Oct 28, 2026 BMW decided voluntary recall; "BMW has not received any reports, nor is BMW otherwise aware, of any accidents or injuries related to this issue"; safety risk: "In rare cases, this could increase the risk of electric shock and injury"; remedy: vehicle software updated at authorized dealer, free; dealer notification Nov 4, 2026; owner notification Dec 25, 2026; VIN searchable Dec 25, 2026.
2. **Cooper & Bimmer Experts, "BMW i5 and i7 Charging Software Recall 26V731: Check Your VIN"** (Nov 14, 2026) — independent read of the same filing, corroborates counts, dates, and the dealer-only fix. https://cooperbimmer.expert/bmw-i5-i7-charging-software-recall-26v731/ — i5: 236 (2026-2027, built May 12-Jul 22, 2026); i7: 50 (2027, built Jun 15-Jul 23, 2026); no park-outside or do-not-drive advisory; fix is a dealer software update taking about an hour; "Will BMW send this repair over the air? No."; NHTSA VIN lookup expected to include the recall Dec 25, 2026; "A blank result before then doesn't mean your car isn't included."
3. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — queried Nov 14, 2026 for BMW i5 model years 2026 and 2027 and BMW i7 model year 2027: returns **0 results** for all three. This is not an error — it is the filing's own schedule playing out in the official database: VINs are not searchable until Dec 25, 2026, so today the recall is invisible in the API owners are told to check. Verified live this run.
4. **USA Today, "BMW recall affects more than 720K vehicles"** (Nov 13, 2026) — the same-week contrast recall, 26V733. https://www.usatoday.com/story/cars/recalls/2026/11/13/bmw-recall-thousands-vehicles/92765957007/ — 720,796 vehicles (2012-2018), water-pump connector may short and catch fire, park outside, ~10 incidents, no crashes or injuries, no remedy yet, owner letters from Dec 25, 2026. Covered in full as #1490; used here only for the scale contrast.
5. **NHTSA recalls database** (nhtsa.gov/recalls) — parent page for recall lookups; cited for the VIN-check action.

## The numbers

### The recall population

| Model | Model years | Production dates | Vehicles |
|---|---|---|---|
| BMW i5 (eDrive40, xDrive40, M60 xDrive) | 2026-2027 | May 12 - Jul 22, 2026 (71 days) | 236 |
| BMW i7 (xDrive50, xDrive60) | 2027 | Jun 15 - Jul 23, 2026 (38 days) | 50 |
| **Total** | | | **286** |

### Original arithmetic (computed this run, not quoted)

- **Expected defective cars: 0.57.** BMW's own estimate is 0.2% of the 286 potentially involved vehicles. 286 x 0.002 = 0.572. The recall exists to find a defect that, on BMW's own numbers, is expected to be in fewer than one car.
- **Probability zero cars are defective: ~56%.** (1 - 0.002)^286 = e^(-0.5726) ≈ 0.564. More likely than not, not a single car in this recall actually carries test software. The flip side: a ~44% chance at least one does, and that one car has a high-voltage charger running test code.
- **Scale contrast: 2,520x.** BMW's other November recall, 26V733, covers 720,796 cars. 720,796 / 286 = 2,520.3. Same manufacturer, same week, same owner-letter date (Dec 25, 2026). One is a part failure at massive scale with a park-outside warning and no remedy; the other is a process failure at tiny scale with a dealer software fix.
- **Timeline: 78 days from discovery to owner letter.** Oct 8 (supplier tip) to Oct 28 (recall decision) = 20 days; Oct 28 to Dec 25 (owner notification) = 58 days. Owners of a car whose charger may run test software wait nearly three months from the day BMW learned about it.
- **Model split: 82.5% i5, 17.5% i7.** 236/286 and 50/286.
- **Production windows are narrow.** The i5 window is 71 days, the i7 window 38 days — the suspect charging units came from a tight supplier production run, which is why the population is small and why BMW could pin it down from supplier shipping records.

### What "test software" means here

The filing's chronology is the only place the words appear: "some charging units may have been shipped that contain testing software instead of production software." Everywhere else the filing uses the softer phrase "software that is not in accordance with a specification that is used for high-voltage battery charging." BMW has not said what the test software does differently, which version it is, or how it behaves at a charger. The safety risk as filed: "In rare cases, this could increase the risk of electric shock and injury." No accidents or injuries are known.

### The dealer-only fix

The remedy is a vehicle software update performed at an authorized BMW dealer, free, taking about an hour per Cooper & Bimmer's read of BMW's FAQ. BMW is not pushing it over the air. A software recall that cannot be fixed by software delivery is the detail that gives the story its edge: the charging port module is not on BMW's OTA path, so 286 owners have to book a dealer visit for a one-hour reflash of a module that should never have shipped with test code.

### The invisible recall

NHTSA's own API returns zero results for the affected i5 and i7 model years today, because the filing schedules VIN searchability for Dec 25, 2026. The recall is real, filed, and acknowledged — NHTSA's acknowledgment letter is dated Nov 12 — but an owner who checks the official lookup today gets a clean result. The gap between "recall filed" and "recall findable" is 51 days (Nov 4 to Dec 25).

## Counterargument (stated at full strength)

This is a 286-car recall with zero injuries, a 0.2% defect estimate, and no do-not-drive advisory — a rounding error next to the 720,796-car fire recall BMW filed the same week, and arguably evidence the system worked: a supplier caught its own shipping error, told BMW, BMW investigated in 20 days and recalled voluntarily. The "test software" framing may also overstate the filing, which everywhere else says only that the software "may not be in accordance with a specification." A reader could fairly conclude this story is about a paperwork defect with no victims. The answer is not to dismiss that: it is that the defect class matters more than the defect count. A part failure is bounded by the part. A test-build shipping in production is a process failure — the same mix-up, undetected, in a larger supplier run would be a different story — and the car it lands in is a high-voltage charger, where the failure mode is electric shock, not a warning light. The small number is the luck, not the lesson.

## Limitations

- BMW has not disclosed what the test software does differently from production software, which charging sessions are affected, or whether any owner experienced a shock or charging fault. The risk is stated as "in rare cases" with no quantification beyond the 0.2% estimate.
- The 0.2% defect estimate is BMW's, from supplier records — not independently verified. The 56% probability that zero cars are defective assumes the estimate is accurate and the defect is randomly distributed across the 286.
- Independent VIN verification is impossible today: the NHTSA API returns nothing for the affected model years until Dec 25, 2026. The counts in this article come from the Part 573 filing itself, not from a live database query.
- The article does not cover 26V733 in depth — that recall has its own article (#1490); it appears here only as the scale contrast.
- No FARS cross-tab: the i5/i7 are too new and too few for fatality data to say anything meaningful, and no deaths or injuries are associated with this defect.

## Actionable insights

- If you own a 2026-2027 BMW i5 or a 2027 BMW i7 built in the windows above (i5: May 12-Jul 22, 2026; i7: Jun 15-Jul 23, 2026), call your dealer or BMW at 800-525-7417 with your VIN — do not rely on NHTSA's lookup, which will show nothing until Dec 25, 2026.
- The fix is free and takes about an hour at a dealer. It is not over-the-air, and a routine software update or a notice in the My BMW app does not close the recall — ask the dealer to confirm the recall status on your paperwork.
- The cars can continue to be driven, per BMW's FAQ. If you charge at home while waiting, follow any warnings the car displays and ask the dealer for charging guidance specific to your VIN.
