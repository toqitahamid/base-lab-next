import React from 'react';
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  authors: string[];
  publisher: string;
  url: string;
  type: string;
}

const PublicationCardSimple = ({ publication }: { publication: Publication }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-300 ease-in-out h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-3">{publication.title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">{publication.authors.join(", ")}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-gray-500 italic">
          {publication.publisher}
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