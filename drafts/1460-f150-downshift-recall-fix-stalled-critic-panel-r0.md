# Critic Panel — Round 0 — #1460 F-150 Downshift Recall Fix Stalled

**Article:** `drafts/1460-f150-downshift-recall-fix-stalled.html`
**Journalist:** Rex Driverton
**Date:** November 10, 2026

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters: **2/65 = 3.1%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **527.8** (≥200), short **10.6%** (≤15%), long **53.2%** (≥15%) — PASS (fixed in revision: 4 fragment merges)
- Hero: real JPEG (FFD8), 2352x1008, 349,004 bytes, md5 `5e01601d` — PASS

## 1. General Editor — 9.0
Lede lands the whole story in two sentences: 1.39M trucks, a fix that stopped showing up. The pull stat (43%) is the single most arresting number in the file and it is placed early. Structure follows the house shape: lede, mechanism, investigation, stall, math, counterargument, limitations, action. One deduction: the "Run Ford's own numbers" paragraph is the densest in the piece and carries three distinct ideas (1% math, open EA, reverse rollaway); it holds together, but a reader skimming could miss the rollaway buried at the end. Not worth a revision round on its own.

## 2. Voice Coach — 9.0
Distinctly Rex: deadpan, noir-detective cadence, "A recall with a remedy that cannot be installed is a press release with a VIN lookup attached." No banned phrases, no throat-clearing, sentence rhythm verified passing with high variance. The "Start with the part that breaks" opener is a Rex tell and works. One soft spot: "It believes the bad reading and commands a downshift" is slightly mechanical after the merge, but it reads as deliberate staccato, so it stays.

## 3. Ethics Reviewer — 9.0
Fair to Ford throughout. The stall is attributed to owner reports and named outlets, never asserted as confirmed fact. The counterargument is stated at full strength and the article explicitly says a pause is not a cancellation. No victim-blaming, no sensationalized injury claims (none are claimed). The "What This Means for You" section gives owners a concrete, checkable action rather than dread alone.

## 4. Social / Shareability — 8.5
Headline is a shareable paradox: a recall whose fix stopped. The 43% lockup stat is the pull-quote. The 6th-to-2nd-at-64-mph detail is the sentence people will repeat. Slight deduction: no single one-line kicker quote that fits a social card without the headline; the headline itself does that job, so this is marginal.

## 5. Legal Accuracy — 9.0
Every load-bearing claim traces to the NHTSA ODI resume, the Ford Part 573 report, or a named publication with a date. The unverified status of the stall is stated three times (lede-adjacent paragraph, counterargument, limitations). No defamatory assertion: Ford is quoted via its own filings, and the "parts issue" pause is attributed to Atlanta News First via the Nov 10 report. The June re-recall reference links to the site's own published piece. No legal exposure identified.

## 6. Research Rigor — 9.0
Original contribution is real, not decorative: the 1% math (~13,900 trucks carrying the defect vs. 1.39M needing the software), the open-EA paradox (the file exists to catch exactly a stalled remedy), and the reverse-rollaway mode the recall paperwork omits. Limitations are honest and specific: unverified owner reports, self-reported complaint counts, Ford-sourced 1% estimate, no FARS attribution. Methodology is visible: counts are given with their as-of date (April 2, 2026) and their source (Ford's chronology vs. NHTSA's pool).

## 7. Data Presentation — 8.5
Numbers are everywhere and each carries its denominator: 329 complaints, 43% lockup, 444/121/105/316 counts, 1% defect estimate, 11 years. The pull stat is clean. Deduction: the four Ford counts (444 warranty, 121 field, 105 customer-service, 316 NHTSA) arrive as a comma string inside a long paragraph; a reader gets them, but a small inline table would have been kinder. Acceptable as-is; not a ship-blocker.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 8.5 |
| **Average** | **8.86** |

**VERDICT: SHIP.** All 7 critics at 8.5+, all hard gates pass, round 0. No revision round needed. Minor notes (dense paragraph, no inline table) are polish, not defects.
