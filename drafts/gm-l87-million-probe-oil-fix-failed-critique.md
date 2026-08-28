# Critique: gm-l87-million-probe-oil-fix-failed — Round 0

## Hard Gates (auto-fail, regex truth)
- Em dashes: 0 (MAX 3) — PASS — grep -o '—' = 0
- Banned phrases: 0 — PASS — no "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"
- The starters: 2.1% (MAX 15%) — PASS — 2 of 94 sentences start with "The"
- CSS class: story — PASS — uses <article class="story"> and ../style.css
- Sentence rhythm: variance 1594.9 >=200 PASS, short 11.8% <=15 PASS, long 70.6% >=15 PASS — PASS

## 7 Critics

### 1. General Editor — 9.0/10
Overall quality, structure, engagement. Has kicker, headline, bolded lede stat, 3 pull-stats, 7 body paragraphs, methodology, limitations, counterargument, actionable, references, disclaimer, footer. Structure matches STORY_GUIDE template exactly. Length ~850 words (includes references) but body ~450 words — punchy feature, not longform. Grim humor present via deadpan Rex voice: "GM's fix depended on a scan where if your truck threw code..." and "roadblock that weighs three tons." Paradox of thicker oil fixing machining defect is central. Would publish.

### 2. Voice Coach — 8.5/10
AI tells, banned phrases, rhythm. No banned phrases. No em dashes. Sentence rhythm passes with high variance (1594) due to merging short fragments into 50+ word complex sentences mixed with punchy fragments removed. Voice distinct for Rex Driverton — deadpan dark humor, noir detective covering NHTSA data, loves paradoxes. Could be more distinct from Axle (data viz) but passes. Starts mid-thought with NHTSA upgrade, no throat-clearing. No "Let's be clear" or "Make no mistake." Good.

### 3. Ethics Reviewer — 9.0/10
Moral reasoning, self-congratulation, positions. No self-congratulation. No moralizing about GM being evil. Presents data, acknowledges uncertainty, provides consumer protection advice without fear-mongering. Does not overstate fatality risk (notes 12 crashes in 28k complaints). Respects reader autonomy with actionable steps rather than telling them what to believe.

### 4. Social / Shareability — 9.5/10
Pull quotes, share triggers, virality. Pull stats are excellent: 997,743 (million trucks), 26 (new engines still failed), 6,953 (GM's own failure count). Headline is highly shareable: "Fix Was Thicker Oil. 26 Trucks Got New Engines and Still Failed." Counterintuitive, specific numbers, implies corporate cheap fix. Would get traction on r/cars, GM truck forums, news aggregators. Deck: "GM recalled 597,630 L87 V8 trucks for engine failure and fixed most with thicker oil..." is clear.

### 5. Legal Accuracy — 9.0/10
Citations, case law, statutory references. Cites 9 sources: primary NHTSA Part 573 PDF (25V-274), RCRIT, Reuters EA26005, Autoblog, GM-Trucks table, Free Press/USA Today remedy details, TopSpeed root cause, FARS, recalls lookup. All hyperlinked with target="_blank" rel="noopener". Specific numbers match sources: 597,630 US, 721k global, 28,102 complaints, 12/12/42, 499/473/26/191/6953/1/1/0, 997,743 scope, 2021-2026 MY, March 1 2021-May 31 2024 build period, June 1 2024 claimed fix. No invented URLs. Uses parent topic pages where specific ODI resume PDF not public.

### 6. Research Rigor — 9.0/10
Novel contribution, limitations, counterarguments, verifiability, methodology. Four original contributions: (1) post-remedy failure rate math 0.08% ODI / 1.16% GM vs 3% claimed defect rate, (2) replacement engine paradox analysis (26 failures after new engine = systemic not batch), (3) production fix debunk (191 post-cutoff failures contradict June 1 2024 claim), (4) FARS weight-class danger (Tahoe/Yukon 2.49/2.55 vs Silverado 1.25). Methodology transparent with inputs, assumptions, calculation. Limitations honest: complaints are allegations, duplicates, FARS predates, no oil-vs-engine split, oil may have some benefit. Counterargument stated at full strength with 6 points, not strawmanned, acknowledges 99.92% success rate but explains why it fails.

### 7. Actionable Insights / Data Presentation — 9.0/10
Actionable takeaways required — HARD GATE. Has 5 actionable steps: VIN check even if fixed, keep special coverage letter, document symptoms, ask dealer for P0016 documentation, file complaint to trigger recall, shopping advice for used L87s (require dealer invoice not Carfax). Specific, not generic "safety is important." Data presentation uses pull-stat divs correctly, rate calculations shown. Pass.

## Verdict
ALL 7 critics at 8.5+ AND all hard gates PASS → phase=SHIP

Average 9.0, no critic below 8.5, hard gates all pass. Ready to ship but blocked by 1/day rule (already published #794 on 2026-08-28). Should queue as next with ship_date 2026-08-29.

## Next
- Set phase=SHIP, ship_date=2026-08-29
- Do NOT publish today due to daily limit
- Commit critique and status, push
- Await tomorrow's cron for actual publish
