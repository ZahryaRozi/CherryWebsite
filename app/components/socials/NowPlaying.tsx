'use client';

import { useEffect, useState, useRef } from 'react';
import MusicAura from './MusicAura';

type Track = {
  isNowPlaying: boolean;
  name: string;
  artist: string;
  album: string;
  url: string;
  art: string | null;
};

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [auraColor, setAuraColor] = useState<string>('#FF94B4'); // Fallback in case the Image doesnt load
  const bannerRef = useRef<HTMLDivElement>(null);

  // Function to extract dominant color from the image/cover
  const getAverageColor = (url: string) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Idk what this does, apparently is mandatory when moving variables from one side to the other
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = 1;
      canvas.height = 1;
      ctx.drawImage(img, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      setAuraColor(`rgb(${r}, ${g}, ${b})`);
    };
  };

  async function fetchTrack() {
    try {
      const res = await fetch('/api/now-playing');
      const data = await res.json();
      setTrack(data);
      if (data.art) getAverageColor(data.art);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchTrack();
    const interval = setInterval(fetchTrack, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!track) return null;

  return (
    <>
      {/* Pass the extracted color to the Aura */}
      <MusicAura 
        isActive={track.isNowPlaying} 
        containerRef={bannerRef} 
        color={auraColor} 
      />

      <a
        ref={bannerRef}
        href={track.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative z-10 flex items-center gap-4 md:gap-6 overflow-hidden border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 transition-all hover:border-primary/70 bg-black/20 backdrop-blur-md"
        style={{ borderColor: track.isNowPlaying ? `${auraColor}66` : undefined }} 
      >
        {/* Background Art Logic */}
        {track.art && (
          <>
            <div className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${track.isNowPlaying ? 'animate-nowplaying-pulse' : 'opacity-30'}`}>
              <div className="absolute inset-0 scale-125 blur-xl bg-cover bg-center" style={{ backgroundImage: `url("${track.art}")` }} />
            </div>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
          </>
        )}

        <div className="relative z-10 flex items-center gap-4 md:gap-6 w-full">
          {track.art ? (
            <img src={track.art} alt={track.album} className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover shrink-0 shadow-lg" />
          ) : (
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/5 shrink-0 flex items-center justify-center text-zinc-600 text-xl">♪</div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {track.isNowPlaying ? (
                <>
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: auraColor }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: auraColor }} />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold font-headline" style={{ color: auraColor }}>I'm currently listening to: </span>
                </>
              ) : (
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold font-headline">I last lisetened to: </span>
              )}
            </div>
            <p className="text-white font-headline font-bold text-sm md:text-base truncate">{track.name}</p>
            <p className="text-zinc-300 text-xs md:text-sm truncate">{track.artist}</p>
          </div>
          <span className="text-zinc-400 group-hover:text-primary transition-colors shrink-0 pr-1">→</span>
        </div>
      </a>
    </>
  );
}