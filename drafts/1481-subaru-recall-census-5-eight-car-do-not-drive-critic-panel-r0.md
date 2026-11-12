# Critic Panel — #1481: Subaru Recalled Its New Cars 5 Times. Eight Cars Got a Do-Not-Drive Order.

**Round:** 0
**Date:** November 12, 2026
**Journalist:** Clara Rollover
**Draft:** drafts/1481-subaru-recall-census-5-eight-car-do-not-drive.html

## Hard gates (regex = source of truth)

- **Em dashes (literal):** 0 (max 3) — PASS
- **Banned phrases** ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): 0 — PASS
- **"The" sentence starters:** 1 of 51 sentences (2.0%, max 15%) — PASS
- **CSS class check:** `class="story"`, links `../style.css`, no `story.css` — PASS
- **Hero image:** drafts/1481-subaru-recall-census-5-eight-car-do-not-drive.jpg, real JPEG (FF D8), 1920x1280, 516,518 bytes, `?v=db38cad1` — PASS
- **Sentence rhythm** (sentence-rhythm-check.py --json): variance 852.1 (target >= 200), short 3.6% (target <= 15%), long 58.2% (target >= 15%) — PASS (first run failed at 28.8% short; 9 fragment merges fixed it before critique)

## 1. General Editor — 9.0/10

Structure is the series standard and it works: lede with the bolded key stat, pull stat, five body paragraphs (eight cars, sticker, middle three, honest accounting, actions), 10 references, disclaimer. Headline is punchy and the 8-vs-541,237 contrast does the work. Length is right for the format (~640 words of body). One nit: the middle paragraph carries three campaigns and runs ~230 words, the longest block in the piece, but each campaign earns a sentence and the paragraph is the only place all three fit without padding the article to six paragraphs. No revision demanded.

## 2. Voice Coach — 9.0/10

Clara's voice is present and distinct from Mia's engineering enthusiasm and Rex's noir: direct, practical, angry on behalf of consumers ("Eight people were told their cars might lose a wheel, and the mail takes two months", "the wrong-sticker club now has two members", "Read the filing date before you argue about the total"). No banned phrases, no AI tells, rhythm metrics pass with real variance after the fragment merges. One echo: "the polite way of saying" is a phrasing Rex has used, but it reads as Clara's dry consumer-advocate register here, not a voice swap. No revision demanded.

## 3. Ethics Reviewer — 9.5/10

No injuries or deaths to sensationalize, and the article does not invent any. Subaru gets fair credit for tracing the ball joint from a single field report and recalling eight cars by VIN instead of waiting. The do-not-drive order is stated plainly with the action attached, not hyped. The label recall is correctly framed as a paperwork defect with a real overloading consequence, not inflated into a crash story. No victim-blaming, no kids' names, no moralizing. The two-month letter gap is the one place the article criticizes Subaru on process rather than product, and it is fair.

## 4. Social/Shareability — 8.5/10

Headline is shareable ("Eight Cars Got a Do-Not-Drive Order"). The 8-car vs 541,237-car contrast is the line most likely to travel, and "fixed with a sticker in the mail" is a strong deck. The pull stat (5) is weaker as a share trigger than 1479's 27/844,511, because a small number does not shock on its own, but the range framing compensates. The moonroof-detachment detail (a glass panel coming off at highway speed) is a good secondary hook. Meets the bar.

## 5. Legal Accuracy — 9.0/10

Every campaign number, FMVSS citation, population, defect estimate, and date traces to a Part 573 filing, dealer bulletin, or the NHTSA API: 26V106 69,153/100% with the 66,332 revision noted, 26V346 69,663/2.9% with Webasto primer cause, 26V393 4,757 Solterra of 20,991 total with Toyota as filer, 26V436 541,237 with the per-model split (384,407 + 77,504 + 49,946 + 29,380) summing exactly, 26V685 8 cars with the Sep 15 field report and Dec 16 letters, 25V889 5,603 filed Dec 18, 2025. One factual error was caught during critique and fixed before scoring: the lede called 5 "the second-quietest count in the series" when Honda and Kia both sit at 4, making Subaru third-quietest. Fixed to "third-quietest". No invented citations; all 10 references are real URLs.

## 6. Research Rigor — 9.0/10

Original contribution is real: the corrected 5 census (44 queries), the 8-car minimum finding (smallest population in the series), the five-different-components finding, the 25V889 boundary case stated in the article itself, the shared-campaign double count (26V393 in Toyota's 15 and Subaru's 5), and the completed nine-brand table. Limitations are stated (filing window Jan 1-Nov 12, API vocabulary failure mode, campaign populations overlap so 684,818 is instances not unique vehicles, 26V106 stated two ways). Counterargument is at full strength (no powertrain/airbag/ADAS failures, eight cars identified by VIN, new EVs at zero) and answered, not strawmanned. One gap: the nine-brand table and the 684,818 sum live in the research file, not the article, same as 1480's precedent. Minor; does not block.

## 7. Data Presentation — 8.5/10

All five populations, all defect estimates, per-model counts, filing dates, and the zero-OTA finding are in the article. The 541,237-to-8 range is the organizing frame and it lands. The per-model table is carried in prose ("Forester 3, Crosstrek Hybrid 2...") rather than a rendered table, which matches the series precedent. The nine-brand table would have strengthened the piece but the article already carries the comparison in prose ("third-quietest count in the series"). Meets the bar.

## Verdict

| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.5 |
| Social/Shareability | 8.5 |
| Legal Accuracy | 9.0 |
| Research Rigor | 9.0 |
| Data Presentation | 8.5 |
| **Average** | **8.93** |

**All 7 critics at 8.5+ AND all hard gates pass → phase=SHIP (round 0, no revision).**
