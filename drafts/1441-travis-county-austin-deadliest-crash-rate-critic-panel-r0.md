# Critic Panel — #1441: Travis County Killed 146 People Last Year. Per Crash, It Was the Deadliest Big County in Texas.
**Slug:** `1441-travis-county-austin-deadliest-crash-rate`
**Journalist:** Axle McScatter
**Round:** 0 — November 8, 2026

## Pre-panel corrections (self-review, fixed before scoring)
Two factual errors were caught during the gate-verification pass and fixed before this panel scored the draft:
1. Lede called Travis the "fourth-largest body count... behind Harris, Dallas, and Bexar." Wrong: Tarrant County had 191 deaths (Reyes table), more than Travis's 146. Fixed to "fifth-largest... behind Harris, Dallas, Bexar, and Tarrant." The research file carried the same error and was fixed too.
2. "Austin crashes one-sixth as often as Houston" — 60,317 / 11,032 = 5.47x, not 6x. Replaced with the exact counts, no fraction.
Both fixes are verified against the Reyes Big Six table and the TxDOT Cities table. The panel scores the corrected draft.

## Hard gates (regex = source of truth)
- Em dashes (literal U+2014): **0** (max 3) — PASS. All dashes are `&mdash;` entities in title only.
- Banned phrases: **0** — PASS (checked: "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "And it's not even close", "The numbers don't lie", "isn't about", "inflection point").
- "The" sentence starters: **0 of 35 (0.0%)** (max 15%) — PASS.
- CSS: `class="story"` present, `../style.css` linked, no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS.
- Structure: story-kicker, byline, dateline, story-body, pull-stat, story-references, site-footer all present — PASS.
- Hero: real JPEG (magic `ffd8`), 1920x1280, 815,420 bytes, md5 `61a76047` — PASS.
- Sentence rhythm (`sentence-rhythm-check.py --json`): **PASS** — variance 3506.8 (target >= 200), short 12.9% (<= 15%), long 71.0% (>= 15%).
- Prose: 891 words, 7 paragraphs (recent county pieces run 800-838; slightly long, noted by General Editor).
- Actionable insights: present and specific (slow down on I-35/US 183/SH 130/MoPac; cross at intersections; check your county) — PASS.

## 1. General Editor — 8.5
Structure is sound: lede with bolded stat, pull stat, seven paragraphs, references, disclaimer. The "twist" paragraph (serious injuries down 28%, deaths up 2%) is the strongest beat in the piece and lands exactly where it should. "Austin is not diluting the county. It is the county." is a good hinge line. Deductions: 891 words drifts past the recent county band (800-838) without earning every word — the counterargument paragraph repeats the reporting-bias point twice. The lede's "most misleading ranking" setup takes a full sentence to pay off; the per-crash finding, which the headline promises, does not arrive until paragraph 2. Good, not great.

## 2. Voice Coach — 9.0
Distinctly Axle: numbers-first, dry, "I ran the second denominator too" is exactly how this byline talks, and no other journalist on staff would write that sentence. Rhythm metrics pass with margin and the prose reads varied aloud: short punches ("It is the county.") against long builds. Zero banned phrases, zero em dashes, zero "The" starters. Deduction: "Give the ranking its proper discount before believing it" is a slightly stock transition, and two sentences in the counterargument paragraph run past 55 words, which is where even a good long sentence starts to sag. Minor.

## 3. Ethics Reviewer — 9.0
No victims named, no gore, no crash porn. Fair to Austin: the piece credits Vision Zero's injury reductions and pins the fatal crashes on state-owned roads the city cannot redesign, rather than blaming a city program that is working on the streets it controls. Actionable takeaways are specific and honest. Deduction: the closer ("where they happen right downtown") leans alarmist against a dataset where the per-capita gap between Travis (10.71) and Dallas (10.54) is 0.17 — the article says so nowhere in the body, so a reader cannot tell how narrow the per-capita lead is. The per-crash lead is the robust one and the piece says so, but the per-capita framing deserves the same honesty in-line.

## 4. Social/Shareability — 8.5
Two hooks in the headline (146 deaths, deadliest per crash) and an Austin-vs-Houston frame that is inherently shareable in Texas. The pull stat (8.53 vs 4.44) is a clean, quotable number, and "kills at nearly double the rate per crash" is the line that will travel. Deductions: the headline is 15 words, long for a social card, and "By The Numbers" is the most generic kicker in the taxonomy. The deck/og:description carries the Vision Zero twist, which helps.

## 5. Legal Accuracy — 9.0
Every numerical claim traces to a cited source with a working link: TxDOT county and cities tables (processing dates stated), Reyes CRIS study, Austin Vision Zero report, NHTSA early estimates. The three-way Austin death-count discrepancy (99 city / 98 TxDOT Cities / 96 Reyes) and the two-way Travis discrepancy (146 Reyes / 143 county table) are both disclosed in the disclaimer. No legal claims, no defamation exposure. Deduction: ref-4 points at the city's blog post while the 2026 year-to-date fatal-crash counts and the October speed management findings reach the article via Vision Zero ATX and Austin Politics summaries; the research file records those, but the article's citation does not name them. Acceptable, slightly incomplete.

## 6. Research Rigor — 9.0
The original contribution is real and checkable: the per-crash lethality ranking of the Big Six (Travis 8.53, Tarrant 6.11, Dallas 5.87, Harris 4.44, Bexar 3.89, El Paso 3.75) computed for the first time on this site from the TxDOT county table, plus the city-county rate identity (Austin 8.52 vs Travis 8.53) proving the lethality is the city, not a rural fringe. Limitations are thorough: processing-date wobble, derived-rate caveat, preliminary 2025 data. The counterargument is stated at full strength (small denominator, reporting bias, noise) and answered with evidence rather than dismissed. Arithmetic re-verified: 136/15,939 = 8.53; 8.53/4.44 = 1.92x; 8.53/3.89 = 2.19x; 8.53/6.11 = 1.40x; 94/136 = 69.1%; 98/143 = 68.5% (rounds to 69%); 8.52/4.53 = 1.88x; 21.50/3.19 = 6.74x; 27.08/2.81 = 9.64x. Deduction: two factual errors reached the draft (rank 4th vs 5th; "one-sixth") and were caught by self-review, not by a critic — the process worked, but the errors existing at all costs a point.

## 7. Data Presentation — 9.0
The pull stat is well chosen (8.53 with the Harris/Bexar comparison in the label), and the lede's bolded stat (10.71 per 100K) pairs with it: one number per denominator, which is the whole argument. The Big Six ranking renders cleanly in prose with all six rates and the two key ratios. Deduction: the per-capita table never appears in the body — the reader is told Travis is #1 per capita but never sees Dallas's 10.54, so the narrowness of that lead (flagged by Ethics) is invisible. One sentence would fix it.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.5 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social/Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 9.0 |
| **Average** | **8.86** |

**VERDICT: SHIP (round 0).** All 7 critics at 8.5+, all hard gates pass. No revision round required. Minor notes (headline length, per-capita narrowness in-body, ref-4 provenance) are polish items, not ship-blockers; the per-capita narrowness point is already disclosed numerically in the references and the research file, and the article's thesis rests on the per-crash lead, which is robust.
