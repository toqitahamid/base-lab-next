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
  const pastProjects: Project[] = researchData?.pastProjects || [];
  const labEquipment: Equipment[] = researchData?.labEquipment || [];
  const sponsors: Sponsor[] = researchData?.sponsors || [];

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader 
        title="Research" 
        description="Advancing the frontiers of Computer Vision and Deep Learning"
      />
      <ResearchMission mission={researchData?.mission} />
      {/* <ResearchAreas areas={researchAreas} /> */}
      <CurrentProjects projects={currentProjects} />
      <PastProjects projects={pastProjects} />
      <LabEquipment equipment={labEquipment} />
      {/* <Separator className="my-12" />
      <ResearchSponsors sponsors={sponsors} /> */}
    </main>
  );
}

const ResearchMission = ({ mission }: { mission?: string }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-8 text-gray-900">Research Mission</h2>
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-6">
        <p className="text-base text-gray-700 leading-relaxed">
          {mission || "Our lab is dedicated to pushing the boundaries of Computer Vision and Deep Learning."}
        </p>
      </div>
    </div>
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
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-8 text-gray-900">Current Projects</h2>
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="divide-y divide-gray-100">
        {projects.map((project, index) => (
          <div key={index} className="p-6">
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1">
                {project.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <Award className="w-4 h-4 mr-2" />
                <span className="font-medium">Award: {project.award}</span>
              </div>
              <div className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-medium">Period: {project.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PastProjects = ({ projects }: { projects: Project[] }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-8 text-gray-900">Past Projects</h2>
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="divide-y divide-gray-100">
        {projects.map((project, index) => (
          <div key={index} className="p-6">
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1">
                {project.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                <Award className="w-4 h-4 mr-2" />
                <span className="font-medium">Award: {project.award}</span>
              </div>
              <div className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-medium">Period: {project.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LabEquipment = ({ equipment }: { equipment: Equipment[] }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-8 text-gray-900">Lab Equipment</h2>
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {equipment.map((item, index) => (
          <div key={index} className="p-6">
            {/* Image Section */}
            <div className="mb-4">
              <div className="relative w-full pt-[60%] bg-white rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
              <div className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
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
