import { neon } from '@neondatabase/serverless';
import { postMessage } from './actions';

export default async function SocialsPage() {
  const sql = neon(process.env.DATABASE_POSTGRES_URL!);
  const messages = await sql`SELECT * FROM guestbook ORDER BY created_at DESC LIMIT 50`;

  const socialLinks = [
    { name: 'Last.fm', url: 'https://www.last.fm/user/ZahryaRozi', color: 'text-secondary', desc: 'Check my scrobbles and find some music!' },
    { name: 'YT Music', url: 'https://music.youtube.com/@ZahryaRozi', color: 'text-primary', desc: 'I like to share the playlists I like' },
    { name: 'Instagram', url: 'https://www.instagram.com/zahryarozi', color: 'text-tertiary', desc: 'Photos & stuff. You can see the stuff I repost too' },
    { name: 'Steam', url: 'https://steamcommunity.com/id/zzahryrozi/', color: 'text-blue-400', desc: 'I suck at games, but you can see what I play here!' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 space-y-12">
      
      {/* 1. TOP BANNER */}
      <section className="animate-reveal-down relative h-64 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-[url('/resources/Socials/lowqualBanner.jpeg')] bg-cover bg-center blur-md scale-110 brightness-50"
        />
        <h1 className="relative text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-white uppercase">
          Social <span className="text-primary">Stuff</span>
        </h1>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* 2. SOCIAL LINKS (LEFT COLUMN) */}
        <div className="animate-reveal-right lg:col-span-5 space-y-6">
          <h2 className="text-xs font-headline font-bold uppercase tracking-[0.3em] text-zinc-500 px-4">Here are some places you can find me!!</h2>
          <div className="grid grid-cols-1 gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                className="group bg-surface-bright border border-white/10 p-6 rounded-[2rem] hover:border-primary/50 transition-all flex justify-between items-center"
              >
                <div>
                  <h3 className={`font-headline font-bold text-xl ${link.color}`}>{link.name}</h3>
                  <p className="text-zinc-400 text-sm italic">{link.desc}</p>
                </div>
                <span className="text-zinc-600 group-hover:text-primary group-hover:translate-x-1 transition-all">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* 3. GUESTBOOK (RIGHT COLUMN) */}
        <div className="animate-reveal lg:col-span-7">
          <div className="bg-surface-bright border border-white/10 p-8 rounded-[3rem] shadow-lg sticky top-32">
            <h3 className="text-primary font-headline font-bold mb-6 uppercase tracking-tighter text-sm">Guestbook</h3>
            
            {/* Message Form */}
            <form action={postMessage} className="space-y-4 mb-10">
              <input 
                name="name"
                required
                className="w-full bg-[#1C1B1F] border border-white/10 rounded-2xl p-4 text-white focus:border-primary outline-none font-body text-sm"
                placeholder="What beautiful name should we remember you as?"
              />
              <textarea 
                name="message"
                required
                className="w-full bg-[#1C1B1F] border border-white/10 rounded-2xl p-4 text-white focus:border-primary outline-none font-body text-sm h-24 resize-none"
                placeholder="Message goes here! Or whatever you want :D"
              />
              <button 
                type="submit"
                className="bg-primary text-neutral-dark px-8 py-3 rounded-full font-headline font-bold hover:scale-95 transition-transform text-xs uppercase tracking-widest"
              >
                Sign
              </button>
            </form>

            {/* Messages Feed */}
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {messages.map((msg: any) => (
                <div key={msg.id} className="border-b border-white/5 pb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-secondary font-bold text-sm uppercase tracking-tight">{msg.name}</span>
                    <span className="text-[10px] text-zinc-600 font-mono">
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