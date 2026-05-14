import { Link, useParams } from "react-router-dom";
import { MarkdownRenderer } from "../components/learning/MarkdownRenderer";
import { getGlossary, glossaryDocs } from "../content-loader/glossaryLoader";

export function GlossaryPage() {
  const { termSlug } = useParams();
  const active = getGlossary(termSlug) || glossaryDocs[0];

  return (
    <main className="container-page grid gap-6 pt-24 lg:grid-cols-[280px_1fr]">
      <aside>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">术语库</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">用产品经理能理解的语言解释 AI 概念。</p>
        <div className="mt-5 grid gap-2">
          {glossaryDocs.map((item) => (
            <Link key={item.slug} to={`/glossary/${item.slug}`} className={`rounded-xl border p-3 text-sm ${active?.slug === item.slug ? "border-blue-200 bg-blue-50 text-blue-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100" : "border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"}`}>
              {item.frontmatter.title}
            </Link>
          ))}
        </div>
      </aside>
      <article className="panel rounded-2xl p-6">
        {active && <MarkdownRenderer content={active.content} />}
      </article>
    </main>
  );
}
