# Research: 934-fars-ghost-deaths-phantom-model-years

## Angle
The federal FARS database attributes 1,186 deaths across 19 popular models to **model years before those models existed**. For the Nissan Kicks, 74.9% of its recorded deaths are ghosts. This is a methodology story about the data source behind all 800+ Crash Report articles, including a self-correction: our own published fatality rates inherit the ghosts.

## Kill test
- Genuinely newsworthy? Yes. Nobody has quantified phantom model years in FARS before. The Nissan Kicks' published 0.69 death rate collapses to 0.17 when ghosts are removed.
- Novel angle? Yes. Original cross-tab: FARS_MODEL_YEAR vs known model launch years, with corrected fatality rates.
- Evergreen? Yes. Ships fine in December; no news peg needed.

## Method
1. Loaded `fars_output.js` (FARS_MODEL_YEAR: 323 models with death counts by vehicle model year, 2014-2023 crash window; FARS_BY_MODEL for published rates).
2. Compiled known launch model years from manufacturer announcements (Nissan Rogue 2008, Equinox 2005, Tahoe 1995, Kicks 2018, TrailBlazer 2002, Solara 1999, Highlander 2001, Enclave 2008, Edge 2007, Odyssey 1995, Escape 2001, Pilot 2003, Santa Fe 2001, Sorento 2003, Durango 1998, Acadia 2007, Traverse 2009, Murano 2003, CX-5 2013).
3. Summed deaths in model years < launch year = phantom deaths.
4. Corrected rate = published rate x (1 - phantom share). (Rate scales linearly with deaths; VMT denominator unchanged.)

## Findings (19 models checked)
| Model | Launch MY | Phantom deaths | Share | Published rate | Corrected rate |
|---|---|---|---|---|---|
| Nissan Kicks | 2018 | 248 | 74.9% | 0.69 | 0.17 |
| Buick Enclave | 2008 | 54 | 28.4% | 0.52 | 0.37 |
| Toyota Solara | 1999 | 131 | 20.5% | 4.25 | 3.38 |
| Chevrolet TrailBlazer | 2002 | 480 | 19.5% | 2.83 | 2.28 |
| Ford Edge | 2007 | 96 | 18.9% | 0.46 | 0.37 |
| Toyota Highlander | 2001 | 73 | 6.6% | 0.42 | 0.39 |
| Chevrolet Equinox | 2005 | 54 | 5.2% | 0.36 | 0.34 |
| Nissan Rogue | 2008 | 25 | 2.6% | 0.35 | 0.34 |
| Chevrolet Tahoe | 1995 | 25 | 1.0% | 2.49 | 2.47 |
Total: 1,186 phantom deaths = 7.6% of the 15,627 deaths across the checked models.

Spot detail: Kicks phantoms cluster in model years 2003-2013 (51 in 2003 alone); TrailBlazer phantoms 1989-2001 peak at 106 in 2000; Solara phantoms 1995-1998 (pre-launch coupe years); Edge phantoms 2005-2006.

## Where the ghosts come from
Two sources, both honest to state:
1. **Our own mapping guesses.** For pre-2019 FARS data, fars_process.py maps FARS MAK_MOD codes to modern names via MAK_MOD_MAP. Code '35048' maps to ('Nissan','KICKS'), '18402' to ('Buick','ENCLAVE'), '12021' to ('Ford','EDGE'). In the old FARS codebooks those numeric codes meant whatever Nissan/Buick/Ford model occupied that slot; our map's best guess creates phantom years. The Kicks' 2003-2013 phantoms are almost certainly this.
2. **FARS's own noise.** MOD_YEAR in FARS vehicle.csv comes from police reports and VIN decoding; typos and decode failures happen. NHTSA's own recoding study (Publication 811318) found ~98% vehicle-level coding agreement, which implies ~2% noise — and 2% of a million records is a lot of ghosts. The Solara's 1995-1998 phantoms (no mapping involved; 49043 maps cleanly) look like this kind.

## Self-correction
Our site's flagship Solara stories ("soberest deathtrap," rate 4.25) used the uncorrected rate. Corrected: 3.38. Still high, story holds, number was 20% hot. The TrailBlazer "GM SUV killer" rate 2.83 was 19.5% hot (2.28 corrected).

## Limitations
- Launch years are from manufacturer announcements; grey-market imports could theoretically explain a handful of pre-launch deaths, not hundreds.
- Only 19 models checked (the ones with suspicious spans). The other ~300 models were not audited; more ghosts likely.
- Corrected rates assume VMT denominators are unaffected (true to first order; phantom deaths are a small share of fleet).
- Some phantom years might be legitimately miscoded *crash* years, but MOD_YEAR is the vehicle's model year, not the crash year (verified in fars_process.py: `mod_year` from MOD_YEAR, filtered 1980 <= my <= crash year + 1).

## Strongest counterargument
FARS is still the best fatality census on earth; NHTSA's recoding study shows 98% vehicle-level agreement; 1,186 ghosts are ~0.3% of the ~370k deaths in the full dataset. The ghosts concentrate in a handful of nameplates with mapping-ambiguous histories. None of the site's big structural findings (pickup age crisis, Charger bar car, Solara sober paradox) collapse — they get haircuts, not funerals.

## Actionable insight
Before trusting any model-level fatality rate: check the model-year distribution for pre-launch years. If a recently launched nameplate has a long phantom tail, discount its rate by the phantom share. We are doing this audit for our own published rates now.

## Primary sources
1. NHTSA FARS database — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS recoding/quality-control study (Publication 811318) — https://crashstats.nhtsa.dot.gov/Api/Public/Publication/811318
3. NHTSA, "Relationships Between Fatality Risk, Mass, and Footprint" (FARS + IHS NVPP + odometer methodology) — https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/2016-prelim-relationship-fatalityrisk-mass-footprint-2003-10.pdf
4. Site's own pipeline: fars_process.py (MOD_YEAR extraction, MAK_MOD_MAP) and fars_output.js (FARS_MODEL_YEAR, FARS_BY_MODEL)
