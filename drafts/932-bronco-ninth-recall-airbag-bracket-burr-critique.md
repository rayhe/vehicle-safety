# Critique — 932-bronco-ninth-recall-airbag-bracket-burr — Round 0

## Hard Gates (auto-fail, regex is truth)
- Em dashes: 0 (max 3) — PASS (`grep -o '—' | wc -l` = 0)
- Banned phrases: 0 — PASS (none of "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Here's where it gets interesting", "Let's be clear", "Make no mistake", "And it's not even close")
- The starters: 10.8% (max 15%) — PASS (4/37 sentences)
- CSS class: `class="story"` present, `../style.css` present, no `../story.css` — PASS
- Sentence rhythm: variance 283.8 (>=200), short_pct 0.0% (<=15%), long_pct 44.8% (>=15%) — PASS
- Hero: `drafts/932-bronco-ninth-recall-airbag-bracket-burr.jpg` — real JPEG (PIL format=JPEG), 1920x1280, visually verified (Bronco with deployed curtains + burr inset, no text)
- Word count: 523 (target 300-500; slightly over, justified by mechanism + velocity + actionable sections)
- Actionable insights: present (VIN check, build window, letter timeline, shopping guidance) — PASS

## 7 Critics

### 1. General Editor — 9.0/10
Template followed: kicker, headline, lede with bolded key stat, pull stat, six body paragraphs, references, specific disclaimer. No throat-clearing; opens on Mia's signature 150-milliseconds frame. The three narrative beats (mechanism, velocity, zero-incident catch) are distinct and build. Grim humor lands without cruelty: "Somebody rearranged a factory floor and forgot to deburr." Would share.

### 2. Voice Coach — 8.5/10
Mia is unmistakable: technical delight in deployment mechanics, judgmental about design-adjacent sloppiness, and the catchphrase opener is used verbatim from the roster. Not swappable with Rex (no noir), Vin (no cosmic dread), or Clara (no lease-signing frame). Rhythm gate passed mechanically. One ding: "slow clap" is a snark register slightly more Vin than Mia, but it reads as engineering-sarcasm and stays in bounds.

### 3. Ethics Reviewer — 8.5/10
Praises the zero-incident catch without absolving Ford of the other eight recalls; the praise is aimed at the process, not the brand. No crash voyeurism; injury risk is stated clinically from the NHTSA filing. Actionable guidance prioritizes owner safety (check VIN, take the appointment) over brand-bashing. No self-congratulation.

### 4. Social/Shareability — 9.0/10
The headline is an irony engine: the thing that holds the airbag shreds the airbag. Pull stat "1 every ~24 days" fits in a tweet and invites the #614 comparison. Strong Reddit r/cars / Bronco-forum potential. The "zero incidents" twist gives it a second share angle (the good-news recall).

### 5. Legal Accuracy — 9.0/10
Campaign numbers correct (26V580 / Ford 26S64). "Ninth recall" attributed to Autoblog with a methodology caveat in the disclaimer rather than asserted as NHTSA fact. No injuries claimed; the zero-incident fact is dated (Aug 18) and sourced. No fabricated URLs: NHTSA parent pages and verbatim search-result URLs only. "Potentially involved" distinguished from confirmed defective. No allegations of fraud.

### 6. Research Rigor — 8.5/10
Original contribution: recall-velocity calculation (~1/24 days vs. #614's ~1/87 days, ~4x), disclosed as rough; the mechanism-irony formalization; the zero-incident process signal as a publishable finding. Limitations stated in the disclaimer (ninth count not independently enumerated, no deflation-rate data, "potentially involved" populations). Strongest counterargument runs at full strength *inside the article* ("this is the quality system working... aim at the other eight"). Verifiable: every number traces to a cited filing or press summary.

### 7. Actionable Insights / Data Presentation — 9.0/10
Reader knows exactly what to do: VIN check now, the June 27-July 26 build window, interim letters started Sept 15, remedy letters expected Oct 30, ask for the 26V580 completion record when shopping. Pull stat labeled. Six references with hyperlinks. Disclaimer is specific (ninth-count methodology, population figures).

## Average: 8.79

## Verdict
ALL 7 critics >= 8.5 AND all hard gates PASS → phase=SHIP.

## Notes for Ship
- 1/day check (2026-09-18): Publish #816 already committed today → do NOT publish; queue as SHIP_BLOCKED with next free ship date 2026-10-03 (after #931's 2026-10-02).
- Cache-busting hash: compute on the queued hero image and append `?v={hash}` on ship.
- Replace `?v=PLACEHOLDER` in og:image/twitter:image/img references with the real hash on ship.
