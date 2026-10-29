# Critic Panel — #1316: Software Recall OTA Gap (Round 0)

## Hard gates (source of truth: regex)
- Em dashes (literal `—`): 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 3/30 = 10.0% (max 15%) — PASS
- CSS class: `article class="story"` — PASS
- Stylesheet: `../style.css` — PASS
- Sentence rhythm: variance 351 (≥200), short 10.7% (≤15%), long 53.6% (≥15%) — PASS
- Hero: real JPEG (FFD8), 1920x1280 — PASS
- Word count: 723

## 1. General Editor — 8.5
Structure is textbook Crash Report: kicker, lede with bolded stat, pull stat, scoreboard, trend, engineering explanation, original time-math calculation, dedicated caveats, actionable close. The 3,700-years hook is the strongest line in the piece and it is computed transparently. Deductions: 723 words is over the 300-500 guideline, though data pieces have been shipping long (1315 was 580); the caveats paragraph is a single dense block that could breathe. Engagement is high throughout. Not a data dump: every number serves the two-tier thesis.

## 2. Voice Coach — 9.0
Axle McScatter is unmistakable: "I ran the numbers... then I ran them again," "the spreadsheet gets rude fast," "now run the time math, since nobody else will." Banned phrases: zero. Rhythm metrics all pass with margin. Sentence starters vary; no throat-clearing. The one risk was the scoreboard reading like a list, but the merges fixed it into flowing prose. Distinct journalist voice, could not be swapped for Rex or Vin.

## 3. Ethics Reviewer — 8.5
The piece flirts with malice framing ("most makers just do not ship it") but immediately balances it with its own caveats: denominator effects, architectural constraints, franchise-dealer law, and the explicit "nobody has proven it is deliberate yet" from the source. No victim-blaming, no self-congratulation, data fully attributed. The 3,700-years framing is dramatic but the assumption (1 hour per visit) is stated in the sentence itself. Fair.

## 4. Social/Shareability — 8.5
Pull stat 32.3M is a clean share card. The viral line is "3,700 years of human life spent in service lounges for a file download." Headline is long but it is the whole pitch. The Ford/Stellantis/Toyota callout gives owners a personal reason to click. Minor: no second pull quote; the scoreboard does that work instead.

## 5. Legal Accuracy — 9.0
Every numerical claim traces to tensorust's published count of the NHTSA recall file, with methodology quoted (flat file, type V campaigns, deduped by campaign number, "software" heuristic, OTA keyword rules). No liability claims made against any maker. The "zero of 35" figures are correctly attributed to the analysis, not asserted as Ford's/VW's own data. Disclaimer present. ref-3 names the flat file without hyperlinking a URL that cannot be verified to exist — correct per the no-invented-URLs rule.

## 6. Research Rigor — 8.5
Original contribution: the time-cost calculation (32.3M hours → ~3,700 years; Ford ~1,190 years) is a novel computation on the data, and the "defect is code, bottleneck is the route" framing is a genuine finding about recall-distribution economics. Limitations are dedicated and honest (heuristic counting, NHTSA maximums vs completed repairs, unflashable modules). Counterargument at full strength (technician verification, bricked cars, dealer-law barriers). One honest weakness: all numbers flow through a single secondary analysis, but it is an analysis of primary NHTSA data with open methodology, and that is disclosed in the piece.

## 7. Data Presentation — 9.0
Verified every number against the tensorust source: 708/140/20% ✓; 32.3M of 59.7M ✓; OTA trend 19/12/22/19/28 ✓; 113→183 ✓; Ford 130/23/18%/10.42M ✓; Stellantis 64/3/5%/6.11M ✓; VW 35/0/1.83M ✓; Toyota 25/2/8%/3.91M ✓; Hyundai 43%, GM 38%, Volvo 56%, Lucid 85%, Rivian 100% ✓; Porsche/Mazda 0 of 13 ✓. Math checked: 32.3M/8760 = 3,687 ≈ 3,700 ✓; 10.42M/8760 = 1,190 ✓. No invented figures.

## Verdict: SHIP (round 0)
- Average: 8.71 (8.5, 9.0, 8.5, 8.5, 9.0, 8.5, 9.0) — all 7 critics ≥ 8.5
- All hard gates PASS
- No revision needed
