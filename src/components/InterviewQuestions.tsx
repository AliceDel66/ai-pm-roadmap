import { MessageSquareText } from "lucide-react";
import type { InterviewCategory } from "../data/types";

interface InterviewQuestionsProps {
  categories: InterviewCategory[];
}

export function InterviewQuestions({ categories }: InterviewQuestionsProps) {
  return (
    <section id="interview" className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="section-title">面试题库</h2>
          <p className="section-copy">面试准备要从“背答案”升级为“讲项目”。这些问题可以倒逼你检查学习路线里是否真的形成了判断和产出。</p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {categories.map((category) => (
            <article key={category.category} className="panel rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-blue-700 dark:bg-white/10 dark:text-cyan-300">
                  <MessageSquareText size={18} />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{category.category}</h3>
              </div>
              <div className="mt-5 space-y-3">
                {category.questions.map((question) => (
                  <div key={question} className="rounded-xl border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {question}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
