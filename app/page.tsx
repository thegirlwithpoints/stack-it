import { loadCards } from '@/lib/sheets';
import { PROMO_EVENT, SITE_META } from '@/lib/data';
import Header from '@/components/Header';
import CountdownTimer from '@/components/CountdownTimer';
import CardTabs from '@/components/CardTabs';
import InfoSection from '@/components/InfoSection';

export const revalidate = 300;

export default async function Home() {
  const { cards, source } = await loadCards();

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <Header />

        <CountdownTimer eventName={PROMO_EVENT.name} endDateISO={PROMO_EVENT.endDate} />

        {/* Last updated + update cadence note */}
        <p className="text-center text-xs text-gray-400 -mt-2 mb-5">
          Deals last updated{' '}
          <span className="font-semibold text-gray-600">{SITE_META.lastUpdated}</span>
          {' '}· updated {SITE_META.updateFrequency} · offers may not reflect the most current rate
        </p>

        <CardTabs cards={cards} source={source} />

        <InfoSection />
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
        <p className="mt-1">Always verify offers before purchasing.</p>
      </footer>
    </main>
  );
}
