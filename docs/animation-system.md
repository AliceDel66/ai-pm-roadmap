# 2D 教学动画系统

## 为什么新增教学动画系统

AI 产品经理课程里有很多抽象流程，例如 RAG 检索生成、Agent 工具调用、流式响应、Prompt 设计和商业化漏斗。只用文字讲解时，新手很难理解“一个流程如何一步步发生”。2D 教学动画系统的目标，是把这些概念转成可点击、可播放、可复盘的课程组件，让学习者在阅读 Markdown 时直接看到流程、步骤和概念差异。

这个系统不是装饰动效，也不是商业 SaaS 功能。它服务于课程学习：帮助学习者理解流程结构、关键节点、产品经理关注点、技术实现和风险边界。

## 开源免费原则

本系统遵守项目的开源公益定位：

- 动画数据全部维护在本地 TypeScript 文件中。
- 不依赖远程脚本、远程动画素材、第三方图片或真实品牌 Logo。
- 不接入任何付费 API、闭源 SDK 或私有服务。
- 示例使用虚构或通用业务场景，避免版权和品牌风险。
- 普通开发者 clone 仓库后执行 `npm install` 和 `npm run dev` 即可看到效果。

## 使用的开源库

本轮新增依赖：

- `@xyflow/react`：用于流程图、节点图和逻辑链路展示。
- `motion`：用于步骤切换、节点高亮和轻量交互动效。

选择原因：

- 两者都是 npm 上成熟的 React 生态开源包。
- 不需要外部服务即可运行。
- 适合长期维护和社区贡献。
- 比手写 Canvas 更容易维护，也比 3D 或复杂动画库更适合课程站点。

本轮没有引入 Three.js、Lottie、GIF、视频或任何远程素材。

## 支持的动画类型

当前支持三类动画：

| 类型      | 组件                      | 适用场景                                                               |
| --------- | ------------------------- | ---------------------------------------------------------------------- |
| `flow`    | `AnimatedFlowDiagram`     | RAG、Agent、API 调用链路、流式响应、图片生成、智能客服等节点流程       |
| `steps`   | `StepByStepAnimation`     | Prompt 设计、用户调研、需求分析、商业化漏斗等步骤教学                  |
| `compare` | `ConceptCompareAnimation` | 传统 PM vs AI PM、搜索 vs RAG、聊天机器人 vs Agent、传统 PRD vs AI PRD |

所有动画共用：

- `AnimationCard`：课程正文中的统一容器。
- `AnimationPlayer`：播放、暂停、上一步、下一步、重新播放和进度条。
- `AnimationRenderer`：根据 Markdown 中的动画 ID 查找并渲染对应动画。

## Markdown 中插入动画

在课程或项目 Markdown 中单独写一行：

```md
[animation:rag-flow]
```

渲染时会自动从 `src/data/animations/index.ts` 的 `animationRegistry` 中查找 `rag-flow`，并渲染对应动画。

注意事项：

- 占位必须是独立一行。
- ID 建议使用小写字母、数字和短横线。
- 如果 ID 不存在，页面会显示友好提示，不会白屏。
- 如果格式错误，例如 `[animation:]`，页面会提示格式不正确。
- 不需要 MDX，普通 Markdown 内容不会被破坏。

## 动画数据结构

类型定义位于：

```txt
src/components/animations/animationTypes.ts
```

核心注册结构：

```ts
interface AnimationDefinition {
  id: string;
  type: "flow" | "steps" | "compare";
  title: string;
  description?: string;
  tags?: string[];
  hint?: string;
  why?: string;
  data: unknown;
}
```

### flow 数据

```ts
export const ragFlow = {
  id: "rag-flow",
  type: "flow",
  title: "RAG 知识库问答流程",
  data: {
    steps: [
      {
        id: "question",
        title: "用户提问",
        description: "用户用自然语言提出业务问题。",
        nodeType: "input",
        details: "做什么：...\nPM关注：...\n技术实现：...\n做不好会出现：...",
      },
    ],
    edges: [
      { id: "e1", source: "question", target: "preprocess", label: "理解问题" },
    ],
  },
};
```

`nodeType` 支持：

- `input`
- `process`
- `ai`
- `database`
- `decision`
- `output`
- `risk`

### steps 数据

```ts
export const promptFlow = {
  id: "prompt-flow",
  type: "steps",
  title: "Prompt 设计流程",
  data: {
    steps: [
      {
        id: "goal",
        title: "定义任务目标",
        description: "先说明 Prompt 要帮助用户完成哪类任务。",
        example: "根据商品卖点生成 3 条种草文案。",
        pmNote: "目标要绑定真实用户任务和输出标准。",
      },
    ],
  },
};
```

### compare 数据

```ts
export const searchVsRag = {
  id: "search-vs-rag",
  type: "compare",
  title: "普通搜索 vs RAG",
  data: {
    leftTitle: "普通搜索",
    rightTitle: "RAG",
    points: [
      {
        id: "output",
        label: "输出形态",
        left: "返回一组文档，用户自己筛选和总结。",
        right: "基于召回片段生成直接答案，并附上引用来源。",
        explanation: "RAG 减少阅读成本，但必须展示依据。",
      },
    ],
  },
};
```

## 如何新增一个流程动画

1. 在 `src/data/animations/` 下新增文件，例如 `myFlow.ts`。
2. 使用 `FlowAnimationDefinition` 定义数据。
3. 为每个节点补充 `title`、`description`、`nodeType` 和有教学价值的 `details`。
4. 使用 `edges` 连接节点，`source` 和 `target` 必须对应节点 ID。
5. 在 `src/data/animations/index.ts` 中导入并注册。
6. 在 Markdown 中写 `[animation:my-flow]`。
7. 运行 `npm run build` 和 `npm run content:audit`。

## 如何新增一个步骤动画

1. 新增 `StepsAnimationDefinition` 数据文件。
2. 每个步骤写清 `description`、`example` 和 `pmNote`。
3. 在注册表中添加 ID。
4. 在课程 Markdown 中插入占位。

适合用于：方法论、写作流程、调研流程、复盘流程、评估流程。

## 如何新增一个概念对比动画

1. 新增 `CompareAnimationDefinition` 数据。
2. 设置 `leftTitle`、`rightTitle` 和 `points`。
3. 每个差异点要写清左右差异和解释，避免只写关键词。
4. 在注册表中添加 ID。
5. 在概念辨析课程中插入占位。

适合用于：岗位差异、技术方案差异、产品形态差异、文档结构差异。

## 视觉规范

- 整体风格保持干净、清爽、教育产品感。
- 节点文字必须可读，不使用过小字体。
- 不使用外部图片、真实品牌 Logo 或版权素材。
- `input` 使用蓝色系，`process` 使用灰蓝色系，`ai` 使用紫色系，`database` 使用青色系，`decision` 使用黄色或橙色系，`output` 使用绿色系，`risk` 使用红色系。
- 动画模块应服务学习内容，不做纯装饰效果。
- 移动端必须在容器内展示，不产生横向溢出。

## 可访问性要求

- 播放、暂停、上一步、下一步、重新播放按钮必须有 `aria-label`。
- 当前步骤说明使用可读文本展示，不只依赖颜色。
- 支持键盘操作播放控件。
- 支持深色模式。
- 尊重 `prefers-reduced-motion`，减少自动和切换动效。
- 异常状态必须显示文字提示，不能让页面白屏。

## 性能注意事项

- `MarkdownRenderer` 只有在 Markdown 中出现动画占位时才懒加载 `AnimationRenderer`。
- 自动播放使用 `setInterval`，组件卸载时会清理定时器。
- 动画数据保持轻量，不引入视频、GIF 或二进制素材。
- React Flow 节点不可拖拽编辑，避免课程阅读页变成复杂编辑器。
- 一个课程可以插入多个动画，但建议每节课控制数量，避免影响阅读节奏。

## 版权和开源注意事项

贡献动画时请遵守：

- 不提交第三方图片、插画、字体、视频或真实品牌素材。
- 不复制商业课程、书籍、官网或闭源文档内容。
- 示例使用虚构场景或通用描述。
- 不引入需要注册账号、付费授权或远程服务才能运行的依赖。
- 如新增 npm 包，必须确认其适合开源项目长期维护。

## 已内置动画

当前注册的动画 ID 包括：

- `rag-flow`
- `agent-flow`
- `prompt-flow`
- `user-research-flow`
- `requirement-analysis-flow`
- `api-call-flow`
- `streaming-response-flow`
- `ai-image-generation-flow`
- `customer-service-flow`
- `commercialization-funnel`
- `traditional-pm-vs-ai-pm`
- `search-vs-rag`
- `chatbot-vs-agent`
- `traditional-prd-vs-ai-prd`

## 后续扩展方向

- 增加更多课程动画，例如竞品分析、模型评估、成本优化和风险合规。
- 支持 Lottie，但只使用项目自制或明确开源可用的动画素材。
- 支持动画截图导出，方便学习者放入作品集。
- 支持动画预览页，帮助贡献者检查新动画。
- 支持更完整的动画数据贡献规范和校验脚本。
- 支持交互式小测验动画，把流程学习和自测题结合起来。
