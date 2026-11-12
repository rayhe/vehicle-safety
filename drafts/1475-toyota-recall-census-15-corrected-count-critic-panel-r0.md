# Critic Panel — Round 0 — #1475 Toyota recall census corrected (Axle McScatter)

**Draft:** drafts/1475-toyota-recall-census-15-corrected-count.html
**Hero:** drafts/1475-toyota-recall-census-15-corrected-count.jpg (JPEG 1920x1280, ?v=90a12583)
**Date:** November 11, 2026

## Hard gates (regex = source of truth)

| Gate | Result | Pass |
|---|---|---|
| Em dashes (literal) | 0 (max 3) | YES |
| Banned phrases | 0 | YES |
| "The" sentence starters | 0.0% (max 15%) | YES |
| CSS class / stylesheet | `class="story"`, `../style.css` | YES |
| Sentence rhythm | variance 925.9 (>= 200), short 14.0% (<= 15%), long 67.4% (>= 15%) | PASS |
| Hero | real JPEG 1920x1280 | YES |
| Word count (body) | 892 (guide 300-500; census trilogy runs long, same as #1473/#1474) | NOTE |

## Critics

### 1. General Editor — 9.0/10
Structure is clean: self-correction lede, pull stat, mechanism paragraph, loss-of-power trio, hardware pair, counterargument, action close. The opening three-sentence run ("I ran the numbers. Then I ran them again. They didn't get better, for us.") is the best lede of the trilogy. Weakness: 892 words is long for the format, and the mechanism paragraph is the densest block in the piece; a reader skimming for the count has to work for it. Not a fail.

### 2. Voice Coach — 9.2/10
Unmistakably Axle: numbers-obsessed, self-correcting, allergic to adjectives that do not carry data. Banned phrases 0, "The" starters 0.0%, rhythm PASS after a one-sentence merge (short 15.9% -> 14.0%). The "spelled the car wrong" closer is the voice at its best. No AI tells detected: sentence lengths swing from fragments to 40+ word builds. Minor: "Here is the bug" opens a paragraph flatly; the sentence after it rescues it.

### 3. Ethics Reviewer — 9.0/10
The correction is handled the right way: the error is owned in the first paragraph, the mechanism is named, and Toyota is explicitly cleared of hiding anything ("the bug is ours, not Toyota's"). No victim-blaming, no sensationalizing of the fuel leak beyond what the filing supports (cause unnamed, no injuries or fires stated). The Land Cruiser guidance (call the dealer now if you smell fuel) is responsible and specific.

### 4. Social / Shareability — 8.8/10
"We undercounted" is a strong share hook: publications rarely lead with their own error, and the correction carries a second story inside it (the API vocabulary trap). Pull stat 15 is clean and quotable. The "spelled the car wrong" line is the pull quote. Slightly under 9 because the headline promises a correction and the body delivers a census; the correction framing could be punchier in social preview, but the description meta covers it.

### 5. Legal Accuracy — 9.0/10
Every campaign number was verified against the NHTSA recalls API this run; all 15 summaries, dates, components, and remedies match the API records. FMVSS numbers (101/108/110/114/126/208) match the API summaries. Unit counts are the manufacturers' filed estimates and are attributed (RCAK for 105,794; Part 573 for 11,495; RoadEthos for ~31,000; MotorSafety for 8,521). "23 field reports and 64 US warranty claims" is attributed to Eastward Drive's reading of the filing. No invented citations; all 11 references resolve to real pages.

### 6. Research Rigor — 9.3/10
Original contribution is real and twofold: the corrected 15-campaign census and the vocabulary-gap diagnosis (base-name 400s vs hybrid/PHEV suffixes, stale model list missing three 2026 debuts). Methodology is transparent enough to reproduce: VPIC canonical list, 13 suffix variants, dedupe rule, date filter. Limitations are stated, including the owed Ford/GM re-run with corrected vocabulary and the residual risk of untested spellings. Counterargument is at full strength (labels = 4 of 15, ex-labels 11; three loss-of-power campaigns are three different bugs, not one root cause; Toyota's reporting looks diligent). Strongest piece of rigor in the trilogy.

### 7. Data Presentation — 8.7/10
Counts are presented clearly in prose: 15 vs 7, 5.7x collapsing to 2.7x, per-model counts (Grand Highlander 3, three models at 2), component mix (labels 4, control-unit faults 3), monthly timing. The full census table lives in the research file; the article itself carries no table, which costs it against a piece whose entire point is a recount. A small in-article table of the 15 campaigns would have made it 9+. Acceptable as-is: the prose counts are complete and checkable.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.2 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.8 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.3 |
| Data Presentation | 8.7 |
| **Average** | **9.00** |

**VERDICT: SHIP.** All 7 critics >= 8.5, all hard gates pass, round 0. No revision round needed. Note for the queue entry: Ford/GM re-run with corrected vocabulary is owed (stated in article + research limitations); the 15-count for Toyota supersedes the 7 published in #1473 and the 5 in #815.
