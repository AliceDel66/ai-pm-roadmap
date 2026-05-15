import { Boxes, ExternalLink, Star } from "lucide-react";
import type { ToolCategory } from "../data/types";

interface ToolLibraryProps {
  categories: ToolCategory[];
  searchQuery: string;
}

export function ToolLibrary({ categories, searchQuery }: ToolLibraryProps) {
  const query = searchQuery.trim().toLowerCase();
  const filtered = categories
    .map((category) => ({
      ...category,
      tools: category.tools.filter((tool) => !query || [tool.name, tool.purpose, tool.usage, category.category].join(" ").toLowerCase().includes(query)),
    }))
    .filter((category) => category.tools.length > 0);

  return (
    <section id="tools" className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="section-title">工具库</h2>
          <p className="section-copy">先学能立刻提升产出的工具，再逐步理解技术协作工具。工具不是越多越好，关键是知道在什么任务里怎么用。</p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {filtered.map((category) => (
            <article key={category.category} className="panel rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-300">
                  <Boxes size={19} />
                </div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{category.category}</h3>
              </div>
              <div className="mt-5 grid gap-3">
                {category.tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`打开 ${tool.name} 官网或首页`}
                    className="group block rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm focus-ring dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30 motion-reduce:transition-none"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 dark:text-white">
                          {tool.name}
                          <ExternalLink size={13} className="text-slate-400 transition group-hover:text-blue-600 dark:group-hover:text-cyan-300 motion-reduce:transition-none" aria-hidden="true" />
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{tool.purpose}</p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300">
                        <Star size={12} />
                        {tool.priority}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-300">{tool.usage}</p>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
