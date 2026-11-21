# Critic Panel — Round 0 — #1554 Ford Excursion F-250 Twin Roof Crush

**Article:** `drafts/1554-ford-excursion-f250-twin-roof-crush.html`
**Journalist:** Mia Crumplezone
**Date:** 2026-11-21

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS. Entities `&mdash;`: 2 (title + footer).
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0 found** — PASS.
- "The" sentence starters: **0 of 15 body sentences (0%)** (max 15%) — PASS.
- CSS class check: `class="story"` present, no `story-detail`/`story-content`/`story-page`, links `../style.css`, no `story.css` — PASS.
- Sentence rhythm (`sentence-rhythm-check.py`): **PASS** — variance 1992.2 (target ≥200), short 11.1% (target ≤15%), long 88.9% (target ≥15%). Independent body-only check: 15 sentences, variance 355.1, short 13%, long 80%.
- Hero image: real JPEG (FF D8), 1920x1280, `?v=e25e410b` cache-busted in og:image, twitter:image, and hero img.
- Body length: 596 words (guide 300-500, but recent queue norms run 464-838; 1551: 743, 1552: 838). Acceptable.

## Critic scores

### 1. General Editor — 8.8/10
Structure follows the template exactly: kicker, headline, lede with bolded key stat, pull stat, six body paragraphs, references, disclaimer. Hook is strong (same truck, 4x the deaths). The Trejo case gives the piece a spine beyond the numbers. Minor deduction: the final paragraph carries three jobs at once (age, advice, VIN check) and could breathe more, but it lands.

### 2. Voice Coach — 9.0/10
Distinctly Mia: technical, exact about engineering ("strength-to-weight ratio of 1.725", "0.79 if the windows broke"), judgmental about bad design ("too heavy for Ford's own safety rulebook"). No banned phrases, no AI tells, no throat-clearing. Rhythm passes both the script and the independent body check. Sentence lengths vary from 7 to 66 words. One small nit: "Numbers from that trial deserve a slow read" is a mild throat-clear, but it earns its keep.

### 3. Ethics Reviewer — 9.0/10
Rafael Trejo is named factually and respectfully with a proper case citation, not used as a tearjerker prop. No self-congratulation, no moralizing about Ford beyond what the record supports. The piece blames a design decision and a regulatory hole, not individual drivers.

### 4. Social/Shareability — 8.8/10
Headline is built to travel ("Same Truck, 4x the Deaths"). Pull stat 3.8x is quotable in one glance. The $70 fix is the detail people repeat at dinner. The Excursion has a cult following, which cuts both ways for shares, but the F-250 comparison is the hook that survives the comments section.

### 5. Legal Accuracy — 8.7/10
Trejo citation verified against the case summary (133 Nev. 520, 2017): no physical roof-crush test conceded, SWR 1.25 (0.79 windows-out) vs. 1.725 guideline, $70/70-lb fix, jury verdict for Trejo. FMVSS 216a history verified (pre-2009 standard did not cover >6,000 lb GVWR; 216a extended to 10,000 lb at 1.5x). Excursion/F-250 platform facts verified via Wikipedia. Minor caution: the affirmance is stated from the reported decision; the article does not overclaim damages figures it did not verify.

### 6. Research Rigor — 9.2/10
Original contribution is real and checkable: the platform-matched Excursion-vs-F-250 cross-tab (3.84x) isolates body style from platform, the deaths-per-crash comparison (0.58 vs. 0.36) isolates occupancy, and the toxicology inversion (17.5% impaired vs. 19.5% SUV average) rules out the drunk-driver explanation. Limitations are stated in the disclaimer (±15% VMT uncertainty, fatal-only data, no IIHS rating) and the counterargument paragraph states the exposure/occupancy confounder at full strength without dismissing it. Methodology is transparent: every number traces to FARS or the cited case.

### 7. Data Presentation — 8.6/10
Pull stat is clean and correctly computed (1.65/0.43 = 3.84). Numbers appear in prose with their comparisons attached, never as bare figures. One improvement noted for future pieces: a small comparison table (Excursion / F-250 / Expedition / Tahoe) would make the class context scannable, but the site's prose-plus-pull-stat format is followed and the key comparisons are all in the text.

## Verdict
All 7 critics at 8.5+ (lowest 8.6). All hard gates pass. **SHIP.**
