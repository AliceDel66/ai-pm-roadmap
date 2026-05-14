import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-10 text-white dark:border-white/10">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-950">
            <Sparkles size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold">AI 产品经理成长路线图</p>
            <p className="mt-1 text-xs text-slate-400">从学习路径到作品集的成长型学习系统</p>
          </div>
        </div>
        <p className="text-xs text-slate-400">MVP 本地版，学习进度保存在浏览器 localStorage。</p>
      </div>
    </footer>
  );
}
