# Critic Panel — #1497 Genesis recall census — Round 0

**Slug:** 1497-genesis-recall-census-3-zero-standalone-defects
**Journalist:** Mia Crumplezone
**Date:** November 13, 2026
**Draft:** drafts/1497-genesis-recall-census-3-zero-standalone-defects.html
**Hero:** drafts/1497-genesis-recall-census-3-zero-standalone-defects.jpg

## Hard gates (regex, source of truth)

- **Em dashes:** 0 (max 3) — PASS
- **Banned phrases:** 0 ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "And it's not even close") — PASS
- **"The" sentence starters:** 1 of 92 sentences, 1.1% (max 15%) — PASS
- **CSS class:** `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`/`story.css` — PASS
- **Hero:** real JPEG ff d8, 1920x1280, 372,033 bytes, hash 697f090b — PASS
- **Sentence rhythm script:** variance 753.7 (≥200), short 13.6% (≤15%), long 39.5% (≥15%) — PASS

## The 7 critics

### 1. General Editor — 9.0/10
Lede lands the thesis in the first paragraph (three campaigns, 184,347 Genesis vehicles, every one a group recall) and the campaign-total vs. Genesis-only split is the article's spine. Structure is the series standard and it works: method, three campaigns in chronological order, clean sheet, action, limitations, counterargument. The pull stat (0 standalone defects) is the article in one character. Deduction: the "What to do" paragraph is a single dense block of five VIN checks; it reads fine aloud but would breathe better as two paragraphs. Same note as #1496, same verdict: not worth a revision round on its own.

### 2. Voice Coach — 9.0/10
Mia's register is present and distinct from Rex's deadpan and Axle's chart-nerd: "a fastener story wearing a fuel story's clothes", "a safety device that works fine until someone services it, because the service procedure and the part were designed without each other in mind", "Two brands, one torque wrench, 235,792 vehicles". She gets genuinely excited about the engineering detail (HD-radio memory storage, snap-on anchor mechanics, torque stabilizer) and slightly judgmental about the design failures, which is exactly her beat. No banned phrases, one "The" starter in 92 sentences, rhythm script passes with wide margins (variance 753.7). Deduction: "Here is the part that makes..." and "Now the clean sheet" are both throat-clearing transitions in the same article; minor, reads as Mia's cadence rather than a tell.

### 3. Ethics Reviewer — 9.0/10
Limitations are stated plainly and specifically (filing census not danger ranking, populations are upper bounds, 26V218's 288,418 Hyundais ride along in the campaign total, model-level sales come from a compiler not the manufacturer). Counterargument is granted at full strength and conceded ("All of that is fair, and this article grants it"). No self-congratulation, no victim-blaming (the fuel-odor advice targets a symptom owners reported, and the Part 573 itself names the cause). No kids, no names on public pages issues. Deduction: none material; 9.0 is the ceiling for a census piece with no human subjects.

### 4. Social / Shareability — 8.8/10
Headline is a clean share hook ("3 Times... Not Once for Something Only Genesis Did"). Pull stat 0 is quotable in a way 95.5% was not: a single digit that is also an accusation. "Two brands, one torque wrench, 235,792 vehicles" and "the car everybody buys is untouched" are both shareable nuggets. Deduction: the og:description repeats the headline's numbers rather than adding a second hook; acceptable, not a revision trigger.

### 5. Legal Accuracy — 9.0/10
Campaign numbers, dates, populations and defect estimates all trace to Part 573 reports and NHTSA acknowledgment letters linked in the references (26V019: 83,877, GV80 47,853 + GV70 29,649 + 6,375, 237 reports, letters Feb 17; 26V218: 294,128, G90 slice 5,710, 6 reports, redesigned anchor by Mar 2026, letters Jun 5; 26V229: 94,760, 129 reports, letters scheduled Jun 8; 26V232: 141,032 Carnivals). FMVSS 101 citation is correct. Sales figures trace to Hyundai Motor America via The Investor and CarBuzz. Five corrections were caught pre-panel and fixed: "84 standalone stores" softened to the sourced "roughly 84 standalone retail facilities"; the "built before the fix and sold after it" inference cut (GV70 production dates run past the Nov 26, 2025 fix date); "same HD-radio defect" for the Kia/Hyundai parallels softened to the sourced "identical failure"; non-car VPIC names corrected from five to seven; G90 triple-lookup corrected from 2023–2026 to 2023–2025 (26V229 covers G90 only through 2025). Deduction: 9.0, not 9.5, because the pre-panel overstatements show the sensationalist headline instinct needs the same fact-check pass every time.

### 6. Research Rigor — 9.2/10
Original contribution is real: the corrected 3 census from a 73-query API run with MY2025 controls, the zero-standalone-defects thesis with all three shared-defect lineages traced (26V019/26V046/26V047 cluster trio, 26V218 four-nameplate anchor campaign, 26V229/26V232 fuel-pipe twins), the Genesis-only vs. campaign-total population split (184,347 vs. 472,765), the G70 clean-sheet finding (zero campaigns, best-selling sedan, 10,245 Jan–Oct, +17.8%), and the nineteen-brand table (total now 175) with the cross-check that Hyundai 15 + Kia 4 + Genesis 3 = 22 matches the NHTSA data-portal count of Hyundai Motor America filings. Methodology is transparent (query counts, 400 semantics, controls, dedup rule). Limitations and counterargument are dedicated paragraphs, not hedges. Verifiability: every number links to a Part 573 PDF, a Reuters/Consumer Reports/Autoblog/USA Today story, or a manufacturer sales release. Deduction: the Hyundai Motor Group cumulative (22 recalls, 1,924,151 units) comes from a Korean press compilation of the data portal rather than a direct portal query, so the article correctly labels it a cross-check; the series still lacks a verified cross-brand largest-single-campaign comparison, so the article wisely does not claim one.

### 7. Data Presentation — 8.7/10
Numbers are presented cleanly in prose: pull stat, per-campaign populations with Genesis slices, the 288,418-vehicle gap between campaign-total and Genesis-only, the 2.24x annual-sales comparison, the per-model split of 26V019 (47,853 + 29,649 + 6,375 = 83,877, arithmetic verified). The full census table lives in the research file, consistent with series style (the Rivian article also kept the table in research). Deduction: a reader who wants the campaign table in the article itself has to open the research file; the article's prose carries the same numbers, so this is a style choice, not a defect.

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

Five pre-panel factual corrections were made and re-verified (store count, production-fix inference, HD-radio attribution, VPIC non-car count, G90 model years; gates re-run after edits: em 0, banned 0, The 1.1%, rhythm PASS). No revision round needed. Round 0 pass.
