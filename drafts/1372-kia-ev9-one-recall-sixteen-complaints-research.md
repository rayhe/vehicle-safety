# Research — #1372: Kia Recalled One EV9 for a Battery Fire Risk. Sixteen Owners Had Already Complained.

**Slug:** `1372-kia-ev9-one-recall-sixteen-complaints`
**Journalist:** Rex Driverton (investigations beat)
**Kicker:** The Gap
**Date researched:** November 2, 2026

## Kill test
PASS. Novel angle, not a rehash of the site's published SK On piece (`stories/751-sk-on-electrode-misalignment-two-oems-one-defect.html`, supplier-pattern angle: one defect across VW + Hyundai/Kia). This article is about a different mechanism: the recall population was built from supplier traceability records, while a separate population of owners was already reporting battery failures to NHTSA — and the two populations barely overlap. The complaint-file analysis (CARC, Oct 29, 2026) postdates the recall and the SK On piece. It is the first published count of the gap for the EV9.

Killed this run (all already covered, many repeatedly):
- Nov 2 commercial/RV recall week: Thomas Built FMVSS 221 wheelhouse (#1369, same 13,593 buses); Wabash wrong-grease wheel lock-up 26V683 (#1370); RV power-seat cord trio Ember/Heartland/Alliance (#1371). The whole week is exhausted.
- Toyota Sienna seatback 26V690 (#1332/#1292); Lincoln Nautilus/Corsair neutral 26V688 (#1356); GM Traverse/Acadia seat welds 26V696 (#1357); RAV4 PHEV shutdown 26V659 (#1166); Ford F-150 tailgate cable (#1297); Great Dane k-brace (#1348); Paccar/Nova Bus fuel hoses (#1337); GM L87 EA26005 (#1367/#864/#1025/#1344); Ford Godzilla DP26011 (#1350); GMC Sierra grille RQ26003 (#1149/#1170/#1207/#1242/#1257/#1276/#1331/#1342); Tesla robotaxi school-zone DP26010 (#1145/#1167/#1205/#1315); Cybercab AQ26002 (#839); IIHS work-truck crash avoidance (#1144 et al); IIHS small-SUV back-seat round Kicks/Q3/RAV4/Trailblazer (#1244/#1278/#1346/#1312); GHSA pedestrian 2025 (#950, full treatment incl. 6,732 and distraction); NHTSA 2025 totals/cyclist exception (#1299); DTN60DB inflator ban (#824 published, #957, #1233); Genesis G80 seat/fire family (#1290/#1330/#1173/#1224); Ram 2500 ESC expansions (#1228/#1262/#1343); Hyundai Tucson phantom braking 26V316 (published story + #tucson-four-recalls-six-months).

## Verified facts (primary sources first)
1. **The recall — Kia Part 573 chronology, NHTSA file RCHRN-26V431-9401 (primary):** June 16, 2026, Kia HQ told Kia North America it was investigating EV6 high-voltage battery fires in the Korean market tied to a supplier-identified quality deviation (misaligned electrodes in certain cells). June 25, HQ decided to recall certain EV6/EV9 vehicles built in limited production periods. June 29, Kia NA decided to recall seven 2022-2024 EV6 vehicles and one 2024 EV9 vehicle, based on the Korean-market decision and VIN traceability information. Kia NA field-data analysis found "no related incidents of high-voltage battery fires." No fires, injuries, crashes, or fatalities in the filing.
2. **The defect and remedy — Kia owner letter, NHTSA file RCONL-26V431-2142 (primary):** certain battery cells may have been produced with a misaligned electrode; over time it may cause an internal short circuit, increasing fire risk. Remedy: dealers replace the entire high-voltage battery system assembly free of charge (about 3 hours). Campaign SC375; owner letters from August 7, 2026.
3. **The population — Kia dealer notice, NHTSA file RCMN-26V431-8407 (primary):** 7 EV6 units built December 30, 2021 through September 14, 2023, plus 1 EV9 built October 28, 2023. Total 8 vehicles. The list came from production and supplier records (VIN traceability), not from owner reports.
4. **The complaint file — CARC analysis of NHTSA's public complaint database, pulled October 28, 2026, published Oct 29 (secondary analysis of a primary database):** 16 different 2024 EV9 owners reported high-voltage battery failures to NHTSA, in complaints filed November 6, 2024 through February 26, 2026, out of 210 total complaints on file for the 2024 EV9. Nine of the sixteen reported a dash warning; nine said they were told not to drive or were towed. First complaint to recall filing (July 2, 2026): 603 days.
5. **Context — MotorTrend, July 2026 (trade press):** the wider SK On action covered 14 vehicles total (6 Hyundai Ioniq 5 + 7 Kia EV6 + 1 Kia EV9), with park-outside and 80%-charge guidance. Same supplier, same defect, same remedy logic.
6. **Original arithmetic (computed, flagged as computed):** 16 complaining owners vs 1 recalled EV9 = a 16-to-1 ratio. 9 of 16 = 56% reported a dash warning; 9 of 16 = 56% were told not to drive or were towed. The complaint window (Nov 6, 2024 - Feb 26, 2026) closed more than four months before Kia NA's recall decision (June 29, 2026). The single recalled EV9 is one specific build-date car; the sixteen complaints are sixteen different owners, so at most one of the sixteen could be the recalled car, and the recall list was built without the complaint file, so overlap is not established.

## Primary sources (4+)
1. Kia America, Part 573 chronology, NHTSA campaign 26V431 (RCHRN-26V431-9401). https://static.nhtsa.gov/odi/rcl/2026/RCHRN-26V431-9401.pdf
2. Kia America, owner notification letter, NHTSA campaign 26V431 (RCONL-26V431-2142). https://static.nhtsa.gov/odi/rcl/2026/RCONL-26V431-2142.pdf
3. Kia America, dealer notification, NHTSA campaign 26V431 (RCMN-26V431-8407). https://static.nhtsa.gov/odi/rcl/2026/RCMN-26V431-8407.pdf
4. CARC, "Kia's EV9 Battery Recall Covers Just One SUV — After 16 Owners Reported Failing Packs" (Oct 29, 2026), analysis of NHTSA complaint file pulled Oct 28, 2026. https://www.carc.com/news/kia-ev9-battery-recall-one-suv-16-complaints-october-2026
5. MotorTrend, "Hyundai and Kia Recalling 14 EVs (Yes, 14) Over Fire Risk, Owners Told to Park Outside" (July 2026). https://www.motortrend.com/news/hyundai-kia-recall-14-evs-fire-risk-park-outside
6. NHTSA recalls database (VIN lookup). https://www.nhtsa.gov/recalls

## Kill-test notes / what NOT to claim
- Do NOT claim the sixteen complaints are the misaligned-electrode defect. Complaints are unverified owner reports; they describe failing high-voltage batteries, which may be a different failure. Kia's filing says its own field analysis found no related battery-fire incidents. The gap is real; the identity of the failures is not proven.
- Do NOT claim the recalled EV9 is or is not among the sixteen. The recall list came from supplier records; overlap is unestablished either way. Say so.
- Do NOT include the recalled EV9's VIN or any owner's identity. The dealer notice lists VINs; the article does not need them.
- Do NOT claim Kia ignored complaints. The filing timeline shows a Korean-market investigation driving the decision; whether anyone at Kia NA read the US complaint file is not in the record. The claim is narrower and stronger: the system that builds recall populations from supplier records does not automatically sweep in the people who complained.
- 603 days is CARC's figure (first complaint Nov 6, 2024 to filing July 2, 2026). Use it as CARC's count, not as an independently recomputed figure.
- One recalled car is not a scandal by itself. A one-car recall built from traceability records is precision manufacturing control working. The story is the other side of that precision: precision about the supplier's list, silence about the complaint file.

## Actionable insights (for article)
1. If you own a 2024 EV9 (or 2022-2024 EV6): check your VIN at nhtsa.gov/recalls and on Kia's recall site. Do not assume a battery warning means you are covered, and do not assume no letter means no problem.
2. If your EV9 has shown a battery warning, lost power suddenly, or been towed for a battery issue: get it documented with the dealer AND filed with NHTSA. The complaint file is evidently part of the record future analyses read, even when it is not part of the recall population.
3. If you are shopping used: a 2024 EV9 with a replaced high-voltage battery assembly is a selling point, not a red flag, but ask for the paperwork. A replaced pack under SC375 is documented; an undocumented battery complaint history is not.
4. Park-outside + 80% charge guidance applied to the wider 14-vehicle action; if your car is in a battery recall with that guidance, follow it until the pack is replaced.

## Limitations
- The complaint analysis is CARC's, not an independent pull of the NHTSA complaint file this run. Counts (16, 210, 9, 9) are as CARC reported them from its Oct 28, 2026 pull.
- Owner complaints are unverified; some may describe failures unrelated to misaligned electrodes.
- The Part 573 chronology and letters were read via search-result excerpts of the NHTSA PDFs, not by opening the full PDFs; dates, counts, and quotes above match across multiple excerpts and the dealer notice, but a full-PDF read would be stronger.
- No causal claim is made about why the complaint file and the recall population diverge; the mechanism (supplier traceability vs complaint intake) is the documented difference, not proof of intent.
