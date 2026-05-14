---
title: Temperature
term: 温度参数
tags:
  - 模型参数
  - 生成控制
related:
  - Top P
  - Prompt
---

# Temperature

## 新手解释

Temperature 可以粗略理解为模型回答的“发散程度”。值越低越稳定，值越高越有变化和创造性。

## 专业解释

Temperature 是控制生成随机性的参数，会影响模型在候选词之间选择的分布。

## AI 产品经理需要知道什么

你不需要调公式，但要知道客服、知识库问答通常需要更稳定；创意写作和头脑风暴可以稍微发散。

## 产品场景

- 客服回答设置较低温度，保证口径稳定。
- 文案创意设置较高温度，产生更多风格。
- PRD 生成使用中低温度，避免乱编。

## 常见误区

把温度当成质量开关。温度只影响随机性，不能解决知识缺失或 Prompt 不清的问题。

## 相关术语

Top P、Prompt、Evaluation、Hallucination