import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import BottomTabBar from "@/components/BottomTabBar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BroScience.ai — Gym wisdom or gym fiction?",
  description:
    "We fact-check what your gym bro tells you. Science-backed myth busting for lifters.",
  openGraph: {
    title: "BroScience.ai — Gym wisdom or gym fiction?",
    description: "We fact-check what your gym bro tells you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased" style={{ background: "var(--bg)", color: "var(--ink)" }}>
        <TopBar />
        <main className="flex-1 pt-14 pb-24">{children}</main>
        <BottomTabBar />
      </body>
    </html>
  );
}
