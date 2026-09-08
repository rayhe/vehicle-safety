# Research Notes — #843: The Defect Spread (0.5% to 100%)

**Slug:** `recall-defect-spread-half-percent-vs-100`
**Journalist:** Clara Rollover (consumer safety advocate; sequel to her June "1% Recall Math" piece)
**Date researched:** 2026-09-08

## News peg
Five safety recalls filed Aug 25–Sep 1, 2026. Every Part 573 filing forces the automaker to answer one question: what percentage of the recalled vehicles actually have the defect? The September answers range from 0.5% to 100%, and the spread itself is the story.

## The census (all from filed Part 573 reports / NHTSA recall reports)

| Recall | Units | Est. % defective | Est. actually defective | Source |
|---|---|---|---|---|
| Ford 26V548 (26S61) piston dome, 2026 Bronco/Explorer | 10,001 | 0.5% | ~50 | Part 573 RCLRPT-26V548-3059.pdf: "Estimated percentage with defect: 0.5%" |
| Mitsubishi 26V549 (SR-26-002) A-IVI camera software, 2025–2026 Outlander/PHEV | 67,146 | ~1% | ~671 | Autoblog ("only around 1 percent are estimated to be defective"); newestcarsusa; Part 573 RCLRPT-26V549-3979.pdf |
| Ford 26V547 (26C40) Mustang engine-compartment ground eyelets, 2024–2026 | 148,663 | 1% | ~1,487 | Fox Business: "Approximately 1% of the recalled vehicles are estimated to contain the defect, according to the recall notice" |
| Tesla 26V558 (SB-26-31-004) Model Y front suspension lateral-link bolts, 2026 | 19 | 75% | ~14 | Part 573 RCLRPT-26V558-2943.pdf (per #811 research); built Jul 26–Aug 4, 2026 |
| Chrysler 26V560 Ram 1500 radio software / rear camera, 2025–2026 | 239,131 | 100% | 239,131 | USA Today (Greta Cross, Sep 4): "FCA US estimates 100% of the outlined vehicles are impacted by the issue" |

## Original calculations
- Five recalls total: **474,960 vehicles** recalled.
- Estimated actually defective: **~241,353** (51%), driven entirely by the Ram software recall.
- **Strip out the Ram recall: 235,829 vehicles recalled, ~2,222 actually defective = 0.94%.** Fewer than 1 in 100.
- Ford's piston recall is the precision extreme: 10,001 letters for ~50 bad engines. Ford's own filing says its process "is capable of tracing piston production to the vehicle in which the piston is installed," yet the estimate is still 0.5%.
- The Ram recall is the deterministic extreme: bad radio software ships in every unit, so every unit is affected by construction.

## The frame (novel contribution)
The percentage is a **defect-type fingerprint**:
- **Deterministic defects (bad code in every unit)** → 100%. The Ram radio software cannot be wrong in only some trucks; it shipped to all of them.
- **Stochastic manufacturing escapes** → 0.5–1%. A piston dome crack, a loose ground eyelet, a software race condition that only bites ~1% of boots. The maker knows the defect exists *somewhere in the batch* but cannot say which VINs, so it recalls the whole batch.
- **Narrow bad-process windows** → 75%. Tesla's torque-tool PLC deactivation hit one line for 10 days; most cars from that window are suspect.

Nobody has aggregated the estimated-% field across a recall wave. The June article ("recall-week-one-percent-math") found the suspicious uniformity of 1%; this piece finds the full spread and what it reveals.

## Differentiation from #recall-week-one-percent-math (June 2026)
- June piece: "everyone says 1%, suspiciously uniform" + FARS baseline cross-tab.
- This piece: the **spread** (0.5%–100%), the **fingerprint** reading (deterministic vs stochastic vs process-window), the **ex-Ram 0.94%** calculation, and new September filings. No FARS cross-tab; different thesis. Explicitly positioned as a follow-up, not a repeat.

## Kill test
- Newsworthy? YES. Five recalls filed within eight days; two (Ram 100%, Ford 0.5%) filed the same week with a 200x spread in the same mandatory field.
- Novel angle? YES. The estimated-% field is never covered by press; the fingerprint reading is original.
- Zero prior coverage of this angle in 800+ articles: the June piece covered 1%-uniformity, not the spread or the fingerprint. PASS.
- 3+ primary sources? YES: three Part 573 PDFs (26V548, 26V549, 26V558) + NHTSA recalls API + USA Today + Fox Business + Autoblog.
- Actionable? YES: the % tells owners how to read their letter. Low % = your odds are good but only a VIN check at nhtsa.gov/recalls (or the dealer OASIS/dealer system) can clear you; 100% = assume affected until remedied. Never ignore the letter either way.
- Limitations: estimates are manufacturer self-reported; NHTSA does not independently verify them. The % measures defect presence, not crash probability. A 0.5% defect can still kill (piston failure at speed); a 100% defect can be benign (blue screen, no crash). Do not rank danger by the %.
- Strongest counterargument: over-recalling is the safe strategy. Missing one bad car is worse than alarming 99 healthy ones, and the law requires notifying every potentially affected owner. The cost is recall fatigue: roughly a quarter of recalled vehicles never get repaired, and letters that cry wolf 99 times train owners to ignore the 100th.
- Would a reader share? "Ford mailed 10,001 recall letters for 50 bad engines" — yes.

## Key facts to get right
- Ford 26V548: filed Aug 25, 2026; 10,001 vehicles (Bronco 1,062 + Explorer 3,071 + others); 0.5%; piston dome may crack → engine damage, loss of drive power; remedy: dealer inspection/engine replacement.
- Mitsubishi 26V549: filed Aug 25, 2026; 67,146 (65,940 gas + 1,206 PHEV); ~1%; A-IVI infotainment improper software programming → boot fail/freeze/restart/black screen/scroll; FMVSS 111 noncompliance; supplier Bosch Corporation (Japan); remedy: dealer software update. Precedent: Mitsubishi recalled 56,080 2022 Outlanders in 2022 (SR-22-003) for the same A-IVI camera lineage.
- Ford 26V547: filed Aug 25, 2026; 148,663 2024–2026 Mustangs; 1%; engine-compartment ground eyelets may overheat → fire risk.
- Tesla 26V558: filed Aug 31, 2026; 19 2026 Model Y; 75%; lateral-link fasteners not properly tightened (PLC deactivation on torque tool); built Jul 26–Aug 4, 2026; 1 field report, 0 crashes.
- Chrysler 26V560: filed Sep 1, 2026; 239,131 2025–2026 Ram 1500; 100%; radio software → rearview image replaced by blue screen; FMVSS 111.
- NHTSA requires the estimate under 49 CFR 573 (Part 573.6: "the estimated percentage of the vehicles involved with the defect").
- NHTSA Vehicle Safety Hotline: 1-888-327-4236; VIN check: nhtsa.gov/recalls.

## Sources
1. NHTSA Part 573, RCLRPT-26V548-3059.pdf (Ford 26S61, filed Aug 25, 2026) — https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V548-3059.pdf
2. NHTSA Part 573, RCLRPT-26V549-3979.pdf (Mitsubishi SR-26-002) — https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V549-3979.pdf
3. NHTSA Part 573, RCLRPT-26V558-2943.pdf (Tesla SB-26-31-004) — https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V558-2943.pdf
4. NHTSA recalls API (campaign verification: 26V547000, 26V548000, 26V549000, 26V558000, 26V560000) — https://api.nhtsa.gov/recalls/recallsByVehicle
5. USA Today, Greta Cross, Sep 4 2026 (Ram 26V560, 100% estimate)
6. Fox Business, Aug 28 2026 (Ford Mustang 26C40, 1% estimate)
7. Autoblog, Sep 2026 (Mitsubishi 26V549, ~1% estimate; Bosch A-IVI detail)
8. Reuters, Sep 4 2026 (Ram 26V560 filing; 239,131 units)
9. NHTSA VIN lookup — https://www.nhtsa.gov/recalls

## Verdict: PROCEED to DRAFT (Clara Rollover, By The Numbers kicker)
