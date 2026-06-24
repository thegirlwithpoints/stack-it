export interface Merchant {
  store: string;
  cardOffer: string;
  rakutenPoints: string;
  lastUpdated?: string;
}

export interface Card {
  id: string;
  name: string;
  shortName: string;
  color: string;
  sheetName: string;
  merchants: Merchant[];
}

// Edit name/endDate here to repurpose for future promo events.
export const PROMO_EVENT = {
  name: 'The Big Stack',
  endDate: '2026-06-26T23:59:59',
};

export const SITE_META = {
  lastUpdated: 'June 24, 2026',
  updateFrequency: 'daily',
};

export const STATIC_CARDS: Card[] = [
  {
    id: 'chase',
    name: 'CSP',
    shortName: 'CSP',
    color: 'chase',
    sheetName: 'Chase Sapphire',
    merchants: [
      { store: 'NordVPN', cardOffer: '15% cash back', rakutenPoints: '98x points' },
      { store: 'Viator', cardOffer: '8% cash back', rakutenPoints: '10x points' },
      { store: 'iHerb', cardOffer: '5% cash back', rakutenPoints: '10x points' },
      { store: 'KiwiCo', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Beautyrest', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Tuft & Needle', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'SkinCeuticals', cardOffer: '5% cash back', rakutenPoints: '15x points' },
      { store: 'StubHub', cardOffer: '5% cash back', rakutenPoints: '10x points' },
      { store: 'Thrive Causemetics', cardOffer: '12% cash back', rakutenPoints: '10x points' },
      { store: "L'AGENCE", cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'Tonal', cardOffer: '$250 cash back', rakutenPoints: '10x points' },
      { store: 'Steelcase', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'iRobot', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Liquid I.V.', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'Musely', cardOffer: '$30 cash back', rakutenPoints: '10x points' },
      { store: 'Ancestry', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Airalo', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'Pandora Jewelry', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Vitamix', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'Mattress Firm', cardOffer: '3% cash back', rakutenPoints: 'up to 10x points' },
      { store: 'AARP', cardOffer: '$8 cash back', rakutenPoints: 'up to 3,500 points' },
      { store: 'Total Wireless', cardOffer: '25% cash back', rakutenPoints: '1,500 points' },
      { store: 'Straight Talk', cardOffer: '15% cash back', rakutenPoints: '1,000 points' },
    ],
  },
  {
    id: 'csr',
    name: 'CSR',
    shortName: 'CSR',
    color: 'csr',
    sheetName: 'Chase Sapphire Reserve',
    merchants: [
      { store: 'NordVPN', cardOffer: '15% cash back', rakutenPoints: '98x points' },
      { store: 'Beautyrest', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Tuft & Needle', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Thrive Causemetics', cardOffer: '12% cash back', rakutenPoints: '10x points' },
      { store: 'Musely', cardOffer: '$30 cash back', rakutenPoints: '10x points' },
    ],
  },
  {
    id: 'united',
    name: 'United',
    shortName: 'United',
    color: 'united',
    sheetName: 'United',
    merchants: [
      { store: 'NordVPN', cardOffer: '15% cash back', rakutenPoints: '98x points' },
      { store: 'SkinCeuticals', cardOffer: '10% cash back', rakutenPoints: '15x points' },
      { store: 'KiwiCo', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Beautyrest', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Tuft & Needle', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Thrive Causemetics', cardOffer: '12% cash back', rakutenPoints: '10x points' },
      { store: 'Cole Haan', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: "L'AGENCE", cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'Tonal', cardOffer: '$250 cash back', rakutenPoints: '10x points' },
      { store: 'Steelcase', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'iRobot', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Liquid I.V.', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'Musely', cardOffer: '$30 cash back', rakutenPoints: '10x points' },
      { store: 'Ancestry', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Pandora Jewelry', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'AARP', cardOffer: '$8 cash back', rakutenPoints: 'up to 3,500 points' },
      { store: 'Total Wireless', cardOffer: '25% cash back', rakutenPoints: '1,500 points' },
    ],
  },
  {
    id: 'hyatt',
    name: 'Hyatt',
    shortName: 'Hyatt',
    color: 'hyatt',
    sheetName: 'World of Hyatt',
    merchants: [
      { store: 'NordVPN', cardOffer: '15% cash back', rakutenPoints: '98x points' },
      { store: 'SkinCeuticals', cardOffer: '10% cash back', rakutenPoints: '15x points' },
      { store: 'KiwiCo', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Beautyrest', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Tuft & Needle', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Thrive Causemetics', cardOffer: '12% cash back', rakutenPoints: '10x points' },
      { store: 'Cole Haan', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: "L'AGENCE", cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'Tonal', cardOffer: '$250 cash back', rakutenPoints: '10x points' },
      { store: 'Steelcase', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'iRobot', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Liquid I.V.', cardOffer: '15% cash back', rakutenPoints: '10x points' },
      { store: 'Musely', cardOffer: '$30 cash back', rakutenPoints: '10x points' },
      { store: 'Ancestry', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Pandora Jewelry', cardOffer: '10% cash back', rakutenPoints: '10x points' },
      { store: 'Mattress Firm', cardOffer: '3% cash back', rakutenPoints: 'up to 10x points' },
      { store: 'AARP', cardOffer: '$8 cash back', rakutenPoints: 'up to 3,500 points' },
      { store: 'Straight Talk', cardOffer: '15% cash back', rakutenPoints: '1,000 points' },
    ],
  },
  {
    id: 'amex',
    name: 'AP',
    shortName: 'AP',
    color: 'amex',
    sheetName: 'Amex',
    merchants: [
      { store: 'Kérastase', cardOffer: 'Spend $200+, earn $20 back', rakutenPoints: '10x points' },
      { store: 'Ray-Ban', cardOffer: 'Spend $175+, earn $35 back, up to 2x (total $70)', rakutenPoints: 'up to 10x points' },
      { store: 'Sunglass Hut', cardOffer: 'Spend $200+, earn $30 back', rakutenPoints: 'up to 10x points' },
      { store: 'Oakley', cardOffer: 'Spend $150+, earn $30 back, up to 2x (total $60)', rakutenPoints: 'up to 10x points' },
      { store: 'EyeBuyDirect', cardOffer: 'Spend $75+, earn $20 back', rakutenPoints: 'up to 10x points' },
      { store: 'Under Armour', cardOffer: 'Spend $50+, earn $10 back', rakutenPoints: '10x points' },
      { store: 'HEYDUDE', cardOffer: 'Spend $100+, earn $20 back', rakutenPoints: '10x points' },
      { store: 'Sur La Table', cardOffer: 'Spend $100+, earn $15 back', rakutenPoints: '10x points' },
      { store: 'Liquid I.V.', cardOffer: 'Spend $75+, earn $15 back, up to 2x (total $30)', rakutenPoints: '10x points' },
      { store: 'Expedia', cardOffer: 'Earn 10% back on prepaid hotels, up to $125', rakutenPoints: 'up to 10x points' },
      { store: 'Hotels.com', cardOffer: 'Earn 10% back on prepaid hotels, up to $100', rakutenPoints: 'up to 10x points' },
      { store: 'Rent the Runway', cardOffer: 'Spend $99+, earn $20 back', rakutenPoints: '10x points' },
      { store: 'Grammarly', cardOffer: 'Spend $100+, earn $20 back', rakutenPoints: '1,500 points' },
    ],
  },
];
