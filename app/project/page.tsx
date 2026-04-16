"use client";

import React, { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 800);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 pb-20">
      {/* Main Placeholder Card */}
      {/* Reduced padding and added a small top margin for that "floating" look */}
      <div className="animate-reveal bg-surface-bright border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 shadow-2xl flex flex-col items-center justify-center text-center min-h-[50vh] md:min-h-[60vh] relative overflow-hidden mt-4 md:mt-0">
        
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-primary/5 blur-[80px] md:blur-[120px] rounded-full -z-10"></div>

        {/* The Animated Emoticon */}
        <div className="relative">
          {/* Scaled down text size for mobile (text-4xl vs text-8xl) */}
          <div className="text-primary text-4xl md:text-8xl mb-8 md:mb-12 font-mono tracking-tighter transition-all duration-300 ease-in-out select-none">
            {isBlinking ? "(⸝⸝⸝>﹏ <⸝⸝⸝)" : "(⸝⸝⸝O﹏ O⸝⸝⸝)"}
          </div>
          {/* Subtle line decoration under the emoji */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
        </div>

        {/* The Message */}
        {/* Adjusted text size and added responsive line breaks */}
        <h1 className="text-2xl md:text-5xl font-headline font-extrabold tracking-tighter text-white mb-4 md:mb-6 leading-tight mt-6 md:mt-0">
          Oops! I'm still too early <br className="hidden md:block" /> to have this!
        </h1>
        
        <p className="text-zinc-400 text-base md:text-xl font-body max-w-xl leading-relaxed">
          I haven't uploaded any projects to the <span className="text-secondary font-bold">Wired</span> yet. <br className="hidden md:block"/>
          Check back later once I've finished cooking something up!
        </p>

        {/* Console-style Footer Decor */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/5 w-full max-w-xs md:max-w-md">
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2 md:gap-3">
              <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-300 ${isBlinking ? 'bg-primary' : 'bg-zinc-700'}`}></div>
              <p className="text-zinc-500 text-[7px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold">
                System Status: {isBlinking ? 'Eep!!' : 'Oop!!'}
              </p>
            </div>
            <p className="text-zinc-600 text-[7px] md:text-[9px] font-mono">
              Error_Code: 404_NOT_FOUND
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}