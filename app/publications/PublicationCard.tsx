"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import fetchBibtexData from '@/components/fetchBibtexData';

interface Publication {
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  url: string;
  abstract: string;
  citationKey: string;
  type: 'journal' | 'conference';
}

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const [citeOpen, setCiteOpen] = useState(false);
  const [abstractOpen, setAbstractOpen] = useState(false);
  const [bibtex, setBibtex] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loadBibtex = async () => {
      const data = await fetchBibtexData();
      const regex = new RegExp(`@.*?{${publication.citationKey}[\\s\\S]*?}(?=\\s*@|\\s*$)`, 'g');
      const match = data.match(regex);
      if (match) {
        setBibtex(match[0]);
      } else {
        setBibtex('BibTeX not available for this publication.');
      }
    };

    if (citeOpen) {
      loadBibtex();
    }
  }, [citeOpen, publication.citationKey]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card className="mb-6 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{publication.authors.join(", ")}</p>
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant={publication.type === "journal" ? "default" : "secondary"}>
            {publication.type === "journal" ? "Journal" : "Conference"}
          </Badge>
          <span className="text-sm text-gray-500">
            {publication.journal || publication.conference}
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <a 
            href={publication.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-600 hover:underline flex items-center"
          >
            View Publication <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <div className="space-x-2">
            <Dialog open={abstractOpen} onOpenChange={setAbstractOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Abstract</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Abstract</DialogTitle>
                </DialogHeader>
                <div className="mt-2">
                  <p className="text-sm text-gray-700">{publication.abstract}</p>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog open={citeOpen} onOpenChange={setCiteOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Cite</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Citation</DialogTitle>
                </DialogHeader>
                <div className="relative">
                  {bibtex !== 'BibTeX not available for this publication.' && (
                    <Button
                      onClick={copyToClipboard}
                      type="button"
                      size="sm"
                      className="absolute top-2 right-2 z-10"
                    >
                      <span className="sr-only">Copy</span>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  )}
                  <div className="overflow-x-auto">
                    <pre className="bg-gray-100 p-4 rounded-md text-xs whitespace-pre-wrap break-words">
                      {bibtex}
                    </pre>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicationCard;