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
  metadataBase: new URL("https://graph-visualization-ten.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Graph Visualization Tool - Build, Edit, and Explore Graphs | Graphly",
    description:
      "Graph visualization tool to create and edit nodes and edges. Explore relationships with zoom and pan directly in your browser.",
    url: "/",
    siteName: "Graphly",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Graph Visualization Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Graph Visualization Tool - Build, Edit, and Explore Graphs | Graphly",
    description:
      "Graph visualization tool to create and edit nodes and edges. Explore relationships with zoom and pan directly in your browser.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  applicationName: "Graphly",
  category: "technology",
  keywords: ["graph visualization", "interactive graph", "graph editor", "graph visualization tool"], 
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
