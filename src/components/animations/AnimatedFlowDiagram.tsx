import "@xyflow/react/dist/style.css";

import {
  Background,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import { AlertTriangle, Bot, CheckCircle2, Database, GitBranch, MessageSquare, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimationPlayer } from "./AnimationPlayer";
import type { AnimatedFlowDiagramProps, AnimatedFlowStep, FlowNodeType } from "./animationTypes";

interface FlowDiagramNodeData extends Record<string, unknown> {
  step: AnimatedFlowStep;
  index: number;
  isActive: boolean;
  isVisited: boolean;
  onSelect: (stepId: string) => void;
}

type FlowDiagramNode = Node<FlowDiagramNodeData, "flowStep">;

const nodeTypes: NodeTypes = {
  flowStep: FlowStepNode,
};

const nodeTone: Record<FlowNodeType, { label: string; base: string; active: string; dot: string }> = {
  input: {
    label: "输入",
    base: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-300/25 dark:bg-blue-300/10 dark:text-blue-100",
    active: "ring-blue-400/60",
    dot: "bg-blue-500",
  },
  process: {
    label: "处理",
    base: "border-slate-200 bg-slate-50 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-100",
    active: "ring-slate-400/60",
    dot: "bg-slate-500",
  },
  ai: {
    label: "AI",
    base: "border-violet-200 bg-violet-50 text-violet-900 dark:border-violet-300/25 dark:bg-violet-300/10 dark:text-violet-100",
    active: "ring-violet-400/60",
    dot: "bg-violet-500",
  },
  database: {
    label: "数据",
    base: "border-cyan-200 bg-cyan-50 text-cyan-900 dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100",
    active: "ring-cyan-400/60",
    dot: "bg-cyan-500",
  },
  decision: {
    label: "判断",
    base: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-300/25 dark:bg-amber-300/10 dark:text-amber-100",
    active: "ring-amber-400/60",
    dot: "bg-amber-500",
  },
  output: {
    label: "输出",
    base: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-300/25 dark:bg-emerald-300/10 dark:text-emerald-100",
    active: "ring-emerald-400/60",
    dot: "bg-emerald-500",
  },
  risk: {
    label: "风险",
    base: "border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-300/25 dark:bg-rose-300/10 dark:text-rose-100",
    active: "ring-rose-400/60",
    dot: "bg-rose-500",
  },
};

export function AnimatedFlowDiagram({
  title,
  description,
  steps,
  edges,
  autoPlay = false,
  interval = 4200,
  className = "",
}: AnimatedFlowDiagramProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoPlay) && !prefersReducedMotion);
  const isNarrow = useIsNarrowScreen();
  const total = steps.length;
  const currentStep = steps[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setIsPlaying(Boolean(autoPlay) && !prefersReducedMotion);
  }, [autoPlay, prefersReducedMotion, steps]);

  useEffect(() => {
    if (!isPlaying || total <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((current) => {
        if (current >= total - 1) {
          setIsPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, isPlaying, total]);

  const selectStep = useCallback((stepId: string) => {
    const nextIndex = steps.findIndex((step) => step.id === stepId);
    if (nextIndex >= 0) {
      setCurrentIndex(nextIndex);
      setIsPlaying(false);
    }
  }, [steps]);

  const flowNodes = useMemo<FlowDiagramNode[]>(() => {
    const columns = isNarrow ? 1 : steps.length > 8 ? 4 : 3;
    const xGap = isNarrow ? 0 : 245;
    const yGap = isNarrow ? 142 : 150;

    return steps.map((step, index) => {
      const row = Math.floor(index / columns);
      const column = index % columns;
      const displayColumn = isNarrow ? 0 : row % 2 === 0 ? column : columns - column - 1;

      return {
        id: step.id,
        type: "flowStep",
        position: { x: displayColumn * xGap, y: row * yGap },
        data: {
          step,
          index,
          isActive: index === currentIndex,
          isVisited: index <= currentIndex,
          onSelect: selectStep,
        },
      };
    });
  }, [currentIndex, isNarrow, selectStep, steps]);

  const flowEdges = useMemo<Edge[]>(() => {
    const activeStepId = currentStep?.id;
    return edges.map((edge) => {
      const isActive = Boolean(activeStepId && (edge.source === activeStepId || edge.target === activeStepId));
      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        label: edge.label,
        type: "smoothstep",
        animated: isActive && !prefersReducedMotion,
        markerEnd: { type: MarkerType.ArrowClosed, color: isActive ? "#2563eb" : "#94a3b8" },
        style: {
          stroke: isActive ? "#2563eb" : "#94a3b8",
          strokeWidth: isActive ? 2.5 : 1.4,
        },
        labelStyle: { fill: isActive ? "#1d4ed8" : "#64748b", fontSize: 12, fontWeight: isActive ? 700 : 500 },
        labelBgStyle: { fill: "rgba(255,255,255,0.88)" },
      };
    });
  }, [currentStep?.id, edges, prefersReducedMotion]);

  const playOrPause = () => {
    if (total <= 0) return;
    if (!isPlaying && currentIndex >= total - 1) setCurrentIndex(0);
    setIsPlaying((current) => !current);
  };

  const previous = () => {
    setIsPlaying(false);
    setCurrentIndex((current) => Math.max(0, current - 1));
  };

  const next = () => {
    setIsPlaying(false);
    setCurrentIndex((current) => Math.min(total - 1, current + 1));
  };

  const restart = () => {
    setCurrentIndex(0);
    setIsPlaying(total > 1);
  };

  if (total === 0) {
    return <EmptyAnimation title={title} message="该流程动画还没有配置节点，请补充 steps 数据。" />;
  }

  return (
    <div className={`min-w-0 ${className}`}>
      <div className="mb-4">
        <h4 className="m-0 text-lg font-semibold text-slate-950 dark:text-white">{title}</h4>
        {description && <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-900/60">
          <div className="h-[520px] w-full min-w-0 sm:h-[460px]" aria-label={`${title} 流程图`}>
            <ReactFlow
              nodes={flowNodes}
              edges={flowEdges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.22 }}
              minZoom={0.25}
              maxZoom={1.2}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              zoomOnScroll={false}
              zoomOnPinch
              panOnDrag={false}
              preventScrolling={false}
            >
              <Background gap={18} size={1} color="rgba(148, 163, 184, 0.35)" />
            </ReactFlow>
          </div>
        </div>

        <motion.aside
          key={currentStep.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950/60"
          aria-live="polite"
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-cyan-300">
            <span>当前步骤 {currentIndex + 1}</span>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span>{total}</span>
          </div>
          <h5 className="m-0 text-lg font-semibold text-slate-950 dark:text-white">{currentStep.title}</h5>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{currentStep.description}</p>
          {currentStep.details && (
            <div className="mt-3 space-y-2 rounded-xl bg-slate-50 p-3 text-sm leading-7 text-slate-700 dark:bg-white/5 dark:text-slate-300">
              {currentStep.details.split("\n").filter(Boolean).map((line) => <p key={line} className="m-0">{line}</p>)}
            </div>
          )}
        </motion.aside>
      </div>

      <AnimationPlayer
        className="mt-4"
        currentIndex={currentIndex}
        total={total}
        isPlaying={isPlaying}
        onPlayPause={playOrPause}
        onPrevious={previous}
        onNext={next}
        onRestart={restart}
      />
    </div>
  );
}

function FlowStepNode({ data }: NodeProps) {
  const nodeData = data as FlowDiagramNodeData;
  const { step, index, isActive, isVisited, onSelect } = nodeData;
  const tone = nodeTone[step.nodeType];
  const Icon = getNodeIcon(step.nodeType);

  return (
    <button
      type="button"
      onClick={() => onSelect(step.id)}
      className={`w-[190px] rounded-xl border p-3 text-left shadow-sm transition focus-ring motion-reduce:transition-none ${tone.base} ${isActive ? `ring-2 ${tone.active} shadow-md` : "hover:shadow-md"}`}
      aria-label={`查看第 ${index + 1} 步：${step.title}`}
      aria-current={isActive ? "step" : undefined}
    >
      <Handle type="target" position={Position.Left} className="!h-2 !w-2 !border-0 !bg-slate-400" />
      <Handle type="source" position={Position.Right} className="!h-2 !w-2 !border-0 !bg-slate-400" />
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-white/70 px-2 py-1 text-[11px] font-semibold dark:bg-white/10">
          <span className={`h-2 w-2 rounded-full ${isVisited ? tone.dot : "bg-slate-300"}`} aria-hidden="true" />
          {tone.label}
        </span>
        <span className="text-xs font-semibold opacity-75">{index + 1}</span>
      </div>
      <div className="flex items-start gap-2">
        <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <div className="min-w-0">
          <p className="m-0 text-sm font-semibold leading-5">{step.title}</p>
          <p className="m-0 mt-1 line-clamp-2 text-xs leading-5 opacity-80">{step.description}</p>
        </div>
      </div>
    </button>
  );
}

function getNodeIcon(nodeType: FlowNodeType) {
  switch (nodeType) {
    case "input":
      return MessageSquare;
    case "ai":
      return Bot;
    case "database":
      return Database;
    case "decision":
      return GitBranch;
    case "output":
      return CheckCircle2;
    case "risk":
      return AlertTriangle;
    default:
      return Workflow;
  }
}

function useIsNarrowScreen() {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const update = () => setIsNarrow(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isNarrow;
}

function EmptyAnimation({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm leading-7 text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300" role="status">
      <p className="m-0 font-semibold text-slate-900 dark:text-white">{title}</p>
      <p className="m-0 mt-1">{message}</p>
    </div>
  );
}
