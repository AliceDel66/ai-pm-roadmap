import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LessonDoc } from "../../content-loader/types";

export function LessonNavigation({ prev, next }: { prev: LessonDoc | null; next: LessonDoc | null }) {
  return (
    <div className="mt-12 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2 dark:border-white/10">
      {prev ? (
        <Link to={`/learn/${prev.stageSlug}/${prev.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
          <span className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"><ArrowLeft size={14} />上一节</span>
          <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">{prev.frontmatter.title}</p>
        </Link>
      ) : <div />}
      {next ? (
        <Link to={`/learn/${next.stageSlug}/${next.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 text-right transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
          <span className="flex items-center justify-end gap-2 text-xs text-slate-500 dark:text-slate-400">下一节<ArrowRight size={14} /></span>
          <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">{next.frontmatter.title}</p>
        </Link>
      ) : <div />}
    </div>
  );
}
