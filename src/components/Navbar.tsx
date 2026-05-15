import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  ["首页", "/"],
  ["学习路线", "/learn"],
  ["能力地图", "/#skill-map"],
  ["实战项目", "/#projects"],
  ["工具库", "/#tools"],
  ["作品集指南", "/#portfolio"],
  ["面试题库", "/#interview"],
];

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (href: string) => {
    const [path, hash] = href.split("#");
    if (path && path !== location.pathname) {
      navigate(href);
      setTimeout(() => hash && document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 80);
    } else if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-left focus-ring">
          <img
            src={logo}
            alt="Coriander logo"
            className="h-9 w-9 rounded-lg object-contain ring-1 ring-slate-200/80 dark:ring-white/10"
          />
          <span>
            <span className="block text-sm font-semibold text-slate-950 dark:text-white">Coriander</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">AgentSkill.asia</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-ring dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={onToggleTheme}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg focus-ring dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="切换深浅色模式"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => navigate("/learn")}
            className="rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus-ring dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
          >
            开始学习
          </button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
          onClick={() => setOpen((value) => !value)}
          aria-label="打开导航"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-xl lg:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="grid gap-1">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="rounded-lg px-3 py-3 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {label}
              </button>
            ))}
            <div className="mt-2 flex gap-2">
              <button onClick={onToggleTheme} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm dark:border-white/10">
                {darkMode ? <Sun size={17} /> : <Moon size={17} />}
                主题
              </button>
              <button onClick={() => navigate("/learn")} className="flex-1 rounded-lg bg-slate-950 py-3 text-sm font-medium text-white dark:bg-white dark:text-slate-950">
                开始学习
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
