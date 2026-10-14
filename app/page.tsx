import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, Package, BookOpen, ArrowRight, Truck, BadgeDollarSign, ShieldCheck } from 'lucide-react';
import LandedCostCalculator from '@/components/LandedCostCalculator';
import { PRODUCTS, CATEGORIES, DATA_DATE, formatUSD } from '@/lib/products';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Curated China Sourcing for Dropshippers — Real Prices, Real Freight',
  description:
    'SourcingBridge hand-picks products from China with verified factory prices and real freight quotes. Know your true landed cost before you list. Free tools, no signup.',
};

const featured = [...PRODUCTS]
  .sort((a, b) => (b.listed_count ?? 0) - (a.listed_count ?? 0))
  .slice(0, 6);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Know your landed cost <span className="text-emerald-300">before</span> you list
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Hand-picked products from China with verified factory prices and real freight quotes.
            No 1688 Chinese required. No surprises at checkout.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/calculator" className="bg-white text-emerald-800 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center gap-2">
              <Calculator className="w-5 h-5" /> Landed Cost Calculator
            </Link>
            <Link href="/products" className="border-2 border-white/70 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <Package className="w-5 h-5" /> Browse {PRODUCTS.length} Products
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How SourcingBridge works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <BadgeDollarSign className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">1. Real factory prices</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every product shows its actual supplier cost pulled from the CJ Dropshipping API —
              not a "starting at" teaser, the real number.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <Truck className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">2. Real freight quotes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We quote actual shipping options (carrier, price, delivery window) so freight stops
              being the line item that kills your margin.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">3. Honest curation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each pick includes who it fits, what to watch out for, and a sourcing tip.
              We are independent — no supplier pays for placement.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Landed cost calculator</h2>
          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
            Product cost + freight + duties = the number that actually matters.
            Start from a curated product or enter your own numbers.
          </p>
          <LandedCostCalculator />
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured picks</h2>
            <p className="text-gray-500 text-sm mt-1">Prices checked {DATA_DATE} · {CATEGORIES.length} categories</p>
          </div>
          <Link href="/products" className="text-emerald-700 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all text-sm">
            All products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {p.image && (
                <div className="aspect-square bg-gray-50 relative">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              )}
              <div className="p-4">
                <div className="text-xs text-emerald-700 font-medium mb-1">{p.category}</div>
                <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2">{p.name}</h3>
                <div className="flex items-baseline gap-3 text-sm">
                  <span className="text-gray-500">Cost <strong className="text-gray-900">{formatUSD(p.cost_usd)}</strong></span>
                  <span className="text-gray-500">Landed CA <strong className="text-emerald-700">{formatUSD(p.landed_ca_usd)}</strong></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="bg-emerald-900 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <BookOpen className="w-16 h-16 text-emerald-300 shrink-0" />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">New to sourcing from China?</h2>
            <p className="text-emerald-100 mb-4">
              Start with our beginner guides: buying from 1688 without Chinese, and the landed-cost math most sellers get wrong.
            </p>
            <Link href="/guides" className="inline-block bg-white text-emerald-800 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
              Read the guides
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          {SITE_NAME} is an independent information site. Product data via CJ Dropshipping API. Not affiliated with CJ Dropshipping, Alibaba, or 1688.
        </p>
      </section>
    </main>
  );
}
