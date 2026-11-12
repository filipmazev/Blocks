import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { formatGeneratedTypeScript } from '../helpers/generated-typescript.helpers.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const screen = 'projects/playground/src/app/components/screens/library-components/component-demo';
const catalogPath = `${screen}/constants/component-catalog.constants.ts`;
const templatePath = `${screen}/component-index.html`;
const overridesPath = `${screen}/constants/component-preview.overrides.constants.ts`;
const typeTarget = `${screen}/types/component-preview.types.ts`;
const mapTarget = `${screen}/constants/component-preview.constants.ts`;

const banner = '// Generated from the preview vignettes and component catalog by tools/playground/generate-component-previews.mjs. Do not edit.';
const defaultKinds = {
  Primitives: 'surface',
  Forms: 'field',
  Navigation: 'nav',
  Modals: 'modal',
  Notifications: 'toast'
};

const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

/** Collect every `@case ('name')` vignette rendered by the catalog template. */
function readVignettes(template) {
  return [...template.matchAll(/@case\s*\(\s*'([a-z][a-z-]*)'\s*\)/g)].map((match) => match[1]);
}

/** Read top-level catalog entries without executing the TypeScript source. */
function readCatalog(source) {
  const declaration = source.indexOf('=', source.indexOf('COMPONENT_EXAMPLES'));
  const arrayStart = source.indexOf('[', declaration);
  const entries = [];

  let depth = 0;
  let objectStart = -1;

  for (let index = arrayStart; index < source.length; index++) {
    const character = source[index];

    if (character === '/' && source[index + 1] === '/') {
      index = source.indexOf('\n', index);
      continue;
    }

    if (character === "'" || character === '"' || character === '`') {
      const quote = character;

      index++;

      while (index < source.length) {
        if (source[index] === '\\') index += 2;
        else if (source[index] === quote) break;
        else index++;
      }

      continue;
    }

    if (character === '[') depth++;
    if (character === ']') {
      depth--;

      if (depth === 0) break;
    }

    if (depth !== 1) continue;

    if (character === '{' && objectStart < 0) objectStart = index;

    if (character === '}' && objectStart >= 0) {
      const block = source.slice(objectStart, index + 1);
      const id = block.match(/\bid:\s*'([^']+)'/)?.[1];
      const group = block.match(/\bgroup:\s*'([^']+)'/)?.[1];

      if (id) entries.push({ id, group });

      objectStart = -1;
    }
  }

  return entries;
}

/** Read the explicit per-entry vignette intent maintained by hand. */
function readOverrides(source) {
  return [...source.matchAll(/(?:'([a-z][a-z0-9-]*)'|([a-z][a-z0-9-]*))\s*:\s*'([a-z][a-z-]*)'/g)].map((match) => [match[1] ?? match[2], match[3]]);
}

const [template, catalog, overridesSource] = await Promise.all([read(templatePath), read(catalogPath), read(overridesPath)]);

const vignettes = [...new Set(readVignettes(template))].sort();
const entries = readCatalog(catalog);
const overrides = new Map(readOverrides(overridesSource));
const ids = new Set(entries.map((entry) => entry.id));
const unknownKinds = [...overrides].filter(([, kind]) => !vignettes.includes(kind)).map(([id, kind]) => `${id} → ${kind}`);
const missing = entries.filter((entry) => !overrides.has(entry.id)).map((entry) => entry.id);
const stale = [...overrides.keys()].filter((id) => !ids.has(id));

if (!vignettes.length) throw new Error(`No preview vignettes found in ${templatePath}.`);
if (!entries.length) throw new Error(`No catalog entries found in ${catalogPath}.`);

if (unknownKinds.length) {
  throw new Error(
    `Unknown component preview kinds in ${overridesPath}: ${unknownKinds.join(', ')}. Add a matching @case to ${templatePath} or use one of: ${vignettes.join(', ')}.`
  );
}

if (missing.length) {
  throw new Error(
    `Missing component preview mappings in ${overridesPath} for: ${missing.join(', ')}. Choose a vignette for each new catalog entry (available: ${vignettes.join(', ')}).`
  );
}

if (stale.length) console.warn(`[component-previews] Ignoring mappings for catalog entries that no longer exist: ${stale.join(', ')}.`);

const mapping = entries.map((entry) => [entry.id, overrides.get(entry.id) ?? defaultKinds[entry.group] ?? 'surface']);
const typeSource = `${banner}\nexport type ComponentPreviewKind = ${vignettes.map((kind) => `'${kind}'`).join(' | ')};\n`;
const mapSource = `${banner}\nimport type { ComponentPreviewKind } from '@playground/components/screens/library-components/component-demo/types/component-preview.types';\n\nexport const COMPONENT_PREVIEW_KINDS: Readonly<Record<string, ComponentPreviewKind>> = {\n${mapping
  .map(([id, kind]) => `  '${id}': '${kind}'`)
  .join(',\n')}\n};\n`;

const outputs = [
  [typeTarget, await formatGeneratedTypeScript(typeSource, typeTarget)],
  [mapTarget, await formatGeneratedTypeScript(mapSource, mapTarget)]
];

for (const [target, generated] of outputs) {
  const destination = new URL(`../../${target}`, import.meta.url);
  const previous = await readFile(destination, 'utf8').catch((error) => {
    if (error.code === 'ENOENT') return undefined;

    throw error;
  });

  if (previous === generated) {
    console.log(`Unchanged ${target}`);
  } else {
    await writeFile(destination, generated);
    console.log(`Updated ${target}`);
  }
}

console.log(`Generated ${vignettes.length} preview kinds for ${mapping.length} catalog entries in ${root}.`);
