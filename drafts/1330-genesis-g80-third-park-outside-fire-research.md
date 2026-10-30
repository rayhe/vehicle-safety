# Research Notes: The Genesis G80's Third Park-Outside Order

## Angle
The 2017-2020 Genesis G80 (and its 2015-2016 Hyundai Genesis predecessor) has now been told by the federal government to park outside **three separate times** for **three separate fire defects**: the ABS module (2021, recall 21V160), the starter solenoid (2024, recall 24V107), and now the front power-seat switch (Oct 2026, recall 26V664). This third one is a stuck seat switch that can keep the seat motor running after you leave the car, overheating until it catches fire — in your garage, at 2 AM, with nobody in the vehicle. And unlike the first two, Hyundai has **no remedy yet**: owner letters aren't expected until December 7, 2026, and the NHTSA record literally says "The remedy is currently under development."

## Novel Contribution
Cross-tabulating NHTSA's public recalls API (api.nhtsa.gov) by make/model/year shows the Genesis G80 line carries THREE active-or-completed park-outside fire advisories on the same vehicle population — 21V160000, 24V107000, 26V664000 — the only model line we found with three distinct `parkOutSide: true` fire recalls. The article frames the trilogy and runs the honest math: 2 confirmed U.S. fires against 94,622 recalled vehicles, a per-vehicle risk so small it's barely above zero, while the *institutional* pattern (same nameplate, three garage bans in five years) is the real story.

## Kill Test
Genuinely surprising? YES. One park-outside recall is routine; three distinct fire defects on one model line is unprecedented in NHTSA's data. The mechanism — your *seat* burning your house down while the car is off — is the most absurd of the three and the hook. The twist: Hyundai knew about the first fire in December 2021 and chose monitoring over recall in 2024, deciding to act only in October 2026 after Korea reported more thermal events. Five years of watching. Distinct from `park-outside-fire-recall-fleet.html` (April 2026, fleet-wide census — this is a single-model deep dive, and the G80's third strike postdates that piece).

## Primary Data (NHTSA recalls API, queried 2026-10-30)

### Strike 3 — 26V664000 (seat switch, filed Oct 9, 2026)
- Population: 94,622 (54,644 Hyundai Genesis 2015-2016 + 39,978 Genesis G80 2017-2020), non-memory power seats only
- Mechanism: front power-seat control switch damaged by external impact → stuck in "on" → seat motor runs with car off → overheats → fire while parked or driving
- Remedy status: **under development** (no fix as of Oct 30, 2026)
- Owner letters: expected Dec 7, 2026; VINs searchable since Oct 13, 2026
- Incident count: 2 alleged U.S. fires (Dec 2021, 2018 G80; Aug 2022), 0 crashes, 0 injuries; Hyundai estimates ~1% defect rate (<1,000 cars)
- Hyundai recall 308 / Genesis recall 035G
- Warning signs: burning smell from seat area, inoperative seat switch
- Timeline: Hyundai first heard Dec 31, 2021 → recovered seat from 2022 fire → 2024 decision was "keep monitoring" → July 2026 Korea overheating reports → recall decision Oct 1, 2026

### Strike 2 — 24V107000 (starter solenoid, filed Feb 13, 2024)
- Population: 2015-2016 Hyundai Genesis, 2017-2019 Genesis G80, Genesis G90, 2019 G70
- Mechanism: water intrusion into starter solenoid → electrical short → engine compartment fire while parked or driving
- Remedy: park outside until repair; dealers install remedy relay kit

### Strike 1 — 21V160000 (ABS module, filed Oct 3, 2021)
- Population: 2015-2016 Hyundai Genesis + 2017-2020 Genesis G80
- Mechanism: ABS module malfunction/short circuit → engine compartment fire while parked or driving
- Remedy: park outside until repair; dealers replace ABS module fuse

### Key Calculations
- Per-vehicle fire risk (Strike 3): 2 fires / 94,622 vehicles = **0.0021%** — roughly 1 in 47,000
- Estimated defective population: ~1% of 94,622 ≈ **946 cars**
- FARS check: Genesis/Genesis G80 appears **zero times** in FARS_BY_MODEL — crash-fatality data is blind to parked-car fires entirely, which is the article's structural point: the two safety datasets measure disjoint hazards
- Interval between strikes: 2021 → 2024 (2.3 yrs) → 2026 (2.7 yrs). Roughly one new garage ban every 2.5 years

## External Sources (3+ primary/verified)

1. **NHTSA recalls API** (api.nhtsa.gov, queried 2026-10-30): campaign records 26V664000, 24V107000, 21V160000 — full summaries, remedy text, parkOutSide flags. `https://www.nhtsa.gov/recalls`
2. **NHTSA Part 573 Safety Recall Report for 26V664** (filed Oct 9, 2026): defect chronology (Dec 2021 first fire, Aug 2022 second, 2024 monitoring decision, July 2026 Korea reports, Oct 1, 2026 recall decision), 2 U.S. fires, 0 crashes/injuries, 1% estimate. Via NHTSA recalls database. `https://www.nhtsa.gov/recalls`
3. **Jalopnik** (Oct 19, 2026): "Hyundai Recalls 95,000 Genesis G80s Because Their Seats Might Catch Fire, And There's No Fix Yet" — external impact mechanism, Korea thermal events, Dec 6/7 owner notification dates. `https://www.jalopnik.com/2290738/hyundai-recalls-genesis-g80s-seats-fire/`
4. **recalledornot.com** (Oct 16, 2026): breakdown of 54,644 vs 39,978 populations, build-date windows (Genesis Feb 21, 2014–Feb 24, 2016; G80 Mar 17, 2016–Nov 7, 2019), warning signs, loaner transportation offer. `https://www.recalledornot.com/hyundai-genesis-seat-fire-recall`
5. **Transport Canada recall 2026-489** (Oct 8, 2026): matching Canadian recall for Genesis/G80 seat motors.

## Limitations
- Fire counts are Hyundai's own Part 573 reporting (2 U.S. fires); two additional NHTSA owner complaints describe later seat fires but are unverified by NHTSA and establish no cause
- The 1% defect estimate is Hyundai's estimate, not independently audited
- FARS has zero Genesis rows, so no crash-fatality cross-tab is possible — parked-car fires are structurally invisible in fatal-crash data
- Remedy status ("under development") is current as of Oct 30, 2026; could change with owner letters Dec 7

## Strongest Counterargument
The three strikes involve three unrelated components from three unrelated suppliers over a decade of production. Calling it a "Genesis problem" is narrative convenience: the ABS module (2021) and starter solenoid (2024) are underhood electrical gremlins common across the industry (Hyundai/Kia's 2023 ABS fire recall alone hit 3.3M vehicles across many models), while the seat switch is a novel one-off. The per-vehicle risk — 1 in 47,000 — is negligible, and 94,600+ owners have parked outside under Strike 1 and 2 without their houses burning down. Three park-outside orders is a memorable statistic, but the marginal risk of Strike 3 atop two already-remedied defects is barely above zero. Also: many G80s were fixed under Strikes 1 and 2 and are running fine — this is not a lemon-model verdict.

## Actionable Takeaways
1. **Check your VIN now** at nhtsa.gov/recalls — don't wait for the December letter; VINs have been searchable since Oct 13
2. If 26V664 is open on your car: **park outside, away from structures and other vehicles** until the remedy exists
3. Warning signs: burning smell from the seat area, or a seat switch that stops working — call a dealer immediately
4. Dealers/Genesis retailers will provide loaner or alternate transportation at no cost if you're uncomfortable driving it
5. The repair will be free even if out of warranty; Hyundai has a reimbursement plan on file if you already paid for this fault
