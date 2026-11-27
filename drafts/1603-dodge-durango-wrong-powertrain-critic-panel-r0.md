# Critic Panel — #1603 Dodge Built 15 Durangos With the Wrong Engine (Round 0)

**Article:** drafts/1603-dodge-durango-wrong-powertrain.html
**Journalist:** Axle McScatter | **Kicker:** By The Numbers
**Word count:** ~1,170 body words + 5-row comparison table
**Date scored:** 2026-11-27

## Pre-critique fixes (applied during DRAFT, before this panel)

- Sentence rhythm initially FAILED: short sentences 18.2% (target ≤15%). Fixed by merging three fragment clusters into longer constructions ("Not rebuilt engines, not repaired engines, but entirely new ones..."; "small numbers and the same hole every time"; campaign number folded into the VIN-check sentence). Re-check: variance 1448.9, short 11.8%, long 54.9% — PASS.
- Three literal em dashes in the references section replaced with `&mdash;` entities. File-wide literal count now 0.

## Hard gates (regex/script = source of truth)

| Gate | Result |
|---|---|
| Em dashes (literal) | 0 (max 3) — PASS |
| Banned phrases | 0 — PASS |
| "The" sentence starters | 1.8% (max 15%) — PASS |
| CSS class `story` / `../style.css` | 1 occurrence each, 0 `story.css` refs — PASS |
| Sentence rhythm | variance 1448.9, short 11.8%, long 54.9% — PASS |
| Hero JPEG | real JPEG (FF D8), 1920x1280, hash f92938b7 — PASS |
| Word count | 1,171 — PASS (short side of recent range, table carries weight) |

## 1. General Editor — 8.7/10

Lede lands immediately: fifteen new engines, no throat-clearing. Structure is clean (lede, scale paragraph, table, math, mechanism, counterargument, limitations, action). The table is the article's spine and it earns its place. Knock: at ~1,170 words it is the shortest recent article, and the mechanism paragraph ("Think about what has to fail...") is the only pure-prose stretch; one more paragraph of consequence (what an engine swap actually costs a dealer, or how the mismatch was discovered) would have thickened it. The filing does not say how it was discovered, so the gap is honest, not lazy. No structural repair required.

## 2. Voice Coach — 8.8/10

Distinctly Axle: a census nobody asked for, a table, percentages carried to three significant figures, "the totals lie about the shape of the problem." No banned phrases, no "The" pile-up, rhythm now passes with real variance. The "Small numbers, same hole" punch survived the rhythm fix in longer form. Minor: "which proves nothing except that factory errors do not take turns" is the closest thing to a shrug in the piece, but it reads as Axle's dryness, not filler. No rewrite needed.

## 3. Ethics Reviewer — 9.0/10

No victims, no injuries, no one to exploit; the article correctly refuses to claim "no one was hurt" and says only that the filing cites none. No manufacturer is smeared beyond its own filing language; Chrysler's words are quoted verbatim. The counterargument gives the "system worked" reading full strength. Nothing to fix.

## 4. Social / Shareability — 8.5/10

Headline is the share: "Dodge Built 15 Durangos With the Wrong Engine. The Fix Is a Whole New Engine." The pull stat "15" is plain as a number but the label does the work, and the 99%-vs-0.003% inversion is the quote people will repeat. Knock: no second pull-quote moment; the table does the viral work instead of a line. Passes the bar.

## 5. Legal Accuracy — 9.0/10

Every checkable claim verified live against the NHTSA recalls API on 2026-11-27: 26V760 (Nov 19, 2026, incorrect powertrain, replace engine + catalytic converters, letters Dec 15, VINs Dec 1), 26V701 (Oct 22, 2026, 13,330 tail-light vehicles), 26V766 (Nov 20, 2026), 25V889 (Dec 19, 2025), 26V436 (Jul 8, 2026). Quotations from the Part 573 summary are verbatim. "Within four months of the build window" is accurate (build ended Jul 22, filed Nov 19). Population of 15 is sourced from four agreeing Part 573 mirrors and disclosed as such in the limitations. No legal overreach.

## 6. Research Rigor — 8.8/10

Genuine original contribution: the five-campaign factory-error census, built by the author from live NHTSA API queries, with the 547,054 total and the 99%-vs-0.003% inversion computed from it. Limitations are explicit and specific (unknown powertrains, unknown denominator, mirror-sourced populations, non-exhaustive grouping). Strongest counterargument is stated at full strength and answered rather than dismissed. Knock: the census depends on the search phrase "manufactured with an incorrect" and the article admits it may miss campaigns filed under other wording; that is disclosed, not hidden. Passes.

## 7. Data Presentation — 9.0/10

HTML table with all five campaigns, populations, remedies; pull stat with a label that states the remedy; every derived number shown with its inputs (547,054 total; 99%; 0.003%; 0.11%; 13,345). The one arithmetic claim a reader might check (15/13,345 = 0.112%) rounds correctly to 0.11%. Table renders as a real `<table>`, not a prose list. No repair needed.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 8.7 |
| Voice Coach | 8.8 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.8 |
| Data Presentation | 9.0 |
| **Average** | **8.83** |

**7/7 critics ≥ 8.5. All hard gates pass. Round 0 → SHIP.**
