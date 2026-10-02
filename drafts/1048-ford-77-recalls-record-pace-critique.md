# Critique Panel — 1048-ford-77-recalls-record-pace (Round 0)

## Hard gates (regex = source of truth)
- Em dashes (literal —): 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 1/38 = 2.6% (max 15%) — PASS
- CSS: class="story" present, ../style.css linked, no story-detail/story-content/story-page/story.css — PASS
- Sentence rhythm (sentence-rhythm-check.py --json): 27 sentences, variance 4183.3 (≥200), short 0.0% (≤15%), long 74.1% (≥15%) — PASS
- Actionable takeaways: present (quarterly VIN check, dealer completion confirmation, get "no fix" in writing, 2026 Explorer VIN warning) — PASS
- Hero: real JPEG 1920x1280, FF D8 verified, og:image ?v=07be9bc7 — PASS
- References: 10 linked sources, inline sup refs — PASS

## Round-0 revision
Initial draft failed rhythm on short_pct (34.9% > 15%) due to staccato fragments (headline split, one-liners like "What to do.", "The defects are real."). Merged 9 fragments into longer constructions; re-ran gate: PASS. Headline tightened from two-sentence "Ford's 77th Recall of 2026 Tied the All-Time Record. Ford Broke That Record Last Year." to single-sentence "Ford's 77th Recall of 2026 Just Tied the Record Ford Itself Broke Last Year." No factual changes; all numbers re-verified (see below).

## Critic scores (/10)

### 1. General Editor — 8.7
Structure is clean: lede with bolded key stat, pull stat, 5 body paragraphs, limitations + counterargument, references, disclaimer. The 198-day paragraph is the emotional peak and lands late enough to stick. Minor: the P3 number-dump paragraph is dense; the "read that twice" bridge earns its keep. Headline is the article's best line.

### 2. Voice Coach — 9.0
Unmistakably Axle: the opener catchphrase used as method ("I ran the numbers, then ran them again"), the table framed as a physical object ("before anyone deploys the defense, the table"), regression-line jokes, the "manufacturing schedule" closer. Zero banned phrases, zero em dashes, zero AI-tell patterns. Rhythm variance 4183 reads human. Deducted half a point only because "weekends included" is a beat he has used before.

### 3. Ethics Reviewer — 9.0
Target is a corporation, not a victim class; no punching down. Ford's dispute of the 198-day analysis is stated, not buried. The J.D. Power win is credited, not sneered at. No self-congratulation, no partisan framing. The "appointment is the product" line is cynical about process, not people.

### 4. Social Shareability — 8.8
Headline is built for the group chat. "77 recalls... ties GM's 2014 record" is a clean share-card fact. Pull stat 77 + label carries the twist (more vehicles than record 2025). "Fewer fires, bigger explosions" is quotable. Slightly niche for non-car people, hence not higher.

### 5. Legal Accuracy — 9.0
Every hard claim is sourced and caveated: tallies identified as media compilations at different snapshot dates; per-recall mean flagged as skewed; Ford's dispute of the 198-day figure stated twice; GM ignition-switch history linked rather than asserted. No defamation surface on publicly filed facts.

### 6. Research Rigor — 9.0
Original contributions: (1) vehicles-per-recall inversion 84,700 → 182,500 (+115%) while count fell 50%; (2) 1 recall per 3.5 days pace; (3) 2026 YTD volume (14.05M) already exceeds 2025's record year (12.96M); (4) the 77 = GM-2014-record paradox. Methodology shown inline ("14,048,838 divided by 77"). Limitations and full-strength counterargument present. One honest wrinkle: the 14.05M/77 figure combines Jalopnik's 75-recall snapshot with the Ranger filing; disclosed in references and disclaimer.

### 7. Data Presentation — 8.7
Numbers carry units, baselines, and percent changes in prose; the 2025-vs-2026 comparison reads like a table without the markup. Could have rendered an actual HTML table (Axle's beat); the prose table does the job. Arithmetic spot-checked: 12,958,128/153 = 84,694; 14,048,838/77 = 182,453; 272/77 = 3.53; (182,453−84,694)/84,694 = 115.4%. All match the article.

## Verdict
Mean 8.89; all 7 ≥ 8.5; all hard gates PASS → **SHIP**. Blocked on 1/day rule (2 publishes already 2026-10-02) → SHIP_BLOCKED, queued ship_date 2027-05-24.
