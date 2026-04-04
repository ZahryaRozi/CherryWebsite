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
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
      {/* Main Placeholder Card */}
      <div className="bg-surface-bright border border-white/10 rounded-[3rem] p-12 md:p-24 shadow-2xl flex flex-col items-center justify-center text-center min-h-[60vh] relative overflow-hidden">
        
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10"></div>

        {/* The Animated Emoticon */}
        <div className="relative">
          <div className="text-primary text-6xl md:text-8xl mb-12 font-mono tracking-tighter transition-all duration-300 ease-in-out select-none">
            {isBlinking ? "(⸝⸝⸝>﹏ <⸝⸝⸝)" : "(⸝⸝⸝O﹏ O⸝⸝⸝)"}
          </div>
          {/* Subtle line decoration under the emoji */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
        </div>

        {/* The Message */}
        <h1 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter text-white mb-6 leading-tight">
          Oops! I'm still too early <br className="hidden md:block" /> to have this!
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl font-body max-w-2xl leading-relaxed">
          I haven't uploaded any projects to the <span className="text-secondary italic font-bold">Wired</span> yet. <br/>
          Check back later once I've finished cooking something up!
        </p>

        {/* Console-style Footer Decor */}
        <div className="mt-16 pt-8 border-t border-white/5 w-full max-w-md">
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isBlinking ? 'bg-primary' : 'bg-zinc-700'}`}></div>
              <p className="text-zinc-500 text-[9px] uppercase tracking-[0.4em] font-bold">
                System Status: {isBlinking ? 'Eep!' : 'Oop!'}
              </p>
            </div>
            <p className="text-zinc-700 text-[9px] font-mono">0.8s_CYCLE</p>
          </div>
        </div>
      </div>
    </div>
  );
}