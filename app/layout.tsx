import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
import FallingPetals from "./components/Global/FallingPetals";
import MouseTrail from "./components/Global/MouseTrail"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const vietnam = Be_Vietnam_Pro({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-vietnam",
});

export const metadata: Metadata = {
  title: "Cherry Website",
  description: "A site made by a Wired for The Wired",
  icons: {
    icon: "/resources/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${vietnam.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-neutral-dark relative">
        <FallingPetals /> 
        <MouseTrail />
        <Navbar />
        
        {/* 2. Give your main content a higher z-index than the petals */}
        <main className="flex-grow pt-24 relative z-10">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}