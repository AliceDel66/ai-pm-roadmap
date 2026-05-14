export interface ContentFrontmatter {
  title: string;
  stage?: string;
  stageTitle?: string;
  order?: number;
  lesson?: number;
  lessonCount?: number;
  difficulty?: string;
  duration?: string;
  type?: string;
  term?: string;
  tags?: string[];
  objectives?: string[];
  deliverables?: string[];
  audience?: string[];
  project?: string;
  tools?: string[];
  faqs?: { q: string; a: string }[];
  related?: string[];
}

export interface HeadingItem {
  id: string;
  text: string;
  depth: number;
}

export interface StageDoc {
  slug: string;
  path: string;
  frontmatter: ContentFrontmatter;
  content: string;
  excerpt: string;
}

export interface LessonDoc {
  id: string;
  stageSlug: string;
  slug: string;
  path: string;
  frontmatter: ContentFrontmatter;
  content: string;
  excerpt: string;
  headings: HeadingItem[];
}

export interface TemplateDoc {
  slug: string;
  path: string;
  frontmatter: ContentFrontmatter;
  content: string;
  excerpt: string;
}

export interface GlossaryDoc {
  slug: string;
  path: string;
  frontmatter: ContentFrontmatter;
  content: string;
  excerpt: string;
  headings: HeadingItem[];
}

export interface ProjectDoc {
  slug: string;
  path: string;
  frontmatter: ContentFrontmatter;
  content: string;
  excerpt: string;
  headings: HeadingItem[];
}

export interface SearchResult {
  id: string;
  type: "课程" | "阶段" | "模板" | "术语" | "项目";
  title: string;
  excerpt: string;
  href: string;
  stageTitle?: string;
  tags: string[];
  haystack: string;
}
