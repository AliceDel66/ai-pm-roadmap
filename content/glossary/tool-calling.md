---
title: Tool Calling
term: 工具调用
tags:
  - Tool Calling
  - Agent
related:
  - Function Calling
  - Agent
---

# Tool Calling

## 新手解释

Tool Calling 是让 AI 选择并调用外部工具，例如搜索、查数据库、发邮件、创建日程。

## 专业解释

模型根据任务输出结构化工具调用请求，系统执行工具并把结果返回给模型或用户，常见于 Agent 产品。

## AI 产品经理需要知道什么

产品经理要定义工具清单、权限、入参出参、确认节点、错误处理和日志。工具越强，风险越要控制。

## 产品场景

- Agent 读取表格并生成报告。
- 客服查询订单。
- 办公助手创建会议日程。

## 常见误区

认为接入工具后就能全自动。真实产品需要确认、审计、失败重试和回滚策略。

## 相关术语

Function Calling、Agent、Workflow、API