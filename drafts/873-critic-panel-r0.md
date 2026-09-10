# Critic Panel — #873 "America's Safest Pickup Is a Spreadsheet Error" (Round 0)

**Slug:** ram-1500-safest-pickup-spreadsheet-error | **Journalist:** Axle McScatter | **Date:** 2026-09-10
**Round:** 0 (fixes applied pre-panel: The-starters 21.7%→1.9%, short_pct 17.2%→7.8%)

## Scores

| Critic | Score | Notes |
|---|---|---|
| General Editor | 9.0 | Hook lands ("the numbers were obviously lying"), clean arc: anomaly → discovery → mechanism → correction → action. "Confession at the scene" is the piece's best beat. Minor: "What to do with this" heading is flat vs. site convention. |
| Voice Coach | 9.0 | Distinct Axle data-nerd voice (denominator forensics, "good news never gets audited"). Zero banned phrases. Rhythm PASS: variance 256.6, short 7.8%, long 41.2%. |
| Ethics Reviewer | 9.0 | Self-correcting posture: the site admits its own table was wrong and commits to fixing it publicly. No victim-blaming; claims bounded ("somewhere between 0.13 and 0.90"). |
| Social/Shareability | 9.0 | Headline is truck-forum bait in the best way. Pull stat 0.13→0.90 is a clean visual. Ram owners will share this to argue; F-150 owners will share it to gloat. Both count. |
| Legal Accuracy | 9.0 | Claims hedged ("estimates," "±15% uncertainty"). Rebrand dates sourced (Autoblog/Wikipedia). No defamation surface: this criticizes a data pipeline, not a company's conduct. |
| Research Rigor | 9.0 | Original contribution: combined-rate correction (0.90), dual-coding pattern, Grand Caravan second instance — all computed from the repo's own data and verifiable in fars_output.js/fars_process.py. Dedicated limitations section. Counterargument at full strength (real ESC-era safety gains; true post-2013 rate unknowable). Methodology shown. |
| Data Presentation | 8.5 | Panel caught two real errors: (1) combined rate published as 0.91 (sum of rounded components) vs. 0.90 (direct computation per site convention) — fixed everywhere incl. research notes; (2) "slots between the Tundra (0.94) and Sierra (1.01)" was factually wrong (0.90 < 0.94) — fixed to "lands just under the Tundra, inside the full-size cluster." Also fixed "700 percent" → "sevenfold." Numbers now internally consistent. |

**Average: 8.93** — all 7 critics ≥ 8.5.

## Hard gates (round 0, post-fix)

| Gate | Result |
|---|---|
| Em dashes (regex count) | 0 (max 3) ✅ |
| Banned phrases | 0 ✅ |
| "The" sentence starters | 1.9% (max 15%) ✅ |
| Sentence rhythm | PASS — variance 256.6, short 7.8%, long 41.2% ✅ |
| CSS class | `class="story"`, `../style.css`, no bad classes ✅ |
| Hero image | Real JPEG (ffd8), 407KB, hash 4ba4dbba ✅ |

## Verdict

**PASS round 0 → SHIP.** 1/day gate consumed on 2026-09-10 (Publish #864 in history, reverted; slot consumed per status note). Queued as SHIP_BLOCKED for 2026-11-16 (day after #872's 2026-11-15 slot).
