# Research: GM's Twin Trucks, Double the Death Rate (Draft #892)

## Angle
The GMC Canyon and Chevrolet Colorado are mechanically identical midsize pickups: same GMT platform, same Wentzville (Missouri) assembly line, overlapping model years, same engine family. Yet FARS 2014-2023 shows the Canyon's estimated fatality rate (0.59 per 100M VMT) is **2.1x** the Colorado's (0.28). The impairment profiles are nearly identical (19.0% vs 20.9% any-impaired drivers), ruling out the easy DUI explanation. News hook: IIHS's Sept 3, 2026 test batch flunked the 2026 Canyon crew cab (marginal moderate overlap, poor vehicle-to-vehicle crash prevention) while the Colorado wasn't in the batch.

## Kill test
Genuinely newsworthy? Yes: this week's IIHS news + a cross-tab nobody ran (FARS_BY_MODEL rate ratio x FARS_TOXICOLOGY profile match). Novel angle on data: twins that diverge. The impairment-matching is the original contribution; it eliminates the obvious confounder. Not another data dump: it asks a question the data can't fully answer, honestly.

## Key numbers (from fars_output.js, FARS 2014-2023)
- Chevrolet Colorado: rate 0.28, deaths 348, fleet 918,750, VMT basis in dataset
- GMC Canyon: rate 0.59, deaths 209, fleet 262,500
- Ratio: 0.59 / 0.28 = 2.107x
- Tox (fatal-crash drivers, BAC>0 or drug+): Colorado 2,068 drivers, 19.0% any-impaired (14.4% alc, 8.3% drug); Canyon 655 drivers, 20.9% any-impaired (15.1% alc, 9.5% drug)
- Model-year deaths (Canyon): 2004-2012 first-gen dominates; 2013-2014 gap (both trucks discontinued in US, returned 2015); second-gen (2015+) smaller counts
- Sanity: 209 deaths across 10 yrs ~ 21/yr on 262.5K fleet; noise is real, must caveat ±15% VMT uncertainty per guide

## Primary sources
1. NHTSA FARS 2014-2023 (dataset + https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars)
2. IIHS Sept 2026 test batch: 2026 GMC Canyon crew cab = marginal (updated moderate overlap front), poor (vehicle-to-vehicle front crash prevention 2.0). Only 2 of 7 tested earned Top Safety Pick+ (2027 Kia Telluride, 2026-27 Tesla Model Y). https://www.consumeraffairs.com/news/kia-telluride-tesla-model-y-earn-iihs-top-safety-pick-awards-091026.html and https://www.autoblog.com/news/the-iihs-tested-seven-new-cars-but-only-two-earned-safety-awards
3. GM spokesman Mark Lubin (Sept 2, 2026, to Detroit Free Press): "the safety of our vehicles is the highest priority for the entire GM team"; 2026 Canyon has 4-star NHTSA NCAP. https://www.freep.com/story/money/cars/general-motors/2026/09/03/gmc-canyon-crew-cab-falls-short-in-updated-iihs-crash-testing/91580466007/
4. Platform/factory fact: both built at GM Wentzville Assembly, Missouri; second-gen on GMT 31XX (updated 31XX-2 for 2023+); "mechanically identical vehicles" per SlashGear; GM Authority on shared platform. https://en.wikipedia.org/wiki/Wentzville_Assembly ; https://www.slashgear.com/1921305/are-chevy-gmc-trucks-built-same-factory/ ; https://gmauthority.com/blog/2023/06/heres-why-the-2023-chevy-colorado-and-gmc-canyon-got-a-longer-wheelbase/
5. NHTSA recalls database (actionable: check VIN). https://www.nhtsa.gov/recalls

## Journalist
Rex Driverton (paradox beat). Kicker: Investigation.

## Headline candidates
- "GM Builds Two Identical Trucks in the Same Missouri Plant. One Kills at Twice the Rate."
- "Same Factory, Same Platform, Same Badge Family. The Canyon Kills at 2.1x the Colorado's Rate."

## Limitations (must state)
- FARS = fatal crashes only; injury rates unknown
- estimated_rate uses VMT estimates, ±15% uncertainty for low-volume models; Canyon fleet (262.5K) is much smaller than Colorado's (918.75K)
- Deaths concentrate in 2004-2012 first-gen trucks; second-gen data thinner
- IIHS has not put the Colorado through the updated moderate-overlap test, so no lab-vs-lab comparison yet

## Strongest counterargument
Driver demographics, not engineering. GMC skews pricier (AT4/AT4X off-road trims, higher transaction prices); different buyers drive differently (more rural use, more off-roading, longer rural VMT). Identical crash structures + identical impairment profiles still leave who-is-behind-the-wheel and where-they-drive as confounders the data cannot resolve. The gap may be sociology, not steel.

## Actionable takeaway
Shopping midsize pickups: FARS says the Colorado's fatality rate is less than half the Canyon's. New 2026 Canyon: IIHS marginal in updated moderate overlap, poor in vehicle-to-vehicle crash prevention. Buying used: most deaths are 2004-2012 first-gen trucks on both nameplates. Whatever you buy, run the VIN at nhtsa.gov/recalls.
