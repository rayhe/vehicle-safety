# Research: #868 — The Druggiest Drivers in America Drive a Buick

**Slug:** 868-buick-park-avenue-druggiest-drivers
**Journalist:** Dale Impactor III (Toxicology Desk Chief)
**Kicker:** Sobriety Report
**Date:** 2026-09-10

## Angle (1-2 sentences)

The Buick Park Avenue is the most drug-positive vehicle in America: 16.6% of its drivers in fatal crashes test positive for drugs, #1 of 307 nameplates in FARS 2014-2023. But the drug leaderboard looks nothing like the alcohol leaderboard (correlation just 0.50), and NHTSA's own crash-risk research found THC-positive drivers had no increased crash risk after adjusting for age, gender, and alcohol — so the "druggiest car in America" crown likely measures medicine cabinets, not meth labs.

## Kill test

- Newsworthy: YES. Fresh computation on FARS 2014-2023 toxicology data (site's fars_output.js); no news peg needed — data journalism.
- Novel: YES. The site's `alero-beater-effect-oldest-cars-drunkest-drivers` covered the *any-impairment* leaderboard by vehicle age (beater effect). The site's `fars-drug-detection-measurement-artifact` covered the 2018 FARS drug-counting change. Nobody has published the *drug-positive-specific* leaderboard, the drug-vs-alcohol divergence (corr 0.50; 10 of the top-20 drug models don't crack the top-40 alcohol list), or the Buick double-crown (Park Avenue #1 in both drug AND alcohol). The Verano at #2 drug (13.1%) is also new information.
- Dale-appropriate: toxicology desk, statistical, sardonic. Proceed.

## Original computations (the novel contribution)

From FARS_TOXICOLOGY (307 nameplates, drivers with toxicology in fatal crashes, 2014-2023; n>=150 filter):

**Drug-positive leaderboard:**
| Rank | Vehicle | Drug+ | Alcohol+ | n |
|---|---|---|---|---|
| 1 | Buick Park Avenue | 16.6% | 24.3% | 259 |
| 2 | Buick Verano | 13.1% | 16.4% | 397 |
| 3 | Ford Five Hundred | 13.0% | 19.9% | 216 |
| 4 | Suzuki Grand Vitara | 12.7% | 11.4% | 158 |
| 5 | Nissan NV200 | 12.7% | 11.8% | 212 |

- Park Avenue drug rate (16.6%) is 1.8x the sedan class median (9.1%).
- Pearson correlation between alcPct and drugPct across 307 nameplates: **0.504** — moderate. The two leaderboards are different populations.
- 10 of the top-20 drug models do NOT appear in the top-40 alcohol list: Verano, Grand Vitara, NV200, GLK-Class, Neon, DTS, Integra, Avenger, Savana, RDX. The drug leaderboard includes current-production models (RDX, Savana, NV200); the alcohol leaderboard is dominated by discontinued beaters (per the alero piece).
- Park Avenue is the ONLY nameplate #1 on both leaderboards (drug 16.6%, alcohol 24.3%, any-positive 31.7% — nearly 1 in 3 drivers impaired-or-positive in fatal crashes).

## Thesis

FARS "drug-positive" does not mean "drug-impaired." It includes prescription medications, and THC persists in blood for days to weeks after any impairing effect fades. NHTSA's own 2015 Drug and Alcohol Crash Risk case-control study (Virginia Beach, 3,000+ crash drivers): THC-positive drivers showed no increased population crash risk after adjusting for age, gender, and alcohol (OR=1.25 unadjusted, 1.05 after demographic adjustment, 1.0 after also controlling for alcohol). The Park Avenue's buyer base skewed elderly (the last Park Avenue was built in 2005; Buick was America's old-driver brand for decades), and FARS expanded non-alcohol drug reporting in 2018 (3-drug cap removed; any-drug detection 39.9% -> 55.0% per Chihuri & Li 2026). The honest reading: the "druggiest car in America" crown is partly a polypharmacy census of grandpa's medicine cabinet, not a recklessness ranking. The policy built on drug-positive counts is aimed at the wrong population.

## Strongest counterargument (state at full strength)

Drug-positive includes plenty of illicit drugs, and the site data has no drug-type breakdown, so the prescription thesis is inference, not proof — the Park Avenue's drivers could simply use more illicit drugs too. Testing rates vary wildly by state (some test every dead driver, others barely test), so if Park Avenues crash disproportionately in high-testing states, the rate inflates. And the alcohol number is unambiguous: 24.3% alcohol-positive is the highest in the nation and means real impairment, not metabolites — whatever the drug story is, Park Avenue drivers are genuinely the most impaired drivers in America by the measure that matters most. The "medicine cabinet" framing risks minimizing a real 1-in-3 impairment rate.

## Limitations

- FARS captures fatal crashes only; drug-positive != drug-impaired (prescription meds, THC persistence).
- The 2018 FARS drug-reporting enhancement inflates post-2018 drug counts vs pre-2018; the 16.6% blends both eras.
- n=259 Park Avenue drivers with toxicology — solid but not huge; thin for subgroup claims.
- No drug-type breakdown in the site's data; the prescription inference rests on demographics (elderly buyer base, last built 2005), not on the toxicology panel itself.
- State-by-state testing-rate variation is an unmeasured confound.

## Actionable insights

- If you drive a 2000s Buick (Park Avenue, LeSabre, Lucerne) or care for someone who does: the risk conversation is a medication review with their doctor/pharmacist, not a breathalyzer. Polypharmacy + driving is the under-discussed impairment vector — ask specifically about sedating prescriptions and their interaction with driving.
- For everyone else: a "drug-positive driver" headline is not the same as a "drugged driver" headline. THC metabolites linger for weeks; presence is not impairment. Judge drugged-driving stats by whether they adjust for age, alcohol, and drug type.
- Check your own assumptions: the vehicle with the most drug-positive drivers is not a Hellcat or a WRX. It's the car your grandfather drove to church.

## Primary sources

1. NHTSA FARS 2014-2023 per-model toxicology data (site's fars_output.js; FARS_TOXICOLOGY array, 307 nameplates). Parent: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA, "Drug and Alcohol Crash Risk Study" (2015), Virginia Beach case-control: THC-positive drivers OR=1.25 unadjusted, 1.05 after demographic adjustment, 1.0 after also controlling alcohol — no increased population crash risk. https://www.nhtsa.gov/sites/nhtsa.gov/files/11388a-crashriskstudy-execsummary.pdf
3. Chihuri & Li (2026), "Impact of the enhanced Fatality Analysis Reporting System on drug detection in fatally injured drivers," Accident Analysis & Prevention Vol 226 (DOI: 10.1016/j.aap.2025.108354): 2018 FARS enhancement removed the 3-drug reporting cap; any non-alcohol drug detection 39.9% -> 55.0%.
4. NHTSA Report to Congress: Marijuana-Impaired Driving (July 2017) — THC crash-risk estimates 1-3x, "similar to drivers with BAC levels between .01 to < 0.05," wide confidence intervals. https://www.nhtsa.gov/document/report-congress-marijuana-impaired-driving-july-2017
