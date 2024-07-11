import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Brain, Camera, Database, Leaf, Award, Calendar } from "lucide-react";
import fetchData from '@/components/DataFetcherServer';
import PageHeader from '@/components/PageHeader';

interface ResearchArea {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  award: string;
  period: string;
}

interface Equipment {
  name: string;
  image: string;
  description: string;
  features: string[];
}

interface Sponsor {
  name: string;
  filename: string;
}

export default async function ResearchPage() {
  const researchData = await fetchData('/research.json');

  const researchAreas: ResearchArea[] = [
    { title: 'Computer Vision', description: researchData?.areas?.computerVision, icon: <Camera className="w-8 h-8" /> },
    { title: 'Deep Learning', description: researchData?.areas?.deepLearning, icon: <Brain className="w-8 h-8" /> },
    { title: 'Big Data Systems', description: researchData?.areas?.bigDataSystems, icon: <Database className="w-8 h-8" /> },
    { title: 'AI for Agriculture', description: researchData?.areas?.aiForAgriculture, icon: <Leaf className="w-8 h-8" /> },
  ];

  const currentProjects: Project[] = researchData?.currentProjects || [];
  const labEquipment: Equipment[] = researchData?.labEquipment || [];
  const sponsors: Sponsor[] = researchData?.sponsors || [];

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader 
        title="Research" 
        description="Advancing the frontiers of Computer Vision and Deep Learning"
      />
      <ResearchMission mission={researchData?.mission} />
      <Separator className="my-12" />
      {/* <ResearchAreas areas={researchAreas} />
      <Separator className="my-12" /> */}
      <CurrentProjects projects={currentProjects} />
      <Separator className="my-12" />
      <LabEquipment equipment={labEquipment} />
      {/* <Separator className="my-12" />
      <ResearchSponsors sponsors={sponsors} /> */}
    </main>
  );
}

const ResearchMission = ({ mission }: { mission?: string }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Research Mission</h2>
    <Card>
      <CardContent className="pt-6">
        <p className="text-gray-700 leading-relaxed">
          {mission || "Our lab is dedicated to pushing the boundaries of Computer Vision and Deep Learning."}
        </p>
      </CardContent>
    </Card>
  </section>
);

const ResearchAreas = ({ areas }: { areas: ResearchArea[] }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Research Focus Areas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {areas.map((area, index) => (
        <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center space-x-2">
              {area.icon}
              <CardTitle className="text-xl">{area.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-700">{area.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const CurrentProjects = ({ projects }: { projects: Project[] }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Current Projects</h2>
    <div className="space-y-6">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-lg">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Badge variant="secondary" className="mb-2 flex items-center">
              <Award className="w-4 h-4 mr-1" /> Award: {project.award}
            </Badge>
            <p className="text-sm text-gray-600 flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> Period: {project.period}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const LabEquipment = ({ equipment }: { equipment: Equipment[] }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Lab Equipment</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {equipment.map((item, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="relative w-full pt-[75%]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            <ul className="list-disc list-inside text-sm">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);


const ResearchSponsors = ({ sponsors }: { sponsors: Sponsor[] }) => (
  <section>
    <h2 className="text-2xl font-semibold mb-6">Research Sponsors</h2>
    <div className="flex flex-wrap justify-center items-center gap-16">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="w-56 h-56 relative">
          <Image
            src={`/images/sponsors/${sponsor.filename}`}
            alt={sponsor.name}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  </section>
);
