/* ═══════════════════════════════════════
   ALT 60/40 — APP CORE (shared state & utils)
   Persisted via localStorage. No real backend —
   this simulates auth/progress for the prototype.
   ═══════════════════════════════════════ */

const ALT = {
  STORE_KEY: 'alt6040_state',

  defaultState() {
    return {
      user: null, // { name, email, initials }
      favorites: [],        // array of term ids
      history: [],          // array of {term, ts}
      learned: [],          // array of term ids marked "aprendida"
      courseProgress: {},   // { courseId: percent }
      achievements: [],     // array of achievement ids unlocked
      darkMode: false,
      fontSize: 'base',     // base | lg | xl
      highContrast: false,
    };
  },

  state: null,

  load() {
    try {
      const raw = localStorage.getItem(this.STORE_KEY);
      this.state = raw ? Object.assign(this.defaultState(), JSON.parse(raw)) : this.defaultState();
    } catch(e) {
      this.state = this.defaultState();
    }
    return this.state;
  },

  save() {
    localStorage.setItem(this.STORE_KEY, JSON.stringify(this.state));
  },

  /* ── AUTH (simulated) ── */
  login(name, email) {
    const initials = name.trim().split(/\s+/).map(w => w[0]).slice(0,2).join('').toUpperCase();
    this.state.user = { name: name.trim(), email: email.trim(), initials: initials || 'U' };
    this.save();
  },
  loginWithGoogle() {
    this.login('Usuario Google', 'usuario@gmail.com');
  },
  logout() {
    this.state.user = null;
    this.save();
  },
  isLoggedIn() { return !!this.state.user; },

  /* ── FAVORITES ── */
  toggleFavorite(termId) {
    const i = this.state.favorites.indexOf(termId);
    if (i >= 0) { this.state.favorites.splice(i,1); } else { this.state.favorites.push(termId); }
    this.save();
    return this.state.favorites.includes(termId);
  },
  isFavorite(termId) { return this.state.favorites.includes(termId); },

  /* ── HISTORY ── */
  addHistory(termLabel) {
    this.state.history = this.state.history.filter(h => h.term !== termLabel);
    this.state.history.unshift({ term: termLabel, ts: Date.now() });
    this.state.history = this.state.history.slice(0, 20);
    this.save();
  },

  /* ── LEARNED WORDS ── */
  markLearned(termId) {
    if (!this.state.learned.includes(termId)) {
      this.state.learned.push(termId);
      this.save();
      this.checkAchievements();
    }
  },

  /* ── COURSE PROGRESS ── */
  setCourseProgress(courseId, percent) {
    this.state.courseProgress[courseId] = percent;
    this.save();
    this.checkAchievements();
  },
  getCourseProgress(courseId) { return this.state.courseProgress[courseId] || 0; },

  /* ── ACHIEVEMENTS ── */
  ACHIEVEMENT_DEFS: [
    { id: 'first_word',  name: 'Primer meme aprendido', desc: 'Aprendiste tu primera palabra', icon: '🎉', check: s => s.learned.length >= 1 },
    { id: 'hundred',     name: '100 términos descubiertos', desc: 'Marcaste 100 palabras como aprendidas', icon: '💯', check: s => s.learned.length >= 100 },
    { id: 'expert',      name: 'Nivel Experto', desc: 'Completaste un curso avanzado', icon: '🎓', check: s => Object.values(s.courseProgress).some(p => p >= 100) },
    { id: 'streak',      name: 'Racha de aprendizaje', desc: 'Visitaste el diccionario 3 veces', icon: '🔥', check: s => s.history.length >= 3 },
    { id: 'collector',   name: 'Coleccionista', desc: 'Guardaste 5 palabras favoritas', icon: '⭐', check: s => s.favorites.length >= 5 },
  ],

  checkAchievements() {
    let unlocked = false;
    this.ACHIEVEMENT_DEFS.forEach(def => {
      if (!this.state.achievements.includes(def.id) && def.check(this.state)) {
        this.state.achievements.push(def.id);
        unlocked = true;
        this.toast(`🏆 Logro desbloqueado: ${def.name}`);
      }
    });
    if (unlocked) this.save();
  },

  /* ── DARK MODE ── */
  applyDarkMode() {
    document.documentElement.classList.toggle('dark', this.state.darkMode);
  },
  toggleDarkMode() {
    this.state.darkMode = !this.state.darkMode;
    this.applyDarkMode();
    this.save();
  },

  /* ── ACCESSIBILITY ── */
  applyA11y() {
    document.documentElement.classList.remove('font-lg','font-xl');
    if (this.state.fontSize === 'lg') document.documentElement.classList.add('font-lg');
    if (this.state.fontSize === 'xl') document.documentElement.classList.add('font-xl');
    document.documentElement.classList.toggle('contrast', this.state.highContrast);
  },
  setFontSize(size) {
    this.state.fontSize = size;
    this.applyA11y();
    this.save();
  },
  toggleContrast() {
    this.state.highContrast = !this.state.highContrast;
    this.applyA11y();
    this.save();
  },
  readPageAloud() {
    if (!('speechSynthesis' in window)) { this.toast('Lectura en voz alta no disponible en este navegador'); return; }
    const main = document.querySelector('main') || document.body;
    const text = main.innerText.slice(0, 4000);
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'es-ES';
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
    this.toast('🔊 Leyendo página en voz alta...');
  },
  stopReading() {
    speechSynthesis.cancel();
  },

  /* ── TOAST ── */
  toast(msg, ms=3200) {
    let host = document.getElementById('toast-host');
    if (!host) {
      host = document.createElement('div');
      host.id = 'toast-host';
      document.body.appendChild(host);
    }
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    host.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition='opacity .3s'; setTimeout(()=>el.remove(), 300); }, ms);
  },

  /* ── COPY TO CLIPBOARD ── */
  copyText(text, successMsg='Copiado al portapapeles') {
    navigator.clipboard.writeText(text).then(() => this.toast('✅ ' + successMsg)).catch(() => this.toast('No se pudo copiar'));
  },

  /* ── SHARE ── */
  shareContent(title, text, url) {
    if (navigator.share) {
      navigator.share({ title, text, url }).catch(()=>{});
    } else {
      this.copyText(url || window.location.href, 'Enlace copiado para compartir');
    }
  },

  init() {
    this.load();
    this.applyDarkMode();
    this.applyA11y();
    this.renderNavAuthState();
    this.checkAchievements();
  },

  /* update header avatar/login button based on auth state across pages */
  renderNavAuthState() {
    const loginBtn = document.getElementById('navLoginBtn');
    const avatarBtn = document.getElementById('navAvatarBtn');
    if (!loginBtn && !avatarBtn) return;
    if (this.isLoggedIn()) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (avatarBtn) { avatarBtn.style.display = 'flex'; avatarBtn.textContent = this.state.user.initials; }
    } else {
      if (loginBtn) loginBtn.style.display = 'inline-block';
      if (avatarBtn) avatarBtn.style.display = 'none';
    }
  }
};

ALT.load();
ALT.applyDarkMode();
ALT.applyA11y();

document.addEventListener('DOMContentLoaded', () => {
  ALT.init();

  /* ── mobile hamburger ── */
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      drawer.classList.toggle('open');
      document.documentElement.classList.toggle('no-scroll', drawer.classList.contains('open'));
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.documentElement.classList.remove('no-scroll');
    }));
  }

  /* ── dark mode toggle button ── */
  document.querySelectorAll('[data-dark-toggle]').forEach(btn => {
    btn.addEventListener('click', () => ALT.toggleDarkMode());
  });

  /* ── a11y panel ── */
  const a11yToggle = document.getElementById('a11y-toggle');
  const a11yPanel = document.getElementById('a11y-panel');
  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', () => a11yPanel.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!a11yPanel.contains(e.target) && !a11yToggle.contains(e.target)) a11yPanel.classList.remove('open');
    });
  }

  /* ── login modal wiring ── */
  const loginBtn = document.getElementById('navLoginBtn');
  const loginModal = document.getElementById('loginModal');
  if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', () => loginModal.classList.add('open'));
  }

  /* ── avatar click -> go to profile ── */
  const avatarBtn = document.getElementById('navAvatarBtn');
  if (avatarBtn) {
    avatarBtn.addEventListener('click', () => { window.location.href = 'perfil.html'; });
  }

  /* ── scroll reveal (works across pages) ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(r => io.observe(r));
});
