'use client'

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

interface CarouselItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface CarouselWithAutoplayProps {
  items: CarouselItem[];
}

export default function CarouselWithAutoplay({ items }: CarouselWithAutoplayProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  const [api, setApi] = React.useState<any>()

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-7xl mx-auto"
      setApi={setApi}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden border-0 shadow-none bg-transparent rounded-lg">
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-6 gap-3">
        <button 
          onClick={() => api?.scrollPrev()} 
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={() => api?.scrollNext()} 
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </Carousel>
  )
}