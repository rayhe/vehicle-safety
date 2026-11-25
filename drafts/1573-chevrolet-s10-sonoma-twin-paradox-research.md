# Research — #1573: The Chevrolet S-10's Twin Paradox

**Slug:** 1573-chevrolet-s10-sonoma-twin-paradox
**Journalist:** Rex Driverton (investigations, FARS deep dives, paradoxes)
**Kicker:** Investigation
**Date:** 2026-11-24

## Angle (1-2 sentences)
The Chevrolet S-10 is the 8th-deadliest nameplate per mile in the entire FARS extract, and its GMC Sonoma twin — the same GMT325 truck, same factory, different badge — died at less than half the rate. The truck that replaced the S-10 is 17 times safer per mile, and the S-10 still killed 143 people a year in 2014–2023, two decades after production ended.

## Self-critique gate
- Is this surprising after 1,572 articles? Yes. #1279 covered the Sonoma (rate 2.13, 7.6x the Colorado) but never compared the twins to each other. Nobody on the site has run the S-10/Sonoma head-to-head, and a 2.27x fatality gap between two badges of the identical truck is a genuine paradox, not a data dump.
- Is it a duplicate? No. Queue search: no standalone S-10 article; #1279 is Sonoma-only; #843/#1525/#1553 mention "S-10" only in passing. This week's recalls (Honda Takata, Ram ABS, Transit BCMC, Mack snap ring, Altec) are all already covered; H1-2026 NHTSA data covered 3x over (#1458/#1494/#1532); IIHS Nov batch covered (#1557/#1567).
- Verdict: PROCEED.

## Primary sources (3+)
1. **NHTSA FARS 2014–2023** (site extract `fars_output.js`, generated from FARS bulk CSV): all fatality, rate, fleet, VMT, toxicology, and model-year figures below.
2. **IIHS crash-test ratings**: 2003 Chevrolet S-10, Moderate Overlap Front = **Marginal** (via Carfax/Edmunds IIHS data); 1995 S-10 scored 0 (Poor) in the original moderate overlap test.
3. **Edmunds (1996 S-10 review)**: "poor crash test scores of this little pickup, especially in contrast to the good crashworthiness demonstrated by the Ford Ranger and Dodge Dakota."
4. **Wikipedia / JD Power / CarGurus (S-10 history)**: production 1981–2004 North America; replaced by Colorado/Canyon in 2004; production ended January 2004; driver-side airbag not added until 1995; Colorado built to "much more stringent safety standards."

## FARS numbers (all from fars_output.js, 2014–2023)
- **Chevrolet S-10 Pickup: 1,427 deaths, rate 4.83 per 100M VMT, fleet 218,750, VMT 2,953M.** Rate rank: **8th of 337 models**. Death-count rank: 32nd.
- **GMC Sonoma (badge twin): 378 deaths, rate 2.13.** Twin gap: **2.27x** (4.83 / 2.13).
- **Chevrolet Colorado (replacement): 348 deaths, rate 0.28.** Replacement gap: **17.2x**.
- **GMC Canyon (replacement twin): 209 deaths, rate 0.59.** Gap: **8.2x**.
- **Contemporary rivals:** Ford Ranger 2.91 (S-10 is 1.66x worse), Dodge Dakota 2.62 (1.84x worse).
- **Zombie fleet:** 1,427 deaths / 10 years = **142.7 deaths per year**, 2014–2023, for a truck whose production ended January 2004. Fleet estimate still 218,750 on the road.
- **Deaths per 1,000 fleet vehicles:** S-10 **6.52** vs Sonoma **2.88**.
- **Model-year concentration:** 1998–2003 model years account for **805 of 1,427 deaths (56.4%)** — peak 2000 model year (178). 2004 model year only 16 deaths (crew-cab-only final year, tiny production run).
- **Toxicology (S-10):** 1,643 drivers in fatal crashes; alcohol-positive 15.4%, drug-positive 8.6%, **any impairment 20.5%** — vs Sonoma 17.4% and fleet average ~20.0%. Impairment does NOT explain the twin gap: a 3.1-point impairment difference cannot produce a 2.27x fatality-rate gap.

## Statistical robustness
- Poisson 95% CIs on death counts: S-10 1,353–1,501; Sonoma 340–416. Rate CIs: S-10 4.58–5.08 vs Sonoma 1.92–2.34 — **no overlap**. The twin gap is not sampling noise.
- Caveat: FARS rates use *estimated* VMT and fleet, not odometer readings (±15% uncertainty for low-volume/old models). The S-10's shrinking, aging fleet makes its VMT estimate shakier than a current model's. Even at the extreme edges of that uncertainty, a 2.27x gap does not close.

## Why the gap? (hypotheses — NOT proven)
- Trim mix: the S-10 sold heavily as a base single-cab work truck; the Sonoma skewed to better-equipped trims. FARS does not break out trim, so this cannot be verified from the data.
- Buyer/use mix: cheaper used S-10s may skew younger or to commercial/fleet duty and rural roads. Unverifiable from FARS alone.
- Crashworthiness is real but small: IIHS rated the S-10 Marginal (2003) where the Ranger and Dakota earned Good — but the Sonoma is the *same truck*, so crashworthiness cannot explain the twin gap at all. Something about who drove which badge, or how, is doing the work.
- Strongest counterargument: the Sonoma sample is small (378 deaths, 500 drivers in fatal crashes) and its fleet estimate (131,250) is a rough number; if GM's badge split in the underlying registration data is misestimated, the rate gap shrinks. The raw per-fleet death counts (6.52 vs 2.88 per 1,000) point the same direction, which blunts this, but it does not kill it.

## Limitations (must appear in article)
- FARS captures fatal crashes only; a low fatality rate does not prove low injury rates.
- Rates use estimated VMT/fleet, not odometer readings.
- No trim-level, driver-age, or road-type breakout in the extract; the twin-gap mechanism is unexplained.
- IIHS tested only the 2003 model year for moderate overlap; NHTSA never NCAP-tested most S-10 years (1999: no NCAP tests conducted).
- Model-year death counts confound vehicle age, exposure time, and design — newer model years show fewer deaths partly because they spent fewer years in the 2014–2023 window.

## Actionable takeaways
- Shopping for a cheap used compact pickup: the 1998–2003 S-10 is the worst of its generation by a wide margin. Its direct replacement, the Colorado/Canyon, is 17x safer per mile.
- If you already own an S-10: 1995-and-newer trucks have a driver airbag; pre-1995 trucks have none. There is no ESC, no side airbags, no modern structure — drive it accordingly and never put a kid in an extended-cab jump seat.
- Check any used truck's VIN at nhtsa.gov/recalls before buying.

## Headline options
1. "Same Truck, Two Badges, Twice the Deaths: The Chevrolet S-10's Twin Paradox"
2. "The S-10 Died in 2004. It Still Kills 143 People a Year."
3. "GM Built the Same Truck Twice. The Chevy Badge Was Twice as Deadly."

## References for article
1. NHTSA, Fatality Analysis Reporting System (FARS), 2014–2023 — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS vehicle ratings — https://www.iihs.org/ratings
3. Carfax, 2003 Chevrolet S-10 safety ratings (IIHS Moderate Overlap Front: Marginal) — https://www.carfax.com/Research/Chevrolet/S-10/2003
4. Edmunds, 1996 Chevrolet S-10 review (poor crash scores vs Ranger/Dakota) — https://www.edmunds.com/chevrolet/s-10/1996/review/
5. Wikipedia, Chevrolet S-10 (production 1981–2004, replaced by Colorado) — https://en.wikipedia.org/wiki/Chevrolet_S10
6. NHTSA recalls database — https://www.nhtsa.gov/recalls
