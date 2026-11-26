# Critic Panel — Round 0 — #1586 Ford/GM Recall Recount (Toyota 16)

**Slug:** 1586-ford-gm-recall-recount-toyota-16
**Journalist:** Axle McScatter
**Date:** November 25, 2026
**Hard gates (pre-critique, regex is source of truth):** em dashes 0 (max 3), banned phrases 0, "The" sentence starters 2.1% (max 15%), `class="story"` yes, `../style.css` yes, hero valid JPEG 2736x912 ?v=b4eaaeca, word count 1209, rhythm PASS (variance 2084.6, short 7.9%, long 68.4%).

## 1. General Editor — 9.0

Lede does the job in one paragraph: the recount result plus the new fact, with the key stat bolded. The table lands exactly where a reader wants it, right after the method paragraph, and the article never makes the reader wait for the numbers. The "What to do with this" paragraph is specific (VIN check, December 28 letters, 2024/hybrid exclusion) rather than generic safety advice. Minor ding: the headline is long at 16 words, but it earns the length by stating both halves of the finding. No structural change needed.

## 2. Voice Coach — 9.0

Unmistakably Axle: numbers first, methodology as the joke ("I ran the numbers, then I ran them again"), self-deprecation aimed at the counter rather than the reader. No banned phrases, no "The kicker", no throat-clearing. Rhythm script passes with a wide margin (variance 2084.6); the merged fragments kept the punchy opener without tripping the short-sentence gate. One watch item: "Consider the debt paid" is a strong Axle beat, but it only works because the previous article actually stated the debt, which the references confirm. Voice is consistent throughout; no byline could be swapped in without rewriting.

## 3. Ethics Reviewer — 9.0

Fair to all four manufacturers. Toyota gets the new defect stated plainly (62,490 trucks, camshaft can snap) without inflating it into a brand indictment, and the counterargument paragraph gives the ex-paperwork totals that flip the Toyota-GM order. Ford and GM are credited for counts that turned out to be right. No victims are named, no injuries are claimed where the filing reports none, and the remedy (free inspection/replacement) is stated. The article does not advise owners to keep driving a recalled truck; it tells them to check the VIN now.

## 4. Social / Shareability — 8.5

Pull stat "0 of 73" is the shareable number: zero over-the-air fixes across four brands is a clean, quotable indictment. The headline states a paradox (recount confirms two numbers, overturns a third) that works as a social hook. "Three different parts, three different failure modes, one outcome: the truck stops" is the best pull quote in the piece. Slightly under the top mark because the headline is long for a card and the table, while good, does not screenshot as cleanly as a single stat.

## 5. Legal Accuracy — 9.0

Campaign numbers verified against the NHTSA API output saved in /tmp/rcl1586: Ford 40 and GM 15 sets match the November 11 censuses exactly; Toyota 16 includes 26V750 filed November 12, 2026; Honda 2 (26V332, 26V424). Arithmetic checks: 40/15 = 2.67x, 40/16 = 2.5x; 31 field reports and 60 warranty claims as of October 30, 2026 per the Part 573 chronology via RecalledOrNot; owner letters from December 28, 2026, notifications by January 11, 2027. Minor note: refs 2-4 link to the site root rather than the individual stories because #1473/#1474/#1475 are queued, not published; consistent with prior practice, not an error. No invented URLs.

## 6. Research Rigor — 9.0

Genuine original contribution: the full re-run census (124 queries), the name-validity check on the 53 model names that 400, and the filing-gap analysis that kills the tempting "Ford went quiet" angle before it can be written (Ford's 23-day silence is inside its 28-day max gap). Limitations are stated honestly, including the dead-end model-name risk and the late-November-25 filing caveat. The strongest counterargument is given at full strength and partially conceded. Methodology is transparent enough to reproduce: query list, date filter, dedup rule, and raw-file paths are all in the research file.

## 7. Data Presentation — 9.0

The four-brand table is the right artifact for this story and it is new to this article (the #1473/#1475 pieces carried their tables in prose). Per-model leaders (Explorer 12, Express/Savana 4) give texture without a second table. The pull stat isolates the most surprising number. Units, dates, and counts are consistent between article, table, research file, and API output. One nit: the table caption repeats the query date that the disclaimer also states; harmless duplication.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 9.0 |
| **Average** | **8.93** |

**VERDICT: SHIP.** All 7 critics at 8.5+, all hard gates pass. No revision round needed. Round 0.
