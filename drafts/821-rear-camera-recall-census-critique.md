# Critique: #821 — Rear-Camera Recall Census (Axle McScatter)

Draft: `drafts/821-rear-camera-recall-census.html` | Hero: `drafts/821-rear-camera-recall-census.jpg` (verified JPEG, ff d8)

## Hard gates (calculated, not opinion)
- Em dashes: 1 / 3 max — PASS
- Banned phrases: 0 — PASS
- "The" starters: 9/73 = 12.3% — PASS
- Rhythm: variance 998.8 (≥200), short 13.2% (≤15), long 42.1% (≥15) — PASS
- CSS: ../style.css, article.story, story-body, kicker, byline, dateline, pull-stat/label, theme script, Inter — PASS
- Hero: real JPEG, verified bytes, no text in image — PASS

## 1. General Critic — 9.2/10
Fresh news peg (recall filed Sep 1, reported Sep 4) with a genuine census nobody else has run. Structure holds: hook, pull-stats, census table-in-prose, lag analysis, data-quality finding, actionable guidance, limitations, counterargument. The census paragraph is dense — eight recalls in one 135-word sentence — but Axle's voice earns it ("Here is the census:"). Deduction: the headline's three fragments are counted in the rhythm check, a known quirk; content-wise fine. Lede buries nothing.

## 2. Voice Critic — 9.0/10
Axle is present throughout: "I ran the numbers. Then I ran them again." (merged for rhythm, still Axle), "I keep a spreadsheet, and it keeps getting longer," "my favorite kind: the data is wrong about itself." Grim humor present ("the television it reports to is haunted," "back up like it is 1997"). Jalopnik-meets-actuarial-table achieved. Deduction: one merged sentence ("I ran the numbers, then I ran them again, and they didn't get better") lost a beat of the signature cadence; acceptable trade for the rhythm gate.

## 3. Ethics Critic — 9.5/10
No victim-blaming; framing is institutional (automakers, NHTSA metadata). Actionable guidance is safety-positive (mirrors, shoulder check, take OTA updates). No kids' names, no personal data, no speculative injuries — explicitly notes zero crashes. Census limitations stated upfront in limitations section. No conflict-of-interest issues.

## 4. Social Critic — 8.8/10
Shareable hooks: the 239k/239,131 coincidence, "8 recalls, 0 broken cameras," the haunted-television line. Pull-stats are tweetable. The OTA-flag finding is catnip for the data-nerd audience. Deduction: headline is long for social cards (will truncate), though og:description is clean. The NHTSA-metadata angle may be too inside-baseball for broad sharing — but that's Axle's beat, and the audience self-selects.

## 5. Legal Critic — 9.3/10
All factual claims sourced to NHTSA records or named press. No defamation risk: Chrysler/Ford/Tesla/Toyota criticism is factual recall reporting from federal filings. "No unreasonable risk" quote is from the filed Part 573 chronology. No legal advice given; "check your VIN at nhtsa.gov/recalls" is standard. No AI disclosure in byline per house rule. Deduction: none material; minor note that 26V531/26V560 chronologies are not yet from 573 PDFs, disclosed in limitations.

## 6. Rigor Critic — 9.0/10
Novel contribution: the census + lag analysis + OTA-flag contradiction are original work from primary data, not a recall summary. Methodology transparent (28 models × MY2025/2026, API query date). Limitations section is genuine (sample not fleet; lags are lower bounds; two 573 PDFs pending). Strongest counterargument presented at full strength ("eight recalls in 23 months is the system working"). Deduction: vehicle counts for 24V748/24V801 not extracted — disclosed; the ~2.37M total excludes them, stated. Census should ideally be reproducible; raw API JSON saved to drafts for verification.

## 7. Data Presentation Critic — 9.1/10
Pull-stats (8 / 0) land the thesis in two numbers. The census paragraph reads like Axle's table-as-prose; campaign numbers, dates, populations, remedies all present. Lag times (2 vs 12 vs 15 months) are the article's strongest quantitative comparison. The 4-of-8 OTA-flag contradiction is quantified precisely. Deduction: a real HTML table would aid scanning, but the site's article template and Axle's prose-census convention favor the current form; the research file holds the structured table.

## Average: 9.1/10 — all ≥8.5. SHIP.
