import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from 'next/dynamic';
import publicationsData from '../../public/publications.json';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const PublicationCard = dynamic(() => import('./PublicationCard'), { ssr: false });

export default function PublicationsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Publications</CardTitle>
          <CardDescription className="text-lg mt-2">
            Explore our research papers and academic contributions
          </CardDescription>
        </CardHeader>
      </Card>

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
            <div className="space-y-6">
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