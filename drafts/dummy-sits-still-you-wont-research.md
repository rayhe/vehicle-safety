# Research: The Crash Test Dummy Sits Perfectly Still. You Won't.

## Angle
Every crash test rating in the world — IIHS, Euro NCAP, NHTSA NCAP — places the dummy upright, centered, hands in lap, zero motion at the moment of impact. But in real crashes involving AEB-equipped vehicles, the occupant has already been lurched forward by emergency braking (up to 1g for 0.5+ seconds) before the crash occurs. Forward head excursions during AEB braking can reach **400mm** (nearly 16 inches). The crash test evaluates a seated position that no longer exists in real-world AEB crashes.

AEB is a massive net positive. But the testing protocol is split: pre-crash and crash phases are evaluated independently by every major regulatory body. No crash test in the world places the dummy in the position AEB puts you in before testing whether the airbag and seatbelt protect you.

## Key Sources

### Source 1: Chalmers/SAFER Study (Frontiers in Future Transportation, 2022)
- **Title:** "Effects of Automated Emergency Braking and Seatbelt Pre-Pretensioning on Occupant Injury Risks in High-Severity Frontal Crashes"
- **URL:** https://www.frontiersin.org/journals/future-transportation/articles/10.3389/ffutr.2022.883951/full
- **Key findings:**
  - At 80 km/h (50 mph), WITHOUT AEB: 100% risk of 2+ rib fractures (NFR2+) for both 45- and 65-year-old males; 71.3% concussion risk
  - WITH AEB (0.5s braking, speed reduced to 69 km/h): rib fracture risk substantially reduced; concussion risk dropped to 31%
  - AEB caused up to 160mm forward head displacement before impact
  - Seatbelt pre-pretensioning (PPT) reduced rib fractures further but INCREASED concussion risk slightly — higher PPT forces delayed first airbag contact, causing highest airbag pressures
  - Used SAFER Active Human Body Model (not standard crash test dummy) with active musculature
  - Critical quote from literature review: "During emergency maneuvers, occupants' forward head excursions can reach up to 400 mm, although there is substantial variability"
  - "Restraint systems adapting to these posture changes may prevent the likelihood of injuries"

### Source 2: SAE Paper 2026-26-0019 (January 2026)
- **Title:** "Integrated Evaluation of Pre-Crash Braking and Crash Injury Outcomes Using Human Body Models and ATDs"
- **Key findings:**
  - "Traditionally, occupant safety research has centered on passive safety systems such as seatbelts, airbags, and energy-absorbing vehicle structures, all designed under the assumption of a nominal occupant posture at the moment of impact"
  - "The induced occupant movement leads to out-of-position behavior (OOP), compromising the available survival space phase and effectiveness of passive restraint systems during the crash"
  - "Despite these evolving real-world conditions, global regulatory bodies and NCAP programs continue to evaluate pre-crash and crash phases independently, with limited integration"
  - Standard Hybrid III dummies "lack the bio-fidelity necessary to capture human-like kinematics during pre-crash braking events involving low g"
  - Hybrid III dummies "do not simulate the spinal articulation, posture adjustments and active muscle contraction that occur during emergency maneuvers or pre-crash scenarios"

### Source 3: Oxford Academic / Transportation Safety and Environment
- **Title:** "Investigation of the driver injury risks in small overlap impact with automatic emergency braking"
- **Key findings:**
  - "At the onset of the crash, the occupant's head was leaning forward by approximately 188 mm" due to AEB
  - AEB causes "chest to make premature contact with the airbag" — when the airbag deploys, it hits a chest that's closer than expected
  - "Combined with the restraint from the seatbelt, these two factors contribute to increased thoracic compression for the occupant"
  - But overall ride-down efficiency improves, reducing total energy transferred

### Source 4: Nature/Scientific Reports — "Study of AEB and active seat belt on driver injury in vehicle–vehicle frontal oblique crash"
- **Key findings:**
  - "In the pre-crash phase, all AEB control strategies led to a dislocated state of the driver"
  - Active seatbelts "significantly reduced the driver's head and thorax displacements by 49.2% and 66.6%, respectively"
  - 20ms delay in airbag ignition time minimized injury (38.7% decrease), suggesting airbag timing needs to account for OOP

### Source 5: SAE Paper 2026-01-0556 (COUNTERPOINT — contradicts others)
- **Title:** "Study of Automatic Emergency Braking Effects on Belted Human and Surrogate Passengers"
- **Key findings:**
  - Tested REAL vehicles with actual AEB braking events from 15-50 mph
  - Used Hybrid III dummies AND human volunteers
  - "AEB only events with the subject vehicle did not result in any ATD or volunteer motion that would have placed the occupants out of position (OOP)"
  - BUT: this tested ONLY AEB-only events (no subsequent impact). The question is what happens when AEB brakes hard and THEN a crash occurs

### Source 6: IIHS Updated Front Crash Prevention Test (January 2025)
- Updated AEB test now runs at 31, 37, and 43 mph with multiple targets
- 77% of 2026 models meet the standard
- But this tests AEB's ability to avoid/reduce crashes — NOT what happens to the occupant's body position before impact
- The crash test and the AEB test are still separate evaluations

### Source 7: NHTSA FMVSS 127 (AEB Mandate, September 2029 deadline)
- Will require AEB on all new light vehicles by September 2029
- Projected to save 360 lives/year
- Rule focuses on AEB performance criteria, NOT on integrating occupant position with crashworthiness testing

## FARS Cross-Reference
From fars_output.js — vehicles with newer model years (which have standard AEB) vs. older:
- This can't isolate AEB's contribution since newer vehicles have better crashworthiness overall
- But the implication: if passive safety testing accounted for AEB-induced OOP, the improvement from AEB might be even larger
- The gap between "tested" and "real" crashworthiness is widest in vehicles that most aggressively deploy AEB pre-crash braking

## The Story
The paradox: AEB prevents crashes. When it can't prevent them, it reduces severity by lowering impact speed. But it also moves you forward — sometimes 188mm, sometimes up to 400mm — before the crash you couldn't avoid. The airbag was designed for a chest that's 188mm further back. The seatbelt load-limiter was tuned for a pelvis that's centered. The safety rating you read was earned by a dummy sitting still.

No crash test in the world accounts for this. The researchers know. The SAE published three papers on it in 2026 alone. But NHTSA's FMVSS 127 (the AEB mandate coming in 2029) doesn't address integrated testing either. Neither does Euro NCAP. Neither does IIHS, whose updated moderate overlap test still seats the dummy in the nominal position before impact.

The fix exists: seatbelt pre-pretensioning can pull you back before impact. Some vehicles already have it. But PPT introduces its own problem — in the Chalmers study, higher PPT forces increased concussion risk because they delayed the occupant's first contact with the airbag, causing higher airbag pressures.

## Original Finding
Every regulatory body in the world evaluates a crash dummy in a position that AEB-equipped vehicles' occupants are never in at the moment of impact. Three SAE papers from 2026 identify this as a gap. No testing protocol addresses it. By 2029, when AEB is mandatory on every new car, the gap between "tested position" and "actual position" will apply to every vehicle sold.

## Journalist
Vin Wreckage — existential dread angle, paradox-driven

## Kicker
"The Gap" or "Investigation"
