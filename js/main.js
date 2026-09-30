const catalog = {
  categories: [
    {id:'fruits-secs', fr:'Fruits secs & noix', ar:'الفواكه الجافة والمكسرات', descriptionFr:'Noix et fruits secs pour une pause ou pour partager.', descriptionAr:'مكسرات وفواكه جافة للذوق أو للمشاركة.', image:'assets/nuts-and-seeds.jpg'},
    {id:'biscuits', fr:'Biscuits & chocolat', ar:'البسكويت والشوكولا', descriptionFr:'Les douceurs qui accompagnent bien une petite pause.', descriptionAr:'بسكويت وشوكولا لوقت البنة.', image:'assets/biscuits.jpg'},
    {id:'chips', fr:'Chips & snacks', ar:'الشيبس والسناكس', descriptionFr:'Du salé et du croustillant à emporter ou à partager.', descriptionAr:'لكل وقت', image:'assets/chips.jpg'},
    {id:'drinks', fr:'Eau & boissons', ar:'الماء والمشروبات', descriptionFr:'Une gorgée de fraîcheur.', descriptionAr:'برد على قلبك وانتعش!', image:'assets/drinks.jpg'},
    {id:'bonbons', fr:'Bonbons & gommes', ar:'الحلوى والعلكة', descriptionFr:'Une sélection colorée pour les envies sucrées.', descriptionAr:'شي حاجة حلوة', image:'assets/candy.jpg'},
    {id:'glaces', fr:'Glaces', ar:'الكلاص', descriptionFr:'Une touche fraîche pour les journées chaudes.', descriptionAr:'باش تبرد الجو', image:'assets/ice-cream.jpg'}
  ],
  // Demonstration names and prices. Replace with the shop's actual catalog before selling.
  products: [
    {id:'amandes',category:'fruits-secs',fr:'Amandes',ar:'لوز',sizeFr:'Sachet 100 g',sizeAr:'كيس 100 غ',price:28},
    {id:'pistaches',category:'fruits-secs',fr:'Pistaches',ar:'فستق',sizeFr:'Sachet 100 g',sizeAr:'كيس 100 غ',price:38},
    {id:'melange-noix',category:'fruits-secs',fr:'Mélange de noix',ar:'خليط المكسرات',sizeFr:'Sachet 150 g',sizeAr:'كيس 150 غ',price:42},
    {id:'bonbons-fruites',category:'bonbons',fr:'Bonbons fruités',ar:'حلوى بالفواكه',sizeFr:'Sachet 100 g',sizeAr:'كيس 100 غ',price:15},
    {id:'gommes',category:'bonbons',fr:'Gommes assorties',ar:'علكة مشكلة',sizeFr:'Sachet',sizeAr:'كيس',price:10},
    {id:'mix-bonbons',category:'bonbons',fr:'Mix de bonbons',ar:'خليط الحلوى',sizeFr:'Sachet 200 g',sizeAr:'كيس 200 غ',price:24},
    {id:'biscuits-chocolat',category:'biscuits',fr:'Biscuits chocolat',ar:'بسكويت بالشوكولا',sizeFr:'Paquet',sizeAr:'علبة',price:18},
    {id:'biscuits-croquants',category:'biscuits',fr:'Biscuits croquants',ar:'بسكويت مقرمش',sizeFr:'Paquet',sizeAr:'علبة',price:14},
    {id:'chocolat',category:'biscuits',fr:'Chocolat à partager',ar:'شوكولا للمشاركة',sizeFr:'Tablette',sizeAr:'لوح',price:22},
    {id:'boscalios-chili',category:'chips',fr:'Buscalios - Chili',ar:'بوسكاليوس - حار',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:4,image:'assets/Buscalios - Chili.png',hideSize:true},
    {id:'boscalios-bbq',category:'chips',fr:'Buscalios - BBQ',ar:'بوسكاليوس - باربكيو',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:4,image:'assets/Buscalios - BBQ.png',hideSize:true},
    {id:'onduladas-campesinas',category:'chips',fr:'Onduladas Campesinas',ar:'أوندولاداس كامبيسيناس',sizeFr:'Paquet 30 g',sizeAr:'كيس 30 غ',listingFr:'Paquet',listingAr:'كيس',price:4,image:'assets/Onduladas Campesinas.png',hideSize:true},
    {id:'onduladas-originales',category:'chips',fr:'Onduladas Originales',ar:'أوندولاداس أوريجيناليس',sizeFr:'Paquet 30 g',sizeAr:'كيس 30 غ',listingFr:'Paquet',listingAr:'كيس',price:4,image:'assets/Onduladas Originales.png',hideSize:true},
    {id:'cheetos-pelotazos',category:'chips',fr:'Cheetos Pelotazos',ar:'شيتوس بيلوتازوس',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:18,image:'assets/Cheetos Pelotazos.png',hideSize:true},
    {id:'doritos-chilli',category:'chips',fr:'Doritos Chilli',ar:'دوريتوس تشيلي',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:18,image:'assets/Doritos - Chilli.png',hideSize:true},
    {id:'pringles-barbecue',category:'chips',fr:'Pringles Barbecue',ar:'برينغلز باربكيو',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:11,image:'assets/Pringles Barbeque.png',hideSize:true},
    {id:'pringles-hot-spicy',category:'chips',fr:'Pringles Hot & Spicy',ar:'برينغلز حار ومتبل',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:11,image:'assets/Pringles Hot & Spicy.png',hideSize:true},
    {id:'pringles-sour-cream-onion',category:'chips',fr:'Pringles Sour Cream & Onion',ar:'برينغلز كريمة حامضة وبصل',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:11,image:'assets/Pringles Sour Cream & Onion.png',hideSize:true},
    {id:'takis-intense-nacho',category:'chips',fr:'Takis Intense Nacho',ar:'تاكيس إنتنس ناتشو',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:18,image:'assets/Takis Intense Nacho.png',hideSize:true},
    {id:'takis-queso-volcano',category:'chips',fr:'Takis Queso Volcano',ar:'تاكيس كيسو فولكانو',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:18,image:'assets/Takis Queso Volcano.png',hideSize:true},
    {id:'takis-fuego',category:'chips',fr:'Takis Fuego',ar:'تاكيس فويغو',sizeFr:'Paquet',sizeAr:'كيس',listingFr:'Paquet',listingAr:'كيس',price:18,image:'assets/Takis Fuego.png',hideSize:true},
    {id:'glace-vanille',category:'glaces',fr:'Glace vanille',ar:'كلاص فاني',sizeFr:'Une portion',sizeAr:'حصة واحدة',price:15},
    {id:'glace-fraise',category:'glaces',fr:'Glace fraise',ar:'كلاص فراولة',sizeFr:'Une portion',sizeAr:'حصة واحدة',price:15},
    {id:'glace-chocolat',category:'glaces',fr:'Glace chocolat',ar:'كلاص شوكولا',sizeFr:'Une portion',sizeAr:'حصة واحدة',price:18},
    {id:'eau-minerale-500ml',category:'drinks',fr:'Eau minérale 50 cl',ar:'ماء معدني 50 سل',sizeFr:'Bouteille 50 cl',sizeAr:'قارورة 50 سل',price:5},
    {id:'eau-minerale-1500ml',category:'drinks',fr:'Eau minérale 1,5 L',ar:'ماء معدني 1.5 لتر',sizeFr:'Bouteille 1,5 L',sizeAr:'قارورة 1.5 لتر',price:8},
    {id:'soda-cola-330ml',category:'drinks',fr:'Soda cola',ar:'مشروب غازي بنكهة الكولا',sizeFr:'Canette 33 cl',sizeAr:'علبة 33 سل',price:7},
    {id:'jus-orange-1l',category:'drinks',fr:"Jus d'orange",ar:'عصير البرتقال',sizeFr:'Bouteille 1 L',sizeAr:'قارورة 1 لتر',price:15}
  ]
};

// WhatsApp configuration. Use the number without + or spaces.
const WHATSAPP_NUMBER = '212769611475';
const WHATSAPP_CATALOG = `https://wa.me/c/${WHATSAPP_NUMBER}`;
const BASKET_KEY = 'moul-zri3a-basket-v1';
const DELIVERY_MINIMUM = 25;
const DELIVERY_FEE = 5;
const FREE_DELIVERY_THRESHOLD = 50;
let language = 'fr';
let productQuantity = 1;
let previousProductId = null;

const views = {
  home: document.querySelector('#home-view'),
  category: document.querySelector('#category-view'),
  product: document.querySelector('#product-view'),
  basket: document.querySelector('#basket-view')
};
const t = (french, arabic) => language === 'ar' ? arabic : french;
const nameOf = (item) => item[language];
const sizeOf = (product) => product[language === 'ar' ? 'sizeAr' : 'sizeFr'];
const money = (amount) => `${amount} ${language === 'ar' ? 'درهم' : 'MAD'}`;
const categoryById = (id) => catalog.categories.find(item => item.id === id);
const productById = (id) => catalog.products.find(item => item.id === id);
const categoryLink = (id) => `#category/${id}`;
const productLink = (id) => `#product/${id}`;
const imageOf = (product) => product.image || categoryById(product.category).image;
const clampQuantity = (value) => Math.max(1, Math.min(99, Math.trunc(Number(value) || 1)));

// The basket is kept in this browser. No customer accounts or server are needed.
function readBasket() {
  try {
    const saved = JSON.parse(localStorage.getItem(BASKET_KEY) || '[]');
    return Array.isArray(saved)
      ? saved.filter(item => productById(item.id)).map(item => ({id: item.id, quantity: clampQuantity(item.quantity)}))
      : [];
  } catch { return []; }
}
function saveBasket(items) {
  try { localStorage.setItem(BASKET_KEY, JSON.stringify(items)); }
  catch { alert(t('Le panier ne peut pas être enregistré dans ce navigateur.', 'تعذر حفظ السلة فهاد المتصفح.')); }
  updateBasketCount();
}
function addToBasket(id, quantity) {
  const items = readBasket();
  const existing = items.find(item => item.id === id);
  if (existing) existing.quantity = clampQuantity(existing.quantity + quantity);
  else items.push({id, quantity: clampQuantity(quantity)});
  saveBasket(items);
}
function changeBasketQuantity(id, quantity) {
  const items = readBasket();
  const item = items.find(entry => entry.id === id);
  if (item) item.quantity = clampQuantity(quantity);
  saveBasket(items);
}
function removeFromBasket(id) { saveBasket(readBasket().filter(item => item.id !== id)); }
function basketCount() { return readBasket().reduce((sum, item) => sum + item.quantity, 0); }
function updateBasketCount() { document.querySelector('#basket-count').textContent = basketCount(); }
function itemTotal(product, quantity) { return product.price * quantity; }
function basketTotal(items = readBasket()) {
  return items.reduce((sum, item) => sum + itemTotal(productById(item.id), item.quantity), 0);
}
function deliveryDetails(subtotal) {
  const eligible = subtotal >= DELIVERY_MINIMUM;
  const fee = eligible && subtotal <= FREE_DELIVERY_THRESHOLD ? DELIVERY_FEE : 0;
  return {eligible, fee, total: subtotal + fee};
}
function deliveryLine(details) {
  if (!details.eligible) return t('Livraison : indisponible', 'التوصيل: غير متاح');
  return details.fee ? t(`Livraison : ${money(details.fee)}`, `التوصيل: ${money(details.fee)}`) : t('Livraison : gratuite', 'التوصيل: مجاني');
}

// WhatsApp opens with a draft message. The customer still has to press Send.
function whatsappLink(message) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
function orderLine(product, quantity) {
  return `• ${nameOf(product)} — ${sizeOf(product)} — ${quantity} × ${money(product.price)} = ${money(itemTotal(product, quantity))}`;
}
function buyNowMessage(product, quantity) {
  const subtotal = itemTotal(product, quantity);
  const delivery = deliveryDetails(subtotal);
  const line = orderLine(product, quantity);
  return t(`Bonjour, je voudrais commander :\n${line}\n\nSous-total : ${money(subtotal)}\n${deliveryLine(delivery)}\nTotal avec livraison : ${money(delivery.total)}\nEst-ce disponible ?`,
           `سلام، بغيت نطلب:\n${line}\n\nالمجموع قبل التوصيل: ${money(subtotal)}\n${deliveryLine(delivery)}\nالمجموع مع التوصيل: ${money(delivery.total)}\nواش متوفر؟`);
}
function basketMessage() {
  const items = readBasket();
  const lines = items.map(item => {
    const product = productById(item.id);
    return orderLine(product, item.quantity);
  }).join('\n');
  const subtotal = basketTotal(items);
  const delivery = deliveryDetails(subtotal);
  return t(`Bonjour, je voudrais commander ces produits :\n${lines}\n\nSous-total : ${money(subtotal)}\n${deliveryLine(delivery)}\nTotal avec livraison : ${money(delivery.total)}\nMerci de confirmer leur disponibilité.`,
           `سلام، بغيت نطلب هاد المنتوجات:\n${lines}\n\nالمجموع قبل التوصيل: ${money(subtotal)}\n${deliveryLine(delivery)}\nالمجموع مع التوصيل: ${money(delivery.total)}\nعافاك أكد ليا التوفر.`);
}


// Translate the text already written in index.html.
function updateSharedText() {
  document.documentElement.lang = language;
  document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-fr]').forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  document.querySelector('#whatsapp-catalog').href = WHATSAPP_CATALOG;
  document.querySelector('#product-request-link').href = whatsappLink(t(
    "Bonjour, je n'ai pas trouvé le produit que je cherche. Pouvez-vous me renseigner ?",
    'سلام، ما لقيتش المنتوج اللي كنقلب عليه. واش تقدروا تعاونوني؟'
  ));
  document.querySelector('#language-button').textContent = language === 'fr' ? 'العربية' : 'Français';
  document.querySelector('#year').textContent = new Date().getFullYear();
  updateBasketCount();
}
function breadcrumb(parts) {
  return `<a href="#home">${t('Accueil', 'الرئيسية')}</a>${parts.map(part => `<span>/</span>${part}`).join('')}`;
}
function productCard(product) {
  return `<a class="product-card" href="${productLink(product.id)}">
    <img src="${imageOf(product)}" alt="${nameOf(categoryById(product.category))}" loading="lazy">
    <span class="card-content"><h3>${nameOf(product)}</h3><p>${product[language === 'ar' ? 'listingAr' : 'listingFr'] || sizeOf(product)}</p>
    <span class="price-line"><span>${money(product.price)}</span><span aria-hidden="true">↗</span></span></span>
  </a>`;
}
function renderHome() {
  document.title = 'Moul Zri3a';
  document.querySelector('#category-grid').innerHTML = catalog.categories.map((category, index) => `
    <a class="category-tile" href="${categoryLink(category.id)}">
      <span class="tile-number">0${index + 1}</span>
      <span><h3>${nameOf(category)}</h3><small>${category[language === 'ar' ? 'descriptionAr' : 'descriptionFr']}</small></span>
      <span class="round-arrow" aria-hidden="true">↗</span>
    </a>`).join('');
}
function renderCategory(id) {
  const category = categoryById(id);
  if (!category) return false;
  document.title = `${nameOf(category)} — Moul Zri3a`;
  const products = catalog.products.filter(product => product.category === id);
  document.querySelector('#category-title').textContent = nameOf(category);
  document.querySelector('#category-description').textContent = category[language === 'ar' ? 'descriptionAr' : 'descriptionFr'];
  const categoryImage = document.querySelector('#category-image');
  categoryImage.hidden = !category.image;
  categoryImage.removeAttribute('src');
  categoryImage.alt = category.image ? nameOf(category) : '';
  document.querySelector('.category-banner').classList.toggle('no-image', !category.image);
  if (category.image) categoryImage.src = category.image;
  document.querySelector('#product-count').textContent = `${products.length} ${t('produits', 'منتوجات')}`;
  document.querySelector('#category-pills').innerHTML = catalog.categories.map(item =>
    `<a class="${item.id === id ? 'active' : ''}" href="${categoryLink(item.id)}">${nameOf(item)}</a>`
  ).join('');
  document.querySelector('#category-products').innerHTML = products.map(productCard).join('');
  return true;
}
function renderProduct(id) {
  const product = productById(id);
  if (!product) return false;
  if (previousProductId !== id) productQuantity = 1;
  previousProductId = id;
  const category = categoryById(product.category);
  document.title = `${nameOf(product)} — Moul Zri3a`;
  document.querySelector('#product-breadcrumb').innerHTML = breadcrumb([
    `<a href="${categoryLink(category.id)}">${nameOf(category)}</a>`,
    `<strong>${nameOf(product)}</strong>`
  ]);
  document.querySelector('#product-image').src = imageOf(product);
  document.querySelector('#product-image').alt = nameOf(product);
  document.querySelector('#product-category').textContent = nameOf(category);
  document.querySelector('#product-title').textContent = nameOf(product);
  const productSize = document.querySelector('#product-size');
  productSize.hidden = Boolean(product.hideSize);
  productSize.textContent = product.hideSize ? '' : sizeOf(product);
  document.querySelector('#product-price').textContent = money(product.price);
  document.querySelector('#product-format').textContent = sizeOf(product);
  document.querySelector('#product-quantity').value = productQuantity;
  document.querySelector('#buy-now').dataset.id = id;
  document.querySelector('#add-basket').dataset.id = id;
  document.querySelector('#product-status').textContent = '';
  document.querySelector('#related-products').innerHTML = catalog.products
    .filter(item => item.category === product.category && item.id !== id)
    .map(productCard).join('');
  return true;
}
function renderBasket() {
  document.title = `${t('Panier', 'السلة')} — Moul Zri3a`;
  document.querySelector('#basket-breadcrumb').innerHTML = breadcrumb([`<strong>${t('Panier', 'السلة')}</strong>`]);
  const items = readBasket();
  const list = document.querySelector('#basket-items');
  const summary = document.querySelector('#basket-summary');
  summary.hidden = items.length === 0;
  if (!items.length) {
    list.innerHTML = `<div class="empty-basket"><h2>${t('Votre panier est vide', 'السلة فارغة')}</h2>
      <p>${t('Choisissez des produits pour préparer votre demande.', 'اختار منتوجات باش توجد الطلب ديالك.')}</p>
      <a class="dark-button" href="#categories">${t('Voir les catégories', 'شوف الفئات')}</a></div>`;
    return;
  }
  list.innerHTML = items.map(item => {
    const product = productById(item.id);
    const total = itemTotal(product, item.quantity);
    return `<div class="basket-line" data-id="${item.id}"><img src="${imageOf(product)}" alt="${nameOf(categoryById(product.category))}">
      <div><h2><a href="${productLink(item.id)}">${nameOf(product)}</a></h2>
      <p>${sizeOf(product)} · ${money(product.price)}</p><div class="line-actions">
      <div class="quantity"><button type="button" data-action="basket-minus" aria-label="${t('Diminuer', 'نقص')}">−</button>
      <input type="number" min="1" max="99" value="${item.quantity}" inputmode="numeric" aria-label="${t('Quantité', 'الكمية')}">
      <button type="button" data-action="basket-plus" aria-label="${t('Augmenter', 'زيد')}">+</button></div>
      <button class="remove-button" type="button" data-action="remove">${t('Retirer', 'حيد')}</button>
      </div></div><strong class="line-total">${money(total)}</strong></div>`;
  }).join('');
  document.querySelector('#summary-count').textContent = basketCount();
  const subtotal = basketTotal(items);
  const delivery = deliveryDetails(subtotal);
  document.querySelector('#summary-subtotal').textContent = money(subtotal);
  document.querySelector('#summary-delivery').textContent = !delivery.eligible
    ? t('Indisponible', 'غير متاح')
    : delivery.fee ? money(delivery.fee) : t('Gratuite', 'مجاني');
  document.querySelector('#summary-total').textContent = money(delivery.total);
  document.querySelector('#confirm-order').disabled = !delivery.eligible;
  document.querySelector('#basket-status').textContent = delivery.eligible
    ? ''
    : t(`Minimum de commande pour la livraison : ${money(DELIVERY_MINIMUM)}.`, `الحد الأدنى للطلب والتوصيل هو ${money(DELIVERY_MINIMUM)}.`);
}
function route() {
  const [view, id] = location.hash.slice(1).split('/');
  updateSharedText();
  let selected = 'home';
  if (view === 'category' && renderCategory(id)) selected = 'category';
  else if (view === 'product' && renderProduct(id)) selected = 'product';
  else if (view === 'basket') { renderBasket(); selected = 'basket'; }
  else renderHome();
  Object.entries(views).forEach(([name, element]) => { element.hidden = name !== selected; });
  if (view === 'categories') requestAnimationFrame(() => document.querySelector('#categories').scrollIntoView());
  else window.scrollTo(0, 0);
}

// Button clicks update quantity, basket, or open WhatsApp.
document.querySelector('main').addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'product-plus' || action === 'product-minus') {
    productQuantity = clampQuantity(productQuantity + (action === 'product-plus' ? 1 : -1));
    document.querySelector('#product-quantity').value = productQuantity;
  } else if (action === 'buy-now') {
    const product = productById(button.dataset.id);
    const subtotal = itemTotal(product, productQuantity);
    if (!deliveryDetails(subtotal).eligible) {
      document.querySelector('#product-status').textContent = t(
        `Minimum de commande pour la livraison : ${money(DELIVERY_MINIMUM)}.`,
        `الحد الأدنى للطلب والتوصيل هو ${money(DELIVERY_MINIMUM)}.`
      );
      return;
    }
    location.href = whatsappLink(buyNowMessage(product, productQuantity));
  } else if (action === 'add-basket') {
    addToBasket(button.dataset.id, productQuantity);
    document.querySelector('#product-status').innerHTML = `${t('Ajouté au panier.', 'تزاد للسلة.')} <a href="#basket">${t('Voir le panier →', 'شوف السلة ←')}</a>`;
  } else if (action === 'confirm-order') {
    if (readBasket().length) location.href = whatsappLink(basketMessage());
  } else {
    const id = button.closest('[data-id]')?.dataset.id;
    if (!id) return;
    const current = readBasket().find(item => item.id === id)?.quantity || 1;
    if (action === 'remove') removeFromBasket(id);
    if (action === 'basket-plus') changeBasketQuantity(id, current + 1);
    if (action === 'basket-minus') changeBasketQuantity(id, current - 1);
    renderBasket();
  }
});
document.querySelector('main').addEventListener('change', event => {
  if (!event.target.matches('input[type=number]')) return;
  if (event.target.id === 'product-quantity') {
    productQuantity = clampQuantity(event.target.value);
    event.target.value = productQuantity;
  } else {
    const id = event.target.closest('[data-id]')?.dataset.id;
    if (id) { changeBasketQuantity(id, event.target.value); renderBasket(); }
  }
});
document.querySelector('#language-button').addEventListener('click', () => {
  language = language === 'fr' ? 'ar' : 'fr';
  route();
});
window.addEventListener('hashchange', route);
route();
