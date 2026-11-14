# Critic Panel — #1503 Infiniti recall census (round 0)

**Slug:** 1503-infiniti-recall-census-1-sticker-82-percent-infiniti
**Journalist:** Vin Wreckage
**Date:** November 14, 2026
**Verdict:** SHIP (all 7 critics ≥ 8.5, all hard gates pass)

## Hard gates (regex = source of truth)

- **Em dashes:** `grep -o '—' drafts/1503-*.html | wc -l` = **0** (max 3). PASS.
- **Banned phrases:** grep for "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus the STORY_GUIDE extended list = **none**. PASS.
- **"The" sentence starters:** 0 of 80 body sentences (0.0%, max 15%). PASS.
- **CSS class check:** `class="story"` present (1x); no `story-detail`/`story-content`/`story-page`; links `../style.css`. PASS.
- **Sentence rhythm** (`sentence-rhythm-check.py --json`): variance **560.6** (≥200), short sentences **12.8%** (≤15%), long sentences **56.4%** (≥15%). PASS, no diagnosis.
- **Hero image:** drafts/1503-infiniti-recall-census-1-sticker-82-percent-infiniti.jpg — real JPEG (FF D8), 1920×1280, md5 prefix 62835274, cache-busted `?v=62835274` on img/og/twitter refs.
- **Numbers reconciled by script:** QX56 24,277 + QX80 114,295 = 138,572 Infiniti; + Armada 29,578 = 168,150 (amended filing); 138,572/168,150 = 82.4%; excluded 18,505 + 89,660 = 108,165; counted+excluded 246,737; counted share 56.2%.

## Round-0 fixes applied during critique (before scoring finalized)

1. **ref-5 title corrected:** the draft cited #1480 as "Nissan's Recall Census: 7 Campaigns, and the Kicks Carries Three" — invented. Real queue title verified from status.json: "Nissan Recalled Its New Cars 7 Times. The Kicks Carried Three of Them." Fixed in the HTML.
2. **Counted-table total 168,149 → 168,150:** the lede uses the amended filing total (168,150, the per-year table sum) while the table used the announced total (168,149); a scanning reader saw two totals. Table now matches the lede; the one-vehicle announced-vs-amended discrepancy stays disclosed in the limitations paragraph.
3. **Limitations now flags the 25V821 total's provenance:** the 64,085 campaign total is a secondary reading (The Recall Desk); the QX80 population (18,505) is from Infiniti's own R25D7 bulletin. Added one clause.
4. Gates re-run after fixes: em dashes 0, banned phrases none, rhythm passed (variance 560.6, short 12.8%, long 56.4%).

## Scores

### 1. General Editor — 8.8/10
Structure mirrors the series and the arc holds: lede, pull stat, method, campaign, one-car detail, counted table, excluded filings, parent-company math, camera thread, series table, counterargument, limitations, takeaways. The lede is punchy, the "two-car garage" opener is good Vin, and the "office supplies" / "peel-and-stick craft project" lines land. Minor: at 1,885 body words it runs long against the 300-500-word guide, but that is the census-series standard (Acura #1502 is the same shape), so no deduction beyond a note.

### 2. Voice Coach — 9.0/10
Zero banned phrases, zero em dashes, zero "The" starters, rhythm metrics pass with wide margins. Vin's voice is distinct throughout and not swappable with Clara's Acura piece: "bends the light", "a typo in a birth certificate", "a flagship whose defining feature is a camera that keeps not working". Sentence lengths swing from two-word punches ("Two.", "One.") to 60-word builds. No AI tells detected.

### 3. Ethics Reviewer — 9.0/10
No self-congratulation, no victim-blaming, no overclaiming: the label recall is explicitly a zero-injury typo, and the counterargument is stated at full strength before the takeaways. The QX56 impairment finding is cited from the site's prior coverage, not re-litigated or sensationalized. Fair to Nissan/Infiniti throughout.

### 4. Social/Shareability — 8.8/10
Headline is shareable and the 82.4% pull stat is the hook. Quotable lines: "A hundred and sixty-eight thousand trucks, and the repair is office supplies." / "It was an Infiniti recall that happened to include some Armadas." / "One. A single 2027 QX80." The counted-vs-excluded inversion gives readers a reason to forward it to an Infiniti owner.

### 5. Legal Accuracy — 8.8/10
FMVSS 110/111 and 49 CFR Part 567 cited correctly. All three Part 573 URLs verified live during research (RMISC-26V455-8956, RCMN-25V821-0908, RCLRPT-25V437-9564). Campaign numbers, dates, and per-model splits reconciled against the filings. One error caught and fixed in this round (ref-5's invented #1480 title); the scored draft carries the verified title.

### 6. Research Rigor — 8.8/10
Original computed contribution, not synthesis: the 82.4% Infiniti share, the 138,572 total, the 108,165 excluded total, the 56.2% counted share, the one-car 2027 QX80, the Nissan/Infiniti distinct-defect finding (7, Infiniti adds zero). Limitations are honest and specific, including the API vocabulary-gap risk and the direction of bias (undercount). Methodology is transparent (18 queries, the 400 trap, the DD/MM/YYYY trap). Minor: the 25V821 campaign total is a secondary reading, now disclosed in the limitations paragraph after the round-0 fix.

### 7. Data Presentation — 8.7/10
Three tables, all numbers reconciled by script in this run. The counted table, excluded table, and series table each carry the number the surrounding prose needs. Minor: the announced-vs-amended 168,149/168,150 split required a limitations-paragraph disclosure to stay honest; after the round-0 fix the lede and table agree on 168,150 and the announced figure appears only where it belongs.

## Average: 8.84/10 — SHIP

All 7 critics ≥ 8.5. All hard gates pass. No revision round needed. Proceed to SHIP: ship_date 2028-08-24 (one day after the latest SHIP_BLOCKED ship_date, 2028-08-23).
