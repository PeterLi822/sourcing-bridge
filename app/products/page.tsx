import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, CATEGORIES, DATA_DATE, formatUSD, productsByCategory } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Curated Products — Real Factory Prices & Freight Quotes',
  description:
    'Hand-picked dropshipping products from China with verified supplier costs and real freight quotes. Each pick includes an honest writeup: who it fits, risks, and sourcing tips.',
};

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Curated products</h1>
      <p className="text-gray-600 mb-2 max-w-2xl leading-relaxed">
        {PRODUCTS.length} hand-picked products across {CATEGORIES.length} categories. Every price below
        is a real supplier cost and every freight figure a real quote — checked {DATA_DATE}.
      </p>
      <p className="text-xs text-gray-400 mb-10">
        Freight quotes are China → Canada. Costs in USD. We are independent: no supplier pays for placement.
      </p>

      {CATEGORIES.map((cat) => (
        <section key={cat} className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">{cat}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsByCategory(cat).map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {p.image && (
                  <div className="aspect-square bg-gray-50 relative">
                    <Image src={p.image} alt={p.name} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2">{p.name}</h3>
                  <div className="flex items-baseline gap-3 text-sm">
                    <span className="text-gray-500">Cost <strong className="text-gray-900">{formatUSD(p.cost_usd)}</strong></span>
                    <span className="text-gray-500">Landed CA <strong className="text-emerald-700">{formatUSD(p.landed_ca_usd)}</strong></span>
                  </div>
                  {p.freight_ca.carrier && (
                    <p className="text-xs text-gray-400 mt-1">
                      via {p.freight_ca.carrier} · {p.freight_ca.aging_days} days
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
