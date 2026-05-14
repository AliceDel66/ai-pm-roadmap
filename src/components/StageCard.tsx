import { ChevronDown, Circle, CircleCheck, Clock, HelpCircle, Sparkles, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import type { LearningStage } from "../data/types";

interface StageCardProps {
  stage: LearningStage;
  expanded: boolean;
  completedTasks: Record<string, boolean>;
  progress?: { done: number; total: number; percent: number };
  onToggleExpand: () => void;
  onToggleTask: (taskId: string) => void;
}

export function StageCard({ stage, expanded, completedTasks, progress, onToggleExpand, onToggleTask }: StageCardProps) {
  const taskDone = stage.tasks.filter((task) => completedTasks[task.id]).length;
  const taskPercent = stage.tasks.length ? Math.round((taskDone / stage.tasks.length) * 100) : 0;
  const done = progress?.done ?? taskDone;
  const total = progress?.total ?? stage.tasks.length;
  const percent = progress?.percent ?? taskPercent;
  const stageSlugMap: Record<string, string> = {
    "stage-1": "stage-01-ai-pm-intro",
    "stage-2": "stage-02-product-foundation",
    "stage-3": "stage-03-ai-foundation",
    "stage-4": "stage-04-ai-product-design",
    "stage-5": "stage-05-technical-collaboration",
    "stage-6": "stage-06-real-projects",
    "stage-7": "stage-07-advanced-ai-pm",
  };

  return (
    <article className="panel group rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30">
      <button onClick={onToggleExpand} className="w-full p-5 text-left focus-ring sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-950 text-lg font-semibold text-white dark:bg-white dark:text-slate-950">
              {stage.order}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{stage.name}</h3>
                <span className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">{stage.difficulty}</span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{stage.goal}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {stage.knowledge.slice(0, 5).map((item) => (
                  <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex min-w-40 items-center gap-3 sm:justify-end">
            <div className="w-full sm:w-32">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{done}/{total}</span>
                <span>{percent}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${percent}%` }} />
              </div>
            </div>
            <ChevronDown className={`shrink-0 text-slate-400 transition ${expanded ? "rotate-180" : ""}`} size={20} />
          </div>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-slate-200 px-5 pb-5 pt-1 dark:border-white/10 sm:px-6 sm:pb-6">
          <div className="grid gap-4 pt-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                <CircleCheck size={17} className="text-blue-600 dark:text-cyan-300" />
                阶段任务
              </div>
              <div className="grid gap-2">
                {stage.tasks.map((task) => (
                  <label
                    key={task.id}
                    className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30 dark:hover:bg-cyan-300/10"
                  >
                    <input
                      type="checkbox"
                      checked={!!completedTasks[task.id]}
                      onChange={() => onToggleTask(task.id)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-cyan-400"
                    />
                    <span>
                      <span className="block text-sm font-medium text-slate-900 dark:text-white">{task.title}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">{task.detail}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                  <Clock size={17} className="text-violet-600 dark:text-violet-300" />
                  学习时长
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stage.duration}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                  <Sparkles size={17} className="text-blue-600 dark:text-cyan-300" />
                  阶段成果
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.outcome}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                  <Wrench size={17} className="text-cyan-600 dark:text-cyan-300" />
                  推荐工具
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stage.tools.map((tool) => (
                    <span key={tool} className="rounded-md bg-white px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            {stage.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-start gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                  <HelpCircle size={16} className="mt-0.5 shrink-0 text-blue-600 dark:text-cyan-300" />
                  {faq.q}
                </div>
                <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
            <Circle size={10} className="shrink-0 fill-current" />
            阶段实战项目：{stage.project}
          </div>
          <Link
            to={`/learn/${stageSlugMap[stage.id]}`}
            className="mt-4 inline-flex rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950"
          >
            进入阶段学习
          </Link>
        </div>
      )}
    </article>
  );
}
