---
title: Function Calling
term: 函数调用
tags:
  - Function Calling
  - Tool Calling
related:
  - Tool Calling
  - Agent
---

# Function Calling

## 新手解释

Function Calling 就是让模型不只回答文字，还能按固定格式调用一个功能，例如查订单、查天气、创建待办。

## 专业解释

它是一种让模型输出结构化函数名和参数的机制，由系统或后端执行真实函数，再把结果返回给模型或用户。

## AI 产品经理需要知道什么

你不需要写函数代码，但要定义哪些功能可调用、入参出参是什么、是否需要用户确认、失败时怎么办。

## 产品场景

- 客服查询订单状态。
- Agent 创建日历提醒。
- 知识库助手调用内部搜索接口。

## 常见误区

以为模型自己执行了操作。实际上真实执行通常由后端工具完成，模型只是选择和组织调用参数。

## 相关术语

Tool Calling、Agent、API、Workflow