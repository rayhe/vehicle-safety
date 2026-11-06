# Critic Panel — Round 0 — #1414 NHTSA $1.5M Recall-Registration Grants

**Slug:** 1414-nhtsa-1-5m-recall-registration-grants
**Journalist:** Clara Rollover
**Date:** 2026-11-06
**Verdict:** SHIP (avg 8.71, all critics ≥ 8.5, all hard gates pass)

## Hard gates (regex = source of truth)

| Gate | Result |
|---|---|
| Em dashes (`grep -o '—'`) | 0 (max 3) — PASS |
| Banned phrases | 0 — PASS |
| "The" sentence starters | 0/50 = 0.0% (max 15%) — PASS |
| CSS class `class="story"`, `../style.css` | PASS (no story-detail/story-content/story-page, no story.css) |
| Hero | Real JPEG, 1920×1280, hash 965b4906 — PASS |
| Sentence rhythm script | PASS (exit 0): variance 455.6 (≥200), short 12.1% (≤15%), long 63.6% (≥15%) |
| Word count | 602 prose words (guide 300–500; precedent #1413 ran 665, #1412 ran 757) |

Rhythm fix applied during DRAFT (pre-panel): merged "Six states can split the money." into the following sentence and "It makes it a small one." into the preceding sentence; short_pct fell 17.1% → 12.1%, script exit 1 → 0. No content changed, only sentence boundaries.

## Scores

### 1. General Editor — 8.5
Structure holds: news lede with the one-day-old peg, pull stat (1 in 10), Maryland pilot evidence, the grant-vs-gap arithmetic, the why-it-stalls section, full-strength counterargument, actionable close. The "eleven cents per car" line is the piece's spine and it lands in the right paragraph. Deductions: 602 words runs long against the 300–500 guide (precedent allows it); the California paragraph is a slight detour from the Maryland spine, though it earns its place as the other failure mode.

### 2. Voice Coach — 9.0
Clara's voice is unmistakable and unswappable: "Your DMV might start telling you in 2027. Your car has been telling you all along." Direct, practical, angry on behalf of the reader, never abstract. Zero banned phrases. Rhythm script passes all three metrics. Sentence lengths swing from 5-word punches to 55-word builds. Deduction: "Run the pilot's own numbers" / "Now run the new grant's numbers" repeats the same device twice in one paragraph; the second instance works, but the echo is audible.

### 3. Ethics Reviewer — 9.0
No moralizing, no self-congratulation, no exploitation of the dead. Takata's 27+ deaths and 400+ injuries are stated as fact, not leveraged for shock. The piece refuses to blame owners for skipping recalls and names the structural reasons (inconvenience, no loaner, fear of cost) before asking anything of the reader. The "check your VIN" close is earned by the evidence, not tacked on.

### 4. Social / Shareability — 8.5
Headline is the share trigger: "Last Time, Only One State Showed Up." The 1-in-10 pull stat cards well. "Eleven cents per car" is the quotable number. Deduction: no single viral one-liner as punchy as Clara's best; the closest is the closing couplet, which is good but needs the whole article behind it to land.

### 5. Legal Accuracy — 9.0
Every figure traces to a primary source verified live: NHTSA Nov 5, 2026 release ($1.5M, six states, Feb 4, 2027 deadline, Morrison quote verbatim); NHTSA 2017 Maryland announcement ("only state to apply," $222,300); NHTSA pilot-results release (4.6M renewals, 456,000 vehicles, 943,000 recalls, 371,000 repaired, 32% air bags); Free Press Nov 6, 2026 (Takata +219%, 40% inconvenience, 67M inflators, repairs free under 15 years). The California contrast is explicitly attributed to a secondary source. No FMVSS or case-law claims to check. The one soft spot: the Nov 5 NOFO itself was not independently reviewed on simpler.grants.gov; the deadline and priorities come from NHTSA's release, and the disclaimer says so.

### 6. Research Rigor — 9.0
Real original contribution: four computed figures (Maryland 39.3% repair yield, 9.9% of renewals carrying a recall, $0.11 per unrepaired vehicle, 2.7M upside at 60% completion) with inputs shown. Limitations are explicit and specific: Maryland repair count is a window rate, not a causal effect; +219% is Takata-specific; "double and triple" is NHTSA's own phrasing, not a study figure; completion rates are eight-quarter snapshots. Counterargument at full strength (notification is not repair; most recalled cars lack the defect; five of six slots went empty) and not strawmanned. Methodology transparent: every calculation shows its inputs.

### 7. Data Presentation — 9.0
Pull stat "1 in 10" with a precise label. Every number carries absolute and percentage where both matter (456,000 of 4.6M; 371,000 of 943,000; 39.3%). The per-vehicle and per-state arithmetic is shown, not asserted. The 50.3%-to-60% upside scenario is labeled as a scenario. Deduction: the 2.07 recalls-per-affected-vehicle figure from the pilot data was computed in research but left out of the article; it would have strengthened the "one car, two defects" point, but its absence obscures nothing.

## Average

(8.5 + 9.0 + 9.0 + 8.5 + 9.0 + 9.0 + 9.0) / 7 = **8.71**

## Verdict

**SHIP.** All seven critics at 8.5 or above, all hard gates pass on the regex counts, hero verified as a real JPEG. One rhythm fix applied during DRAFT (sentence merges only); no re-score needed as the fix only strengthened the lowest-scoring dimension.
