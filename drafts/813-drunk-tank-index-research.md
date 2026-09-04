# Research — #813 "The Drunk Tank Index" (Axle McScatter)

## Angle (1-2 sentences)
Cross-tabulate FARS toxicology (impairment % among drivers in fatal crashes)
against FARS fatality rate (deaths per 100M VMT). Four vehicles combine
top-decile impairment with at-or-below-median lethality: the Jeep Commander,
Toyota FJ Cruiser, Buick Verano, and Ford Five Hundred.

## Kill test
Genuinely new? Yes. The standard frame is "impairment kills." This inverts it:
in these cars, a quarter of fatal-crash drivers were impaired, yet the cars
kill at below-average rates. The novel read: FARS impairment % is conditional
on the crash being fatal, so high-impairment + low-rate is the statistical
signature of a car whose structure saves everyone except drivers who defeat
its protection. No prior Crash Report article ran this cross-tab (checked
slugs: no five-hundred, verano, commander, fj-cruiser articles exist).

## Data (from fars_output.js, FARS 2014-2023; fleet medians: rate 0.54, any-impaired 20.2%)

| Vehicle | Drivers (tox) | Any impaired | Alcohol | Drugs | Deaths | Rate/100M VMT |
|---|---|---|---|---|---|---|
| Ford Five Hundred (2005-07) | 216 | 26.4% | 19.9% | 13.0% | 86 | 0.57 |
| Toyota FJ Cruiser (2007-14) | 265 | 25.3% | 19.6% | 10.9% | 95 | 0.43 |
| Jeep Commander (2006-10) | 273 | 24.9% | 19.8% | 12.1% | 46 | 0.28 |
| Buick Verano (2012-17) | 397 | 24.7% | 16.4% | 13.1% | 69 | 0.46 |

Contrast anchors: Buick Park Avenue 31.7% impaired / 0.48 rate (already
covered in park-avenue-impairment-king); fleet-wide drug-positive 8.66%,
alcohol-positive 15.12% (computed from FARS_TOXICOLOGY totals).

## Primary sources (3+)
1. NHTSA FARS 2014-2023 via fars_output.js (deaths, rates, toxicology).
   https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS ratings:
   - 2007 Ford Five Hundred: Top Safety Pick 2006 (gold); Good in
     frontal-offset, side, rear with side airbags.
     https://www.iihs.org/ratings/vehicle/ford/five-hundred-4-door-sedan/2007
   - Buick Verano: 2012 Top Safety Pick; Good in all IIHS tests; NHTSA
     5-star overall.
     https://www.jdpower.com/cars/new-car-previews/2013-buick-verano-preview
   - Toyota FJ Cruiser: IIHS Good frontal-offset and side; NHTSA 5-star
     driver frontal, 5-star side.
     https://www.edmunds.com/toyota/fj-cruiser/2007/review/
   - 2008 Jeep Commander: NHTSA 5-star frontal driver/passenger; 3-star
     rollover; standard 3-row side curtains with rollover sensors, ESC
     with roll mitigation. Never IIHS-tested.
     https://www.thecarconnection.com/overview/jeep_commander_2008
     https://www.autoblog.com/features/rock-em-sock-em-suv-jeep-commander-passes-crash-test
3. IIHS fatality statistics (methodology context).
   https://www.iihs.org/topics/fatality-statistics

## Original contribution
The impairment-rate cross-tabulation and its interpretation: because FARS
only records fatal crashes, a crashworthy car's fatal-crash pool is
enriched for impaired drivers (sober drivers survive and never enter the
dataset). High impairment % paired with low death rate is therefore not a
"drunk magnet" story but a protection story. Nobody ran this cut.

## Limitations (for article)
- FARS captures only fatal crashes (~40k/yr vs ~6.7M total crashes).
- rate uses estimated VMT, not odometer readings; ±15% uncertainty for
  low-volume models (Commander: only 46 deaths).
- Toxicology testing is incomplete and nonrandom: police test more often
  when impairment is suspected, inflating rates unevenly across states.
- "Any impaired" = BAC > 0 or drug-positive; drug panels vary by state
  and year; presence != causation.

## Strongest counterargument (for article, at full strength)
The whole pattern could be a testing artifact: if police in the states
where Commanders and FJ Cruisers die are simply more likely to order tox
screens, these cars look "more impaired" without their drivers being any
drunker. And with only 46 Commander deaths, a handful of misclassified
cases swings the percentage. The honest version: the protection story is
the best explanation that also fits the IIHS/NHTSA ratings, but the data
cannot fully exclude differential testing.

## Actionable insight
Used-car shoppers who want maximum survivability per dollar: all four are
depreciated, all four aced the crash tests of their era, and the FARS
record says their structures forgive even impaired drivers. Check any VIN
at nhtsa.gov/recalls before buying; none of this excuses impaired driving,
which remains the thing most likely to defeat the engineering.
