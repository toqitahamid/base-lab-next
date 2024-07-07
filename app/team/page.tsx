import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const TeamMember = ({ name, role, image }) => (
  <Card className="overflow-hidden h-full flex flex-col">
    <div className="flex items-center p-4">
      <div className="relative w-24 h-24 mr-4 flex-shrink-0">
        <Image
          src={image || '/images/placeholder.jpg'}
          alt={name}
          fill
          sizes="96px"
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <Badge>{role}</Badge>
      </div>
    </div>
  </Card>
);

export default function TeamPage() {
  const phdStudents = [
    { name: "Akhila Kambhatla", role: "PhD Student", image: "/images/team/akhila-kambhatla.jpeg" },
    { name: "Toqi Tahamid Sarker", role: "PhD Student", image: "/images/team/toqi-sarker.jpeg" },
    { name: "Karimi Chahrogh Laya", role: "PhD Student", image: "/images/team/karimi-laya.jpg" },
    { name: "Taminul Islam", role: "PhD Student", image: "/images/team/taminul-islam.jpg" },
  ];

  const mastersStudents = [
    { name: "Paloju Sathish Kumar", role: "Masters Student", image: "/images/team/sathish-kumar.jpg" },
    { name: "Nishanth Sagar Panthangi", role: "Masters Student", image: "/images/team/nishanth-panthangi.jpg" },
    { name: "Aluri Manoj", role: "Masters Student", image: "/images/team/aluri-manoj.jpg" },
    { name: "Venkata Gnana Prakash Paruchuri", role: "Masters Student", image: "/images/team/venkata-paruchuri.jpg" },
  ];

  const phdAlumni = [
    { name: "Yousef Alsenani", role: "PhD Alumni", image: "/images/team/yousef-alsenani.jpg" },
    { name: "Memari Majid", role: "PhD Alumni", image: "/images/team/memari-majid.jpg" },
  ];

  const mastersAlumni = [
    { name: "Akhila Kambhatla", role: "Masters Alumni", image: "/images/team/akhila-kambhatla.jpg" },
    { name: "Subash Kharel", role: "Masters Alumni", image: "/images/team/subash-kharel.jpg" },
    { name: "Jawad Siddique", role: "Masters Alumni", image: "/images/team/jawad-siddique.jpg" },
    { name: "Abeer M Almalky", role: "Masters Alumni", image: "/images/team/abeer-almalky.jpg" },
    { name: "Sandeep Goshika", role: "Masters Alumni", image: "/images/team/sandeep-goshika.jpg" },
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lab Director</h2>
        <Card className="overflow-hidden">
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
                    objectPosition: 'center 5%' // Adjust this value as needed
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

      <section>
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
        <Tabs defaultValue="phd-alumni">
          <TabsList>
            <TabsTrigger value="phd-alumni">PhD Alumni</TabsTrigger>
            <TabsTrigger value="masters-alumni">Masters Alumni</TabsTrigger>
          </TabsList>
          <TabsContent value="phd-alumni">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {phdAlumni.map((alum) => (
                <TeamMember key={alum.name} {...alum} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="masters-alumni">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mastersAlumni.map((alum) => (
                <TeamMember key={alum.name} {...alum} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}