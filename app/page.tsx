'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Brain, Camera, Leaf, Users, Award, BookOpen, Network, Layers, Clock } from "lucide-react";
import { motion } from "framer-motion";
import PublicationCardSimple from './research/PublicationCardSimple';
import AnimatedCounter from '@/components/AnimatedCounter';
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
    <>
      <main>
      {/* Hero section */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-16 md:py-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className={`text-3xl md:text-5xl font-bold mb-4 text-white ${styles.heroTitle}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {homeData.hero.title}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {homeData.hero.description}
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {homeData.hero.buttons.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  variant={index === 0 ? "default" : "outline"} 
                  className="w-full md:w-auto transition-all duration-300 hover:shadow-lg"
                >
                  <Link href={button.link}>{button.text}</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>



      <div className="container mx-auto px-4 py-6 max-w-6xl">

      

      

      {/* Research Focus Areas */}
      <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Research Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeData.researchFocusAreas.map((area, index) => (
              <Card key={index} className="flex flex-col h-full transition-shadow duration-200 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="text-primary">
                      {iconMap[area.title as keyof typeof iconMap]}
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pb-4">
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" className="w-full justify-between group hover:bg-primary/5 transition-colors duration-200" asChild>
                    <Link href="/research" className="flex items-center">
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
     

      {/* Lab Highlights */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-12 text-center">Lab Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {homeData.quickStats.map((stat, index) => (
            <AnimatedCounter 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </section>


      {/* Latest Works and Activities Carousel */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-12 text-center">Latest Works and Activities</h2>
        <CarouselWithAutoplay items={homeData.carouselItems} />
      </section>




      {/* Sponsors and Collaborators */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-12 text-center">Our Sponsors and Collaborators</h2>
        <Card className="p-12">
          <div className="grid grid-cols-3 gap-8 sm:gap-12 justify-items-center">
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
        <h2 className="text-3xl font-semibold mb-12 text-center">Recent Publications</h2>
        <div className="grid grid-cols-1 gap-6">
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
            <Card key={index} className="h-full hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Badge>{item.badge}</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>


       
      {/* Enhanced Join Our Lab */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-[rgb(15,50,55)] to-[rgb(25,70,75)] text-primary-foreground border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
            
            <CardHeader className="relative z-10 text-center pb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CardTitle className="text-4xl font-bold text-white mb-2">Join Our Lab</CardTitle>
                <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
              </motion.div>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <motion.p 
                className="mb-8 text-gray-100 text-lg text-center max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Interested in pushing the boundaries of AI? We are always looking for talented individuals to join our team.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Users, title: "PhD Students", description: "Conduct cutting-edge research in AI and Computer Vision." },
                  { icon: BookOpen, title: "Masters Students", description: "Gain hands-on experience in advanced AI projects." }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="group"
                    >
                      <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center text-white group-hover:scale-105 transition-transform duration-300">
                            <motion.div
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                              <Icon className="mr-3 h-6 w-6" />
                            </motion.div>
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-100 leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
            
            <CardFooter className="justify-center pt-8 pb-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-[rgb(15,50,55)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <Link href="/join" className="flex items-center">
                    Learn More About Joining
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </section>


      


      
      </div>
      </main>
    </>
  );
}