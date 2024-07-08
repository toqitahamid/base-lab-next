"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  url: string;
  citationKey?: string;
  doi?: string;
  type?: string;
  abstract?: string;
}

const PublicationCardSimple = ({ publication }: { publication: Publication }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-300 ease-in-out">
      <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-800">{publication.title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-1">{publication.authors.join(", ")}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 italic">
          {publication.journal || publication.conference}
        </span>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs hover:bg-primary hover:text-white transition-colors"
          asChild
        >
          <a 
            href={publication.url} 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            View Publication
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PublicationCardSimple;