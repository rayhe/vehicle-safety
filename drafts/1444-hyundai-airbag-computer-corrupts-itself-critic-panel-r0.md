# Critic Panel — Round 0 — #1444: Hyundai's Airbag Computer Can Corrupt Itself

**Slug:** `1444-hyundai-airbag-computer-corrupts-itself`
**Title:** "Hyundai's Airbag Computer Can Corrupt Itself. 37,901 Cars Are Driving Around With It."
**Journalist:** Mia Crumplezone
**Kicker:** Investigation
**Date:** 2026-11-09
**Round:** 0

## Hard gates (regex = source of truth, verified pre-panel)
- Em dashes (literal `—`): **0** (max 3) — PASS
- Banned phrases: **0** ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans) — PASS
- "The" sentence starters: **5.7%** (2 of 35 prose sentences, max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- Sentence rhythm: variance **4695.2** (>= 200), short **3.3%** (<= 15%), long **70.0%** (>= 15%) — PASS (script exit 0)
- Hero: real JPEG (magic FFD8), 1920x1280, 429,540 bytes, md5 `bad282c2`, `?v=bad282c2` on img + og:image + twitter:image — PASS
- Prose word count: **752** (recent shipped range 880–1016 for #1442/#1443; within current practice)
- References: 7 sources, all linked, Part 573 primary — PASS
- Actionable insights: VIN check now, light-on = book dealer, free fix, recall numbers — PASS

## 1. General Editor — 8.8/10
Lede lands in two sentences: one job, one failure mode, one count. The timeline paragraph is the spine of the piece and earns its length. Structure is clean: lede, mechanism, timeline, math, FARS footnote, counterargument, action. Deduction: mean sentence length runs long (several 35–50 word sentences back to back in the mechanism and math paragraphs); one more short punch in the middle third would break up the density. No structural rewrite needed.

## 2. Voice Coach — 9.0/10
Distinctly Mia: technical, excited by the engineering failure, judgmental about the design ("the one nobody thought to protect from itself", "a safety-critical memory write with no atomicity, no rollback, no redundancy"). Could not swap this byline with Rex or Dale without rewriting. Banned phrases zero, rhythm PASS with real variance. Deduction: "apparently" does slight hedging work in the ACU paragraph; the sentence survives without it, but the voice is intact either way.

## 3. Ethics Reviewer — 8.8/10
Fair to Hyundai where fairness is owed: zero crashes, zero injuries stated twice and given a full paragraph at full strength. No victim-blaming; the "shrugged and kept driving" line is aimed at owners ignoring a warning light, not at crash victims, and it is framed as a question, not an accusation. Actionable guidance is specific and free. Deduction: the piece speculates ("how many owners saw that light, shrugged") without data on how many of the 331 incidents involved continued driving — flagged as a question, but it is still speculation.

## 4. Social/Shareability — 8.5/10
Headline is a strong share trigger: a computer corrupting itself is a novel failure mode most readers have never heard of. Pull stat 331 is concrete and small enough to feel personal. The "56 days" notification gap is the second hook. Deduction: no single quotable one-liner as sharp as the headline; the closest ("It announces itself with a dashboard light, and the count is nearly exhausted") is good but buried mid-article.

## 5. Legal Accuracy — 9.0/10
Every load-bearing claim traces to the Part 573 filing: counts, dates, supplier, part numbers, 1% estimate, 331 incidents, NASDA date, scope widening. Press citations (Electrek, Autoblog, BizzyCar, Car and Driver via The Cool Down) are used only for chronology color already present in the filing. Caveats are stated, not buried. Deduction: the Part 573 PDF link is a third-party mirror (driveteslacanada.ca), not static.nhtsa.gov — disclosed in the reference as a mirror, and the NHTSA recalls database link is primary. Acceptable.

## 6. Research Rigor — 9.0/10
Original contribution is real and checkable: 331/37,901 = 0.87% incident rate vs. the 1% defect estimate yields ~87% of the estimated defective population already surfaced; 7 years 19 days from first incident to recall decision; ~26 months from the August 2024 warranty signal; 56-day notification gap. Limitations are explicit (allegations vs. confirmed, U.S.-only harm statement, bench-vs-vehicle reproduction gap, FARS nameplate caveat). Counterargument stated at full strength. Deduction: the 87% figure assumes the 1% estimate is accurate and incidents map 1:1 to defective units; the article does not state that assumption explicitly.

## 7. Data Presentation — 8.8/10
Pull stat 331 with a tight label. Percentages shown with their inputs (29,058 = 76.7%, 8,843 = 23.3%, 0.87% vs. 1%). The FARS contrast (8.54 vs. 0.12) is presented with its caveat in the same paragraph, not footnoted away. Deduction: no visual/table for the timeline — the prose timeline works, but a reader skimming for dates has to read the whole paragraph.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.8 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 8.8 |
| Social/Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 8.8 |
| **Average** | **8.84** |

**VERDICT: SHIP (round 0).** All 7 critics at 8.5+, all hard gates pass. No revision round required. Minor notes (long mean sentence length, the 87% assumption, the mirror link) are polish, not blocks, and are recorded here for the record.
