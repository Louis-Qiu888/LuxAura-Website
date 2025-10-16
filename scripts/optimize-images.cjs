#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const SUPPORTED_EXTENSIONS = new Set(['.webp', '.jpg', '.jpeg', '.png']);
const QUALITY = Number(process.env.IMAGE_QUALITY ?? 70);
const SOURCE_DIR =
  process.argv.find(arg => !arg.startsWith('-')) ??
  path.resolve(process.cwd(), 'public', 'images');
const DRY_RUN = process.argv.includes('--dry-run');

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

async function optimizeWebp(filePath) {
  const input = await fs.readFile(filePath);
  const originalSize = input.length;

  const buffer = await sharp(input)
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();

  if (buffer.length >= originalSize - 1024) {
    return { skipped: true, originalSize, newSize: buffer.length };
  }

  if (!DRY_RUN) {
    await fs.writeFile(filePath, buffer);
  }

  return { skipped: false, originalSize, newSize: buffer.length };
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.has(ext)) {
    return null;
  }

  // For now only optimise existing WebP assets. Other formats are skipped to avoid breaking references.
  if (ext !== '.webp') {
    return { skipped: true, reason: 'non-webp' };
  }

  try {
    const result = await optimizeWebp(filePath);
    return result;
  } catch (error) {
    console.error(`Failed to optimise ${filePath}:`, error.message);
    return { skipped: true, reason: 'error' };
  }
}

async function main() {
  const directory = path.isAbsolute(SOURCE_DIR)
    ? SOURCE_DIR
    : path.resolve(process.cwd(), SOURCE_DIR);

  const files = [];
  for await (const file of walk(directory)) {
    files.push(file);
  }

  if (!files.length) {
    console.log(`No files found in ${directory}`);
    return;
  }

  console.log(
    `Optimising ${files.length} image${files.length > 1 ? 's' : ''} under ${directory} (quality=${QUALITY})${
      DRY_RUN ? ' [dry-run]' : ''
    }`
  );

  for (const file of files) {
    const relativePath = path.relative(process.cwd(), file);
    const result = await optimizeFile(file);

    if (!result) {
      continue;
    }

    if (result.reason === 'non-webp') {
      console.log(`Skipped (format) ${relativePath}`);
      continue;
    }

    if (result.skipped) {
      console.log(`Skipped ${relativePath} (no significant savings)`);
      continue;
    }

    const savedKb = ((result.originalSize - result.newSize) / 1024).toFixed(1);
    const newSizeKb = (result.newSize / 1024).toFixed(1);
    const originalKb = (result.originalSize / 1024).toFixed(1);

    console.log(
      `${DRY_RUN ? '[dry-run] ' : ''}Optimised ${relativePath}: ${originalKb} KB → ${newSizeKb} KB (saved ${savedKb} KB)`
    );
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
