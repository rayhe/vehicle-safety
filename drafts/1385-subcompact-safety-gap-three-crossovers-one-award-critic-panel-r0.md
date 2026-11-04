# Critic Panel — #1385: Three Cheap Crossovers Walk Into IIHS. Only One Walks Out With an Award.
**Round:** 0 | **Journalist:** Clara Rollover | **Date:** 2026-11-04
**Draft:** drafts/1385-subcompact-safety-gap-three-crossovers-one-award.html
**Hero:** drafts/1385-subcompact-safety-gap-three-crossovers-one-award.jpg (real JPEG, 1920x1280, hash 1452c28f)

## Hard gates (regex counts are the source of truth)
- Em dashes (literal): 0 (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus extended STORY_GUIDE list): 0 — PASS
- "The" sentence starters: 0 of 25 body sentences, 0.0% (max 15%) — PASS
- CSS class: `class="story"`, no story-detail/story-content/story-page — PASS
- Stylesheet: `../style.css`, no story.css — PASS
- Sentence rhythm (sentence-rhythm-check.py --json): PASS — variance 695.4 (>= 200), short 7.4% (<= 15%), long 66.7% (>= 15%)
- Body words: 649 (guide says 300-500; recent shipped precedent: #1382 698, #1384 749-982 by the same count, so within current practice; noted, not gated)
- Hero: real JPEG (FF D8), og:image and img src both carry ?v=1452c28f — PASS

## 1. General Editor — 9.0/10
Kicker, headline, lede with bolded key stat, pull-stat, body, references,
disclaimer all present in template order. The lede lands the verdict in two
sentences and the scorecard paragraph makes the comparison scannable without
a table. Deduction: length runs past the guide's 500-word norm, though it
sits below the last three shipped articles.

## 2. Voice Coach — 9.0/10
Clara's buying-guidance voice is unmistakable: the "Before you sign that
lease" close, the shopper-addressed action items, the refusal to score a
blank test as a failure. No banned phrases, no AI tells flagged, rhythm
passes on all three metrics. Deduction: sentences skew long (script mean
34 words); the short punches that remain are doing heavy lifting.

## 3. Ethics Reviewer — 9.5/10
No victim stories exploited, no model shamed beyond its test record, and
the two honesty moves that matter are both in the text: "not tested" is
explicitly not a failure, and the Seltos verdict is fenced to the outgoing
generation. No score inflation, no buried caveat.

## 4. Social/Shareability — 8.5/10
Headline is a joke with a payload, and "1 of 3" is a clean pull-stat for
cards. The Good/Acceptable/Marginal scorecard reads well in a screenshot.
Deduction: the piece has no single-sentence outrage quote; its share
trigger is the comparison itself, which is strong but not viral.

## 5. Legal Accuracy — 8.5/10
Every rating traces to Autoblog's Nov 1, 2026 IIHS-sourced comparison,
cross-checked against IIHS's Mar 24, 2026 awards announcement (2026 bar
change, Kona $25,500 cheapest small SUV) and Hyundai's awards release.
No URLs invented; all links are verbatim from sources or the guide's
reference table. Softest claim, flagged honestly: the headline's "Cheap"
leans on Autoblog's below-$30,000 segment framing plus the Kona's sourced
$25,500; no Corolla Cross or Seltos price is claimed anywhere in the body.

## 6. Research Rigor — 8.5/10
Original contribution is the three-way cross-tab: nine crash-test cells
plus the prevention grid, showing failures in three different tests, so
no single fix rescues both losers. Limitations and strongest
counterargument are stated at full strength, including the lab-vs-reality
gap and the unevaluated 2027 Seltos. Deduction: ratings reach the reader
via Autoblog's reporting rather than IIHS model pages cited directly;
the IIHS parent ratings index is linked instead.

## 7. Data Presentation — 9.0/10
Counts verified: Kona 3 Good; Corolla Cross Good/Acceptable/Good;
Seltos Good/Acceptable/Marginal; prevention grid Kona Good/Good,
Cross Not tested/Good, Seltos Poor/Acceptable; problem-cell tally
(Kia 3, Toyota 1 soft + 1 blank, Hyundai 0) is arithmetic on the cited
tables and checks out. Prose scorecard is clear; a literal table would
have been marginally easier to scan.

## VERDICT: SHIP
Average: (9.0 + 9.0 + 9.5 + 8.5 + 8.5 + 8.5 + 9.0) / 7 = **8.86**.
All 7 critics at 8.5+ AND all hard gates pass. Round 0, no revision needed.
