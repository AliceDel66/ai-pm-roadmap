import { ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getLessonsByStage, getStage } from "../content-loader/courseLoader";
import { MarkdownRenderer } from "../components/learning/MarkdownRenderer";
import { learningStages } from "../data/learningStages";
import { useCourseProgress } from "../hooks/useCourseProgress";

export function StageDetail() {
  const { stageSlug } = useParams();
  const stage = getStage(stageSlug);
  const lessons = getLessonsByStage(stageSlug || "");
  const progress = useCourseProgress();
  if (!stage) return <Navigate to="/learn" replace />;

  const legacy = learningStages.find((item) => item.order === stage.frontmatter.order);
  const firstLesson = lessons[0];

  return (
    <main className="pt-24">
      <section className="container-page">
        <div className="panel rounded-2xl p-6 lg:p-8">
          <p className="text-sm font-semibold text-blue-700 dark:text-cyan-300">阶段 {stage.frontmatter.order}</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">{stage.frontmatter.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">{stage.excerpt}</p>
          {firstLesson && (
            <Link to={`/learn/${stage.slug}/${firstLesson.slug}`} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
              开始本阶段学习 <ArrowRight size={17} />
            </Link>
          )}
        </div>
      </section>

      <section className="container-page grid gap-6 py-10 lg:grid-cols-[1fr_320px]">
        <div className="panel rounded-2xl p-6">
          <MarkdownRenderer content={stage.content.replace(/^# .+(\r?\n)+/, "")} />
          <h2 className="mt-10 text-2xl font-semibold text-slate-950 dark:text-white">阶段课程列表</h2>
          <div className="mt-4 grid gap-3">
            {lessons.map((lesson) => (
              <Link key={lesson.id} to={`/learn/${lesson.stageSlug}/${lesson.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">{lesson.frontmatter.lesson}. {lesson.frontmatter.title}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{lesson.frontmatter.duration} · {lesson.frontmatter.difficulty}</p>
                  </div>
                  <span className="text-xs text-cyan-500">{progress.completedLessonSet.has(lesson.id) ? "已完成" : "未完成"}</span>
                </div>
              </Link>
            ))}
            {!lessons.length && <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">本阶段完整课程正文正在开放共建，当前先提供可执行学习大纲。</p>}
          </div>
        </div>
        <aside className="space-y-4">
          <Info title="适合人群" items={stage.frontmatter.audience || []} />
          <Info title="学习目标" items={stage.frontmatter.objectives || []} />
          <Info title="阶段成果" items={stage.frontmatter.deliverables || []} />
          <Info title="推荐工具" items={stage.frontmatter.tools || []} />
          {legacy && <Info title="阶段任务" items={legacy.tasks.map((task) => task.title)} />}
        </aside>
      </section>
    </main>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
      <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => <li key={item} className="text-xs leading-5 text-slate-500 dark:text-slate-400">{item}</li>)}
      </ul>
    </div>
  );
}
