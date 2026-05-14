import { excerpt, extractHeadings, parseMarkdown } from "./markdown";
import type { LessonDoc, StageDoc } from "./types";

const modules = import.meta.glob("../../content/course/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parts(path: string) {
  const match = path.match(/content\/course\/([^/]+)\/([^/]+)\.md$/);
  return {
    stageSlug: match?.[1] || "",
    fileSlug: match?.[2] || "",
  };
}

const parsed = Object.entries(modules).map(([path, raw]) => {
  const { stageSlug, fileSlug } = parts(path.replace(/\\/g, "/"));
  const { frontmatter, content } = parseMarkdown(raw);
  return { path, stageSlug, fileSlug, frontmatter, content };
});

export const stageDocs: StageDoc[] = parsed
  .filter((item) => item.fileSlug === "index")
  .map((item) => ({
    slug: item.stageSlug,
    path: item.path,
    frontmatter: item.frontmatter,
    content: item.content,
    excerpt: excerpt(item.content),
  }))
  .sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0));

export const lessonDocs: LessonDoc[] = parsed
  .filter((item) => item.fileSlug !== "index")
  .map((item) => ({
    id: `${item.stageSlug}/${item.fileSlug}`,
    stageSlug: item.stageSlug,
    slug: item.fileSlug,
    path: item.path,
    frontmatter: item.frontmatter,
    content: item.content,
    excerpt: excerpt(item.content),
    headings: extractHeadings(item.content),
  }))
  .sort((a, b) => {
    const stageDelta = (a.frontmatter.stage || "").localeCompare(b.frontmatter.stage || "");
    return stageDelta || (a.frontmatter.lesson || 0) - (b.frontmatter.lesson || 0);
  });

export function getStage(slug?: string) {
  return stageDocs.find((stage) => stage.slug === slug);
}

export function getLessonsByStage(stageSlug: string) {
  return lessonDocs.filter((lesson) => lesson.stageSlug === stageSlug).sort((a, b) => (a.frontmatter.lesson || 0) - (b.frontmatter.lesson || 0));
}

export function getLesson(stageSlug?: string, lessonSlug?: string) {
  return lessonDocs.find((lesson) => lesson.stageSlug === stageSlug && lesson.slug === lessonSlug);
}

export function getLessonNeighbors(lesson: LessonDoc) {
  const index = lessonDocs.findIndex((item) => item.id === lesson.id);
  return {
    prev: index > 0 ? lessonDocs[index - 1] : null,
    next: index >= 0 && index < lessonDocs.length - 1 ? lessonDocs[index + 1] : null,
  };
}
