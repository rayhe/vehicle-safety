# Research Notes — #1059: The Solar Controller That Can't Tell 12 Volts From 24

**Slug:** 1059-grand-design-solar-controller-recall
**Journalist:** Mia Crumplezone (Safety Engineering Editor — technical but accessible, genuinely excited about electrical systems, slightly judgmental about bad vehicle design)
**Kicker:** The Gap
**News peg:** October 2, 2026

## The event (news peg)

- Grand Design RV, LLC (Middlebury, Indiana) recalled an estimated 16,128 model year 2024-2027 Grand Design Reflection Fifth Wheel recreational trailers.
- NHTSA Safety Notification 26V616000. Grand Design's internal campaign number: 910068.
- The defect: the Auto Detect Solar Controller may select a 24-volt output when the vehicle's electrical system is designed for 12 volts.
- The incorrect voltage may damage the 7-way Bulkhead Power Center and other circuits.
- Two failure branches from the same defect, per NHTSA: (a) damage to the Power Center increases the risk of fire, explosion, burns and/or smoke inhalation; (b) damage to the RV's electrical system may cause the trailer brakes or exterior lights to fail, increasing the risk of a crash.
- Remedy: an over-the-air (OTA) software update from Grand Design, plus the trailer's lighting inspected and repaired as necessary, free of charge. Owner notification letters expected on or about November 16, 2026. Owners can contact Grand Design Customer Service at +1-574-825-9679. Grand Design's designation: 910068.
- Announced as part of NHTSA's September 2026 recall batch (70 vehicle/product recalls posted that month); surfaced publicly October 2, 2026.

Source: RecallsDirect/Living Safely, "Vehicle Recall: Grand Design Reflection Recreational Trailers," Oct 2, 2026. https://livingsafelyrecalls.wordpress.com/2026/10/02/vehicle-recall-grand-design-reflection-fifth-wheel-recreational-trailers-2/

PRIMARY-SOURCE CONFIRMATION (Part 573 report RCLRPT-26V616-5975, read live Oct 3, 2026): CONFIRMED. Submission date Sep 24, 2026; manufacturer campaign 910068; 16,128 units; 2024-2027 Grand Design Reflection; production Aug 08, 2023 - Sep 16, 2026 (clean point 9/16/2026); estimated percentage with defect 100%. Defect: solar controller firmware can select a 24V output mode on 12V electrical systems; 24V exceeds the voltage rating of the 7-Way bulkhead power center, damaging it and associated circuits. Safety risk: the power center distributes 12V to the trailer brake circuit and exterior lighting circuits; damage can impair trailer braking or exterior lighting (crash risk); 24V can also cause thermal damage/degradation of the power center in the bulkhead compartment. Warning: brake/light failure may surface as a fault notification through the tow vehicle's integrated tow module; thermal damage may occur with little or no warning. Component: SOLAR CHARGER MPPT 60A WALL MOUNT W/ BLUETOOTH APP (FSCC60PW2), part 2023006263; supplier Lippert Components (distributor); Furrion engineering engaged (Furrion provides the firmware). Chronology: 08/13/2025 first report of thermal degradation at the 7-Way bulkhead power center; 10/15/2025 second report, monitoring established; 03/12/2026 third report, product safety investigation opened; 04/08/2026 power center supplier engaged; 04/13-08/17/2026 lab testing; 08/07/2026 identified the 24V auto-detect; 08/14/2026 conversations with Furrion engineering; 09/11/2026 Brand Action Committee; 09/17/2026 Product Safety Committee determined safety-related defect, directed recall. Remedy type: Software, Inspect. Furrion provides a firmware update removing the auto-detect 24V mode; owners install via the solar controller manufacturer's mobile app (Bluetooth), at no cost; owners submit a screenshot of the updated firmware version + VIN to Grand Design, recorded for 49 CFR 573.7 recall-completion reporting. Before towing, owners must verify exterior lights and brakes; if either fails, do not tow and contact an authorized dealer. Dealer notification Oct 19-23, 2026; owner remedy notification Nov 16-20, 2026. NO fires, injuries, or accidents claimed in the 573; only 3 thermal-degradation reports over 13 months (fire/explosion language from the secondary source is not in the NHTSA consequence text and must not be presented as established).

## The data (context)

- 16,128 units across four model years (2024-2027) of one fifth-wheel line — a large share of the Reflection fifth-wheel installed base.
- The component's entire job is voltage detection: an "auto detect" solar controller exists to choose the correct charge voltage. The failure mode is the component failing at its one advertised function.
- A fifth-wheel trailer at highway speed weighs on the order of 10,000-15,000 lb; trailer brakes are not optional equipment on that mass. A controller that can silently take out trailer brakes or running lights is a crash vector that sits behind the tow vehicle, invisible to the driver until it is not.
- Context pattern on this site: September 2026 brought 13 RV recalls (#1039) — this is the largest single-unit RV recall of that wave and one of the more technically interesting failure modes.
- RV recall pattern note: Grand Design has prior electrical recalls (e.g., 2024 120V outlet recalls in Reflections), which strengthens the "engineering culture" critique without overstating it.

## Novel angle (kill-test verdict: PASS)

The auto-detect paradox: the one job of an auto-detect solar controller is to detect the system voltage, and it fails at exactly that. Plus the OTA remedy: a fifth-wheel trailer receiving an over-the-air software update is a sign of how much computing a modern RV carries — the recall is simultaneously a fire-hazard recall, a brake-failure recall, and a firmware patch. One defect, two hazard branches (fire/explosion inside the trailer; brake and light failure on the highway), fixed partly by code pushed over the air and partly by a human inspecting the lights.

Original contribution: (1) the paradox framing of auto-detect failing at detection; (2) connecting the two hazard branches explicitly (fire inside vs. crash outside — the owner can be harmed two different ways); (3) the OTA-for-a-trailer note as a marker of RV software surface area.

## Strongest counterargument (must state at full strength)

We do not know how many controllers actually select the wrong voltage, nor under what conditions. The Part 573 report may show the defect rate as unknown and the warranty-claim count low; if the controller mis-selects only under rare conditions and owners rarely solar-charge at the margin, this could be a narrowly-scoped risk that the OTA patch fully closes. The "auto-detect" naming is also a bit of a strawman: many charge controllers default to a safe setting and only change on explicit battery profiles, so "can't tell 12 from 24" may overstate what the hardware does. And the fire/explosion language is NHTSA's standard worst-case consequence phrasing — the actual observed failure rate (to verify in the 573) may be small.

## Limitations

- Pending primary Part 573 confirmation: exact unit count, exact model years, production dates, defect rate estimate, claims/warranty counts, any injuries or fires observed, exact notification dates.
- The RecallsDirect writeup is a secondary aggregator; it appears to quote the NHTSA notification directly but is not the 573 itself.
- No tow-vehicle interaction data: whether the brake failure mode has caused any documented incidents is unknown (check 573).
- No claim count published in the secondary source — verify in the 573 report or omit the claim entirely (do not invent one).

## Actionable insights

- If you own a 2024-2027 Grand Design Reflection fifth wheel: the fix is free and partly over-the-air — check your VIN against the recall at nhtsa.gov/recalls and confirm your trailer's software is current; then get the lighting inspected. Do not wait for the November letter if you are actively camping off-grid with solar charging.
- If you tow anything with an auto-detect charge controller (any brand): know that "auto-detect" controllers exist in multiple vendors' parts bins. A wrong-voltage charge doesn't announce itself until the power center is damaged. Check your battery/controller voltage settings manually after any firmware update.
- Broader: trailers now carry OTA-updateable firmware that can silently alter charging behavior. Treat your trailer's software like your tow vehicle's — check for updates after the recall lands.

## Sources (3+ primary, verified; browser-task confirmation pending for [1])

1. NHTSA, Recall 26V616 (Grand Design RV, LLC; 16,128 units; 2024-2027 Reflection Fifth Wheel; solar controller voltage selection; remedy OTA + lighting inspection; Grand Design 910068). https://www.nhtsa.gov/search-safety-issues — search 26V616
2. RecallsDirect/Living Safely, "Vehicle Recall: Grand Design Reflection Recreational Trailers," Oct 2, 2026 (secondary, quotes NHTSA notification). https://livingsafelyrecalls.wordpress.com/2026/10/02/vehicle-recall-grand-design-reflection-fifth-wheel-recreational-trailers-2/
3. NHTSA recalls database (owner VIN lookup). https://www.nhtsa.gov/recalls
