import type { InterviewCategory } from "./types";

export const interviewQuestions: InterviewCategory[] = [
  {
    category: "基础类",
    questions: ["你如何理解 AI 产品经理？", "AI 产品经理和传统产品经理有什么区别？", "你如何做需求分析？", "如何判断一个需求是否值得做成 AI 功能？"],
  },
  {
    category: "AI 产品类",
    questions: ["如何设计一个 AI 聊天助手？", "如何评估 AI 回答质量？", "RAG 是什么？", "Agent 产品适合什么场景？", "如何降低大模型调用成本？"],
  },
  {
    category: "项目类",
    questions: ["介绍一个你做过的 AI 产品项目", "项目中你如何和技术协作？", "如何判断 AI 功能是否真的有价值？", "上线后发现回答质量差，你会怎么排查？"],
  },
  {
    category: "商业化类",
    questions: ["AI 产品如何定价？", "如何设计积分消耗体系？", "如何提升用户留存？", "如何平衡模型成本和用户体验？"],
  },
];
