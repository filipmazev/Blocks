import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import postcss from 'postcss';
import valueParser from 'postcss-value-parser';
import ts from 'typescript';

import * as sass from 'sass';

const TOKEN_PATTERN = /^--bx-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const TOKEN_REFERENCE_PATTERN = /--bx-[a-z0-9]+(?:-[a-z0-9]+)*(?![\w-])/g;

const EXCLUDED_DIRECTORIES = new Set(['examples', 'schematics', 'node_modules']);

/** Reads Sass values and inventories declared variables, runtime references, and CSS classes. */
export async function readTokenSources(root) {
  const values = {};
  const variables = new Map();
  const classes = new Set();

  const options = {
    loadPaths: [path.join(root, 'projects/blocks'), path.join(root, 'node_modules')]
  };

  const result = sass.compile(path.join(root, 'tools/tokens/catalog.scss'), {
    ...options,
    functions: {
      'export-token($name, $value)': ([name, value]) => {
        values[name.assertString('name').text] = sassValue(value);

        return sass.sassNull;
      }
    }
  });

  collectCss(result.css, 'global', variables, classes);

  const files = await sourceFiles(root, 'projects/blocks');

  for (const file of files) {
    const absolutePath = path.join(root, file);

    if (file.endsWith('.scss')) {
      if (!isComponentStylesheet(file) || path.basename(file).startsWith('_')) continue;

      const compiled = sass.compile(absolutePath, options);

      collectCss(compiled.css, file, variables, classes);

      continue;
    }

    if (!isRuntimeSource(file)) continue;

    const source = await readFile(absolutePath, 'utf8');
    const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);

    collectRuntimeReferences(ast, file, variables);
  }

  return {
    values,
    variables,
    classes: [...classes]
  };
}

/** Preserves Sass serialization while exposing maps and quoted string lists structurally. */
function sassValue(value) {
  if (value instanceof sass.SassMap) {
    return Object.fromEntries([...value.contents].map(([key, entry]) => [key instanceof sass.SassString ? key.text : key.toString(), sassValue(entry)]));
  }

  if (value instanceof sass.SassString) return value.text;

  if (value instanceof sass.SassList) {
    const entries = [...value.asList];

    if (value.separator === ',' && entries.every((entry) => entry instanceof sass.SassString && entry.hasQuotes)) {
      return entries.map((entry) => entry.text);
    }

    const separator = value.separator === ',' ? ', ' : value.separator === '/' ? ' / ' : ' ';
    const serialized = entries.map(sassValue).join(separator);

    return value.hasBrackets ? `[${serialized}]` : serialized;
  }

  return value.toString();
}

/** Recursively discovers source files in stable order, excluding generated and example directories. */
async function sourceFiles(root, directory) {
  const result = [];

  const entries = await readdir(path.join(root, directory), {
    withFileTypes: true
  });

  entries.sort((a, b) => a.name.localeCompare(b.name, 'en'));

  for (const entry of entries) {
    const file = `${directory}/${entry.name}`;

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRECTORIES.has(entry.name)) continue;

      result.push(...(await sourceFiles(root, file)));

      continue;
    }

    if (entry.isFile() && /\.(?:scss|ts)$/.test(entry.name)) {
      result.push(file);
    }
  }

  return result;
}

/** Determines whether an SCSS file is a component, directive, or effects entry point. */
function isComponentStylesheet(file) {
  return file.includes('/components/') || file.includes('/directives/') || file.endsWith('/effects/effects.scss');
}

/** Excludes tests and generated token definitions from runtime reference discovery. */
function isRuntimeSource(file) {
  if (!file.endsWith('.ts')) return false;
  if (file.endsWith('.spec.ts') || file.endsWith('.test.ts') || file.endsWith('.d.ts')) return false;
  if (file.includes('/constants/tokens.') || file.includes('/constants/token-catalog.')) return false;

  return true;
}

/** Collects declared CSS variables, var() references, and emitted CSS classes. */
function collectCss(css, scope, variables, classes) {
  const ast = postcss.parse(css);

  ast.walkAtRules('property', (rule) => {
    const name = rule.params.trim();

    if (!TOKEN_PATTERN.test(name)) return;

    const entry = recordVariable(variables, name, scope);

    rule.walkDecls('initial-value', (declaration) => {
      entry.defaults.add(declaration.value);
    });
  });

  if (classes) {
    ast.walkRules((rule) => {
      for (const match of rule.selector.matchAll(/\.([\w-]+)/g)) {
        if (match[1].startsWith('bx-')) {
          classes.add(match[1]);
        }
      }
    });
  }

  ast.walkDecls((declaration) => {
    if (TOKEN_PATTERN.test(declaration.prop)) {
      const entry = recordVariable(variables, declaration.prop, scope);

      entry.defaults.add(declaration.value);
    }

    collectValueReferences(declaration.value, scope, variables);
  });
}

/** Collects token names referenced by CSS var() expressions without recording their fallbacks. */
function collectValueReferences(value, scope, variables) {
  const parsed = valueParser(value);

  parsed.walk((node) => {
    if (node.type !== 'function' || node.value.toLowerCase() !== 'var') return;

    const separatorIndex = node.nodes.findIndex((child) => child.type === 'div' && child.value === ',');
    const nameNodes = separatorIndex === -1 ? node.nodes : node.nodes.slice(0, separatorIndex);
    const name = valueParser.stringify(nameNodes).trim();

    if (!TOKEN_PATTERN.test(name)) return;

    recordVariable(variables, name, scope);
  });
}

/** Finds complete token names inside TypeScript string literals and template fragments. */
function collectRuntimeReferences(ast, scope, variables) {
  const visit = (node) => {
    if (ts.isStringLiteralLike(node)) {
      collectTextReferences(node.text, scope, variables);
    } else if (ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) {
      collectTextReferences(node.text, scope, variables, ts.isTemplateHead(node) || ts.isTemplateMiddle(node));
    }

    ts.forEachChild(node, visit);
  };

  visit(ast);
}

/** Records complete token names while ignoring dynamically constructed prefixes. */
function collectTextReferences(text, scope, variables, hasDynamicSuffix = false) {
  for (const match of text.matchAll(TOKEN_REFERENCE_PATTERN)) {
    const endIndex = match.index + match[0].length;

    if (hasDynamicSuffix && endIndex === text.length) continue;

    recordVariable(variables, match[0], scope);
  }
}

/** Accumulates variable scopes and declared default values. */
function recordVariable(variables, name, scope) {
  let entry = variables.get(name);

  if (!entry) {
    entry = {
      name,
      scopes: new Set(),
      selectors: new Set(),
      defaults: new Set()
    };

    variables.set(name, entry);
  }

  entry.scopes.add(scope);

  return entry;
}
