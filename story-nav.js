/**
 * story-nav.js — Previous/Next article navigation for The Crash Report
 * Auto-injects a navigation bar between the story disclaimer and footer
 * on all story pages. Reads the article order from a built-in manifest
 * (extracted from index.html's story grid order — newest first).
 */
(function() {
  // Article manifest — ordered newest to oldest (matches index.html grid)
  // Each entry: [slug, short-title]
  const ARTICLES = [
    ['saturn-dent-proof-deathtrap', 'The Saturn S Series'],
    ['park-avenue-impairment-king', 'The Buick Park Avenue'],
    ['maxima-four-door-sports-car', 'The Nissan Maxima'],
    ['aggressor-vehicles', 'Aggressor Vehicles'],
    ['crash-lethality-ratio', 'Crash Lethality Ratios'],
    ['state-death-rate-gap', 'State Death Rate Gap'],
    ['fleet-turnover-lag', 'Fleet Turnover Lag'],
    ['safety-is-a-luxury-good', 'Safety Is a Luxury Good'],
    ['sober-majority', 'The Sober Majority'],
    ['safety-leaps', 'Safety Leaps'],
    ['sedan-death-penalty', 'The Sedan Death Penalty'],
    ['gm-minivan-platform', 'GM Minivan Platform'],
    ['model-year-graveyard', 'Model Year Graveyard'],
    ['sebring-sober-deathtrap', 'The Chrysler Sebring'],
    ['honda-brand-paradox', 'The Honda Paradox'],
    ['neon-disposable-deathtrap', 'The Dodge Neon'],
    ['subaru-safest-brand', 'Subaru Safest Brand'],
    ['prius-safest-sedan', 'The Toyota Prius'],
    ['challenger-safest-muscle-car', 'The Dodge Challenger'],
    ['seville-luxury-deathtrap', 'The Cadillac Seville'],
    ['e350-church-bus-killer', 'The Ford E-350'],
    ['subcompact-death-lottery', "America's Cheapest Cars"],
    ['4runner-toyota-dangerous-suv', 'The Toyota 4Runner'],
    ['silverado-vs-f150-deadliest-truck', 'Silverado vs F-150'],
    ['jetta-german-engineering-myth', 'The VW Jetta'],
    ['minivan-sobriety-effect', 'Minivan Sobriety'],
    ['yukon-tahoe-gm-twins', 'Yukon + Tahoe Twins'],
    ['hyundai-kia-platform-twins', 'Hyundai vs Kia Twins'],
    ['fusion-safest-midsize', 'The Ford Fusion'],
    ['pt-cruiser-hhr-same-designer', 'PT Cruiser & HHR'],
    ['frontier-time-capsule', 'The Nissan Frontier'],
    ['escape-suv-safety-gap', 'Ford Escape vs RAV4'],
    ['infiniti-g-impairment-dynasty', 'Infiniti G-Line'],
    ['chrysler-300-respectable-killer', 'The Chrysler 300'],
    ['solara-camry-coupe-killer', 'The Toyota Solara'],
    ['pontiac-ghost-brand', 'Pontiac Ghost Brand'],
    ['dakota-midsize-killer', 'The Dodge Dakota'],
    ['corolla-volume-killer', 'The Toyota Corolla'],
    ['tracker-rebadged-killer', 'The Chevy Tracker'],
    ['s10-compact-killer', 'The Chevy S-10'],
    ['crown-victoria-police', 'The Crown Victoria'],
    ['ford-expedition-family-myth', 'The Ford Expedition'],
    ['cavalier-gm-lineage', 'Cavalier \u2192 Cobalt'],
    ['lesabre-grandma-killer', "Grandma's Buick LeSabre"],
    ['wrangler-lifestyle-deaths', 'The Jeep Wrangler'],
    ['trailblazer-gm-suv-killer', 'The Chevy Trailblazer'],
    ['malibu-invisible-killer', 'The Chevy Malibu'],
    ['tahoe-size-paradox', 'The Chevy Tahoe'],
    ['grand-marquis-ghost-badge', 'The Grand Marquis'],
    ['cherokee-identity-crisis', 'The Jeep Cherokee'],
    ['ranger-small-truck-killer', 'The Ford Ranger'],
    ['sentra-entry-level-killer', 'The Nissan Sentra'],
    ['bmw-3-series-ultimate-killer', 'The BMW 3 Series'],
    ['grand-caravan-family-killer', 'The Grand Caravan'],
    ['taurus-fleet-ghost', 'The Ford Taurus'],
    ['civic-everymans-killer', 'The Honda Civic'],
    ['camry-safe-killer', 'The Toyota Camry'],
    ['altima-energy', 'The Nissan Altima'],
    ['charger-bar-car', 'The Dodge Charger'],
    ['focus-first-car-killer', 'The Ford Focus'],
    ['cobalt-ignition-scandal', 'The Chevy Cobalt'],
    ['camaro-shadow-killer', 'The Chevy Camaro'],
    ['maxima-luxury-killer', 'The Nissan Maxima (Luxury)'],
    ['pickup-body-count', 'Pickup Body Count'],
    ['impala-fleet-killer', 'The Chevy Impala'],
    ['mustang-death-rate', 'The Ford Mustang'],
    ['veloster-deathtrap', 'The Hyundai Veloster'],
    ['tesla-paradox', 'The Tesla Paradox'],
    ['explorer-transformation', 'The Ford Explorer'],
    ['corvette-impairment', 'The Corvette'],
    ['suv-death-gap', 'The SUV Death Gap'],
    ['accord-body-count', 'The Honda Accord'],
    ['astro-van-impairment', 'The Chevy Astro Van'],
    ['land-cruiser-paradox', 'The Land Cruiser Paradox']
  ];

  // Determine current article slug from URL
  var path = window.location.pathname;
  var match = path.match(/stories\/([^/.]+)/);
  if (!match) return;
  var currentSlug = match[1];

  // Find position in manifest
  var idx = -1;
  for (var i = 0; i < ARTICLES.length; i++) {
    if (ARTICLES[i][0] === currentSlug) { idx = i; break; }
  }
  if (idx === -1) return;

  // In our list, index 0 is newest. "Newer" = lower index, "Older" = higher index.
  var newer = idx > 0 ? ARTICLES[idx - 1] : null;
  var older = idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : null;

  if (!newer && !older) return;

  // Build navigation HTML
  var nav = document.createElement('nav');
  nav.className = 'story-nav';
  nav.setAttribute('aria-label', 'Article navigation');

  var html = '';

  if (newer) {
    html += '<a href="' + newer[0] + '.html" class="story-nav-link story-nav-newer">' +
      '<span class="story-nav-dir">&#9664; Newer</span>' +
      '<span class="story-nav-title">' + newer[1] + '</span>' +
    '</a>';
  } else {
    html += '<span class="story-nav-link story-nav-placeholder"></span>';
  }

  html += '<a href="../" class="story-nav-home" title="Back to all stories">&#9632; All Stories</a>';

  if (older) {
    html += '<a href="' + older[0] + '.html" class="story-nav-link story-nav-older">' +
      '<span class="story-nav-dir">Older &#9654;</span>' +
      '<span class="story-nav-title">' + older[1] + '</span>' +
    '</a>';
  } else {
    html += '<span class="story-nav-link story-nav-placeholder"></span>';
  }

  nav.innerHTML = html;

  // Insert before footer
  var footer = document.querySelector('.site-footer');
  var disclaimer = document.querySelector('.story-disclaimer');
  var insertPoint = footer || disclaimer;
  if (insertPoint && insertPoint.parentNode) {
    insertPoint.parentNode.insertBefore(nav, insertPoint);
  }
})();
