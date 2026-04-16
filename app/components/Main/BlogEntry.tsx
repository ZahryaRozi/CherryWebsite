import parse from 'html-react-parser';

interface BlogProps {
  title: string;
  date: string;
  content: string; 
}

export default function BlogEntry({ title, date, content }: BlogProps) {
  return (
    <article className="bg-surface-bright border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-lg mb-8 md:mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-3">
        <h2 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tight">
          {title}
        </h2>
        <small className="w-fit text-primary font-bold uppercase tracking-widest text-[9px] md:text-[10px] bg-primary/10 px-3 py-1 rounded-full">
          {date}
        </small>
      </div>
      
      <div className="text-zinc-300 space-y-4 md:space-y-6 leading-relaxed text-base md:text-lg font-body">
        {typeof content === 'string' ? parse(content) : ''}
      </div>
      
      <div className="mt-8 md:mt-10 pt-6 border-t border-white/5 text-zinc-500 italic text-xs md:text-sm">
        Written with love by: Zahrya Rozi
      </div>
    </article>
  );
}