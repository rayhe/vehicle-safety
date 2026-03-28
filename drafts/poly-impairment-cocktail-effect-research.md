# Research: The Cocktail Effect — Poly-Impairment in Fatal Crashes

## Angle
Decomposing FARS impairment data into alcohol-only, drug-only, and poly-impaired (both alcohol AND drugs simultaneously) by vehicle model. Nobody publishes this breakout by vehicle — it's always reported in aggregate.

## Kill Test
- **Novel?** YES — standard FARS reporting shows alcohol OR drug impairment rates. Decomposing into poly-impairment (both simultaneously) by vehicle model is a cross-tabulation nobody runs. The finding that luxury/performance vehicles dominate poly-impairment is genuinely surprising.
- **Newsworthy?** YES — poly-substance impaired driving is increasingly recognized as a growing problem (NIDA, CDC both flag it). Vehicle-level decomposition reveals a demographic signal.
- **Data-backed?** YES — derived directly from FARS toxicology data (490,736 drivers across 307 models).

## Key Findings from FARS Data (2014-2023)

### Overall
- 490,736 drivers in fatal crashes with toxicology data
- 20.0% tested positive for any impairment
- 15.0% alcohol-positive
- 8.6% drug-positive  
- 3.7% BOTH alcohol AND drugs (poly-impaired)
- **Among impaired drivers: 18.6% were poly-impaired**

### By Vehicle Class
| Class | Poly% | Of Impaired, Poly% | N |
|-------|-------|--------------------|----|
| Sports Car | 4.2% | 18.5% | 14,061 |
| Sedan | 3.8% | 18.7% | 197,584 |
| Pickup | 3.7% | 18.4% | 111,320 |
| SUV | 3.6% | 18.7% | 146,411 |
| Van | 3.4% | 18.7% | 21,360 |

Key insight: The poly-impairment SHARE among impaired drivers is remarkably constant at ~18.6% across all classes. But the RATE varies because total impairment varies.

### Top Poly-Impairment Vehicles (both alcohol + drugs, n≥100)
1. BMW M5 — 10.1% (n=109)
2. Buick Park Avenue — 9.3% (n=259)
3. Pontiac Bonneville — 8.9% (n=169)
4. Oldsmobile Alero — 7.8% (n=141)
5. Porsche Macan — 7.5% (n=107)
6. Jeep Commander — 7.0% (n=273)
7. Mercedes-Benz GLK — 7.0% (n=229)
8. Cadillac STS — 6.7% (n=149)
9. Ford Five Hundred — 6.5% (n=216)
10. BMW 7 Series — 6.5% (n=230)

Notable pattern: Mix of luxury/performance (BMW M5, Porsche Macan, BMW 7, Mercedes GLK, Cadillac STS) and older American sedans (Park Avenue, Bonneville, Alero). Two demographics colliding: wealthy risk-takers and lower-income drivers of depreciated former luxury vehicles.

### Luxury vs Mass Market
- Luxury brands: 21.0% any impairment, average VMT death rate 0.57
- Mass market: 20.0% any impairment, average VMT death rate 1.05
- Luxury drivers are MORE impaired but die at HALF the rate — the car protects them from their own decisions.

## External Sources
1. **NIDA (National Institute on Drug Abuse):** "People tend to mix various substances, including alcohol." Vehicle crash risk with marijuana + alcohol + cocaine + benzodiazepines "appears to be greater than that for each drug by itself." (nida.nih.gov/publications/drugfacts/drugged-driving)
2. **CDC:** ~44% of fatally-crashed drivers tested positive for drugs; 13.5M drove under alcohol influence, 11.7M under drug influence in 2021. (cdc.gov/impaired-driving/facts/)
3. **NHTSA FARS:** Primary dataset. Toxicology reports from fatal crash drivers 2014-2023.

## Journalist
**Dale Impactor III** — Toxicology Desk Chief. Beat: DUI/impairment stories, driver behavior, demographic analysis. Sardonic, statistical.

## Slug
`poly-impairment-cocktail-effect`
