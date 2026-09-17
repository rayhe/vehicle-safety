# Research: #919 — Toyota C-HR EV Overcharge Shutdown (26V570 / 26TA17)

## The news (Sept 2026)
- **NHTSA campaign 26V570, Toyota internal 26TA17**, filed Sept. 2, 2026.
- **8,521** model-year 2026 Toyota C-HR battery electric vehicles recalled.
- Affected builds: **Feb. 6 – July 10, 2026** (per Toyota's Sept. 9 NHTSA letter; initial Sept. 2 notice said ~10,000).
- Defect: software programming error in the battery EV electronic control unit (BEV ECU). The ECU is supposed to cap charging when the pack nears full; the bug means it does not always do so.
- Trigger condition (Toyota filing via Carscoops/autonext): **high state of charge + low ambient temperature + sustained regenerative braking** — e.g., fully charged overnight, driving downhill on regen in the cold.
- Consequence: battery overcharges → warning lights + buzzer → electric drive system shuts down → **loss of motive power while driving**. NHTSA classifies it as loss of drive power, increased crash risk.
- **Discovery chain:** Toyota found the fault in **April 2026 while testing a prototype of an undisclosed future BEV**, audited the ECU family across its EV lineup, and identified the shipped 2026 C-HR as carrying the same logic. The car that caught the bug does not exist yet.
- **Zero warranty claims, zero field reports** — recall issued on prototype-test data before any real-world failure.
- Remedy: free dealer BEV ECU software reflash. Owner letters **Oct. 18, 2026**. Toyota: 1-800-331-4331.
- Not all 8,521 sold in the US; European C-HR+ is the same car (possible overseas extension, unconfirmed).
- Second e-TNGA battery-control software campaign in ~3 months: June 2026 26V393 (bZ, Lexus RZ, Subaru Solterra — 16,200–20,991 vehicles per source) was also a battery ECU shutdown fault.

## Kill test: genuinely newsworthy? Novel angle?
- **Passes.** The hook is the backwards chronology: the defect was found on a prototype of a car that hasn't launched, which then audited and recalled a car already in driveways. Nobody else has written that angle — coverage (Carscoops, USA Today, autoblog, electrek) is straight recall notices.
- Original contribution: the **two-campaign tally** — Toyota has now recalled two generations of e-TNGA battery ECUs for the same class of fault (overcharge/limit-logic → drive shutdown) within ~3 months, both software, both zero-field-failure. Combined: ~25,000–29,500 EVs. Plus the pattern observation: the guardrail logic (overcharge protection) is itself the failure point — the battery's safety logic kills the car to save the battery.
- Timeliness: filed 15 days ago; owner letters go out in ~1 month. Actionable window is open now.

## Strongest counterargument (must appear in article)
- This is arguably the system working: Toyota found a latent software bug in prototype testing, audited its whole EV lineup, and recalled before a single owner experienced it. Zero claims, zero injuries. Many automakers would have shipped the ECU patch silently and waited for field data.
- The shutdown is not a failure of protection — it IS protection: the drive system kills power to prevent battery overcharge damage. An overcharged lithium pack is a fire risk; a coast-to-stop is the lesser hazard. The cure (shutdown) looks dramatic but beats the alternative.
- Loss-of-motive-power at speed keeps power steering/braking (12V systems) — the June bZ campaign explicitly noted this; coasting to the shoulder is survivable.

## Limitations (must appear in article)
- FARS 2014–2023 contains no 2026 C-HR EV — zero exposure in the crash data. This is a recall-forensics piece, not a fatality-rate piece.
- June 26V393 population numbers vary by source (16,200 per Toyota USA Newsroom via our bZ research; 20,991 per The EV Report). Use ranges, don't merge into a false-precise total.
- The exact overcharge mechanism (how far past 100%, cell-level behavior) is Toyota's internal engineering detail — not in the public filing. The regen/cold/high-SoC trigger is as described by secondary outlets from the filing; treat as directional.
- Future BEV prototype is undisclosed; any speculation about which car it is (Electric Highlander, also delayed this month per autonext) must be labeled as speculation or omitted.

## Actionable takeaways (required)
- Own a 2026 C-HR EV: check your VIN at nhtsa.gov/recalls (26V570) — don't wait for the Oct. 18 letter. Dealer BEV ECU reflash is free; call Toyota at 1-800-331-4331.
- Until patched: avoid the trigger cocktail — 100% overnight charge + cold + long regen descents. Charging to 80–90% for daily driving is good practice regardless.
- Shopping: first-model-year EVs keep getting bitten by software (this is Toyota's second battery-ECU campaign this year on e-TNGA). Budget for a dealer visit in year one of any new EV platform.

## Sources (3+ primary)
1. NHTSA recalls database / Part 573 filing, campaign 26V570 (filed Sept. 2, 2026). https://www.nhtsa.gov/recalls
2. Carscoops, "Testing Of A Mysterious Future Toyota EV Sparked A Recall Of The New C-HR," Sept. 2026 (April prototype discovery, regen/cold/high-SoC trigger, Feb 6–Jul 10 build window, zero claims). https://www.carscoops.com/2026/09/toyota-c-hr-recall/
3. The EV Report, "Toyota Recalls 8,521 C-HR EVs for Power Loss," Sept. 2026 (26V570, Toyota 26TA17, Oct. 18 letters, 26V393 June context). https://theevreport.com/toyota-c-hr-recall-power-loss
4. USA Today, "Toyota recalls over 8,000 vehicles. See affected model," Sept. 11, 2026 (8,521 count, BEV ECU update, Oct. 18 notification). https://www.usatoday.com/story/cars/recalls/2026/09/11/toyota-electric-vehicle-recall-september-2026/91717891007/
5. autonext.co, "Toyota recalls 8,521 electric C-HRs," Sept. 2026 (NHTSA 26V570000, European C-HR+ same car). https://www.autonext.co/news/toyota-c-hr-ev-recall-8521-battery-ecu-europe-c-hr-plus-same-car
6. Site prior research: drafts/toyota-bz-ev-recall-learning-curve-research.md (June 26V393 bZ/RZ context).

## Slug / journalist
- Slug: `919-toyota-chr-overcharge-shutdown`
- Journalist: **Rex Driverton** (investigations, paradoxes; deadpan noir — the backwards-chronology hook is his beat). Last: Mia Crumplezone (#918).
- Kicker: Investigation
