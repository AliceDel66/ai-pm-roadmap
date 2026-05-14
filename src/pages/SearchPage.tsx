import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchContent } from "../content-loader/searchIndex";

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const results = useMemo(() => searchContent(query), [query]);

  const update = (value: string) => {
    setQuery(value);
    setParams(value ? { q: value } : {});
  };

  return (
    <main className="container-page pt-24">
      <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">搜索课程内容</h1>
      <div className="relative mt-6 max-w-2xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
        <input value={query} onChange={(event) => update(event.target.value)} placeholder="搜索 RAG、Prompt、作品集、PRD..." className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm dark:border-white/10 dark:bg-slate-950" />
      </div>
      <div className="mt-8 grid gap-4">
        {results.map((item) => (
          <Link key={item.id} to={item.href} className="panel rounded-2xl p-5 transition hover:-translate-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-slate-950 px-2 py-1 text-xs text-white dark:bg-white dark:text-slate-950">{item.type}</span>
              {item.stageTitle && <span className="text-xs text-slate-500 dark:text-slate-400">{item.stageTitle}</span>}
            </div>
            <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-white/10 dark:text-slate-300">{tag}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
