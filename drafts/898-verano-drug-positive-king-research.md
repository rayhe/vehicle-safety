# Research Notes — Article #898: The Buick Drug Crown

**Slug:** 898-verano-drug-positive-king
**Journalist:** Dale Impactor III (Toxicology Desk Chief)
**Date:** 2026-09-14

## The Finding

Ranked all 307 vehicle models in FARS_TOXICOLOGY by drug-positive rate among drivers in fatal crashes:

- **Buick Verano: 13.1% drug-positive** (52 of 397 drivers) — highest of any model with 300+ fatal-crash drivers; #2 overall at 200+ threshold (behind only the Buick Park Avenue, 16.6% on 259 drivers).
- Fleet average: 8.7% drug-positive across 490,736 drivers.
- Verano vs rest-of-fleet: odds ratio **1.59x**, z = 2.6 (p < 0.01).
- 95% CI for Verano rate: 9.8%–16.4%. (So the Park Avenue "lead" is statistically meaningless — both are extreme outliers.)

## The Platform-Control Kicker

The Verano rides GM's Delta II platform — the same bones as the **Chevrolet Cruze**:
- Verano: 13.1% drug-positive (52/397)
- Cruze: 8.9% drug-positive (277/3,129)
- Difference: z = 2.40, p < 0.05. Significant.

Same mechanical car. Different badge. Wildly different toxicology. This isolates the *driver*, not the *car* — the vehicle isn't causing drug use; the buyer demographic is.

## The Brand Paradox

Two Buicks hold the top two drug-positive slots in the entire dataset (Park Avenue 16.6%, Verano 13.1%) — the brand that sells "quiet luxury for sensible adults." But it's NOT brand-wide:
- Buick Regal: 6.8% (below fleet average)
- Buick LaCrosse: 8.4% (at average)

So it's model-specific, not brand-specific. Park Avenue fits the known beater effect (old flagship, now cheap). Verano is the interesting one: a 2012–2017 compact, discontinued after 2017 (MotorTrend/Automotive News), now a $5–9K used car — Buick's failed attempt at a youth car, now the drug-test champion.

## Also worth noting

- Verano alcohol-positive: 16.4% (65/397) vs fleet 15.1% — unremarkable. It's specifically the DRUG rate that's extreme.
- Verano any-impairment: 24.7% vs fleet 20.0%.
- Verano earned 5-star NHTSA rating and IIHS Good in moderate overlap/side/roof (MotorTrend 2017 review) — the car itself is safe; the drivers aren't.

## News Pegs (fresh)

1. **NHTSA "Drive High, Get a DUI"** campaign running alongside "Drive Sober or Get Pulled Over" — drug-impaired enforcement is the current federal push (nhtsa.gov press release, crawled <1h ago).
2. **NHTSA study via Land Line Media**: among drivers killed and tested, ~69% positive for at least one drug category; alcohol 35.8%, cannabinoids 28%, opioids 15.3%. Drugs prevalent in more than half of crash victims.
3. **NHTSA Labor Day crackdown** (TechTimes, Aug 17): no per-se THC threshold exists — THC detectable long after psychoactive effects end. Key for limitations section.
4. **NSC H1 2026**: 30% of 2024 traffic deaths involved an alcohol-impaired driver; fatalities down slightly.

## Kill Test

**Propose:** The vehicle with the most drug-positive fatal-crash drivers in America is a discontinued Buick compact — and its platform twin (Chevy Cruze) tests far cleaner, proving it's the buyer, not the car.

**Challenge:** Is this just the beater effect again (cheap used cars attract impaired drivers, already covered for the Alero)? Partially — but the Cruze comparison is the novel control: two equally cheap Delta II cars with a statistically significant drug-rate gap. That's new. And nobody has published a per-model drug-positive ranking. The Verano/Park Avenue Buick one-two is genuinely surprising.

**Verdict:** PROCEED. Novel contribution: (1) first per-model drug-positive ranking from this dataset, (2) platform-control comparison Verano vs Cruze, (3) brand-paradox framing with honest limits.

## Limitations (must appear in article)

1. Drug-positive ≠ impaired at time of crash. FARS toxicology records any positive; THC metabolites persist days/weeks. NHTSA itself notes there's no per-se cannabis threshold.
2. Testing is not universal — testing rates vary by state, crash type, and whether the driver survived. Relative rankings assume roughly comparable testing across models; that assumption is imperfect.
3. n=397 gives a 95% CI of 9.8%–16.4%; exact rank (#1 vs #2) is not statistically meaningful.
4. Beater-effect confound: Veranos now trade at $5–9K. Drug rate may track vehicle value/age rather than the model per se. The Cruze control mitigates but doesn't eliminate this (Cruze is also cheap now, yet tests cleaner).
5. FARS covers fatal crashes only — no visibility into non-fatal impairment patterns.

## Strongest Counterargument (must appear at full strength)

The ranking could be a testing-and-demographics artifact, not a finding about the Verano at all. If medical examiners test young male drivers in cheap sedans more aggressively than, say, minivan drivers — and cheap cars concentrate exactly those drivers — then the Verano's crown reflects who gets tested and who can only afford a $7,000 Buick, not anything about the car or even its buyers' true drug-use rate. The Cruze gap could likewise reflect which Cruzes end up in fatal crashes (fleet/rental vs private) rather than a real behavioral difference. If that's right, the honest headline is "poor young men get drug-tested more," which is a sociology finding wearing a car costume.

## Primary Sources (3+)

1. NHTSA FARS database — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars (the dataset behind every number; computed from embedded FARS_TOXICOLOGY, 490,736 drivers)
2. NHTSA FARS query tool (CDAN) — https://cdan.dot.gov/query
3. NHTSA "Drive Sober or Get Pulled Over" / "Drive High, Get a DUI" campaign press release — https://www.nhtsa.gov/press-releases/nhtsa-launches-annual-drive-sober-or-get-pulled-over-enforcement-campaign-holiday
4. Land Line Media reporting NHTSA drug-prevalence study — https://landline.media/nhtsa-more-than-half-of-crash-victims-positive-for-drugs-alcohol/
5. TechTimes on NHTSA Labor Day crackdown / no per-se THC threshold — https://www.techtimes.com/articles/324744/20260817/nhtsa-launches-labor-day-drunk-driving-crackdown-after-holiday-killed-505-drivers.htm
6. Wikipedia: Buick Verano (North America) — https://en.wikipedia.org/wiki/Buick_Verano_(North_America) (discontinued after 2017 MY, US)
7. MotorTrend: Verano canceled after 2017 — https://www.MotorTrend.com/news/buick-verano-canceled-u-s-2017-says-report
8. NSC H1 2026 fatality estimates — https://www.morningstar.com/news/pr-newswire/20260909dc43137/traffic-fatalities-down-slightly-in-first-half-of-2026-preliminary-national-safety-coupling

## Methodology note for article

- Source: FARS_TOXICOLOGY array in fars_output.js (FARS 2014–2023 fatal-crash driver toxicology, 307 models, 490,736 drivers).
- drugPct = drug-positive drivers / all drivers in fatal crashes for that model (not only tested drivers — untested dilute the rate; rankings are relative).
- Odds ratio Verano vs rest: (0.131/0.869)/(0.087/0.913) = 1.59x. z = 2.6.
- Verano vs Cruze: diff 4.25pp, se 1.77pp, z = 2.40, p < 0.05.
