import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { AnimationPlayer } from "./AnimationPlayer";
import type { StepAnimationItem, StepByStepAnimationProps } from "./animationTypes";

export function StepByStepAnimation({
  title,
  description,
  steps,
  autoPlay = false,
  interval = 4500,
  className = "",
}: StepByStepAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoPlay) && !prefersReducedMotion);
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

  const selectStep = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

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
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm leading-7 text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300" role="status">
        <p className="m-0 font-semibold text-slate-900 dark:text-white">{title}</p>
        <p className="m-0 mt-1">该步骤动画还没有配置步骤，请补充 steps 数据。</p>
      </div>
    );
  }

  return (
    <div className={`min-w-0 ${className}`}>
      <div className="mb-4">
        <h4 className="m-0 text-lg font-semibold text-slate-950 dark:text-white">{title}</h4>
        {description && <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
      </div>

      <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" aria-label={`${title} 步骤列表`}>
          {steps.map((step, index) => (
            <StepButton key={step.id} step={step} index={index} isActive={index === currentIndex} isDone={index < currentIndex} onClick={() => selectStep(index)} />
          ))}
        </ol>

        <motion.article
          key={currentStep.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24 }}
          className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950/60"
          aria-live="polite"
        >
          <p className="mb-2 text-xs font-semibold text-blue-700 dark:text-cyan-300">第 {currentIndex + 1} 步 / 共 {total} 步</p>
          <h5 className="m-0 text-xl font-semibold text-slate-950 dark:text-white">{currentStep.title}</h5>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{currentStep.description}</p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {currentStep.example && (
              <InfoBlock title="示例" content={currentStep.example} tone="blue" />
            )}
            {currentStep.pmNote && (
              <InfoBlock title="产品经理要注意" content={currentStep.pmNote} tone="violet" />
            )}
          </div>
        </motion.article>
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

function StepButton({
  step,
  index,
  isActive,
  isDone,
  onClick,
}: {
  step: StepAnimationItem;
  index: number;
  isActive: boolean;
  isDone: boolean;
  onClick: () => void;
}) {
  return (
    <li className="list-none">
      <button
        type="button"
        onClick={onClick}
        aria-current={isActive ? "step" : undefined}
        className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition focus-ring motion-reduce:transition-none ${isActive ? "border-blue-300 bg-blue-50 text-blue-950 ring-2 ring-blue-200 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-50 dark:ring-cyan-300/20" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-cyan-300/10"}`}
      >
        <span className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${isDone ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-300/15 dark:text-emerald-200" : isActive ? "bg-blue-600 text-white dark:bg-cyan-300 dark:text-slate-950" : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"}`}>
          {isDone ? <CheckCircle2 size={15} aria-hidden="true" /> : index + 1}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold leading-6">{step.title}</span>
          <span className="mt-1 block text-xs leading-5 opacity-75">{step.description}</span>
        </span>
      </button>
    </li>
  );
}

function InfoBlock({ title, content, tone }: { title: string; content: string; tone: "blue" | "violet" }) {
  const toneClass = tone === "blue"
    ? "border-blue-100 bg-blue-50 text-blue-950 dark:border-blue-300/20 dark:bg-blue-300/10 dark:text-blue-100"
    : "border-violet-100 bg-violet-50 text-violet-950 dark:border-violet-300/20 dark:bg-violet-300/10 dark:text-violet-100";

  return (
    <section className={`rounded-xl border p-4 ${toneClass}`}>
      <h6 className="m-0 text-sm font-semibold">{title}</h6>
      <p className="m-0 mt-2 text-sm leading-7">{content}</p>
    </section>
  );
}
