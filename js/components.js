/* ═══════════════════════════════════════
   ALT 60/40 — SHARED UI COMPONENTS
   ═══════════════════════════════════════ */

function injectNav(currentPage) {
  const pages = [
    { href: 'index.html',       label: 'Inicio' },
    { href: 'diccionario.html', label: 'Diccionario' },
    { href: 'traductor.html',   label: 'Traductor IA' },
    { href: 'cultura.html',     label: 'Memes & Tendencias' },
    { href: 'cursos.html',      label: 'Cursos' },
    { href: 'nosotros.html',    label: 'Nosotros' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.href === currentPage ? 'current' : ''}">${p.label}</a>`
  ).join('');

  const drawerLinks = [...pages,
    { href: 'faq.html',      label: 'FAQ' },
    { href: 'contacto.html', label: 'Contacto' },
    { href: 'perfil.html',   label: '👤 Mi perfil' },
  ].map(p => `<a href="${p.href}">${p.label}</a>`).join('');

  document.getElementById('site-nav-placeholder').innerHTML = `
  <nav class="site-nav" aria-label="Navegación principal">
    <a href="index.html" class="logo">ALT <b>60/40</b></a>
    <div class="navlinks">
      ${links}
      <button class="nav-icon-btn" data-dark-toggle aria-label="Modo oscuro">
        <svg viewBox="0 0 24 24" fill="white"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>
      </button>
      <a href="#" id="navLoginBtn" style="background:rgba(255,255,255,.12);border-radius:8px;padding:8px 14px;font-weight:700;font-size:13px;font-family:var(--fD);color:#fff;text-decoration:none;">Iniciar sesión</a>
      <button class="nav-avatar-btn" id="navAvatarBtn" style="display:none;" aria-label="Mi perfil"></button>
      <a href="diccionario.html" class="nav-cta">Empieza</a>
    </div>
    <div class="nav-right">
      <button class="hamburger" id="hamburgerBtn" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-drawer" id="mobileDrawer">${drawerLinks}
    <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;">
      <button onclick="ALT.toggleDarkMode()" style="text-align:left;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:12px 16px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;">🌙 Modo oscuro</button>
      <a href="perfil.html" style="display:block;background:var(--gold);color:var(--wine);padding:12px 16px;border-radius:10px;font-weight:700;font-size:14px;text-align:center;text-decoration:none;">👤 Mi perfil</a>
    </div>
  </div>`;
}

function injectFooter() {
  document.getElementById('site-footer-placeholder').innerHTML = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <div class="f-logo">ALT <b>60/40</b></div>
        <p class="f-desc">Plataforma de cultura digital intergeneracional. Porque la edad no debe ser una barrera para entenderse.</p>
        <div class="f-social" style="margin-top:16px;">
          <a href="https://www.instagram.com/alt.60.40/" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          <a href="https://tiktok.com" target="_blank" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.21a8.16 8.16 0 004.77 1.52V7.29a4.85 4.85 0 01-1-.6z"/></svg></a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--wine)"/></svg></a>
        </div>
      </div>
      <div><div class="f-col-title">Plataforma</div><ul class="f-links"><li><a href="diccionario.html">Diccionario</a></li><li><a href="traductor.html">Traductor IA</a></li><li><a href="cultura.html">Tendencias</a></li><li><a href="cultura.html">Memes</a></li><li><a href="cursos.html">Cursos</a></li></ul></div>
      <div><div class="f-col-title">Recursos</div><ul class="f-links"><li><a href="nosotros.html#empresas">Empresas</a></li><li><a href="nosotros.html#colegios">Colegios</a></li><li><a href="nosotros.html#familias">Familias</a></li><li><a href="cursos.html">Precios</a></li><li><a href="contacto.html">Contacto</a></li></ul></div>
      <div><div class="f-col-title">Empresa</div><ul class="f-links"><li><a href="nosotros.html">Nosotros</a></li><li><a href="faq.html">FAQ</a></li><li><a href="nosotros.html#equipo">Equipo</a></li></ul></div>
      <div><div class="f-col-title">Legal</div><ul class="f-links"><li><a href="privacidad.html">Privacidad</a></li><li><a href="terminos.html">Términos</a></li></ul></div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 ALT 60/40. Todos los derechos reservados.</p>
      <div class="footer-bottom-links">
        <a href="privacidad.html">Privacidad</a>
        <a href="terminos.html">Términos</a>
        <a href="contacto.html">Contacto</a>
      </div>
    </div>
  </footer>`;
}

function injectLoginModal() {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="modal-overlay" id="loginModal" role="dialog" aria-modal="true">
    <div class="modal-box">
      <button class="modal-close" onclick="document.getElementById('loginModal').classList.remove('open')">×</button>
      <div style="text-align:center;margin-bottom:24px;">
        <div style="font-family:var(--fD);font-size:22px;font-weight:800;color:var(--wine);">ALT <span style="color:var(--gold)">60/40</span></div>
        <div style="font-size:13px;color:var(--gray);margin-top:6px;">Inicia sesión para guardar favoritos y ver tu progreso</div>
      </div>
      <button onclick="ALT.loginWithGoogle();ALT.renderNavAuthState();document.getElementById('loginModal').classList.remove('open');ALT.toast('✅ Bienvenido, '+ALT.state.user.name+'!');" style="width:100%;display:flex;align-items:center;justify-content:center;gap:10px;background:var(--white);border:1.5px solid var(--border);border-radius:10px;padding:13px;font-size:14px;font-weight:600;color:var(--ink);cursor:pointer;margin-bottom:14px;">
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continuar con Google
      </button>
      <div style="display:flex;align-items:center;gap:10px;margin:14px 0;"><div style="flex:1;height:1px;background:var(--border)"></div><span style="font-size:11px;color:var(--gray)">o con email</span><div style="flex:1;height:1px;background:var(--border)"></div></div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <input id="loginName" type="text" placeholder="Tu nombre" style="border:1.5px solid var(--border);border-radius:9px;padding:12px 14px;font-size:14px;font-family:var(--fB);outline:none;color:var(--ink);background:var(--bg);width:100%;">
        <input id="loginEmail" type="email" placeholder="tu@email.com" style="border:1.5px solid var(--border);border-radius:9px;padding:12px 14px;font-size:14px;font-family:var(--fB);outline:none;color:var(--ink);background:var(--bg);width:100%;">
        <button onclick="const n=document.getElementById('loginName').value.trim();const e=document.getElementById('loginEmail').value.trim();if(!n||!e){ALT.toast('⚠️ Completa todos los campos');return;}ALT.login(n,e);ALT.renderNavAuthState();document.getElementById('loginModal').classList.remove('open');ALT.toast('✅ Bienvenido, '+n+'!');" style="background:var(--wine);color:#fff;border:none;border-radius:9px;padding:13px;font-size:14px;font-weight:700;cursor:pointer;font-family:var(--fD);">Iniciar sesión / Registrarse</button>
      </div>
    </div>
  </div>`);
  document.getElementById('loginModal').addEventListener('click', e => { if(e.target===document.getElementById('loginModal')) document.getElementById('loginModal').classList.remove('open'); });
}

function injectA11yWidget() {
  document.body.insertAdjacentHTML('beforeend', `
  <button id="a11y-toggle" aria-label="Accesibilidad">
    <svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="1.5"/><path d="M19 8.5h-5.5l-.9-1.5H11l-.9 1.5H4.5v1.5h2.3l1.7 8.5h7l1.7-8.5H19V8.5z"/></svg>
  </button>
  <div id="a11y-panel">
    <div style="font-family:var(--fD);font-size:13px;font-weight:700;color:var(--wine);margin-bottom:12px;">♿ Accesibilidad</div>
    <div class="a11y-row"><span class="a11y-label">Modo oscuro</span><button class="a11y-toggle-switch ${ALT.state.darkMode?'on':''}" onclick="ALT.toggleDarkMode();this.classList.toggle('on')"></button></div>
    <div class="a11y-row"><span class="a11y-label">Tamaño de letra</span><div class="a11y-btns"><button class="a11y-mini-btn ${ALT.state.fontSize==='base'?'active':''}" onclick="ALT.setFontSize('base');document.querySelectorAll('#a11y-panel .a11y-mini-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">A</button><button class="a11y-mini-btn ${ALT.state.fontSize==='lg'?'active':''}" style="font-size:14px" onclick="ALT.setFontSize('lg');document.querySelectorAll('#a11y-panel .a11y-mini-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">A</button><button class="a11y-mini-btn ${ALT.state.fontSize==='xl'?'active':''}" style="font-size:16px" onclick="ALT.setFontSize('xl');document.querySelectorAll('#a11y-panel .a11y-mini-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">A</button></div></div>
    <div class="a11y-row"><span class="a11y-label">Alto contraste</span><button class="a11y-toggle-switch ${ALT.state.highContrast?'on':''}" onclick="ALT.toggleContrast();this.classList.toggle('on')"></button></div>
    <div class="a11y-row" style="border-bottom:none"><span class="a11y-label">Leer en voz alta</span><div class="a11y-btns"><button class="a11y-mini-btn" onclick="ALT.readPageAloud()">▶</button><button class="a11y-mini-btn" onclick="ALT.stopReading()">■</button></div></div>
  </div>`);
}

function setPageMeta({ title, description, path }) {
  document.title = title + ' — ALT 60/40';
  let desc = document.querySelector('meta[name="description"]');
  if (!desc) { desc = document.createElement('meta'); desc.name='description'; document.head.appendChild(desc); }
  desc.content = description;
  if (!document.querySelector('link[rel="icon"]')) {
    const fav = document.createElement('link'); fav.rel='icon';
    fav.href=`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23640031'/><text y='.85em' font-size='70' x='8' font-family='sans-serif' fill='%23F7CB15' font-weight='bold'>A</text></svg>`;
    document.head.appendChild(fav);
  }
}

function initPage({ page, title, description }) {
  setPageMeta({ title, description, path: page });
  injectNav(page);
  injectFooter();
  injectLoginModal();
  injectA11yWidget();
  if (!document.getElementById('toast-host')) document.body.insertAdjacentHTML('beforeend','<div id="toast-host"></div>');
  ALT.init();
}
