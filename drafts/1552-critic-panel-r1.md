# Critic Panel — #1552: Toyota Killed the Avalon. The Data Says It Was the Safer Toyota.

**Slug:** `1552-avalon-safer-toyota-killed-anyway`
**Journalist:** Clara Rollover
**Round:** 1 (re-score after round-0 revision)
**Date:** November 21, 2026

## Round-0 fix applied
Added ref-9 (MotorTrend, 2022 Toyota Avalon: NHTSA overall 5 stars, 4 frontal / 5 side / 4 rollover; IIHS Good in all crash tests) and cited it on the "five-star NHTSA overall rating" claim in the lab paragraph. No other prose changed.

## Hard Gates (re-verified post-fix; regex = source of truth)

| Gate | Result | Verdict |
|---|---|---|
| Em dashes (literal `—` in whole file) | 0 | PASS (max 3) |
| Em-dash entities (`&mdash;`) | 2 total: `<title>` separator and site footer. Zero in prose sentences. | PASS |
| Banned phrases | 0 | PASS |
| "The" sentence starters | 2 of 41 body sentences, 4.9% (max 15%) | PASS |
| CSS class | `class="story"`, links `../style.css`, no `story.css` | PASS |
| Sentence rhythm (`sentence-rhythm-check.py --json`) | variance 1174.6 (≥200), short 6.7% (≤15%), long 60.0% (≥15%) | PASS |
| Hero | Real JPEG 1920x1280, hash 7d8320ac, `?v=7d8320ac` on img + og:image + twitter:image | PASS |
| Word count | 971 body words incl. table | NOTE (see General, r0) |

## Scores

### 1. General — 8.7/10
Unchanged from round 0. Lede, pull stat, table, weight/lab, model-year trend, fairness check, action. The table earns its space. Length noted, in line with #1551 precedent.

### 2. Voice — 8.6/10
Unchanged from round 0. Distinctly Clara, rhythm green, no banned phrases. Two "which is" constructions and one "Put plainly" signpost remain; at the bar.

### 3. Ethics — 8.8/10
Unchanged from round 0. No victims exploited, impairment finding used against the easy explanation, fairness check full-strength, guidance proportionate.

### 4. Social Shareability — 8.6/10
Unchanged from round 0. Headline is the share; "Sober drivers, faster death rate; drunker drivers, slower death rate" travels.

### 5. Legal Accuracy — 8.8/10
Round-0 defect fixed and verified: ref-9 is listed and cited, the NHTSA 5-star overall rating (4 frontal / 5 side / 4 rollover) now traces to MotorTrend's 2022 Avalon page, URL verbatim from search results. FARS figures cross-checked (Avalon/Camry 0.655, lethality 0.684 vs 0.593, impairment rankings verified against toxicology data). IIHS award, TSP list, Toyota discontinued page, TrueDelta weights, TopSpeed/J.D. Power prices all linked. No invented URLs.

### 6. Research Rigor — 8.7/10
Unchanged from round 0. Four original contributions, explicit limitations, full-strength counterargument, methodology shown. The verifiability gap is closed; not double-counted.

### 7. Data Presentation — 8.7/10
Unchanged from round 0. Table clean and sorted, pull stat contextualized, exposure-year math shown with assumptions. Table header "Rate" unit remains cosmetic-only; the lede defines it.

## Verdict: SHIP
All 7 critics at 8.5+ (avg 8.70). All hard gates pass. Round 0: 6/7 pass, Legal 8.4 on the missing NHTSA citation. Round 1: defect fixed, Legal 8.8. Proceed to SHIP phase: ship_date 2028-10-12 (1 day after #1551's 2028-10-11).
