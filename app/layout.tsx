import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Stack It | by @thegirlwithpoints',
  description:
    'See which credit card offers overlap with active Rakuten bonuses. Same purchase. Double reward.',
  openGraph: {
    title: 'Stack It | by @thegirlwithpoints',
    description: 'Same purchase. Double reward.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Stack It | by @thegirlwithpoints',
    description: 'Same purchase. Double reward.',
    creator: '@thegirlwithpoints',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
