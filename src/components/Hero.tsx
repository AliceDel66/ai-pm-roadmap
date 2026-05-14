import { ArrowRight, CheckCircle2, Map, Play, Search, Target } from "lucide-react";

interface HeroProps {
  percent: number;
  level: string;
  nextTask: { title: string; stageName: string } | null;
  onPrimary: () => void;
  onSecondary: () => void;
}

export function Hero({ percent, level, nextTask, onPrimary, onSecondary }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(6,182,212,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_16%_18%,rgba(59,130,246,0.20),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(124,58,237,0.20),transparent_28%)]" />
      <div className="container-page grid items-center gap-10 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            从 0 到 1，成长为真正能落地 AI 产品的产品经理
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-300">
            系统学习 AI 产品经理所需的产品能力、AI 知识、技术协作、项目实战与商业化思维，适合新手小白、转行者和想升级 AI 能力的产品经理。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onPrimary}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus-ring dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
            >
              开始学习路线
              <ArrowRight size={17} className="transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onSecondary}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl focus-ring dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              <Map size={17} />
              查看能力地图
            </button>
          </div>
        </div>

        <div className="panel rounded-2xl p-4 sm:p-5">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/70">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">总进度</p>
                <p className="mt-1 text-3xl font-semibold text-slate-950 dark:text-white">{percent}%</p>
              </div>
              <div className="rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-medium text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                {level}
              </div>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400" style={{ width: `${percent}%` }} />
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ["学习路径", "7 个阶段从岗位认知到商业化", Target],
              ["主题搜索", "快速定位 Prompt、RAG、Agent", Search],
              ["阶段任务", "每个阶段 5 个可执行任务", CheckCircle2],
              ["项目实战", "6 个可放入作品集的项目", Play],
            ].map(([title, desc, Icon]) => (
              <div key={title as string} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <Icon className="text-blue-600 dark:text-cyan-300" size={20} />
                <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">{title as string}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc as string}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-medium uppercase text-slate-500 dark:text-slate-400">下一步推荐</p>
            <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">{nextTask?.title || "全部任务已完成"}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{nextTask?.stageName || "可以开始整理最终作品集"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
