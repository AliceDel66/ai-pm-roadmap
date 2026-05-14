import { useEffect, useMemo, useState } from "react";
import type { LearningStage } from "../data/types";

const STORAGE_KEY = "ai-pm-roadmap-progress-v1";
const DAILY_KEY = "ai-pm-roadmap-daily-v1";

type TaskState = Record<string, boolean>;

const readStorage = (key: string): TaskState => {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(key) || "{}") as TaskState;
  } catch {
    return {};
  }
};

export function useLearningProgress(stages: LearningStage[]) {
  const [completedTasks, setCompletedTasks] = useState<TaskState>(() => readStorage(STORAGE_KEY));
  const [dailyCompleted, setDailyCompleted] = useState<TaskState>(() => readStorage(DAILY_KEY));

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    window.localStorage.setItem(DAILY_KEY, JSON.stringify(dailyCompleted));
  }, [dailyCompleted]);

  const allTasks = useMemo(() => stages.flatMap((stage) => stage.tasks), [stages]);
  const totalTasks = allTasks.length;
  const completedCount = allTasks.filter((task) => completedTasks[task.id]).length;
  const percent = totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);

  const stageProgress = useMemo(
    () =>
      stages.map((stage) => {
        const done = stage.tasks.filter((task) => completedTasks[task.id]).length;
        return {
          stageId: stage.id,
          done,
          total: stage.tasks.length,
          percent: Math.round((done / stage.tasks.length) * 100),
          completed: done === stage.tasks.length,
        };
      }),
    [completedTasks, stages],
  );

  const level =
    percent >= 86
      ? "AI 产品专家"
      : percent >= 66
        ? "AI 产品负责人"
        : percent >= 42
          ? "AI 产品设计师"
          : percent >= 18
            ? "AI 产品助理"
            : "AI 产品新人";

  const nextTask =
    stages.flatMap((stage) => stage.tasks.map((task) => ({ ...task, stageName: stage.name }))).find((task) => !completedTasks[task.id]) ||
    null;

  const toggleTask = (taskId: string) => {
    setCompletedTasks((current) => ({ ...current, [taskId]: !current[taskId] }));
  };

  const toggleDailyTask = (taskId: string) => {
    setDailyCompleted((current) => ({ ...current, [taskId]: !current[taskId] }));
  };

  const resetProgress = () => {
    setCompletedTasks({});
    setDailyCompleted({});
  };

  return {
    completedTasks,
    dailyCompleted,
    completedCount,
    totalTasks,
    percent,
    level,
    nextTask,
    stageProgress,
    toggleTask,
    toggleDailyTask,
    resetProgress,
  };
}
