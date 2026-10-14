import Link from 'next/link';
import { Package } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-3">
              <Package className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-lg">SourcingBridge</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Curated China sourcing for dropshippers. Real factory prices, real freight quotes — so you know your landed cost before you list.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/calculator" className="hover:text-white transition-colors">Landed Cost Calculator</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Curated Products</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors">Sourcing Guides</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-white transition-colors">Editorial Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500 border-t border-gray-800 pt-6 mb-6">
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          <Link href="/affiliate-disclosure" className="hover:text-gray-300 transition-colors">Affiliate Disclosure</Link>
        </div>
        <div className="space-y-3">
          <p className="text-xs text-gray-500 text-center">
            <strong className="text-gray-400">Disclaimer:</strong> Product costs and freight quotes are estimates for informational purposes only, based on CJ Dropshipping API data checked on 2026-10-05. Actual prices, shipping times, and duties vary. SourcingBridge is an independent information site and is not affiliated with CJ Dropshipping, Alibaba, or 1688.
          </p>
          <p className="text-xs text-gray-600 text-center">
            © {year} SourcingBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
