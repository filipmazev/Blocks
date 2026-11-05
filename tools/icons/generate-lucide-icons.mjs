import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { formatGeneratedTypeScript } from '../helpers/generated-typescript.helpers.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '../..');
const lucideRoot = path.join(repoRoot, 'node_modules', 'lucide-static', 'icons');

const outRoot = path.join(repoRoot, 'projects', 'blocks', 'icons', 'assets', 'lucide');
const generatedFiles = new Set();

function toPascalCase(fileName) {
  return fileName
    .replace(/\.svg$/, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function escapeTemplateLiteral(value) {
  return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function extractSvgParts(svg) {
  const compact = svg
    .replace(/\r?\n/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const viewBoxMatch = compact.match(/viewBox="([^"]+)"/);
  if (!viewBoxMatch) {
    throw new Error(`Missing viewBox in SVG: ${compact.slice(0, 120)}...`);
  }

  const innerMatch = compact.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/i);
  if (!innerMatch) {
    throw new Error(`Could not extract inner SVG markup`);
  }

  return {
    viewBox: viewBoxMatch[1],
    svgContent: innerMatch[1].trim()
  };
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeTypeScript(fileName, source) {
  const target = path.join(outRoot, fileName);
  const formatted = await formatGeneratedTypeScript(source, target);
  let current;

  generatedFiles.add(fileName);

  try {
    current = await fs.readFile(target, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  if (current !== formatted) {
    const temporary = `${target}.tmp`;

    await fs.writeFile(temporary, formatted, 'utf8');
    await fs.rename(temporary, target);
  }
}

async function listSvgFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.svg'))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function buildIconTs({ exportName, iconName, viewBox, svgContent, relativeDefineIconImport }) {
  return `import { defineIcon } from '${relativeDefineIconImport}';

export const ${exportName} = defineIcon({
  name: '${iconName}',
  viewBox: '${viewBox}',
  svgContent: \`${escapeTemplateLiteral(svgContent)}\`
} as const);
`;
}

function buildNamesTs(names) {
  return `export const lucideNames = ${JSON.stringify(names, null, 2)} as const;

export type LucideName = typeof lucideNames[number];
`;
}

function buildLoaderTs(entries) {
  const loaders = entries
    .map(({ iconName, exportName }) => {
      return `  '${iconName}': () => import('./${iconName}').then(m => m.${exportName})`;
    })
    .join(',\n');

  // 3. Adjusted relative path to the interface based on the shallower folder structure
  return `import type { IconDefinition } from '@icons/interfaces/icon-definition.interface';
import type { LucideName } from './names';

export type LucideIconLoaders = Record<
  LucideName,
  () => Promise<IconDefinition>
>;

export const LUCIDE_ICON_LOADERS: LucideIconLoaders = {
${loaders}
};
`;
}

async function generateLucide() {
  await ensureDir(outRoot);

  const files = await listSvgFiles(lucideRoot);
  const names = [];
  const loaderEntries = [];

  for (const file of files) {
    const iconName = file.replace(/\.svg$/, '');
    const pascal = toPascalCase(file);
    const exportName = `lucide${pascal}`; // e.g., lucideArrowRight

    const svgRaw = await fs.readFile(path.join(lucideRoot, file), 'utf8');
    const { viewBox, svgContent } = extractSvgParts(svgRaw);

    const ts = buildIconTs({
      exportName,
      iconName,
      viewBox,
      svgContent,
      relativeDefineIconImport: '@icons/helpers/define-icon'
    });

    await writeTypeScript(`${iconName}.ts`, ts);

    names.push(iconName);
    loaderEntries.push({
      iconName,
      exportName
    });
  }

  await writeTypeScript('names.ts', buildNamesTs(names));

  await writeTypeScript('icon-loader.ts', buildLoaderTs(loaderEntries));

  await writeTypeScript('public-api.ts', `export * from './names';\nexport * from './loader';\n`);

  console.log(`Generated ${files.length} icons for Lucide`);
}

async function main() {
  await generateLucide();

  for (const filename of await fs.readdir(outRoot)) {
    if (filename.endsWith('.ts') && !generatedFiles.has(filename)) {
      await fs.unlink(path.join(outRoot, filename));
    }
  }

  console.log('Lucide generation complete.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
