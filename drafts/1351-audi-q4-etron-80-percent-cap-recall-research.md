# Research: #1351 — Audi Q4 e-tron Battery Fire Recall (26V-698 / 93SK)

## Angle
On Oct 21, 2026, Volkswagen Group of America filed a Part 573 recall for
9,048 Audi Q4 e-tron and Q4 Sportback e-tron EVs (2024-2025): charging above
80% state of charge may trigger thermal propagation, a battery fire. Root
cause UNKNOWN, no remedy exists. Interim fix: charge to 80%, and dealers can
impose a temporary 80% software cap on your car. Owner letters not until
Dec 18, 2026.

This is the direct sequel to Crash Report #1105 / #1172 (ID.4, 26V-630,
22,524 vehicles, same 80% cap, same "we don't know why"). The 80% cap has
now crossed nameplates AND oceans: the ID.4 cells came from SK Battery
America (Commerce, GA); the Q4 cells come from SK Battery Manufacturing
Kft. (Komarom, Hungary). Same SK, different continent, same defect pattern.
Global total per Electrek (Oct 28): 85,402 VW Group EVs, including 12,734
Q4s in the KBA (German) database — of which exactly ONE is in Germany.

Novel hooks:
1. Zero known Q4 fires. This recall is driven by thermal events observed in
   OTHER VW Group vehicles (Audi was told Sept 21 of HV battery thermal
   events in sibling vehicles using the same battery type). The recall
   boundary is defined by someone else's fire.
2. The 0.1% math: VW estimates 0.1% of the 9,048 carry the defect — roughly
   9 cars. All 9,048 owners lose 20% of their range anyway.
3. The fix is a dealer-imposed software limiter: "if needed, the dealer will
   impose a temporary state-of-charge limit to 80%" (Electrek, quoting the
   filing). Your car's usable range is now negotiable at the service desk.
4. Range math: 2024 Q4 e-tron EPA range ~258 mi (RWD). 80% cap = ~206 mi
   usable. Owners surrender ~52 miles — plus the public fast-charging
   experience is unchanged, since DC fast charging to 80% is already the
   norm; the real loss is home-charging headroom and road-trip margin.

Kill test: PASS. "9,048 Audis recalled for fires that never happened, fix
unknown, charge to 80%, letters in December — and the same cap is now on
85,402 VW Group EVs worldwide" is genuinely newsworthy. Sequel continuity
with #1105/#1172, not a data dump.

## Primary sources
1. NHTSA Part 573 Safety Recall Report, campaign 26V-698 (26V698000), filed
   Oct 21, 2026; Audi internal recall 93SK. Contents as quoted in
   https://theevreport.com/audi-q4-e-tron-recall-battery-fire-risk and
   https://automotor.news/news/audi-q4-e-tron-battery-fire-recall-26v698/
   (build windows, supplier, 0.1% estimate, part numbers, dealer SoC cap).
2. NHTSA campaign record 26V698000 (nhtsa.gov/recalls); VINs searchable
   since Oct 23, 2026.
3. USA Today, "Volkswagen recalls over 9,000 Audi vehicles," Oct 26, 2026:
   https://www.usatoday.com/story/cars/recalls/2026/10/26/volkswagen-audi-recall-october-2026/92445641007/
   — NHTSA safety notice contents: thermal propagation above 80% SoC,
   cause under investigation, "may not meet required quality standards,"
   zero known claims/crashes/fires/injuries/deaths, 80% interim guidance,
   interim letters by Dec 18, 2026, Audi customer service 1-800-253-2834.
4. Electrek, "Volkswagen's EV battery recall reaches over 85,000 with Audi,"
   Oct 28, 2026: https://electrek.co/2026/10/28/volkswagens-ev-battery-recall-reaches-over-85000-with-audi/
   — 22,524 ID.4 (26V-630) precedent, 12,734 Q4s in KBA database (1 in
   Germany), 85,402 global total, dealer-imposed 80% SoC limit, owner email
   about temporary vehicle setting.
5. Crash Report #1172 (drafts/1172-id4-charge-to-80-percent-battery-recall-research.md)
   and #1105 — ID.4 sequel continuity; #751 (SK On electrode misalignment)
   for the SK-through-line.

## Key numbers (verified from sources above)
- 9,048 vehicles: 7,040 Q4 e-tron (built Dec 4, 2023 - Apr 24, 2025) +
  2,008 Q4 Sportback e-tron (built Nov 30, 2023 - Apr 22, 2025)
- Campaign: NHTSA 26V-698 (26V698000); Audi 93SK
- Battery modules: part 0Z1.915.599.*, cells from SK Battery Manufacturing
  Kft., Komarom, Hungary ("suspect production population")
- Defect: certain charging profiles + SoC >80% may trigger thermal
  propagation; root cause unknown, "manufacturing deviations" not
  conclusively determined
- Estimated defect rate: 0.1% (~9 of 9,048)
- Known fires/crashes/injuries/deaths tied to Q4: ZERO (Audi's filing)
- Trigger for action: Sept 21, 2026 — Audi Product Safety Committee told of
  HV battery thermal events in other VW Group vehicles with same battery type
- Remedy: under development; interim = 80% charge cap (+ optional dealer
  software limiter + battery diagnostic checks)
- Owner letters: interim, expected Dec 18, 2026; more once remedy exists
- No do-not-drive or park-outside advisory on the NHTSA record
- Global: 12,734 Q4s in KBA database (1 registered in Germany); VW Group
  total 85,402 EVs across ID.4 + Q4 recalls

## Original contribution (the math nobody ran)
1. The 9-car recall: 0.1% of 9,048 = ~9 vehicles actually carry the defect.
   The other ~9,039 pay the 20% range tax for someone else's cells.
2. Range surrender: 258 mi EPA (2024 Q4 e-tron RWD) x 0.8 = ~206 mi usable;
   ~52 miles of advertised range held hostage until an unknown fix on an
   unknown date. For the AWD (~255 mi) it's ~51 mi.
3. The metastasis timeline: ID.4 filed Sept 30 (26V-630, SK Commerce GA) ->
   Q4 filed Oct 21 (26V-698, SK Komarom Hungary), 21 days later. Same
   supplier family, different continent. The defect pattern is not a
   factory problem; it is an SK problem wearing two badges.
4. The December gap: VINs searchable Oct 23, but interim owner letters not
   until Dec 18 — a 56-day window where the only notification channel is
   press coverage and dealer word-of-mouth.

## What to avoid
- Do not claim any Q4 has caught fire (Audi says zero).
- Do not overstate the KBA "1 in Germany" figure — report it as Electrek
  reported it, as a curiosity, not a conclusion.
- Keep the ID.4 recap to one tight paragraph; this is the sequel, not the
  rerun. Link #1172 by number.
- Em dashes: MAX 3 in body text. No banned phrases. "The" starters <= 15%.
