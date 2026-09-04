# Research: #810 — The Brand Sobriety Ladder Test (Dale Impactor III)

## Angle (1-2 sentences)
Last week this desk argued the price tag sorts drivers: broke risk-takers in $3,000 Aleros, rich ones in Corvettes. This week I ran the cleaner test — rank models by impairment *inside* six individual brands. Audi produced a perfect five-step sobriety staircase; BMW produced the same staircase upside down.

## Kill test
- Genuinely newsworthy? Yes: novel cross-tab nobody on the site has run (within-brand model ladders, not brand aggregates). It also self-corrects the site's own prior thesis, which is the rarest thing in publishing: a follow-up that complicates its own conclusion.
- Novel angle on data? Yes. Prior pieces did brand-level aggregates (luxury-impairment-paradox, every-brand-equally-drunk) and market-wide price sorting (alero-beater-effect). Nobody ranked models within a brand.
- Verdict: PROCEED.

## Data (NHTSA FARS 2014–2023, via fars_output.js FARS_TOXICOLOGY; impairment = BAC > 0 or drug-positive among drivers in fatal crashes; overall any-impairment = 20.0% of 490,736 drivers)

### Audi — the perfect staircase (cheapest → priciest tracks drunk → sober)
| Model | n | any% | alc% | drug% |
|---|---|---|---|---|
| A3 | 203 | 27.1 | 22.7 | 7.9 |
| Q5 | 373 | 22.5 | 19.3 | 7.0 |
| A4 | 515 | 21.6 | 17.7 | 7.8 |
| A6 | 322 | 20.5 | 17.1 | 7.5 |
| Q7 | 231 | 19.5 | 16.9 | 5.6 |

Five models, monotonic descent, 7.6 points top to bottom. A3 vs Q7: z ≈ 1.9, p ≈ 0.06 (marginally significant; the staircase pattern across five rungs is the story, not any single step).

### BMW — the inversion (flagship is the drunkest)
| Model | n | any% | alc% | drug% |
|---|---|---|---|---|
| 7 Series | 230 | 26.1 | 21.3 | 11.3 |
| M5 | 109 | 22.9 | 17.4 | 15.6 |
| 3 Series | 2497 | 22.1 | 17.5 | 8.7 |
| X5 | 773 | 19.7 | 14.1 | 9.4 |
| X3 | 681 | 19.4 | 15.6 | 8.5 |
| 5 Series | 1003 | 19.0 | 13.6 | 8.8 |

7 Series vs 5 Series: 26.1% vs 19.0%, z ≈ 2.3, p ≈ 0.02. Significant. Note M5: drug 15.6% nearly equals alcohol 17.4% — the most drug-leaning performance sedan in the set.

### Tesla — staircase holds (S → X → 3 → Y)
S 24.0% (204) → X 21.3% (150) → 3 20.1% (765) → Y 17.6% (455).

### Honda — mild staircase
Civic 20.4% (12,373) → Accord 20.0% (13,809) → Pilot 19.4% (2,748) → CR-V 17.6% (5,807).

### Mercedes — no ladder
E-Class 23.5% (1,415) → GLK 22.7% (229) → S-Class 21.9% (430) → C-Class 21.8% (1,697) → M-Class 18.4% (250). The mid-price E is the drunkest; the flagship S sits middle.

### Toyota — inverted like BMW
Avalon 21.7% (1,706) → Camry 19.2% (13,811) → Corolla 19.2% (10,287) → RAV4 18.4% (5,286) → Highlander 16.4% (3,457) → Land Cruiser 8.9% (417). The priciest sedan (Avalon) has the drunkest drivers; the priciest vehicle (Land Cruiser) the soberest.

## External primary sources
1. NHTSA FARS 2014–2023 (site dataset fars_output.js, 307 models toxicology) — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA, Traffic Safety Facts 2024 Data: Alcohol-Impaired Driving — 11,904 fatalities (30% of all traffic deaths), down 3.9% from 2023; one every 44 minutes; 21–24 age group highest at 28%; 68% of alcohol deaths involved BAC ≥ .15. https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813815
3. NHTSA, Drunk Driving statistics page — ~30% of crash fatalities involve BAC ≥ .08; 10-year average 11,500+/yr; 4:1 male-to-female drunk driver ratio. https://nhtsa.gov/risky-driving/drunk-driving

## Candidate thesis
Price sorts drivers *within* some brands (Audi, Tesla, Honda: cheaper car, drunker driver) but the effect flips or vanishes in others (BMW, Toyota: flagship drivers are the drunkest). The honest conclusion: there is no universal price-sobriety law. What travels with the badge is the buyer cohort, and cohorts are weird.

## Strongest counterargument (to state at full strength in article)
This could be age, not price. NHTSA's 2024 data shows the 21–24 group has the highest impaired-driver share (28%); the A3 is Audi's youngest-skewing car, so the staircase may just be a youth gradient wearing a price costume. Against that: BMW's 7 Series skews old and wealthy yet tops BMW's chart at 26.1%, which youth cannot explain. Also possible: urban nightlife geography (expensive cars cluster in cities), differential toxicology testing rates by state, and drug-positive ≠ impaired (THC lingers for days). FARS sees only fatal crashes.

## Limitations to state
- Fatal crashes only; ~40k deaths vs ~6.7M annual crashes.
- Small samples on some rungs (M5 n=109, Model X n=150, A3 n=203) — wide confidence intervals; reported z-tests where claimed.
- Impairment = BAC > 0 or any drug-positive; NHTSA warns drug presence correlates poorly with actual impairment.
- Testing rates vary by state; no age/sex controls in this dataset.
- Price ordering of models is approximate (trim/option overlap); the claim is about lineup position, not sticker dollars.

## Actionable insight (required)
You cannot buy sobriety, but parents can buy away from the cohort: the cheapest badge in a luxury lineup (A3, and by the same logic any entry-luxury sport sedan at a teen-accessible used price) pairs a young risk-taking buyer pool with 200+ horsepower. IIHS's teen-vehicle guidance applies: avoid high-horsepower vehicles for new drivers, treat ESC as non-negotiable, and run any used VIN at nhtsa.gov/recalls before money changes hands.

## Headline candidates
1. "The Cheaper the Audi, the Drunker the Driver. BMW Works the Other Way Around."
2. "Audi Has a Perfect Sobriety Ladder. BMW's Is Upside Down."
3. "I Ranked Every Model Inside Six Brands by Driver Sobriety. Half the Ladders Are Upside Down."
