"use client";

import React, { useState, useRef, useEffect, memo } from 'react';

// 1. ISOLATED STATUS SECTION
const StatusSection = memo(() => {
  const [statusData, setStatusData] = useState<{ author: string; timeAgo: string; content: string } | null>(null);

  useEffect(() => {
    const fetchStatus = () => {
      fetch("https://status.cafe/users/zahryarozi/status.json")
      .then(r => {
        if (!r.ok) throw new Error("Network response was not ok");
        return r.json();
      })
      .then(r => setStatusData(r))
      .catch(err => {
      console.error("Status.cafe failed:", err);
      setStatusData({
        author: "ZahryaRozi",
        timeAgo: "just now",
        content: "Uhh... So there is an issue connecting, or your wifi is a bit tired. (Connection Error)... Anyways, fun fact. The background is actually the minecraft void. So those cherry petals and flowers are going into the MC Void... Wait why am I writing this? I mean, it'll be a cool easter egg for some people, but why?... actually it will be really funny. Imagine some random user just accidentally finding this, lmaooo....... Oh and just realized nothing is stopping me from doing a funni and wasting sidebar space and just typing a lot of useless text to move the entire sidebar down. I wonder what I'll do?"
      });
    });
};
    fetchStatus();
  }, []);

  return (
    <div className="bg-surface-bright border border-white/10 p-6 rounded-[2rem] shadow-lg relative overflow-hidden min-h-[160px] flex flex-col justify-center">
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--base-rotation, 0deg)); }
          50% { transform: translateY(-22px) rotate(var(--float-rotation, 10deg)); }
        }
        @keyframes typewriter {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes textWave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-typewriter { animation: typewriter 2s steps(40, end) forwards; }
        .animate-wave { animation: textWave 4s ease-in-out infinite; }
      `}</style>
      
      {/* Background Icons (z-0) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src="/resources/favicon.ico" alt="" className="absolute top-2 left-2 w-10 h-10 opacity-15 animate-float" style={{ '--base-rotation': '-12deg', '--float-rotation': '5deg' } as any} />
        <img src="/resources/favicon.ico" alt="" className="absolute top-10 left-12 w-6 h-6 opacity-10 animate-float" style={{ '--base-rotation': '45deg', '--float-rotation': '60deg', animationDelay: '1s', animationDuration: '8s' } as any} />
        <img src="/resources/favicon.ico" alt="" className="absolute top-16 left-5 w-4 h-4 opacity-10 animate-float" style={{ '--base-rotation': '-90deg', '--float-rotation': '-70deg', animationDelay: '2s', animationDuration: '7s' } as any} />
        <img src="/resources/favicon.ico" alt="" className="absolute bottom-2 right-2 w-10 h-10 opacity-15 animate-float" style={{ '--base-rotation': '12deg', '--float-rotation': '25deg' } as any} />
        <img src="/resources/favicon.ico" alt="" className="absolute bottom-10 right-12 w-6 h-6 opacity-10 animate-float" style={{ '--base-rotation': '-45deg', '--float-rotation': '-30deg', animationDelay: '1.5s', animationDuration: '9s' } as any} />
        <img src="/resources/favicon.ico" alt="" className="absolute bottom-16 right-5 w-4 h-4 opacity-10 animate-float" style={{ '--base-rotation': '90deg', '--float-rotation': '110deg', animationDelay: '0.5s', animationDuration: '5s' } as any} />
      </div>

      {/* Content (z-10) */}
      <div className="relative z-10 w-full">
        <h3 className="text-primary font-headline font-bold mb-4 uppercase tracking-tighter text-xs">
          Current Status
        </h3>
        
        <div id="statuscafe">
          {!statusData ? (
            <div className="text-zinc-500 animate-pulse text-sm font-body italic">
              Connecting to the Wired...
            </div>
          ) : (
            <div key={statusData.content} className="animate-typewriter overflow-hidden">
              <div className="text-tertiary font-bold text-xs uppercase tracking-widest mb-2 animate-wave">
                <a 
                  style={{ color: '#C78593', textDecoration: 'none' }} 
                  href="https://status.cafe/users/zahryarozi" 
                  target="_blank"
                  rel="noreferrer"
                >
                  {statusData.author}:
                </a> {statusData.timeAgo}
              </div>
              <div 
                className="text-zinc-300 italic font-body text-sm leading-relaxed animate-wave" 
                style={{ animationDelay: '0.2s' }}
                dangerouslySetInnerHTML={{ __html: statusData.content }}
              />
            </div>
          )}
        </div>
      </div>
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) {
        if (audio.readyState === 0) audio.load();
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn("Playback interrupted.", err);
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
      <div className="flex flex-col gap-8 w-full"></div>

      <StatusSection />

      {/* Music Player */}
      <Card title="Random song I wanna share">
        <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
          <audio 
            ref={audioRef}
            src="/resources/Main/Audio/trish.mp3" 
            preload="metadata"
            onTimeUpdate={() => {
              if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
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
            <img src="https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F0a76c125847eb6030828addd597c651f.1000x1000x1.png" alt="Album" className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex flex-col justify-center">
              <h4 className="text-primary font-bold text-sm">TRISH! (Preview)</h4>
              <p className="text-zinc-500 text-xs font-body">ISSBROKIE</p>
            </div>
          </div>

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
            <div 
              className="bg-primary h-full rounded-full shadow-[0_0_8px_#FF94B4] relative" 
              style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
            >
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

      {/* 2. Blinkies-ish */}
      <Card title="Themed - Blinkies">
        <div className="space-y-6">
          <div>
            <div className="flex flex-wrap gap-2">
              {["🌷͙֒≽^• ˕ • ྀི≼ She/Her ≽^• ˕ • ྀི≼🌷͙֒", "🐾 I <3 Cats 🐾","⚠️ FRICK 'AI' ART!!!! ⚠️", "🏳️‍⚧️ Trans 4 Life!! 🏳️‍⚧️", "🍦 I Love Icecream!! 🍦", "🌈 Nyan Nyan 🌈", "🥖 Teto Fan 🥖" , "🩷 Pink! Pink! .... I <3 Pink!! 🩷" , "😎 BE COOL 😎","🏳️‍🌈 I Support Gay Rights 🏳️‍🌈" ].map((g) => (
                <span key={g} className="bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[11px] text-zinc-300 font-body">{g}</span>
              ))}
            </div>
          </div>
    
        </div>
      </Card>

      {/* 4. Meme Image */}
      <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
        <img src="/resources/Main/images/Sidebar/funnimeme1.png" alt="Funny Meme" className="w-full h-auto" />
      </div>

      {/* 5. Music Taste */}
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

      {/* 6. Teto Art */}
      <div className="bg-surface-bright border border-white/10 rounded-[2rem] shadow-lg overflow-hidden group">
        <img src="/resources/Main/images/Sidebar/tetotetobaguette.jpg" alt="Art" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="px-6 py-5 border-t border-white/5">
          <p className="text-[10px] text-zinc-400 font-bold">Credits to <a href="https://www.pixiv.net/en/artworks/132288828" target="_blank" className="text-secondary hover:underline">Konfleis</a></p>
        </div>
      </div>

      {/* 7. Music Quotes */}
      <Card className="bg-primary/5 border-primary/10">
        <div className="space-y-6 text-sm italic text-zinc-300 font-body leading-relaxed">
          <p>"Beautiful music is the art of the prophets that can calm the agitations of the soul; it is one of the most magnificent and delightful presents God has given us."</p>
          <p className="text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter">— Martin Luther</p>
        </div>
      </Card>

      {/* 8. Cat Healer */}
      <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
        <img src="/resources/Main/images/Sidebar/kittycathealer.jpg" alt="Cat" className="w-full h-auto" />
      </div>

      {/* 9. Life Quotes */}
      <Card>
        <div className="space-y-6 text-sm italic text-zinc-300 font-body">
          <p>"The worst enemy to creativity is self-doubt."</p>
          <p className="text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter">— Sylvia Plath</p>
        </div>
      </Card>

      {/* 10. Teto Cookin */}
      <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
        <img src="/resources/Main/images/Sidebar/WhoLetCook.webp" alt="WhoLetBroCook" className="w-full h-auto" />
      </div>

      {/* 11. Lyrics Card */}
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

      {/* 12. Other Funi Meme */}
      <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
        <img src="/resources/Main/images/Sidebar/expensivebad.jpeg" alt="BadFoodButExpensive" className="w-full h-auto" />
      </div>

      {/* 13. Inspiring stuff */}
      <Card className="bg-primary/5 border-primary/10">
        <div className="space-y-6 text-sm italic text-zinc-300 font-body leading-relaxed">
          <p>"You are allowed to disappoint people. You are allowed to be the villain in someone else's story. Your only job is to be the hero in your own. "</p>
          <p className="text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter">— Lumierae</p>
        </div>
      </Card>


      {/* 14. Teto Best Stomper idk*/}
      <div className="bg-surface-bright border border-white/10 rounded-[2rem] shadow-lg overflow-hidden group">
        <img src="https://pbs.twimg.com/media/HEBERM-bQAAfDvN?format=jpg" alt="PureArt" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="px-6 py-5 border-t border-white/5">
          <p className="text-[10px] text-zinc-400 font-bold">Credits to <a href="https://x.com/midorikames14/status/2035702098495717863/photo/1" target="_blank" className="text-secondary hover:underline">@midorikames14</a></p>
        </div>
      </div>

      {/* 15. Reminder to be cool */}
      <Card className="bg-primary/5 border-primary/10">
        <div className="space-y-6 text-sm italic text-zinc-300 font-body leading-relaxed">
          <p>[Heavy Breathing] <br/> "Hello it's me! I have successfully infiltrated the Sidebar to tell you to not forget to sign my Guestbook!! Find it on the socials page!!"<br/>[Crash]<br/>"Yikes! It's the J*b Appl*cation. I gotta go, bye!!"</p>
          <p className="text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter">— Zahrya Rozi</p>
        </div>
      </Card>

      {/* 16 Yes, I used the AlarmOff teto subreddit for this. */}
      <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-lg">
        <img src="/resources/Main/images/Sidebar/ITriedToUseTheLinkButRedditWouldntLetMe.png" alt="TetoImages" className="w-full h-auto" />
      </div>
    </div>
  );
}