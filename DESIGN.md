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
- [x] Generate SVG logo/favicon *(done: speedometer gauge SVG logo with needle in the red zone, "CR" text, gray→orange→red arc segments with tick marks; separate simplified favicon.svg for tab icon; masthead updated to use SVG with JPG fallback; SVG favicon added as preferred with PNG fallback chain)*
- [x] Switch header typography to sans-serif *(done: Inter from Google Fonts, sans-serif for all UI, monospace only for data values)*
- [x] Redesign story cards with image support *(done: CSS grid layout, card hover lift+shadow, proper card body structure, removed inline styles)*
- [x] Add proper editorial header/masthead *(done: centered masthead with logo, bold Inter h1, tagline "Every fatal crash in America, charted.")*
- [x] Improve tab navigation styling *(done: centered tabs, 3px bottom border, Inter font, editorial feel)*

### Phase 2: Polish (Week 2)
- [x] Redesign footer *(done: 3-column grid footer with About/Data/Contribute sections, proper bottom bar)*
- [x] Improve chart styling (rounded bars, better tooltips) *(done: bar radius 3→5, horizontal gradient fills that fade at edge, vertical gradient on national chart, tooltip gets accent left-border + slide-in animation + blur backdrop + tabular-nums + mini bar component, all 4 chart types updated)*
- [x] Add smooth tab transitions *(done: CSS fade 0.25s, keyboard nav with arrow/number keys)*
- [x] Better mobile hamburger menu *(done: hamburger button fixed top-right on mobile ≤768px, slide-in drawer from right with backdrop overlay, syncs active state with tab switching, closes on selection/backdrop click/Escape key, animated X toggle, body scroll lock when open, dark mode support)*
- [x] Story page layout improvements *(done: centered 680px reading column, larger body text 1rem with 1.8 line-height, centered pull-stats at 3rem, proper .story-hero class, reading-time/share-link row styling, first-paragraph emphasis)*

### Phase 3: Features (Week 3+)
- [x] Reading time estimates on stories *(done: ☕ X min read badges on all 20 story cards in index.html + reading-time div on all 20 story pages after dateline, computed from word count at 250 wpm)*
- [x] Related stories section *(done: `related-stories.js` auto-injects "Keep Reading" grid with 3 curated related articles on all 22 story pages; tag-based fallback for uncurated stories; card layout with hero image, kicker, title; responsive 3→1 column grid; dark mode support)*
- [x] Newsletter signup placeholder *(done: red gradient CTA banner above footer with email input, localStorage persistence — returning visitors see "You're subscribed as email@example.com", responsive mobile layout, green confirmation state; design-only, can wire to Mailchimp/ConvertKit later)*
- [x] Social share buttons on stories *(done: share-buttons.js auto-injects X/Twitter, LinkedIn, Facebook, Reddit + Copy Link bar after dateline on all 24 stories; platform-branded hover colors; clipboard feedback on copy)*
- [x] Open Graph & Twitter Card meta tags *(done: all 55 story pages now have og:title, og:description, og:type, og:url, og:site_name, twitter:card, twitter:title, twitter:description. Stories with hero images also get og:image + twitter:image and use summary_large_image card type for rich social previews. Previously 47/55 stories showed as plain links when shared on social media.)*
- [x] "Most dangerous vehicles" featured widget *(done: dynamic top-10 widget above story grid with 3 toggle views — Per Mile rate, Total Deaths, Impairment %. Reads from FARS_BY_MODEL and FARS_TOXICOLOGY. Responsive grid, mini bar charts, click-to-navigate to By Model tab. Filters for fleet ≥100K on rate view, ≥200 drivers on impairment view for statistical significance.)*
- [x] Reading progress bar on stories *(done: `reading-progress.js` auto-injects a thin accent-colored scroll progress bar at the top of all 42 story pages; fills as reader scrolls through article; turns green with "✓ Done" at 100%; percentage label shows briefly on scroll; dark mode support; also fixed 14 stories that were missing share-buttons.js and related-stories.js; deploy workflow updated)*
- [ ] Google account login (Firebase Auth) for article comments
- [ ] Firebase-backed comment system on each story page
- [ ] Comment moderation (spam filtering, report button)
- [ ] Commenter profile with display name + avatar from Google
- [ ] "Most discussed" badge on story cards with high comment counts
- [ ] Upvote/downvote on comments
- [ ] Email notification for replies (via Firebase Cloud Functions)

### Data UX Track
- [x] Vehicle comparison mode *(done: checkbox-select up to 5 vehicles from By Model or Toxicology tables, sticky comparison tray with chips, expandable panel shows side-by-side visual bar charts for deaths, rate, fleet, and impairment metrics; shake animation when limit reached)*
- [x] Better chart interactions (hover, click, zoom) *(done: click-to-pin tooltips with 📌 badge + close button, hover bar highlighting via transparent overlay canvas with accent top-edge, pointer cursor on interactive zones, click outside to dismiss pinned tooltip, findZone helper for all 6 charts)*
- [x] Improved table sorting visual indicators *(done: dual ▲▼ arrow indicators per column, active arrow scales up in accent color with CSS transitions, sorted column gets red-tinted background + 2px accent bottom border, inactive arrows fade to 0.25 opacity, hover brightens both to 0.5, dark mode supported)*
- [x] Search/filter enhancements (autocomplete, recent searches) *(done: autocomplete dropdown on both By Model and Impairment search boxes — shows top 8 matches as you type with highlighted text, death counts, rate stats, and mini bar chart; keyboard nav with ↑↓/Enter/Escape; click to select; dark mode support; closes on blur/outside click)*
- [ ] Better tooltips with richer data
- [x] Automaker Safety Report Card *(done: `automaker-grades.js` aggregates FARS_BY_MODEL by make, ranks 33 automakers by fleet-weighted average death rate per 100M VMT, assigns letter grades A+ through F. Summary cards show safest/deadliest make and industry average. Each card shows rank, grade badge, death count, model count, fleet size, rate bar, and best/worst individual model. Click any card to filter the By Model table to that make. Tesla #1 at 0.06, Chevrolet last at 1.37. Dark mode support.)*
- [x] Story links in data tables *(done: `story-links.js` maps 50+ vehicles to their story slugs. 📖 badges appear next to vehicle names in By Model and Impairment tables; chart tooltips show "📖 Read the full investigation" link; Most Dangerous Vehicles widget items deep-link to articles when available; "📖 = full investigation available" legend; deploy workflow updated)*
- [x] Performance optimization for large datasets *(done: `load-more.js` paginates the Findings grid — shows first 12 stories, reveals 6 more per click with remaining count badge. Red accent button with hover effects. Automatically disables when search or category filter is active so all matches display; re-enables pagination when filters cleared. Integrated with story-search.js and story-filters.js. Dark mode support. Deploy workflow updated.)*
- [x] Investigation Scope Banner *(done: animated count-up stats strip at top of Findings tab showing 53 Investigations, 191K+ Deaths Analyzed, 337 Vehicle Models, 38 Automakers, 10 yrs FARS Data. Dark gradient banner with red accent numbers, IntersectionObserver triggers count-up animation on scroll, ease-out cubic easing, compact number formatting for deaths. Light/dark mode support, mobile horizontal scroll.)*
- [x] Export comparison/data as CSV or image *(done: `export-csv.js` adds "⬇ Export CSV" buttons to By Model and Impairment tables; exports visible table data as `.csv` download with proper escaping; styled button with hover/dark mode support; green "✓ Downloaded" feedback on click)*
- [x] Story search/filter bar *(done: `story-search.js` adds real-time search bar above Findings story grid — filters 36 cards by title, deck, kicker, journalist, date; result count badge; "/" keyboard shortcut to focus, Escape to clear; empty state message; dark mode + mobile responsive)*
- [x] Category filter pills *(done: `story-filters.js` adds interactive pill buttons for all kicker categories — Investigation, The Gap, Existential Dread, Sobriety Report, Body Count, Trend Watch, By The Numbers, GM Platform Failures. Each pill shows emoji + count. Works alongside text search — both filters apply simultaneously. Active pill fills red, horizontal scroll on mobile. "All" button resets. Integrated with story-search.js via window._storyFilterApply bridge.)*
- [x] Previous/Next story navigation *(done: `story-nav.js` auto-injects Newer/Older article links at the bottom of every story page with a red accent divider, short title labels, and a center "All Stories" home link. Reads article order from built-in manifest matching index.html grid order. Mobile responsive — stacks vertically. Added to all 55 story pages. Deploy workflow updated.)*

## Self-Improvement Process
Each hourly design cycle should:
1. Read this file for current state and priorities
2. Pick one item from the current phase
3. Implement it
4. Update this file: check off the item, add notes on what was done
5. If the current phase is complete, plan the next phase
6. Add any new ideas discovered during implementation
