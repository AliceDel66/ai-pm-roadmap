# AI 产品经理成长路线图

一个开源的「AI 产品经理从 0 到 1 学习平台」。项目使用 React + TypeScript + Vite + Tailwind CSS 构建，课程内容使用 Markdown 维护，适合社区持续贡献。

## 项目定位

本项目面向想转行或升级 AI 产品能力的学习者，提供：

- 7 阶段 AI 产品经理学习路线
- Markdown 驱动的课程正文
- 课程阅读、练习、作业、自测题
- 学习进度 localStorage 持久化
- 模板库、术语库、实战项目教程
- 全站搜索

## 本地运行

```bash
npm install
npm run dev
```

构建生产版本：

```bash
npm run build
```

## 内容目录

```text
content/
  course/      课程内容
  templates/   产品经理常用模板
  glossary/    AI 产品经理术语库
```

第一阶段课程已经完整写出，其它阶段当前提供阶段索引和课程大纲，欢迎继续补充完整课程。

## 如何贡献课程

1. 阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。
2. 参考 [docs/content-style-guide.md](./docs/content-style-guide.md)。
3. 在 `content/course/<stage-slug>/` 下新增课程 Markdown。
4. 确保 frontmatter 完整。
5. 本地运行 `npm run build` 验证。

## 版权与原创要求

课程内容必须原创。不要复制第三方文章、课程、书籍或商业文档；案例分析可以参考公开产品体验，但必须用自己的语言总结，不粘贴对方内容。
