"use client";

import Image from "next/image";
import DataFetcher from "@/components/DataFetcher";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TeamSection = () => (
  <section className="w-full max-w-5xl mt-8">
    <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
    <DataFetcher url="/team.json">
      {(data) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((member: any) => (
            <Card key={member.name}>
              <CardHeader>
                <Image src={member.profileImage} alt={member.name} width={100} height={100} className="rounded-full mx-auto" />
                <h3 className="text-xl font-bold text-center mt-2">{member.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-center">{member.role}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="outline">
                  <a href={`mailto:${member.email}`}>Contact</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </DataFetcher>
  </section>
);

export default TeamSection;