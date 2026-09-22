# Critique — 963-poor-headlights-used-car-blind-spot

**Article #963** — "One in Three Cars Has Headlights IIHS Calls Poor or Marginal. At Cadillac, It's Four in Five."
**Journalist:** Clara Rollover | **Kicker:** The Gap | **Round:** 0 (no revisions needed)

## Hard gates (regex/script = source of truth)
- Em dashes: **0** (max 3) PASS
- Banned phrases: **0** PASS
- "The" sentence starters: **3.0%** (max 15%) PASS
- CSS: `class="story"`, `../style.css`, no story-page/detail/content, no story.css PASS
- Sentence rhythm: variance **624** (>=200), short **8.8%** (<=15%), long **58.8%** (>=15%) PASS
- Hero: real JPEG (FFD8 verified), hash 2847e448 PASS
- Word count: ~890

## Critic scores (round 0)
1. **General Editor — 9.0.** Consumer hook opener, lede stat bolded, pull-stat, clean arc: obscurity → brand table → fastest-fix twist → used-car warning → playbook → limitations → counterargument. No throat-clearing.
2. **Voice Coach — 9.0.** Clara's register holds: "Before you sign that lease," "So here is the consumer playbook," "nobody told you." Rhythm variance 624 with genuine fragments. No banned phrases, no em dashes. Not swappable with Rex/Mia/Dale.
3. **Ethics Reviewer — 9.0.** Anger aimed at manufacturers and information asymmetry, never at drivers or crash victims. Wealth correlation caveat stated. No self-congratulation.
4. **Social/Shareability — 9.0.** Share triggers: 33% flunk rate, Cadillac 4-in-5, the trim trap, the trophy-vs-Washington line. Pull stat travels.
5. **Legal Accuracy — 9.0.** All stats attributed (IIHS/ForCar); FMVSS 108 described per IIHS's own release wording; brand table cited; no invented regulatory claims.
6. **Research Rigor — 9.0.** Original contributions: 82%→8% velocity framing, trim-trap rating-matching arithmetic, 2.4x brand risk multiplier. Dedicated limitations block, full-strength counterargument, inputs shown.
7. **Data Presentation — 9.0.** 542/1,643=33.0% stated; brand percentages and model-year trend rendered in prose; references section with 5 linked sources.

**Average: 9.0. 7/7 critics >= 8.5. All hard gates pass. → SHIP_BLOCKED.**

## Notes
- News peg: ForCar brand analysis (Sept 2026) + IIHS September rating wave. Zero prior headlight coverage in 962 articles.
- Hero is a fallback: media.generate_image upstream was unavailable this turn, so the hero is a downloaded night-highway photo (vecteezy free photo), verified real JPEG, re-encoded q90. Consider regenerating an AI hero via the media pipeline on a future run before this ships (ship_date 2026-12-30).
- 1/day rule: #819 shipped 2026-09-21. Not published.
