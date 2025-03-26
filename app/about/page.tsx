import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Globe, Bookmark, Star, Sparkles, Trophy, BookOpen, Rocket } from "lucide-react";
import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.mainContainer}>
      {/* Hero Section with Background Image */}
      <section className={`${styles.heroSection} relative mb-24 text-center w-full min-h-[50vh] flex items-center justify-center`}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Lab Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Base Lab</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Advancing cutting-edge research in Distributed Computing, Deep Learning, and Computer Vision at Southern Illinois University.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <a href="/team" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Meet Our Team
            </a>
            <a href="/research" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
              Our Research
            </a>
          </div>
        </div>
      </section>

      {/* Research Areas Section - Improved Design */}
      <section className={`${styles.researchSection} py-16 mb-24`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6">Research Focus</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Our lab specializes in cutting-edge research across these interconnected domains
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className={styles.researchArea}>
              <div className={styles.researchIcon}>
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Distributed Computing</h3>
              <ul className={styles.researchList}>
                <li>Autonomous decentralized systems</li>
                <li>Service-oriented architecture</li>
                <li>Scalable communication technologies</li>
                <li>Trust frameworks for volunteer computing</li>
              </ul>
              <div className={styles.researchBackground}></div>
            </div>
            
            <div className={styles.researchArea}>
              <div className={`${styles.researchIcon} ${styles.researchIconAlt}`}>
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Deep Learning</h3>
              <ul className={styles.researchList}>
                <li>Advanced CNN architectures</li>
                <li>Dilated convolution techniques</li>
                <li>Parallel computing for neural networks</li>
                <li>Real-time system optimization</li>
              </ul>
              <div className={`${styles.researchBackground} ${styles.researchBackgroundAlt}`}></div>
            </div>
            
            <div className={styles.researchArea}>
              <div className={`${styles.researchIcon} ${styles.researchIconAlt2}`}>
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Computer Vision</h3>
              <ul className={styles.researchList}>
                <li>Material defect detection</li>
                <li>Pothole detection systems</li>
                <li>Real-time visual sensing</li>
                <li>Medical image analysis</li>
              </ul>
              <div className={`${styles.researchBackground} ${styles.researchBackgroundAlt2}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section with Accurate Achievements */}
      <section className={`${styles.timelineSection} container mx-auto px-4 max-w-5xl mb-24`}>
        <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className={`${styles.timelineContent} md:w-5/12`}>
                <h3 className="text-xl font-bold mb-2">2002-2004</h3>
                <p className="text-gray-600">Pioneered research in autonomous decentralized community systems and service-oriented communication technologies.</p>
              </div>
            </div>
            
            <div className={`${styles.timelineItem} ${styles.timelineRight}`}>
              <div className={styles.timelineMarker}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className={`${styles.timelineContent} md:w-5/12`}>
                <h3 className="text-xl font-bold mb-2">2011-2012</h3>
                <p className="text-gray-600">Published influential work on GPS-based safety systems and intelligent computing approaches.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className={`${styles.timelineContent} md:w-5/12`}>
                <h3 className="text-xl font-bold mb-2">2020-2021</h3>
                <p className="text-gray-600">Published groundbreaking research on Smart Pothole Detection using Deep Learning, receiving over 120 citations.</p>
              </div>
            </div>
            
            <div className={`${styles.timelineItem} ${styles.timelineRight}`}>
              <div className={styles.timelineMarker}>
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className={`${styles.timelineContent} md:w-5/12`}>
                <h3 className="text-xl font-bold mb-2">2022-2023</h3>
                <p className="text-gray-600">Developed DSTEELNet, a real-time parallel system for detecting and classifying defects in steel surfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile Section */}
      <section className={`${styles.profileSection} container mx-auto px-4 max-w-6xl mb-24 py-12 bg-gray-50 rounded-2xl`}>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <div className={`${styles.imageWrapper} relative h-[300px] rounded-2xl overflow-hidden shadow-xl`}>
              <Image
                src="/images/director-profile.jpg"
                alt="Dr. Khaled R. Ahmed"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Lab Director</h2>
            <h3 className="text-2xl font-medium text-blue-600 mb-4">Dr. Khaled R. Ahmed</h3>
            <p className="text-lg text-gray-600 mb-4">
              Associate Professor of Computer Science at Southern Illinois University with expertise in Distributed Computing, Big Data, and Deep Learning.
            </p>
            <div className="flex items-center text-gray-600 mb-2">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              <span><strong>714 Citations</strong> (369 since 2020)</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <Trophy className="w-5 h-5 mr-2 text-blue-600" />
              <span><strong>h-index: 14</strong> (11 since 2020)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bookmark className="w-5 h-5 mr-2 text-blue-600" />
              <span><strong>i10-index: 24</strong> (12 since 2020)</span>
            </div>
            <div className="mt-6">
              <a 
                href="https://scholar.google.com/citations?user=FYKqgh4AAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <span className="mr-2">View Google Scholar Profile</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Publications Section - Improved Design */}
      <section className={`${styles.publicationsSection} py-20 mb-24 bg-gradient-to-b from-white to-gray-50`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breakthrough research that has advanced the field and made real-world impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={styles.publicationCard}>
              <div className={styles.publicationContent}>
                <div className={styles.publicationStats}>
                  <div className={styles.citationCount}>
                    <span className="block text-3xl font-bold text-blue-600">120</span>
                    <span className="text-sm text-gray-500">Citations</span>
                  </div>
                  <div className={styles.publicationYear}>
                    <span className="block text-xl font-semibold">2021</span>
                    <span className="text-sm text-gray-500">Sensors</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Pothole Detection Using Deep Learning Based on Dilated Convolution</h3>
                <p className="text-gray-600 mb-4">A groundbreaking approach to road condition monitoring using advanced computer vision techniques.</p>
                <div className={styles.publicationTags}>
                  <span>Computer Vision</span>
                  <span>Deep Learning</span>
                  <span>CNN</span>
                </div>
              </div>
            </div>
            
            <div className={styles.publicationCard}>
              <div className={styles.publicationContent}>
                <div className={styles.publicationStats}>
                  <div className={styles.citationCount}>
                    <span className="block text-3xl font-bold text-blue-600">16</span>
                    <span className="text-sm text-gray-500">Citations</span>
                  </div>
                  <div className={styles.publicationYear}>
                    <span className="block text-xl font-semibold">2023</span>
                    <span className="text-sm text-gray-500">Sensors</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">DSTEELNet: A Real-time Parallel Dilated CNN with Atrous Spatial Pyramid Pooling</h3>
                <p className="text-gray-600 mb-4">Novel system for detecting and classifying defects in surface steel strips with high accuracy.</p>
                <div className={styles.publicationTags}>
                  <span>Computer Vision</span>
                  <span>Deep Learning</span>
                  <span>Manufacturing</span>
                </div>
              </div>
            </div>
            
            <div className={styles.publicationCard}>
              <div className={styles.publicationContent}>
                <div className={styles.publicationStats}>
                  <div className={styles.citationCount}>
                    <span className="block text-3xl font-bold text-blue-600">18</span>
                    <span className="text-sm text-gray-500">Citations</span>
                  </div>
                  <div className={styles.publicationYear}>
                    <span className="block text-xl font-semibold">2020</span>
                    <span className="text-sm text-gray-500">IEEE Access</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">ProTrust: A Probabilistic Trust Framework for Volunteer Cloud Computing</h3>
                <p className="text-gray-600 mb-4">Innovative framework addressing trust issues in volunteer computing environments.</p>
                <div className={styles.publicationTags}>
                  <span>Distributed Systems</span>
                  <span>Cloud Computing</span>
                  <span>Security</span>
                </div>
              </div>
            </div>
            
            <div className={styles.publicationCard}>
              <div className={styles.publicationContent}>
                <div className={styles.publicationStats}>
                  <div className={styles.citationCount}>
                    <span className="block text-3xl font-bold text-blue-600">38</span>
                    <span className="text-sm text-gray-500">Citations</span>
                  </div>
                  <div className={styles.publicationYear}>
                    <span className="block text-xl font-semibold">2004</span>
                    <span className="text-sm text-gray-500">IEEE Internet Computing</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Autonomous Decentralized Community Communication for Information Dissemination</h3>
                <p className="text-gray-600 mb-4">Foundational work on decentralized community systems and communication technologies.</p>
                <div className={styles.publicationTags}>
                  <span>Distributed Systems</span>
                  <span>Communication</span>
                  <span>Architecture</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/publications" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-lg font-medium">
              Explore All Publications
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Values Section with Better Cards */}
      <section className={`${styles.valuesSection} py-24`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className={styles.valueCard}>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-8 h-8 mr-3 text-blue-600" />
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  We foster interdisciplinary teamwork across universities and industry partners to solve complex research challenges.
                </p>
                <div className={styles.cardAccent}></div>
              </CardContent>
            </Card>
            <Card className={styles.valueCard}>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lightbulb className="w-8 h-8 mr-3 text-blue-600" />
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  We develop novel algorithms and systems that push boundaries in AI, distributed computing, and real-world applications.
                </p>
                <div className={styles.cardAccent}></div>
              </CardContent>
            </Card>
            <Card className={styles.valueCard}>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="w-8 h-8 mr-3 text-blue-600" />
                  Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  We focus on research with practical applications that address significant technological and societal challenges.
                </p>
                <div className={styles.cardAccent}></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Section with Background */}
      <section className={`${styles.joinSection} relative py-24`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">Join Our Team</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              We&apos;re looking for talented researchers, graduate students, and collaborators interested in distributed computing, deep learning, and computer vision.
            </p>
            <a
              href="/join"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl text-lg font-medium"
            >
              View Open Positions
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 