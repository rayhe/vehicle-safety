# Critic Panel — #1611 "Every Vehicle Occupant Died Less in 2024. Except SUV Occupants."
**Journalist:** Rex Driverton · **Round:** 0 · **Date:** November 27, 2026
**Word count:** 1,776 · **References:** 5

## Hard Gates (regex/script = source of truth)
| Gate | Result | Status |
|---|---|---|
| Em dashes (literal) | 0 (`grep -o '—' ... \| wc -l`) | PASS (max 3) |
| Banned phrases | 0 hits ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE list) | PASS |
| "The" sentence starters | 0 of 58 sentences (0.0%) | PASS (max 15%) |
| CSS class / stylesheet | `class="story"`, `../style.css`, no story-detail/content/page, no story.css | PASS |
| Sentence rhythm | variance 2282.0 (≥200), short 7.0% (≤15%), long 65.1% (≥15%) | PASS |
| Actionable insights | Shopping (check updated moderate overlap front test), driving (belt, speed, phone), policy (heavy-truck AEB is a different docket; here: ask whether occupant-protection framing still fits) | PASS |
| Hero image | Real JPEG, 608,906 bytes, `?v=ad1cc5bc` | PASS |

## Critic Scores

### 1. General — 9.0/10
Hook lands in the first line and the headline is the hook. Structure is clean: lede, the full Table 3 spread, the per-model paradox, the exposure explanation, the counterargument at full strength, the inside/outside migration, actionable takeaways, a close that earns its last line. Nit: the merged opening sentences (a rhythm-gate fix) make the lede's first sentence run 48 words; the punch survives, but the original staccato opening was sharper.

### 2. Voice — 9.0/10
Unmistakably Rex: deadpan, paradox-driven, dry. "A reporter who hides the denominator is selling something." "One year does not make a trend, it makes a question." "The hole was shaped exactly like the car in your driveway." Distinct from Vin's baroque register and Mia's forensic one; no byline could be swapped in without the voice changing. No slop phrases, no AI tells.

### 3. Ethics — 9.5/10
Denominator disclosed in the second paragraph before any interpretation. No individuals named, no victims exploited for anecdote, no sensationalism. Uncertainty is stated rather than smoothed over, and the advice given (belt, speed, phone) is safety-positive and generic. The piece refuses the easy "SUVs are death machines" read and the easy "nothing to see here" read in equal measure.

### 4. Social — 9.0/10
Built to travel: headline is the share text, pull-stat (+112) is clean and self-contained, the closing line is quotable. The paradox (safest models, rising class deaths) is the kind of counterintuitive hook that survives a feed. Minor: no sub-heads for skimmers, but that matches the site's prose-first house style.

### 5. Legal — 9.5/10
No defamation exposure: no company or person is accused of wrongdoing, all figures are attributed to NHTSA/IIHS with DOT HS numbers, and the disclaimer states the FARS caveats (Annual Report File, involvement not fault). Driving advice is generic safety guidance, not a product claim.

### 6. Rigor — 9.0/10
Every Table 3 number verified against DOT HS 813 791 (deaths and injuries, all eight categories, plus the 57% behavioral-factor figure and the 62%/38% inside/outside split). Original calculations recomputed by script: SUV share of passenger-vehicle occupant deaths 28.7% to 30.9%, SUV-to-car ratio 0.58 to 0.66, SUV deaths 7,013 vs pickup+van 5,021. Counterargument stated at full strength (+112 is 1.6% on a 6,901 base, one year, ARF subject to revision, no 2024 per-model rates yet). The 2025 early estimate (36,640, −6.7%) was verified against DOT HS 813 800 during critique and added as ref-5. The exposure thesis is labeled as the best-supported explanation, not a proven cause, which is the honest framing.

### 7. Data Presentation — 9.0/10
Numbers layer cleanly: deaths first, then injuries (the louder signal), then shares and ratios. Pull-stat +112 carries its full context in the label. The per-model rate list (RAV4 0.19 through CR-V 0.53) is dense but reads as a flowing list, and the contrast with Veloster 8.54 / Mustang 6.02 lands. Nit: the Table 3 spread would scan better as a small table, but the prose carries it and the site style is prose-first.

## Verdict
| Critic | Score |
|---|---|
| General | 9.0 |
| Voice | 9.0 |
| Ethics | 9.5 |
| Social | 9.0 |
| Legal | 9.5 |
| Rigor | 9.0 |
| Data Presentation | 9.0 |
| **Average** | **9.14** |

**All 7 critics ≥ 8.5 and all hard gates pass → SHIP.**
No revision round needed. Round 0 is final.
