# Research: #1362 — "The Badge Means Nothing" (within-manufacturer safety spread)

**Article:** #1362
**Journalist:** Clara Rollover (consumer guidance / class comparison beat, "The Gap" kicker)
**Hook date:** 2026-11-02

## Thesis
The badge on the hood tells you almost nothing about your odds. Within a single
automaker's lineup, the spread between the safest and deadliest model runs into the
hundreds of times over — Chevrolet's safest model (Prizm, rate 0.02) is ~392x safer
than its deadliest (Tracker, 7.83). Brand-level safety reputation is a rounding
error next to model choice. "Buy a safe brand" is folk wisdom. Buy a safe MODEL.

## Data (FARS 2014-2023, fars_output.js — primary source)
Deaths per 100M VMT (estimated_rate), makes with 5+ models:

| Make | Models | Best (rate) | Worst (rate) | Spread |
|------|--------|-------------|--------------|--------|
| Chevrolet | 32 | Prizm 0.02 | Tracker 7.83 | ~392x |
| Toyota | 26 | Matrix 0.02 | Land Cruiser 6.27 | ~314x |
| Hyundai | 11 | Palisade 0.06 | Veloster 8.54 | ~142x |
| Ford | 29 | Bronco 0.05 | Mustang 6.02 | ~120x |
| Dodge | 17 | (best 0.04) | (worst 2.62) | ~66x |
| Nissan | 19 | (best 0.08) | Maxima 5.11 | ~64x |
| Cadillac | 10 | (best 0.12) | (worst 3.89) | ~32x |
| Honda | 11 | (best 0.10) | (worst 3.07) | ~31x |
| BMW | 9 | (best 0.09) | (worst 2.73) | ~30x |

Spot checks (rate / deaths / fleet):
- Chevy Prizm: 0.02, 2 deaths, 87,500 fleet — discontinued 2002, tiny surviving fleet
- Chevy Tracker: 7.83, 856 deaths, 87,500 fleet
- Chevy Traverse: 0.20, 265 deaths, 1,050,000 fleet
- Toyota Matrix: 0.02, 6 deaths, 218,750 fleet
- Toyota RAV4: 0.19, 914 deaths, 3,762,500 fleet
- Toyota Land Cruiser: 6.27, 343 deaths, 43,750 fleet
- Ford Bronco: 0.05, 25 deaths, 437,500 fleet
- Ford Mustang: 6.02, 2,739 deaths, 568,750 fleet
- Hyundai Palisade: 0.06, 38 deaths, 525,000 fleet
- Hyundai Veloster: 8.54, 598 deaths, 87,500 fleet

## The novel contribution
No prior Crash Report piece computed WITHIN-MANUFACTURER dispersion. Coverage
checked (grep across all 1,369 research slugs): Land Cruiser as Toyota's deadliest
was covered ("land-cruiser-sober-deathtrap"), but never the make-level spread
frame. The 392x / 314x / 142x / 120x ranking itself is original.

## Why it matters (consumer angle)
Shoppers use brand reputation as a proxy: "Toyotas are safe." Toyota's RAV4 (0.19)
IS safe. Toyota's Land Cruiser (6.27) has a worse rate than a Chevrolet Impala
(5.00). The heuristic fails exactly where the money is — big expensive halo
vehicles. Same story at Ford (Bronco vs Mustang) and Hyundai (Palisade vs
Veloster). Actionable: shop by model-level data (IIHS driver death rates,
NHTSA VIN/recall lookup), not by badge.

## Limitations (required)
- Rates are estimates: deaths / estimated VMT, not odometer readings. Low-fleet
  models (Prizm, Tracker, Veloster: 87,500 each) carry large uncertainty; a
  handful of crashes moves the needle.
- Confounding by USE, not just engineering: Mustangs/Velosters are bought by
  young males and driven harder; Land Cruisers get taken off-road and into rural
  areas; Trackers are cheap beaters. Driver behavior explains part of the spread.
- Discontinued models dominate the extremes (Prizm dead since 2002, Tracker
  since 2004). Current lineups are narrower. Still: buyers of USED cars face
  exactly this choice, and the badge heuristic is most tempting there.
- FARS captures fatal crashes only (~39,000/yr of ~6.7M total). Low-fatality
  models can still injure plenty.

## Strongest counterargument (required, at full strength)
The badge is not MEANINGLESS. Brand-level engineering culture is real: every
Toyota in the top-10 safest list got there partly because Toyota rolled ESC and
side airbags across the lineup early; Chevrolet's 2012+ lineup is broadly safer
than its 2000s lineup. Within-brand, the SAFEST models of every make cluster in
the modern-SUV era (Bronco, Palisade, Traverse, RAV4), which is a brand-level
story about platform renewal. And the spreads collapse if you restrict to
currently-sold models: nobody is choosing between a new Prizm and a new
Tracker. The badge is a weak signal, not a dead one — but a weak signal is all
a shopper needs when the stakes are this high, and model-level data is free.

## Sources
1. NHTSA FARS 2014-2023 via fars_output.js (primary data) —
   https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS, "Driver death rates by make and model" (independent model-level
   corroboration of within-brand spread) — https://www.iihs.org/ratings/driver-death-rates-by-make-and-model
3. IIHS, "Vehicle size and weight" (mass/aggressivity physics behind class
   differences) — https://www.iihs.org/topics/vehicle-size-and-weight
4. NHTSA recalls / VIN lookup (actionable) — https://www.nhtsa.gov/recalls

## Kill test
Genuinely newsworthy? YES — original calculation, never published on this site,
counterintuitive (Toyota's deadliest model is worse than a Chevy Impala),
directly actionable for used-car shoppers. Not a rehash: prior Land Cruiser
pieces were impairment-framed; this is the make-level dispersion frame.
