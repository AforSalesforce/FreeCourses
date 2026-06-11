import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { siteUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FreeCourseHub | Best Free Online Courses",
    template: `%s | ${siteName}`,
  },
  description: "Discover the best free online courses from Harvard, MIT, Coursera, freeCodeCamp, and more. Curated high-quality content for students and professionals.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName,
    title: "FreeCourseHub | Best Free Online Courses",
    description: "Curated free courses from top universities and creators. No paywalls, no hidden fees.",
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: "FreeCourseHub | Best Free Online Courses",
    description: "Curated free courses from top universities and creators. No paywalls, no hidden fees.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <NuqsAdapter>
          <Suspense fallback={<div className="h-16 w-full border-b border-border/40 bg-background/80" />}>
            <Navbar />
          </Suspense>
          <main className="flex-1 w-full bg-background/50">
            {children}
          </main>
          <Footer />
        </NuqsAdapter>
        <Analytics />
      </body>
    </html>
  );
}
