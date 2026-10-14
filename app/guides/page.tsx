import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { GUIDES } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Sourcing Guides for Beginners',
  description:
    'Practical guides to sourcing products from China: buying from 1688 without speaking Chinese, understanding landed cost, and avoiding beginner mistakes.',
};

export default function GuidesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Sourcing guides</h1>
      <p className="text-gray-600 mb-10 max-w-2xl leading-relaxed">
        Practical, hype-free guides for buying from China — written from real platform experience, not theory.
      </p>
      <div className="space-y-6">
        {GUIDES.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`}
            className="block bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="font-bold text-xl mb-2">{g.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{g.excerpt}</p>
                <span className="text-emerald-700 text-sm font-medium inline-flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
        {GUIDES.length === 0 && (
          <p className="text-gray-500">Guides are being written — check back soon.</p>
        )}
      </div>
    </main>
  );
}
