import type { StepsAnimationDefinition } from "../../components/animations/animationTypes";

export const requirementAnalysisFlow: StepsAnimationDefinition = {
  id: "requirement-analysis-flow",
  type: "steps",
  title: "需求分析流程",
  description: "把用户表达一步步转成可交付、可验收、可迭代的 AI 产品需求。",
  tags: ["需求分析", "MVP", "验收标准"],
  why: "AI 产品需求必须同时说清用户价值、模型边界、数据条件和失败兜底，否则研发和业务很容易理解不一致。",
  hint: "可以把这套流程用于 PRD 前置分析，尤其适合从访谈记录整理需求池。",
  data: {
    autoPlay: false,
    interval: 4500,
    steps: [
      {
        id: "collect",
        title: "收集用户表达",
        description: "整理访谈、工单、群聊、客服记录和业务方诉求。",
        example: "用户说“能不能让 AI 自动回复客户”，业务方说“希望减少重复咨询”。",
        pmNote: "先保留原话和来源，不要急着改写成解决方案。",
      },
      {
        id: "task",
        title: "拆解用户任务",
        description: "把表达拆成用户要完成的真实任务。",
        example: "任务不是“自动回复”，而是“在客户问退货政策时快速给出准确答复”。",
        pmNote: "任务拆解要包含触发条件、输入材料、当前动作、输出结果和成功标准。",
      },
      {
        id: "current-flow",
        title: "识别当前流程",
        description: "还原没有 AI 时用户如何完成任务。",
        example: "客户提问后，客服复制关键词、查制度文档、询问主管、再手动回复。",
        pmNote: "当前流程越清楚，AI 介入点和替代成本越容易判断。",
      },
      {
        id: "pain",
        title: "定位痛点",
        description: "找出流程中的耗时、错误、重复、风险和体验问题。",
        example: "查找制度耗时长、口径不一致、夜间无人确认、错误承诺带来投诉。",
        pmNote: "痛点需要和数据或案例绑定，避免只写“效率低、体验差”。",
      },
      {
        id: "fit",
        title: "判断 AI 适配性",
        description: "判断 AI 是否适合解决这个痛点，以及适合做哪类能力。",
        example: "知识查询适合 RAG，退款审批不适合全自动执行，应保留人工确认。",
        pmNote: "适配性要看数据可用、风险等级、输出可验证、成本和用户接受度。",
      },
      {
        id: "requirement",
        title: "定义产品需求",
        description: "把任务、痛点和 AI 介入方式写成产品需求。",
        example: "系统应在用户咨询退货政策时，基于知识库生成带引用来源的候选答复。",
        pmNote: "需求描述要避免“接入大模型”这种技术动作，重点写用户价值和产品行为。",
      },
      {
        id: "scope",
        title: "拆分功能范围",
        description: "明确 MVP 做什么、不做什么，以及后续版本如何扩展。",
        example: "V1 只支持高频政策问答和人工确认，不支持自动退款、不支持跨系统下单。",
        pmNote: "范围边界能保护团队节奏，也能降低 AI 输出不稳定带来的上线风险。",
      },
      {
        id: "acceptance",
        title: "确定验收标准",
        description: "把需求转成研发、测试、业务都能判断的标准。",
        example: "Top 50 高频问题命中率达到 85%，答案必须展示来源，低置信度必须转人工。",
        pmNote: "AI 需求验收要包含效果、体验、成本、风险和日志，而不只是页面是否完成。",
      },
    ],
  },
};
