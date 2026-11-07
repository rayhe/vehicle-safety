# Critic Panel — Round 0 — #1421 "Two-Thirds of Rural Drivers Die at the Scene. In Cities, Half Make It to a Hospital."
Journalist: Vin Wreckage | Kicker: The Gap | Date: 2026-11-07 | Word count (body): 924

## Hard gates (regex = source of truth)
- Em dashes (literal): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE list): **0** — PASS
- "The" sentence starters: **2/45 = 4.4%** (max 15%) — PASS
- CSS: `class="story"`, `../style.css`, no story-detail/story-content/story-page/story.css — PASS
- Hero: real JPEG (magic FF D8), 1920x1280, md5 cb59851d, cache-busted `?v=cb59851d` in og:image and img src — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **814.2** (≥200), short **13.2%** (≤15%), long **52.6%** (≥15%) — PASS
- Actionable takeaways: present (belt, unlit-road speed, trauma geography, Level III designation) — PASS
- Limitations: dedicated paragraph + disclaimer — PASS
- Counterargument: dedicated paragraph, full strength (severity confounding, non-causality warning, Montana 2026 rebuttal) — PASS

## 1. General Editor — 8.5
Structure is clean: hook lede, bolded key stat, pull stat, arithmetic, mechanism, crash anatomy, counterargument, limitations, action. The 924-word body runs long against the site's 300–500 spec and above the recent 825-word max (#1420); the fourth paragraph is dense and carries four distinct findings (departure, rollover, lighting, belts) that could each breathe. Trimmed ~85 words pre-panel (day/night clause shortened, headlight clause cut). What remains earns its length: every paragraph introduces a number not seen before. No structural defect; length is the only ding.

## 2. Voice Coach — 9.0
Distinctly Vin: "a fun fact that will ruin your morning commute," "measured in bodies," "the modal rural fatality," "Closer definitive care beats more ambulances. Every time." No banned phrases, no throat-clearing, no AI tells (no "delve," no "crucially," no "in conclusion"). Rhythm script passes with wide variance; short punches ("Severity dominates." "Read that sentence again.") land against 40–60-word builds. The one flat spot is the limitations paragraph, which reads like a disclosure by design — acceptable, since the site requires it.

## 3. Ethics Reviewer — 9.0
No victim-blaming: the piece attributes rural deaths to geography, infrastructure, and crash physics, not to driver character, and it names the belt gap as a systems-plus-behavior fact rather than a moral judgment. No gore, no named victims, no sensationalized crash description. Uncertainty is disclosed rather than buried (the 2,100 figure is labeled a ceiling in the article itself, twice). The Montana counter-study is given full weight instead of being strawmanned. One note: "extra people never made it into an ambulance" could be misread as "all 2,100 were savable"; the article corrects this in the counterargument paragraph, but a first-skim reader may carry the stronger version. Acceptable; the correction is prominent.

## 4. Social / Shareability — 8.5
Headline is a clean stat contrast (67% vs 50%) that survives being read without the article. Pull stat is single-number and quotable. Best share line: "Two thousand one hundred extra people never made it into an ambulance." The state-ratio hook (North Carolina 2.6x, Hawaii the lone inversion) gives regional outlets a local angle. Weakness: no single-sentence kicker at the end; the closing line ("Closer definitive care beats more ambulances. Every time.") works as one. No chart, but the numbers are simple enough to travel without one.

## 5. Legal Accuracy — 9.0
All six references verified against primary sources: DOT HS 813 828 read in full (all 14 pages), DOT HS 811 599 and 811 542 verified via crashstats, Min et al. (2026) via the MedicalXpress summary with the summary labeled as such, Injury systematic review via ScienceDirect. The 2%-en-route wording ambiguity in the fact sheet is flagged in the research file and handled in prose without an absolute count — the right call. The 2,100 derivation shows its inputs and its sensitivity (±500 on the rural driver count). No invented URLs; all links are verbatim from tool results. One nit: ref-4 links a news summary PDF rather than the journal article directly; labeled as "Summary:" in the reference, which is honest.

## 6. Research Rigor — 9.0
Genuine original contribution: the ~2,100 excess at-scene deaths derivation (solving the two percentages against the 14,415 total), the en-route parity observation (50/49 split means the gap lives entirely in the at-scene phase), the unlit-dark absolute comparison (5,756 rural vs 4,609 urban), and the roadway-departure per-mile index (2.7x). Duplicate screen was exhaustive: 12 angles killed this run with queue-entry citations, and the one same-source predecessor (#1406, same fact sheet) is explicitly distinguished by cut, not just by topic. Limitations are a dedicated accounting, not inline hedging. The 2012 proximity studies are correctly flagged as old. Minor: the derived rural driver count assumes unknown-location drivers are negligible; disclosed with a sensitivity range.

## 7. Data Presentation — 8.5
Pull stat carries the headline number with its source. Every percentage arrives with a denominator or an absolute count beside it (10,034 of 16,006; 5,756 of 6,551). State extremes are given as a compact trio (NC 2.6x, AR 2.24, HI 0.7x). The per-mile roadway-departure index is shown, not asserted. Improvement available: the day/night inversion (54% day rural vs 59% night urban) is a single clause inside a long paragraph and deserves its own sentence; the trim cut it to a clause, which slightly buries a genuinely surprising finding. Not blocking.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.5 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 8.5 |
| **Average** | **8.79** |

**VERDICT: SHIP** — 7/7 critics ≥ 8.5, all hard gates pass, round 0. No revision round required. Pre-panel trims (~85 words) already applied and re-verified (em 0, rhythm PASS).
