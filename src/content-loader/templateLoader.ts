import { excerpt, parseMarkdown } from "./markdown";
import type { TemplateDoc } from "./types";

const modules = import.meta.glob("../../content/templates/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const templateDocs: TemplateDoc[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace(/\\/g, "/").match(/templates\/([^/]+)\.md$/)?.[1] || "";
    const { frontmatter, content } = parseMarkdown(raw);
    return { slug, path, frontmatter, content, excerpt: excerpt(content) };
  })
  .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

export function getTemplate(slug?: string) {
  return templateDocs.find((template) => template.slug === slug);
}
