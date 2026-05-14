import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={{
        h1: ({ children }) => <h1 className="mb-6 text-4xl font-semibold leading-tight text-slate-950 dark:text-white">{children}</h1>,
        h2: ({ children }) => <h2 className="mb-4 mt-10 text-2xl font-semibold text-slate-950 dark:text-white">{children}</h2>,
        h3: ({ children }) => <h3 className="mb-3 mt-7 text-xl font-semibold text-slate-950 dark:text-white">{children}</h3>,
        p: ({ children }) => <p className="my-4 text-base leading-8 text-slate-700 dark:text-slate-300">{children}</p>,
        ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">{children}</ul>,
        ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6 text-slate-700 dark:text-slate-300">{children}</ol>,
        li: ({ children }) => <li className="leading-8">{children}</li>,
        blockquote: ({ children }) => <blockquote className="my-6 border-l-4 border-blue-500 bg-blue-50 px-4 py-2 text-slate-700 dark:bg-cyan-300/10 dark:text-slate-200">{children}</blockquote>,
        code: ({ children }) => <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-blue-700 dark:bg-white/10 dark:text-cyan-200">{children}</code>,
        pre: ({ children }) => <pre className="my-6 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-100">{children}</pre>,
        table: ({ children }) => <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10"><table className="w-full border-collapse text-sm">{children}</table></div>,
        th: ({ children }) => <th className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">{children}</th>,
        td: ({ children }) => <td className="border-b border-slate-100 px-4 py-3 leading-7 text-slate-700 dark:border-white/10 dark:text-slate-300">{children}</td>,
        a: ({ children, href }) => <a href={href} className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 dark:text-cyan-300">{children}</a>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
