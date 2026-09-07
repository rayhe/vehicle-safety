# Critique: #827 — Rex Driverton — "Waymo's Cars Crash 68% Less Than Humans. The Humans Inside Keep Getting Whiplash." (Round 1)

## Hard gates (mechanical, source of truth)
- Literal em dashes (`grep -o '—'`): **0** — PASS (≤3)
- Banned phrases (Here's the thing / Here's where it gets interesting / The kicker / Let's be clear / Make no mistake / And it's not even close / The numbers don't lie / inflection point / paradigm shift / game-changer / deep dive / unpack / The uncomfortable truth): **0** — PASS
- "The" sentence starters: 7.7% (4/52, one is the H1 headline) — PASS (≤15%)
- CSS class check: `article class="story"` ✓, `../style.css` ✓, `story-hero` ✓, `story-references` ✓ — PASS
- Sentence rhythm: variance 776.2 (≥200 ✓), short 14.6% (≤15% ✓), long 51.2% (≥15% ✓) — PASS
- Hero image: real JPEG (FF D8), 2048x1152, md5 d29268435d815cb4e6c42e4ad9cdf54b, genuine Waymo I-Pace photo, no text overlay — PASS
- References section present with 6 linked refs; every factual claim has an inline citation — PASS
- Actionable insights ("What to do:") present — PASS
- Limitations ("What this does not prove:") present — PASS
- Strongest counterargument present at full strength — PASS

## 7-critic panel

1. **General Editor — 9.0.** Arc is clean: paradox lede with bolded key stat → mechanism (brake jabs, nogos, the 45-mph quote) → recall that didn't end it → surveillance blind spot → action → limitations → counterargument. Matches the Crash Report template exactly (kicker, byline, dateline, hero, pull stat, references, disclaimer, footer). Rex's noir opener ("Somewhere in the marketing department, there is a slide that says 68 percent") starts mid-thought with zero throat-clearing. The closer ("Both things are true at once. That is usually when you should pay the closest attention.") lands.

2. **Voice Coach — 9.0.** Distinctly Rex: deadpan noir-detective energy, dark humor that never becomes slapstick ("The word 'narrow' is doing a great deal of heavy lifting in that sentence"), fragments that land ("There is no typo.", "Perhaps.", "Read that last one again."). Zero em dashes, zero banned phrases. Rhythm script passes with real variance (short punches + long builds). Cannot swap this byline with Dale (sports-stats), Vin (existential), or Axle (tables) without a full rewrite.

3. **Ethics Reviewer — 9.0.** No victim-blaming; test drivers treated with sympathy ("professional guinea pigs in prototype vehicles, absorbing risk so the rest of us never have to"). Zoox's denial ("extremely narrow braking behavior... unrelated") presented fairly and not strawmanned. No policy cheerleading beyond what the evidence supports. "Coroner's van" is vivid but deployed inside the counterargument in service of steelmanning, not shock.

4. **Social/Shareability — 9.0.** Headline is the share: brand names + paradox + the 68% figure readers already know. Pull stat 24+ is a quotable unit. "Its only sensor is the employee, and the entire business plan is to remove the employee" is the line people will repeat. "Different denominators tell different stories, and the industry only publishes the flattering one" is a second share trigger.

5. **Legal Accuracy — 9.0.** March 2025 Zoox recall (258 vehicles) tied to Reuters and NHTSA; 25E-029 cited to the actual NHTSA PDF; OSHA 100-employee threshold dual-cited to TechCrunch (the source of the specific claim) and OSHA's ITA page; regulatory recommendations framed as policy suggestions, never legal advice. No overstatement of anonymous contractor claims; their unverifiability is stated in limitations.

6. **Research Rigor — 9.0.** Original contribution: (a) the risk-transfer framing — phantom-braking as an occupant injury mechanism, the avoided pedestrian strike purchased with whiplash risk; (b) the surveillance paradox — OSHA's only sensor is the employee the business plan removes; (c) the recall-failure observation — 4 of 8 2025 Zoox injuries post-date the March 2025 unexpected-braking recall, with brake jabs reported through July 2026. Dedicated limitations section: OSHA slice (100+ employees, higher-hazard, 2024-2025 only), 2026 submission lag, no public testing miles so no per-mile rate, worker self-attribution uncertainty, FARS inapplicability stated outright. Counterargument given full strength (Zoox's defense + the dead-child point) and answered honestly. All URLs copied verbatim from pages actually opened this run.

7. **Data Presentation — 9.0.** 24+ pull stat matches "more than two dozen"; 16 Transdev/Waymo vs 8 Zoox split preserved; 157/175 days away from work exact; 258-vehicle recall exact; 68% and 16x attributed to IIHS study and Waymo's own claim respectively; 2 NHTSA rear-end crashes in eight months sourced. No chart needed for an investigation story; no invented numbers anywhere.

**Average: 9.0. All 7 critics ≥ 8.5. All hard gates pass. → QUEUED (1/day rule: #804 published 2026-09-06; #811 SHIP_BLOCKED until 2026-09-13).**

## Round-1 revisions applied (pre-score)
- "lost 157 workdays" → "spent 157 days away from work" (matches TechCrunch's unit; "workdays" implied business days).
- "lost 175" → "spent 175 days away" (was missing the unit entirely).
- Counterargument "lost 175 workdays" → "spent 175 days away from work" (consistency).
- 100-employee OSHA threshold claim now dual-cited [1]+[4] (was [4] only; the specific threshold comes from TechCrunch's reporting).
- 6 "The"-starter sentences rewritten → 7.7% (was 19.2%, failing).
