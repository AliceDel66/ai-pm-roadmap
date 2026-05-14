import { RotateCcw, TrendingUp } from "lucide-react";
import type { LearningStage } from "../data/types";

interface ProgressTrackerProps {
  stages: LearningStage[];
  percent: number;
  level: string;
  completedCount: number;
  totalTasks: number;
  stageProgress: { stageId: string; done: number; total: number; percent: number; completed: boolean }[];
  nextTask: { title: string; detail: string; stageName: string } | null;
  onReset: () => void;
}

export function ProgressTracker({ stages, percent, level, completedCount, totalTasks, stageProgress, nextTask, onReset }: ProgressTrackerProps) {
  return (
    <section className="py-12">
      <div className="container-page">
        <div className="panel rounded-2xl p-5 sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-cyan-300">
                <TrendingUp size={18} />
                学习进度
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{level}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                已完成 {completedCount} / {totalTasks} 个阶段任务。进度会自动保存到 localStorage，刷新页面后仍然保留。
              </p>
              <div className="mt-5 h-3 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-3 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400" style={{ width: `${percent}%` }} />
              </div>
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">下一步推荐学习内容</p>
                <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">{nextTask?.title || "整理作品集并准备面试"}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{nextTask?.detail || "你已经完成全部阶段任务，可以把项目文档组合成求职作品集。"}</p>
              </div>
              <button
                onClick={onReset}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-red-200 hover:text-red-600 focus-ring dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                <RotateCcw size={14} />
                重置进度
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {stages.map((stage) => {
                const progress = stageProgress.find((item) => item.stageId === stage.id)!;
                return (
                  <div key={stage.id} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">阶段 {stage.order}</p>
                      <span className={`rounded-md px-2 py-1 text-xs ${progress.completed ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200" : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"}`}>
                        {progress.completed ? "已完成" : "进行中"}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-1 text-xs text-slate-500 dark:text-slate-400">{stage.name}</p>
                    <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${progress.percent}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      {progress.done}/{progress.total} 个任务
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
