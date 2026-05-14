# 贡献指南

感谢你参与建设 AI 产品经理开源课程。

## 新增课程

课程放在：

```text
content/course/<stage-slug>/<lesson-slug>.md
```

每节课必须包含 frontmatter：

```md
---
title: 课程标题
stage: stage-01-ai-pm-intro
stageTitle: 认识 AI 产品经理
lesson: 1
difficulty: 入门
duration: 30 分钟
tags:
  - AI 产品经理
objectives:
  - 本节学习目标
deliverables:
  - 本节产出物
---
```

正文建议包含：

- 你将学到什么
- 先建立直觉
- 核心知识
- AI 产品经理视角
- 案例拆解
- 方法论
- 常见误区
- 本节练习
- 本节作业
- 自测题
- 延伸学习

## 新增模板

模板放在 `content/templates/`，必须说明使用场景和可复制结构。

## 新增术语

术语放在 `content/glossary/`，建议包含新手解释、专业解释、实际产品场景、常见误区和相关术语。

## 内容原则

- 必须原创。
- 不写空泛口号。
- 多给清单、流程、判断标准和例子。
- 所有建议尽量可执行。
- 不写个人隐私、密钥或私有接口。

提交前请运行：

```bash
npm run build
```
