import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DailyTasks } from "../components/DailyTasks";
import { Hero } from "../components/Hero";
import { InterviewQuestions } from "../components/InterviewQuestions";
import { LearningPath } from "../components/LearningPath";
import { PortfolioGuide } from "../components/PortfolioGuide";
import { ProgressTracker } from "../components/ProgressTracker";
import { ProjectPractice } from "../components/ProjectPractice";
import { SkillMap } from "../components/SkillMap";
import { ToolLibrary } from "../components/ToolLibrary";
import { getLessonsByStage } from "../content-loader/courseLoader";
import { interviewQuestions } from "../data/interviewQuestions";
import { learningStages } from "../data/learningStages";
import { practiceProjects } from "../data/projects";
import { toolCategories } from "../data/tools";
import { useCourseProgress } from "../hooks/useCourseProgress";
import { useLearningProgress } from "../hooks/useLearningProgress";

export function HomePage() {
  const [selectedStage, setSelectedStage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const taskProgress = useLearningProgress(learningStages);
  const courseProgress = useCourseProgress();
  const navigate = useNavigate();
  const stageSlugById = useMemo(
    () => ({
      "stage-1": "stage-01-ai-pm-intro",
      "stage-2": "stage-02-product-foundation",
      "stage-3": "stage-03-ai-foundation",
      "stage-4": "stage-04-ai-product-design",
      "stage-5": "stage-05-technical-collaboration",
      "stage-6": "stage-06-real-projects",
      "stage-7": "stage-07-advanced-ai-pm",
    }),
    [],
  );
  const courseStageProgress = useMemo(
    () =>
      learningStages.map((stage) => {
        const lessons = getLessonsByStage(stageSlugById[stage.id as keyof typeof stageSlugById]);
        const done = lessons.filter((lesson) => courseProgress.completedLessonSet.has(lesson.id)).length;
        const total = lessons.length;
        return {
          stageId: stage.id,
          done,
          total,
          percent: total ? Math.round((done / total) * 100) : 0,
          completed: total > 0 && done === total,
        };
      }),
    [courseProgress.completedLessonSet, stageSlugById],
  );
  const taskLessonMap = useMemo(() => {
    const map = new Map<string, string>();
    learningStages.forEach((stage) => {
      const lessons = getLessonsByStage(stageSlugById[stage.id as keyof typeof stageSlugById]);
      stage.tasks.forEach((task, index) => {
        const lesson = lessons[index];
        if (lesson) map.set(task.id, lesson.id);
      });
    });
    return map;
  }, [stageSlugById]);
  const completedStageTasks = useMemo(() => {
    const completed: Record<string, boolean> = {};
    taskLessonMap.forEach((lessonId, taskId) => {
      completed[taskId] = courseProgress.completedLessonSet.has(lessonId);
    });
    return completed;
  }, [courseProgress.completedLessonSet, taskLessonMap]);
  const nextCourseTask = courseProgress.continueLesson
    ? {
        title: courseProgress.continueLesson.frontmatter.title,
        detail: `继续学习 ${courseProgress.continueLesson.frontmatter.stageTitle || "课程内容"}`,
        stageName: courseProgress.continueLesson.frontmatter.stageTitle || "课程学习",
      }
    : null;

  const toggleStageTask = (taskId: string) => {
    const lessonId = taskLessonMap.get(taskId);
    if (lessonId) courseProgress.toggleLesson(lessonId);
  };

  return (
    <main>
      <Hero
        percent={courseProgress.overallPercent}
        level={courseProgress.level}
        nextTask={courseProgress.continueLesson ? { title: courseProgress.continueLesson.frontmatter.title, stageName: courseProgress.continueLesson.frontmatter.stageTitle || "" } : taskProgress.nextTask}
        onPrimary={() => navigate("/learn")}
        onSecondary={() => document.getElementById("skill-map")?.scrollIntoView({ behavior: "smooth" })}
      />
      <ProgressTracker
        stages={learningStages}
        percent={courseProgress.overallPercent}
        level={courseProgress.level}
        completedCount={courseProgress.completedLessonCount}
        totalTasks={courseProgress.totalLessons}
        stageProgress={courseStageProgress}
        nextTask={nextCourseTask}
        onReset={courseProgress.resetProgress}
        unitLabel="节课程"
      />
      <LearningPath
        stages={learningStages}
        completedTasks={completedStageTasks}
        selectedStage={selectedStage}
        searchQuery={searchQuery}
        onSelectStage={setSelectedStage}
        onSearch={setSearchQuery}
        onToggleTask={toggleStageTask}
        stageProgress={courseStageProgress}
      />
      <SkillMap />
      <ProjectPractice projects={practiceProjects} searchQuery={searchQuery} selectedStage={selectedStage} />
      <ToolLibrary categories={toolCategories} searchQuery={searchQuery} />
      <DailyTasks dailyCompleted={taskProgress.dailyCompleted} onToggleDailyTask={taskProgress.toggleDailyTask} />
      <PortfolioGuide />
      <InterviewQuestions categories={interviewQuestions} />
    </main>
  );
}
