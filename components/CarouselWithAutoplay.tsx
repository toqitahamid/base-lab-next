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
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full max-w-7xl mx-auto">
        <div className="p-1">
          <div className="overflow-hidden border-0 shadow-none bg-transparent rounded-lg">
            <div className="relative aspect-video">
              <Image
                src={items[0]?.image || ''}
                alt={items[0]?.title || 'Loading...'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{items[0]?.title || 'Loading...'}</h3>
              <p className="text-sm text-gray-800 leading-relaxed">{items[0]?.description || 'Loading...'}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
                    alt={`BASE LAB ${item.title} - Research presentation and activity image`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 md:mt-6 gap-4">
        <button
          onClick={() => api?.scrollPrev()}
          className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <ChevronLeft className="h-6 w-6 md:h-5 md:w-5" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <ChevronRight className="h-6 w-6 md:h-5 md:w-5" />
        </button>
      </div>
    </Carousel>
  )
}