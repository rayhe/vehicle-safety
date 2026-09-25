# Critic Panel r0 — #987 "The Crash Test Didn't Get Harder. The Trucks Did."
**Date:** 2026-09-25 03:40 PDT | **Journalist:** Rex Driverton | **Round:** 0

## Hard gates (regex = source of truth)
- Em dashes: 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 1/35 (2.9%, max 15%) — PASS
- CSS class `class="story"`: present; no story.css/story-page/story-detail/story-content refs — PASS
- stylesheet `../style.css` — PASS
- Sentence rhythm: variance 454.3 (>=200), short 12.5% (<=15%), long 59.4% (>=15%) — PASS (exit 0)
- Hero: real JPEG 1920x1280, first bytes FFD8, ?v=88b90290 on all 3 refs — PASS
- Prose word count ~590 (refs+disclaimer excluded); refs section present with 4 linked sources — PASS

## 1. General Editor — 8.7
Lede buries nothing: the 82% figure lands in sentence three, bolded. The pull-stat (17% -> 5%) earns its placement. The middle FARS paragraph is the densest but it is the original contribution, so density is justified. Deduct: the final paragraph's closing line ("pretend the test got harder") repeats the headline thesis nearly verbatim; a fresh closing image would land harder.

## 2. Voice Coach — 8.8
Rex's deadpan is present throughout: "the test equipment was too skinny," "the parking lot outside your office," "roughly the speed of light" replaced by the headlight line (good, less cliche). No banned phrases, no em dashes, rhythm genuinely varied (sentence lengths 3 to 40 words). If you swapped in Mia Crumplezone's byline it would feel wrong, which is the test. Deduct: "Victory seems premature" is a slightly reviewer-ish transition for Rex; forgivable.

## 3. Ethics Reviewer — 9.0
No crash victims named or exploited. No moralizing at drivers. The structural critique targets the fleet, not individuals. The actionable paragraph respects the reader's agency. No self-congratulation.

## 4. Social / Shareability — 8.5
Headline is a thesis you can argue about at a barbecue. Pull stat is quotable. The "3,300-pound world" closer is the line people will screenshot. Deduct: no single-sentence kicker-quote engineered for sharing, and the topic (test methodology) is inherently drier than a recall scandal.

## 5. Legal Accuracy — 9.0
All figures traced: 82% energy and the 3,300/4,200 barrier specs to the IIHS news release; the 2023-2026 failure census attributed to ForCar as a compiler of IIHS ratings (not presented as primary); FARS class rates computed from the site's own fars_output.js with the NHTSA FARS link. Harkey paraphrase attributed by name to IIHS's president. Nothing defamatory, no invented URLs.

## 6. Research Rigor — 8.8
Original contribution: the FARS_BY_MODEL class cross-tab (191,193 deaths; sedan median 0.68 vs SUV 0.35; 46.6% sedan share; Accord/Cobalt/Impala outliers). Limitations stated explicitly in the disclaimer: VMT-estimate uncertainty, no side-impact isolation in the dataset, driver-behavior confounding. Counterargument given at full strength (the fix worked fast; barrier protects truck occupants too). Deduct: the ForCar census was not independently re-counted; presented as their compilation, which is honest but second-hand.

## 7. Data Presentation — 8.8
Pull-stat with arrow notation, 82% energy figure with the 42%/82% split available in the source, census trend rendered as a 17->10->6->5 sequence in prose. Numbers are rounded where appropriate (5.4% -> 5%). Deduct: the census table itself is not rendered as an HTML table; prose carries it, which works but a table would scan better.

## VERDICT: SHIP (avg 8.77, all 7 >= 8.5, all hard gates PASS)
Round-0 ship. No revision round needed. Blocked reason: 1/day rule consumed by #752 on 2026-09-25; assigned next queue slot.
