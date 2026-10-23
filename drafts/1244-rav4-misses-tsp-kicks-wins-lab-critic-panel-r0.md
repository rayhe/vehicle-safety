# Critic Panel — Round 0: 1244-rav4-misses-tsp-kicks-wins-lab
**Article:** "The All-New RAV4 Flunked IIHS's Top Safety Award. The Winner Has Triple the Real-World Death Rate."
**Journalist:** Clara Rollover | **Date:** 2026-10-22 17:30 run

## Hard gates (regex counts, source of truth)
- Literal em dashes (grep -o '—'): 2 — both in <head> meta tags, 0 in body text. PASS
- &mdash; entities in body text: 0 (title template + footer boilerplate only). PASS
- Banned phrases: 0. PASS
- "The" sentence starters: 1/35 = 2.9% (≤15%). PASS
- CSS: class="story", ../style.css. PASS
- Sentence rhythm: variance 516.9 (≥200), short 12.5% (≤15%), long 50.0% (≥15%). PASS (exit 0)
- Hero: JPEG 1920x1280, sha8 fce47d18. PASS
- Word count: ~477. PASS

## Critic scores
1. **General Editor — 9.0.** Kicker→headline→lede with bolded stat→pull stat→body→references→disclaimer, all present. Clara's catchphrase opener used verbatim. No throat-clearing; starts mid-thought. PHEV paragraph is the sharpest three sentences in the draft.
2. **Voice Coach — 8.8.** Distinct Clara voice: direct, consumer-advocate, mildly furious. Real opinions ("the lab just vetoed that plan", "the verdict deserves a raised eyebrow"). No banned phrases, no swap-able byline. Minor: "Fairness requires the counterargument at full strength" reads like a pipeline instruction leaking into prose; costs 0.2, not a rewrite.
3. **Ethics Reviewer — 9.0.** No victim-blaming, no moralizing about buyers, no self-congratulation. "Deadliest on the road" is a factual rate claim, not a judgment of owners. Counterargument given at full strength.
4. **Social/Shareability — 9.0.** Three share triggers: the award miss, the 3.6x rate inversion, the jamb-sticker check. Pull stat is quotable. Headline carries the whole story.
5. **Legal Accuracy — 9.0.** All five citations verified live (IIHS go.iihs.org/2026RAV4 test CEF2629, CarBuzz, Autoblog, Printz/wetalkcars, nhtsa.gov FARS). Chest index 36 / belt tension 3.9 kN from the IIHS technical table. No legal assertions beyond rating facts.
6. **Research Rigor — 9.0.** Novel: (a) lab/road divergence (Kicks 0.69 vs RAV4 0.19 = 3.63x, where #960 showed agreement), (b) PHEV penalty inference hedged as observation not mechanism, (c) second build-date asterisk in two months. Limitations stated in dedicated paragraph + disclaimer. Verifiable claims hyperlinked.
7. **Data Presentation — 8.7.** Rates carry denominators, comparison math explicit, pull stat contextualized. No chart, but format doesn't require one.

## Verdict: SHIP (avg 8.93, 7/7 ≥ 8.5, all hard gates pass)
