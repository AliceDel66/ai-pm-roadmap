import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const contentTargets = [
  "content/course",
  "content/projects",
  "content/templates",
  "content/glossary",
];

const animationIndexPath = path.join(repoRoot, "src/data/animations/index.ts");
const animationPattern = /^\s*\[animation:([^\]]+)\]\s*$/gm;

async function collectMarkdownFiles(targets) {
  const files = [];

  async function walk(currentPath) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        await walk(entryPath);
        continue;
      }

      if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(entryPath);
      }
    }
  }

  for (const target of targets) {
    await walk(path.join(repoRoot, target));
  }

  return files.sort((left, right) => left.localeCompare(right));
}

async function getRegisteredAnimationIds() {
  const source = await fs.readFile(animationIndexPath, "utf8");
  const ids = new Set();
  const registryKeyPattern = /["']([^"']+)["']\s*:/g;
  let match;

  while ((match = registryKeyPattern.exec(source)) !== null) {
    ids.add(match[1]);
  }

  return ids;
}

function extractAnimationIds(markdown) {
  const ids = [];
  let match;

  while ((match = animationPattern.exec(markdown)) !== null) {
    ids.push(match[1].trim());
  }

  return ids;
}

function normalizeBlock(block) {
  return block
    .replace(/<!--([\s\S]*?)-->/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isComparableBlock(block) {
  if (block.length < 80) {
    return false;
  }

  if (/^#{1,6}\s/.test(block)) {
    return false;
  }

  if (/^\[animation:[^\]]+\]$/.test(block)) {
    return false;
  }

  if (/^!\[[^\]]*\]\([^)]*\)$/.test(block)) {
    return false;
  }

  return true;
}

function findDuplicateBlocks(markdown) {
  const seen = new Map();
  const duplicates = [];
  const blocks = markdown.split(/\n\s*\n/g);

  blocks.forEach((block, index) => {
    const normalized = normalizeBlock(block);

    if (!isComparableBlock(normalized)) {
      return;
    }

    if (seen.has(normalized)) {
      duplicates.push({
        firstBlock: seen.get(normalized),
        repeatedBlock: index + 1,
        preview: normalized.slice(0, 120),
      });
      return;
    }

    seen.set(normalized, index + 1);
  });

  return duplicates;
}

function toRelativePath(filePath) {
  return path.relative(repoRoot, filePath).replace(/\\/g, "/");
}

const markdownFiles = await collectMarkdownFiles(contentTargets);
const registeredAnimationIds = await getRegisteredAnimationIds();

const missingAnimations = [];
const unknownAnimations = [];
const duplicateBlocks = [];
let animationPlaceholderCount = 0;

for (const filePath of markdownFiles) {
  const markdown = await fs.readFile(filePath, "utf8");
  const relativePath = toRelativePath(filePath);
  const animationIds = extractAnimationIds(markdown);

  animationPlaceholderCount += animationIds.length;

  if (animationIds.length === 0) {
    missingAnimations.push(relativePath);
  }

  for (const animationId of animationIds) {
    if (!registeredAnimationIds.has(animationId)) {
      unknownAnimations.push({ file: relativePath, animationId });
    }
  }

  const duplicates = findDuplicateBlocks(markdown);

  for (const duplicate of duplicates) {
    duplicateBlocks.push({ file: relativePath, ...duplicate });
  }
}

console.log(`Checked ${markdownFiles.length} markdown files.`);
console.log(`Found ${animationPlaceholderCount} animation placeholders.`);
console.log(`Registered ${registeredAnimationIds.size} animation ids.`);

if (missingAnimations.length > 0) {
  console.error("\nFiles missing animation placeholders:");
  for (const file of missingAnimations) {
    console.error(`- ${file}`);
  }
}

if (unknownAnimations.length > 0) {
  console.error("\nUnknown animation ids:");
  for (const item of unknownAnimations) {
    console.error(`- ${item.file}: ${item.animationId}`);
  }
}

if (duplicateBlocks.length > 0) {
  console.error("\nDuplicate long blocks inside files:");
  for (const item of duplicateBlocks) {
    console.error(
      `- ${item.file}: block ${item.repeatedBlock} repeats block ${item.firstBlock} (${item.preview}...)`,
    );
  }
}

const hasErrors =
  missingAnimations.length > 0 ||
  unknownAnimations.length > 0 ||
  duplicateBlocks.length > 0;

if (hasErrors) {
  process.exit(1);
}

console.log("Content state verification passed.");
