import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, DATA_REVIEWED_DATE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'How SourcingBridge sources, writes, reviews, and corrects its product data and articles.',
  alternates: { canonical: `${SITE_URL}/editorial-policy` },
};

export default function EditorialPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Editorial Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last reviewed {DATA_REVIEWED_DATE}</p>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-gray-800 mt-2">Who writes this</h2>
        <p>
          Content on SourcingBridge is published under the SourcingBridge organization byline rather than an
          individual name. We don't invent author credentials, client stories, or case studies — everything
          on the site is either directly verifiable or clearly labeled as guidance.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6">How we choose sources</h2>
        <p>We prioritize, in order:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Platform APIs we query directly (CJ Dropshipping API v2) — shown with the exact check date</li>
          <li>Official platform documentation and help centers (CJ Dropshipping, 1688/Alibaba)</li>
          <li>Government trade and customs sources for duty/tax guidance (e.g., CBP, CBSA)</li>
        </ol>
        <p>
          We avoid citing general commercial blog posts as the sole evidence for a specific number.
          Where we can't verify a figure, we say so explicitly, soften the claim, or remove it rather than
          presenting an unverified number as fact.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6">How we handle prices specifically</h2>
        <p>
          Product prices and freight quotes are the most time-sensitive facts we publish. Our policy: a price
          figure only appears on the site with the date it was checked, shown on the same page. We never
          present a stale price as current — see <Link href="/methodology" className="underline">methodology</Link>{' '}
          for the refresh process.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6">Updates and corrections</h2>
        <p>
          Product data and articles are reviewed periodically, and the "Last reviewed" date on each page
          reflects an actual content check, not a build timestamp. If you spot an error, use{' '}
          <Link href="/contact" className="underline">Contact</Link> — we review reports and correct verified
          errors; error reports and data corrections are prioritized over new content.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6">AI-assisted content</h2>
        <p>
          Some drafting on this site is assisted by AI tools, but every published page is reviewed against the
          sources cited on it before publishing — an AI draft is a starting point, not a final source of truth.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6">Independence from suppliers</h2>
        <p>
          We do not accept payment from any supplier or platform to change our data, to feature a specific
          product, or to alter a writeup. Our only planned revenue is display advertising — see our{' '}
          <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link>.
        </p>
      </div>
    </main>
  );
}
