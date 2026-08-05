import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const rawRoot = path.join(root, "_raw", "assets");
const outRoot = path.join(root, "src", "assets");

const INPUT_EXT = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeFile(inputPath) {
  const relative = path.relative(rawRoot, inputPath);
  const ext = path.extname(inputPath).toLowerCase();
  if (!INPUT_EXT.has(ext)) return null;

  const outRelative = relative.replace(/\.(png|jpe?g|webp)$/i, ".webp");
  const outputPath = path.join(outRoot, outRelative);

  const inputStat = await stat(inputPath);
  try {
    const outputStat = await stat(outputPath);
    if (outputStat.mtimeMs >= inputStat.mtimeMs) {
      return { skipped: true, relative: outRelative };
    }
  } catch {
    /* output missing */
  }

  await mkdir(path.dirname(outputPath), { recursive: true });

  const buffer = await sharp(inputPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();

  await writeFile(outputPath, buffer);

  return {
    skipped: false,
    relative: outRelative,
    before: inputStat.size,
    after: buffer.length,
  };
}

async function main() {
  let rawExists = true;
  try {
    await stat(rawRoot);
  } catch {
    rawExists = false;
  }

  if (!rawExists) {
    console.error(`No originals found at ${path.relative(root, rawRoot)}`);
    console.error("Put source images in _raw/assets/ (mirroring src/assets), then re-run.");
    process.exit(1);
  }

  const inputs = (await walk(rawRoot)).filter((file) =>
    INPUT_EXT.has(path.extname(file).toLowerCase()),
  );

  if (inputs.length === 0) {
    console.log("No images to optimize.");
    return;
  }

  let converted = 0;
  let skipped = 0;
  let beforeTotal = 0;
  let afterTotal = 0;

  for (const inputPath of inputs) {
    const result = await optimizeFile(inputPath);
    if (!result) continue;

    if (result.skipped) {
      skipped += 1;
      console.log(`skip  ${result.relative}`);
      continue;
    }

    converted += 1;
    beforeTotal += result.before;
    afterTotal += result.after;
    const ratio = result.before
      ? `${Math.round((1 - result.after / result.before) * 100)}%`
      : "—";
    console.log(
      `ok    ${result.relative}  ${formatBytes(result.before)} → ${formatBytes(result.after)} (${ratio})`,
    );
  }

  console.log(
    `\nDone: ${converted} converted, ${skipped} up-to-date` +
      (converted
        ? `, ${formatBytes(beforeTotal)} → ${formatBytes(afterTotal)}`
        : ""),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
