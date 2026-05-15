import { animationRegistry } from "../../data/animations";
import { AnimatedFlowDiagram } from "./AnimatedFlowDiagram";
import { AnimationCard } from "./AnimationCard";
import { ConceptCompareAnimation } from "./ConceptCompareAnimation";
import { StepByStepAnimation } from "./StepByStepAnimation";
import type { AnimationDefinition } from "./animationTypes";

interface AnimationRendererProps {
  animationId: string;
  className?: string;
}

export function AnimationRenderer({ animationId, className = "" }: AnimationRendererProps) {
  const animation = animationRegistry[animationId];

  if (!animation) {
    return (
      <AnimationNotice
        title="该动画暂未配置"
        message={`请检查 animation id：${animationId || "空"}。如果这是新增课程内容，可以先在 src/data/animations 注册同名动画。`}
        className={className}
      />
    );
  }

  return <RegisteredAnimation animation={animation} className={className} />;
}

function RegisteredAnimation({ animation, className }: { animation: AnimationDefinition; className: string }) {
  const cardProps = {
    title: animation.title,
    description: animation.description,
    tags: animation.tags,
    hint: animation.hint,
    why: animation.why,
    className,
  };

  switch (animation.type) {
    case "flow":
      return (
        <AnimationCard {...cardProps}>
          <AnimatedFlowDiagram
            title={animation.title}
            description={animation.description}
            steps={animation.data.steps || []}
            edges={animation.data.edges || []}
            autoPlay={animation.data.autoPlay}
            interval={animation.data.interval}
          />
        </AnimationCard>
      );
    case "steps":
      return (
        <AnimationCard {...cardProps}>
          <StepByStepAnimation
            title={animation.title}
            description={animation.description}
            steps={animation.data.steps || []}
            autoPlay={animation.data.autoPlay}
            interval={animation.data.interval}
          />
        </AnimationCard>
      );
    case "compare":
      return (
        <AnimationCard {...cardProps}>
          <ConceptCompareAnimation
            title={animation.title}
            leftTitle={animation.data.leftTitle}
            rightTitle={animation.data.rightTitle}
            points={animation.data.points || []}
            autoPlay={animation.data.autoPlay}
            interval={animation.data.interval}
          />
        </AnimationCard>
      );
    default:
      return (
        <AnimationNotice
          title="暂不支持该动画类型"
          message="当前只支持 flow、steps、compare 三种教学动画类型，请检查动画数据定义。"
          className={className}
        />
      );
  }
}

function AnimationNotice({ title, message, className = "" }: { title: string; message: string; className?: string }) {
  return (
    <div className={`my-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-100 ${className}`} role="status">
      <p className="m-0 font-semibold">{title}</p>
      <p className="m-0 mt-1">{message}</p>
    </div>
  );
}

export default AnimationRenderer;
