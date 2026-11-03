# Critic Panel — Round 0 — #1375 NHTSA 2027 Crash-Test List

**Slug:** 1375-nhtsa-2027-crash-test-list
**Journalist:** Clara Rollover
**Kicker:** The Gap
**Date:** 2026-11-03

## Hard gates (regex counts are the source of truth)

- Em dashes (`grep -o '—'`): **0** (max 3) — PASS
- Banned phrases (task list + STORY_GUIDE list, case-insensitive): **0** — PASS
- "The" sentence starters: **0 of 44 (0.0%)** (max 15%) — PASS
- CSS class: `class="story"` present; `../style.css` linked; zero occurrences of story-detail/story-content/story-page/story.css — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): **PASS** — variance 468.7 (≥200), short 13.9% (≤15%), long 66.7% (≥15%), n=36. Two merges were needed during drafting to clear the short-sentence cap (lede fragment merge; "First, selection is not a rating" retained as a short punch, offset by the merges).
- Hero: real JPEG (FF D8), 1920x1280, sha256-md5 short hash 375c145b, referenced with `?v=375c145b` in both story-hero img and og:image — PASS
- Word count (story-body pre-references): 879. Above STORY_GUIDE's 300–500 guidance and above #1374's 585. See General Editor note; not a hard gate.

## 1. General Editor — 8.5/10

Strongest asset is the lede-to-payoff discipline: the title promises a countable finding and the article delivers it by paragraph three. The two-traps section is the piece's spine and earns its length. Deductions: (a) 879 words is long for this site's punchy format — the crash-list sentence alone runs ~95 words and reads like a manifest, which is honest but heavy; (b) the Slate hook is introduced and then abandoned — one more sentence on why a startup truck on the list matters would have paid it off. Neither flaw breaks the piece; both are visible to a reader. Score reflects a good article that is longer than the format wants.

## 2. Voice Coach — 9.0/10

Clara's voice holds throughout: direct, practical, mildly angry on the reader's behalf ("A dealer waving an older five-star sticker at a buyer of a redesigned car is selling last year's test as this year's car"). No banned phrases, no AI tells in the banned list, no throat-clearing. Rhythm passes with real variation (fragments, mid-length builds, and the long list sentence). Deduction: two sentences lean on the same "not X, but Y" contrast shape in the traps section; acceptable, not a pattern. Distinct from Axle's numbers voice and Rex's noir — the byline could not be swapped in.

## 3. Ethics Reviewer — 9.0/10

No fear-mongering, no invented risk, no shaming of any driver group. The article's central ethical choice — refusing to frame model absences (F-150, Camry, Accord) as a scandal — is handled correctly and explicitly. Actionable advice is concrete and free (check NHTSA.gov/ratings by model year and trim; ask for pedestrian status). Deduction: the piece could have said more plainly that a pedestrian "fail" is a test outcome, not a prediction that a specific car will hit anyone; the limitations section covers it, but the body leans on the fail framing once without that qualifier inline.

## 4. Social / Shareability — 8.5/10

Title is built to travel: a number (23), a twist (only three get everything), and a federal actor. Pull-stat "3" with the three model names is a clean card. The Slate surprise is the detail most likely to be quoted. Deduction: the middle is list-dense, so excerpting any single paragraph other than the lede or the traps section gives a reader a manifest rather than a hook. Shareable, not maximally viral.

## 5. Legal Accuracy — 9.0/10

Citations check out against the sources reviewed this run: NHTSA release (Oct 15, 2026; 23/18/10; 87%; Morrison quote), Motoring Chronicle full lists (Oct 22), GM Authority (Oct 28; Silverado all-new, Trailblazer refresh, Explorer only American brand on pedestrian list, Silverado only GM vehicle on ADAS list). No preemption claim is made (that belongs to the separate FMVSS 108 lamp proposal, correctly excluded here). The 87% figure is attributed to NHTSA and immediately qualified with the carryover explanation rather than presented as the article's own finding. Deduction: the article relies on Motoring Chronicle's republication for the full lists because NHTSA's press page did not render its tables in the copy reviewed; that reliance is disclosed in the limitations section, which is the right call, but it is still second-hand for the core data.

## 6. Research Rigor — 9.0/10

Original contribution is real and verifiable: the three-list intersection (Model 3, Atlas, Telluride) was computed from the published lists, not copied from coverage, and the absence check (no F-150/Camry/Accord/Corolla/CR-V/Tacoma on the crash list) was run name-by-name against all 23 entries. Limitations are dedicated and honest (no results exist yet; September pedestrian round is a different action; FARS figures describe past generations; list provenance disclosed). Strongest counterargument is stated at full strength (a rotating selection is efficient, not negligent) and the thesis is narrowed accordingly rather than defended past its evidence. Deduction: the FARS Silverado figure, while caveated, adds history more than analysis — the piece would survive without it.

## 7. Data Presentation — 8.5/10

Pull-stat "3" plus its label does exactly one job and does it well. The three lists are presented in descending order of reader familiarity (crash, then overlap, then pedestrian mechanics, then ADAS), and the pedestrian box is correctly distinguished from stars. Deduction: the 23-name crash sentence is the densest passage in the article; a reader scanning for their car must wade through it. A compact list would have served shoppers better, but the site's prose template does not offer one, so this is a format constraint as much as a writing choice.

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

All 7 critics at 8.5+ AND all hard gates pass → **SHIP**. No revision round required. Main watch item for the publish run: reset the dateline to the ship date and re-verify gates live, per site practice.
