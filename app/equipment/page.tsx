import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import equipmentData from '../../data/equipment.json';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: "Equipment",
  description: "Explore the state-of-the-art laboratory equipment at BASE LAB, including thermal imaging cameras, drones, and edge AI computing devices powering our research.",
  keywords: [
    "laboratory equipment",
    "research equipment",
    "thermal imaging camera",
    "FLIR GF77",
    "research drone",
    "DJI Mini 4 Pro",
    "NVIDIA Jetson",
    "edge computing",
    "optical gas imaging",
    "SIU research lab"
  ],
  openGraph: {
    title: "Equipment - BASE LAB",
    description: "Explore the state-of-the-art laboratory equipment at BASE LAB, including thermal imaging cameras, drones, and edge AI computing devices.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipment - BASE LAB",
    description: "Explore the state-of-the-art laboratory equipment at BASE LAB, including thermal imaging cameras, drones, and edge AI computing devices.",
  },
};

interface Equipment {
  name: string;
  image: string;
  description: string;
  features: string[];
}

export default async function EquipmentPage() {
  const labEquipment: Equipment[] = equipmentData?.labEquipment || [];

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader
        title="Equipment"
        description="State-of-the-art laboratory equipment powering our research"
      />

      <section className="mb-6">
        <div style={{ backgroundColor: '#faf9f6' }}>
          <div className="py-6 px-6">
            <div className="space-y-12">
              {labEquipment.map((item, index) => (
                <div key={index} className="flex flex-col lg:flex-row gap-8 pb-8 border-b border-gray-100 last:border-b-0 last:pb-0">
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative w-full pt-[60%] bg-white rounded-lg border border-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="p-6"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 lg:pl-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.name}</h3>
                    <p className="text-sm text-gray-800 font-medium mb-4 leading-relaxed">{item.description}</p>
                    <div className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-700 flex items-start">
                          <span className="text-gray-400 mr-3 mt-1">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
