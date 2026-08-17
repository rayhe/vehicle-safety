# Research Notes: odometer-fraud-study-from-2002

## Angle
NHTSA's odometer fraud statistics — 452K vehicles/year, $1.06B cost, 3.47% incidence — all derive from a single study published in April 2002 (DOT HS 809 441). It has never been updated. Meanwhile, digital odometers made tampering easier, enforcement remains at 4 investigators nationwide, and the safety impact (crash risk from deferred maintenance) has never been measured because FARS doesn't capture odometer readings.

## Original Contribution
FARS has no mileage field. The federal fatal-crash database doesn't record how many miles involved vehicles had actually driven. The safety cost of odometer fraud — whether people die because their brakes, tires, and timing belts are overdue — is structurally unmeasurable. Nobody will ever know because nobody collects the data.

## Primary Sources (3+)

1. **NHTSA DOT HS 809 441 (April 2002)** — "Preliminary Report: The Incidence Rate of Odometer Fraud"
   - 10,000 vehicle sample using Carfax records
   - 3.47% rollback probability (CI: 2.68%–4.26%) in first 11 years
   - $1.06 billion annual consumer cost
   - URL: https://www.nhtsa.gov/document/incidence-rate-odometer-fraud

2. **NHTSA Office of Odometer Fraud Investigation**
   - 4 regional offices (NE, SE, MW, Western), each with 1 criminal investigator
   - 250 total convictions across operational history
   - $15M total restitution, $2.8M criminal fines
   - $30K/year cooperative agreement with states
   - URL: https://www.nhtsa.gov/vehicle-safety/odometer-fraud

3. **NHTSA Consumer Advisory on Odometer Fraud**
   - "Digital odometers that have been tampered with are even harder to detect than traditional mechanical odometers"
   - URL: https://www.nhtsa.gov/press-releases/consumer-advisory-nhtsa-tips-protect-against-odometer-fraud

4. **CBP Philadelphia — seizure of odometer tampering devices**
   - 29 devices seized in single shipment, destined for 12 states
   - Violation of 49 USC §32703
   - URL: https://www.cbp.gov/newsroom/local-media-release/philadelphia-cbp-seizes-automobile-devices-cheats-drivers-and

5. **FARS (no odometer field)**
   - FARS records model year, make, model, VIN, but NOT odometer reading
   - Fatal crash investigations don't capture mileage at time of crash
   - This means the safety dimension of odometer fraud is structurally invisible in federal data

## Counterargument
Modern vehicle history services (Carfax, AutoCheck, NMVTIS) flag mileage discrepancies at title transfer. These didn't exist when NHTSA published its 2002 study. The actual incidence rate may have declined. But NHTSA hasn't measured since 2002, so this is speculation.

## Limitations
- 452K figure based on 10,000-vehicle sample extrapolated nationally
- Confidence bounds: 2.68%–4.26%
- $1.06B uses 2001 NADA pricing, not inflation-adjusted
- No federal crash data links odometer readings to crash outcomes
- Safety impact is unquantified and remains so

## Journalist
Clara Rollover — Consumer Safety Advocate

## Kicker
Investigation
