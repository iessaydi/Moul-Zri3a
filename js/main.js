const catalog = {
  categories: [
    {id:'fruits-secs', fr:'Fruits secs & noix', ar:'الفواكه الجافة والمكسرات', descriptionFr:'Noix et fruits secs pour une pause ou pour partager.', descriptionAr:'مكسرات وفواكه جافة للذوق أو للمشاركة.', image:'assets/nuts-and-seeds.jpg'},
    {id:'biscuits', fr:'Biscuits & chocolat', ar:'البسكويت والشوكولا', descriptionFr:'Les douceurs qui accompagnent bien une petite pause.', descriptionAr:'بسكويت وشوكولا لوقت البنة.', image:'assets/biscuits.jpg'},
    {id:'chips', fr:'Chips & snacks', ar:'الشيبس والسناكس', descriptionFr:'Du salé et du croustillant à emporter ou à partager.', descriptionAr:'لكل وقت', image:'assets/chips.jpg'},
    {id:'drinks', fr:'Eau & boissons', ar:'الماء والمشروبات', descriptionFr:'Une gorgée de fraîcheur.', descriptionAr:'برد على قلبك وانتعش!', image:'assets/drinks-cover.png'},
    {id:'bonbons', fr:'Bonbons & gommes', ar:'الحلوى والعلكة', descriptionFr:'Une sélection colorée pour les envies sucrées.', descriptionAr:'شي حاجة حلوة', image:'assets/candy.jpg'},
    {id:'glaces', fr:'Glaces', ar:'الكلاص', descriptionFr:'Une touche fraîche pour les journées chaudes.', descriptionAr:'باش تبرد الجو', image:'assets/ice-cream.jpg'}
  ],
  // Demonstration names and prices. Replace with the shop's actual catalog before selling.
  products: [
    {id:'noix-cajou',category:'fruits-secs',fr:'Noix de cajou',ar:'كاجو',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:10,image:'assets/Cashews.png',hideSize:true},
    {id:'mais-grille',category:'fruits-secs',fr:'Maïs grillé',ar:'الذرة',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:5,image:'assets/Corn.png',hideSize:true},
    {id:'cacahuetes-beldi',category:'fruits-secs',fr:'Cacahuètes beldi',ar:'كاوكاو بلدي',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:4,image:'assets/Penuts Baldi.png',hideSize:true},
    {id:'cacahuetes',category:'fruits-secs',fr:'Cacahuètes',ar:'كاوكاو',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:4,image:'assets/Penuts Normal.png',hideSize:true},
    {id:'pistaches',category:'fruits-secs',fr:'Pistaches',ar:'بيستاش',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:10,image:'assets/Pistachios.png',hideSize:true},
    {id:'graines-tournesol',category:'fruits-secs',fr:'Graines de tournesol',ar:'زريعة كحلة',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:4,image:'assets/Zri3a Ka7la.png',hideSize:true},
    {id:'amandes',category:'fruits-secs',fr:'Amandes nature',ar:'لوز عادي',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:6,image:'assets/Raw Almonds.png',hideSize:true},
    {id:'amandes-salees',category:'fruits-secs',fr:'Amandes salées',ar:'لوز مالح',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:8,image:'assets/Salted Almonds.png',hideSize:true},
    {id:'cacahuetes-sucrees',category:'fruits-secs',fr:'Cacahuètes sucrées',ar:'كاوكاو حلو',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:4,image:'assets/Sweet Peanuts (1).png',hideSize:true},
    {id:'noix',category:'fruits-secs',fr:'Noix',ar:'كركاع',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:8,image:'assets/Walnuts.png',hideSize:true},
    {id:'graines-courge-salees',category:'fruits-secs',fr:'Graines de courge salées',ar:'زريعة بيضا',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:6,image:'assets/Zri3a Bida Mal7a.png',hideSize:true},
    {id:'graines-courge-non-salees',category:'fruits-secs',fr:'Graines de courge non salées',ar:'زريعة بيضا مسوسة',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:6,image:'assets/Zri3a Bida Mssousa.png',hideSize:true},
    {id:'raisins-secs',category:'fruits-secs',fr:'Raisins secs',ar:'زبيب',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:3,image:'assets/Raisins.png',hideSize:true},
    {id:'cacahuetes-fromage-piment',category:'fruits-secs',fr:'Cacahuètes au fromage et au piment',ar:'كاوكاو فرماج حار',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:5,image:'assets/Chilli Cheese Peanuts.png',hideSize:true},
    {id:'cacahuetes-fromage',category:'fruits-secs',fr:'Cacahuètes au fromage',ar:'كاوكاو فرماج',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:5,image:'assets/Cheese Peanuts.png',hideSize:true},
    {id:'melange-fruits-secs',category:'fruits-secs',fr:'Mélange de fruits secs',ar:'مخلوط الفواكه الجافة',sizeFr:'Paquet 50 g',sizeAr:'كيس 50 غ',listingFr:'50 g',listingAr:'50 غ',price:7,image:'assets/Mixed dried fruits (1).png',hideSize:true},
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
    {id:'magnum-double-caramel',category:'glaces',fr:'Magnum double caramel',ar:'ماݣنوم دوبل كراميل',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:23,image:'assets/Magnum Double Caramel 23dh.png',hideSize:true},
    {id:'magnum-double-chocolat',category:'glaces',fr:'Magnum double chocolat',ar:'ماݣنوم دوبل شكلاط',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:22,image:'assets/Magnum Double Chocolate 22dh.png',hideSize:true},
    {id:'kitkat',category:'glaces',fr:'KitKat',ar:'كيت كات',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:18,image:'assets/Kitkat 18dh.png',hideSize:true},
    {id:'milka-vanille-chocolat',category:'glaces',fr:'Milka vanille et chocolat',ar:'ميلكا فاني وشكلاط',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:18,image:'assets/Milka Vanilla & Chocolate Swirl 18dh.png',hideSize:true},
    {id:'snickers',category:'glaces',fr:'Snickers',ar:'سنيكرز',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:18,image:'assets/Snickers 18dh.png',hideSize:true},
    {id:'titan-caramel',category:'glaces',fr:'Titan caramel',ar:'تيتان كراميل',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:13,image:'assets/Titan Caramel 13dh.png',hideSize:true},
    {id:'titan-fruits-exotiques',category:'glaces',fr:'Titan fruits exotiques',ar:'تيتان فواكه استوائية',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:13,image:'assets/Titan Fruits Exotiques-13-mad.png',hideSize:true},
    {id:'titan-pistache',category:'glaces',fr:'Titan pistache',ar:'تيتان بيستاش',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:13,image:'assets/Titan Pistachio-13-mad.png',hideSize:true},
    {id:'titan-vanille',category:'glaces',fr:'Titan vanille',ar:'تيتان فاني',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:13,image:'assets/Titan Vanilla-13-mad.png',hideSize:true},
    {id:'kepos-vanille',category:'glaces',fr:'Kepos vanille',ar:'كيبوس فاني',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:6,image:'assets/Kepos Vanille 6dh.png',hideSize:true},
    {id:'super-pingouin-chocolat',category:'glaces',fr:'Super Pingouin chocolat',ar:'سوبر بينݣوان شكلاط',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:5,image:'assets/Super Pingouin Chocolate 5dh.png',hideSize:true},
    {id:'super-pingouin-vanille',category:'glaces',fr:'Super Pingouin vanille',ar:'سوبر بينݣوان فاني',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:5,image:'assets/Super Pingouin Vanilla 5dh.png',hideSize:true},
    {id:'surfy-citron',category:'glaces',fr:'Surfy citron',ar:'سورفي حامض',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:5,image:'assets/Surfy Citron 5dh.png',hideSize:true},
    {id:'surfy-fraise',category:'glaces',fr:'Surfy fraise',ar:'سورفي فريز',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:5,image:'assets/Surfy Fraise 5dh.png',hideSize:true},
    {id:'surfy-orange',category:'glaces',fr:'Surfy orange',ar:'سورفي ليمون',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:5,image:'assets/Surfy Orange 5dh.png',hideSize:true},
    {id:'henrys',category:'glaces',fr:'Henry’s',ar:'هنريز',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:3,image:"assets/Henry's 3dh.png",hideSize:true},
    {id:'kismo-mangue',category:'glaces',fr:'Kismo mangue',ar:'كيسمو مانݣا',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:3,image:'assets/Kismo Mango 3dh.png',hideSize:true},
    {id:'pingo-chocolat',category:'glaces',fr:'Pingo chocolat',ar:'بينݣو شكلاط',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:3,image:'assets/Pingo Chocolat 3dh.png',hideSize:true},
    {id:'pingo-fraise',category:'glaces',fr:'Pingo fraise',ar:'بينݣو فريز',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:3,image:'assets/Pingo Fraise 3dh.png',hideSize:true},
    {id:'pingo-vanille',category:'glaces',fr:'Pingo vanille',ar:'بينݣو فاني',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:3,image:'assets/Pingo Vanille 3dh.png',hideSize:true},
    {id:'flipo',category:'glaces',fr:'Flipo',ar:'فليبو',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:2,image:'assets/Flipo 2dh.png',hideSize:true},
    {id:'polo-fraise-banane',category:'glaces',fr:'Polo fraise-banane',ar:'بولو فريز وبنان',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:1,image:'assets/Polo Fraise Banane 1dh.png',hideSize:true},
    {id:'polo-orange-citron',category:'glaces',fr:'Polo orange-citron',ar:'بولو ليمون وحامض',sizeFr:'À la pièce',sizeAr:'بالحبة',listingFr:'À la pièce',listingAr:'بالحبة',price:1,image:'assets/Polo Oragne Citron 1dh.png',hideSize:true},
    {id:'ain-atlas-12x50cl',category:'drinks',fr:'Aïn Atlas',ar:'عين الأطلس',sizeFr:'12 × 50 cl',sizeAr:'12 × 50 سل',listingFr:'12 × 50 cl',listingAr:'12 × 50 سل',price:36,image:'assets/Ain Atlas Pack 12x50cl-36dh.png'},
    {id:'ain-saiss-5l',category:'drinks',fr:'Aïn Saïss',ar:'عين السايس',sizeFr:'5 L',sizeAr:'5 لتر',listingFr:'5 L',listingAr:'5 لتر',price:13,image:'assets/Ain Saiss-5L-13dh.png'},
    {id:'ain-ifrane-5l',category:'drinks',fr:'Aïn Ifrane',ar:'عين إفران',sizeFr:'5 L',sizeAr:'5 لتر',listingFr:'5 L',listingAr:'5 لتر',price:13,image:'assets/Ain-Ifrane-5L-13dh.png'},
    {id:'bahia-5l',category:'drinks',fr:'Bahia',ar:'باهية',sizeFr:'5 L',sizeAr:'5 لتر',listingFr:'5 L',listingAr:'5 لتر',price:12,image:'assets/Bahia 5l-12dh.png'},
    {id:'sidi-ali-12x33cl',category:'drinks',fr:'Sidi Ali',ar:'سيدي علي',sizeFr:'12 × 33 cl',sizeAr:'12 × 33 سل',listingFr:'12 × 33 cl',listingAr:'12 × 33 سل',price:24,image:'assets/Sidi Ali 12*33cl-24dh.png'},
    {id:'sidi-ali-4x2l',category:'drinks',fr:'Sidi Ali',ar:'سيدي علي',sizeFr:'4 × 2 L',sizeAr:'4 × 2 لتر',listingFr:'4 × 2 L',listingAr:'4 × 2 لتر',price:24,image:'assets/sidi ali pack 4x2l-24dh.png'},
    {id:'sidi-ali-6x1-5l',category:'drinks',fr:'Sidi Ali',ar:'سيدي علي',sizeFr:'6 × 1.5 L',sizeAr:'6 × 1.5 لتر',listingFr:'6 × 1.5 L',listingAr:'6 × 1.5 لتر',price:30,image:'assets/sidi ali pack 6x1.5l-30dh.png'},
    {id:'coca-classic-25cl',category:'drinks',fr:'Coca-Cola Classic',ar:'كوكا كولا كلاسيك',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:5.5,image:'assets/Coca-Cola Classic Can 25cl-5.50dh.png'},
    {id:'fanta-citron-25cl',category:'drinks',fr:'Fanta citron',ar:'فانتا ليمون',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:5.5,image:'assets/fanta-lemon-5.50dh-25cl.png'},
    {id:'hawai-25cl',category:'drinks',fr:'Hawaï',ar:'هواي',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:5.5,image:'assets/Hawai-5.50dh-25cl .png'},
    {id:'poms-25cl',category:'drinks',fr:'Poms',ar:'بومز',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:5.5,image:'assets/Poms Can 25 CL-5.50dh.png'},
    {id:'sprite-citron-25cl',category:'drinks',fr:'Sprite citron',ar:'سبرايت ليمون',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:5.5,image:'assets/Sprite Lemon Can 25 cl-5.50dh.png'},
    {id:'oulmes-fruits-rouges-25cl',category:'drinks',fr:'Oulmès fruits rouges',ar:'أولمس فواكه حمراء',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:9,image:'assets/Oulmès Fruits Rouges 25cl-9dh.png'},
    {id:'oulmes-tropical-25cl',category:'drinks',fr:'Oulmès tropical',ar:'أولمس تروبيكال',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:9,image:'assets/Oulmès Tropical 25cl-9dh.png'},
    {id:'oulmes-virgin-mojito-25cl',category:'drinks',fr:'Oulmès virgin mojito',ar:'أولمس فيرجن موهيتو',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:9,image:'assets/Oulmès Virgin Mojito 25cl-9dh.png'},
    {id:'burn-25cl',category:'drinks',fr:'Burn',ar:'برن',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:12,image:'assets/burn-25cl__12dh.png'},
    {id:'hell-classic-25cl',category:'drinks',fr:'HELL Classic',ar:'هيل كلاسيك',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:12,image:'assets/HELL_Classic 25cl_12dh.png'},
    {id:'predator-25cl',category:'drinks',fr:'Predator',ar:'بريداتور',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:7,image:'assets/predator 7dh 25CL.png'},
    {id:'red-bull-25cl',category:'drinks',fr:'Red Bull',ar:'ريد بول',sizeFr:'25 cl',sizeAr:'25 سل',listingFr:'25 cl',listingAr:'25 سل',price:20,image:'assets/REDBULL 25CL-20dh.png'},
    {id:'valencia-orange-1l',category:'drinks',fr:'Valencia orange',ar:'فالنسيا برتقال',sizeFr:'1 L',sizeAr:'1 لتر',listingFr:'1 L',listingAr:'1 لتر',price:16,image:'assets/Juice Valencia Orange 1L-16dh.png'},
    {id:'valencia-orange-mangue-1l',category:'drinks',fr:'Valencia orange et mangue',ar:'فالنسيا برتقال ومانجو',sizeFr:'1 L',sizeAr:'1 لتر',listingFr:'1 L',listingAr:'1 لتر',price:16,image:'assets/Valencia Orange & Mango  1L-16dh.png'},
    {id:'valencia-ananas-1l',category:'drinks',fr:'Valencia ananas',ar:'فالنسيا أناناس',sizeFr:'1 L',sizeAr:'1 لتر',listingFr:'1 L',listingAr:'1 لتر',price:16,image:'assets/Valencia Pineapple  1L-16dh.png'},
    {id:'coca-1l',category:'drinks',fr:'Coca-Cola',ar:'كوكا كولا',sizeFr:'1 L',sizeAr:'1 لتر',listingFr:'1 L',listingAr:'1 لتر',price:8,image:'assets/coca-8dh-1l.png'},
    {id:'sprite-1l',category:'drinks',fr:'Sprite',ar:'سبرايت',sizeFr:'1 L',sizeAr:'1 لتر',listingFr:'1 L',listingAr:'1 لتر',price:8,image:'assets/sprite-8dh-1l.png'},
    {id:'hawai-tropical-1l',category:'drinks',fr:'Hawaï tropical',ar:'هواي تروبيكال',sizeFr:'1 L',sizeAr:'1 لتر',listingFr:'1 L',listingAr:'1 لتر',price:9,image:'assets/Tropical Hawaii 1l-9dh.png'}
  ]
};

// WhatsApp configuration. Use the number without + or spaces.
const WHATSAPP_NUMBER = '212769611475';
const WHATSAPP_CATALOG = `https://wa.me/c/${WHATSAPP_NUMBER}`;
const BASKET_KEY = 'moul-zri3a-basket-v1';
const DELIVERY_MINIMUM = 25;
const DELIVERY_FEE = 5;
const FREE_DELIVERY_THRESHOLD = 50;
let language = new URLSearchParams(location.search).get('lang') === 'ar' ? 'ar' : 'fr';
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
const routeUrl = (params = {}) => {
  const localPreview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);
  const path = params.category ? `/category/${encodeURIComponent(params.category)}`
    : params.product ? `/product/${encodeURIComponent(params.product)}`
      : params.basket ? '/basket'
        : params.section === 'categories' ? '/categories' : '/';
  const query = new URLSearchParams();
  if (language === 'ar') query.set('lang', 'ar');
  if (localPreview) {
    Object.entries(params).forEach(([key, value]) => query.set(key, value));
    const search = query.toString();
    return search ? `?${search}` : './';
  }
  const search = query.toString();
  return search ? `${path}?${search}` : path;
};
const categoryLink = (id) => routeUrl({category: id});
const productLink = (id) => routeUrl({product: id});
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
function updateProductCardControls(id) {
  const quantity = readBasket().find(item => item.id === id)?.quantity || 0;
  document.querySelectorAll(`.product-card[data-id="${id}"]`).forEach(card => {
    card.classList.toggle('has-quantity', quantity > 0);
  });
  document.querySelectorAll(`.product-card[data-id="${id}"] .card-add-control`).forEach(actions => {
    const product = productById(id);
    actions.innerHTML = quantity
      ? `<div class="card-quantity" aria-label="${t('Quantité dans le panier', 'الكمية فالسلة')}">
          <button type="button" data-action="card-minus" aria-label="${t('Diminuer', 'نقص')}">−</button>
          <span aria-live="polite">${quantity}</span>
          <button type="button" data-action="card-plus" aria-label="${t('Augmenter', 'زيد')}">+</button>
        </div>`
      : `<button class="card-add-button" type="button" data-action="card-add" aria-label="${t('Ajouter', 'أضف')} ${nameOf(product)}">+</button>`;
  });
}
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
  document.querySelector('#home-link').href = routeUrl();
  document.querySelector('#footer-home-link').href = routeUrl();
  document.querySelector('#categories-link').href = routeUrl({section: 'categories'});
  document.querySelector('#categories-cta').href = routeUrl({section: 'categories'});
  document.querySelector('#basket-link').href = routeUrl({basket: '1'});
  document.querySelector('#product-request-link').href = whatsappLink(t(
    "Bonjour, je n'ai pas trouvé le produit que je cherche. Pouvez-vous me renseigner ?",
    'سلام، ما لقيتش المنتوج اللي كنقلب عليه. واش تقدروا تعاونوني؟'
  ));
  document.querySelector('#language-button').textContent = language === 'fr' ? 'العربية' : 'Français';
  document.querySelector('#year').textContent = new Date().getFullYear();
  updateBasketCount();
}
function breadcrumb(parts) {
  return `<a href="${routeUrl()}">${t('Accueil', 'الرئيسية')}</a>${parts.map(part => `<span>/</span>${part}`).join('')}`;
}
function productCard(product) {
  const quantity = readBasket().find(item => item.id === product.id)?.quantity || 0;
  return `<article class="product-card${quantity ? ' has-quantity' : ''}" data-id="${product.id}">
    <a class="product-card-link" href="${productLink(product.id)}">
      <img src="${imageOf(product)}" alt="${nameOf(categoryById(product.category))}" loading="lazy">
      <span class="card-content"><h3>${nameOf(product)}</h3><p>${product[language === 'ar' ? 'listingAr' : 'listingFr'] || sizeOf(product)}</p></span>
    </a>
    <div class="price-line"><span>${money(product.price)}</span><span class="card-add-control">${quantity
      ? `<div class="card-quantity" aria-label="${t('Quantité dans le panier', 'الكمية فالسلة')}">
          <button type="button" data-action="card-minus" aria-label="${t('Diminuer', 'نقص')}">−</button>
          <span aria-live="polite">${quantity}</span>
          <button type="button" data-action="card-plus" aria-label="${t('Augmenter', 'زيد')}">+</button>
        </div>`
      : `<button class="card-add-button" type="button" data-action="card-add" aria-label="${t('Ajouter', 'أضف')} ${nameOf(product)}">+</button>`}
    </span></div>
  </article>`;
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
      <a class="dark-button" href="${routeUrl({section: 'categories'})}">${t('Voir les catégories', 'شوف الفئات')}</a></div>`;
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
  const params = new URLSearchParams(location.search);
  const categoryPath = location.pathname.match(/\/category\/([^/]+)\/?$/);
  const productPath = location.pathname.match(/\/product\/([^/]+)\/?$/);
  const categoryId = categoryPath ? decodeURIComponent(categoryPath[1]) : params.get('category');
  const productId = productPath ? decodeURIComponent(productPath[1]) : params.get('product');
  const showBasket = location.pathname === '/basket' || params.has('basket');
  const showCategories = location.pathname === '/categories' || params.get('section') === 'categories';
  updateSharedText();
  let selected = 'home';
  if (categoryId && renderCategory(categoryId)) selected = 'category';
  else if (productId && renderProduct(productId)) selected = 'product';
  else if (showBasket) { renderBasket(); selected = 'basket'; }
  else renderHome();
  Object.entries(views).forEach(([name, element]) => { element.hidden = name !== selected; });
  if (showCategories) requestAnimationFrame(() => document.querySelector('#categories').scrollIntoView());
  else window.scrollTo(0, 0);
}

// Button clicks update quantity, basket, or open WhatsApp.
document.querySelector('main').addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'card-add' || action === 'card-plus' || action === 'card-minus') {
    const id = button.closest('.product-card')?.dataset.id;
    if (!id) return;
    const quantity = readBasket().find(item => item.id === id)?.quantity || 0;
    if (action === 'card-minus' && quantity <= 1) removeFromBasket(id);
    else if (action === 'card-minus') changeBasketQuantity(id, quantity - 1);
    else addToBasket(id, 1);
    updateProductCardControls(id);
  } else if (action === 'product-plus' || action === 'product-minus') {
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
    document.querySelector('#product-status').innerHTML = `${t('Ajouté au panier.', 'تزاد للسلة.')} <a href="${routeUrl({basket: '1'})}">${t('Voir le panier →', 'شوف السلة ←')}</a>`;
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
  const params = new URLSearchParams(location.search);
  if (language === 'ar') params.set('lang', 'ar');
  else params.delete('lang');
  const search = params.toString();
  history.replaceState(null, '', `${location.pathname}${search ? `?${search}` : ''}`);
  route();
});
window.addEventListener('popstate', route);
route();
