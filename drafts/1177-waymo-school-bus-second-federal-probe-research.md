# Research — #1177: The Robotaxi That Keeps Meeting School Buses

**Slug:** `1177-waymo-school-bus-second-federal-probe`
**Journalist:** Vin Wreckage (Existential Dread Columnist — paradoxes, cosmic absurdity; his beat is "the company that sells safety keeps failing the exact scenario skeptics warned about")
**Kicker:** Existential Dread
**Date:** 2026-10-15

## Angle (1-2 sentences)
NHTSA opened a fresh school-bus probe into Waymo this week — early-October Atlanta footage of a robotaxi maneuvering around a stopped, unloading school bus, ~20 Austin ISD citations since the school year began, and Waymo telling regulators a voluntary software recall is coming. This is Act Two: Waymo already did a school-bus software recall in December 2025, Austin ISD kept citing violations after the fix, the NTSB's January-2026 incident turned out to involve a remote human agent wrongly approving the pass, and the company declined the district's request to pause during pickup/drop-off hours. Meanwhile NHTSA is separately reviewing the January Santa Monica crash where a Waymo struck a 9-year-old near an elementary school. Two federal probes, two school-child incidents, one calendar year.

## Kill test
- **Newsworthy:** YES. Fresh probe opened this week (Oct 2026), per Oct 15 report; ~20 citations in the current school year alone; voluntary software recall planned. A federal safety probe of the "safer than human" robotaxi specifically about whether it stops for kids getting off a bus.
- **Novel:** YES. Zero site coverage of the Waymo school-bus saga (only incidental mentions in older AV stories). Original synthesis: (1) the December 2025 recall didn't hold — five violations happened AFTER the November software fix; (2) the January 2026 NTSB finding: the pass was approved by a remote human in Michigan, so "autonomous" failure had a human co-signer; (3) AISD asked Waymo to pause during pickup/drop-off and the company declined; (4) the parallel with Tesla's DP26010 school-zone speeding petition (covered #1145/#1167) — both robotaxi leaders have federal kid-zone files open in the same month.
- **Verdict:** PROCEED.

## Primary sources
1. **Startup Fortune, Oct 15, 2026** — fresh NHTSA probe this week; early-October Atlanta footage (WXIA-TV aired similar video in September); NHTSA's "likelihood of other prior similar incidents is high"; 20 Austin ISD citations since the school year began (via TechCrunch); Waymo told regulators it plans a voluntary software recall; $126B valuation, 4,000-vehicle fleet, 500K+ rides/week. https://startupfortune.com/waymo-expands-to-20-cities-as-nhtsa-opens-new-school-bus-safety-probe/
2. **NHTSA ODI resume PE25-013 (Oct 2025)** — the first probe: Waymo AV passed a stopped school bus with red lights flashing, stop arm deployed, crossing control arm extended; "initially stopped but then drove around the front of the bus... passed the bus's extended crossing control arm near disembarking students"; no safety operator; "based on NHTSA's engagement with Waymo on this incident and the accumulation of operational miles, the likelihood of other prior similar incidents is high." https://static.nhtsa.gov/odi/inv/2025/INIM-PE25013-51207.pdf
3. **NHTSA info request PE25013-03 (May 15, 2026)** — second information request; "Waymo's response to that request necessitates that ODI receive further data"; defines subject behavior as passing a bus preparing to load, loading/unloading, concluding loading/unloading, or with stop arm extended. (via static.nhtsa.gov)
4. **Automotive World, Jan 2026** — NHTSA expanded the investigation Dec 3, 2025; 19 incidents including 5 AFTER Waymo's Nov 17 software fix; Austin ISD police Chief Wayne Sneed: "those programming changes did not resolve the issue or our concerns." https://www.automotiveworld.com/news/nhtsa-expands-waymo-probe-over-school-district-concerns/
5. **act-news.com, Jan 2026** — Austin ISD documented at least 20 incidents in 2025-26 school year; violations continued after the update; district asked Waymo to pause during pickup/drop-off hours — company declined; Waymo issued voluntary software recall covering 3,000+ vehicles. https://www.act-news.com/news/waymo-incidents-trigger-nhtsa-review/
6. **NTSB preliminary report (via School Bus Talk summary)** — Jan 12, 2026 Austin incident: the Waymo queried a remote agent at operations HQ in Michigan, who wrongly identified the situation as not involving a school bus with active signals. Human-approved pass. https://www.youtube.com/watch?v=og-upCFYtnM
7. **Site research #889** — Santa Monica: Jan 23, 2026, driverless Waymo Jaguar I-Pace struck a 9-year-old near Pearl Street elementary drop-off; 17 mph to under 6 mph before contact; NHTSA opened PE26001 Jan 29, 2026; Waymo's ODI responses posted fully redacted as confidential business information.

## Key numbers
- PE25-013 opened Oct 2025 (~2,000 vehicles initially); expanded Dec 3, 2025
- 19-20 Austin ISD incidents; 5 after the Nov 17, 2025 software fix; citations at 20-25 total by winter
- Dec 2025 voluntary software recall: 3,000+ vehicles
- Fresh probe Oct 2026: early-October Atlanta footage; ~20 citations in 2026-27 school year; new voluntary recall planned
- Jan 12, 2026 NTSB prelim: remote-agent error from Michigan
- Jan 23, 2026 Santa Monica: 9-year-old struck, 17 -> <6 mph, PE26001
- Waymo fleet: 4,000+ US vehicles (Sept 2026), 500K+ rides/week, $126B valuation, 14-15 cities

## Original contributions (show the work)
1. **The fix-that-didn't-hold ledger:** Nov 17, 2025 software fix -> 5 more violations before Dec 1; December 2025 voluntary recall -> Oct 2026 probe + new planned recall. Two recall cycles, one unresolved behavior.
2. **The remote-agent twist:** the January 2026 violation wasn't a pure autonomy failure — a human in Michigan signed off. The "driverless" car had a driver; he just worked 1,300 miles from the intersection.
3. **The declined pause:** AISD asked Waymo to stop operating during student pickup/drop-off hours; Waymo declined. The company that says safety is its top priority refused the district's simplest risk-reduction ask.
4. **The parallel:** October 2026 has TWO federal robotaxi school-zone files open — Waymo's bus probe and Tesla's DP26010 school-speeding petition. The industry's school problem is not one company's bug.

## Limitations (for the article)
- The "fresh probe" framing comes from the Oct 15 Startup Fortune report; I could not independently verify a new ODI action number this week (NHTSA's public ODI resume for the new action wasn't available at research time). The article will attribute the "this week" claim to the report.
- Citation counts (19 vs 20 vs 24-25) vary by outlet and date; the article will use ranges and attribute.
- No injuries reported in any school-bus passing incident; the Santa Monica child had minor injuries. The story is about federal action and systemic behavior, not a casualty count.
- Waymo's "superior to human drivers" claim is its own statement (chief safety officer to TechCrunch); human baseline numbers (10,000+ AISD violations/year) are the district's.
- FARS has no robotaxi entries; no fatality-rate context available.

## Counterargument (strongest)
Waymo's safety record in aggregate is genuinely strong — peer-reviewed studies and the company's SGO data show lower crash rates per mile than human benchmarks, and zero collisions occurred in any of the school-bus incidents. The buses' stop-arm cameras catch humans violating at 10,000+/year in Austin alone; 20 robotaxi violations is 0.2% of that. A human who drives around a school bus gets a ticket, not a federal probe — robotaxis face scrutiny precisely because they're held to a higher bar, which is arguably the system working. And the January Santa Monica crash: Waymo's model shows a fully attentive human would have hit the child at 14 mph; the car hit at under 6.

## Actionable insights
- If your kid's district uses stop-arm cameras: know that the violations are prosecuted against the vehicle owner — for robotaxis, that enforcement is still being worked out.
- If you ride robotaxis near schools: the current school-bus behavior is under federal review; exercise the same caution around stopped buses regardless of who's driving.
- For parents: school-zone traffic risk is overwhelmingly human drivers (10,000+ AISD human violations/year); the robotaxi probe is about a higher standard, not the biggest risk to your kid.
- General: a "recall completed" headline is not a fix verified — ask whether violations continued after the software update.
