import type { ToolCategory } from "./types";

export const toolCategories: ToolCategory[] = [
  {
    category: "AI 工具",
    tools: [
      { name: "ChatGPT", purpose: "通用对话、分析、写作和 Prompt 迭代", usage: "用于快速生成方案初稿、模拟用户访谈、改写 PRD 和测试 Prompt 效果。", priority: "优先", url: "https://chatgpt.com/" },
      { name: "Claude", purpose: "长文档理解、结构化分析和产品文档润色", usage: "适合处理长 PRD、竞品材料、访谈纪要和复杂推理任务。", priority: "优先", url: "https://claude.ai/" },
      { name: "Gemini", purpose: "多模态理解和 Google 生态协作", usage: "用于图片、文档、表格混合输入场景的分析与验证。", priority: "建议", url: "https://gemini.google.com/" },
      { name: "Perplexity", purpose: "资料检索和带来源研究", usage: "用于行业趋势、竞品背景、岗位要求和市场信息收集。", priority: "优先", url: "https://www.perplexity.ai/" },
      { name: "Midjourney", purpose: "高质量视觉创意生成", usage: "用于探索 AI 生图产品模板、风格参考和营销素材方向。", priority: "建议", url: "https://www.midjourney.com/" },
      { name: "Sora", purpose: "视频生成与多模态内容探索", usage: "了解视频生成工作流，为多模态产品规划做概念验证。", priority: "了解", url: "https://sora.com/" },
      { name: "Cursor", purpose: "AI 编程与原型实现", usage: "用于快速搭建可交互 Demo，理解前后端和 API 接入。", priority: "优先", url: "https://www.cursor.com/" },
      { name: "GitHub Copilot", purpose: "代码补全和工程协作", usage: "帮助阅读代码、生成小工具和理解研发协作流程。", priority: "建议", url: "https://github.com/features/copilot" },
    ],
  },
  {
    category: "产品工具",
    tools: [
      { name: "Figma", purpose: "原型和界面设计", usage: "制作低保真与高保真原型，表达 AI 输入、生成、反馈和异常状态。", priority: "优先", url: "https://www.figma.com/" },
      { name: "FigJam", purpose: "流程图、脑图和协作白板", usage: "画用户路径、RAG 流程、Agent 编排和项目排期。", priority: "优先", url: "https://www.figma.com/figjam/" },
      { name: "Axure", purpose: "复杂交互原型", usage: "适合企业后台、表单联动和权限流程较复杂的产品。", priority: "建议", url: "https://www.axure.com/" },
      { name: "Notion", purpose: "知识管理和作品集", usage: "沉淀学习笔记、PRD、复盘和作品集页面。", priority: "优先", url: "https://www.notion.com/" },
      { name: "Miro", purpose: "团队协作与流程梳理", usage: "用于工作坊、需求共创和复杂系统图梳理。", priority: "建议", url: "https://miro.com/" },
      { name: "飞书", purpose: "文档、项目和团队沟通", usage: "写 PRD、同步会议纪要、管理需求和评审记录。", priority: "优先", url: "https://www.feishu.cn/" },
      { name: "TAPD", purpose: "研发项目管理", usage: "管理需求、缺陷、迭代和测试验收。", priority: "建议", url: "https://www.tapd.cn/" },
      { name: "Jira", purpose: "敏捷项目管理", usage: "理解 Story、Sprint、看板和跨团队协作流程。", priority: "建议", url: "https://www.atlassian.com/software/jira" },
    ],
  },
  {
    category: "数据分析工具",
    tools: [
      { name: "Google Analytics", purpose: "网站访问和转化分析", usage: "分析官网流量来源、注册转化和用户行为路径。", priority: "建议", url: "https://analytics.google.com/" },
      { name: "Mixpanel", purpose: "事件分析和留存分析", usage: "追踪 AI 功能使用、生成次数、采纳率和留存分群。", priority: "优先", url: "https://mixpanel.com/" },
      { name: "神策数据", purpose: "国内常用用户行为分析", usage: "用于埋点设计、漏斗分析和用户分群。", priority: "建议", url: "https://www.sensorsdata.cn/" },
      { name: "Excel", purpose: "基础数据处理和成本测算", usage: "做 Token 成本、套餐毛利、竞品价格和项目排期表。", priority: "优先", url: "https://www.microsoft.com/microsoft-365/excel" },
      { name: "SQL", purpose: "查询业务数据", usage: "理解表结构、漏斗数据和功能使用行为。", priority: "建议", url: "https://www.postgresql.org/docs/current/tutorial-sql.html" },
      { name: "Python 基础分析", purpose: "批量处理和可视化", usage: "用于简单数据清洗、日志分析和评估样本处理。", priority: "了解", url: "https://www.python.org/" },
    ],
  },
  {
    category: "技术协作工具",
    tools: [
      { name: "Postman", purpose: "接口调试", usage: "理解请求、响应、鉴权、错误码和接口边界。", priority: "优先", url: "https://www.postman.com/" },
      { name: "Swagger", purpose: "接口文档", usage: "和研发确认字段、状态码、调试示例和版本变更。", priority: "优先", url: "https://swagger.io/" },
      { name: "GitHub", purpose: "代码仓库和协作", usage: "阅读 Issue、PR、Release，理解研发工作流。", priority: "建议", url: "https://github.com/" },
      { name: "Docker", purpose: "环境和服务容器化", usage: "理解知识库、向量库、后端服务本地部署的基本概念。", priority: "了解", url: "https://www.docker.com/" },
      { name: "API 文档", purpose: "模型和业务接口说明", usage: "判断模型能力、参数限制、调用成本和错误处理。", priority: "优先", url: "https://developer.mozilla.org/docs/Web/HTTP" },
      { name: "数据库设计工具", purpose: "字段和关系建模", usage: "表达会话、消息、知识库、权限、用量和支付数据关系。", priority: "建议", url: "https://dbdiagram.io/" },
    ],
  },
];
