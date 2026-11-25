# Critic Panel — Round 0 — #1583 Honda Takata Desiccant Recall 810k

## Article
- Slug: 1583-honda-takata-desiccant-recall-810k
- Journalist: Rex Driverton
- Title: The Desiccant Was Supposed to Fix Takata. Honda Just Recalled 810,592 Cars Anyway.
- Body words: 996 prose words (house norm for last three: 970, 997, 891; this runs in line)

## Hard Gates (regex = source of truth)
- Em dashes (literal): 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 5/48 = 10.4% (max 15%) — PASS
- CSS: class="story" present, ../style.css linked, no story-detail/story-content/story-page, no story.css — PASS
- Hero: real JPEG, 1920x1280, FF D8 verified, md5 adae552b — PASS
- Sentence rhythm script: variance 1298.6 (>=200), short 4.7% (<=15%), long 58.1% (>=15%) — PASS (exit 0; first run failed short at 23.2%, fixed by merging 7 fragments into longer constructions, re-ran clean)

## Pre-score corrections
- Two time-rounding errors caught during critique, fixed before scoring: article originally said "A decade after Takata went bankrupt" (bankruptcy was June 2017, 9 years 5 months ago) and "Thirteen years after the Takata crisis began" (first Takata recalls date to 2008, 18 years ago; 13 years is the cars' age, not the crisis's). Changed to "Nine years after Takata went bankrupt" and "Eighteen years after the Takata crisis began." Gates re-verified after the fix (rhythm still PASS, em 0, banned 0, The-starters 10.4%). Scores below reflect the corrected draft.

## 1. General Editor — 8.5
Lede lands in the first sentence and the structure is clean: prediction, chemistry, turn, breakdown, map, Toyota parallel, remedy, defense, action. The pull stat (100%) is the article's thesis in one number. Deductions: 996 words runs long against the 300-500 word guide, though in line with recent house norm; the geography paragraph carries a 14-jurisdiction list that is necessary for the action step but slows the read.

## 2. Voice Coach — 9.0
Rex is unmistakable here: deadpan noir, paradox-hunting, and contempt for a model that said 2027 while the recall landed in 2026. "The fix had an expiration date, and nobody printed it on the box" and "It was the recipe" are the lines of the piece. No banned phrases, rhythm passes on all three metrics. Deduction: two time-rounding errors had to be caught in critique, which means drafting leaned on rounded time claims instead of checking dates against the filing.

## 3. Ethics Reviewer — 9.0
No victim-blaming, no invented harm. The article states plainly that nobody has been hurt by these inflators and that the risk is modeled from simulation, not demonstrated in a field failure. The remedy and owner action steps are concrete and free. Deduction: the lede's "the danger arrived" framing could be read as implying ruptures occurred; the correction (zero injuries) does not appear until the counterargument paragraph, six paragraphs in.

## 4. Social/Shareability — 8.5
The headline is the share: "supposed to fix... recalled anyway" is a complete claim that also happens to be true, and the 100% pull stat is quotable in a single screenshot. The story is six days old, which is timely for this pipeline. Deduction: recall stories have a share ceiling, and there is no human-stakes anecdote to carry it beyond the data. The ceiling is the topic, not the writing.

## 5. Legal Accuracy — 9.0
Campaign number, filing date, per-model counts, defect rate, geography, remedy, and notification dates all verified against the Part 573 filing. Toyota numbers come from Reuters; the ~400 US injuries and 2008 origin from the NY Post; the almost-70M US total from KBB. Every number carries a source. Deduction: "Eighteen years after the Takata crisis began" rests on the 2008 first-recall date via a secondary source; the filing itself does not date the crisis origin, and the research file says so honestly.

## 6. Research Rigor — 9.0
Genuine original contribution on four counts: the 2020-prediction-vs-2026-reality timeline arithmetic (no risk before 2027 at the earliest, recall November 19, 2026), the reading of the remedy as Honda abandoning the PSAN propellant family rather than fixing a batch, the 100% defect-rate emphasis, and the geography-as-tell (same climate map as the original crisis). Limitations are stated in the disclaimer, and the counterargument is given at full strength with its own paragraph. Deductions: no FARS crash data links these inflators to deaths, so this is a recall story, not a fatality analysis, stated in the disclaimer; the tension between Honda's "no statistically significant deviation from the 2020 prediction" and its defect determination is asserted more than explained.

## 7. Data Presentation — 8.5
Numbers are consistent and cross-checked: per-model counts sum exactly to 810,592; the Civic is 50.97% of the total, so "more than 50 percent" is correct; Honda plus Toyota worldwide is 1,600,592, so "about 1.6 million" is correct; the 100% figure comes straight from the filing. The pull stat (100%) is the right number to lead with. Deduction: the two time-rounding errors slipped into the draft and had to be caught in critique. Dates should have been verified against the filing and the bankruptcy record during drafting, not during review.

## Verdict
- Average: 8.79 (8.5, 9.0, 9.0, 8.5, 9.0, 9.0, 8.5)
- All 7 critics >= 8.5, all hard gates pass → **SHIP**
- Notes for the record: the pre-score fixes (nine years since bankruptcy, eighteen years since the crisis began) are the only factual corrections. The two soft spots are the lede implying ruptures before the zero-injury correction arrives, and the "no significant deviation" tension being asserted rather than fully explained. Neither changes the article's claims in a material way.
