import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, DATA_REVIEWED_DATE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About SourcingBridge',
  description: 'Who runs SourcingBridge, how we pick products, how we make money, and the limitations of our sourcing data.',
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">About SourcingBridge</h1>
      <p className="text-sm text-gray-400 mb-8">Last reviewed {DATA_REVIEWED_DATE}</p>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 text-sm leading-relaxed">
        <p>
          SourcingBridge is a free, independent information site for people who want to source products
          from China — especially dropshippers who don't speak Chinese and don't want to navigate 1688
          alone. We publish hand-picked products with real supplier costs and real freight quotes, plus a
          free landed-cost calculator and beginner guides.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">Who runs this site</h2>
        <p>
          SourcingBridge is run by an independent team based in Toronto, Canada, with hands-on experience
          in e-commerce sourcing and warehouse operations. We don't invent personas or client stories —
          what you see is what we can verify.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">How we pick products</h2>
        <p>
          Products are selected by a human editor from live CJ Dropshipping catalog data, filtered for
          shippability, sensible price points, and evergreen (non-seasonal) demand. Every product page shows
          its real supplier cost, a real freight quote, and an honest writeup covering who it fits and what
          to watch out for. See <Link href="/methodology" className="underline">Methodology</Link> for the full process.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">How we make money</h2>
        <p>
          This site is free and will stay free. We plan to earn through display advertising and, in the
          future, paid sourcing reports. We do not take payment from suppliers for product placement, and we
          have no referral or commission relationship with CJ Dropshipping, Alibaba, or 1688. See our{' '}
          <Link href="/affiliate-disclosure" className="underline">Affiliate Disclosure</Link>.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">Limitations</h2>
        <p>
          Prices and freight quotes are snapshots from the date shown on each page — they move. We are not
          a freight forwarder, customs broker, or sourcing agent, and nothing here is purchasing advice.
          Always confirm current pricing and shipping terms with the platform before you order.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">Contact</h2>
        <p>
          Questions, corrections, or a product you'd like us to review? See our{' '}
          <Link href="/contact" className="underline">Contact</Link> page.
        </p>
      </div>
    </main>
  );
}
