import { practiceProjects } from "../data/projects";
import { glossaryDocs } from "./glossaryLoader";
import { lessonDocs, stageDocs } from "./courseLoader";
import { templateDocs } from "./templateLoader";
import type { SearchResult } from "./types";

export const searchIndex: SearchResult[] = [
  ...stageDocs.map((stage) => ({
    id: `stage:${stage.slug}`,
    type: "阶段" as const,
    title: stage.frontmatter.title,
    excerpt: stage.excerpt,
    href: `/learn/${stage.slug}`,
    stageTitle: stage.frontmatter.stageTitle,
    tags: stage.frontmatter.tags || [],
    haystack: `${stage.frontmatter.title} ${stage.content} ${(stage.frontmatter.tags || []).join(" ")}`,
  })),
  ...lessonDocs.map((lesson) => ({
    id: `lesson:${lesson.id}`,
    type: "课程" as const,
    title: lesson.frontmatter.title,
    excerpt: lesson.excerpt,
    href: `/learn/${lesson.stageSlug}/${lesson.slug}`,
    stageTitle: lesson.frontmatter.stageTitle,
    tags: lesson.frontmatter.tags || [],
    haystack: `${lesson.frontmatter.title} ${lesson.content} ${(lesson.frontmatter.tags || []).join(" ")}`,
  })),
  ...templateDocs.map((template) => ({
    id: `template:${template.slug}`,
    type: "模板" as const,
    title: template.frontmatter.title,
    excerpt: template.excerpt,
    href: `/templates/${template.slug}`,
    tags: template.frontmatter.tags || [],
    haystack: `${template.frontmatter.title} ${template.content} ${(template.frontmatter.tags || []).join(" ")}`,
  })),
  ...glossaryDocs.map((item) => ({
    id: `glossary:${item.slug}`,
    type: "术语" as const,
    title: item.frontmatter.title,
    excerpt: item.excerpt,
    href: `/glossary/${item.slug}`,
    tags: item.frontmatter.tags || [],
    haystack: `${item.frontmatter.title} ${item.frontmatter.term || ""} ${item.content} ${(item.frontmatter.tags || []).join(" ")}`,
  })),
  ...practiceProjects.map((project) => ({
    id: `project:${project.id}`,
    type: "项目" as const,
    title: project.name,
    excerpt: project.goal,
    href: `/projects/${project.id}`,
    stageTitle: project.stage,
    tags: project.skills,
    haystack: Object.values(project).flat().join(" "),
  })),
];

export function searchContent(query: string) {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return searchIndex.slice(0, 12);
  return searchIndex.filter((item) => item.haystack.toLowerCase().includes(keyword)).slice(0, 40);
}
