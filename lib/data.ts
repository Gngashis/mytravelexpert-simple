export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  region: 'Darjeeling' | 'Sikkim' | 'Bhutan' | 'Dooars';
  duration: string;
  nights: number;
  days: number;
  priceStarting: number;
  badge?: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  region: 'Darjeeling' | 'Sikkim' | 'Bhutan' | 'Dooars';
  altitude: string;
  bestTime: string;
  image: string;
  description: string;
  keyAttractions: string[];
  featuredPackagesCount: number;
}

export const BUSINESS_INFO = {
  name: "My Travel Expert",
  tagline: "Bespoke Himalayan Expeditions & Luxury Stays",
  phone: "+91 80012 47778",
  phoneRaw: "+918001247778",
  whatsappUrl: "https://wa.me/918001247778?text=Hello%20My%20Travel%20Expert%2C%20I%20would%20like%20to%20plan%20a%20bespoke%20Himalayan%20journey.",
  email: "infomytravelexpert4306@gmail.com",
  officeAddress: "Hill Cart Road, Siliguri, West Bengal 734001, India (Gateway to Darjeeling, Sikkim & Bhutan)",
  instagram: "https://www.instagram.com/mytravelexpert.in/",
  facebook: "https://www.facebook.com/profile.php?id=61587508877978",
  operatingHours: "24/7 Dedicated Mountain Concierge Desk",
};

export const PACKAGES: TourPackage[] = [
  {
    id: "pkg-darjeeling-4n-5d",
    slug: "darjeeling-heritage-tea-mist",
    title: "Darjeeling Heritage & Tea Mist Odyssey",
    destination: "Darjeeling, Kurseong & Mirik",
    region: "Darjeeling",
    duration: "4 Nights / 5 Days",
    nights: 4,
    days: 5,
    priceStarting: 18500,
    badge: "Heritage Signature",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1563811771046-ba984ff30900?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Immerse yourself in colonial elegance and misty mountain ridges. Experience private dawn viewings of Mt. Kanchenjunga from Tiger Hill, private tea estate walks with master tea sommeliers, and heritage luxury suites in the Queen of the Hills.",
    highlights: [
      "VIP sunrise over Mount Kanchenjunga (8,586m) from Tiger Hill with private tea service",
      "Exclusive first-class ride aboard the UNESCO Darjeeling Himalayan Toy Train",
      "Private walking tour of century-old Makaibari & Glenburn tea estates with leaf-tasting session",
      "Private access to Himalayan Mountaineering Institute (HMI) museum & zoo",
      "Sunset high-tea on the colonial veranda overlooking the emerald tea valleys"
    ],
    itinerary: [
      {
        day: 1,
        title: "Siliguri to Darjeeling (Ascent to 6,700 ft)",
        description: "Private chauffeur greeting at Bagdogra Airport (IXB) or NJP. Enjoy a scenic 3-hour climb through emerald tea terraces. Check into your heritage luxury bungalow and enjoy evening tea overlooking the mist."
      },
      {
        day: 2,
        title: "Tiger Hill Sunrise & Colonial Heritage Circuit",
        description: "Early 4:00 AM private drive to Tiger Hill. Witness the sun ignite Kanchenjunga in brilliant gold and pink hues. Visit historic Ghoom Monastery, Batasia Loop, and spend the afternoon at the Himalayan Mountaineering Institute."
      },
      {
        day: 3,
        title: "Tea Connoisseur Trail & Toy Train Ride",
        description: "Board the heritage steam-driven Toy Train for a nostalgic ride through mountain loops. Afternoon private walking tour of a functioning heritage tea factory with tea sommelier sampling session."
      },
      {
        day: 4,
        title: "Mirik Lake & Indo-Nepal Pine Ridges",
        description: "Day excursion to serene Mirik Lake through winding cardamom groves and alpine pine forests. Cross the scenic border view at Pashupati Nagar before returning for a farewell candlelight dinner."
      },
      {
        day: 5,
        title: "Farewell to the Queen of Hills",
        description: "Relaxed breakfast overlooking the snow peaks. Private descent back to Bagdogra Airport with curated boxes of single-estate first-flush Darjeeling tea."
      }
    ],
    included: [
      "Dedicated luxury sanitized 4WD SUV with veteran mountain pilot",
      "4 nights accommodation in 5-star colonial heritage tea estate or luxury boutique resort",
      "Daily gourmet breakfasts and chef-curated Himalayan dinners",
      "All Darjeeling sightseeing permits, parking, toll taxes and fuel",
      "Private tea sommelier tasting experience & UNESCO Toy Train tickets"
    ]
  },
  {
    id: "pkg-sikkim-6n-7d",
    slug: "sikkim-alpine-odyssey",
    title: "Sikkim Alpine Odyssey: Gangtok, Lachung & Lachen",
    destination: "Gangtok, Lachen, Gurudongmar Lake & Yumthang Valley",
    region: "Sikkim",
    duration: "6 Nights / 7 Days",
    nights: 6,
    days: 7,
    priceStarting: 28999,
    badge: "High Altitude Expedition",
    heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Venture into North Sikkim's pristine alpine frontier. From the sacred turquoise waters of Gurudongmar Lake (17,800 ft) to the rhododendron blooms of Yumthang Valley, experience high-altitude grandeur with seasoned Himalayan mountain specialists.",
    highlights: [
      "Expedition to Gurudongmar Lake at 17,800 ft — one of the highest sacred glacial lakes on Earth",
      "Yumthang Valley of Flowers and rejuvenating natural hot sulfur spring baths",
      "Historic Indo-China Silk Route pass at Nathula Pass (14,140 ft) & sacred Tsomgo Glacial Lake",
      "Exclusive monk blessing ceremony at Rumtek & Enchey Monasteries",
      "Pelling glass skywalk cantilevered over deep ravines with unobstructed Kanchenjunga panoramas"
    ],
    itinerary: [
      {
        day: 1,
        title: "Siliguri to Gangtok (Capital of Sikkim)",
        description: "Scenic drive along the raging Teesta River. Arrive in Gangtok (5,500 ft) and stroll MG Marg. Check into luxury mountain retreat."
      },
      {
        day: 2,
        title: "Tsomgo Sacred Lake & Baba Mandir / Nathula Pass",
        description: "Ascend to 12,400 ft to the glacial Tsomgo (Changu) Lake, nestled against jagged snow walls. Visit Nathula Pass on the Indo-China frontier."
      },
      {
        day: 3,
        title: "Gangtok to Lachen (Alpine Wilderness Gateway)",
        description: "Journey into North Sikkim along roaring waterfalls including Seven Sisters Falls and Singhik viewpoint. Check into cozy alpine lodge in Lachen (9,000 ft)."
      },
      {
        day: 4,
        title: "Sacred Gurudongmar Lake (17,800 ft) to Lachung",
        description: "Dawn expedition across the windswept Tibetan plateau to Gurudongmar Lake. Marvel at crystal-clear emerald water reflecting glacial peaks. Evening drive to Lachung."
      },
      {
        day: 5,
        title: "Yumthang Valley of Flowers & Zero Point",
        description: "Explore Yumthang Valley surrounded by snow peaks and hot springs. Optional ascent to Zero Point (Yumesamdong at 15,300 ft) where roads end in permanent snow."
      },
      {
        day: 6,
        title: "Lachung to Gangtok via Phodong Monastery",
        description: "Scenic return drive to Gangtok with private stop at historic Phodong Monastery. Enjoy a celebratory traditional Sikkimese feast."
      },
      {
        day: 7,
        title: "Descent & Departure",
        description: "Comfortable drive down to Bagdogra / NJP with memories of towering snow frontiers."
      }
    ],
    included: [
      "Specialized 4x4 Luxury Expedition Vehicle for high-altitude North Sikkim terrain",
      "All Inner Line Permits (ILP) and Nathula Protected Area clearances handled seamlessly",
      "6 nights in premium mountain suites & boutique alpine lodges with heated rooms",
      "Comprehensive meals: breakfast, gourmet trail snacks, and hot local dinners",
      "Oxygen cylinder equipped on-board with 24/7 mountain paramedic consultation"
    ]
  },
  {
    id: "pkg-bhutan-5n-6d",
    slug: "bhutan-thunder-dragon-odyssey",
    title: "Kingdom of Bhutan: Thunder Dragon Odyssey",
    destination: "Phuentsholing, Thimphu, Punakha & Paro",
    region: "Bhutan",
    duration: "5 Nights / 6 Days",
    nights: 5,
    days: 6,
    priceStarting: 45500,
    badge: "Royal Cultural Passage",
    heroImage: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Step into the mythical land of Gross National Happiness. Ascend through dramatic mountain passes, visit ancient fortress dzongs, and hike to the world-famous cliffside Tiger's Nest Monastery with personal licensed Bhutanese royalty guides.",
    highlights: [
      "Iconic pilgrimage hike to Paro Taktsang (Tiger's Nest Monastery) suspended on a 3,000-foot cliff",
      "Punakha Dzong — Palace of Great Happiness at the scenic confluence of Pho Chhu and Mo Chhu rivers",
      "Dochula Pass (10,300 ft) featuring 108 memorial chortens and Himalayan 360-degree vistas",
      "Traditional Bhutanese herbal hot stone bath and archery masterclass",
      "Full Sustainable Development Fee (SDF) & Visa clearance facilitation included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Gateway Phuentsholing to Thimphu",
        description: "VIP border reception at Phuentsholing. Smooth biometric immigration and scenic mountain drive along pristine valleys to Thimphu (7,600 ft)."
      },
      {
        day: 2,
        title: "Cultural Heart of Thimphu & Buddha Dordenma",
        description: "Visit the gigantic gilded bronze Buddha Dordenma (169 ft tall), Tashichho Dzong, National Memorial Chorten, and the royal weaving center."
      },
      {
        day: 3,
        title: "Dochula Pass & Punakha Valley",
        description: "Cross the majestic Dochula Pass lined with 108 memorial chortens. Descend into subtropical Punakha Valley and tour the majestic Punakha Dzong."
      },
      {
        day: 4,
        title: "Punakha to Paro Valley",
        description: "Drive back along the winding alpine rivers to historic Paro. Visit the National Museum (Ta Dzong) and Rinpung Dzong. Traditional archery experience."
      },
      {
        day: 5,
        title: "The Sacred Tiger's Nest Monastery Trek",
        description: "Ascend through pine and prayer-flag laden trails to Paro Taktsang. Meditate inside ancient cliff chambers. Evening hot-stone bath."
      },
      {
        day: 6,
        title: "Departure with Royal Memories",
        description: "Transfer to Paro Airport or scenic chauffeured return to Siliguri gateway."
      }
    ],
    included: [
      "Certified National Bhutanese Government English-speaking Guide throughout",
      "Government Sustainable Development Fee (SDF) and Bhutan entry visa processing",
      "5 nights in 4-star and 5-star Bhutanese luxury heritage resorts",
      "Private luxury coaster / SUV transfer across all valleys",
      "All museum entrances, monument fees, and cultural experiences"
    ]
  },
  {
    id: "pkg-dooars-3n-4d",
    slug: "dooars-wilderness-tea-trail",
    title: "Dooars Wilderness & Tea Trail Safari",
    destination: "Jaldapara, Gorumara & Buxa Tiger Reserve",
    region: "Dooars",
    duration: "3 Nights / 4 Days",
    nights: 3,
    days: 4,
    priceStarting: 14500,
    badge: "Wilderness Reserve",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1563811771046-ba984ff30900?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Explore the dense foothill rainforests of the Eastern Himalayas. Encounter the endangered Indian One-Horned Rhinoceros, herd of wild elephants, and lush tea gardens flanked by crystalline rivers.",
    highlights: [
      "Early morning elephant safari inside Jaldapara National Park to track One-Horned Rhinos",
      "Open-top 4WD jungle safari through Gorumara National Park & Murti Riverbank",
      "Trek to historic Buxa Fort on the Bhutan frontier and Jayanti riverbed picnic",
      "Stay in eco-luxury forest lodges surrounded by deep canopy and peacock calls"
    ],
    itinerary: [
      {
        day: 1,
        title: "Siliguri to Gorumara Forest Canopy",
        description: "Chauffeured pickup and 2-hour drive through Sevoke Coronation Bridge into Dooars. Evening watchtower safari in Gorumara."
      },
      {
        day: 2,
        title: "Jaldapara Rhino Trail & Forest Watchtowers",
        description: "Early dawn elephant safari into tall elephant-grass savannah. Afternoon visit to South Khayerbari leopard rehabilitation reserve."
      },
      {
        day: 3,
        title: "Buxa Tiger Reserve & Jayanti Hills",
        description: "Full day expedition to the rugged Jayanti riverbed and historic Buxa Fort ruins. Candlelight barbecue at your forest eco-resort."
      },
      {
        day: 4,
        title: "Tea Estate Morning Walk & Departure",
        description: "Morning stroll through a Dooars organic tea plantation before return transfer to Siliguri / NJP."
      }
    ],
    included: [
      "Private sanitized SUV with dedicated wildlife naturalist driver",
      "Jungle safari permits, forest entry fees, and elephant ride permits",
      "3 nights in boutique eco-resorts with riverside balconies",
      "All daily meals featuring fresh organic regional delicacies"
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-darjeeling",
    slug: "darjeeling",
    name: "Darjeeling",
    tagline: "Queen of the Himalayas",
    region: "Darjeeling",
    altitude: "6,700 ft (2,042 m)",
    bestTime: "March to May & October to December",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    description: "Perched along narrow mountain ridges against the colossal backdrop of Mt. Kanchenjunga, Darjeeling is a world of colonial grace, fragrant tea gardens, and rolling clouds.",
    keyAttractions: ["Tiger Hill Sunrise", "Darjeeling Toy Train", "Batasia Loop", "Ghoom Monastery", "Makaibari Tea Estate"],
    featuredPackagesCount: 4
  },
  {
    id: "dest-sikkim",
    slug: "sikkim",
    name: "Sikkim",
    tagline: "The Alpine Sacred Paradise",
    region: "Sikkim",
    altitude: "5,500 ft to 17,800 ft",
    bestTime: "April to June & September to November",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    description: "India's first fully organic state and a land of dramatic elevation shifts. Experience crystal-clear sacred lakes, towering rhododendron valleys, and profound Buddhist serenity.",
    keyAttractions: ["Gurudongmar Lake", "Yumthang Valley of Flowers", "Tsomgo Lake", "Nathula Pass", "Pelling Skywalk"],
    featuredPackagesCount: 6
  },
  {
    id: "dest-bhutan",
    slug: "bhutan",
    name: "Bhutan",
    tagline: "The Last Himalayan Kingdom",
    region: "Bhutan",
    altitude: "7,000 ft to 10,300 ft",
    bestTime: "September to November & March to May",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80",
    description: "A sanctuary where gross national happiness eclipses material GDP. Pristine pine-clad valleys, cliff-hanging monastic sanctuaries, and untouched architectural purity.",
    keyAttractions: ["Paro Taktsang (Tiger's Nest)", "Punakha Dzong", "Dochula Pass", "Buddha Dordenma", "Thimphu Dzong"],
    featuredPackagesCount: 3
  },
  {
    id: "dest-dooars",
    slug: "dooars",
    name: "Dooars",
    tagline: "Gateway to Wildlife & Tea",
    region: "Dooars",
    altitude: "300 ft to 1,500 ft",
    bestTime: "November to April",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    description: "Dense rainforests, wild riverbeds, and elephant corridors where the great Himalayan foothills meet the North Bengal floodplains.",
    keyAttractions: ["Jaldapara Rhino Safari", "Gorumara Watchtowers", "Buxa Fort", "Jayanti Riverbank", "Murti River"],
    featuredPackagesCount: 2
  },
  {
    id: "dest-kalimpong",
    slug: "kalimpong-kurseong",
    name: "Kalimpong & Kurseong",
    tagline: "Where the Hills Meet the Clouds",
    region: "Darjeeling",
    altitude: "4,100 ft to 4,800 ft",
    bestTime: "Year Round",
    image: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?auto=format&fit=crop&w=1200&q=80",
    description: "Gentle mountain retreats celebrated for rare orchid nurseries, British heritage boarding schools, and tranquil tea gardens untouched by city rush.",
    keyAttractions: ["Deolo Hill", "Eagle's Craig", "Dow Hill Forest", "Durpin Monastery", "Cactus Nursery"],
    featuredPackagesCount: 3
  }
];

export const TRUST_PILLARS = [
  {
    title: "Rooted Himalayan Masters",
    subtitle: "Native Eastern Himalaya Insiders",
    description: "Our planners and mountain pilots are born in Darjeeling and Sikkim. We unlock secret viewpoints and private monastery chambers inaccessible to standard tour agencies."
  },
  {
    title: "24/7 Ground Concierge",
    subtitle: "Real-Time Mountain Support",
    description: "Weather and mountain permits in Sikkim and Bhutan change fast. Our on-ground dispatch team monitors routes 24/7 to guarantee uninterrupted luxury."
  },
  {
    title: "Sanitized 4WD Luxury Fleet",
    subtitle: "Veteran Mountain Drivers",
    description: "Travel exclusively in high-clearance 4WD vehicles (Innova Crysta, Fortuner) piloted by certified mountain safety drivers with zero accident records."
  },
  {
    title: "Handpicked Luxury Stays",
    subtitle: "5-Star Tea Estates & Chalets",
    description: "Every property in our portfolio is personally audited for heated comfort, gourmet culinary standards, panoramic peak views, and authentic heritage."
  }
];
