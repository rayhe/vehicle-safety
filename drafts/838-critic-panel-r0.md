# Critic Panel — #838 (Round 0)

Article: `838-right-on-red-1975-oil-law-pedestrian-toll.html` | Rex Driverton | Kicker: Investigation
Date: 2026-09-07

## Hard gates (mechanical, run before scoring)
- Em dashes (regex `grep -o '—'`): **0** — PASS (max 3)
- Banned phrases (body list + STORY_GUIDE list): **0** — PASS
- "The" sentence starters: **7.2%** — PASS (max 15%)
- Sentence rhythm: **PASS** (variance 1415.1 ≥ 200; short 9.7% ≤ 15%; long 74% ≥ 15%)
- CSS: `class="story"`, `../style.css` — PASS
- References section: 11 refs, all linked — PASS
- Actionable insights: present — PASS

## Scores

### 1. General Editor — 9.0
Template structure followed exactly: kicker, headline, bolded-stat lede, pull stat, 7 body paragraphs, references, disclaimer. Arc is clean: 1973 embargo → EPCA mandate → Virginia fuel math → body counts → taller fleet → 2026 repeal wave → steelman counterargument → close → actionable. Headline runs long (17 words) but each clause earns its place.

### 2. Voice Coach — 9.0
Rex is unmistakable: "The arithmetic is ugly, and it knows it." "Nobody repealed the mandate; it simply outlived its excuse." "Before you start the parade, hear the other side at full volume." Opinions are stated, not hedged ("Congress bought this maneuver with gasoline"). No AI tells, no banned phrases, rhythm gate green.

### 3. Ethics Reviewer — 9.0
No victim sensationalism; no self-congratulation. The counterargument is genuinely steelmanned (small slice of deaths, real costs, enforcement equity via Fines and Fees Justice Center, 10-20% non-compliance, AEB mitigation). Limitations are explicit rather than decorative.

### 4. Social/Shareability — 9.0
"Every time you roll through a red light to turn right, you are executing federal energy policy from the Ford administration" is a top-tier hook. 89% pull stat is quotable. Headline compresses the whole thesis into one shareable line.

### 5. Legal Accuracy — 9.0
EPCA 1975 provision quoted with the "maximum extent practicable consistent with safety" qualifier; NYC exception correct; full-stop-before-turn requirement correct in all states; Atlanta/Nashville actions attributed to named outlets with dates.

### 6. Research Rigor — 9.0
Original contribution: the fleet-mix lethality index (1.30 → 1.60 = 23%) with inputs and method shown in-article. Limitations section names the post-1995 data gap and FARS's blind spot. Counterargument at full strength. 11 references, all linkable and real.

### 7. Data Presentation — 9.0
Math is shown, not asserted: car=1.0 index, both mixes, both scores, the 23% result. Pull stat labeled with source. Inline superscript refs throughout. Disclaimer carries the methodology caveats.

## Verdict
Average: **9.00** (63/70). All 7 critics ≥ 8.5. All hard gates pass. → **SHIP** (queued SHIP_BLOCKED: 1/day rule, #805 published 2026-09-07).

## Revision history
- R0 draft: "The numbers don't lie" (banned per STORY_GUIDE) → replaced with "The arithmetic is ugly, and it knows it."
- R0 rhythm fix: merged 5 short prose fragments (was 27% short, now 9.7%).
- R0 rigor fix (Data Presentation): fleet-mix math expanded in-article with index inputs (1.30 vs 1.60).
