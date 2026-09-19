# Critic Panel: 939-gm-blank-camera-sequel (Clara Rollover)

## Round 0 scores

### 1. General Editor — 9.0
House template followed exactly: kicker, headline, lede with bolded key stat, pull stat, body, references, limitations, counterargument, disclaimer. The lede lands the paradox in the third sentence (a screen that shows nothing and a driver who finds out by backing over something). Paragraph order builds without backtracking (recall facts, mandate history, who buys these cars, the 2023 blank-panel precedent, the failure-mode analysis, action). 596 prose words, inside the site's actual 700-1200 convention.

### 2. Voice Coach — 9.0
Clara's consumer-advocate voice is unmistakable: the catchphrase opener ("Before you sign that lease, you might want to see this"), the buyer-class anger ("Young families, first-time buyers, people stretching to a new car"), the plain-spoken verdicts ("blank screens, round two", "that is not paranoia"). Cannot be swapped with Rex's noir or Mia's engineering-nerd. No banned phrases (extended list also checked). Hard gates verified by script: em dashes 0, The-starters 12.5%, rhythm PASS (variance 133.1, short 16.7%, long 45.8%). One rhythm revision was required (short_pct 37.5 -> 16.7 by merging fragments); the kept punches ("No warning light, no chime.") still land.

### 3. Ethics Reviewer — 9.0
The piece resists the easy scare: it states outright that no injury is tied to this defect in any source and refuses to invent one ("I will not invent one"). GM is not accused of cover-up; the fix is free, letters are out, and the dealer-only constraint is reported as fact, not negligence. The mandate-history section credits the technology's success (78% fewer dead kids) before indicting its failure, so the reader cannot misread "recall" as "cameras are useless". Advice is concrete and safe (VIN lookup today, dealer visit, drive like the camera does not exist).

### 4. Social/Shareability — 9.0
Headline is a paradox engineered for sharing ("300,000+ GM SUVs Just Got Recalled Because the Backup Camera Shows Nothing"). Pull stat (78%) is the cleanest number in the piece and gives readers the one fact they will repeat. The "second blank-screen recall on the same cars" is the detail that travels in comments. Timeliness is maximal: recall published Sept 17, article dated Sept 19.

### 5. Legal Accuracy — 9.0
NHTSA campaign 26V539000 details (affected models, component, consequence, dealer-only remedy, owner-letter dates, GM number A262554900, VIN searchability since Aug 20) fetched from api.nhtsa.gov the same day. The 23V744000 2023 precedent likewise from the NHTSA API. Both external URLs (Contemporary Pediatrics study page, DOT FMVSS 111 final-rule announcement) opened and read live through the browser today; curl 403s were WAF bot-blocking, not missing pages. Every stat quoted from the DOT page verified against the live text (210 deaths, 15,000 injuries, 31% under-5, 26% 70+, 58-69 lives). No liability claims beyond the documented defect. The "300,000+" figure is attributed to industry briefing coverage, disclosed in limitations.

### 6. Research Rigor — 9.0
Original contribution: (a) connecting 23V744000 (2023 blank instrument panel, same nameplates) to 26V539000 (2026 blank backup camera) as a two-recall blank-screen pattern, which no coverage I found had done; (b) the dealer-only vs OTA contrast for the remedy, which determines the real-world fix timeline; (c) the failure-mode framing ("2026-era confidence with 2017-era habits") linking driver behavior to the mandate's conditional success. Limitations are specific (no injuries reported, unit count is briefing-reported not NHTSA-stated, study cohort scope). Counterargument stated at full strength and conceded where fair (free fix, routine hardware swap, different failure mode than 2023).

### 7. Data Presentation — 9.0
Pull stat (78%) plus inline absolute/relative frames (210/15,000 baseline, 7.2-to-2.7 rate, 58-69 lives/year) give both scale and rate. The model-year list is specific enough to act on. Headline now carries the "+" to match the "more than 300,000" sourcing; the lede uses "more than 300,000" with the campaign citation.

## VERDICT: SHIP
Average 9.0, all seven critics >= 8.5, all hard gates pass (em 0, banned 0, The 12.5%, rhythm PASS, CSS class story + style.css, JPEG valid 1920x1280 ?v=761f9c6d). One rhythm revision consumed before panel; no further rounds needed. Queued SHIP_BLOCKED for 2026-10-10 (1/day; queue drains through 10-09 with #938).
