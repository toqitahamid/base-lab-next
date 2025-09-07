'use client';

import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to BASE LAB at Southern Illinois University Carbondale. Discover our cutting-edge research in Computer Vision, Deep Learning, and Distributed Computing. Explore our latest publications, team members, and research opportunities.",
  keywords: [
    "BASE LAB",
    "SIU Carbondale",
    "computer vision research",
    "deep learning lab",
    "artificial intelligence research",
    "academic research lab",
    "pothole detection research",
    "defect analysis AI",
    "agricultural monitoring",
    "machine learning research",
    "distributed computing",
    "neural networks",
    "computer science department"
  ],
  openGraph: {
    title: "BASE LAB @ SIU Carbondale - Leading AI Research Lab",
    description: "Discover cutting-edge research in Computer Vision, Deep Learning, and Distributed Computing at Southern Illinois University Carbondale.",
    type: "website",
    images: [
      {
        url: "/images/logo/base-lab-logo-v5@4x.png",
        width: 1200,
        height: 630,
        alt: "BASE LAB Research Lab at SIU Carbondale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BASE LAB @ SIU Carbondale - Leading AI Research Lab",
    description: "Discover cutting-edge research in Computer Vision, Deep Learning, and Distributed Computing at Southern Illinois University Carbondale.",
    images: ["/images/logo/base-lab-logo-v5@4x.png"],
  },
};
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import styles from './page.module.css';


import CarouselWithAutoplay from '@/components/CarouselWithAutoplay';



// Static imports
import homeData from '../public/home.json';
import publicationsData from '../public/publications.json';
import newsData from '../public/news.json';






export default function Home() {

  


  return (
    <>
      <main>
      {/* Hero section */}
      <section className="relative mb-16 text-center w-full h-[40vh] md:h-[45vh] lg:h-[50vh] flex items-center justify-center">
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
          className="relative z-10 flex flex-col items-center justify-center w-full h-full px-2 md:px-4 py-4 md:py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className={`text-lg md:text-5xl font-bold mb-2 md:mb-4 text-white ${styles.heroTitle}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {homeData.hero.title}
          </motion.h1>
          <motion.p 
            className="text-sm md:text-xl text-gray-200 mb-4 md:mb-8 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {homeData.hero.description}
          </motion.p>
          <motion.div 
            className="flex flex-row justify-center gap-3 md:gap-6"
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
                  className="flex-1 md:w-auto transition-all duration-300 hover:shadow-lg"
                >
                  <Link href={button.link}>{button.text}</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-6 max-w-6xl">

      {/* Latest Works */}
      <section className="mb-6 pb-6 border-b border-gray-100">
        <div className="px-6 py-8">
          <div className="border border-gray-200 rounded-lg p-6 mx-4 bg-gray-50/50" style={{boxShadow: '0 0 60px rgba(0, 0, 0, 0.08)'}}>
            <CarouselWithAutoplay items={homeData.carouselItems} />
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="mb-6 pb-6 border-b border-gray-100">
        <div className="">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Research Focus</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Advancing AI frontiers through cutting-edge research in computer vision, deep learning, and agricultural applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {homeData.researchFocusAreas.map((area, index) => (
                <div key={index}>
                  <div className="p-6 h-full border border-gray-200 rounded-lg bg-gray-50/50" style={{boxShadow: '0 0 60px rgba(0, 0, 0, 0.08)'}}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="mb-6 pb-6 border-b border-gray-100">
        <div className="">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Publications</h2>
            
            <div className="border border-gray-200 rounded-lg bg-gray-50/50 p-6 mb-8" style={{boxShadow: '0 0 60px rgba(0, 0, 0, 0.08)'}}>
              {publicationsData[0].items.slice(0, 3).map((publication, index) => (
                <div 
                  key={index}
                  className={`p-6 ${index !== publicationsData[0].items.slice(0, 3).length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {publication.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {publication.authors.join(", ")}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium rounded-full">
                      {publication.publisher}
                    </span>
                    <a 
                      href={publication.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-slate-900 font-semibold flex items-center transition-colors duration-300 text-sm"
                    >
                      Read Paper <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
              
              <div className="text-center pt-6 mt-2">
                <Button variant="outline" asChild className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  <Link href="/publications">View All Publications</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="mb-6 pb-6 border-b border-gray-100">
        <div className="">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest News</h2>
            
            <div className="border border-gray-200 rounded-lg bg-gray-50/50 p-6 mb-8" style={{boxShadow: '0 0 60px rgba(0, 0, 0, 0.08)'}}>
              {newsData.slice(0, 4).map((item, index) => (
                <div 
                  key={index}
                  className={`p-6 ${
                    index !== newsData.slice(0, 4).length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1 pr-4">
                      {item.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium rounded-full flex-shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-blue-600 text-sm mb-3 font-medium">{item.date}</p>
                  <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
              
              <div className="text-center pt-6 mt-2">
                <Button variant="outline" asChild className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  <Link href="/news">View All News</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      





      {/* Join Our Lab */}
      <section className="mb-6 pb-6 border-b border-gray-100">
        <div className="">
          <div className="px-6 py-8">
            <div className="bg-gradient-to-br from-[rgb(15,50,55)] to-[rgb(25,70,75)] rounded-lg shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
              
              <div className="relative z-10 px-8 py-12">
            <div className="text-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Join Our Lab</h2>
                <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
              </div>
            </div>
            
            <p className="mb-8 text-gray-100 text-lg text-center max-w-2xl mx-auto leading-relaxed">
              Interested in pushing the boundaries of AI? We are always looking for talented individuals to join our team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: Users, title: "PhD Students", description: "Conduct cutting-edge research in AI and Computer Vision." },
                { icon: BookOpen, title: "Masters Students", description: "Gain hands-on experience in advanced AI projects." }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="">
                    <div className="bg-white/10 border border-white/20 backdrop-blur-sm h-full p-6 rounded-lg">
                      <div className="flex items-center text-white mb-3">
                        <Icon className="mr-3 h-6 w-6" />
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-white leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center">
              <div>
                <Button 
                  asChild 
                  className="bg-white text-[rgb(15,50,55)] hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/join" className="flex items-center">
                    Learn More About Joining
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Sponsors and Collaborators */}
      <section className="mb-6 pb-6 border-b border-gray-100">
        <div className="">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Sponsors and Collaborators</h2>
            <div className="border border-gray-200 rounded-lg bg-gray-50/50 p-6" style={{boxShadow: '0 0 60px rgba(0, 0, 0, 0.08)'}}>
              <div className="grid grid-cols-3 gap-8 justify-items-center">
              {homeData.sponsors.map((logo, index) => (
                <div key={index} className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 relative">
                  <Image
                    src={`/images/sponsors/${logo}`}
                    alt={`BASE LAB sponsor and collaborator logo - ${logo.replace('.png', '').replace('.jpg', '').replace('-', ' ').toUpperCase()}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
      </main>
    </>
  );
}