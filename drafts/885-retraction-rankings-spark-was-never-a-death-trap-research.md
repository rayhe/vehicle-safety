# Research #885: The Retraction — the corrected death-rate leaderboard after the Ghost Fleet audit

**Number:** 885
**Slug:** `retraction-rankings-spark-was-never-a-death-trap`
**Journalist:** Rex Driverton (fatality-rate investigations; deadpan noir)
**Kicker:** The Gap (published numbers vs corrected numbers)
**Kill test:** PASS — corrections column is a first for the site; the inversion is extreme (Spark 1.28→0.42, MKC 0.79→0.13); donor models were UNDERCOUNTED, so the story has a second beat; actionable (cheap used-car safety buys flip).
**Status note:** 2026-09-11 publishing slot already consumed by #878. A passing #885 queues as SHIP_BLOCKED.

## Thesis

Yesterday's #884 found 1,466 ghost deaths polluting 11 nameplates' FARS rows. Today's story applies the correction: strip the ghosts and the site's own published leaderboards collapse. The Chevrolet Spark — America's cheapest new car in its era, and a fixture of this site's "cheapest cars are the deadliest" narrative (`subcompact-death-lottery.html`, `spark-to-trax-cheapest-car-safety`) — was never a death trap. Its corrected rate is 0.42, second-safest of the entire cheap-car set, behind only the Mitsubishi Mirage (0.40). The Lincoln MKC goes from 0.79 to 0.13: one of the safest luxury crossovers per mile in the entire database.

## Corrected leaderboard (rate = deaths per 100M VMT, FARS 2014–2023)

Receiver rows — ghosts removed:

| Model | Published deaths | Published rate | True deaths | Corrected rate | All-model rank old→new |
|---|---|---|---|---|---|
| Chevrolet HHR | 534 | 2.12 | 265 | ~1.05 | 35 → 85 |
| Chevrolet Spark | 517 | 1.28 | 169 | ~0.42 | 72 → 200 |
| Chevrolet Sonic | 494 | 1.40 | 198 | ~0.56 | 63 → 159 |
| Buick Encore | 341 | 0.52 | 169 | ~0.26 | 173 → 255 |
| Lincoln MKC | 173 | 0.79 | 29 | ~0.13 | 121 → 300 |
| Honda Fit | 290 | 0.72 | 228 | ~0.57 | 131 → 158 |
| Buick Enclave | 198 | 0.52 | 144 | ~0.38 | 175 → 219 |
| Toyota Prius | 495 | 0.55 | 458 | ~0.51 | 163 → 174 |
| Chevrolet Equinox | 1056 | 0.36 | 1002 | ~0.34 | 224 → 225 |
| Nissan Rogue | 968 | 0.35 | 943 | ~0.34 | 226 → 226 |
| Toyota Sienna | 430 | 0.49 | 425 | ~0.48 | 181 → 177 |

Cheap-car set, before vs after:

| Model | Published | Corrected |
|---|---|---|
| Chevrolet Sonic | 1.40 | 0.56 |
| Chevrolet Spark | 1.28 | 0.42 |
| Kia Rio | 1.07 | 1.07 |
| Ford Fiesta | 1.02 | 1.02 |
| Nissan Versa | 0.90 | 0.90 |
| Hyundai Accent | 0.80 | 0.80 |
| Toyota Yaris | 0.76 | 0.76 |
| Honda Fit | 0.72 | 0.57 |
| Chevrolet Aveo | 0.69 | see below (donor) |
| Mitsubishi Mirage | 0.40 | 0.40 |

Corrected cheap-car ranking: Rio 1.07, Fiesta 1.02, Versa 0.90, Accent 0.80, Yaris 0.76, Aveo ?, Fit 0.57, Sonic 0.56, Spark 0.42, Mirage 0.40.

## Second beat: the donor models were undercounted too

The 1,466 ghosts are real deaths belonging to real donor cars. Those donor rows sit in the same database, undercounted:

| Donor | Row deaths | Hidden in receiver row | True deaths | Row rate → rough corrected |
|---|---|---|---|---|
| Chevrolet Monte Carlo | 178 | 348 (Spark row) | ~526 | 0.71 → ~2.09 |
| Chevrolet Aveo | 138 | 296 (Sonic row) | ~434 | 0.69 → ~2.17 |
| Chevrolet Lumina | 46 | 269 (HHR row) | ~315 | 0.30 → ~2.05 |
| Buick Rendezvous | 143 | 172 (Encore row) | ~315 | 0.65 → ~1.43 |
| Lincoln LS | 52 | 144 (MKC row) | ~196 | 0.52 → ~1.96 |
| Toyota Celica | 66 | 37 (Prius row) | ~103 | 0.63 → ~0.98 |
| Honda Prelude, Chevy Metro, Buick Rainier, Nissan Z-cars, Toyota Previa | no rows | ghosts only | — | — |

Donor-side corrections are rougher (denominators keyed to different fleet estimates); flag as approximate in the article.

## Which published stories this retraction touches

- `same-rate-two-autopsies.html` (#872): Camry/HHR matched pair collapses (2.03 vs 1.05).
- `honda-fit-safest-subcompact-killed.html`: Fit 0.72 → 0.57, safer than published.
- `subcompact-death-lottery.html`, `spark-to-trax-cheapest-car-safety`: the "cheap cars kill" narrative inverts for Spark/Sonic.
- `delta-platform-same-bones-different-graves.html`, `gm-orphan-sedan-body-count.html`, `brand-lethality-ranking.html`, `death-export-ratio.html`, `affordable-car-death-spiral.html`, `fiesta-subcompact-survivor.html`: cite contaminated HHR/Spark figures.

## Limitations

- Corrected rates assume fleet/VMT denominators belong to the true nameplate; direction and magnitude are robust, decimals are approximate.
- Donor-side corrected rates are rough (denominator mismatch); present as "roughly" and flagged.
- FARS_TOXICOLOGY rows for all 11 receiver models still mix ghost-model drivers; impairment stats stay contaminated until regeneration.
- Post-2018 crash data uses VIN-decoded VINA_MOD and is unaffected.

## Strongest counterargument

A critic says the published cheap-car hierarchy barely matters because nobody cross-shops a 2013 Spark against a Mirage on per-mile death rates. Fair — but the site published specific numbers attached to specific badges, and shoppers DO cross-shop used Sparks and Sonics. The badge is the product. Getting it wrong for three years of articles is worth saying out loud.

## Primary sources (3+)

1. NHTSA FARS Analytical User's Manual 1975-2011 (DOT HS 811 693), Appendix A — authoritative code table (https://data.nber.org/fars/ftp.nhtsa.dot.gov/FARS/FARS-DOC/USERGUIDE-2011.pdf).
2. `fars_process.py` MAK_MOD_MAP (repo) — the static map that caused the defect.
3. `fars_output.js` FARS_BY_MODEL + FARS_MODEL_YEAR (repo) — published vs corrected figures; this research recomputes them.
4. NHTSA FARS 2014–2023, https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars.
5. This site's own published stories (listed above) — the retraction targets.
