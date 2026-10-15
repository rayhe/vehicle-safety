# Critic Panel — #1175: IIHS work-truck crash-avoidance flunk (Round 0)

**Journalist:** Rex Driverton | **Kicker:** The Gap | **Slug:** `1175-iihs-work-truck-crash-avoidance-flunk`
**Date:** 2026-10-15 | **Panel:** 7 critics, /10 each, ship threshold 8.5+

## Pre-panel hard gates (regex/script = source of truth)

- Literal em dashes (`grep -o '—'`): **0** (PASS, max 3)
- Banned phrases (11-pattern sweep incl. "The kicker", "game-changer", "unpack", "The numbers don't lie"): **0** (PASS)
- "The" sentence starters: 4/50 = **8.0%** (PASS, max 15%)
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **1823.9** (≥200 PASS), short **7.3%** (≤15% PASS), long **63.6%** (≥15% PASS)
- CSS: `class="story"` ✓, `../style.css` ✓, no story-detail/story-content/story-page ✓
- Hero: real JPEG (FFD8), 1920×1280, `?v=5dc617e1` ✓
- Word count: 1341
- Pre-panel revisions: lede "seven tons of steel" → "four tons of truck" (test weight is curb, not GVWR ceiling); "twenty-nine years" → "thirty years" (Express on sale since 1996); body rewrite pass to fix rhythm (short 23.1%→7.3%) and The-starters (36.1%→8.0%)

## 1. General Editor — 8.7

Lede opens mid-thought with the F-350's 43-mph non-braking test and lands the 6,215-death stat in the same paragraph. Structure is clean: ratings rundown, the two buried details (motorcycles, children), the energy math, the gradient, the regulatory gap, full-strength counterargument, actionable block, limitations. The two pull-stats break up the density well. Deduction: 1,341 words is ~50% over the site's recent norm (600–900). The actionable paragraph is a run-on list of five directives; it works but it's doing a lot of lifting in one breath. Not a gate issue, but a trim would have sharpened it.

## 2. Voice Coach — 9.0

Distinctly Rex: deadpan noir ("which is the entire job description of a test dummy", "institute-speak for we are about to make your life difficult", "stopped being an explanation and became an alibi"). Not swappable with Vin's unhinged philosopher or Clara's espresso consumer-advocate. No banned phrases, no AI tells, sentence rhythm passes all three sub-gates with real variance (fragments, mid-length builds, long constructions). Minor: "Read that again, because the symmetry is the story" flirts with throat-clearing but earns its keep as a transition. The catchphrase opener ("The numbers don't lie...") was deliberately NOT used — it's on the banned list.

## 3. Ethics Reviewer — 9.0

Moral reasoning is sound: blame lands on the regulatory gap and manufacturers, not on individual truck drivers (explicitly exonerated in the counterargument: "the ratings grade the technology rather than the drivers"). Vulnerable road users get specific, useful guidance (motorcyclists, parents) without victim-blaming. No sensationalism beyond what the data supports; the 6,215 figure is carefully framed as "involving" not "caused by" in the limitations. The Express/Savana criticism is aimed at a product decision, not people.

## 4. Social/Shareability — 8.8

Three shareable numbers: "0 of 4", "4.4-to-1", "1.9x". The headline is punchy without clickbait lying (IIHS did grade them; they did fail). The motorcycle-invisibility and child-blind-spot details are the two most likely quote-tweeted lines. Slight deduction: the KE math paragraph, while rigorous, is the least skimmable stretch — the social reader gets the ratio but not the journey.

## 5. Legal Accuracy — 8.8

All quotes brief and attributed (Harkey, Kidd). Ratings are IIHS's own published grades; characterizing them as "flunked" is protected opinion on public data. No individual or company is accused of wrongdoing beyond what the ratings and Kidd's own regulatory-gap statements establish. The Express "1996-vintage" and "thirty years" claims are now arithmetically correct. "No automatic emergency braking at any price" for Express/Savana is sourced to GM Authority's coverage. No defamation exposure.

## 6. Research Rigor — 9.2

Original contribution is real: the inverse safety gradient (GVWR up, avoidance down, lethality up) is drawn from the ratings tables but not stated by any outlet; the KE calculations (865k vs 198k ft-lb, 4.4:1; (43/31)² = 1.9x) are shown with inputs and assumptions. Limitations are explicit and honest (track vs. real world, n=11, curb-vs-GVWR caveat, involving-vs-caused, avoidance-vs-mitigation). Counterargument is stated at full strength (pro drivers, harder physics, mitigation saves lives) and partially conceded. Every factual claim traces to a cited, checkable source. Six primary/secondary sources: IIHS news index, Autoblog, Jalopnik, Carscoops, Detroit Free Press, GM Authority, plus IIHS ratings and FARS links.

## 7. Data Presentation — 9.0

Ratings presented as clear prose lists rather than a table (fits the voice); the energy math shows its work; pull-stats isolate the two key numbers; the involving-vs-caused distinction is made twice (body + disclaimer). Minor: a small table of the 11 ratings would have been more scannable, but the prose list is complete and accurate.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 8.7 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social/Shareability | 8.8 |
| Legal Accuracy | 8.8 |
| Research Rigor | 9.2 |
| Data Presentation | 9.0 |
| **Mean** | **8.93** |

All 7 ≥ 8.5. All hard gates pass. **VERDICT: SHIP (round 0).**
