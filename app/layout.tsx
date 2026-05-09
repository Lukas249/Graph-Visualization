import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: "Graph Visualization Tool - Build, Edit, and Explore Graphs | Graphly",
  description:
    "Graph visualization tool to create and edit nodes and edges. Explore relationships with zoom and pan directly in your browser.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Graph Visualization Tool - Build, Edit, and Explore Graphs | Graphly",
    description:
      "Graph visualization tool to create and edit nodes and edges. Explore relationships with zoom and pan directly in your browser.",
    url: "/",
    siteName: "Graphly",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Graph Visualization Tool - Build, Edit, and Explore Graphs | Graphly",
    description:
      "Graph visualization tool to create and edit nodes and edges. Explore relationships with zoom and pan directly in your browser.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "Graphly",
  category: "technology",
};

export const viewport: Viewport = {
  width: "1024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
