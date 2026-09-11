# Critic Panel — #884: The Ghost Fleet: 1,466 Deaths Filed Under Cars That Didn't Exist Yet (round 0)

Journalist: Axle McScatter | Kicker: Investigation | Date: 2026-09-11

## Hard gates (all PASS)

- Em dashes (mechanical count, story-body): 0 literal em-dash characters (max 3) — PASS
- Banned phrases ("Here's the thing," "Here's where it gets interesting," "The kicker:," "Let's be clear," "Make no mistake," "And it's not even close," "The numbers don't lie," "X isn't about Y. It's about Z."): 0 — PASS. ("I ran the numbers, then I ran them again, and they didn't get better." is Axle's documented JOURNALISTS.md catchphrase opener, not a banned phrase.)
- "The" sentence starters: 3.0% (max 15%) — PASS
- CSS: `class="story"`, `../style.css`, `.container`, `story-kicker/byline/dateline`, `story-body`, `pull-stat/pull-label`, `story-references`, `story-disclaimer`, `site-footer`, Inter font — PASS. (validate.sh site-wide: ALL CHECKS PASSED.)
- Sentence rhythm: variance 575.9 (≥200), short 10.3% (≤15%), long 48.3% (≥15%) — PASS (two revision passes: merged the triple-fragment opener into one sentence; folded "True." / "Only the badge is wrong." / "That work starts now." fragments into neighboring sentences)
- Word count: ~486 (300–500) — PASS
- Hero image: real 1920×1280 JPEG (magic bytes FF D8 verified), hash 6e3c47f9, cache-busted in both `<img>` and `og:image` — PASS (phantom car dissolving out of a spreadsheet grid with red-flagged cells; matches the ghost-fleet angle, no text overlay)

## Adversarial notes considered and resolved

- **Mechanism claim ("NHTSA reuses a dead model's number"):** stated as fact, but the direct evidence is the 1975–2011 codebook's old meanings plus the map's new meanings plus 11 independent ghost windows matching the old models' production runs to the year. That triangulation is strong enough to print, and the article's empirical core (the ghost census) does not depend on the mechanism at all. Noted, not blocking.
- **Corrected rates assume clean denominators:** explicitly flagged in the Limitations paragraph. The direction and magnitude are robust to this.
- **"Ten stories" count:** softened in revision to "the stories that cited these figures" to avoid a brittle count.
- **Tahoe exclusion:** the 25 pre-1995 Tahoe deaths are documented code-sharing (Blazer/Tahoe), correctly excluded from the bug census and noted in the research file.

## Scores

1. **General Editor: 9.0** — Clean arc: catchphrase opener → the impossible HHR hook → ghost-census table → recycled-codebook mechanism → corrected rates with the #872 kill → HHR double-error and toxicology contamination → limitations → counterargument → fix. The table is the centerpiece and earns its space. No throat-clearing; starts mid-thought per the style rules.
2. **Voice Coach: 9.0** — Axle unmistakable: catchphrase opener, numbers-first register, the table as argument, "a typo with a confidence interval" as the closer. No banned phrases, no AI tells, rhythm passes all three sub-gates, "The" starters at 3.0%. Could not swap this byline with any other journalist.
3. **Ethics Reviewer: 9.0** — A self-audit that behaves like one: "our own pipeline" appears throughout, no blame-shifting to NHTSA, the contaminated published stories are named (#872, Fit, Spark pieces), caveats are load-bearing (denominators, 2019+ cleanliness, national counts untouched). No persons named anywhere; zero defamation surface.
4. **Social/Shareability: 8.5** — "1,466 deaths filed under cars that didn't exist yet" is a strong headline; the 86.7% MKC pull stat is the share magnet; correcting the site's own #872 finding gives existing readers a reason to click. Minor: the 11-row table is dense on mobile, but that is the genre and the pull stat carries the skim reader.
5. **Legal Accuracy: 8.5** — Every load-bearing claim is sourced: code meanings to the NHTSA AUM 1975–2011 (NBER mirror, linked), the VINA_MOD warning quoted verbatim (linked), map entries to repo line numbers, ghost counts and rates to `fars_output.js` distributions (recomputed independently during review: 348+296+269+172+144+62+54+54+37+25+5 = 1,466; HHR 2.12×265/534 = 1.05; MKC 144/166 = 86.7%). No legal claims, no persons, no defamation surface.
6. **Research Rigor: 9.0** — Genuine novel contribution: the pre-production-year census method, the 1,466-death count across 11 nameplates, the corrected rates, and the donor-model undercount mirror. Kill test documented in the research file. Dedicated Limitations and Strongest Counterargument sections, both substantive. Fully reproducible from the repo data plus the public manual.
7. **Data Presentation: 9.0** — The ghost-census table (model, ghost years, ghost deaths, share, true identity) is the article's spine and every cell is checkable. Corrected-rate pairs are specific (2.12→1.05, 1.28→0.42, 1.40→0.56, 0.52→0.26, 0.79→0.13). Pull stat (86.7%) is the single most shocking number and is correctly placed.

**Average: 8.86** — all 7 ≥ 8.5, all hard gates pass. → **SHIP_BLOCKED** (1/day gate consumed on 2026-09-11 by #878; earliest slot 2026-09-12).

## Round 0 revision notes

Pre-panel revisions only (no content changes after scoring): (1) trimmed 551→486 words; (2) cut "The" starters 16.7%→3.0% via five rephrasings; (3) rhythm pass: merged "I ran the numbers. Then I ran them again. They didn't get better." into one sentence, folded three fragments ("True.", "Only the badge is wrong.", "That work starts now.") into neighbors — short-sentence share 21.9%→10.3%.
