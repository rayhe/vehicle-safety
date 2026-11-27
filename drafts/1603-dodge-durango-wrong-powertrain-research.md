# #1603 Research — Dodge Built 15 Durangos With the Wrong Engine

**Slug:** 1603-dodge-durango-wrong-powertrain
**Journalist:** Axle McScatter (data-comparison angle; Axle used once in last 15 shipped)
**Kicker:** By The Numbers
**Headline (draft):** Dodge Built 15 Durangos With the Wrong Engine. The Fix Is a Whole New Engine.
**Researched:** 2026-11-27 (06:30 run)

## The story in one paragraph

Chrysler told NHTSA on November 19, 2026 that 15 model-year 2026 Dodge Durangos left the factory with the wrong powertrain installed. Not a defective part, not a software bug, not a supplier's bad batch: the wrong engine/transmission combination, bolted in at the factory, shipped, sold, and driven until somebody noticed. The remedy is not a reflash or a bracket. Dealers will replace the entire engine and the catalytic converters, free of charge. Owner letters go out December 15, 2026; VINs become searchable December 1, 2026.

## Core facts (verified)

| Fact | Value | Source |
|---|---|---|
| NHTSA campaign | 26V760000 (Chrysler B3D) | NHTSA recalls API, live 2026-11-27 |
| Report received | November 19, 2026 | NHTSA recalls API |
| Vehicles | 2026 Dodge Durango, built July 1–22, 2026 | NHTSA API + WhichTrim (Part 573 build window) |
| Population | 15 vehicles | Part 573 via Autoguide, AnyRecalls, KnownCarIssues, CyberMaxTools (4 mirrors agree) |
| Defect | "The vehicles were manufactured with an incorrect powertrain that may cause a loss of drive power." | NHTSA recalls API, verbatim |
| Consequence | "A loss of drive power increases the risk of a crash." | NHTSA recalls API, verbatim |
| Remedy | Dealers will replace the engine and catalytic converters, free of charge | NHTSA recalls API, verbatim |
| Owner letters | December 15, 2026 | NHTSA recalls API |
| VINs searchable | December 1, 2026 | NHTSA recalls API |
| Chrysler contact | 800-853-1403 | NHTSA recalls API |
| Crashes/injuries | None cited in the NHTSA record | NHTSA recalls API (no crash/injury language in filing) |

## Original contribution: the factory-error census

The Durango is not a one-off. Recalls where the defect is the factory itself — wrong part installed, wrong label printed, fastener never tightened — form a distinct category, and the Durango is the purest case in it. I pulled every 2026-model-year-adjacent "manufactured with an incorrect / manufacturing error" campaign I could verify against the NHTSA API live this run:

| Campaign | Vehicle | Filed | Factory error | Population | Remedy |
|---|---|---|---|---|---|
| 26V760 | 2026 Dodge Durango | Nov 19, 2026 | Incorrect powertrain installed | 15 | Replace engine + catalytic converters |
| 26V766 | 2026 Genesis GV80 | Nov 20, 2026 | Upper control arm ball joint fasteners insufficiently tightened (nut-runner tool fault; manual rework never verified) | 188 | Inspect, tighten/replace hardware, align |
| 25V889 | 2026 Subaru Forester | Dec 19, 2025 | Incorrect / incorrectly oriented rear hatch support bracket | 5,603 | Inspect, replace stay + bracket |
| 26V436 | 2019–2026 Subaru Ascent/Forester/Crosstrek Hybrid | Jul 8, 2026 | Incorrect Gross Axle Weight Rating printed on certification label | 541,237 | New labels |
| 26V555 | 2027 Jayco Melbourne Prestige / Entegra Qwest | Aug 31, 2026 | Taillight harness manufactured with an incorrect resistor | 11 | Replace harness |

**Calculations (mine, from the table above):**
- Five factory-error campaigns total **547,054 vehicles**.
- The Durango is the **smallest population (15)** and the **only one whose remedy is a whole new powertrain**.
- The label error (541,237) is **99% of the category by volume** and the cheapest fix (a sticker); the Durango is **0.003% of the category by volume** and the most expensive fix per vehicle.
- Two of the five were filed **within 24 hours of each other** (26V760 Nov 19, 26V766 Nov 20) — coincidence, but it means the same week produced both the smallest and the most mechanically serious factory errors.
- The Durango's other 2026 recall: 26V701, tail-light wiring harness terminals, **13,330 vehicles** (Oct 22, 2026). So the 2026 Durango has 2 recalls totaling 13,345 vehicles, and the wrong-engine cars are **0.11%** of that.

## Why this is newsworthy (kill test)

- **Novel angle:** every recall story is about a part that failed; this one is about a car that was built wrong from the first bolt. The defect is not in the component, it is in the assembly process, and it slipped past every quality gate between the line and the customer.
- **Absurdity with receipts:** the fix for a factory mix-up is a heart transplant. An engine swap as a recall remedy is nearly unheard of at this population size.
- **Pattern, not anecdote:** the five-campaign table shows factory-error recalls are a real, recurring category spanning every price point (a $30k Jayco harness, a $90k Genesis ball joint), which is the original finding.
- **Timely:** filed November 19, 2026; VINs become searchable December 1, 2026 — four days from this run. Owners can act now.

## Duplicate screen (queue + full-content grep, 2026-11-27)

Killed in research, already covered:
- Honda Takata 26V765 standalone (#1583); Toyota Takata 26V748 (#1563, #1493); Honda steering 26V721 (#1593); Ford Transit BCMC 26V727 (#1537); Navigator chauffeur seat 26V691 (#1423); Acura ZDX brake 26V735 (#1585); Rivian tire placard 26V761 (#1581); Genesis GV80 26V766 as a census line only (#1591 table, no standalone); Polestar untightened nut (#1520); November second-half census (#1591, includes 26V760 as one table row only).
- No queue entry or story covers "wrong powertrain," "wrong engine," "26V760," or a factory-assembly-error comparison as a standalone article. #1591's census mentions 26V760 in one table row; precedent (#1583 vs #1591 on 26V765) allows a standalone deep-dive on a campaign the census only tabulated.

## Limitations (must appear in the article)

- The filing **does not say which powertrain was installed or which should have been**. The 2026 Durango's lineup includes more than one engine option; NHTSA's record does not name either side of the mismatch. Any claim about which engine is in the 15 cars would be invention.
- Population of 15 comes from the Part 573 report **via four independent mirrors** (Autoguide, AnyRecalls, KnownCarIssues, CyberMaxTools), not from a PDF I opened directly. All four agree; the NHTSA API record itself carries no population field.
- No crash, injury, or complaint counts are cited in the NHTSA record for 26V760. Do not claim "no one was hurt" — claim only that the filing cites none.
- The five-campaign comparison table is my own grouping, built by searching NHTSA's API for "manufactured with an incorrect" language. It is a census of the campaigns I found and verified, not an exhaustive NHTSA-wide count; other factory-error campaigns may exist under different wording.
- Build window (July 1–22, 2026) comes from WhichTrim's Part 573 summary. The total number of Durangos built in that window is not public, so no "15 of N" rate can be computed.

## Strongest counterargument (must appear in the article)

Fifteen cars is a rounding error. No crashes, no injuries, no complaints cited, and the system worked exactly as designed: Chrysler caught its own mistake, filed within four months of the build window, and is replacing the engines for free. A recall this small, caught this cleanly, is evidence the quality system functions, not that it failed — and a whole article about 15 SUVs is the Crash Report mistaking a curiosity for a crisis. The honest reply: the story is not the 15 cars, it is what the 15 cars prove about the failure mode. A wrong engine is the one defect no amount of component testing can catch, because every individual part was fine; only the combination was wrong. That is a different kind of quality hole, and the table shows it opens at every manufacturer, at every price.

## Actionable takeaways

- Own a 2026 Durango built in July 2026? Check your VIN at nhtsa.gov/recalls starting December 1, 2026 — do not wait for the December 15 letter. Campaign 26V760 / Chrysler B3D.
- The remedy is an engine replacement, not a software update: book the dealer visit, expect the car to be down for days, and get the loaner conversation in writing before you drop it off.
- Buying any 2026 vehicle? A VIN check catches factory-error recalls too; they are filed under the same database as design defects.

## Sources

1. NHTSA recalls API, `recallsByVehicle?make=dodge&model=durango&modelYear=2026` — 26V760000 record, verified live 2026-11-27. https://api.nhtsa.gov/recalls/recallsByVehicle?make=dodge&model=durango&modelYear=2026
2. NHTSA recalls API, Genesis GV80 2026 — 26V766000 record, verified live 2026-11-27.
3. NHTSA recalls API, Subaru Forester 2026 — 25V889000 and 26V436000 records, verified live 2026-11-27.
4. Autoguide, "15 Dodge Durangos Recalled Over Wrong Powertrain," Nov 26, 2026. https://www.autoguide.com/auto/car-recalls/15-dodge-durangos-recalled-over-wrong-powertrain-44642926
5. Autoblog, "Genesis GV80 Recalled Over Ball Joint That May Separate," Nov 27, 2026. https://www.autoblog.com/news/genesis-gv80-recalled-over-ball-joint-that-may-separate
6. AnyRecalls latest-recalls list, Nov 19, 2026 entries (26V760, 15 vehicles; 26V766, 188 vehicles). https://www.anyrecalls.com/
7. KnownCarIssues, 26V760000 and 25V889000 recall pages (Part 573 mirrors; 25V889 population 5,603). https://knowncarissues.com/recalls/26V760000
8. WhichTrim, 26V760000 recall page (Part 573 mirror; build window Jul 1–22, 2026). https://whichtrim.com/recalls/26v760000/
9. USA Today, "Subaru recalls over 541K vehicles," Jul 14, 2026 (26V436 population 541,237). https://www.usatoday.com/story/cars/recalls/2026/07/14/subaru-recall-ascent-forester-crosstrek-models/90912071007/
10. NHTSA FARS / recalls database, general reference. https://www.nhtsa.gov/recalls
