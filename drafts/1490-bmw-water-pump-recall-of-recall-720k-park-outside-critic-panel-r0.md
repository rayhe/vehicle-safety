# Critic Panel — Round 0 — #1490 BMW Water-Pump Recall-of-Recall (Vin Wreckage)

**Article:** drafts/1490-bmw-water-pump-recall-of-recall-720k-park-outside.html
**Hero:** drafts/1490-bmw-water-pump-recall-of-recall-720k-park-outside.jpg (real JPEG 1920x1280, hash a91c0d75)
**Date:** November 13, 2026

## Hard gates (regex = source of truth)

| Gate | Result | Status |
|---|---|---|
| Em dashes (`grep -o '—' ... \| wc -l`) | 0 | PASS (max 3) |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack / Let's be clear / Make no mistake) | 0 | PASS |
| "The" sentence starters | 1 of 53 (1.9%) | PASS (max 15%) |
| CSS class `class="story"`, link `../style.css` | yes / yes | PASS |
| Sentence rhythm script | variance 658.6 (≥200), short 8.3% (≤15%), long 58.3% (≥15%) | PASS |
| Hero image | real JPEG 1920x1280, ?v=a91c0d75 | PASS |
| Word count (story-body) | 1,203 | n/a (within recent-article range; #1489 was 2,013) |

**Factual correction found in pre-panel verification:** the draft says "a park-outside order on three-quarters of a million cars." 720,796 is 0.72 million, not 0.75 million. Corrected to "on more than 720,000 cars" before scoring. All other arithmetic re-verified by hand: 236,702 + 163,728 + 110,102 = 510,532 (the three nameplates, not stated as a sum in the article); 1% of 720,796 = 7,208 ("about 7,200"); Aug 14, 2024 to Nov 4, 2026 = 812 days (730 + 82); Mar 28, 2025 to Nov 4, 2026 = 19 months and 7 days ("barely 19 months"). Defect wording in both filings is identical per the NHTSA API records, quoted verbatim.

## 1. General Editor — 8.5/10

Lede lands the whole story in one paragraph: 720,796 cars, a 2024 fix, a 2026 re-recall, and a parking instruction where the remedy used to be. Structure is the site standard (lede, pull stat, the two filings, the remedy downgrade, the 1% math, the timeline, buyer guidance, counterargument, limitations) and it holds without sagging. Deduction: the "What to do" paragraph packs five owner scenarios into one long block, and the closing lands on the limitations paragraph rather than a line that travels. The headline and the pull stat do the heavy lifting, so this is not blocking.

## 2. Voice Coach — 9.0/10

Vin is audible and distinct from Clara and Rex: the catchphrase opener ("Fun fact that will ruin your morning commute"), the cosmic-absurdity framing ("the shield did not shield"), and the one-line punches ("Just a driveway." "You are back at the start."). No banned phrases, no AI tells, rhythm gate passes cleanly with variance 658.6. Deduction: the remedy paragraph contains one sentence that runs past 70 words, and "which is either admirable consistency or a confession" is a slightly labored construction. Both are Vin-shaped excesses rather than failures.

## 3. Ethics Reviewer — 9.0/10

Fair to BMW throughout. The counterargument is stated at full strength and conceded as real before the rebuttal, and the zero-accident, zero-injury record is stated plainly rather than buried. No invented victims, no moralizing about luxury buyers, no implication of a cover-up where the filing implies a process failure. The headline is sensationalist in the house style but every word of it is true after the three-quarters correction. The park-outside order is presented as BMW's own honest instruction, not as an indictment.

## 4. Social / Shareability — 8.5/10

Headline is the share: "The First Fix Didn't Fix It." Pull stat (720,796) with the 1-percent label is the second share. Best pull quotes: "The shield did not shield" and "You did everything right. You are back at the start." Deduction: no single-sentence kicker at the end; the article closes on the limitations paragraph, which is honest but does not travel. The headline carries the share on its own, so this is not blocking.

## 5. Legal Accuracy — 8.5/10

All campaign numbers, dates, populations, and defect descriptions verified against the NHTSA recalls API records for 26V733000 and 24V608000, queried directly Nov 13, 2026: filing dates Nov 4, 2026 and Aug 14, 2024; parkOutSide true vs false; the remedy texts quoted verbatim; the "replaces 24V608" language. Reuters confirms the Nov 13 announcement. Deduction: per-model counts, supplier name, field-instance count, and the Dec 25, 2026 letter/VIN dates rely on automotor.news's reading of the Part 573 report rather than the API record directly, and the article discloses exactly that in its limitations. The three-quarters imprecision was caught pre-panel and corrected.

## 6. Research Rigor — 9.0/10

Original contribution is real and documented: the side-by-side of the two NHTSA filings with identical defect wording; the 1% math (about 7,200 live-risk cars inside a 720,796-car recall); the 812-day timeline and the 19-month "fixed" interval; the remedy-downgrade framing (concrete repair to parking instruction); the park-outside-in-the-rain irony. Limitations are explicit and honest, including the 1% figure being a 2024 extrapolation, the undisclosed post-repair failure count, and the automotor.news sourcing. Counterargument is full-strength and conceded as "real" before rebuttal. Methodology is transparent (API queries named, dates given). Deduction: no NHTSA complaint-count data was collected; the "about 10 field instances" figure substitutes adequately.

## 7. Data Presentation — 8.5/10

Pull stat carries the two numbers that matter (720,796 cars; about 1 percent defective). Per-model counts are in prose rather than a table, which costs a little scannability, but the three-number list reads cleanly and the 510,532 subtotal is correctly not claimed. The 812-day and 19-month timeline figures are the best single data moments in the piece. All 5 references are linked, with the two NHTSA API records cited by campaign number. Deduction: the model-year list in the lede paragraph is a long enumeration; a compact table would scan better, but the story is a three-number story and does not need one.

## Verdict

**Average: 8.71/10 (8.5, 9.0, 9.0, 8.5, 8.5, 9.0, 8.5). All 7 critics at 8.5+, all hard gates pass. SHIP.**
