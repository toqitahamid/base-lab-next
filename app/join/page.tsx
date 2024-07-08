import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
  const positions = [
    { title: 'PhD Students', description: 'Join our doctoral program and contribute to cutting-edge research.' },
    { title: 'Masters Students', description: 'Enhance your skills and knowledge through our master\'s program.' },
  ];

  const requirements = [
    { title: 'Academic Background', description: 'Strong foundation in Computer Science, Engineering, or related fields.' },
    { title: 'Programming Skills', description: 'Proficiency in Python, C++, or other relevant programming languages.' },
    { title: 'Research Experience', description: 'Previous research experience is preferred but not mandatory.' },
    { title: 'English Proficiency', description: 'Excellent written and verbal communication skills in English.' },
    { title: 'Motivation', description: 'Strong interest in AI, Computer Vision, and Deep Learning.' },
    { title: 'Collaboration', description: 'Ability to work effectively in a team environment.' },
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Join Our Lab</CardTitle>
          <CardDescription className="text-lg mt-2">
            Explore opportunities to contribute to cutting-edge research in Computer Vision and Deep Learning
          </CardDescription>
        </CardHeader>
      </Card>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At the Computer Vision and Deep Learning Lab, we are at the forefront of AI research, focusing on innovative applications in agriculture and beyond. By joining our team, you will have the opportunity to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Work on cutting-edge research projects</li>
          <li>Collaborate with leading experts in the field</li>
          <li>Access state-of-the-art equipment and resources</li>
          <li>Contribute to real-world applications of AI</li>
          <li>Develop your skills and advance your career in AI and Computer Vision</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((position, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{position.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700">{position.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Requirements to Join</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-lg">{req.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Review our research areas and open positions</li>
          <li>Prepare your CV/resume and a statement of research interests</li>
          <li>Contact us through our contact form or via email</li>
          <li>If selected, participate in an interview with our team</li>
          <li>Receive an offer and join our lab!</li>
        </ol>
      </section>

      <Card className="text-center p-6">
        <CardTitle className="text-2xl mb-4">Ready to Take the Next Step?</CardTitle>
        <CardDescription className="mb-6">
          We are always looking for talented individuals to join our team. If you are passionate about AI and computer vision, we would love to hear from you!
        </CardDescription>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us to Apply</Link>
        </Button>
      </Card>
    </main>
  );
}