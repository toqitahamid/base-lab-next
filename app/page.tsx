import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Brain, Camera, Leaf, Users, Award, BookOpen } from "lucide-react";
import PublicationCardSimple from './research/PublicationCardSimple';

// Static imports
import homeData from '../public/home.json';
import publicationsData from '../public/publications.json';
import newsData from '../public/news.json';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <h1 className="text-5xl font-bold mb-6">{homeData.hero.title}</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          {homeData.hero.description}
        </p>
        <div className="flex justify-center gap-6">
          {homeData.hero.buttons.map((button, index) => (
            <Button key={index} asChild variant={index === 0 ? "default" : "outline"}>
              <Link href={button.link}>{button.text}</Link>
            </Button>
          ))}
        </div>
      </section>

      {/* Latest Works and Activities Carousel */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest Works and Activities</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {homeData.carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <Button asChild variant="outline">
                        <Link href={item.link}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>


      

      {/* Research Focus Areas */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Research Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeData.researchFocusAreas.map((area, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {index === 0 && <Camera className="w-8 h-8 mr-2" />}
                  {index === 1 && <Brain className="w-8 h-8 mr-2" />}
                  {index === 2 && <Leaf className="w-8 h-8 mr-2" />}
                  <CardTitle>{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{area.description}</p>
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


      {/* Latest News and Achievements */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest News and Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsData.slice(0, 4).map((item, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <Badge>{item.badge}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>


      {/* Lab Highlights */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Lab Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {homeData.quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Publications */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Recent Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicationsData[0].items.slice(0, 4).map((publication, index) => (
            <PublicationCardSimple key={index} publication={publication} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/publications">View All Publications</Link>
          </Button>
        </div>
      </section>

      {/* Join Our Lab */}
      <section className="mb-24">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-3xl">Join Our Lab</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Interested in pushing the boundaries of AI? We are always looking for talented individuals to join our team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" /> PhD Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Conduct cutting-edge research in AI and Computer Vision.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2" /> Masters Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Gain hands-on experience in advanced AI projects.</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button asChild variant="secondary">
              <Link href="/join">Learn More About Joining</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Sponsors and Collaborators */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Sponsors and Collaborators</h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          {homeData.sponsors.map((logo, index) => (
            <div key={index} className="w-48 h-48 relative">
              <Image
                src={`/images/sponsors/${logo}`}
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