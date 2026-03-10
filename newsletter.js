/* Newsletter signup — design-only placeholder (no backend yet)
   Stores subscription state in localStorage so returning visitors see confirmation. */
(function() {
  var KEY = 'crashreport_newsletter';
  var banner = document.getElementById('newsletterBanner');
  var form = document.getElementById('newsletterForm');
  var input = document.getElementById('newsletterEmail');
  var btn = document.getElementById('newsletterBtn');
  if (!banner || !form) return;

  var saved = localStorage.getItem(KEY);
  if (saved) {
    showSubscribed(saved);
    return;
  }

  function showSubscribed(email) {
    banner.classList.add('subscribed');
    form.innerHTML = '<p class="newsletter-success">✓ You\'re subscribed' +
      (email ? ' as <strong>' + email + '</strong>' : '') +
      '. We\'ll be in touch.</p>';
  }

  window.handleNewsletterSignup = function(e) {
    e.preventDefault();
    var email = input.value.trim();
    if (!email) return false;
    localStorage.setItem(KEY, email);
    btn.textContent = '✓ Subscribed';
    btn.classList.add('subscribed-btn');
    btn.disabled = true;
    setTimeout(function() { showSubscribed(email); }, 600);
    return false;
  };
})();
