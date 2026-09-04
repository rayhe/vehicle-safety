# Research: #819 — Cadillac CTS Out-Drinks the BMW 3 Series, Kills at Half the Rate
Journalist: Dale Impactor III | Kicker: Sobriety Report | Date: 2026-09-04

## Angle (1-2 sentences)
Cadillac spent two decades trying to build a BMW-fighter, and the CTS (2003-2019) was the car that finally did it: RWD, manual option, CTS-V, two Motor Trend Cars of the Year. The FARS toxicology data says the imitation worked too well: CTS drivers in fatal crashes test impaired 25.9% of the time, drunker than BMW 3 Series drivers (22.1%), drunker than every German rival, and the drunkest in Cadillac's own lineup. The twist: despite the drunker drivers, the CTS kills at less than half the 3 Series rate (1.32 vs 2.73 per 100M VMT).

## Kill test
- Newsworthy: YES, as a data story. No prior Crash Report coverage of the CTS exists (verified: no cts- slug in stories/ or drafts/).
- Novel: YES. The site has covered luxury impairment (luxury-impairment-paradox, infiniti-g-impairment-dynasty, porsche-911-drunk-proof, tesla-model-s-impairment-matches-corvette) but never the CTS, never the " Detroit built the German car and inherited the German driver" framing, and never the impairment-rate inversion (drunker drivers, lower fatality rate) as the central paradox.
- Dale-appropriate: toxicology desk, sports-stats framing ("the box score"), impairment as the explanatory variable that fails to explain. Proceed.

## Primary sources
1. NHTSA FARS 2014-2023 per-model toxicology + fatality data (site's fars_output.js, derived from FARS bulk CSV): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS Analytical User's Manual (toxicology reporting, BAC imputation caveats): https://crashstats.nhtsa.dot.gov/
3. IIHS ratings archive for CTS / 3 Series (crashworthiness context for the rate gap): https://www.iihs.org/ratings

## Original computation (the novel contribution)
FARS 2014-2023, drivers in fatal crashes, impairment = BAC > 0 or drug-positive:

| Model | n (drivers) | Any impaired | Alcohol | Drug | Fatality rate /100M VMT | Deaths |
|---|---|---|---|---|---|---|
| Cadillac CTS | 931 | 25.9% | 20.6% | 10.2% | 1.32 | 265 |
| BMW 3 Series | 2,497 | 22.1% | 17.5% | 8.7% | 2.73 | 1,237 |
| Mercedes C-Class | 1,697 | 21.8% | 17.1% | 9.3% | 0.63 | 319 |
| Audi A4 | 515 | 21.6% | 17.7% | 7.8% | 0.32 | 113 |
| Lexus IS | 1,050 | 21.4% | 16.3% | 9.8% | 0.87 | 218 |
| Cadillac ATS | 281 | 20.6% | 16.0% | 7.8% | 0.36 | 55 |

Supporting stats:
- CTS vs 3 Series impairment gap: 3.8pp, SE 1.66pp, z = 2.29, p ~ 0.022. Statistically significant.
- CTS vs rest of Cadillac lineup (weighted, n=3,906): 25.9% vs 20.2%, a 5.7pp family outlier. Next-drunkest Cadillac: DTS at 22.3%.
- The inversion: CTS drivers are MORE impaired than 3 Series drivers but the CTS fatality rate is LESS THAN HALF (1.32 vs 2.73). Impairment does not explain the rate gap; something else (engineering, crash types, exposure) must.
- Alcohol, not drugs, drives the CTS signal: alc 20.6% vs 3 Series 17.5% (+3.1pp); drug 10.2% vs 8.7% (+1.5pp).
- CTS-V confound note: the data is nameplate-level; the high-performance CTS-V (2004-2019) is folded in and may contribute disproportionately.

## Thesis
Detroit finally built the German sports sedan, and the buyers brought the German sports sedan's worst habit with them. The CTS's drivers test impaired more often than the BMW 3 Series drivers it was designed to steal, yet the car kills at half the BMW's rate, which means the engineering worked and the marketing worked, just not on the same people.

## Strongest counterargument (state at full strength)
Impairment is measured only among drivers already in fatal crashes, not among all CTS drivers, so "CTS drivers are drunker" overstates what the data supports; the correct claim is narrower. The CTS fleet in the FARS window skews older and cheaper than the 3 Series fleet (a 2005 CTS was a $6,000 used car by 2018; a 2015 3 Series was not), and cheap old performance sedans select for exactly the risk-tolerant young male drivers who drink and drive, so the impairment gap may be a used-car-price artifact, not a badge-culture finding. The rate gap favoring the CTS may reflect exposure differences (VMT estimates, garage-queen CTS-Vs) rather than superior crashworthiness, and nameplate-level aggregation smears three CTS generations and the CTS-V halo car into one number.

## Limitations
- FARS window 2014-2023; the CTS was discontinued after 2019, so the entire sample is used-car-era.
- Toxicology testing is not universal; BACs are imputed when missing; drug panels vary by jurisdiction and year.
- VMT denominators are estimated from sales and survey miles, not odometers; worse for low-volume models.
- Nameplate aggregation: three CTS generations plus CTS-V folded together.

## Actionable insights
- Shopping a used CTS: the car's engineering is not the problem (rate 1.32 is respectable); the nameplate's driver pool and insurance profile are. Price insurance before you fall in love.
- The general rule this reinforces: when a car's fatality rate looks bad, check the toxicology table before blaming the chassis. For the CTS the chassis is exonerated and the drivers are not.
- For everyone else: the 3 Series comparison is the one that matters. If impairment explained fatality rates, the CTS would kill more than the BMW. It kills at half the rate. Engineering still matters.
