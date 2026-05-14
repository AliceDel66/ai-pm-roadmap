import { useEffect, useMemo, useState } from "react";
import { lessonDocs } from "../content-loader/courseLoader";

const STORAGE_KEY = "ai-pm-roadmap-course-progress-v1";

export interface CourseProgressState {
  completedLessons: string[];
  completedAssignments: string[];
  completedQuizzes: string[];
  completedProjects: string[];
  lastLearningPath: {
    stageSlug: string;
    lessonSlug: string;
    updatedAt: string;
  } | null;
}

const initialState: CourseProgressState = {
  completedLessons: [],
  completedAssignments: [],
  completedQuizzes: [],
  completedProjects: [],
  lastLearningPath: null,
};

function readState(): CourseProgressState {
  if (typeof window === "undefined") return initialState;
  try {
    return { ...initialState, ...JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return initialState;
  }
}

export function useCourseProgress() {
  const [state, setState] = useState<CourseProgressState>(readState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const completedLessonSet = useMemo(() => new Set(state.completedLessons), [state.completedLessons]);
  const totalLessons = lessonDocs.length;
  const completedLessonCount = lessonDocs.filter((lesson) => completedLessonSet.has(lesson.id)).length;
  const overallPercent = totalLessons ? Math.round((completedLessonCount / totalLessons) * 100) : 0;

  const level =
    overallPercent >= 86
      ? "AI 产品专家"
      : overallPercent >= 66
        ? "AI 产品负责人"
        : overallPercent >= 42
          ? "AI 产品设计师"
          : overallPercent >= 18
            ? "AI 产品助理"
            : "AI 产品新人";

  const nextLesson = lessonDocs.find((lesson) => !completedLessonSet.has(lesson.id)) || null;
  const continueLesson =
    state.lastLearningPath &&
    lessonDocs.find((lesson) => lesson.stageSlug === state.lastLearningPath?.stageSlug && lesson.slug === state.lastLearningPath?.lessonSlug);

  const markVisited = (stageSlug: string, lessonSlug: string) => {
    setState((current) => ({
      ...current,
      lastLearningPath: { stageSlug, lessonSlug, updatedAt: new Date().toISOString() },
    }));
  };

  const toggleLesson = (lessonId: string, completed?: boolean) => {
    setState((current) => {
      const exists = current.completedLessons.includes(lessonId);
      const shouldComplete = completed ?? !exists;
      return {
        ...current,
        completedLessons: shouldComplete
          ? Array.from(new Set([...current.completedLessons, lessonId]))
          : current.completedLessons.filter((id) => id !== lessonId),
      };
    });
  };

  const toggleAssignment = (id: string) => {
    setState((current) => ({
      ...current,
      completedAssignments: current.completedAssignments.includes(id)
        ? current.completedAssignments.filter((item) => item !== id)
        : [...current.completedAssignments, id],
    }));
  };

  const toggleQuiz = (id: string) => {
    setState((current) => ({
      ...current,
      completedQuizzes: current.completedQuizzes.includes(id) ? current.completedQuizzes.filter((item) => item !== id) : [...current.completedQuizzes, id],
    }));
  };

  const toggleProject = (id: string) => {
    setState((current) => ({
      ...current,
      completedProjects: current.completedProjects.includes(id) ? current.completedProjects.filter((item) => item !== id) : [...current.completedProjects, id],
    }));
  };

  const resetProgress = () => {
    setState(initialState);
  };

  return {
    state,
    completedLessonSet,
    totalLessons,
    completedLessonCount,
    overallPercent,
    level,
    nextLesson,
    continueLesson: continueLesson || nextLesson,
    markVisited,
    toggleLesson,
    toggleAssignment,
    toggleQuiz,
    toggleProject,
    resetProgress,
  };
}
