# Research: #1104 — Chrysler Recalls 265,512 Ram ProMasters for Water in the Steering Harness; the Same Failure Family Struck in 2016

## Candidate slug
`1104-ram-promaster-no-warning-steering`

## Journalist
Mia Crumplezone (Safety Engineering Editor). Wiring-harness water intrusion, EPS failure modes, and graceful-degradation engineering are squarely her beat. Last article (#1103) was Rex Driverton, so rotate.

## The story in one line
Chrysler (FCA US) is recalling 265,512 Ram ProMaster vans (NHTSA 26V621000) because water can enter the electric power steering wiring harness and kill assist with no warning; a decade ago the same van line was recalled for water intruding into a wiring harness (NHTSA 16V202000 / Chrysler S24), meaning the company has spent ten years failing to seal connectors against water.

## Kill test
- **Genuinely newsworthy?** Yes. Announced Oct 6-8, 2026 (VINs searchable Oct 6; press coverage Oct 7-8). 265,512 commercial work vans. NHTSA's own language: drivers "may receive no warning" before power steering assist vanishes. Escalated from NHTSA Preliminary Evaluation PE26002. Stellantis acknowledges one non-injury crash.
- **Novel angle?** Queue has zero ProMaster coverage (grep: promaster = 0 story files; steering-recall drafts are all VW, Honda, Rivian, Cybercab). The 2016-callback cross-reference (water-in-harness, same van line, 10 years apart) is an original finding, not in any press coverage found.
- **Original contribution (required):**
  1. The lineage: 16V202000 (2016, ProMaster City, water intrusion + corrosion in a low-voltage harness connector, transmission dropped to neutral without warning) → 26V621000 (2026, ProMaster, water in EPS harness, steering assist lost without warning). Same failure family, same van line, a decade apart.
  2. The engineering asymmetry: hydraulic power steering degrades gracefully (stiff spots, whining, heavier but never zero). Electric power steering fails digitally: a corroded signal connection can take assist from 100% to 0% between ignition cycles, which is exactly why "no warning" is the NHTSA language.
  3. PE26002 escalation timeline: a formal NHTSA investigation (preliminary evaluation) upgraded into a recall, i.e., the agency's math said this wasn't a marginal complaint cluster.

## Verified facts (primary sources, fetched 2026-10-08)
1. **NHTSA Campaign 26V621000** (Chrysler recall 92D), ReportReceivedDate 29/09/2026, NHTSAActionNumber PE26002, Component STEERING:ELECTRIC POWER ASSIST SYSTEM. Source: NHTSA Recalls API (`api.nhtsa.gov/recalls/recallsByVehicle?make=ram&model=promaster&modelYear=2026`).
   - Affected: certain 2022-2026 Ram 1500 ProMaster, Ram 2500 ProMaster, Ram 3500 ProMaster, and 2024-2026 Ram 3500 Electric (EV).
   - Defect: "Water may enter the electric power steering wiring harness, which can disable power steering assist."
   - Consequence: "A loss of power steering assist can increase the risk of a crash."
   - Remedy: dealers inspect and replace the wiring harness and electronic power steering gear, as necessary, free of charge.
   - Interim owner letters mailed November 17, 2026; additional letters when the final remedy is available. VINs searchable on NHTSA.gov beginning October 6, 2026. Contact: Chrysler customer service 800-853-1403.
2. **Vehicle counts** (Fox Business, Oct 7, 2026): 44,391 Ram 1500 ProMaster + 147,204 Ram 2500 ProMaster + 72,043 Ram 3500 ProMaster (2022-2026) + 1,874 Ram 3500 EV ProMaster (2024-2026) = **265,512**.
3. **No-warning failure mode**: "Drivers may receive no warning before losing power steering assistance, according to the NHTSA." Source: Fox Business (foxtwin wire; also The New York Ledger).
4. **Stellantis statement**: "Stellantis NV, the maker of the vans, is aware of one non-injury accident linked to the problem, Stellantis spokesperson Frank Matyok said in a statement to The Detroit News."
5. **2016 callback — NHTSA Campaign 16V202000** (Chrysler recall S24), verified via NHTSA Recalls API (2015 model-year query). Recalled certain 2015-2016 Ram ProMaster City vans (built Sept 26, 2014 to March 5, 2016): "A low-voltage electrical harness connector by the front driver seat may be susceptible to water intrusion and corrosion. Corrosion may result in a loss of communication to the transmission control module (TCM) and may cause the transmission to unexpectedly shift into and stay in neutral without warning the next time that the vehicle stops." Remedy: relocate the connector under the instrument panel. TrueDelta archives the full text of the campaign.
6. Related but distinct: Ford's 41,748-vehicle contaminated-LED headlight recall (26V-something, Oct 2026) is a different story, not this one.

## Limitations (required)
- NHTSA's public Recalls API returns campaign summaries, not the full Part 573 defect reports, so the exact engineering mechanism (connector location, ingress path, corrosion timeline) is not public in what was fetched this run.
- The 2016→2026 lineage is two data points on different components (transmission TCM connector vs. EPS harness); that is a pattern, not proof of a systemic design failure. Different suppliers, different harnesses.
- Stellantis's "one non-injury accident" is a company statement quoted secondhand through Fox Business/Detroit News; NHTSA has not published an incident count for PE26002 in the sources fetched.
- Observed incident rate (1 known crash / 265,512 vehicles) is low; the recall is precautionary based on the failure mode's severity (steering loss at speed), not on a body count.
- FARS 2014-2023 does not break out ProMaster fatalities separately, so no fleet-rate calculation is supportable from the site's core dataset.

## Strongest counterargument (required)
Two recalls a decade apart do not establish that Chrysler "never learned." Water intrusion is one of the most common electrical failure modes in the industry; the 2016 campaign concerned a low-voltage connector near the driver seat on the ProMaster City (a different, smaller platform), while the 2026 campaign concerns the EPS harness on the full-size ProMaster. Different engineers, different suppliers, different decade. And the observed incident count is one non-injury crash across a quarter-million vehicles, which is exactly how a recall is supposed to work: catch it before the body count. The article's "decade of failure" framing is rhetorical glue on top of two genuinely related but arguably coincidental facts.

## Actionable insights (required, publishing gate)
- If you drive a 2022-2026 Ram ProMaster (or 2024-2026 ProMaster EV): check your VIN at nhtsa.gov/recalls now. Interim notification letters arrive November 17, 2026, but the recall is already live and VIN-searchable.
- Symptom watch: any power-steering warning light, intermittent heaviness, or sudden loss of assist at startup or in wet weather. Pull over immediately if assist vanishes; a ProMaster at parking-lot speed without assist is a wrestle, and at highway speed the surprise is the dangerous part.
- Fleet operators (last-mile delivery, trades): this is a quarter-million work vans; check the whole fleet, not just the one with the light on.
- If it happens to you, file a complaint with NHTSA (1-888-327-4236) — PE26002 became a recall because people filed.

## Sources & references
1. NHTSA Recalls API — Campaign 26V621000, 2026 Ram ProMaster (STEERING:ELECTRIC POWER ASSIST SYSTEM). https://api.nhtsa.gov/recalls/recallsByVehicle?make=ram&model=promaster&modelYear=2026
2. NHTSA Recalls API — Campaign 16V202000, 2015 Ram ProMaster (water intrusion, TCM). https://api.nhtsa.gov/recalls/recallsByVehicle?make=ram&model=promaster&modelYear=2015
3. Fox Business, "More than 265K Ram vehicles facing recall over steering defect, regulators say," Oct 7, 2026. https://foxbusiness.com/economy/more-than-265k-ram-vehicles-facing-recall-over-steering-defect-regulators-say
4. TrueDelta, "Ram Promaster Recalls" (archives 16V202000 / S24 text). https://www.truedelta.com/Ram-Promaster-recalls-1247
5. NHTSA recalls database: https://www.nhtsa.gov/recalls

## Dateline
Ship date will be assigned at SHIP phase (queue day+1). Use ship_date for the dateline.
