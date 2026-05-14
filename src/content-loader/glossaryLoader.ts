import { excerpt, extractHeadings, parseMarkdown } from "./markdown";
import type { GlossaryDoc } from "./types";

const modules = import.meta.glob("../../content/glossary/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const glossaryDocs: GlossaryDoc[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace(/\\/g, "/").match(/glossary\/([^/]+)\.md$/)?.[1] || "";
    const { frontmatter, content } = parseMarkdown(raw);
    return { slug, path, frontmatter, content, excerpt: excerpt(content), headings: extractHeadings(content) };
  })
  .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

export function getGlossary(slug?: string) {
  return glossaryDocs.find((item) => item.slug === slug);
}
