/* ============================================================
   JOVENT MENSWEAR — shared interactions
   ============================================================ */
(function () {
'use strict';

const U = (id, w) => `https://images.unsplash.com/photo-${id}?q=80&w=${w || 700}&auto=format&fit=crop`;

/* ---------------- Catalog (seed) ---------------- */
const SEED_PRODUCTS = [
    { id: 'p01', name: 'Regal Black Two-Piece Suit', cat: 'formal', price: 14500, old: 16900, badge: 'Sale', badgeCls: 'sale', rating: 5, reviews: 42,
      img: U('1507679799987-c73779587ccf'), gallery: [U('1507679799987-c73779587ccf', 1000), U('1594938298603-c8148c4dae35', 1000), U('1519085360753-af0119f7cbe7', 1000)],
      desc: 'Cut from premium suiting fabric with a half-canvassed chest, the Regal suit drapes sharp from shoulder to hem. Peak lapels, double vents and hand-finished details make it the definitive Jovent statement piece.',
      fabric: 'Premium wool-blend suiting · Half-canvassed construction · Dry clean only' },
    { id: 'p02', name: 'Ivory Classic Dress Shirt', cat: 'formal', price: 2850, rating: 5, reviews: 67,
      img: U('1596755094514-f87e34085b2c'), gallery: [U('1596755094514-f87e34085b2c', 1000), U('1598033129183-c4f50c736f10', 1000)],
      desc: 'A crisp ivory shirt in breathable Supima cotton with a cutaway collar and single-needle stitching. The foundation of every sharp wardrobe.',
      fabric: '100% Supima cotton · Mother-of-pearl buttons · Machine washable' },
    { id: 'p03', name: 'Charcoal Wool Blazer', cat: 'formal', price: 8900, badge: 'New', rating: 5, reviews: 18,
      img: U('1594938298603-c8148c4dae35'), gallery: [U('1594938298603-c8148c4dae35', 1000), U('1507679799987-c73779587ccf', 1000)],
      desc: 'Our signature blazer in deep charcoal wool — structured shoulders, a tailored waist and patch pockets. Dresses up denim, completes suiting.',
      fabric: 'Wool-rich twill · Structured shoulder · Dry clean only' },
    { id: 'p04', name: 'Midnight Slim-Fit Trousers', cat: 'formal', price: 3200, rating: 4, reviews: 35,
      img: U('1519085360753-af0119f7cbe7'), gallery: [U('1519085360753-af0119f7cbe7', 1000)],
      desc: 'Slim through the thigh with a gentle taper, in a midnight twill that holds its crease from morning meetings to late dinners.',
      fabric: 'Stretch wool-blend twill · Hook & bar closure · Machine washable' },
    { id: 'p05', name: 'Essential White Crew Tee', cat: 'casual', price: 950, rating: 5, reviews: 120,
      img: U('1521572163474-6864f9cf17ab'), gallery: [U('1521572163474-6864f9cf17ab', 1000), U('1618354691373-d851c5c3a990', 1000)],
      desc: 'The perfect white tee — heavyweight 220 GSM combed cotton, ribbed collar that keeps its shape, and a cut that skims without clinging.',
      fabric: '220 GSM combed cotton · Pre-shrunk · Machine washable' },
    { id: 'p06', name: 'Urban Graphic Tee', cat: 'casual', price: 1150, badge: 'New', rating: 4, reviews: 22,
      img: U('1576566588028-4147f3842f27'), gallery: [U('1576566588028-4147f3842f27', 1000), U('1521572163474-6864f9cf17ab', 1000)],
      desc: 'Street-ready graphic tee with a tonal Jovent chest print. Boxy comfort fit in soft washed cotton.',
      fabric: 'Washed combed cotton · Relaxed fit · Machine washable' },
    { id: 'p07', name: 'Oversized Street Tee', cat: 'casual', price: 1250, rating: 4, reviews: 31,
      img: U('1618354691373-d851c5c3a990'), gallery: [U('1618354691373-d851c5c3a990', 1000)],
      desc: 'Drop shoulders, a longer body and heavyweight drape — the modern oversized silhouette, finished with Jovent tonal embroidery.',
      fabric: '240 GSM heavyweight cotton · Drop shoulder · Machine washable' },
    { id: 'p08', name: 'Ranger Field Jacket', cat: 'casual', price: 6800, rating: 5, reviews: 15,
      img: U('1591047139829-d91aecb6caea'), gallery: [U('1591047139829-d91aecb6caea', 1000), U('1488161628813-04466f872be2', 1000)],
      desc: 'A rugged-yet-refined field jacket in water-resistant canvas with brass hardware and a quilted lining for cooler evenings.',
      fabric: 'Water-resistant canvas · Quilted lining · Spot clean' },
    { id: 'p09', name: 'Heritage Denim Jacket', cat: 'casual', price: 5400, badge: 'Hot', rating: 5, reviews: 28,
      img: U('1488161628813-04466f872be2'), gallery: [U('1488161628813-04466f872be2', 1000), U('1591047139829-d91aecb6caea', 1000)],
      desc: 'Cut from 14oz Japanese-style selvedge denim that breaks in beautifully. A lifetime piece that only gets better.',
      fabric: '14oz selvedge denim · Copper rivets · Machine washable' },
    { id: 'p10', name: 'Chrono Steel Watch', cat: 'accessories', price: 12500, badge: 'Limited', rating: 5, reviews: 12,
      img: U('1523170335258-f5ed11844a49'), gallery: [U('1523170335258-f5ed11844a49', 1000)],
      desc: 'A 41mm brushed-steel chronograph with sapphire-coated glass and genuine leather strap. Quietly commanding on the wrist.',
      fabric: '316L stainless steel · Sapphire-coated glass · 5ATM water resistant' },
    { id: 'p11', name: 'Voyager Leather Backpack', cat: 'accessories', price: 4800, rating: 5, reviews: 19,
      img: U('1553062407-98eeb64c6a62'), gallery: [U('1553062407-98eeb64c6a62', 1000)],
      desc: 'Full-grain leather backpack with a padded 15" laptop sleeve, brass zips and a silhouette that works from office to weekend.',
      fabric: 'Full-grain leather · Brass hardware · 20L capacity' },
    { id: 'p12', name: 'Court Classic Sneakers', cat: 'accessories', price: 5900, badge: 'Hot', rating: 4, reviews: 44,
      img: U('1549298916-b41d501d3772'), gallery: [U('1549298916-b41d501d3772', 1000)],
      desc: 'Minimal court sneakers in smooth leather with tonal stitching — the clean finish to tailoring or denim alike.',
      fabric: 'Full-grain leather upper · Cushioned insole · Rubber cupsole' },
];

/* ---------------- Admin-panel bridge ----------------
   When the Jovent admin panel has been opened in this browser, its product
   database (localStorage key 'jovent_admin_db_v1') becomes this storefront's
   catalog: products you add / edit / price / draft in the admin appear here on
   the next reload, and checkout orders are written back so they show up in the
   admin's Orders page. Serve both apps from one origin (e.g. the admin folder
   inside the storefront root) so localStorage is shared. With no admin
   database present, the built-in SEED_PRODUCTS catalog is used unchanged. */
const ADMIN_DB_KEY = 'jovent_admin_db_v1';
function readAdminDB() {
    try {
        const db = JSON.parse(localStorage.getItem(ADMIN_DB_KEY));
        if (db && Array.isArray(db.products)) return db;
    } catch { /* admin DB absent or unreadable — fall back to seed catalog */ }
    return null;
}
const BADGE_CLS = { sale: 'sale', new: 'new', hot: 'hot', limited: 'limited' };
function buildCatalog() {
    const db = readAdminDB();
    if (!db) return SEED_PRODUCTS;
    const seedById = id => SEED_PRODUCTS.find(p => p.id === id);
    return db.products
        .filter(p => p && (p.status || 'active') === 'active')
        .map(p => {
            const s = seedById(p.id) || {};
            const badge = p.badge || s.badge || '';
            return {
                id: p.id,
                name: p.name, cat: p.cat,
                price: +p.price || 0, old: +p.old || 0,
                badge, badgeCls: BADGE_CLS[String(badge).toLowerCase()] || s.badgeCls || '',
                rating: p.rating || s.rating || 5, reviews: s.reviews || 0,
                img: p.img || s.img || '',
                gallery: (s.gallery && s.gallery.length) ? s.gallery : (p.img ? [p.img] : []),
                desc: s.desc || 'A Jovent essential — premium fabric, tailored fit, finished with care.',
                fabric: s.fabric || '',
                stock: (p.stock == null ? null : +p.stock),
                sku: p.sku || ''
            };
        });
}
const PRODUCTS = buildCatalog();
const CATS = { formal: 'Formal Wear', casual: 'Casual Wear', accessories: 'Accessories' };
const byId = id => PRODUCTS.find(p => p.id === id);
const fmt = n => '৳' + n.toLocaleString('en-US');
const stars = r => '★'.repeat(r) + '☆'.repeat(5 - r);

/* ---------------- Image fallback (never show a broken tile) ---------------- */
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1a1a1a"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs><rect width="600" height="800" fill="url(#g)"/><text x="300" y="400" font-family="Georgia" font-size="44" fill="#c9a24b" text-anchor="middle" letter-spacing="8">JOVENT</text></svg>`);
document.addEventListener('error', e => {
    const t = e.target;
    if (t.tagName === 'IMG' && !t.dataset.fbk) { t.dataset.fbk = '1'; t.src = PLACEHOLDER; }
}, true);

/* ---------------- Toast ---------------- */
function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) {
        el = document.createElement('div');
        el.className = 'toast';
        el.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span></span>`;
        document.body.appendChild(el);
    }
    el.querySelector('span').textContent = msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ---------------- Cart (localStorage) ---------------- */
const CART_KEY = 'jovent_cart_v1';
const getCart = () => { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } };
const saveCart = c => localStorage.setItem(CART_KEY, JSON.stringify(c));
const cartCount = () => getCart().reduce((s, i) => s + i.qty, 0);
const cartSubtotal = () => getCart().reduce((s, i) => { const p = byId(i.id); return p ? s + p.price * i.qty : s; }, 0);

function updateBadge(pop) {
    document.querySelectorAll('#cartCount').forEach(el => {
        el.textContent = cartCount();
        if (pop) { el.classList.add('pop'); setTimeout(() => el.classList.remove('pop'), 350); }
    });
}
function addToCart(id, size, qty) {
    const p = byId(id); if (!p) return;
    size = size || (p.cat === 'accessories' ? 'One Size' : 'M');
    qty = Math.max(1, qty || 1);
    const cart = getCart();
    const line = cart.find(i => i.id === id && i.size === size);
    if (line) line.qty += qty; else cart.push({ id, size, qty });
    saveCart(cart); updateBadge(true);
    toast(`${p.name} — added to bag`);
    if (typeof openMiniCart === 'function' && !/cart\.html|checkout\.html/.test(location.pathname)) openMiniCart();
}

/* ---------------- Product card ---------------- */
function cardHTML(p, d) {
    return `
    <div class="product-card reveal ${d ? 'reveal-d' + d : ''}">
        <a class="p-img" href="product.html?id=${p.id}">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            ${p.badge ? `<span class="p-badge ${p.badgeCls || ''}">${p.badge}</span>` : ''}
            <button class="p-wish" data-wish="${p.id}" aria-label="Add to wishlist"><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.7-10-9.3C.5 8 2.5 4.5 6 4.5c2 0 3.5 1.2 4.5 2.6 1-1.4 2.5-2.6 4.5-2.6 3.5 0 5.5 3.5 4 7.2C19.5 16.3 12 21 12 21z"/></svg></button>
            <button class="p-view" data-view="${p.id}">Quick View</button>
            <button class="p-quick" data-add="${p.id}">Add to Bag +</button>
        </a>
        <div class="p-body">
            <div class="p-cat">${CATS[p.cat]}</div>
            <div class="p-stars">${stars(p.rating)}</div>
            <h3 class="p-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
            <div class="p-price">${p.old ? `<s>${fmt(p.old)}</s>` : ''}${fmt(p.price)}</div>
        </div>
    </div>`;
}
function renderGrid(elId, list) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = list.length
        ? list.map((p, i) => cardHTML(p, (i % 4))).join('')
        : `<div class="empty-state" style="grid-column:1/-1"><h3>Nothing found</h3><p>Try adjusting your filters.</p></div>`;
    bindReveals(el);
    bindQuickAdds(el);
    if (typeof bindWishButtons === 'function') bindWishButtons(el);
    if (typeof bindQuickViews === 'function') bindQuickViews(el);
}
function bindQuickAdds(root) {
    (root || document).querySelectorAll('[data-add]').forEach(btn => {
        if (btn._bound) return; btn._bound = true;
        btn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); addToCart(btn.dataset.add); });
    });
}

/* ---------------- Reveal on scroll ---------------- */
let _obs;
function bindReveals(root) {
    if (!_obs) {
        _obs = new IntersectionObserver(es => es.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('in'); _obs.unobserve(e.target); }
        }), { threshold: 0.12 });
    }
    (root || document).querySelectorAll('.reveal:not(.in)').forEach(el => _obs.observe(el));
}

/* ---------------- Header / nav ---------------- */
function initHeader() {
    const h = document.getElementById('siteHeader');
    const onScroll = () => h && h.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    const t = document.getElementById('navToggle'), nav = document.getElementById('mainNav');
    if (t && nav) t.addEventListener('click', () => nav.classList.toggle('open'));
    // active link
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });
    updateBadge(false);
}

/* ---------------- Hero slider ---------------- */
function initHero() {
    const wrap = document.getElementById('heroSlider');
    if (!wrap) return;
    const slides = [...wrap.querySelectorAll('.hero-slide')];
    const dotsBox = document.getElementById('heroDots');
    let cur = 0, timer;
    slides.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'hero-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Slide ' + (i + 1));
        d.addEventListener('click', () => go(i, true));
        dotsBox.appendChild(d);
    });
    const dots = [...dotsBox.children];
    function go(i, manual) {
        slides[cur].classList.remove('active'); dots[cur].classList.remove('active');
        cur = (i + slides.length) % slides.length;
        slides[cur].classList.add('active'); dots[cur].classList.add('active');
        if (manual) restart();
    }
    function restart() { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6000); }
    document.getElementById('heroPrev').addEventListener('click', () => go(cur - 1, true));
    document.getElementById('heroNext').addEventListener('click', () => go(cur + 1, true));
    restart();
}

/* ---------------- Shop filters ---------------- */
function initShop() {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;
    const params = new URLSearchParams(location.search);
    let cat = params.get('cat') || 'all';
    const q0 = (params.get('q') || '').trim().toLowerCase();
    let q = q0;
    const sortSel = document.getElementById('sortSel');
    const minP = document.getElementById('minP'), maxP = document.getElementById('maxP');
    const pills = [...document.querySelectorAll('.pill')];
    const titles = { all: ['Shop <em>All</em>', 'The complete Jovent wardrobe — tailoring, casuals and accessories.'],
        formal: ['<em>Formal</em> Wear', 'Sharp tailoring for boardrooms, weddings and evenings that matter.'],
        casual: ['<em>Casual</em> Wear', 'Effortless everyday pieces with a luxury finish.'],
        accessories: ['<em>Accessories</em>', 'The details that define you — watches, leather and footwear.'] };
    function apply() {
        pills.forEach(p => p.classList.toggle('active', p.dataset.cat === cat));
        const t = titles[cat] || titles.all;
        document.getElementById('shopTitle').innerHTML = t[0];
        document.getElementById('shopSub').textContent = t[1];
        let list = PRODUCTS.filter(p => cat === 'all' || p.cat === cat);
        if (q) {
            list = list.filter(p => (p.name + ' ' + (CATS[p.cat] || '') + ' ' + (p.desc || '')).toLowerCase().includes(q));
            document.getElementById('shopTitle').innerHTML = `Results for <em>“${escHtml(q)}”</em>`;
            document.getElementById('shopSub').textContent = list.length + (list.length === 1 ? ' match' : ' matches') + ' in the Jovent collection.';
        }
        const lo = parseFloat(minP.value) || 0, hi = parseFloat(maxP.value) || Infinity;
        list = list.filter(p => p.price >= lo && p.price <= hi);
        const s = sortSel.value;
        if (s === 'price-asc') list.sort((a, b) => a.price - b.price);
        else if (s === 'price-desc') list.sort((a, b) => b.price - a.price);
        else if (s === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
        document.getElementById('shopCount').textContent = list.length + (list.length === 1 ? ' product' : ' products');
        renderGrid('shopGrid', list);
    }
    pills.forEach(p => p.addEventListener('click', () => { cat = p.dataset.cat; q = ''; apply(); }));
    sortSel.addEventListener('change', apply);
    document.getElementById('applyPrice').addEventListener('click', apply);
    [minP, maxP].forEach(i => i.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); apply(); } }));
    apply();
}

/* ---------------- Product page ---------------- */
function initProduct() {
    if (!document.getElementById('pdWrap')) return;
    const p = byId(new URLSearchParams(location.search).get('id')) || PRODUCTS[0];
    document.title = p.name + ' — Jovent';
    document.getElementById('crumbName').textContent = p.name;
    const main = document.getElementById('pdMainImg');
    main.src = p.gallery[0]; main.alt = p.name;
    document.getElementById('pdThumbs').innerHTML = p.gallery.map((g, i) =>
        `<button class="pd-thumb ${i === 0 ? 'active' : ''}" data-src="${g}"><img src="${g}" alt="${p.name} view ${i + 1}" loading="lazy"></button>`).join('');
    document.querySelectorAll('.pd-thumb').forEach(t => t.addEventListener('click', () => {
        document.querySelectorAll('.pd-thumb').forEach(x => x.classList.remove('active'));
        t.classList.add('active'); main.src = t.dataset.src;
    }));
    // hover zoom
    const wrap = document.getElementById('pdMain');
    wrap.addEventListener('mousemove', e => {
        const r = wrap.getBoundingClientRect();
        main.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
        main.style.transform = 'scale(2.1)';
    });
    wrap.addEventListener('mouseleave', () => { main.style.transform = 'scale(1)'; });
    document.getElementById('pdCat').textContent = CATS[p.cat];
    document.getElementById('pdName').textContent = p.name;
    document.getElementById('pdStars').textContent = stars(p.rating);
    document.getElementById('pdReviewCount').textContent = p.reviews + ' verified reviews';
    document.getElementById('pdPrice').innerHTML = (p.old ? `<s>${fmt(p.old)}</s>` : '') + fmt(p.price);
    const saveEl = document.getElementById('pdSave');
    if (p.old) { saveEl.style.display = 'inline-block'; saveEl.textContent = 'Save ' + fmt(p.old - p.price); }
    document.getElementById('pdDesc').textContent = p.desc;
    document.getElementById('pdFabric').innerHTML = '<b>Fabric & care — </b>' + p.fabric;
    const badgeEl = document.getElementById('pdBadge');
    if (p.badge) { badgeEl.style.display = 'inline-block'; badgeEl.textContent = p.badge; badgeEl.classList.add(p.badgeCls || ''); }
    // sizes
    const sizes = p.cat === 'accessories' ? ['One Size'] : ['S', 'M', 'L', 'XL', 'XXL'];
    const sizeRow = document.getElementById('sizeRow');
    sizeRow.innerHTML = sizes.map((s, i) => `<button class="size-btn ${i === 1 || sizes.length === 1 ? 'active' : ''}" data-size="${s}">${s}</button>`).join('');
    sizeRow.querySelectorAll('.size-btn').forEach(b => b.addEventListener('click', () => {
        sizeRow.querySelectorAll('.size-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
    }));
    // qty
    const qi = document.getElementById('qtyInput');
    document.getElementById('qtyMinus').addEventListener('click', () => { qi.value = Math.max(1, +qi.value - 1); });
    document.getElementById('qtyPlus').addEventListener('click', () => { qi.value = Math.min(9, +qi.value + 1); });
    const selSize = () => (sizeRow.querySelector('.size-btn.active') || {}).dataset?.size;
    document.getElementById('addBtn').addEventListener('click', () => addToCart(p.id, selSize(), +qi.value));
    document.getElementById('buyBtn').addEventListener('click', () => { addToCart(p.id, selSize(), +qi.value); location.href = 'checkout.html'; });
    // accordions
    document.querySelectorAll('.acc-head').forEach(h => h.addEventListener('click', () => {
        const item = h.parentElement, body = item.querySelector('.acc-body'), open = item.classList.toggle('open');
        body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
    }));
    // size guide modal
    const sg = document.getElementById('sizeModal');
    document.getElementById('sizeGuideBtn').addEventListener('click', () => sg.classList.add('show'));
    sg.querySelector('.modal-x').addEventListener('click', () => sg.classList.remove('show'));
    sg.addEventListener('click', e => { if (e.target === sg) sg.classList.remove('show'); });
    // related
    renderGrid('relatedGrid', PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).concat(PRODUCTS.filter(x => x.cat !== p.cat)).slice(0, 4));
}

/* ---------------- Cart page ---------------- */
function initCartPage() {
    const box = document.getElementById('cartItems');
    if (!box) return;
    function render() {
        const cart = getCart();
        if (!cart.length) {
            box.innerHTML = `<div class="empty-state"><h3>Your bag is empty</h3><p>Sharp looks await — start with our new arrivals.</p><br><a class="btn btn-gold" href="collection.html">Start Shopping</a></div>`;
            document.getElementById('cartSummary').style.display = 'none';
            return;
        }
        box.innerHTML = cart.map((i, idx) => {
            const p = byId(i.id); if (!p) return '';
            return `<div class="cart-item">
                <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}"></a>
                <div class="ci-info">
                    <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
                    <p>${CATS[p.cat]} · Size: ${i.size}</p>
                    <p>${fmt(p.price)} each</p>
                    <button class="ci-remove" data-rm="${idx}">Remove</button>
                </div>
                <div class="ci-right">
                    <div class="ci-qty">
                        <button data-dec="${idx}">−</button><span>${i.qty}</span><button data-inc="${idx}">+</button>
                    </div>
                    <div class="ci-price">${fmt(p.price * i.qty)}</div>
                </div>
            </div>`;
        }).join('');
        box.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => {
            const c = getCart(); c.splice(+b.dataset.rm, 1); saveCart(c); updateBadge(false); render();
        }));
        box.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => {
            const c = getCart(); c[+b.dataset.inc].qty = Math.min(9, c[+b.dataset.inc].qty + 1); saveCart(c); updateBadge(false); render();
        }));
        box.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => {
            const c = getCart(), it = c[+b.dataset.dec];
            it.qty--; if (it.qty < 1) c.splice(+b.dataset.dec, 1);
            saveCart(c); updateBadge(false); render();
        }));
        const sub = cartSubtotal(), ship = sub >= 5000 ? 0 : 120;
        document.getElementById('sumSub').textContent = fmt(sub);
        document.getElementById('sumShip').textContent = ship === 0 ? 'Free' : fmt(ship);
        document.getElementById('sumTotal').textContent = fmt(sub + ship);
        document.getElementById('shipNote').textContent = ship === 0
            ? 'You unlocked complimentary delivery.'
            : `Add ${fmt(5000 - sub)} more for complimentary delivery.`;
    }
    render();
}

/* ---------------- Checkout ---------------- */
function initCheckout() {
    const form = document.getElementById('coForm');
    if (!form) return;
    const cart = getCart();
    if (!cart.length && !location.search.includes('done')) { location.href = 'cart.html'; return; }
    // summary
    const sub = cartSubtotal(), ship = sub >= 5000 ? 0 : 120;
    document.getElementById('orderLines').innerHTML = cart.map(i => {
        const p = byId(i.id);
        return `<div class="order-line"><img src="${p.img}" alt="${p.name}">
            <div class="ol-info"><h5>${p.name}</h5><p>Size ${i.size} · Qty ${i.qty}</p></div>
            <div class="ol-price">${fmt(p.price * i.qty)}</div></div>`;
    }).join('');
    document.getElementById('coSub').textContent = fmt(sub);
    document.getElementById('coShip').textContent = ship === 0 ? 'Free' : fmt(ship);
    document.getElementById('coTotal').textContent = fmt(sub + ship);
    if (typeof initCouponGiftwrap === 'function') initCouponGiftwrap();
    // payment select
    document.querySelectorAll('.pay-opt').forEach(o => o.addEventListener('click', () => {
        document.querySelectorAll('.pay-opt').forEach(x => x.classList.remove('active'));
        o.classList.add('active'); o.querySelector('input').checked = true;
        refreshPayDetails();
    }));
    refreshPayDetails();
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        const payChecked = form.querySelector('input[name="pay"]:checked');
        if (payChecked && payChecked.value === 'cod' && isPhoneFlagged(document.getElementById('coPhone').value)) {
            toast('Cash on Delivery is unavailable for this number — please choose bKash or card.');
            refreshCodGate();
            return;
        }
        const name = document.getElementById('coName').value.trim().split(' ')[0] || 'Gentleman';
        const oid = 'JV-' + Math.random().toString(36).slice(2, 8).toUpperCase();
        const t = (typeof checkoutTotals === 'function') ? checkoutTotals() : { sub, ship, disc: 0, gift: 0, total: sub + ship, couponCode: '' };
        /* Write the order into the admin panel's database (same origin) so it
           appears in the admin's Orders page with the Pending → Delivered workflow. */
        try {
            const raw = localStorage.getItem(ADMIN_DB_KEY);
            if (raw) {
                const db = JSON.parse(raw);
                if (db && Array.isArray(db.orders)) {
                    const payEl = form.querySelector('input[name="pay"]:checked');
                    const payRaw = payEl ? payEl.value : 'cod';
                    const pay = payRaw === 'bkash' ? 'bKash' : payRaw === 'card' ? 'Card' : 'COD';
                    db.orders.unshift({
                        id: 'o' + Date.now().toString(36),
                        code: oid,
                        customer: document.getElementById('coName').value.trim(),
                        phone: document.getElementById('coPhone').value.trim(),
                        email: (document.getElementById('coEmail') || { value: '' }).value.trim().toLowerCase(),
                        city: document.getElementById('coCity').value,
                        address: document.getElementById('coAddr').value.trim(),
                        items: cart.map(i => { const p = byId(i.id); return { pid: i.id, qty: i.qty, size: i.size, price: p ? p.price : 0 }; }),
                        pay, status: 'Pending',
                        trx: (document.getElementById('coTrx') || { value: '' }).value.trim(),
                        date: new Date().toISOString().slice(0, 10),
                        subtotal: t.sub, shipping: t.ship, discount: t.disc, coupon: t.couponCode,
                        giftwrap: t.gift > 0, total: t.total
                    });
                    localStorage.setItem(ADMIN_DB_KEY, JSON.stringify(db));
                }
            }
        } catch { /* admin DB absent — checkout still succeeds */ }
        saveCart([]); updateBadge(false);
        document.getElementById('checkoutMain').innerHTML = `
            <div class="success-panel reveal in">
                <div class="success-check"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></div>
                <span class="kicker">Order confirmed</span>
                <h2>Thank you, ${name}.</h2>
                <p>Your order is being prepared with care.<br>Our concierge will call to confirm delivery shortly.</p>
                <div class="order-id">${oid}</div><br>
                <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:26px">
                    <a class="btn btn-outline" href="track-order.html">Track Your Order</a>
                    <a class="btn btn-ghost" href="account.html">My Account</a>
                </div>
                <a class="btn btn-gold" href="collection.html">Continue Shopping</a>
            </div>`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---------------- Videos ---------------- */
function initVideos() {
    const track = document.getElementById('vidTrack');
    if (!track) return;
    document.getElementById('vidPrev').addEventListener('click', () => track.scrollBy({ left: -340, behavior: 'smooth' }));
    document.getElementById('vidNext').addEventListener('click', () => track.scrollBy({ left: 340, behavior: 'smooth' }));
    const modal = document.getElementById('vidModal'), player = document.getElementById('vidPlayer'), mbox = document.getElementById('vidBox');
    track.querySelectorAll('.vid-card').forEach(card => card.addEventListener('click', () => {
        const type = card.dataset.type, url = card.dataset.url, tall = card.dataset.format === 'tall';
        mbox.classList.toggle('tall', tall);
        player.innerHTML = type === 'youtube'
            ? `<iframe src="https://www.youtube.com/embed/${url}?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
            : `<video src="${url}" controls autoplay playsinline></video>`;
        document.body.style.overflow = 'hidden';
        modal.classList.add('show');
    }));
    const close = () => {
        modal.classList.remove('show');
        setTimeout(() => { player.innerHTML = ''; }, 300);
        document.body.style.overflow = '';
    };
    modal.querySelector('.modal-x').addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('show')) close(); });
}

/* ---------------- Catalogue explorer toggle ---------------- */
function initCatalogue() {
    const btn = document.getElementById('explorerBtn');
    if (!btn) return;
    const sec = document.getElementById('lookSection');
    btn.addEventListener('click', () => {
        const on = sec.classList.toggle('explorer');
        btn.textContent = on ? 'Grid View' : 'Explorer View';
        toast(on ? 'Explorer view — dense index' : 'Gallery view');
    });
}

/* ---------------- Forms ---------------- */
function initForms() {
    const nl = document.getElementById('nlForm');
    if (nl) nl.addEventListener('submit', e => {
        e.preventDefault();
        const email = (nl.querySelector('input[type=email]') || {}).value;
        if (email && typeof addSubscriber === 'function') addSubscriber(email.trim().toLowerCase());
        toast('Welcome to the inner circle — please check your inbox.');
        nl.reset();
    });
    const cf = document.getElementById('contactForm');
    if (cf) cf.addEventListener('submit', e => {
        e.preventDefault();
        if (!cf.checkValidity()) { cf.reportValidity(); return; }
        toast('Message received — our concierge will reply within 24 hours.');
        cf.reset();
    });
}

/* ============================================================
   CUSTOMER ACCOUNTS  (demo front-end auth)
   NOTE: demo only — toy password hash, data in this browser.
   For production, swap registerUser / loginUser / session for your
   Laravel API (Sanctum tokens). The UI layer stays the same.
   Orders are read from the admin panel's DB (same localStorage key),
   so everything a customer sees, the admin sees too.
   ============================================================ */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const USERS_KEY = 'jovent_users_v1';
const SESSION_KEY = 'jovent_session_v1';
const DEMO_ORDERS_KEY = 'jovent_demo_orders_v1';

const escHtml = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const getUsers = () => { try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch { return []; } };
const saveUsers = u => localStorage.setItem(USERS_KEY, JSON.stringify(u));
const hashPw = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = (((h << 5) + h + s.charCodeAt(i)) >>> 0); return 'h' + h.toString(36); };
const getSession = () => { try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch { return null; } };
const currentUser = () => { const s = getSession(); return s ? getUsers().find(u => u.email === s.email) : null; };
const persistUser = patch => {
    const s = getSession(); if (!s) return null;
    const users = getUsers(), i = users.findIndex(u => u.email === s.email);
    if (i === -1) return null;
    Object.assign(users[i], patch); saveUsers(users); return users[i];
};
const normPhone = p => String(p || '').replace(/\D/g, '').replace(/^880/, '0');

/* Orders: admin DB (real) + one demo order so tracking is tryable instantly */
const adminOrders = () => { try { const db = JSON.parse(localStorage.getItem(ADMIN_DB_KEY)); return (db && Array.isArray(db.orders)) ? db.orders : []; } catch { return []; } };
const demoOrders = () => { try { return JSON.parse(localStorage.getItem(DEMO_ORDERS_KEY)) || []; } catch { return []; } };
const allOrders = () => adminOrders().concat(demoOrders());
function seedDemoOrder() {
    try {
        if (localStorage.getItem('jovent_demo_seeded')) return;
        const d = new Date(Date.now() - 3 * 864e5).toISOString().slice(0, 10);
        localStorage.setItem(DEMO_ORDERS_KEY, JSON.stringify([{
            id: 'demo1', code: 'JV-DEMO1', customer: 'Demo Guest', phone: '01700000000', email: '',
            city: 'Dhaka', address: 'House 12, Road 5, Gulshan, Dhaka 1212',
            items: [{ pid: 'p05', qty: 2, size: 'M', price: 950 }, { pid: 'p12', qty: 1, size: '42', price: 5900 }],
            pay: 'COD', status: 'Shipped', date: d, subtotal: 7800, shipping: 0, total: 7800
        }]));
        localStorage.setItem('jovent_demo_seeded', '1');
    } catch { /* ignore */ }
}
function myOrders() {
    const u = currentUser(); if (!u) return [];
    const uph = normPhone(u.phone);
    return allOrders().filter(o =>
        (o.email && u.email && o.email.toLowerCase() === u.email.toLowerCase()) ||
        (uph.length >= 11 && normPhone(o.phone) === uph)
    ).sort((a, b) => String(b.date).localeCompare(String(a.date)));
}
function findOrder(code, phone) {
    code = String(code || '').trim().toLowerCase(); const ph = normPhone(phone);
    return allOrders().find(o => String(o.code || '').toLowerCase() === code && normPhone(o.phone) === ph);
}

/* ---------- header account state ---------- */
function updateAccountUI() {
    const u = currentUser();
    const label = u ? u.name.trim().split(' ')[0] : 'Login';
    document.querySelectorAll('#accountLabel').forEach(el => el.textContent = label);
    document.querySelectorAll('#accountLink').forEach(a => a.href = u ? 'account.html' : 'login.html');
}

/* ---------- order timeline ---------- */
const ORDER_STEPS = ['Placed', 'Confirmed', 'Shipped', 'Out for delivery', 'Delivered'];
const STEP_NOTE = { Placed: 'We received your order', Confirmed: 'Being prepared with care', Shipped: 'On its way to you', 'Out for delivery': 'Arriving today', Delivered: 'Delivered — enjoy' };
function timelineHTML(o) {
    if (o.status === 'Cancelled' || o.status === 'Returned')
        return `<p style="color:var(--muted);font-weight:300;margin-top:18px">This order was <b style="color:#ff8f8f">${o.status.toLowerCase()}</b>. Our concierge can help — <a href="contact.html" style="color:var(--gold-soft);text-decoration:underline">contact us</a>.</p>`;
    const map = { Pending: 0, Confirmed: 1, Shipped: 2, Delivered: 4 };
    const idx = (map[o.status] !== undefined) ? map[o.status] : 1;
    const pct = (idx / (ORDER_STEPS.length - 1)) * 100;
    return `<div class="timeline"><div class="tl-progress" style="height:${pct}%"></div>` +
        ORDER_STEPS.map((s, i) => {
            const cls = i < idx ? 'done' : (i === idx ? 'done now' : '');
            const sub = i < idx ? 'Completed' : (i === idx ? (STEP_NOTE[s] || o.status) : 'Pending');
            return `<div class="tl-step ${cls}"><span class="tl-dot"></span><b>${s}</b><small>${sub}</small></div>`;
        }).join('') + `</div>`;
}
function orderItemsHTML(o) {
    return o.items.map(it => {
        const p = byId(it.pid);
        return `<div class="od-line" style="display:flex;gap:14px;align-items:center;padding:10px 0;border-bottom:1px solid var(--border-soft)">
            ${p ? `<img src="${p.img}" alt="" style="width:48px;height:60px;object-fit:cover;border-radius:3px;background:#1a1a1a">` : ''}
            <div class="t" style="flex:1"><b style="font-size:13.5px;font-weight:500;display:block">${escHtml(p ? p.name : 'Item')}</b><small style="color:var(--muted);font-size:12px">Size ${escHtml(it.size)} · Qty ${it.qty}</small></div>
            <div class="num" style="font-size:14px;color:var(--gold-soft)">${fmt(it.price * it.qty)}</div></div>`;
    }).join('');
}
const orderPill = s => {
    const cls = { Pending: 'p-pending', Confirmed: 'p-confirmed', Shipped: 'p-shipped', 'Out for delivery': 'p-transit', Delivered: 'p-delivered', Cancelled: 'p-cancelled', Returned: 'p-returned' }[s] || 'p-pending';
    return `<span class="pill ${cls}">${escHtml(s)}</span>`;
};

/* ---------- login / register page ---------- */
function initLoginPage() {
    if (currentUser()) { location.href = new URLSearchParams(location.search).get('next') || 'account.html'; return; }
    $$('.auth-tab').forEach(t => t.addEventListener('click', () => {
        $$('.auth-tab').forEach(x => x.classList.remove('active'));
        $$('.auth-form').forEach(x => x.classList.remove('on'));
        t.classList.add('active');
        document.getElementById(t.dataset.tab).classList.add('on');
    }));
    if (new URLSearchParams(location.search).get('mode') === 'register') $$('.auth-tab')[1].click();
    const err = (id, msg) => { const el = document.getElementById(id); el.textContent = msg; el.style.display = 'block'; };
    $('#tabLogin').addEventListener('submit', e => {
        e.preventDefault();
        if (!e.target.checkValidity()) { e.target.reportValidity(); return; }
        const email = $('#liEmail').value.trim().toLowerCase(), pw = $('#liPass').value;
        const u = getUsers().find(x => x.email === email);
        if (!u || u.pass !== hashPw(pw)) { err('liErr', 'Invalid email or password.'); return; }
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ email }));
        updateAccountUI();
        toast('Welcome back, ' + u.name.split(' ')[0]);
        setTimeout(() => location.href = new URLSearchParams(location.search).get('next') || 'account.html', 500);
    });
    $('#tabRegister').addEventListener('submit', e => {
        e.preventDefault();
        if (!e.target.checkValidity()) { e.target.reportValidity(); return; }
        const name = $('#rgName').value.trim(), email = $('#rgEmail').value.trim().toLowerCase(),
            phone = $('#rgPhone').value.trim(), pw = $('#rgPass').value, pw2 = $('#rgPass2').value;
        if (pw.length < 6) { err('regErr', 'Password must be at least 6 characters.'); return; }
        if (pw !== pw2) { err('regErr', 'Passwords do not match.'); return; }
        if (getUsers().some(x => x.email === email)) { err('regErr', 'An account with this email already exists — please log in.'); return; }
        const users = getUsers();
        users.push({ name, email, phone, pass: hashPw(pw), joined: new Date().toISOString().slice(0, 10), addresses: [] });
        saveUsers(users);
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ email }));
        updateAccountUI();
        toast('Account created — welcome, ' + name.split(' ')[0]);
        setTimeout(() => location.href = 'account.html', 500);
    });
}

/* ---------- account dashboard ---------- */
function initAccountPage() {
    let u = currentUser();
    if (!u) { location.href = 'login.html?next=' + encodeURIComponent('account.html' + location.search); return; }
    const paint = () => {
        $('#accName').textContent = u.name;
        $('#accEmail').textContent = u.email;
        $('#accAvatar').textContent = u.name.trim().charAt(0).toUpperCase();
    };
    paint();
    $$('.acc-link[data-acc]').forEach(b => b.addEventListener('click', () => {
        $$('.acc-link[data-acc]').forEach(x => x.classList.remove('active'));
        $$('.acc-panel').forEach(x => x.classList.remove('on'));
        b.classList.add('active');
        document.getElementById('panel-' + b.dataset.acc).classList.add('on');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }));
    $('#accLogout').addEventListener('click', () => {
        sessionStorage.removeItem(SESSION_KEY); updateAccountUI(); toast('Signed out');
        setTimeout(() => location.href = 'index.html', 400);
    });

    /* overview */
    const orders = myOrders();
    const spent = orders.filter(o => o.status !== 'Cancelled').reduce((s, o) => s + (+o.total || 0), 0);
    const paintOvStats = () => { $('#ovStats').innerHTML = `
        <div class="mini-stat"><b>${orders.length}</b><span>Total orders</span></div>
        <div class="mini-stat"><b>${fmt(spent)}</b><span>Total spent</span></div>
        <div class="mini-stat"><b>${(u.addresses || []).length}</b><span>Saved addresses</span></div>`; };
    paintOvStats();
    $('#ovRecent').innerHTML = orders.length
        ? `<div class="order-card"><div class="order-head" style="cursor:default"><div class="oid">${escHtml(orders[0].code)}<small>${escHtml(orders[0].date || '')} · ${orders[0].items.reduce((s, i) => s + i.qty, 0)} items</small></div>${orderPill(orders[0].status)}<div class="ototal">${fmt(orders[0].total)}</div></div></div>
           <a href="#" class="btn btn-ghost" id="ovAllOrders" style="margin-top:6px">View all orders</a>`
        : `<div class="empty-state" style="padding:40px 20px"><h3>No orders yet</h3><p>Your orders will appear here once you shop.</p><br><a class="btn btn-gold" href="collection.html">Start Shopping</a></div>`;
    const ovAll = $('#ovAllOrders');
    if (ovAll) ovAll.addEventListener('click', e => { e.preventDefault(); $$('.acc-link[data-acc]')[1].click(); });

    /* orders */
    const box = $('#ordersList');
    const paintOrders = () => {
        const list = myOrders();
        $('#accOrderCount').textContent = list.length ? ` (${list.length})` : '';
        box.innerHTML = list.length ? list.map((o, i) => `
            <div class="order-card" data-ocard="${i}">
                <div class="order-head">
                    <div class="oid">${escHtml(o.code)}<small>${escHtml(o.date || '')} · ${o.items.reduce((s, it) => s + it.qty, 0)} items · ${escHtml(o.pay || 'COD')}</small></div>
                    ${orderPill(o.status)}
                    <div class="ototal">${fmt(o.total)}</div>
                    <span class="chev">▾</span>
                </div>
                <div class="order-body"><div class="order-body-in">
                    ${orderItemsHTML(o)}
                    <div style="display:flex;justify-content:space-between;padding:10px 0 0;font-size:14px;color:var(--muted)"><span>Delivery</span><span>${+o.shipping === 0 ? 'Free' : fmt(o.shipping)}</span></div>
                    <div style="display:flex;justify-content:space-between;padding:6px 0 0;font-size:16px;font-weight:600"><span>Total</span><span style="color:var(--gold-soft)">${fmt(o.total)}</span></div>
                    ${timelineHTML(o)}
                    ${courierCardHTML(o)}
                    <p style="color:var(--muted);font-size:13px;font-weight:300;margin-top:14px">Deliver to: ${escHtml(o.address || '')}, ${escHtml(o.city || '')} · ${escHtml(o.phone || '')}</p>
                    <div class="acc-order-actions">
                        ${o.status === 'Pending' ? `<button class="link-btn danger" data-cancel="${escHtml(o.code)}">Cancel Order</button>` : ''}
                        ${o.status === 'Pending' ? `<button class="link-btn" data-payedit="${escHtml(o.code)}">Change Payment</button>` : ''}
                        <button class="link-btn" data-reorder="${escHtml(o.code)}">Buy Again</button>
                        <a class="link-btn" href="track-order.html" style="display:inline-flex;align-items:center">Track</a>
                    </div>
                </div></div>
            </div>`).join('')
            : `<div class="empty-state" style="padding:40px 20px"><h3>No orders yet</h3><p>Track them here the moment you check out.</p><br><a class="btn btn-gold" href="collection.html">Start Shopping</a></div>`;
        $$('#ordersList [data-ocard] .order-head').forEach(h => h.addEventListener('click', () => {
            const card = h.closest('.order-card'), body = card.querySelector('.order-body'), open = card.classList.toggle('open');
            body.style.maxHeight = open ? body.scrollHeight + 'px' : '0';
        }));
        bindOrderActions(box, () => { paintOrders(); });
        bindCopyTrack(box);
    };
    paintOrders();
    paintWishlist();
    if (isPhoneFlagged(u.phone)) {
        const ov = document.getElementById('panel-overview');
        if (ov && !document.getElementById('fraudBanner')) {
            ov.insertAdjacentHTML('afterbegin', `<div class="fraud-banner" id="fraudBanner"><b>⚠ Advance payment required</b><p>Cash on Delivery is unavailable on your number (${escHtml(u.phone)}) after a previous refused delivery. Please pay with bKash or card — or contact our concierge to appeal.</p></div>`);
        }
    }
    const deepTab = new URLSearchParams(location.search).get('tab');
    if (deepTab) { const btn = document.querySelector(`.acc-link[data-acc="${deepTab}"]`); if (btn) btn.click(); }

    /* addresses */
    const paintAddrs = () => {
        const addrs = u.addresses || [];
        $('#addrGrid').innerHTML = addrs.length ? addrs.map((a, i) => `
            <div class="addr-card">
                <span class="tag">${escHtml(a.label || 'Address')}</span>
                <p><b style="color:var(--white)">${escHtml(u.name)}</b><br>${escHtml(a.address)}<br>${escHtml(a.city)} · ${escHtml(a.phone || u.phone)}</p>
                <div class="a-actions"><button data-adel="${i}" class="del">Remove</button></div>
            </div>`).join('')
            : `<p style="color:var(--muted);font-weight:300">No saved addresses yet — add one for faster checkout.</p>`;
        $$('#addrGrid [data-adel]').forEach(b => b.addEventListener('click', () => {
            u = persistUser({ addresses: (u.addresses || []).filter((_, x) => x !== +b.dataset.adel) });
            paintAddrs(); paintOvStats(); toast('Address removed');
        }));
    };
    paintAddrs();
    $('#addrToggle').addEventListener('click', () => {
        const f = $('#addrForm'); const show = f.style.display !== 'block';
        f.style.display = show ? 'block' : 'none';
        $('#addrToggle').textContent = show ? '− Cancel' : '+ Add New Address';
    });
    $('#addrFormEl').addEventListener('submit', e => {
        e.preventDefault();
        const a = { label: $('#adLabel').value.trim() || 'Home', address: $('#adAddr').value.trim(), city: $('#adCity').value.trim(), phone: $('#adPhone').value.trim() || u.phone };
        if (!a.address || !a.city) { toast('Address and city are required'); return; }
        u = persistUser({ addresses: (u.addresses || []).concat([a]) });
        $('#addrFormEl').reset(); $('#addrForm').style.display = 'none'; $('#addrToggle').textContent = '+ Add New Address';
        paintAddrs(); paintOvStats(); toast('Address saved');
    });

    /* settings */
    $('#pfName').value = u.name; $('#pfPhone').value = u.phone || ''; $('#pfEmail').value = u.email;
    $('#profileForm').addEventListener('submit', e => {
        e.preventDefault();
        const name = $('#pfName').value.trim(), phone = $('#pfPhone').value.trim();
        if (!name) { toast('Name is required'); return; }
        u = persistUser({ name, phone }); paint(); toast('Profile updated');
    });
    $('#passForm').addEventListener('submit', e => {
        e.preventDefault();
        if (u.pass !== hashPw($('#pwCur').value)) { toast('Current password is incorrect'); return; }
        if ($('#pwNew').value.length < 6) { toast('New password must be at least 6 characters'); return; }
        if ($('#pwNew').value !== $('#pwNew2').value) { toast('New passwords do not match'); return; }
        u = persistUser({ pass: hashPw($('#pwNew').value) });
        $('#passForm').reset(); toast('Password changed');
    });
}

/* ---------- public order tracking ---------- */
function initTrackPage() {
    $('#trackForm').addEventListener('submit', e => {
        e.preventDefault();
        const o = findOrder($('#tCode').value, $('#tPhone').value);
        const box = $('#trackResult');
        if (!o) { box.classList.remove('on'); toast('No order found — check the ID and phone number.'); return; }
        box.innerHTML = `
            <div class="track-meta">
                <div><small>Order ID</small><b>${escHtml(o.code)}</b></div>
                <div><small>Status</small><b>${orderPill(o.status)}</b></div>
                <div><small>Placed on</small><b>${escHtml(o.date || '—')}</b></div>
                <div><small>Total (${escHtml(o.pay || 'COD')})</small><b style="color:var(--gold-soft)">${fmt(o.total)}</b></div>
            </div>
            ${timelineHTML(o)}
            ${courierCardHTML(o)}
            <h4 style="font-family:var(--font-display);font-size:18px;margin:22px 0 6px">Items</h4>
            ${orderItemsHTML(o)}
            <p style="color:var(--muted);font-size:13px;font-weight:300;margin-top:14px">Deliver to: ${escHtml(o.address || '')}, ${escHtml(o.city || '')}</p>`;
        box.classList.add('on');
        bindCopyTrack(box);
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

/* ---------- checkout: link orders to accounts ---------- */
function prefillCheckout() {
    const u = currentUser(); if (!u) return;
    const set = (id, v) => { const el = document.getElementById(id); if (el && v) el.value = v; };
    set('coName', u.name); set('coPhone', u.phone); set('coEmail', u.email);
    const a = (u.addresses || [])[0];
    if (a) { set('coAddr', a.address); set('coCity', a.city); }
}

/* ============================================================
   WORLD-CLASS FEATURES — search, wishlist, mini-cart, coupons,
   quick view, reviews, journal, concierge chat, cookies
   ============================================================ */

/* ---------- injected global UI ---------- */
function injectGlobalUI() {
    const b = document.body;
    if (!document.getElementById('searchOverlay')) {
        b.insertAdjacentHTML('beforeend', `
        <div class="search-overlay" id="searchOverlay"><div class="search-inner">
            <div class="search-top">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                <input id="globalSearch" placeholder="Search the collection..." autocomplete="off" aria-label="Search products">
                <button class="search-x" id="searchClose" aria-label="Close search">×</button>
            </div>
            <div class="search-suggest" id="searchSuggest"></div>
            <div class="search-results" id="searchResults"></div>
        </div></div>`);
    }
    if (!document.getElementById('miniCart')) {
        b.insertAdjacentHTML('beforeend', `
        <div id="cartOverlay"></div>
        <aside class="mini-cart" id="miniCart" aria-label="Shopping bag">
            <div class="mc-head"><h3>Your Bag <small id="mcCount"></small></h3><button class="search-x" id="mcClose" aria-label="Close bag">×</button></div>
            <div class="mc-items" id="mcItems"></div>
            <div class="mc-foot">
                <div class="mc-ship-bar"><i id="mcBar" style="width:0%"></i></div>
                <p class="mc-ship-note" id="mcShipNote"></p>
                <div class="sum-row" style="margin-top:12px"><span>Subtotal</span><span id="mcSub">৳0</span></div>
                <a class="btn btn-gold btn-block" href="cart.html" style="justify-content:center">View Bag &amp; Checkout</a>
                <button class="link-btn" id="mcContinue" style="width:100%;margin-top:10px">Continue Shopping</button>
            </div>
        </aside>`);
        $('#mcClose').addEventListener('click', closeMiniCart);
        document.getElementById('cartOverlay').addEventListener('click', closeMiniCart);
        $('#mcContinue').addEventListener('click', closeMiniCart);
    }
    if (!document.getElementById('qvModal')) {
        b.insertAdjacentHTML('beforeend', `
        <div class="qv-modal" id="qvModal"><div class="qv-box">
            <button class="search-x qv-x" id="qvClose" aria-label="Close quick view">×</button>
            <div class="qv-img"><img id="qvImg" src="" alt=""></div>
            <div class="qv-info">
                <div class="p-cat" id="qvCat"></div>
                <h3 id="qvName"></h3>
                <div class="p-stars" id="qvRating"></div>
                <div class="p-price" id="qvPrice" style="font-size:24px;margin:14px 0 20px"></div>
                <div class="field"><label>Size</label><div class="size-row" id="qvSizes"></div></div>
                <div class="field"><label>Quantity</label><div class="qty"><button id="qvMinus" type="button">−</button><span id="qvQty" style="width:44px;text-align:center;font-size:15px">1</span><button id="qvPlus" type="button">+</button></div></div>
                <button class="btn btn-gold btn-block" id="qvAdd" style="justify-content:center;margin-top:26px">Add to Bag</button>
                <a class="link-btn" id="qvFull" href="#" style="width:100%;margin-top:12px;text-align:center;display:block">Full Details</a>
            </div>
        </div></div>`);
        $('#qvClose').addEventListener('click', closeQuickView);
        document.getElementById('qvModal').addEventListener('click', e => { if (e.target.id === 'qvModal') closeQuickView(); });
        $('#qvMinus').addEventListener('click', () => { qvQty = Math.max(1, qvQty - 1); $('#qvQty').textContent = qvQty; });
        $('#qvPlus').addEventListener('click', () => { qvQty = Math.min(9, qvQty + 1); $('#qvQty').textContent = qvQty; });
        $('#qvAdd').addEventListener('click', () => { const id = qvId; closeQuickView(); addToCart(id, qvSize, qvQty); });
    }
    if (!document.getElementById('chatFab')) {
        b.insertAdjacentHTML('beforeend', `
        <button class="chat-fab" id="chatFab" aria-label="Chat with concierge">
            <svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-8 8H4l2.5-3.2A8 8 0 1 1 21 12z"/></svg>
            <span class="ping"></span>
        </button>
        <div class="chat-panel" id="chatPanel" aria-label="Concierge chat">
            <div class="chat-head"><div class="av">J</div><div><b>Jovent Concierge</b><small>Online — replies instantly</small></div><button id="chatClose" aria-label="Close chat">×</button></div>
            <div class="chat-msgs" id="chatMsgs"></div>
            <div class="chat-chips" id="chatChips">
                <button data-q="Where is my order?">Track my order</button>
                <button data-q="Delivery info">Delivery info</button>
                <button data-q="How do exchanges work?">Exchanges</button>
                <button data-q="Any coupons?">Coupons</button>
            </div>
            <div class="chat-input"><input id="chatText" placeholder="Ask the concierge..." autocomplete="off"><button id="chatSend">Send</button></div>
        </div>`);
    }
    if (!document.getElementById('cookieBar')) {
        b.insertAdjacentHTML('beforeend', `
        <div class="cookie-bar" id="cookieBar">
            <p>We use cookies to tailor your Jovent experience and remember your bag &amp; wishlist. Read our <a href="privacy.html">Privacy Policy</a>.</p>
            <button class="btn btn-gold" id="cookieOk">Accept</button>
        </div>`);
    }
}

/* ---------- wishlist ---------- */
const WISH_KEY = 'jovent_wishlist_v1';
const getWish = () => { try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; } catch { return []; } };
const saveWish = w => localStorage.setItem(WISH_KEY, JSON.stringify(w));
const isWished = id => getWish().includes(id);
function toggleWish(id) {
    let w = getWish();
    const on = !w.includes(id);
    w = on ? [...w, id] : w.filter(x => x !== id);
    saveWish(w); updateWishUI(); paintHearts();
    return on;
}
function updateWishUI() {
    const n = getWish().length;
    document.querySelectorAll('#wishCount').forEach(el => { el.textContent = n; el.style.display = n ? '' : 'none'; });
    const aw = document.getElementById('accWishCount');
    if (aw) aw.textContent = n ? ` (${n})` : '';
}
function paintHearts() {
    document.querySelectorAll('[data-wish]').forEach(b => b.classList.toggle('on', isWished(b.dataset.wish)));
}
function bindWishButtons(root) {
    (root || document).querySelectorAll('[data-wish]:not([data-wbound])').forEach(b => {
        b.dataset.wbound = '1';
        b.addEventListener('click', e => {
            e.preventDefault(); e.stopPropagation();
            const on = toggleWish(b.dataset.wish);
            toast(on ? 'Saved to your wishlist' : 'Removed from wishlist');
            if (typeof paintWishlist === 'function' && document.getElementById('panel-wishlist') && document.getElementById('panel-wishlist').classList.contains('on')) paintWishlist();
        });
    });
    paintHearts();
}
function paintWishlist() {
    const g = document.getElementById('wishGrid'); if (!g) return;
    const w = getWish().map(byId).filter(Boolean);
    g.innerHTML = w.length ? w.map(p => cardHTML(p)).join('')
        : `<div class="empty-state" style="grid-column:1/-1;padding:40px 20px"><h3>Your wishlist is empty</h3><p>Tap the heart on any product to save it here.</p><br><a class="btn btn-gold" href="collection.html">Discover the Collection</a></div>`;
    bindReveals(g); bindQuickAdds(g); bindWishButtons(g); bindQuickViews(g);
}

/* ---------- live search ---------- */
function initSearch() {
    const ov = document.getElementById('searchOverlay'); if (!ov || ov._b) return; ov._b = true;
    const inp = document.getElementById('globalSearch'), res = document.getElementById('searchResults'), sug = document.getElementById('searchSuggest');
    const open = () => { ov.classList.add('show'); document.body.style.overflow = 'hidden'; renderPop(); setTimeout(() => inp.focus(), 80); };
    const close = () => { ov.classList.remove('show'); document.body.style.overflow = ''; };
    document.querySelectorAll('#searchBtn').forEach(b => b.addEventListener('click', open));
    document.getElementById('searchClose').addEventListener('click', close);
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('show')) close(); });
    const popular = ['Suit', 'Tee', 'Watch', 'Jacket', 'Shirt', 'Sneakers'];
    function renderPop() {
        sug.innerHTML = '<span>Popular:</span>' + popular.map(p => `<button data-q="${p}">${p}</button>`).join('');
        sug.querySelectorAll('[data-q]').forEach(b => b.addEventListener('click', () => { inp.value = b.dataset.q; doSearch(); }));
    }
    function doSearch() {
        const raw = inp.value.trim(), q = raw.toLowerCase();
        if (q.length < 2) { res.innerHTML = ''; return; }
        const hits = PRODUCTS.filter(p => (p.name + ' ' + (CATS[p.cat] || '') + ' ' + (p.desc || '')).toLowerCase().includes(q)).slice(0, 6);
        res.innerHTML = hits.length
            ? hits.map(p => `<a class="sr-item" href="product.html?id=${p.id}"><img src="${p.img}" alt=""><div><b>${p.name}</b><small>${CATS[p.cat]} · ${fmt(p.price)}</small></div></a>`).join('')
              + `<a class="sr-all" href="collection.html?q=${encodeURIComponent(raw)}">See all results for “${escHtml(raw)}” →</a>`
            : `<p class="sr-none">No matches for “${escHtml(raw)}”. Try “suit” or “watch”.</p>`;
    }
    inp.addEventListener('input', doSearch);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && inp.value.trim()) location.href = 'collection.html?q=' + encodeURIComponent(inp.value.trim()); });
}

/* ---------- mini cart ---------- */
function openMiniCart() {
    renderMiniCart();
    document.getElementById('miniCart').classList.add('show');
    document.getElementById('cartOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeMiniCart() {
    const m = document.getElementById('miniCart'); if (!m) return;
    m.classList.remove('show');
    document.getElementById('cartOverlay').classList.remove('show');
    document.body.style.overflow = '';
}
function renderMiniCart() {
    const box = document.getElementById('mcItems'); if (!box) return;
    const cart = getCart();
    box.innerHTML = cart.length ? cart.map((i, idx) => {
        const p = byId(i.id); if (!p) return '';
        return `<div class="mc-item"><img src="${p.img}" alt="">
            <div class="t"><b>${p.name}</b><small>Size ${escHtml(i.size)} · Qty ${i.qty}</small>
            <div class="r"><span>${fmt(p.price * i.qty)}</span><button class="mc-rm" data-mcrm="${idx}">Remove</button></div></div></div>`;
    }).join('') : `<div class="mc-empty"><h3 style="font-family:var(--font-display);font-size:22px;margin-bottom:10px">Your bag is empty</h3><p style="font-weight:300">Fill it with something sharp.</p><br><a class="btn btn-gold" href="collection.html">Shop Now</a></div>`;
    const sub = cartSubtotal(), n = cartCount();
    document.getElementById('mcSub').textContent = fmt(sub);
    document.getElementById('mcCount').textContent = n ? `(${n} item${n === 1 ? '' : 's'})` : '';
    document.getElementById('mcBar').style.width = Math.min(100, Math.round(sub / 5000 * 100)) + '%';
    document.getElementById('mcShipNote').innerHTML = sub >= 5000
        ? 'You unlocked <b style="color:var(--gold-soft)">complimentary delivery</b>.'
        : `Add <b style="color:var(--gold-soft)">${fmt(5000 - sub)}</b> more for free delivery.`;
    box.querySelectorAll('[data-mcrm]').forEach(b => b.addEventListener('click', () => {
        const c = getCart(); c.splice(+b.dataset.mcrm, 1); saveCart(c); updateBadge(false); renderMiniCart();
    }));
}

/* ---------- quick view ---------- */
let qvId = null, qvSize = 'M', qvQty = 1;
function openQuickView(id) {
    const p = byId(id); if (!p) return;
    qvId = id; qvQty = 1;
    document.getElementById('qvImg').src = p.img;
    document.getElementById('qvImg').alt = p.name;
    document.getElementById('qvCat').textContent = CATS[p.cat];
    document.getElementById('qvName').textContent = p.name;
    document.getElementById('qvRating').innerHTML = stars(p.rating) + ` <small style="color:var(--muted)">${p.rating}</small>`;
    document.getElementById('qvPrice').innerHTML = (p.old ? `<s>${fmt(p.old)}</s>` : '') + fmt(p.price);
    document.getElementById('qvFull').href = 'product.html?id=' + p.id;
    const sizes = p.cat === 'accessories' ? ['One Size'] : ['S', 'M', 'L', 'XL', 'XXL'];
    qvSize = sizes.includes('M') ? 'M' : sizes[0];
    const sz = document.getElementById('qvSizes');
    sz.innerHTML = sizes.map(s => `<button type="button" class="size-btn ${s === qvSize ? 'active' : ''}" data-qvs="${s}">${s}</button>`).join('');
    sz.querySelectorAll('[data-qvs]').forEach(x => x.addEventListener('click', () => {
        qvSize = x.dataset.qvs;
        sz.querySelectorAll('button').forEach(y => y.classList.remove('active')); x.classList.add('active');
    }));
    document.getElementById('qvQty').textContent = '1';
    document.getElementById('qvModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeQuickView() {
    document.getElementById('qvModal').classList.remove('show');
    document.body.style.overflow = '';
}
function bindQuickViews(root) {
    (root || document).querySelectorAll('[data-view]:not([data-vbound])').forEach(b => {
        b.dataset.vbound = '1';
        b.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); openQuickView(b.dataset.view); });
    });
}

/* ---------- coupons & gift wrap ---------- */
const COUPON_SESS = 'jovent_coupon_v1';
const BUILTIN_COUPONS = [
    { code: 'WELCOME15', type: '%', value: 15, min: 2000, status: 'active', expiry: '2027-12-31' },
    { code: 'EID10', type: '%', value: 10, min: 3000, status: 'active', expiry: '2027-12-31' },
    { code: 'FLAT500', type: 'flat', value: 500, min: 8000, status: 'active', expiry: '2027-12-31' }
];
function getCoupon(code) {
    code = String(code || '').trim().toUpperCase(); if (!code) return null;
    let list = [];
    try {
        const db = JSON.parse(localStorage.getItem(ADMIN_DB_KEY));
        list = (db && Array.isArray(db.coupons)) ? db.coupons : [];
    } catch { /* ignore */ }
    const today = new Date().toISOString().slice(0, 10);
    const all = list.concat(BUILTIN_COUPONS.filter(b => !list.some(x => String(x.code).toUpperCase() === b.code)));
    const c = all.find(x => String(x.code).toUpperCase() === code && x.status === 'active');
    if (!c) return null;
    if (c.expiry && c.expiry < today) return null;
    return c;
}
const couponDiscount = (c, sub) => {
    if (!c) return 0;
    if (sub < (+c.min || 0)) return 0;
    return c.type === '%' ? Math.round(sub * (+c.value) / 100) : Math.min(+c.value, sub);
};
function appliedCoupon() { try { return JSON.parse(sessionStorage.getItem(COUPON_SESS)); } catch { return null; } }
function checkoutTotals() {
    const sub = cartSubtotal(), ship = sub >= 5000 ? 0 : 120;
    const c = appliedCoupon();
    let disc = 0, couponCode = '';
    if (c) { disc = couponDiscount(c, sub); if (disc > 0) couponCode = c.code; }
    const gw = document.getElementById('giftWrap');
    const gift = gw && gw.checked ? 150 : 0;
    return { sub, ship, disc, gift, total: sub - disc + ship + gift, couponCode };
}
function renderCheckoutSummary() {
    if (!document.getElementById('coSub')) return;
    const t = checkoutTotals();
    document.getElementById('coSub').textContent = fmt(t.sub);
    document.getElementById('coShip').textContent = t.ship === 0 ? 'Free' : fmt(t.ship);
    const dr = document.getElementById('discRow');
    if (dr) { dr.style.display = t.disc > 0 ? 'flex' : 'none'; document.getElementById('coDisc').textContent = '−' + fmt(t.disc); }
    document.getElementById('coTotal').textContent = fmt(t.total);
}
function initCouponGiftwrap() {
    const inp = document.getElementById('couponInput'); if (!inp || inp._b) return; inp._b = true;
    const paint = () => {
        const c = appliedCoupon();
        document.getElementById('couponForm').style.display = c ? 'none' : 'flex';
        document.getElementById('couponApplied').style.display = c ? 'flex' : 'none';
        if (c) {
            document.getElementById('couponCode').textContent = c.code;
            document.getElementById('couponDesc').textContent = c.type === '%' ? `${c.value}% off` : `${fmt(c.value)} off`;
        }
        renderCheckoutSummary();
    };
    document.getElementById('couponApply').addEventListener('click', () => {
        const c = getCoupon(inp.value);
        if (!c) { toast('This coupon is not valid.'); return; }
        const sub = cartSubtotal();
        if (sub < (+c.min || 0)) { toast(`This coupon needs a minimum order of ${fmt(c.min)}.`); return; }
        sessionStorage.setItem(COUPON_SESS, JSON.stringify({ code: String(c.code).toUpperCase(), type: c.type, value: +c.value, min: +c.min || 0 }));
        toast(`Coupon ${String(c.code).toUpperCase()} applied`);
        paint();
    });
    document.getElementById('couponRemove').addEventListener('click', () => { sessionStorage.removeItem(COUPON_SESS); inp.value = ''; paint(); });
    document.getElementById('giftWrap').addEventListener('change', renderCheckoutSummary);
    paint();
}

/* ---------- product reviews ---------- */
const REV_KEY = 'jovent_reviews_v1';
const getRevStore = () => { try { return JSON.parse(localStorage.getItem(REV_KEY)) || {}; } catch { return {}; } };
function renderProductReviews(pid) {
    const box = document.getElementById('pdReviews'); if (!box) return;
    const revs = getRevStore()[pid] || [];
    const avg = revs.length ? revs.reduce((s, r) => s + r.rating, 0) / revs.length : 0;
    const dist = [5, 4, 3, 2, 1].map(s => ({ s, n: revs.filter(r => r.rating === s).length }));
    box.innerHTML = `
        <div class="rev-summary">
            <div class="rev-big"><b>${avg ? avg.toFixed(1) : '—'}</b><div class="stars">${stars(avg || 0)}</div><small>${revs.length} verified review${revs.length === 1 ? '' : 's'}</small></div>
            <div>${dist.map(d => `<div class="rev-bar-row"><span style="width:36px">${d.s} ★</span><div class="rev-bar"><i style="width:${revs.length ? Math.round(d.n / revs.length * 100) : 0}%"></i></div><span style="width:26px;text-align:right">${d.n}</span></div>`).join('')}</div>
        </div>
        <div>${revs.length ? revs.map(r => `
            <div class="rev-item"><div class="rh"><b>${escHtml(r.name)}</b><span class="stars" style="font-size:13px">${stars(r.rating)}</span></div>
            ${r.title ? `<b style="font-size:14.5px;display:block;margin-bottom:6px">${escHtml(r.title)}</b>` : ''}
            <p>${escHtml(r.text)}</p><small style="color:var(--muted);font-size:12px">${escHtml(r.date)}${r.pending ? ' · awaiting moderation' : ''}</small></div>`).join('')
            : `<p style="color:var(--muted);font-weight:300">No reviews yet — be the first to share your fit.</p>`}</div>
        <div class="rev-form-card">
            <h3 class="h-display" style="font-size:22px;margin-bottom:6px">Write a review</h3>
            <p style="color:var(--muted);font-size:13.5px;font-weight:300;margin-bottom:20px">Tell fellow gentlemen how it fits, feels and wears.</p>
            <form id="revForm" novalidate>
                <div class="field"><label>Your rating</label><div class="star-input" id="starInput">${[1, 2, 3, 4, 5].map(i => `<button type="button" data-star="${i}" aria-label="${i} stars">★</button>`).join('')}</div></div>
                <div class="field-grid">
                    <div class="field"><label for="rvName">Name</label><input id="rvName" required placeholder="Your name"></div>
                    <div class="field"><label for="rvTitle">Headline</label><input id="rvTitle" placeholder="e.g. Perfect fit"></div>
                </div>
                <div class="field"><label for="rvText">Review</label><textarea id="rvText" rows="4" required placeholder="Fabric, fit, quality..."></textarea></div>
                <button class="btn btn-gold" type="submit">Submit Review</button>
            </form>
        </div>`;
    let rating = 5;
    const paintStars = () => box.querySelectorAll('#starInput button').forEach(x => x.classList.toggle('lit', +x.dataset.star <= rating));
    paintStars();
    box.querySelectorAll('#starInput button').forEach(x => x.addEventListener('click', () => { rating = +x.dataset.star; paintStars(); }));
    box.querySelector('#revForm').addEventListener('submit', e => {
        e.preventDefault();
        const f = e.target; if (!f.checkValidity()) { f.reportValidity(); return; }
        const r = { name: box.querySelector('#rvName').value.trim(), rating, title: box.querySelector('#rvTitle').value.trim(), text: box.querySelector('#rvText').value.trim(), date: new Date().toISOString().slice(0, 10), pending: true };
        const store = getRevStore(); (store[pid] = store[pid] || []).unshift(r);
        try { localStorage.setItem(REV_KEY, JSON.stringify(store)); } catch { /* ignore */ }
        try {
            const db = JSON.parse(localStorage.getItem(ADMIN_DB_KEY));
            if (db && Array.isArray(db.reviews)) {
                const p = byId(pid);
                db.reviews.unshift({ id: 'r' + Date.now().toString(36), product: p ? p.name : pid, customer: r.name, rating, text: (r.title ? r.title + ' — ' : '') + r.text, date: r.date, status: 'pending' });
                localStorage.setItem(ADMIN_DB_KEY, JSON.stringify(db));
            }
        } catch { /* ignore */ }
        toast('Review submitted — thank you!');
        renderProductReviews(pid);
    });
}

/* ---------- recently viewed ---------- */
function trackRecent(id) {
    try {
        let r = JSON.parse(localStorage.getItem('jovent_recent_v1')) || [];
        r = [id, ...r.filter(x => x !== id)].slice(0, 8);
        localStorage.setItem('jovent_recent_v1', JSON.stringify(r));
    } catch { /* ignore */ }
}
function renderRecent(id) {
    const box = document.getElementById('recentGrid'); if (!box) return;
    let r = []; try { r = JSON.parse(localStorage.getItem('jovent_recent_v1')) || []; } catch { /* ignore */ }
    r = r.filter(x => x !== id).map(byId).filter(Boolean).slice(0, 4);
    const sec = document.getElementById('recentSec');
    if (!r.length) { if (sec) sec.style.display = 'none'; return; }
    box.innerHTML = r.map(p => cardHTML(p)).join('');
    bindReveals(box); bindQuickAdds(box); bindWishButtons(box); bindQuickViews(box);
}

/* ---------- announcement rotation ---------- */
const ANN_MSGS = [
    'Complimentary delivery on orders over ৳5,000',
    'New drop — The Obsidian Edit has arrived',
    '7-day easy exchanges · Cash on Delivery'
];
function initAnnounce() {
    const an = document.querySelector('.announce'); if (!an || an._rot) return; an._rot = true;
    an.innerHTML = '<span id="announceMsg">' + an.innerHTML + '</span>';
    const el = document.getElementById('announceMsg');
    let i = 0;
    setInterval(() => {
        el.classList.add('fade');
        setTimeout(() => { i = (i + 1) % ANN_MSGS.length; el.textContent = ANN_MSGS[i]; el.classList.remove('fade'); }, 500);
    }, 6000);
}

/* ---------- concierge chat ---------- */
const CHAT_BRAIN = [
    [/track|where.{0,12}order|order.{0,12}status/i, 'You can track any order live on our <a href="track-order.html" style="color:var(--gold-soft);text-decoration:underline">Track Order</a> page — just enter your order ID and phone number. Signed-in customers see every order under <a href="account.html" style="color:var(--gold-soft);text-decoration:underline">My Account</a>.'],
    [/deliver|shipping|ship |how long|arrive/i, 'We deliver across Bangladesh in 2–4 working days. Delivery is ৳120, and <b>free on orders over ৳5,000</b>. Our concierge calls to confirm before dispatch.'],
    [/return|exchange|refund/i, 'Easy 7-day exchanges — unworn pieces with tags attached. <a href="contact.html" style="color:var(--gold-soft);text-decoration:underline">Contact our concierge</a> and we will arrange a doorstep swap.'],
    [/size|fit|measurement/i, 'Between sizes? Take the larger one — Jovent tailoring runs sharp and true. Full measurements live under <b>Size Guide</b> on every product page.'],
    [/payment|bkash|card|cod|cash/i, 'We accept Cash on Delivery, bKash and debit/credit cards via SSLCommerz — all secure and encrypted.'],
    [/coupon|discount|offer|promo|voucher/i, 'New to Jovent? Use code <b>WELCOME15</b> at checkout for 15% off orders over ৳2,000.'],
    [/human|agent|call|phone|contact|help me/i, 'Our concierge is one tap away — call <b>+880 1700-000000</b> or write to <b>hello@joventmenswear.com</b>. We reply within 24 hours.'],
    [/hour|open|close|when/i, 'Our Gulshan atelier welcomes you Saturday–Thursday, 10am–8pm.'],
    [/hello|hi\b|hey|salam|good/i, 'Hello, gentleman. Ask me about tracking, delivery, exchanges, sizing or coupons.'],
];
const chatReply = text => {
    for (const [re, ans] of CHAT_BRAIN) if (re.test(text)) return ans;
    return 'I want to get that exactly right — our concierge will know. Call <b>+880 1700-000000</b> or <a href="contact.html" style="color:var(--gold-soft);text-decoration:underline">message us</a> and we will sort it in minutes.';
};
function initChat() {
    const fab = document.getElementById('chatFab'); if (!fab || fab._b) return; fab._b = true;
    const panel = document.getElementById('chatPanel'), msgs = document.getElementById('chatMsgs');
    const push = (html, who) => { const d = document.createElement('div'); d.className = 'msg ' + who; d.innerHTML = phoneSwap(html); msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; };
    const botSay = html => {
        const t = document.createElement('div'); t.className = 'msg bot typing'; t.innerHTML = '<i></i><i></i><i></i>';
        msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight;
        setTimeout(() => { t.remove(); push(html, 'bot'); }, 700 + Math.random() * 500);
    };
    fab.addEventListener('click', () => {
        const open = panel.classList.toggle('show');
        const ping = fab.querySelector('.ping'); if (ping) ping.remove();
        if (open && !msgs.children.length) botSay(chatWelcome());
    });
    document.getElementById('chatClose').addEventListener('click', () => panel.classList.remove('show'));
    const send = text => {
        text = String(text || '').trim(); if (!text) return;
        push(escHtml(text), 'user');
        document.getElementById('chatText').value = '';
        botSay(chatReply(text));
    };
    document.getElementById('chatSend').addEventListener('click', () => send(document.getElementById('chatText').value));
    document.getElementById('chatText').addEventListener('keydown', e => { if (e.key === 'Enter') send(e.target.value); });
    document.querySelectorAll('#chatChips button').forEach(x => x.addEventListener('click', () => send(x.dataset.q)));
}

/* ---------- cookies ---------- */
function initCookies() {
    let seen = false;
    try { seen = !!localStorage.getItem('jovent_cookies'); } catch { seen = true; }
    if (seen) return;
    const b = document.getElementById('cookieBar'); if (!b) return;
    setTimeout(() => b.classList.add('show'), 1600);
    document.getElementById('cookieOk').addEventListener('click', () => {
        try { localStorage.setItem('jovent_cookies', '1'); } catch { /* ignore */ }
        b.classList.remove('show');
    });
}

/* ---------- newsletter subscribers (shared with admin) ---------- */
const SUB_KEY = 'jovent_newsletter_v1';
function addSubscriber(email) {
    try {
        const s = JSON.parse(localStorage.getItem(SUB_KEY)) || [];
        if (!s.some(x => x.email === email)) {
            s.unshift({ email, date: new Date().toISOString().slice(0, 10) });
            localStorage.setItem(SUB_KEY, JSON.stringify(s));
        }
    } catch { /* ignore */ }
}

/* ---------- journal ---------- */
const ARTICLES = [
    {
        id: 'a1', cat: 'Style Guide', title: 'The Anatomy of a Perfect Suit',
        img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop',
        date: 'Oct 2026', read: '6 min read',
        ex: 'Half-canvas, horn buttons, hand-set lapels — what separates a good suit from a great one, and how to spot it in seconds.',
        body: [
            { p: 'Every man remembers his first great suit — the way the shoulders sit clean, the trouser breaks exactly once over the shoe, the quiet confidence it lends before you say a word. But what actually makes it great? It comes down to three things most men never check.' },
            { h: '1. The <em>canvas</em>, not the glue' },
            { p: 'A fused suit glues its front together; a half-canvassed suit like ours floats a layer of natural canvas between cloth and lining. It molds to your chest over weeks of wear, breathes in Dhaka heat, and never bubbles at the dry cleaner. Pinch the chest of any jacket — if you feel three distinct layers, you are holding craft.' },
            { h: '2. Shoulders that <em>end</em> where yours do' },
            { p: 'Ninety percent of a suit\'s fit is decided at the shoulder. The seam should sit exactly at your shoulder bone — no divots, no overhang. Everything else can be tailored; shoulders cannot. This is why every Jovent blazer is cut with a natural, unpadded shoulder.' },
            { q: 'Fit is not vanity. It is respect — for yourself, and for the room you walk into.' },
            { h: '3. Details that <em>whisper</em>' },
            { p: 'Horn buttons, hand-finished buttonholes, a ticket pocket you will never use but love having. Luxury is restraint: the man who notices will know, and the man who doesn\'t will simply think you look sharp.' },
            { p: 'Start with navy or charcoal, nail the shoulder, and let the canvas do the rest. The Obsidian Edit is cut exactly this way — explore the <a href="collection.html?cat=formal" style="color:var(--gold-soft)">formal collection</a>.' }
        ]
    },
    {
        id: 'a2', cat: 'Style Guide', title: '5 Ways to Style a Field Jacket',
        img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop',
        date: 'Oct 2026', read: '4 min read',
        ex: 'The hardest-working layer in your wardrobe — from boardroom Fridays to monsoon evenings.',
        body: [
            { p: 'The field jacket began in military surplus and ended up everywhere — because few garments do so much with so little. Here are five ways our stylists wear it.' },
            { h: '1. Over a <em>bandhgala</em> tee' },
            { p: 'Black tee, dark denim, field jacket, clean sneakers. The uniform of a man with somewhere to be.' },
            { h: '2. With <em>tailored trousers</em>' },
            { p: 'Olive over charcoal wool trousers and loafers breaks the formality just enough for creative workplaces.' },
            { h: '3. <em>Monochrome</em> everything' },
            { p: 'All-black beneath lets the jacket\'s texture and hardware do the talking. Add our full-grain belt.' },
            { q: 'One jacket, five lives. That is the arithmetic of a smart wardrobe.' },
            { h: '4. Layered over a <em>hoodie</em>' },
            { p: 'For the coldest Dhaka mornings — the jacket\'s storm flap was literally built for this.' },
            { h: '5. <em>Open</em>, sleeves pushed' },
            { p: 'The off-duty move. Roll the cuffs once, leave it unzipped, and look like you didn\'t try — because you barely did.' }
        ]
    },
    {
        id: 'a3', cat: 'Care Guide', title: 'Caring for Full-Grain Leather',
        img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop',
        date: 'Oct 2026', read: '5 min read',
        ex: 'Your Jovent leather will outlive trends — if you give it twenty minutes a month.',
        body: [
            { p: 'Full-grain leather is a skin, and like skin it rewards a little attention. Neglect it and it cracks; care for it and it develops a patina no synthetic can imitate.' },
            { h: '<em>Clean</em> before you condition' },
            { p: 'Wipe with a barely-damp cloth, always in the direction of the grain. Never soak it, never use heat to dry it — stuff with newspaper and let it rest overnight.' },
            { h: '<em>Condition</em> monthly' },
            { p: 'A pea-sized amount of neutral leather cream, worked in circles with a soft cloth. In monsoon season, do this twice a month — humidity is leather\'s quiet enemy.' },
            { q: 'Patina is the record of everywhere you have been. Earn it.' },
            { h: '<em>Store</em> it right' },
            { p: 'Belts hung or rolled, never folded. Wallets empty in a dust bag. Keep everything out of direct sun — UV fades dye faster than years of wear.' },
            { p: 'Every Jovent leather piece ships with a care card. Follow it, and your grandson will fight over these.' }
        ]
    }
];
function renderJournal() {
    const g = document.getElementById('journalGrid'); if (!g) return;
    g.innerHTML = ARTICLES.map((a, i) => `
        <a class="j-card reveal reveal-d${i % 3}" href="article.html?id=${a.id}">
            <div class="jimg"><img src="${a.img}" alt="${a.title}" loading="lazy"></div>
            <div class="jb"><small>${a.cat} · ${a.read}</small><h3>${a.title}</h3><p>${a.ex}</p></div>
        </a>`).join('');
    bindReveals(g);
}
function renderArticle() {
    const box = document.getElementById('articleBox'); if (!box) return;
    const a = ARTICLES.find(x => x.id === new URLSearchParams(location.search).get('id')) || ARTICLES[0];
    document.title = a.title + ' — Jovent Journal';
    document.getElementById('artHero').style.backgroundImage = `url('${a.img}')`;
    document.getElementById('artKicker').textContent = a.cat;
    document.getElementById('artTitle').textContent = a.title;
    document.getElementById('artMeta').textContent = `${a.date} · ${a.read}`;
    box.innerHTML = a.body.map(b =>
        b.h ? `<h2>${b.h}</h2>` : b.q ? `<blockquote>“${b.q}”</blockquote>` : `<p>${b.p}</p>`
    ).join('');
    const others = ARTICLES.filter(x => x.id !== a.id);
    document.getElementById('artMore').innerHTML = others.map(o => `
        <a class="j-card" href="article.html?id=${o.id}">
            <div class="jimg"><img src="${o.img}" alt="${o.title}" loading="lazy"></div>
            <div class="jb"><small>${o.cat} · ${o.read}</small><h3>${o.title}</h3><p>${o.ex}</p></div>
        </a>`).join('');
}

/* ---------- FAQ ---------- */
function initFaq() {
    document.querySelectorAll('.faq-item').forEach(it => {
        const head = it.querySelector('.acc-head'), body = it.querySelector('.acc-body');
        head.addEventListener('click', () => {
            const open = it.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(x => { x.classList.remove('open'); x.querySelector('.acc-body').style.maxHeight = '0'; });
            if (!open) { it.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
        });
    });
    document.querySelectorAll('[data-fcat]').forEach(ch => ch.addEventListener('click', () => {
        document.querySelectorAll('[data-fcat]').forEach(x => x.classList.remove('active'));
        ch.classList.add('active');
        const c = ch.dataset.fcat;
        document.querySelectorAll('.faq-item').forEach(it => { it.style.display = (c === 'all' || it.dataset.cat === c) ? '' : 'none'; });
    }));
}

/* ---------- product page extras ---------- */
function initProductExtras() {
    if (!document.getElementById('pdWrap')) return;
    const p = byId(new URLSearchParams(location.search).get('id')) || PRODUCTS[0];
    trackRecent(p.id);
    renderRecent(p.id);
    renderProductReviews(p.id);
    const wb = document.getElementById('wishBtn');
    if (wb) {
        const sync = () => {
            const on = isWished(p.id);
            wb.classList.toggle('on', on);
            wb.querySelector('span').textContent = on ? 'Saved to Wishlist' : 'Add to Wishlist';
        };
        sync();
        wb.addEventListener('click', () => { toggleWish(p.id); sync(); });
    }
}

/* ---------- account: cancel & reorder ---------- */
function setOrderStatus(code, status) {
    try {
        const db = JSON.parse(localStorage.getItem(ADMIN_DB_KEY));
        const o = (db.orders || []).find(x => x.code === code);
        if (o) { o.status = status; localStorage.setItem(ADMIN_DB_KEY, JSON.stringify(db)); return true; }
    } catch { /* ignore */ }
    try {
        const d = demoOrders();
        const o = d.find(x => x.code === code);
        if (o) { o.status = status; localStorage.setItem(DEMO_ORDERS_KEY, JSON.stringify(d)); return true; }
    } catch { /* ignore */ }
    return false;
}
function bindOrderActions(scope, repaint) {
    scope.querySelectorAll('[data-cancel]').forEach(b => b.addEventListener('click', () => {
        if (!confirm(`Cancel order ${b.dataset.cancel}? This cannot be undone.`)) return;
        setOrderStatus(b.dataset.cancel, 'Cancelled');
        toast('Order cancelled'); repaint();
    }));
    scope.querySelectorAll('[data-payedit]').forEach(b => b.addEventListener('click', () => {
        const code = b.dataset.payedit;
        const o = allOrders().find(x => x.code === code); if (!o) return;
        const flagged = isPhoneFlagged(o.phone);
        const methods = flagged ? ['bKash', 'Card'] : ['COD', 'bKash', 'Card'];
        const sel = document.createElement('select');
        sel.className = 'sel-inline';
        sel.setAttribute('aria-label', 'Change payment method');
        sel.innerHTML = methods.map(m => `<option ${m === o.pay ? 'selected' : ''}>${m}</option>`).join('') +
            (flagged ? `<option disabled>— COD unavailable —</option>` : '');
        b.replaceWith(sel); sel.focus();
        let done = false;
        sel.addEventListener('change', () => { done = true; updateOrderPay(code, sel.value); toast(`Payment method → ${sel.value}`); repaint(); });
        sel.addEventListener('blur', () => { if (!done) repaint(); });
    }));
    scope.querySelectorAll('[data-reorder]').forEach(b => b.addEventListener('click', () => {
        const o = allOrders().find(x => x.code === b.dataset.reorder); if (!o) return;
        const c = getCart();
        o.items.forEach(it => {
            const l = c.find(x => x.id === it.pid && x.size === it.size);
            if (l) l.qty += it.qty; else c.push({ id: it.pid, size: it.size, qty: it.qty });
        });
        saveCart(c); updateBadge(true);
        toast('Items added to your bag');
        location.href = 'cart.html';
    }));
}

/* ============================================================
   FRAUD CONTROL + COURIER TRACKING (storefront side)
   Reads the admin panel's fraud blacklist and courier consignments,
   so everything the admin does appears to the customer automatically.
   ============================================================ */
const COURIER_NAMES = { steadfast: 'Steadfast', redx: 'RedX', pathao: 'Pathao', 'ecourier': 'eCourier', paperfly: 'Paperfly' };
const COURIER_LABEL_SF = { created: 'Consignment created', picked_up: 'Picked up', in_transit: 'In transit', out_for_delivery: 'Out for delivery', delivered: 'Delivered', cancelled: 'Cancelled', returned: 'Returned' };

/* Show merchant numbers / gateway info under the payment options, from admin settings */
function refreshPayDetails() {
    const box = document.getElementById('payDetails');
    if (!box) return;
    const cur = document.querySelector('.pay-opt input[name="pay"]:checked');
    const pay = cur ? cur.value : 'cod';
    const s = storeSettings();
    const pd = (s && s.paydetails) || {};
    const gw = (s && s.gateway) || {};
    let html = '';
    if (pay === 'bkash' && (pd.bkash || pd.nagad)) {
        html = `<b>bKash / Nagad — Send Money</b>
            <p>${escHtml(pd.instructions || 'Send Money to the merchant number, then enter your Transaction ID.')}</p>
            <div class="pay-nums">
                ${pd.bkash ? `<div><small>bKash</small><code>${escHtml(pd.bkash)}</code> <button type="button" class="link-btn" data-copytext="${escHtml(pd.bkash)}">Copy</button></div>` : ''}
                ${pd.nagad ? `<div><small>Nagad</small><code>${escHtml(pd.nagad)}</code> <button type="button" class="link-btn" data-copytext="${escHtml(pd.nagad)}">Copy</button></div>` : ''}
            </div>
            <div class="field" style="margin-top:12px"><label for="coTrx">Transaction ID</label><input id="coTrx" type="text" placeholder="e.g. 9HX7K2LMNP"></div>`;
    } else if (pay === 'card') {
        const names = { sslcommerz: 'SSLCommerz', bkashpgw: 'bKash PGW', stripe: 'Stripe', shurjopay: 'ShurjoPay' };
        const gname = names[gw.provider] || 'secure gateway';
        html = `<b>Card Payment — ${escHtml(gname)}</b>
            <p>You will be redirected to ${escHtml(gname)}${gw.sandbox === false ? '' : ' <em>(sandbox mode)</em>'} to complete payment securely after placing the order.</p>`;
        if (pd.bankName && pd.accNo) {
            html += `<p style="margin-top:8px">Prefer bank transfer? ${escHtml(pd.bankName)} · A/C ${escHtml(pd.accName || '')} · ${escHtml(pd.accNo)}${pd.routing ? ' · Routing ' + escHtml(pd.routing) : ''}${pd.branch ? ' · ' + escHtml(pd.branch) : ''}</p>`;
        }
    }
    box.innerHTML = html;
    box.style.display = html ? 'block' : 'none';
    box.querySelectorAll('[data-copytext]').forEach(b => {
        if (b._cp) return; b._cp = true;
        b.addEventListener('click', () => {
            const t = b.dataset.copytext;
            if (navigator.clipboard) navigator.clipboard.writeText(t).then(() => toast('Number copied')).catch(() => toast(t));
            else toast(t);
        });
    });
}
function fraudRecord(phone) {
    try {
        const db = JSON.parse(localStorage.getItem(ADMIN_DB_KEY));
        const r = db && db.fraud && db.fraud[normPhone(phone)];
        return (r && r.flagged) ? r : null;
    } catch { return null; }
}
const isPhoneFlagged = phone => !!fraudRecord(phone);

/* ----- checkout: hide COD for flagged numbers ----- */
function refreshCodGate() {
    const phoneEl = document.getElementById('coPhone');
    if (!phoneEl) return;
    const rec = fraudRecord(phoneEl.value);
    const codInput = document.querySelector('.pay-opt input[value="cod"]');
    const codOpt = codInput ? codInput.closest('.pay-opt') : null;
    const notice = document.getElementById('codNotice');
    const setPay = v => {
        document.querySelectorAll('.pay-opt').forEach(x => x.classList.remove('active'));
        const t = document.querySelector(`.pay-opt input[value="${v}"]`);
        if (t) { t.checked = true; t.closest('.pay-opt').classList.add('active'); }
    };
    if (rec) {
        if (codOpt) codOpt.classList.add('disabled');
        const cur = document.querySelector('.pay-opt input[name="pay"]:checked');
        if (cur && cur.value === 'cod') setPay('bkash');
        if (notice) notice.style.display = 'block';
    } else {
        if (codOpt) codOpt.classList.remove('disabled');
        if (notice) notice.style.display = 'none';
    }
}
function initCodGate() {
    const phoneEl = document.getElementById('coPhone');
    if (!phoneEl || phoneEl._gate) return; phoneEl._gate = true;
    refreshCodGate();
    phoneEl.addEventListener('input', refreshCodGate);
}

/* ----- courier tracking card (account + public tracking) ----- */
function courierCardHTML(o) {
    const cx = o.courier; if (!cx) return '';
    const name = COURIER_NAMES[cx.provider] || cx.provider;
    const steps = ['created', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'];
    const idx = steps.indexOf(cx.status);
    const hist = (cx.history || []).slice().reverse();
    const pillCls = cx.status === 'delivered' ? 'p-delivered' : (cx.status === 'cancelled' || cx.status === 'returned') ? 'p-cancelled' : 'p-shipped';
    return `<div class="courier-card">
        <div class="courier-top"><span class="kicker">Courier Tracking</span>
            <button type="button" class="link-btn" data-copytrack="${escHtml(cx.trackingId)}">Copy ID</button></div>
        <div class="courier-id"><b>${escHtml(name)}</b><code>${escHtml(cx.trackingId)}</code>
            <span class="pill ${pillCls}">${escHtml(COURIER_LABEL_SF[cx.status] || cx.status)}</span></div>
        ${idx >= 0 ? `<div class="timeline mini">${steps.map((s, i) => `
            <div class="tl-step ${i < idx ? 'done' : ''} ${i === idx ? 'done now' : ''}"><span class="tl-dot"></span><b>${COURIER_LABEL_SF[s]}</b></div>`).join('')}
            <div class="tl-progress" style="height:${(idx / (steps.length - 1)) * 100}%"></div></div>` : ''}
        <div class="courier-hist">${hist.map(h => `<div class="ch-row"><i></i><div><b>${escHtml(COURIER_LABEL_SF[h.s] || h.s)}</b><small>${escHtml(h.t || '')}</small></div></div>`).join('')}</div>
    </div>`;
}
function bindCopyTrack(scope) {
    (scope || document).querySelectorAll('[data-copytrack]').forEach(b => {
        if (b._cb) return; b._cb = true;
        b.addEventListener('click', () => {
            const t = b.dataset.copytrack;
            if (navigator.clipboard) navigator.clipboard.writeText(t).then(() => toast('Tracking ID copied')).catch(() => toast(t));
            else toast(t);
        });
    });
}

/* ----- account: change payment method on pending orders ----- */
function updateOrderPay(code, pay) {
    try {
        const db = JSON.parse(localStorage.getItem(ADMIN_DB_KEY));
        const o = (db.orders || []).find(x => x.code === code);
        if (o) { o.pay = pay; localStorage.setItem(ADMIN_DB_KEY, JSON.stringify(db)); return true; }
    } catch { /* ignore */ }
    try {
        const d = demoOrders();
        const o = d.find(x => x.code === code);
        if (o) { o.pay = pay; localStorage.setItem(DEMO_ORDERS_KEY, JSON.stringify(d)); return true; }
    } catch { /* ignore */ }
    return false;
}

/* ============================================================
   STORE SETTINGS BRIDGE — SEO, social, chat, analytics
   Reads the admin panel's settings (same localStorage DB) and applies
   them to the storefront live: meta tags, tracking scripts, footer
   social icons and the chat widget. In Laravel these become Blade
   sections fed by the settings table — same keys, same behavior.
   ============================================================ */
function storeSettings() {
    try {
        const db = JSON.parse(localStorage.getItem(ADMIN_DB_KEY));
        return (db && db.settings) || null;
    } catch { return null; }
}
const SOCIAL_ICONS = {
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
    tiktok: '<path d="M9 12a4 4 0 1 0 4 4V4c.6 2.5 2.4 4.3 5 4.7"/>',
    youtube: '<path d="M22 12s0-3.3-.4-4.8a2.8 2.8 0 0 0-2-2C18 4.8 12 4.8 12 4.8s-6 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.7 2 12 2 12s0 3.3.4 4.8a2.8 2.8 0 0 0 2 2c1.6.4 7.6.4 7.6.4s6 0 7.6-.4a2.8 2.8 0 0 0 2-2c.4-1.5.4-4.8.4-4.8z"/><path d="M10 15.5v-7l6 3.5z" fill="currentColor" stroke="none"/>',
    whatsapp: '<path d="M21 12a9 9 0 1 1-16.6 4.8L3 21l4.3-1.3A9 9 0 0 1 21 12z"/><path d="M9 9.5c.5 2.5 3 5 5.5 5.5l1-1.5 2 1c-.5 1.5-1.5 2-3 1.5-3-1-6-4-7-7-.5-1.5 0-2.5 1.5-3l1 2z" fill="currentColor" stroke="none"/>',
};
function applyStoreSettings() {
    const s = storeSettings(); if (!s) return;
    const head = document.head;
    const setMeta = (attr, name, content) => {
        if (!content) return;
        let el = head.querySelector(`meta[${attr}="${name}"]`);
        if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); head.appendChild(el); }
        el.setAttribute('content', content);
    };
    /* SEO */
    const seo = s.seo || {};
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords);
    setMeta('property', 'og:title', document.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:image', seo.image);
    setMeta('property', 'og:type', 'website');
    /* Google Analytics */
    const gaId = (s.analytics || {}).gaId;
    if (gaId && !document.getElementById('gaScript')) {
        const sc = document.createElement('script'); sc.id = 'gaScript'; sc.async = true;
        sc.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
        head.appendChild(sc);
        const init = document.createElement('script'); init.id = 'gaInit';
        init.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId.replace(/[^A-Za-z0-9-]/g, '')}');`;
        head.appendChild(init);
    }
    /* Meta Pixel */
    const pxId = (s.analytics || {}).pixelId;
    if (pxId && !document.getElementById('fbPixel')) {
        const init = document.createElement('script'); init.id = 'fbPixel';
        init.textContent = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pxId.replace(/[^0-9]/g, '')}');fbq('track','PageView');`;
        head.appendChild(init);
    }
    /* Social icons → footer */
    const sm = s.social || {};
    const row = document.getElementById('socialRow');
    if (row) {
        const nets = ['facebook', 'instagram', 'tiktok', 'youtube', 'whatsapp'].filter(k => sm[k]);
        row.innerHTML = nets.map(k => {
            const href = k === 'whatsapp' ? `https://wa.me/${sm[k]}` : sm[k];
            const label = k.charAt(0).toUpperCase() + k.slice(1);
            return `<a href="${escHtml(href)}" target="_blank" rel="noopener" aria-label="${label}" title="${label}"><svg viewBox="0 0 24 24">${SOCIAL_ICONS[k]}</svg></a>`;
        }).join('');
        row.style.display = nets.length ? '' : 'none';
    }
    /* Chat widget */
    const ch = s.chat || {};
    const fab = document.getElementById('chatFab'), panel = document.getElementById('chatPanel');
    if (ch.enabled === false) {
        if (fab) fab.style.display = 'none';
        if (panel) panel.style.display = 'none';
        return;
    }
    if (ch.whatsapp) {
        const chips = document.getElementById('chatChips');
        if (chips && !document.getElementById('waChip')) {
            const a = document.createElement('a');
            a.id = 'waChip'; a.className = 'wa-chip';
            a.href = `https://wa.me/${ch.whatsapp}?text=${encodeURIComponent('Hello Jovent! I need help with my order.')}`;
            a.target = '_blank'; a.rel = 'noopener';
            a.innerHTML = `<svg viewBox="0 0 24 24">${SOCIAL_ICONS.whatsapp}</svg> WhatsApp us`;
            chips.appendChild(a);
        }
    }
    if (ch.hours) {
        const sub = document.querySelector('#chatPanel .chat-head small');
        if (sub) sub.textContent = 'Online · ' + ch.hours;
    }
    if (ch.welcome) window.__chatWelcome = ch.welcome;
}
function chatWelcome() {
    return window.__chatWelcome || 'Welcome to Jovent. I am your concierge — ask me about tracking, delivery, exchanges or sizing.';
}
/* Swap placeholder contact details in chat answers for the store's real ones */
function phoneSwap(html) {
    try {
        const s = storeSettings(); if (!s) return html;
        return html.split('+880 1700-000000').join(s.phone || '+880 1700-000000')
                   .split('hello@joventmenswear.com').join(s.email || 'hello@joventmenswear.com');
    } catch { return html; }
}

/* ---------------- Boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
    initHeader(); initHero(); bindReveals(); bindQuickAdds(document);
    initShop(); initProduct(); initCartPage(); initCheckout(); initVideos(); initCatalogue(); initForms();
    seedDemoOrder(); updateAccountUI();
    injectGlobalUI(); updateWishUI(); initSearch(); initChat(); initCookies(); initAnnounce();
    applyStoreSettings();
    bindWishButtons(document); bindQuickViews(document);
    initProductExtras();
    if (document.getElementById('journalGrid')) renderJournal();
    if (document.getElementById('articleBox')) renderArticle();
    if (document.getElementById('faqList')) initFaq();
    if (document.getElementById('loginPage')) initLoginPage();
    if (document.getElementById('accountPage')) initAccountPage();
    if (document.getElementById('trackPage')) initTrackPage();
    if (document.getElementById('coForm')) { prefillCheckout(); initCodGate(); }
    bindCopyTrack(document);
    // home grids
    if (document.getElementById('homeGrid')) renderGrid('homeGrid', PRODUCTS.slice(0, 8));
    if (document.getElementById('homeGrid2')) renderGrid('homeGrid2', [...PRODUCTS].reverse().slice(0, 4));
    // editorial parallax
    const ed = document.querySelector('.ed-bg');
    if (ed) window.addEventListener('scroll', () => {
        const r = ed.parentElement.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0)
            ed.style.transform = `translateY(${(r.top - innerHeight / 2) * -0.08}px)`;
    }, { passive: true });
});

})();
