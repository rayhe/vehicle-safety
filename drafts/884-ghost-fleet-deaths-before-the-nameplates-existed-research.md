# Research #884: The Ghost Fleet — 1,466 deaths attributed to cars built before their nameplates existed

**Number:** 884
**Slug:** `884-ghost-fleet-deaths-before-the-nameplates-existed`
**Journalist:** Axle McScatter
**Kicker:** Investigation
**Kill test:** PASS (genuinely newsworthy self-audit; novel pre-production-year census method; 3+ primary sources)
**Status note:** 2026-09-11 publishing slot already consumed by #878. A passing #884 queues as SHIP_BLOCKED.

## Thesis

Our own FARS pipeline (`fars_process.py`) maps pre-2019 FARS `MAK_MOD` codes to model names with a single static table. But FARS model codes are era-dependent: NHTSA reused discontinued models' codes for new nameplates. The static map knows only the NEW meaning, so every pre-2019 death coded under the OLD meaning lands on the wrong badge. A census of model-year distributions against nameplate production history finds **1,466 fatal-crash deaths across 11 nameplates attributed to model years in which the nameplate did not exist**. The worst: Lincoln MKC (86.7% of its deaths are ghosts), Chevrolet Spark (67.7%), Chevrolet Sonic (59.9%), Chevrolet HHR (50.9%), Buick Encore (50.9%). Corrected rates change published site numbers, including the headline finding of #872 (Camry-vs-HHR 2.03 vs 2.12, which becomes ~2.03 vs ~1.05).

## The census (from fars_output.js FARS_MODEL_YEAR, deaths by model year)

| Labeled model | Code in our map | Code really is (FARS AUM 1975-2011) | Ghost model years | Ghost deaths | Total | Ghost share |
|---|---|---|---|---|---|---|
| Chevrolet Spark | 20036 | Monte Carlo (FWD), 95-on | 1995-2007 | 348 | 514 | 67.7% |
| Chevrolet Sonic | 20039 | Aveo | 2004-2011 | 296 | 494 | 59.9% |
| Chevrolet HHR | 20020 | Lumina (GM-10), 90-on | 1992-2001 | 269 | 528 | 50.9% |
| Buick Encore | 18401 | Rendezvous, 2002 | 2002-2007 | 172 | 338 | 50.9% |
| Lincoln MKC | 13012 | LS, 2000 | 2000-2006 | 144 | 166 | 86.7% |
| Honda Fit | 37033 | Prelude, 80-on | 1988-2001 | 62 | 265 | 23.4% |
| Chevrolet Equinox | 20034 | Geo Metro, 89-on | 1991-2000 | 54 | 1032 | 5.2% |
| Buick Enclave | 18402 | Rainier | 2004-2006 | 54 | 190 | 28.4% |
| Toyota Prius | 49033 | Celica, 71-on | 1990-2000 | 37 | 462 | 8.0% |
| Nissan Rogue | 35034 | Z-car/ZX, 70-on | 1985-1995 | 25 | 949 | 2.6% |
| Toyota Sienna | 49441 | Minivan/Previa, 84-on | 1992 | 5 | 410 | 1.2% |
| **Total** | | | | **1,466** | | |

Signature pattern in every case: ghost deaths, then a zero-death gap (old model dead, new model not yet launched), then real deaths. E.g. Spark: 1995-2007 ghosts, 2008-2012 gap, 2013-2021 real. The gap is the fingerprint of code reuse.

Chevrolet Tahoe (25 pre-1995 deaths) is EXCLUDED from the bug count: code 421 historically covers "Fullsize Blazer, Tahoe" and the script documents the sharing. That one is a judgment call, not a mislabel.

## Corrected death rates (published rate × true-death fraction; denominators unchanged)

| Model | Published deaths | Published rate | True deaths | Corrected rate |
|---|---|---|---|---|
| Chevrolet HHR | 534 | 2.12 | 265 | ~1.05 |
| Chevrolet Spark | 517 | 1.28 | 169 | ~0.42 |
| Chevrolet Sonic | 494 | 1.40 | 198 | ~0.56 |
| Buick Encore | 341 | 0.52 | 169 | ~0.26 |
| Lincoln MKC | 173 | 0.79 | 29 | ~0.13 |
| Honda Fit | 290 | 0.72 | 228 | ~0.57 |
| Buick Enclave | 198 | 0.52 | 144 | ~0.38 |
| Toyota Prius | 495 | 0.55 | 458 | ~0.51 |
| Chevrolet Equinox | 1056 | 0.36 | 1002 | ~0.34 |
| Nissan Rogue | 968 | 0.35 | 943 | ~0.34 |
| Toyota Sienna | 430 | 0.49 | 425 | ~0.48 |

The mirror error: donor models are UNDERCOUNTED. ~348 Monte Carlos hide in the Spark row, ~296 Aveos in the Sonic row, ~269 Luminas in the HHR row, ~172 Rendezvous in the Encore row, ~144 Lincoln LS in the MKC row, ~62 Preludes in the Fit row, ~54 Geo Metros in the Equinox row, ~54 Rainiers in the Enclave row, ~37 Celicas in the Prius row, ~25 Z-cars in the Rogue row, ~5 Previas in the Sienna row. (Small discrepancies between BYM death totals and model-year sums, e.g. HHR 534 vs 528, are processing artifacts already present in the data.)

## Mechanism (verified)

1. `fars_process.py` MAK_MOD_MAP (lines ~845-1130) maps pre-2019 FARS `MAK_MOD` codes with one static table, e.g. line 889 `'20020': ('Chevrolet', 'HHR')`, line 896 `'20036': ('Chevrolet', 'SPARK')`, line 886 `'20034': ('Chevrolet', 'EQUINOX')`, line 916 `'49033': ('Toyota', 'PRIUS')`, line 920 `'49441': ('Toyota', 'SIENNA')`, line 940 `'37033': ('Honda', 'FIT')`, line 952 `'35034': ('Nissan', 'ROGUE')`, line 1092 `'18401': ('Buick', 'ENCORE')`, line 1122 `'13012': ('Lincoln', 'MKC')`.
2. The official FARS Analytical User's Manual 1975-2011 (DOT HS 811 693), Appendix A, assigns those codes to the OLD models: Chevrolet 020 = Lumina (GM-10 based), Z-34, Euro, 90-on; 034 = GEO Metro; 036 = Monte Carlo (FWD only); 039 = Aveo; Honda 033 = Prelude; Toyota 033 = Celica; Toyota 441 = Minivan/Previa; Nissan 034 = Z-car/ZX; Buick 401 = Rendezvous; Buick 402 = Rainier; Lincoln 012 = LS. The new nameplates' real codes (HHR = 023, Fit = 039, Prius = 046, Rogue = 051, Sienna = 442, Equinox = 404, Encore = ?, MKC = ?) are absent from or differently assigned in the map.
3. The manual itself warns: "If one needs to select cars based on make and model the data element of choice is VINA_MOD rather than MAK_MOD." Our pipeline ignored this for pre-2019 data.
4. A second, opposite-direction error exists: real pre-2019 HHRs were coded 20023, which has NO map entry, so genuine pre-2019 HHR deaths were dropped while 269 Luminas were added. The HHR row is wrong in both directions.

## Blast radius on published stories (drafts/*.html mentioning affected models)

- `same-rate-two-autopsies.html` (#872): Camry-vs-HHR matched pair 2.03 vs 2.12 collapses to ~2.03 vs ~1.05. The "same rate" finding does not survive.
- `honda-fit-safest-subcompact-killed.html`: Fit 0.72 → ~0.57. Headline number changes (direction: safer than published).
- `delta-platform-same-bones-different-graves.html`: Cobalt/HHR Delta-platform comparison uses HHR 2.12.
- `gm-orphan-sedan-body-count.html`, `brand-lethality-ranking.html`, `death-export-ratio.html`: cite HHR figures.
- `affordable-car-death-spiral.html`, `fiesta-subcompact-survivor.html`, `spark-to-trax-cheapest-car-safety` (queued #8xx): cite Spark 1.28.
- FARS_TOXICOLOGY rows for all 11 models mix ghost-model drivers with real ones (e.g. HHR: 926 drivers, 20.2% any impairment); impairment stats cannot be split by model year from current output and stay contaminated until regeneration.

## Limitations

- Corrected rates assume the fleet/VMT denominators are keyed to the true nameplate; if denominators also absorbed ghost-era registrations, corrections shift slightly. The direction and rough magnitude are robust.
- First-production-year boundaries use US model years (Spark 2013, Sonic 2012, HHR 2006, Encore 2013, MKC 2015, Fit 2007, Equinox 2005, Enclave 2008, Prius 2001, Rogue 2008, Sienna 1998). Ghost windows end years before launch in every case, so boundary quibbles do not change the finding.
- The census checked nameplates with known launch years and large pre-launch shares; a full code-by-code audit of all ~1,100 map entries may find more.
- Post-2018 crash data uses VIN-decoded VINA_MOD and is unaffected; the contamination is confined to pre-2019 crash years.
- Aggregate national fatality counts are unaffected: every death is real, only the badge attribution is wrong. The defect corrupts model-level analysis, not the census.

## Strongest counterargument

An analyst could argue the mislabeled rows are still "the same GM small-car lineage" and the site-level conclusions (brand rankings, class comparisons) barely move. True for brand aggregates, false for model-level claims: HHR's rate halves, MKC's falls 84%, and #872's central matched-pair finding inverts. Model-level numbers are the product; they must be right.

## Primary sources (3+)

1. NHTSA FARS Analytical User's Manual 1975-2011 (DOT HS 811 693), Appendix A Vehicle Make/Model Designation — the authoritative code table (mirror: https://data.nber.org/fars/ftp.nhtsa.dot.gov/FARS/FARS-DOC/USERGUIDE-2011.pdf). Lines: Chevrolet 020/034/036/039, Lincoln 012, Buick 401/402, Honda 033, Toyota 033/441, Nissan 034.
2. NHTSA FARS manual text: "If one needs to select cars based on make and model the data element of choice is VINA_MOD rather than MAK_MOD." (1975-2018 and 1975-2020 editions, same warning.)
3. `fars_process.py` MAK_MOD_MAP (repo primary source): lines 886, 889, 896, 916, 920, 940, 952, 1092, 1122.
4. `fars_output.js` FARS_MODEL_YEAR + FARS_BY_MODEL (repo primary source): the ghost distributions and published rates.

## Recommended follow-up (not part of this article)

Rebuild MAK_MOD_MAP as year-aware (code meaning depends on crash year), or backfill pre-2019 records with VINA_MOD/VIN-decoded models, then regenerate fars_output.js and audit the ~10 published stories above for corrections.
