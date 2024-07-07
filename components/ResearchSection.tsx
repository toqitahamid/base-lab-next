"use client";

import DataFetcher from "@/components/DataFetcher";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResearchSection = () => (
  <section className="w-full mt-8">
    <h2 className="text-2xl font-semibold mb-4">Latest Research</h2>
    <DataFetcher url="/research.json">
      {(data) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project: any) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="line-clamp-2 h-14">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-4 h-24">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={project.link}>Read more</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </DataFetcher>
  </section>
);

export default ResearchSection;