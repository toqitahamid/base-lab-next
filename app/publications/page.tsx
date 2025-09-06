import PublicationCard from './PublicationCard';
import publicationsData from '../../public/publications.json';
import fs from 'fs/promises';
import path from 'path';
import PageHeader from '@/components/PageHeader';

async function getBibtexData() {
  const bibtexPath = path.join(process.cwd(), 'public', 'publication.bib');
  const bibtexData = await fs.readFile(bibtexPath, 'utf-8');
  return bibtexData;
}

export default async function PublicationsPage() {
  const bibtexData = await getBibtexData();
  const publications = publicationsData;

  // Flatten all publications into a single list, sorted by year (newest first)
  const allPublications = publications
    .flatMap(yearGroup => 
      yearGroup.items.map(item => ({ ...item, year: yearGroup.year }))
    )
    .sort((a, b) => b.year - a.year);

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader 
        title="Publications" 
        description="Explore our research papers and academic contributions"
      />

      {/* Publications list with improved styling */}
      <section className="mb-12">
        <div className="space-y-1 bg-white rounded-lg shadow-sm border overflow-hidden">
          {allPublications.map((publication, index) => (
            <PublicationCard 
              key={index} 
              publication={{ ...publication, citationKey: publication.citationKey ?? '' }} 
              bibtexData={bibtexData}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}