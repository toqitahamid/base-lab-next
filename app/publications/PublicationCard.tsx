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

const PublicationCard = ({ publication }) => {
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
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex flex-col flex-grow">
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
        <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <Button 
                variant="outline" 
                size="sm" 
                className="mb-2 sm:mb-0 flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
                asChild
            >
                <a 
                href={publication.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                >
                View Publication <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button>
          <div className="space-x-2">
            <Dialog open={abstractOpen} onOpenChange={setAbstractOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Abstract</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
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
              {/* ... (keep existing Dialog content for citation) */}
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicationCard;