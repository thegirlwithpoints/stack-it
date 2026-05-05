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
// Set endDate to null or a future date to show the countdown.
export const PROMO_EVENT = {
  name: 'Big Give Week',
  endDate: '2026-05-11T23:59:59',
};

export const SITE_META = {
  lastUpdated: 'May 4, 2026 at 8:00 PM PST',
  updateFrequency: 'daily',
};

export const STATIC_CARDS: Card[] = [
  {
    id: 'chase',
    name: 'Chase Sapphire',
    shortName: 'Chase',
    color: 'chase',
    sheetName: 'Chase Sapphire',
    merchants: [
      { store: 'Therabody', cardOffer: 'Spend on recovery products, earn 15% back', rakutenPoints: '15x points' },
      { store: "Lands' End", cardOffer: '10% back', rakutenPoints: '15x points' },
      { store: 'Tory Burch', cardOffer: '5% back', rakutenPoints: '15x points' },
      { store: 'iHerb', cardOffer: '10% back', rakutenPoints: '15x points' },
      { store: 'AG1', cardOffer: '25% back', rakutenPoints: '15x points' },
      { store: '1800Flowers', cardOffer: '10% back', rakutenPoints: '20x points' },
      { store: 'Ancestry', cardOffer: '10% back', rakutenPoints: '15x points' },
      { store: 'Liquid IV', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Trafalgar', cardOffer: '$200 back', rakutenPoints: '$450 cash back or equivalent points' },
      { store: 'Airalo', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'SIXT', cardOffer: '6% back', rakutenPoints: '15x points' },
      { store: 'Viator', cardOffer: 'Spend $350+, earn $35 back, up to 2x (total $70)', rakutenPoints: '15x points' },
      { store: 'Total Wireless', cardOffer: '25% back', rakutenPoints: '15x points' },
      { store: 'KiwiCo', cardOffer: '10% back', rakutenPoints: '15x points' },
    ],
  },
  {
    id: 'united',
    name: 'United Card',
    shortName: 'United',
    color: 'united',
    sheetName: 'United',
    merchants: [
      { store: 'Therabody', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: "Lands' End", cardOffer: '10% back', rakutenPoints: '15x points' },
      { store: 'Tory Burch', cardOffer: '5% back', rakutenPoints: '15x points' },
      { store: 'iHerb', cardOffer: '10% back', rakutenPoints: '15x points' },
      { store: 'Tommy John', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Maurices', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Ancestry', cardOffer: '10% back', rakutenPoints: '15x points' },
      { store: 'Liquid IV', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Total Wireless', cardOffer: '25% back', rakutenPoints: '15x points' },
      { store: 'DIRECTV', cardOffer: '$50 back', rakutenPoints: 'Up to 97.5x points' },
      { store: 'Viator', cardOffer: 'Spend $350+, earn $35 back, up to 2x (total $70)', rakutenPoints: '15x points' },
    ],
  },
  {
    id: 'hyatt',
    name: 'World of Hyatt',
    shortName: 'Hyatt',
    color: 'hyatt',
    sheetName: 'World of Hyatt',
    merchants: [
      { store: 'Therabody', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Liquid IV', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Maurices', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Moen', cardOffer: '10% back', rakutenPoints: '15x points' },
      { store: 'Yale Locks', cardOffer: '10% back', rakutenPoints: '15x points' },
      { store: 'Tory Burch', cardOffer: '5% back', rakutenPoints: '15x points' },
      { store: 'Babbel', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Shop LC', cardOffer: '15% back', rakutenPoints: '15x points' },
      { store: 'Lindt', cardOffer: 'Expiring soon — act fast', rakutenPoints: '15x points' },
      { store: 'At Home', cardOffer: '5% back', rakutenPoints: '15x points' },
      { store: 'Teleflora', cardOffer: 'Spend $33+, earn $16 back, up to 10x (total $160)', rakutenPoints: '15x points' },
    ],
  },
  {
    id: 'amex',
    name: 'Amex',
    shortName: 'Amex',
    color: 'amex',
    sheetName: 'Amex',
    merchants: [
      { store: 'Ray-Ban', cardOffer: 'Spend $50+, earn 5% back, up to 2x (total $70)', rakutenPoints: '15x points' },
      { store: 'Oakley', cardOffer: 'Spend $150+, earn $16 back, up to 2x (total $65)', rakutenPoints: '15x points' },
      { store: 'Sunglass Hut', cardOffer: 'Spend $200+, earn $30 back', rakutenPoints: '15x points' },
      { store: 'LensCrafters', cardOffer: 'Spend $100+, earn $40 back', rakutenPoints: '15x points' },
      { store: 'ContactsDirect', cardOffer: 'Spend $125+, earn $30 back', rakutenPoints: '15x points' },
      { store: 'Zales', cardOffer: 'Spend $150+, earn $100 back', rakutenPoints: '15x points' },
      { store: 'Kay Jewelers', cardOffer: 'Spend $500+, earn $100 back', rakutenPoints: '15x points' },
      { store: 'Banter by Piercing Pagoda', cardOffer: 'Spend $195+, earn $50 back', rakutenPoints: '15x points' },
      { store: 'AT&T Wireless', cardOffer: 'Spend $65+, earn $30 back (new customers)', rakutenPoints: '65x points' },
      { store: 'Visible', cardOffer: 'Spend $100+, earn $15 back', rakutenPoints: '25x points' },
      { store: 'Glossier', cardOffer: 'Spend $65+, earn $15 back', rakutenPoints: '15x points' },
      { store: 'NOBULL', cardOffer: 'Spend $195+, earn $40 back', rakutenPoints: '15x points' },
      { store: 'Expedia', cardOffer: 'Prepaid hotels, up to $125 back', rakutenPoints: '15x points' },
      { store: 'Saks Fifth Avenue', cardOffer: '$50 semi-annual credit ($50 Jan–Jun, $50 Jul–Dec)', rakutenPoints: '15x points' },
      { store: 'Ancestry', cardOffer: 'Earn 20% back, up to $100', rakutenPoints: '15x points' },
      { store: 'AG1', cardOffer: 'Spend $75+, earn $25 back', rakutenPoints: '15x points' },
      { store: 'Straight Talk', cardOffer: 'Spend $45+, earn $20 back', rakutenPoints: '15x points' },
      { store: '1800Flowers', cardOffer: 'Spend $35+, earn $10 back, up to 4x (total $40)', rakutenPoints: '20x points' },
      { store: 'Teleflora', cardOffer: 'Spend $30+, earn $18 back, up to 10x (total $180)', rakutenPoints: '15x points' },
      { store: 'Brilliant Earth', cardOffer: 'Spend $500+, earn $100 back', rakutenPoints: '15x points' },
    ],
  },
];
