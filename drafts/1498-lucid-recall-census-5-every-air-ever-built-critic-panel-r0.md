# Critic Panel — #1498 Lucid recall census — Round 0

**Slug:** 1498-lucid-recall-census-5-every-air-ever-built
**Journalist:** Clara Rollover
**Date:** November 13, 2026
**Draft:** drafts/1498-lucid-recall-census-5-every-air-ever-built.html
**Hero:** drafts/1498-lucid-recall-census-5-every-air-ever-built.jpg

## Hard gates (regex, source of truth)

- **Em dashes:** 0 (max 3) — PASS
- **Banned phrases:** 0 ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake", "And it's not even close") — PASS
- **"The" sentence starters:** 1 of 112 sentences, 0.9% (max 15%) — PASS
- **CSS class:** `class="story"`, links `../style.css`, no `story-detail`/`story-content`/`story-page`/`story.css` — PASS
- **Hero:** real JPEG ff d8, 1920x1280, 458,139 bytes, hash 594264a1 — PASS
- **Sentence rhythm script:** variance 831.9 (≥200), short 14.3% (≤15%), long 50.0% (≥15%) — PASS
- **Word count:** 1,917 body words (excl. references), vs. 1,577 for #1497 — longer than recent censuses, noted below

## The 7 critics

### 1. General Editor — 8.8/10
Lede lands the thesis in the first paragraph (five campaigns, 50,004 campaign-units, the biggest is every Air ever built, 100 percent defect estimate, 3 fires) and Clara's consumer warning closes it ("Before you sign for a used Air, you might want to see this"). Structure is the series standard and it works: method, the two January camera recalls as one story, the already-fixed pattern, the fire recall, the two March supplier recalls, the denominator, action, limitations, counterargument. The pull stat (27,185) is the article in one number. Deductions: 1,917 body words is the longest census in the recent run (Genesis was 1,577) and the article earns most of the length, but the "What to do" paragraph is a single dense block of five VIN checks, the same note as #1496 and #1497. "Read that number again" in the lede is a flourish the article does not need. Neither is worth a revision round on its own.

### 2. Voice Coach — 8.9/10
Clara's register is present and distinct from Rex's deadpan, Mia's engineering enthusiasm, and Axle's chart-nerd: "Lucid designed neither failure. It bought both.", "Algorithms found the first 225. Drivers found the rest.", "Ask the seller for the current software version before you ask about the price." She is direct, practical, and slightly angry on behalf of consumers, which is exactly her beat, and the advice is always a concrete action rather than a sentiment. No banned phrases, one "The" starter in 112 sentences, rhythm script passes with wide margins (variance 831.9). Deductions: "Here is the part that should make every Lucid owner check a version number" is throat-clearing, and "Read that number again" is a mild flourish; both read as Clara's cadence rather than a tell, but they are the two weakest sentences in the draft.

### 3. Ethics Reviewer — 9.0/10
Limitations are stated plainly and specifically (filing census not danger ranking, campaign-unit totals count a vehicle once per campaign, model-level sales are not disclosed by Lucid, the 29-day stop-sale is trade-press reporting). Counterargument is granted at full strength and conceded ("All of that is fair, and this article grants it"). No self-congratulation, no victim-blaming (the park-outside and install-the-update advice targets the manufacturer's own advisory, and the unpatched-owner framing puts the risk on the update mechanism, not the owner). No kids, no names on public pages issues. Deduction: none material; 9.0 is the ceiling for a census piece with no human subjects.

### 4. Social / Shareability — 8.8/10
Headline is a clean share hook ("The Biggest One Was Every Air Ever Built"). Pull stat 27,185 is quotable. "An over-the-air fix that is available is not a fix that is installed" and "Algorithms found the first 225. Drivers found the rest." are both shareable nuggets, and the 6,904 unpatched owners figure is a second hook the headline does not use. Deduction: the og:description repeats the headline's numbers rather than adding a second hook; acceptable, not a revision trigger.

### 5. Legal Accuracy — 9.0/10
Campaign numbers, dates, populations and defect estimates all trace to Part 573 reports and NHTSA acknowledgment letters linked in the references (26V017: 10,816, 2.8.0–2.8.16, remedy 2.8.17, November stop-sale, letters Mar 13; 26V018: 3,900, remedy 3.3.20 released Dec 11, 2025, 3,462 updated, 438 not; 26V192: 4,476, 97% defect estimate, Camaco process change without notice or approval, found Jan 22, stop-sale Jan 28, clean point Feb 14, letters May 22; 26V193: 3,627, expansion of the 225-unit October 2025 filing, 26 post-recall failures, GKN/Bossard; 26V540: 27,185, 100% defect estimate, 3 fires, 4 smoke incidents, remedy 2.10.0, 20,719 updated, 6,466 not, letters Oct 16). FMVSS 111, 207, and 210 citations are correct. Arithmetic verified: 10,816 + 3,900 + 4,476 + 3,627 + 27,185 = 50,004; Air 41,628, Gravity 8,376, software 41,901, physical 8,103; 27,185 is 54.4% of the total; 50,004 / 10,852 = 4.6x; 438 + 6,466 = 6,904; cumulative deliveries 4,369 + 6,001 + 10,241 + 14,931 + 10,852 = 46,394, stated as roughly 46,000. The 29-day stop-sale is attributed to trade press (EV) with the filing's dates given alongside. Deduction: 9.0, not 9.5, because the cumulative-deliveries figure is a sum across five annual totals rather than a single sourced number, and the article correctly hedges it as "roughly 46,000."

### 6. Research Rigor — 9.1/10
Original contribution is real: the corrected 5 census from a 14-query API run with the complete VPIC 2026 list (Air, Gravity) and the cleanest coverage in the series (two models, both returned 200), the 50,004 campaign-unit total with the Air/Gravity and software/physical splits, the 26V540 fire finding (27,185 vehicles, 100% defect estimate, 3 fires, 4 smoke incidents, park-outside advisory), the already-fixed-before-filed pattern with the exact unpatched counts (438 and 6,466), the supplier-causation thesis for both physical recalls with the Rivian contrast, the 26V192 production disclosure (4,476 Gravity, the only public Gravity production figure), the 26V193 expansion story (225 to 3,627 after 26 field failures), and the twenty-brand table (total now 180). Methodology is transparent (query counts, 400 semantics, dedup rule, overlap explained). Limitations and counterargument are dedicated paragraphs, not hedges. Verifiability: every number links to a Part 573 PDF, an NHTSA acknowledgment letter, an SEC filing, or a named trade-press story. Deduction: the series still lacks a verified cross-brand largest-single-campaign comparison, so the article wisely claims only "no other campaign in the twenty-brand series covers a brand's entire production history with a 100 percent defect estimate and fires already on the record," which is verifiable from the series' own research files.

### 7. Data Presentation — 8.7/10
Numbers are presented cleanly in prose: pull stat, per-campaign populations, the campaign-unit vs. distinct-vehicle distinction, the 4.6x delivery comparison, the 6,904 unpatched owners as the actual risk pool. The full census table lives in the research file, consistent with series style (the Genesis article also kept the table in research). Deductions: a reader who wants the campaign table in the article itself has to open the research file; the article's prose carries the same numbers, so this is a style choice, not a defect. The 1,917-word length costs readability against the 1,577-word Genesis census, and the "What to do" block would breathe better as two paragraphs.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 8.8 |
| Voice Coach | 8.9 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.8 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.1 |
| Data Presentation | 8.7 |
| **Average** | **8.90** |

All 7 critics at 8.5+ and all hard gates pass. **SHIP.** Round 0, no revision needed.
