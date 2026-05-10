"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const getLinkStyles = (path: string) => {
    const isActive = pathname === path;
    return `transition-all pb-1 whitespace-nowrap ${
      isActive 
        ? "text-primary font-bold border-b-2 border-primary" 
        : "text-zinc-400 hover:text-zinc-100 border-b-2 border-transparent"
    }`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1C1B1F]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
        {/* Mobile: Grid Layout | Desktop: Flex Layout */}
        <div className="grid grid-cols-2 md:flex md:justify-between items-center gap-y-3 md:gap-0">
          
          {/* 1. Brand Section (Top Left on Mobile) */}
          <div className="flex items-baseline gap-1 justify-self-start">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white font-headline">
              CherryWebsite
            </Link>
            <img 
              src="/resources/favicon.ico" 
              alt="" 
              className="w-4 h-4 md:w-5 md:h-5"
              style={{ 
                transform: 'rotate(-15deg) translateY(4px)',
                filter: 'drop-shadow(0 0 8px rgba(255, 148, 180, 0.3))'
              }}
            />
          </div>

          {/* 2. Social Button (Top Right on Mobile) */}
          <div className="justify-self-end md:order-3">
            <a href='/socials'>
              <button className="bg-primary text-neutral-dark px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-[10px] md:text-sm transition-all hover:scale-95 active:scale-90 shadow-lg shadow-primary/20">
                Social Stuff
              </button>
            </a>
          </div>
          
          {/* 3. Nav Links (Full width Bottom Row on Mobile) */}
          <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-center gap-4 md:gap-8 font-label text-[11px] md:text-sm font-medium tracking-tight border-t border-white/5 pt-2 md:border-none md:pt-0">
            <Link href="/" className={getLinkStyles("/")}>Home</Link>
            <Link href="/project" className={getLinkStyles("/project")}>Projects</Link>
            <Link href="/about" className={getLinkStyles("/about")}>About</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}