# Critic Panel — Round 0: #1168 Nissan Cube Detaching Airbag Projectile

**Article:** `drafts/1168-nissan-cube-detaching-airbag-projectile.html`
**Journalist:** Vin Wreckage | **Kicker:** Existential Dread

## Hard gates (regex-measured, source of truth)
- Em dashes (literal —): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0** — PASS
- "The" sentence starters: **2 of 39 (5.1%)** (max 15%) — PASS
- CSS: `article class="story"` ✓, `../style.css` ✓, no `story-detail/content/page`, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance 1611.3 (≥200), short 14.3% (≤15%), long 48.6% (≥15%) — **PASS**

## Critic scores

### 1. General Editor — 9.0/10
Hook lands immediately ("The airbag will stay attached to the car" as an unexamined engineering sentence), the lede bold stat is memorable, and the pull-stat "~1" is the sharpest in the recent queue. Structure runs lede → evidence → supplier history → math → counterargument → new taxonomy → action, with no dead paragraphs. The fragment "Deployed." after "A driver crashed a 2009 Nissan Cube" is deliberately staccato and works. Minor: the middle paragraph on lot traceability is the longest single thought block; it earns its length.

### 2. Voice Coach — 9.0/10
Unmistakably Vin Wreckage: opens with the persona's signature opener ("Here's a fun fact that will ruin your morning commute"), sustains the cosmic-absurdity register ("the ghost of Takata is not merely haunting the industry through old chemistry"), and no other journalist in the roster would write "the arithmetic is genuinely beautiful in the way that only regulatory data can be." No banned phrases, no swapped-byline risk. Rhythm gate passed with margin after revision (14.3% short, 48.6% long, variance 1611).

### 3. Ethics Reviewer — 9.0/10
The injured driver is unnamed and never mined for pathos; the crash is treated as evidence, not content. The counterargument paragraph argues the other side at full strength ("a triumph of lot-tracking failure over proportionality") without strawmanning. No blame assigned to the driver, no sneering at Nissan, no "safety first" self-congratulation. The precautionary-principle framing is argued, not preached.

### 4. Social/Shareability — 8.8/10
The "~1 defective airbag in 47,928 cars" stat is a pull-quote generator, and the zombie-supplier angle (Takata striking from beyond the corporate grave) has a second life on social. Headline is long but data-dense; the dateline framing "in the back seat" is the image people will remember. Slight deduction: the story's core appeal skews toward readers who already know the Cube; the cold-open does good work to fix that, but the niche car is a mild reach tax.

### 5. Legal Accuracy — 9.0/10
All factual claims carry inline superscript citations to six sources. Regulatory identifiers verified: PE25005 (opened June 13, 2025, closed Sept. 11, 2026 basis), Part 573 recall 26V230 / Nissan R26A1, 47,928 MY2009-2010 Cubes, build range Oct. 10, 2008 – Sept. 25, 2010, inflator P/N 98560-7991C, TK Services Inc. Romeo MI. Attribution is careful ("per Jalopnik, citing recall docs"; "Nissan estimates"), and the "~1" figure is presented as derived, not as Nissan's claim. Disclaimer restates verifiability limits.

### 6. Research Rigor — 8.8/10
Three genuine original contributions: (1) the 47,928 × 0.002% = ~1 calculation, shown with inputs; (2) the weld-defect vs. propellant-defect distinction, correcting the common "Takata again" conflation; (3) the third-failure-mode taxonomy (detachment vs. non-deployment vs. shrapnel). Limitations are explicit in the disclaimer and the research notes: single-crash empirical basis, unverifiable lot-range data, no FARS cross-tab possible (FARS does not isolate Cube airbag injuries). Strongest counterargument stated at full strength. Slight deduction: the Part 573 filing itself was cited via secondary reporting rather than reviewed directly.

### 7. Data Presentation — 8.8/10
Pull-stat "~1" with a precise label is the article's thesis in one number. Key stats bolded inline, superscript refs after every claim, disclaimer separates caveats from the narrative. No chart needed for a single-equation story. Slight deduction: the 0.002% figure appears twice in prose and once in references without a displayed equation; the prose math ("multiply 47,928 by 0.00002 and you get 0.96") covers it, but a reader skimming the pull-stat could miss the derivation.

## Round 0 result
- **Average: 8.91 → 8.9/10** (min 8.8, max 9.0)
- All 7 critics ≥ 8.5; all hard gates pass.
- **VERDICT: SHIP.** No revision rounds needed.

## Revision history
- Pre-panel revision: "The" starters 16.7% → 5.1% (merged "Deployed" fragment, rewrote 3 "The" opens), rhythm short_pct 21.6% → 14.3% (PASS).
