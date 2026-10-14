import raw from '@/data/products.json';
import writeupsRaw from '@/data/writeups.json';

export interface FreightQuote {
  carrier: string | null;
  price_usd: number | null;
  aging_days: string | null;
}

export interface Product {
  slug: string;
  category: string;
  name: string;
  sku: string;
  pid: string;
  cost_usd: number;
  weight_g: number | null;
  dims: string | null;
  material: string | null;
  image: string | null;
  freight_ca: FreightQuote;
  freight_options_count: number | null;
  landed_ca_usd: number | null;
  listed_count: number | null;
}

export interface Writeup {
  why_this_product: string;
  who_its_for: string;
  watch_outs: string;
  sourcing_tip: string;
}

interface ProductsFile {
  generated_at: string;
  data_date: string;
  source: string;
  note: string;
  products: Product[];
}

const data = raw as ProductsFile;
const writeups = writeupsRaw as Record<string, Writeup>;

export const PRODUCTS: Product[] = data.products;
export const DATA_DATE = data.data_date;
export const DATA_SOURCE = data.source;
export const DATA_NOTE = data.note;

export const CATEGORIES: string[] = Array.from(
  new Set(PRODUCTS.map((p) => p.category)),
).sort();

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getWriteup(slug: string): Writeup | undefined {
  return writeups[slug];
}

export function productsByCategory(cat: string): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export function formatUSD(n: number | null | undefined): string {
  if (n === null || n === undefined || Number.isNaN(n)) return '—';
  return `$${n.toFixed(2)}`;
}
