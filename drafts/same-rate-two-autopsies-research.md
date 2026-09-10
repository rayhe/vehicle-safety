# Research: Same-Rate Two-Autopsies (article #872)

## Angle
A death rate is a product of two numbers, and the two factors are nearly independent.
rate = (fatal-crash involvements per 100M VMT) x (occupant deaths per 100 involvements).
Pearson r between involvement rate and per-crash lethality across 200k+ fleet models: **0.293**.
Two vehicles can post the same headline death rate via completely opposite paths.

## Kill test
PASS. Novel original calculation on the FARS-derived dataset. Not synthesis:
no prior article decomposes the rate this way (compound-risk used rate x impairment;
conditional-survival used deaths/crashes alone). Fresh numbers, verifiable math.

## Data (FARS 2014-2023 via fars_output.js; fleet>200k, crashes>300)
National means: rate 1.22/100M VMT | 2.0 involvements/100M VMT | 57.0 occupant deaths/100 involvements.

### Matched pairs (rate within ~0.1, wildly different decomposition)
| Vehicle | rate | inv/100M | deaths/100 inv | deaths | crashes |
|---|---|---|---|---|---|
| Ford E-350 (van) | 2.51 | 6.1 | 41.0 | 776 | 1892 |
| Buick Century (sedan) | 2.41 | 3.1 | 76.8 | 849 | 1106 |
| Chevrolet Tahoe (SUV) | 2.49 | 4.9 | 51.0 | 2592 | 5078 |
| Chevrolet Cavalier (sedan) | 2.43 | 2.8 | 85.7 | 1225 | 1429 |
| Toyota Camry (sedan) | 2.03 | 3.4 | 59.3 | 6328 | 10670 |
| Chevrolet HHR (sedan) | 2.12 | 2.7 | 80.1 | 534 | 667 |
| Chevrolet Corvette (sports) | 1.52 | 1.7 | 88.4 | 320 | 362 |
| Chevrolet Suburban (SUV) | 1.36 | 2.6 | 51.5 | 593 | 1151 |
| Dodge Neon (sedan) | 1.50 | 1.7 | 85.6 | 602 | 703 |
| Ford Crown Victoria (sedan) | 1.46 | 2.2 | 65.3 | 881 | 1349 |
| Ford Focus (sedan) | 2.52 | 3.7 | 68.4 | 3046 | 4455 |
| GMC Yukon (SUV) | 2.55 | 5.3 | 47.6 | 1114 | 2339 |

Reading: E-350 gets into fatal crashes 3x the national average rate per mile but its
occupants survive them 30% better than average. The Century crashes half as often but
kills its occupants 77 times out of 100 involvements. Same rate. Opposite autopsy.

## Methodology
- involvement rate = crashes / vmt * 10 (vmt stored so that deaths/vmt*10 = per-100M rate)
- lethality = 100 * deaths / crashes (occupant deaths per fatal-crash involvement)
- Verify: E-350 6.1 * 41.0 / 100 = 2.50 = rate 2.51 (rounding). Century 3.1 * 76.8 / 100 = 2.38 ~ 2.41.
- deaths = FARS vehicle-record occupant deaths (DEATHS/FATALS field); crashes = vehicle involvements in fatal crashes.

## Newsy hook (external)
- The Drive, Mar 23 2026: IIHS will begin safety ratings for commercial vehicles,
  starting with cargo vans and big pickups, focused on crash avoidance and presence
  of advanced seatbelts/airbags. IIHS: 6,535 killed in crashes with work vehicles in
  2023 (16% of roadway fatalities); most fatalities were other road users.
  https://www.thedrive.com/news/the-iihs-will-give-safety-ratings-to-commercial-vehicles-now-heres-why-that-matters
- This decomposition explains WHY avoidance is the right lever for commercial vans:
  the E-350's death rate comes from involvement frequency, not per-crash lethality.
  Seatbelts/AEB fix that; more airbags won't.

## Primary sources (3+)
1. NHTSA FARS 2014-2023 (bulk data) -> https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. FARS query/CDAN -> https://cdan.dot.gov/query
3. NHTS travel survey (VMT) -> https://nhts.ornl.gov/
4. IIHS vehicle size and weight -> https://www.iihs.org/topics/vehicle-size-and-weight
5. The Drive on IIHS commercial-vehicle ratings (Mar 23, 2026) -> thedrive.com URL above

## Counterargument (strongest)
The E-350's low per-crash lethality is partly mass displacement, not superior
engineering: a 9,000-lb work van in a two-vehicle fatal crash often kills the other
driver, so its involvements show up with low occupant death counts. Conversely the
Century/Cavalier skew toward single-vehicle fixed-object crashes where there is no
other occupant to die instead. The decomposition is real but confounded by crash-type
mix and mass. VMT estimates carry ~15% uncertainty for low-volume models.

## Limitations
- Involvements are FATAL-crash involvements only; non-fatal crashes invisible.
- FARS fleet model-year coverage 2014-2023; many compared vehicles are discontinued
  (Century ended 2005, Cavalier 2005, E-350 still sold cutaway).
- Deaths = occupant deaths of that vehicle per FARS vehicle record.
- Fleet/VMT estimates use industry sales + NHTS mileage, not odometers.

## What to do
- Shoppers: a headline death rate hides which failure mode you're buying. High-involvement
  vehicles (E-350, Tahoe, Yukon) -> prioritize avoidance tech (AEB, blind-spot).
  High-lethality vehicles (Century, Cavalier, HHR, Corvette) -> the structure is the
  problem; no driver aid fixes it. Century/Cavalier buyers: the answer is "buy a newer car."
- Check VIN recalls at nhtsa.gov/recalls; watch the new IIHS commercial-vehicle ratings.

## Duplication check
- compound-risk-two-ways-to-die: rate x impairment, different decomposition. OK.
- conditional-survival-rate: deaths/crash alone, no involvement-rate axis. OK.
- No story decomposes rate = involvement x lethality. CLEAR.
