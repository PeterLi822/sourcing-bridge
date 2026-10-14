import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Report an incorrect price, request a correction, or ask a question about SourcingBridge.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-10">
        Found an error, have a correction, or a general question? Email us directly — we don&apos;t have a
        contact form on this site yet, so email is currently the only way to reach us.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {[
          { emoji: '🐛', title: 'Report an Error', desc: 'Spotted an incorrect price, freight quote, or product detail? Tell us and we’ll review it.' },
          { emoji: '📊', title: 'Data Correction', desc: 'If you can point to a current, official source that contradicts something on this site, we want to fix it — see our methodology for how we source data.' },
          { emoji: '🤝', title: 'Partnerships', desc: 'Business inquiries. Note: we have no referral partnership with any company — see our affiliate disclosure.' },
        ].map(item => (
          <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <div className="text-2xl mb-2">{item.emoji}</div>
            <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">General questions &amp; error reports</h2>
          <a href="mailto:contact@sourcing-bridge.web.app" className="text-amber-600 hover:underline font-medium">
            contact@sourcing-bridge.web.app
          </a>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Partnership &amp; business inquiries</h2>
          <a href="mailto:info@sourcing-bridge.web.app" className="text-amber-600 hover:underline font-medium">
            info@sourcing-bridge.web.app
          </a>
        </div>
        <p className="text-xs text-gray-400 pt-2 border-t border-gray-100">
          We aim to respond to error reports and data corrections within a few business days. See our{' '}
          <Link href="/editorial-policy" className="underline">editorial policy</Link> for how we handle
          correction requests, and our <Link href="/methodology" className="underline">methodology</Link>{' '}
          for how our estimates are built.
        </p>
      </div>
    </main>
  );
}
