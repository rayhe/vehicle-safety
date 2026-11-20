# Critic Panel — #1541: The Car Got Safe. The Street Didn't. (Round 0)

**Slug:** `1541-outside-vehicle-death-share-record-high`
**Journalist:** Rex Driverton
**Date:** November 20, 2026

## Hard gates (regex = source of truth)
- Em dashes: `grep -o '—' drafts/1541-outside-vehicle-death-share-record-high.html | wc -l` = **0** (max 3) PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus guide extras): **0** PASS
- "The" sentence starters: **0 of 26 (0.0%)** (max 15%) PASS
- CSS class: `class="story"`, links `../style.css` (no `story.css`, `story-detail`, `story-content`, `story-page`) PASS
- Sentence rhythm (`sentence-rhythm-check.py`): variance **1083.9** (≥200), short **14.3%** (≤15%), long **57.1%** (≥15%) PASS
- Hero: real JPEG (ffd8), 2736x912, `drafts/1541-outside-vehicle-death-share-record-high.jpg` PASS
- Word count: **520** (guide 300-500; precedent #752 shipped at 513) NOTE, not a hard gate

## 1. General Editor — 8.7/10
Lede lands in two sentences and the pull stat does its job. Structure follows the guide (kicker, lede, pull stat, evidence, counterargument, limits, action) without feeling templated. Weakest paragraph is the actionable closer: the IIHS pedestrian-rating advice is specific and good, but "assume the car does not see you" is generic. Length slightly over guide at 520 words. Engaging throughout; no dead paragraph.

## 2. Voice Coach — 8.8/10
Distinctly Rex: deadpan, paradox-first, noir punch lines ("nobody built one for the crosswalk"). Rhythm gate passes with real variance (1083.9) and a healthy long-sentence share (57.1%). Zero banned phrases, zero "The" starters. No throat-clearing setup; starts mid-thought with the 1996/2024 contrast. Minor: the counterargument paragraph runs long and could lose a clause, but it reads like Rex arguing with himself, which is the point.

## 3. Ethics Reviewer — 8.6/10
No victim-blaming of pedestrians; the piece is explicit that motorcyclists are operators, not bystanders, and does not use deaths as entertainment. The grim framing ("the street has never been a bigger share of the killing") stays inside what the data supports. Actionable advice is aimed at drivers (slow down, check pedestrian ratings) rather than lecturing the people being hit. No self-congratulation, no moralizing.

## 4. Social/Shareability — 8.6/10
Headline is the share: "The Car Got Safe. The Street Didn't." The 38% stat is a clean hook and the pull stat works as a social card. Title + deck pair is tight. Weakness: no second quotable line as strong as the headline; the closer is good but not quite tweet-grade.

## 5. Legal Accuracy — 9.0/10
Every figure traces to a cited NHTSA document with document number (DOT HS 813 791, 813 875) or the FARS Encyclopedia trends table. No legal claims are made. The ARF-revision caveat is stated. No fabricated citations; the TRIP link goes to the parent domain per the guide's fallback rule. Numbers check: 24,473 + 14,781 = 39,254; 14,781/39,254 = 37.7%, matching the report's rounded 38%.

## 6. Research Rigor — 8.8/10
Genuine original contribution: the 1996-vs-2024 absolute inversion (outside deaths ~8,410 to 14,781, +76%; inside ~33,650 to 24,473, -27%) is computed from the report's percentages plus FARS totals, and the computation is disclosed. Limitations are explicit (compositional share, motorcyclists-included, ARF status, rounded split). Counterargument stated at full strength ("denominator trick") and answered with absolute counts, not dismissed. Methodology transparent. Weakness: the 1996 person-type split is derived from rounded percentages, not a published 1996 table; a second source would strengthen it, but the disclosure is honest.

## 7. Data Presentation — 8.7/10
Pull stat with a label that states the comparison (20% in 1996). Category moves rendered in prose with change figures (car -9.7%, SUV +1.6%, pedestrian deaths -3.9% vs injuries +5.0%). The death/injury divergence is shown, not just asserted. The enumeration now includes other nonoccupants, so it sums to the stated total. Minor: no explicit total-check sentence, though the reader can verify from the numbers given.

## VERDICT: SHIP
| Critic | Score |
|---|---|
| General Editor | 8.7 |
| Voice Coach | 8.8 |
| Ethics Reviewer | 8.6 |
| Social/Shareability | 8.6 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.8 |
| Data Presentation | 8.7 |
| **Average** | **8.74** |

All 7 critics ≥ 8.5 and all hard gates pass. Round 0, no revision required. Proceed to SHIP.
