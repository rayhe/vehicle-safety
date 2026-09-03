# Critic Panel — #806 (round 0)
Slug: iihs-september-wave-badge-inversion | Journalist: Vin Wreckage | Date: 2026-09-03

## Hard gates (mechanical, source of truth)
- em_dashes (regex): 0 — PASS (max 3)
- banned phrases: 0 — PASS
- "The" sentence starters: 4.8% — PASS (max 15%)
- CSS: class="story" yes, ../style.css yes, no story-detail/story-content/story-page/story.css — PASS
- sentence-rhythm-check.py: exit 0 — variance 301.4 (≥200), short 14.0% (≤15%), long 46.5% (≥15%) — PASS (after revision: merged 4 choppy fragments)
- JPEG hero: valid (ffd8), RGB, 2352x1008, quality 90, md5 cache-bust ?v=1e6c0dad — PASS

## Scores
1. General Editor — 9.0. Lede lands, structure (lede → table-in-prose → Canyon → wrinkle → counterargument → limits → actionable) holds. Telluride-wrinkle paragraph is the thinnest; acceptable.
2. Voice Coach — 9.0. Distinctly Vin: "fun fact that will ruin your morning commute," "the universe laughs," "the void demands honesty." No swappable-bylines problem. Rhythm gate passes.
3. Ethics Reviewer — 9.0. No identified victims; dark humor aimed at brands and the industry, not the dead. No self-congratulation.
4. Social/Shareability — 9.0. "91x" pull stat and the prestige-inversion headline are built to travel.
5. Legal Accuracy — 9.0. Every factual claim cited to IIHS release, Freep, Autoblog, or FARS. GM quote attributed. Opinion clearly framed as opinion.
6. Research Rigor — 9.0. Original contribution: model-level IIHS-wave × FARS cross-tab with 91x/29x/20x ratios, computed from site data. Counterargument at full strength (redesign mismatch, thin counts, driver-behavior confound). Dedicated limitations paragraph. Verifiable URLs, no invented links.
7. Data Presentation — 9.0. Rates defined per 100M VMT on first use; ratios arithmetic verified (2.73/0.03=91.0, 0.87/0.03=29, 0.59/0.03=19.7, 2.73/0.68=4.0).

Average: 9.0. All ≥8.5, all hard gates pass.

## Revisions applied in round 0
- Merged 4 choppy fragments to fix rhythm short_pct (20.8% → 14.0%).
- Replaced inaccurate "Two value brands" (Tesla is not a value brand) with "Nobody's country club parking lot saw this coming."

## Verdict
Phase → SHIP (queued SHIP_BLOCKED; blocked by 1/day rule, #801 shipped 2026-09-03).
