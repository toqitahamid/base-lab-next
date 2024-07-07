import { cache } from 'react';

const fetchBibtexData = cache(async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const fullUrl = new URL('/publication.bib', baseUrl).toString();
  const res = await fetch(fullUrl);
  const text = await res.text();
  return text;
});

export default fetchBibtexData;

