import type { HeadingItem, LessonDoc } from "../../content-loader/types";

interface LessonTOCProps {
  lesson: LessonDoc;
  completed: boolean;
  onComplete: () => void;
}

export function LessonTOC({ lesson, completed, onComplete }: LessonTOCProps) {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-24 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">本节目标</p>
          <ul className="mt-3 space-y-2">
            {(lesson.frontmatter.objectives || []).map((item) => (
              <li key={item} className="text-xs leading-5 text-slate-600 dark:text-slate-300">{item}</li>
            ))}
          </ul>
          <button
            onClick={onComplete}
            className={`mt-4 w-full rounded-lg px-3 py-2 text-sm font-semibold transition ${completed ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200" : "bg-slate-950 text-white hover:bg-blue-700 dark:bg-white dark:text-slate-950"}`}
          >
            {completed ? "已完成" : "标记为已完成"}
          </button>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">本节目录</p>
          <nav className="mt-3 space-y-2">
            {lesson.headings.map((heading: HeadingItem) => (
              <a key={heading.id} href={`#${heading.id}`} className={`block text-xs leading-5 text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-cyan-300 ${heading.depth === 3 ? "pl-3" : ""}`}>
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
