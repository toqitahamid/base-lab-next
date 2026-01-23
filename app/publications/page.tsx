import PublicationCard from './PublicationCard';
import publicationsData from '../../data/publications.json';
import fs from 'fs/promises';
import path from 'path';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Publications",
  description: "Explore our comprehensive collection of research publications in Computer Vision, Deep Learning, and Distributed Computing. Featuring groundbreaking work on smart pothole detection, defect analysis, and real-time AI systems.",
  keywords: [
    "research publications",
    "computer vision papers",
    "deep learning publications",
    "academic papers",
    "SIU research",
    "AI research papers",
    "pothole detection paper",
    "defect analysis research",
    "neural network publications",
    "distributed computing papers",
    "scholarly articles",
    "conference papers",
    "journal publications"
  ],
  openGraph: {
    title: "Publications - BASE LAB Research Papers",
    description: "Discover our latest research publications in Computer Vision, Deep Learning, and Distributed Computing from Southern Illinois University.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications - BASE LAB Research Papers",
    description: "Discover our latest research publications in Computer Vision, Deep Learning, and Distributed Computing from Southern Illinois University.",
  },
};

async function getBibtexData() {
  const bibtexPath = path.join(process.cwd(), 'data', 'publication.bib');
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
        <div className="p-6" style={{ backgroundColor: '#faf9f6' }}>
          <div className="divide-y divide-gray-200">
            {allPublications.map((publication, index) => (
              <PublicationCard 
                key={index} 
                publication={{ ...publication, citationKey: publication.citationKey ?? '' }} 
                bibtexData={bibtexData}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}