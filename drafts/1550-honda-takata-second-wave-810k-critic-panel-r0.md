# Critic Panel — #1550: Takata's Second Wave Just Doubled: Honda Recalls 810,592 More

**Slug:** `1550-honda-takata-second-wave-810k`
**Journalist:** Axle McScatter
**Round:** 0
**Date:** November 20, 2026

## Hard Gates (regex = source of truth)

| Gate | Result | Verdict |
|---|---|---|
| Em dashes (literal `—` in whole file) | 0 | PASS (max 3) |
| Em-dash entities (`&mdash;`) | 4 total: `<title>` + `og:title` (site title separator, standard), table placeholder cell, site footer. Zero in prose sentences. | PASS |
| Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack") | 0 | PASS |
| "The" sentence starters | 1 of 26 sentences, 3.8% (max 15%) | PASS |
| CSS class | `class="story"`, links `../style.css`, no `story.css` | PASS |
| Hero | Real JPEG 1920x1280, 562,118 bytes, hash 8425375c | PASS |

Note on sentence-length stats: the raw splitter reported a 110-word "sentence" that is an artifact of the data table being flattened (table cells have no sentence-ending punctuation). Longest real prose sentence is 75 words (para 2, the Miami-vs-Minneapolis climate sentence). It is grammatically sound with clear internal structure and its length serves the contrast; flagged for Voice, not a gate failure.

## Scores

### 1. General — 9.0/10
Timely (announced Nov 19-20, filed today), clear news hook in the lede, tight structure: lede, climate angle, chemistry, ledger table, fairness check, action. The "1,124,621 in eight days" framing is the story's spine and it holds. Minor: the table's "Still unrepaired" row is the only row without a letter-date, which is correct but visually asymmetric; harmless.

### 2. Voice — 8.5/10
Axle's data-desk voice is present: "One week. Two automakers." fragments, "Honda did not recall a car; it recalled a climate." The 75-word para-2 sentence is a deliberate rhetorical roll and lands, but it is the longest sentence in the piece by 2x and a second read is needed to track the "which means... because..." chain. "Here is the week's ledger, because the numbers deserve to be seen together" is throat-clearing; the table would carry itself. Passes, with the long sentence noted as a style choice rather than a defect.

### 3. Ethics — 9.0/10
The fairness check is the article's conscience and it is explicit: zero ruptures, zero injuries, zero crashes, both makers acting on models before anyone got hurt. No sensationalism about a recall with no failures; the "bad news for the accounting" turn is earned, not hyped. VIN-check CTA is genuinely useful. No victim framing issues: there are no victims in this batch and the piece says so.

### 4. Social — 8.5/10
Highly shareable hook (same car recalled in Miami, not Minneapolis) and a clean pull-stat (1,124,621). The ledger table is screenshot-friendly. Loses half a point: the headline is long for social cards and the piece has no single quotable line after the climate sentence; the "fix has a shelf life" line is close but buried in para 3.

### 5. Legal — 9.0/10
Campaign numbers (26V765, 26V748), recall numbers (BQK/MQJ/KQI/QQH; 26TB25/26TA25/26LB11/26LA11), and letter dates are all sourced and match the research file. Attribution is careful ("NHTSA says", "Honda watched... and concluded"). No defamation exposure: all claims are about filed federal campaigns and the makers' own statements. The "repaired count overstated by at least 1.1 million" claim is properly hedged with "at least" and tied to the arithmetic.

### 6. Rigor — 8.5/10
Arithmetic verified: 810,592 + 314,029 = 1,124,621. Model lists, 14-jurisdiction boundary, desiccant chemistry, and TK Global study all match the primary sources. Limitations are disclosed in the disclaimer (Honda replacement-vs-original ambiguity, no per-model split, FARS aggregates all model years). One nit: reference [6] lists FARS body counts for the nameplates but no FARS figure appears in the body text, so the citation is ornamental; the disclaimer covers the framing role, so this is a polish note, not an error.

### 7. Data Presentation — 9.0/10
Pull-stat (1,124,621) is the right number to lead with. The ledger table is clean, comparable, and correctly totals; bolding the Honda and combined rows guides the eye. Units and dates are consistent. The "~4.7 million still unrepaired" row gives the week's number its scale. No chart is needed; the table does the work.

## Verdict

| Critic | Score |
|---|---|
| General | 9.0 |
| Voice | 8.5 |
| Ethics | 9.0 |
| Social | 8.5 |
| Legal | 9.0 |
| Rigor | 8.5 |
| Data Presentation | 9.0 |
| **Average** | **8.79** |

All 7 critics at 8.5+, all hard gates pass. **SHIP.**
