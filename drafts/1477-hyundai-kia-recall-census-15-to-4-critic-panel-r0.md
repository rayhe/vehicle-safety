# Critic Panel — #1477 Hyundai/Kia Recall Census: 15 to 4 (Round 0)

**Slug:** 1477-hyundai-kia-recall-census-15-to-4
**Journalist:** Clara Rollover
**Date:** November 12, 2026

## Hard gates (regex-verified, source of truth)

| Gate | Result | Pass |
|---|---|---|
| Em dashes (`grep -o '—' ... \| wc -l`) | 0 (max 3) | YES |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack / Let's be clear / Make no mistake / And it's not even close / The numbers don't lie) | 0 | YES |
| "The" sentence starters | 0.0% body (0 of 41 body sentences); 1.4% whole-file (1 of 69, inside a reference title) | YES |
| CSS class `class="story"` (not story-detail/story-content/story-page) | 1 occurrence, correct | YES |
| Stylesheet `../style.css` (not ../story.css) | correct | YES |
| Hero image | Real JPEG (magic ffd8), 1920x1280, md5 01f0c8c7, `?v=01f0c8c7` | YES |
| References section | 13 refs, all URLs verified against sources used | YES |
| Actionable takeaways | 5 owner actions (Palisade seat fix, Elantra Hybrid HPCU, cluster blanking, Venue/Elantra lug-nut VIN check, VIN check) | YES |
| Sentence rhythm (`sentence-rhythm-check.py --json`) | exit 0 PASS: variance 2068, short 10.9%, long 56.5% (body-only: var 188, short 2.4%, long 51.2%) | YES |

## Scores

### 1. General Editor — 9.0/10
Lede states the 15-to-4 gap in the first paragraph and never loses the frame. Arc is clean: shared defect proves the parts bin, method trap explains the count, Palisade supplies the stakes, loose nuts supply the coda, counterargument and takeaways close it. No wasted words. Minor deduction: the six-brand table lives in prose inside the counterargument paragraph rather than as an inline table, so the reader holds Ford 40 / GM 15 / Toyota 15 in memory.

### 2. Voice Coach (Clara Rollover) — 9.0/10
Distinctly Clara: direct, practical, angry on behalf of the buyer ("Before you sign that lease, look at the badge twice", "do not guess your speed", "a loose wheel is a large problem"). The byline could not be swapped for Mia or Rex without a rewrite. Sentence rhythm passes the script (exit 0). Minor deduction: two sentences run past 45 words and would read better split, though both survive read-aloud.

### 3. Ethics Reviewer — 9.0/10
No invented data; every number traces to the API census, a Part 573 report, or independent coverage. The Palisade child fatality is stated factually, once, with the date and place, and never milked. The counterargument paragraph is genuinely adversarial and concedes the micro-recall point at full strength. Minor deduction: "A fix that took a child's death to ship" is sharp but fair; the timeline (death Mar 7, fix finalized Apr 8) supports it.

### 4. Social Shareability — 8.5/10
"15 to 4" is a clean, forwardable headline and the pull stat carries it. The takeaways give readers a reason to send it to a Hyundai or Kia owner. A census story is inherently less viral than a scandal, and the headline promises arithmetic rather than outrage. Passes the bar, the weakest score.

### 5. Legal Accuracy — 9.0/10
Campaign numbers, dates, unit counts, and causes match the NHTSA API records and the Part 573 filings. The Samjin Nut attribution is carried by Autoblog's reporting on the filings, which names the supplier and plant. No defamatory claims; "may loosen until the wheel detaches" tracks the filed consequence language. No legal risk identified.

### 6. Research Rigor — 9.5/10
Strongest dimension. The census was recomputed from the API with the corrected method (25 VPIC canonical models plus Hybrid/PHEV/Electric variants, 100 queries), the vocabulary trap was caught with a named campaign (26V308, 54,337 cars, fire risk) rather than asserted in general, the three shared-defect pairs were identified and deduplicated (19 campaigns, 16 distinct defects), and the limitations are honest, including the Genesis exclusion, the three excluded 2025 filings, and the Ford/GM base-name caveat inherited from #1473/#1474. Minor deduction: unit counts are filed estimates for all model years, stated but not broken out by model year.

### 7. Data Presentation — 9.0/10
Pull stat (15 to 4) is the headline number with a clear label. Each major campaign gets a paragraph with date, component, units, and consequence, and the per-model counts live in the research file. The shared-defect analysis (cluster pair, loose-nut pair, Palisade/Ioniq 9 seats) is the article's best data work. Minor deduction: the per-model table stays in the research file; the article prose carries the Tucson 4-5 and Palisade 3 counts without the full table.

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
