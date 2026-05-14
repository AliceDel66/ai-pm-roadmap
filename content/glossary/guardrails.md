---
title: Guardrails
term: 安全护栏
tags:
  - 安全
  - 风险控制
related:
  - Moderation
  - Prompt Injection
---

# Guardrails

## 新手解释

Guardrails 是给 AI 产品加的安全护栏，防止模型输出不该输出的内容或执行不该执行的操作。

## 专业解释

它可以包括系统 Prompt、规则校验、内容审核、权限控制、拒答策略、人工确认、日志审计等多层机制。

## AI 产品经理需要知道什么

护栏不是单个功能，而是一套风险控制体系。产品经理要定义风险场景、触发条件、用户提示和验收标准。

## 产品场景

- 客服涉及退款或投诉时转人工。
- Agent 发送邮件前要求确认。
- 图片生成禁止真实品牌 Logo 和敏感内容。

## 常见误区

只靠模型自己判断安全。真实产品需要规则、权限、审核和人工兜底一起工作。

## 相关术语

Moderation、Prompt Injection、Human Handoff、Agent