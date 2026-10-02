# Research: #1051 — Sports Cars Are the Drunkest, Deadliest Class on the Road. Your Sports Car Probably Isn't.

**Journalist:** Dale Impactor III (Toxicology Desk Chief — sardonic, statistical, treats impairment data like sports stats)
**Kicker:** By The Numbers
**Article number:** 1051
**Slug:** `1051-sports-cars-drunkest-deadliest-classes-lie`
**Date:** 2026-10-02

## Angle (1-2 sentences)

At the model level, a car's fatality rate has essentially zero correlation with how impaired its drivers are (Pearson r = -0.008 across 262 models) — this site proved that in #897. But zoom out one level to vehicle class and the correlation is 0.94: sports cars are simultaneously the deadliest class (1.95 deaths/100M VMT) and the drunkest (22.5% of drivers in fatal crashes impaired). Both findings are true, and the contradiction between them is a textbook ecological fallacy — which means class-level safety stereotypes are useless for judging any individual car.

## Kill test

- **Genuinely newsworthy?** It's a data finding, not breaking news — but the site's core identity is FARS data journalism, and the last eight runs were all recall investigations. A data piece is overdue. The paradox is genuinely surprising: it complicates the site's own #897 conclusion rather than repeating it, and self-correction is the rarest thing in publishing.
- **Novel angle on data?** Yes. Nobody on the site has computed the model-level vs class-level correlation comparison. Verified: queue/title search for "class" + impairment stories finds #810 (within-brand ladders), #897/#944 (model-level zero correlation), and class-rate pieces — but no model-vs-class correlation paradox. The Veloster/Corvette inversion inside the sports-car class (deadliest model is among the soberest; drunkest model is mid-rate) is an original observation.
- **Verdict: PROCEED.**

## Primary sources (4)

1. **NHTSA FARS 2014–2023**, via `fars_output.js` — FARS_TOXICOLOGY (307 models; 490,736 drivers in fatal crashes; impairment = BAC > 0 or drug-positive toxicology) and FARS_BY_MODEL (337 models; deaths, fleet, VMT, estimated rate per 100M VMT). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **IIHS fatality statistics / driver death rates** — sports cars consistently among the highest driver death rates in IIHS/HLDI analyses. https://www.iihs.org/topics/fatality-statistics
3. **National Safety Council, preliminary H1 2026 analysis** (Sep 10, 2026) — 18,460 estimated deaths; in 2024, 30% of traffic deaths involved an alcohol-impaired driver and speeding factored in 29%. https://www.carriermanagement.com/news/2026/09/10/291821.htm
4. **Ecological fallacy** (concept reference) — correlations at the group level need not hold for individuals within groups. https://en.wikipedia.org/wiki/Ecological_fallacy

## Key numbers (verified from fars_output.js via node, 2026-10-02)

### Class table (the whole argument in five rows)

| Class | Mean fatality rate (/100M VMT) | Any-impaired % | Drivers (n) |
|---|---|---|---|
| Sports Car | **1.95** | **22.5%** | 14,061 |
| Pickup | 1.09 | 20.1% | 111,320 |
| Sedan | 1.02 | 20.4% | 197,584 |
| SUV | 0.63 | 19.5% | 146,411 |
| Van | 0.63 | 18.1% | 21,360 |

- Class-level Pearson r(rate, impairment) = **0.936** (n = 5 classes).
- Model-level Pearson r(rate, impairment) = **-0.008** (n = 262 models with ≥200 drivers and fleet ≥ 50,000).
- Sports-car rate is 3.1x the SUV/van rate (1.95 vs 0.63). Sports-car impairment is 4.4 points above vans (22.5% vs 18.1%).

### Inside the sports-car class (why the class number lies)

| Model | Fatality rate | Any-impaired | Drivers (n) |
|---|---|---|---|
| Hyundai Veloster | **8.54** (deadliest) | 17.4% (soberest-ish) | 489 |
| Ford Mustang | 6.02 | 21.9% | 4,664 |
| Chevrolet Camaro | 3.44 | 23.0% | 2,832 |
| Chevrolet Corvette | 1.52 | **26.2%** (drunkest) | 1,147 |
| Dodge Challenger | 1.00 | 22.5% | 2,037 |

- The deadliest sports car (Veloster, 8.54) has below-class-average impairment. The drunkest (Corvette, 26.2%) sits mid-pack on rate. If impairment caused the rate, the Veloster's drivers should be the drunkest — they're nearly the soberest.
- Corvette detail: 26.2% any-impaired is the highest of any sports-car model with n ≥ 200 (covered in #1007 as "drunkest car in America" at the model level).

## The novel calculation

Pearson correlations computed on the same underlying FARS extract at two aggregation levels:
- Model level (n=262): r = -0.008 → knowing a model's impairment rate tells you nothing about its death rate. (Replicates #897's "zero correlation" with a different, larger sample.)
- Class level (n=5): r = 0.936 → knowing a class's impairment rate nearly perfectly predicts its death rate.
- Both are arithmetically correct. The resolution is compositional: the correlation lives *between* classes, not *within* them. Textbook ecological fallacy — the same trap as "countries that eat more chocolate win more Nobels."

## Strongest counterargument (full strength)

Five data points is a joke of a sample for a correlation coefficient — r = 0.94 on n=5 has enormous confidence intervals, and dropping any single class could collapse it. Worse, the class pattern may be pure demographics, not vehicles: sports-car buyers skew young and male, the two demographics that independently crash more and drink more. If that's the whole story, then "sports cars are drunkest and deadliest" is just "young men are drunkest and deadliest" wearing a fender badge, and the article's paradox dissolves into a census table. The model-level zero correlation is the more robust statistic (n=262), and it says the vehicle doesn't matter — so the class-level pattern, while real, may not be *about* the cars at all.

## Limitations (for the article)

- FARS captures only fatal crashes — 490,736 drivers is a large sample of deaths, not of driving.
- "Impaired" = any BAC > 0 (not necessarily over the legal limit) or any drug-positive toxicology (not necessarily behaviorally impaired; cannabis metabolites linger for days).
- Fatality rates use estimated VMT, not odometer readings; ±15% uncertainty for low-volume models.
- Class definitions (Sports Car, etc.) are the dataset's own taxonomy, not an industry standard — the Veloster is arguably a hatchback.
- Correlation is not causation at either level.

## Actionable insight

Do not shop by class stereotype. The class numbers are real and useless: the "drunkest, deadliest class" contains both the soberest death-trap (Veloster) and the drunkest mid-pack cruiser (Corvette). If you're buying a sports car — or insuring one, or setting DUI enforcement priorities — the model-level numbers are the only ones that bite. Check the specific model's rate and toxicology, not the badge on the fender. Insurers already price this in; now you know why your Corvette premium looks like a sin tax.

## Duplication check

- Queue/title search: no "class" + impairment correlation story exists. #897/#944 (model-level zero correlation) are predecessors this piece explicitly builds on and complicates — cited, not repeated.
- #1007 (Corvette drunkest car) and #907 (Z4 safest sports car) are model-level; this piece uses them as within-class data points.
- #810 (within-brand sobriety ladders) is a different cross-tab.
