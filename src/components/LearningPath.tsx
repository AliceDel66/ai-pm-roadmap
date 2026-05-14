import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { LearningStage } from "../data/types";
import { StageCard } from "./StageCard";

interface LearningPathProps {
  stages: LearningStage[];
  completedTasks: Record<string, boolean>;
  selectedStage: string;
  searchQuery: string;
  onSelectStage: (stageId: string) => void;
  onSearch: (value: string) => void;
  onToggleTask: (taskId: string) => void;
}

export function LearningPath({
  stages,
  completedTasks,
  selectedStage,
  searchQuery,
  onSelectStage,
  onSearch,
  onToggleTask,
}: LearningPathProps) {
  const [expandedId, setExpandedId] = useState("stage-1");
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredStages = useMemo(() => {
    return stages.filter((stage) => {
      const stageMatch = selectedStage === "all" || stage.id === selectedStage;
      const queryMatch =
        !normalizedQuery ||
        [stage.name, stage.goal, stage.project, stage.outcome, ...stage.knowledge, ...stage.tasks.map((task) => task.title)]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      return stageMatch && queryMatch;
    });
  }, [normalizedQuery, selectedStage, stages]);

  return (
    <section id="learning-path" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="section-title">学习路线</h2>
            <p className="section-copy">7 个阶段从岗位认知、产品基础、AI 技术概念一路推进到实战项目和求职作品集，每一步都有可交付任务。</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-[220px_1fr] lg:w-[560px]">
            <select
              value={selectedStage}
              onChange={(event) => onSelectStage(event.target.value)}
              className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 focus-ring dark:border-white/10 dark:bg-slate-950 dark:text-slate-200"
            >
              <option value="all">全部阶段</option>
              {stages.map((stage) => (
                <option key={stage.id} value={stage.id}>
                  阶段 {stage.order}
                </option>
              ))}
            </select>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                value={searchQuery}
                onChange={(event) => onSearch(event.target.value)}
                placeholder="搜索 Prompt、RAG、Agent、PRD..."
                className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-800 focus-ring dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {filteredStages.map((stage) => (
            <StageCard
              key={stage.id}
              stage={stage}
              expanded={expandedId === stage.id}
              completedTasks={completedTasks}
              onToggleExpand={() => setExpandedId((current) => (current === stage.id ? "" : stage.id))}
              onToggleTask={onToggleTask}
            />
          ))}
          {filteredStages.length === 0 && (
            <div className="panel rounded-2xl p-8 text-center text-sm text-slate-500 dark:text-slate-400">没有找到匹配的学习内容，换个关键词试试。</div>
          )}
        </div>
      </div>
    </section>
  );
}
