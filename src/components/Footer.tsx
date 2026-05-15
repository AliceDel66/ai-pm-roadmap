import logo from "../assets/logo.png";

const footerLinks = [
  { label: "主站", href: "https://www.agentskill.asia/" },
  { label: "GitHub", href: "https://github.com/AliceDel66" },
  { label: "X", href: "https://x.com/CaiXiang23766" },
  { label: "邮箱", href: "mailto:1443125661@qq.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-10 text-white dark:border-white/10">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-start gap-4">
          <img src={logo} alt="Coriander logo" className="h-12 w-12 rounded-xl object-contain ring-1 ring-white/10" />
          <div className="max-w-2xl">
            <p className="text-base font-semibold">Coriander</p>
            <p className="mt-1 text-sm font-medium text-cyan-300">AgentSkill.asia</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              AI 应用开发工程师，专注前端工程、Electron 桌面端、RAG 知识库、Agent 工作流与自动化工具。
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300 lg:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-400">© {year} CorianderLab. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}
