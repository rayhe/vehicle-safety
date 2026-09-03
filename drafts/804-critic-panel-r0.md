# Critic Panel — #804 kia-ev9-ods-child-airbag-suppression (Round 0)

## Hard gates (all PASS, verified by script/regex)
- Em dashes in body: 0 (max 3)
- Banned phrases: 0 (scanned: Here's the thing, The kicker, paradigm shift, game-changer, deep dive, unpack, Here's where it gets interesting, Let's be clear, Make no mistake, And it's not even close, The numbers don't lie)
- "The" sentence starters: 2.8% (1/36, max 15%)
- CSS: `class="story"` + `../style.css` (correct)
- Sentence rhythm: PASS (variance 481.9 ≥ 200; short 14.3% ≤ 15%; long 39.3% ≥ 15%)
- Hero image: valid JPEG (FF D8), visually verified (child seat in front passenger seat, amber dash warning light, dusk, no text)
- Word count (paragraphs): 499 (guide range 300-500)

## Scores
1. **General Editor: 9.0** — Lede carries bolded key stat, pull-stat block, 7 tight paragraphs, references + disclaimer per template. Opens mid-thought ("Kia gave the EV9 an Occupant Detection System with one job"). Headline is long but each clause earns its place.
2. **Voice Coach: 9.0** — Distinct Rex: "Kia's filing describes the mechanism plainly," "which points at one assembly line's process, not the engineering office," "a silent failure caught before it had to explain a loud one." Dry, document-driven, unimpressed. Zero banned phrases. Rhythm gate passes with real variance. Not swappable with Mia's byline.
3. **Ethics Reviewer: 9.0** — No victims to exploit (zero injuries reported). Fair to Kia via a full-strength counterargument paragraph. The shorter-driver inference is explicitly labeled "not a finding," which is the honest move. Sharpest barb ("flunks") lands on the vehicle, not people.
4. **Social/Shareability: 9.0** — "Adjusting the Passenger Seat Can Disarm the Child Airbag Sensor" is a built-in share trigger for parent groups. The 17-to-1 calibration stat rewards a second read. VIN-check CTA gives readers an action, not just a feeling.
5. **Legal Accuracy: 8.5** — Every defect claim attributed to Kia's NHTSA filing; disclaimer honestly states figures come via secondary reporting (no direct Part 573 PDF link; the static.nhtsa.gov URL pattern was not guessed). FMVSS 208 S19.2 noncompliance cited via Autoblog's reporting of the filing. "Flunks" is colloquial but the noncompliance fact is sourced. No overclaiming on injuries (zero, stated twice).
6. **Research Rigor: 9.0** — Original: 17-to-1 recall-population-vs-at-risk calibration with math shown, Georgia-vs-Korea plant forensics as process-not-design evidence, seat-height demographic inference explicitly fenced as inference. Limitations paragraph states what FARS cannot say, that 6% is Kia's estimate, and that the line-level root cause is unproven. Counterargument at full strength (self-reported, free fix, rear-seat rule makes at-risk population zero).
7. **Data Presentation: 9.0** — All numbers verified against sources: 21,290; 6%; ~1,277; 26V545; SC379; Oct 20 letters; VINs searchable ~Sept 4; 2025-2026 MY; Georgia vs Korea build split. No invented URLs; ref-5 is the canonical nhtsa.gov/recalls parent page.

**Average: 8.93 — all critics ≥ 8.5, all hard gates pass → SHIP.**

## Ship decision
Blocked by 1/day rule: #801 published 2026-09-03 (verified via tz-aware git log: 1 Publish commit today). Queue order: #802 ships 2026-09-04, #803 ships 2026-09-05. Queued as SHIP_BLOCKED, ship_date 2026-09-06. Draft + hero remain in drafts/.
