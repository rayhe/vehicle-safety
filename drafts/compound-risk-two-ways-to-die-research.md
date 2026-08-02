# Research: The Compound Risk Index — Two Ways Your Car Can Kill You

## Angle
Original cross-tabulation: multiply each vehicle's FARS death rate (per 100M VMT) by its impairment multiplier (anyPct / 20%, normalized to national average). This creates a single "compound risk score" that captures BOTH engineering danger AND behavioral danger.

## Key Finding
The gap between the highest compound score (Hyundai Veloster: 7.43) and lowest (Ram 1500: 0.13) is **57x**. Same roads, same decade, 57x difference in combined mechanical + behavioral risk.

## Original Taxonomy (novel contribution)
Vehicles fail in two fundamentally different ways:
1. **The Car Is the Problem** (high rate, low impairment): Veloster (rate 8.54, impair 17.4%), Tracker (7.83, 12.7%), Land Cruiser (6.27, 8.9%)
2. **The Driver Is the Problem** (average rate, high impairment): Camaro (3.44, 23.0%), LeSabre (2.67, 23.5%), Corvette (1.52, 26.2%)
3. **Both Are the Problem** (high rate + high impairment): Mustang (6.02, 21.9%), Cobalt (5.10, 22.4%), Impala (5.00, 21.4%)
4. **Neither** (low rate, low impairment): RAV4 (0.19, 18.4%), Highlander (0.42, 16.4%), Tucson (0.34, 17.6%)

## Data Sources
- FARS 2014-2023 via NHTSA FARS database
- FARS_BY_MODEL: deaths, crashes, fleet, rate per 100M VMT
- FARS_TOXICOLOGY: alcohol/drug impairment by vehicle model

## Top 10 Compound Risk
1. Veloster 7.43 — Sports Car
2. Mustang 6.59 — Sports Car
3. Cobalt 5.71 — Sedan (ignition switch recall car!)
4. Impala 5.35 — Sedan
5. Maxima 5.34 — Sedan
6. Tracker 4.97 — SUV (rebadged Geo)
7. S-10 Pickup 4.95 — Pickup
8. Camaro 3.96 — Sports Car
9. LeSabre 3.14 — Sedan
10. Trailblazer 3.13 — SUV

## Surprising findings
- GM dominates: 7 of top 15 compound risk vehicles are GM
- The Cobalt (compound 5.71) is more dangerous than the Camaro (3.96) — a sedan beats a muscle car
- The Veloster wins despite BELOW-AVERAGE impairment — pure engineering failure
- The Corvette doesn't even crack top 10 despite 26.2% impairment — its rate (1.52) is "only" average

## Strongest Counterargument
Fleet age confounds both variables. Older vehicles have worse crashworthiness (higher rate) AND their demographics skew toward higher impairment risk. The compound score may partly capture "old car driven by high-risk demographic" rather than independent engineering + behavioral factors.

## Limitations
- VMT estimates carry ±15% uncertainty for low-volume models
- Impairment rates from toxicology of fatal crash drivers only — doesn't capture non-fatal behavior
- No direct measure of engineering quality; rate is a proxy that includes all crash causes
- Small-fleet models (Tracker, Veloster) have higher statistical variance

## Journalist
Vin Wreckage — existential dread, paradox, philosophical take on the data
