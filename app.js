const DESTINATIONS = [
  {
    id: 'kaziranga',
    name: 'Kaziranga National Park',
    state: 'Assam',
    category: 'Wildlife',
    season: 'Nov–Apr',
    days: '2–3 days',
    budgetINR: 4200,
    permit: 'None',
    highlights: [
      'Dawn jeep & elephant safaris across Kohora and Bagori ranges',
      'Home to over two-thirds of the world’s greater one-horned rhinos',
      'Brahmaputra floodplain wetlands and heritage Assam tea estates'
    ],
    food: 'Masor Tenga (tangy fish curry) & Assamese Thali with Joha rice',
    airport: 'Jorhat (JRH) · 96 km / Guwahati (GAU) · 215 km',
    summary: 'A UNESCO World Heritage grassland sanctuary where morning fog lifts over golden elephant grass, wild water buffalo, and grazing one-horned rhinos.',
    lat: 26.5775,
    lon: 93.1711,
    image: '/src/assets/images/dest_kaziranga_1795236882952.jpg',
    fallbackGradient: 'linear-gradient(135deg, #3c4f2b 0%, #8a6432 100%)'
  },
  {
    id: 'majuli',
    name: 'Majuli River Island',
    state: 'Assam',
    category: 'Lakes & Islands',
    season: 'Oct–Mar',
    days: '2 days',
    budgetINR: 2800,
    permit: 'None',
    highlights: [
      '16th-century Vaishnavite Satras including Kamalabari and Auniati',
      'Traditional bamboo mask-making workshops at Samaguri Satra',
      'Golden-hour ferry crossing from Nimati Ghat & Mising stilt villages'
    ],
    food: 'Pura Maas (roasted river fish) & Apong (traditional Mising rice brew)',
    airport: 'Jorhat (JRH) · 30 km + 1 hr Brahmaputra ferry',
    summary: 'One of the world’s largest inhabited river islands, moving to the quiet rhythm of monastic chants, handloom weaving, and wide Brahmaputra sunsets.',
    lat: 26.95,
    lon: 94.1667,
    image: '/src/assets/images/dest_majuli_1795236883314.jpg',
    fallbackGradient: 'linear-gradient(135deg, #274437 0%, #b56c35 100%)'
  },
  {
    id: 'sohra',
    name: 'Sohra (Cherrapunji)',
    state: 'Meghalaya',
    category: 'Waterfalls & Caves',
    season: 'Oct–May',
    days: '2–3 days',
    budgetINR: 3600,
    permit: 'None',
    highlights: [
      '3,000-step rainforest descent to the Nongriat Double-Decker Living Root Bridge',
      'Nohkalikai Falls plunging 340 m into an emerald limestone pool',
      'Mawsmai and Arwah limestone caves overlooking misty Bangladesh plains'
    ],
    food: 'Jadoh (spiced red rice with pork/chicken) & Dohneiiong (black sesame gravy)',
    airport: 'Shillong Umroi (SHL) · 82 km / Guwahati (GAU) · 148 km',
    summary: 'High on the Khasi plateau, ancient rubber fig roots are woven over decades into living bridges suspended above emerald canyons and cloud-swept waterfalls.',
    lat: 25.2702,
    lon: 91.7323,
    image: '/src/assets/images/dest_sohra_1795236883383.jpg',
    fallbackGradient: 'linear-gradient(135deg, #0f382d 0%, #2d6a54 100%)'
  },
  {
    id: 'dawki',
    name: 'Dawki & Shnongpdeng',
    state: 'Meghalaya',
    category: 'Lakes & Islands',
    season: 'Nov–Apr',
    days: '1–2 days',
    budgetINR: 3200,
    permit: 'None',
    highlights: [
      'Wooden boat rides over glass-clear Umngot River pebbles in winter',
      'Riverside camping, kayaking, and cliff jumping at Shnongpdeng',
      'Mawlynnong village skywalk en route along the Indo-Bangladesh border'
    ],
    food: 'Smoked Meghalaya pork with bamboo shoot & local Khasi red tea',
    airport: 'Shillong Umroi (SHL) · 110 km / Guwahati (GAU) · 175 km',
    summary: 'Between November and March, the Umngot River turns so transparent that country boats appear to float in mid-air above sunlit stones.',
    lat: 25.1844,
    lon: 92.0176,
    image: '/src/assets/images/dest_dawki_1795236882591.jpg',
    fallbackGradient: 'linear-gradient(135deg, #0d4b43 0%, #2a8a78 100%)'
  },
  {
    id: 'tawang',
    name: 'Tawang Monastery & Pass',
    state: 'Arunachal Pradesh',
    category: 'Mountains & Monasteries',
    season: 'Mar–Jun, Oct–Nov',
    days: '4–5 days',
    budgetINR: 4800,
    permit: 'ILP',
    highlights: [
      '400-year-old Tawang Monastery, India’s largest Buddhist gompa',
      'High-altitude crossing via Sela Pass (13,700 ft) & glacial Sela Lake',
      'Nuranang (Jang) Waterfall, Sangetsar Lake, and Tawang War Memorial'
    ],
    food: 'Monpa Thukpa, Zan (millet porridge) & butter tea with fermented yak cheese',
    airport: 'Tezpur (TEZ) · 320 km / Guwahati (GAU) · 445 km',
    summary: 'Perched at 10,000 feet in the Eastern Himalayas, Tawang pairs windswept prayer flags and snow-draped passes with centuries-old Monpa hospitality.',
    lat: 27.5861,
    lon: 91.8594,
    image: '/src/assets/images/dest_tawang_1795236882378.jpg',
    fallbackGradient: 'linear-gradient(135deg, #1b314b 0%, #8f3b28 100%)'
  },
  {
    id: 'ziro',
    name: 'Ziro Valley',
    state: 'Arunachal Pradesh',
    category: 'Valleys & Culture',
    season: 'Mar–Oct',
    days: '3 days',
    budgetINR: 3400,
    permit: 'ILP',
    highlights: [
      'UNESCO-tentative Apatani villages of Hong, Hari, and Bulla',
      'Sustainable wet-rice cum pisciculture terraces framed by blue pines',
      'Talley Valley Wildlife Sanctuary trails & September Ziro Music Festival'
    ],
    food: 'Pika Pila (bamboo shoot pickle), smoked fish & Apong millet wine',
    airport: 'Hollongi Itanagar (HGI) · 125 km / Lilabari (IXI) · 100 km',
    summary: 'A tranquil pine-ringed plateau where the Apatani community cultivates fish and paddy together without machines across sweeping emerald terraces.',
    lat: 27.5449,
    lon: 93.8197,
    image: '/src/assets/images/dest_ziro_1795236882665.jpg',
    fallbackGradient: 'linear-gradient(135deg, #1d4a32 0%, #5c8a47 100%)'
  },
  {
    id: 'loktak',
    name: 'Loktak Lake',
    state: 'Manipur',
    category: 'Lakes & Islands',
    season: 'Oct–Mar',
    days: '2 days',
    budgetINR: 3000,
    permit: 'ILP',
    highlights: [
      'Keibul Lamjao, the world’s only floating national park and Sangai deer habitat',
      'Sunrise panoramas over circular phumdi rings from Sendra Hillock',
      'INA Memorial at Moirang and historic Ima Keithel market in Imphal'
    ],
    food: 'Eromba (fermented fish & mashed vegetables), Chamthong & Chak-hao black rice kheer',
    airport: 'Imphal Tulihal (IMF) · 45 km',
    summary: 'The largest freshwater lake in North East India, dotted with drifting circular biomass islands called phumdis where fishermen cast nets at first light.',
    lat: 24.5594,
    lon: 93.8143,
    image: '/src/assets/images/dest_loktak_1795236882477.jpg',
    fallbackGradient: 'linear-gradient(135deg, #1a4358 0%, #3d7569 100%)'
  },
  {
    id: 'dzukou',
    name: 'Dzukou Valley',
    state: 'Nagaland',
    category: 'Valleys & Culture',
    season: 'Jun–Sep, Nov–Feb',
    days: '2–3 days',
    budgetINR: 3300,
    permit: 'ILP',
    highlights: [
      'Ridge-line trek from Viswema or Zakhama into velvet dwarf-bamboo hills',
      'Rare seasonal pink and white Dzukou lilies blooming in June–July',
      'Side visit to Khonoma—Asia’s first green village near Kohima'
    ],
    food: 'Smoked pork with Akhuni (fermented soybean) & Naga Raja Mircha chutney',
    airport: 'Dimapur (DMU) · 92 km (via Kohima)',
    summary: 'Cradled at 2,452 metres along the Nagaland-Manipur border, Dzukou unfolds as an endless green amphitheatre bisected by a crystalline stream.',
    lat: 25.5653,
    lon: 94.063,
    image: '/src/assets/images/dest_dzukou_1795236882512.jpg',
    fallbackGradient: 'linear-gradient(135deg, #1e4b30 0%, #587c3c 100%)'
  },
  {
    id: 'gangtok',
    name: 'Gangtok & Tsomgo',
    state: 'Sikkim',
    category: 'Mountains & Monasteries',
    season: 'Mar–May, Oct–Dec',
    days: '3–4 days',
    budgetINR: 4400,
    permit: 'None',
    highlights: [
      'Sunrise view of Mount Kanchenjunga from Tashi Viewpoint & Rumtek Monastery',
      'High-altitude glacial Tsomgo (Changu) Lake and Nathula Pass excursion',
      'Car-free MG Marg promenade and Namgyal Institute of Tibetology'
    ],
    food: 'Phagshapa, steamed pork/veg Momos, Gundruk soup & Kinema curry',
    airport: 'Pakyong (PYG) · 30 km / Bagdogra (IXB) · 125 km',
    summary: 'Sikkim’s hillside capital balances clean pedestrian boulevards, sacred Kagyu monasteries, and jaw-dropping morning views of Kanchenjunga.',
    lat: 27.3389,
    lon: 88.6065,
    image: '/src/assets/images/dest_gangtok_1795236883345.jpg',
    fallbackGradient: 'linear-gradient(135deg, #21374d 0%, #b45735 100%)'
  },
  {
    id: 'unakoti',
    name: 'Unakoti Rock Carvings',
    state: 'Tripura',
    category: 'Heritage',
    season: 'Oct–Mar',
    days: '2 days',
    budgetINR: 2700,
    permit: 'None',
    highlights: [
      '7th–9th century 30-foot Shiva head (Unakotiswara Kal Bhairava) cliff relief',
      'Forested stone trails lined with ancient Ganesha and Durga bas-reliefs',
      'Pair with Neermahal water palace and Ujjayanta Palace in Agartala'
    ],
    food: 'Mui Borok (bamboo shoot & berma stew), Wahan Mosdeng & Bangui rice',
    airport: 'Agartala MBB (IXA) · 178 km (via Kailashahar)',
    summary: 'Deep inside Tripura’s Raghunandan hills, colossal Shaivite sculptures emerge straight from mossy jungle cliffs in quiet archaeological grandeur.',
    lat: 24.3167,
    lon: 92.0667,
    image: '/src/assets/images/dest_unakoti_1795236883212.jpg',
    fallbackGradient: 'linear-gradient(135deg, #29412e 0%, #7d623b 100%)'
  },
  {
    id: 'aizawl',
    name: 'Aizawl & Reiek Tlang',
    state: 'Mizoram',
    category: 'Mountains & Monasteries',
    season: 'Oct–Apr',
    days: '3 days',
    budgetINR: 3500,
    permit: 'ILP',
    highlights: [
      'Ridgeline panoramas from Solomon’s Temple and Durtlang Hills',
      'Reiek Tlang heritage Mizo village & misty cliffside summit walk',
      'India’s famously disciplined no-honking hillside traffic and Bara Bazar'
    ],
    food: 'Bai (steamed seasonal greens with bamboo shoot), Vawksa Rep & Sawhchiar',
    airport: 'Lengpui (AJL) · 32 km',
    summary: 'Built dramatically along a narrow mountain crest, Aizawl greets travelers with warm Mizo choir music, zero traffic horns, and clouds drifting past balconies.',
    lat: 23.7271,
    lon: 92.7176,
    image: '/src/assets/images/dest_aizawl_1795236882878.jpg',
    fallbackGradient: 'linear-gradient(135deg, #1b3f36 0%, #c06a34 100%)'
  }
];

const ALL_STATES = [
  'Assam',
  'Meghalaya',
  'Arunachal Pradesh',
  'Sikkim',
  'Nagaland',
  'Manipur',
  'Mizoram',
  'Tripura'
];

const CATEGORIES = [
  'All',
  'Wildlife',
  'Waterfalls & Caves',
  'Mountains & Monasteries',
  'Lakes & Islands',
  'Valleys & Culture',
  'Heritage'
];

const TIER_CONFIG = {
  Backpacker: {
    multiplier: 0.72,
    stayShare: 0.38,
    transportShare: 0.36,
    foodShare: 0.26,
    caption: 'Clean hostels or village homestays, shared Sumo taxis, and authentic local dhabas.'
  },
  Comfort: {
    multiplier: 1.0,
    stayShare: 0.45,
    transportShare: 0.33,
    foodShare: 0.22,
    caption: 'Verified boutique homestays, private sedan transfers, and curated regional dining.'
  },
  Boutique: {
    multiplier: 1.65,
    stayShare: 0.52,
    transportShare: 0.28,
    foodShare: 0.2,
    caption: 'Heritage tea bungalows or eco-lodges, private Innova SUV, and guided cultural dining.'
  }
};

const PERMIT_DATA = {
  'Arunachal Pradesh': {
    indian: {
      required: 'ILP Required',
      tone: 'required',
      processing: '1–24 hours (Online e-ILP)',
      fee: '₹100 – ₹400 (duration-based)',
      channel: 'eilp.arunachal.gov.in / Arunachal Bhawan',
      advisory: 'All domestic Indian visitors require an Inner Line Permit specifying entry checkpost (Bhalukpong, Hollongi, or Dirak) and exact districts such as Tawang or Lower Subansiri (Ziro).',
      docs: [
        'Government photo ID (Aadhaar, Voter ID, or Indian Passport)',
        'Recent passport-size color photograph (digital JPEG)',
        'Hotel booking confirmation or local sponsor address'
      ]
    },
    foreign: {
      required: 'PAP Required',
      tone: 'restricted',
      processing: '7–14 working days',
      fee: 'US $50 equivalent (approx. ₹4,200)',
      channel: 'Registered Arunachal Tour Operator / e-FRRO',
      advisory: 'Foreign nationals must obtain a Protected Area Permit (PAP) valid up to 30 days. Solo PAP applications are generally restricted; apply in a group of 2+ via an approved operator.',
      docs: [
        'Valid passport with active Indian Visa (minimum 6 months validity)',
        'Confirmed day-by-day itinerary from an approved local operator',
        'Two passport photos & filled PAP application dossier'
      ]
    }
  },
  Assam: {
    indian: {
      required: 'No Permit Required',
      tone: 'none',
      processing: 'Direct entry',
      fee: '₹0 (Safari tickets separate)',
      channel: 'No entry permit needed',
      advisory: 'Assam is completely open for Indian travelers without an ILP. Pre-book Kaziranga jeep/elephant safari permits online 24–48 hours in advance during peak winter months.',
      docs: [
        'Valid government photo ID for hotel & safari check-in',
        'Kaziranga online safari slot receipt (if visiting park)',
        'Ferry ticket at Nimati Ghat (if crossing to Majuli)'
      ]
    },
    foreign: {
      required: 'No Permit Required',
      tone: 'none',
      processing: 'Direct entry on Indian Visa',
      fee: '₹0 (Foreign safari tariff applies)',
      channel: 'Standard Indian e-Visa / Visa',
      advisory: 'Foreign nationals need no special state permit for Assam, including Guwahati, Kaziranga, and Majuli. Carry passport copies for national park entry checkpoints.',
      docs: [
        'Valid passport with active Indian Tourist Visa / e-Visa',
        'Printed copy of visa & hotel reservation for safari gates',
        'Standard travel insurance & emergency contact sheet'
      ]
    }
  },
  Meghalaya: {
    indian: {
      required: 'No Permit Required',
      tone: 'none',
      processing: 'Direct entry',
      fee: '₹0 (Local village entry ₹20–₹100)',
      channel: 'Open access',
      advisory: 'No Inner Line Permit is required for Indian visitors to Shillong, Sohra (Cherrapunji), Dawki, or Mawlynnong. Carry cash for community-managed waterfall and root-bridge entry gates.',
      docs: [
        'Valid government photo ID for hotel check-ins',
        'Driver license if renting scooters in Shillong or Sohra',
        'Small INR cash notes for community eco-tourism fees'
      ]
    },
    foreign: {
      required: 'No Permit Required',
      tone: 'none',
      processing: 'Direct entry on Indian Visa',
      fee: '₹0',
      channel: 'Standard Indian e-Visa / Visa',
      advisory: 'Meghalaya welcomes international travelers with a regular Indian Visa. Note that Dawki sits right on the Bangladesh border—stay within marked tourist zones.',
      docs: [
        'Valid passport & active Indian Visa',
        'Hotel confirmation (hosts complete Form C registration)',
        'Digital & printed passport copy for border-adjacent checkpoints'
      ]
    }
  },
  Nagaland: {
    indian: {
      required: 'ILP Required',
      tone: 'required',
      processing: 'Instant – 24 hours (Online e-ILP)',
      fee: '₹100 – ₹200 (15-day tourist ILP)',
      channel: 'ilp.nagaland.gov.in / Dimapur Airport counter',
      advisory: 'Every non-indigenous Indian citizen needs an ILP to enter Kohima, Dimapur, or trek Dzukou Valley. Apply online 2–3 days ahead to avoid airport queues.',
      docs: [
        'Government-issued photo ID (Aadhaar / Passport / Driving License)',
        'Recent passport-size digital photograph',
        'Confirmed homestay address or local guarantor details'
      ]
    },
    foreign: {
      required: 'No PAP (FRO Registration)',
      tone: 'conditional',
      processing: 'Register within 24 hrs of arrival',
      fee: '₹0',
      channel: 'Foreigners Registration Office (Kohima / Dimapur)',
      advisory: 'Protected Area Permit requirements for Nagaland remain lifted for most nationalities (except restricted countries). Foreign guests must register at the local FRO within 24 hours.',
      docs: [
        'Original passport with valid Indian Tourist Visa',
        'Completed Form C from registered hotel or homestay',
        'Two passport photographs for FRO registration record'
      ]
    }
  },
  Manipur: {
    indian: {
      required: 'ILP Required',
      tone: 'required',
      processing: 'Instant – 24 hours (Online e-ILP)',
      fee: '₹100 (Temporary Tourist Pass, 15 days)',
      channel: 'manipurilponline.mn.gov.in / Imphal Airport',
      advisory: 'Indian domestic tourists require a Temporary ILP to enter Manipur (Imphal & Loktak Lake). Always verify current regional travel advisories before finalizing dates.',
      docs: [
        'Valid government photo ID (Aadhaar / Voter ID / Passport)',
        'Passport-size digital photograph',
        'Confirmed hotel or local host contact in Imphal/Moirang'
      ]
    },
    foreign: {
      required: 'No PAP (FRO Registration)',
      tone: 'conditional',
      processing: 'Register within 24 hrs of arrival',
      fee: '₹0',
      channel: 'Imphal Airport Immigration / Local FRO',
      advisory: 'Standard Indian Visa holders can enter Imphal and Loktak Lake after registering at the airport/FRO within 24 hours. Check latest Ministry of Home Affairs advisories prior to travel.',
      docs: [
        'Original passport with valid Indian Visa',
        'Confirmed accommodation booking for Form C filing',
        'Copy of flight itinerary & emergency local contact'
      ]
    }
  },
  Mizoram: {
    indian: {
      required: 'ILP Required',
      tone: 'required',
      processing: 'Instant at Lengpui Airport / 24 hrs online',
      fee: '₹120 (Temporary ILP, valid 15 days)',
      channel: 'ilp.mizoram.gov.in / Lengpui Airport Counter',
      advisory: 'Domestic visitors flying into Aizawl can easily obtain a 15-day Temporary ILP online or on arrival at the Lengpui Airport facilitation counter.',
      docs: [
        'Government photo ID (Aadhaar / Voter ID / Passport)',
        'Two passport-size photographs (physical + digital)',
        'Hotel reservation in Aizawl or local sponsor letter'
      ]
    },
    foreign: {
      required: 'No PAP (FRO Registration)',
      tone: 'conditional',
      processing: 'Register within 24 hrs of arrival',
      fee: '₹0',
      channel: 'Lengpui Airport Police Desk / SP Office Aizawl',
      advisory: 'Most foreign nationals do not need a PAP for Mizoram but must report arrival to the Foreigners Registration Officer within 24 hours.',
      docs: [
        'Valid passport and active Indian Visa',
        'Two passport-size photographs',
        'Hotel confirmation in Aizawl with host contact number'
      ]
    }
  },
  Sikkim: {
    indian: {
      required: 'Zone Permit Only (No State ILP)',
      tone: 'conditional',
      processing: '24 hours via Gangtok Tour Operator',
      fee: '₹200 – ₹400 (Nathula / North Sikkim permits)',
      channel: 'Sikkim Tourism Office via registered local agent',
      advisory: 'Gangtok, Pelling, and South Sikkim need no permit for Indian citizens. Protected Area Permits are required strictly for Tsomgo Lake, Nathula Pass, Lachung, and Gurudongmar Lake.',
      docs: [
        'Original Voter ID, Passport, or Driving License (Aadhaar not accepted for Nathula)',
        'Two physical passport-size color photographs per person',
        'Registered Sikkim vehicle & tour operator permit application'
      ]
    },
    foreign: {
      required: 'ILP / RAP Required',
      tone: 'required',
      processing: 'Instant – 1 hr (Free at Rangpo / Online)',
      fee: '₹0 (Free 30-day Sikkim ILP)',
      channel: 'sikkimtourism.gov.in / Rangpo or Bagdogra desk',
      advisory: 'Foreign travelers need a free Sikkim ILP for Gangtok & Pelling. Tsomgo Lake and North Sikkim (Yumthang) require a Restricted Area Permit (2+ travelers via registered agency); Nathula is closed to foreigners.',
      docs: [
        'Original passport with valid Indian Visa',
        'Two passport-size color photographs',
        'Registered agency booking (if visiting Tsomgo or North Sikkim)'
      ]
    }
  },
  Tripura: {
    indian: {
      required: 'No Permit Required',
      tone: 'none',
      processing: 'Direct entry',
      fee: '₹0',
      channel: 'Open access',
      advisory: 'Tripura requires no entry permit for Indian citizens across Agartala, Unakoti, Jampui Hills, and Neermahal.',
      docs: [
        'Valid government photo ID for hotels and flights',
        'Printed train/flight booking if transiting via Kailashahar',
        'Offline maps saved for rural hills near Unakoti'
      ]
    },
    foreign: {
      required: 'No Permit Required',
      tone: 'none',
      processing: 'Direct entry on Indian Visa',
      fee: '₹0',
      channel: 'Standard Indian e-Visa / Visa',
      advisory: 'International visitors can freely explore Agartala and Unakoti on a standard Indian Visa without any special state permit.',
      docs: [
        'Valid passport with active Indian Visa',
        'Confirmed hotel reservation (for Form C submission)',
        'Passport copy for highway checkpoints near border roads'
      ]
    }
  }
};

const STATE_GATEWAYS = {
  Assam: 'Guwahati (GAU) / Jorhat (JRH)',
  Meghalaya: 'Guwahati (GAU) / Shillong (SHL)',
  'Arunachal Pradesh': 'Guwahati (GAU) / Itanagar (HGI)',
  Sikkim: 'Bagdogra (IXB) / Pakyong (PYG)',
  Nagaland: 'Dimapur (DMU)',
  Manipur: 'Imphal (IMF)',
  Mizoram: 'Lengpui, Aizawl (AJL)',
  Tripura: 'Agartala (IXA)'
};

const state = {
  search: '',
  selectedState: 'All',
  selectedCategory: 'All',
  favorites: loadFavorites(),
  activeDetailId: null,
  planner: {
    states: ['Assam', 'Meghalaya'],
    days: 5,
    travelers: 2,
    tier: 'Comfort',
    lastGeneratedText: ''
  },
  permit: {
    state: 'Arunachal Pradesh',
    traveler: 'indian',
    checkedDocs: {}
  },
  chatOpen: false,
  weather: {}
};

function decodeWmoWeather(code) {
  if (code === 0) return { label: 'Clear Sky', icon: 'sun' };
  if (code >= 1 && code <= 3) return { label: code === 3 ? 'Overcast' : 'Partly Cloudy', icon: 'cloud-sun' };
  if (code === 45 || code === 48) return { label: 'Misty / Foggy', icon: 'cloud-fog' };
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return { label: 'Light Rain / Showers', icon: 'cloud-rain' };
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return { label: 'Snowfall', icon: 'snowflake' };
  if (code >= 95) return { label: 'Thunderstorm', icon: 'cloud-lightning' };
  return { label: 'Mild Conditions', icon: 'cloud-sun' };
}

function getCardWeatherMarkup(d) {
  const entry = state.weather[d.id];
  if (entry && entry.status === 'ok') {
    return `<i data-lucide="${entry.icon}" class="w-3.5 h-3.5 text-terracotta-dark dark:text-terracotta-light shrink-0"></i><span class="tabular-nums">${entry.temp}°C · ${entry.label}</span>`;
  }
  if (entry && entry.status === 'offline') {
    return `<i data-lucide="cloud-off" class="w-3.5 h-3.5 text-pine/45 dark:text-[#8E9F98] shrink-0"></i><span>Weather unavailable offline</span>`;
  }
  return `<i data-lucide="cloud-sun" class="w-3.5 h-3.5 text-pine/45 dark:text-[#8E9F98] shrink-0"></i><span>Checking live weather…</span>`;
}

function updateDetailWeatherUI(d) {
  if (state.activeDetailId !== d.id) return;
  const textEl = document.getElementById('detail-weather-text');
  const iconWrap = document.getElementById('detail-weather-icon-wrap');
  const coordsEl = document.getElementById('detail-coords');
  if (!textEl || !coordsEl) return;

  coordsEl.textContent = `${d.lat.toFixed(2)}°N, ${d.lon.toFixed(2)}°E`;
  const entry = state.weather[d.id];

  let iconName = 'cloud-sun';
  let iconClass = 'w-4 h-4 text-terracotta-dark dark:text-terracotta-light';

  if (entry && entry.status === 'ok') {
    textEl.textContent = `Live Weather: ${entry.temp}°C · ${entry.label} · Wind ${entry.wind} km/h`;
    iconName = entry.icon;
  } else if (entry && entry.status === 'offline') {
    textEl.textContent = `Live weather unavailable offline · Best visited ${d.season}`;
    iconName = 'cloud-off';
    iconClass = 'w-4 h-4 text-pine/55 dark:text-[#8E9F98]';
  } else {
    textEl.textContent = 'Checking live weather…';
  }

  if (iconWrap) {
    iconWrap.innerHTML = `<i data-lucide="${iconName}" class="${iconClass}"></i>`;
  }
  refreshIcons();
}

function syncAllCardWeatherUI() {
  DESTINATIONS.forEach((d) => {
    const el = document.querySelector(`[data-weather-id="${d.id}"]`);
    if (el) el.innerHTML = getCardWeatherMarkup(d);
  });
  if (state.activeDetailId) {
    const activeDest = DESTINATIONS.find((item) => item.id === state.activeDetailId);
    if (activeDest) updateDetailWeatherUI(activeDest);
  }
  refreshIcons();
}

async function fetchSingleWeather(d) {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    state.weather[d.id] = { status: 'offline' };
    syncAllCardWeatherUI();
    return;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${d.lat}&longitude=${d.lon}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`;
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error('Weather fetch failed');
    const data = await res.json();
    const cur = data && data.current;
    if (!cur || typeof cur.temperature_2m !== 'number') throw new Error('Invalid weather payload');
    const info = decodeWmoWeather(cur.weather_code);
    state.weather[d.id] = {
      status: 'ok',
      temp: Math.round(cur.temperature_2m),
      wind: Math.round(cur.wind_speed_10m || 0),
      label: info.label,
      icon: info.icon
    };
  } catch {
    state.weather[d.id] = { status: 'offline' };
  } finally {
    clearTimeout(timer);
    syncAllCardWeatherUI();
  }
}

async function fetchAllWeather() {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    DESTINATIONS.forEach((d) => {
      state.weather[d.id] = { status: 'offline' };
    });
    syncAllCardWeatherUI();
    return;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const lats = DESTINATIONS.map((d) => d.lat).join(',');
    const lons = DESTINATIONS.map((d) => d.lon).join(',');
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`;
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error('Batch weather failed');
    const payload = await res.json();
    const list = Array.isArray(payload) ? payload : [payload];
    DESTINATIONS.forEach((d, idx) => {
      const cur = list[idx] && list[idx].current;
      if (cur && typeof cur.temperature_2m === 'number') {
        const info = decodeWmoWeather(cur.weather_code);
        state.weather[d.id] = {
          status: 'ok',
          temp: Math.round(cur.temperature_2m),
          wind: Math.round(cur.wind_speed_10m || 0),
          label: info.label,
          icon: info.icon
        };
      } else {
        state.weather[d.id] = { status: 'offline' };
      }
    });
  } catch {
    DESTINATIONS.forEach((d) => {
      state.weather[d.id] = { status: 'offline' };
    });
  } finally {
    clearTimeout(timer);
    syncAllCardWeatherUI();
  }
}

function loadFavorites() {
  try {
    const raw = localStorage.getItem('travelmate_favorites');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem('travelmate_favorites', JSON.stringify(state.favorites));
  } catch {}
}

function formatINR(amount) {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast-item pointer-events-auto px-4 py-2.5 rounded-lg bg-pine text-mist dark:bg-[#F4F1EA] dark:text-pine text-xs sm:text-sm font-medium shadow-xl border border-white/10';
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 200ms ease';
    setTimeout(() => el.remove(), 220);
  }, 2600);
}

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('travelmate_theme', isDark ? 'dark' : 'light');
    } catch {}
    showToast(isDark ? 'Dark mode enabled' : 'Light mode enabled');
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  const closeMenu = () => {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isHidden));
  });

  menu.querySelectorAll('a, button').forEach((item) => {
    item.addEventListener('click', closeMenu);
  });
}

function renderFilterBars() {
  const stateBar = document.getElementById('state-filter-bar');
  const catBar = document.getElementById('category-filter-bar');
  if (!stateBar || !catBar) return;

  const stateOptions = ['All', ...ALL_STATES];
  stateBar.innerHTML = stateOptions
    .map((st) => {
      const active = state.selectedState === st;
      return `<button type="button" data-state-filter="${st}" class="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
        active
          ? 'bg-terracotta text-white shadow-md'
          : 'bg-white/85 hover:bg-white text-pine/90 dark:bg-pine-card/85 dark:hover:bg-pine-card dark:text-[#E2EAE6] backdrop-blur-sm shadow-sm'
      }">${st === 'All' ? 'All 8 States' : st}</button>`;
    })
    .join('');

  catBar.innerHTML = CATEGORIES.map((cat) => {
    const active = state.selectedCategory === cat;
    return `<button type="button" data-cat-filter="${cat}" class="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 border ${
      active
        ? 'bg-terracotta text-white border-terracotta shadow-sm'
        : 'bg-white/90 hover:bg-white text-pine/80 border-pine/10 dark:bg-pine-card dark:hover:bg-pine-soft dark:text-[#CBD5D0] dark:border-white/10'
    }">${cat === 'All' ? 'All Themes' : cat}</button>`;
  }).join('');

  stateBar.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedState = btn.dataset.stateFilter;
      renderFilterBars();
      renderDestinations();
    });
  });

  catBar.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedCategory = btn.dataset.catFilter;
      renderFilterBars();
      renderDestinations();
    });
  });
}

function getFilteredDestinations() {
  const q = state.search.trim().toLowerCase();
  return DESTINATIONS.filter((d) => {
    const matchState = state.selectedState === 'All' || d.state === state.selectedState;
    const matchCat = state.selectedCategory === 'All' || d.category === state.selectedCategory;
    if (!matchState || !matchCat) return false;
    if (!q) return true;
    const haystack = [d.name, d.state, d.category, d.season, d.food, d.airport, d.permit, ...d.highlights]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

function renderDestinations() {
  const grid = document.getElementById('destinations-grid');
  const empty = document.getElementById('empty-state');
  const summary = document.getElementById('results-summary');
  const resetInline = document.getElementById('reset-filters-inline');
  if (!grid || !empty || !summary) return;

  const list = getFilteredDestinations();
  const hasFilters = state.search.trim() !== '' || state.selectedState !== 'All' || state.selectedCategory !== 'All';

  summary.textContent = `Showing ${list.length} of ${DESTINATIONS.length} destinations`;
  resetInline.classList.toggle('hidden', !hasFilters);

  if (list.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    refreshIcons();
    return;
  }

  empty.classList.add('hidden');
  grid.innerHTML = list
    .map((d) => {
      const isFav = state.favorites.includes(d.id);
      const permitLabel = d.permit === 'ILP' ? 'ILP Required' : 'No State ILP';
      return `
        <article data-dest-id="${d.id}" tabindex="0" role="button" aria-label="View details for ${d.name}, ${d.state}" class="destination-card group cursor-pointer bg-white dark:bg-pine-card rounded-2xl border border-pine/10 dark:border-white/10 shadow-sm hover:shadow-md overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta">
          <div class="relative aspect-[4/3] overflow-hidden img-fallback-bg" style="background-image:${d.fallbackGradient}">
            <img
              src="${d.image}"
              alt="${d.name} in ${d.state}, North East India"
              loading="lazy"
              referrerpolicy="no-referrer"
              class="card-img w-full h-full object-cover"
              onerror="this.style.display='none'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none"></div>
            <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm inline-flex items-center gap-1.5 ${
              d.permit === 'ILP'
                ? 'bg-[#FDF0E6]/95 text-[#9C3F0E] dark:bg-terracotta-dark/95 dark:text-white'
                : 'bg-[#E2F3EA]/95 text-[#0F4D37] dark:bg-[#163D2E]/95 dark:text-[#A7E6CB]'
            }">
              <span>${permitLabel}</span>
            </span>
            <button
              type="button"
              data-fav-toggle="${d.id}"
              aria-label="${isFav ? 'Remove from saved trips' : 'Save destination'}"
              aria-pressed="${isFav}"
              class="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 hover:bg-white dark:bg-pine-card/90 dark:hover:bg-pine-card text-pine dark:text-white backdrop-blur-sm shadow-sm inline-flex items-center justify-center transition-colors"
            >
              <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-[#D96B27] text-[#D96B27]' : ''}"></i>
            </button>
            <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/95 font-medium">
              <span>${d.state}</span>
              <span class="tabular-nums">${formatINR(d.budgetINR)} / day</span>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col">
            <p class="text-xs text-pine/60 dark:text-[#A6B5AE]">
              ${d.category} <span aria-hidden="true">·</span> ${d.season} <span aria-hidden="true">·</span> ${d.days}
            </p>
            <h3 class="mt-1.5 font-serif text-xl font-semibold text-pine dark:text-[#F4F1EA] group-hover:text-terracotta-dark dark:group-hover:text-terracotta-light transition-colors">
              ${d.name}
            </h3>
            <p data-weather-id="${d.id}" class="mt-1.5 inline-flex items-center gap-1.5 text-xs text-pine/65 dark:text-[#A6B5AE]">
              ${getCardWeatherMarkup(d)}
            </p>
            <p class="mt-2 mb-4 text-sm text-pine/75 dark:text-[#CBD5D0] leading-relaxed line-clamp-2">
              ${d.summary}
            </p>

            <div class="mt-auto pt-4 border-t border-pine/10 dark:border-white/10 flex items-center justify-between text-xs">
              <span class="inline-flex items-center gap-1.5 font-medium ${
                d.permit === 'ILP'
                  ? 'text-terracotta-dark dark:text-terracotta-light'
                  : 'text-pine/75 dark:text-[#A6B5AE]'
              }">
                <i data-lucide="${d.permit === 'ILP' ? 'file-check-2' : 'check-circle-2'}" class="w-3.5 h-3.5"></i>
                <span>${permitLabel}</span>
              </span>
              <span class="inline-flex items-center gap-1 font-semibold text-pine dark:text-[#F4F1EA] group-hover:text-terracotta-dark dark:group-hover:text-terracotta-light transition-colors">
                <span>View Guide</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </span>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  grid.querySelectorAll('[data-fav-toggle]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.favToggle);
    });
  });

  grid.querySelectorAll('[data-dest-id]').forEach((card) => {
    const open = () => openDetailModal(card.dataset.destId);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });

  refreshIcons();
}

function toggleFavorite(id) {
  const dest = DESTINATIONS.find((d) => d.id === id);
  if (!dest) return;
  const idx = state.favorites.indexOf(id);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    showToast(`Removed ${dest.name} from Saved Trips`);
  } else {
    state.favorites.push(id);
    showToast(`Saved ${dest.name} to your shortlist`);
  }
  saveFavorites();
  updateSavedCounters();
  renderDestinations();
  if (state.activeDetailId === id) {
    syncDetailFavoriteIcon(id);
  }
  if (!document.getElementById('saved-modal').classList.contains('hidden')) {
    renderSavedModal();
  }
}

function updateSavedCounters() {
  const count = state.favorites.length;
  const navEl = document.getElementById('saved-count-nav');
  const mobEl = document.getElementById('saved-count-mobile');
  if (navEl) navEl.textContent = `(${count})`;
  if (mobEl) mobEl.textContent = `${count} saved`;
}

function syncDetailFavoriteIcon(id) {
  const btn = document.getElementById('detail-fav-btn');
  if (!btn) return;
  const isFav = state.favorites.includes(id);
  btn.setAttribute('aria-pressed', String(isFav));
  btn.innerHTML = `<i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-[#E67E3B] text-[#E67E3B]' : ''}"></i>`;
  refreshIcons();
}

function openDetailModal(id) {
  const d = DESTINATIONS.find((item) => item.id === id);
  if (!d) return;
  state.activeDetailId = id;

  const modal = document.getElementById('detail-modal');
  const img = document.getElementById('detail-img');
  img.style.display = 'block';
  img.src = d.image;
  img.alt = `${d.name}, ${d.state}`;
  img.parentElement.style.backgroundImage = d.fallbackGradient;
  img.onerror = () => {
    img.style.display = 'none';
  };

  document.getElementById('detail-kicker').textContent = `${d.state} · ${d.category} · Best: ${d.season}`;
  document.getElementById('detail-modal-title').textContent = d.name;
  document.getElementById('detail-budget').textContent = formatINR(d.budgetINR);
  document.getElementById('detail-days').textContent = d.days;
  document.getElementById('detail-summary').textContent = d.summary;
  document.getElementById('detail-food').textContent = d.food;
  document.getElementById('detail-airport').textContent = d.airport;

  const permitLine = document.getElementById('detail-permit-line');
  if (d.permit === 'ILP') {
    permitLine.className = 'inline-flex items-center gap-2 text-sm font-semibold text-terracotta-dark dark:text-terracotta-light';
    permitLine.innerHTML = `<i data-lucide="file-check-2" class="w-4 h-4"></i><span>ILP Required (${d.state})</span>`;
  } else {
    permitLine.className = 'inline-flex items-center gap-2 text-sm font-semibold text-pine dark:text-[#84C3AA]';
    permitLine.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4"></i><span>No State Entry Permit Required</span>`;
  }

  document.getElementById('detail-highlights').innerHTML = d.highlights
    .map(
      (h, idx) => `
      <li class="flex items-start gap-2.5">
        <span class="text-xs font-semibold text-terracotta-dark dark:text-terracotta-light tabular-nums mt-0.5">0${idx + 1}.</span>
        <span>${h}</span>
      </li>`
    )
    .join('');

  syncDetailFavoriteIcon(id);
  updateDetailWeatherUI(d);
  if (!state.weather[d.id] || state.weather[d.id].status === 'offline') {
    fetchSingleWeather(d);
  }
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  refreshIcons();
}

function closeModals() {
  ['detail-modal', 'saved-modal'].forEach((modalId) => {
    const m = document.getElementById(modalId);
    if (m) {
      m.classList.add('hidden');
      m.classList.remove('flex');
    }
  });
  state.activeDetailId = null;
  document.body.style.overflow = '';
}

function renderSavedModal() {
  const listEl = document.getElementById('saved-modal-list');
  const subtitle = document.getElementById('saved-modal-subtitle');
  const footer = document.getElementById('saved-modal-footer');
  const totalEl = document.getElementById('saved-total-estimate');
  if (!listEl) return;

  const savedItems = DESTINATIONS.filter((d) => state.favorites.includes(d.id));
  subtitle.textContent = `${savedItems.length} destination${savedItems.length === 1 ? '' : 's'} bookmarked`;

  if (savedItems.length === 0) {
    footer.classList.add('hidden');
    footer.classList.remove('flex');
    listEl.innerHTML = `
      <div class="py-10 text-center">
        <i data-lucide="heart" class="w-8 h-8 mx-auto text-pine/30 dark:text-[#8E9F98]"></i>
        <p class="mt-3 text-sm font-medium text-pine dark:text-[#F4F1EA]">No saved destinations yet</p>
        <p class="mt-1 text-xs text-pine/65 dark:text-[#A6B5AE]">Tap the heart icon on any destination card to build your shortlist.</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  const combined = savedItems.reduce((sum, item) => sum + item.budgetINR * 2, 0);
  totalEl.textContent = `${formatINR(combined)} (est. 2 days each)`;
  footer.classList.remove('hidden');
  footer.classList.add('flex');

  listEl.innerHTML = savedItems
    .map(
      (d) => `
      <div class="flex items-center gap-3.5 p-3 rounded-lg border border-pine/10 dark:border-white/10 bg-mist/50 dark:bg-pine-deep">
        <img src="${d.image}" alt="${d.name}" referrerpolicy="no-referrer" class="w-16 h-14 rounded-md object-cover shrink-0 bg-pine" onerror="this.style.display='none'" />
        <div class="min-w-0 flex-1">
          <button type="button" data-open-saved="${d.id}" class="text-left font-serif text-base font-semibold text-pine dark:text-[#F4F1EA] hover:text-terracotta-dark dark:hover:text-terracotta-light truncate block w-full">
            ${d.name}
          </button>
          <p class="text-xs text-pine/65 dark:text-[#A6B5AE] tabular-nums">${d.state} · ${formatINR(d.budgetINR)}/day</p>
        </div>
        <button type="button" data-remove-saved="${d.id}" aria-label="Remove ${d.name}" class="w-9 h-9 rounded-md inline-flex items-center justify-center text-pine/60 dark:text-[#A6B5AE] hover:text-terracotta-dark hover:bg-pine/10 dark:hover:bg-white/10 transition-colors shrink-0">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `
    )
    .join('');

  listEl.querySelectorAll('[data-open-saved]').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModals();
      openDetailModal(btn.dataset.openSaved);
    });
  });

  listEl.querySelectorAll('[data-remove-saved]').forEach((btn) => {
    btn.addEventListener('click', () => toggleFavorite(btn.dataset.removeSaved));
  });

  refreshIcons();
}

function openSavedModal() {
  renderSavedModal();
  const modal = document.getElementById('saved-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function initExplorerAndModals() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  searchInput.addEventListener('input', () => {
    state.search = searchInput.value;
    clearBtn.classList.toggle('hidden', state.search.length === 0);
    clearBtn.classList.toggle('inline-flex', state.search.length > 0);
    renderDestinations();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    clearBtn.classList.add('hidden');
    clearBtn.classList.remove('inline-flex');
    renderDestinations();
    searchInput.focus();
  });

  const resetAll = () => {
    state.search = '';
    state.selectedState = 'All';
    state.selectedCategory = 'All';
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    clearBtn.classList.remove('inline-flex');
    renderFilterBars();
    renderDestinations();
  };

  document.getElementById('reset-filters-inline').addEventListener('click', resetAll);
  document.getElementById('reset-filters-empty').addEventListener('click', resetAll);

  document.getElementById('open-saved-nav').addEventListener('click', openSavedModal);
  document.getElementById('open-saved-mobile').addEventListener('click', openSavedModal);
  document.getElementById('close-detail-modal').addEventListener('click', closeModals);
  document.getElementById('close-saved-modal').addEventListener('click', closeModals);

  document.getElementById('detail-fav-btn').addEventListener('click', () => {
    if (state.activeDetailId) toggleFavorite(state.activeDetailId);
  });

  document.getElementById('detail-check-permit-btn').addEventListener('click', () => {
    const dest = DESTINATIONS.find((d) => d.id === state.activeDetailId);
    if (!dest) return;
    state.permit.state = dest.state;
    closeModals();
    renderPermitChecker();
    document.getElementById('permits').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('detail-add-planner-btn').addEventListener('click', () => {
    const dest = DESTINATIONS.find((d) => d.id === state.activeDetailId);
    if (!dest) return;
    if (!state.planner.states.includes(dest.state)) {
      if (state.planner.states.length >= 4) {
        state.planner.states.shift();
      }
      state.planner.states.push(dest.state);
    }
    closeModals();
    renderPlannerControls();
    generateItinerary(false);
    document.getElementById('architect').scrollIntoView({ behavior: 'smooth' });
    showToast(`Added ${dest.name} (${dest.state}) to Trip Architect`);
  });

  document.getElementById('load-saved-into-planner').addEventListener('click', () => {
    const savedStates = [...new Set(DESTINATIONS.filter((d) => state.favorites.includes(d.id)).map((d) => d.state))].slice(0, 4);
    if (savedStates.length === 0) return;
    state.planner.states = savedStates;
    closeModals();
    renderPlannerControls();
    generateItinerary(false);
    document.getElementById('architect').scrollIntoView({ behavior: 'smooth' });
    showToast(`Loaded ${savedStates.length} saved state${savedStates.length > 1 ? 's' : ''} into Trip Architect`);
  });

  ['detail-modal', 'saved-modal'].forEach((id) => {
    const modal = document.getElementById(id);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModals();
      if (state.chatOpen) toggleChat(false);
    }
  });
}

function renderPlannerControls() {
  const container = document.getElementById('planner-state-selector');
  const countEl = document.getElementById('selected-states-count');
  if (!container) return;

  countEl.textContent = `${state.planner.states.length} selected`;

  container.innerHTML = ALL_STATES.map((st) => {
    const active = state.planner.states.includes(st);
    return `<button type="button" data-plan-state="${st}" aria-pressed="${active}" class="px-3 py-2 rounded-lg text-xs font-medium text-left border transition-colors flex items-center justify-between gap-2 ${
      active
        ? 'bg-pine text-mist border-pine dark:bg-terracotta-dark dark:border-terracotta-dark dark:text-white'
        : 'bg-mist/50 dark:bg-pine-deep text-pine/85 dark:text-[#CBD5D0] border-pine/15 dark:border-white/15 hover:border-terracotta'
    }">
      <span class="truncate">${st}</span>
      <i data-lucide="${active ? 'check' : 'plus'}" class="w-3.5 h-3.5 shrink-0"></i>
    </button>`;
  }).join('');

  container.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const st = btn.dataset.planState;
      const idx = state.planner.states.indexOf(st);
      if (idx >= 0) {
        if (state.planner.states.length === 1) {
          showToast('Keep at least one state selected');
          return;
        }
        state.planner.states.splice(idx, 1);
      } else {
        if (state.planner.states.length >= 4) {
          showToast('Select up to 4 states for a realistic 2–7 day route');
          return;
        }
        state.planner.states.push(st);
      }
      renderPlannerControls();
    });
  });

  document.getElementById('duration-slider').value = String(state.planner.days);
  document.getElementById('duration-display').textContent = `${state.planner.days} Days`;
  document.getElementById('travelers-display').textContent = `${state.planner.travelers} Traveler${state.planner.travelers > 1 ? 's' : ''}`;

  document.querySelectorAll('.tier-btn').forEach((btn) => {
    const active = btn.dataset.tier === state.planner.tier;
    btn.setAttribute('aria-checked', String(active));
    btn.className = `tier-btn py-2 px-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
      active
        ? 'bg-white dark:bg-pine-card text-pine dark:text-white shadow-sm border border-pine/10 dark:border-white/15'
        : 'text-pine/70 dark:text-[#A6B5AE] hover:text-pine dark:hover:text-white'
    }`;
  });
  document.getElementById('tier-caption').textContent = TIER_CONFIG[state.planner.tier].caption;

  refreshIcons();
}

function generateItinerary(notify = true) {
  const { states, days, travelers, tier } = state.planner;
  const tierCfg = TIER_CONFIG[tier];
  const matched = DESTINATIONS.filter((d) => states.includes(d.state));
  const pool = matched.length ? matched : [DESTINATIONS[0]];

  const avgDailyBase = pool.reduce((sum, d) => sum + d.budgetINR, 0) / pool.length;
  const permitStates = states.filter((st) => PERMIT_DATA[st].indian.tone === 'required');
  const permitExtra = permitStates.length * 250 * travelers;

  const groupScale = travelers === 1 ? 1.15 : travelers <= 3 ? 0.96 : 0.88;
  const totalBudget = Math.round((avgDailyBase * tierCfg.multiplier * days * travelers * groupScale + permitExtra) / 100) * 100;
  const stayCost = Math.round((totalBudget * tierCfg.stayShare) / 50) * 50;
  const transportCost = Math.round((totalBudget * tierCfg.transportShare) / 50) * 50;
  const foodCost = Math.max(0, totalBudget - stayCost - transportCost);

  const stayPct = Math.round((stayCost / totalBudget) * 100);
  const transportPct = Math.round((transportCost / totalBudget) * 100);
  const foodPct = 100 - stayPct - transportPct;

  const titleStates = states.length <= 2 ? states.join(' & ') : `${states.slice(0, 2).join(', ')} + ${states.length - 2} More`;
  document.getElementById('plan-title').textContent = `${titleStates} Expedition`;
  document.getElementById('plan-meta').textContent = `${days} Days · ${travelers} Traveler${travelers > 1 ? 's' : ''} · ${tier} Tier`;
  document.getElementById('plan-gateway').textContent = STATE_GATEWAYS[states[0]] || 'Guwahati (GAU)';

  document.getElementById('budget-total').textContent = formatINR(totalBudget);
  document.getElementById('budget-per-person').textContent = formatINR(totalBudget / travelers);
  document.getElementById('budget-permit-note').textContent = permitStates.length
    ? `Includes e-ILP estimate (${permitStates.join(', ')})`
    : 'No state entry ILP required';

  document.getElementById('cost-stay').textContent = formatINR(stayCost);
  document.getElementById('cost-transport').textContent = formatINR(transportCost);
  document.getElementById('cost-food').textContent = formatINR(foodCost);
  document.getElementById('pct-stay').textContent = `(${stayPct}%)`;
  document.getElementById('pct-transport').textContent = `(${transportPct}%)`;
  document.getElementById('pct-food').textContent = `(${foodPct}%)`;
  document.getElementById('bar-stay').style.width = `${stayPct}%`;
  document.getElementById('bar-transport').style.width = `${transportPct}%`;
  document.getElementById('bar-food').style.width = `${foodPct}%`;

  const dayPlans = [];
  for (let i = 0; i < days; i++) {
    const dest = pool[Math.min(Math.floor((i * pool.length) / days), pool.length - 1)];
    const prevDest = i > 0 ? pool[Math.min(Math.floor(((i - 1) * pool.length) / days), pool.length - 1)] : null;
    const isFirst = i === 0;
    const isLast = i === days - 1;

    let headline = '';
    let detail = '';

    if (isFirst) {
      headline = `Arrival & Transfer to ${dest.name}`;
      detail = `Land via ${dest.airport.split('/')[0].trim()}. Check into your ${tier.toLowerCase()} stay in ${dest.state}. Evening orientation: ${dest.highlights[2]}. Dinner recommendation: ${dest.food}.`;
    } else if (isLast) {
      headline = `Sunrise Walk in ${dest.name} & Departure`;
      detail = `Early morning wrap-up around ${dest.name} (${dest.highlights[0]}). Pick up regional spices, handloom crafts, and depart comfortably toward ${STATE_GATEWAYS[dest.state]}.`;
    } else if (prevDest && prevDest.id !== dest.id) {
      headline = `Scenic Road Transfer: ${prevDest.name} → ${dest.name}`;
      detail = `Drive through ${dest.state}’s mountain and river corridors. Afternoon exploration: ${dest.highlights[0]}. Sample ${dest.food} before sunset.`;
    } else {
      const highlight = dest.highlights[i % dest.highlights.length];
      headline = `Full Day Exploring ${dest.name}`;
      detail = `Start at 7:00 AM for ${highlight}. Afternoon slow-travel break: ${dest.highlights[(i + 1) % dest.highlights.length]}. Evening tasting of ${dest.food}.`;
    }

    dayPlans.push({
      day: i + 1,
      state: dest.state,
      headline,
      detail,
      permit: dest.permit
    });
  }

  const perDestCount = pool.length === 1 ? 3 : pool.length === 2 ? 2 : 1;
  const parsedHighlights = [];
  pool.forEach((dest) => {
    dest.highlights.slice(0, perDestCount).forEach((activity) => {
      parsedHighlights.push({
        activity,
        destination: dest.name,
        state: dest.state
      });
    });
  });
  if (pool.length === 3 && pool[0].highlights[1]) {
    parsedHighlights.push({
      activity: pool[0].highlights[1],
      destination: pool[0].name,
      state: pool[0].state
    });
  }
  const summaryHighlights = parsedHighlights.slice(0, 6);

  const highlightsMetaEl = document.getElementById('trip-highlights-meta');
  const highlightsListEl = document.getElementById('trip-highlights-list');
  if (highlightsMetaEl && highlightsListEl) {
    highlightsMetaEl.textContent = `${pool.length} destination${pool.length === 1 ? '' : 's'} · ${summaryHighlights.length} key activities`;
    highlightsListEl.innerHTML = summaryHighlights
      .map(
        (h, idx) => `
        <li class="flex items-start gap-2.5 text-xs sm:text-sm">
          <span class="font-semibold text-terracotta-dark dark:text-terracotta-light tabular-nums shrink-0 mt-0.5">0${idx + 1}.</span>
          <div class="min-w-0">
            <p class="text-pine dark:text-[#F4F1EA] leading-snug">${h.activity}</p>
            <p class="mt-0.5 text-[11px] text-pine/60 dark:text-[#A6B5AE]">${h.destination} · ${h.state}</p>
          </div>
        </li>
      `
      )
      .join('');
  }

  document.getElementById('itinerary-days').innerHTML = dayPlans
    .map(
      (item) => `
      <li class="p-4 rounded-lg border border-pine/10 dark:border-white/10 bg-mist/55 dark:bg-pine-deep">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs font-semibold uppercase tracking-wider text-terracotta-dark dark:text-terracotta-light tabular-nums">
            Day 0${item.day} · ${item.state}
          </span>
          ${item.permit === 'ILP' ? '<span class="text-[11px] font-medium text-pine/65 dark:text-[#A6B5AE]">Carry printed e-ILP</span>' : ''}
        </div>
        <h5 class="mt-1 font-serif text-base sm:text-lg font-semibold text-pine dark:text-[#F4F1EA]">${item.headline}</h5>
        <p class="mt-1.5 text-xs sm:text-sm text-pine/75 dark:text-[#CBD5D0] leading-relaxed">${item.detail}</p>
      </li>
    `
    )
    .join('');

  state.planner.lastGeneratedText = [
    `TravelMateNE Itinerary: ${titleStates} Expedition`,
    `${days} Days | ${travelers} Traveler(s) | ${tier} Tier | Gateway: ${STATE_GATEWAYS[states[0]]}`,
    '',
    'Trip Highlights:',
    ...summaryHighlights.map((h) => `• ${h.activity} (${h.destination}, ${h.state})`),
    '',
    `Total Budget: ${formatINR(totalBudget)} (${formatINR(totalBudget / travelers)}/person)`,
    `- Stay: ${formatINR(stayCost)} (${stayPct}%)`,
    `- Transport: ${formatINR(transportCost)} (${transportPct}%)`,
    `- Food, Entries & Permits: ${formatINR(foodCost)} (${foodPct}%)`,
    '',
    ...dayPlans.map((p) => `Day ${p.day} (${p.state}): ${p.headline}\n${p.detail}`)
  ].join('\n');

  refreshIcons();

  if (notify) {
    showToast(`Generated ${days}-day ${titleStates} itinerary`);
  }
}

function initTripArchitect() {
  renderPlannerControls();
  generateItinerary(false);

  const slider = document.getElementById('duration-slider');
  slider.addEventListener('input', () => {
    state.planner.days = Number(slider.value);
    document.getElementById('duration-display').textContent = `${state.planner.days} Days`;
  });

  document.getElementById('travelers-minus').addEventListener('click', () => {
    if (state.planner.travelers > 1) {
      state.planner.travelers -= 1;
      renderPlannerControls();
    }
  });

  document.getElementById('travelers-plus').addEventListener('click', () => {
    if (state.planner.travelers < 8) {
      state.planner.travelers += 1;
      renderPlannerControls();
    }
  });

  document.querySelectorAll('.tier-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.planner.tier = btn.dataset.tier;
      renderPlannerControls();
    });
  });

  document.querySelectorAll('.circuit-preset').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.planner.states = btn.dataset.circuit.split(',');
      state.planner.days = Number(btn.dataset.days);
      renderPlannerControls();
      generateItinerary(true);
    });
  });

  document.getElementById('generate-itinerary-btn').addEventListener('click', () => {
    generateItinerary(true);
  });

  document.getElementById('copy-plan-btn').addEventListener('click', async () => {
    const text = state.planner.lastGeneratedText;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      showToast('Itinerary & INR budget copied to clipboard');
    } catch {
      showToast('Plan ready — select and copy text if clipboard is restricted');
    }
  });
}

function renderPermitChecker() {
  const st = state.permit.state;
  const trav = state.permit.traveler;
  const info = PERMIT_DATA[st][trav];
  const key = `${st}_${trav}`;
  if (!state.permit.checkedDocs[key]) {
    state.permit.checkedDocs[key] = [false, false, false];
  }
  const checks = state.permit.checkedDocs[key];

  document.getElementById('permit-state-select').value = st;

  document.querySelectorAll('.traveler-type-btn').forEach((btn) => {
    const active = btn.dataset.traveler === trav;
    btn.setAttribute('aria-checked', String(active));
    btn.className = `traveler-type-btn py-2.5 px-3 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
      active
        ? 'bg-white dark:bg-pine-card text-pine dark:text-white shadow-sm border border-pine/10 dark:border-white/15'
        : 'text-pine/70 dark:text-[#A6B5AE] hover:text-pine dark:hover:text-white'
    }`;
  });

  const quickWrap = document.getElementById('permit-quick-states');
  quickWrap.innerHTML = ALL_STATES.map((item) => {
    const active = item === st;
    return `<button type="button" data-quick-permit="${item}" class="px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors whitespace-nowrap ${
      active
        ? 'bg-pine text-mist border-pine dark:bg-terracotta-dark dark:border-terracotta-dark dark:text-white'
        : 'border-pine/15 dark:border-white/15 text-pine/80 dark:text-[#CBD5D0] hover:border-terracotta'
    }">${item}</button>`;
  }).join('');

  quickWrap.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.permit.state = btn.dataset.quickPermit;
      renderPermitChecker();
    });
  });

  document.getElementById('permit-context-line').textContent = `${st} · ${trav === 'indian' ? 'Indian Citizen' : 'Foreign National'}`;
  document.getElementById('permit-status-heading').textContent = info.required;
  document.getElementById('permit-processing').textContent = info.processing;
  document.getElementById('permit-fee').textContent = info.fee;
  document.getElementById('permit-channel').textContent = info.channel;
  document.getElementById('permit-advisory').textContent = info.advisory;

  const indicator = document.getElementById('permit-status-indicator');
  if (info.tone === 'none') {
    indicator.className = 'inline-flex items-center gap-2 text-sm font-semibold text-pine dark:text-[#84C3AA]';
    indicator.innerHTML = '<i data-lucide="check-circle-2" class="w-4 h-4"></i><span>Open Entry</span>';
  } else if (info.tone === 'conditional') {
    indicator.className = 'inline-flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300';
    indicator.innerHTML = '<i data-lucide="info" class="w-4 h-4"></i><span>Conditional / Zone Rules</span>';
  } else {
    indicator.className = 'inline-flex items-center gap-2 text-sm font-semibold text-terracotta-dark dark:text-terracotta-light';
    indicator.innerHTML = '<i data-lucide="shield-alert" class="w-4 h-4"></i><span>Advance Permit Needed</span>';
  }

  const updateChecklistUI = () => {
    const doneCount = checks.filter(Boolean).length;
    document.getElementById('checklist-progress').textContent = `${doneCount} of ${info.docs.length} checked`;
  };

  const listEl = document.getElementById('permit-checklist');
  listEl.innerHTML = info.docs
    .map(
      (doc, idx) => `
      <label class="flex items-start gap-3 p-3 rounded-lg border border-pine/10 dark:border-white/10 bg-mist/55 dark:bg-pine-deep cursor-pointer hover:border-terracotta/50 transition-colors">
        <input type="checkbox" data-doc-idx="${idx}" ${checks[idx] ? 'checked' : ''} class="mt-0.5 w-4 h-4 rounded accent-[#D96B27] cursor-pointer shrink-0" />
        <span class="text-xs sm:text-sm leading-snug ${checks[idx] ? 'line-through text-pine/50 dark:text-[#7E9289]' : 'text-pine dark:text-[#F4F1EA]'}">${doc}</span>
      </label>
    `
    )
    .join('');

  listEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const idx = Number(cb.dataset.docIdx);
      checks[idx] = cb.checked;
      const labelText = cb.nextElementSibling;
      labelText.className = `text-xs sm:text-sm leading-snug ${cb.checked ? 'line-through text-pine/50 dark:text-[#7E9289]' : 'text-pine dark:text-[#F4F1EA]'}`;
      updateChecklistUI();
    });
  });

  updateChecklistUI();
  refreshIcons();
}

function initPermitChecker() {
  document.getElementById('permit-state-select').addEventListener('change', (e) => {
    state.permit.state = e.target.value;
    renderPermitChecker();
  });

  document.querySelectorAll('.traveler-type-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.permit.traveler = btn.dataset.traveler;
      renderPermitChecker();
    });
  });

  renderPermitChecker();
}

function getMateAIReply(query) {
  const q = query.toLowerCase().trim();

  if (q.includes('meghalaya') || (q.includes('5-day') && (q.includes('route') || q.includes('shillong')))) {
    return 'Ideal 5-Day Meghalaya Loop (from Guwahati Airport):\n• Day 1: Guwahati → Umiam Lake → Shillong (Police Bazar & Ward’s Lake).\n• Day 2: Shillong → Laitlum Canyons → Sohra (Nohkalikai Falls & Mawsmai Cave).\n• Day 3: Nongriat Double-Decker Living Root Bridge trek (start 7 AM).\n• Day 4: Sohra → Mawlynnong Village → Dawki & Shnongpdeng riverside camp.\n• Day 5: Morning Umngot boating → Krang Suri Falls → return to Guwahati.\nNo ILP required; best clarity in Dawki is Nov–Mar.';
  }

  if (q.includes('tawang') || (q.includes('ilp') && q.includes('arunachal'))) {
    return 'Tawang Permit Rules:\n• Indian Citizens: Online e-ILP via eilp.arunachal.gov.in (₹100–₹400, 1–24 hrs). Mention Bhalukpong checkpost, West Kameng & Tawang districts.\n• Foreign Nationals: Protected Area Permit (PAP) needed 7–14 days in advance via an approved local tour operator (group of 2+).\n• Tip: Break the drive from Guwahati at Dirang (Day 1) to acclimatize before crossing 13,700 ft Sela Pass.';
  }

  if (q.includes('kaziranga') || q.includes('rhino') || q.includes('safari')) {
    return 'Best Time for Kaziranga National Park:\n• Open window: November 1 to April 30 (closed May–Oct due to Brahmaputra monsoon floods).\n• Peak sightings: Mid-January to March after controlled grass burning improves visibility.\n• Safari tip: Pair an early 5:30 AM Elephant Safari in Bagori/Kohora with an afternoon Jeep Safari in Western or Central range. Nearest airport: Jorhat (96 km) or Guwahati (215 km).';
  }

  if (q.includes('food') || q.includes('eat') || q.includes('dish') || q.includes('cuisine')) {
    return 'Must-Try North East India Dishes:\n• Assam: Masor Tenga (sour fish curry), Khar & Duck with Ash Gourd.\n• Meghalaya: Jadoh (red rice cooked in pork/chicken stock) & Dohneiiong (black sesame gravy).\n• Nagaland: Smoked Pork with Akhuni (fermented soybean) & Bamboo Shoot.\n• Manipur: Eromba & Chak-hao (black rice kheer).\n• Sikkim & Tawang: Phagshapa, Thukpa, Zan & freshly steamed Momos.\n• Mizoram & Tripura: Mizo Bai stew and Tripuri Mui Borok.';
  }

  if (q.includes('permit') || q.includes('ilp') || q.includes('pap')) {
    return 'Quick Permit Summary (Indian Citizens):\n• ILP Required: Arunachal Pradesh, Nagaland, Manipur, Mizoram.\n• No State ILP: Assam, Meghalaya, Tripura.\n• Sikkim: Open for Gangtok/Pelling; Protected Area Permit required only for Tsomgo Lake, Nathula Pass & North Sikkim (apply 24 hrs prior via Gangtok agent with Voter ID/Passport—not Aadhaar).';
  }

  if (q.includes('budget') || q.includes('cost') || q.includes('inr') || q.includes('cheap')) {
    return 'Typical Daily Per-Person Budgets in North East India:\n• Backpacker: ₹2,000–₹2,800/day (homestays, shared Sumos, local meals).\n• Comfort: ₹3,200–₹4,800/day (boutique lodges, private cab split between 2–4).\n• Boutique: ₹6,000–₹8,500/day (tea bungalows, Innova SUV, private guides).\nUse the Trip & Budget Architect above to get an exact INR breakdown.';
  }

  if (q.includes('airport') || q.includes('flight') || q.includes('reach')) {
    return 'Primary Regional Gateways:\n• Guwahati (GAU): Main hub for Assam, Meghalaya & Western Arunachal.\n• Bagdogra (IXB) / Pakyong (PYG): Best for Gangtok & Sikkim.\n• Dimapur (DMU): Nagaland & Dzukou Valley.\n• Imphal (IMF): Manipur & Loktak Lake.\n• Lengpui (AJL): Aizawl, Mizoram.\n• Agartala (IXA): Tripura & Unakoti.';
  }

  const matchedDest = DESTINATIONS.find(
    (d) => q.includes(d.id) || q.includes(d.name.toLowerCase()) || q.includes(d.state.toLowerCase())
  );
  if (matchedDest) {
    return `${matchedDest.name} (${matchedDest.state}):\n• Best Season: ${matchedDest.season} (${matchedDest.days})\n• Est. Budget: ${formatINR(matchedDest.budgetINR)}/day | Permit: ${matchedDest.permit === 'ILP' ? 'ILP Required' : 'No state entry ILP'}\n• Top Highlight: ${matchedDest.highlights[0]}\n• Try Local Food: ${matchedDest.food}\n• Nearest Airport: ${matchedDest.airport}`;
  }

  return 'I can help you plan across all 8 North East states! Ask me about a specific place (e.g. "Ziro", "Dzukou", "Loktak", "Gangtok", "Majuli", "Unakoti", "Aizawl"), ILP/PAP permits, airports, best seasons, INR budgets, or tap one of the starter questions below.';
}

function appendChatMessage(role, text) {
  const container = document.getElementById('mateai-messages');
  if (!container) return;
  const wrap = document.createElement('div');
  wrap.className = role === 'user' ? 'flex justify-end' : 'flex justify-start';

  const bubble = document.createElement('div');
  bubble.className =
    role === 'user'
      ? 'max-w-[85%] rounded-xl rounded-br-sm px-3.5 py-2.5 bg-pine text-mist dark:bg-terracotta-dark dark:text-white text-xs sm:text-sm leading-relaxed whitespace-pre-line'
      : 'max-w-[90%] rounded-xl rounded-bl-sm px-3.5 py-2.5 bg-white dark:bg-pine-card border border-pine/10 dark:border-white/10 text-pine dark:text-[#F4F1EA] text-xs sm:text-sm leading-relaxed whitespace-pre-line';
  bubble.textContent = text;

  wrap.appendChild(bubble);
  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;
}

function toggleChat(forceState) {
  const panel = document.getElementById('mateai-panel');
  const toggleBtn = document.getElementById('mateai-toggle');
  if (!panel || !toggleBtn) return;

  state.chatOpen = typeof forceState === 'boolean' ? forceState : !state.chatOpen;
  panel.classList.toggle('hidden', !state.chatOpen);
  panel.classList.toggle('flex', state.chatOpen);
  toggleBtn.setAttribute('aria-expanded', String(state.chatOpen));

  if (state.chatOpen) {
    setTimeout(() => document.getElementById('mateai-input')?.focus(), 80);
  }
}

function resetChat() {
  const container = document.getElementById('mateai-messages');
  if (!container) return;
  container.innerHTML = '';
  appendChatMessage(
    'bot',
    'Namaskar! I am MateAI, your North East India travel desk. Tap a quick question below or ask about any of the 8 states, permits, routes, or local food.'
  );
}

function initMateAI() {
  resetChat();

  document.getElementById('mateai-toggle').addEventListener('click', () => toggleChat());
  document.getElementById('mateai-close').addEventListener('click', () => toggleChat(false));
  document.getElementById('mateai-clear').addEventListener('click', () => {
    resetChat();
    showToast('MateAI conversation cleared');
  });

  const handlePrompt = (text) => {
    const clean = text.trim();
    if (!clean) return;
    appendChatMessage('user', clean);
    const reply = getMateAIReply(clean);
    setTimeout(() => appendChatMessage('bot', reply), 140);
  };

  document.querySelectorAll('.mateai-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      handlePrompt(chip.textContent);
    });
  });

  const form = document.getElementById('mateai-form');
  const input = document.getElementById('mateai-input');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;
    handlePrompt(input.value);
    input.value = '';
  });
}

function initApp() {
  initTheme();
  initMobileMenu();
  renderFilterBars();
  renderDestinations();
  updateSavedCounters();
  initExplorerAndModals();
  initTripArchitect();
  initPermitChecker();
  initMateAI();
  fetchAllWeather();
  window.addEventListener('online', () => fetchAllWeather());
  window.addEventListener('offline', () => {
    DESTINATIONS.forEach((d) => {
      if (!state.weather[d.id] || state.weather[d.id].status !== 'ok') {
        state.weather[d.id] = { status: 'offline' };
      }
    });
    syncAllCardWeatherUI();
  });
  refreshIcons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
