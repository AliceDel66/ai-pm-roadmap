import type { CompareAnimationDefinition } from "../../components/animations/animationTypes";

export const traditionalPmVsAiPm: CompareAnimationDefinition = {
  id: "traditional-pm-vs-ai-pm",
  type: "compare",
  title: "传统产品经理 vs AI 产品经理",
  description: "对比两类岗位在问题定义、能力边界、技术协作和评估方式上的差异。",
  tags: ["岗位认知", "能力模型", "AI PM"],
  why: "新手最容易把 AI 产品经理理解成“会用 AI 的产品经理”，这个对比能帮助学习者看到真正变化的工作对象。",
  hint: "差异点不是为了制造岗位优劣，而是帮助学习者补齐 AI 场景下的新能力。",
  data: {
    leftTitle: "传统产品经理",
    rightTitle: "AI 产品经理",
    autoPlay: false,
    interval: 4600,
    points: [
      {
        id: "object",
        label: "工作对象",
        left: "主要围绕确定性功能、页面流程、业务规则和协作交付展开。",
        right: "除了功能和流程，还要管理模型能力、数据质量、Prompt、评估和不确定输出。",
        explanation: "AI 产品经理并不是只多学一个工具，而是要把概率性模型能力产品化，让用户在不确定输出中仍能完成任务。",
      },
      {
        id: "requirement",
        label: "需求表达",
        left: "常用用户故事、功能清单、原型和业务规则描述需求。",
        right: "需要额外说明输入输出、上下文、模型边界、失败兜底、人工确认和效果指标。",
        explanation: "AI 需求如果只写页面和按钮，研发很难知道模型应如何表现，测试也无法判断输出是否达标。",
      },
      {
        id: "collaboration",
        label: "技术协作",
        left: "重点协作前后端、设计、测试和业务方。",
        right: "还要与算法、数据、平台、内容安全和运营团队协作。",
        explanation: "AI 产品质量往往取决于数据、模型、Prompt、评估集和反馈闭环，协作边界更宽。",
      },
      {
        id: "metrics",
        label: "评估方式",
        left: "更常看转化率、留存、点击、完成率和业务指标。",
        right: "在业务指标之外，还要看准确性、召回率、幻觉率、采纳率、人工介入率和单次成本。",
        explanation: "AI 功能上线后需要持续评估，不能只看用户是否点击，还要看输出是否可信、可控、可持续。",
      },
    ],
  },
};

export const searchVsRag: CompareAnimationDefinition = {
  id: "search-vs-rag",
  type: "compare",
  title: "普通搜索 vs RAG",
  description: "对比关键词搜索和 RAG 在理解问题、组织证据和生成答案上的差异。",
  tags: ["搜索", "RAG", "知识库"],
  why: "很多学习者会把 RAG 简化成搜索，本对比帮助他们看到检索、生成和引用之间的产品关系。",
  data: {
    leftTitle: "普通搜索",
    rightTitle: "RAG",
    autoPlay: false,
    interval: 4600,
    points: [
      {
        id: "input",
        label: "输入理解",
        left: "通常依赖关键词匹配，用户需要自己想清楚搜索词。",
        right: "可以结合语义向量、问题改写和上下文理解用户意图。",
        explanation: "RAG 对用户更友好，但也要求产品经理设计问题预处理、权限过滤和低置信度提示。",
      },
      {
        id: "output",
        label: "输出形态",
        left: "返回一组文档或网页，用户自己打开、筛选和总结。",
        right: "基于召回片段生成直接答案，并附上引用来源。",
        explanation: "RAG 减少用户阅读成本，但必须展示依据，否则用户很难信任答案。",
      },
      {
        id: "risk",
        label: "风险重点",
        left: "主要风险是查不到、排序差或结果太多。",
        right: "风险还包括错误召回、幻觉生成、引用错配和越权回答。",
        explanation: "RAG 产品需要检索质量、生成质量和权限安全一起设计，不能只优化模型回答。",
      },
      {
        id: "metrics",
        label: "评价指标",
        left: "常看点击率、搜索成功率、零结果率和排序相关性。",
        right: "还要看答案准确率、引用命中率、采纳率、人工纠错率和知识缺口。",
        explanation: "产品经理要为 RAG 设计完整评估闭环，才能持续改进知识库和 Prompt。",
      },
    ],
  },
};

export const chatbotVsAgent: CompareAnimationDefinition = {
  id: "chatbot-vs-agent",
  type: "compare",
  title: "普通聊天机器人 vs Agent",
  description: "对比只回答问题的对话系统和能够规划、调用工具、执行任务的 Agent。",
  tags: ["Agent", "聊天机器人", "工具调用"],
  why: "理解这个差异，学习者才能判断什么时候需要 Agent，什么时候一个普通问答助手就足够。",
  data: {
    leftTitle: "普通聊天机器人",
    rightTitle: "Agent",
    autoPlay: false,
    interval: 4600,
    points: [
      {
        id: "goal",
        label: "目标范围",
        left: "主要根据用户输入生成回答或建议。",
        right: "面向一个目标，能够拆解任务、选择工具并持续执行。",
        explanation: "Agent 的产品设计要关注任务状态和执行边界，而不是只优化单轮回复质量。",
      },
      {
        id: "tools",
        label: "工具能力",
        left: "通常不直接操作外部系统，最多查询知识库。",
        right: "可以调用搜索、数据库、工单、表单、日历等工具。",
        explanation: "一旦涉及工具调用，就必须设计权限、审批、幂等、错误处理和日志。",
      },
      {
        id: "visibility",
        label: "过程可见性",
        left: "用户通常只看到最终回复。",
        right: "用户需要看到计划、当前步骤、调用结果和失败原因。",
        explanation: "可见性决定用户是否敢把多步骤任务交给 Agent。不可见的执行过程会降低信任。",
      },
      {
        id: "risk",
        label: "风险控制",
        left: "主要控制回答准确性、敏感内容和用户误解。",
        right: "还要控制越权执行、重复调用、成本循环和不可逆操作。",
        explanation: "Agent 不是聊天机器人升级版这么简单，它把产品风险从“说错话”扩展到“做错事”。",
      },
    ],
  },
};

export const traditionalPrdVsAiPrd: CompareAnimationDefinition = {
  id: "traditional-prd-vs-ai-prd",
  type: "compare",
  title: "传统 PRD vs AI 产品 PRD",
  description: "对比普通功能 PRD 与 AI 产品 PRD 在内容结构和验收标准上的差异。",
  tags: ["PRD", "AI 产品设计", "验收标准"],
  why: "AI 产品 PRD 需要把模型行为、数据依赖、质量评估和失败兜底写进需求，而不仅是页面交互。",
  data: {
    leftTitle: "传统 PRD",
    rightTitle: "AI 产品 PRD",
    autoPlay: false,
    interval: 4600,
    points: [
      {
        id: "scope",
        label: "范围描述",
        left: "围绕页面、流程、角色权限、字段和业务规则展开。",
        right: "还要描述模型能力、输入输出、Prompt、知识库、评估和人工兜底。",
        explanation: "AI PRD 要让研发、算法、测试和运营都能行动，不能只服务前后端开发。",
      },
      {
        id: "state",
        label: "状态设计",
        left: "常见状态包括加载、成功、失败、空数据和权限不足。",
        right: "还要包含生成中、低置信度、引用缺失、内容风险、模型超时和人工接管。",
        explanation: "AI 输出具有不确定性，状态设计越完整，用户体验和风险控制越稳。",
      },
      {
        id: "acceptance",
        label: "验收标准",
        left: "多以功能是否可用、页面是否符合设计稿、流程是否走通为主。",
        right: "需要验收准确率、采纳率、幻觉率、响应时长、成本、日志和安全边界。",
        explanation: "AI 功能“能生成”不等于“可上线”，验收必须包含效果和风险指标。",
      },
      {
        id: "iteration",
        label: "迭代闭环",
        left: "主要根据用户反馈和业务数据优化功能。",
        right: "还要根据样本、评估集、反馈原因、知识缺口和 Prompt 版本持续迭代。",
        explanation: "AI PRD 从第一版开始就要设计反馈闭环，否则上线后难以判断质量变化。",
      },
    ],
  },
};
