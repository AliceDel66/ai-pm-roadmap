---
title: Top P
term: 核采样参数
tags:
  - 模型参数
  - 生成控制
related:
  - Temperature
  - Prompt
---

# Top P

## 新手解释

Top P 也是控制模型输出发散程度的参数，可以理解为模型只在一组概率较高的候选词里选择。

## 专业解释

Top P 又称 nucleus sampling，模型会从累计概率达到 P 的候选集合中采样生成下一个 Token。

## AI 产品经理需要知道什么

产品经理只需知道它和 Temperature 都会影响稳定性和多样性。参数调整要通过样例测试，不要凭感觉上线。

## 产品场景

- 写作助手希望输出更丰富时可调高多样性。
- 知识问答希望减少发散时保持低随机性。
- 模型切换时需要重新评估参数组合。

## 常见误区

同时随意调 Temperature 和 Top P。参数变化会影响输出稳定性，应有测试记录。

## 相关术语

Temperature、Token、Evaluation