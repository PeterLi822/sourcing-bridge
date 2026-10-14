import Link from 'next/link';
import { Package } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-emerald-700 hover:text-emerald-600 transition-colors">
          <Package className="w-6 h-6" />
          <div>
            <div className="font-bold text-lg leading-tight">SourcingBridge</div>
            <div className="text-xs text-gray-400 leading-tight hidden sm:block">Curated China sourcing for dropshippers</div>
          </div>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-3 text-sm">
          <Link href="/calculator" className="px-3 py-1.5 rounded-md text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
            Calculator
          </Link>
          <Link href="/products" className="px-3 py-1.5 rounded-md text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
            Products
          </Link>
          <Link href="/guides" className="hidden sm:block px-3 py-1.5 rounded-md text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
            Guides
          </Link>
          <Link href="/methodology" className="hidden lg:block px-3 py-1.5 rounded-md text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
            Methodology
          </Link>
          <Link href="/about" className="hidden md:block px-3 py-1.5 rounded-md text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
