"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const getLinkStyles = (path: string) => {
    const isActive = pathname === path;
    return `transition-all pb-1 ${
      isActive 
        ? "text-primary font-bold border-b-2 border-primary" 
        : "text-zinc-400 hover:text-zinc-100 border-b-2 border-transparent"
    }`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1C1B1F]/60 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-white font-headline">
          CherryWebsite v2
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-label text-sm font-medium tracking-tight">
          <Link href="/" className={getLinkStyles("/")}>Home</Link>
          <Link href="/project" className={getLinkStyles("/project")}>Projects</Link>
          <a href="/MyOCs/loader.html" className={getLinkStyles("/StoriesMain")}>MyOCs</a>
          <Link href="/about" className={getLinkStyles("/about")}>About Me</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Using On-Primary (#1C1B1F) for the text color here */}
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-95 active:scale-90 shadow-lg shadow-primary/20">
            Social Stuff
          </button>
        </div>
      </div>
    </nav>
  );
}