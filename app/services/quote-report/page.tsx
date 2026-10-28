import type { Metadata } from 'next';
import { SITE_URL, CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'China Sourcing Quote Report',
  description:
    'You tell us what you need. We ask suppliers across multiple Chinese wholesale channels and send you a clean comparison report with real quotes and landed-cost estimates — in English, no Chinese needed.',
  alternates: { canonical: `${SITE_URL}/services/quote-report` },
};

const included = [
  {
    title: 'Real supplier quotes, compared',
    desc: 'A side-by-side comparison of 3–5 real supplier quotes for your product (5 suppliers on the Standard plan), including unit price, MOQ, spec differences and lead time.',
  },
  {
    title: 'Supplier background checks',
    desc: 'Verified status, years in business, and responsiveness — so you can judge reliability, not just price.',
  },
  {
    title: 'Landed-cost estimate',
    desc: 'Product price plus estimated shipping to Canada, shown separately. Duties are confirmed at actual clearance and are not included.',
  },
  {
    title: 'Risk flags',
    desc: 'High MOQ, vague specs, shipping volatility, and anything else we spot while sourcing.',
  },
  {
    title: 'A clear recommendation',
    desc: 'Our preferred pick, an alternative, and the suggested next step — usually: order samples first.',
  },
];

const excluded = [
  'We do not place orders, hold your payment, or pay suppliers.',
  'We do not inspect goods, arrange shipping (including LCL consolidation), or handle customs clearance.',
  'We do not guarantee that a supplier will reply, have stock, or hold their price. Quotes are as replied on the sourcing date and are subject to the supplier\u2019s latest confirmation.',
];

const steps = [
  { n: '1', title: 'You send your request and pay', desc: 'See the list below for what we need from you.' },
  { n: '2', title: 'We confirm the scope within 24 hours', desc: 'If we cannot take it on, you get a full refund.' },
  { n: '3', title: 'We source quotes from multiple suppliers', desc: 'Typically contacting 5–10 suppliers and shortlisting 3–5 valid quotes.' },
  { n: '4', title: 'You receive the report within 5 business days', desc: 'Delivered as a PDF plus a comparison table.' },
  { n: '5', title: 'One free round of clarification', desc: 'We explain anything in the report. A fresh sourcing round is charged as a new order.' },
];

const plans = [
  {
    name: 'Basic',
    price: 'CA$49',
    desc: '1 product, 3 supplier quotes + landed-cost estimate.',
    delivery: '5 business days',
  },
  {
    name: 'Standard',
    price: 'CA$89',
    desc: '1 product, 5 suppliers + background checks + landed-cost estimate + sample advice.',
    delivery: '5 business days',
    highlight: true,
  },
  {
    name: 'Extra product',
    price: '+CA$39',
    desc: 'Per additional product, on either plan.',
    delivery: 'Same delivery window',
  },
];

const needed = [
  { title: 'Product', desc: 'Name, photos or links, material, size, color, functional requirements.' },
  { title: 'Quantity', desc: 'Your estimated order volume — this affects the MOQ assessment.' },
  { title: 'Target price', desc: 'A range, or simply \u201cas low as possible\u201d.' },
  { title: 'Destination', desc: 'Canada by default; tell us if it is elsewhere.' },
  { title: 'Timeline', desc: 'Whether you are in a rush.' },
];

export default function QuoteReportPage() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('China Sourcing Quote Report — request')}`;
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">China Sourcing Quote Report</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-10">
        You tell us what you need. We ask suppliers across multiple Chinese wholesale channels, and send
        you a clean comparison report with real quotes and landed-cost estimates — in English, no Chinese
        needed.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mb-4">What you get</h2>
      <div className="space-y-4 mb-12">
        {included.map(item => (
          <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">What this service does not include</h2>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 leading-relaxed mb-12">
        {excluded.map(line => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mb-4">How it works</h2>
      <div className="space-y-4 mb-12">
        {steps.map(step => (
          <div key={step.n} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
              {step.n}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`border rounded-xl p-5 ${plan.highlight ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 bg-white'} shadow-sm`}
          >
            <h3 className="font-semibold text-gray-800 mb-1">{plan.name}</h3>
            <div className="text-2xl font-bold text-gray-900 mb-2">{plan.price}</div>
            <p className="text-sm text-gray-500 leading-relaxed mb-2">{plan.desc}</p>
            <p className="text-xs text-gray-400">{plan.delivery}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 leading-relaxed mb-12">
        If we cannot deliver any valid quote for reasons on our side after confirming the scope, you get
        a full refund. If you change the brief mid-way and a re-source is needed, it is charged as a new
        order.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mb-4">What we need from you</h2>
      <div className="space-y-3 mb-12">
        {needed.map(item => (
          <div key={item.title} className="flex gap-3 text-sm">
            <span className="font-semibold text-gray-800 flex-shrink-0 w-24">{item.title}</span>
            <span className="text-gray-500 leading-relaxed">{item.desc}</span>
          </div>
        ))}
      </div>

      <div className="bg-emerald-700 text-white rounded-2xl p-6 text-center">
        <h2 className="text-lg font-bold mb-2">Ready to start?</h2>
        <p className="text-sm text-emerald-100 mb-4">
          Email us your product details and we will confirm the scope within 24 hours.
        </p>
        <a
          href={mailto}
          className="inline-block bg-white text-emerald-800 font-semibold px-6 py-2.5 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </main>
  );
}
