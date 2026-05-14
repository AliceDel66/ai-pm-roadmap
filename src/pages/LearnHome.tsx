import { ArrowRight, BookOpen, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getLessonsByStage, stageDocs } from "../content-loader/courseLoader";
import { useCourseProgress } from "../hooks/useCourseProgress";

export function LearnHome() {
  const progress = useCourseProgress();
  const continueHref = progress.continueLesson ? `/learn/${progress.continueLesson.stageSlug}/${progress.continueLesson.slug}` : "/learn/stage-01-ai-pm-intro";

  return (
    <main className="pt-24">
      <section className="container-page">
        <div className="panel rounded-2xl p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-normal text-slate-950 dark:text-white">AI 产品经理开源课程</h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                从岗位认知、产品基本功、AI 基础、技术协作到项目实战和作品集，按阶段阅读课程、完成练习和作业。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to={continueHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950">
                  继续学习 <ArrowRight size={17} />
                </Link>
                <Link to="/search" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white">
                  搜索课程
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900/70">
              <p className="text-sm text-slate-500 dark:text-slate-400">当前总进度</p>
              <p className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">{progress.overallPercent}%</p>
              <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${progress.overallPercent}%` }} />
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                已完成 {progress.completedLessonCount}/{progress.totalLessons} 节完整课程
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-5 lg:grid-cols-2">
          {stageDocs.map((stage) => {
            const lessons = getLessonsByStage(stage.slug);
            const done = lessons.filter((lesson) => progress.completedLessonSet.has(lesson.id)).length;
            const count = lessons.length || stage.frontmatter.lessonCount || 0;
            return (
              <Link key={stage.slug} to={`/learn/${stage.slug}`} className="panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-blue-700 dark:text-cyan-300">阶段 {stage.frontmatter.order}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{stage.frontmatter.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{stage.excerpt}</p>
                  </div>
                  <BookOpen className="shrink-0 text-blue-600 dark:text-cyan-300" size={22} />
                </div>
                <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-3 dark:text-slate-300">
                  <span>{count} 节课</span>
                  <span>{stage.frontmatter.duration}</span>
                  <span>已完成 {done}/{count}</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${count ? Math.round((done / count) * 100) : 0}%` }} />
                </div>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">阶段项目：{stage.frontmatter.project}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="panel rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">推荐学习顺序</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>先完整读完第一阶段，完成产品分析报告。</li>
              <li>第二阶段补产品基本功，再进入 AI 概念。</li>
              <li>每个阶段至少保留一个可展示产出，不要只阅读。</li>
            </ol>
          </div>
          <div className="panel rounded-2xl p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-950 dark:text-white"><HelpCircle size={20} />新手学习建议</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              每天建议学习 45-90 分钟。阅读课程后立刻做练习，把作业沉淀到 Notion 或 Markdown。真正的成长来自“读完、做过、复盘、能讲清”。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
