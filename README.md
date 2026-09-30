# Moul Zri3a website

## Run locally
Use VS Code Live Server, or from this folder run `python3 -m http.server 5500` and open `http://localhost:5500`. A local server keeps the basket in the same browser origin across pages. Open `index.html`, choose a category, then choose a product.

## Order flow
- **Catalogue WhatsApp** opens `https://wa.me/c/212769611475`. The WhatsApp Business account must have an active catalog for that page to work. If WhatsApp gives you a different share link, replace this URL in all four HTML files.
- **Acheter maintenant / اشترِ الآن** opens a chat to `+212 769 611 475` with the current product, format, and selected quantity prefilled.
- **Ajouter au panier / أضف إلى السلة** stores the selected quantity in this browser. The basket page supports edits and removal. **Confirmer sur WhatsApp / أكد عبر واتساب** opens one prefilled message with all product names, formats, and quantities. The customer must still tap Send in WhatsApp. The basket remains saved until manually changed; opening WhatsApp does not prove the message was sent.
- Basket data stays in the customer's browser via localStorage. It is not shared across devices.

## Edit your catalog
- `js/catalog-data.js`: replace the 18 example names, sizes, prices in MAD, and category image paths with real information. Prices currently shown are examples.
- `js/cart.js`: edit `phone` if your business WhatsApp number changes; edit `singleMessage` and `basketMessage` for the wording sent to WhatsApp.
- `index.html`, `category.html`, `product.html`, `basket.html`: page structure
- `css/style.css`: homepage layout; `css/catalog.css`: category, product, and basket layouts
- `js/main.js`: homepage navigation and language switch; `js/catalog-pages.js`: inner-page rendering
- `assets/`: local photos and favicon. The sample photos illustrate categories, not each exact product.

## Photo sources
The hero photo is by Brenan Greene; examples by Zulfahmi Al Ridhawi (seeds and chips), Mustafa akın (candy), Danielle Suijkerbuijk (biscuits), and Martin Marek (ice cream), via Unsplash under the Unsplash License. Source pages:
- https://unsplash.com/photos/a-wooden-table-topped-with-bowls-filled-with-nuts-aMpt-42ar6E
- https://unsplash.com/photos/sunflower-seeds-are-in-a-bowl-and-on-a-spoon-WRmKXDx6h6c
- https://unsplash.com/photos/a-bowl-of-crunchy-potato-chips-3DjZJjFrvRE
- https://unsplash.com/photos/colorful-candy-pieces-and-chocolate-rocks-scattered-together-wXaiYOUSOx4
- https://unsplash.com/photos/chocolate-cookies-with-colorful-sugar-sprinkles-sfc2zNpo18M
- https://unsplash.com/photos/ice-cream-cone-with-red-and-white-ice-cream-D48D38MMsds

Fonts load from Google Fonts online and fall back to system fonts offline.
