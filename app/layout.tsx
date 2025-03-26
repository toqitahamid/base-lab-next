import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BASE LAB - Southern Illinois University",
  description: "Computer Vision and Deep Learning Research Lab at Southern Illinois University",
  icons: {
    icon: [
      { url: '/images/logo/base-lab-icon-v3.svg' },
      { url: '/images/logo/base-lab-icon-v3@3x.png', type: 'image/png' }
    ],
    shortcut: '/images/logo/base-lab-icon-v3.svg',
    apple: '/images/logo/base-lab-icon-v3@3x.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "BASE LAB",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0F3237',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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