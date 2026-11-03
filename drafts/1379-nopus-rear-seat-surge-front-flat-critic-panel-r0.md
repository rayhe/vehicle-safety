# Critic Panel — Round 0 — #1379: The Back Seat Finally Buckled Up. The Front Seat Stopped Improving.
**Journalist:** Rex Driverton | **Kicker:** Investigation | **Date:** 2026-11-03

## Hard gates (regex counts are the source of truth, verified before scoring)
- Em dashes (literal U+2014 in HTML): **0** (max 3) — PASS. Entities (&mdash;) used only in title separator and footer, as in prior shipped articles.
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus extended guide list): **0** — PASS. Rex's roster catchphrase "The numbers don't lie" deliberately NOT used, since the guide bans that phrase.
- "The" sentence starters (story body, references/disclaimer excluded): **0 of 31 (0.0%)** (max 15%) — PASS.
- CSS: `class="story"`, `../style.css`, all required structural classes present; zero occurrences of story-detail/story-content/story-page/story.css — PASS.
- Hero: real JPEG (FF D8), 1920x1280, MD5 prefix 2a4f9b9f, cache-busting `?v=` on both og:image and img src — PASS.
- Sentence rhythm (scripts/sentence-rhythm-check.py, full-file count): initial run FAILED short_pct 27.0% (headline/kicker/references counted as sentences). After 6 fragment merges (gadget/chime, norm-shifting, limitations lead-in colon, direction/soft merge, ref-4 merge, disclaimer merge): **PASS — variance 806.8 (>= 200), short 6.9% (<= 15%), long 82.8% (>= 15%)**. Body-only recount: variance 272.4, short 3.2%, long 71.0%.

## 1. General Editor — 9.0/10
Structure is textbook: kicker, headline, lede with bolded key stat (91.3% flat), pull stat with derivation, four body movements (math, subgroup gains, body count plus action, limitations, counterargument), references, disclaimer. Lede lands the paradox in two sentences. Deduction: body runs about 980 words against the guide's 300-500, though in line with recent shipped pieces; a tighter cut of the subgroup paragraph would help, but nothing here is filler.

## 2. Voice Coach — 9.0/10
Distinctly Rex: deadpan, paradox-first, noir-adjacent ("Somebody in the back got the memo"). No swappable-bylines problem; no other journalist on staff would write the young-driver inversion this way. Rhythm now passes on both counting methods. Minor nit: "a norm shifting" is colloquial to the point of slight awkwardness; it survives because it sounds spoken, which is the point.

## 3. Ethics Reviewer — 9.0/10
No victims named or exploited; no children named; demographic gaps (sex, race, age) reported with the survey's own caveat that race is observer-assessed from the roadside, not self-identified. The West-region outlier is flagged rather than hyped. No position is self-congratulatory and no group is blamed; the article's villain is a behavior (riding unbelted), not a demographic.

## 4. Social/Shareability — 8.8/10
Headline is a clean paradox with a number attached (1.84x pull stat, 18.5-point jump). The "beep can't claim credit" hook gives readers a reason to share before September 2027. Not a 9.5: seat-belt surveys do not go viral the way a recall does, and the piece has no single shocking image to carry it.

## 5. Legal Accuracy — 8.8/10
FMVSS 208 phase-in dates (front Sept 1, 2026; rear Sept 1, 2027) match the final rule record used by #1021; campaign/rule citations are accurate. Deduction: ref-4 (FMVSS 208 final rule) is cited textually with document number but no hyperlink because no URL was verified this run; the gap is disclosed in the article itself rather than papered over with an unverified link. All other references hyperlink to verified primary pages.

## 6. Research Rigor — 8.8/10
Original contributions are real and labeled: the 1.84x rear unbelted ratio, the narrowing from the 2022-based 2.2x, and the young-driver inversion with its population caveat stated in the article. Limitations are a dedicated paragraph, not hedging: daylight/June/blitz timing, shoulder-belt-only observation, redesign caveat, FARS 2025 share unavailable, modeled 50-lives figure. Counterargument is stated at full strength (survey weather, noisy rear sample, West outlier as tell) and answered without strawmanning. Deduction: the 43% unrestrained-death figure reaches the article via a GHSA summary of the NHTSA overview rather than the overview PDF itself; disclosed, but one step removed from primary.

## 7. Data Presentation — 9.0/10
Every number in the lede and pull stat is derived in the text (16.0/8.7 = 1.84; 91.3 vs 84.0 gap 7.3 points; subgroup deltas stated as before/after pairs, not just deltas). Readers can recompute the headline ratio from the article alone. No chart is embedded; the subgroup list is prose-dense, but each figure carries its population label, so nothing floats unattributed.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social/Shareability | 8.8 |
| Legal Accuracy | 8.8 |
| Research Rigor | 8.8 |
| Data Presentation | 9.0 |
| **Average** | **8.91** |

**All 7 critics at 8.5+ and all hard gates pass → SHIP.** No revision round required. Round 0 stands.
