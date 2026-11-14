# Critic Panel — #1506 park-outside census (round 0)

**Slug:** 1506-park-outside-census-3-new-cars-720k-used-bmws
**Journalist:** Vin Wreckage
**Date:** November 14, 2026
**Draft:** drafts/1506-park-outside-census-3-new-cars-720k-used-bmws.html

## Hard gates (regex/script = source of truth)

- Em dashes (`grep -o '—' | wc -l`): **0** (max 3) — PASS
- Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack): **0** — PASS
- "The" sentence starters: **2 of 74 (2.7%)** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, zero `story-detail`/`story-content`/`story-page`/`story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance 1457.0 (target >= 200), short 12.0% (<= 15%), long 54.2% (>= 15%) — **PASS**
- Hero: real JPEG, FF D8, 1920x1280, md5 1093f481, `?v=1093f481` on img + og:image + twitter:image — PASS
- Word count (body prose, excl. tables): 1,437

## 1. General Editor — 8.5

Lede lands the two numbers that matter (3 and 4, then 720,796) in the first paragraph and the tables are placed where a reader needs them. The ball-joint pair section is the strongest stretch of prose: same part, same year, 581x scale gap, told as a supply-chain story rather than a filing summary. Deductions: 1,437 words is long for the format, though it matches the census-series precedent (#1505 ran 1,342), and the method paragraph up front is dry — necessary for a census, but it reads like a footnote promoted to paragraph two. The "what the data does not prove" paragraph is doing honest work and earns its length.

## 2. Voice Coach — 8.5

Vin is unmistakable here: "Fun fact that will ruin your morning commute," the blunt-instrument line, the driveway paradox. No banned phrases, no throat-clearing, no swappable byline; Clara would have led with the buyer warning, Axle with the regression. Rhythm gate passes with real variance. Deduction: mean sentence length of 28.7 words leans long, and the long-sentence share (54.2%) is more than double the human target — the piece reads as one long build after another, with only a few short punches ("Read that again.") to break it up. One more three-word sentence per section would have balanced it.

## 3. Ethics Reviewer — 9.0

Fair to manufacturers where fairness is owed: the counterargument is stated at full strength in its own paragraph, the 720,796 exclusion is disclosed in a table with a campaign number rather than buried, and the Mack cross-check is labeled as secondary sourcing rather than presented as API fact. No self-congratulation, no victim-blaming of owners, no punching down at LEAF or Lucid drivers. The "precision is a luxury bought with traceability" framing is honest about what the 8-car recall does and does not prove. No deduction of substance; the half-point is for the counterargument's "when lawyers allow the order" line, which is an inference about manufacturer decision-making stated without a source.

## 4. Social / Shareability — 9.0

Headline is the share: "Three New Cars... The 720,796-Car One Went to Used BMWs" is a complete story in fourteen words. Pull stat 720,796 is the strongest in the series since the Ford 40, and the kicker (Investigation) matches it. The 581x ball-joint gap and the "eight bad nuts" line are perfect pull quotes for social, and the takeaways paragraph is written to be screenshotted. Deduction: the title is long for some surfaces and the "3 new cars" construction will read as "3 recalls" to skimmers, which loses the park-outside-vs-do-not-drive distinction the article itself insists on.

## 5. Legal Accuracy — 8.5

Every campaign number, date, component, and vehicle count traces to a Part 573, an NHTSA acknowledgement letter, the API record, or a named secondary reading of one, and the file is careful where sources disagree: the 26V106 total uses the Part 573's 69,153 with the dealer bulletin's 66,332 U.S. figure flagged, the 26V438 negative check was read from the RCAK itself rather than assumed, and the Mack figures are attributed to trade-press coverage of the NHTSA documents. Deduction: the 26V685 population (8) and the "no warning before failure" line come from secondary readings of the Part 573, not from a Part 573 read directly this run, and the article leans on them for the ball-joint pair's small end; disclosed in research and limitations, but the pair's symmetry rests partly on secondhand numbers.

## 6. Research Rigor — 9.0

Original contribution is real and multiple: the 3-and-4 flag count itself, the 96,389 / 4,882 vehicle totals, the 100-percent-defect pattern across all three park-outsides, the ball-joint pair at 581x scale, the Mack cross-check, and the completed 39-make table with 2,782 queries. Method is transparent (VPIC lists, suffix variants, curated Ram/Mini lists, trim spellings, split queries, 400-means-empty rule with vocabulary-failure exceptions, DD/MM/YYYY trap noted). Every brand count was cross-checked against its standalone census in the series. Limitations and counterargument are present and specific. Deduction: the article states the 188 distinct campaigns and shows per-brand counts only in research, so a reader cannot verify the 225 brand-mention vs 188 distinct reconciliation from the article alone; the dedup logic is explained in the method paragraph but the arithmetic is not shown.

## 7. Data Presentation — 8.5

Three tables, each captioned, each earning its place: the 3 park-outsides, the 4 do-not-drives, the excluded filings. The pull stat (720,796) is the right number to pull. Deduction: the excluded-filings table has no total row (the 720,796 + 644 = 721,440 excluded total lives only in research), and there is no per-brand table in the article, so a reader scanning tables alone misses both the series context and the ratio the article argues. The 100-percent-defect pattern is stated in prose but has no column in the park-outside table, where it would be most visible.

## Scores

| Critic | Score |
|---|---|
| General Editor | 8.5 |
| Voice Coach | 8.5 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 9.0 |
| Legal Accuracy | 8.5 |
| Research Rigor | 9.0 |
| Data Presentation | 8.5 |
| **Average** | **8.71** |

## VERDICT: SHIP

All 7 critics at 8.5+, all hard gates pass. Round 0, no revision required. The recurring nits (secondary sourcing on 26V685/26V351; per-brand table in research only; long mean sentence length) are documented limitations, not ship-blockers; all are disclosed in the article text.
