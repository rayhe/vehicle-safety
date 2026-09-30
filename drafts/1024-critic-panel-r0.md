# Critic Panel — Article #1024: "500 People Die Every Year Driving the Wrong Way. Most Wrong-Way Drivers Just Turn Around."
**Journalist:** Rex Driverton | **Kicker:** Investigation | **Round:** 0 | **Date:** 2026-09-30

## Hard Gates (regex = source of truth)
| Gate | Result | Target | Pass |
|---|---|---|---|
| Em dashes (literal —) | 0 | ≤ 3 | ✅ |
| Banned phrases | 0 | 0 | ✅ |
| "The" sentence starters (body) | 1/21 = 4.8% | ≤ 15% | ✅ |
| CSS classes (`class="story"`, `../style.css`, no story-detail/content/page, no story.css) | clean | clean | ✅ |
| Sentence rhythm | var 377.1 / short 7.7% / long 61.5% | ≥200 / ≤15% / ≥15% | ✅ |
| Inline hero `<img class="story-hero">` count | 1 | exactly 1 | ✅ |
| og:image absolute | `https://vehicle-safety.org/images/1024-wrong-way-driving-iceberg.jpg?v=1a7ce414` | absolute | ✅ |
| Hero file | `drafts/1024-wrong-way-driving-iceberg.jpg`, real JPEG 1920x1280, md5 `1a7ce414` | real JPEG | ✅ |
| Body word count | 555 | 300–500 guidance | ⚠️ over guidance, under #1023 precedent (792); not a hard gate |

## Critic Scores

### 1. General Critic — 8.7/10
Strong lede that opens mid-thought, clean arc (problem → data → iceberg insight → robot twist → steel-man → action). Original analytical contribution present. Deductions: P3 packs the law, the hardware, and the reframe into one dense paragraph; "Hardware is already moving" is telegraphic. The takeaway paragraph is tight and genuinely useful.

### 2. Voice Authenticity (Rex Driverton) — 9.0/10
Deadpan noir-detective voice consistent throughout. Signature lines land: "The flashing sign is the least interesting part of the trailer," "The drunk, the disoriented, and the alone have been joined by the algorithm." Opens mid-thought, states real opinions ("Massachusetts is the first state to write the counting into law"). Minor: "Steel-manning the other side" reads slightly internet-pundit rather than noir, but within Rex's range.

### 3. Ethics — 9.2/10
Vendor-PR statistics explicitly caveated in both body and disclaimer; "most drivers self-correct" attributed as one official's read of detector logs, not a national rate. No victim details, no sensationalized crash descriptions. Safety advice is responsible and correct (shoulder/stop/hazards/911, no hero U-turns). No conflicts of interest.

### 4. Social Media Appeal — 8.5/10
Headline is a strong share unit (hard stat + paradox). The 87% pull-stat works as a social card; hero image is dramatic and on-topic. Deduction: headline is long for some platforms, and there is no explicit secondary hook beyond the stat. Passes the bar.

### 5. Legal Safety — 9.5/10
Every factual claim attributed to a named source. Tesla FSD framing tied to NHTSA's own PE language ("investigating reports"), no assertion of defect as fact. Public officials named in official capacity only. No defamation, privacy, or advice-liability exposure.

### 6. Rigor & Originality — 9.0/10
Original contribution: the iceberg ratio — 1,000+ detected wrong-way entries in two years in one state against ~500 national deaths/year — reframing fatal crashes as the conversion rate at the bottom of a near-miss funnel, plus the "write the counting into law" framing of the Massachusetts statute. Counterargument steel-manned at full strength (barely 1% of road deaths; dollars-per-life critique). Limitations disclosed: AAA figures are divided-highways-only and date to 2015–2018; the decade toll comes from a vendor press release; "most self-correct" is detector-log characterization. Deduction: the iceberg ratio mixes a vendor-reported event count with AAA national deaths — apples-to-oranges, presented as directional but still the weakest joint.

### 7. Data Presentation — 8.8/10
Every number carries a denominator and a source: 34% rise, 6-in-10, 87%, 1,000+ events, 58/14/23, $4M over 15 miles, ~1% of road deaths. Pull stat well chosen (87% alone → the passenger-as-safety-device thesis). Deduction: the 5,730-decade-toll (~573/yr) vs AAA's ~502/yr discrepancy across sources is disclosed as vendor data but could confuse a fast reader.

## Verdict
**Average: 9.0/10 — all critics ≥ 8.5. Round 0 PASSES. No revision round required.**
