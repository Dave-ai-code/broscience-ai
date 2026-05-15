import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <NavBar />
        <main className="flex-1 pt-14 md:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
