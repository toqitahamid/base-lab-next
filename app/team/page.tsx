import React from 'react';
import fetchData from '@/components/DataFetcherServer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TeamSection from '@/components/TeamSection';

export default async function TeamPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Our Team</CardTitle>
          <CardDescription className="text-lg mt-2">
            Meet the dedicated researchers and professionals behind our cutting-edge work in Computer Vision and Deep Learning.
          </CardDescription>
        </CardHeader>
      </Card>
      <Separator className="my-8" />
      <CardContent>
        <TeamSection />
      </CardContent>
    </main>
  );
}