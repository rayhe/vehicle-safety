# Research: #1043 — The Drunkest Pickup in America Is the One Nissan Just Killed

**Slug:** `1043-titan-drunkest-pickup-dead`
**Journalist:** Dale Impactor III (Toxicology Desk Chief — kicker: Sobriety Report)
**Status:** RESEARCH -> DRAFT

## Angle (1-2 sentences)
The Nissan Titan — discontinued after the 2024 model year — had the drunkest drivers of any modern full-size pickup: 23.9% of its fatal-crash drivers tested impaired, a full 2.9 points clear of the next truck. And the kicker that makes it a Dale paradox: the drunkest big pickup was also the safest per mile in its class, with a 0.57 fatality rate, less than half the Silverado's.

## Self-critique gate
- Genuinely surprising after 1,042 articles? YES. Impairment-by-model is well-trodden (Dale's beat: #868 NV200 drugs, #883, #1007 Corvette alcohol ranking, #944 drunkest-of-safest, #931 Navigator/Escalade paradox, #1013 FJ/Solara inversion, #1023 Washington jump), but no article has named the Titan and no article has ranked full-size pickups by impairment. The drunkest-yet-safest-per-mile inversion is a new paradox in the #819/#931 family, now applied to the single highest-volume vehicle class in America.
- Just another data dump? No — the Titan-vs-F-150 contrast carries the story: the truck with the most fatal-crash drivers in the database (F-150, 21,195) has the soberest drivers of the big six (18.9%), below the national baseline.
- Verdict: PROCEED.

## Kill-test rejects (checked this run)
- Ford 26V340/26S36 Bronco Sport/Maverick ball-joint do-not-drive (May/June 2026) — 4 months old, no fresh peg; implicated in #954's do-not-drive census as a micro-campaign. KILL.
- NHTSA closes Honda Odyssey airbag petition (807K, Sept 29) — covered #1012. KILL.
- Range Rover Sport SV rear subframe cracks (873, Sept 30) — covered #1011. KILL.
- Chrysler Grand Cherokee coil-spring third recall / re-recall — covered #847/#858/#865/#882/#886/#891. KILL.
- Honda Ridgeline rear-camera probe closed (Sept 22) — covered #964. KILL.
- comma.ai PE26007 — covered #1015. KILL.
- GM L87 EA26005 — covered #1025. KILL.
- Q1 2026 fatality estimates (7,770, 0.99 rate) — covered #814/#856. KILL.
- Counterfeit-airbag angles — saturated (8+ drafts). KILL.
- Class-level impairment cross-tab (Sports 22.5% > Sedan 20.4% > Pickup 20.1% > SUV 19.5% > Van 18.1%) — computed 2026-10-01, spread predictable, no surprise. KILL.
- "Soberest cars" ranking — Chevrolet Tracker 12.7% leads but its sobriety was #908's supporting fact. KILL.
- EV-driver impairment cross-tab (Model S 24.0% any, n=204) — small n, finding is "EV drivers are average," not newsworthy. KILL.

## Data (computed 2026-10-01 from fars_output.js)

### Full-size pickup impairment ranking (FARS_TOXICOLOGY, 2014-2023)
| Truck | Drivers | Any impaired | Alcohol-positive | Drug-positive |
|---|---|---|---|---|
| Nissan Titan | 1,311 | **23.9%** | 18.1% | 10.2% |
| GMC Sierra | 9,319 | 21.0% | 15.7% | 9.2% |
| Chevrolet Silverado | 23,675 | 20.6% | 15.7% | 8.7% |
| Toyota Tundra | 4,151 | 19.6% | 14.7% | 8.6% |
| Dodge Ram | 8,830 | 19.1% | 14.5% | 8.0% |
| Ford F-150 | 21,195 | 18.9% | 14.4% | 8.0% |

- Titan is #1 of the modern big six, 2.9pp clear of the Sierra and 5.0pp clear of the F-150.
- Of ALL pickups with 200+ drivers, only the long-dead Chevrolet C/K (1988-2002 nameplate, 28.0%, n=282) out-drinks it. Titan is #2 of 20 pickups overall.
- National fatal-crash-driver baseline: 20.0% any impairment (490,736 drivers; 15.1% alcohol-positive, 8.7% drug-positive). The F-150 sits BELOW the baseline.

### The paradox (FARS_BY_MODEL)
- Titan death rate: **0.57 per 100M VMT** (234 deaths) — the lowest of the big six.
- Peers: Silverado 1.25 (9,591 deaths), Sierra 1.01 (3,337), F-150 1.04 (9,194), Ram 0.78 (4,407), Tundra 0.94 (1,223).
- So: drunkest drivers, safest per-mile record. The impairment doesn't show up in the fatality rate.

### Titan discontinuation (news context)
- Nissan ended Titan production with the 2024 model year at Canton, Mississippi, after a 20-year run (2004-2024); plant retooled for EVs. Nissan's own Titan page confirms 2024 as final year. No 2025/2026 Titan; Frontier is Nissan's only pickup now.
- Titan sold just ~15,063 units in 2022; depreciation is brutal (~47% over 5 years per CarEdge/nextgenauto) — a well-optioned 2021 Titan SV runs around $26K used.

## Primary sources (4)
1. NHTSA FARS 2014-2023 toxicology cross-tab (site's own fars_output.js, FARS_TOXICOLOGY array) — pickup impairment ranking computed 2026-10-01. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS per-model rates (fars_output.js, FARS_BY_MODEL) — Titan 0.57 rate, lowest of the six.
3. Nissan USA: "2024 marking their final year of production" (Titan discontinued page). https://www.nissanusa.com/vehicles/discontinued/titan.html
4. Wikipedia, Nissan Titan (production Sept 2003 - Nov 2024, model years 2004-2024, Canton MS). https://en.wikipedia.org/wiki/Nissan_Titan

## Methodology (for article)
Impairment = BAC > 0 OR drug-positive toxicology among fatal-crash drivers in FARS 2014-2023 (not legal-limit threshold; includes below-0.08 alcohol). Rates are weighted by driver count. Fatality rates = deaths per 100M VMT with NHTS-estimated denominators.

## Limitations (for article)
- FARS captures only fatal crashes: impairment among drivers who died or killed, not among all Titan drivers. 1,311 Titan drivers is a solid sample but selection effects apply (toxicology testing is not universal; varies by state/year/survival).
- Alcohol-positive = BAC > 0, not >= 0.08. Some were below the legal limit.
- The drunkest-but-safest paradox partly reflects Titan's tiny fleet: the 0.57 rate rests on 234 deaths with estimated VMT denominators (standard site +/-15% caveat for low-volume models). The impairment ranking, by contrast, is driver-count-based and robust.
- Impairment correlates with driver demographics and use patterns, not just the vehicle: Titan buyers skew work-truck/rural/younger-male, the demographics most represented in impaired-driving stats. The truck doesn't cause the drinking.
- Titan is discontinued; the story is a used-market story now.

## Strongest counterargument (for article, full strength)
23.9% of 1,311 drivers is about 313 impaired drivers over a decade — a real but modest absolute number next to the Silverado's ~4,880. The Titan's low per-mile fatality rate means its drunker drivers aren't producing more deaths per mile than sober-truck drivers elsewhere, which is exactly what the paradox says: impairment concentration and crash lethality are different problems. And a discontinued truck's owner base drifts toward used-market bargain hunters, whose demographics may inflate impairment rates independent of the badge. The honest version: "the truck with the drunkest drivers" is a statement about who bought the Titan, not about the Titan.

## Actionable insight
Shopping used full-size trucks? The Titan's steep depreciation makes a 2021 SV a ~$26K bargain against $40K+ competitors — and it has the class's best per-mile fatality record. But its drivers' toxicology record says these trucks concentrated risk-taking owners: get a pre-purchase inspection, check the VIN at nhtsa.gov/recalls, and if you ride with a Titan owner at midnight, offer to drive. Riding with ANY pickup driver at night: the F-150's numbers are the soberest of the six, and it's still 18.9%.

## Headline / deck / kicker
- Kicker: Sobriety Report
- Journalist: Dale Impactor III
- Headline: "The Drunkest Pickup in America Is the One Nissan Just Killed"
- Deck: "Nearly 1 in 4 Nissan Titan drivers in fatal crashes tested impaired. It was also, per mile, the safest full-size truck you could buy."
- Pull stat: 23.9% / "Share of Titan drivers in fatal crashes who tested impaired — highest of any modern full-size pickup"
- Slug: 1043-titan-drunkest-pickup-dead
