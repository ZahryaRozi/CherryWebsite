"use client";

import React, { useState, useRef, useEffect, memo } from 'react';
import Script from 'next/script';

// 1. ISOLATED STATUS SECTION
// Memoized so it doesn't re-run unless necessary
const StatusSection = memo(() => {
  useEffect(() => {
    const fetchStatus = () => {
      fetch("https://status.cafe/users/zahryarozi/status.json")
        .then(r => r.json())
        .then(r => {
          const usernameEl = document.getElementById("statuscafe-username");
          const contentEl = document.getElementById("statuscafe-content");
          if (usernameEl && contentEl) {
            usernameEl.innerHTML = `<a style="color: #C78593; text-decoration:none;" href="https://status.cafe/users/zahryarozi" target="_blank">${r.author}: </a> ${r.timeAgo}`;
            contentEl.innerHTML = r.content;
          }
        })
        .catch(err => console.error("Status.cafe failed:", err));
    };
    fetchStatus();
  }, []);

  return (
    <div className="bg-surface-bright border border-white/10 p-6 rounded-[2rem] shadow-lg">
      <h3 className="text-primary font-headline font-bold mb-4 uppercase tracking-tighter text-xs">Current Status</h3>
      <div id="statuscafe">
        <div id="statuscafe-username" className="text-tertiary font-bold text-xs uppercase tracking-widest mb-2"></div>
        <div id="statuscafe-content" className="text-zinc-300 italic font-body text-sm leading-relaxed">Loading...</div>
      </div>
      <Script src="https://status.cafe/current-status.js?name=zahryarozi" strategy="lazyOnload" />
    </div>
  );
});
StatusSection.displayName = "StatusSection";

// 2. SHARED UI CARD
const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-surface-bright border border-white/10 p-6 rounded-[2rem] shadow-lg ${className}`}>
    {title && <h3 className="text-primary font-headline font-bold mb-4 uppercase tracking-tighter text-xs">{title}</h3>}
    {children}
  </div>
);

export default function Sidebar() {
  // MUSIC PLAYER STATE
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync volume safely
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // Robust Toggle Function
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        // Force a fresh load if we're stuck
        if (audio.readyState === 0) audio.load();
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn("Playback interrupted. Try clicking again.", err);
      setIsPlaying(false);
    }
  };

  const formatTime = (s: number) => {
    if (isNaN(s) || !isFinite(s)) return "0:00";
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col gap-6">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      <StatusSection />

      {/* 2. Music Player */}
      <Card title="Now Playing">
        <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
          <audio 
            ref={audioRef}
            src="/resources/Main/Audio/louie.mp3" 
            preload="metadata"
            onTimeUpdate={() => {
              if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
                // Double check duration in case metadata was late
                if (duration === 0 && audioRef.current.duration > 0) {
                  setDuration(audioRef.current.duration);
                }
              }
            }}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
          
          <div className="flex gap-4 mb-5">
            <img src="https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F54d9d91c4a512acf0bcb02e1c2333222.1000x1000x1.png" alt="Album" className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex flex-col justify-center">
              <h4 className="text-primary font-bold text-sm">louie.</h4>
              <p className="text-zinc-500 text-xs font-body">shteppi</p>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div 
            className="w-full bg-white/10 h-1.5 rounded-full mb-2 relative cursor-pointer group" 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              if (audioRef.current && duration > 0) {
                const pct = (e.clientX - rect.left) / rect.width;
                audioRef.current.currentTime = pct * duration;
              }
            }}
          >
            {/* The Actual Progress Fill */}
            <div 
              className="bg-primary h-full rounded-full shadow-[0_0_8px_#FF94B4] relative" 
              style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
            >
              {/* The Knob/Thumb */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg border border-white/20 scale-100 group-hover:scale-125 transition-transform" />
            </div>
          </div>

          <div className="flex justify-between text-[10px] text-zinc-500 font-mono mb-5">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center items-center gap-8 text-zinc-400">
              <span className="material-icons cursor-pointer hover:text-primary">skip_previous</span>
              <button 
                onClick={togglePlay} 
                className="bg-primary text-neutral-dark p-2 rounded-full hover:scale-105 transition-all flex items-center justify-center w-12 h-12"
              >
                <i className="material-icons text-3xl">{isPlaying ? 'pause' : 'play_arrow'}</i>
              </button>
              <span className="material-icons cursor-pointer hover:text-primary">skip_next</span>
            </div>
            
            <div className="w-full flex items-center gap-3">
              <i className="material-icons text-sm text-zinc-500">volume_up</i>
              <input 
                type="range" min="0" max="1" step="0.01" value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="volume-slider-pill flex-1 appearance-none h-1.5 rounded-full bg-white/10 cursor-pointer"
                style={{ backgroundImage: `linear-gradient(to right, #FF94B4 ${volume * 100}%, transparent ${volume * 100}%)` }}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* 3. Music Taste */}
      <Card title="Music Taste">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">Genres</p>
            <div className="flex flex-wrap gap-2">
              {["Punk", "Alternative", "Breakcore", "Electronic", "Electroswing", "FutureFunk", "Hyperpop", "Scenecore", "UTAU", "Vocaloid"].map((g) => (
                <span key={g} className="bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[11px] text-zinc-300 font-body">{g}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">Artists</p>
            <div className="flex flex-wrap gap-2">
              {["shteppi", "South Arcade", "bbno$", "m1v", "Set It Off", "whatsaheart", "Vylet Pony", "MagdalenaBay", "Osanzi", "STYXVII"].map((a) => (
                <span key={a} className="bg-secondary/5 border border-secondary/10 px-3 py-1 rounded-full text-[11px] text-secondary font-body">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* 4. Meme Image */}
      <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
        <img src="/resources/Main/images/Sidebar/funnimeme1.png" alt="Funny Meme" className="w-full h-auto" />
      </div>

      {/* 5. Music Quotes */}
      <Card className="bg-primary/5 border-primary/10">
        <div className="space-y-6 text-sm italic text-zinc-300 font-body leading-relaxed">
          <p>"Beautiful music is the art of the prophets that can calm the agitations of the soul; it is one of the most magnificent and delightful presents God has given us."</p>
          <p className="text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter">— Martin Luther</p>
        </div>
      </Card>

      {/* 6. Teto & Miku Art */}
      <div className="bg-surface-bright border border-white/10 rounded-[2rem] shadow-lg overflow-hidden group">
        <img src="/resources/Main/images/Sidebar/TetoMiku.jpg" alt="Art" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="px-6 py-5 border-t border-white/5">
          <p className="text-[10px] text-zinc-400 font-bold">Credits to <a href="https://x.com/takawoyu?lang=en" target="_blank" className="text-secondary hover:underline">@takawoyu</a></p>
        </div>
      </div>

      {/* 7. Life Quotes */}
      <Card>
        <div className="space-y-6 text-sm italic text-zinc-300 font-body">
          <p>"The worst enemy to creativity is self-doubt."</p>
          <p className="text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter">— Sylvia Plath</p>
        </div>
      </Card>

      {/* 8. Cat Healer */}
      <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
        <img src="/resources/Main/images/Sidebar/kittycathealer.jpg" alt="Cat" className="w-full h-auto" />
      </div>

      {/* 9. Lyrics Card */}
      <Card className="bg-secondary/5 border-secondary/10">
        <p className="text-zinc-300 text-sm italic font-body leading-relaxed whitespace-pre-line">
          {`You are the petals of the life
            That slowly growing on me
            We could be the king and the queen if you want to
            We could find a getaway if you need to
            I do it all for you
            I do it all of you
            The Sun and the Moon won't know what we'd be up to
            The God is wrong if he won't let me love you
            With all I have
            With all my faith   
          `}
        </p>
        <p className="mt-4 text-[10px] font-bold text-secondary">Lyrics from: <a href="https://www.youtube.com/watch?v=S5dKDYX0NSE" className="underline">Lotus - Galdive</a></p>
      </Card>

      {/* 10. Teto Baguette Art */}
      <div className="bg-surface-bright border border-white/10 rounded-[2rem] shadow-lg overflow-hidden group">
        <img src="/resources/Main/images/Sidebar/tetotetobaguette.jpg" alt="Teto" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="px-6 py-5 border-t border-white/5">
          <p className="text-[10px] text-zinc-400 font-bold">Credits to <a href="https://www.pixiv.net/en/artworks/132288828" className="text-secondary hover:underline">Konfleis</a></p>
        </div>
      </div>
    </div>
  );
}