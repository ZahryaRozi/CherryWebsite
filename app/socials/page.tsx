import { neon } from '@neondatabase/serverless';
import { postMessage } from './actions';
import NowPlaying from '../components/socials/NowPlaying';

// Re-fetches guestbook data every 30 seconds
export const revalidate = 30;

export default async function SocialsPage() {
  const databaseUrl = process.env.DATABASE_POSTGRES_URL;

  if (!databaseUrl) {
    return (
      <div className="text-white p-10">
        Database connection string is missing.
      </div>
    );
  }

  const messages = await neon(databaseUrl)`
    SELECT * FROM guestbook
    ORDER BY created_at DESC
    LIMIT 50
  `;

  const socialLinks = [
    {
      name: 'Last.fm',
      url: 'https://www.last.fm/user/ZahryaRozi',
      color: 'text-[#d51007]',
      desc: 'Check my scrobbles, see what I listen to and find some music!',
      image:
        'https://www.last.fm/static/images/lastfm_logo_facebook.15d8133be114.png',
    },
    {
      name: 'YT Music',
      url: 'https://music.youtube.com/@ZahryaRozi',
      color: 'text-[#ff0000]',
      desc: 'I like to share the playlists I like',
      image:
        'https://www.etcentric.org/wp-content/uploads/2019/04/YouTube_Music_Banner.jpg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zahryarozi',
      color: 'text-tertiary',
      desc: 'Photos & stuff. You can see the stuff I repost too',
      image:
        'http://pbsproracing.com/wp-content/uploads/2018/10/Instagram-Banner-Logo-de-Instagram-vector-logo-instagram-sin-fondo-1000x480.gif',
    },
    {
      name: 'Tumblr',
      url: 'https://www.tumblr.com/zahryarozi',
      color: 'text-[#194E8C]',
      desc: 'I use this to look at art or some memes.',
      image:
        'https://imjustcreative.com/wp-content/uploads/2014/02/New-Tumblr-Logo-Design-1.png',
    },
    {
      name: 'Steam',
      url: 'https://steamcommunity.com/id/zzahryrozi/',
      color: 'text-[#00adee]',
      desc: 'I suck at games, but you can see what I play here!',
      image:
        'https://mmos.com/wp-content/uploads/2021/07/steam-logo-welcome-banner.jpg',
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/user/zahryarozi2619/',
      color: 'text-[#ff4500]',
      desc: 'See what subreddits I interact or sum. Honestly I use it for memes or questions only.',
      image:
        'https://tenjin.com/wp-content/uploads/2023/09/Reddit-Tracking-Is-Officially-Live-%E2%80%93-Heres-How-To-Get-The-Most-Out-Of-It.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 space-y-8 md:space-y-12">
      {/* 1. TOP BANNER */}
      <section className="animate-reveal-down relative h-48 md:h-64 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center mt-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-neutral-dark to-secondary/20" />

        <div className="absolute inset-0 bg-[url('/resources/Main/images/hero-bg.jpeg')] bg-cover bg-center opacity-30 blur-sm" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter text-white">
            <span className="text-primary">My Social Stuff</span> (&
            Guestbook)
          </h1>

          <p className="text-zinc-400 text-xs md:text-sm font-body mt-2 tracking-widest uppercase">
            Find me on the Wired
          </p>
        </div>
      </section>

      {/* 2. NOW PLAYING */}
      <NowPlaying />

      {/* 3. MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* LEFT COLUMN: SOCIAL CARDS */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white flex items-center gap-3">
            <span className="w-8 h-px bg-primary/50"></span>
            Here are some places you can find me!
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-surface-bright border border-white/10 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] hover:border-primary/50 transition-all hover:translate-x-2 overflow-hidden"
              >
                {link.image && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        backgroundImage: `url(${link.image})`,
                      }}
                    />

                    <div className="absolute inset-0 bg-neutral-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </>
                )}

                <div className="relative z-10 flex justify-between items-start mb-2">
                  <h3
                    className={`font-headline font-bold text-lg md:text-xl ${link.color}`}
                  >
                    {link.name}
                  </h3>

                  <span className="text-zinc-600 group-hover:text-primary transition-colors">
                    →
                  </span>
                </div>

                <p className="relative z-10 text-zinc-400 text-xs md:text-sm leading-relaxed">
                  {link.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: GUESTBOOK */}
        <div className="animate-reveal-right">
          <div className="bg-surface-bright border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-xl">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white">
                Guestbook
              </h2>

              <p className="text-zinc-500 text-xs md:text-sm mt-1">
                Hello!! Welcome to my GuestBook!! If you want, Sign it and even leave a message!! I'll really appreciate it
              </p>
            </div>

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

            <div className="space-y-6 max-h-[350px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {messages.map((msg: any) => (
                <div
                  key={msg.id}
                  className="border-b border-white/5 pb-4 last:border-0"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-secondary font-bold text-sm uppercase tracking-tight">
                      {msg.name}
                    </span>

                    <span className="text-[9px] md:text-[10px] text-zinc-600 font-mono">
                      {new Date(msg.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm italic leading-relaxed">
                    "{msg.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}