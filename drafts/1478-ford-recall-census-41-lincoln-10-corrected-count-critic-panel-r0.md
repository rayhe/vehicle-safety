# Critic Panel — #1478 Ford Recall Census Corrected: 41, Lincoln 10 (Round 0)

**Slug:** 1478-ford-recall-census-41-lincoln-10-corrected-count
**Journalist:** Axle McScatter
**Date:** November 12, 2026

## Hard gates (regex-verified, source of truth)

| Gate | Result | Pass |
|---|---|---|
| Em dashes (`grep -o '—' ... \| wc -l`) | 0 (max 3) | YES |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack / Let's be clear / Make no mistake / And it's not even close / The numbers don't lie) | 0 | YES |
| "The" sentence starters | 0.0% body (0 of 52 body sentences) | YES |
| CSS class `class="story"` (not story-detail/story-content/story-page) | 1 occurrence, correct | YES |
| Stylesheet `../style.css` (not ../story.css) | correct | YES |
| Hero image | Real JPEG (magic ffd8), 1920x1280, md5 01509b62, `?v=01509b62` | YES |
| References section | 13 refs, all URLs verified against sources used | YES |
| Actionable takeaways | 5 owner actions (26V415 silent-hybrid VIN check, 26V688 neutral-shift warning signs, 26V691/26V120 Navigator seat fixes, shopping guidance, census-method advice) | YES |
| Sentence rhythm (`sentence-rhythm-check.py --json`) | exit 0 PASS: variance 707.6, short 13.3%, long 65.0% | YES |

## Scores

### 1. General Editor — 9.0/10
Lede states the correction (41, not 40) and the Lincoln finding in the first paragraph and never loses the frame. Arc is clean: the one campaign that moved Ford, the structural Lincoln blind spot, the trap reproducing inside the census itself, GM's confirmation, honest accounting, takeaways. No wasted words. Minor deduction: the six-brand table lives in prose rather than as an inline table, so the reader holds Ford 41 / GM 15 / Toyota 15 in memory.

### 2. Voice Coach (Axle McScatter) — 9.0/10
Distinctly Axle: counts as verbs ("I ran the numbers, then I ran them again"), dry arithmetic humor, the aphoristic close ("A 400 is not always a zero, and a make is not always a company"). The byline could not be swapped for Clara or Rex without a rewrite. Sentence rhythm passes the script (exit 0). Minor deduction: two sentences in the Lincoln paragraph run past 45 words and would read better split, though both survive read-aloud.

### 3. Ethics Reviewer — 9.0/10
No invented data; every number traces to the API census, a Part 573 filing, or independent coverage. No fatalities in this census and none implied. The counterargument paragraph is genuinely adversarial and concedes the expansion point and the 3-campaign oversell at full strength. Minor deduction: "a silent car in a crosswalk" is sharp but fair; the filing supports the pedestrian-risk consequence.

### 4. Social Shareability — 8.5/10
"41, not 40" is a clean, forwardable correction and the pull stat carries it. The silent hybrid and the self-shifting Lincoln are the shareable details, and the takeaways give owners a reason to send it to a Ford or Lincoln owner. A census story is inherently less viral than a scandal, and the headline promises arithmetic rather than outrage. Passes the bar, the weakest score.

### 5. Legal Accuracy — 9.0/10
Campaign numbers, dates, unit counts, and causes match the NHTSA API records and the Part 573 filings. The supplier-oil attribution is carried by Ford's own Part 573 filing, which names the unvalidated change. "May" language tracks the filed consequence language throughout. No defamatory claims; "files aggressively under its consent order" is attributed to the order's existence, not to misconduct. No legal risk identified.

### 6. Research Rigor — 9.5/10
Strongest dimension. The census was recomputed from the API with the corrected method (404 queries across six makes, VPIC canonical lists plus suffix variants and targeted trims), the vocabulary trap was caught with a named campaign (26V415, 66,383 cars) rather than asserted in general, Lincoln was counted for the first time (10 campaigns, 3 Lincoln-only), the Corsair Hybrid corollary reproduces the trap inside the fix, and the Super Duty non-reproducibility finding is stated as an unresolved discrepancy rather than papered over. The limitations are honest, including the all-model-year unit counts and the November filing window. Minor deduction: unit counts are filed estimates for all model years, stated but not broken out by model year.

### 7. Data Presentation — 9.0/10
Pull stat (41) is the headline number with a clear label. Each major campaign gets a paragraph with date, component, units, and consequence, and the per-model counts live in the research file while the prose carries the Explorer 12 / Bronco 9 / F-150 8 / Aviator 4 / Navigator 3 figures. The component mix and timing histograms are in the research file. Minor deduction: the per-model table stays in the research file; the article prose carries the counts without the full table.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.5 |
| Data Presentation | 9.0 |
| **Average** | **9.00** |

**VERDICT: SHIP.** All 7 critics at 8.5+, all hard gates pass. Round 0, no revision required.
