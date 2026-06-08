# Research: Brand Split FARS Phantom Rates

## Angle
When automakers rebrand or kill a marque, FARS data splits the death count between old and new brand names. This creates phantom safety improvements for the new brand and phantom death concentrations in the dead brand. Both rates are wrong.

## The Ram Split — Crown Jewel of the Artifact
- **Dodge Ram** (pre-2010 brand): 4,407 deaths, 10,110 crashes, fleet 4,200,000, VMT 56,700M, rate **0.78**/100M VMT
- **Ram 1500** (post-2010 brand): 714 deaths, 2,095 crashes, fleet 4,200,000, VMT 56,700M, rate **0.13**/100M VMT
- **Ram 2500**: ~149 deaths (from model year data)
- Combined Dodge+Ram deaths: 4,407 + 714 + 149 = ~5,270 deaths
- The Ram 1500's 0.13 rate makes it appear to be the **safest vehicle in the entire FARS dataset** — safer than the Toyota RAV4 (0.19), Honda CR-V (0.53), or any other high-volume vehicle
- This is a methodological artifact: Ram 1500 only captures 2013-2023 model years (newer, fewer accumulated fatality years), while the fleet denominator appears to use the same 4.2M estimate
- A combined rate would be somewhere around 0.78-0.93, which would rank the Ram/Dodge truck right alongside the Ford F-150 (1.04) and Chevy Silverado (1.25) — where it intuitively belongs

## Dead Brand Artifacts
Multiple brands died ~2010, all creating FARS ghosts:
1. **Pontiac** (died 2010): Grand Am 713 deaths, Grand Prix 970, G6 908, Sunfire 183, Vibe 493, Torrent 119, Montana van 149
   - Pontiac fleet is aging, accumulating deaths but NEVER getting new model years to dilute the rate
   - Creates a "condemned brand" effect where the rate only goes UP over time
2. **Saturn** (died 2010): VUE 662 drivers in tox data, ION 559, S Series 166, Aura 268
   - Saturn VUE was essentially reborn as the Chevy Captiva Sport — deaths transferred to Chevrolet's books
3. **Mercury** (died 2011): Grand Marquis 1,153 deaths, Mountaineer 370
   - Mercury Mountaineer ≈ Ford Explorer, Grand Marquis ≈ Ford Crown Victoria
   - Deaths before 2011 inflate Mercury's rates; equivalent Ford models absorb post-2011 deaths
4. **Oldsmobile** (died 2004): Alero, Intrigue, etc.
   - Smallest effect since it died earliest — most Oldsmobiles have aged out of the fleet
5. **Plymouth** (died 2001): Very early death, minimal FARS window overlap

## Original Contribution
Nobody has systematically quantified how brand splits distort FARS rate calculations. The Ram 1500 case is the most dramatic: it makes the deadliest vehicle class (full-size pickups) appear to contain the single safest vehicle in America. Any analysis ranking vehicles by FARS rate that doesn't combine Dodge Ram + Ram is publishing a methodological error.

## Quantification
- Ram 1500 "phantom safe" rate: 0.13 (appears 8x safer than F-150)
- Ram combined rate: ~0.78-0.93 (within normal range for class)
- Distortion magnitude: **6x overestimate of safety**
- Affected vehicle count: At least 15-20 models across Dodge/Ram, Pontiac/Chevy, Saturn/Chevy, Mercury/Ford, Olds/Chevy splits

## Limitation
We cannot fully separate the artifact from real safety improvement. The Ram 1500 IS a newer truck with better safety tech. Some rate improvement is genuine engineering. But the magnitude of the apparent improvement (0.13 vs 1.04 for the comparable F-150) far exceeds any plausible engineering gain.

## Strongest Counterargument
Modern pickup trucks genuinely ARE much safer than their predecessors. ESC mandated in 2012, structural improvements in 2019 Ram redesign, better crash geometry. The brand split doesn't create the safety difference — it just exaggerates it. A fair comparison would be 2013+ model year F-150s vs 2013+ Ram 1500s, not the all-time rates. 

Answer: True, but the FARS dataset doesn't offer that comparison cleanly. And the published rate (0.13) isn't being qualified as "2013+ model years only" — it's presented as the vehicle's overall death rate, misleading every consumer safety ranking that uses it.

## Sources
1. NHTSA FARS 2014-2023 bulk data (primary)
2. Ram brand separation from Dodge: effective 2010 model year (industry reporting)
3. Pontiac/Saturn/Mercury discontinuation dates (GM/Ford corporate announcements)
4. ESC mandate: FMVSS 126, phased 2008-2012 (NHTSA final rule FR-2007-06-22)

## Journalist
**Axle McScatter** — Data Visualization Editor. This is pure methodology — right in his wheelhouse. His voice: obsessed with getting the numbers right, slightly frustrated that nobody else noticed, will show the math.

## Kill Test
✅ Genuinely novel — no other publication has quantified brand-split FARS distortion
✅ Actionable — readers can check if any "safest vehicle" ranking is affected
✅ Data-driven with specific numbers
✅ Challenges a commonly cited metric (per-VMT death rate)
✅ Not just a data dump — identifies a systemic measurement problem
