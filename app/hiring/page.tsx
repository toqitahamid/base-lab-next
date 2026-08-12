import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, CalendarClock } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: "We're Hiring - Graduate Research Assistant",
  description: "The BASE Research Lab at Southern Illinois University Carbondale is hiring a Graduate Research Assistant (50% FTE) in AI, Machine Learning, Deep Learning, and Computer Vision. Immediate joining for Fall 2026 and Spring 2027.",
  keywords: [
    "graduate research assistant",
    "GRA position",
    "AI research position",
    "machine learning assistantship",
    "computer vision research",
    "LLM research position",
    "SIU Carbondale",
    "computer science assistantship",
    "funded graduate position",
    "research assistantship"
  ],
  openGraph: {
    title: "BASE Lab is Hiring - Graduate Research Assistant (AI/ML)",
    description: "Graduate Research Assistant (50% FTE) position in AI, Machine Learning, Deep Learning, and Computer Vision at SIU Carbondale. Immediate joining for Fall 2026 and Spring 2027.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BASE Lab is Hiring - Graduate Research Assistant (AI/ML)",
    description: "Graduate Research Assistant (50% FTE) position in AI, Machine Learning, Deep Learning, and Computer Vision at SIU Carbondale. Immediate joining for Fall 2026 and Spring 2027.",
  },
};

const responsibilities = [
  'Collect, preprocess, and curate datasets from educational, scientific, and domain-specific resources.',
  'Develop, train, fine-tune, and evaluate Large Language Models (LLMs) and AI systems.',
  'Implement parameter-efficient fine-tuning methods such as LoRA and related approaches.',
  'Design and develop web-based AI applications and user interfaces.',
  'Create benchmarking and evaluation pipelines for AI model assessment.',
  'Collaborate with interdisciplinary teams to support research, development, and deployment activities.',
  'Prepare technical documentation, reports, and research publications.',
];

const requiredQualifications = [
  'Current enrollment in an M.S. or Ph.D. program in Computer Science.',
  'Preference will be given to students pursuing the thesis option and actively conducting research toward an M.S. thesis or Ph.D. dissertation.',
  'Strong programming skills in Python.',
  'Experience with PyTorch, TensorFlow, or similar deep learning frameworks.',
  'Knowledge of machine learning, deep learning, and transformer architectures.',
  'Familiarity with Linux environments, Git, and software development practices.',
  'Strong analytical, problem-solving, and communication skills.',
];

const preferredVision = [
  'Experience with Convolutional Neural Networks (CNNs) for image classification, object detection, image segmentation, and feature extraction.',
  'Experience with Vision Transformers (ViT) and transformer-based computer vision architectures.',
  'Experience with object detection and segmentation models such as YOLO, Faster R-CNN, Mask R-CNN, DETR, or related frameworks.',
  'Experience with multimodal AI, Vision-Language Models (VLMs), and image understanding systems.',
  'Experience in medical imaging, agricultural AI, remote sensing, intelligent perception, or related applications.',
];

const preferredLLM = [
  'Experience with LLMs, transformer models, prompt engineering, and Retrieval-Augmented Generation (RAG).',
  'Experience fine-tuning foundation models using LoRA, QLoRA, PEFT, or similar techniques.',
  'Knowledge of Natural Language Processing (NLP), generative AI, and conversational AI systems.',
  'Experience with model evaluation, explainability, uncertainty estimation, and performance benchmarking.',
];

const benefits = [
  'Gain hands-on experience with state-of-the-art AI technologies.',
  'Develop expertise in LLMs, computer vision, and transformer-based systems.',
  'Collaborate on interdisciplinary research projects.',
  'Contribute to peer-reviewed publications and conference presentations.',
  'Work within an active research environment focused on innovative AI solutions.',
];

const applicationMaterials = [
  'Curriculum Vitae (CV)',
  'Statement of research interests and relevant experience',
  'Unofficial transcripts',
];

export default function HiringPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <PageHeader
        title="Graduate Research Assistant (Computer Science / AI)"
        description="BASE Research Lab — School of Computing, Southern Illinois University Carbondale"
      />

      <section className="mb-6">
        <div className="divide-y divide-gray-200">
          {/* Position Overview */}
          <div className="py-6 px-6">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Open Position
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                50% FTE
              </span>
              <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
                <CalendarClock className="h-3.5 w-3.5" />
                Immediate Joining — Fall 2026 &amp; Spring 2027
              </span>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              The Bridging AI, Systems, and Environment (BASE) Research Lab at Southern Illinois
              University Carbondale is seeking a highly motivated Graduate Research Assistant (50% FTE)
              with a strong background in Artificial Intelligence, Machine Learning, Deep Learning, and
              Computer Vision to support interdisciplinary research and educational technology development
              efforts. The successful candidate will work closely with Dr. Khaled Ahmed and graduate
              researchers on cutting-edge AI applications involving large language models, intelligent
              tutoring systems, and advanced deep learning techniques.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="py-6 px-6">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Responsibilities</h2>
            <div className="space-y-3">
              {responsibilities.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 w-4 h-4 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Qualifications */}
          <div className="py-6 px-6">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Required Qualifications</h2>
            <div className="space-y-3">
              {requiredQualifications.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 w-4 h-4 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preferred Qualifications */}
          <div className="py-6 px-6">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Preferred Qualifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Deep Learning &amp; Computer Vision</h3>
                <div className="space-y-3">
                  {preferredVision.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 w-4 h-4 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Large Language Models &amp; Generative AI</h3>
                <div className="space-y-3">
                  {preferredLLM.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 w-4 h-4 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="py-6 px-6">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Benefits</h2>
            <p className="text-sm text-gray-800 leading-relaxed mb-4">This position offers opportunities to:</p>
            <div className="space-y-3">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 w-4 h-4 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Materials */}
          <div className="py-6 px-6">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Application Materials</h2>
            <p className="text-sm text-gray-800 leading-relaxed mb-4">
              Interested applicants should submit the following to Dr. Khaled Ahmed
              (<a href="mailto:Khaled.ahmed@siu.edu" className="text-sky-600 hover:text-sky-800 font-medium">Khaled.ahmed@siu.edu</a>):
            </p>
            <div className="space-y-2 mb-8">
              {applicationMaterials.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">{index + 1}</span>
                  <span className="text-sm text-gray-700 mt-0.5">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="font-medium">
                <a href="mailto:Khaled.ahmed@siu.edu?subject=Graduate%20Research%20Assistant%20Application%20-%20BASE%20Lab" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Apply by Email
                </a>
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                Learn more about our lab on the <Link href="/projects" className="text-sky-600 hover:text-sky-800">Projects</Link> and <Link href="/join" className="text-sky-600 hover:text-sky-800">Join Our Lab</Link> pages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
