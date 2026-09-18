# Research — 928: The Druggiest Luxury Cars Are the Safest Ones
**Journalist:** Vin Wreckage | **Kicker:** Existential Dread | **Date:** 2026-09-18

## The angle (kill test)
The Mercedes GLK-Class (drugPct 12.2%, n=229) and Porsche Macan (12.1%, n=107) have the **highest drug-positive rates of any luxury vehicles in FARS** — within spitting distance of the Buick Park Avenue beater (16.6%) that already got two stories. Meanwhile the Macan is the **5th-safest vehicle of all 328 models** in the dataset (rate 0.03 per 100M VMT), and the GLK sits in the 16th percentile (rate 0.17, rank 53/328). Cross-tab of toxicology × fatality-rate is an original finding: **the safest vehicles concentrate the drugged drivers.** Neither model has any coverage in 798 published stories or the ship queue. PASS.

## FARS data (fars_output.js, 2014–2023)

| Vehicle | drivers | drug% | alc% | any% | deaths | rate | rate rank (of 328) |
|---|---|---|---|---|---|---|---|
| Mercedes GLK-Class | 229 | 12.2 | 17.5 | 22.7 | 37 | 0.17 | 53rd (16.2%) |
| Porsche Macan | 107 | 12.1 | 15.0 | 19.6 | 7 | 0.03 | 5th (1.5%) |

Luxury-SUV drugPct ranking (n≥100): GLK 12.2% > Macan 12.1% > QX56 10.9% > XT5 10.9% > M-Class 10.8% > Escalade 9.7% > NX 9.7% > SRX 9.4% > X5 9.4% > FX35 8.8%.
- Overall median drugPct (150+ drivers): 8.7%. GLK/Macan ≈ 1.4× median.
- Decile cutoffs for rate (fleet≥50k): p10 = 0.13, p20 = 0.20. GLK (0.17) is second-decile; Macan (0.03) top-2%.

## Primary sources (3+)
1. **NHTSA, "Drugged Facts" flyer** (nhtsa.gov PDF): drug-positive share of fatally injured drivers rose 25% (2007) → 42% (2016); cannabinoid positives doubled 8% → 18% over the same span. https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/13839-drugged_facts_flyer_101918_v8_002.pdf
2. **NHTSA trauma-center study, Dec 2022 (AP/NPR):** >50% of seriously/fatally injured road users had drugs or alcohol in blood; ~20% had two or more substances; THC most prevalent. Authors caution results can't gauge national roadside prevalence. https://www.delmarvapublicmedia.org/2022-12-13/over-half-of-car-crash-victims-had-drugs-or-alcohol-in-their-systems-a-study-says
3. **NHTSA FARS drug study (govinfo PDF, 2012):** ~1 in 3 deceased drivers with known drug-test results tested positive (illicit + prescription + OTC); marijuana 25% of positive tests; testing inconsistent across states. https://www.govinfo.gov/content/pkg/GOVPUB-PREX26-PURL-gpo72303/pdf/GOVPUB-PREX26-PURL-gpo72303.pdf
4. **NHTSA FARS 2014–2023** via site `fars_output.js` (internal) + https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Counterargument (full strength)
Drug-positive is NOT impairment-positive. THC metabolites persist for days/weeks in regular users; FARS lumps prescription opioids, stimulants, and OTC sedatives with cocaine and meth; testing rates vary wildly by state and coroner office. The Macan sample is n=107 drivers — one bad year shifts it. Wealth-correlated prescription drug use could inflate luxury drugPct without any driving impairment. The data cannot distinguish a stoned driver from a driver who used a legal prescription last Tuesday.

## Limitations
- FARS captures fatal crashes only (36k deaths vs ~6.7M total crashes/yr).
- estimated_rate uses VMT estimates, ±15% uncertainty for low-volume models (Macan fleet 175k → moderate confidence; its 7 deaths keep the CI wide).
- Macan n=107 toxicology sample: smaller than GLK's 229; treat Macan drugPct as directional.
- Cannot isolate which drug classes dominate GLK/Macan positives (FARS_TOXICOLOGY is any-drug aggregate).
- No per-se THC impairment standard exists in most states — positive ≠ over any legal limit.

## Methodology note
drugPct = drivers with any drug-positive toxicology / drivers in fatal crashes (per FARS toxicology table). rate = deaths per 100M VMT estimated (deaths/fleet normalized by VMT factor). Luxury-SUV set filtered to n≥100 drivers. Rate percentiles computed over 328 models with fleet ≥50k.

## Actionable takeaway
IIHS ratings measure the car, not the driver. The two drug-happiest luxury SUVs are also among the safest ever built — which means when a Macan or GLK DOES kill, the driver is disproportionately likely to be drug-positive. If you're buying used German luxury: the car's 5-star record assumes sobriety you can't verify from the Carfax. No breathalyzer-equivalent roadside THC test exists in most states, so enforcement and resale markets price this risk at zero.
