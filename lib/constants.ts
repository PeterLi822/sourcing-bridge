export const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sourcing-bridge.web.app';
export const SITE_NAME = 'SourcingBridge';

// The date our product prices and freight quotes were last checked against
// the CJ Dropshipping API. Update this ONLY when products.json has actually
// been regenerated from a fresh API pull — never bump it just to look fresh.
export const DATA_REVIEWED_DATE = '2026-10-05';

export const DATA_SOURCE = {
  name: 'CJ Dropshipping API v2',
  url: 'https://developers.cjdropshipping.com/',
  freightLane: 'China → Canada',
};

export const CONTACT_EMAIL = 'info@lumipick.ca';
