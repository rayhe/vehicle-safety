# Research: One Corporation, 51,687 Deaths — GM's FARS Empire

## Kill Test
**Is this genuinely newsworthy?** YES. This is a novel cross-tabulation nobody has done: summing ALL GM brands (Chevrolet, GMC, Buick, Pontiac, Cadillac, Saturn, Oldsmobile) as a single corporate entity in FARS. The finding — that one company accounts for 27% of all FARS deaths while holding only 20.7% of fleet — is the kind of macro-level insight that gets hidden by brand-level reporting.

**What's the novel contribution?** Three original findings:
1. GM's 1.31x death overrepresentation ratio (27% of deaths / 20.7% of fleet)
2. Platform-twin shell game: identical platforms sold under different brands combine for massive death counts (Silverado+Sierra = 12,928; Tahoe+Yukon = 3,706; Trailblazer+Envoy = 3,461)
3. The Chevrolet-specific concentration: Chevy alone accounts for 171 deaths per 100k fleet vehicles vs 102.6 for non-GM vehicles

## Primary Sources

### Source 1: FARS (NHTSA)
- FARS 2014-2023, queried via fars_output.js
- GM brands combined: 51,687 deaths, 35,437,500 estimated fleet
- 145.9 deaths per 100k fleet vs 102.6 for non-GM (42% higher)
- Chevrolet alone: 35,905 deaths — more than any single manufacturer except Ford (34,954)

### Source 2: GM Ignition Switch Recall History
- 2014 GM ignition switch scandal: 124 deaths acknowledged, 2.6M vehicles recalled
- Cobalt/Ion affected — both show high death rates in FARS (Cobalt: 5.1, Ion: 0.55)
- Wikipedia: https://en.wikipedia.org/wiki/General_Motors_ignition_switch_recalls
- $900M DOJ settlement, Kenneth Feinberg fund paid 124 death claims

### Source 3: IIHS Driver Death Rates by Make and Model
- IIHS publishes driver death rates per registered vehicle
- GM models historically overrepresented in high-death-rate lists
- https://www.iihs.org/ratings/driver-death-rates-by-make-and-model

### Source 4: GM Platform Architecture (Engineering Context)
- GMT800 platform (1999-2007): Silverado, Sierra, Tahoe, Yukon, Suburban, Escalade, Avalanche
- Delta platform (2005-2010): Cobalt, G5, Ion, HHR, Astra
- GMT360 platform (2002-2009): Trailblazer, Envoy, Rainier, Ascender, Bravada

## Key Data Points

### GM Brand Breakdown
| Brand | Deaths | Fleet | Per 100k | Models |
|-------|--------|-------|----------|--------|
| Chevrolet | 35,905 | 21,000,000 | 171.0 | 32 |
| GMC | 6,758 | 5,250,000 | 128.7 | 9 |
| Buick | 3,710 | 2,975,000 | 124.7 | 11 |
| Pontiac | 3,038 | 2,450,000 | 124.0 | 9 |
| Cadillac | 1,389 | 1,881,250 | 73.8 | 10 |
| Saturn | 619 | 1,268,750 | 48.8 | 7 |
| Oldsmobile | 268 | 612,500 | 43.8 | 4 |

### Platform Twins Combined
- Silverado + Sierra: 12,928 deaths (single platform, two badges)
- Tahoe + Yukon: 3,706 deaths
- Trailblazer + Envoy: 3,461 deaths
- S-10 + Sonoma: 1,805 deaths
- Cobalt + G6: 2,448 deaths

### GM's Worst Per-VMT-Rate Models (200+ deaths)
- Tracker: 7.83 (1st)
- Cobalt: 5.1 (ignition switch scandal)
- Impala: 5.0
- S-10: 4.83
- Camaro: 3.44

### Context: Other Manufacturers
| Manufacturer | Deaths | Fleet Share | Death Share | Ratio |
|-------------|--------|-------------|-------------|-------|
| GM (all) | 51,687 | 20.7% | 27.0% | 1.31x |
| Ford | 34,954 | 13.9% | 18.3% | 1.31x |
| Toyota | 22,019 | 11.1% | 11.5% | 1.04x |
| Honda | 17,837 | 6.9% | 9.3% | 1.34x |
| Nissan | 14,456 | 5.4% | 7.6% | 1.39x |
| Subaru | 2,292 | 2.9% | 1.2% | 0.42x |
| Mazda | 1,432 | 1.6% | 0.7% | 0.46x |

## Angle
Rex Driverton investigation piece. The headline number — 51,687 — is staggering. More than the entire Vietnam War death toll (58,220). One corporation.

The novel insight: GM's multi-brand strategy obscured the concentration. When you see "Chevy Silverado" and "GMC Sierra" in separate FARS entries, you don't realize they're the same truck with different badges — and together they've killed 12,928 people. The platform-twin math makes this genuinely surprising.

## Strongest Counterargument
GM has the largest fleet in America. Large fleet = large body count is simple math. The per-fleet-rate comparison (145.9 vs 102.6 non-GM) is what matters, and even that may be skewed by GM's historical concentration in segments with higher inherent risk (full-size trucks, body-on-frame SUVs, cheap sedans marketed to younger buyers). Toyota's fleet is younger on average. Honda's is more concentrated in sedans.

## Limitations
- FARS covers fatal crashes only — injury crashes excluded
- Fleet size estimates use registration proxies, not actual odometer data
- VMT rates depend on estimated miles driven per vehicle type
- Some GM deaths are in very old vehicles (pre-2000 model years) that any manufacturer of that era would have similar rates for
- We can't separate "GM design problem" from "GM demographic problem" (i.e., who buys these vehicles)

## Journalist: Rex Driverton
Beat: Fatality rate investigations, vehicle-specific deep dives
Style: Deadpan dark humor, noir detective covering NHTSA data
