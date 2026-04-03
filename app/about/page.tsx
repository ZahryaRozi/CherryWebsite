"use client";

import React from 'react';

export default function AboutPage() {
  const Card = ({ title, children, className = "", titleColor = "text-primary" }: any) => (
    <div className={`bg-surface-bright border border-white/10 p-8 rounded-[2.5rem] shadow-lg ${className}`}>
      {title && <h2 className={`${titleColor} font-headline font-bold mb-6 uppercase tracking-widest text-sm`}>{title}</h2>}
      {children}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 pb-24 space-y-8 mt-8">
      
      {/* 1. Header & Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 bg-surface-bright border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl">
          <img 
            src="/resources/AboutMe/ZahryaWave.png" 
            alt="Zahrya Waving" 
            className="w-full h-auto object-cover aspect-square md:aspect-auto hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="md:col-span-7 space-y-6">
          <Card title="Hello there!">
            <h1 className="text-4xl font-headline font-black text-white mb-4 tracking-tighter">
              I'm <span className="text-primary italic">Zahrya Rozi.</span>
            </h1>
            <div className="space-y-4 text-zinc-300 font-body leading-relaxed text-lg">
              <p>I excitedly welcome you to my website's about me!</p>
              <div className="text-primary font-bold text-2xl py-2 select-none">₍₍⚞(˶˃ ᵕ ˂˶)⚟⁾⁾</div>
              <p>Thank you for staying for so long!!</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Detailed Bio Card */}
      <Card title="" className="bg-primary/5 border-primary/10">
        <div className="space-y-6 text-zinc-300 font-body leading-relaxed text-lg">
            <p>
                As you saw at the <span className="text-primary italic font-bold">Home page</span>, I'm another 20yo <span className="text-secondary font-bold">Colombian</span> on the <em className="italic text-tertiary">Wired</em>! 
                I usually spend most of my time on <span className="text-primary/80">my pc</span> either playing MC or trying to learn to code as much as I can. 
                <span className="text-primary italic">This website</span> is a way for me to test, practice and learn more about code (Especially HTML, CSS and JS) and stuff!!
            </p>
            <p>After <span className="text-primary italic">this website</span>, I have plans to start working on Java and Kotlin for my programming career!</p>
            <div className="text-secondary text-2xl py-2 select-none">ദി (˶⎚⤙⎚˶)</div>
            <p>
                I really want to <em className="text-white font-bold">thank you</em> for visiting <span className="text-primary italic">my page</span>, 
                it may be simple but right now <span className="text-secondary font-bold underline decoration-secondary/30 underline-offset-4">it's worth a lot</span> to me. 
                I hope you like it and/or find anything you're looking for!
            </p>
        </div>
      </Card>

      {/* 2. Likes & Dislikes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Likes" titleColor="text-secondary">
          <ul className="space-y-3 font-body text-zinc-300">
            {["Color Pink", "Photography", "Nature's Scenes", "Anime", "Manga", "Music!", "Walking", "Tea"].map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_5px_#B39DDB]"></span> {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Dislikes" titleColor="text-zinc-500">
          <ul className="space-y-3 font-body text-zinc-500">
            {["Unemphatic people", "Spicy Food", "Unnecessary Phone Calls", "Loud noises", "Small spaces", "Bullies", "Wasting Time"].map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span> {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* 3. MUSIC SECTION  */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Card title="Spotlight Track" titleColor="text-tertiary" className="md:col-span-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-full md:w-1/2 shrink-0 group">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img src="/resources/AboutMe/Sharari.jpg" alt="Sharari" className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>
            <div className="flex flex-col justify-center h-full space-y-4">
              <div>
                <h3 className="text-3xl font-headline font-black text-white tracking-tighter italic">Sharari</h3>
                <p className="text-tertiary font-bold uppercase tracking-[0.2em] text-xs">Yunosuke & Hatsune Miku</p>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border-l-4 border-tertiary italic text-sm text-zinc-400 leading-relaxed">
                "Swish and swoosh, see <br/>leave your body to the rhythm,<br/> that might just melt the snow away and come to my side"
              </div>
            </div>
          </div>
        </Card>

        <Card title="Others" titleColor="text-zinc-500" className="md:col-span-4">
          <div className="space-y-4">
            {[{ title: "glitter ✩‧₊˚", artist: "Lexycat" }, { title: "Raspberry Kisses", artist: "Amine" }, { title: "2005", artist: "South Arcade" }, { title: "BIRDBRAIN", artist: "Jamie Paige" }, { title: "Sludge [Full 20Min]", artist: "Vylet Pony" }].map((track, i) => (
              <div key={i} className="group cursor-default">
                <p className="text-white font-bold text-sm group-hover:text-secondary transition-colors">{track.title}</p>
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">{track.artist}</p>
                {i !== 3 && <div className="h-px bg-white/5 w-full mt-4" />}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* 4. Recommended Anime */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* SMALLER LIST (4/12 Columns) */}
        <Card title="Other Series" titleColor="text-zinc-500" className="md:col-span-4">
          <div className="space-y-4">
            {[
                { title: "Miss Kobayashi's Dragon Maid"},
                { title: "The Eminence In Shadow"},
                { title: "Serial Experiments Lain"},
                { title: "The rising of the shield Hero"},
                { title: "Berserk of gluttony"},
                { title: "I'm in Love with the Villainess"},
                { title: "WATAMOTE ~No Matter How I Look at It, It’s You Guys Fault I’m Not Popular!~"}
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{item.title}</p>
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">{item.tag}</p>
                {i !== 3 && <div className="h-px bg-white/5 w-full mt-4" />}
              </div>
            ))}
          </div>
        </Card>












        {/* BIG SPOTLIGHT (8/12 Columns) */}
        <Card title="IN MEMORY FOREVER" titleColor="text-primary" className="md:col-span-8">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start">
            <div className="w-full md:w-1/2 shrink-0 group">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img src="/resources/AboutMe/blueexorcists.jpg" alt="Blue Exorcist" className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>
            <div className="flex flex-col justify-center h-full space-y-4 text-center md:text-right">
              <div>
                <h3 className="text-3xl font-headline font-black text-white tracking-tighter italic">Blue Exorcist</h3>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border-r-4 border-secondary italic text-sm text-zinc-400 leading-relaxed">
                "Don't you think that true memories are a combination of fun ones and painful ones?"
                <span className="block mt-3 not-italic font-bold text-[10px] text-secondary/60 uppercase tracking-widest">-Rin Okumura</span>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border-r-4 border-secondary italic text-sm text-zinc-400 leading-relaxed">
                "You'll never be able to move forward if you're afraid of soiling your hands." 
                <span className="block mt-3 not-italic font-bold text-[10px] text-secondary/60 uppercase tracking-widest">-Fujimoto Shirou </span>
              </div>
            </div>
          </div>
        </Card>
      </div> 
    </div>
  );
}