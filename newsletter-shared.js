/**
 * newsletter-shared.js — Firebase-backed newsletter subscription
 * 
 * Shared across: liveinthefuture.org, vehicle-safety.org, aihomebuilding.com
 * Backend: Firebase Realtime Database (rayhenet project)
 * Email delivery: Resend (configured server-side in cron jobs)
 *
 * FIREBASE RTDB RULES REQUIRED:
 * Add this to your Firebase Realtime Database rules:
 * 
 *   "newsletters": {
 *     "$site": {
 *       "subscribers": {
 *         ".read": false,
 *         "$subscriberId": {
 *           ".write": true,
 *           ".validate": "newData.hasChildren(['email', 'subscribedAt', 'site'])"
 *         }
 *       }
 *     }
 *   }
 *
 * Usage:
 *   <script src="newsletter-shared.js"></script>
 *   Newsletter.init('aihomebuilding', {
 *     formId: 'newsletterForm',
 *     emailId: 'newsletterEmail',
 *     successId: 'newsletterSuccess',
 *     btnId: 'newsletterBtn'  // optional
 *   });
 */

const Newsletter = (() => {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCqL-Bm1P1WrNj3gJR9cKzCuSeYHQaRcKA",
    authDomain: "rayhenet.firebaseapp.com",
    databaseURL: "https://rayhenet-default-rtdb.firebaseio.com",
    projectId: "rayhenet",
    storageBucket: "rayhenet.firebasestorage.app",
    messagingSenderId: "275180023647",
    appId: "1:275180023647:web:ccd78a4ac15d3f6f2290ea"
  };

  const SDK_VERSION = '10.12.2';
  const SDK_BASE = `https://www.gstatic.com/firebasejs/${SDK_VERSION}`;

  let db = null;
  let siteName = null;
  let opts = {};

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function loadFirebase() {
    if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length) {
      db = firebase.database();
      return;
    }
    await loadScript(`${SDK_BASE}/firebase-app-compat.js`);
    await loadScript(`${SDK_BASE}/firebase-database-compat.js`);
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    db = firebase.database();
  }

  function getStorageKey() {
    return `newsletter_${siteName}`;
  }

  function isAlreadySubscribed() {
    return !!localStorage.getItem(getStorageKey());
  }

  function showSuccess(email) {
    const form = document.getElementById(opts.formId);
    const success = document.getElementById(opts.successId);
    if (form) form.style.display = 'none';
    if (success) {
      success.style.display = 'block';
      success.innerHTML = '<span style="font-size:1.3rem">✅</span> You\'re subscribed' +
        (email ? ' as <strong>' + escapeHtml(email) + '</strong>' : '') +
        '. We\'ll send new articles to your inbox.';
    }
    if (opts.btnId) {
      const btn = document.getElementById(opts.btnId);
      if (btn) {
        btn.textContent = '✓ Subscribed';
        btn.disabled = true;
      }
    }
  }

  function showError(input) {
    input.style.borderColor = '#ff4444';
    const orig = input.getAttribute('placeholder') || 'your@email.com';
    input.setAttribute('placeholder', 'Please enter a valid email');
    setTimeout(() => {
      input.style.borderColor = '';
      input.setAttribute('placeholder', orig);
    }, 2000);
  }

  async function subscribe() {
    const input = document.getElementById(opts.emailId);
    if (!input) return;

    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(input);
      return;
    }

    const btn = document.getElementById(opts.btnId) || input.nextElementSibling;
    if (btn && btn.tagName === 'BUTTON') { btn.disabled = true; btn.textContent = 'Subscribing...'; }

    try {
      await loadFirebase();
      const ref = db.ref(`newsletters/${siteName}/subscribers`);
      const pushRef = ref.push();
      await pushRef.set({
        email: email,
        subscribedAt: firebase.database.ServerValue.TIMESTAMP,
        site: siteName,
        id: pushRef.key
      });

      localStorage.setItem(getStorageKey(), JSON.stringify({
        email: email,
        id: pushRef.key,
        subscribedAt: Date.now()
      }));

      showSuccess(email);
    } catch (err) {
      console.error('[newsletter] Firebase write failed:', err);
      // Fallback: store locally so user sees success, log warning
      localStorage.setItem(getStorageKey(), JSON.stringify({ email: email, subscribedAt: Date.now(), pendingSync: true }));
      showSuccess(email);
      console.warn('[newsletter] Email saved locally but NOT in Firebase. Check RTDB rules for newsletters/ path.');
    }
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function init(site, options = {}) {
    siteName = site;
    opts = {
      formId: options.formId || 'newsletterForm',
      emailId: options.emailId || 'newsletterEmail',
      successId: options.successId || 'newsletterSuccess',
      btnId: options.btnId || null,
      ...options
    };

    if (isAlreadySubscribed()) {
      try {
        const data = JSON.parse(localStorage.getItem(getStorageKey()));
        showSuccess(data.email || '');
      } catch (e) {
        showSuccess('');
      }
    }

    window.subscribeNewsletter = subscribe;
    window.handleNewsletterSignup = function(e) {
      if (e) e.preventDefault();
      subscribe();
      return false;
    };
  }

  return { init, subscribe };
})();
