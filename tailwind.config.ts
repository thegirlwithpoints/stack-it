import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chase: {
          DEFAULT: '#1a56db',
          light: '#eff6ff',
          border: '#93c5fd',
          tab: '#1e40af',
        },
        united: {
          DEFAULT: '#0a7d41',
          light: '#f0fdf4',
          border: '#86efac',
          tab: '#166534',
        },
        hyatt: {
          DEFAULT: '#b8860b',
          light: '#fffbeb',
          border: '#fcd34d',
          tab: '#92400e',
        },
        amex: {
          DEFAULT: '#be185d',
          light: '#fff1f2',
          border: '#fda4af',
          tab: '#9d174d',
        },
        csr: {
          DEFAULT: '#4338ca',
          light: '#eef2ff',
          border: '#a5b4fc',
          tab: '#3730a3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-chase', 'bg-chase-light', 'border-chase', 'border-chase-border', 'text-chase', 'ring-chase',
    'bg-united', 'bg-united-light', 'border-united', 'border-united-border', 'text-united', 'ring-united',
    'bg-hyatt', 'bg-hyatt-light', 'border-hyatt', 'border-hyatt-border', 'text-hyatt', 'ring-hyatt',
    'bg-amex', 'bg-amex-light', 'border-amex', 'border-amex-border', 'text-amex', 'ring-amex',
    'bg-csr', 'bg-csr-light', 'border-csr', 'border-csr-border', 'text-csr', 'ring-csr',
    'hover:bg-chase-light', 'hover:bg-united-light', 'hover:bg-hyatt-light', 'hover:bg-amex-light', 'hover:bg-csr-light',
  ],
};

export default config;
