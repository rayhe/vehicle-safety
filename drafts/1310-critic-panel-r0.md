# Critic Panel — 1310-great-dane-landing-gear-collapse-petition (round 0)

## Hard gates (regex-verified, source of truth)
- Em dashes (literal): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "And it's not even close", "The numbers don't lie"): **0** — PASS
- "The" sentence starters: **3/35 = 8.6%** (max 15%) — PASS
- CSS: `article class="story"` (not story-detail/story-content/story-page), links `../style.css` (not ../story.css) — PASS
- Hero: real JPEG, magic ffd8, 1920x1280, 521,046 bytes, hash 35cd27a5 — PASS
- Sentence rhythm (sentence-rhythm-check.py --json): variance 1521.8 (>= 200), short 10.0% (<= 15%), long 70.0% (>= 15%) — **PASS**

## Scores
1. **General Editor — 8.5.** Lede opens mid-thought with Mia's adapted opener; structure lede → explainer → pull stat → chronology → supplier layer → actionable → limitations → counter holds together. Headline runs long (17 words) but carries the news and the number. Pull-stat placement after the physics explainer gives it room to land.
2. **Voice Coach — 9.0.** Mia voice is distinct: technical enthusiasm ("the least glamorous load path"), structural judgment, adapted catchphrase opener. Zero banned phrases, zero em dashes. Rhythm passes with varied fragments ("It is a citizen raising a hand and saying: look at this.") against long technical builds. Long_pct 70% is heavy but consistent with her forensic density; the short punches break it up.
3. **Ethics Reviewer — 9.0.** No named victims, no invented injury claims, petition treated as a petition rather than a verdict. The company gets its due (self-reported welds, fast voluntary recalls) inside the article, not just in the counter.
4. **Social/Shareability — 8.5.** Headline is specific and news-bearing; pull stat "5" is card-ready. Kicker "Investigation" fits the taxonomy. The Jost supplier angle is the quotable insight.
5. **Legal Accuracy — 9.0.** Petition vs. investigation vs. recall distinction held throughout; "around January 2027" for the ~120-day petition clock is correctly hedged; every unit count and date traced to a cited source. No crash/injury figures invented for DP26012.
6. **Research Rigor — 9.0.** Original contribution: five-file pattern synthesis (no outlet connected DP26012 to the four prior Great Dane structural actions) plus the Jost supply-chain layer. Dedicated limitations paragraph; counterargument stated at full strength and partially conceded, which is correct scholarship.
7. **Data Presentation — 8.5.** Pull stat "5" is a count of federal actions, explicitly caveated as not a failure rate. Chronology carries dates, unit counts, and defect descriptions. No invented numbers.

**Average: 8.79. All critics >= 8.5 and all hard gates pass.**

## VERDICT: SHIP (round 0, no revisions needed)
