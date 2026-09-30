const catalog = {
  categories: [
    {id:'zri3a', fr:'Zri3a & graines', ar:'الزريعة والحبوب', descriptionFr:'Les graines et les petites choses à grignoter, dans l’esprit du moul zri3a.', descriptionAr:'الزريعة والقرمشة اللي كنحبوها عند مول الزريعة.', image:'assets/seeds.jpg'},
    {id:'fruits-secs', fr:'Fruits secs & noix', ar:'الفواكه الجافة والمكسرات', descriptionFr:'Noix et fruits secs pour une pause ou pour partager.', descriptionAr:'مكسرات وفواكه جافة للذوق أو للمشاركة.', image:'assets/nuts-and-seeds.jpg'},
    {id:'bonbons', fr:'Bonbons & gommes', ar:'الحلوى والعلكة', descriptionFr:'Une sélection colorée pour les envies sucrées.', descriptionAr:'تشكيلة ملونة للي بغا شي حاجة حلوة.', image:'assets/candy.jpg'},
    {id:'biscuits', fr:'Biscuits & chocolat', ar:'البسكويت والشوكولا', descriptionFr:'Les douceurs qui accompagnent bien une petite pause.', descriptionAr:'بسكويت وشوكولا لوقت البنة.', image:'assets/biscuits.jpg'},
    {id:'chips', fr:'Chips & snacks', ar:'الشيبس والسناكس', descriptionFr:'Du salé et du croustillant à emporter ou à partager.', descriptionAr:'قرمشة مالحة للتقسيم أو لوقت الراحة.', image:'assets/chips.jpg'},
    {id:'glaces', fr:'Glaces', ar:'الكلاص', descriptionFr:'Une touche fraîche pour les journées chaudes.', descriptionAr:'حاجة باردة للأيام السخونة.', image:'assets/ice-cream.jpg'}
  ],
  // Demonstration names and prices. Replace with the shop's actual catalog before selling.
  products: [
    {id:'zri3a-tournesol',category:'zri3a',fr:'Graines de tournesol',ar:'زريعة عباد الشمس',sizeFr:'Sachet 100 g',sizeAr:'كيس 100 غ',price:12},
    {id:'zri3a-mix',category:'zri3a',fr:'Mélange de graines',ar:'خليط الزريعة',sizeFr:'Sachet 150 g',sizeAr:'كيس 150 غ',price:18},
    {id:'zri3a-grillee',category:'zri3a',fr:'Zri3a grillée',ar:'زريعة محمصة',sizeFr:'Sachet 250 g',sizeAr:'كيس 250 غ',price:25},
    {id:'amandes',category:'fruits-secs',fr:'Amandes',ar:'لوز',sizeFr:'Sachet 100 g',sizeAr:'كيس 100 غ',price:28},
    {id:'pistaches',category:'fruits-secs',fr:'Pistaches',ar:'فستق',sizeFr:'Sachet 100 g',sizeAr:'كيس 100 غ',price:38},
    {id:'melange-noix',category:'fruits-secs',fr:'Mélange de noix',ar:'خليط المكسرات',sizeFr:'Sachet 150 g',sizeAr:'كيس 150 غ',price:42},
    {id:'bonbons-fruites',category:'bonbons',fr:'Bonbons fruités',ar:'حلوى بالفواكه',sizeFr:'Sachet 100 g',sizeAr:'كيس 100 غ',price:15},
    {id:'gommes',category:'bonbons',fr:'Gommes assorties',ar:'علكة مشكلة',sizeFr:'Sachet',sizeAr:'كيس',price:10},
    {id:'mix-bonbons',category:'bonbons',fr:'Mix de bonbons',ar:'خليط الحلوى',sizeFr:'Sachet 200 g',sizeAr:'كيس 200 غ',price:24},
    {id:'biscuits-chocolat',category:'biscuits',fr:'Biscuits chocolat',ar:'بسكويت بالشوكولا',sizeFr:'Paquet',sizeAr:'علبة',price:18},
    {id:'biscuits-croquants',category:'biscuits',fr:'Biscuits croquants',ar:'بسكويت مقرمش',sizeFr:'Paquet',sizeAr:'علبة',price:14},
    {id:'chocolat',category:'biscuits',fr:'Chocolat à partager',ar:'شوكولا للمشاركة',sizeFr:'Tablette',sizeAr:'لوح',price:22},
    {id:'chips-classiques',category:'chips',fr:'Chips classiques',ar:'شيبس كلاسيك',sizeFr:'Paquet',sizeAr:'كيس',price:10},
    {id:'chips-epicees',category:'chips',fr:'Chips épicées',ar:'شيبس حار',sizeFr:'Paquet',sizeAr:'كيس',price:12},
    {id:'snack-croquant',category:'chips',fr:'Snack croquant',ar:'سناك مقرمش',sizeFr:'Paquet',sizeAr:'كيس',price:9},
    {id:'glace-vanille',category:'glaces',fr:'Glace vanille',ar:'كلاص فاني',sizeFr:'Une portion',sizeAr:'حصة واحدة',price:15},
    {id:'glace-fraise',category:'glaces',fr:'Glace fraise',ar:'كلاص فراولة',sizeFr:'Une portion',sizeAr:'حصة واحدة',price:15},
    {id:'glace-chocolat',category:'glaces',fr:'Glace chocolat',ar:'كلاص شوكولا',sizeFr:'Une portion',sizeAr:'حصة واحدة',price:18}
  ]
};
