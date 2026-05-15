import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { AnimationPlayer } from "./AnimationPlayer";
import type { ComparePoint, ConceptCompareAnimationProps } from "./animationTypes";

export function ConceptCompareAnimation({
  title,
  leftTitle,
  rightTitle,
  points,
  autoPlay = false,
  interval = 4600,
  className = "",
}: ConceptCompareAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoPlay) && !prefersReducedMotion);
  const total = points.length;
  const currentPoint = points[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setIsPlaying(Boolean(autoPlay) && !prefersReducedMotion);
  }, [autoPlay, prefersReducedMotion, points]);

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

  const selectPoint = (index: number) => {
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
        <p className="m-0 mt-1">该概念对比动画还没有配置差异点，请补充 points 数据。</p>
      </div>
    );
  }

  return (
    <div className={`min-w-0 ${className}`}>
      <div className="mb-4">
        <h4 className="m-0 text-lg font-semibold text-slate-950 dark:text-white">{title}</h4>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-900/60">
          <div className="grid gap-3 md:grid-cols-2">
            <CompareSide title={leftTitle} content={currentPoint.left} tone="left" />
            <CompareSide title={rightTitle} content={currentPoint.right} tone="right" />
          </div>

          <motion.section
            key={currentPoint.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="mt-3 rounded-xl border border-white bg-white p-4 dark:border-white/10 dark:bg-slate-950/70"
            aria-live="polite"
          >
            <p className="mb-2 text-xs font-semibold text-blue-700 dark:text-cyan-300">差异点 {currentIndex + 1} / {total}</p>
            <h5 className="m-0 flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white">
              <ChevronRight size={18} aria-hidden="true" />
              {currentPoint.label}
            </h5>
            <p className="m-0 mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{currentPoint.explanation}</p>
          </motion.section>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-950/60">
          <p className="mb-3 text-xs font-semibold text-slate-500 dark:text-slate-400">点击差异点查看解释</p>
          <div className="space-y-2" role="list" aria-label="概念差异点">
            {points.map((point, index) => (
              <button
                key={point.id}
                type="button"
                onClick={() => selectPoint(index)}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm transition focus-ring motion-reduce:transition-none ${index === currentIndex ? "border-blue-300 bg-blue-50 font-semibold text-blue-900 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-100" : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-cyan-300/10"}`}
              >
                <span>{point.label}</span>
                <span className="text-xs opacity-70">{index + 1}</span>
              </button>
            ))}
          </div>
        </div>
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

function CompareSide({ title, content, tone }: { title: string; content: string; tone: "left" | "right" }) {
  const toneClass = tone === "left"
    ? "border-slate-200 bg-white text-slate-800 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200"
    : "border-violet-200 bg-violet-50 text-violet-950 dark:border-violet-300/20 dark:bg-violet-300/10 dark:text-violet-100";

  return (
    <section className={`min-h-40 rounded-xl border p-4 ${toneClass}`}>
      <h5 className="m-0 text-base font-semibold">{title}</h5>
      <p className="m-0 mt-3 text-sm leading-7">{content}</p>
    </section>
  );
}
