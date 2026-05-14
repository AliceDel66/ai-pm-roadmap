import { Activity, Brain, BriefcaseBusiness, Code2, Compass } from "lucide-react";
import { skillMap } from "../data/skillMap";

const icons = [Compass, Brain, Code2, BriefcaseBusiness, Activity];

export function SkillMap() {
  return (
    <section id="skill-map" className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="section-title">能力地图</h2>
          <p className="section-copy">AI 产品经理不是只会写 Prompt，而是把用户问题、模型能力、工程实现、商业结果和职业表达放在同一个系统里。</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {skillMap.map((group, index) => {
            const Icon = icons[index];
            return (
              <article key={group.group} className="panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30">
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-300">
                    <Icon size={19} />
                  </div>
                  <div className="relative grid h-14 w-14 place-items-center rounded-full bg-slate-100 dark:bg-white/10">
                    <svg viewBox="0 0 36 36" className="absolute h-14 w-14 -rotate-90">
                      <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-200 dark:text-slate-800" />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${group.score} 100`}
                        strokeLinecap="round"
                        className="text-blue-600 dark:text-cyan-300"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-slate-950 dark:text-white">{group.score}</span>
                  </div>
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">{group.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
