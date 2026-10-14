import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, DATA_REVIEWED_DATE, DATA_SOURCE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Methodology & Data Sources',
  description:
    'How SourcingBridge selects products, where our prices and freight quotes come from, and how the landed-cost calculator works.',
  alternates: { canonical: `${SITE_URL}/methodology` },
};

export default function MethodologyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Methodology &amp; Data Sources</h1>
      <p className="text-sm text-gray-400 mb-8">Last reviewed {DATA_REVIEWED_DATE}</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <p>
          This page documents exactly where our numbers come from and how products get picked.
          The figures on product pages should always match what's described here — if you ever spot a
          mismatch, please tell us (see <Link href="/contact" className="underline">Contact</Link>).
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">1. Price data source</h2>
        <p>
          Supplier costs come from the <a href={DATA_SOURCE.url} className="underline" target="_blank" rel="noopener">{DATA_SOURCE.name}</a>,
          queried programmatically. For each product we take the cheapest in-stock variant's sell price
          as the supplier cost. The dataset currently on the site was pulled on {DATA_REVIEWED_DATE}.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">2. Freight quotes</h2>
        <p>
          Freight figures are real quotes from the same API for the {DATA_SOURCE.freightLane} lane,
          calculated per product variant and quantity 1. We show the cheapest available option along with
          its carrier name and estimated delivery window, plus how many options were quoted in total.
          Freight is the line item most likely to change day to day — treat every quote as a snapshot.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">3. Landed cost</h2>
        <p>
          "Landed (Canada)" on product pages = supplier cost + cheapest quoted freight for that product.
          The <Link href="/calculator" className="underline">landed-cost calculator</Link> generalizes this:
          (product cost × quantity) + freight + (duty rate × goods value). Duty rates are user-entered
          because they depend on the product's HS code and destination — we don't guess them for you.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">4. How products are selected</h2>
        <p>
          A human editor reviews catalog data and shortlists products that are: shippable as single units
          (no oversized freight), priced in a range that leaves margin headroom, evergreen rather than
          seasonal, and free of health claims or regulated categories we can't verify. Products with
          medical or weight-loss claims are excluded outright. No supplier pays for inclusion —
          there is no paid placement on this site, ever.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">5. What we don't do</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>We don't invent sales figures, reviews, or trend claims. Demand signals shown (like listing counts) come from the API.</li>
          <li>We don't promise ROI or profit margins. The writeups do arithmetic on real numbers; they never guarantee outcomes.</li>
          <li>We don't sell products, handle orders, or act as a sourcing agent. This is an information site.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8">6. Refresh cadence</h2>
        <p>
          The current dataset is a seed snapshot from {DATA_REVIEWED_DATE}. Daily automated refresh is
          planned; until it is live, each product page shows the exact date its numbers were checked.
          When you see a newer date, the numbers are newer too.
        </p>
      </div>
    </main>
  );
}
