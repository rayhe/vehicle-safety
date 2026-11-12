# Critic Panel — #1473: Ford Said the Recall Deluge Was Old Cars and Software. Its Newest Vehicles Just Hit 40 Recalls.

**Slug:** 1473-ford-recall-census-40-new-model-campaigns
**Journalist:** Rex Driverton
**Kicker:** Investigation
**Date:** November 11, 2026

## Hard gates (regex = source of truth)

| Gate | Round 0 | Round 1 | Target |
|---|---|---|---|
| Em dashes (literal —) | 0 | 0 | ≤ 3 |
| Banned phrases | 0 | 0 | 0 |
| "The" sentence starters | 0.0% (0/25) | 0.0% (0/25) | ≤ 15% |
| CSS class `story` / `../style.css` | pass | pass | — |
| Hero JPEG (real JPEG, FF D8) | pass, 1920×1280, hash 382d3da2 | pass | — |
| Word count (body) | 487 | 488 | 300–500 |
| Sentence rhythm (script) | PASS (var 349, short 6.2%, long 40.6%) | PASS (var 511.9, short 6.2%, long 40.6%) | var ≥ 200, short ≤ 15%, long ≥ 15% |

## Round 0 scores

### 1. General Editor — 9.0
Lede does its job in one paragraph: the September defense, the September number, the new number. The Sep 9 six-in-one-day cluster is the best paragraph in the piece. Structure is clean: claim, count, spread, rebuttal, counterargument, action. Deduction: the census table lives in the research file, not the article; a reader who wants the per-model table has to trust the prose. Acceptable at this length, but a table would have been stronger.

### 2. Voice Coach — 9.0
No banned phrases, no em dashes, rhythm script passes on all three metrics. Rex is audible and distinct: "a parts catalog with a grudge," "a smaller avalanche is still an avalanche" (cut in revision — the line was in the research file, not the article; the article's equivalent, "That is a production system finding things late, all at once," lands just as well). One formulaic stretch: "In fairness, the other side of the ledger is not nothing" opens the counterargument paragraph like a template. The paragraph itself earns its keep.

### 3. Ethics Reviewer — 9.0
Fair to Ford in a way the headline is not, which is the right split: the headline prosecutes, the body gives the defense full strength (severity vs count, consent-order oversight, reporting thresholds). Quotes are attributed with dates and outlets. No invented data; every number traces to the API census or a cited source. The "finding things late" inference is flagged as interpretation by its phrasing, not dressed as fact.

### 4. Social/Shareability — 8.5
Headline is long but quotable and carries the whole thesis. Pull stat "40" with the Toyota/Honda comparison is a clean share card. "Buy year two" is the actionable line people forward. Weakness: no single sentence in the body is as shareable as the headline; the Sep 9 cluster is the closest and it is buried mid-piece.

### 5. Legal Accuracy — 8.0 (BELOW GATE)
One factual error, and it is exactly the kind this desk exists to catch: the article said "its 2025 NHTSA consent order." The consent order was announced **November 14, 2024** (NHTSA press release: $165M civil penalty, rearview-camera recalls, independent third-party oversight for three years). The research file carried the same error, inherited from a misreading of #815's note ("Ford under 2024 NHTSA consent order" was in #815 correctly; this draft mistyped it as 2025). Everything else checks out: campaign numbers verified against the NHTSA API run; Levine and Ghacham quotes match the Free Press and USA Today pieces; unit counts (26V468 565,691; 26V547 148,663; 26V689 30,123; 26V418 67,994) match filings/press. Fix required: change the year to 2024 and add the NHTSA press release as a reference.

### 6. Research Rigor — 9.0
Original contribution is real: a full re-run of the #815 census with the same method, new numbers, per-model counts, component mix, and the Sep 9 cluster, computed from the NHTSA API on Nov 11, 2026 — not quoted from anyone. Limitations are stated honestly (counts are not severity; API vocabulary gaps; OTA flag may undercount; census date). Strongest counterargument is stated at full strength and partially conceded. Methodology is reproducible from the research file. Deduction: the article itself does not show the per-model table; a skeptical reader cannot verify the Explorer-12 claim without the research file.

### 7. Data Presentation — 9.0
Numbers are exact, attributed, and contextualized (40 vs 25 vs 7 vs 2; +60% in ten weeks; 5.7x Toyota, 20x Honda). The Sep 9 cluster and the biggest-campaign unit counts give the count texture. The pull stat is the right number. Deduction: no in-article table; the component mix (visibility 5, seats 4, engine 5) is summarized in one clause rather than shown.

## Round 0 verdict: REVISE
Six critics at 8.5+, one below: Legal Accuracy 8.0 (consent-order year: 2025 → 2024). Hard gates all pass. Revision: fix the year in the article and research file; add NHTSA consent-order press release as ref-8. No other changes.

## Round 1 (after revision) — re-score

Fix applied: "its November 2024 NHTSA consent order"; ref-8 added (NHTSA press release, Nov 14, 2024). Research file corrected identically. All hard gates re-verified post-fix (em 0, banned 0, The-starters 0.0%, rhythm PASS var 511.9, 488 words, CSS pass, hero JPEG pass).

| Critic | Round 0 | Round 1 |
|---|---|---|
| General Editor | 9.0 | 9.0 |
| Voice Coach | 9.0 | 9.0 |
| Ethics Reviewer | 9.0 | 9.0 |
| Social/Shareability | 8.5 | 8.5 |
| Legal Accuracy | 8.0 | 9.0 |
| Research Rigor | 9.0 | 9.0 |
| Data Presentation | 9.0 | 9.0 |
| **Average** | **8.86** | **8.93** |

## Round 1 verdict: SHIP
All 7 critics at 8.5+, all hard gates pass. Average 8.93. Proceed to SHIP: queue as #1473, ship_date 2028-07-25 (one day after #1472's 2028-07-24).
