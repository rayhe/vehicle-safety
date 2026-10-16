# Research: comma.ai openpilot Federal Probe (PE26007)
**Article #1180** | Slug: `1180-comma-openpilot-federal-probe` | Journalist: Vin Wreckage | Date: 2026-10-15

## Kill test
**Verdict: PROCEED.** First NHTSA probe of an aftermarket/open-source driver-assist system after 3 deaths. No existing Crash Report story on comma. The angle nobody else took: FARS itself is blind to these crashes (no ADAS-engagement field), so the five SGO crash reports are the only federal window into a 404-million-mile experiment running on public roads. Plus the "THIS IS NOT A PRODUCT" paradox is peak Existential Dread.

## Primary sources (3+)
1. **NHTSA ODI Investigation Resume, PE26007** (Sept 21, 2026) — primary federal document. Subject: "Crashes involving comma.ai driving automation products." Investigator Neil Dold, reviewer Scott Simmons, approver Tanya Topka. Mirrored at https://oemdtc.com/investigation/PE26007/
2. **The Auto Wire, John Lloyd** (Sept 30, 2026): "A $999 Box Promises Hands-Free Driving. Its Own Code Says 'THIS IS NOT A PRODUCT.' Now NHTSA Is Investigating Crashes That Killed Three." https://theautowire.com/2026/09/30/federal-probe-targets-comma-driver-assist-devices-after-fatal-rear-end-crashes/ — links the NHTSA resume PDF (static.nhtsa.gov), comma.ai homepage, openpilot GitHub repo, comma safety doc.
3. **Electrek** (Sept 24, 2026): "NHTSA investigates comma.ai's openpilot over 5 crashes that killed 3." https://electrek.co/2026/09/24/comma-ai-openpilot-nhtsa-investigation-crashes/
4. **VitalLaw / Wolters Kluwer** (Oct 2026): ODI investigation summary citing PE26007. https://www.vitallaw.com/news/nhtsa-news-odi-investigation-nhtsa-probes-crashes-tied-to-aftermarket-driving-automation-devices/lld0176c2f60b6b99458d87014fcbef96ec68
5. **webpronews** (Sept 24, 2026): probe background, fork liability angle. https://www.webpronews.com/nhtsa-launches-probe-into-comma-ai-aftermarket-driver-systems-following-five-crashes-and-three-deaths/

## Verified facts
- PE26007 opened **September 21, 2026** by NHTSA Office of Defects Investigation.
- Products: **comma three, comma 3X, comma four** hardware + **openpilot** software. Population: **~30,000** devices.
- **Five crashes**: vehicles with comma devices struck stopped or slow-moving vehicles in the same travel lane.
- **Two crashes killed three people. Four of the five crashes injured eleven others**, some seriously.
- ODI confirmed the comma system was **powered on or engaged in "multiple" crashes** (not all). Early data: system "may not have adequately detected or responded to the in-lane vehicles."
- Triggers: **Standing General Order 2021-01** crash reports + one consumer complaint + police outreach.
- **Feb 2026, Ascension Parish, Louisiana**: 2022 Toyota RAV4 fatal crash; device "appears to have been running 3rd party non-comma software" (a fork).
- **Sept 2025, Missouri**: 2020 Honda Accord, openpilot "verified engaged," rear-ended a stopped car at **82 mph**; driver reportedly fell asleep; lawsuit filed.
- comma marketing: "hands free driving for the car you already have," 15-minute self-install, software that "can drive for hours without intervention." comma four = **$999**, 30-day trial. Claims 30,000+ cars, **404 million miles**.
- openpilot GitHub repo: alpha-quality research software, **"THIS IS NOT A PRODUCT"** (all caps), users must indemnify Comma.ai.
- comma safety doc: "driver alertness is necessary, but not sufficient."
- **~11,400 forks** of openpilot on GitHub. NHTSA resume: when a modified version is in a crash, ODI will evaluate it and consider components shared with comma's software. comma bans noncompliant forks from its servers.
- **2016 history**: founder George Hotz cancelled the comma one after NHTSA inquiry ("Would much rather spend my life building amazing tech than dealing with regulators and lawyers").
- PE is the first formal step; can close, escalate to Engineering Analysis, or lead to recall push.

## FARS cross-reference (site's original contribution)
- **Honda Accord**: 7,102 deaths 2014-2023, rate 3.07 — the Missouri 82-mph crash vehicle. Accord is one of the deadliest nameplates in the dataset.
- **Toyota RAV4**: 897 deaths, rate 0.19 — the Louisiana fork crash vehicle.
- **The blindness point**: FARS has NO field for ADAS/aftermarket-automation engagement (see existing stories adas-crash-data-asymmetry, fars-defect-blind-spot). These five crashes are invisible in the site's own 2014-2023 dataset. The SGO reports are the only federal lens. That is the novel finding: a 404-million-mile driving experiment whose crash outcomes FARS structurally cannot see.

## Actionable takeaways (required)
- comma/openpilot owners: treat stopped traffic as a manual-driving event; cover the brake when traffic stacks up ahead.
- Fork users: know what your fork changes; post-crash, software version is the first thing investigators check.
- Insurance: disclose the device; an undisclosed control-system modification is a coverage dispute waiting to happen.
- All readers: watch the PE26007 docket; check VIN-level recalls at nhtsa.gov/recalls.

## Counterargument (strongest)
comma's defenders: 404 million miles with five known crashes under investigation is a crash rate far below the human baseline; the marketing says "hands free" but the fine print demands an alert driver; the Missouri driver fell asleep (misuse, not defect); the Louisiana car ran third-party fork software comma didn't write. NHTSA has not found a defect; PE is preliminary.

## Limitations
- FARS 2014-2023 predates most of these events (2025-2026 crashes); cross-ref is contextual, not causal.
- ODI has confirmed engagement in only "multiple," not all five crashes.
- Fork vs. stock software attribution unresolved per-crash.
- No defect found; investigation may close with no action.
