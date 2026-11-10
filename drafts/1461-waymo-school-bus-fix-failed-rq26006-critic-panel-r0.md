# Critic Panel — Round 0 — #1461 Waymo School Bus Fix Failed RQ26006

**Article:** `drafts/1461-waymo-school-bus-fix-failed-rq26006.html`
**Journalist:** Mia Crumplezone
**Date:** November 10, 2026

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters: **1/45 = 2.2%** (max 15%) — PASS (the one is the bolded "The counterargument" opener; naive regex count reads 0 because ref markers attach to sentence starts)
- CSS class: `class="story"`, links `../style.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **724.8** (≥200), short **9.5%** (≤15%), long **52.4%** (≥15%) — PASS
- Hero: real JPEG (FFD8), 1920x1280, 716,035 bytes, md5 `98e8a602` — PASS

## 1. General Editor — 9.0
Lede lands the whole story in two sentences: fix declared, fix doubted. The pull stat (354 days) is the single most arresting number in the file and it is placed early. Structure follows the house shape: lede, mechanism, timeline, math, stakes, counterargument, limitations, action. One deduction: the "shrinking population" point (3,067 recalled vs 2,895 queried, 172 fewer) is raised but the likely explanation, fleet turnover, is never named, leaving the reader to supply it. Minor.

## 2. Voice Coach — 9.0
Distinctly Mia: the mechanism paragraph ("It is a decision failure: the software reads the scene, classifies it correctly enough to brake, and then decides the scene is over while the stop arm is still out") is technical, accessible, and judgmental about bad design in exactly her register. "Still legally a wall" is a Mia line. No banned phrases, no throat-clearing, sentence rhythm verified passing with variance 724.8. One soft spot: "Paperwork, after the fact:" is punchy but slightly cryptic on first read; it earns its keep on the second clause, so it stays.

## 3. Ethics Reviewer — 9.0
Fair to Waymo throughout. The counterargument is stated at full strength and the article explicitly says no child was hurt in any incident in the federal file. No victim-blaming, no sensationalized injury claims (none are claimed). The "What This Means for You" section gives parents and school districts concrete, checkable actions rather than dread alone. The stakes paragraph uses FARS child-death data to explain why the behavior matters without implying Waymo caused any of those deaths.

## 4. Social / Shareability — 8.5
Headline is a shareable paradox: a fix declared complete, then un-fixed by the regulator. The 354-day pull stat is the number people will repeat. The "legally a wall" line is the quote that fits a social card. Slight deduction: no single one-line kicker quote beyond the headline itself; the headline does that job, so this is marginal.

## 5. Legal Accuracy — 9.0
Every load-bearing claim traces to the NHTSA ODI resume (RQ26006), TechCrunch (November 9, 2026), Reuters (November 9, 2026), or the NHTSA Traffic Safety Facts publication DOT HS 813 819. The recall query is carefully distinguished from a recall and from a finding of defect, twice. "A majority" is quoted, never inflated into a number. The Austin ISD counts (19 passes, 8 citations) and the January 12 NTSB incident are attributed to the reporting that carried them. No defamatory assertion: Waymo is quoted via its own filings and its no-citations-since-March claim is presented as its claim.

## 6. Research Rigor — 9.0
Novel contribution is real and fourfold: the 354-day gap arithmetic, the 3,067-to-2,895 population shrinkage, the paperwork-order observation (recall ratifying an already-deployed push), and the denominator problem (no encounter count, so no failure rate computable). Limitations are stated honestly and specifically, including the confidential incident totals and the ambiguity of whether the January 12 incident counts as six incidents or one event. Counterargument stated at full strength with its strongest point (no citations since March) conceded. Methodology is transparent: every number carries its source and date.

## 7. Data Presentation — 9.0
Pull stat (354) is well placed and immediately explained. FARS stakes data (1,069 killed 2015-2024, average 107/year, 55% of school-age pedestrian deaths ages 5-10) gives the "why it matters" without overwhelming the news peg. The NASDPTS single-day illegal-pass figure (67,258) contextualizes the human baseline honestly. Minor deduction: the 8-incident figure sits inside a dense paragraph with three confidentiality caveats; a reader skimming could miss that "a majority" is the only proportion NHTSA published, though the limitations section restates it.

## Verdict
Average: (9.0 + 9.0 + 9.0 + 8.5 + 9.0 + 9.0 + 9.0) / 7 = **8.93**. All 7 critics at 8.5+, all hard gates pass. **SHIP.**
