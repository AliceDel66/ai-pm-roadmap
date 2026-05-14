import { ArrowUpRight, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { PracticeProject } from "../data/types";

interface ProjectPracticeProps {
  projects: PracticeProject[];
  searchQuery: string;
  selectedStage: string;
}

export function ProjectPractice({ projects, searchQuery, selectedStage }: ProjectPracticeProps) {
  const query = searchQuery.trim().toLowerCase();
  const filtered = projects.filter((project) => {
    const stageNumber = selectedStage === "all" ? "" : selectedStage.replace("stage-", "");
    const stageMatch = selectedStage === "all" || project.stage.includes(stageNumber);
    const queryMatch = !query || Object.values(project).flat().join(" ").toLowerCase().includes(query);
    return stageMatch && queryMatch;
  });

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="section-title">实战项目</h2>
            <p className="section-copy">每个项目都围绕真实 AI 产品场景设计，最终可以产出 PRD、原型、流程图、指标方案和复盘文档。</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            当前显示 {filtered.length} 个项目
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.id} className="panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs font-medium text-white dark:bg-white dark:text-slate-950">{project.stage}</span>
                    <span className="rounded-md border border-slate-200 px-2.5 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">{project.difficulty}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{project.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.goal}</p>
                </div>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 dark:bg-cyan-300/10 dark:text-cyan-300">
                  <Layers3 size={18} />
                </div>
              </div>

              <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                {project.background}
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <InfoList title="用户痛点" items={project.painPoints} />
                <InfoList title="核心功能" items={project.coreFeatures} />
                <InfoList title="AI 能力点" items={project.aiCapabilities} />
                <InfoList title="技术协作点" items={project.techCollaboration} />
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">产品流程</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.flow.map((step, index) => (
                    <span key={step} className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300">
                      {index + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4 dark:border-white/10">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                  可产出的作品集内容
                  <ArrowUpRight size={15} className="text-blue-600 dark:text-cyan-300" />
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.portfolio.map((item) => (
                    <span key={item} className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs text-blue-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <Link to={`/projects/${project.id}`} className="mt-5 inline-flex rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-950">
                查看项目教程
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-950 dark:text-white">{title}</p>
      <ul className="mt-2 space-y-1.5">
        {items.slice(0, 4).map((item) => (
          <li key={item} className="text-xs leading-5 text-slate-500 dark:text-slate-400">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
