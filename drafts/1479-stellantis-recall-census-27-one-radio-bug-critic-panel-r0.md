# Critic Panel — #1479: Stellantis Recalled Its New Cars 27 Times. One Radio Bug Blinded 848,511 of Them.

**Slug:** 1479-stellantis-recall-census-27-one-radio-bug
**Journalist:** Rex Driverton
**Round:** 0
**Date:** November 12, 2026

## Hard gates (regex/script = source of truth)

- **Em dashes (literal U+2014 in file):** 0 (max 3) — PASS. All dashes in the file are `&mdash;`/`&ndash;` entities.
- **Banned phrases:** 0 hits for "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Here's where it gets interesting", "Let's be clear", "Make no mistake", "And it's not even close", "The numbers don't lie" — PASS.
- **"The" sentence starters:** 0 of 62 sentences (0.0%, max 15%) — PASS.
- **CSS class check:** `class="story"` present; no `story-detail`/`story-content`/`story-page`; links `../style.css`, no `story.css` — PASS.
- **Hero JPEG:** real JPEG (magic FF D8), 1920x1280, hash 9d3fe95e — PASS.
- **Sentence rhythm:** variance 1131.1 (target ≥200), short 12.8% (≤15%), long 66.7% (≥15%) — PASS (script exit 0).
- **Actionable insights:** present (VIN checks for 26V531/26V059/26V223/26V651, shopping guidance, census-method guidance) — PASS.

## Critic scores

### 1. General Editor — 9.0
Structure is clean: lede with the count and the big number bolded, pull stat, then camera bug, trailer module, Cherokee/small findings, honest accounting, action block. The Cherokee paragraph buries its best detail (ESC/ABS loss on a brand-new nameplate) mid-paragraph behind the 57-vehicle trivia. Length runs above the 300–500-word guide target, but the census series has shipped at this length before (#1478) and the data density justifies it. No structural rewrite needed.

### 2. Voice Coach — 8.5
Rex is audible throughout: deadpan noir, "somebody has to be last", "Five trucks." as a standalone punch, "a special kind of failure for a vehicle whose entire job is pulling things". Zero banned phrases, zero em dashes, zero "The" starters. One real ding: the rhythm script passes on variance, but 66.7% of sentences are long (mean 37 words, 18 sentences over 31 words). It reads dense in the camera-bug paragraph, which is a single 100+ word sentence run. A couple more short punches would open it up. Not a fail, and not worth a revision round on its own.

### 3. Ethics Reviewer — 9.0
Honest accounting is present and full-strength: the counterargument is stated before the action block, the 844,027/848,511 split is disclosed rather than smoothed over, and the OTA-flag error is admitted. No self-congratulation, no victim-blaming, no minimizing of a defect that kills the federally mandated camera. The "buy the second year" advice is sound consumer guidance, not a scare.

### 4. Social/Shareability — 8.5
Headline carries the two numbers that travel (27 and 848,511) and the paradox (one bug, nearly a million cars; another recall, five trucks). Pull stat is clean. One ding: the headline says 848,511 while the lede and body say 844,027. The split is explained in the article and matches the site's own #1409 headline convention, but a sharer who only reads the headline will quote a different number than a reader who reads the piece. Acceptable, flagged, not blocking.

### 5. Legal Accuracy — 9.0
FMVSS citations check out against the campaign summaries (111 rear visibility, 126 ESC, 208/214 airbags, 226 ejection mitigation, 138 TPMS). Campaign numbers, dates, and unit counts match the API output and the Part 573 bulletins (26V531 RCRIT, 26V059 RCRIT). The 26V651/26V244 expansion arithmetic is right (6,605 → 8,329, +1,724, +26%). Minor: ref-9 cites three articles but links only to #1475. Cosmetic.

### 6. Research Rigor — 9.5
Genuine original contribution: a 469-query census across six makes that no one else ran, producing the first Stellantis company-level count on the site and completing the seven-brand table. Novel findings are real: the ProMaster vocabulary hole, the Cherokee first-year 4-campaign finding, the five-truck precision recall, the 26V531 cross-make structure. Limitations are stated honestly (unit counts are all-model-year estimates, ProMaster/Hornet gaps, OTA flag unreliability, late filings). Methodology is verifiable (raw JSON + runner committed). Small ding: unit counts for ~20 of the 27 campaigns are not individually verified beyond the API summaries; the research file says so.

### 7. Data Presentation — 9.0
The research file carries the full tables (per-brand, seven-brand, all 27 campaigns, per-model, component mix, timing) and the article surfaces the key numbers in prose with a pull stat. The numbers a reader needs are all in the piece. Ding: no in-article table — the per-brand breakdown lives in a sentence rather than a scannable table. The series ships prose-only (#1478 did the same), so this is a style note, not a gate.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 8.5 |
| Ethics Reviewer | 9.0 |
| Social/Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.5 |
| Data Presentation | 9.0 |
| **Average** | **8.93** |

All 7 critics ≥ 8.5 and all hard gates pass. **SHIP.** Round 0, no revision needed. Notes for the record: long-sentence density (Voice 8.5) and the headline/body number split (Social 8.5) are the two lowest scores; neither justifies a revision round.
