"use client";

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Publication {
  title: string;
  authors: string[];
  publisher: string;
  url: string;
  abstract: string;
  citationKey: string;
  type: string;
  year: number;
}

interface PublicationCardProps {
  publication: Publication;
  bibtexData: string;
  index: number;
}

const PublicationCard = ({ publication, bibtexData, index }: PublicationCardProps) => {
  const [citeOpen, setCiteOpen] = useState(false);
  const [abstractOpen, setAbstractOpen] = useState(false);
  const [bibtex, setBibtex] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (citeOpen) {
      const regex = new RegExp(`@.*?{${publication.citationKey}[\\s\\S]*?}(?=\\s*@|\\s*$)`, 'g');
      const match = bibtexData.match(regex);
      if (match) {
        setBibtex(match[0]);
      } else {
        setBibtex('BibTeX not available for this publication.');
      }
    }
  }, [citeOpen, publication.citationKey, bibtexData]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Better alternating backgrounds for visibility
  const getRowBackground = () => {
    return index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
  };

  // Publication type colors for better distinction
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'journal':
        return 'bg-blue-100 text-blue-800';
      case 'conference':
        return 'bg-green-100 text-green-800';
      case 'workshop':
        return 'bg-orange-100 text-orange-800';
      case 'preprint':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`${getRowBackground()} py-6 px-6 border-b border-gray-100 hover:shadow-sm transition-shadow duration-200`}>
      {/* Title */}
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          {publication.title}
        </h3>
      </div>

      {/* Publisher, type, and year */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="text-sm text-gray-700 font-medium">{publication.publisher}</span>
        <span className={`text-xs px-2 py-1 font-semibold ${getTypeColor(publication.type)}`}>
          {publication.type}
        </span>
        <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1">
          {publication.year}
        </span>
      </div>

      {/* Authors */}
      <div className="mb-4">
        <p className="text-sm text-gray-800 font-medium">
          {publication.authors.join(", ")}
        </p>
      </div>

      {/* Action links */}
      <div className="flex items-center gap-2 text-sm">
        <a 
          href={publication.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sky-600 hover:text-sky-800 font-medium"
        >
          Paper
        </a>
        
        <span className="text-gray-400">/</span>
        
        <a 
          href="#"
          className="text-sky-600 hover:text-sky-800 font-medium"
        >
          Code
        </a>
        
        <span className="text-gray-400">/</span>
        
        <Dialog open={abstractOpen} onOpenChange={setAbstractOpen}>
          <DialogTrigger asChild>
            <button className="text-sky-600 hover:text-sky-800 font-medium">
              Abstract
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">Abstract</DialogTitle>
            </DialogHeader>
            <div className="mt-4 p-4 bg-gray-50">
              <p className="text-sm text-gray-800 leading-relaxed">{publication.abstract}</p>
            </div>
          </DialogContent>
        </Dialog>
        
        
        <span className="text-gray-400">/</span>
        
        <Dialog open={citeOpen} onOpenChange={setCiteOpen}>
          <DialogTrigger asChild>
            <button className="text-sky-600 hover:text-sky-800 font-medium">
              Cite
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">BibTeX Citation</DialogTitle>
            </DialogHeader>
            <div className="relative mt-4">
              {bibtex !== 'BibTeX not available for this publication.' && (
                <button
                  onClick={copyToClipboard}
                  type="button"
                  className="absolute top-3 right-3 z-10 bg-gray-700 text-white hover:bg-gray-800 px-3 py-1 text-xs font-medium"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}
              <div className="bg-gray-900 p-4">
                <pre className="text-green-400 text-xs whitespace-pre-wrap break-words font-mono">
                  {bibtex}
                </pre>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default PublicationCard;