// Related Stories — auto-injects "Keep Reading" section on story pages
// Full registry of all 74 articles with kicker-based matching
(function() {
  'use strict';

  var stories = [
    { slug: 'saturn-dent-proof-deathtrap', kicker: 'Existential Dread', title: 'Saturn\u2019s Dent-Proof Panels Couldn\u2019t Stop It From Being the Deadliest Car Per Crash in America', img: false },
    { slug: 'park-avenue-impairment-king', kicker: 'Sobriety Report', title: 'The Car With America\u2019s Drunkest Drivers Is a Buick', img: false },
    { slug: 'maxima-four-door-sports-car', kicker: 'Investigation', title: 'Nissan Called the Maxima a \u201c4-Door Sports Car.\u201d The Fatality Data Agrees.', img: false },
    { slug: '4runner-toyota-dangerous-suv', kicker: 'The Gap', title: 'The Toyota 4Runner Is 5\u00d7 Deadlier Than the RAV4. Guess Which One Toyota Calls \u201cRugged.\u201d', img: true },
    { slug: 'accord-body-count', kicker: 'Body Count', title: 'The Honda Accord Has Killed More People Than the Mustang, Camaro, Corvette, and Challenger Combined', img: true },
    { slug: 'aggressor-vehicles', kicker: 'The Gap', title: 'The F-150 Was Involved in 20,066 Fatal Crashes. In 10,872 of Them, Someone Else Died.', img: false },
    { slug: 'altima-energy', kicker: 'Investigation', title: '\u2018Altima Energy\u2019 Is Real. 4,787 People Are Dead.', img: true },
    { slug: 'astro-van-impairment', kicker: 'Sobriety Report', title: 'The Chevy Astro Van: Where 27% of Drivers in Fatal Crashes Were Loaded', img: true },
    { slug: 'bmw-3-series-ultimate-killer', kicker: 'Existential Dread', title: 'The BMW 3 Series Is the Deadliest Luxury Car in America. By a Lot.', img: true },
    { slug: 'camaro-shadow-killer', kicker: 'Investigation', title: 'The Chevrolet Camaro Is the Second-Deadliest Sports Car in America.', img: true },
    { slug: 'camry-safe-killer', kicker: 'Existential Dread', title: 'The Toyota Camry Is the \u2018Safest\u2019 Car in America. It Has Killed 6,328 People.', img: true },
    { slug: 'cavalier-gm-lineage', kicker: 'GM Platform Failures', title: 'The Chevy Cavalier Killed 1,225 People. Then GM Made Its Replacement Worse.', img: false },
    { slug: 'challenger-safest-muscle-car', kicker: 'Existential Dread', title: 'The Dodge Challenger Is the Safest Muscle Car in America. Nobody Believes It.', img: true },
    { slug: 'charger-bar-car', kicker: 'Sobriety Report', title: 'The Dodge Charger Is America\u2019s Favorite Bar Car.', img: true },
    { slug: 'cherokee-identity-crisis', kicker: 'The Gap', title: 'The Jeep Cherokee Is 3.4\u00d7 Deadlier Than the Grand Cherokee.', img: true },
    { slug: 'chrysler-300-respectable-killer', kicker: 'Existential Dread', title: 'The Chrysler 300 Kills 2.5\u00d7 More People Than the Dodge Charger. They\u2019re the Same Car.', img: true },
    { slug: 'civic-everymans-killer', kicker: 'Body Count', title: 'The Honda Civic Has Killed 6,553 People. It\u2019s Still Everyone\u2019s First Recommendation.', img: true },
    { slug: 'cobalt-ignition-scandal', kicker: 'Investigation', title: 'The Chevy Cobalt Was a Death Trap Before GM Even Admitted It', img: true },
    { slug: 'corolla-volume-killer', kicker: 'By The Numbers', title: 'The Toyota Corolla Has Killed 4,945 People. It\u2019s Still the Safest Car on This List.', img: true },
    { slug: 'corvette-impairment', kicker: 'Investigation', title: 'One In Four Corvette Drivers In Fatal Crashes Is Impaired.', img: true },
    { slug: 'crash-lethality-ratio', kicker: 'By The Numbers', title: '86% of Cavalier Crashes Are Fatal. For a Ram 2500, It\u2019s 21%.', img: false },
    { slug: 'crown-victoria-police', kicker: 'Investigation', title: 'The Ford Crown Victoria Killed 881 People. Most of Them Were on the Clock.', img: true },
    { slug: 'dakota-midsize-killer', kicker: 'The Gap', title: 'The Dodge Dakota Was 3\u00d7 Deadlier Than a Tacoma. Dodge Just Killed It.', img: true },
    { slug: 'e350-church-bus-killer', kicker: 'Investigation', title: 'The Ford E-350 Killed 776 People. Most Were Passengers.', img: true },
    { slug: 'escape-suv-safety-gap', kicker: 'The Gap', title: 'The Ford Escape Is 5\u00d7 Deadlier Than a RAV4. They Cost the Same.', img: true },
    { slug: 'explorer-transformation', kicker: 'Trend Watch', title: 'How the Ford Explorer Escaped Its Own Legacy', img: true },
    { slug: 'fleet-turnover-lag', kicker: 'By The Numbers', title: 'Congress Saved 9,000 Lives a Year in 2007. The Cars Didn\u2019t Get the Memo Until 2024.', img: false },
    { slug: 'focus-first-car-killer', kicker: 'The Gap', title: 'The Ford Focus Was America\u2019s Most Popular First Car. It Killed 3,046 People.', img: true },
    { slug: 'ford-expedition-family-myth', kicker: 'Investigation', title: 'The Ford Expedition: America\u2019s Most Trusted Family Coffin', img: false },
    { slug: 'frontier-time-capsule', kicker: 'Investigation', title: 'Nissan Sold the Same Truck for 16 Years. It Killed 1,030 People.', img: true },
    { slug: 'fusion-safest-midsize', kicker: 'The Gap', title: 'The Ford Fusion Was the Safest Midsize Sedan in America. Ford Killed It Anyway.', img: true },
    { slug: 'gm-minivan-platform', kicker: 'GM Platform Failures', title: 'GM Built One Minivan and Sold It Four Times. All Four Were Deadly.', img: true },
    { slug: 'grand-caravan-family-killer', kicker: 'The Gap', title: 'The Dodge Grand Caravan Killed 1,782 People. Almost None Were Drunk.', img: true },
    { slug: 'grand-marquis-ghost-badge', kicker: 'Investigation', title: 'Mercury Died in 2011. The Grand Marquis Is Still Killing People.', img: true },
    { slug: 'honda-brand-paradox', kicker: 'Existential Dread', title: 'Honda\u2019s Sedans Are Deadly. Honda\u2019s SUVs Are Among the Safest Cars in America.', img: true },
    { slug: 'hyundai-kia-platform-twins', kicker: 'The Gap', title: 'Hyundai and Kia Build the Same Car. The Hyundai Kills 3.8\u00d7 More People.', img: true },
    { slug: 'impala-fleet-killer', kicker: 'Investigation', title: 'The Chevrolet Impala: America\u2019s Deadliest Rental Car', img: true },
    { slug: 'infiniti-g-impairment-dynasty', kicker: 'Sobriety Report', title: 'Infiniti Built Three Generations of the Same Car. The Impairment Rate Never Changed.', img: false },
    { slug: 'jetta-german-engineering-myth', kicker: 'Existential Dread', title: 'The Volkswagen Jetta Promised German Engineering. It Delivered 1,375 Deaths.', img: true },
    { slug: 'land-cruiser-paradox', kicker: 'Existential Dread', title: 'The Toyota Land Cruiser Paradox: Sober Drivers, Maximum Death', img: true },
    { slug: 'lesabre-grandma-killer', kicker: 'Existential Dread', title: 'Grandma\u2019s Buick LeSabre Has a Higher Death Rate Than the Toyota Camry', img: true },
    { slug: 'malibu-invisible-killer', kicker: 'Existential Dread', title: 'The Chevy Malibu Has Killed 3,465 People. Nobody Noticed.', img: true },
    { slug: 'maxima-luxury-killer', kicker: 'Existential Dread', title: 'Nissan\u2019s \u201cLuxury\u201d Sedan Is Twice as Deadly as the Altima', img: true },
    { slug: 'minivan-sobriety-effect', kicker: 'Sobriety Report', title: 'Minivan Drivers Are the Soberest People on the Road.', img: true },
    { slug: 'model-year-graveyard', kicker: 'By The Numbers', title: 'Half the People Dying on American Roads Are Dying in Cars That Don\u2019t Exist Anymore', img: true },
    { slug: 'mustang-death-rate', kicker: 'Investigation', title: 'The Ford Mustang Has the Highest Death Rate of Any Mass-Market Car in America', img: true },
    { slug: 'neon-disposable-deathtrap', kicker: 'Investigation', title: 'The Dodge Neon Was America\u2019s Disposable First Car. It Killed 602 People.', img: true },
    { slug: 'pickup-body-count', kicker: 'Body Count', title: 'Pickup Trucks Account for 1 in 5 Traffic Deaths in America', img: true },
    { slug: 'pontiac-ghost-brand', kicker: 'Existential Dread', title: 'Pontiac Died in 2010. It Has Killed 3,038 People Since.', img: true },
    { slug: 'prius-safest-sedan', kicker: 'Existential Dread', title: 'The Toyota Prius Is the Safest Sedan in America. Its Drivers Are the Soberest, Too.', img: true },
    { slug: 'pt-cruiser-hhr-same-designer', kicker: 'Investigation', title: 'One Designer Made the Same Deadly Car Twice. For Two Different Companies.', img: true },
    { slug: 'ranger-small-truck-killer', kicker: 'The Gap', title: 'The Ford Ranger Is Nearly 3\u00d7 Deadlier Than the F-150. Small Trucks Are a Lie.', img: true },
    { slug: 's10-compact-killer', kicker: 'The Gap', title: 'The Chevy S-10 Was 6\u00d7 Deadlier Than a Tacoma. Then GM Fixed It.', img: true },
    { slug: 'safety-is-a-luxury-good', kicker: 'The Gap', title: 'A Porsche 911 Driver Drinks as Much as a Cobalt Driver. One Is 7\u00d7 More Likely to Survive.', img: false },
    { slug: 'safety-leaps', kicker: 'Trend Watch', title: 'Seven Vehicles That Got 8\u201322\u00d7 Safer in a Single Generation', img: true },
    { slug: 'sebring-sober-deathtrap', kicker: 'The Gap', title: 'The Chrysler Sebring Had the Lowest Impairment Rate in Its Class. It Killed 664 People Anyway.', img: true },
    { slug: 'sedan-death-penalty', kicker: 'The Gap', title: 'Sedans Kill at 2.5\u00d7 the Rate of SUVs. Every Single Brand.', img: true },
    { slug: 'sentra-entry-level-killer', kicker: 'By The Numbers', title: 'The Nissan Sentra Is the Cheapest Way to Die in a Sedan', img: true },
    { slug: 'seville-luxury-deathtrap', kicker: 'Existential Dread', title: 'The Cadillac Seville Had the Lowest Impairment Rate in the Database. It Killed 391 People Anyway.', img: true },
    { slug: 'silverado-vs-f150-deadliest-truck', kicker: 'Investigation', title: 'The Chevy Silverado Is the Deadliest Vehicle in America. The F-150 Is Catching Up.', img: true },
    { slug: 'sober-majority', kicker: 'By The Numbers', title: '80% of Fatal Crash Drivers Were Sober. America Spent $800 Million on the Other 20%.', img: false },
    { slug: 'solara-camry-coupe-killer', kicker: 'The Gap', title: 'Toyota Built a Camry Coupe. It\u2019s 2\u00d7 Deadlier Than the Camry.', img: false },
    { slug: 'state-death-rate-gap', kicker: 'The Gap', title: 'Mississippi Kills Drivers at 5\u00d7 the Rate of Massachusetts. They Drive the Same Cars.', img: false },
    { slug: 'subaru-safest-brand', kicker: 'The Gap', title: 'Every Subaru Is Safer Than Its Competitors. Every Single One.', img: true },
    { slug: 'subcompact-death-lottery', kicker: 'The Gap', title: 'America\u2019s Cheapest Cars Are a Death Lottery. The Odds Depend on the Badge.', img: false },
    { slug: 'suv-death-gap', kicker: 'Class Warfare', title: 'The 261x Death Gap: How Your SUV Choice Is a Life-or-Death Decision', img: true },
    { slug: 'tahoe-size-paradox', kicker: 'Existential Dread', title: 'The Chevy Tahoe Weighs 5,600 Pounds. It Didn\u2019t Help.', img: true },
    { slug: 'taurus-fleet-ghost', kicker: 'Investigation', title: 'The Ford Taurus Was America\u2019s Best-Selling Car. Then It Became a Ghost.', img: true },
    { slug: 'tesla-paradox', kicker: 'Sobriety Report', title: 'The Tesla Paradox: Silicon Valley\u2019s Safety Darling Meets the Muscle Car\u2019s Worst Habit', img: true },
    { slug: 'tracker-rebadged-killer', kicker: 'The Gap', title: 'The Chevy Tracker Was a Suzuki in Disguise. It Killed 856 People.', img: true },
    { slug: 'trailblazer-gm-suv-killer', kicker: 'Trend Watch', title: 'GM Built the Same Deadly SUV Twice. The Trailblazer Killed 2,473 People.', img: true },
    { slug: 'veloster-deathtrap', kicker: 'Investigation', title: 'The Hyundai Veloster Is the Deadliest Car in America Per Mile Driven.', img: true },
    { slug: 'wrangler-lifestyle-deaths', kicker: 'Investigation', title: 'The Jeep Wrangler Is America\u2019s Favorite Way to Die Outdoors', img: true },
    { slug: 'yukon-tahoe-gm-twins', kicker: 'Investigation', title: 'GM Sold the Same Deadly SUV Twice. The Yukon and Tahoe Have Killed 3,706 People.', img: true }
  ];

  // Thematic affinity — kickers that pair well for cross-category recs
  var relatedKickers = {
    'Investigation': ['Existential Dread', 'Body Count', 'GM Platform Failures'],
    'Existential Dread': ['Investigation', 'The Gap', 'Sobriety Report'],
    'The Gap': ['By The Numbers', 'Existential Dread', 'Class Warfare'],
    'Sobriety Report': ['Investigation', 'Existential Dread'],
    'Body Count': ['Investigation', 'The Gap', 'By The Numbers'],
    'By The Numbers': ['The Gap', 'Body Count', 'Trend Watch'],
    'Trend Watch': ['By The Numbers', 'Investigation', 'GM Platform Failures'],
    'GM Platform Failures': ['Investigation', 'Trend Watch', 'The Gap'],
    'Class Warfare': ['The Gap', 'By The Numbers', 'Investigation']
  };

  // Simple deterministic hash for consistent but varied picks
  function hashSlug(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) {
      h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  // Detect current story from URL
  var path = window.location.pathname;
  var match = path.match(/stories\/([^\/]+)\.html/);
  if (!match) return;
  var currentSlug = match[1];

  // Find current story
  var current = null;
  for (var i = 0; i < stories.length; i++) {
    if (stories[i].slug === currentSlug) { current = stories[i]; break; }
  }
  if (!current) return;

  var seed = hashSlug(currentSlug);

  // Pick 3 related stories: 2 from same kicker, 1 from related kicker
  // If same kicker has <3, fill from related kickers
  var sameKicker = [];
  var crossKicker = [];
  var affinities = relatedKickers[current.kicker] || [];

  for (var j = 0; j < stories.length; j++) {
    if (stories[j].slug === currentSlug) continue;
    if (stories[j].kicker === current.kicker) {
      sameKicker.push(stories[j]);
    } else if (affinities.indexOf(stories[j].kicker) !== -1) {
      crossKicker.push(stories[j]);
    }
  }

  // Deterministic shuffle using seed
  function seededSort(arr, s) {
    return arr.slice().sort(function(a, b) {
      var ha = hashSlug(a.slug + s);
      var hb = hashSlug(b.slug + s);
      return ha - hb;
    });
  }

  sameKicker = seededSort(sameKicker, seed);
  crossKicker = seededSort(crossKicker, seed);

  // Prefer stories with images for visual richness
  function imgFirst(arr) {
    var withImg = arr.filter(function(s) { return s.img; });
    var noImg = arr.filter(function(s) { return !s.img; });
    return withImg.concat(noImg);
  }

  sameKicker = imgFirst(sameKicker);
  crossKicker = imgFirst(crossKicker);

  // Build final picks: up to 2 same-kicker, then fill with cross-kicker
  var picks = [];
  var maxSame = Math.min(2, sameKicker.length);
  for (var p = 0; p < maxSame; p++) picks.push(sameKicker[p]);
  for (var q = 0; q < crossKicker.length && picks.length < 3; q++) picks.push(crossKicker[q]);
  // If still short, pull remaining from same kicker
  for (var r = maxSame; r < sameKicker.length && picks.length < 3; r++) picks.push(sameKicker[r]);

  if (picks.length === 0) return;

  // Build HTML
  var html = '<section class="related-stories">';
  html += '<h2 class="related-heading">Keep Reading</h2>';
  html += '<div class="related-grid">';

  for (var k = 0; k < picks.length; k++) {
    var s = picks[k];
    html += '<a href="' + s.slug + '.html" class="related-card">';
    if (s.img) {
      html += '<img src="../images/' + s.slug + '.jpg" alt="" class="related-card-img" loading="lazy"' +
        ' onerror="this.style.background=\'linear-gradient(135deg,#1a1a2e,#6B0000)\';this.style.minHeight=\'140px\';this.src=\'\'">';
    } else {
      html += '<div class="related-card-img" style="background:linear-gradient(135deg,#1a1a2e,#6B0000);min-height:140px"></div>';
    }
    html += '<div class="related-card-body">';
    html += '<span class="related-card-kicker">' + s.kicker + '</span>';
    html += '<span class="related-card-title">' + s.title + '</span>';
    html += '</div></a>';
  }

  html += '</div></section>';

  // Insert before the disclaimer
  var disclaimer = document.querySelector('.story-disclaimer');
  if (disclaimer) {
    disclaimer.insertAdjacentHTML('beforebegin', html);
  } else {
    var article = document.querySelector('article.story');
    if (article) article.insertAdjacentHTML('afterend', html);
  }
})();
