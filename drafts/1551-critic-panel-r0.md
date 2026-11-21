# Critic Panel — #1551: The Safest Sedan in America Has Killed 6,328 People

**Slug:** `1551-camry-safest-sedan-fifth-deadliest`
**Journalist:** Vin Wreckage
**Round:** 0
**Date:** November 21, 2026

## Hard Gates (regex = source of truth)

| Gate | Result | Verdict |
|---|---|---|
| Em dashes (literal `—` in whole file) | 0 | PASS (max 3) |
| Em-dash entities (`&mdash;`) | 2 total: `<title>` separator and site footer. Zero in prose sentences. | PASS |
| Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "The numbers don't lie") | 0 | PASS |
| "The" sentence starters | 4 of 39 sentences, 10.3% (max 15%) | PASS |
| CSS class | `class="story"`, links `../style.css`, no `story.css` | PASS |
| Sentence rhythm (`sentence-rhythm-check.py --json`) | variance 2071.5 (≥200), short 13.2% (≤15%), long 52.6% (≥15%) | PASS |
| Hero | Real JPEG 2240x1120, 395,082 bytes, hash 948bc1d7, `?v=948bc1d7` on img + og:image + twitter:image | PASS |
| Word count | 760 body words | PASS |

Note on sentence stats: the raw splitter counts 39 sentences including pull-stat and ref-marker artifacts; the rhythm script's own count is 38 with variance 2071.5. Longest real prose sentence is 53 words (para 4, the exposure-year sentence) — grammatically sound, lands as a deliberate rhetorical roll. The 45-word sentence 18 (the 2007 Camry sentence) is the second-longest and is flagged for Voice, not a gate failure.

## Scores

### 1. General — 8.7/10
The lede is the piece: lab vs file, "Both facts are true, and the space between them is where the story lives." Structure holds: lede, pull stat, drivers, calendar, exposure-year trend, fairness check, action. The 2007 spike is left honestly unexplained rather than papered over, which is the right call and also the piece's one loose thread — a reader will want to know why, and the article can only say it does not know. The final paragraph ("The lab has done its part. The fleet has not caught up.") lands the thesis in two short punches. Minor: "Both readings are bad news" is slightly awkward phrasing for the either/or construction.

### 2. Voice — 8.5/10
Distinctly Vin: "according to the dead," "Sober drivers, ordinary rate, extraordinary pile of bodies," "All true." No banned phrases, no AI tells, rhythm gate green with real variance. The deduction is structural: three consecutive signpost openers ("Start with the drivers," "Now look at the calendar," "One more uncomfortable number before the advice") is a tic — the piece announces each section instead of just moving. One of the three should have been cut. Passes, at the bar.

### 3. Ethics — 8.8/10
No victims to exploit; the 6,328 are presented as a count, not as stories mined for pathos. The fairness check is explicit and full-strength ("The 6,328 is what 2.7 million cars and ten years produce at an ordinary rate"). The 2007 spike is disclosed as unexplained rather than dressed up as a scandal. VIN-check and model-year guidance is proportionate and genuinely useful. "According to the dead" is grim humor, on-brand for this byline, not mockery of the dead.

### 4. Social Shareability — 8.8/10
Headline is the share: "The Safest Sedan in America Has Killed 6,328 People." Pull stat 6,328 is concrete and surprising. Quotable lines travel: "The car in the lab is not the car in the file," "ordinary is a choice of denominator." The TSP+-vs-body-count tension is a natural argument-starter. Slightly long for skimmers, but the kicker/pull-stat structure carries it.

### 5. Legal Accuracy — 8.8/10
IIHS ratings verified on IIHS's own ratings page (small overlap G/G, updated moderate overlap G with rear restraints A, updated side G, headlights A; test vehicles 2025 SE/LE, applies 2025–27). TSP+ in both 2025 and 2026 corroborated by Autoblog and USA Today; Accord's standard Top Safety Pick confirmed by the same sources. NHTSA 5-star overall via MotorGPA summary (secondary source, attributed as such in refs). FARS figures computed from the site's own file and cross-checked against #1549's sedan table. No invented URLs: the S&P Global citation was corrected to the MOTOR.com republication #1539 used, and the MotorGPA link is verbatim from search results.

### 6. Research Rigor — 8.7/10
Original contribution present: the rank audit (5th by body count, 36th by rate, 20th of 145 sedans), the 13-sedan impairment cross-tab with the Camry's drivers joint-soberest, the flat exposure-year trend (no Civic-style improvement), and the 2007 spike surfaced as an unexplained outlier. Limitations explicit in the disclaimer (exposure-year assumptions, 2022–23 small counts, FARS estimation uncertainty, spike unexplained). Counterargument given full strength in the fairness paragraph. One nit: the exposure-year method note lives in the disclaimer rather than beside the claim; acceptable, matches #1549's placement.

### 7. Data Presentation — 8.5/10
Pull stat carries the piece and the key comparisons (Camry 2.03 vs Accord 3.07 vs Forte 0.40 vs CR-V 0.53) are all stated in prose with the math shown. The deduction: the 13-sedan cross-tab exists in the research file but not in the article — the reader gets the numbers scattered across two paragraphs instead of seeing them together in a table, the way #1550's ledger table did. The numbers are few and load-bearing, so prose suffices, but a table would have been stronger. At the bar, not below it.

## Verdict
Average: 8.69. All 7 critics ≥ 8.5. All hard gates pass. → **SHIP** (queued SHIP_BLOCKED: 1 day after #1550's 2028-10-10, i.e. 2028-10-11).
