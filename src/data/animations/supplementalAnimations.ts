import type { StepsAnimationDefinition } from "../../components/animations/animationTypes";

export const competitiveAnalysisFlow: StepsAnimationDefinition = {
  id: "competitive-analysis-flow",
  type: "steps",
  title: "竞品分析流程",
  description: "把竞品从“功能对比”推进到用户任务、AI 能力、商业约束和机会点判断。",
  tags: ["竞品分析", "产品策略", "作品集"],
  why: "AI 产品竞品分析不能只截图列功能，学习者需要看到竞品如何解决任务、控制风险并形成差异化。",
  data: {
    autoPlay: false,
    interval: 4400,
    steps: [
      { id: "scope", title: "确定分析范围", description: "先明确要比较的产品类型、用户任务和分析目的。", example: "例如只分析知识库问答产品的检索、引用和反馈链路，而不是泛泛比较所有 AI 工具。", pmNote: "范围越清楚，后续结论越容易转化为产品取舍。" },
      { id: "journey", title: "还原用户路径", description: "记录用户从进入产品、输入任务、等待结果到采纳反馈的完整流程。", example: "把注册、模板选择、输入字段、生成状态、结果编辑和导出都拆出来。", pmNote: "不要只看功能清单，要看竞品如何降低用户完成任务的成本。" },
      { id: "capability", title: "拆解 AI 能力", description: "分析竞品使用了生成、检索、多模态、工具调用还是自动化工作流。", example: "RAG 产品要看文档导入、切片、召回、重排、引用和权限过滤。", pmNote: "能力拆解要连接到体验和风险，不能停在技术名词。" },
      { id: "metrics", title: "比较价值指标", description: "从效率、质量、成本、信任和商业化角度判断竞品价值。", example: "记录是否提供引用来源、历史记录、团队套餐、使用限额和反馈入口。", pmNote: "指标能帮助你说明为什么某个设计值得学习或避免。" },
      { id: "opportunity", title: "输出机会点", description: "把观察转成可执行建议，说明第一版可以做什么、暂缓什么。", example: "如果竞品都忽略低置信度提示，你可以把可信度和人工兜底作为差异化机会。", pmNote: "机会点必须服务目标用户，不要为了差异化而差异化。" },
    ],
  },
};

export const prdWritingFlow: StepsAnimationDefinition = {
  id: "prd-writing-flow",
  type: "steps",
  title: "AI 产品 PRD 写作流程",
  description: "把 AI 产品想法写成研发、算法、测试和运营都能执行的需求文档。",
  tags: ["PRD", "需求文档", "验收标准"],
  why: "AI 产品 PRD 的难点不在页面描述，而在模型行为、数据依赖、失败兜底和评估标准。",
  data: {
    autoPlay: false,
    interval: 4500,
    steps: [
      { id: "background", title: "写清背景与目标", description: "说明业务为什么需要这个 AI 能力，以及要改善哪个用户任务。", example: "目标不是“接入大模型”，而是把制度查询时间从 8 分钟降到 1 分钟。", pmNote: "背景要能支撑 MVP 范围和指标。" },
      { id: "scope", title: "定义 MVP 范围", description: "列出本期做什么、不做什么、后续再做什么。", example: "V1 做问答、引用、反馈和日志，不做复杂多租户计费。", pmNote: "AI 需求很容易膨胀，范围是保护交付质量的工具。" },
      { id: "interaction", title: "描述页面与流程", description: "写清入口、输入、状态、结果展示、反馈和异常处理。", example: "生成中、低置信度、无引用、超时和转人工都要有状态。", pmNote: "不要只画理想主流程，异常流程往往决定可用性。" },
      { id: "ai", title: "定义 AI 能力", description: "说明 Prompt、上下文、知识库、模型、工具调用和输出格式。", example: "回答必须包含结论、依据、引用来源和不确定提示。", pmNote: "这部分是 AI PRD 与传统 PRD 的主要差异。" },
      { id: "acceptance", title: "补齐验收标准", description: "定义效果、成本、速度、安全、日志和数据指标。", example: "答案采纳率、引用命中率、平均响应时长和单次成本都要可追踪。", pmNote: "能生成不等于能上线，验收标准要能判断是否值得发布。" },
    ],
  },
};

export const prototypeFlow: StepsAnimationDefinition = {
  id: "prototype-flow",
  type: "steps",
  title: "AI 产品原型与流程设计",
  description: "从用户任务出发，把输入、生成、结果、反馈和异常状态画成可评审原型。",
  tags: ["原型", "用户流程", "状态设计"],
  data: {
    steps: [
      { id: "task", title: "确定核心任务", description: "先选择一个最关键的用户任务，避免原型覆盖过多边缘需求。", example: "知识库问答先保证提问、答案、引用和反馈闭环。", pmNote: "原型不是页面拼贴，它要证明用户能完成任务。" },
      { id: "input", title: "设计输入结构", description: "决定哪些信息用户填写，哪些由系统自动补全。", example: "用模板、示例和必填字段降低空输入与歧义。", pmNote: "AI 输出质量常常取决于输入是否被产品化。" },
      { id: "state", title: "补齐过程状态", description: "展示加载、生成中、停止、重试、失败、低置信度和人工兜底。", example: "流式生成时允许停止，并保留已经生成的部分结果。", pmNote: "状态越完整，研发和测试越容易识别边界。" },
      { id: "feedback", title: "设计反馈闭环", description: "让用户可以标记有用、无用、原因和修正建议。", example: "反馈进入运营看板和评估样本，支撑后续迭代。", pmNote: "没有反馈入口，AI 产品上线后很难变好。" },
    ],
  },
};

export const aiProductLifecycleFlow: StepsAnimationDefinition = {
  id: "ai-product-lifecycle-flow",
  type: "steps",
  title: "AI 产品从需求到上线流程",
  description: "展示 AI 产品经理如何把模糊诉求推进到可验证、可上线、可迭代的产品方案。",
  tags: ["完整流程", "项目推进", "AI PM"],
  data: {
    steps: [
      { id: "discover", title: "发现真实任务", description: "通过调研和数据确认用户要完成什么，以及当前流程卡在哪里。", example: "不要从“做 AI 助手”开始，而是从重复咨询、文档查询或内容生产任务开始。", pmNote: "真实任务是判断 AI 是否适合介入的基础。" },
      { id: "define", title: "定义产品方案", description: "明确目标用户、MVP 范围、AI 能力、页面流程和风险边界。", example: "把检索、生成、引用、反馈和人工兜底写成一条闭环。", pmNote: "方案要同时让业务、研发、算法和测试能理解。" },
      { id: "build", title: "协作实现与验收", description: "跟进接口、模型、数据、Prompt、日志、成本和测试样本。", example: "上线前用真实样本验证准确率、响应时长、异常状态和安全策略。", pmNote: "AI 项目要把不确定性前置管理。" },
      { id: "launch", title: "上线观察与迭代", description: "通过使用、效果、成本、风险和反馈指标判断是否继续投入。", example: "根据采纳率、人工介入率和知识缺口迭代 Prompt 与知识库。", pmNote: "上线只是学习循环的开始。" },
    ],
  },
};

export const modelEvaluationFlow: StepsAnimationDefinition = {
  id: "model-evaluation-flow",
  type: "steps",
  title: "模型与 AI 功能评估流程",
  description: "把主观的“效果不错”转成样本、指标、评分和上线门槛。",
  tags: ["模型评估", "上线验收", "质量指标"],
  data: {
    steps: [
      { id: "samples", title: "准备评估样本", description: "收集真实问题、边界问题、失败样本和高风险样本。", example: "智能客服至少包含退款、发票、课程咨询、投诉和转人工场景。", pmNote: "样本要覆盖真实业务，而不是只挑模型擅长的问题。" },
      { id: "rubric", title: "定义评分标准", description: "拆成准确性、完整性、可读性、安全性、引用和业务可用性。", example: "RAG 回答必须同时看答案是否正确和引用是否命中。", pmNote: "评分标准要能被人工评审和自动统计复用。" },
      { id: "compare", title: "对比模型与版本", description: "比较不同模型、Prompt、知识库和参数的表现。", example: "记录效果、时延、成本和失败类型，不只看单次最佳回答。", pmNote: "产品经理要为取舍提供证据。" },
      { id: "gate", title: "设定上线门槛", description: "定义达到什么指标可以灰度，什么问题必须阻断上线。", example: "高风险问题转人工率达到 95% 后再扩大流量。", pmNote: "门槛让 AI 功能从演示走向可靠交付。" },
    ],
  },
};

export const metricsAnalysisFlow: StepsAnimationDefinition = {
  id: "metrics-analysis-flow",
  type: "steps",
  title: "AI 产品指标分析流程",
  description: "从使用、效果、成本、风险和留存五类指标判断 AI 功能是否真的有效。",
  tags: ["数据指标", "效果分析", "运营看板"],
  data: {
    steps: [
      { id: "usage", title: "看真实使用", description: "先确认用户是否进入核心任务并完成有效操作。", example: "有效任务完成数比单纯访问量更能说明价值。", pmNote: "调用量高不代表用户获得了结果。" },
      { id: "quality", title: "看结果质量", description: "评估采纳率、满意度、准确率、引用命中和人工修改次数。", example: "如果复制率高但投诉也高，说明质量指标还不完整。", pmNote: "AI 产品必须同时看可用性与可信度。" },
      { id: "cost", title: "看成本结构", description: "统计单次任务成本、模型成本、缓存命中和高频用户消耗。", example: "用成本指标决定是否做限额、缓存、降级或套餐。", pmNote: "成本不是财务后置问题，而是产品设计约束。" },
      { id: "risk", title: "看风险与反馈", description: "追踪高风险拦截、转人工、失败原因和用户反馈闭环。", example: "把反馈原因沉淀为 Prompt、知识库和流程优化任务。", pmNote: "没有反馈闭环，指标只能看热闹，不能指导迭代。" },
    ],
  },
};

export const riskComplianceFlow: StepsAnimationDefinition = {
  id: "risk-compliance-flow",
  type: "steps",
  title: "AI 产品风险与合规流程",
  description: "识别隐私、越权、幻觉、违规内容和错误执行，并设计产品兜底。",
  tags: ["风险", "合规", "安全"],
  data: {
    steps: [
      { id: "identify", title: "识别风险场景", description: "列出可能出错、越权、泄露、误导或产生合规问题的环节。", example: "客服、财务、医疗、合同和外部工具执行都属于高风险区域。", pmNote: "风险要在需求阶段识别，不要等上线后补救。" },
      { id: "classify", title: "分级处理策略", description: "按风险等级决定自动回答、提示确认、拦截或转人工。", example: "低风险问题可直接回答，高风险承诺必须转人工。", pmNote: "不是所有问题都适合自动化。" },
      { id: "guardrail", title: "设计防护规则", description: "定义权限、敏感信息、内容安全、引用来源和人工审批。", example: "RAG 需要权限过滤，Agent 需要工具调用审批。", pmNote: "防护规则要能写进 PRD 和验收用例。" },
      { id: "audit", title: "记录与复盘", description: "保存请求、输出、拦截、人工处理和用户反馈，用于追踪和优化。", example: "风险日志帮助定位 Prompt、知识库、权限或业务规则问题。", pmNote: "可审计是 AI 产品获得信任的重要条件。" },
    ],
  },
};

export const costOptimizationFlow: StepsAnimationDefinition = {
  id: "cost-optimization-flow",
  type: "steps",
  title: "AI 产品成本优化流程",
  description: "从模型、上下文、缓存、限额和套餐设计控制 AI 产品的持续成本。",
  tags: ["模型成本", "商业化", "运营"],
  data: {
    steps: [
      { id: "measure", title: "先量化成本", description: "按用户、场景、模型、Token 和时间统计调用成本。", example: "把单次任务成本和用户套餐收入放在同一张表里。", pmNote: "没有成本数据，就无法判断商业模式是否成立。" },
      { id: "reduce", title: "减少无效消耗", description: "通过输入校验、上下文截断、缓存和任务合并降低浪费。", example: "重复制度问题可以优先命中缓存或知识库摘要。", pmNote: "省成本不能牺牲关键场景的质量。" },
      { id: "tier", title: "设计分层策略", description: "不同场景使用不同模型、限额、速度和质量策略。", example: "普通任务用低成本模型，高价值任务用高质量模型。", pmNote: "模型选择是产品策略，不只是技术配置。" },
      { id: "monitor", title: "持续监控异常", description: "设置成本预警、调用峰值、失败重试和异常用户监控。", example: "发现循环调用或恶意刷量时及时限流。", pmNote: "成本监控也是风险控制。" },
    ],
  },
};

export const growthRetentionFlow: StepsAnimationDefinition = {
  id: "growth-retention-flow",
  type: "steps",
  title: "AI 产品增长与留存流程",
  description: "从首次体验、价值触达、复用习惯和持续反馈设计 AI 产品增长闭环。",
  tags: ["增长", "留存", "运营"],
  data: {
    steps: [
      { id: "activation", title: "缩短首次价值时间", description: "让用户尽快完成一次高质量任务，而不是先学习复杂配置。", example: "提供模板、示例输入和一键试用，降低第一步成本。", pmNote: "AI 产品的首次惊喜要和真实任务相关。" },
      { id: "habit", title: "沉淀复用场景", description: "把高频任务做成模板、历史、收藏和团队共享。", example: "用户再次进入时能继续上次任务或复用优秀结果。", pmNote: "留存来自持续任务，而不是一次性新鲜感。" },
      { id: "segment", title: "分层运营用户", description: "按角色、场景、使用频次和价值贡献设计不同运营动作。", example: "对高价值团队提供管理看板，对新手提供示例和引导。", pmNote: "不同用户对 AI 的信任门槛不同。" },
      { id: "iterate", title: "用反馈驱动迭代", description: "把采纳率、失败原因、模板使用和成本数据转成产品实验。", example: "针对低采纳模板优化输入字段和 Prompt。", pmNote: "增长不是只拉新，还要让能力持续变好。" },
    ],
  },
};

export const databaseDesignFlow: StepsAnimationDefinition = {
  id: "database-design-flow",
  type: "steps",
  title: "AI 产品数据结构设计流程",
  description: "理解会话、消息、任务、反馈、配置和日志如何支撑 AI 产品运行。",
  tags: ["数据库", "数据结构", "技术协作"],
  data: {
    steps: [
      { id: "entity", title: "识别核心对象", description: "列出用户、会话、消息、任务、结果、反馈、模板和知识库等对象。", example: "聊天助手至少需要会话表、消息表、反馈表和 Prompt 版本表。", pmNote: "对象不清，接口和埋点也会混乱。" },
      { id: "state", title: "定义状态字段", description: "给任务、生成、审核、转人工和失败原因设计状态。", example: "queued、running、failed、completed、handoff 都对应不同页面提示。", pmNote: "状态字段决定用户能否理解系统正在发生什么。" },
      { id: "relation", title: "梳理关联关系", description: "说明哪些数据属于用户、团队、知识库、项目或模板版本。", example: "RAG 答案需要关联问题、召回片段、引用文档和用户反馈。", pmNote: "关联关系影响权限、追溯和复盘。" },
      { id: "audit", title: "保留日志与权限", description: "设计调用日志、成本日志、错误日志和权限字段。", example: "记录模型、Token、耗时、错误码和风险拦截结果。", pmNote: "AI 产品必须可追踪，尤其是成本和风险。" },
    ],
  },
};

export const logsMonitoringFlow: StepsAnimationDefinition = {
  id: "logs-monitoring-flow",
  type: "steps",
  title: "日志、监控与成本统计流程",
  description: "让 AI 产品上线后能定位问题、控制成本并持续优化。",
  tags: ["日志", "监控", "成本"],
  data: {
    steps: [
      { id: "capture", title: "记录关键日志", description: "保存请求、响应、模型、Token、耗时、错误码和用户反馈。", example: "不要记录不必要的敏感内容，必要时做脱敏。", pmNote: "日志既要能排查问题，也要控制隐私风险。" },
      { id: "monitor", title: "监控运行状态", description: "观察成功率、超时、限流、断流、模型失败和异常峰值。", example: "流式响应要单独监控断流和停止生成。", pmNote: "监控指标要对应用户真实体验。" },
      { id: "cost", title: "统计成本消耗", description: "按用户、模型、场景、模板和时间维度统计费用。", example: "把成本和采纳率结合，判断哪些场景值得投入。", pmNote: "高成本不是问题，低价值高成本才是问题。" },
      { id: "action", title: "形成迭代动作", description: "根据日志把问题分给 Prompt、知识库、模型、接口或产品流程。", example: "把失败原因沉淀成下一轮需求池和评估样本。", pmNote: "监控的终点是行动，不是看板。" },
    ],
  },
};

export const portfolioBuildingFlow: StepsAnimationDefinition = {
  id: "portfolio-building-flow",
  type: "steps",
  title: "AI 产品经理作品集整理流程",
  description: "把课程练习、项目材料和复盘整理成面试官能快速理解的作品集。",
  tags: ["作品集", "面试", "职业发展"],
  data: {
    steps: [
      { id: "select", title: "选择代表项目", description: "选择一个能体现业务判断、AI 能力、协作和指标的完整项目。", example: "RAG 知识库、智能客服或 Agent 工作流都适合作为主项目。", pmNote: "不要堆很多浅案例，一个完整案例更有说服力。" },
      { id: "story", title: "讲清项目故事", description: "用背景、用户、痛点、目标、方案、结果和复盘组织内容。", example: "每一页都回答“为什么这样设计”。", pmNote: "作品集展示的是判断过程，不是页面截图合集。" },
      { id: "evidence", title: "放入关键证据", description: "展示调研、需求拆解、PRD、流程图、Prompt、指标和风险取舍。", example: "用一张表说明 MVP 做什么、不做什么和原因。", pmNote: "证据能证明你真的理解产品落地。" },
      { id: "review", title: "准备讲述版本", description: "把完整材料压缩成 3 分钟、10 分钟和深挖问答三个版本。", example: "面试时先讲主线，再根据追问展开技术协作或指标细节。", pmNote: "能讲清取舍，比材料长度更重要。" },
    ],
  },
};