// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  // Common styles for both text blocks
  const footerTextStyle = "font-headline text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600";

  return (
    <footer className="w-full py-16 bg-[#1C1B1F]/40 backdrop-blur-md border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start px-8 gap-8 max-w-7xl mx-auto">
        
        {/* Left Section - Aligned Left */}
        <div className={`${footerTextStyle} text-left`}>
          Zahrya's Website <br/>
          Made with love by Zahrya Rozi <br/>
          "A site made by a Wired for The Wired"
        </div>

        {/* Right Section - Aligned Right */}
        <div className="flex flex-col items-end gap-10">
          <div className={`${footerTextStyle} text-right`}>
            v2 Developed in 2026 <br/>
            Barely made in NextJs <br/>
            "Seamos todos positivos!! Viva la vida!"
          </div>

          <Link 
            href="https://github.com/zahryarozi/CherryWebsite"
            className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-primary transition-colors"
          >
            GitHub Repo
          </Link>
        </div>

      </div>
    </footer>
  );
}