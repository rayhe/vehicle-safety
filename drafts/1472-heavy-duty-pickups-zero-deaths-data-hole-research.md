# Research: #1472 — The Deadliest Truck in America Killed Nobody (According to Our Data)

**Number:** 1472
**Slug:** 1472-heavy-duty-pickups-zero-deaths-data-hole
**Journalist:** Axle McScatter (Data Visualization Editor)
**Kicker:** By The Numbers
**Date:** November 11, 2026

## Angle (1-2 sentences)

Heavy-duty pickups look 3.5x safer per mile than half-tons in this site's own FARS table — the Ram 3500 posts a literal 0.00 death rate and the F-350's model-year record stops in 2004. The trucks did not get that safe. The coding broke: FARS files post-2004 F-350 deaths and all Ram 3500 deaths under other names, and the table's death counts are occupant-side only, so the people heavy trucks kill most — everyone else — never appear in the numerator.

## Kill test

- **Genuinely newsworthy?** Yes. A 3.5x rate gap on the best-selling work-truck segment in America, built on two verifiable holes in the data (a model-year record that ends in 2004; a truck with zero deaths and one crash in a decade). Plus a direct contradiction with IIHS's own July 2026 release, which used the same underlying FARS deaths to name the Ram 3500 the deadliest truck to other drivers.
- **Novel on site?** Yes. Full queue/drafts/stories grep: zero slugs contain "heavy-duty", "zero-deaths", "data-hole", "F-350", or "Super Duty" in a FARS-rate context. Adjacent coverage is not overlapping: #873 proved the Ram 1500's 0.13 was a dual-coded denominator (Dodge RAM + Ram 1500 sharing one fleet) — this piece is the *other* Ram/HD failure mode (missing rows and a hard model-year cutoff, not a doubled denominator). #993 covered the IIHS other-driver metric (Ram 3500 at 204) but never noted that our own table says the same truck killed nobody. #1093/#1102/#1110 covered IIHS crash-avoidance tests on work trucks, not FARS rate artifacts. #1449's two-axis decomposition listed Ram 1500 in the "safest quadrant" at 0.13 — a number #873 had already corrected to 0.90 two months earlier; this piece extends the correction to the whole HD class.
- **Original contribution:** the full HD audit below (combined HD vs half-ton decomposition, the F-350 model-year cutoff, the Ram 3500 zero, and the proof — via the IIHS contradiction — that the file's death counts are occupant-side only).

## Original computations (from fars_output.js, FARS 2014-2023, 337 models)

Method: crash frequency = crashes / VMT x 10 (VMT field is in 10M-mile units, verified against the file's rate field in #1449). Lethality = deaths / crashes. Rate = deaths / VMT x 10.

### The headline table

| Group | Deaths | Crashes | Fleet | Crash freq. | Lethality | Rate |
|---|---|---|---|---|---|---|
| Heavy-duty (F-250, F-350, Ram 2500, Ram 3500) | 1,226 | 3,600 | 3,675,000 | 0.73 | 0.341 | 0.25 |
| Half-ton (F-150, Silverado, Sierra, Tundra, Dodge RAM, Ram 1500) | 28,466 | 62,034 | 24,062,500 | 1.91 | 0.459 | 0.88 |

Heavy-duty trucks crash fatally 0.38x as often per mile as half-tons and kill 0.74x as often per crash. Combined rate 0.25 vs 0.88: **3.5x "safer."** All pickups combined: 41,593 deaths / 85,128 crashes, 0.489 lethality.

### Hole 1: the Ram 3500 killed nobody

| Row | Deaths | Crashes | Fleet | Rate |
|---|---|---|---|---|
| Ram 3500 | 0 | 1 | 437,500 | 0.00 |
| Ram 2500 | 153 | 748 | 875,000 | 0.13 |
| Ram 2500 + 3500 combined | 153 | 749 | 1,312,500 | 0.09 |

One fatal-crash involvement in ten years for a truck line the file itself says has 437,500 vehicles on the road. A Ram 3500 that sells in six figures a year cannot have zero fatal crashes in a decade. Its deaths are filed under another name (Dodge RAM runs to MY2019; Ram 2500's model-year row runs 2013-2022). Note the Ram 2500's lethality of 0.205 deaths/crash — the lowest of any pickup with 500+ crashes, against a fleet average of 0.489 — is itself a tell: when the truck is the striking vehicle, the person who dies is usually in the other car, and this table does not count them.

### Hole 2: the F-350's model-year record ends in 2004

FARS_MODEL_YEAR for the F-350: {1996: 7, 1997: 10, 1999: 10, 2000: 18, 2001: 27, 2002: 21, 2003: 19, 2004: 29} — 141 deaths, then nothing. No "F-350 SUPER DUTY" row exists anywhere in the file (grep: zero hits for "SUPER DUTY"). The F-350 is 8.1% of Ford's pickup fleet by the file's own estimates (787,500 of 9,712,500), and Ford has sold Super Duty trucks continuously since — yet the file attributes zero F-350 deaths to model years 2005-2023. The F-250's model-year row, by contrast, runs 1990-2022 (881 deaths, 188 of them MY2015+). Post-2004 F-350 deaths are almost certainly coded as F-250s (or F-150s), inflating the F-250's 909 deaths while the F-350's row freezes at 164.

### Hole 3: the numerator is occupant-side only (proved by contradiction)

IIHS's July 30, 2026 driver-death-rate release — built from the same FARS deaths — puts the Ram 3500 crew cab long bed 4WD at **204 other-driver deaths per million registered vehicle years, the highest of any model**, and very large pickups at 110 other-driver vs 24 driver deaths. Our file says the Ram 3500 killed 0 people total. Both cannot describe the same numerator. The only consistent reading: our file's per-model death counts are deaths of the named model's own occupants (drivers/occupants), while the people a heavy truck kills in the other vehicle are counted under *their* car's row — or nowhere. Consequence: the table measures how dangerous a truck is to its own occupants, not how dangerous it is, period. For heavy trucks, those are opposite rankings: IIHS's class table says very large pickups are the safest class for their own drivers (24) and the deadliest to others (110).

### What is real in the HD gap

Not all of the 3.5x is artifact. Part is plausibly genuine: HD trucks are disproportionately commercial/work vehicles driven by experienced drivers on highways (fewer fatal involvements per mile), and 6,000+ lbs of mass protects the occupants who are counted (lethality 0.341 vs 0.459). The honest split: some real occupant protection, an unknown share of coding leakage, and a numerator that ignores the victims that matter most. The F-350 cutoff and the Ram 3500 zero put a floor under the artifact share — at minimum, two of the four HD rows are broken.

## Primary sources (3+)

1. **NHTSA FARS 2014-2023, via fars_output.js** (FARS_BY_MODEL deaths/crashes/fleet/VMT/rate; FARS_MODEL_YEAR deaths by model year) — all numbers above computed locally. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars ; query tool https://cdan.dot.gov/query
2. **IIHS, "Driver death rates remain high for small cars, models with powerful engines," July 30, 2026** — Ram 3500 crew cab long bed 4WD other-driver rate 204 (highest); very large pickups driver 24 / other-driver 110. https://www.iihs.org/news/detail/driver-death-rates-remain-high-for-small-cars-models-with-powerful-engines
3. **IIHS, "Driver death rates by make and model"** — interactive table, methodology (FARS deaths, Mobility Global registrations, age/sex-adjusted). https://iihs.org/ratings/driver-death-rates-by-make-and-model
4. **Site self-audit precedent:** #873 (Ram 1500 0.13 dual-coded denominator, corrected 0.90), #884/#934 (phantom model years), #993 (IIHS other-driver asymmetry, Ram 3500 at 204). This piece extends that lineage to the HD class.
5. **NHTSA FARS coding manual** — make/model/body type/model year taken from accident reports and verified against state registration data, registration taking precedence on inconsistency (mechanism behind dual-coding after the 2011 Ram brand split). https://crashstats.nhtsa.dot.gov/Api/Public/Publication/07CV

## Limitations (must appear in the article)

- FARS captures fatal crashes only; injury-only crashes are invisible. A "safe" rate here can hide high injury rates.
- Fleet and VMT in fars_output.js are estimates (annual sales x 8.75 fleet multiplier; class-average annual miles, not odometer readings) — the site's methodology note flags +/-15% uncertainty for low-volume models. The HD rows inherit that, and the fleet values are visibly bucketed/rounded.
- The occupant-only numerator is inferred, not documented in the pipeline: it is the only reading consistent with Ram 3500 = 0 deaths here vs 204 other-driver deaths at IIHS. If the pipeline instead counts all deaths in involving crashes, then the Ram 3500 zero means something even stranger (no Ram 3500 in any fatal crash in a decade, contradicted by IIHS). Either way the row is broken; the article should state the inference as an inference.
- The F-350 leakage destination (F-250 vs F-150 vs elsewhere) cannot be proven from this data — only the cutoff itself is a fact. The article must say the deaths went *somewhere else*, not name the destination as certain.
- The genuine-vs-artifact split of the 3.5x gap cannot be quantified from FARS alone; IIHS registration-based rates (Ram 3500 driver rate is low; other-driver rate is the highest) are the right cross-check and point the same way.
- Model-year aggregation mixes generations; the F-350's 164 deaths are all pre-2005 trucks.

## Strongest counterargument (must appear at full strength)

Heavy-duty trucks really are driven differently, and that alone could explain much of the gap without any coding failure. They are work trucks: commercial drivers, highway miles, towing and hauling duty, fleet maintenance, drivers old enough to hold a CDL or a contractor's license. Fewer fatal involvements per mile is exactly what you would expect from professional use. And mass is real physics: a 7,000-lb truck protects its occupants in a crash with a 3,500-lb sedan, so lethality of 0.341 vs 0.459 is the expected direction, not proof of a bug. The F-350 cutoff could even have a boring administrative explanation — a FARS model-code change in 2005 that refiled Super Duty trucks under a code our pipeline maps to F-250 — which would mean the deaths are not "missing," just relabeled, and the F-250's 0.43 already contains them. On that reading, the honest combined Ford HD rate is F-250 + F-350 = 0.34, still far below the F-150's 1.04, and the story becomes "work trucks are genuinely safer per mile," not "the data is broken." The Ram 3500 zero is the hardest fact for that reading: no administrative relabeling explains zero deaths for a truck that IIHS, from the same FARS data, finds killing 204 strangers per million registration years.

## Actionable takeaways

- Shopping for a work truck? Do not trust per-model FARS rate leaderboards for heavy-duty pickups — the Ram 3500's 0.00 and the F-350's 0.15 are coding artifacts, not safety findings. Use the IIHS driver-death-rate table instead, and read *both* columns: the Ram 3500 protects its own driver and is the deadliest truck to everyone else.
- Researchers and journalists reusing FARS per-model rates: check the model-year span of every row before quoting its rate. A row whose model years stop a decade early (F-350: 2004) or a row with zero deaths on a real fleet (Ram 3500) is a hole, not a finding. Merge split rows (see #873) and flag truncated ones.
- Site correction: the Crash Report's own table carries both holes; HD pickup rows should carry a caveat until the pipeline merges or flags them. #1449's "safest quadrant" included the Ram 1500 at 0.13 — a number #873 had already corrected to 0.90 — a reminder that the quadrant list inherits every upstream artifact.
- If you drive a heavy pickup: the person at risk in your crash is disproportionately the *other* driver. The five-star sticker on your truck measures your safety, not theirs. NHTSA's five-star program has no other-driver metric at all.
