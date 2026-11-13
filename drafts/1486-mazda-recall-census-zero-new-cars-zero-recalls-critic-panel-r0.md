# Critic Panel — #1486: Mazda Recalled Its New Cars Zero Times in 2026 (Round 0)

**Slug:** 1486-mazda-recall-census-zero-new-cars-zero-recalls
**Journalist:** Axle McScatter
**Date:** November 12, 2026
**Draft:** drafts/1486-mazda-recall-census-zero-new-cars-zero-recalls.html

## Hard gates (regex = source of truth)

- **Em dashes (literal U+2014):** 0 — PASS (max 3)
- **Banned phrases:** 0 matches ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "The numbers don't lie") — PASS
- **"The" sentence starters:** 5/57 = 8.8% — PASS (max 15%)
- **CSS class check:** `class="story"` present; `../style.css` linked; no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- **Sentence rhythm (`sentence-rhythm-check.py --json`):** full file PASS (variance 3546.6, short 1.8%, long 50.9%); body-only PASS (variance 211.8, short 0.0%, long 53.1%). Note: body variance 211.8 clears the 200 floor by only 11.8, and short_pct 0.0% means the rhythm fixes eliminated every fragment — the prose is now long-sentence-heavy, which is itself a mild uniformity risk. Acceptable, but do not lengthen further without adding a punch.
- **Structure:** kicker, h1, byline, dateline, hero img (real JPEG 1920x1280, `?v=c48b6215` on img + og:image), pull-stat/pull-label, 8 body paragraphs, references (12, all verified URLs), disclaimer, footer — PASS
- **Actionable insights:** VIN-check guidance for 2026 owners, 8026C label recall, the three 2025 campaigns, RQ26002 steering reporting — PASS

## 1. General Editor — 8.8/10

Structure is sound: kicker, headline, lede with the key stat bolded, pull stat, eight body paragraphs, references, disclaimer. The lede is the best sentence in the piece. Weaknesses: the brand-count paragraph is a 33-word run-on list that reads like a spreadsheet read aloud, and at ~1,150 body words the piece runs long against the 300–500-word guide (in line with recent census articles, but the middle sags on method detail). The "What this story does not prove" paragraph is excellent and saves the piece from its own confidence.

## 2. Voice Coach — 8.6/10

Axle's voice holds: numbers-obsessed, dry, the "I ran the numbers" opener is his catchphrase and it earns its place. No banned phrases, no AI tells in the lede. Rhythm passes but thinly (body variance 211.8 vs floor 200), and the revision that fixed the short-sentence failure removed every fragment — 0.0% short sentences is the opposite failure mode waiting to happen. The table paragraph's comma-chain is the weakest rhythm moment. Keep the voice, but the piece needs one genuine punch sentence back, and the table paragraph needs breaking up.

## 3. Ethics Reviewer — 9.0/10

Fair to Mazda throughout. The counterargument paragraph states the skeptical case at full strength ("zero recalls is not zero defects... Ford's 41 recalls are at least public") and concedes it is "mostly fair." The article says plainly what it cannot prove, attributes the 2025 figures, and never presents the open RQ26002 query as a finding. No self-congratulation, no moralizing, no victim-blaming. The "sticker" framing is snarky but accurate — it is an emissions-label recall, not a safety defect, and the article says so twice.

## 4. Social / Shareability — 8.7/10

Headline is highly shareable, and the pull stat "0" is a perfect share card. The zero-vs-277,273 contrast is the hook that travels. Weakness: the middle is method-heavy (API 400s, six confirmations, control sweeps) and will lose casual readers before they reach the sticker paragraph. The sticker is the most shareable detail in the piece and it sits in paragraph five. Consider moving it up — but the method paragraph must stay first, because a zero earned by a broken query is worth nothing, so this is a structural tension, not a fixable defect.

## 5. Legal Accuracy — 8.8/10

Campaign numbers verified: 25V357 (171,412), 25V568 (104,854), 25V737 (1,007), 24V022 (43,754, from the NHTSA RQ26002 document's own 29,490 + 14,264 breakdown), RQ26002 (Feb 6, 2026, 26 reports), 8026C (May/June 2026, CX-50 Hybrid, Sep 8–25, 2025 builds). Sales figure 341,714 is Mazda's own release (Nov 3, 2026). One residual risk: the 25V357/25V568/25V737 populations are cited via a lemon-law tracker summarizing NHTSA filings rather than the Part 573 PDFs directly; the reference attributes this correctly, but a primary-document check would be stronger. No defamation risk: all defect descriptions come from NHTSA filings or the manufacturers' own documents, and the open query is labeled an allegation.

## 6. Research Rigor — 8.7/10

Genuine original contribution: the zero census itself, the total API-vocabulary failure documented with a 17-spelling matrix, the 277,273-vehicle 2025 contrast, the 8026C sticker boundary case, the completed eleven-brand table. Limitations are stated explicitly in the article ("What this story does not prove"), the strongest counterargument is given at full strength, and the methodology is transparent (32 queries, control sweeps, six confirmations). Weakness: the central finding is second-hand by construction — the API cannot query a 2026 Mazda at all, so the zero rests on outside sources rather than a primary NHTSA pull. The article is honest about this, and the honesty is the rigor. The 25V figures deserve a Part 573 spot-check in a future revision.

## 7. Data Presentation — 8.0/10 — FAIL

The pull stat "0" is perfect, and the 277,273 contrast is stated clearly. But the eleven-brand census table — the core artifact of a census article — lives only in the research file. The article states the numbers in a 33-word run-on prose sentence instead of showing the table. A reader who wants to compare brands has to parse a comma-chain. The per-model all-zero table is rightly omitted (seven rows of zero add nothing), but the brand table is not optional: it is the finding. The table must be in the article body, scannable, with Mazda's row as the last row.

## Verdict: REVISE — round 0 → round 1

Six of seven critics at 8.5+. Data Presentation at 8.0 blocks shipment. Required revision: add the eleven-brand census table (`<table class="data-table">`) to the article body after the "Put the zero in the table" paragraph, and shorten the run-on prose list to a summary sentence pointing at the table. Re-run all hard gates after the edit (the table text has no sentence-ending punctuation, so verify the rhythm script still passes), then re-score Data Presentation.
