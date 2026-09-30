const params = new URLSearchParams(location.search);
const page = document.body.dataset.page;
let language = params.get('lang') === 'ar' ? 'ar' : 'fr';
const label = (item) => item[language];
const linkLang = () => language === 'ar' ? '&lang=ar' : '';
const categoryUrl = (id) => `category.html?c=${encodeURIComponent(id)}${linkLang()}`;
const productUrl = (id) => `product.html?id=${encodeURIComponent(id)}${linkLang()}`;
const homeUrl = () => `index.html${language === 'ar' ? '?lang=ar' : ''}`;
const t = (fr, ar) => language === 'ar' ? ar : fr;
const money = (value) => `${value} MAD`;
function productCard(product) {
  const category = catalog.categories.find(c => c.id === product.category);
  return `<a class="product-card" href="${productUrl(product.id)}"><img src="${category.image}" alt="${label(category)}" loading="lazy"><div class="info"><h3>${label(product)}</h3><p class="size">${product[language === 'ar' ? 'sizeAr' : 'sizeFr']}</p><div class="price-row"><span class="price">${money(product.price)}</span><span class="card-arrow" aria-hidden="true">↗</span></div></div></a>`;
}
function renderCategory() {
  const category = catalog.categories.find(c => c.id === params.get('c'));
  if (!category) return renderMissing();
  document.title = `${label(category)} — Moul Zri3a`;
  document.querySelector('#breadcrumb').innerHTML = `<a href="${homeUrl()}">${t('Accueil','الرئيسية')}</a><span>/</span><span>${label(category)}</span>`;
  document.querySelector('#category-hero').innerHTML = `<div class="category-copy"><span class="eyebrow">Moul Zri3a / ${t('Nos rayons','المنتوجات')}</span><h1>${label(category)}</h1><p>${category[language === 'ar' ? 'descriptionAr' : 'descriptionFr']}</p></div><img src="${category.image}" alt="${label(category)}">`;
  const products = catalog.products.filter(p => p.category === category.id);
  document.querySelector('#product-count').textContent = `${products.length} ${t('produits','منتوجات')}`;
  document.querySelector('#category-nav').innerHTML = catalog.categories.map(c => `<a href="${categoryUrl(c.id)}" ${c.id === category.id ? 'aria-current="page"' : ''}>${label(c)}</a>`).join('');
  document.querySelector('#product-grid').innerHTML = products.map(productCard).join('');
}
function renderProduct() {
  const product = catalog.products.find(p => p.id === params.get('id'));
  if (!product) return renderMissing();
  const category = catalog.categories.find(c => c.id === product.category);
  document.title = `${label(product)} — Moul Zri3a`;
  document.querySelector('#category-back').href = categoryUrl(category.id);
  document.querySelector('#breadcrumb').innerHTML = `<a href="${homeUrl()}">${t('Accueil','الرئيسية')}</a><span>/</span><a href="${categoryUrl(category.id)}">${label(category)}</a><span>/</span><span>${label(product)}</span>`;
  document.querySelector('#product-detail').innerHTML = `<div class="detail-photo"><img src="${category.image}" alt="${label(category)}"></div><div class="detail-info"><span class="eyebrow">${label(category)}</span><h1>${label(product)}</h1><p class="size-line">${product[language === 'ar' ? 'sizeAr' : 'sizeFr']}</p><div class="detail-price">${money(product.price)}<small>${t('Prix indicatif pour la maquette','ثمن تجريبي للنموذج')}</small></div><div class="detail-box"><strong>${t('Format','الحجم')}</strong><p>${product[language === 'ar' ? 'sizeAr' : 'sizeFr']}</p></div><strong>${t('Quantité','الكمية')}</strong><div class="purchase-controls"><div class="quantity-control"><button type="button" id="qty-minus" aria-label="${t('Diminuer la quantité','نقص الكمية')}">−</button><input id="quantity" type="number" min="1" max="99" value="1" inputmode="numeric" aria-label="${t('Quantité','الكمية')}"><button type="button" id="qty-plus" aria-label="${t('Augmenter la quantité','زيد الكمية')}">+</button></div><button type="button" class="buy-now" id="buy-now">${t('Acheter maintenant','اشترِ الآن')}</button><button type="button" class="add-basket" id="add-basket">${t('Ajouter au panier','أضف إلى السلة')}</button></div><div class="added-message" id="added-message" role="status" aria-live="polite"></div><p class="detail-note">${t('La photo illustre la catégorie. WhatsApp s’ouvrira avec votre demande préremplie ; vous devrez appuyer sur Envoyer.','الصورة كتوضح الفئة. واتساب غادي يفتح برسالة واجدة؛ خاصك تضغط على إرسال.')}</p></div>`;
  const quantity = document.querySelector('#quantity');
  const getQuantity = () => Math.max(1,Math.min(99,Math.trunc(Number(quantity.value)||1)));
  document.querySelector('#qty-minus').addEventListener('click',()=>{quantity.value=Math.max(1,getQuantity()-1)});
  document.querySelector('#qty-plus').addEventListener('click',()=>{quantity.value=Math.min(99,getQuantity()+1)});
  quantity.addEventListener('change',()=>{quantity.value=getQuantity()});
  document.querySelector('#buy-now').addEventListener('click',()=>{
    location.href=MZCart.whatsappUrl(MZCart.singleMessage(product,getQuantity(),language));
  });
  document.querySelector('#add-basket').addEventListener('click',()=>{
    MZCart.add(product.id,getQuantity());
    document.querySelector('#added-message').innerHTML=`${t('Ajouté au panier.','تزاد للسلة.')} <a href="basket.html${language==='ar'?'?lang=ar':''}">${t('Voir le panier →','شوف السلة ←')}</a>`;
  });
  document.querySelector('#related-grid').innerHTML = catalog.products.filter(p => p.category === product.category && p.id !== product.id).map(productCard).join('');
}
function renderBasket() {
  document.title = `${t('Panier','السلة')} — Moul Zri3a`;
  const items=MZCart.details();
  const list=document.querySelector('#basket-items');
  const summary=document.querySelector('#basket-summary');
  if (!items.length) {
    list.innerHTML=`<div class="empty-basket"><h2>${t('Votre panier est vide','السلة فارغة')}</h2><p>${t('Choisissez des produits dans les catégories pour préparer votre demande.','اختار منتوجات من الفئات باش توجد الطلب ديالك.')}</p><a href="${homeUrl()}">${t('Voir les catégories','شوف الفئات')}</a></div>`;
    summary.innerHTML='';
    return;
  }
  list.innerHTML=items.map(({product,quantity})=>{
    const category=catalog.categories.find(c=>c.id===product.category);
    return `<div class="cart-line" data-id="${product.id}"><img src="${category.image}" alt="${label(category)}"><div><h2><a href="${productUrl(product.id)}">${label(product)}</a></h2><p>${product[language==='ar'?'sizeAr':'sizeFr']} · ${money(product.price)}</p><div class="line-actions"><div class="quantity-control"><button type="button" data-action="minus" aria-label="${t('Diminuer','نقص')}">−</button><input type="number" min="1" max="99" value="${quantity}" inputmode="numeric" aria-label="${t('Quantité','الكمية')}"><button type="button" data-action="plus" aria-label="${t('Augmenter','زيد')}">+</button></div><button class="remove" type="button" data-action="remove">${t('Retirer','حيد')}</button></div></div><span class="line-total">${money(product.price*quantity)}</span></div>`;
  }).join('');
  summary.innerHTML=`<h2>${t('Récapitulatif','ملخص الطلب')}</h2><div class="summary-row"><span>${t('Articles','المنتوجات')}</span><strong>${MZCart.count()}</strong></div><div class="summary-row"><span>${t('Sous-total indicatif','مجموع تقريبي')}</span><strong>${money(MZCart.total())}</strong></div><button type="button" class="confirm-order" id="confirm-order">${t('Confirmer sur WhatsApp','أكد عبر واتساب')}</button><p>${t('Les prix sont des exemples. Après confirmation, WhatsApp s’ouvrira avec les noms et quantités ; appuyez sur Envoyer. Le marchand confirmera le prix final.','الأثمنة غير أمثلة. من بعد التأكيد، واتساب غادي يفتح بالأسماء والكميات؛ ضغط على إرسال. التاجر غادي يأكد الثمن النهائي.')}</p>`;
  document.querySelector('#confirm-order').addEventListener('click',()=>{
    location.href=MZCart.whatsappUrl(MZCart.basketMessage(language));
  });
}
function renderMissing() {
  document.querySelector('#main').innerHTML = `<div class="not-found"><h1>${t('Page introuvable','الصفحة غير موجودة')}</h1><p>${t('Ce produit ou ce rayon ne fait pas partie de la maquette.','هاد المنتوج أو الفئة ما كايناش فالنموذج.')}</p><a href="${homeUrl()}">${t('Retour à l’accueil','العودة للرئيسية')}</a></div>`;
}
function refreshBasketCount(){document.querySelector('.basket-count').textContent=MZCart.count();document.querySelector('.basket-link').href='basket.html'+(language==='ar'?'?lang=ar':'')}
function render() {
  document.documentElement.lang = language;
  document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-fr]').forEach(el => el.textContent = el.dataset[language]);
  document.querySelectorAll('.home-link').forEach(el => el.href = homeUrl());
  document.querySelector('#lang').textContent = language === 'fr' ? 'العربية' : 'Français';
  document.querySelector('#year').textContent = new Date().getFullYear();
  if (page === 'category') renderCategory(); else if(page === 'product') renderProduct(); else renderBasket();
  refreshBasketCount();
}
document.querySelector('#basket-items')?.addEventListener('click',event=>{
  const button=event.target.closest('button[data-action]');if(!button)return;
  const row=button.closest('[data-id]');const id=row.dataset.id;const current=MZCart.read().find(item=>item.id===id)?.quantity||1;
  if(button.dataset.action==='remove')MZCart.remove(id);
  else MZCart.setQuantity(id, current+(button.dataset.action==='plus'?1:-1));
  renderBasket();refreshBasketCount();
});
document.querySelector('#basket-items')?.addEventListener('change',event=>{
  if(event.target.matches('input[type=number]')){MZCart.setQuantity(event.target.closest('[data-id]').dataset.id,event.target.value);renderBasket();refreshBasketCount()}
});
window.addEventListener('basketchange',refreshBasketCount);
document.querySelector('#lang').addEventListener('click', () => {
  language = language === 'fr' ? 'ar' : 'fr';
  const next = new URL(location.href);
  if (language === 'ar') next.searchParams.set('lang','ar'); else next.searchParams.delete('lang');
  history.replaceState(null,'',next);
  render();
});
render();
