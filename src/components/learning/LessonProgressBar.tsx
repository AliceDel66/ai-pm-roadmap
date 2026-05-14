export function LessonProgressBar({ value }: { value: number }) {
  return (
    <div className="fixed inset-x-0 top-16 z-40 h-1 bg-slate-200 dark:bg-slate-900">
      <div className="h-1 bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400 transition-all" style={{ width: `${value}%` }} />
    </div>
  );
}
