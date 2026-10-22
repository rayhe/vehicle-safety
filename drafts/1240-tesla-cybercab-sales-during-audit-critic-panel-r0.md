# Critic Panel — #1240 Tesla Will Sell You a Car With No Steering Wheel While NHTSA Decides Whether the Car Is Legal (Round 0)

**Slug:** 1240-tesla-cybercab-sales-during-audit
**Journalist:** Rex Driverton | **Kicker:** Investigation
**Run:** 2026-10-22 09:30 PDT

## Hard gates (mechanical, source of truth)
- Em dashes (regex `grep -o '—'`): **0** (max 3) — PASS
- Banned phrases (all 13 patterns, incl. "deep dive", "Here's the thing", "The numbers don't lie"): **0** — PASS (initial draft used the Rex catchphrase "The numbers don't lie" — caught by grep, removed in rewrite)
- "The" sentence starters: **13.8%** of body sentences (max 15%) — PASS (initial 31.2% FAIL fixed by rewriting openers)
- CSS class: `class="story"`, links `../style.css` — PASS
- Sentence rhythm gate: variance 521.5 (≥200 ✓), short 4.8% (≤15% ✓), long 61.9% (≥15% ✓) — PASS (initial 121.1 / 21.6% FAIL fixed by merging fragments into long builds)
- Body word count: ~490 (300–500) — PASS
- Hero: drafts/1240-tesla-cybercab-sales-during-audit.jpg, real JPEG 1920x1280 — PASS

## Critic scores (/10)

### 1. General Editor — 8.6
Clean spine: hook → pull stat → audit facts → second docket → liability transfer → regulatory asymmetry → actionable close. The 9-day gap is a genuinely novel frame for this site's Cybercab thread (#1016/#1113/#1145/#1167/#1205 all predate the Oct 21 earnings peg). Deductions: H1 runs 17 words; "no steering wheel, no pedals, no mirrors" repeats in lede and P3; the school-zone closer ("nobody is slowing down for the child you might want protected") reaches slightly. Structure never sags.

### 2. Voice Coach — 8.6
Rex present and working: "Run that timeline again slowly, because the order is the story"; "which is either confidence or scheduling as a legal strategy"; "paperwork from a different century." The rewrite shaved some noir off (the "smirk" line died with the banned catchphrase), but the voice survives the merge into long builds — deadpan, precise, slightly tired. Not swappable with Vin (no cosmic dread) or Dale (no bar-chart snark). Rhythm passes mechanically and reads human.

### 3. Ethics Reviewer — 9.0
No victims, no crashes, no injuries — nothing to blame anyone for. Executives named only in official-role context with direct quotes. The "you'd like your car to be legal before you pay for it" close is consumer guidance, not moralizing. The child-in-the-school-zone line is the most emotive beat; it stays inside the facts (DP26010 alleges exactly that) and is flagged as allegation, not finding.

### 4. Social/Shareability — 8.8
Headline is a one-sentence paradox engineered for sharing: sell now, legality TBD. "9 days" is the shareable number and the pull-stat graphic. Pull quotes: "The certification question gets answered after the sales promise, not before." Ships on the Oct 21 news cycle, not a week behind it. The fleet-vs-private-buyer nuance (Musk's own qualifier) gives it share-debate legs without weakening the hook.

### 5. Legal Accuracy — 8.7
All external claims traced to linked sources: earnings quotes (Reuters), audit scope/extension (Crypto Briefing, Tech Insider), self-certification asymmetry and DOT proposal (Devdiscourse/Dataconomy), school-zone petition stats (SDV Sector). Procedural statuses stated precisely — audit and petition are evaluations, not findings; the article never says "NHTSA found." Minor softness: "hundreds in Texas DMV registries" rides the paragraph's Tech Insider citation without its own inline anchor.

### 6. Research Rigor — 8.7
Original contribution is threefold and regulatory-forensic (the site's accepted genre for this thread): the 9-day promise-to-deadline gap, the title-transfer liability shift (fleet asset → product sale during an open audit), and the self-certification asymmetry as the actual enabling mechanism. Counterargument stated at full strength — the rules really are anachronistic, DOT already wants them updated, most units stay in Tesla's fleet. Limitations explicit in the research file (no crashes, audit is procedural, DOT may vindicate Tesla). Every number shown with inputs: Oct 21 → Oct 30 = 9 days.

### 7. Data Presentation — 8.8
Numbers consistent across body, pull stat, and references: 9 days, ~1,000 Cybercabs (AQ26002), ~1,000 robotaxis (DP26010), 4 petition incidents, 0 crashes/fires/injuries/fatalities. Headline claims match the facts — the car has no steering wheel; NHTSA has not decided whether it was certifiable; Tesla committed to selling it. No invented precision, no FARS claims where FARS can't see (non-fatal regulatory story; correctly disclosed).

## Verdict
**Average: 8.74 — 7/7 critics ≥ 8.5. All hard gates pass. → SHIP.**
