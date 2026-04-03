import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ParticleField from "@/components/three/ParticleField";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Sinha | Portfolio",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  description:
    "Building Intelligent, Scalable & Beautiful Systems — Full-stack developer & data science student at VIT Vellore. Portfolio showcasing projects, skills, and experience.",
  keywords: [
    "Aryan Sinha",
    "developer",
    "portfolio",
    "full-stack",
    "data science",
    "react",
    "next.js",
    "VIT Vellore",
  ],
  authors: [{ name: "Aryan Sinha" }],
  openGraph: {
    title: "Aryan Sinha | Portfolio",
    description: "Building Intelligent, Scalable & Beautiful Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-space-950 text-gray-200 overflow-x-hidden">
        <SmoothScroll>
          {/* Global overlays */}
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <ParticleField />

          {/* Main content */}
          <main className="relative z-10">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
