import { excerpt, extractHeadings, parseMarkdown } from "./markdown";
import type { ProjectDoc } from "./types";

const modules = import.meta.glob("../../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const projectDocs: ProjectDoc[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace(/\\/g, "/").match(/projects\/([^/]+)\.md$/)?.[1] || "";
    const { frontmatter, content } = parseMarkdown(raw);
    return { slug, path, frontmatter, content, excerpt: excerpt(content), headings: extractHeadings(content) };
  })
  .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

export function getProjectDoc(slug?: string) {
  return projectDocs.find((project) => project.slug === slug || project.frontmatter.project === slug);
}