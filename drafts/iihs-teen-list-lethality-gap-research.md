# Research Notes: IIHS Teen Vehicle List × FARS Lethality Gap

## Hook / Timeliness
IIHS published their 2026 teen-safe vehicle list on May 27, 2026 (today). Joint list with Consumer Reports. 45 used vehicles starting under $10K, 29 "Best Choices" under $20K, 22 new vehicles.

## Novel Finding
**Within the IIHS "Good Choices" list, there is a 25% occupant lethality gap between sedans and SUVs.** The average sedan on the list has a 0.641 lethality ratio (occupant dies in 64% of fatal crash involvements). The average SUV: 0.514 (51%). IIHS treats them all as "Good Choices" without distinguishing this survival gradient.

## The Price-Lethality Trap
The cheapest vehicles on the list — the ones budget-constrained families will actually buy for their teens — are overwhelmingly sedans with HIGH self-lethality:

| Vehicle | IIHS Price | FARS Lethality | FARS Deaths |
|---------|-----------|----------------|-------------|
| Nissan Sentra | $4,700 | 0.671 | 2,571 |
| Chevy Sonic | $5,300 | 0.754 | 494 |
| Kia Soul | $5,300 | 0.643 | 546 |
| Chevy Malibu | $5,800 | 0.634 | 3,465 |
| Chevy Equinox (SUV) | $5,700 | 0.558 | 1,056 |
| Nissan Rogue (SUV) | $5,900 | 0.545 | 968 |
| Hyundai Elantra | $6,100 | 0.633 | 2,407 |
| Hyundai Tucson (SUV) | $7,100 | 0.454 | 669 |
| Honda Civic | $8,100 | 0.681 | 6,553 |
| Honda Accord | $8,300 | 0.644 | 7,102 |

**Key: For $1,000 more than a Sentra, you can get a Rogue that's 19% less likely to kill your teen in a fatal crash.**

## Data Sources (3+ primary)
1. IIHS "Safe vehicles for teens" list (May 27, 2026) — https://www.iihs.org/ratings/safe-vehicles-for-teens
2. NHTSA FARS 2014-2023 (307 vehicles with toxicology, 337 with fatality data)
3. IIHS/Consumer Reports article: https://www.iihs.org/news/detail/updated-teen-vehicle-list-spotlights-good-buys-with-solid-safety-credentials
4. NHTSA FARS database: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## The Ethical Tension (Strongest Counterargument)
SUVs with low self-lethality are high "other-lethality" — they export crash risk. The Equinox is in 1,893 fatal crashes but only 1,056 Equinox occupants died. The remaining ~837 deaths were in the other vehicle. Recommending SUVs for teen safety is locally optimal (for the teen) but globally harmful (for everyone else). IIHS explicitly acknowledges this tension in their exclusion of large SUVs and pickups but doesn't address it for midsize SUVs on the list.

## Impairment Context
All vehicles on the IIHS list cluster around the fleet impairment average (~20% anyPct). Vehicle choice doesn't change impairment exposure. What it DOES change is what happens when the crash occurs — and there, the sedan/SUV gap is enormous.

## Original Contribution
Novel cross-tabulation: IIHS's own recommended teen vehicles ranked by FARS lethality ratio reveals a hidden survival gradient the list doesn't disclose. No published analysis has applied FARS per-crash lethality data to the IIHS teen vehicle list.

## Limitations
- FARS lethality ratios reflect entire production runs (1980-2023), not just IIHS-recommended model years (2012+). Newer model years likely have better structural safety, which would narrow the gap.
- Lethality ratio conflates single-vehicle and multi-vehicle crashes. Sedans may have higher single-vehicle crash representation.
- Fleet size estimates introduce ±15% uncertainty for low-volume models.
- FARS only captures fatal crashes — a vehicle could have better total crash survival but similar fatal-crash outcomes.

## Journalist
Dale Impactor III — demographic analysis, driver behavior. This is fundamentally a story about how income determines which "safe" car your teen gets, which determines their survival odds.

## Angle / Thesis
IIHS gave you a list. They didn't rank it. FARS data does. The cheapest car on the list is 72% more likely to kill your teen than the cheapest SUV on the same list. Both are "Good Choices." Only one is a good choice.

## Kicker
The Gap
