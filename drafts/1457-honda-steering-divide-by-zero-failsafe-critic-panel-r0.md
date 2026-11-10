# Critic Panel — Round 0 — #1457: Honda's Steering Software Divides by Zero. The Failsafe's Answer Is to Stop Steering.

**Slug:** `1457-honda-steering-divide-by-zero-failsafe`
**Title:** "Honda's Steering Software Divides by Zero. The Failsafe's Answer Is to Stop Steering."
**Journalist:** Vin Wreckage
**Kicker:** Investigation
**Date:** 2026-11-10
**Round:** 0

## Hard gates (regex = source of truth, verified pre-panel)
- Em dashes (literal `—`): **0** (max 3) — PASS
- Banned phrases: **0** ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans) — PASS
- "The" sentence starters: **10.9%** (5 of 46 body sentences, max 15%) — PASS (first draft failed at 17.0%, 8 of 47; fixed by rewriting three "The filing..." / "The calculation..." openers to "Honda's filing..." / "That calculation...", no content changed)
- CSS class: `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- Sentence rhythm: variance **792.4** (>= 200), short **14.0%** (<= 15%), long **48.8%** (>= 15%) — PASS (script exit 0)
- Hero: real JPEG (magic FFD8), 1920x1280, 432,277 bytes — PASS (og:image + img src point to `../images/1457-...jpg`, the publish path; file currently in drafts/, moved at publish per pipeline)
- Prose word count: **999** (recent shipped range 880–1,526)
- References: 6 sources, all linked — PASS (refs [4]/[5] fixed pre-panel: complaint citations now link to the specific ODI complaint pages on oemdtc.com instead of the generic nhtsa.gov/recalls page)
- Actionable insights: VIN check Nov 11, symptom signature, free reprogram, used-car verification — PASS

## 1. General Editor — 8.8/10
Lede opens with the divide-by-zero, not the recall boilerplate, and the pull-stat lands on the second screen. Structure is clean: lede, mechanism (two bugs), attention-monitor irony, 1,788-day fuse, three-failure pattern, counterargument, limitations, action. The "two bugs, not one" framing is the spine and earns its length. Deduction: the timeline paragraph is the densest passage (five dates in four sentences) and a reader could lose the thread between the Aug 2025 market-return analysis and the Feb 2026 straight-only confirmation. No structural rewrite needed.

## 2. Voice Coach — 8.8/10
Distinctly Vin: "a piece of software is doing arithmetic it learned in elementary school and failing it," "the safety net was wired to the trapdoor," "a lottery where the prize is manual steering at highway speed." Could not swap this byline with Rex or Mia without rewriting. Banned phrases zero, rhythm PASS with real variance. Deduction: "lit up like a slot machine" is the one image that strains, and the lede's "Somewhere inside..." opening is slightly soft for Vin, who usually starts mid-thought. One sharper cold open would have been better.

## 3. Ethics Reviewer — 8.7/10
Fair to Honda where fairness is owed: the counterargument paragraph is at full strength (0.023% claim rate, defensible engineering choice, routine code-clearing) and the limitations are explicit in the article itself. No malice is alleged; the deleted error codes are presented as a process failure, and the counterargument supplies the benign reading. Owner complaints are labeled unverified and not tied to the defect. Deduction: "parts whose evidence had already been erased" edges toward implying intent in the body, and the counterargument's softening comes two paragraphs later; a reader who stops early keeps the sharper impression.

## 4. Social / Shareability — 8.7/10
"Divides by zero" is a highly shareable hook, the kind of phrase that travels without the article attached, and the pull stat 635,808 is the number that anchors it. "A lottery where the prize is manual steering at highway speed" is quotable. The Nov 10 news peg makes it timely for same-day sharing. Deduction: the headline is long and does not compress to a single viral phrase as cleanly as some prior pieces; the strongest line is buried in paragraph five rather than the lede.

## 5. Legal Accuracy — 8.8/10
Every figure traces to the Part 573 filing (read in full from the NHTSA PDF, linked), Reuters, USA Today, or Torque News, all linked. No statutes or case law are invoked, so there is nothing to misstate there. The complaint citations were caught pointing at a generic URL before the panel and now link to the specific ODI complaint pages. Deduction: the RDX 25V582 comparison (0.3% defect estimate, different calibration error) relies on Torque News's summary of that filing rather than the RDX filing itself; the article does not overclaim beyond it, but the citation chain is one step removed.

## 6. Research Rigor — 8.9/10
Original contribution is real and shown with math: the two-bug framing (divide-by-zero plus the error handler as a second, chosen defect), the attention-monitor irony, the 1,788-day fuse, the 0.023% claim rate against a 100%-carry population, and the third-steering-failure-mode pattern across 24V-744 / 25V582 / 26V-721. Limitations are honest (complaints unverified, claim count not confirmed-defect count, 2026 Pilot question unanswered) and the counterargument is stated at full strength in the article itself. Verifiability: 6 references, all hyperlinked, with the primary PDF linked directly. Deduction: the 2026 Pilot open question is flagged but not resolved, and the piece cannot say whether the corrected software is in production vehicles; the gap is disclosed, not hidden.

## 7. Data Presentation — 8.7/10
Pull-stat 635,808 with a clear label; every number arrives with its denominator (383,110 / 177,100 / 75,598 by model, 146 claims against 635,808, 1 injury / 0 deaths over a stated window). The 1,788-day fuse is derived and dated, not asserted. Deduction: the model breakdown lives in prose across two sentences in the research file but only as a single clause in the article; a small table would have done the work in one glance. The 0.023% claim rate appears only inside the counterargument paragraph rather than beside the 146-claims figure where it belongs.

## Verdict
- Average: **8.77/10** (8.8, 8.8, 8.7, 8.7, 8.8, 8.9, 8.7)
- All 7 critics at 8.5+ and all hard gates pass → **SHIP**
- Round 0, no revision round needed. Minor notes above are polish, not blocks.
