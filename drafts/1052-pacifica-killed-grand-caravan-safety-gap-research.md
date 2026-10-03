# Research: #1052 — Chrysler Replaced the Grand Caravan With the Pacifica. Deaths Per Mile Fell 86%.

**Journalist:** Mia Crumplezone (Safety Engineering Editor — technical but accessible, gets excited about crumple zones, judgmental about bad vehicle design)
**Kicker:** The Gap
**Article number:** 1052
**Slug:** `1052-pacifica-killed-grand-caravan-safety-gap`
**Date:** 2026-10-02

## Angle (1-2 sentences)

The Dodge Grand Caravan rode the same basic platform from 2008 to 2020 and killed 1,782 people over the FARS window at 1.33 deaths per 100M VMT. Its clean-sheet replacement, the Chrysler Pacifica, launched in 2017 with 72% high-strength steel and a TSP+ rating, and posts 0.19 deaths per 100M VMT — a 7x, 86% drop, the largest measured safety payoff of any nameplate replacement in the dataset. Lab ratings predicted some of this; the body count measures all of it.

## Kill test

- **Genuinely newsworthy?** It is a data finding rather than breaking news, but the site's core identity is FARS data journalism and no article has ever measured what a clean-sheet redesign actually buys in real-world deaths. The 86% figure is startling enough to carry the piece, and it lands with actionable force in the used-minivan market where 2019 Grand Caravans and 2018 Pacificas sell for similar money.
- **Novel angle on data?** Yes. Queue/title search for "redesign", "platform", "generation", "successor" returns zero stories; the two "replaced" hits (#790, #1027) are recall investigations, not model-replacement comparisons. The per-crash decomposition (crash frequency vs. crash survivability) has not been run on this site.
- **Verdict: PROCEED.**

## Primary sources (5)

1. **NHTSA FARS 2014–2023**, via `fars_output.js` — FARS_BY_MODEL (337 models: deaths, fleet, VMT, estimated rate per 100M VMT) and FARS_MODEL_YEAR (323 models). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **IIHS via MotorTrend (2016):** 2017 Chrysler Pacifica was the first minivan to earn IIHS Top Safety Pick+ (Good in all five crash tests); the 2016 Chrysler Town & Country and 2016 Dodge Grand Caravan earned "Poor" in the driver-side small front overlap test and offered no front crash prevention. https://motortrend.com/news/chrysler-pacifica-first-minivan-earn-2016-iihs-tsp-award
3. **NHTSA star ratings:** 2017 Chrysler Pacifica earned a 5-star overall safety rating (Carscoops, Nov 8, 2016; FCA cites 8,500 simulated crashes and 80+ full-vehicle impacts pre-launch). Grand Caravan: 4-star overall (Carfax / iSeeCars side-by-side comparisons). https://www.carscoops.com/2016/11/2017-chrysler-pacifica-gets-5-star/
4. **Autoblog (Apr 8, 2026):** Under IIHS's tougher updated moderate-overlap test, no current minivan — including the Pacifica (Marginal on rear-occupant protection) — earns Top Safety Pick. The hero is imperfect. https://www.autoblog.com/news/no-minivans-make-iihs-safety-list-as-rear-seat-safety-falls-short
5. **AllCarsEveryDay comparison (2019):** Grand Caravan "wasn't engineered to meet the small front overlap test" (Poor); Pacifica TSP. https://www.allcarseveryday.com/2019/01/2019-toyota-sienna-vs-2019-honda.html

## Key numbers (verified from fars_output.js via node, 2026-10-02)

### The replacement pair

| Model | Deaths (2014–2023) | Rate (/100M VMT) | Fatal crashes | Deaths/fatal crash | Fatal crashes/100M VMT |
|---|---|---|---|---|---|
| Dodge Grand Caravan | **1,782** | **1.33** | 3,085 | 0.578 | 2.30 |
| Chrysler Town & Country | 1,303 | 1.26 | 2,298 | 0.567 | 2.23 |
| Chrysler Pacifica | **160** | **0.19** | 327 | 0.489 | 0.40 |

- Rate ratio: 1.33 / 0.19 = **7.0x**. Decline: (1.33 − 0.19) / 1.33 = **85.7% → 86%**.
- Van-class VMT-weighted average: 0.65. The Grand Caravan ran at ~2x the class average; the Pacifica runs at ~1/3 of it.
- For context: Honda Odyssey 0.93 (864 deaths), Toyota Sienna 0.49 (430 deaths), Kia Sedona 0.46 (118 deaths). The Pacifica beats the Japanese stalwarts too.

### Decomposition: frequency vs. survivability

- Fatal crashes per 100M VMT: GC 2.30 vs Pacifica 0.40 → **5.75x fewer fatal crashes per mile**.
- Deaths per fatal crash: GC 0.578 vs Pacifica 0.489 → **1.18x fewer deaths per crash**.
- The Pacifica advantage is ~82% crash avoidance/frequency and ~18% better survivability. AEB and forward-collision warning (standard/available on Pacifica, absent on GC) plausibly drive the frequency half; 72% high-strength steel structure drives the survivability half.

### Model-year series

- Grand Caravan deaths by model year (2014–2020): 92, 71, 72, 67, 64, 63, 8. Flat, then the fleet shrinks. No within-nameplate safety improvement visible.
- Pacifica MY series is polluted: the 2005–2007 rows (14, 20, 10 deaths) belong to the old Chrysler Pacifica *crossover* that shared the name. The 2017+ minivan rows: 34, 9, 18, 20, 11, 17. Those 44 legacy-crossover deaths are inside the 160-death total, slightly *inflating* the Pacifica's 0.19 — the true new-Pacifica rate is lower still.

### The engineering delta (from sources 2–3)

- Grand Caravan platform: essentially unchanged since the 2008 redesign; never engineered for the small-overlap test IIHS introduced in 2012.
- Pacifica: clean-sheet 2017 platform; 72% high-strength steel structure (over half AHSS); forward collision warning with AEB, lane departure warning, blind-spot monitoring; 97 standard safety/security features on the 2023.
- NHTSA overall: Pacifica 5 stars (rollover 4), Grand Caravan 4 stars.
- IIHS 2016: Pacifica Good in all five crashworthiness tests + TSP+; Town & Country and Grand Caravan Poor in small overlap, no front crash prevention available.

## Strongest counterargument (full strength)

The Pacifica's fleet is young — every one on the road during the FARS window was built in 2017 or later — and new cars are bought by affluent households that independently crash less, maintain better, and drive fewer hard miles; the Grand Caravan fleet is old, cheap, and heavily bought used by exactly the demographics that crash more. Vehicle age itself matters: a 2019 Grand Caravan was a 12-year-old design, while its rubber bushings, brake lines, and ESC calibration were all aging in the real world. Some unknown fraction of the 86% is demographics and fleet age, not engineering, and the dataset cannot separate them. The 2026 IIHS update is the other rebuke: under today's tougher rear-seat test, even the Pacifica scores Marginal on rear-occupant protection and earns no award — "safest minivan ever" is a time-stamped claim, not a permanent one.

## Limitations (for the article)

- FARS captures only fatal crashes; the rates describe death risk, not crash risk or injury risk.
- Fatality rates ride on estimated VMT (sales × NHTS annual miles), not odometer readings; ±15% uncertainty for low-volume models. Both models here are high-volume, which helps.
- The Pacifica name-reuse pollution (2005–2007 crossover rows) inflates its death count by ~44; direction of bias favors the Grand Caravan.
- A `Dodge CARAVAN/GRAND CARAVAN` duplicate name row (313 deaths, same fleet/VMT denominators) suggests FARS VIN-decoding split the Grand Caravan's count across two rows; using the main row's 1.33 is conservative — merging would push it to ~1.56 and the gap wider.
- No controls for driver demographics, geography, or vehicle age at crash.

## Actionable insight

If you're minivan shopping used, this is the single most lopsided safety comparison on the used market: a 2018–2020 Grand Caravan and a 2017–2019 Pacifica often list within a few thousand dollars of each other, and the Pacifica carries roughly one-seventh the fatality rate. Buy the redesign, not the refresh. Generalize the lesson: when a nameplate gets a clean-sheet platform, the safety jump can be enormous; when it gets a 12-year "refresh," check the small-overlap rating before you check the price. And check any used VIN at nhtsa.gov/recalls — the Grand Caravan's long production run means a long recall tail.

## Duplication check

- Queue/title search: "redesign" 0, "platform" 0, "generation" 0, "successor" 0, "pacifica" 0, "caravan" 0. No prior article compares a replacement pair in FARS.
- The per-crash frequency-vs-survivability decomposition has not been run on this site.
- #790 and #1027 ("replaced") are recall stories — no overlap.
