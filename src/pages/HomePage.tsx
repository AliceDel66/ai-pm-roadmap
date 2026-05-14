import { useState } from "react";
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
        percent={taskProgress.percent}
        level={taskProgress.level}
        completedCount={taskProgress.completedCount}
        totalTasks={taskProgress.totalTasks}
        stageProgress={taskProgress.stageProgress}
        nextTask={taskProgress.nextTask}
        onReset={taskProgress.resetProgress}
      />
      <LearningPath
        stages={learningStages}
        completedTasks={taskProgress.completedTasks}
        selectedStage={selectedStage}
        searchQuery={searchQuery}
        onSelectStage={setSelectedStage}
        onSearch={setSearchQuery}
        onToggleTask={taskProgress.toggleTask}
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
