/* Local basket. Replace example catalog/prices before using this for live sales. */
const MZCart = (() => {
  const key = 'moul-zri3a-basket-v1';
  const phone = '212769611475';
  let fallback = [];
  const clamp = (value) => Math.max(1, Math.min(99, Math.trunc(Number(value) || 1)));
  function read() {
    let raw;
    try { raw = JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; } catch { raw = fallback; }
    if (!Array.isArray(raw)) return [];
    return raw.filter(item => catalog.products.some(p => p.id === item.id))
      .map(item => ({id:item.id, quantity:clamp(item.quantity)}));
  }
  function save(items) {
    fallback = items;
    try { localStorage.setItem(key, JSON.stringify(items)); } catch { /* In private browsing, keep this page's basket in memory. */ }
    window.dispatchEvent(new Event('basketchange'));
  }
  function add(id, quantity=1) {
    if (!catalog.products.some(p => p.id === id)) return;
    const items=read(), existing=items.find(item => item.id === id);
    if (existing) existing.quantity=clamp(existing.quantity + clamp(quantity));
    else items.push({id,quantity:clamp(quantity)});
    save(items);
  }
  function setQuantity(id, quantity) {
    const items=read(); const item=items.find(item => item.id === id);
    if (!item) return;
    item.quantity=clamp(quantity); save(items);
  }
  function remove(id) { save(read().filter(item => item.id !== id)); }
  function details() { return read().map(item => ({...item,product:catalog.products.find(p => p.id === item.id)})); }
  function count() { return read().reduce((sum,item) => sum + item.quantity,0); }
  function total() { return details().reduce((sum,item) => sum + item.quantity*item.product.price,0); }
  function singleMessage(product,quantity,language) {
    const name=product[language], size=product[language === 'ar' ? 'sizeAr' : 'sizeFr'];
    return language === 'ar'
      ? `سلام، بغيت نطلب:\n• ${name} — ${size} × ${clamp(quantity)}\nواش متوفر؟ عافاك أكد لي الثمن النهائي.`
      : `Bonjour, je voudrais commander :\n• ${name} — ${size} × ${clamp(quantity)}\nEst-ce disponible ? Merci de confirmer le prix final.`;
  }
  function basketMessage(language) {
    const lines=details().map(({product,quantity}) => `• ${product[language]} — ${product[language === 'ar' ? 'sizeAr' : 'sizeFr']} × ${quantity}`);
    return language === 'ar'
      ? `سلام، بغيت نطلب هاد المنتوجات:\n${lines.join('\n')}\n\nعافاك أكد ليا التوفر والثمن النهائي.`
      : `Bonjour, je voudrais commander ces produits :\n${lines.join('\n')}\n\nMerci de confirmer leur disponibilité et le prix final.`;
  }
  function whatsappUrl(message) { return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`; }
  return {phone,read,add,setQuantity,remove,details,count,total,singleMessage,basketMessage,whatsappUrl};
})();
