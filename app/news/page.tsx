import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, Newspaper, Lightbulb } from "lucide-react";
import fetchData from '@/components/DataFetcherServer';
import PageHeader from '@/components/PageHeader';

interface NewsItem {
  title: string;
  date: string;
  description: string;
  badge: string;
}

async function getNewsItems(): Promise<Record<string, NewsItem[]>> {
  try {
    const data = await fetchData('/news.json');
    if (!Array.isArray(data)) {
      console.error('Fetched data is not an array:', data);
      return {};
    }
    const groupedByYear = data.reduce<Record<string, NewsItem[]>>((acc, item: NewsItem) => {
      const year = new Date(item.date).getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(item);
      return acc;
    }, {});
    return groupedByYear;
  } catch (error) {
    console.error('Error fetching news items:', error);
    return {};
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
  const groupedNewsItems = await getNewsItems();
  const years = Object.keys(groupedNewsItems).sort((a, b) => Number(b) - Number(a));

  if (years.length === 0) {
    return (
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Latest News</CardTitle>
            <CardDescription className="text-lg mt-2">
              Unable to load news at this time. Please check back later.
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader 
        title="Latest News" 
        description="Stay updated with our recent achievements and announcements"
      />
      <Tabs defaultValue={years[0]} className="w-full">
        <TabsList className="mb-8 flex justify-start overflow-x-auto">
          {years.map((year) => (
            <TabsTrigger key={year} value={year} className="px-4 py-2">
              {year}
            </TabsTrigger>
          ))}
        </TabsList>
        {years.map((year) => (
          <TabsContent key={year} value={year}>
            <div className="space-y-8">
              {groupedNewsItems[year].map((item: NewsItem, index: number) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="bg-gray-50">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <Badge className={`flex items-center ${getBadgeColor(item.badge)}`}>
                        {getBadgeIcon(item.badge)}
                        {item.badge}
                      </Badge>
                    </div>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}