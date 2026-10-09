# Critic Panel — #1104: Ram ProMaster No-Warning Steering Recall (round 0)

**Article:** `drafts/1104-ram-promaster-no-warning-steering.html`
**Journalist:** Mia Crumplezone | **Kicker:** Investigation
**Date of review:** 2026-10-08

## Hard gates (regex, not opinion)
| Gate | Result |
|---|---|
| Em dashes in body (`grep -o '—'`) | 0 — PASS (max 3) |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack) | 0 — PASS |
| "The" sentence starters | 13.5% (5/37) — PASS (max 15%) |
| CSS class check | `class="story"`, links `../style.css`, no story-detail/story-content/story-page, no story.css — PASS |
| Hero image | Real JPEG (FF D8), 1920x1280, `?v=7fa84c8e` — PASS |
| Sentence rhythm script | PASS (variance 330.0 ≥ 200, short 14.7% ≤ 15%, long 35.3% ≥ 15%) |
| References block | Present, 3 linked references, no invented URLs — PASS |
| Actionable insights | Present (story-action + disclaimer) — PASS |

## 1. General Editor — 8.5/10
Structure: lede with bolded stat, pull stat, 2016 callback, engineering analysis, PE escalation, full-strength counterargument, closer, action block, references, disclaimer. Complete arc. Minus points: the article is a single-issue recall story, so the "body count" taxonomy framing is thinner than flagship investigations. The lede's opener ("Let's talk about what happens when water meets copper") is pure Mia. No filler paragraphs.

## 2. Voice Coach — 9.0/10
Distinct Mia voice: engineering enthusiasm ("the failure mode is digital"), judgmental streak ("The seal was rubber"), mid-thought start, varied sentence lengths (rhythm script passes at 330 variance). No banned phrases, no "X isn't about Y. It's about Z" constructions. Could not be swapped with Rex or Dale without rewriting. Sentence rhythm gate verified via script: PASS.

## 3. Ethics Reviewer — 9.0/10
No victims to exploit; no injury count to sensationalize. The article treats the low observed incident count (1 non-injury crash) honestly instead of inflating risk, and gives the company the full-strength counterargument. No moral grandstanding. The "does not get the benefit of the doubt" closer is an earned opinion, not a cheap shot.

## 4. Social/Shareability — 8.5/10
Headline carries the hook ("Because Water Got Into the Steering Wiring. Again."). Pull stat 265,512 is share-sized. Closer line ("Seal the connector, then seal it again") is quotable. Minus: recall stories are inherently less viral than body-count investigations; the audience here is owners and fleet managers, who will share it functionally.

## 5. Legal Accuracy — 8.5/10
All claims trace to NHTSA campaign records (26V621000 via Recalls API, report received 29/09/2026, PE26002) or Fox Business/Detroit News reporting (counts, Matyok statement, interim letter date). No invented URLs. The "decade of failure" framing is explicitly qualified as "might be coincidence wearing a narrative" in the counterargument. One caution: Stellantis's incident count is secondhand-quoted and the disclaimer says so. No defamation exposure: all factual claims are sourced, opinion is clearly opinion.

## 6. Research Rigor — 9.0/10
Original contribution: (1) the 16V202000→26V621000 water-in-harness lineage (own cross-reference of NHTSA API data, not in any press coverage found), (2) hydraulic-vs-EPS graceful-degradation asymmetry as the explanation for "no warning," (3) PE26002 escalation as the agency-confidence signal. Limitations stated explicitly (no Part 573 ingress path, secondhand incident count, no FARS breakout). Counterargument stated at full strength. Methodology transparent for every number.

## 7. Data Presentation — 8.5/10
Pull stat + pull label with units and context. Sub-counts sum correctly (44,391 + 147,204 + 72,043 + 1,874 = 265,512). Dates anchored (report received Sept 29, VINs searchable Oct 6, interim letters Nov 17). No chart needed for a three-number story; the numbers are presented, not buried.

## Verdict
All 7 critics ≥ 8.5. All hard gates pass. **→ SHIP.**

Scores: general_editor 8.5, voice_coach 9.0, ethics_reviewer 9.0, social_shareability 8.5, legal_accuracy 8.5, research_rigor 9.0, data_presentation 8.5. Average: 8.79.
