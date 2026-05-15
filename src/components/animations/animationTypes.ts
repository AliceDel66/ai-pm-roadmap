export type FlowNodeType = "input" | "process" | "ai" | "database" | "decision" | "output" | "risk";

export interface AnimatedFlowStep {
  id: string;
  title: string;
  description: string;
  nodeType: FlowNodeType;
  details?: string;
}

export interface AnimatedFlowEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface StepAnimationItem {
  id: string;
  title: string;
  description: string;
  example?: string;
  pmNote?: string;
}

export interface ComparePoint {
  id: string;
  label: string;
  left: string;
  right: string;
  explanation: string;
}

export interface AnimationMeta {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  hint?: string;
  why?: string;
}

export interface FlowAnimationDefinition extends AnimationMeta {
  type: "flow";
  data: {
    steps: AnimatedFlowStep[];
    edges: AnimatedFlowEdge[];
    autoPlay?: boolean;
    interval?: number;
  };
}

export interface StepsAnimationDefinition extends AnimationMeta {
  type: "steps";
  data: {
    steps: StepAnimationItem[];
    autoPlay?: boolean;
    interval?: number;
  };
}

export interface CompareAnimationDefinition extends AnimationMeta {
  type: "compare";
  data: {
    leftTitle: string;
    rightTitle: string;
    points: ComparePoint[];
    autoPlay?: boolean;
    interval?: number;
  };
}

export type AnimationDefinition = FlowAnimationDefinition | StepsAnimationDefinition | CompareAnimationDefinition;

export interface AnimatedFlowDiagramProps {
  title: string;
  description?: string;
  steps: AnimatedFlowStep[];
  edges: AnimatedFlowEdge[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export interface StepByStepAnimationProps {
  title: string;
  description?: string;
  steps: StepAnimationItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export interface ConceptCompareAnimationProps {
  title: string;
  leftTitle: string;
  rightTitle: string;
  points: ComparePoint[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}
