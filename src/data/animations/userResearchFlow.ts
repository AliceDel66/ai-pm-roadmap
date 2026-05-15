import type { StepsAnimationDefinition } from "../../components/animations/animationTypes";

export const userResearchFlow: StepsAnimationDefinition = {
  id: "user-research-flow",
  type: "steps",
  title: "用户调研流程",
  description: "从调研目标到需求洞察，帮助新手理解 AI 产品机会不是凭空想出来的。",
  tags: ["用户调研", "访谈", "AI 机会点"],
  why: "AI 产品容易被技术能力牵着走，用户调研能把团队拉回真实任务、真实痛点和真实约束。",
  hint: "建议学习者按这个流程完成一份用户访谈提纲和痛点机会表。",
  data: {
    autoPlay: false,
    interval: 4500,
    steps: [
      {
        id: "goal",
        title: "确定调研目标",
        description: "明确这次调研要回答什么产品问题。",
        example: "不是泛泛地问“你想不想用 AI 客服”，而是验证“重复咨询中哪些问题适合由 AI 先回答”。",
        pmNote: "目标要能指导访谈对象、问题设计和输出物，否则调研会变成聊天记录。",
      },
      {
        id: "participants",
        title: "选择访谈对象",
        description: "选择真正经历过任务的人，而不是只听管理者转述。",
        example: "智能客服项目要访谈一线客服、客服主管、高频咨询用户和知识库维护者。",
        pmNote: "样本要覆盖不同角色和频次，避免只采访最配合或最资深的用户。",
      },
      {
        id: "guide",
        title: "设计访谈提纲",
        description: "围绕任务过程提问，少问假设性喜好，多问事实和案例。",
        example: "请回忆最近一次处理退换货咨询，从用户提问到你给出答案，每一步做了什么？",
        pmNote: "AI 场景下要额外问判断依据、失败后果、人工兜底和用户能否接受机器建议。",
      },
      {
        id: "quotes",
        title: "收集用户原话",
        description: "记录用户实际表达和具体案例。",
        example: "用户说“我不是不想用系统，是规则太多，我不知道哪条能用”。这比“系统不好用”更有价值。",
        pmNote: "原话能帮助团队理解情绪和语境，但不能直接等同于产品需求。",
      },
      {
        id: "tasks",
        title: "识别真实任务",
        description: "从用户表达中还原他真正要完成的工作。",
        example: "客服不是想要“一个更聪明的机器人”，而是想快速确认某类售后问题能不能承诺退款。",
        pmNote: "真实任务要写成触发条件、输入、动作、输出和成功标准。",
      },
      {
        id: "pain-points",
        title: "提炼痛点",
        description: "找出流程中高频、耗时、易错或风险高的阻塞点。",
        example: "同一政策散落在多个文档里，人工查找平均 3 分钟，错答会导致投诉。",
        pmNote: "痛点需要有频次、影响和证据，避免把个人偏好包装成普遍需求。",
      },
      {
        id: "ai-opportunity",
        title: "判断 AI 机会点",
        description: "判断 AI 适合检索、生成、分类、总结、推荐还是执行。",
        example: "高频政策查询适合 RAG 检索，涉及退款承诺的高风险问题需要人工确认。",
        pmNote: "不是所有痛点都适合 AI，规则明确、风险低、数据可用的任务更适合作为 MVP。",
      },
      {
        id: "insight",
        title: "输出需求洞察",
        description: "把调研发现转成产品机会、边界和下一步验证计划。",
        example: "输出一张痛点机会表：场景、用户原话、频次、风险、AI 介入方式、MVP 建议。",
        pmNote: "洞察要能进入 PRD、原型和评估指标，不能停留在“用户反馈汇总”。",
      },
    ],
  },
};
