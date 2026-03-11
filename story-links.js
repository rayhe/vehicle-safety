// ================================================================
// Vehicle → Story article link map
// Maps lowercase "Make Model" to story slug in stories/
// ================================================================
const VEHICLE_STORY_MAP = {
  'honda accord': 'accord-body-count',
  'nissan altima': 'altima-energy',
  'chevrolet astro van': 'astro-van-impairment',
  'bmw 3 series': 'bmw-3-series-ultimate-killer',
  'chevrolet camaro': 'camaro-shadow-killer',
  'toyota camry': 'camry-safe-killer',
  'toyota 4-runner': '4runner-toyota-dangerous-suv',
  'chevrolet cavalier': 'cavalier-gm-lineage',
  'dodge charger': 'charger-bar-car',
  'jeep cherokee': 'cherokee-identity-crisis',
  'chrysler 300': 'chrysler-300-respectable-killer',
  'honda civic': 'civic-everymans-killer',
  'chevrolet cobalt': 'cobalt-ignition-scandal',
  'toyota corolla': 'corolla-volume-killer',
  'chevrolet corvette': 'corvette-impairment',
  'ford e-350': 'e350-church-bus-killer',
  'ford crown victoria': 'crown-victoria-police',
  'dodge dakota': 'dakota-midsize-killer',
  'ford escape': 'escape-suv-safety-gap',
  'ford explorer': 'explorer-transformation',
  'ford f-150': 'silverado-vs-f150-deadliest-truck',
  'ford focus': 'focus-first-car-killer',
  'ford fusion': 'fusion-safest-midsize',
  'ford expedition': 'ford-expedition-family-myth',
  'nissan frontier': 'frontier-time-capsule',
  'dodge grand caravan': 'grand-caravan-family-killer',
  'mercury grand marquis': 'grand-marquis-ghost-badge',
  'hyundai elantra': 'hyundai-kia-platform-twins',
  'kia forte': 'hyundai-kia-platform-twins',
  'hyundai sonata': 'hyundai-kia-platform-twins',
  'kia optima': 'hyundai-kia-platform-twins',
  'chevrolet impala': 'impala-fleet-killer',
  'infiniti g35': 'infiniti-g-impairment-dynasty',
  'infiniti g37': 'infiniti-g-impairment-dynasty',
  'infiniti q50': 'infiniti-g-impairment-dynasty',
  'toyota land cruiser': 'land-cruiser-paradox',
  'buick lesabre': 'lesabre-grandma-killer',
  'chevrolet malibu': 'malibu-invisible-killer',
  'nissan maxima': 'maxima-luxury-killer',
  'ford mustang': 'mustang-death-rate',
  'dodge challenger': 'challenger-safest-muscle-car',
  'pontiac grand prix': 'pontiac-ghost-brand',
  'pontiac g6': 'pontiac-ghost-brand',
  'pontiac grand am': 'pontiac-ghost-brand',
  'chrysler pt cruiser': 'pt-cruiser-hhr-same-designer',
  'chevrolet hhr': 'pt-cruiser-hhr-same-designer',
  'ford ranger': 'ranger-small-truck-killer',
  'chevrolet s-10': 's10-compact-killer',
  'nissan sentra': 'sentra-entry-level-killer',
  'chevrolet silverado': 'silverado-vs-f150-deadliest-truck',
  'gmc sierra': 'silverado-vs-f150-deadliest-truck',
  'toyota solara': 'solara-camry-coupe-killer',
  'chevrolet tahoe': 'tahoe-size-paradox',
  'gmc yukon': 'yukon-tahoe-gm-twins',
  'chevrolet suburban': 'yukon-tahoe-gm-twins',
  'ford taurus': 'taurus-fleet-ghost',
  'tesla model 3': 'tesla-paradox',
  'tesla model s': 'tesla-paradox',
  'tesla model x': 'tesla-paradox',
  'tesla model y': 'tesla-paradox',
  'chevrolet tracker': 'tracker-rebadged-killer',
  'chevrolet trailblazer': 'trailblazer-gm-suv-killer',
  'hyundai veloster': 'veloster-deathtrap',
  'jeep wrangler': 'wrangler-lifestyle-deaths',
  'volkswagen jetta': 'jetta-german-engineering-myth',
  'chevrolet sonic': 'subcompact-death-lottery',
  'chevrolet spark': 'subcompact-death-lottery',
  'nissan versa': 'subcompact-death-lottery',
  'ford fiesta': 'subcompact-death-lottery',
  'honda fit': 'subcompact-death-lottery',
  'toyota yaris': 'subcompact-death-lottery',
  'hyundai accent': 'subcompact-death-lottery',
  'kia rio': 'subcompact-death-lottery',
  'mitsubishi mirage': 'subcompact-death-lottery'
};

function getStoryLink(make, model) {
  const key = (make + ' ' + model).toLowerCase();
  const slug = VEHICLE_STORY_MAP[key];
  if (!slug) return '';
  return ' <a href="stories/' + slug + '.html" class="story-link" title="Read the full investigation">📖</a>';
}

function getStorySlug(make, model) {
  return VEHICLE_STORY_MAP[(make + ' ' + model).toLowerCase()] || null;
}
