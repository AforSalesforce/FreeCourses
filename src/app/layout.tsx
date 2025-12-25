import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
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
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export const metadata: Metadata = {
  title: "FreeCourseHub | Premium Free Education",
  description: "Discover the best free online courses from YouTube, Coursera, Universities, and more. Curated high-quality content for your learning journey.",
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
        </NuqsAdapter>
      </body>
    </html>
  );
}
