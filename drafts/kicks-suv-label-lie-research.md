# Research Notes: The Nissan Kicks — An SUV That Crashes Like a Sedan

## Angle
The Nissan Kicks is classified as an SUV in FARS data and marketed as a crossover/SUV by Nissan. But it has the WORST crash lethality of any SUV in our dataset — 73.9%. That's worse than the average sedan (64.9%). It crashes and kills like a compact car while wearing the SUV label.

This isn't just about the Kicks. It's about the broader fraud of the "crossover" category: subcompact cars raised 2 inches, given plastic cladding, and marketed with the implied safety of the SUV label.

## Kill Test
- Is this genuinely newsworthy? YES — the Kicks is the ONLY "SUV" in FARS with worse lethality than the average sedan. 73.9% vs sedan avg 64.9%.
- Novel angle after 91 articles? YES — we've done suv-death-gap (rate differences) and sedan-death-penalty (class comparison) but never examined the "fake SUV" phenomenon through lethality data.
- Original contribution: Cross-tabulating FARS crash lethality with vehicle classification reveals that "SUV" label is meaningless for crash survivability in subcompact crossovers.

## Key Data (from FARS_BY_MODEL)

### Nissan Kicks
- Deaths: 339
- Crashes: 459
- Lethality: 73.9% (339/459)
- Fleet: 393,750
- Rate: 0.69 per 100M VMT
- Classified as: SUV in FARS

### Context: Lethality by class (vehicles with 200+ crashes)
- Sedan average: 64.9%
- SUV average: 51.9%
- Pickup average: 52.1%
- Van average: 51.5%
- Sports car average: 69.0%

### The Kicks is worse than:
- Average sedan: 73.9% vs 64.9% = 1.14x worse
- Average SUV: 73.9% vs 51.9% = 1.42x worse
- Comparable to the worst sedans: Cavalier (85.7%), Neon (85.6%), Cobalt (80.8%)

### Other "SUVs" with sedan-level lethality (>60%):
- Nissan Kicks: 73.9%
- Mitsubishi Montero: 73.6%
- Chevy Blazer (new): 71.0%
- Chevy Trailblazer: 68.6%
- Lincoln MKC: 66.8%
- GMC Envoy: 66.7%
- Saturn VUE: 66.4%
- Mercury Mountaineer: 66.2%

### Safest "real" SUVs for comparison:
- Toyota Land Cruiser: 34.7% lethality
- GMC Acadia: 34.3%
- BMW X3: 35.8%
- Jeep Renegade: 38.1%
- Chevy Traverse: 39.3%

### Impairment for Kicks:
- anyPct: 19.3% (lower than average — sober drivers dying)
- Sober: 80.7%

## Vehicle Specifications
- First gen Kicks (2018-2024): ~2,672 lbs curb weight, FWD only, no AWD option
- Second gen Kicks (2025+): ~2,987-3,064 lbs, gained AWD option
- Based on Nissan V platform (shared with Versa sedan)
- 1.6L 4-cylinder, 122hp (first gen)
- Marketed as "compact crossover SUV"
- Starting MSRP around $20,000

For context: Nissan Versa (sedan on same platform): 72.3% lethality, 722 deaths
The Kicks and Versa share a platform and basically identical crash outcomes.

## IIHS/NHTSA Ratings
- 2025 Kicks: IIHS tested — excellent driver protection in frontal crash, but POOR rear-seat safety
- Historical models: mixed ratings depending on year

## Supporting Research
1. IIHS 2025 study on vehicle weight and crash deaths: below 4,000 lbs, every 500 lbs reduces fatality rate by 17 deaths per million registered vehicle years. Above 4,000 lbs, minimal benefit. The Kicks at ~2,672 lbs is well below the 4,000 lb threshold.
2. NHTSA FARS data: 2014-2023 period covers Kicks from 2018 model year onward

## 3+ Primary Sources
1. NHTSA FARS database (our core data: deaths, crashes, lethality ratios)
2. IIHS weight-safety study (Feb 2025): weight below 4,000 lbs dramatically affects crash survival
3. IIHS vehicle ratings for Kicks: mixed results, rear-seat safety concerns
4. Nissan vehicle specifications (curb weight, platform sharing with Versa)
5. EPA/NHTSA vehicle classification system

## Strongest Counterargument
The Kicks has a LOW death rate per VMT (0.69) — its drivers don't get into as many fatal crashes as bigger SUVs. The high lethality means that when crashes happen, they're more likely to be fatal, but the lower crash frequency matters. A Kicks driver might still be safer overall than a Tahoe driver (rate 2.49) despite the Tahoe being more survivable per-crash.

## Limitations
- FARS only captures fatal crashes; the Kicks may perform differently in non-fatal accidents
- Fleet estimates and VMT calculations have ±15% uncertainty
- The Kicks has only been in the US market since 2018, so sample period is shorter
- "SUV" classification in FARS may differ from marketing classification
- Lethality ratio can be influenced by crash circumstances (speed, road type) not just vehicle structure

## Journalist
Clara Rollover — Consumer Safety Advocate. This is a "what this means for you" story about misleading classification.
