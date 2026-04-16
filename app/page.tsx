"use client";

import { useState } from "react";
import Sidebar from "./components/Main/Sidebar";
import BlogEntry from "./components/Main/BlogEntry";
import { BLOG_POSTS } from "./data/posts";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pfpPath = "/resources/Main/images/zahryarozi.png";

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
      
      {/* Floating Toggle Button (Left Aligned) */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-6 left-6 z-[60] lg:hidden bg-primary text-neutral-dark px-5 py-4 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-white/20 font-bold text-xs uppercase tracking-widest"
      >
        {isSidebarOpen ? "Close" : "Side O' Bars"}
      </button>

      {/* Hero Section */}
      <section className="animate-reveal-down relative overflow-hidden border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 mt-4 mb-12 flex flex-col md:flex-row items-center gap-12 min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/resources/Main/images/hero-bg.jpeg" 
            alt="" 
            className="w-full h-full object-cover blur-md scale-105 brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-neutral-dark/40 backdrop-blur-sm" />
        </div>

        {/* Profile Image */}
        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img 
            src={pfpPath} 
            alt="Zahrya's PFP" 
            className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] border-2 border-white/10 shadow-2xl" 
          />
        </div>

        {/* Text Section*/}
        <div className="relative z-10 flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold tracking-tighter mb-4 md:mb-6 text-white drop-shadow-lg">
            Welcome! My name is <span className="text-primary">Zahrya Rozi</span>
          </h1>
          
          <p className="text-zinc-300 italic text-base md:text-lg mb-4 drop-shadow-md">
            "I'm feelin lost, but on track to a new mind. And my back's to the past, don't be scared for me."
          </p>
          
          <p className="text-zinc-200 leading-relaxed max-w-2xl text-base md:text-lg font-body drop-shadow-md">
            Another 20yo Wired from the internet!! I'm kinda shy and introverted but friendly (or at least I try to be), plus I'm not used to talking too much.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Sidebar Overlay (Mobile) & Static Sidebar (Desktop) */}
        <aside className={`
          animate-reveal-right fixed inset-y-0 left-0 z-[55] w-[85%] max-w-[320px] bg-neutral-dark/95 backdrop-blur-2xl p-6 border-r border-white/10 overflow-y-auto transition-transform duration-500 ease-in-out
          lg:relative lg:translate-x-0 lg:w-full lg:max-w-none lg:bg-transparent lg:p-0 lg:border-none lg:overflow-visible lg:col-span-4 lg:order-1
          ${isSidebarOpen ? "translate-x-0 shadow-[20px_0_50px_rgba(0,0,0,0.5)]" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="lg:hidden mb-8 pt-4">
            <h3 className="text-primary font-headline font-bold text-xl uppercase tracking-widest">Side of Bars</h3>
            <div className="h-px w-full bg-white/10 mt-2" />
          </div>
          <Sidebar />
        </aside>

        {/* Blog Entries */}
        <main className="animate-reveal lg:col-span-8 space-y-12 order-2">
          {BLOG_POSTS.map((post) => (
            <BlogEntry key={post.id} {...post} />
          ))}
        </main>

        {/* Mobile Backdrop */}
        {isSidebarOpen && (
          <div 
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] lg:hidden animate-fade-in"
          />
        )}
      </div>
    </div>
  );
}