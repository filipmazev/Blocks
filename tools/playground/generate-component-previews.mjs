import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import ts from 'typescript';

import { readPreviewCompositions } from '../helpers/component-preview.helpers.mjs';
import { formatGeneratedTypeScript } from '../helpers/generated-typescript.helpers.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const screen = 'projects/playground/src/app/components/screens/library-components/component-demo';
const catalogPath = `${screen}/constants/component-catalog.constants.ts`;
const templatePath = `${screen}/components/component-preview/component-preview.html`;
const recipesPath = `${screen}/constants/component-preview-recipes.constants.ts`;
const overridesPath = `${screen}/constants/component-preview.overrides.constants.ts`;
const typeTarget = `${screen}/types/component-preview.types.ts`;
const mapTarget = `${screen}/constants/component-preview.constants.ts`;

const banner = '// Generated from the preview vignettes and component catalog by tools/playground/generate-component-previews.mjs. Do not edit.';
const read = (path) => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

/** Read a named declaration using the TypeScript parser, without executing application code. */
function readDeclaration(source, name) {
  const file = ts.createSourceFile('preview.ts', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const declaration = file.statements
    .filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .find((entry) => ts.isIdentifier(entry.name) && entry.name.text === name);
  let initializer = declaration?.initializer;

  while (initializer && (ts.isSatisfiesExpression(initializer) || ts.isAsExpression(initializer) || ts.isParenthesizedExpression(initializer))) {
    initializer = initializer.expression;
  }

  if (!initializer) throw new Error(`Missing ${name} declaration.`);

  return initializer;
}

/** Read explicit object keys, rejecting duplicate or computed names instead of silently dropping them. */
function readProperties(object) {
  if (!ts.isObjectLiteralExpression(object)) throw new Error('Preview registrations must be an object literal.');

  const properties = new Map();

  for (const property of object.properties) {
    if (!ts.isPropertyAssignment(property) || (!ts.isIdentifier(property.name) && !ts.isStringLiteral(property.name))) {
      throw new Error('Preview registrations must use explicit property names.');
    }

    const key = property.name.text;

    if (properties.has(key)) throw new Error(`Duplicate preview registration: ${key}.`);

    properties.set(key, property.initializer);
  }

  return properties;
}

/** Read catalog identifiers without depending on quote style or property ordering. */
function readCatalog(source) {
  const array = readDeclaration(source, 'COMPONENT_EXAMPLES');

  if (!ts.isArrayLiteralExpression(array)) throw new Error('COMPONENT_EXAMPLES must be an array literal.');

  return array.elements.map((entry) => {
    const id = readProperties(entry).get('id');

    if (!id || !ts.isStringLiteralLike(id)) throw new Error('Catalog identifiers must be string literals.');

    return { id: id.text };
  });
}

/** Read the explicit per-entry vignette intent maintained by hand. */
function readOverrides(source) {
  return [...readProperties(readDeclaration(source, 'COMPONENT_PREVIEW_OVERRIDES'))].map(([id, kind]) => {
    if (!ts.isStringLiteralLike(kind)) throw new Error(`Preview mapping for ${id} must be a string literal.`);

    return [id, kind.text];
  });
}

const [template, catalog, overridesSource, recipesSource] = await Promise.all([read(templatePath), read(catalogPath), read(overridesPath), read(recipesPath)]);

const templateKinds = readPreviewCompositions(template, templatePath);
const recipeKinds = [...readProperties(readDeclaration(recipesSource, 'COMPONENT_PREVIEW_RECIPES')).keys()];
const allKinds = [...templateKinds, ...recipeKinds];
const duplicates = allKinds.filter((kind, index) => allKinds.indexOf(kind) !== index);

if (duplicates.length) throw new Error(`Preview kinds must have one renderer: ${duplicates.join(', ')}.`);

const vignettes = [...new Set(allKinds)].sort();
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
    `Unknown component preview kinds in ${overridesPath}: ${unknownKinds.join(', ')}. Add a real component recipe to ${recipesPath}, a matching @case to ${templatePath}, or use one of: ${vignettes.join(', ')}.`
  );
}

if (missing.length) {
  throw new Error(
    `Missing component preview mappings in ${overridesPath} for: ${missing.join(', ')}. Choose a vignette for each new catalog entry (available: ${vignettes.join(', ')}).`
  );
}

if (stale.length) console.warn(`[component-previews] Ignoring mappings for catalog entries that no longer exist: ${stale.join(', ')}.`);

if (ids.size !== entries.length) throw new Error('Catalog identifiers must be unique.');

const mapping = entries.map((entry) => [entry.id, overrides.get(entry.id)]);
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
  } else if (process.argv.includes('--check')) {
    throw new Error(`Outdated ${target}. Run npm run tools:generate:component-previews.`);
  } else {
    await writeFile(destination, generated);
    console.log(`Updated ${target}`);
  }
}

console.log(`Generated ${vignettes.length} preview kinds for ${mapping.length} catalog entries in ${root}.`);
