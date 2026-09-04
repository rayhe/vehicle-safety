# Research notes — #812: Tesla Cybercab (no steering wheel) carrying passengers while NHTSA "evaluates"

Slug: `tesla-cybercab-no-steering-wheel-nhtsa-evaluating`
Journalist: Clara Rollover (consumer safety advocate; kicker: The Gap)
Date: 2026-09-03

## Kill test
PASS. Same-day news (Sept 3, 2026): Tesla began offering public rides in Austin in a production vehicle with no steering wheel, no pedals, and no mirrors, and the federal safety regulator's entire public position is "evaluating the situation." Novel angle for the site: no existing Cybercab coverage (grep: zero), and the story is not "robotaxi crashes" (cf. #772, teleoperation) but the regulatory vacuum — a car that deletes the very controls the Federal Motor Vehicle Safety Standards were written around, self-certifying compliance with standards that cannot meaningfully apply to it, while carrying passengers. Consumer question at the core: who crash-tests a car with no steering wheel, and who do you call when there is no driver?

## Primary sources
1. Reuters, "Tesla starts Cybercab rides in Austin, prompting US safety agency evaluation," Sept 3, 2026. https://www.reuters.com/business/autos-transportation/teslas-cybercab-event-set-thursday-with-few-details-2026-09-03/
   - Rides offered in "limited areas of Austin, Texas" starting Thursday Sept 3, 2026; vehicle has no steering wheel or pedals.
   - NHTSA spokesperson: "NHTSA is in contact with Tesla and is evaluating the situation," no elaboration.
   - Federal regulations limit the number of vehicles any manufacturer can sell without steering wheel/pedals; unlimited deployment allowed for testing, but testing status limits ability to collect fares. Tesla did not specify whether Cybercab rides are charged.
   - Texas records: Tesla had 420 autonomous vehicles registered in Texas as of Sept 2 evening, including 45 Cybercabs (up from 314 total earlier Wednesday). Waymo: 988 in Texas.
   - Production began April 2026; Musk says Cybercab will eventually be Tesla's largest-volume vehicle; $1.4T market value underpinned by robotaxi ambitions.
   - Robotaxi pilot launched Austin June 2025, expanded to a handful of TX/FL cities; service often limited to outlying areas.
   - California: Tesla has no permits to operate robotaxi service or test driverless vehicles without a safety driver who can take over in the front seat.
2. Reuters, "US auto safety regulator says evaluating Tesla's Cybercab rollout," Sept 3/4, 2026. https://www.reuters.com/technology/us-auto-safety-regulator-says-evaluating-teslas-cybercab-rollout-2026-09-04/
   - Confirms: two-seater without steering wheel, pedals, or mirrors — "features that federal safety norms typically require."
3. Electrek, "Tesla Cybercab: mass-producing a car it can't sell or drive itself," July 6, 2026. https://electrek.co/2026/07/06/tesla-cybercab-production-before-autonomy/
   - 100+ steering-wheel-less units spotted in Giga Texas outbound lots; first unit off line February 2026; continuous production confirmed on Q1 2026 earnings call (April).
   - Key regulatory claim: Tesla designed the Cybercab to self-certify against all FMVSS, sidestepping NHTSA's 2,500-unit/year exemption cap for noncompliant vehicles.
4. CleanTechnica, "Tesla Cybercab with No Steering Wheel or Pedals Starts On-Road Testing, USA Standards Changing," June 30, 2026. https://cleantechnica.com/2026/06/30/tesla-cybercab-with-no-steering-wheel-or-pedals-starts-on-road-testing-usa-standards-changing/
   - NHTSA Administrator Jonathan Morrison (under Secretary Sean Duffy's AV Framework): "we have to reimagine our regulatory framework… NHTSA is tearing down pointless barriers to innovative designs while strengthening the fundamental safety requirements."
   - Early Cybercabs sent for testing carried temporary steering wheels/pedals because Tesla "couldn't legally send them out without some of these things" — now production units without controls are on-road in Austin.
5. Teslarati, "Tesla Cybercab fleet grows in Austin ahead of launch event" (early Sept 2026). https://www.teslarati.com/tesla-cybercab-fleet-grows-austin-ahead-launch-event/
   - Texas TxMCCS process: operators attest to SAE Level 4 capability, maintain insurance, keep active vehicle list; Cybercabs added under Tesla's existing Texas AV authorization for commercial use.
6. NHTSA press releases page (press-releases listing, crawled Sept 2026): July 30, 2026 — "Trump's Transportation Department Cuts Red Tape to Safely Fast-Track Automated Vehicle Innovation." https://www.nhtsa.gov/press-releases?pressReleasePage=0&pressReleaseYear=2013 (listing)

## Original contribution (the piece must discover, not just summarize)
- The FMVSS-assumption inventory: US auto safety regulation is a self-certification regime (manufacturers certify compliance; NHTSA spot-checks). Multiple FMVSS sections were written assuming a human driver with physical controls (steering — FMVSS 203/204; mirrors — FMVSS 111; pedals/controls placement — FMVSS 101). A vehicle that deletes all of them does not obviously "violate" these standards so much as render them inapplicable — which is precisely the gap: there is no steering-wheel-less crash-test protocol, no occupant-protection standard written for a passenger who can never take over.
- The fare paradox, quantified from Reuters: federal rules allow unlimited *testing* deployment but restrict *selling*/fare-collecting without-controls vehicles — yet Tesla's robotaxi website now offers the rides. Whether anyone pays is undisclosed. The business model the $1.4T valuation rests on (Musk: future largest-volume vehicle; owners adding cars to a Tesla-managed fleet) requires the fare question to resolve toward "yes."
- The ratio: 45 Cybercabs vs 988 Waymos registered in Texas — the steering-wheel-less future is currently outnumbered ~22:1 in its home state by a competitor that kept the wheel (Waymo's vehicles retain manual controls).

## Limitations (must state honestly)
- NHTSA has said nothing substantive beyond "evaluating"; we do not know its legal theory (exemption, reinterpretation, enforcement discretion, or nothing).
- Zero public crash/safety data exists for the Cybercab specifically; no claim about its actual safety performance can be made. The article is about the oversight gap, not the vehicle's crashworthiness.
- The Electrek self-certification claim is press reporting of Tesla's regulatory strategy, not a filed NHTSA document I verified.
- Texas TxMCCS registration details via Teslarati (enthusiast press), not the state registry directly.

## Strongest counterargument (state at full strength)
The US has never type-approved cars; every automaker self-certifies FMVSS compliance and NHTSA enforces after the fact — the Cybercab is playing by the same rules as a Camry. NHTSA's current AV Framework explicitly intends to modernize standards written for human drivers, and Texas law expressly authorizes commercial SAE Level 4 operation with insurance and registration. Waymo has carried paying passengers for years under the same federal regime. "Evaluating the situation" may be all the oversight this phase needs: 45 vehicles in limited Austin areas is a pilot, not a fleet, and over-regulating a pilot is how you guarantee the testing moves somewhere with fewer rules.

## Actionable takeaways (required)
- If you're offered a Cybercab ride: you are boarding a vehicle with no manual fallback — no wheel to grab, no pedal to stomp. Ask who the insurer of record is (Texas requires it) and what happens, specifically, when the system disengages mid-ride.
- The fare question matters to you directly: if Tesla charges, the "testing" rationale thins. Watch what NHTSA's "evaluation" produces — exemption grant, reinterpretation, or silence.
- General: NHTSA's complaint database (nhtsa.gov) accepts AV incident reports; if you ride one and something goes wrong, file — early pilots are where the data record gets built.

## Headline candidates
- "Tesla Is Now Carrying Passengers in a Car With No Steering Wheel. NHTSA's Response Is Two Words: 'Evaluating Situation.'"
- "The First Car With No Steering Wheel Is Taking Passengers. Nobody Has Crash-Tested What Happens Next."
- "45 Cybercabs, Zero Steering Wheels, One 'Evaluation': The Regulatory Gap Now Carrying Passengers in Austin"
