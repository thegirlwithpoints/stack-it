import type { Card } from '@/lib/data';

const COLOR_MAP: Record<string, { header: string; badge: string; tag: string }> = {
  chase: {
    header: 'bg-chase text-white',
    badge: 'bg-chase-light text-chase border border-chase-border',
    tag: 'bg-chase-light text-chase',
  },
  united: {
    header: 'bg-united text-white',
    badge: 'bg-united-light text-united border border-united-border',
    tag: 'bg-united-light text-united',
  },
  hyatt: {
    header: 'bg-hyatt text-white',
    badge: 'bg-hyatt-light text-hyatt border border-hyatt-border',
    tag: 'bg-hyatt-light text-hyatt',
  },
  amex: {
    header: 'bg-amex text-white',
    badge: 'bg-amex-light text-amex border border-amex-border',
    tag: 'bg-amex-light text-amex',
  },
};

interface Props {
  card: Card;
  source: 'sheet' | 'static';
}

export default function MerchantTable({ card }: Props) {
  const colors = COLOR_MAP[card.color] ?? COLOR_MAP.chase;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className={colors.header}>
              <th className="text-left font-bold py-3 px-4 w-[28%]">Store</th>
              <th className="text-left font-bold py-3 px-4 w-[38%]">Card Offer</th>
              <th className="text-left font-bold py-3 px-4 w-[34%]">Rakuten Bonus</th>
            </tr>
          </thead>
          <tbody>
            {card.merchants.map((merchant, i) => (
              <tr
                key={`${merchant.store}-${i}`}
                className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="py-3 px-4 font-semibold text-gray-900 align-top">
                  {merchant.store}
                </td>
                <td className="py-3 px-4 text-gray-700 align-top">
                  {merchant.cardOffer}
                </td>
                <td className="py-3 px-4 align-top">
                  <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold ${colors.badge}`}>
                    {merchant.rakutenPoints}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-4 py-2.5 text-xs text-gray-400">
        {card.merchants.length} stacking{' '}
        {card.merchants.length === 1 ? 'opportunity' : 'opportunities'}
      </div>
    </div>
  );
}
