# Research Notes: NHTSA AV Crash Reporting Gutted

## Angle
The Standing General Order (SGO), NHTSA's primary tool for tracking autonomous vehicle crashes since 2021, is being dramatically weakened effective June 16, 2026. The amended SGO relaxes reporting triggers, eliminates duplicate-entity reporting, drops updated reports, and excludes minor property damage crashes. This rolls back the most comprehensive AV safety dataset ever built — right as deployments scale to record levels.

## Journalist
Rex Driverton — Investigation piece about regulatory rollback, paradoxes in safety data

## Key Data Points

### The Original SGO (2021-2026)
- Issued June 2021 as enforcement order
- Required ALL manufacturers/operators of ADS and Level 2 ADAS to report crashes
- Two-tier reporting: 1-day for severe (fatality, hospital injury, vulnerable road user) + 5-day for others (towaway, airbag deployment)
- Updated reports required 10 days after initial
- Multiple entities required to report same crash independently
- Scheduled to sunset April 2026 if not renewed

### The Amended SGO (effective June 16, 2026)
Source: NHTSA AV Framework, announced April 24, 2025 by Secretary Sean Duffy
Key changes per Mondaq/Mayer Brown analysis:
1. **Single-entity reporting**: Only one reporting entity required to report (was: all). Others only report if "materially different information."
2. **Merged/loosened triggers**: Unified 5-day reporting window for ALL reportable crashes (was: 1-day for severe). No more updated reports.
3. **Minor crash exclusion**: Property damage under $1,000 no longer reportable unless subject vehicle was only vehicle or struck another vehicle/object
4. **Monthly report changes**: Only required with "materially new or materially different information" in specific fields

### What the Old Rules Uncovered
- **973 autonomous vehicle collision reports** to California DMV as of April 10, 2026
- NTSB found Waymo robotaxi **illegally passed stopped school bus** at direction of human remote agent (Austin)
- Waymo **blocked ambulance** responding to mass shooting on West 6th Street, Austin
- **60 Waymo incidents** in Austin since June launch (200 vehicles)
- **15 Tesla incidents** in Austin since June launch (<40 vehicles)
- **SF 311 AV complaints** up 118% YTD (24 vs 11 in 2025)

### Waymo's Own Safety Data (March 2026)
- 170 million fully autonomous miles analyzed
- Claims 92% fewer serious/fatal injury crashes vs human drivers
- 83% fewer airbag-deploying crashes
- 82% fewer injury crashes
- 4+ million miles driven per week
- "Preventing approximately one serious-injury crash every 8 days"

### The Paradox
- **Industry narrative**: AVs are dramatically safer, data proves it → less oversight needed
- **Reality**: The safety data that PROVES they're safer is the EXACT data the amended SGO stops collecting
- Waymo's safety claims come from comprehensive crash reporting. Rolling that back means future claims can't be independently verified
- SF complaints doubling suggests public experience doesn't match industry data
- NHTSA framing: reporting requirements are "too costly for developers" (Duffy quote)

## Novel Contribution
Cross-referencing the specific amended SGO provisions with the incident data reveals what would have been hidden under the new rules:
- School bus incident: reported within 1 day under old rules, would get 5 days under new rules (though still reportable)
- Minor Waymo/Zoox fender benders: many under $1,000 damage, potentially no longer reportable
- Duplicate reports from multiple parties: eliminated entirely
- The updated 10-day follow-up reports that often contained critical investigative detail: gone

## Limitations
- We don't have access to the specific SGO data NHTSA collected (it's not fully public)
- California DMV data is separate from federal SGO and is unaffected by federal changes
- Some states may implement their own reporting requirements
- The amended SGO was announced April 2025, not April 2026 — but the prior one was extended and the new framework builds on the April 2025 announcement with changes taking effect June 16

## Strongest Counterargument
Industry has a point: reporting every incident twice (manufacturer + operator) is genuinely duplicative and wastes resources. A focused dataset with consistent, high-quality reports might be more useful than a high-volume one with noisy duplicate entries. NHTSA may also be shifting to a more targeted investigation approach rather than passive data collection. Waymo's Swiss Re insurance analysis (25.3M miles, 88% fewer property claims, 92% fewer bodily injury claims) provides independent verification that doesn't rely on self-reporting to NHTSA.

## Sources
1. NHTSA Amended Standing General Order (April 24, 2025 framework announcement)
2. Mondaq analysis: "NHTSA Announces First Actions Under Trump Administration's New Framework"
3. Mayer Brown analysis: "DOT and NHTSA Announce Autonomous Vehicle Framework"
4. California DMV Autonomous Vehicle Collision Reports page (973 reports as of April 10, 2026)
5. Waymo "From the Road" safety data release, March 19, 2026 (170M miles)
6. TruckingDive: "NHTSA seeks to fast-track AV deployment"
7. SF Transparent.city: 311 AV complaint data
8. GovTech/Austin reporting on Waymo/Tesla incidents
9. Federal Register Vol 91 No 26 (Feb 9, 2026): NHTSA Automated Vehicle Safety Public Meeting notice
