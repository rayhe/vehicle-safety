# Research: #893 — NTSB BlueCruise Report (HIR-26-02)

## Angle
NTSB Highway Investigation Report HIR-26-02 (adopted March 31, 2026): two fatal
crashes, both 2022 Ford Mustang Mach-E in BlueCruise hands-free mode, both
rear-ending stationary vehicles at highway speeds, nine days apart, three dead.
The toxicology thread is the spine: in San Antonio the *struck* driver was at
~0.326 g/dL (4x the Texas limit), dead-stopped in the center lane of I-10; in
Philadelphia the *striking* driver was at an estimated 0.14-0.19 g/dL plus
delta-9-THC, on her phone, doing ~72 in a 45-mph work zone. BlueCruise noticed
none of it, braked for none of it, and Ford learned about both crashes from an
internet forum post and an NTSB phone call.

## Kill test
PASS. First major NTSB investigation of Ford BlueCruise specifically. March 2026
report, covered thinly (Jalopnik, AP) with almost no attention to the
toxicology cross-tab or the telematics-blindness finding. No vehicle-safety.org
article has touched HIR-26-02. Novel calculations available (see below).

## Primary sources (4)
1. **NTSB HIR-26-02 full report** (110 pp, adopted 2026-03-31):
   https://data.ntsb.gov/Docket/Document/docBLOB?ID=20225047&FileExtension=pdf&FileName=HIR2602-Rel.pdf
2. **NTSB press release NR20260331** (2026-03-31):
   https://www.ntsb.gov/news/press-releases/Pages/NR20260331.aspx
3. **NTSB docket report page (alternate PDF)**:
   https://www.ntsb.gov/investigations/AccidentReports/Reports/HIR2602.pdf
4. **News coverage**: Jalopnik 2026-03-31
   (https://www.jalopnik.com/2137701/ford-bluecruise-ntsb-change-recommendations/);
   AP via Boston 25 (Homendy quotes, Ford "symphony conductor" commercial);
   Fast Company/AP preliminary 2024-05
   (https://www.fastcompany.com/91091793/driver-assist-system-was-on-ford-ev-involved-fatal-crash)

## Verified facts (all from HIR-26-02 unless noted)
- **San Antonio, Feb 24 2024 ~9:50pm**: 2022 Mach-E, BlueCruise hands-free, I-10
  center lane, ~74 mph impact into stationary 1999 Honda CR-V (hazard lights
  likely on, per final report). Honda driver (56) died; Ford driver minor
  injuries. Ford driver was sober per SAPD eval; told police he was following
  nav to a charging station and "definitely paying attention to the road";
  declined NTSB interview through his attorney.
- **Honda driver tox**: femoral blood ethanol 0.326 g/dL, vitreous 0.357 g/dL;
  NTSB estimated >0.3 g/dL at crash, ~4x Texas 0.08 limit; level can cause
  unconsciousness in non-tolerant drinkers. Probable cause notes the CR-V "may
  have been stopped in the center lane of the highway due to the impairment of
  its driver."
- **Philadelphia, Mar 3 2024 ~3:20am**: 2022 Mach-E, BlueCruise hands-free,
  I-95 left lane (work zone, posted 45 mph), ~72 mph into stationary Hyundai
  Elantra + Toyota Prius; chain reaction pushed them into a passing Toyota
  Corolla. Elantra and Prius drivers died (2); Ford driver minor injuries;
  Corolla driver uninjured. Witness: yellow Ford passed her at ~80 mph.
- **Philadelphia Ford driver tox**: serum ethanol 0.126 g/dL drawn ~3.5 hrs
  post-crash; NTSB back-extrapolated 0.14-0.19 g/dL at crash (2x+ PA 0.08
  limit); delta-9-THC 7 ng/mL + carboxy-THC 24 ng/mL (PA bans any detectable
  amount). Cell records: 5-sec outgoing call 3:07am (~9 min pre-crash), five
  2-5-sec incoming calls 2:24-3:07am. NTSB: phone held on top of steering wheel
  in forward line of sight, which is why the camera DMS read her as "eyes
  forward."
- **Neither driver-applied nor system-applied braking/steering** recorded before
  either crash.
- **Probable causes**: SA = distraction (nav system) + overreliance; AEB
  couldn't detect stationary vehicle; stationary vehicle's impairment a factor.
  Philly = alcohol impairment possibly worsened by cannabis + phone distraction
  + overreliance/misuse; ~27 mph over limit in work zone; Ford's speed
  management allowed excessive speed.
- **Five Ford design choices NTSB flagged**: (1) drivers could disable AEB while
  BlueCruise ran; (2) Intelligent ACC engagement not required concurrently;
  (3) hands-free permitted in work zones with reduced limits; (4) cruise speed
  tolerance configurable up to **20 mph over posted limits**; (5) DMS couldn't
  catch accumulated short glances or distinguish a phone in the forward
  line-of-sight from road attention.
- **Telematics blindness**: Ford learned of SA crash ~2 weeks later **from a
  post on an online forum**; learned of Philly crash ~1 month later **when NTSB
  called**. Of 35 L2 SGO reports Ford filed Jul 2021-Dec 2025 (3 fatal: 2
  Mach-E + 1 F-150), effectively **zero** came from automatic telematic crash
  notification.
- **FMVSS 127 math (May 2024 final rule, 89 FR 39686)**: at 74 mph, AEB braking
  at 1g from 146 ft cuts impact to ~39 mph; serious/fatal injury probability
  drops from ~76% to <1% (Doecke et al. 2020). At the posted 45 mph in Philly,
  compliant AEB would have had to **completely avoid** the Elantra, preventing
  both fatalities. Speed is what made them unsurvivable.
- **IIHS Cicchino 2024** (cited in report): L2 systems did not lower crash
  rates vs. FCW/AEB-only vehicles; "L2 systems function primarily as
  convenience features rather than safety enhancements."
- **Recommendations**: H-26-1 (USDOT L2 guidelines), H-26-2/H-26-3 (NHTSA
  telematic crash notification + EDR recording of ADAS/L2 data), H-26-4/H-26-5
  (DMS that catches accumulated short glances, differentiates phone-in-sight),
  H-26-6 (Ford: require AEB engaged + sane speed tolerances), plus reiteration
  of H-22-22 (passive alcohol impairment detection in all new vehicles).
- Homendy at hearing: showed a Ford commercial of a mother **pretending to
  conduct a symphony with her eyes closed** in the driver's seat.

## Novel contribution
1. Toxicology cross-tab nobody ran: drunk drivers on BOTH sides of the impact
   (0.326 struck / 0.14-0.19+THC striker), and the automation failed both.
2. The 74->39 mph / 76%-><1% FMVSS 127 counterfactual, computed from the
   report's own physics: both crashes were survivable if the car had braked.
3. Telematics audit: 0 of 35 Ford L2 crash reports auto-generated by the car.

## Strongest counterargument
The human failures are the proximate causes: a man at 4x the limit parked in a
travel lane with questionable lights, and a drunk, stoned, speeding woman on
her phone at 3am. BlueCruise performed exactly as designed for attentive
drivers; no L2 system is rated to rescue a driver who has checked out, and
stationary-object filtering is an industry-wide AEB limitation (false-positive
braking at highway speed is its own hazard). Ford's camera DMS was stricter
than Tesla's torque-based monitoring of the same era. The report itself
concludes the scenarios were "likely outside the capabilities" of the
2022-era collision avoidance systems.

## Limitations
- Report covers two crashes, not a statistical sample of BlueCruise safety.
- 2022 Mach-E software; BlueCruise has been updated since (findings may not
  reflect current builds).
- NTSB cannot compel action; recommendations to NHTSA/USDOT/Ford are
  non-binding. No data on Ford's response as of Sep 2026.
- Injury-probability figures are modeled (Doecke 2020), not observed in
  these crashes.

## Actionable insights
- Mach-E/BlueCruise owners: never disable AEB while using hands-free; check
  your Intelligent ACC speed-tolerance setting (it allows +20 mph over posted);
  do not use hands-free mode in work zones; assume the car cannot see stopped
  vehicles at highway speed; check VIN at nhtsa.gov/recalls.
- Shoppers: treat L2 as cruise control with lane keeping, not a chauffeur;
  IIHS data shows no crash-rate benefit over plain AEB.

## Journalist
Dale Impactor III (toxicology desk; least-used at 13 articles; catchphrase
opener fits: "According to the toxicology reports -- and there are a lot of
them --").
## Slug
893-bluecruise-ntsb-toxicology-report
## Headline (working)
"Two BlueCruise Crashes, Two Drunk Drivers, Zero Braking: The NTSB's Report
Card on Ford's Robot"
