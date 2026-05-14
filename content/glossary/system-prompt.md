---
title: System Prompt
term: 系统提示词
tags:
  - Prompt
  - 系统规则
related:
  - User Prompt
  - Prompt Injection
---

# System Prompt

## 新手解释

System Prompt 是产品给模型的底层规则，用来说明角色、边界、安全要求和输出原则。

## 专业解释

它通常位于对话上下文的高优先级位置，用于约束模型行为，但并不能绝对保证模型不会被绕过。

## AI 产品经理需要知道什么

你要把产品规则写进系统提示词，例如“只能基于引用资料回答”“高风险问题转人工”“不得编造金额”。

## 产品场景

- 客服机器人保持统一语气和边界。
- RAG 产品要求必须引用来源。
- 写作助手规定输出格式。

## 常见误区

把 System Prompt 当成唯一安全措施。它重要，但仍需内容审核、权限和日志。

## 相关术语

User Prompt、Prompt、Guardrails、Prompt Injection