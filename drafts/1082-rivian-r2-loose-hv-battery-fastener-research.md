# Research: 1082 — Rivian R2 second recall, loose HV battery fastener (26V625 / FSAM-1888)

## Angle (1-2 sentences)
The 2027 Rivian R2's second recall is 14 cars with an under-torqued high-voltage battery fastener — but the bolt passed the plant's automated torque station and was caught by a human operator. The machine said the torque was fine. It wasn't.

## Kill test verdict: PROCEED
- Genuinely newsworthy: fresh NHTSA campaign (report received Sep 29, 2026; publicized week of Oct 5, 2026), R2 is Rivian's make-or-break mass-market EV, failure mode = sudden loss of motive power with zero warning.
- Novel contribution: (a) cross-make count of fastener/torque-related 2026 recall campaigns via NHTSA API (in progress); (b) the "machine-passed, human-caught" QC-escape framing with the NHTSA filing's own admission that the torque station was reprogrammed but no explanation of the misprogramming; (c) 100%-of-population defect estimate contrasted with zero complaints — caught on the factory floor, not in the field.
- Differentiated from #977 (Rivian FSAM-1866 backup-camera OTA): different recall, different campaign, hardware not software.

## Primary sources (all verified this run)
1. **NHTSA recall campaign 26V625000** (via NHTSA API, fetched 2026-10-06): Rivian Automotive, LLC; Component: `ELECTRICAL SYSTEM:PROPULSION SYSTEM:CRITICAL FASTENERS`; recall number FSAM-1888; ReportReceivedDate 29/09/2026; "A high voltage battery fastener may have been improperly tightened, causing a loss of drive power." Consequence: "A loss of drive power increases the risk of a crash." Remedy: inspect/repair free; owner letters Nov 28, 2026; contact 1-888-748-4261.
2. **NHTSA recall campaign 26V597000** (via NHTSA API, fetched 2026-10-06): first R2/R1 recall, FSAM-1866, BACK OVER PREVENTION:SOFTWARE, ReportReceivedDate 16/09/2026 — the backup-camera notification obstruction covered in #977. Establishes "second recall in under two weeks of NHTSA filings."
3. **autoevolution** (Oct 1, 2026): filing details — operator found under-torqued fastener Sep 17, 2026 after it passed the automated torque station; station reprogrammed to reject out-of-spec fasteners; filing gives no explanation for the subpar programming; bolt M6x1.0x24.5, part number SC00036202-D; affected builds May 18–Aug 27, 2026; zero customer complaints; no warning for failure. https://www.autoevolution.com/news/2027-rivian-r2-hit-with-second-recall-this-time-it-s-about-improperly-tightened-battery-fastener-276475.html
4. **oemdtc.com recall page 26V625** (NHTSA data mirror): units affected 14; manufacturer recall number FSAM-1888; owner notification Nov 28, 2026. https://oemdtc.com/recall/26V625000/
5. **newestcarsusa.com** (Oct 4, 2026): Rivian estimated 100% of the 14-vehicle recall population has the defect; discovery Sep 17 after a week-long investigation → voluntary recall. https://newestcarsusa.com/10901/rivian-r2-faces-new-recall-over-high-voltage-battery-fastener/
6. **Autoblog** (Oct 4, 2026): R2 "make-or-break EV" context; 14 MY2027 R2 examples; loss of motive power without prior warning. https://www.autoblog.com/news/rivians-make-or-break-ev-is-already-on-its-second-recall
7. **ConsumerAffairs weekly recall roundup** (Oct 5, 2026): 26V625 listed as "Improperly Tightened High Voltage Fastener May Cause a Loss of Drive Power." https://www.consumeraffairs.com/news/auto-safety-recall-derby-week-of-october-05-100526.html

## Original data work
- Cross-make 2026 fastener/torque recall count via NHTSA API: **FAILED** — the NHTSA recalls API rate-limited for the entire run (HTTP 400 on every call across ~90 attempts with retries and backoff, 10 major makes, Oct 6 evening). Documented in the article's Limitations section rather than hand-waved.
- Filing-to-filing timing: 26V597 (received Sep 16) → 26V625 (received Sep 29) = 13 days between NHTSA receipt of the R2's first two recalls.

## Key facts for the draft
- 14 vehicles, 2027 Rivian R2, built May 18 – Aug 27, 2026, Normal, Illinois.
- Defect: improperly tightened HV battery fastener → possible sudden loss of drive power; no driver warning; no complaints/incidents reported.
- Detection: factory operator spotted under-torqued fastener on Sep 17, 2026; the fastener had already passed the automated torque station. Rivian reprogrammed the station; filing does not explain the original misprogramming.
- Remedy: dealer inspection/repair (service visit — NOT an OTA, unlike recall #1). Owner letters start Nov 28, 2026.
- FSAM-1888 follows FSAM-1866 (Sep 2026, 98,828 R1/R2, backup-camera notification, OTA fix).

## Strongest counterargument (to state at full strength in article)
Fourteen cars. Zero complaints. Zero injuries. Zero field failures. Rivian caught this on the factory floor, reprogrammed the station within days, and told NHTSA voluntarily. This is the recall system working exactly as designed — a manufacturer self-reporting a contained manufacturing defect before anyone got hurt. Treating a 14-unit voluntary recall as a scandal would be innumerate alarmism; the actual story might be that Rivian's process caught a human-visible defect that automation missed.

## Limitations
- NHTSA API was rate-limited during research; the cross-make fastener count may need fallback sourcing.
- "100% of recall population defective" is Rivian's estimate reported via trade press; the Part 573 report itself was not directly readable in this run.
- No independent data on how many under-torqued HV fasteners fail in the field vs. pass lifetime service; NHTSA has no complaint records for this component on the R2 (complaint API returned nothing usable this run).
- Cannot verify R2 production volume for May–Aug 2026, so no rate can be computed against total output.
