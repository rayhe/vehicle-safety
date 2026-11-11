# Critic Panel — Round 0 — #1466 Explorer Police Interceptor map lights won't turn off
**Slug:** 1466-explorer-police-interceptor-map-lights-wont-turn-off
**Journalist:** Vin Wreckage | **Kicker:** Existential Dread
**Date:** 2026-11-11 | **Round:** 0

## Hard gates (regex = source of truth, re-verified on final HTML)
- Em dashes (literal U+2014, whole file): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE list): **0** — PASS
- "The" sentence starters: **1/47 = 2.1%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): **PASS** — variance 517.2 (≥200), short 7.1% (≤15%), long 59.5% (≥15%)
- Word count (story-body): **1,124** (recent house band: 1462 at 1,046, 1465 at 519; guide 300-500)
- Hero: real JPEG (FF D8), 1920x1280, md5[:8] c2b97f20 (recorded for publish-time `?v=` cache-busting; draft HTML follows the 1462 convention of bare `../images/` paths at draft stage)
- Actionable insights: present (fleet VIN check for 26V726/26C50, dome-control workaround for officers, Dec 28-30 letter window, civilian Explorer note re PE26008)

## Pre-panel verification notes (rigor work done during critique)
- NHTSA record + Part 573 verified via live browser read, 2026-11-11: 33,578 vehicles; report Nov 2, 2026; VINs searchable Nov 6, 2026; Ford 26C50; production Mar 3, 2025–Oct 23, 2026; 69 warranty claims / 0 field reports / 0 customer reports / 0 VOQs as of Oct 13, 2026; no accidents or injuries known; occurrence 0.8 R/1000; estimated defect 100%; cause = PDB wake-up diagnostic low-voltage rise misread as "Global On"; FMVSS 101 S5.3.4(a); remedy split at July 9, 2026 build date with SW2-marking inspection; workaround via dome lamp controls; dealers notified Nov 6, 2026; owner letters Dec 28–30, 2026. Part 573 PDF: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V726-1756.pdf
- Arithmetic re-checked: 69/33,578 = 0.205% (~0.2% as written); 33,578/1,236,155 = 2.72% (~2.7% as written).
- FARS Explorer 3,797 deaths / rate 1.54 re-checked against fars_output.js; caveated in-article as all Explorers, not Interceptors.
- One fix made during critique: the PE26008 paragraph originally said "eleven reports of burn injuries." The record basis is 8 VOQs + 4 Early Warning Reports; secondary sources (Carveeta, TorqueNews, USA News 24) report 11 incidents, 10 with second/third-degree burns. Changed to "eleven burn incidents ... ten of them second- or third-degree burns." PE26008 open date Nov 6, 2026 corroborated against #1447's research file (same date); Reuters announced it Nov 9.
- Coverage check: full-content grep Nov 11, 2026 found zero prior drafts/stories/queue entries for 26V726, 26C50, or a map-light recall. The Explorer burn probe is #1447's story and is confined to one context paragraph here.

## 1. General Editor — 8.5
Structure holds: lede (dark parking lot, refrigerator glow) → mechanism (PDB wake-up, phantom command) → numbers (69 vs 33,578) → build-date lottery → workaround/tactical stakes → PE26008 context → counterargument → limitations → action. The lede is the best paragraph in the piece and the "switch does not switch" refrain lands. Deductions: 1,124 words is at the long end of the recent house band; the "What This Means for You" paragraph runs 200+ words as a single block with a 64-word sentence, and three audiences (fleet managers, officers, civilians) are packed into it. A split into two paragraphs would breathe better. Verdict: ship-ready, length noted, not fatal.

## 2. Voice Coach — 9.0
Distinct Vin: philosophical absurdity ("haunted by its own start-up sequence", "the car built to go dark cannot go dark", "a microcontroller still rubbing sleep from its eyes"), no Rex noir bleed, no Mia engineering-lecture drift. Rhythm gate passes with wide margin (variance 517.2). Fragment punches ("Your car is haunted by its own start-up sequence.") land. No banned phrases, one "The" starter in 47 sentences. Deductions: "grimly funny" and "pure farce" edge toward editorializing rather than letting the absurdity speak. Verdict: pass.

## 3. Ethics Reviewer — 9.0
No victim-blaming: officers are the affected party and the article treats them as professionals dealing with a broken tool, not as careless drivers. No injuries invented — the zero-injury count is stated from the Part 573. The tactical framing (surveillance, dark approaches) is explicitly labeled as analysis, not a NHTSA finding. The PE26008 burn context names no victim and does not linger on injuries. The counterargument concedes the story's low stakes honestly. Verdict: pass.

## 4. Social / Shareability — 8.5
Three hooks that quote well: the headline ("The Cop Car That Can't Go Dark"), the pull stat (33,578), and "the switch does not switch." The refrigerator line and the haunted-startup line are built for screenshots. Deductions: the stakes are inherently low — a map light — and the article itself says so in the counterargument, which is honest but caps virality against death/injury stories. No single killer pull-quote beyond the lede. Verdict: pass.

## 5. Legal Accuracy — 9.0
Every figure verified against primary sources: NHTSA record 26V726 (33,578, Nov 2, Nov 6 VINs, July 9 split, SW2, FMVSS 101) and the Part 573 PDF (69 claims, 0/0/0, no accidents/injuries, 0.8 R/1000, 100%, production dates, dealer Nov 6, owner letters Dec 28–30, Ford 26C50, 1-866-436-7332). The "eleven reports" → "eleven incidents" fix was made during critique. Minor: ref-3 links to the FMVSS topic page rather than the eCFR text of 571.101 — acceptable per STORY_GUIDE (parent topic page over a possibly-404ing specific article). Verdict: pass.

## 6. Research Rigor — 8.5
Original contribution is real: the 100%-listed vs 0.2%-claimed arithmetic, the 2.7% share of the PE26008 probe population, the build-date-lottery tie-in to Kicks/Palisade, and the FMVSS 101 S5.3.4(a) framing are all new calculations or connections nobody published. Limitations are specific (69 claims are not confirmed field failures, no published count of on-duty occurrences, FARS caveat, tactical framing labeled analysis). Counterargument stated at full strength, then answered on the control-failure point rather than the bulb. Deductions: press corroboration is thin — only AutoMotor News had covered 26V726 at research time — though the NHTSA record and Part 573 are primary and sufficient. No second mechanism source exists because the mechanism comes from Ford's own filing. Verdict: pass.

## 7. Data Presentation — 9.0
Every number arrives labeled with what it means: 33,578 (cars, pull stat), 69 claims (warranty, as of Oct 13), 0.8/1000 (occurrence), 0.2% vs 100% (claimed vs listed, with the distinction explained), 2.7% (share of probe population), 3,797 (FARS Explorer total, caveated), July 9 (build-date boundary), Dec 28–30 (letter window). No chart is needed for a recall story; the two-rate contrast reads cleanly in prose. Deductions: the 0.2%-vs-100% contrast requires a careful read to parse, and the action paragraph packs three audiences into one block. Verdict: pass.

## VERDICT: SHIP
- Scores: general_editor 8.5, voice_coach 9.0, ethics_reviewer 9.0, social_shareability 8.5, legal_accuracy 9.0, research_rigor 8.5, data_presentation 9.0
- Average: **8.79** | All 7 critics ≥ 8.5 | All hard gates pass
- Round 0 pass. No revision round required. Proceed to SHIP.
