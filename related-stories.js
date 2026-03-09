// Related Stories — auto-injects "Keep Reading" section on story pages
(function() {
  var stories = [
    { slug: 'bmw-3-series-ultimate-killer', title: 'The BMW 3 Series Is the Deadliest Luxury Car in America', kicker: 'Existential Dread', tags: ['luxury','sedan','rate'], img: 'images/bmw-3-series-ultimate-killer.jpg' },
    { slug: 'grand-caravan-family-killer', title: 'The Dodge Grand Caravan Killed 1,782 People. Almost None Were Drunk.', kicker: 'The Gap', tags: ['minivan','sober','family'], img: 'images/grand-caravan-family-killer.jpg' },
    { slug: 'taurus-fleet-ghost', title: 'The Ford Taurus Was America\u2019s Best-Selling Car. Then It Became a Ghost.', kicker: 'Investigation', tags: ['ford','sedan','fleet','depreciation'], img: 'images/taurus-fleet-ghost.jpg' },
    { slug: 'civic-everymans-killer', title: 'The Honda Civic Has Killed 6,553 People. It\u2019s Still Everyone\u2019s First Recommendation.', kicker: 'Body Count', tags: ['honda','compact','ubiquity','body-count'], img: 'images/civic-everymans-killer.jpg' },
    { slug: 'camry-safe-killer', title: 'The Toyota Camry Is the \u2018Safest\u2019 Car in America. It Has Killed 6,328 People.', kicker: 'Existential Dread', tags: ['toyota','sedan','ubiquity','paradox'], img: 'images/camry-safe-killer.jpg' },
    { slug: 'altima-energy', title: '\u2018Altima Energy\u2019 Is Real. 4,787 People Are Dead.', kicker: 'Investigation', tags: ['nissan','sedan','depreciation','economics'], img: 'images/altima-energy.jpg' },
    { slug: 'charger-bar-car', title: 'The Dodge Charger Is America\u2019s Favorite Bar Car.', kicker: 'Sobriety Report', tags: ['dodge','muscle','impairment','dui'], img: 'images/charger-bar-car.jpg' },
    { slug: 'focus-first-car-killer', title: 'The Ford Focus Was America\u2019s Most Popular First Car. It Killed 3,046 People.', kicker: 'The Gap', tags: ['ford','compact','first-car','economics'], img: 'images/focus-first-car-killer.jpg' },
    { slug: 'cobalt-ignition-scandal', title: 'The Chevy Cobalt Was a Death Trap Before GM Even Admitted It', kicker: 'Investigation', tags: ['gm','compact','scandal','design-flaw'], img: 'images/cobalt-ignition-scandal.jpg' },
    { slug: 'camaro-shadow-killer', title: 'The Chevrolet Camaro Is the Second-Deadliest Sports Car in America.', kicker: 'Investigation', tags: ['gm','muscle','sports','rate'], img: 'images/camaro-shadow-killer.jpg' },
    { slug: 'maxima-luxury-killer', title: 'Nissan\u2019s \u201CLuxury\u201D Sedan Is Twice as Deadly as the Altima', kicker: 'Existential Dread', tags: ['nissan','sedan','luxury','rate'], img: 'images/maxima-luxury-killer.jpg' },
    { slug: 'pickup-body-count', title: 'Pickup Trucks Account for 1 in 5 Traffic Deaths in America', kicker: 'Body Count', tags: ['truck','class','body-count','national'], img: 'images/pickup-body-count.jpg' },
    { slug: 'impala-fleet-killer', title: 'The Chevrolet Impala: America\u2019s Deadliest Rental Car', kicker: 'Investigation', tags: ['gm','sedan','fleet','depreciation'], img: 'images/impala-fleet-killer.jpg' },
    { slug: 'mustang-death-rate', title: 'The Ford Mustang Has the Highest Death Rate of Any Mass-Market Car', kicker: 'Investigation', tags: ['ford','muscle','sports','rate'], img: 'images/mustang-death-rate.jpg' },
    { slug: 'veloster-deathtrap', title: 'The Hyundai Veloster Is the Deadliest Car in America Per Mile Driven.', kicker: 'Investigation', tags: ['hyundai','rate','compact','design-flaw'], img: 'images/veloster-deathtrap.jpg' },
    { slug: 'tesla-paradox', title: 'The Tesla Paradox: Silicon Valley\u2019s Safety Darling Meets the Muscle Car\u2019s Worst Habit', kicker: 'Sobriety Report', tags: ['tesla','ev','impairment','paradox'], img: 'images/tesla-paradox.jpg' },
    { slug: 'explorer-transformation', title: 'How the Ford Explorer Escaped Its Own Legacy', kicker: 'Trend Watch', tags: ['ford','suv','improvement','design'], img: 'images/explorer-transformation.jpg' },
    { slug: 'corvette-impairment', title: 'One In Four Corvette Drivers In Fatal Crashes Is Impaired.', kicker: 'Sobriety Report', tags: ['gm','sports','impairment','dui'], img: 'images/corvette-impairment.jpg' },
    { slug: 'suv-death-gap', title: 'The 261x Death Gap: How Your SUV Choice Is a Life-or-Death Decision', kicker: 'Class Warfare', tags: ['suv','class','rate','comparison'], img: 'images/suv-death-gap.jpg' },
    { slug: 'accord-body-count', title: 'The Honda Accord Has Killed More People Than the Mustang, Camaro, Corvette, and Challenger Combined', kicker: 'Body Count', tags: ['honda','sedan','ubiquity','body-count'], img: 'images/accord-body-count.jpg' },
    { slug: 'astro-van-impairment', title: 'The Chevy Astro Van: Where 27% of Drivers in Fatal Crashes Were Loaded', kicker: 'Sobriety Report', tags: ['gm','van','impairment','dui'], img: 'images/astro-van-impairment.jpg' },
    { slug: 'land-cruiser-paradox', title: 'The Toyota Land Cruiser Paradox: Sober Drivers, Maximum Death', kicker: 'Existential Dread', tags: ['toyota','suv','sober','paradox'], img: 'images/land-cruiser-paradox.jpg' }
  ];

  // Curated related pairs — thematic connections
  var curated = {
    'bmw-3-series-ultimate-killer': ['maxima-luxury-killer','mustang-death-rate','veloster-deathtrap'],
    'grand-caravan-family-killer': ['land-cruiser-paradox','camry-safe-killer','explorer-transformation'],
    'taurus-fleet-ghost': ['impala-fleet-killer','altima-energy','focus-first-car-killer'],
    'civic-everymans-killer': ['accord-body-count','camry-safe-killer','focus-first-car-killer'],
    'camry-safe-killer': ['civic-everymans-killer','accord-body-count','land-cruiser-paradox'],
    'altima-energy': ['maxima-luxury-killer','impala-fleet-killer','taurus-fleet-ghost'],
    'charger-bar-car': ['corvette-impairment','astro-van-impairment','camaro-shadow-killer'],
    'focus-first-car-killer': ['cobalt-ignition-scandal','civic-everymans-killer','veloster-deathtrap'],
    'cobalt-ignition-scandal': ['focus-first-car-killer','veloster-deathtrap','explorer-transformation'],
    'camaro-shadow-killer': ['mustang-death-rate','charger-bar-car','corvette-impairment'],
    'maxima-luxury-killer': ['altima-energy','bmw-3-series-ultimate-killer','impala-fleet-killer'],
    'pickup-body-count': ['suv-death-gap','explorer-transformation','grand-caravan-family-killer'],
    'impala-fleet-killer': ['taurus-fleet-ghost','altima-energy','camry-safe-killer'],
    'mustang-death-rate': ['camaro-shadow-killer','charger-bar-car','bmw-3-series-ultimate-killer'],
    'veloster-deathtrap': ['cobalt-ignition-scandal','bmw-3-series-ultimate-killer','focus-first-car-killer'],
    'tesla-paradox': ['land-cruiser-paradox','explorer-transformation','corvette-impairment'],
    'explorer-transformation': ['suv-death-gap','pickup-body-count','cobalt-ignition-scandal'],
    'corvette-impairment': ['charger-bar-car','astro-van-impairment','camaro-shadow-killer'],
    'suv-death-gap': ['pickup-body-count','explorer-transformation','land-cruiser-paradox'],
    'accord-body-count': ['civic-everymans-killer','camry-safe-killer','pickup-body-count'],
    'astro-van-impairment': ['corvette-impairment','charger-bar-car','grand-caravan-family-killer'],
    'land-cruiser-paradox': ['tesla-paradox','grand-caravan-family-killer','suv-death-gap']
  };

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

  // Get related slugs
  var relatedSlugs = curated[currentSlug];
  if (!relatedSlugs) {
    // Fallback: pick by shared tags
    var scored = [];
    for (var j = 0; j < stories.length; j++) {
      if (stories[j].slug === currentSlug) continue;
      var s = 0;
      for (var k = 0; k < stories[j].tags.length; k++) {
        if (current.tags.indexOf(stories[j].tags[k]) !== -1) s++;
      }
      if (s > 0) scored.push({ slug: stories[j].slug, score: s });
    }
    scored.sort(function(a, b) { return b.score - a.score; });
    relatedSlugs = scored.slice(0, 3).map(function(x) { return x.slug; });
  }

  if (relatedSlugs.length === 0) return;

  // Build related stories HTML
  var html = '<section class="related-stories">';
  html += '<h2 class="related-heading">Keep Reading</h2>';
  html += '<div class="related-grid">';

  for (var r = 0; r < relatedSlugs.length; r++) {
    var rel = null;
    for (var s = 0; s < stories.length; s++) {
      if (stories[s].slug === relatedSlugs[r]) { rel = stories[s]; break; }
    }
    if (!rel) continue;

    html += '<a href="' + rel.slug + '.html" class="related-card">';
    html += '<img src="../' + rel.img + '" alt="" class="related-card-img" loading="lazy">';
    html += '<div class="related-card-body">';
    html += '<span class="related-card-kicker">' + rel.kicker + '</span>';
    html += '<span class="related-card-title">' + rel.title + '</span>';
    html += '</div></a>';
  }

  html += '</div></section>';

  // Insert before the disclaimer
  var disclaimer = document.querySelector('.story-disclaimer');
  if (disclaimer) {
    disclaimer.insertAdjacentHTML('beforebegin', html);
  } else {
    // Fallback: insert after article
    var article = document.querySelector('article.story');
    if (article) article.insertAdjacentHTML('afterend', html);
  }
})();
