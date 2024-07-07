import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Computer Vision and Deep Learning Lab</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Advancing the frontiers of AI through innovative research and applications
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <Link href="/research">Explore Our Research</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/lab-hero.jpg"
              alt="Lab researchers working"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Latest Research Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AI-Powered Livestock Monitoring",
              description: "Developing deep learning models for real-time health assessment of cattle.",
              badge: "Ongoing"
            },
            {
              title: "Advanced Object Detection in Agriculture",
              description: "Improving crop yield estimation using computer vision techniques.",
              badge: "New"
            },
            {
              title: "Efficient Big Data Processing for IoT",
              description: "Creating scalable systems for handling large-scale sensor data in smart farming.",
              badge: "Collaboration"
            }
          ].map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge>{project.badge}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="mt-2" asChild>
                  <Link href="/research" className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Recent Publications</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Deep Learning for Precision Agriculture: A Survey</h3>
                <p className="text-sm text-muted-foreground">Published in IEEE Transactions on AI, 2023</p>
              </li>
              <li>
                <h3 className="font-semibold">Real-time Cattle Health Monitoring using Edge Computing</h3>
                <p className="text-sm text-muted-foreground">Presented at CVPR 2023</p>
              </li>
              <li>
                <h3 className="font-semibold">Scalable Data Processing for IoT-based Smart Farming</h3>
                <p className="text-sm text-muted-foreground">Journal of Big Data, 2023</p>
              </li>
            </ul>
            <Button variant="link" asChild className="mt-4">
              <Link href="/publications">View all publications</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {['usda-logo.png', 'nifa-logo.png', 'illinois-innovation-network-logo.png'].map((logo, index) => (
            <div key={index} className="w-32 h-32 relative">
              <Image
                src={`/images/${logo}`}
                alt={`Sponsor logo ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}