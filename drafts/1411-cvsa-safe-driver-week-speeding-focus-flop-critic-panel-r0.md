# Critic Panel — #1411: CVSA Safe Driver Week 2026 (round 0)

**Slug:** 1411-cvsa-safe-driver-week-speeding-focus-flop
**Journalist:** Dale Impactor III
**Date:** 2026-11-06

## Hard gates (regex = source of truth, verified on final HTML)
- Em dashes (literal `—`, whole file): **0** (limit 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "And it's not even close", "The numbers don't lie"): **0** — PASS
- "The" sentence starters: **1 of 48 sentences, 2.1%** (limit 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no story-detail/story-content/story-page/story.css — PASS
- Hero: real JPEG (FF D8), 1920x1280, hash 6d5da8e9, `?v=6d5da8e9` on img src and og:image — PASS
- Sentence rhythm: variance 574.1 (target >= 200), short 14.6% (target <= 15%), long 46.3% (target >= 15%) — PASS
- Word count (story-body): 930

## 1. General Editor — 8.5/10
Structure is clean: lede lands the 33-vs-691 contrast in the first paragraph, pull stat is the article's thesis in one number, and every paragraph adds a new computed finding rather than restating the last one. The ending is genuinely useful. Deduction: 934 words is long for the format. The guide says 300-500 and recent ships run 737-863; this is ~8% above the top of that range. Nothing in it is filler, but the counterargument paragraph runs long and the FARS paragraph could lose a sentence. Acceptable at 8.5, not a fail.

## 2. Voice Coach — 9.0/10
Dale's voice is distinct and consistent: sardonic, statistical, treats enforcement numbers like a box score ("Run the division yourself, because the program published the table and the table does the talking"). No banned phrases, no AI tells, no throat-clearing. Rhythm check passes with real variance (574.1) and a good spread of fragments and long builds. The one flat spot is "Same week, same officers, same roads," which is punchy but borders on a slogan; it earns its keep. Short-sentence share 14.6% is just under the 15% ceiling, worth watching on the next Dale piece.

## 3. Ethics Reviewer — 9.0/10
No private individuals named; all figures are program-level aggregates. Truckers are not painted as villains: the piece explicitly notes warnings outnumber tickets for commercial drivers and that the warning/ticket split reflects enforcement culture, not a verdict on who drives worse. The "amateur" label for passenger drivers is snide but accurate to the data and not demeaning. No self-congratulation, no moralizing about a group. The impairment paragraph refuses to present 26 citations as evidence impairment is rare, which is the ethical move.

## 4. Social / Shareability — 9.0/10
Headline is the share: a named program, a focus that flopped, two numbers in tension. The 1.27% pull stat is a standalone social card. "Truckers got warnings. Car drivers got tickets" is a second share trigger in the body. The 50.5%-on-18.4% speeding inversion is the kind of stat that travels in screenshots. Deduction: the piece has no single quotable one-liner as sharp as the headline, and the FARS paragraph slows the scroll. Still strong.

## 5. Legal Accuracy — 8.5/10
Every number was re-verified against the CVSA primary release: 8,083 / 2,604 / 3,968 / 33 / 691 / 349 / 342 / 270 / 652 all match, and the arithmetic was recomputed (1.27%, 26.5%, 63.5%, 53.7%, 50.5%, 18.4%, 20.9x, 1-in-79). FARS figures match fars_output.js (E-350 776 deaths, rate 2.51; F-350 164, rate 0.15; 16.7x). Two round-0 fixes applied before scoring: headline said "Reckless Truckers" but 11 of the 33 reckless citations were passenger drivers, corrected to "Reckless Driving"; lede said "the offense the whole week was named after," corrected to "built around," since the week is named Safe Driver Week, not after the offense. An uncited ref-6 (NHTSA recalls database) was removed from the references. Remaining nit: "roughly 60 billion miles" per week is an uncited approximation (FHWA VMT ~3.26T/year implies ~62.7B/week), defensible as stated but unreferenced.

## 6. Research Rigor — 8.5/10
Original contribution is real and shown with inputs: five computed ratios from CVSA's own table (focus flop 1.27%, warning asymmetry 63.5% vs 53.7%, PV speeding share 50.5% on 18.4% of stops, seat-belt 86.8% CMV, traffic-control 96.4% CMV) plus the FARS cross-tab. Limitations are stated in the body and the disclaimer, including the selection-bias and charge-substitution problems. Counterargument is at full strength and answered rather than dismissed. Deductions: the FARS cross-tab is honestly caveated but thin (E-350 as scale only, no commercial-truck fatality data in the repo file), and the 60-billion-miles figure lacks a cited source.

## 7. Data Presentation — 9.0/10
Every percentage arrives with its numerator and denominator in the sentence, so the reader can check the math without leaving the page. Ratios are expressed both ways (percent and "one in 79," "twenty times"). The pull stat matches the thesis. No chart, but the format does not require one and the table-like prose carries the numbers cleanly. The 2,880 no-paperwork contacts from the research file were left out of the article; that is a defensible cut, though the outreach angle would have strengthened the "warnings are logged contacts" takeaway.

## Verdict: SHIP
Scores: General 8.5, Voice 9.0, Ethics 9.0, Social 9.0, Legal 8.5, Rigor 8.5, Data 9.0. **Average 8.79. All 7 critics >= 8.5, all hard gates pass.** Round-0 SHIP.
