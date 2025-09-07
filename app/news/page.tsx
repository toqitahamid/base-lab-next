import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Newspaper, Lightbulb } from "lucide-react";
import fs from 'fs/promises';
import path from 'path';
import PageHeader from '@/components/PageHeader';

interface NewsItem {
  title: string;
  date: string;
  description: string;
  badge: string;
}

async function getNewsItems(): Promise<NewsItem[]> {
  try {
    const newsPath = path.join(process.cwd(), 'public', 'news.json');
    const newsData = await fs.readFile(newsPath, 'utf-8');
    const data = JSON.parse(newsData);
    
    if (!Array.isArray(data)) {
      console.error('Fetched data is not an array:', data);
      return [];
    }
    // Sort by date (newest first)
    return data.sort((a: NewsItem, b: NewsItem) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error fetching news items:', error);
    return [];
  }
}

const getBadgeColor = (badge: string) => {
  switch (badge.toLowerCase()) {
    case 'award':
      return 'bg-yellow-100 text-yellow-800';
    case 'publication':
      return 'bg-blue-100 text-blue-800';
    case 'grant':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getBadgeIcon = (badge: string) => {
  switch (badge.toLowerCase()) {
    case 'award':
      return <Award className="h-4 w-4 mr-1" />;
    case 'publication':
      return <BookOpen className="h-4 w-4 mr-1" />;
    case 'grant':
      return <Lightbulb className="h-4 w-4 mr-1" />;
    default:
      return <Newspaper className="h-4 w-4 mr-1" />;
  }
};

export default async function NewsPage() {
  const newsItems = await getNewsItems();

  if (newsItems.length === 0) {
    return (
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <PageHeader 
          title="Latest News" 
          description="Stay updated with our recent achievements and announcements"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">No news available</h2>
          <p className="text-gray-600">
            Unable to load news at this time. Please check back later.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader 
        title="Latest News" 
        description="Stay updated with our recent achievements and announcements"
      />
      <div className="mb-8">
        <div className="p-6" style={{ backgroundColor: '#faf9f6' }}>
          <div className="divide-y divide-gray-200">
            {newsItems.map((item: NewsItem, index: number) => (
              <div key={index} className="py-6 px-6">
                {/* Title and Badge */}
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1">
                    {item.title}
                  </h3>
                  <Badge className={`flex items-center flex-shrink-0 ${getBadgeColor(item.badge)}`}>
                    {getBadgeIcon(item.badge)}
                    {item.badge}
                  </Badge>
                </div>
                
                {/* Date */}
                <div className="mb-3">
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.date}
                  </span>
                </div>
                
                {/* Description */}
                <div className="text-sm text-gray-800 leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}