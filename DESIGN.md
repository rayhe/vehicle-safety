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

## Current State (March 2026)
- Monospace everything — feels like a developer tool, not a journalism site
- No logo/favicon
- Header is plain text
- Story cards are basic boxes
- Charts are functional but not polished
- No hero imagery on the homepage
- Mobile experience is passable but not great

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
- [ ] Generate SVG logo/favicon
- [ ] Switch header typography to sans-serif
- [ ] Redesign story cards with image support
- [ ] Add proper editorial header/masthead
- [ ] Improve tab navigation styling

### Phase 2: Polish (Week 2)
- [ ] Redesign footer
- [ ] Improve chart styling (rounded bars, better tooltips)
- [ ] Add smooth tab transitions
- [ ] Better mobile hamburger menu
- [ ] Story page layout improvements

### Phase 3: Features (Week 3+)
- [ ] Reading time estimates on stories
- [ ] Related stories section
- [ ] Newsletter signup placeholder
- [ ] Social share buttons on stories
- [ ] "Most dangerous vehicles" featured widget

## Self-Improvement Process
Each hourly design cycle should:
1. Read this file for current state and priorities
2. Pick one item from the current phase
3. Implement it
4. Update this file: check off the item, add notes on what was done
5. If the current phase is complete, plan the next phase
6. Add any new ideas discovered during implementation
