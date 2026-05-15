export type Difficulty = "入门" | "进阶" | "挑战" | "综合";

export interface StageTask {
  id: string;
  title: string;
  detail: string;
}

export interface LearningStage {
  id: string;
  order: number;
  name: string;
  goal: string;
  duration: string;
  difficulty: Difficulty;
  knowledge: string[];
  tasks: StageTask[];
  project: string;
  outcome: string;
  tools: string[];
  faqs: { q: string; a: string }[];
}

export interface PracticeProject {
  id: string;
  name: string;
  difficulty: Difficulty;
  stage: string;
  goal: string;
  background: string;
  painPoints: string[];
  coreFeatures: string[];
  flow: string[];
  aiCapabilities: string[];
  techCollaboration: string[];
  portfolio: string[];
  skills: string[];
}

export interface ToolItem {
  name: string;
  purpose: string;
  usage: string;
  priority: "优先" | "建议" | "了解";
  url: string;
}

export interface ToolCategory {
  category: string;
  tools: ToolItem[];
}

export interface InterviewCategory {
  category: string;
  questions: string[];
}
