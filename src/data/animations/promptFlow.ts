import type { StepsAnimationDefinition } from "../../components/animations/animationTypes";

export const promptFlow: StepsAnimationDefinition = {
  id: "prompt-flow",
  type: "steps",
  title: "Prompt 设计流程",
  description: "把一句模糊指令变成可复用、可测试、可迭代的产品能力。",
  tags: ["Prompt", "输出控制", "评估迭代"],
  why: "Prompt 是 AI 产品的行为规则之一，产品经理需要把它设计成可复用模板，而不是临时写一句话。",
  hint: "每一步都包含示例和产品经理注意事项，适合直接转化为 Prompt 评审清单。",
  data: {
    autoPlay: false,
    interval: 4500,
    steps: [
      {
        id: "goal",
        title: "定义任务目标",
        description: "先说明 Prompt 要帮助用户完成哪类任务，以及成功结果长什么样。",
        example: "目标不是“写得更好”，而是“根据商品卖点生成 3 条适合小红书风格的种草文案，每条 80 字以内”。",
        pmNote: "目标要绑定真实用户任务、输出标准和业务指标，否则后续测试只能靠主观感受。",
      },
      {
        id: "role",
        title: "明确角色",
        description: "给模型设定任务角色，让输出语气、专业深度和判断角度更稳定。",
        example: "你是一名有 5 年经验的电商内容运营，擅长把产品卖点转成用户能理解的购买理由。",
        pmNote: "角色不是越夸张越好，要和产品场景匹配，避免虚构权威或诱导不合规输出。",
      },
      {
        id: "context",
        title: "补充上下文",
        description: "把用户输入、业务背景、目标人群、已有资料和限制条件放进 Prompt。",
        example: "产品是便携咖啡杯，目标人群是通勤白领，卖点是防漏、保温、可单手开盖。",
        pmNote: "上下文应结构化采集，产品上可以通过表单、模板或历史记录降低用户输入成本。",
      },
      {
        id: "format",
        title: "规定输出格式",
        description: "明确输出字段、顺序、长度、语言、表格或 JSON 等格式。",
        example: "请输出为 Markdown 表格，字段包含标题、正文、适用场景、风险提示。",
        pmNote: "格式要求会影响前端展示和后端解析，必须和产品页面、接口和验收标准一致。",
      },
      {
        id: "constraints",
        title: "加入约束条件",
        description: "说明哪些内容不能出现、哪些规则必须遵守、什么时候要拒答或转人工。",
        example: "不得承诺治疗效果，不得使用真实品牌 Logo，不确定时必须提示需要人工确认。",
        pmNote: "约束要覆盖合规、隐私、品牌口径、成本和用户安全，不能只关注语言风格。",
      },
      {
        id: "examples",
        title: "提供示例",
        description: "用正例和反例帮助模型理解理想输出和不合格输出。",
        example: "正例展示一条可用文案；反例说明“过度承诺、缺少卖点、语气不符合渠道”的问题。",
        pmNote: "示例要来自通用或虚构场景，不复制第三方文案，避免版权和品牌风险。",
      },
      {
        id: "test",
        title: "测试输出",
        description: "用不同输入样本测试 Prompt 的稳定性、边界和失败场景。",
        example: "分别测试信息完整、信息缺失、敏感表达、超长输入和低质量输入。",
        pmNote: "产品经理要准备测试集，并记录输出质量、失败原因和用户是否能采纳。",
      },
      {
        id: "iterate",
        title: "根据结果迭代",
        description: "根据测试和线上反馈调整 Prompt 版本。",
        example: "如果模型经常遗漏风险提示，就把风险字段前置，并增加不确定时的兜底话术。",
        pmNote: "Prompt 应有版本号、变更原因、影响范围和回滚方案，不能在线上随意改动。",
      },
    ],
  },
};
