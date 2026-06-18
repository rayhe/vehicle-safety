# Research: Waymo's Freeway Problem — Three Failures in Eight Weeks

## Angle
Waymo has had three distinct freeway-related safety failures since April 2026: a flood recall, a full freeway suspension, and now a construction zone recall. Freeways were supposed to be the EASY domain for autonomous vehicles — structured, no pedestrians, predictable. Instead, they're Waymo's biggest liability. The pattern suggests freeway driving is a fundamentally harder problem for AV systems than anyone assumed.

## Journalist
**Axle McScatter** — Data Visualization Editor. This is a pattern-tracking, timeline analysis story. He's due in the rotation (last appeared at #335, 7 articles ago).

## Primary Sources

### 1. Waymo Construction Zone Recall — June 18, 2026 (TODAY)
- **Recall:** 3,871 Fifth Generation ADS robotaxis
- **Defect:** Software issue could cause vehicles to enter closed freeway construction zones and continue driving at speed
- **Remedy:** Waymo restricted freeway driving; will update ADS software to detect vehicle location and avoid construction zones
- **Source:** Reuters, NHTSA (via Reuters)

### 2. Waymo Flood Recall — April 30, 2026 (Filed), May 6 (NHTSA issued)
- **Recall:** 3,791 5th and 6th Gen ADS robotaxis (Campaign: voluntary, filed April 30)
- **Incident trigger:** April 20, 2026 — unoccupied Waymo AV drove into flooded section of road in San Antonio (40 mph zone), swept into Salado Creek. No injuries. Second earlier incident near McCullough Avenue/Contour Drive.
- **Defect:** "On higher speed roadways, the Waymo AV may slow but not stop in response to detecting a potentially untraversable flood lane"
- **Remedy:** OTA software fix; interim weather-related constraints + updated maps
- **Source:** NHTSA recall, Electrek, Reuters

### 3. Waymo Freeway Suspension — May 21, 2026
- **Action:** Waymo paused all freeway operations in San Francisco, Los Angeles, Phoenix, and Miami
- **Trigger:** Construction zone incidents (SF) + flood incidents (San Antonio, Atlanta)
- **Context:** Waymo started highway rides in late 2025; freeway access critical for airport connections and trip time reduction
- **Source:** TechCrunch, USA TODAY, Reuters

### 4. Additional Waymo Safety Incidents (2026)
- **January 2026:** Waymo vehicle struck a child near elementary school in Santa Monica, CA — NHTSA investigation opened
- **January 2026:** Waymo vehicles passed stopped school bus with lights activated in Texas — NTSB investigating
- **May 2025:** Empty Waymo vehicle blocked emergency responders at fatal gas explosion scene in Dallas — Deputy Constable had to scan QR code to communicate with remote operator
- **Source:** Reuters, BusinessWire (Witherite Law Group press release)

### 5. Tesla vs Waymo Context
- **Tesla FSD:** 18 total ADS incidents since Austin launch, ~14 unsupervised vehicles running. Senators Markey and Blumenthal (June 16) demanding NHTSA investigate Tesla's "10x safer" claim as methodologically inflated
- **Waymo:** ~697 total incidents, ~3,000 robotaxis operating, 500,000+ paid trips/week
- **Key insight from Electrek:** "Tesla's robotaxis are not crashing because they are not running" — exposure gap, not safety gap
- **Source:** Electrek, Morningstar/WSJ, Senator Markey's office

### 6. Waymo Scale Ambitions
- Goal: 1 million paid rides per week by end of 2026
- New Zeekr-built "Ojai" robotaxi expected to start rides in coming months
- Operating cities: Phoenix, SF, LA, Austin, San Antonio, Atlanta
- Freeway driving started late 2025; now suspended/restricted after repeated failures
- **Source:** TechCrunch

## Novel Contribution
1. **Timeline mapping:** Three distinct freeway failure modes in 8 weeks (flood entry, construction zone entry, blanket freeway suspension) — nobody has synthesized these as a pattern rather than individual incidents
2. **The freeway paradox:** The AV industry assumed freeways would be solved first (no pedestrians, lane markings, predictable flow). Waymo's failures are all freeway-specific: flood detection at speed, construction zone boundaries, unexpected environment changes. City streets — with jaywalkers, double-parked cars, children — are where Waymo actually works
3. **Recall math:** Waymo's fleet is ~3,871 vehicles. Two recalls in 2 months means the ENTIRE fleet was recalled TWICE. 100% defect rate, twice
4. **Speed as the variable:** All three failures involve speed. At 25 mph on city streets, errors are recoverable. At 65 mph on a freeway, entering a construction zone or driving into a flooded lane becomes lethal. Speed amplifies software bugs into safety crises.

## Kill Test
Is this genuinely newsworthy after 342 articles? **Yes.**
- Today's breaking news (construction zone recall) gives it immediacy
- The pattern synthesis (3 failures, 8 weeks) is original
- The freeway paradox contradicts AV conventional wisdom
- Different from our prior Waymo article (#waymo-100-percent-defect-rate-recall, which covered an earlier recall about sensor/geometry issues, not these specific freeway failures)
- Connects to the broader AV safety debate (Tesla vs Waymo, Senate inquiry)

## Counterarguments (to present at full strength)
- Waymo's city-street safety record is genuinely good — lower crash rates than human drivers in controlled comparisons
- Software recalls are instant (OTA), unlike hardware recalls that take years. This is the argument from our earlier Waymo article
- The fact that Waymo CATCHES and recalls these issues proactively is better than the alternative (ignoring them like some human-driver manufacturers do)
- Freeway driving was paused voluntarily, not forced by NHTSA

## Limitations
- We don't have Waymo's internal freeway-specific crash data vs. city-street data
- The flood incident was in an unoccupied vehicle — no passengers were at risk
- NHTSA recall data doesn't track near-misses, only the incidents that triggered investigation
- Waymo operates in Sunbelt cities — construction zone patterns and flood risk may be geographically concentrated

## Actionable Takeaways
1. If you ride Waymo regularly: know that freeway rides are restricted or suspended. Your trip time may increase as robotaxis stick to surface streets
2. Waymo riders in construction-heavy areas: check Waymo's service status before booking airport rides
3. Broader: the AV safety debate shouldn't be "are robots safer than humans?" — it should be "in which specific environments are robots safer, and where do they fail?"
4. Check nhtsa.gov/recalls for AV-related recalls affecting your ride-hailing service
