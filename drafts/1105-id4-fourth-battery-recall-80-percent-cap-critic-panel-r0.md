# Critic Panel — #1105: ID.4 Fourth Battery Recall, "Charge It Less" (round 0)

**Article:** `drafts/1105-id4-fourth-battery-recall-80-percent-cap.html`
**Journalist:** Clara Rollover | **Kicker:** Investigation
**Date of review:** 2026-10-09

## Hard gates (regex, not opinion)
| Gate | Result |
|---|---|
| Em dashes in body (`grep -o '—'`) | 0 — PASS (max 3) |
| Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack) | 0 — PASS |
| "The" sentence starters | 2.6% (1/39) — PASS (max 15%) |
| CSS class check | `class="story"`, links `../style.css`, no story-detail/story-content/story-page, no story.css — PASS |
| Hero image | Real JPEG (FF D8), 1920x1280, `?v=14266488` — PASS |
| Sentence rhythm script | PASS (variance 529.8 ≥ 200, short 11.1% ≤ 15%, long 55.6% ≥ 15%) |
| References block | Present, 4 linked references, no invented URLs — PASS |
| Actionable insights | Present (story-action + disclaimer) — PASS |
| Word count | 596 prose-only (recent shipped range 564–594; acceptable for a four-campaign story) |

## 1. General Editor — 8.5/10
Complete arc: kicker, headline with the hook, lede with bolded stat, pull stat, four-campaign genealogy, the widening-net reveal, zero-remedy escalation, full-strength counterargument, closer, action block, references, disclaimer. Minus: single-issue recall story, so the body is a list-plus-reveal rather than a data investigation; the genealogy paragraph is unavoidably list-like. No filler. Clara's "before you sign" closer is earned.

## 2. Voice Coach — 9.0/10
Distinct Clara voice throughout: "Before you buy a used ID.4, you might want to see this," "the owner is not being protected; the owner is being managed," mid-thought start, varied rhythm (script passes at 529.8 variance). No banned phrases, no "X isn't about Y" constructions. Could not be swapped with Rex or Dale without rewriting. Sentence rhythm gate verified via script: PASS.

## 3. Ethics Reviewer — 9.0/10
No victims to exploit; no injury count to inflate (none reported). Treats the low observed incidence honestly (22 claims over 2.5 years stated in the counterargument, not buried). Gives Volkswagen the full-strength counterargument. Class action referenced as allegation, not fact. No moral grandstanding; the "being managed" closer is an opinion clearly framed as the desk's view.

## 4. Social/Shareability — 8.5/10
Headline carries the hook ("a Fourth Time," "'Charge It Less'"). Pull stat (4 recalls) is share-sized. Closer line ("the fifth letter brings another habit, not a fix") is quotable. Minus: recall stories are inherently less viral than body-count investigations; the audience is owners and used-car shoppers, who will share it functionally.

## 5. Legal Accuracy — 8.5/10
All claims trace to electrek's Oct 8, 2026 reporting on NHTSA campaign 26V630, the NHTSA database, or the KTMC class-action press release. Defect description, unit count (22,524), MY range (2023–2026), "thermal propagation," unknown root cause, no remedy, Nov 27 letter date, 93EX internal code — all sourced. One caution flagged: "cars Volkswagen had already cleared are back in the recall" paraphrases VW's "vehicles not included in previous battery recall campaigns"; the reading is fair but interpretive, and the article keeps VW's quoted phrasing alongside it. No defamation exposure.

## 6. Research Rigor — 9.0/10
Original contribution: (1) the four-campaign genealogy with the running US total 67,704 (629+670+43,881+22,524, verified), unpublished as a roll-up in any press found; (2) the widening-net finding (26V630's scope explicitly includes vehicles outside prior campaigns, plus MY 2026 added); (3) the zero-remedy escalation vs. the first three campaigns. Limitations stated explicitly (unknown root cause, undisclosed VIN split, claims vs. confirmed fires, remedy status dated October 2026). Counterargument at full strength. Every number shows its inputs.

## 7. Data Presentation — 8.5/10
Pull stat + pull label with units and context. Sub-counts sum correctly (629 + 670 + 43,881 + 22,524 = 67,704). Dates anchored (letter Oct 6, letters Nov 27, claims window Jan 2024–Aug 2026). 22-claim incidence framed against ~45,000 previously recalled units. No chart needed for a four-number story; numbers presented, not buried.

## Verdict
All 7 critics ≥ 8.5. All hard gates pass. **→ SHIP.**

Scores: general_editor 8.5, voice_coach 9.0, ethics_reviewer 9.0, social_shareability 8.5, legal_accuracy 8.5, research_rigor 9.0, data_presentation 8.5. Average: 8.71.
