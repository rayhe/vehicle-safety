# Research — #1590: Ford Explorer Side Airbag Burns (PE26008)

**Slug:** `1590-explorer-airbag-burns-pe26008`
**Journalist:** Mia Crumplezone (safety engineering beat — seat-mounted airbag design question)
**Date:** November 26, 2026

## Kill test
Genuinely newsworthy: a federal probe opened Nov 6, 2026 into 1.24M Explorers where the
safety device itself is the injury source. The paradox is the story: the bag deploys
correctly in a crash and then burns the person it just saved. Novel angle: three of eight
complaints independently describe the same mechanical detail (exhaust vent facing the
occupant, not the door), which turns a thin complaint file into a testable design
hypothesis. Site novelty: no prior story on PE26008; Explorer coverage to date is recalls
and roof rails, never airbag burns. PASS.

## Primary sources
1. **NHTSA ODI Resume, PE26008** (primary): opened 11/06/2026, investigator Joseph
   Teitelman, reviewer Ajit Alkondon. Subject: "Burn Injuries From Side Airbag Deployment."
   Population: 1,236,155 estimated (2021-2026 Ford Explorer). Problem: "Deployment of the
   seat-mounted side airbag may result in serious burn injuries to front seat occupants."
   Failure summary: 8 VOQs + 4 EWR Death & Injury reports; 11 incidents, 10 injury
   incidents, 10 injuries, 0 fatalities (duplicates removed).
   https://static.nhtsa.gov/odi/inv/2026/INOA-PE26008-19475.pdf
2. **NHTSA ODI summary narrative** (via resume): burns "typically diagnosed as second or
   third-degree burns requiring medical treatment," reported for both drivers and front
   passengers; some VOQs involve law enforcement officers in Explorer Police Interceptors.
   PE opened "to evaluate the scope, frequency, and potential safety-related consequences
   of the alleged defect."
3. **Torque News** (complaint-level reporting): Feb 20, 2025 crash, UPS truck struck the
   right front of a 2022 Explorer Police Interceptor; seat-mounted side airbag deployed;
   officer's vest and three layers of clothing burned through; third-degree burns required
   surgery and a skin graft. Three of the eight complaints describe the bag's exhaust vent
   facing inward toward the person in the seat instead of toward the door. Complaints span
   XLT, ST, Timberline and police trims. Ford had not commented publicly as of Nov 9.
   https://www.torquenews.com/17998/1236155-ford-explorers-are-under-federal-side-airbag-burn-probe-and-3-8-complaints-say-vent
4. **Carscoops / Autoblog / AutoBody News** (corroboration, Nov 9-10): 1,236,155 vehicles,
   11 incidents, 10 injuries, 0 deaths; PE is not a recall; no repair exists.
   https://www.carscoops.com/2315489/nhtsa-ford-explorer-airbag-investigation/
   https://www.autoblog.com/news/burn-injuries-trigger-2021-2026-ford-explorer-airbag-nhtsa-investigation
5. **NHTSA airbag guidance** (context): side-impact airbags inflate faster than frontal
   bags because there is less space between occupant and intruding object — the speed that
   makes them effective is the same speed that makes hot vent gas dangerous at close range.
   https://www.nhtsa.gov/vehicle-safety/air-bags (parent topic page)

## Key numbers
- 1,236,155 — estimated 2021-2026 Explorers in the probe
- 8 VOQs + 4 EWR reports = 11 unique incidents, 10 injuries, 0 deaths
- 10 / 1,236,155 = 0.0008% of the population reported a burn injury
- 3 of 8 complaints describe the vent facing the occupant
- 1 officer: third-degree burns, surgery, skin graft (Feb 20, 2025, 2022 Police Interceptor)
- 6 model years under review (2021-2026); no trim limits named
- 0 recalls, 0 repairs, 0 findings as of Nov 26, 2026
- PE target: NHTSA aims to finish a Preliminary Evaluation within ~8 months

## Original contribution (the math nobody ran)
The honest denominator is NOT 1.24M vehicles. Burns can only happen when a side airbag
actually deploys, and NHTSA publishes no count of side-airbag deployments in this fleet.
10 injuries out of 1.24M cars sounds like nothing (0.0008%). 10 injuries out of the
unknown-but-small number of Explorers that ever had a side airbag deploy is a rate nobody
can compute from public data — and that uncomputability is itself the finding. The
0.0008% figure is the floor, not the rate. Second calculation: 3 of 8 complaints (37.5%)
independently converging on the same vent-direction detail is a striking agreement rate
for uncoordinated consumer complaints; if the vent direction were random, three
independent reports landing on the same orientation would be unlikely. That is a
hypothesis, not a finding — NHTSA's resume says nothing about vents.

## What this is NOT
- Not a recall. No recall campaign number exists for PE26008. No repair, no owner mailing.
- Not a finding of defect. A Preliminary Evaluation ends three ways: closed, escalated to
  Engineering Analysis, or a manufacturer recall.
- Not a Takata-style story. No inflator rupture, no shrapnel, no deaths. The mechanism is
  hot gas / vent placement, per the complaints, not an exploding inflator.

## Limitations
- 8 complaints cannot establish frequency. The complaint file is self-selected; owners
  who were burned and never filed are invisible.
- The vent-direction claim comes from complaint text as read by Torque News, not from
  NHTSA's resume. NHTSA's own summary says nothing about vents.
- No deployment count exists publicly, so no true injury rate can be computed.
- Ford has not commented publicly on PE26008 as of Nov 9, 2026 (per Reuters-carried
  reporting); no Ford statement is on the record in the sources reviewed.

## Strongest counterargument
Eight complaints across 1.24 million SUVs is statistical noise. Side airbags deploy with
hot gas by design; some burns in severe crashes are the expected cost of a device that
saves lives, and 10 injuries with zero deaths against a fleet that has absorbed thousands
of side impacts is evidence the system works, not that it is broken. The vent-direction
pattern could be three people describing the same normal deployment from different angles.
NHTSA opens PEs on thin files all the time and closes most of them.

## Actionable insights
- 2021-2026 Explorer owners: no recall to act on today. Run the VIN at nhtsa.gov/recalls
  anyway — the lookup also surfaces open investigations on the vehicle.
- If a deployed side airbag burned you or a passenger: file a complaint at NHTSA.gov or
  call the Vehicle Safety Hotline at 888-327-4236. Complaints are literally what opened
  this probe.
- Police fleets running Explorer Interceptors: the Feb 2025 officer injury is the most
  severe case on file; fleet managers should log any airbag burn, however minor, because
  NHTSA's frequency case depends on reports existing.
- Shoppers: the probe covers every 2021-2026 Explorer with no trim exceptions; a used
  Explorer purchase should include the NHTSA VIN check as a matter of routine.

## Related site coverage (checked)
- Explorer recall stories exist (676k recall week, ghost seat, roof rails, seat
  displacement 388k, three-million clips) but none on airbag burns or PE26008.
- Airbag stories exist (Pacifica airbag paradox, counterfeit airbag, three failures 527k)
  but none on burn injuries from a correctly deploying bag.
