import { BookOpen, X } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getLessonsByStage, stageDocs } from "../../content-loader/courseLoader";
import type { LessonDoc } from "../../content-loader/types";

interface CourseSidebarProps {
  completed: Set<string>;
  mobileOpen?: boolean;
  onClose?: () => void;
}

export function CourseSidebar({ completed, mobileOpen = false, onClose }: CourseSidebarProps) {
  const params = useParams();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto border-r border-slate-200 bg-white p-4 transition lg:sticky lg:top-16 lg:z-0 lg:block lg:h-[calc(100vh-4rem)] lg:w-72 dark:border-white/10 dark:bg-slate-950 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <Link to="/learn" className="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
          <BookOpen size={18} />
          课程目录
        </Link>
        <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 lg:hidden dark:border-white/10" aria-label="关闭目录">
          <X size={17} />
        </button>
      </div>
      <div className="space-y-5">
        {stageDocs.map((stage) => {
          const lessons = getLessonsByStage(stage.slug);
          return (
            <div key={stage.slug}>
              <Link
                to={`/learn/${stage.slug}`}
                className={`block rounded-lg px-3 py-2 text-sm font-semibold ${params.stageSlug === stage.slug ? "bg-blue-50 text-blue-700 dark:bg-cyan-300/10 dark:text-cyan-200" : "text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"}`}
              >
                {stage.frontmatter.order}. {stage.frontmatter.title}
              </Link>
              <div className="mt-2 space-y-1">
                {lessons.map((lesson: LessonDoc) => (
                  <Link
                    key={lesson.id}
                    to={`/learn/${lesson.stageSlug}/${lesson.slug}`}
                    className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs leading-5 ${
                      params.lessonSlug === lesson.slug
                        ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                    }`}
                  >
                    <span>{lesson.frontmatter.lesson}. {lesson.frontmatter.title}</span>
                    {completed.has(lesson.id) && <span className="text-cyan-500">完成</span>}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
