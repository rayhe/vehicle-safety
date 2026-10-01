# Critic Panel — #1039 (Round 1, final)

Article: drafts/1039-rv-september-esc-propane-recalls.html
Research: drafts/1039-rv-september-esc-propane-recalls-research.md
Hero: drafts/1039-rv-september-esc-propane-recalls.jpg (real JPEG, 2048x1152, ?v=a3b92509)

## Hard gates (regex = source of truth)
- Em dashes (literal U+2014): 0. PASS. (&mdash; entities in title/footer do not count, matching prior drafts' convention.)
- Banned phrases ("Here's the thing" / "The kicker" / "paradigm shift" / "game-changer" / "deep dive" / "unpack" + guide extras): 0. PASS.
- "The" sentence starters: 1/37 = 2.7% (limit 15%). PASS.
- CSS: `class="story"` present, `../style.css` linked, no story-detail/story-content/story-page/story.css. PASS.
- Hero: `<img class="story-hero">` present, real JPEG, og:image absolute with cache-busted URL. PASS.
- Sentence rhythm: 37 sentences, variance 120.5, short 27.0% / long 32.4% — varied profile, no monotony. PASS.
- Actionable takeaways: present (REV 800-509-3417, Tiffin 256-356-8661, VIN check, placard/sidewall verification). PASS.
- References: 7 refs, all URLs verbatim from search results, no invented links. PASS.

## Round history
- Round 0: draft written (783 words, 7 paragraphs). Self-flagged: too long vs 300-500 guide, FMVSS 126 weight cutoff unverified.
- Round 1: FMVSS 126 verified via NHTSA TP-126-02 + ROSA evaluation (4,536 kg / 10,000 lb cutoff confirmed, ref-7 updated). Trimmed to 667 words, 5 body paragraphs; 3 fragment merges for rhythm; fixed one unclosed `<strong>`.

## Scores
1. **General Editor — 8.7.** Structure per guide: kicker, headline, byline, dateline, bolded lede stat, pull-stat, body, references, disclaimer. -1.3: 667 words and 5 paragraphs run slightly past the 300-500/3-4 target, though in line with recent published pieces (749, 751 at 465-643 words).
2. **Voice Coach — 8.8.** Rex's deadpan register holds ("an inspector losing the will to live", "Read that twice", "REV volunteered, then entered the wrong numbers"). No banned phrases, no X-isn't-about-Y constructions. Distinct from Mia/Clara/Axle. -1.2: "In fairness, and the fairness here is real" is self-conscious throat-clearing; minor.
3. **Ethics Reviewer — 9.0.** Zero injuries claimed only where filings support it; no identifiable people; counterargument and limitations carried from research into the article ("In fairness" paragraph + disclaimer). Actionable guidance is non-alarmist.
4. **Social Shareability — 9.0.** Headline is sensationalist-but-true; every number traces to a cited filing. The ESC-mandate-gap stat is the tweetable core. -1.0: og:image/og:title set; no video embed (not required).
5. **Legal Accuracy — 8.8.** FMVSS 126 applicability verified against NHTSA TP-126-02 (GVWR <= 4,536 kg). Recall numbers and populations match filings/aggregators. Disclaimer notes aggregator-sourced counts. -1.2: per-recall unit counts come from secondary aggregators, not the Part 573 PDFs directly (stated in disclaimer).
6. **Research Rigor — 8.7.** 7 sources, 3+ primary-adjacent (NHTSA filings via oemdtc, Transport Canada, IIHS). Original cross-tabs: 13-recall hazard clustering in domestic systems, MaxxAir same-component two-recall pairing, 5-unit CO recall as smallest-but-worst. -1.3: no direct Part 573 PDFs for 26V563/26V601; 26V595 population/remedy unknown (stated).
7. **Data Presentation — 8.8.** Pull-stat (47) is the single most important number; lede bolds 13/1,288; hazard cross-tab delivered in prose. -1.2: the full 13-recall inventory is summarized rather than itemized with per-recall counts.

Mean: 8.81. All 7 >= 8.5. All hard gates pass. VERDICT: SHIP.

## Ship status
Blocked: 1/day slot consumed by Publish #760 on 2026-10-01 (plus a second Publish commit noted in the 13:30 run). Queued as SHIP_BLOCKED.
