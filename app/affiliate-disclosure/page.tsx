import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, DATA_REVIEWED_DATE, CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How SourcingBridge handles advertising and third-party links — we currently earn no commission from any outgoing links.',
  alternates: { canonical: `${SITE_URL}/affiliate-disclosure` },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Affiliate Disclosure</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated {DATA_REVIEWED_DATE}</p>

      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <p>
          SourcingBridge links out to third-party platforms such as CJ Dropshipping and 1688 for reference.
          <strong> We have no referral partnership, affiliate agreement, or commercial relationship of any
          kind with CJ Dropshipping, Alibaba, 1688</strong> (or with any other company). Clicking through
          those links <strong>earns SourcingBridge no commission</strong>.
        </p>
        <p>
          We reference these platforms because they are where the underlying product and freight data comes
          from — a useful next step for readers who want to verify a price or place an order themselves.
          We would reference them either way; no commercial relationship guarantees or influences the
          recommendation.
        </p>
        <p>
          Product selection is fully independent: no supplier pays for inclusion, placement, or a better
          writeup — see our <Link href="/methodology" className="underline">methodology</Link>.
        </p>
        <p>
          The only revenue this site plans to earn is display advertising (Google AdSense), once approved.
          If that ever changes — for example, if we enter a referral arrangement in the future — we will
          update this page and label the affected links before it takes effect.
        </p>
        <p>
          If you have questions about a specific link, contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-700 hover:underline">{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </main>
  );
}
