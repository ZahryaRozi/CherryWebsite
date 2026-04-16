import { neon } from '@neondatabase/serverless';
import { postMessage } from './actions';

export default async function SocialsPage() {
  const databaseUrl = process.env.DATABASE_POSTGRES_URL;
  
  if (!databaseUrl) {
    return <div className="text-white p-10">Database connection string is missing.</div>;
  }

  const sql = neon(databaseUrl);
  const messages = await sql`SELECT * FROM guestbook ORDER BY created_at DESC LIMIT 50`;

  const socialLinks = [
    { name: 'Last.fm', url: 'https://www.last.fm/user/ZahryaRozi', color: 'text-secondary', desc: 'Check my scrobbles and find some music!' },
    { name: 'YT Music', url: 'https://music.youtube.com/@ZahryaRozi', color: 'text-primary', desc: 'I like to share the playlists I like' },
    { name: 'Instagram', url: 'https://www.instagram.com/zahryarozi', color: 'text-tertiary', desc: 'Photos & stuff. You can see the stuff I repost too' },
    { name: 'Steam', url: 'https://steamcommunity.com/id/zzahryrozi/', color: 'text-blue-400', desc: 'I suck at games, but you can see what I play here!' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 space-y-8 md:space-y-12">
      
      {/* 1. TOP BANNER */}
      <section className="animate-reveal-down relative h-48 md:h-64 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center mt-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-neutral-dark to-secondary/20" />
        <div className="absolute inset-0 bg-[url('/resources/Main/images/hero-bg.jpeg')] bg-cover bg-center opacity-30 blur-sm" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter text-white">
            <span className="text-primary">My Social Stuff</span> (& Guestbook)
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm font-body mt-2 tracking-widest uppercase">
            Find me on the Wired
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        {/* LEFT COLUMN: SOCIAL CARDS */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50"></span> Here are some places you can find me!
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface-bright border border-white/10 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] hover:border-primary/50 transition-all hover:translate-x-2"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-headline font-bold text-lg md:text-xl ${link.color}`}>{link.name}</h3>
                  <span className="text-zinc-600 group-hover:text-primary transition-colors">→</span>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: GUESTBOOK */}
        <div className="animate-reveal-right">
          <div className="bg-surface-bright border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-xl">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white">Guestbook</h2>
              <p className="text-zinc-500 text-xs md:text-sm mt-1">Leave a mark on my little corner of the internet.</p>
            </div>

            {/* Form */}
            <form action={postMessage} className="space-y-4 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4">
                <input 
                  type="text" 
                  name="name"
                  required
                  className="bg-[#1C1B1F] border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 text-white focus:border-primary outline-none font-body text-sm"
                  placeholder="Tell us your beautiful name!"
                />
                <button 
                  type="submit"
                  className="bg-primary text-neutral-dark px-8 py-3 rounded-full font-headline font-bold hover:scale-95 transition-transform text-xs uppercase tracking-widest whitespace-nowrap"
                >
                  Sign
                </button>
              </div>
              <textarea 
                name="message"
                required
                className="w-full bg-[#1C1B1F] border border-white/10 rounded-xl md:rounded-2xl p-4 text-white focus:border-primary outline-none font-body text-sm h-24 md:h-32 resize-none"
                placeholder="Message goes here! Or whatever you want :D"
              />
            </form>

            {/* Messages Feed */}
            <div className="space-y-6 max-h-[350px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {messages.map((msg: any) => (
                <div key={msg.id} className="border-b border-white/5 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-secondary font-bold text-sm uppercase tracking-tight">{msg.name}</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-600 font-mono">
                      {new Date(msg.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm italic leading-relaxed">"{msg.message}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}