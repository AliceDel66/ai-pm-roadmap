import type { ReactNode } from "react";

interface AnimationCardProps {
  title: string;
  description?: string;
  tags?: string[];
  hint?: string;
  why?: string;
  children: ReactNode;
  className?: string;
}

export function AnimationCard({ title, description, tags = [], hint, why, children, className = "" }: AnimationCardProps) {
  return (
    <section className={`my-8 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-soft shadow-slate-200/40 dark:border-cyan-300/20 dark:bg-slate-950/80 dark:shadow-none ${className}`} aria-label={`教学动画：${title}`}>
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 via-violet-50 to-cyan-50 px-4 py-4 dark:border-white/10 dark:from-blue-500/10 dark:via-violet-500/10 dark:to-cyan-500/10 sm:px-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-blue-700 dark:text-cyan-300">2D 教学动画</p>
            <h3 className="m-0 text-xl font-semibold leading-snug text-slate-950 dark:text-white">{title}</h3>
            {description && <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
          </div>
          {tags.length > 0 && (
            <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-56 sm:justify-end" aria-label="动画标签">
              {tags.map((tag) => (
                <span key={tag} className="rounded-md bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {why && <p className="mt-3 rounded-xl border border-blue-100 bg-white/70 px-3 py-2 text-sm leading-7 text-slate-700 dark:border-cyan-300/20 dark:bg-slate-900/60 dark:text-slate-200">为什么重要：{why}</p>}
      </div>

      <div className="min-w-0 px-3 py-4 sm:px-5">{children}</div>

      {hint && (
        <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-5">
          {hint}
        </div>
      )}
    </section>
  );
}
