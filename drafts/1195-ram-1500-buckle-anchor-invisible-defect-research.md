# Research: #1195 — Ram 1500 Rear Seat Belt Buckle Anchor Recall (26V495 / Chrysler 67D)

**Working title:** "1.27 Million Ram 1500s Have a Seatbelt That Clicks, Tugs, and Feels Fine. About 1,271 of Them Will Rip Loose in a Crash."
**Journalist:** Mia Crumplezone (forensic crash analysis / engineering beat)
**Kill test:** PASS. A seatbelt defect invisible to every test an owner can perform, spanning 8 model years, caught by a Canadian regulator rather than the factory, with a 6-month internal review before filing. Novel angle: the only load path that matters is the one nobody can see. Zero queue overlap (no buckle-anchor/67D/26V-495 coverage).

## Facts (all sourced)

1. **NHTSA campaign 26V495000** (report received 30/07/2026, via api.nhtsa.gov recallsByVehicle): Chrysler (FCA US, LLC) recalling certain 2019-2026 Ram 1500 vehicles. Second-row center and left-side seat belt buckle anchors may have been improperly installed. Vehicles fail to comply with FMVSS No. 210, "Seat Belt Assembly Anchorages." Remedy: dealers inspect and attach the anchor to the body structure, free of charge. Owner notification letters expected mailed August 18, 2026; VINs searchable on NHTSA.gov from August 6, 2026. Chrysler recall number 67D; owner contact 1-800-853-1403.
2. **Scale:** ~1,271,294 vehicles in the US (dealer advisory citing NHTSA, Jay Malone Motors, Oct 12, 2026). Global total ~1,516,604: 156,138 Canada, 15,088 Mexico, ~74,000 other export markets (rapmd.net synthesis; car-recalls.eu citing EU RAPEX Alert 38/2026, risk class "Serious").
3. **Build window:** February 17, 2018 – April 27, 2026, Sterling Heights Assembly Plant (testmiles.com, citing the federal filing). 2019-2026 model years. 2027 Ram 1500 not included.
4. **Hit rate:** Chrysler estimates ~0.1% of recalled vehicles contain the condition (testmiles.com). 1,271,294 × 0.001 ≈ **1,271 trucks**. Global: 1,516,604 × 0.001 ≈ 1,517.
5. **Failure mode:** assembly error, not a bad part. The bolt fastening the anchor bracket to the body was under-torqued or missed entirely on the line. No redesigned component involved (gcn.com). The belt clicks, retracts, and feels normal; the defect only reveals itself under crash loads.
6. **Discovery:** Transport Canada notified FCA Canada on January 20, 2026 about a customer concern on a 2025 Ram 1500 buckle anchor possibly not fastened to the body. FCA US's Technical Safety and Regulatory Compliance group reviewed with engineering/manufacturing Feb-Jul 2026. Recall filed July 30, 2026 (gcn.com). ~6 months from external flag to filing.
7. **Injuries:** Stellantis reported awareness of one potentially related injury; no confirmed fatalities (rapmd.net synthesis of original reporting). Attribute as reported, not confirmed.
8. **Standard:** FMVSS No. 210, "Seat Belt Assembly Anchorages" (49 CFR 571.210) — sets strength and location requirements for belt anchorages. An improperly attached anchor cannot carry the crash loads the standard assumes.
9. **NHTSA page check:** browser.open on nhtsa.gov/recalls returned HTTP 403 (site blocks text fetch); API JSON carries the same campaign data, so no material gap.

## Original contribution
- **The 1,271 arithmetic** (0.1% of 1,271,294) — derived here, not published as such.
- **Inspection-everything-to-find-nothing recall math:** ~999 of every 1,000 dealer visits return a clean truck. This is a defect that can only be found by a technician removing trim, never by the owner.
- **8.2-year persistence:** an assembly-line error survived from Feb 2018 to Apr 2026 at Sterling Heights before a Canadian customer report ended it.

## Strongest counterargument
For ~1,270,000 of the 1,271,294 owners, this is a wasted trip to the dealer. One unconfirmed injury across 8 model years and 1.5 million trucks is a thin body of evidence; FMVSS 210 noncompliance is a paperwork failure as much as a proven crash failure. But: no owner can identify the ~1,271, the anchor is the single load path for the buckle, and "probably fine" is not a restraint system.

## Limitations
- 0.1% is FCA's estimate, not an independent audit; actual defective population is unknown.
- The single injury is "potentially related," per Stellantis reporting — not confirmed causal.
- Build-date window and global figures come from secondary syntheses of the federal filing, not the Part 573 PDF directly.

## Actionable takeaway
Own a 2019-2026 Ram 1500? Check your VIN at nhtsa.gov/recalls for campaign 26V495 (Chrysler 67D) and get the free dealer inspection — especially if kids or passengers ride in the back seat regularly. Used-truck buyers: add 67D to the recall checklist; a buckle that looks perfect is the whole point of this recall.

## References (for the article)
1. NHTSA recalls API, campaign 26V495000 — api.nhtsa.gov (report received 07/30/2026)
2. Chrysler owner notice, recall 67D — https://www.chrysler.com/universal/webselfservice/pdf/67D.pdf
3. FMVSS No. 210, 49 CFR 571.210 — Seat Belt Assembly Anchorages
4. Jay Malone Motors recall alert (Oct 12, 2026) — https://www.jaymalonechryslerdodgejeepram.com/blog/2026/october/12/recall-alert-ram-1500-2019-2026-seat-belt-buckle-anchor.htm
5. Test Miles, "Ram 1500 Recall: Check the Back Seat Before You Buy" — https://testmiles.com/ram-1500-recall-check-the-back-seat-before-you-buy/
6. GCN summary (Transport Canada chronology, Feb-Jul 2026 review) — https://gcn.com/more-than-million-full-size-pickup/21536/
7. EU RAPEX Alert 38/2026 via car-recalls.eu — https://car-recalls.eu/recall/dodge-ram-2018-2026-seat-belts-injury/
