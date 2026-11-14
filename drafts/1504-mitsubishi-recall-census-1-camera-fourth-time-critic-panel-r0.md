# Critic Panel — #1504 Mitsubishi Recall Census (round 0)

**Article:** 1504-mitsubishi-recall-census-1-camera-fourth-time
**Journalist:** Axle McScatter
**Date:** November 14, 2026

## Hard gates (regex/script = source of truth)

| Gate | Result | Status |
|---|---|---|
| Em dashes (literal, whole file) | 0 (max 3) | PASS |
| Banned phrases | 0 | PASS |
| "The" sentence starters | 0 of 48 (0.0%, max 15%) | PASS |
| CSS class `story`, link `../style.css` | 1 / 0 wrong classes / 0 story.css | PASS |
| Sentence rhythm | variance 1234.8 (>=200), short 10.9% (<=15%), long 58.7% (>=15%) | PASS |
| Hero image | images/1504-....jpg, real JPEG ff d8, 1920x1280, ?v=ecabff36 | PASS |

## Critic scores

### 1. General Editor — 9.0/10
Tight lede, tables carry the argument, and the series-completion hook (last major brand censused) gives the piece news value beyond the 1-count. The "seven times over" closer lands because the math is shown. Deduction: the pull stat "4" is the weakest pull number in the series; the headline does the heavy lifting instead.

### 2. Voice Coach — 8.9/10
Axle's voice is distinct: numbers-first, "I run the numbers and then I run them again," tables as argument. Rhythm check passes with wide variance. Fragments ("Three." "Four queries.") are deliberate and sparse. Minor: "But here is the number that changes the story" flirts with the banned "Here's the thing" family without being in it; tolerated because the sentence immediately delivers a number, which is the Axle tell.

### 3. Ethics Reviewer — 9.0/10
Counterargument stated at full strength in its own paragraph, limitations honest, no victim-blaming, no self-congratulation. Actionable takeaways are specific per model year and per campaign. Nothing to redact.

### 4. Social/Shareability — 8.7/10
Headline is highly shareable ("same backup camera, for the fourth time"). The four-filing thread table is screenshot-worthy. Deduction: pull stat "4" alone is cryptic out of context; the pull-label rescues it but the number does not travel on its own.

### 5. Legal Accuracy — 9.2/10
FMVSS 111 cited correctly throughout. Campaign numbers, dates, and populations verified against the NHTSA API (26V549) and the Part 573 read directly (25V369). The 26V549 per-model split, build dates, and Bosch supplier are attributed to a secondary reading of the Part 573 and disclosed as such in the research file and references. No invented URLs; every link is a page confirmed to exist.

### 6. Research Rigor — 9.1/10
Original contribution is real and computed, not quoted: the 1-count, the per-model table, 25.2% counted share, the 2.96x excluded-to-counted ratio, the 322,166 no-double-count thread total, and the completed 24-brand series table (208 brand-level campaigns). Limitations are explicit, including the double-counting trap in the 412,073 sum, which the article states and corrects. Method is transparent (VPIC list, 4 queries, 400-means-empty).

### 7. Data Presentation — 9.3/10
Four tables, each captioned, each earning its place: the counted campaign, the excluded filing, the four-filing thread, the completed series table. Every number in the prose reconciles with a table: 67,146 + 198,940 = 266,086; 56,080 + 198,940 + 67,146 = 322,166; 322,166 / 42,189 = 7.6x; series sum = 208.

## Verdict

**Average: 9.03/10. All 7 critics at 8.5+, all hard gates pass. → SHIP.**
