import { type Card, type Merchant, STATIC_CARDS } from './data';

function parseCSVLine(line: string): string[] {
  const cells: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      cells.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  cells.push(current.trim());
  return cells;
}

function parseCSV(csv: string): string[][] {
  return csv
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map(parseCSVLine);
}

async function fetchSheetCSV(sheetId: string, sheetName: string): Promise<Merchant[] | null> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 300 }, // refresh every 5 minutes
    });
    if (!res.ok) return null;
    const text = await res.text();
    if (text.includes('<!DOCTYPE') || text.includes('google-signin')) return null;

    const rows = parseCSV(text);
    if (rows.length < 2) return null;

    // Skip header row; expect: Store | Card Offer | Rakuten Points | Last Updated
    return rows.slice(1).map((cols) => ({
      store: cols[0] ?? '',
      cardOffer: cols[1] ?? '',
      rakutenPoints: cols[2] ?? '',
      lastUpdated: cols[3] ?? undefined,
    })).filter((m) => m.store);
  } catch {
    return null;
  }
}

export async function loadCards(): Promise<{ cards: Card[]; source: 'sheet' | 'static' }> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) return { cards: STATIC_CARDS, source: 'static' };

  const results = await Promise.all(
    STATIC_CARDS.map(async (card) => {
      const sheetMerchants = await fetchSheetCSV(sheetId, card.sheetName);
      if (!sheetMerchants) return card;
      return { ...card, merchants: sheetMerchants };
    })
  );

  const anyFromSheet = results.some((_, i) => {
    const orig = STATIC_CARDS[i].merchants;
    return results[i].merchants !== orig;
  });

  return { cards: results, source: anyFromSheet ? 'sheet' : 'static' };
}

export function getLastUpdated(cards: Card[]): string | null {
  const dates: Date[] = [];
  for (const card of cards) {
    for (const m of card.merchants) {
      if (m.lastUpdated) {
        const d = new Date(m.lastUpdated);
        if (!isNaN(d.getTime())) dates.push(d);
      }
    }
  }
  if (!dates.length) return null;
  const latest = new Date(Math.max(...dates.map((d) => d.getTime())));
  return latest.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });
}
