# Critic Panel — #874 (Round 0): "The 2027 Telluride Won IIHS's Highest Award. Yours Might Not Have."

Journalist: Clara Rollover | Kicker: The Gap | Draft: drafts/874-telluride-tsp-build-month-asterisk.html

## Hard gates (mechanical, all PASS)
- Em dashes: 0 (max 3)
- Banned phrases: 0
- "The" sentence starters: 12.5% (max 15%)
- CSS: `class="story"` present, `../style.css` linked, no story-detail/content/page
- Sentence rhythm: variance 575.1 (≥200), short 12.5% (≤15%), long 40.6% (≥15%) — script exit 0
- Hero: real JPEG (FFD8), 1920x1280, cache-bust hash 0cf05c47 in img src + og:image + twitter:image
- Word count: 698

## Scores
1. **General Editor — 8.7**: Lede opens mid-thought with a concrete instruction (read the door-jamb sticker). Clean arc: trap → FARS validation → batch pattern → fairness → checklist → limitations. One style wart found and fixed pre-score (double colon in "No: it is how IIHS ratings work:"). Headline is the article's best asset.
2. **Voice Coach — 8.8**: Distinct Clara — direct, consumer-angry, "Nobody at the finance desk is checking your door jamb," "standing on a dealership lot on a Saturday." No AI tells, no banned phrases, rhythm gate passes. Minor: "Read that list again" borders on tell-y direct address, but it reads as Clara's scolding register, kept.
3. **Ethics Reviewer — 9.0**: Fair to Kia (credit for mid-year fix, "granularity not favoritism"), no victim-blaming, no fear-mongering inflation (Marginal headlights correctly framed as visibility grade, not death sentence). Honest limitations block.
4. **Social/Shareability — 8.8**: Headline + "June 2026" pull stat are share-ready. "The award is real, which is why you should make sure it is yours" is a clean closer quote. The build-date-check mechanic gives readers something to DO, which drives saves.
5. **Legal Accuracy — 8.8**: All claims trace to opened/verbatim sources. Pre-score fixes: removed invented Freep byline (not in source), corrected "third-lowest" to "one of the ten lowest" (Telluride ties at 0.04), fixed `fars_output.py` → `.js`. "Quietly upgraded" de-editorialized to "improved" per source wording.
6. **Research Rigor — 9.0**: Three original contributions: (a) build-month asterisk mapped onto the award announcement, (b) FARS cross-tab of outgoing generation validating the award (0.04, one of ten lowest), (c) batch-wide audit showing V2V-prevention failures disqualified 3 of 5 models. Dedicated limitations paragraph states exactly what was not proven (FARS 2014-2023 = first-gen Telluride; 2027 real-world record does not exist). Counterargument at full strength (mid-year fix = system working).
7. **Data Presentation — 8.9**: Pull stat with context label, inline superscript refs, full references section with verbatim URLs, methodology transparency (inputs shown: 31 deaths, 612,500 fleet), disclaimer carries the generation caveat.

**Average: 8.86 — all 7 critics ≥ 8.5. PASS.**

## Panel-caught fixes (applied before scoring)
- Invented Detroit Free Press byline removed (not present in source)
- "third-lowest rate" → "one of the ten lowest" (ties at 0.04 with Caravan/Seltos/Intrepid)
- `fars_output.py` → `fars_output.js`
- Double colon in scandal paragraph → single-clause rewrite
- "quietly upgraded" → "improved" (source wording)
- Rhythm gate: merged two short sentences (was 15.2% short, now 12.5%); "The" starters 16.1% → 12.5% via pull-label and asterisk-sentence rewrites

## Disposition
SHIP_BLOCKED — 1/day gate consumed on 2026-09-10 (4 Publish commits today). Queued after #873 (2026-11-16) → ship_date 2026-11-17.
