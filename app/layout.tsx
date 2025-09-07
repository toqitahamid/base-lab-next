import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: {
    default: "BASE LAB @ SIU Carbondale",
    template: "%s | BASE LAB @ SIU Carbondale"
  },
  description: "Leading research lab at Southern Illinois University specializing in Computer Vision, Deep Learning, and Distributed Computing. Pioneering AI solutions for real-world applications including smart pothole detection, defect analysis, and agricultural monitoring.",
  keywords: [
    "computer vision",
    "deep learning",
    "artificial intelligence",
    "machine learning",
    "distributed computing",
    "SIU Carbondale",
    "research lab",
    "pothole detection",
    "defect analysis",
    "agricultural monitoring",
    "neural networks",
    "computer science research",
    "academic research"
  ],
  authors: [{ name: "BASE LAB Research Team" }],
  creator: "BASE LAB @ SIU Carbondale",
  publisher: "Southern Illinois University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://base-lab.org'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BASE LAB @ SIU Carbondale - Computer Vision & Deep Learning Research",
    description: "Leading research lab at Southern Illinois University specializing in Computer Vision, Deep Learning, and Distributed Computing. Pioneering AI solutions for real-world applications.",
    url: 'https://base-lab.org', // Replace with actual domain
    siteName: 'BASE LAB @ SIU Carbondale',
    images: [
      {
        url: '/images/logo/base-lab-logo-v5@4x.png',
        width: 1200,
        height: 630,
        alt: 'BASE LAB Logo - Computer Vision and Deep Learning Research Lab',
      },
      {
        url: '/images/logo/base-lab-icon-v5@3x.png',
        width: 512,
        height: 512,
        alt: 'BASE LAB Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BASE LAB @ SIU Carbondale - Computer Vision & Deep Learning Research",
    description: "Leading research lab at Southern Illinois University specializing in Computer Vision, Deep Learning, and Distributed Computing.",
    images: ['/images/logo/base-lab-logo-v5@4x.png'],
    creator: '', // Replace with actual Twitter handle if available
    site: '', // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logo/base-lab-icon-v5.svg' },
      { url: '/images/logo/base-lab-icon-v5@3x.png', type: 'image/png' }
    ],
    shortcut: '/images/logo/base-lab-icon-v5.svg',
    apple: '/images/logo/base-lab-icon-v5@3x.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "BASE LAB",
  },
  category: 'academic research',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0F3237',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BASE LAB @ SIU Carbondale",
              "alternateName": "BASE Lab",
              "description": "Leading research lab at Southern Illinois University specializing in Computer Vision, Deep Learning, and Distributed Computing",
              "url": "https://base-lab.siu.edu",
              "logo": "https://base-lab.siu.edu/images/logo/base-lab-logo-v5@4x.png",
              "sameAs": [
                "https://www.cs.siu.edu",
                "https://www.siu.edu"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "IL",
                "addressLocality": "Carbondale"
              },
              "parentOrganization": {
                "@type": "EducationalOrganization",
                "name": "Southern Illinois University Carbondale",
                "url": "https://www.siu.edu"
              },
              "knowsAbout": [
                "Computer Vision",
                "Deep Learning",
                "Artificial Intelligence",
                "Machine Learning",
                "Distributed Computing",
                "Neural Networks",
                "Academic Research"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Research Opportunities",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "PhD Research in Computer Vision"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Masters Research in Deep Learning"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        <NavBar />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}