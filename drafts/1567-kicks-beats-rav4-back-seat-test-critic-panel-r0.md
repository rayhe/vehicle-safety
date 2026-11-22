# Critic Panel — Round 0 — #1567 Kicks Beats RAV4 Back-Seat Test

**Article:** `drafts/1567-kicks-beats-rav4-back-seat-test.html`
**Journalist:** Mia Crumplezone
**Date:** 2026-11-22

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS.
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0 found** — PASS.
- "The" sentence starters: **5 of 53 body sentences (9.4%)** (max 15%) — PASS. Pre-panel fix: 11 of 53 (20.8%) at first draft; six sentences rewritten (lede, pull-label, batch sentence, failure-mode opener, lap-belt sentence, back-seat paragraph) before scoring. Gates re-run after the fix: unchanged except The-starters.
- CSS class check: `class="story"` present, no `story-detail`/`story-content`/`story-page`, links `../style.css`, no `story.css` — PASS.
- Sentence rhythm (`sentence-rhythm-check.py`): **PASS** — variance 527.2 (target ≥200), short 10.4% (target ≤15%), long 43.8% (target ≥15%).
- Hero image: real JPEG (FF D8), 1920x1280, `?v=e6c0ec22` cache-busted in og:image, twitter:image, and hero img.
- Body length: 925 words (guide 300-500, recent queue norms run 810-1303; 1566: 1075). Long; the length is driven by the failure-mode explanation, the build-date-roulette finding, and the full-strength counterargument, and the critics weighed it rather than failing it.
- Trailblazer discrepancy resolved pre-panel: AutoGuide (Nov 5) reported Marginal; Jalopnik (Oct 31) and the live IIHS ratings page (2027 Trailblazer row) say Poor. IIHS as primary source wins; article states Poor with an IIHS citation. Documented in research file.

## Critic scores

### 1. General Editor — 8.7/10
Structure follows the template: kicker, headline, lede with bolded key stat, pull stat, failure-mode explainer, Kicks fix, build-date trap, counterargument, limitations, actionable close, references, disclaimer. The hook lands in the first sentence and the piece never loses the thread that the back seat is where manufacturers cut corners. Deduction: 925 words is long for the format, and the build-date paragraph plus the Palisade aside is doing the work of two paragraphs. The actionable close is specific and build-date aware, which is what the format demands.

### 2. Voice Coach — 8.8/10
Distinctly Mia: opens on her catchphrase ("Let's talk about what happens in the first 150 milliseconds"), gets genuinely excited about load limiters, and judges bad design in plain language ("a belt doing the wrong job at the worst moment" / "That is a design priority, written in sheet metal"). No banned phrases, no AI tells, no throat-clearing setup. Rhythm passes with variance 527.2 and sentence lengths from fragments to 60-plus words. One nit: "To be fair to Toyota, and fairness matters here" is the site's house phrasing for the counterargument (1557 and 1566 flagged the same construction), so it reads as template rather than Mia; it earns its keep but it is not her line.

### 3. Ethics Reviewer — 9.0/10
No victims are used as props; the rear dummy is described by size (5th-percentile woman, 12-year-old child) because the test definition requires it, not to stage a child in danger. The "child's abdomen" line is a factual statement of the injury mechanism, not sensationalism. Both sides of the RAV4 question are presented from their own numbers, including the Good ratings everywhere else and the lack of real-world exposure. No moralizing beyond what the record supports, no self-congratulation.

### 4. Social/Shareability — 8.7/10
Headline is built to travel ("The $23,000 Nissan Kicks Just Out-Crashed America's Best-Selling SUV"). Pull stat "1 in 5" is quotable in one glance, with the price in the label. The build-date roulette finding (same model year, different crash rating, check the door jamb) is the detail people repeat in arguments and in dealership parking lots. Minor deduction: the piece has no batch table to screenshot and share; the six-vehicle comparison lives in prose, which is harder to pass around than a grid.

### 5. Legal Accuracy — 8.8/10
Every number verified against primary sources during this run: IIHS current ratings page fetched live Nov 22 (Kicks G, Q3 P, RAV4 A, RAV4 PHEV M, Trailblazer P); Kicks June 2026 build-date fix and award scope from AutoGuide Nov 5; failure-mode detail from Jalopnik Oct 31; RAV4 479,288 US sales in 2025 from KBB; Kicks $22,730 base MSRP from Edmunds; average new-car transaction price above $50,000 from USA Today Nov 11. Trailblazer Marginal-vs-Poor discrepancy resolved to IIHS pre-panel. Remaining nit: the article does not flag the AutoGuide discrepancy in-text; the research file documents it and the article cites IIHS, which is sufficient, but a reader comparing sources will notice.

### 6. Research Rigor — 8.9/10
Original contribution is real and documented in the research file: the batch cross-tab (4 of 6 fail, 1 of 5 SUVs pass), the build-date roulette (same model year, different rating, Kicks and Palisade), and the price inversion (cheapest car passes, luxury Audi fails, fix is a parts-bin change). Limitations are stated in the article and the disclaimer, including that IIHS ratings are test results not fatality rates and the 2026 RAV4 has barely a year of real-world exposure. Counterargument is at full strength and answered honestly. Every number traces to a cited source. Deduction: the analytical core rests on a single IIHS test batch; it is primary and current, but no FARS corroboration is possible yet, and the piece says so.

### 7. Data Presentation — 8.6/10
Pull stat "1 in 5" with the price in the label is the right lead number for a story whose thesis is a measured gap. Ratios are shown with inputs, not just asserted: 479,288 RAV4s sold, $22,730 vs $50,000-plus average, June 2026 and November 2025 build cutoffs, 40 mph and 40 percent overlap test parameters. Deduction: no batch table. A six-row grid (vehicle, moderate-overlap rating, award status) would let the reader see the comparison rather than take it from prose, and its absence is the clearest presentational gap in the piece.

## Verdict
**SHIP** — average 8.79/10, all seven critics at 8.5+. No round-1 revision required. One pre-panel fix applied (The-starters 20.8% to 9.4%) and gates re-verified.
