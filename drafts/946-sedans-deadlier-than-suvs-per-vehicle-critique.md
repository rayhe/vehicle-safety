# Critic Panel — #946 "The Sedan Is America's Deadliest Body Style. The SUV Is Its Safest."
Round 0 — Vin Wreckage, kicker: Existential Dread

## Hard gates (regex/script = source of truth)
- Literal em dashes: **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", + STORY_GUIDE list): **0 hits** — PASS
- "The" sentence starters: **7.9%** of 38 body sentences (max 15%) — PASS
- CSS: `class="story"`, `../style.css`, no `story.css` — PASS
- Sentence rhythm (sentence-rhythm-check.py): variance **203.6** (≥200), short **5.6%** (≤15%), long **44.4%** (≥15%) — **PASS**
- Hero: real JPEG FF D8, 2048×1152, `?v=f8667681` — PASS
- Actionable insights: present (shopping guidance + VIN check + 4,000-lb caveat) — PASS
- Pre-panel fix: merged 7 short-sentence fragments (short_pct 20.9% → 5.6%)

## 1. General Editor — 9.0
Lede opens mid-thought with the bolded 89,127 stat, pull-stat placement is textbook,
and the piece moves through three falsified explanations (mileage, impairment, age)
before landing on mass. ~430 words, inside the 300–500 band. The "5,100 a year"
excess-death quantification gives the ending weight. Minor: the "certified pre-owned"
line is the only soft beat, but it humanizes the median-MY stat well.

## 2. Voice Coach — 9.0
Unmistakably Vin Wreckage: cosmic-absurdist framing ("the most ordinary object in
American life is also its deadliest shape"), the ledger metaphor sustained without
overstaying, and the closer ("the dealership sells mass by the pound") is pure Vin.
Could not swap this byline onto Rex or Clara without a rewrite. No AI tells, no
banned phrases, rhythm passes with real variance (fragments merged, long builds
intact).

## 3. Ethics Reviewer — 9.0
The dangerous recommendation — "buy heavier" — is fenced on both sides: the
externality to pedestrians/crash partners is stated explicitly, the ~4,000-lb
flatline is cited, and the advice lands on "the smallest vehicle that still clears
the weight your own survival requires." No victim-blaming of sedan drivers; the
piece blames physics and fleet composition, not people. The moral-ledger framing is
honest rather than preachy.

## 4. Social / Shareability — 9.0
Headline is a clean contrarian hook that inverts the dominant SUV narrative;
"2.3×" pull-stat is screenshot-ready. The Accord/Civic/Camry name-drop gives every
reader a personal stake ("the car your neighbor bought certified pre-owned").
High quote potential in the final paragraph.

## 5. Legal Accuracy — 9.0
All four references are real pages from the STORY_GUIDE approved URL table (NHTSA
FARS, CDAN query tool, IIHS fatality statistics, IIHS size/weight). No invented URLs,
no case-law or statutory claims to get wrong. nhtsa.gov/recalls link is the live
official VIN-check URL. Data claims are hedged to the dataset ("FARS captures fatal
crashes only").

## 6. Research Rigor — 9.5
Genuinely original cross-tabulation: class-level deaths per 1,000 registered
vehicles AND per 100M VMT, a cut no prior story ran (existing class pieces used
occupant death *ratio*, a different metric). Two confounders actively tested and
rejected with numbers (impairment 20.4% vs 19.5%; median death-vehicle MY 2007 vs
2006). Limitations are dedicated and specific (±15% VMT uncertainty, fatal-only
capture, uncontrolled demographics). Strongest counterargument — mass genuinely
protects occupants; the advice has a real externality cost — stated at full strength
and integrated into the actionable guidance. Every number recomputed from
fars_output.js and verified: 46.6%, 32.5%, 1.60 vs 0.68, 1.39 vs 0.55, 51,077
excess (~5,100/yr), top-four sedan counts.

## 7. Data Presentation — 9.0
Pull-stat (2.3×, labeled as per-vehicle) matches the 2.34 ratio; per-mile 2.5× is
stated separately with its own inputs (1.39 vs 0.55), so no ratio confusion. Inline
superscript refs tie claims to sources. One nit: the pull-stat rounds 2.34 to 2.3 —
acceptable and labeled. The "larger than the annual death toll of several entire
vehicle classes" claim checks out (5,100/yr vs. van class ~790/yr, sports ~610/yr).

## Verdict
Average **9.07** — all seven critics ≥ 8.5, all hard gates pass.
**VERDICT: SHIP.** Queued SHIP_BLOCKED for 2026-12-13 (1/day; queue drains through 2026-12-12).
