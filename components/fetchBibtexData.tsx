import { cache } from 'react';

const fetchBibtexData = cache(async () => {
  try {
    const res = await fetch('/publication.bib');
    const text = await res.text();
    return text;
  } catch (error) {
    console.error('Error fetching BibTeX data:', error);
    return '';
  }
});

export default fetchBibtexData;