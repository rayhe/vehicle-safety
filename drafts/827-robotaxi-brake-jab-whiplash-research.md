# Research: #827 — Robotaxi Brake Jabs Are Injuring the Humans Inside

## Angle (kill test)
TechCrunch (Aug 27, 2026) reviewed OSHA Injury Tracking Application data: Waymo and Zoox test drivers sustained **more than two dozen injuries in 2024-2025** from hard braking / sudden autonomous maneuvers — sprains, strains, whiplash, some sidelined for months. The Crash Report's original contribution: **the robotaxi's signature safety behavior (brake for anything, including phantoms) transfers injury risk from pedestrians to occupants**, and the surveillance system that caught this (OSHA) goes blind the moment the safety driver is removed — which is the entire business model. Paradox headline: the 68%-safer-than-humans car gives its own drivers whiplash.

Site coverage check (2026-09-06): no story covers test-driver/safety-driver injuries. `waymo-68-percent-denominator-problem.html` covers the IIHS crash-rate study (0 mentions of test/safety driver). `zoox-105-fleet-smoke-recall.html` is a different recall. `occupant-pedestrian-zero-sum.html` is about truck mass vs pedestrians, not AV braking. CLEAR.

## Verified facts

### TechCrunch, Aug 27, 2026 — "Sprains, pain, and whiplash: Waymo and Zoox test drivers are getting hurt as robotaxis scale" (Sean O'Kane)
- Test drivers for Waymo and Zoox sustained **more than two dozen injuries in 2024 and 2025** from hard braking or other sudden movements, per TechCrunch review of data submitted to OSHA.
- Injuries: sprains, strains, whiplash. Some sidelined for weeks or months.
- **Transdev** (employs/manages Waymo's test drivers): **16 injuries** tied to Waymo depot locations in three cities, caused by autonomous software braking hard or swerving suddenly.
- **Zoox**: **as many as 8 worker injuries** linked to hard braking.
- Other AV companies do not appear in the dataset (possibly exempt). Waymo/Zoox appear because they classify as taxi/limo/transit services — "higher-hazard" industries with greater OSHA disclosure. OSHA only requires establishments with **100+ employees** in these industries to make data public → injuries in newer/smaller markets are invisible.
- 2026 data unknown: OSHA does not require annual submission until the following year (Injury Tracking Application).
- Zoox contractors (2 current, 3 former, anonymous): hard braking ("**brake jabs**") still happening as of **July 2026**; workers still getting hurt. Brake jabs can happen multiple times per test drive, at any speed; often triggered by detected-or-misdetected debris. "Nogo" = internal code for full system shutdown, often leads to a brake jab. "You could be going 45 miles per hour and the car will enact a nogo, and suddenly you're being whipped forward in the middle of the street."
- Zoox declined specifics; said hard braking sometimes unavoidable, injuries a small percentage of millions of test miles. Waymo declined specifics; Transdev declined comment.
- Waymo 2024: **5 injuries** (SF, LA, Phoenix) — 1 hard braking, 4 erratic behavior. One: car "suddenly backed up" while self-parking, "whipped the steering wheel," bent driver's hand "to the point he heard a crack in his wrist" → **2+ months off work**.
- Waymo 2025: **11 injuries** in those three markets, nearly all hard braking. Sept 2025 Phoenix: "exaggerated braking event **without any obstruction**" → **157 days away from work**. At least two other reports: hard braking "for no apparent reason." Aug 2025 LA: "some kids were playing in the pathway" → hard stop → **175 days away from work**.
- Zoox Jan 5, 2025 SF: "harsh" stop → shoulder/upper arm injury → 16 days restricted duty. Later Jan 2025: "unexpected" stop → neck injury, swollen shoulder → 8 days. June 3, 2025 SF: instructor in back seat, "software braked harshly" → sharp rib pain, spine/pelvis injuries → 4 days restrictions.
- 7 of 8 Zoox entries mention hard braking/nogos/brake jabs. 8th: 46 days, "extreme back pain," Las Vegas May 2025, "vehicle maneuver," worker unsure if autonomy-related.
- **The blind spot**: "It's hard to know if Zoox is experiencing hard-braking incidents with any regularity in its purpose-built vehicles, which do not have traditional controls such as a steering wheel or pedals. They either operate unoccupied or carry passengers who mostly aren't employees — meaning any injuries wouldn't be reported to OSHA."
- Zoox reported **2 robotaxi crashes to NHTSA in the last 8 months** in which hard braking for debris resulted in the purpose-built vehicles being **rear-ended**. Debris unspecified in company descriptions.
- "Four of the injuries Zoox reported in 2025 happened **after** the company issued a recall meant to resolve a year-long federal investigation into the tendency of its autonomous vehicles to brake unexpectedly." Zoox: recall addressed an extremely narrow braking behavior; later incidents unrelated to the software fix.
- Zoox started **charging for rides** in its purpose-built robotaxi in Las Vegas in Aug 2026; free rides SF; testing Atlanta, Austin, Dallas, LA, Phoenix, Seattle, DC.
- Waymo fleet: 1,500+ vehicles May 2025 → 3,500+ (Aug 2026).
- URL: https://techcrunch.com/2026/08/27/sprains-pain-and-whiplash-waymo-and-zoox-test-drivers-are-getting-hurt-as-robotaxis-scale/

### Zoox recalls (NHTSA, primary)
- **March 2025**: Zoox recalled **258 vehicles** for unexpected hard braking, after NHTSA's May 2024 investigation (2 rear-end collisions injuring motorcyclists). Two defects: (1) bicyclist in/near adjacent crosswalk + newly green signal → software "reacted overcautiously and braked unnecessarily hard"; (2) motorcyclist/bicyclist rapidly approaching the rear → software "incorrectly anticipated a collision and braked unnecessarily hard." (Reuters, Mar 19, 2025)
- **May 2025 (NHTSA 25E-029)**: 270 vehicles — inaccurate prediction when another vehicle slowly approaches perpendicularly and stops; vehicle "may not be able to avoid a crash." https://static.nhtsa.gov/odi/rcl/2025/RCAK-25E029-8494.pdf

### IIHS Waymo crash-rate study (Aug 2026) — context + its own caveat
- Waymo: 68% fewer police-reportable crashes per VMT than human drivers (50M driverless miles vs 222B human miles, same places); 85% fewer single-vehicle crashes; 81% fewer injury crashes. (Covered in site story waymo-68-percent-denominator-problem.html.)
- IIHS President David Harkey: "the present data collection system isn't good enough to allow continuous monitoring of a large-scale expansion." — directly supports the surveillance-gap thesis.
- Waymo (Aug 2026): 217M fully autonomous miles → 16x fewer serious-injury crashes, 14x fewer injurious pedestrian crashes than humans (company claim).

### OSHA ITA mechanics (primary-ish)
- OSHA Injury Tracking Application: electronic submission of injury/illness data; "higher-hazard" industries (incl. taxi/transit) have greater disclosure; 100+ employee establishments required to submit. https://www.osha.gov/injuryreporting

## Original contribution
1. **The risk-transfer framing**: the same phantom-braking that makes AVs 68%-safer (braking for debris that may not exist, for kids near pathways, for misdetected crosswalk cyclists) is an injury mechanism for occupants. Every avoided pedestrian strike is purchased with occupant whiplash risk. Nobody has stated the trade-off this way.
2. **The surveillance paradox**: OSHA caught this only because test drivers are employees at 100+ person depots in "higher-hazard" classifications. The driverless end-state (no employee inside) removes the only sensor. The 2 NHTSA SGO rear-end crashes are the only remaining signal — and they capture vehicle damage, not occupant necks.
3. **The recall-failure observation**: 4 of Zoox's 8 2025 injuries came AFTER the March 2025 unexpected-braking recall; contractors say brake jabs continued through July 2026. The fix didn't fix it (Zoox disputes relatedness — stated fairly).

## Strongest counterargument (full strength)
Zoox's: injuries are a tiny fraction of millions of test miles; hard braking is sometimes unavoidable and beats the alternative — the LA driver who lost 175 workdays was stopped for "some kids playing in the pathway." A brake jab that bruises a test driver's ribs is the system working as designed; the alternative is a dead child. Human drivers also slam brakes. And test driving is inherently riskier than riding — these workers are professional guinea pigs in prototype vehicles, not representative of the passenger experience. The 68% crash reduction is real and dwarfs two dozen strains.

## Limitations
- OSHA data: only 100+ employee establishments in higher-hazard industries; 2024-2025 only; 2026 unknown until 2027 submission. Cannot compute per-mile injury rates (testing miles not public). Worker self-attribution ("not sure if related to autonomy").
- TechCrunch's review is the only public analysis of this OSHA slice; I did not independently pull the ITA dataset.
- Anonymous contractor claims (July 2026 ongoing injuries) are unverifiable.
- No FARS cross-tab possible: FARS captures fatal crashes; these are non-fatal occupational injuries.

## Actionable advice
- **Riders**: wear the seatbelt even in a robotaxi (especially the back seat — the Zoox instructor was a back-seat passenger); sit upright, don't lean against the door; expect phantom braking.
- **Regulators**: NHTSA's SGO should require occupant-injury reporting for driverless operations, not just crash damage; OSHA's 100-employee threshold misses new markets.
- **Everyone else**: the "68% safer" stat measures crashes per mile, not injuries per hard-braking event — different denominators, different stories.

## Methodology
No independent data pull. All counts (16 Transdev/Waymo, 8 Zoox, 157/175 lost workdays) are TechCrunch's reporting of OSHA ITA submissions, re-verified against the article text. Recall numbers from NHTSA documents. IIHS figures from the institute's published study via the site's prior coverage. No FARS computation (inapplicable).

## Sources
1. TechCrunch, "Sprains, pain, and whiplash," Aug 27, 2026 — https://techcrunch.com/2026/08/27/sprains-pain-and-whiplash-waymo-and-zoox-test-drivers-are-getting-hurt-as-robotaxis-scale/
2. NHTSA recall RCAK-25E029-8494 (Zoox 270-vehicle, May 2025) — https://static.nhtsa.gov/odi/rcl/2025/RCAK-25E029-8494.pdf
3. Reuters, "Amazon's robotaxi unit Zoox agrees recall over braking issue," Mar 19, 2025 — https://www.reuters.com/business/autos-transportation/amazons-robotaxi-unit-zoox-agrees-recall-over-braking-issue-2025-03-19/
4. OSHA, Injury Tracking Application — https://www.osha.gov/injuryreporting
5. IIHS Waymo crash-rate study via site story + NY Post summary — https://nypost.com/2026/08/03/business/waymo-robotaxis-found-to-crash-68-less-often-than-human-drivers/
6. TechTimes, Cybercab AQ26002 probe, Sept 4, 2026 (context: driverless end-state) — https://www.techtimes.com/articles/326717/20260904/tesla-cybercab-launched-nhtsa-opened-probe-it-once-sent-zoox-down-four-years.htm

## Journalist
Rex Driverton — deadpan dark humor, loves paradoxes. Beat: fatality investigations. Opener options: "The numbers don't lie, but they do occasionally smirk." (Note: "The numbers don't lie" is on the banned list in STORY_GUIDE — do NOT use the catchphrase verbatim; write in Rex's voice without it.)

## Slug
`robotaxi-brake-jab-whiplash`
## Kicker
Investigation (or Existential Dread — Rex's paradox beat; "Investigation" fits the OSHA-data framing)
