import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import './globals.css';

const ADSENSE_ID = 'ca-pub-8944442658312749';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SourcingBridge — Curated China Sourcing for Dropshippers',
    template: '%s | SourcingBridge',
  },
  description:
    'Hand-picked products from China with real factory prices and real freight quotes. Calculate your true landed cost before you list — free, no signup.',
  keywords: [
    '1688 dropshipping', 'china sourcing', 'sourcing from china',
    'landed cost calculator', 'dropshipping calculator', 'cj dropshipping',
    'buy from 1688', 'china wholesale',
  ],
  icons: {
    icon:       '/icon.svg',
    shortcut:   '/icon.svg',
    apple:      '/icon.svg',
  },
  authors:    [{ name: SITE_NAME, url: SITE_URL }],
  creator:    SITE_NAME,
  publisher:  SITE_NAME,
  openGraph: {
    type: 'website', locale: 'en_US', url: SITE_URL, siteName: SITE_NAME,
    title: 'SourcingBridge — Curated China Sourcing for Dropshippers',
    description: 'Real factory prices, real freight quotes, true landed cost. Free tools for dropshippers sourcing from China.',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  other: {
    'application-name': SITE_NAME,
    'theme-color': '#047857',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: SITE_NAME,
            url: SITE_URL,
            description: 'Curated China sourcing data and landed-cost calculator for dropshippers.',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'All',
            isAccessibleForFree: true,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            featureList: [
              'Hand-picked products with verified factory prices',
              'Real freight quotes (China to Canada)',
              'Landed cost calculator with duty estimates',
              'Beginner guides to buying from 1688',
              'No account or login required',
            ],
            author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
          })}}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
