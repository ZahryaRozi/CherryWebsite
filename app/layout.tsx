import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className="antialiased flex flex-col min-h-screen bg-neutral-dark">
        <Navbar />
        {/* flex-grow ensures the footer stays at the bottom on short pages */}
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}