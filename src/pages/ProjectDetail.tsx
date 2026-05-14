import { Navigate, useParams } from "react-router-dom";
import { practiceProjects } from "../data/projects";
import { useCourseProgress } from "../hooks/useCourseProgress";

export function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = practiceProjects.find((item) => item.id === projectSlug);
  const progress = useCourseProgress();
  if (!project) return <Navigate to="/learn" replace />;
  const completed = progress.state.completedProjects.includes(project.id);

  return (
    <main className="container-page pt-24">
      <article className="panel rounded-2xl p-6 lg:p-8">
        <p className="text-sm font-semibold text-blue-700 dark:text-cyan-300">{project.stage} · {project.difficulty}</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">{project.name}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">{project.goal}</p>
        <button onClick={() => progress.toggleProject(project.id)} className={`mt-6 rounded-lg px-5 py-3 text-sm font-semibold ${completed ? "bg-emerald-600 text-white" : "bg-slate-950 text-white dark:bg-white dark:text-slate-950"}`}>
          {completed ? "项目已完成" : "标记项目完成"}
        </button>
      </article>
      <section className="grid gap-5 py-8 lg:grid-cols-2">
        <Block title="项目背景" items={[project.background]} />
        <Block title="目标用户" items={["需要通过 AI 提升效率的个人、团队或企业用户"]} />
        <Block title="用户痛点" items={project.painPoints} />
        <Block title="产品目标" items={[project.goal]} />
        <Block title="核心功能" items={project.coreFeatures} />
        <Block title="用户流程" items={project.flow} />
        <Block title="AI 能力点" items={project.aiCapabilities} />
        <Block title="技术协作点" items={project.techCollaboration} />
        <Block title="数据指标" items={["任务完成率", "结果采纳率", "重试率", "平均响应时长", "单次调用成本"]} />
        <Block title="成本与风险" items={["模型调用成本", "错误输出风险", "数据隐私与权限", "内容安全", "人工兜底成本"]} />
        <Block title="MVP 版本范围" items={project.coreFeatures.slice(0, 4)} />
        <Block title="可迭代方向" items={["更细的权限控制", "更完整的指标看板", "模板市场", "团队协作", "商业化套餐"]} />
        <Block title="作品集产出" items={project.portfolio} />
        <Block title="项目作业" items={["完成 PRD、流程图、核心原型、指标方案和项目复盘，并整理成作品集页面。"]} />
      </section>
    </main>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => <li key={item} className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</li>)}
      </ul>
    </div>
  );
}
