# DESIGN.md — The Crash Report Visual Identity & UI Roadmap

## Brand Identity

### Name & Tagline
- **Name:** The Crash Report
- **Tagline:** "Every fatal crash in America, charted."
- **Voice:** Data journalism meets dark humor. Think ProPublica's rigor + Jalopnik's personality.

### Logo Concept
- SVG favicon/logo: a stylized crash test dummy silhouette inside a speedometer/gauge
- Or: a bar chart where one bar is a red car outline
- Compact, works at 16px and 192px
- Colors: red accent (#D32F2F) on dark background

### Color Palette
**Light mode:**
- Background: #FAFAFA → warm white
- Cards: #FFFFFF with subtle shadow
- Text: #1A1A1A
- Accent: #D32F2F (crash red) — shift from blue to red for brand identity
- Secondary accent: #1E90FF (data blue — for charts)
- Muted: #666

**Dark mode:**
- Background: #121212
- Cards: #1E1E1E
- Text: #E0E0E0
- Accent: #FF5252
- Secondary: #4DA6FF

### Typography
- **Headlines:** Inter or system sans-serif (move away from monospace for headers)
- **Body:** System sans-serif stack
- **Data/tables:** Keep monospace for numbers and code
- **Font stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

## Current State (July 2025)
- ~~Monospace everything~~ → *Fixed: Inter sans-serif for all UI, monospace only for data values/tables*
- No logo/favicon → *Fixed: logo.jpg + favicon PNGs added* *(SVG logo still needed)*
- ~~Header is plain text~~ → *Fixed: proper masthead with logo, bold title, tagline*
- ~~Story cards are basic boxes~~ → *Fixed: CSS grid layout, hero images, hover lift+shadow, card body structure*
- Charts are functional but not polished
- ~~No hero imagery~~ → *Fixed: hero images on story cards*
- Mobile experience is passable but not great
- *New: Brand accent color shifted from blue (#1E90FF) to crash red (#D32F2F)*
- *New: 3-column editorial footer with About/Data/Contribute sections*
- *New: Story cards now use proper journalist bylines from JOURNALISTS.md*
- *New: Smooth tab transitions with keyboard navigation (arrows, 1-6, /)*
- *New: Rich structured tooltips with danger highlighting*
- *New: ARIA accessibility on tabs, panels, and chart canvases*
- *New: Click-to-highlight table rows, scroll-to-top button*
- *New: Theme toggle with emoji icons*
- *New: Vehicle comparison mode — checkbox-select vehicles, sticky tray, side-by-side visual comparison panel*

## Design Targets (Modern Auto Journalism)
Reference sites: The Autopian, Jalopnik, Road & Track, Car and Driver, Hagerty

### Header/Masthead
- Bold site name with logo mark
- Subtle tagline
- Navigation tabs styled as editorial sections (not app-style tabs)
- Dark mode toggle integrated elegantly

### Story Cards (Findings tab)
- Large hero image (when available)
- Kicker tag in accent color
- Bold headline
- 2-line deck/teaser
- Journalist byline with small avatar icon
- Date
- Hover effect: subtle lift + shadow

### Data Tabs
- Section headers with editorial flair
- Better chart legends
- Smoother transitions between tabs
- Summary cards with more visual punch

### Footer
- Proper editorial footer: about, methodology, GitHub link
- Source attribution
- "Powered by NHTSA FARS data"

## Iterative Improvement Plan

### Phase 1: Foundation (Week 1)
- [ ] Generate SVG logo/favicon *(still using logo.jpg, needs custom SVG)*
- [x] Switch header typography to sans-serif *(done: Inter from Google Fonts, sans-serif for all UI, monospace only for data values)*
- [x] Redesign story cards with image support *(done: CSS grid layout, card hover lift+shadow, proper card body structure, removed inline styles)*
- [x] Add proper editorial header/masthead *(done: centered masthead with logo, bold Inter h1, tagline "Every fatal crash in America, charted.")*
- [x] Improve tab navigation styling *(done: centered tabs, 3px bottom border, Inter font, editorial feel)*

### Phase 2: Polish (Week 2)
- [x] Redesign footer *(done: 3-column grid footer with About/Data/Contribute sections, proper bottom bar)*
- [x] Improve chart styling (rounded bars, better tooltips) *(done: bar radius 3→5, horizontal gradient fills that fade at edge, vertical gradient on national chart, tooltip gets accent left-border + slide-in animation + blur backdrop + tabular-nums + mini bar component, all 4 chart types updated)*
- [x] Add smooth tab transitions *(done: CSS fade 0.25s, keyboard nav with arrow/number keys)*
- [ ] Better mobile hamburger menu
- [x] Story page layout improvements *(done: centered 680px reading column, larger body text 1rem with 1.8 line-height, centered pull-stats at 3rem, proper .story-hero class, reading-time/share-link row styling, first-paragraph emphasis)*

### Phase 3: Features (Week 3+)
- [x] Reading time estimates on stories *(done: ☕ X min read badges on all 20 story cards in index.html + reading-time div on all 20 story pages after dateline, computed from word count at 250 wpm)*
- [ ] Related stories section
- [ ] Newsletter signup placeholder
- [ ] Social share buttons on stories
- [x] "Most dangerous vehicles" featured widget *(done: dynamic top-10 widget above story grid with 3 toggle views — Per Mile rate, Total Deaths, Impairment %. Reads from FARS_BY_MODEL and FARS_TOXICOLOGY. Responsive grid, mini bar charts, click-to-navigate to By Model tab. Filters for fleet ≥100K on rate view, ≥200 drivers on impairment view for statistical significance.)*
- [ ] Google account login (Firebase Auth) for article comments
- [ ] Firebase-backed comment system on each story page
- [ ] Comment moderation (spam filtering, report button)
- [ ] Commenter profile with display name + avatar from Google
- [ ] "Most discussed" badge on story cards with high comment counts
- [ ] Upvote/downvote on comments
- [ ] Email notification for replies (via Firebase Cloud Functions)

### Data UX Track
- [x] Vehicle comparison mode *(done: checkbox-select up to 5 vehicles from By Model or Toxicology tables, sticky comparison tray with chips, expandable panel shows side-by-side visual bar charts for deaths, rate, fleet, and impairment metrics; shake animation when limit reached)*
- [ ] Better chart interactions (hover, click, zoom)
- [ ] Improved table sorting visual indicators
- [ ] Search/filter enhancements (autocomplete, recent searches)
- [ ] Better tooltips with richer data
- [ ] Performance optimization for large datasets
- [ ] Export comparison/data as CSV or image

## Self-Improvement Process
Each hourly design cycle should:
1. Read this file for current state and priorities
2. Pick one item from the current phase
3. Implement it
4. Update this file: check off the item, add notes on what was done
5. If the current phase is complete, plan the next phase
6. Add any new ideas discovered during implementation
