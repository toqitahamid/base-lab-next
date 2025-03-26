import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Brain, Camera, Leaf, Users, Award, BookOpen, Network, Layers, Clock } from "lucide-react";
import PublicationCardSimple from './research/PublicationCardSimple';
import styles from './page.module.css';


import CarouselWithAutoplay from '@/components/CarouselWithAutoplay';



// Static imports
import homeData from '../public/home.json';
import publicationsData from '../public/publications.json';
import newsData from '../public/news.json';






export default function Home() {

  const iconMap = {
    "Computer Vision": <Camera className="w-8 h-8 mr-2" />,
    "Deep Learning": <Brain className="w-8 h-8 mr-2" />,
    "AI for Agriculture": <Leaf className="w-8 h-8 mr-2" />,
    "Federated Learning": <Network className="w-8 h-8 mr-2" />,
    "Generative Models": <Layers className="w-8 h-8 mr-2" />,
    "Real-time Systems": <Clock className="w-8 h-8 mr-2" />
  };
  


  return (
    
    // <main className="container mx-auto px-4 py-12 max-w-6xl">
    <main>
      {/* Full-width hero section */}
      <section className="relative mb-24 text-center w-full min-h-[30vh] md:h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            poster="/videos/lake-night.jpg"
            style={{ height: '100vh', transform: 'translateY(-0%)' }}
          >
            <source src="/videos/lake-night.mov" type="video/quicktime" />
            <source src="/videos/lake-night.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-16 md:py-0">
          <h1 className={`text-3xl md:text-5xl font-bold mb-4 text-white ${styles.heroTitle}`}>{homeData.hero.title}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {homeData.hero.description}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            {homeData.hero.buttons.map((button, index) => (
              <Button key={index} asChild variant={index === 0 ? "default" : "outline"} className="w-full md:w-auto">
                <Link href={button.link}>{button.text}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>



      <div className="container mx-auto px-4 py-6 max-w-6xl">

      

      

      {/* Research Focus Areas */}
      <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Research Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeData.researchFocusAreas.map((area, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                <div className="flex items-center mb-2">
                    {iconMap[area.title as keyof typeof iconMap]}
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


      {/* Latest Works and Activities Carousel */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest Works and Activities</h2>
        <CarouselWithAutoplay items={homeData.carouselItems} />
      </section>




      {/* Sponsors and Collaborators */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Sponsors and Collaborators</h2>        
        <Card className="p-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 justify-items-center">
            {homeData.sponsors.map((logo, index) => (
              <div key={index} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative">
                <Image
                  src={`/images/sponsors/${logo}`}
                  alt={`Sponsor logo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Recent Publications */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Recent Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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


       
      {/* Join Our Lab */}
      <section className="mb-24">
        <Card className="bg-[rgb(15,50,55)] text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-200">Join Our Lab</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-200">
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
            <Button asChild variant="secondary" className="bg-white text-[rgb(15,50,55)] hover:bg-gray-200">
              <Link href="/join">Learn More About Joining</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>


      


      
      </div>
    </main>
  );
}