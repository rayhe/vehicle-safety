# Research Notes — #904: Whose Funeral Is It? Occupant Lethality per Fatal Crash

**Slug:** 904-whose-funeral-fatal-crash-lethality
**Journalist:** Vin Wreckage (Existential Dread columnist) — paradoxes, counterintuitive findings, the big picture
**Kicker:** Existential Dread
**Number:** 904
**Date:** 2026-09-14

## Angle (1-2 sentences)
FARS counts two things per nameplate: fatal crashes involving it, and occupants of it who died. Divide the second by the first and you get a number nobody on this site has computed: given a crash was already fatal, how often was the body one of YOUR car's occupants? For a Saturn S-Series it's 92.4%. For a Ram 2500 it's 20.5%. Survival, it turns out, is a zero-sum transfer: the truck lives because someone else dies.

## Kill test
- **Novel?** YES. Grep for "lethality per crash" / "deaths per fatal crash" / "death sentence" across 800+ stories and drafts: no hits. The site has run rates (deaths per 100M VMT), impairment rates, and raw body counts, but never the occupant-deaths-per-fatal-crash ratio by nameplate.
- **Newsworthy?** No news peg — this is a data piece, a house genre (cf. #52, #897, "Bestseller Safety Paradox"). The finding is the peg.
- **Surprising?** YES. The spread is 4.5x. The Land Cruiser twist is genuinely counterintuitive: it has the worst per-VMT fatality rate on the board (6.27) while its own occupants survive 65% of its fatal crashes — it "survives" by killing others. The Corvette (88.4%) vs the Land Cruiser (34.7%) is the physics of mass stated as a funeral seating chart.
- **Vin-appropriate?** "We're all going to die, but statistically some of us sooner" is his whole beat. Proceed.

## Primary sources
1. NHTSA, Fatality Analysis Reporting System (FARS) 2014–2023, via the site's `fars_output.js` (337 nameplates, 50+ deaths or >1k annual sales). Crashes = fatal crashes involving the nameplate; deaths = occupants of that nameplate killed. Ratio computed directly. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars ; query tool https://cdan.dot.gov/query
2. IIHS, "Vehicle size and weight" — the physics grounding: heavier vehicles protect their occupants and increase risk to others. https://www.iihs.org/topics/vehicle-size-and-weight
3. IIHS, fatality statistics topic page (methodology context). https://www.iihs.org/topics/fatality-statistics

## Original computation (the novel contribution)
`occupant lethality = deaths / fatal crashes involving the nameplate` (2014–2023). This is NOT "probability of dying in a crash" (FARS has no nonfatal crashes). It answers: given a crash was already fatal, what share of the time was the fatality one of your car's occupants?

**The death-sentence tier (occupant dies in ~9 of 10 of the nameplate's fatal crashes):**
| Nameplate | Fatal crashes | Occupant deaths | Lethality |
|---|---|---|---|
| Saturn S-Series | 184 | 170 | 92.4% |
| Chevrolet Aveo | 155 | 138 | 89.0% |
| Chevrolet Corvette | 362 | 320 | 88.4% |
| Buick Park Avenue | 110 | 97 | 88.2% |
| Ford Escort | 65 | 57 | 87.7% |
| Toyota Echo | 64 | 55 | 85.9% |
| Dodge Neon | 703 | 602 | 85.6% |
| Chevrolet Cavalier | 1,429 | 1,225 | 85.7% |

**The survivor tier (occupant dies in ~1 of 3 or fewer):**
| Nameplate | Fatal crashes | Occupant deaths | Lethality |
|---|---|---|---|
| Ram 2500 | 748 | 153 | 20.5% |
| Ford Transit | 577 | 178 | 30.8% |
| Acura TLX | 109 | 33 | 30.3% |
| Audi Q5 | 146 | 47 | 32.2% |
| Mercedes ML-Class | 123 | 40 | 32.5% |
| Ram 1500 | 2,095 | 714 | 34.1% |
| Toyota Land Cruiser | 988 | 343 | 34.7% |

**Familiar benchmarks:** Honda Accord 64.4% (11,021 crashes / 7,102 deaths), Toyota Camry 59.3%, Honda Civic 68.1%, Ford F-150 45.8%, Chevrolet Silverado 48.6%.

**Impairment cross-tab (behavior does NOT explain the spread):** FARS toxicology — any-impaired share of tested drivers: Saturn S 19.2%, Cavalier 22.4%, Neon 23.2%, Ram 2500 19.7%, F-150 18.9%, Accord 20.0%, Corvette 26.2% (the lone outlier, and only partly). Class-level: sports car 22.5% vs sedan 20.4% vs pickup 20.1%. The impairment gap between the deadliest and safest nameplates is a rounding error; the lethality gap is 4.5x. This is physics and vehicle age, not the bottle.

**The Land Cruiser paradox:** 6.27 deaths/100M VMT — the highest per-VMT rate in the dataset — yet only 34.7% occupant lethality. A Land Cruiser's fatal crash kills people; it just usually kills the other people. Mass transfers the funeral across the lane line.

## Limitations (must state in article)
- FARS records fatal crashes only. This metric cannot answer "how likely am I to die in a crash" — that denominator (all crashes, including fender-benders) is invisible here. It answers only: given the crash was fatal, whose occupants died.
- Crashes = fatal crashes *involving* the nameplate, including multi-vehicle crashes where the other party died. A low ratio partly reflects being the surviving party, not being crash-proof.
- Small samples: Ford Escort (57 deaths), Toyota Echo (55), Acura TLX (33) carry wide uncertainty. The tier rankings are robust for high-volume nameplates (Cavalier 1,225 deaths, Neon 602, F-150 9,194).
- Confounds: the death-sentence tier is old (Saturn S, Neon, Cavalier, Aveo all discontinued 2002–2005), light, and cheap — minimal safety tech, driven disproportionately by young drivers as beaters. The survivor tier is heavy AND new (Ram 2500, Transit, TLX, Q5). Mass and modernity are entangled; this ratio does not disentangle them.
- Commercial-use bias: Transits and Ram 2500s log highway/work miles surrounded by other people's mistakes, inflating the "someone else died" side of the ratio.

## Strongest Counterargument (must state at full strength)
This is mostly a restatement of what IIHS proved twenty years ago: mass wins, and it wins twice — once by protecting you, once by killing them. The novelty is the per-nameplate quantification, not the physics. And the moral framing cuts both ways: a Ram 2500's 20.5% is not a safety achievement, it is an aggressivity statistic. Your truck surviving its own fatal crashes four times out of five means four funerals that belong, in some sense, to your truck. The beater-tier cars look like death traps partly because they are driven by the drivers with the least to spend on tires, brakes, and sobriety-adjacent life choices — the car is a proxy for the driver, and the driver for the crash.

## Actionable Insights (required)
- If you drive a 2000s compact beater (Neon, Cavalier, Aveo, Saturn S): its fatal crash is your fatal crash, ~9 times out of 10. The one lever you fully control is crash avoidance — speed, following distance, tire condition — because the car has no second line of defense to offer you.
- Shopping used: the ratio rewards heavier AND newer. A 2020s vehicle with modern crash structure beats a 2000s one of any size.
- If you drive a heavy truck or big SUV: your survival odds come partly from other people's bodies. Drive like it.
- Check your VIN at nhtsa.gov/recalls — no structural advantage survives a defective airbag or a recalled brake booster.

## References
1. NHTSA, *Fatality Analysis Reporting System (FARS)*, 2014–2023. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS query system (CDAN). https://cdan.dot.gov/query
3. IIHS, "Vehicle size and weight." https://www.iihs.org/topics/vehicle-size-and-weight
4. IIHS, "Fatality statistics." https://www.iihs.org/topics/fatality-statistics
5. NHTSA recalls database (VIN lookup). https://www.nhtsa.gov/recalls
