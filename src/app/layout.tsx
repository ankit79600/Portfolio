import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Ankit Patel — Full-Stack Developer",
  description:
    "Full-stack developer based in India, building fast, clean, and accessible digital experiences with React, Next.js, and Node.js.",
  keywords: ["Ankit Patel", "Full-Stack Developer", "React", "Next.js", "Portfolio", "India"],
  authors: [{ name: "Ankit Patel" }],
  creator: "Ankit Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ankit Patel — Full-Stack Developer",
    description: "Full-stack developer building fast, clean, and accessible digital experiences.",
    siteName: "Ankit Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Patel — Full-Stack Developer",
    description: "Full-stack developer building fast, clean, and accessible digital experiences.",
    creator: "@ankit_pate33282",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
