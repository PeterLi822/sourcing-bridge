export interface GuideSection { heading: string; body: string }
export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  published: string;
  sections: GuideSection[];
}

import raw from '@/data/guides.json';

const data = raw as { guides: Guide[] };
export const GUIDES: Guide[] = data.guides;

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
