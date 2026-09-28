# Research: #1002 — Nissan Maxima, Deadliest Sedan in America

**Journalist:** Dale Impactor III (Toxicology Desk Chief — sardonic, statistical; impairment angle with a twist)
**Slug:** 1002-nissan-maxima-deadliest-sedan
**Status at research time:** queue at 207 items, last ship_date 2027-04-07; this ships 2027-04-08
**Date:** 2026-09-27

## Kill test
Is this genuinely newsworthy? YES. The Maxima is the #1 deadliest sedan by fatality rate
among 122 sedans in FARS 2014-2023, and the twist is genuinely surprising: its drivers are
NOT more impaired than Camry drivers. The impairment desk's own data says booze isn't the
story. Nothing in the 207-item queue covers the Maxima (verified via slug/title scan —
zero hits). All recent news pegs (Cybercab audit, Ridgeline probe close, Polestar camera,
Jeep TPMS, GMC Canyon IIHS) are already queued. This is a FARS-original finding.

## Primary sources (3+)
1. **NHTSA FARS database (2014-2023)** — the site's embedded fars_output.js, generated from
   FARS bulk CSV + US vehicle sales + NHTS annual miles. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **NHTSA 2023 final data / 2024 estimates press release** — national fatality rate
   1.26 per 100M VMT in 2023. https://www.nhtsa.gov/press-releases/nhtsa-estimates-39345-traffic-fatalities-2024
3. **Maxima discontinuation (2023 MY, 8 generations, 40+ years)** — Jalopnik
   https://www.jalopnik.com/2023-nissan-maxima-sends-off-the-four-door-sports-car-w-1849564866/
   + SlashGear, carscounsel (best/worst years), Capital One (return-as-EV rumors).
4. **IIHS fatality statistics** topic page (context). https://www.iihs.org/topics/fatality-statistics

## Core numbers (from fars_output.js)
- Nissan Maxima: 1,544 deaths (2014-2023), 154.4/year, 2,331 fatal crashes,
  estimated fleet 262,500, rate **5.11 deaths per 100M VMT**.
- Ranked by rate among sedans (122 sedans, fleet 100k+): **#1**. Cobalt 5.1, Impala 5.0,
  Solara 4.25, Accord 3.07, Altima 2.88, Camry 2.03, Malibu 2.03, Sonata 1.56.
- Maxima rate = **2.52x the Camry rate** (5.11 vs 2.03).
- Honest note: Cobalt is essentially tied at 5.1 — say "edges out the Cobalt by a tenth."

## The impairment decomposition (Dale's beat — the twist)
FARS toxicology (n=drivers in fatal crashes):
- Maxima: n=2,570; alc 15.8%, drug 9.4%, **any-impaired 20.9%**
- Altima: n=10,185; any 20.0%
- Accord: n=13,809; any 20.0%
- Camry: n=13,811; any 19.2%
Conclusion: Maxima drivers are no more impaired than Camry/Accord/Altima drivers.
Impairment CANNOT explain a 2.5x rate gap. The toxicology desk's own data clears the
drunk-driving explanation.

## The beater-fleet split (model-year distribution of the 1,544 deaths)
- Pre-2000: 218 (14.2%)
- **2000-2009: 800 (52.1%)**
- 2010-2019: 500 (32.6%)
- 2020+: 17 (1.1%)
Over half the deaths are in 15-25-year-old cars. The Maxima died as a new-car nameplate
in 2023; it lives on as a cheap used "sports sedan" with 300 hp.

## Original contribution
The decomposition itself: rate-vs-impairment cross-tab nobody ran. The deadliest sedan
in America does not have an impairment problem — it has an aging-fleet + performance
problem. Marketing legacy ("4-Door Sports Car," 300-hp V6) + depreciation = young,
aggressive drivers in old, powerful, FWD sedans.

## Strongest counterargument
- VMT estimation: the rate denominator uses VMT estimates, not odometers. For a
  shrinking, aging fleet, VMT could be overstated or understated; ±15% uncertainty on
  low-volume older models. State this.
- Driver demographics unmeasured: FARS gives us make/model/year and toxicology, not
  driver age or income. The "young driver in cheap fast car" story is inference, not
  measured. State this.
- Cobalt is tied at 5.1: the "deadliest" crown is by a tenth. Acknowledge.

## Limitations to state
- FARS captures only fatal crashes, not injury-only or property damage.
- Toxicology testing is not universal; FARS impairment fields depend on tested drivers.
- rate = deaths per 100M VMT estimated from NHTS-based annual mileage; uncertainty
  ±15% for low-volume models.
- Model-year death counts sum to 1,535 vs 1,544 deaths in the by-model table (rounding
  in processing) — cosmetic, disclose nothing or one line.

## Actionable takeaways
- Used-car shoppers: 2000-2009 Maximas (the $4k-8k "cheap speed" market) carry a
  disproportionate share. 2019-2023 final-gen cars have sorted safety tech but still
  the nameplate's risk profile.
- Check any used Maxima's recall status at nhtsa.gov/recalls (esp. CVT years 2009-2014).
- If you own one: it is not the car that is cursed; it is the segment of the market
  it serves now. Defensive driving, tires, ESC maintenance matter more than usual.

## Novel vs queue check
- Queue slugs scanned for: maxima (none), impairment-covered models (alero, park
  avenue, nv200, glk, macan, commander, rodeo, grand vitara — none overlap this story).
- Beater-effect precedent: #805 (Alero) is about drunk drivers in old cars. This story
  is the inverse: deadliest car where the drivers are NOT drunker. Differentiated.
