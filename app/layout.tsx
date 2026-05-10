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
  title: "Graph Visualization - Online Graph Editor",
  description:
    "Visualize nodes and edges instantly with this online text-to-graph editor. Map relationships with a simple interface featuring fluid zoom and pan navigation. Try it online for free.",
  metadataBase: new URL("https://graph-visualization-ten.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Graph Visualization - Online Graph Editor",
    description:
      "Visualize nodes and edges instantly with this online text-to-graph editor. Map relationships with a simple interface featuring fluid zoom and pan navigation. Try it online for free.",
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
    title: "Graph Visualization - Online Graph Editor",
    description:
      "Visualize nodes and edges instantly with this online text-to-graph editor. Map relationships with a simple interface featuring fluid zoom and pan navigation. Try it online for free.",
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
  keywords: [
    "graph visualization",
    "interactive graph",
    "graph editor",
    "graph visualization tool",
    "graph visualization online",
    "graph editor online",
    "drag-and-drop graph",
    "zoomable graph",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <main>{children}</main>
      </body>
    </html>
  );
}
