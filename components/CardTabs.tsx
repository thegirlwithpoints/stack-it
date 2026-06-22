'use client';

import { useState } from 'react';
import type { Card } from '@/lib/data';
import MerchantTable from './MerchantTable';

const ACTIVE_CLASSES: Record<string, string> = {
  chase: 'bg-chase text-white shadow-md',
  csr: 'bg-csr text-white shadow-md',
  united: 'bg-united text-white shadow-md',
  hyatt: 'bg-hyatt text-white shadow-md',
  amex: 'bg-amex text-white shadow-md',
};

const INACTIVE_CLASSES: Record<string, string> = {
  chase: 'text-chase bg-white border border-chase-border hover:bg-chase-light',
  csr: 'text-csr bg-white border border-csr-border hover:bg-csr-light',
  united: 'text-united bg-white border border-united-border hover:bg-united-light',
  hyatt: 'text-hyatt bg-white border border-hyatt-border hover:bg-hyatt-light',
  amex: 'text-amex bg-white border border-amex-border hover:bg-amex-light',
};

interface Props {
  cards: Card[];
  source: 'sheet' | 'static';
}

export default function CardTabs({ cards, source }: Props) {
  const [activeId, setActiveId] = useState(cards[0]?.id ?? '');
  const activeCard = cards.find((c) => c.id === activeId) ?? cards[0];

  return (
    <div>
      {/* Tab bar — scrolls horizontally on small screens */}
      <div className="flex gap-2 overflow-x-auto pb-1 mb-5 scrollbar-hide">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setActiveId(card.id)}
            className={`
              flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-bold
              transition-all duration-150 whitespace-nowrap
              ${card.id === activeId ? ACTIVE_CLASSES[card.color] : INACTIVE_CLASSES[card.color]}
            `}
          >
            {card.name}
          </button>
        ))}
      </div>

      {/* Table */}
      {activeCard && (
        <MerchantTable card={activeCard} source={source} />
      )}

      {/* Rakuten note */}
      <p className="mt-3 text-xs text-gray-400 text-center">
        💡 Rakuten defaults to cash back. Switch to points mode in your Rakuten account settings.
      </p>
    </div>
  );
}
