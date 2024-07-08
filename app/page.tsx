import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Brain, Camera, Leaf } from "lucide-react";
import PublicationCardSimple from './research/PublicationCardSimple';

// Static imports
import homeData from '../public/home.json';
import publicationsData from '../public/publications.json';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
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

      {/* Latest Research and News Carousel */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest Research and News</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {homeData.carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm mb-4">{item.description}</p>
                      <Button asChild variant="secondary" size="sm">
                        <Link href={item.link}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
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

      {/* Lab Highlights */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Lab Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {homeData.quickStats.map((stat, index) => (
            <Card key={index}>
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
      <section className="mb-24 text-center">
        <Card className="p-6">
          <CardTitle className="text-3xl mb-4">Join Our Lab</CardTitle>
          <CardDescription className="mb-6">
            Interested in pushing the boundaries of AI? We're always looking for talented individuals.
          </CardDescription>
          <Button asChild>
            <Link href="/join">Learn More</Link>
          </Button>
        </Card>
      </section>

      {/* Sponsors and Collaborators */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Sponsors and Collaborators</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {homeData.sponsors.map((logo, index) => (
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