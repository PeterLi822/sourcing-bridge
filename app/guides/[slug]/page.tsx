import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';
import { GUIDES, getGuide } from '@/lib/guides';
import { SITE_URL } from '@/lib/constants';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const g = getGuide(params.slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.excerpt,
    openGraph: {
      title: `${g.title} | SourcingBridge`,
      description: g.excerpt,
      url: `${SITE_URL}/guides/${g.slug}`,
    },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/guides" className="text-sm text-emerald-700 inline-flex items-center gap-1 mb-6 hover:gap-2 transition-all">
        <ArrowLeft className="w-4 h-4" /> All guides
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{g.title}</h1>
      <p className="text-sm text-gray-400 mb-8 inline-flex items-center gap-1.5">
        <Calendar className="w-4 h-4" /> Published {g.published}
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-10 border-l-4 border-emerald-500 pl-4">{g.excerpt}</p>

      <article className="space-y-8">
        {g.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-xl font-bold mb-3">{s.heading}</h2>
            {s.body.split('\n\n').map((para, j) => (
              <p key={j} className="text-gray-600 leading-relaxed mb-3">{para}</p>
            ))}
          </section>
        ))}
      </article>

      <div className="mt-12 bg-emerald-50 border border-emerald-100 rounded-xl p-6">
        <h3 className="font-bold mb-2">Try the numbers yourself</h3>
        <p className="text-sm text-gray-600 mb-4">
          Run these concepts through our landed-cost calculator with real product data.
        </p>
        <Link href="/calculator" className="inline-block bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-600 transition-colors text-sm">
          Open the calculator
        </Link>
      </div>
    </main>
  );
}
