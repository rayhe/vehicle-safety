# Critic Panel — Round 0
## #1529 "The Safest Cars in America Are Mostly Just the Newest Ones" — Axle McScatter
## November 16, 2026

## Hard gates (regex = source of truth)
- Em dashes: **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters: **3/32 = 9.4%** (max 15%) — PASS
- CSS: `class="story"`, `../style.css`, no story-detail/content/page — PASS
- Hero: real JPEG 1920x1280, md5 abf607ae, og:image + twitter:image with ?v= hash — PASS
- Word count: 565 incl. table/pull-stat (~495 prose) — slightly over the 300-500 guide, table justifies it
- Sentence rhythm: variance 460.1, short 9.4%, long 40.6% — PASS (exit 0)

## 1. General Editor — 8.5
Lede lands the paradox in two sentences and the pull stat (2.5x) is the article in miniature. The table does the heavy lifting without a wall of numbers in prose. Weaknesses: the pull-stat claim repeats the lede math, and the piece runs long for the format. Structure is otherwise clean: claim, mechanism, correction, counterargument, canary, action.

## 2. Voice Coach — 9.0
Distinctly Axle: opens with the regression-line joke, loves the table, no throat-clearing. Zero banned phrases, zero em dashes, rhythm metrics all pass after one revision round (merged four fragments). The closing "Technically data. Mostly hope." is the best two-sentence ending in the recent queue. Nothing here could be swapped to another byline without rewriting.

## 3. Ethics Reviewer — 9.0
The article corrects the site's own flagship metric in public, names the mechanism in its own code, and does not congratulate itself for the catch. No vulnerable group is singled out; no driver-blaming. The Ram 3500 zero is presented as a canary with the mechanism explicitly unclaimed. Honest.

## 4. Social / Shareability — 8.5
Hook travels: "the safest car in America is only safest because it barely existed." Model Y in the headline guarantees clicks and arguments in replies. Pull stat is quotable. Docked half a point: the headline is long for a card, and the table does not survive a screenshot as well as a single number would.

## 5. Legal Accuracy — 9.0
Every launch year is sourced (Model Y March 2020, Telluride 2020 MY, Seltos 2021 MY). FARS and IIHS claims link to the primary pages. No allegation against any manufacturer; the error is the site's own methodology, stated as such. No defamation or misattribution risk.

## 6. Research Rigor — 9.0
Original contribution: the time-exposure error is derived from reading `fars_process.py` (`estimate_vmt` hard-codes 10 years via `len(FARS_YEARS)`), not from re-summarizing a press release. Limitations are explicit (calendar-year counting, fleet growth, binned fleets, fatal-only data). Strongest counterargument is given at full strength: corrected rates still land 3-7x below the median, Macan and Crosstrek needed no correction, and IIHS data confirms newer cars really are safer. Methodology is shown, not asserted.

## 7. Data Presentation — 9.0
The corrected-rate table is the article's spine: published vs corrected side by side, years-in-window shown so the reader can check the arithmetic. Median (0.54) gives the anchor. One nit: the table's flattery factors (2.5x, 3.3x) are stated in prose rather than as a column; acceptable, prose carries it.

## Scores
| Critic | Score |
|---|---|
| General Editor | 8.5 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 9.0 |
| **Average** | **8.86** |

## VERDICT: SHIP
All 7 critics at 8.5+, all hard gates pass, round 0. No revision round needed.
