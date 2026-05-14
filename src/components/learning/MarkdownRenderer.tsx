import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export function MarkdownRenderer({ content }: { content: string }) {
  const sections = useMemo(() => splitQuizSection(content), [content]);
  const quizId = useMemo(() => hashString(sections.quiz), [sections.quiz]);

  if (!sections.quiz) return <MarkdownBlock content={content} />;

  return (
    <>
      <MarkdownBlock content={sections.before} />
      <InteractiveQuiz raw={sections.quiz} quizId={quizId} />
      <MarkdownBlock content={sections.after} />
    </>
  );
}

function MarkdownBlock({ content }: { content: string }) {
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

interface QuizOption {
  key: string;
  text: string;
}

interface QuizQuestion {
  id: string;
  type: string;
  question: string;
  options: QuizOption[];
  answer: string;
  explanation: string;
}

function splitQuizSection(content: string) {
  const start = content.indexOf("## 自测题");
  if (start === -1) return { before: content, quiz: "", after: "" };

  const tail = content.slice(start);
  const nextSection = tail.slice("## 自测题".length).search(/\n## (延伸学习|本节小结)/);
  if (nextSection === -1) return { before: content.slice(0, start), quiz: tail, after: "" };

  const afterStart = start + "## 自测题".length + nextSection;
  return {
    before: content.slice(0, start),
    quiz: content.slice(start, afterStart),
    after: content.slice(afterStart),
  };
}

function parseQuiz(raw: string): QuizQuestion[] {
  return raw
    .replace(/^## 自测题\s*/, "")
    .split(/\n(?=### 题目 \d+)/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, index) => {
      const lines = block.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const id = lines.find((line) => line.startsWith("### "))?.replace(/^###\s*/, "") || `题目 ${index + 1}`;
      const type = lines.find((line) => line.startsWith("类型："))?.replace("类型：", "").trim() || "单选题";
      const question = lines.find((line) => line.startsWith("问题："))?.replace("问题：", "").trim() || "";
      const answer = lines.find((line) => line.startsWith("答案："))?.replace("答案：", "").trim() || "";
      const explanationIndex = lines.findIndex((line) => line.startsWith("解析："));
      const explanation = explanationIndex >= 0 ? lines.slice(explanationIndex).join(" ").replace(/^解析：/, "").trim() : "";
      const options = lines
        .filter((line) => /^[A-D]\.\s+/.test(line))
        .map((line) => ({ key: line.slice(0, 1), text: line.replace(/^[A-D]\.\s+/, "") }));

      return { id, type, question, options, answer, explanation };
    });
}

function normalizeAnswer(value: string) {
  return value
    .replace(/答案[:：]?/g, "")
    .split(/[、,，\s]+/)
    .map((item) => item.trim().toUpperCase())
    .filter(Boolean)
    .sort()
    .join("|");
}

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) | 0;
  }
  return Math.abs(hash).toString(36);
}

function InteractiveQuiz({ raw, quizId }: { raw: string; quizId: string }) {
  const questions = useMemo(() => parseQuiz(raw), [raw]);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setAnswers({});
    setSubmitted({});
  }, [quizId]);

  const setAnswer = (id: string, value: string | string[]) => {
    setAnswers((current) => ({ ...current, [id]: value }));
  };

  const submit = (id: string) => {
    setSubmitted((current) => ({ ...current, [id]: true }));
  };

  return (
    <section className="my-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-cyan-300/20 dark:bg-cyan-300/10">
      <h2 id="自测题" className="mb-4 text-2xl font-semibold text-slate-950 dark:text-white">自测题</h2>
      <div className="space-y-5">
        {questions.map((item) => {
          const current = answers[item.id];
          const isSubmitted = Boolean(submitted[item.id]);
          const isOpenQuestion = item.options.length === 0 || item.type.includes("简答") || item.type.includes("案例");
          const isMultiple = item.type.includes("多选") || normalizeAnswer(item.answer).includes("|");
          const currentAnswer = Array.isArray(current) ? current.join("、") : current || "";
          const isCorrect = normalizeAnswer(currentAnswer) === normalizeAnswer(item.answer);

          return (
            <article key={item.id} className="rounded-xl border border-white bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/60">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h3 className="m-0 text-lg font-semibold text-slate-950 dark:text-white">{item.id}</h3>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-cyan-300/10 dark:text-cyan-200">{item.type}</span>
              </div>
              <p className="my-3 leading-7 text-slate-700 dark:text-slate-300">{item.question}</p>

              {isOpenQuestion ? (
                <textarea
                  value={typeof current === "string" ? current : ""}
                  onChange={(event) => setAnswer(item.id, event.target.value)}
                  placeholder="写下你的答案后查看参考答案和解析"
                  className="min-h-28 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-blue-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
                />
              ) : (
                <div className="space-y-2">
                  {item.options.map((option) => {
                    const selected = Array.isArray(current) ? current.includes(option.key) : current === option.key;
                    return (
                      <label key={option.key} className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-100 px-3 py-2 text-sm text-slate-700 hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-cyan-300/10">
                        <input
                          type={isMultiple ? "checkbox" : "radio"}
                          name={`${quizId}-${item.id}`}
                          checked={selected}
                          onChange={() => {
                            if (isMultiple) {
                              const values = Array.isArray(current) ? current : [];
                              setAnswer(item.id, selected ? values.filter((value) => value !== option.key) : [...values, option.key]);
                            } else {
                              setAnswer(item.id, option.key);
                            }
                          }}
                          className="mt-1"
                        />
                        <span>{option.key}. {option.text}</span>
                      </label>
                    );
                  })}
                </div>
              )}

              <button
                type="button"
                onClick={() => submit(item.id)}
                className="mt-4 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:bg-cyan-300 dark:text-slate-950"
              >
                {isOpenQuestion ? "查看参考答案" : "提交答案"}
              </button>

              {isSubmitted && (
                <div className={`mt-4 rounded-xl border px-4 py-3 text-sm leading-7 ${isOpenQuestion || isCorrect ? "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100" : "border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-300/20 dark:bg-rose-300/10 dark:text-rose-100"}`}>
                  {!isOpenQuestion && <p className="m-0 font-semibold">{isCorrect ? "回答正确" : "回答不正确"}</p>}
                  <p className="m-0">参考答案：{item.answer}</p>
                  <p className="m-0">解析：{item.explanation}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
