"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import fetchBibtexData from '@/components/fetchBibtexData';
import publicationsData from '../../public/publications.json';


const ResearchPage = () => {
  const sponsors = [
    { name: 'USDA', filename: 'usda-logo.png' },
    { name: 'NIFA', filename: 'nifa-logo.png' },
    { name: 'Illinois Innovation Network', filename: 'illinois-innovation-network-logo.png' }
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Research</CardTitle>
          <CardDescription className="text-lg mt-2">
            Advancing the frontiers of Computer Vision and Deep Learning
          </CardDescription>
        </CardHeader>
      </Card>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Research Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our lab is dedicated to pushing the boundaries of Computer Vision and Deep Learning. We focus on developing innovative algorithms and techniques that have real-world applications, particularly in the areas of big data systems, object detection, and artificial intelligence for agriculture.
        </p>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Research Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Computer Vision', 'Deep Learning', 'Big Data Systems', 'AI for Agriculture'].map((area, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{area}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700">
                  {area === 'Computer Vision' && "Advancing visual data interpretation to enable practical applications in diverse domains, including object detection and recognition."}
                  {area === 'Deep Learning' && "Developing and improving artificial neural networks for diverse practical applications with a strong emphasis on real-world impact."}
                  {area === 'Big Data Systems' && "Creating scalable systems that ensure reliability in big data applications through tailored software engineering practices."}
                  {area === 'AI for Agriculture' && "Applying artificial intelligence techniques to agricultural challenges, such as livestock management and crop health monitoring."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Current Projects</h2>
        <div className="space-y-6">
          {[
            {
              title: "AI for Greener Livestock: Educational and Research",
              award: "USDA-NIFA 2022-70001-37404",
              period: "May 1, 2022 - Apr 30, 2024"
            },
            {
              title: "Detecting Subacute Ruminal Acidosis Using Real-Time Deep Learning",
              award: "USDA-NIFA 2023-70001-40997",
              period: "Sep 1, 2023 - Aug 31, 2025"
            }
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Badge variant="secondary" className="mb-2">Award: {project.award}</Badge>
                <p className="text-sm text-gray-600">Period: {project.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Recent Publications</h2>
      <Tabs defaultValue={publicationsData[0].year.toString()} className="w-full">
        <TabsList className="mb-8 flex justify-start overflow-x-auto">
          {publicationsData.slice(0, 3).map((yearGroup) => (
            <TabsTrigger 
              key={yearGroup.year} 
              value={yearGroup.year.toString()}
              className="px-4 py-2"
            >
              {yearGroup.year}
            </TabsTrigger>
          ))}
        </TabsList>
        {publicationsData.slice(0, 3).map((yearGroup) => (
          <TabsContent key={yearGroup.year} value={yearGroup.year.toString()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {yearGroup.items.slice(0, 4).map((publication, index) => (
                <PublicationCardSimple key={index} publication={publication} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-6 text-center">
        <Link href="/publications" className="text-blue-600 hover:text-blue-800 transition-colors">
          View all publications
        </Link>
      </div>
    </section>

      <Separator className="my-12" />

      <section>
        <h2 className="text-2xl font-semibold mb-6">Research Sponsors</h2>
        <p className="text-gray-700 mb-6">
          The BASE Lab gratefully acknowledges the support received from our sponsors:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="w-24 h-24 relative">
              <Image
                src={`/images/${sponsor.filename}`}
                alt={sponsor.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};


const PublicationCardSimple = ({ publication }) => {
  const [citeOpen, setCiteOpen] = useState(false);
  const [bibtex, setBibtex] = useState('');

  useEffect(() => {
    const loadBibtex = async () => {
      const data = await fetchBibtexData();
      const regex = new RegExp(`@.*?{${publication.citationKey}[\\s\\S]*?}(?=\\s*@|\\s*$)`, 'g');
      const match = data.match(regex);
      if (match) {
        setBibtex(match[0]);
      } else {
        setBibtex('BibTeX not available for this publication.');
      }
    };

    if (citeOpen) {
      loadBibtex();
    }
  }, [citeOpen, publication.citationKey]);

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{publication.title}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-1">{publication.authors.join(", ")}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {publication.journal || publication.conference}
        </span>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs"
            asChild
          >
            <a 
              href={publication.url} 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              View
            </a>
          </Button>
          <Dialog open={citeOpen} onOpenChange={setCiteOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs">Cite</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Citation</DialogTitle>
              </DialogHeader>
              <div className="mt-2">
                <pre className="text-xs text-gray-700 whitespace-pre-wrap">{bibtex}</pre>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;