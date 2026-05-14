import { Copy, Download } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MarkdownRenderer } from "../components/learning/MarkdownRenderer";
import { getTemplate, templateDocs } from "../content-loader/templateLoader";

export function TemplatesPage() {
  const { templateSlug } = useParams();
  const [filter, setFilter] = useState("全部");
  const types = ["全部", ...Array.from(new Set(templateDocs.map((item) => item.frontmatter.type || "其他")))];
  const filtered = useMemo(() => templateDocs.filter((item) => filter === "全部" || item.frontmatter.type === filter), [filter]);
  const active = getTemplate(templateSlug) || filtered[0];

  const copyMarkdown = async () => {
    if (active) await navigator.clipboard.writeText(`---\ntitle: ${active.frontmatter.title}\n---\n\n${active.content}`);
  };

  const downloadMarkdown = () => {
    if (!active) return;
    const blob = new Blob([`---\ntitle: ${active.frontmatter.title}\n---\n\n${active.content}`], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${active.slug}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="container-page grid gap-6 pt-24 lg:grid-cols-[300px_1fr]">
      <aside className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">模板库</h1>
        <select value={filter} onChange={(event) => setFilter(event.target.value)} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-white/10 dark:bg-slate-950">
          {types.map((type) => <option key={type}>{type}</option>)}
        </select>
        <div className="space-y-2">
          {filtered.map((template) => (
            <Link key={template.slug} to={`/templates/${template.slug}`} className={`block rounded-xl border p-3 text-sm ${active?.slug === template.slug ? "border-blue-200 bg-blue-50 text-blue-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100" : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"}`}>
              {template.frontmatter.title}
            </Link>
          ))}
        </div>
      </aside>
      <article className="panel rounded-2xl p-6">
        {active && (
          <>
            <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{active.frontmatter.type}</p>
                <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">{active.frontmatter.title}</h2>
              </div>
              <div className="flex gap-2">
                <button onClick={copyMarkdown} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-white/10"><Copy size={16} />复制</button>
                <button onClick={downloadMarkdown} className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-sm text-white dark:bg-white dark:text-slate-950"><Download size={16} />下载</button>
              </div>
            </div>
            <MarkdownRenderer content={active.content} />
          </>
        )}
      </article>
    </main>
  );
}
