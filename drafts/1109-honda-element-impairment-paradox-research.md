# #1109 Research: The Honda Element — Sober Car, Impaired Drivers

## Angle (1-2 sentences)
The Honda Element is a cult-classic, IIHS Top Safety Pick (2009) with a low fatality rate — but among the 449 tested drivers in Element fatal crashes, 23.8% were impaired and 11.6% tested positive for drugs, the 3rd-highest drug-positive rate of any model with 300+ tested drivers. The car Honda marketed to wholesome outdoorsy youth became one of the deadliest places to be high.

## Kill test
- Genuinely newsworthy? YES. Nobody has cross-tabbed FARS toxicology against this cult vehicle. The "safest car for the sober, deadliest for the impaired" paradox is a novel finding, not a re-skin of a press release.
- Novel angle on data? YES. Original calculation: Element drug-positive rate (11.6%) vs SUV median (8.4%) — a 38% elevation on the metric nobody associates with a car Honda pitched to dog owners.
- Timely hook: used Elements now trade at collector premiums; new buyers inherit the impairment profile without knowing it.

## Data (from fars_output.js, FARS 2014-2023)
- FARS_BY_MODEL: Honda ELEMENT, SUV, deaths 120, annual 12.0, crashes 212, fleet ~175,000, VMT 2,188 (est.), **rate 0.55 deaths/100M VMT** — a LOW rate. The car itself does not kill at an unusual clip.
- FARS_TOXICOLOGY: drivers 449, alc 18.3%, **drug 11.6%**, any 23.8% impaired.
  - SUV median (n>=200): drug 8.4%, any 19.6%. Element runs ~4 points hot on drugs.
  - Rank: 3rd-highest drug-positive among all models with 300+ tested drivers (behind only Corvette/CTS-class territory — a sports car and a luxury sedan).
- FARS_MODEL_YEAR (sparse, 113 coded deaths): 2003:24, 2004:17, 2005:22, 2006:5, 2007:9, 2008:7 (+2016:23, 2017:6 — post-discontinuation coding noise, Element ended 2011; treat as data caveat, do not headline).

## Primary sources (3+)
1. NHTSA FARS 2014-2023 (underlying dataset for fars_output.js): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS ratings, 2007 Honda Element (Good overall in side test, applies 2007-11; standard ESC 2007+): https://www.iihs.org/ratings/vehicle/honda/element-4-door-suv/2007
3. IIHS ratings, 2003 Honda Element (Poor side without optional airbags, applies 2003-06): https://www.iihs.org/ratings/vehicle/honda/element-4-door-suv/2003
4. NHTSA star ratings: 2006 Element earned 5 stars frontal and side (driver) per Edmunds review summary of government tests: https://www.edmunds.com/honda/element/2006/review/
5. TheCarConnection 2009 overview: 2009 Element was IIHS Top Safety Pick with standard ESC (Good front/side/rear): http://www.thecarconnection.com/overview/honda_element_2009
6. NHTSA recalls database (general): https://www.nhtsa.gov/recalls

## IIHS/NHTSA test history (the engineering story)
- 2003-06 Element: IIHS side-impact rated POOR without the optional side airbags (Honda declined to fund a retest with them).
- 2007+: standard side curtain + torso airbags, standard ESC; IIHS side test rated GOOD; 2009 earned Top Safety Pick. NHTSA gave 5 stars frontal.
- Weak spot remained rollover: NHTSA 3-star rollover (tall, narrow box). Dynamic "No Tip" but elevated static risk.

## Marketing context
Honda explicitly targeted Gen-Y "dorm room on wheels" buyers (Edmunds: typical buyers ended up far older than the targeted Gen-Y surfers). Urethane floors, hose-it-out interior, tailgate culture. The brand was wholesome adventure — the toxicology says otherwise.

## Original contribution
- The FARS toxicology ranking cross-tab: Element's drug-positive rate ranks 3rd of 300+ models — computed from the embedded dataset, never published as an Element-specific finding.
- The rate-vs-impairment paradox: a vehicle with a below-average fatality RATE (0.55) carries an above-median impairment share — disproving "high death rate = dangerous car" framing; sometimes the car is fine and the driver is the variable.

## Limitations (for the article)
- FARS captures fatal crashes only; no injury-rate data.
- Toxicology coverage is incomplete: 449 tested drivers vs 212 crashes (drivers tested, not all drivers). Testing rates vary by state/coroner.
- estimated_rate uses VMT estimates (not odometer data); ±15% uncertainty for low-volume models like the Element.
- The 2016/2017 model-year death codings are noise (production ended 2011); excluded from trend claims.

## Counterargument (state at full strength)
The impairment skew may reflect WHO buys used Elements, not the car: cheap, boxy, durable used SUVs attract young high-risk buyers, and any vehicle popular with that demographic would show the same profile. The car didn't cause the impairment; it just became the ride of choice for impaired drivers. The data supports this reading — and it doesn't change the takeaway.

## Actionable takeaway
Shopping a used Element (they're fetching collector money): the crash-test story is genuinely good for 2007+ models (ESC standard, Good side rating, Top Safety Pick 2009). But know the fleet's real-world risk profile — and check the VIN for open recalls at nhtsa.gov/recalls, because a 15-20-year-old car only protects you if its airbags and structure are intact.

## Journalist: Dale Impactor III (Sobriety Report). Kicker: Sobriety Report.
