# Research: #908 — The Deadliest SUV in America Is One Nobody Remembers

**Journalist:** Mia Crumplezone (Safety Engineering Editor — forensic crash analysis, design beat)
**Kicker:** Investigation
**Status:** RESEARCH → DRAFT

## Thesis
The Chevrolet Tracker, a vehicle GM stopped building in 2004, has the highest per-mile
fatality rate of any SUV in the FARS 2014-2023 dataset: **7.83 deaths per 100M VMT**.
That is 41x the Toyota RAV4, higher than the Toyota Land Cruiser (6.27), and the
second-highest rate in the entire 337-model table behind only the Hyundai Veloster (8.54).
And it is not a drunk-driving story: Tracker drivers test impaired in fatal crashes only
12.7% of the time vs. the 20.0% dataset average. When sober drivers die at 41x the rate,
it is the machine, not the driver. Design autopsy: pre-ESC, IIHS side-impact POOR,
rollover dynamics that flunked the federal fishhook test, and a roof that was never
crash-tested at all.

## Data (from fars_output.js, NHTSA FARS 2014-2023)
- Chevrolet TRACKER, cls SUV: deaths=856, annual=85.6, crashes=1558, fleet=87500,
  vmt=1094 (x10M mi), rate=7.83
- Chevrolet TOXICOLOGY: drivers=573, alc=60 (10.5%), drug=34 (5.9%), any=73, anyPct=12.7
- Dataset-wide weighted anyPct = 20.0% (weighted by drivers)
- Comparisons: Toyota RAV4 rate 0.19 (deaths 914, fleet 3,762,500); Toyota LAND CRUISER
  rate 6.27 (deaths 343); Hyundai VELOSTER rate 8.54 (deaths 598); Honda ACCORD 3.07
- Ratio: Tracker / RAV4 = 41.2x; Tracker / Land Cruiser = 1.25x
- Model-year distribution caveat: of 846 Tracker deaths with a coded model year,
  755 (89.2%) carry model years AFTER 2004, when GM stopped US Tracker production.
  FARS MOD_YEAR is vehicle model year, so these are miscodings (or mis-VIN-decoded
  records, e.g. Trax spill-over). The 856 death count is real FARS crashes; the
  model-year field is not trustworthy for this nameplate.

## Primary sources (3+)
1. NHTSA FARS database, 2014-2023. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS dynamic rollover test study (Garrott et al. 1999, cited in IIHS media piece):
   "the vehicles that performed worst in the J-turn or fishhook tests ... the Chevrolet
   Tracker and Ford Ranger, had the highest fatal and injury rollover rates of any
   vehicles tested." Single-vehicle fatal rollover rate for Tracker/Sidekick: 127,
   higher than the 4Runner (119) despite better static stability factor.
   https://www.iihs.org/media/b7399b3d-5439-4d74-9ea2-decf3a1c277b/17666643
3. IIHS crash ratings, 2004 Chevrolet Tracker 4-door SUV: Moderate overlap Acceptable;
   Side impact POOR (driver: Poor head protection, Poor head/neck, Marginal torso);
   Roof strength NOT TESTED; small overlap NOT TESTED.
   https://m.carcomplaints.com/Chevrolet/Tracker/2004/safety/
4. NHTSA rollover resistance ratings (2001 MY): Chevrolet Tracker 4DR 4x2 — 3 stars,
   4x4 — 3 stars. https://www.automotive-fleet.com/8887/dot-announces-rollover-resistance-ratings
5. Reuters via WorkTruckOnline (2003-2004): IIHS found the Suzuki Vitara, Chevrolet
   Tracker "nearly the same" as the Suzuki Grand Vitara, assigned the same POOR side
   rating; only a Hyundai Santa Fe with side airbags scored Acceptable.
   https://www.worktruckonline.com/news/compact-suvs-perform-poorly-in-side-impact-tests
6. Edmunds 2004 Tracker: NHTSA frontal driver 4/5, side driver 4/5 / passenger 5/5,
   rollover not rated; IIHS moderate overlap Acceptable, side Poor.
   https://www.edmunds.com/chevrolet/tracker/2004/review/

## Novel contribution
1. Novel cross-tab: the deadliest SUV in the dataset is simultaneously among the most
   SOBER (12.7% impaired vs 20.0% average) — inverting the usual "sports car + DUI"
   explanation for high rates. A rate this extreme without an impairment signal is a
   vehicle-design verdict.
2. FARS model-year audit: 89.2% of Tracker deaths are coded to model years that never
   existed — a concrete, nameplate-level demonstration that per-model FARS rates rest
   on shaky coding for discontinued vehicles.
3. Design autopsy linking three independent datasets (FARS per-mile rate, IIHS static
   crash ratings, IIHS dynamic rollover tests) to one mechanism: narrow track + high
   CG + no ESC + Poor side structure = rollover-to-ejection/fatal injury chain.

## Kill test
Genuinely newsworthy? Yes: (a) no existing Crash Report draft covers the Tracker
(checked 842 slugs); (b) "41x the RAV4" is a shocking, defensible comparison;
(c) the sober-killer inversion is a fresh thesis vs. prior sober-paradox pieces
(Solara/Odyssey/Land Cruiser); (d) 87,500 of these are still registered — this is
a live fleet, mostly cheap first cars.

## Counterargument (full strength)
- The denominator is an estimate. 87,500 remaining Trackers with ~12.5k miles/year
  each is a pipeline estimate, not odometer data. Low-volume models carry ±15%+
  uncertainty; the true rate could be several points lower.
- Miscoding cuts both ways: if 89% of Tracker deaths carry impossible model years,
  some of those deaths may be mis-VIN-decoded vehicles (e.g., Trax), inflating the
  numerator. FARS cannot tell us which.
- Selection effects: people still driving a $3,000 2002 Tracker in 2023 are not a
  random sample — rural use, off-pavement use, teen first-car use, deferred
  maintenance (bald tires, worn suspension) all raise the death rate without any
  design flaw. A rural-only fleet would skew fatal (higher speeds, longer EMS times).
- Survivorship: the 2023 Tracker fleet is the ones that survived 20 years — but the
  deadliest ones already crashed out. Which way that biases the rate is genuinely
  ambiguous.
- The honest rate for "a 2026 used-car shopper" is unknowable from this data;
  what FARS proves is that the NAMEPLATE, as currently driven, is exceptionally
  lethal per mile.

## Actionable takeaways
- If you own a pre-2005 small SUV (Tracker, Vitara, Sidekick): it has no ESC, an
  IIHS POOR side rating, and rollover dynamics that flunked federal dynamic tests.
  Drive it like the antique it is — or replace it. Modern small SUVs (RAV4 0.19,
  Forester 0.26) are ~40x safer per mile.
- Do not buy one as a teenager's first car, no matter how cheap. The cheap price
  is the trap.
- For researchers: merge/normalize discontinued nameplates and audit MOD_YEAR
  before publishing per-model FARS rates.
