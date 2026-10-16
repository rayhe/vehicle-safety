# Research: NHTSA Audits Avride's Robotaxi Crash Reports (AQ26003)
**Article #1181** | Slug: `1181-avride-sgo-reporting-audit` | Journalist: Rex Driverton | Date: 2026-10-15

## Kill test
**Verdict: PROCEED.** NHTSA is auditing whether a robotaxi operator's federally mandated crash reports are complete and accurate, after finding the company's filings said "no injuries" where police reports indicated potential injuries. No existing Crash Report story on Avride. The angle nobody else took: the Standing General Order database is the ONLY national record of self-driving crashes (FARS has no AV field, a standing thesis of this site), and the audit exposes that even that single window had injuries edited out between the initial and updated filings. The watchdog is now checking the watchdog's data feed.

## Primary sources (3+)
1. **NHTSA ODI Audit Query AQ26003, Opening Resume** (opened September 14, 2026) — primary federal document. Subject: "Compliance with Standing General Order 2021-01 Reporting Requirements," Avride Inc. Mirrored at https://oemdtc.com/investigation/AQ26003/
2. **Dow Jones / Morningstar, Adriano Marchese** (May 8, 2026): "U.S. Regulator Opens Safety Probe into Avride's Self-Driving System" — ODI opened a preliminary evaluation after 16 Texas crashes; lane changes into other vehicles, failure to slow/stop for traffic ahead, striking stationary objects; "excessive assertiveness and insufficient capability."
3. **Reuters via Business Insurance** (May 8, 2026): "US opens probe into startup Avride self-driving crashes in Texas" — 16 crashes of concern, Dallas/Austin, one minor injury, ~200-vehicle fleet, Hyundai Ioniq 5 platform, Uber partnership.
4. **zagdaily** (May 2026): "US safety regulator investigates Avride self-driving crashes" — all 16 crashes had a trained safety monitor behind the wheel; incidents December 2025–March 2026; at least one crash with a passenger aboard; Avride statement on mitigations.
5. **IIHS / repairerdrivennews** (July 28, 2026): IIHS analysis of AV crash data — "the SGO database... is the only national data collection tool for crashes involving self-driving vehicles," but companies are not obligated to report miles logged, so crash RATES cannot be computed; only Waymo reports driverless VMT voluntarily.

## Verified facts
- **AQ26003 opened September 14, 2026.** ODI "identified several incident reports submitted by Avride in response to SGO 2021-01 with potentially incomplete or inaccurate information."
- Certain reports stated Avride was "not aware of any injuries" at submission; some stated police reports were available. ODI obtained the police reports (including for crashes where Avride did NOT list police reports as a data source). The police reports "indicate potential injuries were sustained by occupants of Avride vehicles and/or occupants of other vehicles."
- ODI also found SGO reports that initially stated "an injury was reported or alleged," but whose subsequent UPDATED reports indicate "no injuries were alleged." Injuries downgraded between filings.
- The audit will assess "whether any reports of prior incidents remain outstanding and whether the reports that were submitted reflect complete and accurate data." Six SGO report IDs cited: 31101-13612, 31101-13761, 31101-14509, 31101-14813, 31101-15099, 31101-15189.
- **May 2026 PE:** 16 crashes in Dallas and Austin (Dec 2025–Mar 2026), ADS engaged in every case, trained safety monitor behind the wheel in all 16. Failure modes: lane changes into other vehicles' paths, failure to slow/stop for traffic ahead, striking stationary objects partially blocking the road. ODI: behavior "may indicate excessive assertiveness and insufficient capability" and "could constitute traffic safety violations." One minor injury reported.
- **Avride background:** spun out of Yandex's self-driving division; subsidiary of Nebius (Netherlands, formerly Yandex NV); partnered with Uber in 2024; Uber+Nebius strategic investments up to $375M; robotaxi rides via Uber app in Dallas from December 2025; fleet ~200 Hyundai Ioniq 5s, adding dozens monthly.
- **SGO 2021-01** (third amendment April 2025): requires ADS operators to report crashes meeting severity thresholds within 5 calendar days, plus updated reports. It is the only national AV crash dataset. FARS has no field for ADS engagement.
- **IIHS July 2026:** since companies need not report miles, "it is impossible to know how common it is for their vehicles to crash" — the denominator problem.

## FARS cross-reference (site's original contribution)
- FARS 2014–2023 contains zero fields for ADS/ADAS engagement (standing site finding; see #1180 comma piece). The SGO database is therefore the ONLY federal lens on robotaxi crashes — and AQ26003 shows that lens was smudged: injuries present in police reports, absent or downgraded in the company's SGO filings. A crash database that undercounts injuries cannot produce a trustworthy injury rate even before the missing-mileage denominator problem IIHS flagged.

## Actionable takeaways (required)
- Riders: robotaxi crash statistics quoted by operators ("X million miles, Y incidents") are built on self-reported data NHTSA is now auditing for completeness. Treat operator safety claims as unaudited until the AQ resolves.
- Everyone: the SGO database is public at nhtsa.gov — the six cited report IDs (31101-13612 et al.) are downloadable. Watch whether AQ26003 escalates or closes.
- Policymakers' angle: IIHS's fix (mandatory mileage reporting) remains unadopted; without it, no crash rate — with injuries or without — can be computed for any AV operator.

## Counterargument (strongest)
Avride's defense has real structure: all 16 crashes had a trained safety monitor aboard (these were supervised miles, not driverless); the company says it reported every incident as required and has implemented "targeted technical and operational mitigations" per incident; police-report injury indications are preliminary and often revised; an audit query is a standard compliance review, not a defect finding; and SGO's 5-day reporting clock practically guarantees early filings get revised as facts come in. The downgrades may reflect genuine information updates, not deception.

## Limitations
- AQ26003 is an audit, not a defect investigation; NHTSA has made no finding of a violation and the review may close with no action.
- We have the resume's characterization of the police reports, not the reports themselves; "potential injuries" is ODI's phrasing.
- The May PE's scope (16 crashes, Dec 2025–Mar 2026) vs. the AQ's six cited reports may overlap partially; the exact overlap is not public.
- No defect found in Avride's driving system by either action to date.
