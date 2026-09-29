# Research: #1005 — The Median Death Car Is a 2006

## Angle (1-2 sentences)
Line up every one of the 187,058 deaths in FARS 2014-2023 by the model year of the vehicle involved, and the median death happened in a **2006**. Half of America's traffic deaths involve cars old enough to vote; 71.9% involve cars built before the ESC mandate (MY2012).

## Kill test
Genuinely newsworthy? Yes. The entire vehicle-safety conversation is about new technology (AEB mandates, driver monitoring, autonomy), but the body count lives in 20-year-old metal. Nobody on this site has published the median-death-model-year cut (verified zero overlap via slug/title scan). It reframes the #1 actionable safety decision as *which used car you buy*, not which new gadget you add.

## Novel contribution (original cross-tab)
Median death model year computed from FARS_MODEL_YEAR across 187,058 deaths, broken out by make and class:
- Overall median: **2006** (mean 2006.7)
- Deadliest single model year: **2005** (11,363 deaths)
- Deadliest single model-year cell: **2001 Ford F-150** (672 deaths)
- Cohort shares: MY<=1999: 15.0% (28,036); MY<=2008: 62.3% (116,597); MY<=2011: 71.9% (134,491); MY>=2012: 28.1% (52,567); MY>=2018: 7.6% (14,209)
- Median death MY by class: Pickup **2004** (oldest), SUV 2006, Van 2006, Sedan 2007, Sports Car 2007
- Median death MY by make: Buick **2003**, GMC 2004, Chevrolet/Ford/Dodge/Jeep 2005, Toyota/Honda 2006, Chrysler 2007, Nissan 2010, Hyundai 2012, Kia **2015**

## Primary sources (4)
1. NHTSA FARS 2014-2023 (the dataset; all computations from fars_output.js derived from FARS bulk CSV) — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS, "Life-saving benefits of ESC continue to accrue" — ESC cuts fatal single-vehicle crash risk ~56% (Farmer 2004/2006 updates: 56% fatal single-vehicle reduction; later 10-year analysis: 33% all fatal crashes, 73% single-vehicle rollover) — https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
3. FMVSS No. 126 final rule (Apr 2007): ESC phase-in from Sept 1, 2008, 100% of light vehicles manufactured on/after Sept 1, 2011 = MY2012. NHTSA estimated ESC would save 5,300-9,600 lives/year. — https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
4. S&P Global Mobility via Auto Remarketing: average U.S. light-vehicle age hit a record **12.8 years** (2024); passenger cars 14.5, light trucks 11.9; 289M vehicles in operation. — https://www.autoremarketing.com/ar/analysis/average-u-s-vehicle-age-rises-again-to-a-record-12-8-years/

## Methodology
Expanded FARS_MODEL_YEAR year-counts into per-death observations (n=187,058), sorted, took the median. Class/make medians computed the same way on subsets. Cohort shares are simple counts. No rates computed by model year because fleet-by-model-year is not in the dataset (see Limitations).

## Strongest counterargument
The median death car is old partly because old cars are what poor, young, rural, and unbelted drivers can afford — driver risk, not vehicle age, may do most of the work. Also, survivorship: the 2006s still on the road in 2023 are the *survivors*, disproportionately high-mileage workhorses (pickups median 2004 supports the exposure story). The honest read: vehicle age and driver risk are confounded, and this cut cannot separate them. What it *can* say: whatever the cause, the killing happens in old metal, and ESC-era cars (2012+) account for barely a quarter of deaths.

## Limitations
- FARS is fatal crashes only; injury-only crashes excluded.
- No fleet-by-model-year denominator, so these are shares of deaths, not death *rates* by model year. A 2005 car is not proven 5x deadlier per mile than a 2020.
- Median reflects both vehicle safety AND fleet composition AND driver demographics.
- Kia/Hyundai medians (2015/2012) reflect recent fleet growth, not superior safety — the metric is descriptive, not a brand ranking.

## Actionable insight
If you're buying used: **2012 or newer** gets you standard ESC (mandated MY2012); 2018+ adds widely-available AEB. A pre-2009 car is the single biggest changeable risk factor in the driveway. Check any VIN at nhtsa.gov/recalls — old cars carry old, unrepaired recalls.

## Zero-overlap check
Scanned queue titles/slugs + stories/ for: median, 2006, fleet age, aging, 20-year, clunker, pre-2000. No existing story uses the median-death-model-year headline. (One queue title uses "old enough to vote" for a different story — F-150 fuel tanks #1003-adjacent; different angle, no conflict.)

## Assignment
- Journalist: **Axle McScatter** (data/statistical roundup; Trend Watch/By The Numbers beat; due in rotation — last wrote #997)
- Kicker: By The Numbers
- Slug: 1005-median-death-car-2006
- Title: "Half of America's Traffic Deaths Happen in Cars From 2006 or Older"
- Ship date target: 2027-04-11 (1/day after #1004's 2027-04-10)
