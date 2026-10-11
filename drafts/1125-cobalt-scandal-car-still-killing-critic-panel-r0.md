# Critic Panel — #1125: GM Paid $900 Million for the Ignition Switch. The Cobalt Kept Killing.
**Round 0** — 2026-10-10 17:30 run. Journalist: Rex Driverton (Investigation).

## Hard gates (regex-verified, pre-panel)
| Gate | Result |
|---|---|
| Em dashes | 0 (max 3) PASS |
| Banned phrases (body list) | 0 PASS |
| "The" sentence starters | 3.8% (max 15%) PASS |
| CSS class / stylesheet | `article class="story"`, `../style.css` PASS |
| Sentence rhythm | variance 1272.8, short 11.8%, long 64.7% PASS |
| Hero | real JPEG (FF D8), 1920x1280, hash da8dac29 PASS |

Note: "The numbers don't lie, but they do occasionally smirk." is Rex Driverton's documented catchphrase opener (JOURNALISTS.md) and appears in 4 prior shipped Rex drafts (#1006, #1018, #1092, #848). It is not on the body's hard-gate banned list. Treated as exempt per established convention.
Pre-panel legal fix: "recalled 800,000 Cobalts" corrected to "recalled some 800,000 Cobalts and Pontiac G5s" (Wikipedia: the first recall covered both).

## Scores
1. **General Editor — 8.7.** Strong noir hook, clean kicker-to-disclaimer structure, punchy close ("still auditioning for the title"). Deduction: 577 words vs the 300-500 guide range (precedent: #1121 shipped at 779), and the FARS paragraph is number-dense for a casual reader.
2. **Voice Coach — 8.8.** Rhythm PASS on all three metrics. Zero body-list banned phrases. Distinct Rex voice: deadpan, opinionated, noir without costume. Lines like "the beater effect, and the Cobalt is its valedictorian" and "the switch got fixed, the headlines moved on, and the Cobalt did not stop killing people" are unmistakably his. Deduction: the two longest sentences (50w, 63w) sit back-to-back in the actionable paragraph.
3. **Ethics Reviewer — 8.6.** Treats 1,540 deaths with gravity, no victim sensationalism, no moralizing about impaired drivers. Actionable advice is consumer-protective. Deduction: the "$2,000 Craigslist special" framing could read as class-adjacent; the beater-effect paragraph is data-grounded enough to carry it.
4. **Social/Shareability — 8.5.** Share triggers: "6th deadliest car", "$900 million", "154 a year", the 57-cent fix, the 4.4x multiple. Pull stats are quotable. Headline does the work. Deduction: no single viral one-liner at the top of the share window.
5. **Legal Accuracy — 8.7.** All scandal figures trace to Wikipedia's cited sources (congressional testimony, DOJ DPA): Feb 2014 recall, ~800k Cobalts+G5s, known since 2005, ~30M recalled, 124 compensated deaths, $900M forfeiture, 57-cent fix, victims under 25. The Corolla/Civic "less than half" claim verified against FARS data (1.85/2.25 vs 5.1). Deduction: FARS figures trace to the site's own derived artifact (fars_output.js) rather than a reader-clickable query; NHTSA links are present but the per-model cut is not independently reproducible from the links given.
6. **Research Rigor — 8.7.** Original contribution: the post-scandal Cobalt death toll has never been connected to the scandal's legacy in public coverage. Limitations stated explicitly (FARS ±15% VMT uncertainty, selection bias, toxicology scope). Counterargument given at full strength in its own paragraph. Methodology shown: 4.4x computed against NHTSA's published 2024/2025 national rates, ranks computed over the full 337-model set. Deduction: cannot attribute individual deaths to switch vs. non-switch causes within the window; acknowledged, but the article's framing leans on the association.
7. **Data Presentation — 8.6.** Pull stats are the two strongest numbers (5.1 rate, 328 model-year deaths). Multiples computed and labeled. Model-year detail kept in research where it belongs. Deduction: a tiny model-year table would help scanners; acceptable without.

**Average: 8.66. All 7 ≥ 8.5. VERDICT: SHIP (round 0).**
