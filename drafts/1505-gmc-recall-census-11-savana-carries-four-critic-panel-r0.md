# Critic Panel — #1505 GMC recall census (round 0)

**Slug:** 1505-gmc-recall-census-11-savana-carries-four
**Journalist:** Clara Rollover
**Date:** November 14, 2026
**Draft:** drafts/1505-gmc-recall-census-11-savana-carries-four.html

## Hard gates (regex/script = source of truth)

- Em dashes (`grep -o '—' | wc -l`): **0** (max 3) — PASS
- Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack): **0** — PASS
- "The" sentence starters: **0 of 57 (0.0%)** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, zero `story-detail`/`story-content`/`story-page`/`story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance 4800.2 (target >= 200), short 5.6% (<= 15%), long 64.8% (>= 15%) — **PASS**
- Hero: real JPEG, FF D8, 1920x1280, md5 635fe301, `?v=635fe301` on img + og:image + twitter:image — PASS
- Word count (body prose, excl. tables): 1,342

## 1. General Editor — 8.5

Lede lands the three numbers that matter (11, four, 297,404) in the first paragraph and the tables are placed where a reader needs them. The Savana section is the strongest stretch of prose in the piece: the recall-of-recall told as a customer story, not a filing summary. Deductions: 1,342 words is long for the format and the 27-row series table is heavy, though it is standard for the census series and the reader asked for the complete table by now. The middle (do-not-drive / fuel pump / seats) reads as a list of three mini-items; acceptable in a census, but the transitions are thin.

## 2. Voice Coach — 8.5

Clara is unmistakable here: "Before you sign that lease," the direct second-person takeaways, the anger on behalf of the van owner who did everything right. No banned phrases, no throat-clearing, no swappable byline; Axle would have led with the regression, Rex with the noir. Rhythm gate passes with real variance. Deduction: a few sentences run very long (the Savana June/October sentence tops 60 words and the L87 paragraph stacks three heavy clauses), and the mean sentence length of 41 words is inflated by table text but still signals prose that leans long. One short punch ("One, and it was a manual.") does a lot of work; one more would have balanced the rhythm.

## 3. Ethics Reviewer — 9.0

Fair to GM where fairness is owed: the counterargument is stated at full strength in its own paragraph, the L87 exclusion is disclosed in a table with a campaign number rather than buried, and the limitations paragraph names what the count cannot prove. No self-congratulation, no victim-blaming of owners, no punching down at van drivers. The "minority twin" framing of the Savana/Express split is honest about whose vans these mostly are. No deduction of substance; the half-point is for the lede's "seizes without warning" line, which is vivid but slightly ahead of the filed language (rod/crankshaft defect with failure reports, not a proven no-warning failure mode in every case).

## 4. Social / Shareability — 9.0

Headline is the share: "The Van Did Four of Them" is a complete story in eight words. Pull stat 297,404 is the strongest in the series since the Ford 40, and the kicker (The Gap) matches it. The six-VIN recall is a perfect pull quote for social, and the takeaways paragraph is written to be screenshotted. Deduction: the title is long for some surfaces and the "11 Times" construction will read as "11 recalls" to skimmers, which is correct but loses the campaign-vs-vehicle distinction the article itself insists on.

## 5. Legal Accuracy — 8.5

Every campaign number, date, component, and vehicle count traces to a Part 573, an NHTSA acknowledgement letter, the API record, or a named secondary reading of one, and the file is careful where sources disagree: the 26V127 count uses GM's 781 U.S. figure with the Carscoops 826 flagged in research, the 26V129 oemdtc 11,807 typo is corrected to the 11,787 the per-model split confirms, and the 26V494 count uses the NHTSA ack letter's 10 U.S. with the amended 11-vehicle filing noted. Deduction: the L87 figures (597,571 / 297,404 / 28,102 / EA26-005) come from a lemon-law page's NHTSA-derived summary, not a Part 573 read this run, and the article leans on them for its pull stat; disclosed in research and limitations, but the pull stat's sourcing is one step removed.

## 6. Research Rigor — 9.0

Original contribution is real and multiple: the 11-count itself, the per-model table, the 59,606 vs 46,891 no-double-count total, the 5.0x counted-vs-excluded ratio, the five-nameplates-one-paperwork-filing observation, and the completed GM-family table (GM 15 / Chevrolet 13 / GMC 11). Method is transparent (VPIC list, 14 queries, 400-means-empty rule, DD/MM/YYYY trap noted). Limitations and counterargument are present and specific. Deduction: the 26V114 GMC share is not fully broken out (only four per-model entries captured), so the GMC-only vehicle total for the biggest-breadth campaign is incomplete; disclosed, but a full Part 573 read would have closed it.

## 7. Data Presentation — 8.5

Four tables, each captioned, each earning its place: the 11 campaigns, the per-model counts, the excluded filings, the series table. The pull stat (297,404) is the right number to pull. Deduction: the excluded-filings table has no total row (the 600,236 total lives in prose, and the GMC-only excluded total of 300,069 lives only in research), so a reader scanning tables alone misses the ratio the article argues. The series table's Chevrolet parenthetical "(of GM's 15)" is doing quiet work that deserves a footnote for new readers.

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

All 7 critics at 8.5+, all hard gates pass. Round 0, no revision required. The two recurring nits (L87 sourcing one step removed; excluded-table total row missing) are documented limitations, not ship-blockers; both are disclosed in the article text.
