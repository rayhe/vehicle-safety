# Critic Panel — Round 0 — Article #1032

**Journalist:** Axle McScatter | **Kicker:** By The Numbers | **Slug:** 1032-jeep-parked-fire-probe-closed-108m
**Title:** NHTSA Spent Two Years Investigating Jeeps That Catch Fire While Parked. Yesterday It Closed the File.

## Hard Gates (verified, not opinion)

| Gate | Result |
|---|---|
| Em dashes (regex count) | **0** — PASS (max 3) |
| Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack") | **0 hits** — PASS |
| "The" sentence starters | **1.9%** (1/52) — PASS (max 15%) |
| CSS: `class="story"` / `../style.css` | PASS — no story.css, no story-detail/content/page |
| Sentence rhythm | **PASS** — variance 564.4 (≥200), short 11.9% (≤15%), long 38.1% (≥15%) |
| Actionable insights | PASS — VIN check for 26V363000/FCA 21D, park outside until remedied, used-buyer VIN screen, free dealer remedy |
| References block | PASS — 5 refs, all URLs verbatim from tool output (Reuters Sep 29 via lapost.com, NHTSA 26V363000, FCA Part 573 mirror, Reuters Jun 9 via srnnews.com, FCA statement mirror) |
| Hero image | PASS — real JPEG 1920x1280 (FFD8 verified), `?v=d8d8cc21` on img + og:image |

## Scores

### 1. General Editor — 9.0
Lede opens on the news (Sep 29 closure) with the key stat bolded. Structure is template-faithful: pull stats land where eyes land, the 2019 anomaly gets its own paragraph, limitations are a dedicated block. "Yesterday" in the headline will age, but the September 30, 2026 dateline anchors it, and the pipeline used the same pattern for #1012. No throat-clearing; the second paragraph is four words.

### 2. Voice Coach — 9.0
Unmistakably Axle McScatter: "I ran the numbers. Then I ran them again. They didn't get better." / "Subtract the two and you get 295,499 vehicles, a 37.8 percent expansion" / "The other side of this spreadsheet deserves equal time." The catchphrase opener is his. Could not be swapped with Rex, Mia, Dale, Vin, or Clara. Zero banned phrases (regex-verified), rhythm gate passes with variance 564.

### 3. Ethics Reviewer — 9.0
The counterargument runs at full strength, not as a fig leaf: 0.005%, "microscopic", closure as routine process, Stellantis's voluntary expansion, fast response. The single injury is stated, not exploited. The park-outside terror is justified by the defect's physics (fires with ignition off), not inflated.

### 4. Social/Shareability — 8.5
Timely hook (announced yesterday), two quotable pull stats (51 fires, +37.8%), a concrete action (check your VIN). "Your parked Jeep can catch fire" is shareable without being misleading. Not viral-gold, but solid.

### 5. Legal Accuracy — 8.5
Round-0 review caught two errors and fixed them before scoring: (a) "there is no law stopping a private seller" was too sweeping — federal law (49 USC 30120(i)) only bars new-vehicle dealers; revised to "no federal law stops a private seller from selling you a used Jeep with an open recall." (b) Timeline inversion — the defect determination (May 28) preceded the NHTSA notice (June 4); revised to "The defect determination came on May 28; the public recall followed twelve days later." All remaining claims are attributed to Reuters, NHTSA, or FCA's own filing.

### 6. Research Rigor — 9.0
Three original calculations not present in any cited source: (1) probe-to-recall growth 781,500 → 1,076,999 = +295,499 (+37.8%), vehicles the probe never examined; (2) fire rate ~4.7 per 100,000 vehicles; (3) the July 13, 2019 first-report anomaly vs the June 24, 2020 build start, presented as a question, not a finding. Limitations are explicit (no FARS link, 51 vs 72 vs 35 denominators labeled, no published remedy completion rate, ODI closing resume not independently read). Methodology (inputs, arithmetic, caveats) is visible in the prose.

### 7. Data Presentation — 9.0
Every number carries its denominator. The discrepancy between the three incident counts (51 fires / 72 field reports / 35 confirmed at interface) is disclosed rather than smoothed over. Pull stats match the article's two original calculations. Units (vehicles, percent, per-100,000) are consistent.

## Verdict

**SHIP.** Average **8.86**, all 7 critics ≥ 8.5, all hard gates pass on round 0. Two factual errors caught and fixed in-round (legal qualifier, timeline direction); no remaining defects.

**Blocked:** 1/day consumed by #759 (published 2026-09-30, QA-verified). Queued as SHIP_BLOCKED, ship_date 2027-05-08.
