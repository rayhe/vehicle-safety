# Critic Panel — #1496 Rivian recall census — Round 0

**Slug:** 1496-rivian-recall-census-3-one-covers-99k
**Journalist:** Rex Driverton
**Date:** November 13, 2026
**Draft:** drafts/1496-rivian-recall-census-3-one-covers-99k.html
**Hero:** drafts/1496-rivian-recall-census-3-one-covers-99k.jpg

## Hard gates (regex, source of truth)

- **Em dashes:** 0 (max 3) — PASS
- **Banned phrases:** 0 ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "And it's not even close") — PASS
- **"The" sentence starters:** 0 of 79 sentences, 0.0% (max 15%) — PASS
- **CSS class:** `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`/`story.css` — PASS
- **Hero:** real JPEG ff d8, 2736x912, 441,566 bytes (re-encoded copy), hash cf6ef5be — PASS
- **Sentence rhythm script:** variance 846.8 (≥200), short 10.3% (≤15%), long 42.6% (≥15%) — PASS

## The 7 critics

### 1. General Editor — 9.0/10
Lede lands the paradox in the first paragraph (three campaigns, 103,526 vehicles, one of them 98,828). Structure is the series standard and it works: method, big campaign, R2 paradox, recall-of-a-recall, smallest campaign, outside-census pair, action, limitations, counterargument. The pull stat (95.5%) is the article in one number. Deduction: the "What to do" paragraph is a single dense block of four VIN checks; it reads fine aloud but would breathe better as two paragraphs. Not worth a revision round on its own.

### 2. Voice Coach — 9.0/10
Rex's deadpan is present and distinct from Axle's chart-nerd register: "A census counts filings, which are what a regulator sees", "Nobody discovered the defect twice; it was never contained once", "a person caught it, not a sensor". No banned phrases, zero "The" starters, rhythm script passes with wide margins (variance 846.8). Sentence lengths swing from 2-word fragments to 40+ word builds. Deduction: two sentences open with "And" in close proximity ("And here is the part...", "And the delivery vans..."); minor, reads as Rex's cadence rather than a tell.

### 3. Ethics Reviewer — 9.0/10
Limitations are stated plainly and specifically (filing census not danger ranking, populations are upper bounds, R2 slice mixes model years, no per-model denominator). Counterargument is granted at full strength and conceded ("All of that is fair, and this article grants it"). No self-congratulation, no victim-blaming (the EDV advice targets a behavior, sitting on a buckled belt, that the Part 573 itself names as the cause). No kids, no names on public pages issues. Deduction: none material; 9.0 is the ceiling for a census piece with no human subjects.

### 4. Social / Shareability — 8.8/10
Headline is a clean share hook ("3 Times... One of Them Covered 99,000 Vehicles"). Pull stat 95.5% is quotable. The R2 paradox (recalled before a full quarter of sales) and the "recall of a recall" (supplier never quarantined the parts) are both shareable nuggets. Deduction: the og:description repeats the headline's numbers rather than adding a second hook; acceptable, not a revision trigger.

### 5. Legal Accuracy — 9.0/10
Campaign numbers, dates, populations and defect estimates all trace to Part 573 reports and NHTSA acknowledgment letters linked in the references (26V009: 869, ~1%, letters Mar 9; 26V508: 3,829, expansion of 25V387, 17 failures, letters Sep 29; 26V597: 98,828, 100%, OTA on 95%+, letters Nov 9; 25V816: 34,824, PE25011). FMVSS 108/111 citations are correct. The 26V003 toe-link facts (19,641, one minor-injury crash, May 28 PE on 114,922) match this site's own May coverage. One correction was caught pre-panel and fixed: the draft originally claimed "fewest campaigns of any brand" and "nearly every Rivian ever built"; both were wrong (Audi filed 1; 98,828 is ~half of Rivian's cumulative production) and were corrected to "second-fewest" and "99,000 vehicles" / "more than twenty times the other two campaigns combined" (98,828 / 4,698 = 21.0x, verified). Deduction: 9.0, not 9.5, because the pre-panel overstatements show the sensationalist headline instinct needs the same fact-check pass every time.

### 6. Research Rigor — 9.2/10
Original contribution is real: the corrected 3 census from a 25-query API run with MY2025 controls, the 95.5% concentration finding, the R2 paradox (model-year census misses the R2 slice; it enters only via the campaign record), the Myotek quarantine failure, the technician-discovery origin of 26V009, and the eighteen-brand table (total now 172). Methodology is transparent (query counts, 400 semantics, controls, dedup rule). Limitations and counterargument are dedicated paragraphs, not hedges. Verifiability: every number links to a Part 573 PDF, an acknowledgment letter, or an SEC filing. Deduction: the "largest single Rivian recall" framing was trimmed in research to the verified "more than twenty times the other two campaigns combined"; the series still lacks a verified cross-brand largest-single-campaign comparison, so the article wisely does not claim one.

### 7. Data Presentation — 8.7/10
Numbers are presented cleanly in prose: pull stat, per-campaign populations, the 101,045 strictly-2026 subtraction, the 54,465 outside-census total, the 21x ratio. The full census table lives in the research file, consistent with series style (the Volvo article also kept the table in research). Deduction: a reader who wants the campaign table in the article itself has to open the research file; the article's prose carries the same numbers, so this is a style choice, not a defect.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.8 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.2 |
| Data Presentation | 8.7 |
| **Average** | **8.96** |

**All 7 critics ≥ 8.5 and all hard gates pass → SHIP.**

Two pre-panel factual corrections were made and re-verified (headline/overstatement fixes; gates re-run after edits: em 0, banned 0, The 0.0%, rhythm PASS). No revision round needed. Round 0 pass.
