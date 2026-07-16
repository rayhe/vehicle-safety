# Research Notes: Lexus Internal Death Gradient + IS Marginal IIHS

## News Peg
- IIHS July 2026 batch: Lexus IS earned **marginal** in updated side impact test
- Same batch: Audi A3 (marginal), Nissan Kicks (marginal), Toyota Tacoma crew cab (marginal), Cadillac CT5 (poor x2)
- Source: Consumer Reports / IIHS, published week of July 7-14, 2026

## FARS Data: The Full Lexus Lineup (2014-2023, 10 years)

| Model | Class | Rate | Deaths | Annual | Fleet | Impaired % |
|-------|-------|------|--------|--------|-------|-----------|
| LS    | Sedan | 1.44 | 116    | 11.6   | 70,000 | 23.3%    |
| ES    | Sedan | 1.14 | 402    | 40.2   | 306,250 | 18.9%   |
| IS    | Sedan | 0.87 | 218    | 21.8   | 218,750 | 21.4%   |
| GS    | Sedan | 0.68 | 102    | 10.2   | 131,250 | 22.8%   |
| RX    | SUV   | 0.43 | 327    | 32.7   | 612,500 | 17.7%   |
| GX    | SUV   | 0.16 | 54     | 5.4    | 262,500 | 15.4%   |
| NX    | SUV   | 0.05 | 28     | 2.8    | 437,500 | 17.1%   |

## Key Finding: 30x Internal Spread
- LS rate 1.44 vs NX rate 0.05 = **28.8x ratio** (~30x)
- Same brand, same dealership, same Toyota engineering heritage
- The most expensive Lexus is the deadliest; the cheapest SUV is the safest

## Impairment Pattern
- LS: 23.3% — highest impairment in the lineup
- GS: 22.8% — second highest
- IS: 21.4% — third highest (the one that just failed IIHS)
- All sedans above 18.9%. All SUVs below 17.7%
- The sedan/SUV impairment gap mirrors the sedan/SUV death rate gap

## IS Model Year Breakdown
MY2001: 17, MY2006: 25, MY2007: 23, MY2008: 27, MY2009: 8, MY2010: 6, 
MY2011: 18, MY2012: 10, MY2014: 11, MY2015: 7, MY2016: 14, MY2017: 7, MY2018: 6

- Peak deaths in MY2007-2008 generation (2nd gen IS)
- Declining in newer MYs (good trend)

## IS Crashworthiness Detail
- Deaths: 218, Crashes: 407
- Lethality: 218/407 = 0.535 (53.5% of crashes are fatal — HIGH)
- Compare: NX lethality would be 28/unknown. RX lethality = 327/798 = 0.410
- IS occupants are significantly more likely to die per crash than RX occupants

## IS vs Luxury Sport Sedan Competitors
| Vehicle | Rate | Deaths | Impaired % |
|---------|------|--------|-----------|
| BMW 3 Series | 2.73 | 1,237 | 22.1% |
| Cadillac CTS | 1.32 | 265 | 25.9% |
| Infiniti G35 | 1.05 | 265 | 24.0% |
| Infiniti G37 | 0.90 | 226 | 25.0% |
| **Lexus IS** | **0.87** | **218** | **21.4%** |
| Mercedes C-Class | 0.63 | 319 | 21.8% |
| Audi A4 | 0.32 | 113 | 21.6% |
| Audi A3 | 0.23 | 34 | 27.1% |
| Acura TLX | 0.11 | 33 | 18.6% |

- IS is mid-pack in its class (better than BMW/Cadillac/Infiniti, worse than Mercedes/Audi/Acura)
- But within Lexus itself, the IS is 17x deadlier than the NX

## Original Contribution
1. **First-ever Lexus lineup analysis** in 512 stories
2. **28.8x internal death rate spread** is among the largest single-brand gaps in the dataset
3. **Sedan/SUV impairment bifurcation** within one luxury brand: all sedans > 18.9%, all SUVs < 17.7%
4. Timely: IS marginal IIHS rating provides current news peg

## Limitations & Counterarguments
- Fleet sizes differ (LS: 70K vs NX: 437K) — small fleet inflates rate
- LS is an older design, much of fleet is pre-modern safety tech
- Demographics: LS buyers tend older, IS buyers tend younger/sportier
- The gradient partially reflects sedan-vs-SUV physics (height, weight, rollover resistance)
- NX fleet is newest (launched 2015), so less exposure time in FARS window

## Sources
1. FARS 2014-2023 (NHTSA Fatality Analysis Reporting System)
2. IIHS July 2026 crash test results batch
3. Consumer Reports safety verdicts update, July 2026
