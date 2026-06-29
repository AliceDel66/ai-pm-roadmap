import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const contentRoot = path.join(root, "content");
const publicRoot = path.join(root, "public", "images", "generated");
const placeholderPattern =
  /^[ \t]*>\s*图片占位：(.+?)\s{0,2}\r?\n[ \t]*>\s*建议文件名：(.+?)\s{0,2}\r?\n[ \t]*>\s*图片用途：(.+?)\s{0,2}\r?\n[ \t]*>\s*生图提示词：(.+?)\s*$/gm;
const generatedImagePattern = /!\[([^\]]+)\]\((\/images\/generated\/([^)\s]+?\.png))\s+"([^"]*)"\)/g;

const dryRun = process.argv.includes("--dry-run");
const generateOnly = process.argv.includes("--generate-only");

const typePresets = {
  learning: {
    eyebrow: "阶段学习地图",
    labels: ["课程路线", "学习目标", "核心能力", "练习作业", "阶段项目", "作品集产出"],
  },
  scenario: {
    eyebrow: "场景拆解图",
    labels: ["目标用户", "当前任务", "痛点阻塞", "AI 介入点", "页面流程", "技术协作", "数据指标", "作品集产出"],
  },
  overview: {
    eyebrow: "项目总览图",
    labels: ["业务背景", "目标用户", "核心模块", "产品闭环", "AI 能力", "技术协作", "数据指标", "作品集产出"],
  },
  flow: {
    eyebrow: "用户流程图",
    labels: ["进入产品", "选择任务", "补充信息", "AI 输出", "人工确认", "反馈回流"],
  },
  architecture: {
    eyebrow: "产品架构图",
    labels: ["前端页面", "后端服务", "AI 能力", "数据存储", "日志监控", "运营配置"],
  },
  page: {
    eyebrow: "页面结构图",
    labels: ["导航入口", "任务区域", "输入表单", "结果展示", "状态提示", "反馈入口"],
  },
  capability: {
    eyebrow: "AI 能力链路图",
    labels: ["输入处理", "Prompt", "检索/工具", "模型输出", "审核", "反馈闭环"],
  },
  dashboard: {
    eyebrow: "数据指标看板图",
    labels: ["使用指标", "效果指标", "成本指标", "质量指标", "风险指标", "运营指标"],
  },
  prd: {
    eyebrow: "PRD 结构图",
    labels: ["背景目标", "用户痛点", "功能范围", "流程原型", "接口数据", "验收标准"],
  },
  portfolio: {
    eyebrow: "作品集展示图",
    labels: ["项目背景", "问题定义", "方案设计", "关键图表", "结果复盘", "面试讲述"],
  },
  concept: {
    eyebrow: "概念地图",
    labels: ["大模型", "Prompt", "Token", "Embedding", "RAG", "Agent", "评估", "成本安全"],
  },
};

async function main() {
  const files = (await walk(contentRoot)).filter((file) => file.endsWith(".md"));
  const extracted = [];
  const hidden = [];

  for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const { prefix, body } = splitFrontmatter(raw);
    const relativeFile = path.relative(root, file);

    for (const item of extractPlaceholders(body, relativeFile)) {
      extracted.push(item);
    }
    for (const item of extractGeneratedImages(body, relativeFile)) {
      extracted.push(item);
    }

    const hiddenMatches = prefix.match(/图片占位：/g);
    if (hiddenMatches?.length) hidden.push({ file: relativeFile, count: hiddenMatches.length });
  }

  console.log(`Visible image targets: ${extracted.length}`);
  if (hidden.length) {
    console.log(
      `Skipped hidden frontmatter placeholders: ${hidden
        .map((item) => `${item.file} (${item.count})`)
        .join(", ")}`,
    );
  }

  if (dryRun) return;

  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  });

  for (const [index, item] of extracted.entries()) {
    await fs.mkdir(path.dirname(item.outputPath), { recursive: true });
    await page.setContent(renderHtml(item), { waitUntil: "load" });
    await page.locator("#canvas").screenshot({ path: item.outputPath });
    console.log(`${String(index + 1).padStart(3, "0")}/${extracted.length} ${item.url}`);
  }

  await browser.close();

  if (!generateOnly) {
    await replaceMarkdown(files);
  }
}

async function replaceMarkdown(files) {
  let replaced = 0;

  for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const { prefix, body } = splitFrontmatter(raw);
    let fileCount = 0;
    const relativeFile = path.relative(root, file);

    const nextBody = body.replace(placeholderPattern, (full, title, filename, purpose, prompt) => {
      const item = buildItem({
        file: relativeFile,
        title: clean(title),
        filename: clean(filename),
        purpose: clean(purpose),
        prompt: clean(prompt),
      });
      fileCount += 1;
      replaced += 1;
      return `![${escapeMarkdownAlt(item.title)}](${item.url} "${escapeTitle(item.purpose)}")`;
    }).replace(/(\]\(\/images\/generated\/[^\n]+\))\n(?=!\[|## )/g, "$1\n\n");

    if (fileCount > 0) {
      await fs.writeFile(file, `${prefix}${nextBody}`, "utf8");
    }
  }

  console.log(`Replaced markdown placeholders: ${replaced}`);
}

function extractPlaceholders(body, relativeFile) {
  const items = [];
  let match;
  while ((match = placeholderPattern.exec(body)) !== null) {
    items.push(
      buildItem({
        file: relativeFile,
        title: clean(match[1]),
        filename: clean(match[2]),
        purpose: clean(match[3]),
        prompt: clean(match[4]),
      }),
    );
  }
  placeholderPattern.lastIndex = 0;
  return items;
}

function extractGeneratedImages(body, relativeFile) {
  const items = [];
  let match;
  while ((match = generatedImagePattern.exec(body)) !== null) {
    const sourceStem = match[3].replace(/\/[^/]+\.png$/, "");
    const filename = match[3].split("/").pop();
    items.push(
      buildItem({
        file: relativeFile,
        title: clean(match[1]),
        filename,
        purpose: clean(match[4]),
        prompt: "",
        sourceStem,
      }),
    );
  }
  generatedImagePattern.lastIndex = 0;
  return items;
}

function buildItem({ file, title, filename, purpose, prompt, sourceStem: explicitSourceStem }) {
  const sourceStem = explicitSourceStem || file.replace(/^content\//, "").replace(/\.md$/, "");
  const safeFilename = filename.replace(/[^\w.-]/g, "-");
  const url = `/images/generated/${sourceStem}/${safeFilename}`;
  return {
    file,
    title,
    filename: safeFilename,
    purpose,
    prompt,
    url,
    outputPath: path.join(publicRoot, sourceStem, safeFilename),
    preset: classify(title, safeFilename, prompt),
  };
}

function classify(title, filename, prompt) {
  const primary = `${title} ${filename}`;
  const text = `${primary} ${prompt}`;
  if (/学习地图/.test(primary)) return typePresets.learning;
  if (/场景拆解图|scenario-map/.test(primary)) return typePresets.scenario;
  if (/项目总览|overview/.test(primary)) return typePresets.overview;
  if (/用户流程|user-flow/.test(primary)) return typePresets.flow;
  if (/产品架构|architecture/.test(primary)) return typePresets.architecture;
  if (/页面结构|page-structure/.test(primary)) return typePresets.page;
  if (/能力链路|ai-capability-chain/.test(primary)) return typePresets.capability;
  if (/数据指标看板|metrics-dashboard/.test(primary)) return typePresets.dashboard;
  if (/PRD|prd-structure/.test(primary)) return typePresets.prd;
  if (/作品集|portfolio-showcase/.test(primary)) return typePresets.portfolio;
  if (/概念地图|概念图谱|能力地图|能力模型/.test(text)) return typePresets.concept;
  return typePresets.scenario;
}

function renderHtml(item) {
  const labels = labelsFromPrompt(item.prompt, item.preset.labels).slice(0, 8);
  const accent = paletteFor(item);
  const cards = labels
    .map((label, index) => {
      const detail = detailFor(label, index, item);
      return `<article class="card card-${index % 4}">
        <div class="card-index">${String(index + 1).padStart(2, "0")}</div>
        <h3>${escapeHtml(label)}</h3>
        <p>${escapeHtml(detail)}</p>
      </article>`;
    })
    .join("");

  return `<!doctype html>
  <html lang="zh-CN">
    <head>
      <meta charset="utf-8" />
      <style>
        * { box-sizing: border-box; }
        html, body { margin: 0; width: 1280px; height: 720px; background: #f8fbff; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
          color: #172033;
        }
        #canvas {
          position: relative;
          width: 1280px;
          height: 720px;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 18%, ${accent.soft} 0, transparent 30%),
            radial-gradient(circle at 88% 12%, rgba(20, 184, 166, 0.16) 0, transparent 28%),
            linear-gradient(135deg, #ffffff 0%, #f4f8ff 54%, #f7f5ff 100%);
          border: 1px solid #dbe7f6;
        }
        .grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(42, 74, 138, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42, 74, 138, 0.06) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.08));
        }
        .header {
          position: absolute;
          left: 64px;
          top: 48px;
          width: 820px;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 34px;
          padding: 0 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.82);
          border: 1px solid rgba(90, 124, 201, 0.2);
          color: ${accent.strong};
          font-size: 18px;
          font-weight: 700;
        }
        .eyebrow::before {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${accent.main}, #14b8a6);
          box-shadow: 0 0 0 5px ${accent.soft};
        }
        h1 {
          margin: 18px 0 0;
          width: 900px;
          color: #0f172a;
          font-size: 46px;
          line-height: 1.14;
          letter-spacing: 0;
          font-weight: 800;
        }
        .subtitle {
          margin-top: 14px;
          width: 720px;
          color: #50617c;
          font-size: 21px;
          line-height: 1.55;
          font-weight: 500;
        }
        .hero {
          position: absolute;
          right: 58px;
          top: 58px;
          width: 286px;
          height: 168px;
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,245,255,0.88)),
            linear-gradient(135deg, ${accent.main}, #14b8a6);
          border: 1px solid rgba(90, 124, 201, 0.22);
          box-shadow: 0 24px 60px rgba(50, 73, 132, 0.14);
          padding: 22px;
        }
        .hero-row { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .hero-dot { width: 42px; height: 42px; border-radius: 8px; background: linear-gradient(135deg, ${accent.main}, #14b8a6); }
        .hero-line { height: 12px; border-radius: 999px; background: #dbeafe; flex: 1; }
        .hero-line:nth-child(2) { max-width: 128px; }
        .cards {
          position: absolute;
          left: 64px;
          right: 64px;
          bottom: 58px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .card {
          min-height: 132px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(148, 163, 184, 0.28);
          box-shadow: 0 18px 40px rgba(40, 59, 105, 0.10);
          padding: 18px 18px 16px;
        }
        .card-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 24px;
          border-radius: 999px;
          background: ${accent.soft};
          color: ${accent.strong};
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .card h3 {
          margin: 0;
          color: #10213d;
          font-size: 22px;
          line-height: 1.25;
          letter-spacing: 0;
          font-weight: 800;
        }
        .card p {
          margin: 8px 0 0;
          color: #5a6b85;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 500;
        }
        .connector {
          position: absolute;
          left: 78px;
          right: 78px;
          top: 282px;
          height: 180px;
          pointer-events: none;
        }
        .connector::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 88px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, ${accent.main}, #14b8a6, #f59e0b);
          opacity: 0.72;
        }
        .node {
          position: absolute;
          top: 48px;
          width: 82px;
          height: 82px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid rgba(90,124,201,0.3);
          box-shadow: 0 16px 34px rgba(40, 59, 105, 0.12);
        }
        .node:nth-child(1) { left: 0; }
        .node:nth-child(2) { left: 22%; }
        .node:nth-child(3) { left: 45%; }
        .node:nth-child(4) { left: 68%; }
        .node:nth-child(5) { right: 0; }
        .node::after {
          content: "";
          position: absolute;
          inset: 19px;
          border-radius: 18px;
          background: linear-gradient(135deg, ${accent.main}, #14b8a6);
        }
        .footer {
          position: absolute;
          right: 64px;
          bottom: 24px;
          color: #7a8aa3;
          font-size: 14px;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <main id="canvas" role="img" aria-label="${escapeHtml(item.title)}">
        <div class="grid"></div>
        <section class="header">
          <div class="eyebrow">${escapeHtml(item.preset.eyebrow)}</div>
          <h1>${escapeHtml(item.title)}</h1>
          <p class="subtitle">${escapeHtml(summaryFor(item))}</p>
        </section>
        <aside class="hero">
          <div class="hero-row"><div class="hero-dot"></div><div class="hero-line"></div></div>
          <div class="hero-row"><div class="hero-line"></div><div class="hero-line"></div></div>
          <div class="hero-row"><div class="hero-line"></div></div>
        </aside>
        <div class="connector">
          <div class="node"></div><div class="node"></div><div class="node"></div><div class="node"></div><div class="node"></div>
        </div>
        <section class="cards">${cards}</section>
        <div class="footer">AI PM Roadmap · 课程教学图示</div>
      </main>
    </body>
  </html>`;
}

function labelsFromPrompt(prompt, fallback) {
  const matched = prompt.match(/(?:画面)?包含(.+?)(?:等中文标签|等节点|等模块|。|，并|，适合)/);
  if (!matched) return fallback;
  const labels = matched[1]
    .replace(/和/g, "、")
    .split(/[、，,]/)
    .map((item) => item.replace(/之间的关系|中文箭头说明关系/g, "").trim())
    .filter(Boolean);
  return labels.length >= 4 ? labels : fallback;
}

function summaryFor(item) {
  if (item.purpose.length <= 54) return item.purpose;
  return `${item.purpose.slice(0, 54)}。`;
}

function detailFor(label, index, item) {
  const pool = [
    "明确输入、目标与边界",
    "连接真实任务和产品决策",
    "沉淀可评审的交付物",
    "把 AI 能力放回业务流程",
    "关注质量、成本与风险",
    "形成可复盘的数据闭环",
    "支持团队协作和验收",
    "可直接进入作品集表达",
  ];
  if (/指标|数据/.test(label)) return "定义口径、来源、目标值和复盘动作";
  if (/Prompt|模型|AI|检索|工具|RAG|Agent/.test(label)) return "说明能力边界、调用方式和失败兜底";
  if (/用户|目标/.test(label)) return "聚焦谁在什么场景下完成什么任务";
  if (/风险|安全|合规/.test(label)) return "标出权限、内容安全和人工兜底策略";
  if (/作品集|产出|交付/.test(label)) return "整理为可展示、可讲述、可追问的材料";
  return pool[index % pool.length] || item.purpose;
}

function paletteFor(item) {
  const palettes = [
    { main: "#4f46e5", strong: "#3730a3", soft: "rgba(99, 102, 241, 0.18)" },
    { main: "#2563eb", strong: "#1d4ed8", soft: "rgba(37, 99, 235, 0.16)" },
    { main: "#7c3aed", strong: "#6d28d9", soft: "rgba(124, 58, 237, 0.16)" },
    { main: "#0891b2", strong: "#0e7490", soft: "rgba(8, 145, 178, 0.16)" },
  ];
  const seed = Array.from(item.filename).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return palettes[seed % palettes.length];
}

function splitFrontmatter(raw) {
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (!match) return { prefix: "", body: raw };
  return { prefix: match[0], body: raw.slice(match[0].length) };
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else files.push(target);
  }
  return files;
}

function clean(value) {
  return String(value).replace(/\s{2,}$/g, "").trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeMarkdownAlt(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/\[/g, "\\[").replace(/\]/g, "\\]");
}

function escapeTitle(value) {
  return String(value).replace(/"/g, "&quot;");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
