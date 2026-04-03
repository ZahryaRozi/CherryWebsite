// app/components/BlogEntry.tsx
import parse from 'html-react-parser';

interface BlogProps {
  title: string;
  date: string;
  content: string; 
}

export default function BlogEntry({ title, date, content }: BlogProps) {
  return (
    <article className="bg-surface-bright border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-lg mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-2">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight">
          {title}
        </h2>
        <small className="text-primary font-bold uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full">
          {date}
        </small>
      </div>
      
      <div className="text-zinc-300 space-y-6 leading-relaxed text-lg font-body">
        {typeof content === 'string' ? parse(content) : ''}
      </div>
      
      <div className="mt-10 pt-6 border-t border-white/5 text-zinc-500 italic text-sm">
        Written with love by: Zahrya Rozi
      </div>
    </article>
  );
}