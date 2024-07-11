'use client'

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {items.map((item, index) => (
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
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}