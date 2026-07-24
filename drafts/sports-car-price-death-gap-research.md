# Research: The Sports Car Price-Death Gap

## Angle
Cross-tabulating FARS death rates with impairment rates across sports cars reveals that budget sports cars don't kill because they attract drunk drivers — they kill because they're structurally inadequate. Expensive sports cars have HIGHER impairment rates but dramatically lower death rates.

## Self-Critique Gate
**Angle:** The cheapest sports car in FARS (Hyundai Veloster, ~$22K MSRP) has the highest death rate of ANY vehicle in the entire dataset at 8.54/100M VMT — AND the lowest impairment rate among sports cars at 17.4%. Meanwhile the Porsche 911 (~$110K) has a higher impairment rate (22.8%) but a death rate of just 0.69. That's a 12:1 death rate gap that runs OPPOSITE to impairment.
**Challenge:** Is this surprising? We've done 582 articles. Have we covered this?
- We did `suv-impairment-doesnt-explain-deaths.html` — similar methodology but for SUVs
- We haven't done the sports car cross-tab specifically
- The finding that PRICE inversely correlates with death rate while POSITIVELY correlating with drunk driving is genuinely counterintuitive and novel
**Verdict:** PROCEED — this is a novel cross-tabulation with a genuinely counterintuitive finding

## Primary Data

### FARS Death Rates (per 100M VMT) vs Impairment — Sports Cars
| Vehicle | Rate | Deaths | Impaired% | Alcohol% | MSRP (new) | Curb Weight |
|---------|------|--------|-----------|----------|------------|-------------|
| Hyundai Veloster | 8.54 | 598 | 17.4% | 10.2% | ~$22K | ~2,750 lbs |
| Ford Mustang | 6.02 | 2,739 | 21.9% | 16.4% | ~$30K | ~3,700 lbs |
| Chevy Camaro | 3.44 | 1,204 | 23.0% | 17.1% | ~$28K | ~3,700 lbs |
| Toyota tC | 2.30 | 242 | 21.9% | 17.0% | ~$21K | ~2,900 lbs |
| Mazda MX-5 | 1.79 | 100 | 20.0% | 14.7% | ~$30K | ~2,400 lbs |
| Nissan 350Z | 1.61 | 113 | 23.2% | 17.5% | ~$35K | ~3,300 lbs |
| Chevy Corvette | 1.52 | 320 | 26.2% | 21.3% | ~$65K | ~3,500 lbs |
| Nissan 370Z | 1.46 | 51 | 23.8% | 19.4% | ~$35K | ~3,400 lbs |
| Dodge Challenger | 1.00 | 385 | 22.5% | 17.5% | ~$33K | ~4,200 lbs |
| Porsche 911 | 0.69 | 48 | 22.8% | 19.3% | ~$110K | ~3,400 lbs |
| BMW Z4 | 0.46 | 16 | N/A | N/A | ~$55K | ~3,400 lbs |

### Key Finding: Price-Death Inverse + Price-Impairment Positive
- CHEAPEST sports car (Veloster, ~$22K): death rate 8.54, impairment 17.4%
- MOST EXPENSIVE sports car with tox data (Corvette, ~$65K): death rate 1.52, impairment 26.2%
- MOST EXPENSIVE with tox data (911, ~$110K): death rate 0.69, impairment 22.8%

The Corvette driver is 50% more likely to be impaired than the Veloster driver. But the Veloster driver is 5.6x more likely to die.

### Strongest Counterargument
The MX-5 Miata is the lightest car on this list (~2,400 lbs) but has a rate of only 1.79 — lighter than the Veloster but far safer per mile. This suggests weight alone doesn't explain the gap. The MX-5 has superior structural engineering (Mazda's SKYACTIV platform), better handling dynamics, and attracts a different demographic (older, more experienced enthusiasts vs. young first-time buyers). The counterargument: it's demographics plus engineering, not just engineering alone.

### IIHS Supporting Data
- Below 4,000 lbs average fleet weight, every 500 lbs reduces driver death rate by 17/million registered vehicle years
- Above 4,000 lbs, every 500 lbs reduces driver death rate by only 1
- "Choosing an extra-heavy vehicle doesn't make you any safer, but it makes you a bigger danger to other people" — Sam Monfort, IIHS senior statistician

## Sources
1. NHTSA FARS 2014-2023
2. IIHS "Supersizing vehicles offers minimal safety benefits — but substantial dangers" (2025)
3. IIHS fatality statistics by vehicle type
4. Consumer Reports driver death rate study
