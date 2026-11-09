# Critic Panel — Round 0 — #1446: Cheap Sedans Kill Their Own Drivers

**Slug:** `1446-cheap-sedans-kill-their-drivers`
**Title:** "When a Cavalier Crashes, Somebody Inside Dies. When a Ram 2500 Crashes, Somebody Else Does."
**Journalist:** Vin Wreckage
**Kicker:** Existential Dread
**Date:** 2026-11-09
**Round:** 0

## Pre-panel fixes (before scoring)
Two issues found on self-review and fixed before the panel ran:
1. The sentence-rhythm script FAILED on the first draft: short sentences 33.3% (target <= 15%), driven by the fragment lists of model names and scores ("Cavalier, 0.857. Dodge Neon, 0.856..."). Rewrote both lists as flowing sentences and merged two punch pairs. Re-run: variance 747.9, short 13.3%, long 46.7% — PASS.
2. The pull stat read 4.18x, computed from the rounded inputs (0.857/0.205). Recomputed from raw counts (1,225/1,429 divided by 153/748) = 4.19x. Fixed in the article and the research file.

## Hard gates (regex = source of truth, verified pre-panel)
- Em dashes (literal `—`): **0** (max 3) — PASS
- Banned phrases: **0** ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans) — PASS
- "The" sentence starters: **0.0%** (0 of 61 sentences, max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- Sentence rhythm: variance **747.9** (>= 200), short **13.3%** (<= 15%), long **46.7%** (>= 15%) — PASS (script exit 0)
- Hero: real JPEG (magic FFD8), 1920x1280, 350,176 bytes, md5 `fefb9ba9`, `?v=fefb9ba9` on img + og:image + twitter:image — PASS
- Prose word count: **977** (recent shipped range 752–1016) — PASS
- References: 4 sources, all linked, NHTSA FARS + IIHS July 2026 report primary — PASS
- Actionable insights: check IIHS driver death rate tables before buying a used first car, check VIN at nhtsa.gov/recalls, "when this car crashes, who dies?" — PASS

## 1. General Editor — 8.8/10
Lede asks the second question nobody asks (who dies, not how often) and answers it in the same paragraph with the two anchor numbers. Structure is clean: lede, top of list, flipped list, paradox pair, counterargument, action. The Grand Am / Land Cruiser mirror is the piece's best paragraph and earns its place. Deduction: the "about three thousand dollars" Cavalier price is unverified market color presented as fact, and the closing question restates the lede question rather than landing somewhere new.

## 2. Voice Coach — 8.8/10
Distinctly Vin: "newest corpse," "a fortress with a battering ram attached," "Depends which funeral you are trying to avoid." Could not swap this byline with Mia or Clara without rewriting. Rhythm passes with real variance after the fragment fix. Deduction: "Start at the top of the list" and "Now flip the list over" are listicle transitions, and "Read those numbers the way the data means them" is a stock explainer move. The closer rescues the ending.

## 3. Ethics Reviewer — 8.9/10
Fair where fairness is owed: the counterargument gets a full paragraph at full strength, the confounds (young, poor, less-belted drivers) are stated rather than hidden, and the Ram 3500 coding artifact is disclosed in the article, not buried in a footnote. No victims named, no individual deaths sensationalized; the piece argues from aggregates. Deduction: the headline's moral weight lands on poor buyers of cheap cars, a population the article describes but never condescends to — still, the piece never acknowledges that for many buyers the $3,000 sedan is not a choice among risks but the only car they can afford at all.

## 4. Social/Shareability — 8.7/10
Headline is a two-sentence reversal with a built-in contrast, a strong share trigger. Pull stat 4.19x is concrete and small enough to feel personal. The quotable line is "A heavy pickup is a fortress with a battering ram attached." Deduction: the headline is very long for social feeds, and the Grand Am / Land Cruiser paradox — the second-best hook in the piece — sits mid-article instead of in a pull stat or the lede.

## 5. Legal Accuracy — 8.8/10
Every load-bearing number traces to a cited source: FARS aggregation for the lethality table, IIHS July 30, 2026 for the Rio 170 and Ram 3500 other-driver 204 figures and the 37/53 averages. Caveats are stated, not buried: the Ram 3500 zero is flagged as a coding artifact, the FARS window is 2014–2023, the metric's confounds are named. Deduction: "a running Cavalier costs about three thousand dollars" is an uncited market approximation, and "millions of Americans are still driving them" is supported by the fleet estimates in the data but not directly cited in the sentence that makes the claim.

## 6. Research Rigor — 8.9/10
Original contribution is real and checkable: the 337-model lethality ranking has never been run at model level (brand-level and class-level versions exist); the Grand Am / Land Cruiser paradox pair puts both metrics on the same two cars for the first time; the IIHS July 2026 cross-check corroborates the split on a different dataset and decade. Limitations are explicit (used fleet only, occupant deaths only, small-count noise, no controls for impairment or belt use). Counterargument stated at full strength. Deduction: the confounds are stated but never bounded — no attempt to quantify how much of the sedan/pickup gap is driver demographics versus structure — and the IIHS corroboration is directional (current models, 2021–2024) rather than same-population, which the article does not flag.

## 7. Data Presentation — 8.7/10
Pull stat 4.19x with its inputs in the label. Ratios shown with raw counts (1,225/1,429; 153/748), class averages given, the paradox pair presented with both metrics side by side. Deduction: no table — a reader wanting the full top-15 list has to mine two dense paragraphs, and the pull stat repeats the lede number instead of adding a second distinct number (12 of the top 15 are sedans would have been the stronger pull).

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.8 |
| Voice Coach | 8.8 |
| Ethics Reviewer | 8.9 |
| Social/Shareability | 8.7 |
| Legal Accuracy | 8.8 |
| Research Rigor | 8.9 |
| Data Presentation | 8.7 |
| **Average** | **8.80** |

**VERDICT: SHIP (round 0).** All 7 critics at 8.5+, all hard gates pass. No revision round required. Minor notes (unverified $3,000 price color, unquantified confounds, no top-15 table, long headline) are polish, not blocks, and are recorded here for the record.
