(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const cfg = window.DHEA_CONFIG || {};
  const slides = [    { overline: '01 / VEHICLE POLLUTION TESTING', first: 'Drive clean.', second: 'Stay compliant.', description: 'Petrol & diesel vehicle pollution testing and everyday vehicle-related assistance — made simple.', tag: 'DHEA / AUTO CARE', icon: '🚗', iconLabel: 'Car', title: 'PETROL + DIESEL', float1: ['🌿','PUC Testing','Petrol & diesel'], float2: ['📄','Vehicle Documents','Easy assistance'], theme: 'mint' },
    { overline: '02 / ONLINE APPLICATIONS & DIGITAL SERVICES', first: 'Online work.', second: 'Made easier.', description: 'PAN, Aadhaar-related assistance, ITR, government schemes, IGNOU registration and much more.', tag: 'DHEA / DIGITAL DESK', icon: '💻', iconLabel: 'Computer', title: 'YOUR DIGITAL DESK', float1: ['💳','PAN Services','Online assistance'], float2: ['🏛️','Govt. Schemes','Application support'], theme: 'violet' },
    { overline: '03 / PRINTING & CREATIVE SERVICES', first: 'Print it.', second: 'Make it shine.', description: 'Xerox, lamination, PVC cards, photo frames and eye-catching poster or card designs.', tag: 'DHEA / PRINT STUDIO', icon: '🖨️', iconLabel: 'Printer', title: 'PRINT + DESIGN', float1: ['✨','Lamination','Protect documents'], float2: ['🎨','Creative Designs','Cards & posters'], theme: 'sunshine' },
    { overline: '04 / PAN & AADHAAR ASSISTANCE', first: 'Documents.', second: 'Made simple.', description: 'PAN applications, corrections and guidance for eligible Aadhaar online services — ask us what can be done from your phone.', tag: 'DHEA / DOCUMENT DESK', icon: '🪪', iconLabel: 'Identity card', title: 'PAN + AADHAAR HELP', float1: ['📲','Remote assistance','Message to get started'], float2: ['✅','Application help','Step-by-step guidance'], theme: 'mint' },
    { overline: '05 / VEHICLE DOCUMENT SERVICES', first: 'Your car.', second: 'Our assistance.', description: 'Insurance, vehicle tax, permits and learner’s licence applications — all with convenient digital support.', tag: 'DHEA / VEHICLE DESK', icon: '🛡️', iconLabel: 'Shield', title: 'INSURANCE + PERMITS', float1: ['🧾','Token / Road Tax','Application help'], float2: ['🪪','Learner’s Licence','Online support'], theme: 'peach' },
    { overline: '06 / WEB & TRAVEL SOLUTIONS', first: 'Big ideas.', second: 'Simple solutions.', description: 'Business website development, railway and flight ticket assistance, and a world of useful online services.', tag: 'DHEA / WEB + TRAVEL', icon: '🌐', iconLabel: 'Globe', title: 'WEB + TRAVEL', float1: ['✈️','Travel Booking','Rail & flights'], float2: ['🧑‍💻','Website Design','Digital presence'], theme: 'sky' }
  ];

  // Lightweight vector animations — no external images, video, or animation library required.
  const svg = (body) => `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${body}</svg>`;
  const scenes = [
    svg(`<ellipse cx="161" cy="202" rx="137" ry="15" fill="#527d7a" opacity=".15"/><path d="M18 181H301" stroke="#80b4aa" stroke-width="5" stroke-linecap="round"/><g class="puc-machine"><rect x="209" y="48" width="69" height="119" rx="12" fill="#244b6c"/><rect x="218" y="61" width="51" height="43" rx="6" fill="#c9fff4"/><path d="M226 87l10-10 10 6 11-13" fill="none" stroke="#1bbf96" stroke-width="4" stroke-linecap="round"/><rect x="225" y="117" width="38" height="8" rx="4" fill="#8ff0cd"/><circle cx="244" cy="144" r="7" fill="#d6ff65"/><path d="M209 148q-35 0-37 23" stroke="#244b6c" fill="none" stroke-width="6" stroke-linecap="round"/><circle cx="169" cy="173" r="5" fill="#244b6c"/></g><g class="drive-car"><path d="M43 137l24-36q6-9 20-9h53q11 0 20 11l22 34h12q13 0 13 14v24H35v-23q0-15 8-15Z" fill="#346ec7"/><path d="M75 105h59q10 0 17 13l8 18H56Z" fill="#d9f8ff"/><path d="M111 105v31" stroke="#5a8fa8" stroke-width="4"/><rect x="35" y="149" width="19" height="11" rx="4" fill="#fff2a5"/><rect x="186" y="149" width="20" height="11" rx="4" fill="#ffc0a2"/><g class="wheel-spin"><circle cx="77" cy="175" r="20" fill="#172947"/><circle cx="77" cy="175" r="10" fill="#f4faff"/><path d="M77 165v20m-10-10h20" stroke="#9cacc0" stroke-width="3"/></g><g class="wheel-spin"><circle cx="168" cy="175" r="20" fill="#172947"/><circle cx="168" cy="175" r="10" fill="#f4faff"/><path d="M168 165v20m-10-10h20" stroke="#9cacc0" stroke-width="3"/></g></g><g class="puc-check"><circle cx="270" cy="35" r="24" fill="#b2f4b6"/><path d="m258 34 9 9 16-20" stroke="#1b8458" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>`),
    svg(`<ellipse cx="160" cy="208" rx="106" ry="12" fill="#5977ab" opacity=".15"/><g class="phone-tilt"><rect x="99" y="21" width="125" height="191" rx="21" fill="#192b57"/><rect x="107" y="31" width="109" height="169" rx="13" fill="#fff"/><rect x="139" y="33" width="44" height="8" rx="4" fill="#192b57"/><text x="161" y="65" text-anchor="middle" font-size="12" font-weight="900" fill="#233e62">ONLINE SERVICE</text><rect x="122" y="76" width="79" height="12" rx="6" fill="#e0eaf7"/><rect x="122" y="97" width="79" height="12" rx="6" fill="#e0eaf7"/><rect x="122" y="118" width="79" height="12" rx="6" fill="#e0eaf7"/><rect x="123" y="147" width="77" height="27" rx="9" fill="#6cd9af"/><text x="161" y="165" text-anchor="middle" fill="#144f40" font-size="12" font-weight="800">SUBMIT ✓</text></g><g class="send-plane"><path d="M211 55 291 26 268 106 247 80 226 94 231 63Z" fill="#58a8ff"/><path d="m231 63 60-37-44 54" fill="none" stroke="#fff" stroke-width="3"/></g><g class="sent-badge"><circle cx="87" cy="97" r="25" fill="#d4ffa8"/><path d="m75 97 9 9 16-18" fill="none" stroke="#2b926b" stroke-width="6" stroke-linecap="round"/></g><g class="signal-lines" fill="none" stroke="#458adc" stroke-width="4" stroke-linecap="round"><path d="M242 126q21 4 21 24"/><path d="M251 114q33 6 35 36"/></g>`),
    svg(`<ellipse cx="163" cy="208" rx="123" ry="12" fill="#a68b61" opacity=".15"/><g class="frame-assemble"><rect x="72" y="30" width="175" height="156" rx="8" fill="#a46b3c"/><rect x="84" y="42" width="151" height="132" rx="3" fill="#fff8e8"/><rect x="93" y="51" width="133" height="114" rx="2" fill="#bfe7d7"/><circle cx="179" cy="81" r="22" fill="#ffe1a3"/><path d="M93 148 133 105l35 33 21-23 37 37v13H93Z" fill="#469e85"/><path d="m93 166 50-44 42 44" fill="#24786c"/><path d="M72 30h175v14H72Z" fill="#c49459"/><path d="M72 30h14v156H72Z" fill="#c49459"/></g><g class="sparkle s1"><path d="m48 62 7 14 14 7-14 7-7 14-7-14-14-7 14-7Z" fill="#f6bf51"/></g><g class="sparkle s2"><path d="m262 98 6 11 11 6-11 6-6 11-6-11-11-6 11-6Z" fill="#edb75e"/></g><g class="small-printer"><rect x="182" y="166" width="99" height="37" rx="9" fill="#3f5c86"/><rect x="196" y="151" width="66" height="20" rx="3" fill="#f9f9ff"/><rect x="198" y="177" width="66" height="20" rx="2" fill="#e7f7ff"/><path d="M214 183h32m-32 6h24" stroke="#aacbd4" stroke-width="3"/></g>`),
    svg(`<ellipse cx="159" cy="208" rx="119" ry="12" fill="#587e9b" opacity=".15"/><g class="identity-card"><rect x="49" y="46" width="221" height="137" rx="15" fill="#fff" stroke="#d3e0ed" stroke-width="3"/><rect x="49" y="46" width="221" height="28" rx="14" fill="#eaf5fe"/><text x="65" y="65" font-weight="800" font-size="13" fill="#2d5487">DOCUMENT ASSISTANCE</text><rect x="66" y="89" width="58" height="69" rx="9" fill="#cee5f7"/><circle cx="95" cy="112" r="13" fill="#79a6cc"/><path d="M73 150q4-24 22-24t22 24" fill="#79a6cc"/><path d="M141 96h105m-105 18h81m-81 18h96m-96 18h68" stroke="#afc4d4" stroke-width="8" stroke-linecap="round"/></g><g class="id-stamp"><circle cx="253" cy="165" r="33" fill="#bdf6b8" stroke="#fff" stroke-width="6"/><path d="m237 164 11 11 20-24" stroke="#238e64" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><g class="card-float"><rect x="53" y="15" width="77" height="27" rx="12" fill="#3264ad"/><text x="91" y="33" text-anchor="middle" font-size="12" font-weight="800" fill="white">PAN • ID</text></g>`),
    svg(`<ellipse cx="161" cy="207" rx="124" ry="12" fill="#7e93a9" opacity=".15"/><g class="doc-slide"><rect x="76" y="24" width="159" height="176" rx="13" fill="#fff" stroke="#bed2ed" stroke-width="4"/><path d="M95 54h122" stroke="#d0dbef" stroke-width="9" stroke-linecap="round"/><path d="M95 78h99m-99 19h112m-112 19h89" stroke="#dce5f0" stroke-width="7" stroke-linecap="round"/><rect x="95" y="135" width="121" height="40" rx="9" fill="#eaf9ef"/><text x="155" y="160" text-anchor="middle" font-size="13" font-weight="900" fill="#2c8662">APPROVED ✓</text></g><g class="key-spin"><circle cx="244" cy="63" r="27" fill="#f8c17b"/><circle cx="244" cy="63" r="12" fill="none" stroke="#fff" stroke-width="5"/><path d="M244 91v43m0-16h14" stroke="#f8c17b" stroke-width="10" stroke-linecap="round"/></g><g class="tiny-car"><path d="m42 162 13-20h54l16 20h9v21H31v-15q0-6 11-6" fill="#568edd"/><circle cx="56" cy="184" r="12" fill="#213b5b"/><circle cx="111" cy="184" r="12" fill="#213b5b"/></g>`),
    svg(`<ellipse cx="162" cy="207" rx="126" ry="12" fill="#68949c" opacity=".15"/><g class="laptop-rise"><rect x="44" y="41" width="223" height="142" rx="11" fill="#24385e"/><rect x="54" y="51" width="203" height="121" rx="5" fill="#d9f5f6"/><rect x="66" y="63" width="179" height="19" rx="4" fill="#72ced2"/><circle cx="79" cy="72" r="4" fill="#fff"/><circle cx="91" cy="72" r="4" fill="#fff"/><rect x="68" y="92" width="75" height="58" rx="5" fill="#92dbe6"/><rect x="154" y="92" width="88" height="11" rx="4" fill="#fff"/><rect x="154" y="112" width="80" height="8" rx="4" fill="#fff"/><rect x="154" y="128" width="68" height="8" rx="4" fill="#fff"/><path d="M27 183h257l-19 17H46Z" fill="#7d92aa"/></g><g class="flight-fly"><path d="m225 27 48-18-13 48-15-14-11 7 2-16Z" fill="#fff" stroke="#3494b6" stroke-width="3"/><path d="m237 34 36-25-28 34" stroke="#3494b6" fill="none" stroke-width="2"/></g><g class="code-bubble"><rect x="13" y="117" width="83" height="35" rx="10" fill="#fff"/><text x="54" y="139" text-anchor="middle" font-size="18" font-weight="900" fill="#4ba3b3">&lt;/&gt;</text></g>`)
  ];
  function renderScene(index) { return scenes[index] || scenes[0]; }

  let current = 0, auto = true, slideTimer = null, animTimer = null;
  const hero = $('.hero');
  const dotsWrap = $('#slider-dots');
  const show = $('#hero-showcase');
  const heading = $('#hero-heading');
  const sceneLabels = ['Car driving into pollution testing station', 'Applying for an online service using a mobile phone', 'Photo frame created in a print studio', 'PAN and Aadhaar-related digital assistance', 'Vehicle insurance and permit digital processing', 'Website development and online travel booking'];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  slides.forEach((slide, idx) => {
    const button = document.createElement('button');
    button.className = 'slider-dot' + (idx === 0 ? ' active' : '');
    button.type = 'button';
    button.setAttribute('aria-label', `Show ${slide.overline.split(' / ')[1].toLowerCase()}`);
    button.setAttribute('aria-current', idx === 0 ? 'true' : 'false');
    button.addEventListener('click', () => setSlide(idx));
    dotsWrap.appendChild(button);
  });
  function applySlide(index) {
    const s = slides[index];
    hero.dataset.theme = s.theme;
    $('#slide-overline').textContent = s.overline;
    heading.innerHTML = `${s.first}<br><em>${s.second}</em>`;
    $('#hero-description').textContent = s.description;
    $('#visual-tag').textContent = s.tag;
    const icon = $('#visual-icon');
    icon.innerHTML = renderScene(index);
    icon.setAttribute('aria-label', sceneLabels[index]);
    $('#visual-title').textContent = s.title;
    $('#float-icon-one').textContent = s.float1[0]; $('#float-title-one').textContent = s.float1[1]; $('#float-sub-one').textContent = s.float1[2];
    $('#float-icon-two').textContent = s.float2[0]; $('#float-title-two').textContent = s.float2[1]; $('#float-sub-two').textContent = s.float2[2];
    $('#current-slide').textContent = String(index + 1).padStart(2, '0');
    $$('.slider-dot').forEach((dot, i) => {dot.classList.toggle('active', i === index); dot.setAttribute('aria-current', i === index ? 'true' : 'false');});
  }
  function setSlide(index) {
    current = (index + slides.length) % slides.length;
    hero.classList.remove('slide-enter');
    if (animTimer) clearTimeout(animTimer);
    applySlide(current);
    void show.offsetWidth;
    hero.classList.add('slide-enter');
    animTimer = setTimeout(() => hero.classList.remove('slide-enter'), 800);
    resetTimer();
  }
  function resetTimer() { if (slideTimer) clearInterval(slideTimer); if (auto && !prefersReducedMotion) slideTimer = setInterval(() => { if (!document.hidden) setSlide(current + 1); }, 2400); }
  $('#next-slide').addEventListener('click', () => setSlide(current + 1));
  $('#prev-slide').addEventListener('click', () => setSlide(current - 1));
  $('#slider-pause').addEventListener('click', () => {
    auto = !auto;
    $('#slider-pause').textContent = auto ? 'Ⅱ' : '▶';
    $('#slider-pause').setAttribute('aria-label', auto ? 'Pause automatic slideshow' : 'Play automatic slideshow');
    $('#slider-pause').setAttribute('aria-pressed', String(!auto));
    resetTimer();
  });
  if (prefersReducedMotion) {auto = false; $('#slider-pause').textContent = '▶'; $('#slider-pause').setAttribute('aria-label', 'Play automatic slideshow'); $('#slider-pause').setAttribute('aria-pressed', 'true');}
  applySlide(0);
  resetTimer();

  const menuToggle = $('#menu-toggle');
  const nav = $('#primary-nav');
  function closeMenu() {nav.classList.remove('open'); menuToggle.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation menu');}
  menuToggle.addEventListener('click', () => { const opened = nav.classList.toggle('open'); menuToggle.classList.toggle('open', opened); menuToggle.setAttribute('aria-expanded', String(opened)); menuToggle.setAttribute('aria-label', opened ? 'Close navigation menu' : 'Open navigation menu'); });
  $$('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {if (e.key === 'Escape') closeMenu();});

  function filterServices(type) {
    $$('.tab').forEach(btn => {const selected = btn.dataset.filter === type; btn.classList.toggle('active', selected); btn.setAttribute('aria-pressed', String(selected));});
    $$('.service-card').forEach(card => {card.hidden = type !== 'all' && card.dataset.category !== type;});
  }
  $$('.tab').forEach(btn => btn.addEventListener('click', () => filterServices(btn.dataset.filter)));
  $$('[data-jump-filter]').forEach(link => link.addEventListener('click', () => filterServices(link.dataset.jumpFilter)));
  $$('.card-link').forEach(button => button.addEventListener('click', () => {$('#visitor-service').value = mapEnquiryOption(button.dataset.service); $('#visitor-message').value = `I'm interested in: ${button.dataset.service}.`; $('#contact').scrollIntoView({behavior: prefersReducedMotion ? 'instant' : 'smooth'}); $('#visitor-name').focus({preventScroll:true});}));
  function mapEnquiryOption(service) {
    const options = [...$('#visitor-service').options].map(o => o.value);
    if (options.includes(service)) return service;
    if (/insurance/i.test(service)) return 'Vehicle Insurance';
    if (/permit|tax|licence/i.test(service)) return "Vehicle Tax / Permit / Learner's Licence";
    if (/pan|aadhaar/i.test(service)) return 'PAN / Aadhaar Assistance';
    if (/itr|scheme|ignou/i.test(service)) return 'ITR / Government Schemes / IGNOU';
    if (/railway|flight/i.test(service)) return 'Railway / Flight Booking';
    if (/printing|xerox|lamination/i.test(service)) return 'Printing / Xerox / Lamination';
    if (/poster|card|frame|photo/i.test(service)) return 'Poster / Card Design / Photo Frame / PVC Card';
    return 'Other Online Services';
  }

  if (cfg.address) {$('#business-address').textContent = cfg.address; $('#footer-address').textContent = cfg.address;}
  if (cfg.phone) $('#business-phone').textContent = cfg.phone;
  if (cfg.hours) $('#business-hours').textContent = cfg.hours;
  if (cfg.email) {const email = $('#footer-email'); email.textContent = cfg.email; email.href = `mailto:${cfg.email}`;}
  $('#year').textContent = new Date().getFullYear();
  const whatsapp = String(cfg.whatsapp || cfg.phone || '').replace(/\D/g, '');
  if (whatsapp) {$('#enquiry-submit').innerHTML = 'Send on WhatsApp <span>↗</span>'; $('#form-note').textContent = 'This will open WhatsApp with your enquiry. Your message is not sent automatically.';}
  let toastTimeout;
  function toast(message) {const el = $('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => el.classList.remove('show'), 5000);}
  $('#enquiry-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = $('#visitor-name').value.trim(), service = $('#visitor-service').value, details = $('#visitor-message').value.trim();
    if (!name || !service) {toast('Please enter your name and choose a service.'); return;}
    const message = `Hello Dhea Digital Solutions,\nMy name is ${name}.\nI need help with: ${service}.${details ? `\nDetails: ${details}` : ''}`;
    if (whatsapp) {window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer'); return;}
    try {await navigator.clipboard.writeText(message); toast('Enquiry copied! Paste it into a message to the business.');}
    catch {const box = $('#visitor-message'); box.value = message; box.focus(); box.select(); toast('Your enquiry is ready below. Select and copy it to send.');}
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('visible'); observer.unobserve(entry.target);}}), {threshold: 0.08, rootMargin: '0px 0px 45px 0px'});
    $$('.reveal').forEach(el => observer.observe(el));
  } else $$('.reveal').forEach(el => el.classList.add('visible'));
  const sectionObserver = 'IntersectionObserver' in window && new IntersectionObserver(entries => {entries.forEach(entry => {if (entry.isIntersecting) $$('.nav-link').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));});}, {rootMargin: '-35% 0px -55% 0px'});
  if (sectionObserver) $$('main > section[id]').forEach(el => sectionObserver.observe(el));
})();
