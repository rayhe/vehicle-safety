# Critic Panel — #1468: Six Batteries, Two Fixes, Zero Recalls: The Maverick Hybrid's Dead-Battery Saga
**Slug:** `1468-maverick-hybrid-six-batteries-no-fix`
**Journalist:** Clara Rollover
**Round:** 0
**Date:** November 11, 2026

## Hard gates (mechanical, source of truth)
- **Em dashes (literal `—`):** 0 — PASS (max 3)
- **Banned phrases:** none found — PASS
- **"The" sentence starters:** 0 of 36 sentences, 0.0% — PASS (max 15%)
- **CSS class check:** `class="story"` present; `../style.css` linked; no `story-detail` / `story-content` / `story-page` / `story.css` — PASS
- **Sentence rhythm:** PASS — variance 701.3 (target >=200), short 5.9% (target <=15%), long 58.8% (target >=15%)
- **Hero image:** real JPEG (FF D8), 1920x1280, 551,520 bytes, md5 486d9b5d — PASS
- **Word count:** 893 words (body). Within recent precedent (#1467: 1,372; #1466: 1,123). Not gated.

## Fact verification done in critique
- "Three of those batteries went in after Ford told its dealers a software fix was on the way": verified against the Torque News timeline. SSM 53087 is dated Oct 25, 2024; danadams posted he was on battery three on Oct 28, 2024; batteries four, five, and six came after. Correct.
- "Six weeks late": Q1 2025 ends Mar 31; SSM 53801 is May 16, 2025, about 6.5 weeks later. Correct.
- "Eight months later": May 16, 2025 to SSM 54519 on Jan 26, 2026 is 8 months. Correct.
- "Thirteen months past the first promised date": Mar 31, 2025 to SSM 54785 on Apr 28, 2026 is ~13 months. Correct.
- "One battery every 8 months": 6 batteries over ~4 years = 48/6 = 8.0. Correct.
- "3.3x exclusion ratio": 272,817 / 82,000 = 3.33. Correct arithmetic; both inputs are sourced (25V019 population, DP26007 petition population).
- "Eight dealer messages in twenty-four months": SSMs 53087, 53801, 54519, 54632, 54785, 55215 are six numbered messages; Torque News counts "at least eight dealer messages" across the period, which includes two additional messages (SSM 53801's follow-ups / battery-monitor guidance) the article does not enumerate. The article's "eight dealer messages" follows Torque News, not an independent count. Flagged as a derived-count dependency, not an error: the six numbered SSMs are all individually verified in the research file.

## Scores

### General (clarity, structure, hook) — 8.8
Lede opens on a named owner, a count, and a date, then lands the eight-months-per-battery math in the pull stat. Arc is clean: owner, paper trail, exclusion, warranty trap, counterargument, limitations, action list. The action close is the strongest part of the piece. Deduction: the middle paragraph on the warranty trap packs four distinct facts (coverage windows, the quote, $1,833, DP26007, Nov 3 complaint) into one long paragraph, and the "insult" paragraph's punch depends on the reader holding the 272,817 number against the 82,000 number two paragraphs later.

### Voice (Clara Rollover / site voice) — 8.9
Direct, practical, and angry on the reader's behalf in exactly Clara's register ("And then there is the insult," "kicking the can until the 3 years had passed," "What the record does establish is narrower and still damning"). No banned phrases, no em-dash leakage, zero "The" starters. Deduction: "the scandal framing overstates it" in the counterargument paragraph is slightly more measured than Clara's usual bluntness, and the pull-stat label reads like a data note rather than a Clara line.

### Ethics (victims, fairness, no sensationalism) — 8.8
The owner is quoted from a public forum post with his handle, no private details, and the article explicitly says one owner cannot establish prevalence. Ford is given credit for working the problem in writing and for the free workaround. The counterargument gets a full paragraph at full strength. Deduction: the title's "Zero Recalls" is the sharpest edge, since a skimmer could miss that a Maverick 12-volt battery recall does exist (for gas trucks) and the body has to carry the distinction; the headline is defensible because the hybrid drain itself has no recall, but the title alone lacks the caveat.

### Social (shareability, relevance) — 8.8
"Six batteries" is a memorable hook, the parking-brake tip is immediately usable, and the "check whether SSM 54785/55215 is on your truck" close gives owners a script for the dealer. The 82,000-vehicle petition population makes the audience concrete. Deduction: the SSM-number alphabet soup is the least shareable stretch, and the piece has no second visual stat to pair with the pull stat.

### Legal (accuracy of legal/regulatory claims) — 8.9
Recall 25V019 / Ford 25S02 (272,817, gas powertrain only), defect petition DP26007 (opened Aug 24, 2026, ~82,000), SSM numbers and dates, and the warranty coverage lines are all as reported by Torque News from NHTSA filings. The article correctly states a petition review is not a finding of defect and that no crash, injury, or death is tied to the drain. Deduction: the DP26007 population figure (~82,000) comes via a secondary read of NHTSA's complaints API (mavericktruckmods), not a direct NHTSA document quote, and reference [4] links to the generic nhtsa.gov/recalls page rather than the individual SSM documents.

### Rigor (data accuracy, sourcing, methodology) — 8.8
Every number traces to a cited source: six batteries, eight messages, two root causes, three software updates, 272,817 vs ~82,000, $1,833 at 45,000 miles, 46 mpg, 155,051 Mavericks delivered in 2025. Original calculations verified above (8 months per battery, 13-month fix latency, 3.33x ratio). Limitations stated at full strength, including the unknown SSM status of the owner's truck. Deduction: the "eight dealer messages" count is inherited from Torque News rather than independently enumerated (six numbered SSMs verified; two more messages not individually listed), and the 2026 complaint totals (17 complaints, 10 hybrid) sit in the research file but did not make it into the article.

### Data Presentation (stats, pull stat, references) — 8.8
Pull stat ("1 every 8 months") is the story in four words. Five references, all linked, primary NHTSA material first. Inline superscripts match the reference list. Deduction: the 3.33x exclusion ratio and the 13-month fix latency are computed in the research file but not surfaced as numbers in the article text; a reader doing the math gets them, but the article makes the reader do it.

## Verdict
All 7 critics at 8.5 or above. All hard gates pass. **SHIP.**
