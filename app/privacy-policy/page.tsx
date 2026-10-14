import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, DATA_REVIEWED_DATE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated {DATA_REVIEWED_DATE}</p>

      <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
        <p>
          The landed-cost calculator itself runs entirely in your browser — your inputs
          are not transmitted to or stored on any SourcingBridge server. This page describes what our
          third-party analytics and advertising providers may collect when you visit this site.
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-6">Analytics</h2>
        <p>
          We use Google Analytics 4 (GA4) to understand aggregate site traffic. GA4 may collect data such as
          pages visited, approximate location, device/browser type, and other usage signals, typically via
          cookies and/or device identifiers. This data is processed by Google according to Google's own
          privacy policy, not directly controlled by SourcingBridge.
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-6">Advertising</h2>
        <p>
          We use Google AdSense to display advertisements. AdSense and its advertising partners may use
          cookies, IP addresses, and device identifiers to serve and measure ads, including potentially
          personalized ads based on your activity across sites. You can review and adjust ad personalization
          at Google's{' '}
          <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="underline">
            Ad Settings
          </a>{' '}
          page, and learn more about how Google uses data from sites that use its services at{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="underline">
            google.com/policies/technologies/partner-sites
          </a>.
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-6">What we do not directly control</h2>
        <p>
          SourcingBridge does not operate its own database of visitor personal information, but that does
          not mean no data is collected: our analytics and advertising vendors (Google) independently collect
          and retain certain data — such as cookies, IP address, and device identifiers — under their own
          retention policies, which we do not control. If you want a fuller picture of what Google collects
          and how long it's retained, see Google's own privacy documentation linked above.
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-6">Third-party links</h2>
        <p>
          Some links (e.g., to CJ Dropshipping) are plain outbound links — we currently earn no commission
          from them, as described in our{' '}
          <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link>. Clicking
          through takes you to a third-party site with its own privacy policy, which we don't control.
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-6">US, Canadian, and international visitors</h2>
        <p>
          This site is intended for visitors in the United States and Canada, but is publicly accessible from
          anywhere. We do not currently operate a region-specific consent or data-request process (e.g., a
          dedicated GDPR/CCPA/PIPEDA request form); if you have a privacy question or request, contact us
          using the details below and we'll do our best to help, but for a full accounting of what Google's
          services collect, Google's own controls (linked above) are authoritative.
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-6">Contact</h2>
        <p>
          Privacy questions can be sent to{' '}
          <a href="mailto:contact@sourcing-bridge.web.app" className="text-amber-600 hover:underline">
            contact@sourcing-bridge.web.app
          </a>. See also our <Link href="/contact" className="underline">Contact page</Link>.
        </p>
      </div>
    </main>
  );
}
