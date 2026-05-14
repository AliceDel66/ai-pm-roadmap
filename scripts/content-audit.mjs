import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const thresholds = {
  courseLesson: 5000,
  courseProjectLesson: 5500,
  stage06Lesson: 7000,
  stageIndex: 2500,
  project: 8000,
  projectImages: 8,
  template: 2500,
  glossary: 1000,
  complexGlossary: 1500,
};

const complexGlossaryTerms = new Set([
  'context-window.md',
  'embedding.md',
  'vector-database.md',
  'rag.md',
  'agent.md',
  'workflow.md',
  'fine-tuning.md',
  'function-calling.md',
  'multi-modal.md',
  'prompt-injection.md',
  'tool-calling.md',
  'knowledge-base.md',
  'retrieval.md',
  'guardrails.md',
]);

function listMarkdownFiles(dir) {
  const result = [];
  if (!fs.existsSync(dir)) return result;
  for (const name of fs.readdirSync(dir)) {
    const filePath = path.join(dir, name);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) result.push(...listMarkdownFiles(filePath));
    if (stat.isFile() && name.endsWith('.md')) result.push(filePath);
  }
  return result.sort((a, b) => a.localeCompare(b, 'zh-CN'));
}

function splitMarkdown(raw) {
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (!match) return { frontmatter: '', body: raw };
  return { frontmatter: match[0], body: raw.slice(match[0].length) };
}

function chineseCount(text) {
  return (text.match(/[\u4e00-\u9fff]/g) || []).length;
}

function hasAll(text, sections) {
  return sections.every((section) => text.includes(section));
}

function relative(filePath) {
  return path.relative(root, filePath).replace(/\\/g, '/');
}

const failures = [];
const report = [];

function check(condition, filePath, message) {
  if (!condition) failures.push(`${relative(filePath)} - ${message}`);
}

const courseFiles = listMarkdownFiles(path.join(root, 'content', 'course'));
const projectFiles = listMarkdownFiles(path.join(root, 'content', 'projects'));
const templateFiles = listMarkdownFiles(path.join(root, 'content', 'templates'));
const glossaryFiles = listMarkdownFiles(path.join(root, 'content', 'glossary'));

report.push(`课程 Markdown 数量：${courseFiles.length}`);
for (const file of courseFiles) {
  const raw = fs.readFileSync(file, 'utf8');
  const { frontmatter, body } = splitMarkdown(raw);
  const count = chineseCount(body);
  const isIndex = path.basename(file) === 'index.md';
  const isStage06 = relative(file).includes('stage-06-real-projects/');
  const isStageProject = path.basename(file).includes('stage-project');
  const minimum = isIndex ? thresholds.stageIndex : isStage06 ? thresholds.stage06Lesson : isStageProject ? thresholds.courseProjectLesson : thresholds.courseLesson;
  check(frontmatter.trim().startsWith('---'), file, '缺少 frontmatter');
  check(count >= minimum, file, `中文字符数 ${count} 低于要求 ${minimum}`);
  if (!isIndex) {
    check(hasAll(body, ['## 你将学到什么', '## 先建立直觉', '## 核心知识', '## AI 产品经理视角', '## 案例拆解', '## 方法论', '## 工作产出示例', '## 常见误区', '## 本节练习', '## 本节作业', '## 自测题', '## 延伸学习', '## 本节小结']), file, '课程结构不完整');
    check((body.match(/### 题目 /g) || []).length >= 8, file, '自测题少于 8 道');
    check(body.includes('答案：'), file, '缺少答案');
    check(body.includes('解析：'), file, '缺少解析');
  } else {
    check(hasAll(body, ['## 阶段定位', '## 适合人群', '## 学习前置条件', '## 学习目标', '## 课程地图', '## 推荐学习方式', '## 阶段核心能力', '## 阶段产出', '## 常见问题', '## 阶段项目说明']), file, '阶段首页结构不完整');
  }
}

report.push(`实战项目 Markdown 数量：${projectFiles.length}`);
for (const file of projectFiles) {
  const raw = fs.readFileSync(file, 'utf8');
  const { body } = splitMarkdown(raw);
  const count = chineseCount(body);
  const images = (body.match(/图片占位：/g) || []).length;
  check(count >= thresholds.project, file, `中文字符数 ${count} 低于要求 ${thresholds.project}`);
  check(images >= thresholds.projectImages, file, `图片占位 ${images} 少于 ${thresholds.projectImages}`);
  check(hasAll(body, ['## 项目概述', '## 适合学习阶段', '## 项目背景', '## 目标用户', '## 用户痛点', '## 产品目标', '## MVP 范围', '## 核心功能清单', '## 页面结构', '## 用户流程', '## AI 能力点', '## 技术协作点', '## 数据指标设计', '## PRD 大纲', '## 原型设计说明', '## Prompt 设计', '## 风险与边界', '## 迭代方向', '## 作品集产出', '## 项目作业', '## 检查清单']), file, '项目教程结构不完整');
}

report.push(`模板 Markdown 数量：${templateFiles.length}`);
for (const file of templateFiles) {
  const raw = fs.readFileSync(file, 'utf8');
  const { body } = splitMarkdown(raw);
  const count = chineseCount(body);
  check(count >= thresholds.template, file, `中文字符数 ${count} 低于要求 ${thresholds.template}`);
  check(hasAll(body, ['## 模板用途', '## 适用场景', '## 使用前准备', '## 使用方法', '## 模板正文', '## 填写示例', '## 常见错误', '## 检查清单']), file, '模板结构不完整');
}

report.push(`术语 Markdown 数量：${glossaryFiles.length}`);
for (const file of glossaryFiles) {
  const raw = fs.readFileSync(file, 'utf8');
  const { body } = splitMarkdown(raw);
  const count = chineseCount(body);
  const minimum = complexGlossaryTerms.has(path.basename(file)) ? thresholds.complexGlossary : thresholds.glossary;
  check(count >= minimum, file, `中文字符数 ${count} 低于要求 ${minimum}`);
  check(hasAll(body, ['## 新手解释', '## 专业解释', '## AI 产品经理需要知道什么', '## 产品场景', '## 需求设计影响', '## 技术协作问题', '## 常见误区', '## 相关术语']), file, '术语结构不完整');
}

console.log(report.join('\n'));

if (failures.length > 0) {
  console.log('\n内容审计未通过：');
  for (const failure of failures) console.log(`- ${failure}`);
  process.exit(1);
}

console.log('\n内容审计通过：所有课程、项目、模板和术语达到当前质量检查标准。');
