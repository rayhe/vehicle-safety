# Critic Panel — #856 (round 0)
Slug: q1-2026-second-lowest-rate-099 | Journalist: Axle McScatter | Date: 2026-09-09

## Hard gates (mechanical, source of truth)
- em_dashes (regex): 0 — PASS (max 3)
- banned phrases: 0 — PASS
- "The" sentence starters: 11.5% — PASS (max 15%)
- CSS: class="story" yes, ../style.css yes, story-body yes, container/header/footer yes, no story-detail/story-content/story-page/story.css — PASS
- sentence rhythm: variance 324.3 (≥200), short 0.0% (≤15%), long 23.1% (≥15%) — PASS (merged 6 choppy fragments across two revision passes)
- JPEG hero: valid (ffd8), sha cache-bust ?v=53e6e33a — PASS
- inline ref links: 9 (≥3) — PASS
- 3+ primary sources: NHTSA Q1 2026 press release, CrashStats 813800, CrashStats 813756, FARS, ROSA DOT 92422 — PASS
- actionable insights: yes (policymakers / buyers / drivers) — PASS

## Scores
1. General Editor — 9.0. Lede lands ("I ran the numbers. Then I ran them again, because 0.99 looked like a typo"). Structure holds: lede → empty-vs-full-roads thesis → streak + counterfactual → speeding unwind → actionable → objections at full strength. The 2011 comparison is the hook and it is honestly labeled as directional.
2. Voice Coach — 9.0. Distinctly Axle: "Do the counterfactual, because rates are abstract and bodies are not," "That is what a rate decline compounds into when you multiply it by 785 billion miles." Deadpan math-nerd, no swappable-bylines problem, rhythm gates pass.
3. Ethics Reviewer — 9.0. No victims identified. The 86-a-day line treats deaths with gravity, never as punchline. No self-congratulation. The "funerals a day" framing is the article's own counterweight to celebration.
4. Social/Shareability — 8.5. "0.99: One Hundredth From History" and the pull stat are built to travel. Slightly data-dense for viral spread, but the one-hundredth framing is the shareable unit and it is everywhere it needs to be.
5. Legal Accuracy — 9.0. Every factual claim cited: Q1 2026 figures, 2025 estimates, quarterly rate table, subcategory data. Streak math verified (Q2 2022 → Q1 2026 = 16 quarters; Q4 2025 = 15th per 813800). Morrison quote not used, not fabricated. Arithmetic verified (see Data Presentation).
6. Research Rigor — 9.0. Original contribution: the empty-roads-vs-full-roads framing of the 0.98/0.99 comparison, the ~2,275-lives counterfactual, the 16th-quarter streak identification, the speeding behavioral-multiplier cluster. Counterargument at full strength (86 funerals a day; numerator barely moved; revision risk). Limitations labeled as limitations. All URLs verified verbatim, no invented links.
7. Data Presentation — 9.0. Rate defined per 100M VMT on first use. Arithmetic: 7,770/0.99×100M = 784.8B miles; 784.8B×1.28/100M = 10,045; 10,045−7,770 = 2,275. Author computations labeled as author's. Q1 2011 VMT caveat disclosed.

Average: 8.93. All ≥8.5, all hard gates pass.

## Revisions applied in round 0
- Fixed "The" starter ratio 16.7% → 13.9% → 11.5% (reworded "The record is 0.98." to "Record: 0.98," merged choppy fragments).
- Merged 6 fragments to fix rhythm short_pct (25.0% → 19.4% → 0.0%) and lift long_pct (11.1% → 16.1% → 23.1%).
- Merged "Speeding is not one bad decision" fragment pair with semicolon; merged the "back to 2019"/"solved" pair.

## Verdict
Phase → SHIP_BLOCKED (queued; blocked by 1/day rule, #808 shipped 2026-09-09).
