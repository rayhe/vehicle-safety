# Critic Panel — #1362 "Chevrolet's Safest Car Is 392 Times Safer Than Its Deadliest. Same Badge."
Round 0 (2026-11-02). Journalist: Clara Rollover. Slug: 1362-badge-means-nothing-chevrolet-392x-spread

## Hard gates (regex, source of truth)
- Em dashes in body: 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 1 of 23 = 4.3% (max 15%) — PASS
- CSS: class="story", links ../style.css, no story.css — PASS
- Sentence rhythm: variance 501.1 (≥200), short 9.5% (≤15%), long 47.6% (≥15%) — PASS
- Word count: 462 body — PASS (300-500)

## 1. General Editor — 8.5/10
Structure holds: lede with the headline stat bolded, pull stat, four meaty paragraphs,
references, disclaimer. Headline does real work ("Same Badge" is the thesis, not
decoration). Loses half a point: the Prizm example is a 2002-discontinued car, so
the lead example risks feeling like a trick stat until paragraph 4 admits the noise.
It lands honestly, but the sequencing asks the reader to trust first and caveat later.

## 2. Voice Coach — 9.0/10
Unmistakably Clara: "Before you sign that lease," "Call it a weak signal, not a dead
one," the espresso-fueled closer. No banned phrases. Rhythm check passes with real
variance (3-word punches next to 95-word constructions). Not swappable with Rex or
Vin — nobody else would write "Watch the confidence drain from their face."

## 3. Ethics Reviewer — 9.0/10
No victim-blaming; the impairment-adjacent Mustang framing stays descriptive
("driven accordingly") without moralizing. Limitations are stated, not buried.
The actionable advice (model-level data, VIN check) empowers rather than frightens.

## 4. Social/Shareability — 8.5/10
"392x" is a pull-quote number; the headline is built to travel. The Land Cruiser
twist (worse than a Chevy Impala) gives Toyota loyalists a reason to argue, which
is engagement. Loses half a point: no single quotable line as sharp as the stat
itself; the prose around the stat is stronger than any excerpt.

## 5. Legal Accuracy — 8.7/10
All numerical claims trace to fars_output.js (FARS 2014-2023) with the rate
definition stated. IIHS driver-death-rates URL verified live 2026-11-02
(real page, matches citation). NHTSA FARS and recalls URLs are canonical.
No fabricated citations. Loses a bit: the site data isn't independently
re-runnable by the reader (derived dataset), though the methodology is disclosed.

## 6. Research Rigor — 9.0/10
Novel contribution: within-manufacturer dispersion computed across all makes with
5+ models — a frame never published on this site (coverage-checked against all
1,369 research slugs). Limitations dedicated and specific (VMT estimates, low-fleet
noise, fatalities-only). Counterargument at full strength (brand-level tech
rollout is real; spreads collapse for current lineups). Verifiable: every rate
recomputable from the published data pipeline.

## 7. Data Presentation — 8.5/10
Pull stat + label carry the thesis; inline numbers are precise and paired
(rate, deaths, fleet) at first use. References section complete with four real
links. Loses half a point: a compact brand-spread table would scan better than
the inline Ford/Hyundai sentence, but the current form reads fine.

## Verdict
Average 8.74. All 7 critics at 8.5+, all hard gates PASS. → SHIP.
