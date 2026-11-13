# Critic Panel — #1487: Volkswagen Recalled Its New Cars 4 Times (Round 0)

**Slug:** 1487-volkswagen-recall-census-4-two-fires-a-crash-test
**Journalist:** Rex Driverton
**Date:** November 12, 2026
**Revision:** Round 0 (first draft)

## Hard gates (regex = source of truth)

- **Em dashes (literal U+2014):** 0 — PASS (max 3). All dashes in the file are `&mdash;` / `&ndash;` entities.
- **Banned phrases:** 0 matches — PASS. Checked: "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans ("Here's where it gets interesting", "Let's be clear", "Make no mistake", "And it's not even close", "The numbers don't lie", "X isn't about Y. It's about Z."). Note: Rex's roster catchphrase "The numbers don't lie, but they do occasionally smirk" was deliberately NOT used, because the first clause is a banned phrase.
- **"The" sentence starters:** 2/94 = 2.1% — PASS (max 15%)
- **CSS class check:** `class="story"` present; `../style.css` linked; no `story-detail`/`story-content`/`story-page`, no `story.css` — PASS
- **Sentence rhythm:** full file PASS (variance 2859.0, short 12.6%, long 42.5%); body-only PASS (variance 317.7, short 11.4%, long 41.8%). Fragments ("Every single one.", "Nobody is fixing the ID.4.") and long builds both present.
- **Structure:** kicker, h1, byline, dateline (November 12, 2026), hero img (real JPEG 1920x1280, `?v=31f99873` on img + og:image), pull-stat/pull-label, twelve-brand data-table, 12 body paragraphs, references (13, all verified URLs), disclaimer, footer — PASS
- **Word count:** 1,865 (body). Long against the 300–500-word guide, but the census format has established long form (#1486: 1,220 words); see General Editor note.

## Scores

- **General Editor — 8.7/10:** Structure holds: lede with the four-campaign shape, pull stat, method, table, four campaign paragraphs, clean-car pattern, counterargument, limitations, action list. The lede earns its length. The drag is word count: 1,865 is 50% longer than #1486, and the Atlas paragraph does double duty (26V473 plus the 25V835 do-not-drive context) at ~200 words. Nothing in it is padding — every paragraph carries a verified fact — so the length is a pacing note, not a defect. Would not cut.
- **Voice Coach — 8.8/10:** Rex is distinct from Axle's census voice: deadpan, noir, no throat-clearing ("Twelve brands into the recall census, Volkswagen files four."). Fragments land ("Every single one." "Nobody is fixing the ID.4."). Rhythm passes both full-file and body-only. Minor echo: "Put the four in the table" and "Give the skeptics their due" repeat #1486's phrasing; both read as series conventions now, not voice collapse. No banned phrases, no AI tells.
- **Ethics Reviewer — 9.0/10:** No fabrication; every claim traces to a Part 573 PDF, the NHTSA API, or a named press source. Limitations are explicit and honest, including the API's 37-of-42 failure and the month-old CarBuzz table. Counterargument stated at full strength. No self-congratulation, no moralizing, no kids' names, no invented quotes.
- **Social / Shareability — 8.7/10:** Headline carries the whole story (four recalls, two fires, Canada, no fix). Shareable lines: "discovered by the Canadians, not by Volkswagen", "the defect was 80 millimeters of wire away from not existing", "Nobody is fixing the ID.4. They are winding it down." The twelve-brand table is screenshot-able. The pull stat "4" is weaker than Mazda's "0" — the hook lives in the headline, not the number.
- **Legal Accuracy — 8.8/10:** Campaign numbers, dates, populations, FMVSS citations (301 fuel integrity, 111 rear visibility, 101 controls/displays) all verified against Part 573 PDFs. 26V590 scoped correctly (2018 Tiguan, 2018–2019 Atlas, Audi Q3; no 2026 MY). One nit: the body says 26V630 was "filed October 1" per the API's ReportReceivedDate; the Part 573 was submitted Sept 30 and amended Oct 1. Consistent with the census's own date convention; not an error. No action.
- **Research Rigor — 8.8/10:** Original contribution is real: the corrected 4 census, the API failure matrix with control sweeps (same spellings return 200 for MY2025), the CarBuzz cross-check matching on all ten nameplates, the 167,250 campaign-vehicle arithmetic, the twelve-brand table, the ID.4 three-recall count. Methodology transparent, limitations dedicated and honest. One real nit, fixed pre-ship: the article said the three ID.4 battery campaigns "together cover 67,034 cars" (ReadUS247) while also saying the January pair "covered 44,551 cars" (Gadgets365) — those two sources are mutually inconsistent by 41 cars (67,034 − 22,524 = 44,510, not 44,551). Changed the article to "about 67,000 cars" and kept 44,551 for the January pair as its source's figure. The 41-car gap is immaterial to the story and is now not presented as false precision.
- **Data Presentation — 8.8/10:** Twelve-brand table in the body, VW row bolded, scannable. Campaign populations embedded in prose paragraphs rather than a campaign table; per-model 0/1 counts in prose rather than a table. Comparable to #1486 round 1 (9.0) minus a small gap: a four-row campaign table would make the populations glanceable. Not worth a revision round on its own; the numbers are all present and checkable.

## Verdict: SHIP

All seven critics at 8.5+ (lowest: General Editor 8.7, Social 8.7). All hard gates pass. Average 8.80. Proceed to SHIP: ship_date one day after the latest SHIP_BLOCKED ship_date in the queue (2028-08-07 → 2028-08-08), phase=SHIP_BLOCKED, queue entry #1487. Pre-ship fix applied: "67,034 cars" → "about 67,000 cars" (41-car inter-source inconsistency, see Rigor note).
