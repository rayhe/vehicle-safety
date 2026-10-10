# Critic Panel — Round 0: 1116-impala-deadliest-american-sedan
## Journalist: Rex Driverton

### Hard Gates (auto-fail, verified by regex)
- Em dashes: **0** (max 3) — PASS
- Banned phrases: **0** hits — PASS
- "The" sentence starters: **14.3%** (max 15%) — PASS
- CSS: `class="story"`, `../style.css` linked, no story-detail/story-content/story-page/story.css — PASS
- Hero: real JPEG (1920x1280, hash a7422b0f) — PASS
- Actionable insights: VIN recall check + used-shopper guidance — PASS
- References section: 4 refs, inline superscripts — PASS

### 1. General Critic — 9.0
Structure follows the house template (kicker, lede with bolded key stat, pull stats, h2 sections, action, references, disclaimer). Lede drops the reader into the 2020 plant closure then pivots to the toll — strong cold open. Two pull stats carry the skimmers. Paragraphs vary in length. The "4,500 cash" teenager line is a concrete, humanizing touch. Minor: 641 words runs long against the 300-500 guide, consistent with recent runs.

### 2. Voice Critic — 9.0
Distinctly Rex: deadpan noir ("the picture sharpens into a mugshot"), dark humor ("some of it is the meat behind the wheel"), opinionated closers ("Price accordingly"). Would not swap bylines with Dale or Clara. Banned-phrase scan clean. No "numbers don't lie" crutch (the catchphrase from the roster that the banned list kills — correctly avoided; "The numbers smirk" lives in the SEO description instead).

### 3. Ethics Critic — 8.5
Careful not to claim the recall caused all 3,774 deaths — the 124-vs-3,774 distinction is explicit in text and disclaimer. Mary Barra quote is on-record (DOJ settlement). No victim is named or mined for color. The teenager line could read as fear-mongering, but it is paired with a concrete action (VIN check), which keeps it on the ethical side of scary.

### 4. Social Critic — 8.5
Headline pairs a known event (2020 discontinuation) with a shocking claim — quotable. The 62.4% stat is the viral payload: "two-thirds of the deaths came from the years GM recalled." Mild risk: readers may misread the headline as blaming the tenth generation; the body corrects this, but the skimmer problem is real. OG description handles it.

### 5. Legal Critic — 8.5
Every claim about GM is sourced to public record (NHTSA campaign, DOJ settlement, press coverage). "GM killed the nameplate" is plainly metaphorical. No allegation beyond the DOJ's own charges. Attribution phrases ("per the recall filing", "Washington's official accounting says") keep the story inside reported-fact territory. No PII.

### 6. Rigor Critic — 9.0
Calculations verified against fars_output.js: 3,774 deaths / rate 5.0; 2,328/3,732 = 62.4%; 2006-2008 peak = 1,137; 5.0/0.40 = 12.5x; impairment 21.4% from tox table. The 42-death gap between the model-year sum and the total is disclosed in the limitations. Counterargument ("The demographic defense") is presented at full strength before the rebuttal. VMT-estimation uncertainty (~±15%) is disclosed.

### 7. Data Presentation Critic — 8.5
Two pull stats with labels, four inline references, methodology caveat. One honest gap: no model-year table or mini-chart — the numbers live in prose only. Prose is precise enough (each year cited) that this does not mislead, but a reader cannot eyeball the distribution. Not a ship-blocker; the h2 "The years that killed" section is data-dense.

### Verdict
Average: (9.0+9.0+8.5+8.5+8.5+9.0+8.5)/7 = **8.71**. All critics ≥ 8.5. All hard gates pass. **SHIP** at round 0.
