# Research: #1300 — Tesla FSD Vallejo I-80 Pedestrian Death

**Slug:** 1300-tesla-fsd-vallejo-i80-pedestrian-death
**Journalist:** Mia Crumplezone (Safety Engineering Editor — what happens in the first 150 milliseconds; the detection-and-braking question is hers)
**Kicker:** The Gap
**Date researched:** 2026-10-27

## Kill test
PASS, three ways. (1) Fresh: the crash happened October 22, 2026, five days before this draft, and the CHP investigation is still open. (2) Not a duplicate: the queue covers the October 13 Fairfield asleep-driver CHP crash (#1225), the cabin-camera probe (#875), and drowsiness detection (#968), but zero entries mention Vallejo (grepped status.json 2026-10-27: 0 hits). This is a different crash, a different failure mode, and a fatality, not a patrol-car strike. (3) Novel angle for this site: the Tesla did stop, or tried to. CHP's own account says the car braked and steered left. The man still died, and then at least one more driver hit him and kept going. The story is not "robot drives into person." It is the gap between a supervised system reacting and a 70-mph freeway at 2:30 a.m. giving nobody, human or machine, enough road to matter, plus a second driver who fled a body in the lanes.

## Verified facts (3+ primary/primary-adjacent sources)
1. **Crash:** About 2:34 a.m., Thursday, October 22, 2026, westbound I-80 at the I-780 interchange, Vallejo, California. A 71-year-old man from Vallejo was crossing from the right shoulder toward the center divider when a Tesla struck him. He was pronounced dead at the scene. Sources: CHP Solano Area statement as reported by San Francisco Focal (Oct 22), RR Tech Pulse (Oct 22), Land Line Media (Oct 27, citing LA Times).
2. **Vehicle and driver:** White Tesla sedan, 26-year-old San Francisco man, traveling about 70 mph in the No. 2 lane. The driver stayed at the scene, cooperated, and handed over dashcam footage. The driver stated the vehicle was operating in Tesla Full Self-Driving (FSD) mode. CHP has NOT confirmed FSD was engaged; that is the driver's statement, not an investigator finding. Model, model year, and software build unreported. Sources: CHP statement via RR Tech Pulse, Focal, FemaleFirst, trendintech.
3. **What the video shows:** CHP preliminary review: the Tesla's brakes were applied and the car steered left in an effort to avoid the pedestrian; despite that, the right front struck him. Quote from CHP: "The video showed the Tesla's brakes being applied as the vehicle steered to the left in an effort to avoid the pedestrian. Despite these evasive actions, the right front portion of the Tesla struck the individual." Sources: CHP via Focal, FemaleFirst, RR Tech Pulse.
4. **Second impact, hit-and-run:** At least one more vehicle struck the man while he lay in the traffic lanes. No other driver stopped. The additional vehicle and driver are unidentified. CHP Solano Area asks witnesses to call 707-639-5600. Sources: CHP via Focal, RR Tech Pulse, FemaleFirst.
5. **Pattern on the same highway:** Nine days earlier, October 13, 2026, on I-80 in Fairfield, a 22-year-old driver told CHP he was asleep with FSD engaged when his Tesla drove through a coned freeway closure and struck a parked CHP Charger, seriously injuring two officers. CHP reiterated after both crashes that FSD is not fully autonomous and the driver remains responsible. In September 2026, another driver was cited for sleeping at 60 mph with FSD engaged in Solano County. Sources: Land Line Media (Oct 27), #1225 research (Electrek Oct 16), tl;dr daily news (Oct 22).
6. **Product definition:** Tesla's own product is FSD (Supervised), a driver-assist feature that requires a fully attentive driver and escalating warnings. It is not autonomous driving, whatever the name suggests. Sources: Tesla support page via Land Line Media, trendintech.

## What this article must NOT claim
- That FSD was engaged. Only that the driver stated so; CHP has not confirmed it.
- That FSD failed to detect the pedestrian. The video shows braking and swerving; detection timing and system state are unknown pending logs.
- That the Tesla killed him alone. A second vehicle also struck him; causation between impacts is undetermined.
- The pedestrian's reason for crossing the freeway. CHP says it is still establishing why he was crossing.
- Any speed beyond "about 70 mph" (CHP preliminary review) or any model/year/software version. All unreported.

## Actionable takeaways for readers
- If you use FSD (Supervised): it is supervised. At 70 mph you cover 103 feet per second; a pedestrian stepping off a shoulder at night leaves no margin for a system that still needs you watching. Hands on, eyes up, especially at night on freeways, where pedestrians should not be but sometimes are.
- If you drive at night and see a stopped car or a body-shaped object in the lanes: slow down before you reach it. The Vallejo driver who kept going is now a hit-and-run suspect; the Tesla driver who stopped is a witness. Which one you are is decided in about two seconds.
- If you witness a freeway crash: call 911 first, do not stop in a travel lane to gawk, and note plate and direction of any vehicle that leaves. CHP's witness line for this crash is 707-639-5600.
- Never cross a freeway on foot. If your car breaks down on a freeway shoulder at night, stay in the car with hazards on or get behind the guardrail and call for help; walking across live lanes at 2:30 a.m. is close to unsurvivable at any speed.

## Sources
- California Highway Patrol, Solano Area, statement on Oct 22, 2026 Vallejo I-80 fatal crash, via San Francisco Focal (Oct 22, 2026): https://focalnews.org/san-francisco-ca/local/pedestrian-killed-after-tesla-collision-on-i-80-near-vallejo-interchange
- RR Tech Pulse, "Tesla Full Self-Driving Vallejo I-80 death" (Oct 22, 2026), quoting the CHP statement: https://rrtechpulse.com/stories/tesla-full-self-driving-vallejo-pedestrian-death-chp/
- Land Line Media, "Tesla 'Full Self-Driving' crashes pile up in California" (Oct 27, 2026), citing LA Times and CHP: https://landline.media/tesla-full-self-driving-crashes-pile-up-in-california/
- FemaleFirst, "Tesla driver claims Full Self-Driving mode was active in fatal pedestrian crash" (Oct 2026), quoting CHP: https://www.femalefirst.co.uk/motoring/tesla-driver-claims-full-self-driving-mode-active-fatal-pedestrian-crash-1452595.html
- trendintech, "Tesla Driver Cites FSD in 70 MPH I-80 Fatal Crash" (Oct 2026): https://trendintech.com/tesla-fsd-driver-claim-vallejo-i-80-pedestrian-death-2026/
- NHTSA FARS: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
- NHTSA recalls database: https://www.nhtsa.gov/recalls
- IIHS vehicle ratings: https://www.iihs.org/ratings
