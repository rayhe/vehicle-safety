# Research Notes — Article #947: The Badge Predicts Your IIHS Failures Better Than the Sticker Price

**Journalist:** Axle McScatter (Data Visualization Editor)
**Started:** 2026-09-19T19:40:00-07:00
**Slug:** 947-jeep-brand-fails-three-tests-mazda-none

## The story

On Sept 16, 2026, ForCar (Denis Kataev) published an aggregation of IIHS ratings data:
they took 305 vehicles rated on at least four of six IIHS evaluations and counted how
many each vehicle failed. The six evaluations: headlights, child seat anchors (LATCH),
seat belt reminders, automatic front braking (vehicle-to-pedestrian), the updated
moderate overlap front test, and the updated side impact test.

### FIG.01 — Number of IIHS evaluations failed per vehicle (n=305)

| Tests failed | Vehicles |
|---|---|
| None | 145 |
| One | 89 |
| Two | 27 |
| Three | 35 |
| Four | 6 |
| Five | 3 |

Just under half fail nothing. At the other end, 44 vehicles fail three or more, and
three fail five of six. (ForCar does not name the three 5-fail vehicles; do NOT invent names.)

### FIG.02 — Average evaluations failed, by brand

| Brand | Vehicles | Avg tests failed |
|---|---|---|
| Jeep | 14 | 3.07 |
| Chevrolet | 12 | 1.83 |
| Ford | 14 | 1.71 |
| Audi | 16 | 1.56 |
| Kia | 17 | 1.24 |
| Hyundai | 27 | 0.44 |
| Honda | 22 | 0.41 |
| Mazda | 25 | 0.08 |

Mazda: 2 failures total across 25 vehicles. Jeep: 3.07/vehicle.

### The insight

Failures cluster by brand, not by price. Audi (luxury pricing) sits mid-table at 1.56,
between Ford and Kia. Platform age predicts results better than sticker price: a vehicle
architecture designed before an evaluation existed fails it, and a long product cycle
carries that failure across the whole range at once. Brands with long-lived platforms and
heavy parts-sharing (Jeep, Chevrolet, Ford) top the table. Brands that redesign more
often (Mazda, Honda, Hyundai) bottom it.

### Spot verification against IIHS-derived sources (2024/2025 Jeep Wrangler 4-door)

- Small overlap front: Marginal (tipped onto side in IIHS audit tests)
- Headlights: Poor/Marginal depending on trim (base halogen Poor; LED projectors Marginal)
- Front crash prevention (pedestrian): Poor (system not available)
- Seat belt reminders: Marginal (low volume, delayed initiation)
- LATCH: G+ (Good Plus)
- Updated moderate overlap: Good; updated side: Good

=> Fails 3-4 of the six evaluations counted. Direction consistent with Jeep's 3.07 average.

Sources: moparinsiders.com (IIHS rating table), autoevolution.com, jdpower.com, thecarconnection.com.

## The angle for Axle McScatter

Axle loves regression-fitting anything. The angle: ratings are usually read one line at a
time, where a single Poor looks like noise. Count them and the noise becomes a signal,
and the signal is the badge on the grille. Headline idea: "The Average Jeep Fails Three
IIHS Safety Tests. The Average Mazda Fails None." (mirror ForCar's headline, credit the
aggregation).

Novelty: The Crash Report has never done a brand-level IIHS failure count. The piece is a
methodology story, Axle's home turf.

## Actionable insights (required)

1. When shopping: count failures across the six evaluations, don't read them one at a
   time. One Marginal on an otherwise clean car is noise; three failures across unrelated
   systems tells you the generation of the design.
2. Check the model year: the gap between two years of the same nameplate can exceed the
   gap between brands, because most of these evaluations are recent and post-redesign
   cars behave completely differently.
3. The badge matters more than the price: a premium Audi averages 1.56 failures while a
   mainstream Mazda averages 0.08.
4. Verify at iihs.org/ratings before buying; check your VIN at nhtsa.gov/recalls.

## References (must appear in article)

1. ForCar, "The Average Jeep Fails Three Safety Tests. The Average Mazda Fails None.",
   Sep 16, 2026. https://forcar.org/blog/vehicles-failing-multiple-safety-tests/
2. IIHS vehicle ratings. https://www.iihs.org/ratings
3. IIHS fatality statistics (driver death rates by vehicle, for context). https://www.iihs.org/topics/fatality-statistics
4. IIHS vehicle size and weight (why size still matters alongside ratings). https://www.iihs.org/topics/vehicle-size-and-weight
5. NHTSA recalls database (check your VIN). https://www.nhtsa.gov/recalls
6. MoparInsiders, "Refreshed Jeep Wrangler Nails Latest IIHS Crash Test" (Wrangler IIHS rating table). https://moparinsiders.com/refreshed-jeep-wrangler-nails-latest-iihs-crash-test/

## Kill test

- Newsworthy: YES. Novel aggregation of public IIHS data published 3 days ago, not yet
  covered anywhere else in the queue or by mainstream outlets.
- Novel angle: YES. "Read the ratings column-wise and the badge predicts the score" is a
  fresh methodological point. Price-doesn't-predict-it (Audi mid-table) is counterintuitive.
- Data risk: aggregation is ForCar's, not ours. Mitigate by crediting ForCar explicitly,
  spot-verifying the direction against IIHS-derived reporting, and never naming the
  unnamed three 5-failure vehicles.
- Not a duplicate: queue grep for jeep-fails/mazda/forcar/brand-fail/multiple-test/fail-count found nothing except Jeep recall stories (different subject).

## Verdict: PROCEED to DRAFT (Axle McScatter)
