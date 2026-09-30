# Moul Zri3a — where the code is

- `index.html` contains the actual HTML for the header, homepage, category view, product view, basket view, and footer. Start here to change headings, labels, and layout sections.
- `css/style.css` contains all styling: colors, sizes, spacing, mobile rules, and page layouts.
- `js/main.js` contains the example product list (`const catalog` at the top), plus the code that fills product names/prices into the HTML, switches French/Arabic, handles the basket, and opens WhatsApp.
- `assets/` contains the images and favicon.

**Why some parts of HTML are empty:** `index.html` has containers like `<div id="category-products"></div>`. JavaScript fills them with cards using the product list. This avoids writing and editing 18 separate product cards by hand.

## Open the site

Use VS Code Live Server on `index.html`. Or run `python3 -m http.server 5500` from this folder, then open `http://localhost:5500`. This also allows the basket to persist across views.

## Make it yours

1. Edit the text you see in `index.html`. French and Arabic alternatives use `data-fr` and `data-ar` on the same element.
2. Edit products and example MAD prices in `const catalog` near the top of `js/main.js`.
3. Replace images in `assets/`. Example photos show the category, not each exact product.
4. Edit colors and layout in `css/style.css`.
5. The business WhatsApp number is `WHATSAPP_NUMBER` near the top of `js/main.js`. The catalog link needs an active WhatsApp Business catalog.

Buy Now opens WhatsApp with one product and quantity. Add to basket saves multiple products locally in the browser. Confirm on WhatsApp opens a message with the names and quantities; the customer still taps Send. Replace example product details and prices before taking real orders.

## Photo sources

The example photos are from Unsplash under its license. Hero: Brenan Greene; seeds and chips: Zulfahmi Al Ridhawi; candy: Mustafa akın; biscuits: Danielle Suijkerbuijk; ice cream: Martin Marek. Source pages:
- https://unsplash.com/photos/a-wooden-table-topped-with-bowls-filled-with-nuts-aMpt-42ar6E
- https://unsplash.com/photos/sunflower-seeds-are-in-a-bowl-and-on-a-spoon-WRmKXDx6h6c
- https://unsplash.com/photos/a-bowl-of-crunchy-potato-chips-3DjZJjFrvRE
- https://unsplash.com/photos/colorful-candy-pieces-and-chocolate-rocks-scattered-together-wXaiYOUSOx4
- https://unsplash.com/photos/chocolate-cookies-with-colorful-sugar-sprinkles-sfc2zNpo18M
- https://unsplash.com/photos/ice-cream-cone-with-red-and-white-ice-cream-D48D38MMsds

Fonts use Google Fonts online and system fallbacks offline.
