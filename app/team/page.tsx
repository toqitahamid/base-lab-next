import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the talented researchers, faculty, and students at BASE LAB. Our team specializes in Computer Vision, Deep Learning, and Distributed Computing research at Southern Illinois University Carbondale.",
  keywords: [
    "research team",
    "faculty members",
    "PhD students",
    "masters students",
    "computer science researchers",
    "AI researchers",
    "SIU faculty",
    "academic team",
    "research group",
    "computer vision experts",
    "deep learning researchers",
    "distributed computing team",
    "academic alumni"
  ],
  openGraph: {
    title: "Our Team - BASE LAB Researchers",
    description: "Meet the talented researchers and students at BASE LAB, specializing in Computer Vision, Deep Learning, and Distributed Computing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - BASE LAB Researchers",
    description: "Meet the talented researchers and students at BASE LAB, specializing in Computer Vision, Deep Learning, and Distributed Computing.",
  },
};
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, Mail, Twitter, Award } from "lucide-react";
import teamData from '../../data/team.json';
import PageHeader from '@/components/PageHeader';
import { GraduationCap, Users, History } from 'lucide-react';



interface SectionHeaderProps {
  title: string;
  icon: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => (
  <Card className="mb-6 bg-gradient-to-r from-primary/20 to-primary/10">
    <CardHeader className="flex flex-row items-center space-x-4">
      <div className="p-2 bg-primary rounded-full">
        {icon}
      </div>
      <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
    </CardHeader>
  </Card>
);


interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  bio: string;
  researchInterests: string[];
  badges?: string[];
  socialLinks?: {
    github?: string;
    linkedin?: string;
    website?: string;
    xcom?: string;
    googleScholar?: string;
  };
}

// Expanded labels for the short award badges shown under student names
const badgeTitles: Record<string, string> = {
  DRF: 'Doctoral Research Fellowship',
  DRA: 'Dissertation Research Assistantship',
  VCR: 'Vice Chancellor for Research',
};

// Muted matte styling per award badge
const badgeStyles: Record<string, string> = {
  DRF: 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-50',
  DRA: 'bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-50',
  VCR: 'bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-50',
};

interface AlumniProps {
  name: string;
  degree: string;
  graduationYear: number;
  thesis?: string;
  currentPosition?: string;
  image?: string;
  awards?: string[];
  socialLinks?: {
    github?: string;
    linkedin?: string;
    website?: string;
    xcom?: string;
    googleScholar?: string; 
  };
}


const TeamMember = ({ name, role, image, bio, researchInterests, badges, socialLinks }: TeamMemberProps) => (
  <div className="h-full flex flex-col p-4 border border-gray-200 rounded-lg" style={{ backgroundColor: '#faf9f6' }}>
    <div className="flex items-center mb-4">
      <div className="relative w-24 h-24 mr-4 flex-shrink-0">
        <Image
          src={image || '/images/team/placeholder.png'}
          alt={`${name}, ${role} at BASE LAB, specializing in ${researchInterests.slice(0, 2).join(' and ')} research`}
          fill
          sizes="96px"
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight">{name}</h3>
        <p className="text-sm text-gray-700 font-medium">{role}</p>
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {badges.map((badge) => (
              <Badge
                key={badge}
                className={`text-xs font-semibold gap-1 ${badgeStyles[badge] || ''}`}
                title={badgeTitles[badge] || badge}
              >
                <Award className="h-3 w-3" />
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="flex-grow flex flex-col justify-between">
      <div>
        <p className="text-sm text-gray-800 mb-4 leading-relaxed">{bio}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Research Interests:</h4>
          <div className="space-y-1">
            {researchInterests.map((interest, index) => (
              <div key={index} className="text-sm text-gray-700 flex items-start">
                <span className="text-gray-400 mr-2 mt-1">•</span>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {socialLinks && (
        <div className="flex space-x-2 mt-auto">
          {socialLinks.website && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.googleScholar && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
              </a>
            </Button>
          )}
          {socialLinks.xcom && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.xcom} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.github && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      )}
    </div>
  </div>
);

const AlumniMember = ({ name, degree, graduationYear, thesis, currentPosition, image, awards, socialLinks }: AlumniProps) => (
  <div className="h-full flex flex-col p-4 border border-gray-200 rounded-lg" style={{ backgroundColor: '#faf9f6' }}>
    <div className="flex items-center mb-4">
      <div className="relative w-20 h-20 mr-4 flex-shrink-0">
        <Image
          src={image || '/images/team/placeholder.png'}
          alt={`${name}, ${degree} graduate from BASE LAB, ${graduationYear}${currentPosition ? `, currently ${currentPosition}` : ''}`}
          fill
          sizes="80px"
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight">{name}</h3>
        <p className="text-sm text-gray-700 font-medium">{degree} {graduationYear}</p>
      </div>
    </div>
    <div className="flex-grow flex flex-col justify-between">
      <div>
        {thesis && (
          <p className="text-sm text-gray-800 mb-3 leading-relaxed"><span className="font-medium">Thesis:</span> {thesis}</p>
        )}
        {currentPosition && (
          <p className="text-sm text-gray-800 font-medium mb-3"><span className="font-medium">Current:</span> {currentPosition}</p>
        )}
        {awards && awards.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Awards:</h4>
            <div className="space-y-1">
              {awards.map((award, index) => (
                <div key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {socialLinks && (
        <div className="flex space-x-2 mt-auto">
          {socialLinks.website && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.googleScholar && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
              </a>
            </Button>
          )}
          {socialLinks.xcom && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.xcom} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.github && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {socialLinks.linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      )}
    </div>
  </div>
);




export default function TeamPage() {
  const { phdStudents, mastersStudents, alumni } = teamData;

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader 
        title="Our Team" 
        description="Meet the dedicated researchers and students of BASE Lab"
      />

      {/* Team content with unified container styling */}
      <section className="mb-6">
        <div className="divide-y divide-gray-200" style={{ backgroundColor: '#faf9f6' }}>
          {/* Lab Director */}
          <div className="px-8 py-8" style={{ backgroundColor: '#faf9f6' }}>
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Lab Director</h2>
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32">
                  <Image
                    src="/images/team/khaled-ahmed.png"
                    alt="Dr. Khaled Ahmed, Associate Professor and BASE LAB Director, leading expert in Computer Vision and Deep Learning research"
                    fill
                    sizes="128px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 5%'
                    }}
                    className="rounded-xl shadow-sm"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">Dr. Khaled Ahmed</h3>
                <p className="text-sm text-gray-700 font-medium mb-4">Associate Professor and Graduate Program Director</p>
                <div className="text-sm text-gray-800 mb-6 space-y-3 leading-relaxed">
                  <p>
                    Khaled Ahmed is currently an associate professor and graduate program director in the School of Computing at Southern Illinois University at Carbondale. He was previously an associate professor in the Department of Computer Science, College of Computer and Information Technology at King Faisal University. Moreover, he worked as a postdoctoral researcher at the University of Tokyo, Japan. He has over 19 years of experience in academia, research, and industry.
                  </p>
                  <p>
                    Dr. Ahmed has a prolific publication record, including 69 articles in journals and conference proceedings, and he has edited four books on Peer-to-Peer networks, Wireless Sensor Networks, and advances in Big Data, Blockchain, and Deep Learning. He has acted as Principal Investigator (PI) and Co-PI in about 11 funded research projects. Currently, he is PI and Co-PI on three federal/state research funds.
                  </p>
                  <p>
                    His current research focuses on the areas of Computer Vision, Deep Learning, Big Data, and real-time video analysis for safety applications.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" asChild className="flex items-center space-x-2">
                    <a href="mailto:khaled.ahmed@siu.edu">
                      <Mail className="h-4 w-4" />
                      <span>Contact</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex items-center space-x-2">
                    <a href="http://k-ahmed.com/" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                      <span>Website</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* PhD Students */}
          <div className="px-8 py-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">PhD Students</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {phdStudents.map((student) => (
                <TeamMember key={student.name} {...student} />
              ))}
            </div>
          </div>

          {/* Master's Students */}
          {mastersStudents.length > 0 && (
            <div className="px-8 py-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-8">Master&apos;s Students</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {mastersStudents.map((student) => (
                  <TeamMember key={student.name} {...student} />
                ))}
              </div>
            </div>
          )}

          {/* Alumni */}
          <div className="px-8 py-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Alumni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {alumni.map((alum) => (
                <AlumniMember key={`${alum.name}-${alum.degree}-${alum.graduationYear}`} {...alum} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// export default function TeamPage() {
//   const { phdStudents, mastersStudents, alumni } = teamData;

//   return (
//     <main className="container mx-auto px-4 py-8 max-w-6xl">
//       <PageHeader 
//         title="Our Team" 
//         description="Meet the dedicated researchers and students of BASE Lab"
//       />

// <section className="mb-12">
//   <h2 className="text-2xl font-semibold mb-4">Lab Director</h2>
//   <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
//     <div className="flex flex-col md:flex-row">
//       <div className="w-full md:w-1/3 p-4">
//         <div className="relative w-full aspect-square max-w-[200px] md:max-w-none mx-auto md:mx-0">
//           <Image
//             src="/images/team/khaled-ahmed.jpeg"
//             alt="Dr. Khaled Ahmed"
//             fill
//             sizes="(max-width: 768px) 200px, (max-width: 1200px) 50vw, 33vw"
//             style={{ 
//               objectFit: 'cover',
//               objectPosition: 'center 5%'
//             }}
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//       <div className="p-6 md:p-8 md:w-2/3">
//         <CardTitle className="text-2xl mb-2">Dr. Khaled Ahmed</CardTitle>
//         <CardDescription className="text-lg mb-4">Associate Professor and Graduate Program Director</CardDescription>
//         <div className="text-gray-600 mb-4 space-y-4">
//           <p>
//             Khaled Ahmed is currently an associate professor and graduate program director in the School of Computing at Southern Illinois University. He was previously an associate professor in the Department of Computer Science, College of Computer and Information Technology at King Faisal University. Moreover, he worked as a postdoctoral researcher at the University of Tokyo, Japan. He has over 19 years of experience in academia, research, and industry.
//           </p>
//           <p>
//             Dr. Ahmed has a prolific publication record, including 69 articles in journals and conference proceedings, and he has edited four books on Peer-to-Peer networks, Wireless Sensor Networks, and advances in Big Data, Blockchain, and Deep Learning. He has acted as Principal Investigator (PI) and Co-PI in about 11 funded research projects. Currently, he is PI and Co-PI on three federal/state research funds.
//           </p>
//           <p>
//             His current research focuses on the areas of Computer Vision, Deep Learning, Big Data, and real-time video analysis for safety applications.
//           </p>
//         </div>
//         <div className="flex space-x-4">
//           <Button variant="outline" asChild className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
//             <a href="mailto:khaled.ahmed@siu.edu">
//               <Mail className="h-4 w-4" />
//               <span>Contact</span>
//             </a>
//           </Button>
//           <Button variant="outline" asChild className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
//             <a href="https://www2.cs.siu.edu/~kahmed/index.html" target="_blank" rel="noopener noreferrer">
//               <Globe className="h-4 w-4" />
//               <span>Website</span>
//             </a>
//           </Button>
//         </div>
//       </div>
//     </div>
//   </Card>
// </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Current Students</h2>
//         <Tabs defaultValue="phd">
//           <TabsList>
//             <TabsTrigger value="phd">PhD Students</TabsTrigger>
//             <TabsTrigger value="masters">Masters Students</TabsTrigger>
//           </TabsList>
//           <TabsContent value="phd">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {phdStudents.map((student) => (
//                 <TeamMember key={student.name} {...student} />
//               ))}
//             </div>
//           </TabsContent>
//           <TabsContent value="masters">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {mastersStudents.map((student) => (
//                 <TeamMember key={student.name} {...student} />
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </section>

//       <section className="mt-12">
//         <h2 className="text-2xl font-semibold mb-4">Alumni</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {alumni.map((alum) => (
//             <AlumniMember key={alum.name} {...alum} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }