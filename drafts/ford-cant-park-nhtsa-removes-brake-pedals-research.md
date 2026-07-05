# Research Notes: Ford Can't Park, NHTSA Removes Brake Pedals

## Angle
On July 1, 2026, Ford recalled 741,195 vehicles because their transmissions can't reliably hold in Park — the most basic function of a parked car. The next day, NHTSA proposed removing brake pedals from autonomous vehicles entirely. The cognitive dissonance of a safety regulator that processes massive rollaway recalls while simultaneously eliminating physical braking controls from another class of vehicles.

## Kill Test
- **Novel?** Yes. Nobody has calculated the "defective miles" ratio between recalled conventional vehicles and total AV miles.
- **Data-driven?** Yes. FARS data on recalled models + NHTSA recall scope + Waymo mileage data.
- **Surprising?** The scale difference — defective Ford fleet has driven ~267x more miles than Waymo's entire autonomous history — is genuinely shocking.
- **Actionable?** Yes. Check your VIN. Know that the fix isn't available until April 2027. Always use parking brake.

## Primary Sources

### Source 1: NHTSA Recall Notice 26V402 (Ford Transmission/Rollaway)
- Date: June 24-July 1, 2026
- 741,195 vehicles: 2018-2021 Lincoln Navigator & Ford Expedition, 2020-2021 Explorer & Lincoln Aviator, 2021 Ford F-150
- Defect: Valve body separator plate restricts fluid to park valve → parking pawl engages while moving → damages parking system → can't hold in Park
- 24 property damage incidents, 9 injuries (2 emotional)
- Fix: Software update to Powertrain Control Module + inspection/replacement of damaged parts
- **Remedy not available until April 2027** — 10 months after the recall
- Ford: "always engage emergency brake when parking until fixed"
- Source: NHTSA, USA Today, Zacks, Detroit Free Press, Men's Journal

### Source 2: NHTSA FMVSS 135 Proposed Amendment (Brake Pedal Removal)
- Date: Published June 25, 2026; covered July 2, 2026
- Proposes removing manual brake pedal requirement for vehicles operated by automated driving systems
- NHTSA Administrator Jonathan Morrison: "tearing down pointless barriers to innovative designs"
- Secretary Sean Duffy's AV Framework
- Does NOT address: how passengers stop in emergency, alternative braking means
- The Drive: "NHTSA is tearing down barriers it calls 'pointless,' without also taking this opportunity to get ahead of inevitable problems"
- Source: NHTSA, The Drive, The Truth About Cars, DOT/HisRoom

### Source 3: Ford Recall Record in 2026
- 51 recalls since January 1, 2026 — most of any automaker
- Next closest: Chrysler with 19 recalls
- Ford under 2024 consent order with NHTSA (independent third-party oversight)
- Michael Brooks, Center for Auto Safety: "Ford's recall numbers started creeping up to significant levels right about the time the consent order was in the works"
- Ford simultaneously claims JD Power 2026 highest quality mainstream brand
- >80% of Ford's 2026 recalls resolved through software-only updates
- Source: USA Today, NHTSA data

### Source 4: Waymo Autonomous Miles
- As of June 2026: 200 million fully autonomous miles
- 3,871 robotaxis in service
- 500,000 paid rides per week
- 100 million miles milestone reached March 2026
- Operating in 10 US metro areas
- Source: Wikipedia (Waymo page, updated June 2026), Stocktwits/Waymo press release

### Source 5: FARS Data (2014-2023)
- Ford F-150: 9,194 deaths, rate 1.04/100M VMT, fleet 6.56M
- Ford Explorer: 3,797 deaths, rate 1.54/100M VMT, fleet 1.97M
- Ford Expedition: 1,515 deaths, rate 2.31/100M VMT, fleet 525K
- Lincoln Navigator: 209 deaths, rate 1.06/100M VMT
- Ford total FARS deaths: 34,954 (second only to Chevrolet at 35,905)
- Ford has 51 recalls in 2026 and 34,954 FARS deaths — the brand with the second-highest body count in America

## Original Calculation: The Defective Miles Ratio

741,195 vehicles × average ~5.5 years on road (2018-2021 model years, recall June 2026) × 12,000 miles/year average = **~48.9 billion miles** driven with this defect potentially present.

Waymo's total: 200 million fully autonomous miles.

**Ratio: 48.9 billion / 200 million = ~245:1**

Ford's defective fleet has accumulated approximately **245 times more miles** with a known defect than Waymo has driven autonomously in its entire history.

More precise: The defect may not have manifested in all vehicles from day one. Ford says 200+ reports to Ford and NHTSA as of May 2026. Still, the exposure is staggering.

## Strongest Counterargument
- The Ford defect has a mitigation (use the parking brake), while brake pedal removal in AVs means NO physical backup
- Comparing conventional vehicle recall miles to AV miles is comparing two different risk domains
- NHTSA's brake pedal removal applies only to purpose-built AVs, not existing vehicles
- The AEB mandate (up to 62 mph, including pedestrian detection at night) is still in effect and will save more lives than either issue

## Limitations
- FARS data is 2014-2023; doesn't capture 2024-2025 crash patterns for recalled model years
- "Defective miles" is an estimate: not all vehicles had the defect from day one
- VMT per vehicle varies by model and age; 12,000 miles/year is a national average
- Waymo's 200M miles are fully autonomous; total AV industry miles (including safety-driver miles) are higher

## Kicker: Investigation
## Journalist: Rex Driverton
## Date: July 5, 2026
