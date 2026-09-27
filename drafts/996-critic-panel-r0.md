# Draft #996 — Critic Panel, Round 0
**Article:** "Older Pedestrians Don't Get Hit More Often. Their Bodies Just Can't Take the Hit." (Vin Wreckage)
**Slug:** 996-older-pedestrian-death-gap
**Date:** 2026-09-27 (09:30 run)

## Hard gates (regex = source of truth)
- Em dashes in body: **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0** — PASS
- "The" sentence starters: **4/39 (10.3%)** (max 15%) — PASS
- CSS: `class="story"` present; no `story-detail`/`story-content`/`story-page`; `../style.css` linked, no `story.css` — PASS
- Body words: 613 (guide 300-500; prior articles shipped at 570 — slightly long, noted below)
- Sentence rhythm: variance 83.1, short 17.9%, long 10.3%
- **Hero image: MISSING — media.generate_image upstream unavailable (503 after 3 attempts). og:image still PLACEHOLDER. FAIL (tool outage, not quality)**

## Critic scores
### 1. General Editor — 8.6
Headline carries a real paradox and the lede delivers its bolded stat immediately. Structure follows the house template (kicker → lede → pull stat → 5 grafs → refs → disclaimer). Deductions: 613 words is ~20% over the guide ceiling; paragraph 5 runs long and repeats the pharmacy image three times. Trimming suggested, not blocking.

### 2. Voice Coach (Vin Wreckage) — 9.0
Distinctly Vin: catchphrase opener per roster, cosmic framing ("The crash is survivable. The body doing the crashing is not."), the "heresy the data demands" turn, and the closing universalizer ("You will age into this dataset"). No other byline on this site could carry this piece. Anti-AI rules clean: varied fragments and builds, opinions stated ("should embarrass everyone in the business"), no throat-clearing.

### 3. Ethics Reviewer — 9.0
Treats Meredith Melville with dignity (survivor narrative, her own words, no pity framing). No mockery of older pedestrians anywhere; the piece indicts infrastructure, not the vulnerable. Universalizing close ("All of us will") includes the reader without fatalism-as-entertainment. No identifiable living person is accused of anything.

### 4. Social Shareability — 8.8
Pull stat (17% vs 22%) is chart-ready; the headline paradox survives being quoted out of context; the closing line is a quotable kicker. Mild risk: the topic reads as "elderly health," which underperforms versus crash/recall stories in this feed, but the paradox angle compensates.

### 5. Legal Accuracy — 8.8
Every number traces to a cited source; no unattributed factual claims about manufacturers; the Toyota sedan detail is attributed to KFF's reporting. "Documented as contributors" (NYT) is correctly hedged, not overstated as causation. Vision Zero adoption figure (200+ municipalities) matches KFF. No defamation exposure.

### 6. Research Rigor — 8.7
Five references; primary data anchors (FARS via ROSAP Traffic Safety Facts 2024; IIHS fatality-rate series via Rundle; CDC population share; NHATS walking trend). Weaknesses: the 2025 NHTSA early estimate is cited via AASHTO Journal rather than NHTSA's own release; the senior-destinations study is cited indirectly through KFF without a direct PubMed link. Both are second-hand citations, flagged for the revision pass.

### 7. Data Presentation — 8.8
Key stats bolded in lede; pull stat isolates the demographic imbalance; 36,640/-6.7%/1.10 rate triple is contextualized against the 70+ flatline; undercount caveat (8,200 injuries) preserved rather than dropped. Inline superscript refs match the reference list.

## Round-0 verdict
- Average: **8.81**. All 7 critics ≥ 8.5.
- Hard gates: all PASS **except hero image** (media tool 503 outage; og:image PLACEHOLDER unresolved).
- **VERDICT: HOLD at CRITIQUE.** Quality would pass to SHIP; the missing hero blocks it. Next run: regenerate hero JPEG, replace PLACEHOLDER hashes, then SHIP_BLOCKED queue behind #995 (ship date 2027-04-02 reserved).

## Pre-panel fixes applied (not scored)
- Trimmed body 696 → 613 words; merged choppy fragments (short_pct 23.9% → 17.9%); rewrote 3 clustered "The" openers (The-starters 12.8% → 10.3%).
