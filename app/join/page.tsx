import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';


const positions = [
  {
    title: 'PhD Students',
    description: 'Join our doctoral program and contribute to cutting-edge research in Computer Vision and Deep Learning.',
    details: [
      'Full funding available for qualified candidates',
      'Opportunity to work on USDA-funded projects',
      'Access to state-of-the-art computing resources',
      'Collaboration with industry partners',
      'Teaching assistantship opportunities'
    ],
    requirements: [
      'M.S. in Computer Science or related field',
      'Strong background in machine learning and computer vision',
      'Excellent programming skills (Python, PyTorch/TensorFlow)',
      'Good academic standing (minimum 3.5 GPA)',
      'GRE scores (recommended but not required)',
      'TOEFL/IELTS for international students'
    ]
  },
  {
    title: 'Masters Students',
    description: 'Enhance your skills and knowledge through our master\'s program in Computer Science with a focus on AI and Computer Vision.',
    details: [
      'Thesis and non-thesis options available',
      'Opportunities for research assistantships',
      'Industry-relevant curriculum',
      'Internship opportunities with partner companies',
      'Pathway to PhD program for exceptional students'
    ],
    requirements: [
      'B.S. in Computer Science or related field',
      'Basic knowledge of machine learning and computer vision',
      'Programming experience in Python',
      'Minimum 3.0 GPA in undergraduate studies',
      'GRE scores (recommended but not required)',
      'TOEFL/IELTS for international students'
    ]
  },
];

export default function JoinPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
        <PageHeader 
        title="Join Our Lab" 
        description="Explore opportunities to contribute to cutting-edge research in Computer Vision and Deep Learning"
      />
      

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Why Join Us?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              At the Computer Vision and Deep Learning Lab, we are at the forefront of AI research, focusing on innovative applications in agriculture and beyond. By joining our team, you will have the opportunity to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Work on cutting-edge research projects',
                'Collaborate with leading experts in the field',
                'Access state-of-the-art equipment and resources',
                'Contribute to real-world applications of AI',
                'Develop your skills and advance your career in AI and Computer Vision',
                'Publish in top-tier conferences and journals'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Open Positions</h2>
        <Tabs defaultValue="phd">
          <TabsList className="mb-4">
            <TabsTrigger value="phd">PhD Students</TabsTrigger>
            <TabsTrigger value="masters">Masters Students</TabsTrigger>
          </TabsList>
          {positions.map((position) => (
            <TabsContent key={position.title} value={position.title.toLowerCase().split(' ')[0]}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{position.title}</CardTitle>
                  <CardDescription>{position.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Program Details</h4>
                      <ul className="space-y-2">
                        {position.details.map((detail, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="text-green-500 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Application Process</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal list-inside text-gray-700 space-y-4">
              <li>Review our research areas and open positions</li>
              <li>Prepare your application materials:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>CV/resume</li>
                  <li>Statement of purpose</li>
                  <li>Transcripts</li>
                  <li>Letters of recommendation</li>
                  <li>Writing sample (for PhD applicants)</li>
                </ul>
              </li>
              <li>Submit your application through the <Link href="https://gradschool.siu.edu/apply/" className="text-primary hover:underline">SIU Graduate School portal</Link></li>
              <li>If selected, participate in an interview with our team</li>
              <li>Receive an offer and join our lab!</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <Card className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <CardTitle className="text-3xl mb-4 text-primary">Ready to Take the Next Step?</CardTitle>
        <CardDescription className="text-lg mb-6">
          We are always looking for talented individuals to join our team. If you are passionate about AI and computer vision, we would love to hear from you!
        </CardDescription>
        <Button asChild size="lg" className="font-semibold">
          <Link href="https://gradschool.siu.edu/apply/">Start Your Application</Link>
        </Button>
      </Card>
    </main>
  );
}