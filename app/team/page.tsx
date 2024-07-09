import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, Twitter } from "lucide-react";
import teamData from '../../public/team.json';
import PageHeader from '@/components/PageHeader';

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  bio: string;
  researchInterests: string[];
  socialLinks?: {
    github?: string;
    linkedin?: string;
    website?: string;
    xcom?: string;  // Added X.com profile
  };
}

interface AlumniProps {
  name: string;
  degree: string;
  graduationYear: number;
  thesis: string;
  currentPosition: string;
  image?: string;
  awards?: string[];
  socialLinks?: {
    linkedin?: string;
    website?: string;
    xcom?: string; 
  };
}


const TeamMember = ({ name, role, image, bio, researchInterests, socialLinks }: TeamMemberProps) => (
  <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center p-4">
      <div className="relative w-24 h-24 mr-4 flex-shrink-0">
        <Image
          src={image || '/images/team/placeholder.png'}
          alt={name}
          fill
          sizes="96px"
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <Badge variant="secondary">{role}</Badge>
      </div>
    </div>
    <CardContent className="flex-grow flex flex-col justify-between">
      <div>
        <p className="text-sm text-muted-foreground mb-2 h-20 overflow-y-auto">{bio}</p>
        <h4 className="font-semibold mb-1">Research Interests:</h4>
        <ul className="list-disc list-inside text-sm mb-4">
          {researchInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      {socialLinks && (
        <div className="flex space-x-2 mt-auto">
          {socialLinks.github && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.website && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.xcom && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.xcom} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      )}
    </CardContent>
  </Card>
);

const AlumniMember = ({ name, degree, graduationYear, thesis, currentPosition, image, awards, socialLinks }: AlumniProps) => (
  <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center p-4">
      <div className="relative w-16 h-16 mr-4 flex-shrink-0">
        <Image
          src={image || '/images/team/placeholder.png'}
          alt={name}
          fill
          sizes="64px"
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <Badge variant="outline">{degree} {graduationYear}</Badge>
      </div>
    </div>
    <CardContent className="flex-grow flex flex-col justify-between">
      <div>
        <p className="text-sm text-muted-foreground mb-2 h-16 overflow-y-auto">Thesis: {thesis}</p>
        <p className="text-sm font-semibold mb-2">Current: {currentPosition}</p>
        {awards && awards.length > 0 && (
          <div className="mb-2">
            <p className="text-sm font-semibold">Awards:</p>
            <ul className="list-disc list-inside text-sm">
              {awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {socialLinks && (
        <div className="flex space-x-2 mt-auto">
          {socialLinks.linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.website && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.xcom && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.xcom} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      )}
    </CardContent>
  </Card>
);

export default function TeamPage() {
  const { phdStudents, mastersStudents, alumni } = teamData;

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader 
        title="Our Team" 
        description="Meet the dedicated researchers and students of BASE Lab"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lab Director</h2>
        <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/team/khaled-ahmed.jpeg"
                  alt="Dr. Khaled Ahmed"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 5%'
                  }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="p-6 md:p-8 md:w-2/3">
              <CardTitle className="text-2xl mb-2">Dr. Khaled Ahmed</CardTitle>
              <CardDescription className="text-lg mb-4">Assistant Professor and Graduate Program Director</CardDescription>
              <p className="text-gray-600 mb-4">
                Khaled Ahmed is currently an assistant professor and graduate program director in the Department of Computer Science at Southern Illinois University. His research background is in Software Engineering, Distributed Systems, Parallel Computing, Machine Learning, Computer Vision, and Intelligent Transport systems.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" asChild>
                  <a href="mailto:khaled.ahmed@siu.edu">Contact</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://khaledahmed.net" target="_blank" rel="noopener noreferrer">Website</a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Current Students</h2>
        <Tabs defaultValue="phd">
          <TabsList>
            <TabsTrigger value="phd">PhD Students</TabsTrigger>
            <TabsTrigger value="masters">Masters Students</TabsTrigger>
          </TabsList>
          <TabsContent value="phd">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {phdStudents.map((student) => (
                <TeamMember key={student.name} {...student} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="masters">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mastersStudents.map((student) => (
                <TeamMember key={student.name} {...student} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Alumni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alum) => (
            <AlumniMember key={alum.name} {...alum} />
          ))}
        </div>
      </section>
    </main>
  );
}