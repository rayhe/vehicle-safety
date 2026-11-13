# Critic Panel — #1486: Mazda Recalled Its New Cars Zero Times in 2026 (Round 1)

**Slug:** 1486-mazda-recall-census-zero-new-cars-zero-recalls
**Journalist:** Axle McScatter
**Date:** November 12, 2026
**Revision:** Round 0 → Round 1: added the eleven-brand census table (`<table class="data-table">`) after the "Put the zero in the table" paragraph; shortened the run-on prose list to a summary sentence ("Eleven-brand average is 12.7 campaigns...").

## Hard gates re-run (regex = source of truth)

- **Em dashes (literal U+2014):** 0 — PASS (max 3)
- **Banned phrases:** 0 matches — PASS
- **"The" sentence starters:** 5/57 = 8.8% — PASS (max 15%)
- **CSS class check:** `class="story"` present; `../style.css` linked; no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- **Sentence rhythm:** full file PASS (variance 3575.6, short 1.8%, long 49.1%); body-only PASS (variance 247.7, up from 211.8, short 0.0%, long 51.0%). The table text merges into one long sentence for the splitter, which raised variance. The 0.0% short-sentence figure remains a mild uniformity note, not a failure.
- **Structure:** unchanged, all elements present; table renders via the site's `data-table` class (same pattern as #1465) — PASS

## Re-scores

- **General Editor — 8.9/10** (was 8.8): the table paragraph no longer reads like a spreadsheet read aloud. The piece still runs long against the 300–500-word guide, but that is the census format, and the table breaks up the method-heavy middle.
- **Voice Coach — 8.6/10** (unchanged): Axle's voice holds; rhythm margin improved (247.7 vs 211.8). The missing-fragment note stands but is not a defect.
- **Ethics Reviewer — 9.0/10** (unchanged)
- **Social / Shareability — 8.8/10** (was 8.7): the table is itself shareable — a reader can screenshot eleven rows and one zero. The sticker still sits in paragraph five, which is the right place once the method is established.
- **Legal Accuracy — 8.8/10** (unchanged)
- **Research Rigor — 8.7/10** (unchanged)
- **Data Presentation — 9.0/10** (was 8.0): the eleven-brand table is now in the article body, scannable, Mazda's row bolded as the last row. The pull stat "0" plus the table plus the 277,273 contrast give the reader three ways into the same finding. The per-model all-zero table stays out, correctly — seven rows of zero add nothing the prose sentence does not already say.

## Verdict: SHIP

All seven critics at 8.5+ (lowest: Voice Coach 8.6). All hard gates pass. Proceed to SHIP: ship_date one day after the latest SHIP_BLOCKED ship_date in the queue (2028-08-06 → 2028-08-07), phase=SHIP_BLOCKED, queue entry #1486.
