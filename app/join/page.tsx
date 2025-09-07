import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
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
      'M.S. in Computer Science or related field (In exceptional cases, high achieving students with only bachelor degrees will be admitted to the program)',
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
    <main className="container mx-auto px-4 py-8 max-w-6xl">
        <PageHeader 
        title="Join Our Lab" 
        description="Explore opportunities to contribute to cutting-edge research in Computer Vision and Deep Learning"
      />
      

      {/* Join content with unified container styling */}
      <section className="mb-6">
        <div className="p-6 divide-y divide-gray-200">
            {/* Why Join Us */}
            <div className="py-6 px-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-8">Why Join Us?</h2>
              <p className="text-sm text-gray-800 leading-relaxed mb-6">
                At the BASE Lab, we are at the forefront of AI research, focusing on innovative applications in agriculture and beyond. By joining our team, you will have the opportunity to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Work on cutting-edge research projects',
                  'Collaborate with leading experts in the field',
                  'Access state-of-the-art equipment and resources',
                  'Contribute to real-world applications of AI',
                  'Develop your skills and advance your career in AI and Computer Vision',
                  'Publish in top-tier conferences and journals'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div className="py-6 px-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-8">Open Positions</h2>
              <div className="space-y-12">
                {positions.map((position, index) => (
                  <div key={position.title} className={`${index !== positions.length - 1 ? 'pb-8 border-b border-gray-100' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{position.title}</h3>
                        <p className="text-sm text-gray-800 leading-relaxed mb-6">{position.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-4">Program Details</h4>
                          <div className="space-y-3">
                            {position.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-3">
                                <CheckCircle className="text-green-500 flex-shrink-0 w-4 h-4 mt-0.5" />
                                <span className="text-sm text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-4">Requirements</h4>
                          <div className="space-y-3">
                            {position.requirements.map((req, reqIndex) => (
                              <div key={reqIndex} className="flex items-start space-x-3">
                                <CheckCircle className="text-green-500 flex-shrink-0 w-4 h-4 mt-0.5" />
                                <span className="text-sm text-gray-700">{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div className="py-6 px-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-8">Application Process</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  <span className="text-sm text-gray-700">Review our research areas and open positions</span>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  <div>
                    <span className="text-sm text-gray-700">Prepare your application materials:</span>
                    <div className="ml-4 mt-2 space-y-1">
                      {['CV/resume', 'Statement of purpose', 'Transcripts', 'Letters of recommendation', 'Writing sample (for PhD applicants)'].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  <span className="text-sm text-gray-700">
                    Submit your application through the <Link href="https://gradschool.siu.edu/apply/" className="text-sky-600 hover:text-sky-800 font-medium">SIU Graduate School portal</Link>
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">4</span>
                  <span className="text-sm text-gray-700">If selected, participate in an interview with our team</span>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">5</span>
                  <span className="text-sm text-gray-700">Receive an offer and join our lab!</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="py-6 px-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h2>
              <p className="text-sm text-gray-800 mb-6 leading-relaxed max-w-2xl mx-auto">
                We are always looking for talented individuals to join our team. If you are passionate about AI and computer vision, we would love to hear from you!
              </p>
              <Button asChild size="lg" className="font-medium">
                <Link href="https://gradschool.siu.edu/apply/">Start Your Application</Link>
              </Button>
            </div>
        </div>
      </section>
    </main>
  );
}