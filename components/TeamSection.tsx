"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('/team.json')
      .then(response => response.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching team data:', error));
  }, []);

  return (
    <section className="w-full mt-12">
      <h2 className="text-3xl font-bold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member: any) => (
          <Card key={member.name} className="overflow-hidden group">
            <div className="relative h-64 w-full">
              <Image 
                src={member.profileImage} 
                alt={member.name} 
                layout="fill" 
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
              <a href={`mailto:${member.email}`} className="text-primary hover:underline mt-2 inline-block">
                Contact
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;