import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Truck, Package, Ruler, AlertTriangle, Lightbulb, Users } from 'lucide-react';
import { PRODUCTS, getProduct, getWriteup, formatUSD, DATA_DATE } from '@/lib/products';
import { SITE_URL } from '@/lib/constants';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — Cost ${formatUSD(p.cost_usd)}, Landed ${formatUSD(p.landed_ca_usd)}`,
    description: `Sourcing data for ${p.name}: supplier cost ${formatUSD(p.cost_usd)}, freight to Canada ${formatUSD(p.freight_ca.price_usd)}, landed cost ${formatUSD(p.landed_ca_usd)}. Honest writeup included.`,
    openGraph: {
      title: `${p.name} | SourcingBridge`,
      description: `Cost ${formatUSD(p.cost_usd)} · Landed CA ${formatUSD(p.landed_ca_usd)}`,
      url: `${SITE_URL}/products/${p.slug}`,
      ...(p.image ? { images: [{ url: p.image }] } : {}),
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const w = getWriteup(p.slug);
  const fr = p.freight_ca;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/products" className="text-sm text-emerald-700 inline-flex items-center gap-1 mb-6 hover:gap-2 transition-all">
        <ArrowLeft className="w-4 h-4" /> All products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {p.image && (
          <div className="bg-gray-50 rounded-2xl aspect-square relative overflow-hidden">
            <Image src={p.image} alt={p.name} fill className="object-contain p-8" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        )}
        <div>
          <div className="text-sm text-emerald-700 font-medium mb-2">{p.category}</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">{p.name}</h1>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <div className="p-4">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Supplier cost</div>
                <div className="text-2xl font-bold">{formatUSD(p.cost_usd)}</div>
              </div>
              <div className="p-4 bg-emerald-50">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Landed (Canada)</div>
                <div className="text-2xl font-bold text-emerald-700">{formatUSD(p.landed_ca_usd)}</div>
              </div>
            </div>
            <div className="border-t border-gray-200 p-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-600">
                  Freight: <strong className="text-gray-900">{formatUSD(fr.price_usd)}</strong>
                  {fr.carrier && <> via {fr.carrier}</>}
                  {fr.aging_days && <> · {fr.aging_days} days</>}
                  {p.freight_options_count ? <> · {p.freight_options_count} options quoted</> : null}
                </span>
              </div>
              {p.weight_g != null && (
                <div className="flex items-start gap-2">
                  <Package className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <span className="text-gray-600">Weight: <strong className="text-gray-900">{p.weight_g} g</strong></span>
                </div>
              )}
              {p.dims && (
                <div className="flex items-start gap-2">
                  <Ruler className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                  <span className="text-gray-600">Dimensions: <strong className="text-gray-900">{p.dims.replace(/long=|width=|height=/g, '')} mm</strong></span>
                </div>
              )}
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Data checked {DATA_DATE} via CJ Dropshipping API (China → Canada). Prices move — treat as a snapshot, not a quote.
          </p>
          <Link href={`/calculator?preset=${p.slug}`}
            className="inline-block mt-4 bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-600 transition-colors text-sm">
            Run this in the landed-cost calculator
          </Link>
        </div>
      </div>

      {w && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2"><Package className="w-5 h-5 text-emerald-600" /> Why this product</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{w.why_this_product}</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2"><Users className="w-5 h-5 text-emerald-600" /> Who it's for</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{w.who_its_for}</p>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-600" /> Watch outs</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{w.watch_outs}</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-emerald-600" /> Sourcing tip</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{w.sourcing_tip}</p>
          </div>
        </div>
      )}
    </main>
  );
}
