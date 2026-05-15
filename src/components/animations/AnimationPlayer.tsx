import { Pause, Play, RotateCcw, SkipBack, SkipForward } from "lucide-react";
import type { ReactNode } from "react";

interface AnimationPlayerProps {
  currentIndex: number;
  total: number;
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onRestart: () => void;
  className?: string;
}

export function AnimationPlayer({
  currentIndex,
  total,
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
  onRestart,
  className = "",
}: AnimationPlayerProps) {
  const safeTotal = Math.max(total, 0);
  const progress = safeTotal <= 1 ? 100 : Math.round(((currentIndex + 1) / safeTotal) * 100);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= safeTotal - 1;
  const canControl = safeTotal > 0;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white/80 p-3 dark:border-white/10 dark:bg-slate-950/60 ${className}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <ControlButton ariaLabel="上一步" disabled={!canControl || isFirst} onClick={onPrevious}>
            <SkipBack size={16} aria-hidden="true" />
          </ControlButton>
          <ControlButton ariaLabel={isPlaying ? "暂停动画" : "播放动画"} disabled={!canControl} onClick={onPlayPause} primary>
            {isPlaying ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
          </ControlButton>
          <ControlButton ariaLabel="下一步" disabled={!canControl || isLast} onClick={onNext}>
            <SkipForward size={16} aria-hidden="true" />
          </ControlButton>
          <ControlButton ariaLabel="重新播放" disabled={!canControl} onClick={onRestart}>
            <RotateCcw size={16} aria-hidden="true" />
          </ControlButton>
        </div>

        <div className="min-w-0 flex-1 sm:max-w-xs">
          <div className="mb-1 flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>进度</span>
            <span aria-live="polite">{safeTotal === 0 ? "0 / 0" : `${currentIndex + 1} / ${safeTotal}`}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10" role="progressbar" aria-label="动画播放进度" aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeTotal === 0 ? 0 : progress}>
            <div className="h-full rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-500 transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${safeTotal === 0 ? 0 : progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ControlButton({
  ariaLabel,
  disabled,
  onClick,
  primary = false,
  children,
}: {
  ariaLabel: string;
  disabled?: boolean;
  onClick: () => void;
  primary?: boolean;
  children: ReactNode;
}) {
  const baseClass = "inline-flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition focus-ring disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none";
  const toneClass = primary
    ? "border-slate-950 bg-slate-950 text-white hover:bg-blue-700 dark:border-cyan-300 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
    : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300/30 dark:hover:bg-cyan-300/10";

  return (
    <button type="button" aria-label={ariaLabel} disabled={disabled} onClick={onClick} className={`${baseClass} ${toneClass}`}>
      {children}
    </button>
  );
}
