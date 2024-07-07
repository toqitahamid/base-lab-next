'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PublicationListProps {
  data: any[];
}

const PublicationList: React.FC<PublicationListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((publication: any) => (
        <Card key={publication.title}>
          <CardHeader>
            <CardTitle>{publication.title}</CardTitle>
            <CardDescription>{publication.authors.join(", ")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Year: {publication.year}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={publication.link}>Read more</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PublicationList;