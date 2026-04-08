"use client";

import Sidebar from "./components/Main/Sidebar";
import BlogEntry from "./components/Main/BlogEntry";
import { BLOG_POSTS } from "./data/posts";

export default function Home() {
  const pfpPath = "/resources/Main/images/zahryarozi.png";

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
      {/* Hero Section */}
    <section className="relative overflow-hidden border border-white/10 rounded-[3rem] p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center gap-12 min-h-[400px]">
    
      <div className="absolute inset-0 z-0">
        <img 
          src="/resources/Main/images/hero-bg.jpeg" 
          alt="" 
          className="w-full h-full object-cover blur-md scale-105 brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-neutral-dark/40 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-56 h-56 md:w-64 md:h-64 flex-shrink-0">
        <img 
          src={pfpPath} 
          alt="Zahrya's PFP" 
          className="w-full h-full object-cover rounded-[3rem] border-2 border-white/10 shadow-2xl" 
        />
      </div>

      <div className="relative z-10 flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-6 text-white drop-shadow-lg">
          Welcome! My name is <span className="text-primary">Zahrya Rozi</span>
        </h1>
        <p className="text-zinc-300 italic text-lg mb-4 drop-shadow-md">
          "I'm feelin lost, but on track to a new mind. And my back's to the past, don't be scared for me."
        </p>
        <p className="text-zinc-200 leading-relaxed max-w-2xl text-lg font-body drop-shadow-md">
          Another 20yo Wired from the internet!! I'm kinda shy and introverted but friendly (or at least I try to be), plus I'm not used to talking too much.
        </p>
      </div>
  </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
          <Sidebar />
        </aside>
        
        <main className="lg:col-span-8 space-y-8 order-1 lg:order-2">
          {BLOG_POSTS.map((post) => (
            <BlogEntry 
              key={post.id}
              title={post.title}
              date={post.date}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}