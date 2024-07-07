'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResearchListProps {
  data: any[];
}

const ResearchList: React.FC<ResearchListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((project: any) => (
        <Card key={project.title}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={project.link}>Read more</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ResearchList;