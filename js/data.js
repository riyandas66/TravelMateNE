export const DESTINATIONS = [
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

export const ALL_STATES = [
  'Assam',
  'Meghalaya',
  'Arunachal Pradesh',
  'Sikkim',
  'Nagaland',
  'Manipur',
  'Mizoram',
  'Tripura'
];

export const CATEGORIES = [
  'All',
  'Wildlife',
  'Waterfalls & Caves',
  'Mountains & Monasteries',
  'Lakes & Islands',
  'Valleys & Culture',
  'Heritage'
];

export const TIER_CONFIG = {
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

export const PERMIT_DATA = {
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

export const STATE_GATEWAYS = {
  Assam: 'Guwahati (GAU) / Jorhat (JRH)',
  Meghalaya: 'Guwahati (GAU) / Shillong (SHL)',
  'Arunachal Pradesh': 'Guwahati (GAU) / Itanagar (HGI)',
  Sikkim: 'Bagdogra (IXB) / Pakyong (PYG)',
  Nagaland: 'Dimapur (DMU)',
  Manipur: 'Imphal (IMF)',
  Mizoram: 'Lengpui, Aizawl (AJL)',
  Tripura: 'Agartala (IXA)'
};

/**
 * Formats a numeric value into Indian Rupee (INR) currency notation.
 * @param {number} amount - Monetary value in INR.
 * @returns {string} Formatted currency string prefixed with ₹.
 */
export function formatINR(amount) {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

/**
 * Re-renders Lucide SVG icons in the DOM when the CDN script is available.
 * @returns {void}
 */
export function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/**
 * Displays a transient toast notification at the bottom center of the screen.
 * @param {string} message - Message to display to the user.
 * @returns {void}
 */
export function showToast(message) {
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

/**
 * Safely reads a string value from localStorage with fallback on storage errors.
 * @param {string} key - Storage key to retrieve.
 * @param {string|null} [fallback=null] - Fallback value if unavailable.
 * @returns {string|null} Stored value or fallback.
 */
export function safeStorageGet(key, fallback = null) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Safely writes a string value to localStorage without throwing in restricted contexts.
 * @param {string} key - Storage key to persist.
 * @param {string} value - String value to store.
 * @returns {boolean} True if write succeeded, false otherwise.
 */
export function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
