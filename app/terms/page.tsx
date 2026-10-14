import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, DATA_REVIEWED_DATE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  alternates: { canonical: `${SITE_URL}/terms` },
};
export default function Terms() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <p>SourcingBridge provides product sourcing information for informational purposes only. Nothing on this site constitutes purchasing, financial, or professional advice.</p>
        <p>Product costs and freight quotes are snapshots from the date shown on each page and change over time. Always confirm current pricing, shipping terms, and duties with the platform or supplier before placing an order.</p>
        <p>SourcingBridge is not affiliated with CJ Dropshipping, Alibaba, 1688, or any supplier. Links to third-party sites are plain informational links — we currently earn no commission from them; see our <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link> for details.</p>
        <p>We do not sell products, process orders, or act as a sourcing agent. Any transaction you make with a third-party platform is between you and that platform.</p>
        <p>Data is provided &quot;as is&quot; without warranty of any kind. We make reasonable efforts to keep data current but cannot guarantee accuracy — see <Link href="/contact" className="underline">Contact</Link> to report an error.</p>
        <p className="text-gray-400">Last updated: {DATA_REVIEWED_DATE}</p>
      </div>
    </main>
  );
}
