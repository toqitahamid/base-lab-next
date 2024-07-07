import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import fetchData from '@/components/DataFetcherServer';

async function getNewsItems() {
    try {
      const data = await fetchData('/news.json');
      if (!Array.isArray(data)) {
        console.error('Fetched data is not an array:', data);
        return {};
      }
      const groupedByYear = data.reduce((acc, item) => {
        const year = new Date(item.date).getFullYear();
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

  export default async function NewsPage() {
    const groupedNewsItems = await getNewsItems();
    const years = Object.keys(groupedNewsItems).sort((a, b) => Number(b) - Number(a));
  
    if (years.length === 0) {
      return (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl font-bold">Latest News</CardTitle>
              <CardDescription className="text-lg mt-2">
                Unable to load news at this time. Please check back later.
              </CardDescription>
            </CardHeader>
          </Card>
        </main>
      );
    }
  
    return (
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">Latest News</CardTitle>
            <CardDescription className="text-lg mt-2">
              Stay updated with our recent achievements and announcements
            </CardDescription>
          </CardHeader>
        </Card>
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
                {groupedNewsItems[year].map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-gray-50">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <Badge variant={item.badge === "Grant" ? "default" : "secondary"}>
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