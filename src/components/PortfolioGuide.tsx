import { FileCheck2 } from "lucide-react";
import { portfolioItems } from "../data/dailyTasks";

export function PortfolioGuide() {
  return (
    <section id="portfolio" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <h2 className="section-title">作品集指南</h2>
            <p className="section-copy">
              求职作品集不只是漂亮页面，而是证明你能定义问题、设计方案、理解技术、验证结果和复盘迭代。每个项目至少讲清目标、取舍和产出。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {portfolioItems.map((item, index) => (
              <div key={item} className="panel rounded-2xl p-4 transition hover:-translate-y-1 hover:border-blue-200 dark:hover:border-cyan-300/30">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-300">
                    <FileCheck2 size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">作品 {index + 1}</p>
                    <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{item}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
