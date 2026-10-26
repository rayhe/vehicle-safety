# Critic Panel, Round 0: 1284-panther-triplets-three-ways-to-die
Journalist: Rex Driverton. Kicker: The Gap.

## Hard gates (regex, not opinion)
- Em dashes (literal U+2014 in file): 0 (max 3) PASS
- Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack / Let's be clear / Make no mistake / And it's not even close / The numbers don't lie): 0 PASS
- "The" sentence starters: 0 of 27 body sentences, 0% (max 15%) PASS
- CSS: article class="story", links ../style.css, no story.css / story-detail / story-page / story-content PASS
- Sentence rhythm script: PASS (variance 636.0 ≥ 200; short 7.4% ≤ 15%; long 51.9% ≥ 15%)
- Hero: drafts/1284-panther-triplets-three-ways-to-die.jpg, real JPEG (FF D8), 1920x1280, ?v=7f071e95 PASS
- Body words: 519

## Verified arithmetic (recomputed, not trusted from draft)
- Rates: Grand Marquis 2.29, Crown Vic 1.46, Town Car 0.86. Ratios: 2.29/0.86 = 2.66x; 2.29/1.46 = 1.57x; 1.46/0.86 = 1.70x. Rate gap (2.29-0.86)/0.86 = 166%. Correct.
- Own-death shares: 260/323 = 80.5%; 1,153/1,516 = 76.1%; 881/1,349 = 65.3%. Correct.
- Impairment spread: 22.3 - 18.5 = 3.8 points. Correct.
- "Four times out of five" for 80.5%: correct rounding.
- "Fifteen years later": last Panther built Sept 2011, draft Oct 2026. Correct.
- Platform facts (Grand Marquis ended Jan 4 2011; Town Car Aug 29 2011; Crown Vic Sept 15 2011; St Thomas Assembly; Panther from 1979; 4.6L V8; police/taxi Crown Vic duty): verified against Wikipedia/Crown Vic coverage Oct 26, 2026.
- One scope caution, handled in text: "crashes" in the dataset = vehicles involved in fatal crashes (fars_process.py vehicle_count), so deaths/crashes is the share of fatal involvements killing the model's own occupant, not a survival probability. The article states this definition and the disclaimer carries the VMT-estimate caveat.

## Critics
1. General Editor, 9.0: Lede lands the paradox in two sentences, inversion paragraph is the hinge the whole piece turns on, and the close converts data into buyer behavior without preaching. Nit: pull-stat says 2.66x while the text says 2.7-fold; both are the same number rounded differently, acceptable, not a contradiction.
2. Voice Coach, 9.0: Deadpan Rex throughout, no banned phrasing, no catchphrase opener borrowed from the roster (the "numbers don't lie" opener was deliberately NOT used, since it is a banned phrase). Rhythm gate passes after the fragment-merge revision; the piece reads spoken, not metronomic.
3. Ethics Reviewer, 9.0: Aggregates only, no individual victim anecdotes, no gore, no moralizing about drivers. The counterargument paragraph gives the other side full strength instead of strawmanning it.
4. Social/Shareability, 8.5: Headline is a clean paradox share; pull-stat 2.66x is screenshot-ready. Slightly below 9 because the Panther audience skews niche, which caps viral reach no matter how good the hook is.
5. Legal Accuracy, 9.0: No legal claims made; every number traces to FARS via cited links; platform history cites Wikipedia; no recall or defect allegation against any manufacturer. Nothing here creates liability.
6. Research Rigor, 9.0: Original contribution is real (rate ranking inverted against own-death-share ranking on one platform, never done on this site). Limitations, counterargument, and methodology are explicit, including the VMT-estimate uncertainty and the fatal-only scope.
7. Data Presentation, 9.0: Rates, shares, and impairment are each presented once, clearly labeled, with the math shown in the references. The pull-stat isolates the single most surprising ratio.

## VERDICT: SHIP
All 7 critics at 8.5+. Average: 8.93. Round 0, no revision round needed.
Pre-ship note: rhythm gate initially FAILED on short sentences (19.4%) because "St." split a sentence and five fragments stacked up; fixed by merging fragments and writing "St Thomas" without the period. Re-ran: PASS.
