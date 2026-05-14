import { CalendarCheck2 } from "lucide-react";
import { dailyTasks } from "../data/dailyTasks";

interface DailyTasksProps {
  dailyCompleted: Record<string, boolean>;
  onToggleDailyTask: (taskId: string) => void;
}

export function DailyTasks({ dailyCompleted, onToggleDailyTask }: DailyTasksProps) {
  const done = dailyTasks.filter((_, index) => dailyCompleted[`daily-${index}`]).length;

  return (
    <section className="py-12">
      <div className="container-page">
        <div className="panel rounded-2xl p-5 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-cyan-300">
                <CalendarCheck2 size={18} />
                今日任务
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">把学习变成每天可完成的小动作</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                今日已完成 {done} / {dailyTasks.length} 个任务。建议每天选 1-2 个，不追求一次学完。
              </p>
            </div>
            <div className="grid gap-2">
              {dailyTasks.map((task, index) => {
                const id = `daily-${index}`;
                return (
                  <label
                    key={task}
                    className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/30"
                  >
                    <input
                      type="checkbox"
                      checked={!!dailyCompleted[id]}
                      onChange={() => onToggleDailyTask(id)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-cyan-400"
                    />
                    <span className="text-sm leading-6 text-slate-700 dark:text-slate-200">{task}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
