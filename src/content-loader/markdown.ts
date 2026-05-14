import type { ContentFrontmatter, HeadingItem } from "./types";

export function parseMarkdown(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: { title: "Untitled" }, content: raw.trim() };
  }
  const frontmatter = parseYamlLike(match[1]);
  return {
    frontmatter,
    content: match[2].trim(),
  };
}

function parseYamlLike(source: string): ContentFrontmatter {
  const result: Record<string, unknown> = {};
  const lines = source.split(/\r?\n/);
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) {
      index += 1;
      continue;
    }
    const key = pair[1];
    const inlineValue = pair[2];
    if (inlineValue) {
      result[key] = coerce(inlineValue);
      index += 1;
      continue;
    }
    const values: unknown[] = [];
    index += 1;
    while (index < lines.length && /^\s+-\s+/.test(lines[index])) {
      const itemLine = lines[index].replace(/^\s+-\s+/, "");
      if (/^[A-Za-z0-9_-]+:\s*/.test(itemLine)) {
        const objectValue: Record<string, string> = {};
        const [firstKey, ...firstValue] = itemLine.split(":");
        objectValue[firstKey.trim()] = firstValue.join(":").trim();
        index += 1;
        while (index < lines.length && /^\s{4}[A-Za-z0-9_-]+:\s*/.test(lines[index])) {
          const nested = lines[index].trim();
          const [nestedKey, ...nestedValue] = nested.split(":");
          objectValue[nestedKey.trim()] = nestedValue.join(":").trim();
          index += 1;
        }
        values.push(objectValue);
      } else {
        values.push(itemLine.trim());
        index += 1;
      }
    }
    result[key] = values;
  }
  return result as unknown as ContentFrontmatter;
}

function coerce(value: string) {
  const trimmed = value.trim();
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  return trimmed.replace(/^["']|["']$/g, "");
}

export function slugify(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(content: string): HeadingItem[] {
  return content
    .split("\n")
    .filter((line) => /^#{2,3}\s+/.test(line))
    .map((line) => {
      const depth = line.startsWith("###") ? 3 : 2;
      const text = line.replace(/^#{2,3}\s+/, "").trim();
      return { id: slugify(text), text, depth };
    });
}

export function excerpt(content: string, length = 130) {
  const text = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#>*_[\]()`|-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length)}...` : text;
}
