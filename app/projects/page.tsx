import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import fs from 'fs/promises';
import path from 'path';
import { ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore BASE LAB research projects spanning computer vision, sustainable chemistry, livestock health, precision agriculture, and wildlife conservation.',
  keywords: [
    'research projects',
    'computer vision',
    'deep learning',
    'optical gas imaging',
    'livestock health monitoring',
    'precision agriculture',
    'wildlife monitoring',
    'vision transformers',
    'SIU research',
  ],
  openGraph: {
    title: 'Projects - BASE LAB',
    description:
      'Explore BASE LAB research projects spanning computer vision, sustainable chemistry, livestock health, precision agriculture, and wildlife conservation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - BASE LAB',
    description:
      'Explore BASE LAB research projects spanning computer vision, sustainable chemistry, livestock health, precision agriculture, and wildlife conservation.',
  },
};

interface SubTrack {
  name: string;
  desc: string;
}

interface PaperRef {
  name: string;
  url: string;
}

interface ResearchProject {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  period: string;
  award?: string;
  methods: string[];
  subs?: SubTrack[];
  papers?: number;
  papersList?: PaperRef[];
  repoUrl?: string;
  paperUrl?: string;
  projectUrl?: string;
}

interface ProjectsData {
  active: ResearchProject[];
  past: ResearchProject[];
}

async function getProjects(): Promise<ProjectsData> {
  try {
    const projectsPath = path.join(process.cwd(), 'data', 'projects.json');
    const projectsData = await fs.readFile(projectsPath, 'utf-8');
    return JSON.parse(projectsData);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { active: [], past: [] };
  }
}

function PaperChips({ papers }: { papers: PaperRef[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-gray-700">Papers:</span>
      {papers.map((paper, i) =>
        paper.url ? (
          <a
            key={i}
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs font-medium px-2.5 py-1 rounded-full transition-colors"
          >
            {paper.name}
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        ) : (
          <span
            key={i}
            className="inline-flex items-center bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {paper.name}
          </span>
        )
      )}
    </div>
  );
}

function MethodTags({ methods }: { methods: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {methods.map((m, i) => (
        <span
          key={i}
          className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"
        >
          {m}
        </span>
      ))}
    </div>
  );
}

function ActiveCard({ p }: { p: ResearchProject }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative md:w-2/5 aspect-video md:aspect-auto md:min-h-[260px] flex-shrink-0">
          <Image
            src={p.image}
            alt={p.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 480px"
          />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Active
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col gap-3">
          <span className="text-sm font-medium text-sky-600">{p.period}</span>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{p.title}</h3>
          {p.award && (
            <p className="text-sm text-gray-700">
              <span className="font-medium">Award:</span> {p.award}
            </p>
          )}
          <p className="text-sm font-medium text-gray-700 italic">{p.subtitle}</p>
          <p className="text-sm text-gray-800 leading-relaxed">{p.description}</p>

          {p.subs && (
            <div className="bg-gray-50 border-l-2 border-sky-600 rounded-r-md px-4 py-3 space-y-1.5">
              {p.subs.map((s, i) => (
                <div key={i} className="text-sm">
                  <span className="font-semibold text-sky-700 mr-2">{s.name}</span>
                  <span className="text-gray-700">{s.desc}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto pt-3 border-t border-gray-100 space-y-3">
            {p.papersList && p.papersList.length > 0 && <PaperChips papers={p.papersList} />}
            <MethodTags methods={p.methods} />
            {p.projectUrl && (
              <a
                href={p.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Project Website
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function PastCard({ p }: { p: ResearchProject }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={p.image}
          alt={p.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <span className="text-sm font-medium text-sky-600">
          {p.period}
          {p.papers ? ` · ${p.papers} papers` : ''}
        </span>
        <h3 className="text-base font-bold text-gray-900 leading-tight">{p.title}</h3>
        {p.award && (
          <p className="text-sm text-gray-700">
            <span className="font-medium">Award:</span> {p.award}
          </p>
        )}
        <p className="text-sm text-gray-800 leading-relaxed">{p.description}</p>
        <div className="mt-auto pt-3 border-t border-gray-100 space-y-3">
          {p.papersList && p.papersList.length > 0 && <PaperChips papers={p.papersList} />}
          <MethodTags methods={p.methods} />
          {p.projectUrl && (
            <a
              href={p.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Project Website
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function ProjectsPage() {
  const { active: activeProjects, past: pastProjects } = await getProjects();

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader
        title="Projects"
        description="Research lines spanning computer vision, sustainable chemistry, livestock health, precision agriculture, and wildlife conservation"
      />

      {/* Active Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-gray-900 mb-6">
          Active Projects
        </h2>
        <div className="space-y-6">
          {activeProjects.map((p, i) => (
            <ActiveCard p={p} key={i} />
          ))}
        </div>
      </section>

      {/* Past Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-medium text-gray-900 mb-6">
          Past Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastProjects.map((p, i) => (
            <PastCard p={p} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
