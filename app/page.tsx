import { loadCards, getLastUpdated } from '@/lib/sheets';
import { PROMO_EVENT } from '@/lib/data';
import Header from '@/components/Header';
import CountdownTimer from '@/components/CountdownTimer';
import CardTabs from '@/components/CardTabs';

// Revalidate every 5 minutes so edits to the Google Sheet go live quickly
export const revalidate = 300;

export default async function Home() {
  const { cards, source } = await loadCards();
  const lastUpdated = getLastUpdated(cards);

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <Header />

        <CountdownTimer eventName={PROMO_EVENT.name} endDateISO={PROMO_EVENT.endDate} />

        <CardTabs cards={cards} lastUpdated={lastUpdated} source={source} />
      </div>

      <footer className="text-center pb-8 text-xs text-gray-400">
        <p>
          Built with ♥ for deal stackers ·{' '}
          <a
            href="https://www.rakuten.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            Open Rakuten
          </a>
        </p>
        <p className="mt-1">
          Rates change frequently — always verify offers before purchasing.
        </p>
      </footer>
    </main>
  );
}
