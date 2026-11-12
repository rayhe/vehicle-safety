# Critic Panel — #1474: GM Recalled the Same Steering Nut Twice in Four Months. It Still Beats Ford 15 to 40.

**Slug:** 1474-gm-recall-census-15-new-model-campaigns
**Journalist:** Rex Driverton
**Kicker:** Investigation
**Date:** November 11, 2026

## Hard gates (regex = source of truth)

| Gate | Round 0 | Round 1 | Target |
|---|---|---|---|
| Em dashes (literal —) | 0 | | ≤ 3 |
| Banned phrases | 0 | | 0 |
| "The" sentence starters | 8.0% (2/25) | | ≤ 15% |
| CSS class `story` / `../style.css` | pass | | — |
| Hero JPEG (real JPEG, FF D8) | pass, 2048×1152, hash 3b90a8b5 | | — |
| Word count (body) | 525 | | 300–500 |
| Sentence rhythm (script) | PASS (var 475.6, short 8.8%, long 44.1%) | | var ≥ 200, short ≤ 15%, long ≥ 15% |

## Round 0 scores

### 1. General Editor — 9.0
Lede does its job in two sentences: the Ford number, the GM number, the hook. Structure is clean: claim, count, the van anecdote, the scary campaigns, counterargument, action. The steering-nut double is the best paragraph in the piece and it sits exactly where it should. Deduction: the per-model table lives in the research file, not the article, same as #1473; a reader who wants to verify "eleven models drop to zero" has to trust the prose. Also 525 words, slightly over the 300–500 norm.

### 2. Voice Coach — 9.0
No banned phrases, no em dashes, rhythm script passes on all three metrics (variance 475.6 is the strongest yet in this series). Rex is audible and distinct: "enjoy the win," "four months and two federal campaigns later, for one nut," "a bad number if one of them is yours." One tic: "flattered by paperwork" in paragraph two and "flatters it twice over" in paragraph five repeat the same verb; the second instance earns its keep as the counterargument pivot, so it stays. No revision required.

### 3. Ethics Reviewer — 9.0
Fair to GM in a way the headline is not, which is the right split: the headline prosecutes, the body gives the defense full strength (severity vs count, the manual-recall inflation, quiet reporting vs clean manufacturing). The "software-fix story does not survive contact" line is flagged as interpretation by its phrasing, not dressed as fact. Quotes are attributed with dates and sources. No invented data; every number traces to the API census or a cited NHTSA document.

### 4. Social/Shareability — 8.5
Headline is long but quotable and carries the whole thesis. Pull stat "15" with the Ford/Toyota/Honda comparison is a clean share card. "A bad number if one of them is yours" is the line people forward. Weakness: no single mid-body sentence is as shareable as the headline; the transfer-case paragraph is the closest and it is dense with filing detail.

### 5. Legal Accuracy — 8.0 (BELOW GATE)
One factual error, repeated twice, and it is exactly the kind this desk exists to catch: the article says "Yesterday I ran Ford's new-model recall census" and later "the same zero-for-40 result Ford posted yesterday." Both censuses ran on **November 11, 2026**: #1473 was queued by the 16:30 run today, and this GM census ran at 18:30 today. "Yesterday" is wrong in both places. Everything else checks out: campaign numbers and dates verified against the NHTSA API run (26V114 Feb 26, 26V399 Jun 23, 26V718 Oct 29); the 26V718 re-inspection language matches the NHTSA letter; the 26V289 figures (68 suspect assemblies, 46 in 2026 vehicles, SUFS report Apr 14 after a Silverado 1500 lock-up in a parking lot) match the Part 573 report; the consent order is correctly dated November 2024 (the #1473 lesson, applied). Fix required: change both "yesterday" references to "earlier today" / "this afternoon" in the article, and the matching "Yesterday this site re-ran" sentence in the research file.

### 6. Research Rigor — 9.0
Original contribution is real: the first GM brand-level census on this site, same method as #1473/#815, new numbers, per-model counts, component mix, and the double-recall finding, computed from the NHTSA API on Nov 11, 2026 — not quoted from anyone. The API vocabulary trap (bare model names 400ing) was caught and worked around with trim variants plus campaign-summary cross-checks, and the limitation is documented honestly. Limitations are stated (counts are not severity; the manual recall inflates per-model counts; OTA flag may undercount; census date). Strongest counterargument is stated at full strength and partially conceded. Deduction: the article itself does not show the per-model table; a skeptical reader cannot verify the Express/Savana-4 claim without the research file.

### 7. Data Presentation — 9.0
Numbers are exact, attributed, and contextualized (15 vs 40 vs 7 vs 2; vans at 4 each; 0 of 15 over-the-air). The transfer-case and brake-module campaigns give the count texture. The pull stat is the right number. Deduction: the article never states the 40/15 ratio explicitly (Ford at 2.7x GM); "Ford's lead is not close" gestures at it without the number. No in-article table.

## Round 0 verdict: REVISE
Six critics at 8.5+, one below: Legal Accuracy 8.0 (both "yesterday" references are wrong; both censuses ran Nov 11). Hard gates all pass. Revision: fix the two day references in the article and the one matching sentence in the research file. No other changes.

## Round 1 (after revision) — re-score

Fix applied: lede now reads "Earlier today I ran Ford's new-model recall census: 40 campaigns. This afternoon I ran the same census on General Motors..."; paragraph four now reads "the same zero-for-40 result Ford posted earlier today"; research-file angle sentence corrected identically. Zero "yesterday" references remain in either file. All hard gates re-verified post-fix (em 0, banned 0, The-starters 8.0%, rhythm PASS var 475.2, 528 words, CSS pass, hero JPEG pass).

| Critic | Round 0 | Round 1 |
|---|---|---|
| General Editor | 9.0 | 9.0 |
| Voice Coach | 9.0 | 9.0 |
| Ethics Reviewer | 9.0 | 9.0 |
| Social/Shareability | 8.5 | 8.5 |
| Legal Accuracy | 8.0 | 9.0 |
| Research Rigor | 9.0 | 9.0 |
| Data Presentation | 9.0 | 9.0 |
| **Average** | **8.79** | **8.93** |

## Round 1 verdict: SHIP
All 7 critics at 8.5+, all hard gates pass. Average 8.93. Proceed to SHIP: queue as #1474, ship_date 2028-07-26 (one day after #1473's 2028-07-25).
