import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { CourseSidebar } from "../components/learning/CourseSidebar";
import { LessonNavigation } from "../components/learning/LessonNavigation";
import { LessonProgressBar } from "../components/learning/LessonProgressBar";
import { LessonTOC } from "../components/learning/LessonTOC";
import { MarkdownRenderer } from "../components/learning/MarkdownRenderer";
import { getLesson, getLessonNeighbors } from "../content-loader/courseLoader";
import { useCourseProgress } from "../hooks/useCourseProgress";
import { useReadingProgress } from "../hooks/useReadingProgress";

export function LessonDetail() {
  const { stageSlug, lessonSlug } = useParams();
  const lesson = getLesson(stageSlug, lessonSlug);
  const [menuOpen, setMenuOpen] = useState(false);
  const courseProgress = useCourseProgress();
  const readingProgress = useReadingProgress();

  useEffect(() => {
    if (lesson) courseProgress.markVisited(lesson.stageSlug, lesson.slug);
  }, [lesson?.id]);

  if (!lesson) return <Navigate to="/learn" replace />;
  const neighbors = getLessonNeighbors(lesson);
  const completed = courseProgress.completedLessonSet.has(lesson.id);

  return (
    <main className="pt-16">
      <LessonProgressBar value={readingProgress} />
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(true)} className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-xl dark:bg-white dark:text-slate-950">
          <Menu size={17} /> 目录
        </button>
      </div>
      <div className="flex">
        <CourseSidebar completed={courseProgress.completedLessonSet} mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-cyan-300/10 dark:text-cyan-200">{lesson.frontmatter.stageTitle}</span>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300">{lesson.frontmatter.difficulty}</span>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300">{lesson.frontmatter.duration}</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white">{lesson.frontmatter.title}</h1>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(lesson.frontmatter.deliverables || []).map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">{item}</div>
              ))}
            </div>
          </div>

          <MarkdownRenderer content={lesson.content.replace(/^# .+(\r?\n)+/, "")} />

          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-cyan-300/20 dark:bg-cyan-300/10">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">完成本节</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">完成阅读、练习和作业后，点击按钮记录学习进度。刷新页面后状态会保留。</p>
            <button
              onClick={() => courseProgress.toggleLesson(lesson.id)}
              className={`mt-4 rounded-lg px-5 py-3 text-sm font-semibold ${completed ? "bg-emerald-600 text-white" : "bg-slate-950 text-white dark:bg-white dark:text-slate-950"}`}
            >
              {completed ? "取消完成" : "标记为已完成"}
            </button>
          </div>

          <LessonNavigation prev={neighbors.prev} next={neighbors.next} />
        </article>
        <LessonTOC lesson={lesson} completed={completed} onComplete={() => courseProgress.toggleLesson(lesson.id, true)} />
      </div>
    </main>
  );
}
