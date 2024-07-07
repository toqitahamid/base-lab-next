import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from 'next/dynamic';
import publicationsData from '../../public/publications.json';

const PublicationCard = dynamic(() => import('./PublicationCard'), { ssr: false });

export default function PublicationsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>
      <Tabs defaultValue={publicationsData[0].year.toString()} className="w-full">
        <TabsList className="mb-8 flex justify-start overflow-x-auto">
          {publicationsData.map((yearGroup) => (
            <TabsTrigger 
              key={yearGroup.year} 
              value={yearGroup.year.toString()}
              className="px-4 py-2"
            >
              {yearGroup.year}
            </TabsTrigger>
          ))}
        </TabsList>
        {publicationsData.map((yearGroup) => (
          <TabsContent key={yearGroup.year} value={yearGroup.year.toString()}>
            <div className="grid grid-cols-1 gap-6">
              {yearGroup.items.map((publication, index) => (
                <PublicationCard key={index} publication={{...publication, type: publication.type as "journal" | "conference", citationKey: publication.citationKey || ''}} />
            ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}