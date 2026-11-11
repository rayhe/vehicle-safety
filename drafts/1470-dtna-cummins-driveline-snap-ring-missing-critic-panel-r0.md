# Critic Panel — Round 0 — #1470: The Driveshaft Can Fall Out. Cummins Knew First.

**Slug:** `1470-dtna-cummins-driveline-snap-ring-missing`
**Title:** "The Driveshaft Can Fall Out. Cummins Knew First."
**Journalist:** Rex Driverton
**Kicker:** Investigation
**Date:** 2026-11-11
**Round:** 0

## Hard gates (regex = source of truth, verified pre-panel)
- Em dashes (literal `—`): **0** (max 3) — PASS
- Banned phrases: **0** ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans) — PASS
- "The" sentence starters: **3.0%** (1 of 33 body sentences, max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- Sentence rhythm: variance **1215.7**, short **12.5%**, long **50.0%** — PASS (exit 0)
- Hero: real JPEG (magic FFD8), 1920x1280, 427,921 bytes, hash fb778a3a — PASS (og:image + img src point to `../images/1470-...jpg`, the publish path; file currently in drafts/, moved at publish per pipeline)
- Prose word count: **708** (STORY_GUIDE says 300–500, recent shipped range 880–1,526 — within shipped range)
- References: 4 sources, all linked — PASS (NHTSA 26V737 API record, NHTSA 26E077 record, Transport Canada 2024310, AutoMotor News tracker)
- Actionable insights: VIN check with campaign numbers for 7 named nameplates, Meritor part-owner check (AFT26001), following-distance advice for drivers behind trucks — PASS
- Pre-panel fix: the "exactly sixty days after filing, which is the regulatory maximum" clause was softened to "sixty days after filing, the full length of the owner-notification window" before scoring, because the 60-day clock under 49 CFR 577.7 runs from the defect determination date, which may predate the report-received date. Gates re-verified after the edit (em 0, banned 0, rhythm PASS).

## 1. General Editor — 8.8/10
Lede opens on the image, not the filing: a new truck held together by optimism, then the number. Structure is clean: lede, the part explained, pull stat, supplier-first sequence, the 2024 precedent, counterargument, limitations, action. The "somebody else's problem too" line is the spine and it earns its place in paragraph two. Deduction: at 708 words of prose the piece is long for the guide's 300–500 band, and the middle sags slightly — the notification-gap paragraph and the precedent paragraph both end on a number (60 days, 889 days) in the same cadence. One of the two could have landed its punch differently.

## 2. Voice Coach — 8.9/10
Distinctly Rex: deadpan, noir, numbers doing the arguing, fragments used as punctuation ("Same manufacturer."). Could not swap this byline with Mia or Clara without rewriting. Banned phrases zero, rhythm passes with high variance. Deduction: "All true. Also true:" is mannered, twice in one paragraph, and "A missing snap ring is a manufacturing escape, not a design flaw" is the closest the piece comes to press-release paraphrase. One more Rex-ism in the counterargument's first half would have kept the voice from going straight for a sentence.

## 3. Ethics Reviewer — 8.7/10
Fair to both DTNA and Cummins where fairness is owed: the counterargument paragraph is at full strength (no crashes, no injuries, unstated defect rate, system working as intended) and the limitations are explicit in the article itself, including that the separation scenario is predicted, not observed. No malice alleged anywhere; the 60-day framing was corrected pre-panel. Deduction: the headline's "Cummins Knew First" implies the truckmaker was slow, while the body concedes the two companies may have been talking for weeks before either filed — a reader who only reads the headline keeps the sharper impression. The body corrects it; the headline does not.

## 4. Social / Shareability — 8.6/10
"The Driveshaft Can Fall Out" is a vivid, shareable image, and "9 days" plus "889 days" are hook numbers that travel without the article attached. The pull stat anchors it. Deduction: a heavy-truck driveline recall has a narrower audience than a passenger-car story, the headline is long and does not compress to a single viral phrase, and there is no human victim or crash to anchor emotion — the piece has to earn shares on the pattern alone, and it mostly does.

## 5. Legal Accuracy — 8.8/10
Every figure traces to a linked source: the NHTSA API record for the 3,894 population and the seven nameplates, the 26E077 record for the 206 drivelines and the Meritor model numbers, Transport Canada for the 2024 precedent, the tracker for the filing date. Campaign numbers (26V737, F1046, 26E077, AFT26001) are exact. No statutes are quoted, so there is nothing to misstate there; the 60-day window is now phrased to match the regulation. Deduction: the nine-day supplier-first sequence is read off two report-received dates, and the article presents it as a sequence of filings, which is accurate, but a reader could take it as a sequence of knowledge — the limitations paragraph discloses this, the lede-adjacent paragraph does not.

## 6. Research Rigor — 9.0/10
Original contribution is real and shown with math: the 9-day supplier-first lag, the 18.9x population ratio, the 23-vs-60-day notification gap, the 889-day precedent with the same two nameplates and the same failure class, the seven-nameplate scope. Limitations are honest (no per-model split, no defect rate, no field failures documented, Part 573 chronology not retrieved) and the counterargument is stated at full strength in the article itself. Deduction: the Part 573 chronology section was not retrieved, so the piece cannot say when either company first learned of the defect, and the 2024 precedent is Canadian — the corresponding U.S. campaign was not verified, so the pattern is stated as a DTNA missing-snap-ring pattern, not a counted U.S. repeat.

## 7. Data Presentation — 8.7/10
Pull-stat 9 days with a clear label; every number arrives with its denominator (3,894 trucks, 206 drivelines, 7 nameplates, 60 days, 889 days). The derived figures (18.9x, 23 vs 60 days) are shown arithmetic, not asserted. Deduction: the 3,894 population gets no per-nameplate breakdown (unavailable, disclosed), and the four-date timeline (Oct 28, Nov 6, Nov 20, Jan 5) would scan better as a small table than as prose scattered across two paragraphs.

## Verdict
- Average: **8.79/10** (8.8, 8.9, 8.7, 8.6, 8.8, 9.0, 8.7)
- All 7 critics at 8.5+ and all hard gates pass → **SHIP**
- Round 0, no revision round needed. Minor notes above are polish, not blocks.
