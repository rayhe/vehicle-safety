# Critic Panel — #1238 Young Drivers Doubled Their Drunk Pedestrian Kills (Round 0)

**Slug:** 1238-young-driver-dui-doubled-sober-pedestrians
**Journalist:** Dale Impactor III | **Kicker:** Sobriety Report
**Run:** 2026-10-22 05:30 PDT

## Hard gates (mechanical, source of truth)
- Em dashes (regex `grep -o '—'`): **0** (max 3) — PASS
- Banned phrases: **0** (deep dive fixed in ref-1; initial hit removed) — PASS
- "The" sentence starters: **12.5%** of body sentences (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css` — PASS
- Sentence rhythm gate: variance 1244.3 (≥200 ✓), short 7.7% (≤15% ✓), long 42.3% (≥15% ✓) — PASS (initial 16.7% short FAIL fixed by merging 3 fragments)
- Body word count: 446 (300–500) — PASS
- Hero: drafts/1238-young-driver-dui-doubled-sober-pedestrians.jpg, real JPEG 1920x1280, ?v=9006efa3 — PASS

## Critic scores (/10)

### 1. General Editor — 8.8
Structure is textbook: good-news lede, inversion at the pull stat, honest objections, actionable close. 446 words lands in the pocket. "Better than one in six" is technically exact (1/6.41 > 1/6). Minor: "dug through 2024 FARS" is slightly colloquial for the topic paragraph, but it fits Dale's voice.

### 2. Voice Coach — 9.0
Distinctly Dale: sardonic, stat-obsessed, toxicology framing ("the toxicology desk does not grade its own curve"), sports-bar cadence ("one in fourteen", "one in six"). Catchphrase opener present. Sentence rhythm passes mechanically and reads human aloud. No banned phrases, zero em dashes. The voice cannot be swapped with Rex or Mia without a rewrite.

### 3. Ethics Reviewer — 8.8
No victim-blaming, no self-congratulation, no moralizing lectures. The one prescription (lower BAC limits) is tethered to evidence (#826, Utah). Young drivers are treated as a behavioral subgroup, not a character indictment. The "frame it in every parents' kitchen" line is directive without being preachy.

### 4. Social/Shareability — 9.0
Headline is built for sharing: counterintuitive inversion in one sentence. "The drink moved from the sidewalk to the driver's seat" is the pull quote. The 2.17x pull stat is a shareable number. Cross-references the site's own #826, which rewards regular readers.

### 5. Legal Accuracy — 8.6
All quantitative claims cite GHSA/NHTSA/NSC/IIHS with links. One transparency note: the NHTSA Pedestrians: 2024 Data link routes through a municipal mirror (Glendale CA) rather than nhtsa.gov directly, flagged as such. The #826 cross-claim ("lower thresholds actually move heavy drinkers off the road") matches the site's own story headline. No legal assertions beyond the site's own reporting.

### 6. Research Rigor — 9.0
Original contribution: the young-driver-impairment-up vs pedestrian-impairment-down cross-cut inside the third-straight-year decline — not run anywhere on the site. Counterargument paragraph at full strength (testing/reporting improvements, low base, FARS BAC imputation error in small subgroups, shrinking pie swamping the pocket). Limitations explicit in the disclaimer. Every claim traceable. 15.6/7.2 = 2.17x shown.

### 7. Data Presentation — 8.9
Numbers consistent across body, pull stat, and references: 7,080 / 6,732 / 1,669 / 76.5% / 62.2% / 37% (~2,607) / 15.6% / 7.2% / 2.17x. Headline "Doubled" matches the 2.17x. No invented precision. NSC's 22/11/5 split correctly summarized rather than cherry-picked.

## Verdict
**Average: 8.87 — 7/7 critics ≥ 8.5. All hard gates pass. → SHIP.**
