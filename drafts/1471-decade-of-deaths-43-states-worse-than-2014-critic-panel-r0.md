# Critic Panel — #1471: The Decade the Headline Hid (round 0)

**Slug:** 1471-decade-of-deaths-43-states-worse-than-2014
**Journalist:** Axle McScatter
**Date:** 2026-11-11

## Hard gates (regex = source of truth, verified before scoring)
- Em dashes in article: **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters: **0 of 30 (0.0%)** (max 15%) — PASS
- CSS: `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`/`story.css` — PASS
- Sentence rhythm (sentence-rhythm-check.py --json): variance **413.3** (>=200), short **12.5%** (<=15%), long **37.5%** (>=15%) — PASS (round-0 initial run was 15.2% short; two fragments merged, re-run passes)
- Body words: **476** (300-500) — PASS
- Hero: drafts/1471-decade-of-deaths-43-states-worse-than-2014.jpg, real JPEG (FF D8), 1920x1280, 425,753 bytes — PASS
- References section: 6 sources, all linked, all verifiable — PASS
- Actionable takeaways present — PASS

## 1. General Editor — 9.0/10
Lede lands the contradiction in two sentences and the bolded stat does the work. Structure is clean: claim, recovery math, map, rate check, Maine case study, concession, close. The closing line ("drive like the decade happened, because it did") is the strongest sentence in the piece. Minor: the "objection that actually matters" paragraph could name VMT growth in the lede rather than mid-article, but the current order builds the argument correctly.

## 2. Voice Coach — 9.2/10
Distinctly Axle: "I ran the numbers. Then I ran them again" energy, regression-to-the-mean humor ("either a clue or a coincidence, and the data does not say which"), no throat-clearing. No banned phrases, no "The" starters, rhythm passes after a one-sentence fix. The two merged fragments cost nothing; the voice survives. The byline swap test passes: this could not be a Rex or Dale piece.

## 3. Ethics Reviewer — 9.0/10
No victim-blaming, no moralizing about individual drivers, no self-congratulation. The piece correctly attributes danger to exposure and behavior at the system level, not to the dead. It resists the temptation to turn Maine's spike into a punchline. Honest about what the data cannot say (no causal claims about the clusters).

## 4. Social/Shareability — 8.8/10
Headline is a direct contradiction of the year's dominant narrative, which is the most shareable shape this site publishes. Pull stat "43" is a clean, quotable hook. The two-cluster map finding gives a second shareable nugget. Slight deduction: no single-sentence pull quote as strong as the headline itself; the close comes closest.

## 5. Legal Accuracy — 9.0/10
Every number traces to a cited NHTSA publication with DOT HS numbers. The ARF-vs-final-file vintage distinction is stated explicitly (AZ 770 vs 773, national 32,675 vs 32,744) with the materiality assessed, not hidden. No legal claims are made; FMVSS and CFR are not invoked where they do not apply. The "subject to revision" caveat is in both the body and the disclaimer.

## 6. Research Rigor — 9.2/10
Four original calculations, all shown with inputs: the 27% recovery arithmetic, the two geographic clusters, deaths-outran-miles (rate 1.08 to 1.19), Maine in both windows. Limitations section is specific (vintage shifts, no causal separation, FARS 30-day rule). Counterargument is stated at full strength (2014 was an unusually safe year; the rate comparison is the honest version) and conceded where it is right. Cross-checked against three independent tabulations of the same FARS files.

## 7. Data Presentation — 8.7/10
Numbers are layered well: national first, then the recovery fraction, then the map, then the rate. The pull stat carries the headline number. Deduction: a compact table of the 8 worst + 7 best states would serve skimmers better than inline lists, but the 500-word ceiling makes the inline list the right call. Percentages are consistently paired with raw counts (773 to 1,229), which is the site's standard and is honored throughout.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.2 |
| Ethics Reviewer | 9.0 |
| Social/Shareability | 8.8 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.2 |
| Data Presentation | 8.7 |
| **Average** | **8.99** |

All 7 critics at 8.5+, all hard gates pass. **Phase: SHIP.** Round 0, no revision required.
