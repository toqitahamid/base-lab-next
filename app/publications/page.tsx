import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublicationCard from './PublicationCard';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader 
        title="Publications" 
        description="Explore our research papers and academic contributions"
      />
      

      <Tabs defaultValue={publications[0].year.toString()} className="w-full">
        <TabsList className="mb-8 flex justify-start overflow-x-auto">
          {publications.map((yearGroup) => (
            <TabsTrigger 
              key={yearGroup.year} 
              value={yearGroup.year.toString()}
              className="px-4 py-2"
            >
              {yearGroup.year}
            </TabsTrigger>
          ))}
        </TabsList>
        {publications.map((yearGroup) => (
          <TabsContent key={yearGroup.year} value={yearGroup.year.toString()}>
            <div className="space-y-6">
              {yearGroup.items.map((publication, index) => (
                <PublicationCard 
                  key={index} 
                  publication={{ ...publication, citationKey: publication.citationKey ?? '' }} 
                  bibtexData={bibtexData} 
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}