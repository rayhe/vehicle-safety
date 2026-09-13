# Critique — 896-school-bus-stop-arm-violations — Round 0

## Hard Gates (auto-fail, regex is truth)
- Em dashes: 0 (max 3) — PASS (`grep -o '—' | wc -l` = 0; title/og use `&mdash;` entities)
- Banned phrases: 0 — PASS (none of "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack")
- The starters: 13.3% (max 15%) — PASS (6/45; one pre-score revision: "The data says..." → "Ask the data and it answers plainly...")
- CSS class: `class="story"` present, `../style.css` present, no `story-detail`/`story-content`/`story-page`, no `../story.css` — PASS
- Structure: story-kicker, byline, dateline, pull-stat, pull-label, story-references, story-disclaimer, site-footer, theme script, Inter fonts — PASS
- Sentence rhythm: variance 438.4 (>=200), short_pct 13.5% (<=15%), long_pct 35.1% (>=15%) — PASS
- JPEG hero: drafts/896-school-bus-stop-arm-violations.jpg, header FF D8, 1920x1280, 421,094 bytes, sha256 a8ed3fef — PASS

## 7 Critics

### 1. General Editor — 9.0/10
Kicker → headline → lede with bolded stat → pull stat → six body paragraphs → references → disclaimer. Opens mid-thought on the seven-second video, no throat-clearing. Clara's practical anger is consistent throughout ("The coverage is the disgrace"). ~640 words, in line with recent Crash Report pieces. Would share.

### 2. Voice Coach — 9.0/10
No banned openers, zero em dashes, rhythm PASS with genuine variety (4-word punches like "He is one data point." against 40+ word builds). Distinctly Clara: consumer-advocate directness, parental second-person address, no noir detective or data-nerd bleed. No AI tells ("in conclusion", "it's important to note", "delve"). One pre-score revision merged a "The" starter without dulling the close.

### 3. Ethics Reviewer — 9.0/10
Does not exploit the child: no name, no graphic detail, the flinch described once and only to establish stakes. Moral weight lands on enforcement, not gore. Surveillance/privacy counterpoint given real space (Flock ALPR controversy, owner-billed civil tickets). No self-congratulation, no preachy close; ends on action.

### 4. Social/Shareability — 9.0/10
Headline pairs a visceral near-miss with a 27,000-count gut punch; both halves fit a post. Pull stat is a single stark number. Back-to-school timing is peak parental attention. The "every eight minutes of the school day" line is the quote-tweet. Strong share triggers for parent groups and local news.

### 5. Legal Accuracy — 9.0/10
Kentucky KRS 158.486/158.487 described correctly as civil penalties with officer review and no points, attributed to the law-firm summary. Florida penalty tiers ($225 camera civil; $200+4pts officer; $400 door-side; suspension on second conviction) attributed to the News-Press op-ed. "Illegal in all 50 states" attributed to the WVLT report. No statutes invented, no overclaim about Kentucky outcomes (explicitly "months old with no outcome data").

### 6. Research Rigor — 9.0/10
Original contributions: 27,000 → ~180/school-day arithmetic with stated methodology; 51 ft/sec at 35 mph physics illustration clearly labeled as illustrative; the deterrence-paradox framing (90% non-recidivism + high violation volume = coverage gap). Counterargument at full strength (violations ≠ deaths; surveillance; owner-billing; equity). Limitations dedicated and honest (no national census, one county, district self-report, unknown speed). Methodology in the disclaimer.

### 7. Actionable Insights / Data Presentation — 9.0/10
Meets the HARD GATE: drivers get the yellow/red protocol and state-variance warning; parents get the ask-your-district-about-cameras play plus the crossing protocol; the penalty-tier comparison tells readers why the camera ticket matters. Pull stat labeled. Five hyperlinked references. Disclaimer specific to this article's arithmetic.

## Average: 9.0

## Verdict
ALL 7 critics >= 8.5 AND all hard gates PASS → phase=SHIP. 1/day rule exhausted (#892 published 2026-09-12) → queue SHIP_BLOCKED, ship_date 2026-12-06 (after #895's 2026-12-05).

## Notes for Ship
- Hero image validated JPEG (FF D8, 1920x1280, hash a8ed3fef); move drafts/896-school-bus-stop-arm-violations.jpg → images/ on ship
- Cache-busting `?v=a8ed3fef` already in draft
- twitter:card meta present
