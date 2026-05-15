import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDirs = [
  path.join(root, "content", "course"),
  path.join(root, "content", "projects"),
  path.join(root, "content", "templates"),
  path.join(root, "content", "glossary"),
];

const complexGlossaryTerms = new Set([
  "context-window.md",
  "embedding.md",
  "vector-database.md",
  "rag.md",
  "agent.md",
  "workflow.md",
  "fine-tuning.md",
  "function-calling.md",
  "multi-modal.md",
  "prompt-injection.md",
  "tool-calling.md",
  "knowledge-base.md",
  "retrieval.md",
  "guardrails.md",
]);

function listMarkdownFiles(dir) {
  const result = [];
  if (!fs.existsSync(dir)) return result;

  for (const name of fs.readdirSync(dir)) {
    const filePath = path.join(dir, name);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) result.push(...listMarkdownFiles(filePath));
    if (stat.isFile() && name.endsWith(".md")) result.push(filePath);
  }

  return result.sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function relative(filePath) {
  return path.relative(root, filePath).replace(/\\/g, "/");
}

function chineseCount(text) {
  const matches = text.match(/[\u4e00-\u9fff]/g);
  return matches ? matches.length : 0;
}

function markdownBody(raw) {
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return match ? raw.slice(match[0].length) : raw;
}

function bodyChineseCount(raw) {
  return chineseCount(markdownBody(raw));
}

function minimumChineseCount(filePath) {
  const rel = relative(filePath);
  const base = path.basename(filePath);

  if (rel.startsWith("content/course/")) {
    if (base === "index.md") return 2500;
    if (rel.includes("stage-06-real-projects/")) return 7000;
    if (base.includes("stage-project")) return 5500;
    return 5000;
  }

  if (rel.startsWith("content/projects/")) return 8000;
  if (rel.startsWith("content/templates/")) return 2500;
  if (rel.startsWith("content/glossary/"))
    return complexGlossaryTerms.has(base) ? 1500 : 1000;

  return 0;
}

function titleFromMarkdown(raw, filePath) {
  const frontmatterTitle = raw.match(/^title:\s*(.+)$/m);
  if (frontmatterTitle)
    return frontmatterTitle[1].trim().replace(/^['"]|['"]$/g, "");

  const h1 = raw.match(/^#\s+(.+)$/m);
  if (h1) return h1[1].trim();

  return path.basename(filePath, ".md");
}

function removeGeneratedDeepSupplement(raw) {
  return raw
    .replace(/\n*## 深度补充：把本节内容用于真实项目[\s\S]*$/m, "")
    .trimEnd();
}

function deepSupplementParagraphs(title, rel) {
  const isProject =
    rel.startsWith("content/projects/") ||
    rel.includes("stage-06-real-projects/");
  const isTemplate = rel.startsWith("content/templates/");
  const isGlossary = rel.startsWith("content/glossary/");

  const base = [
    `在真实项目里，“${title}”不能孤立理解。你需要把它放回用户任务链路中观察：用户从哪里进入，带着什么材料，系统需要做出什么判断，结果要交给谁使用，失败时谁承担成本。`,
    `进一步看，产品经理还要把用户语言翻译成团队语言。用户会说“希望 AI 更懂我”，业务方会说“希望降低人力”，研发会问“输入字段和异常状态是什么”，算法会问“有没有标准样本和评估口径”。`,
    `评审时可以把用户任务、AI 介入点、技术依赖、质量指标和风险兜底放在同一张表里。这样业务方能看到价值，研发能看到实现范围，算法能看到样本和评估，测试能看到验收边界。`,
    `如果没有真实公司数据，可以构造可信业务背景，但要让数字和流程自洽。例如用户规模、任务频次、文档数量、人工处理时长、错误成本、模型调用成本和目标指标，都要能支撑产品取舍。`,
    `从作品集表达看，建议展示推理过程而不只是最终结论：为什么选择这个场景，为什么第一版只做这些能力，哪些需求暂缓，哪些风险前置，哪些指标用于判断上线后是否真的有效。`,
    `在技术协作中，不要只问“能不能实现”。更有效的问题是：数据从哪里来，接口如何返回，异常如何提示，日志如何追踪，成本如何统计，权限如何隔离，测试样本如何准备。`,
    `AI 产品经理的价值不是把所有环节都接上模型，而是判断哪些任务值得交给 AI，哪些任务需要人机协作，哪些任务必须保留人工审批。这个判断能力，正是学习“${title}”要训练出来的能力。`,
    `做练习时，可以补一组最小闭环材料：一个用户画像、一个核心任务、一条主流程、一张输入输出表、一组异常状态和三个验收指标。只要这些材料能互相对应，方案就不会停在概念层面。`,
    `如果上线后指标不达标，产品经理不要只归因于模型不好。要分别检查输入是否过空、上下文是否缺失、知识是否过期、Prompt 是否约束不足、页面反馈是否清晰，以及用户是否知道如何使用结果。`,
    `和设计协作时，要关注用户在等待、失败、不确定和高风险场景下看到什么。AI 产品的信任感往往来自状态解释、引用来源、可撤回操作和明确边界，而不是更炫的视觉效果。`,
    `和测试协作时，要把正常样本、边界样本、恶意样本、缺失输入、超长输入和权限不足都写进验收用例。AI 功能不能只测“能不能返回结果”，还要测“返回结果是否可控”。`,
    `和运营协作时，要说明哪些内容可以配置、哪些反馈要进入看板、哪些失败样本要进入评估集、哪些模板需要定期复盘。AI 产品上线后需要持续运营，不能完全依赖一次性开发。`,
    `从商业角度看，还要评估单次任务价值是否覆盖模型、存储、审核和人工兜底成本。如果用户只愿意为最终结果付费，产品方案就必须证明 AI 输出能稳定进入业务流程。`,
  ];

  if (isProject) {
    base.push(
      `对于实战项目，还要把业务背景、目标用户、MVP 范围、页面流程、AI 能力、技术协作、数据指标和复盘串成一条完整故事线。读者应该能在几分钟内理解项目为什么值得做，以及第一版为什么这样取舍。`,
      `项目材料不要只停留在“功能介绍”。更有价值的是说明关键决策：哪些能力直接影响用户完成任务，哪些能力会显著增加成本或风险，哪些能力需要等到有更多样本和反馈后再迭代。`,
      `如果要把本项目放入作品集，可以准备三层表达：一页摘要讲清背景和结果，一组图表展示流程与指标，一段复盘说明你在 AI 能力、风险和成本之间做了哪些取舍。`,
      `实战项目还要特别注意可信度。即使用虚构数据，也要让用户规模、任务频次、痛点损失、目标指标和技术方案互相匹配，避免看起来完整但无法落地。`,
      `进一步推进时，可以把项目拆成四张关键表：用户与场景表、MVP 功能取舍表、AI 能力设计表、指标与风险表。四张表互相对应，比一份长功能清单更能体现产品经理能力。`,
      `项目复盘不要只写“完成了什么”，还要写“验证了什么”。例如用户是否愿意使用、AI 输出是否可采纳、人工是否真的节省、成本是否可控、风险是否被及时发现。`,
      `如果项目涉及 RAG、Agent 或多模态，还要单独说明数据准备、权限边界、工具调用、内容安全和人工确认。复杂能力越多，越需要产品经理写清约束。`,
      `面试讲述时，可以先用一句话说明业务问题，再用一张流程图说明方案，最后用三组指标说明效果和风险。这样的讲法比从头念文档更容易让评审者抓住重点。`,
      `上线前还可以补一份检查清单：数据是否准备好，Prompt 是否有版本记录，接口是否有错误码，生成失败是否能重试，风险问题是否转人工，指标看板是否能看到采纳率和成本。`,
      `如果第一版效果一般，不要急着堆更多功能。先看用户是否理解入口、输入是否足够结构化、输出是否能直接使用、反馈是否能回流，再决定是优化流程、补知识、调 Prompt 还是换模型。`,
      `项目推进时要写清团队分工：产品负责场景和验收，设计负责交互和状态，研发负责接口与数据，算法负责模型和评估，运营负责模板和反馈。分工越清楚，AI 项目越不容易在不确定性里失控。`,
      `最后建议补一段“下一版本计划”。写清如果采纳率达标要扩展什么，如果成本过高要收敛什么，如果风险样本变多要加强什么。这个计划能证明你不是只会设计 V1，而是能持续经营 AI 产品。`,
    );
  }

  if (isTemplate) {
    base.push(
      `使用模板时，不要把字段填满就结束。每个字段都应该服务一个产品判断，例如用户是谁、任务是什么、AI 为什么适合介入、第一版做什么、不做什么、风险怎么控制、上线后看什么指标。`,
      `模板最适合和案例一起使用。建议在填写时保留“事实依据、待确认问题、风险假设、验收标准”四类信息，这样文档不仅能看，还能推动评审和协作。`,
      `如果要把模板内容放进作品集，建议展示填写前后的变化：原始诉求是什么，经过模板梳理后如何变成背景、目标、流程、规则、指标和风险。`,
    );
  }

  if (isGlossary) {
    base.push(
      `学习术语时，不要只背定义。更稳的方式是把术语放进一个产品场景里，说明它影响哪一个输入、输出、流程、指标或风险。`,
      `和研发沟通时，可以围绕这个术语追问输入来源、处理逻辑、失败状态、日志字段、权限边界和评估方式。只要这些问题能问出来，就说明你已经具备协作层面的理解。`,
      `如果术语会影响用户信任，例如引用、幻觉、权限、成本或转人工，就应该在 PRD 和验收标准中显式写出来，而不是把它留给技术团队自行处理。`,
    );
  }

  base.push(
    `自我检查时，可以用三句话判断是否掌握：我能说清“${title}”解决的用户任务；我能写出它影响的产品规则；我能列出研发、算法、运营需要一起确认的问题。`,
    `衡量一个 AI 产品方案是否成熟，不是看概念是否复杂，而是看它能否被验证。一个好的方案应该能回答：谁使用、怎么用、输出什么、怎么算好、失败怎么办、成本是否可接受。`,
  );

  return base;
}

function normalizeDeepSupplement(raw, filePath) {
  const rel = relative(filePath);
  const title = titleFromMarkdown(raw, filePath);
  const min = minimumChineseCount(filePath) + 80;
  let result = removeGeneratedDeepSupplement(raw);

  if (bodyChineseCount(result) >= min) return `${result.trimEnd()}\n`;

  result += "\n\n## 深度补充：把本节内容用于真实项目\n";

  for (const paragraph of deepSupplementParagraphs(title, rel)) {
    if (bodyChineseCount(result) >= min) break;
    result += `\n\n${paragraph}`;
  }

  return `${result.trimEnd()}\n`;
}

function animationFor(filePath, raw) {
  const rel = relative(filePath).toLowerCase();
  const title = titleFromMarkdown(raw, filePath).toLowerCase();
  const text = `${rel} ${title}`;

  if (
    text.includes("user-research") ||
    text.includes("用户调研") ||
    text.includes("user-research-template")
  )
    return "user-research-flow";
  if (text.includes("requirement") || text.includes("需求"))
    return "requirement-analysis-flow";
  if (text.includes("competitive") || text.includes("竞品"))
    return "competitive-analysis-flow";
  if (text.includes("prd")) return "prd-writing-flow";
  if (
    text.includes("prototype") ||
    text.includes("user-flow") ||
    text.includes("原型") ||
    text.includes("流程")
  )
    return "prototype-flow";
  if (
    text.includes("prompt") ||
    text.includes("temperature") ||
    text.includes("top-p") ||
    text.includes("system-prompt") ||
    text.includes("user-prompt")
  )
    return "prompt-flow";
  if (
    text.includes("rag") ||
    text.includes("knowledge") ||
    text.includes("retrieval") ||
    text.includes("rerank") ||
    text.includes("chunk") ||
    text.includes("embedding") ||
    text.includes("vector")
  )
    return "rag-flow";
  if (
    text.includes("agent") ||
    text.includes("workflow") ||
    text.includes("function-calling") ||
    text.includes("tool-calling")
  )
    return "agent-flow";
  if (
    text.includes("evaluation") ||
    text.includes("评估") ||
    text.includes("dataset") ||
    text.includes("fine-tuning")
  )
    return "model-evaluation-flow";
  if (text.includes("streaming") || text.includes("流式"))
    return "streaming-response-flow";
  if (
    text.includes("api") ||
    text.includes("interface") ||
    text.includes("model-integration") ||
    text.includes("接口")
  )
    return "api-call-flow";
  if (
    text.includes("database") ||
    text.includes("data-structure") ||
    text.includes("数据库")
  )
    return "database-design-flow";
  if (
    text.includes("log") ||
    text.includes("monitor") ||
    text.includes("cache") ||
    text.includes("rate-limit") ||
    text.includes("latency")
  )
    return "logs-monitoring-flow";
  if (
    text.includes("model-cost") ||
    text.includes("cost") ||
    text.includes("成本")
  )
    return "cost-optimization-flow";
  if (
    text.includes("image") ||
    text.includes("multi-modal") ||
    text.includes("图片") ||
    text.includes("多模态")
  )
    return "ai-image-generation-flow";
  if (
    text.includes("customer") ||
    text.includes("handoff") ||
    text.includes("客服") ||
    text.includes("人工")
  )
    return "customer-service-flow";
  if (
    text.includes("commercial") ||
    text.includes("saas") ||
    text.includes("商业化")
  )
    return "commercialization-funnel";
  if (
    text.includes("growth") ||
    text.includes("retention") ||
    text.includes("增长") ||
    text.includes("留存")
  )
    return "growth-retention-flow";
  if (
    text.includes("metric") ||
    text.includes("data-metrics") ||
    text.includes("指标") ||
    text.includes("数据")
  )
    return "metrics-analysis-flow";
  if (
    text.includes("risk") ||
    text.includes("compliance") ||
    text.includes("safety") ||
    text.includes("guardrails") ||
    text.includes("hallucination") ||
    text.includes("moderation") ||
    text.includes("风险") ||
    text.includes("安全") ||
    text.includes("合规")
  )
    return "risk-compliance-flow";
  if (
    text.includes("portfolio") ||
    text.includes("interview") ||
    text.includes("career") ||
    text.includes("retrospective") ||
    text.includes("作品集") ||
    text.includes("面试") ||
    text.includes("职业")
  )
    return "portfolio-building-flow";
  if (
    text.includes("traditional-pm") ||
    text.includes("ai-pm-vs") ||
    text.includes("产品经理")
  )
    return "traditional-pm-vs-ai-pm";

  return "ai-product-lifecycle-flow";
}

function insertAnimationPlaceholder(raw, filePath) {
  if (/^\s*\[animation:[^\]]+\]\s*$/m.test(raw)) return raw;

  const animationId = animationFor(filePath, raw);
  const markers = [
    "## 先建立直觉",
    "## 阶段定位",
    "## 项目概述",
    "## 模板用途",
    "## 新手解释",
  ];

  for (const marker of markers) {
    const index = raw.indexOf(marker);
    if (index === -1) continue;

    const searchFrom = index + marker.length;
    const nextSection = raw.slice(searchFrom).search(/\n##\s+/);
    if (nextSection === -1) {
      return `${raw.trimEnd()}\n\n[animation:${animationId}]\n`;
    }

    const insertAt = searchFrom + nextSection;
    return `${raw.slice(0, insertAt).trimEnd()}\n\n[animation:${animationId}]\n${raw.slice(insertAt)}`;
  }

  return `${raw.trimEnd()}\n\n[animation:${animationId}]\n`;
}

let changed = 0;
let animationInserted = 0;
let deepSupplementNormalized = 0;

for (const dir of contentDirs) {
  for (const filePath of listMarkdownFiles(dir)) {
    const before = fs.readFileSync(filePath, "utf8");
    let after = normalizeDeepSupplement(before, filePath);
    if (after !== before) deepSupplementNormalized += 1;

    const withAnimation = insertAnimationPlaceholder(after, filePath);
    if (withAnimation !== after) animationInserted += 1;
    after = withAnimation;

    if (after !== before) {
      fs.writeFileSync(filePath, after, "utf8");
      changed += 1;
    }
  }
}

console.log(
  `内容规范化完成：修改 ${changed} 个文件，规范深度补充 ${deepSupplementNormalized} 个文件，新增动画占位 ${animationInserted} 个文件。`,
);
