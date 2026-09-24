// All BIFF x NESPRESSO Hospitality locations, geocoded via Google Places.
// category: "meal" | "experience"
const PLACES = [
  // ---- MEAL ----
  { category: "meal", name: "On The Plate", sub: "Breakfast (at Hotel)", address: "Paradise Hotel, main B/D 1F", lat: 35.1599291, lng: 129.1640967, placeId: "ChIJlynFtkKNaDURSPtkzbXYUEc" },
  { category: "meal", name: "La Scala", sub: "Lunch (at Hotel)", address: "Paradise Hotel, Annex B/D 2F", lat: 35.1599291, lng: 129.1640967, placeId: "ChIJb8R0Wn7vaDURSL8QQ9aVX-I" },
  { category: "meal", name: "Haeundae Ireumnan Amso Galbi", sub: "Dinner (Local Restaurant)", address: "22 Dalmaji-gil", lat: 35.1619104, lng: 129.1671691, placeId: "ChIJVWdhSWiNaDURqvIATcsN-00" },
  { category: "meal", name: "Geumsu Bokguk", sub: null, address: "23, Jungdong 1-ro 43beon-gil", lat: 35.1624205, lng: 129.1645061, placeId: "ChIJb6ju4GeNaDURuR1LsbcI5lw" },
  { category: "meal", name: "Kongbatgol Sundubu", sub: null, address: "51-4 Jwadongsunhwan-ro", lat: 35.1712362, lng: 129.1662158, placeId: "ChIJ1eZIzpKNaDURwPGY7-OrnHc" },
  { category: "meal", name: "Geodae Dwaeji Gukbap", sub: null, address: "16-2 Dalmaji-gil", lat: 35.1619238, lng: 129.1665543, placeId: "ChIJaS-hgX-NaDURpmMZgKoNn_E" },
  { category: "meal", name: "Haeundae Gaya Milmyeon", sub: null, address: "27 Jwadongsunhwan-ro", lat: 35.1688521, lng: 129.1663464, placeId: "ChIJf9C8wG-NaDURVEtK1GCwBmA" },
  { category: "meal", name: "BBQ Chicken", sub: null, address: "5 Gunam-ro", lat: 35.1634079, lng: 129.1593907, placeId: "ChIJ58SnDwCNaDURGaed45yYJ2k" },
  { category: "meal", name: "Gunam Roast", sub: null, address: "12 Gunam-ro, 12beon-gil", lat: 35.1624974, lng: 129.1589156, placeId: "ChIJ5ShFWQCNaDURCh-09tqQIiU" },
  { category: "meal", name: "Sinsa Kkotgejang", sub: null, address: "202-ho, 257 Haeundaehaebyeon-ro", lat: 35.1597081, lng: 129.1595155, placeId: "ChIJ8_GPyHeNaDURha_9MZpINOY" },
  { category: "meal", name: "Uttuk", sub: null, address: "25 Gunam-ro", lat: 35.1619037, lng: 129.1606834, placeId: "ChIJPRylzpONaDURKEmx6GNvpgE" },
  { category: "meal", name: "Gyo Woo Jung", sub: "B2B Clients", address: "Pales de CZ, 24 Haeundaehaebyeon-ro 298beon-gil", lat: 35.160128, lng: 129.1665765, placeId: "ChIJoXBvnkqNaDURpzw0987mUUQ" },
  { category: "meal", name: "Le Dorer", sub: "B2B Clients", address: "37 Marine City 3-ro", lat: 35.1554848, lng: 129.1466401, placeId: "ChIJ3yQ_9a6SaDURZ1fPnia4NUA" },

  // ---- KEY VENUES ----
  { category: "venue", name: "Busan Cinema Center", address: "120 Suyeonggangbyeon-daero, Haeundae-gu", lat: 35.1711671, lng: 129.1271917, placeId: "ChIJD2H59MOSaDURcTxRbHWyNqI" },
  { category: "venue", name: "Paradise Hotel Busan", address: "296 Haeundaehaebyeon-ro, Haeundae-gu", lat: 35.1601338, lng: 129.1646875, placeId: "ChIJcewmsUKNaDURvdd647woro8" },
  { category: "venue", name: "Lavi de Atlan", address: "37 Gunam-ro, Haeundae-gu", lat: 35.1610456, lng: 129.1614329, placeId: "ChIJj1Zdu12NaDURAo5jP4ik_y4" },

  // ---- EXPERIENCES ----
  { category: "experience", name: "Busan Movie Experience Museum", sub: null, address: "12, Daecheong-ro 126beon-gil, Jung-gu", lat: 35.101702, lng: 129.0337655, placeId: "ChIJ2eNoiHTpaDUROvt2dSyLeI4" },
  { category: "experience", name: "Museon Haeundae", sub: null, address: "2F, 39 Jungdong 1-ro, Haeundae-gu", lat: 35.1622445, lng: 129.1635947, placeId: "ChIJQSKO8meNaDURtti3nfoGCo8" },
  { category: "experience", name: "Busan Museum of Contemporary Art", sub: null, address: "1191 Nakdongnam-ro, Saha-gu", lat: 35.1092764, lng: 128.9427503, placeId: "ChIJjWpvtAPDaDURcEIlgF6Spnw" },
  { category: "experience", name: "Skyline Luge Busan", sub: null, address: "205 Gijanghaean-ro, Gijang-eup, Gijang-gun", lat: 35.1940567, lng: 129.2186386, placeId: "ChIJ-5-zWheNaDUR5_hcfQgCFk8" },
  { category: "experience", name: "Haedong Yonggungsa Temple", sub: null, address: "86 Yonggung-gil, Gijang-eup, Gijang-gun", lat: 35.1884543, lng: 129.2231109, placeId: "ChIJwabeuxuMaDURXC4Rb21AQaE" },
  { category: "experience", name: "Spaland Centum City", sub: null, address: "Shinsegae Department Store, 35 Centum nam-daero", lat: 35.1682338, lng: 129.1295279, placeId: "ChIJDT_5v8aSaDURXW8rEbumGh8" },
  { category: "experience", name: "Shinsegae Dept. Store Centum City", sub: null, address: "35 Centum nam-daero, Haeundae-gu", lat: 35.1689218, lng: 129.1296311, placeId: "ChIJSSw7slWTaDURjMs-oU61YYc" },
  { category: "experience", name: "Taejongdae", sub: null, address: "24 Jeonmang-ro, Yeongdo-gu", lat: 35.05307, lng: 129.0872, placeId: "ChIJOfX1e0zpaDURWq5Hp5x4-SM" },
  { category: "experience", name: "Gukje Market", sub: null, address: "Sinchang-dong 4(sa)-ga, Jung-gu", lat: 35.1013575, lng: 129.0281978, placeId: "ChIJfYLMelSTaDURFlCRfk5W1PA" },
];
