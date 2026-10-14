import type { Metadata } from 'next';
import Link from 'next/link';
import LandedCostCalculator from '@/components/LandedCostCalculator';
import { DATA_DATE } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Landed Cost Calculator for Dropshippers',
  description:
    'Calculate the true landed cost of products sourced from China: product cost, freight, and duties. Start from real curated products or enter your own numbers. Free, no signup.',
};

export default function CalculatorPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Landed Cost Calculator</h1>
      <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
        The price on the supplier page is never the price you pay. Add freight and duties to get
        your <strong>true landed cost per unit</strong> — the number your retail price has to beat.
        Preset products use real CJ Dropshipping costs and freight quotes checked on {DATA_DATE}.
      </p>
      <LandedCostCalculator />
      <div className="mt-10 prose prose-sm max-w-none text-gray-600">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to read the result</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Total landed</strong> is everything you pay to get the goods to your door (or your customer's door): product cost × quantity, plus freight, plus duties and taxes.</li>
          <li><strong>Per unit</strong> is the number to compare against your planned retail price. A common rule of thumb is retail ≥ 3× landed cost for paid ads to work — treat that as a starting point, not a guarantee.</li>
          <li>Freight is often the biggest surprise: a $0.25 product can carry $4.74 in shipping. That is exactly why we publish real quotes next to every product.</li>
        </ul>
        <p className="mt-4">
          Want the full walkthrough? Read <Link href="/guides/landed-cost-explained" className="text-emerald-700 underline">Landed Cost Explained: The Math Every Dropshipper Gets Wrong</Link>.
        </p>
      </div>
    </main>
  );
}
