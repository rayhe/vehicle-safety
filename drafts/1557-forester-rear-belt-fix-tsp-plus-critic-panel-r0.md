# Critic Panel — Round 0 — #1557 Forester Rear Belt Fix Earns TSP+

**Article:** `drafts/1557-forester-rear-belt-fix-tsp-plus.html`
**Journalist:** Mia Crumplezone
**Date:** 2026-11-21

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS. Entities `&mdash;`: 1 (title only).
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): **0 found** — PASS.
- "The" sentence starters: **1 of 51 body sentences (2.0%)** (max 15%) — PASS.
- CSS class check: `class="story"` present, no `story-detail`/`story-content`/`story-page`, links `../style.css`, no `story.css` — PASS.
- Sentence rhythm (`sentence-rhythm-check.py`): **PASS** — variance 1346.5 (target ≥200), short 13.5% (target ≤15%), long 59.5% (target ≥15%). One pre-panel fix merged seven short fragments into longer constructions (lede fragments, "Both numbers are real", "It is a choice", "Buying a Kicks?/Buying a Forester?" questions); first run failed at short 23.4%, re-run passes at 13.5%.
- Hero image: real JPEG (FF D8), 1920x1280, `?v=8045368b` cache-busted in og:image, twitter:image, and hero img.
- Body length: 1303 words (guide 300-500, recent queue norms run 810-1287; 1556: 935). Long; the length is driven by the six-model scoreboard, the FARS cross-check, and the full-strength counterargument, and the critics weighed it rather than failing it.
- One pre-panel accuracy fix: the draft originally said "Two cars passed it: the Forester, and the Kicks," but the 2027 Volkswagen Jetta also earned Good in the same IIHS round. Fixed to "Two compact SUVs passed it," which is accurate (the Jetta is a sedan). Gates re-run after the fix: unchanged.

## Critic scores

### 1. General Editor — 8.7/10
Structure follows the template exactly: kicker, headline, lede with bolded key stat, pull stat, six body paragraphs, references, disclaimer. Hook is strong (a seat belt as the whole story) and the piece never loses the thread that the fix is cheap, proven, and uncopied. Deduction: 1303 words is long for the format, and the FARS disagreement paragraph is the densest passage in the piece; a scanner can survive it, but it is doing the work of two paragraphs. The actionable close is specific, dated, and build-date-aware, which is what the format demands.

### 2. Voice Coach — 8.8/10
Distinctly Mia: technical but accessible, genuinely excited about belt geometry ("Start with what the test actually measures, because the grade only makes sense once you see the dummy"), slightly judgmental about bad design ("four competitors in the same segment have not"). No banned phrases, no AI tells, no throat-clearing. Rhythm passes with wide variance (1346.5) and sentence lengths from 4 to 60-plus words. One nit: "Fairness demands the skeptical case at full strength" is the site's house phrasing for the counterargument (1554, 1555, and 1556 used the same construction), so it reads as template rather than Mia; it earns its keep but it is not her line.

### 3. Ethics Reviewer — 9.0/10
No victims are used as props; there are none in this story, and the piece does not manufacture any. CR-V, RAV4, Q3, and Trailblazer owners are treated fairly: the article states plainly that the failure is rear-occupant-specific and that the cars are legal to sell. Both sides of the lab-vs-road argument are presented from their own numbers. No moralizing beyond what the record supports, and the piece explicitly withholds a verdict on whether the test predicts survival. No self-congratulation.

### 4. Social/Shareability — 8.6/10
Headline is built to travel ("Fixed the Back Seat With a Seat Belt", "The CR-V Still Hasn't"). Pull stat 0.26 is quotable in one glance, with the CR-V doubling in the label. The Kicks build-date tip (June 2026) is the detail people repeat in arguments and check on a door jamb. Minor deduction: the FARS disagreement paragraph is dense for scanners, and the piece has no second pull stat to carry the 20-year streak, which is the number that makes the award a story rather than a press release.

### 5. Legal Accuracy — 8.8/10
Grades verified against primary sources: Forester CEF2566 all-Good with the belt-change note quoted from the IIHS page; CR-V CEF2343 Poor via the site's own #1392 research file, which read the IIHS page directly; RAV4 Hybrid Acceptable and RAV4 PHEV Marginal, Q3 Poor, via Jalopnik; Kicks Good after June 2026 build via SlashGear and AutoGuide; Subaru release for the 20-year streak and 2026 criteria change. The "Two cars passed it" error was caught pre-panel and fixed to "Two compact SUVs passed it," since the Jetta also earned Good. The Trailblazer is deliberately left ungraded because secondary reporting disagrees (AutoGuide: Marginal; Jalopnik: Poor). Remaining nit: "Toyota could do the same thing tomorrow" is editorial judgment presented in a factual register; the surrounding sentences make clear it is an inference from the Kicks and Forester fixes, but a strict reader could want a hedge.

### 6. Research Rigor — 9.0/10
Original contribution is real and documented in the research file: the lab-grade/road-rate disagreement running in both directions (RAV4 lowest rate with no award, Kicks highest rate among passers), the belt-fix club of two, the impairment-spread vs. rate-spread comparison (4.5 points vs. 20x), and the 20-year streak under tightening criteria. Limitations are stated in the research file and the disclaimer, including the FARS generation mismatch. Counterargument is at full strength and answered honestly. Every number traces to a cited source, and the Trailblazer ambiguity is disclosed rather than papered over. Deduction: the article still leans on cross-generation rate comparisons, which the disclaimer covers but cannot fully cure.

### 7. Data Presentation — 8.7/10
Pull stat 0.26 with the CR-V doubling in the label is the right lead number for a story whose thesis is a gap. Ratios are shown with inputs, not just asserted: 2.04x Forester-vs-CR-V, 20x rate spread, 4.5-point impairment spread, 4.5 kN shoulder belt tension. The six-model scoreboard is complete and sourced. Minor deduction: there is no table for the scoreboard, so readers must extract six grades from prose, and the 20-year streak has no second pull stat.

## Verdict
**SHIP** — average 8.80/10, all seven critics at 8.5+. No round-1 revision required. Two pre-panel fixes applied (rhythm merges, Jetta accuracy fix) and gates re-verified.
