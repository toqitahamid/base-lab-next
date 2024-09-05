import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, Mail, Twitter } from "lucide-react";
import teamData from '../../public/team.json';
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
  socialLinks?: {
    github?: string;
    linkedin?: string;
    website?: string;
    xcom?: string;
    googleScholar?: string; 
  };
}

interface AlumniProps {
  name: string;
  degree: string;
  graduationYear: number;
  thesis: string;
  currentPosition: string;
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


const TeamMember = ({ name, role, image, bio, researchInterests, socialLinks }: TeamMemberProps) => (
  <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center p-4">
      <div className="relative w-24 h-24 mr-4 flex-shrink-0">
        <Image
          src={image || '/images/team/placeholder.png'}
          alt={name}
          fill
          sizes="96px"
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <Badge variant="secondary">{role}</Badge>
      </div>
    </div>
    <CardContent className="flex-grow flex flex-col justify-between">
      <div>
      <p className="text-sm text-gray-600 mb-2 h-20 overflow-y-auto">{bio}</p>
        <h4 className="font-semibold mb-1">Research Interests:</h4>
        <ul className="list-disc list-inside text-sm mb-4">
          {researchInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
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
    </CardContent>
  </Card>
);

const AlumniMember = ({ name, degree, graduationYear, thesis, currentPosition, image, awards, socialLinks }: AlumniProps) => (
  <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center p-4">
      <div className="relative w-16 h-16 mr-4 flex-shrink-0">
        <Image
          src={image || '/images/team/placeholder.png'}
          alt={name}
          fill
          sizes="64px"
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
      </div>
      <div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <Badge variant="outline">{degree} {graduationYear}</Badge>
      </div>
    </div>
    <CardContent className="flex-grow flex flex-col justify-between">
      <div>
        <p className="text-sm text-gray-600 mb-2 h-16 overflow-y-auto">Thesis: {thesis}</p>
        <p className="text-sm text-gray-600 font-semibold mb-2">Current: {currentPosition}</p>
        {awards && awards.length > 0 && (
          <div className="mb-2">
            <p className="text-sm font-semibold">Awards:</p>
            <ul className="list-disc list-inside text-sm">
              {awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
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
    </CardContent>
  </Card>
);




export default function TeamPage() {
  const { phdStudents, mastersStudents, alumni } = teamData;

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader 
        title="Our Team" 
        description="Meet the dedicated researchers and students of BASE Lab"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lab Director</h2>
        <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-4">
              <div className="relative w-full aspect-square max-w-[200px] md:max-w-none mx-auto md:mx-0">
          <Image
            src="/images/team/khaled-ahmed.jpeg"
            alt="Dr. Khaled Ahmed"
            fill
            sizes="(max-width: 768px) 200px, (max-width: 1200px) 50vw, 33vw"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center 5%'
            }}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="p-6 md:p-8 md:w-2/3">
        <CardTitle className="text-2xl mb-2">Dr. Khaled Ahmed</CardTitle>
        <CardDescription className="text-lg mb-4">Associate Professor and Graduate Program Director</CardDescription>
        <div className="text-gray-600 mb-4 space-y-4">
          <p>
            Khaled Ahmed is currently an associate professor and graduate program director in the School of Computing at Southern Illinois University. He was previously an associate professor in the Department of Computer Science, College of Computer and Information Technology at King Faisal University. Moreover, he worked as a postdoctoral researcher at the University of Tokyo, Japan. He has over 19 years of experience in academia, research, and industry.
          </p>
          <p>
            Dr. Ahmed has a prolific publication record, including 69 articles in journals and conference proceedings, and he has edited four books on Peer-to-Peer networks, Wireless Sensor Networks, and advances in Big Data, Blockchain, and Deep Learning. He has acted as Principal Investigator (PI) and Co-PI in about 11 funded research projects. Currently, he is PI and Co-PI on three federal/state research funds.
          </p>
          <p>
            His current research focuses on the areas of Computer Vision, Deep Learning, Big Data, and real-time video analysis for safety applications.
          </p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" asChild className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
            <a href="mailto:khaled.ahmed@siu.edu">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </Button>
          <Button variant="outline" asChild className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
            <a href="https://www2.cs.siu.edu/~kahmed/index.html" target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4" />
              <span>Website</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  </Card>
      </section>

      <section className="mb-12">
        {/* <SectionHeader title="Current Students" icon={<Users className="h-6 w-6 text-white" />} /> */}
        {/* <h2 className="text-2xl font-semibold mb-4">Current Students</h2> */}
        
        <div className="mb-8">
          <SectionHeader title="PhD Students" icon={<GraduationCap className="h-6 w-6 text-white" />} />
          {/* <h3 className="text-xl font-semibold mb-4">PhD Students</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdStudents.map((student) => (
              <TeamMember key={student.name} {...student} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Master's Students" icon={<GraduationCap className="h-6 w-6 text-white" />} />
          {/* <h3 className="text-xl font-semibold mb-4">Master's Students</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mastersStudents.map((student) => (
              <TeamMember key={student.name} {...student} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader title="Alumni" icon={<History className="h-6 w-6 text-white" />} />
        {/* <h2 className="text-2xl font-semibold mb-4">Alumni</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alum) => (
            <AlumniMember key={alum.name} {...alum} />
          ))}
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