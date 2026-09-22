# Critic Panel — 966-drowsy-driving-no-breathalyzer (Round 0)

Article: "NHTSA Says Drowsy Driving Kills 800 Americans a Year. The Cameras Say 6,400."
Journalist: Dale Impactor III | Kicker: Sobriety Report | Words: ~1,000 (story-body)

## Hard gates (regex = source of truth)
- Em dashes: 0 (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): 0 — PASS
- "The" sentence starters: 0.0% (max 15%) — PASS
- CSS: `class="story"`, `../style.css`, no `story.css` — PASS
- Sentence rhythm: variance 2965.6 (≥200), short 6.8% (≤15%), long 34.1% (≥15%) — PASS (round-0 fail at 22.0% short fixed via 8 fragment merges)
- Hero: real JPEG (ffd8), 1920x1280, `?v=e1a44f05` on img src + og:image — PASS
- Actionable takeaways: present (coffee+20-min nap, warning signs, 7–8 hrs, teen driver's-ed) — PASS
- References: 11, `<section class="story-references">` with inline sup links — PASS
- Limitations + counterargument sections: present — PASS

## Critic scores

### 1. General Editor — 9.0
Structure follows the template (kicker → headline → lede with bolded key stat → pull stat → body → references → disclaimer). Headline is the rare honest clickbait: both numbers are real and the tension is the story. Lede now bolds the thesis ("Sleep is the one impairment with no test"). The sports-standings frame in the middle third gives the piece a spine instead of a stat pile. Minor: at ~1,000 words it's the long end of the format, but every paragraph earns its place.

### 2. Voice Coach — 9.0
Unmistakably Dale: impairment-as-sports-stats ("the league's leading scorer with no box score", "demographics read like a scouting report", "impairment standings"). Catchphrase opener deployed. Zero em dashes, zero banned phrases, zero "The" starters. Rhythm PASS with real variance (fragments like "A football field, eyes open, nobody home." surviving alongside 30+ word builds). Could not swap this byline onto Mia or Rex without a rewrite. "Wearing a trench coat" is a slightly shopworn idiom but it lands.

### 3. Ethics Reviewer — 9.0
No victim-blaming: the frame is a measurement failure, not a moral one. Drowsy drivers get sympathy (teens, shift workers, new parents) rather than scolding. The close ("You are the breathalyzer") is empowering, not preachy. The Wyoming/Nevada spread is presented as reporting artifact with the biological-absurdity caveat stated, not as a dunk on Wyoming. No self-congratulation, no pundit cosplay.

### 4. Social/Shareability — 9.0
Pull stat "6,400 vs. 800" is a two-number gut punch. Quotables: "Sleep is the one impairment with no test", "A football field, eyes open, nobody home.", "Windows down and radio up is a lullaby with extra steps." The 11.5x-under-4-hours stat is a group-chat nuke. Headline survives out of context.

### 5. Legal Accuracy — 9.0
No legal claims made, so little to get wrong. All agency figures attributed (NHTSA 2017 estimates labeled as estimates). The state ranking is explicitly flagged as a secondary compilation used only to show reporting variance. No implication that any automaker or regulator broke a law. Clean.

### 6. Research Rigor — 9.0
Original contribution: the toxicology-desk undercount-mechanism analysis (why the gap exists structurally: dead drivers can't self-report, no instrument for sleep) plus the state-spread-as-paperwork finding. Limitations stated plainly (FARS arrays don't code drowsiness; NHTSA figures are 2017; AAA fatal data 2009–2013; state table unaudited). Counterargument at full strength (imputation models, SHRP2 young-driver oversample, 23% excluded, volunteers-on-camera bias; 8x framed as ceiling). Methodology transparent: both candidate tolls shown with provenance. Two of 11 references verified live (NHTSA, AAA); the rest use parent-domain links per the no-invented-URLs rule.

### 7. Data Presentation — 9.0
Numbers always arrive with context: 21% vs 1–3%, 11.5x/4.3x/1.9x ladder, 0.05 BAC equivalence, 6% DST bump, 100 yards at 55 mph, 17x state spread, $109B. No naked statistics. Pull stat labeled with both provenances so the reader knows it's estimate-vs-census, not fact-vs-fact.

## Verdict
Average: 9.0. All 7 critics ≥ 8.5. All hard gates PASS. **SHIP** — blocked by 1/day rule (#749 published 2026-09-22). Queued SHIP_BLOCKED for 2027-01-02.
