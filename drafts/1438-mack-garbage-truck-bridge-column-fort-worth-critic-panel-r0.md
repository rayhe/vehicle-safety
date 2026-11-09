# Critic Panel — #1438: Mack Garbage Truck vs Bridge Column, Fort Worth
**Round 0 — 2026-11-08 16:30 run**
**Journalist:** Rex Driverton | **Slug:** 1438-mack-garbage-truck-bridge-column-fort-worth

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in HTML): **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters (body paragraphs): 2/32 = **6.2%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story.css` — PASS
- Sentence rhythm (body text, sentence-rhythm-check.py): variance **391.5** (≥200), short **12.5%** (≤15%), long **45.8%** (≥15%) — PASS
  - Note: whole-file rhythm run fails short% (19.4%) because the script counts the kicker, headline, byline, pull-stat, references, and disclaimer as sentences. Body-text scoping matches prior runs (#1391 recorded body-text metrics). No action.
- Hero: real JPEG (FF D8), 1920x1280, `?v=3ef15cbb` cache-bust on all 3 references — PASS

## 1. General Editor — 8.8/10
Lede opens mid-crash and lands the mechanism by paragraph two. The pull stat (4.6x) is the article's spine and it earns its place. The ending — "the difference between a bad evening and a closed road" — is the best sentence in the piece. Deduction: the fourth paragraph (NTSB aftermath) is the weakest, mostly procedural recap; it earns its keep with the open-cause question but reads like a press-release paragraph between two stronger ones.

## 2. Voice Coach — 9.0/10
Distinctly Rex: deadpan, noir-adjacent, opinionated ("a fence with a gate", "guarding a direction nobody came from"). No banned phrases, no em dashes, rhythm passes with real variance. One line — "Here is the part that should bother every highway engineer in Texas" — is a direct address that works in Rex's voice. No sentence could be swapped into an Axle or Mia byline without sounding wrong.

## 3. Ethics Reviewer — 9.0/10
One dead driver, handled without sensationalism and without naming him (NTSB does not name). No blame is assigned before probable cause; the open-cause paragraph explicitly keeps medical event, distraction, and mechanical failure on the table. The passenger is described only as seriously injured and hospitalized. No self-congratulation, no moralizing about the driver.

## 4. Social / Shareability — 8.7/10
Headline is a clean share hook with a built-in paradox (protected column, unprotected approach). "A wall with an open back door" and "a fence with a gate" are quotable. The 4.6x pull stat travels well. Deduction: the article's best numbers live in paragraph three, which is dense; a casual scroller gets the headline and the pull stat but may not reach the 48-crashes-zero-pier-strikes kicker.

## 5. Legal Accuracy — 8.7/10
All NTSB facts verified against HWY26MH022 (date, time, truck model, operator, location, column count, barrier description, embankment, injuries, road closure, parties). Preliminary status disclosed in text and disclaimer. Citations are real, linked, and checkable. Deductions: "30-ton truck" is an estimate (loaded refuse-truck GVWR range), not a sourced figure — acceptable as an approximation but flagged; the original draft's "died at the scene" was corrected to "killing the driver" because NTSB says only "fatally injured" and does not place the death at the scene.

## 6. Research Rigor — 8.8/10
Original contribution is real: the 4.6x lethality multiplier is computed here from the FHWA Texas table (8.8% vs 1.9%), and the garbage-truck cell (48 run-off-road crashes, 0 pier strikes) is a new cross-tab. Limitations are stated at full strength, including the small 159-case sample and the dated FHWA data. Counterargument is present: one crash proves nothing about intent, and the cause is unknown. Methodology is transparent (both percentages shown with the division). Deduction: the 4.6x figure is computed from the source table's rounded percentages (8.8 ÷ 1.9 = 4.6); dividing the exact counts (14/159 ÷ 601/32,326) gives 4.7. The 0.1 gap is a rounding-path artifact, disclosed here; the article's numbers are internally consistent with the rounded inputs it shows.

## 7. Data Presentation — 8.6/10
Numbers are woven into prose rather than dumped, and the pull stat does its job. The 48/0 garbage-truck cell is the article's cleanest data point. Deduction: the Texas table (159 pier strikes, 14 fatal vs 32,326 ROR, 601 fatal) would read better as a small table than as a sentence carrying four numbers; a reader who wants to check the division has to re-read the paragraph.

## Verdict
- Scores: General 8.8, Voice 9.0, Ethics 9.0, Social 8.7, Legal 8.7, Rigor 8.8, Data 8.6
- **Average: 8.80 — all 7 critics ≥ 8.5, all hard gates pass → SHIP**
- Round 0. No revision round needed. Minor notes recorded above (rounding-path disclosure, table suggestion) do not block shipping.
