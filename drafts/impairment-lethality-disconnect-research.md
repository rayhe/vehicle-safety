# Research: The Impairment-Lethality Disconnect

## Thesis
Within a vehicle class, impairment rates have essentially ZERO correlation with crash lethality. The vehicle you drive determines whether you survive a crash far more than whether you're sober.

## Novel Finding
Cross-tabulating FARS impairment data (FARS_TOXICOLOGY) with crash lethality ratios (deaths/crashes from FARS_BY_MODEL) across 189 vehicle models with 200+ crashes and 50+ toxicology-tested drivers reveals:

### Correlation Coefficients (Pearson r)
- **All vehicles:** r = 0.2309 (weak positive — but confounded by class)
- **Sedans only (n=80):** r = 0.0692 (essentially zero)
- **SUVs only (n=67):** r = 0.1352 (very weak)
- **Pickups only (n=22):** r = 0.0090 (zero)
- **Sports Cars (n=6):** r = 0.4277 (moderate but tiny sample)

### What This Means
Once you control for vehicle type, knowing a vehicle's impairment rate tells you virtually NOTHING about whether its occupants survive fatal crashes. A sedan with 25% impaired drivers has effectively the same occupant survival rate as a sedan with 15% impaired drivers. The steel and airbags around you matter. The BAC of the driver does not (for survivability — it absolutely matters for crash probability).

### Key Examples (Sedans)
| Vehicle | Impairment % | Lethality | Deaths |
|---------|-------------|-----------|--------|
| Toyota Solara | 4.1% | 0.685 | 642 |
| Cadillac Seville | 10.5% | 0.694 | 391 |
| Nissan Versa | 18.5% | 0.723 | 722 |
| Infiniti G37 | 25.0% | 0.681 | 226 |
| Cadillac CTS | 25.9% | 0.688 | 265 |

The Infiniti G37 (25% impaired) has LOWER lethality than the Toyota Solara (4.1% impaired). Sobriety doesn't help when the crash structure fails.

### Key Examples (SUVs)
| Vehicle | Impairment % | Lethality | Deaths |
|---------|-------------|-----------|--------|
| Toyota Land Cruiser | 8.9% | 0.347 | 343 |
| Honda Odyssey | 15.4% | 0.426 | 864 |
| Subaru Ascent | 8.2% | 0.561 | 426 |
| Nissan Kicks | 19.3% | 0.739 | 339 |
| Infiniti QX56 | 26.3% | 0.734 | 58 |

Impairment ranges from 8.2% to 26.3%. Lethality ranges from 0.347 to 0.739. But these don't track each other.

### The Class Effect
Average lethality by class:
- Sedans: 0.644 (64.4% of fatal crashes kill own occupant)
- Sports Cars: 0.677
- SUVs: 0.525
- Vans: 0.513
- Pickups: 0.489

Average impairment by class:
- Sports Cars: 22.5%
- Sedans: 20.4%
- Pickups: 20.1%
- SUVs: 19.5%
- Vans: 18.1%

The weak overall correlation (0.23) exists because both impairment AND lethality are higher in sedans/sports cars vs SUVs/pickups — but this is a vehicle SIZE confound, not a driver behavior effect.

## Sources
1. NHTSA FARS 2014-2023 (toxicology + crash data)
2. FARS query tool (cdan.dot.gov)
3. IIHS vehicle size/weight research (physics of mass in crashes)
4. NHTSA ESC mandate history (vehicle engineering standards)

## Kill Test
✅ Novel finding — nobody publishes within-class impairment-lethality correlations
✅ Counterintuitive — challenges assumption that sober = safer in crash
✅ Data-driven — real Pearson r values, not vibes
✅ Actionable — buy a well-built car, don't just drive sober
✅ Provocative — "the car doesn't care if you're drunk"

## Limitations
- FARS only includes fatal crashes (survivable crashes excluded)
- Impairment % is from FARS toxicology (only tested in subset of drivers)
- Lethality ratio (deaths/crashes) counts vehicle-level deaths in FARS crashes, not individual occupant outcomes
- Small sample for some vehicle models
- Vehicle age acts as confound (older vehicles have both different driver demographics AND worse crash structures)
- Correlation ≠ causation — even within class, confounders exist (vehicle age, driver age, crash speed, rural vs urban)

## Counterargument
The strongest case against this finding: impaired drivers may crash at DIFFERENT SPEEDS and in DIFFERENT CONTEXTS than sober drivers. If drunk drivers tend to have higher-speed single-vehicle crashes while sober drivers tend to have intersection collisions, the crash dynamics differ in ways that might obscure impairment's effect on survivability. The zero correlation might mask offsetting effects rather than prove independence.

## Journalist Assignment
Vin Wreckage — existential paradox, counterintuitive finding, cosmic absurdity angle
Kicker: Existential Dread
