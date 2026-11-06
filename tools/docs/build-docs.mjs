import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { marked } from 'marked';
import ts from 'typescript';

import { formatGeneratedTypeScript } from '../helpers/generated-typescript.helpers.mjs';

for (const [language, grammar] of Object.entries({ typescript, xml, scss, bash, json })) hljs.registerLanguage(language, grammar);

// Highlight fences during generation so README content needs no browser DOM pass.
// Unknown or unlabelled languages remain escaped text; code never becomes markup.
marked.use({
  renderer: {
    code({ text, lang }) {
      const language = lang?.trim().split(/\s+/)[0]?.toLowerCase() ?? 'plaintext';
      const supported = hljs.getLanguage(language);
      const content = supported
        ? hljs.highlight(text, { language, ignoreIllegals: true }).value
        : text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
      const label = supported ? `${language} code example` : 'Code example';
      const codeLanguage = supported ? language : 'plaintext';
      return `<pre class="playground-code-block" tabindex="0" aria-label="${label}"><code class="hljs language-${codeLanguage}">${content}</code></pre>\n`;
    }
  }
});

// Documentation ships as rendered HTML in the application bundle. No README
// requests, markdown parsing or external documentation service at runtime.
const root = fileURLToPath(new URL('../../', import.meta.url));
const files = [];
async function collect(directory) {
  for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const relative = `${directory}/${entry.name}`;
    if (entry.isDirectory() && !['node_modules', 'dist', 'tests'].includes(entry.name)) await collect(relative);
    else if (entry.isFile() && entry.name === 'README.md') files.push(relative);
  }
}
await collect('projects/blocks');
await collect('documentation');
await collect('projects/playground/src/app/components/screens/appearance');
await collect('projects/playground/src/app/components/screens/utilities');
await collect('projects/playground/src/app/components/screens/token-catalog');
await collect('projects/playground/src/app/components/screens/icon-catalog');
await collect('projects/playground/src/app/components/screens/library-components/page-examples');
files.sort();
const documents = {};
const catalogSource = await readFile(
  path.join(root, 'projects/playground/src/app/components/screens/library-components/component-demo/constants/component-catalog.constants.ts'),
  'utf8'
);
// Read the TypeScript literal without executing it. Quotes, comments, property
// formatting and trailing commas must not affect documentation generation.
const catalogFile = ts.createSourceFile('component-catalog.ts', catalogSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const catalogDeclaration = catalogFile.statements
  .filter(ts.isVariableStatement)
  .flatMap((statement) => [...statement.declarationList.declarations])
  .find((declaration) => ts.isIdentifier(declaration.name) && declaration.name.text === 'COMPONENT_EXAMPLES');
const catalogArray = catalogDeclaration?.initializer;
if (!catalogArray || !ts.isArrayLiteralExpression(catalogArray)) throw new Error('COMPONENT_EXAMPLES must be an array literal.');
const catalog = catalogArray.elements.map((entry) => {
  if (!ts.isObjectLiteralExpression(entry)) throw new Error('Component catalog entries must be object literals.');
  const readString = (name) => {
    const property = entry.properties.find(
      (property) => ts.isPropertyAssignment(property) && (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) && property.name.text === name
    );
    if (!property || !ts.isStringLiteralLike(property.initializer)) throw new Error(`Catalog ${name} must be a string literal.`);
    return property.initializer.text;
  };
  const layout = entry.properties.some(
    (property) =>
      ts.isPropertyAssignment(property) &&
      ts.isIdentifier(property.name) &&
      property.name.text === 'layout' &&
      property.initializer.kind === ts.SyntaxKind.TrueKeyword
  );
  return { id: readString('id'), readme: readString('readme'), layout };
});
const routes = new Map();

// Basic components precede composed examples; shared guides keep their first canonical route.
for (const entry of catalog) {
  if (!routes.has(entry.readme)) routes.set(entry.readme, `components/${entry.layout ? 'layout/' : ''}${entry.id}`);
}

routes.set('projects/playground/src/app/components/screens/appearance/README.md', 'appearance');
routes.set('projects/playground/src/app/components/screens/utilities/README.md', 'utilities');
for (const file of files) {
  const utility = /^projects\/playground\/src\/app\/components\/screens\/utilities\/components\/([^/]+)\/README\.md$/.exec(file);
  if (utility && utility[1] !== 'utility-page') routes.set(file, `utilities/${utility[1]}`);
}
routes.set('projects/playground/src/app/components/screens/token-catalog/README.md', 'tokens');
routes.set('projects/playground/src/app/components/screens/icon-catalog/README.md', 'icons');
for (const slot of ['header', 'footer', 'banner']) {
  routes.set(`projects/blocks/primitives/directives/side-panel-${slot}/README.md`, 'components/side-panel');
}
routes.set('projects/playground/src/app/components/screens/library-components/page-examples/README.md', 'components/layout/page-container');
for (const section of ['page-header', 'page-content', 'page-footer']) {
  routes.set(`projects/blocks/primitives/components/${section}/README.md`, 'components/layout/page-container');
}
routes.set('projects/blocks/primitives/components/side-panel-layout/README.md', 'components/side-panel');
routes.set('projects/blocks/primitives/directives/virtual-item/README.md', 'components/virtual-collection');
routes.set('projects/blocks/modal/README.md', 'modal');
routes.set('projects/blocks/toastr/README.md', 'toastr');
routes.set('projects/blocks/core/README.md', 'components');
routes.set('projects/blocks/README.md', 'home');
for (const file of files) {
  const release = /^documentation\/releases\/([^/]+)\/README\.md$/.exec(file);
  if (release) routes.set(file, `release-notes/${release[1]}`);
}
for (const file of files) {
  const html = await marked.parse(await readFile(path.join(root, file), 'utf8'), { gfm: true });
  documents[file] = html.replace(/href="([^"#][^"]*)"/g, (match, href) => {
    if (/^(?:[a-z]+:|\/)/i.test(href)) return match;
    const [target, fragment] = href.split('#');
    const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(file), target));
    const route = routes.get(resolved);
    if (route) return `href="${route}${fragment ? `#${fragment}` : ''}"`;
    if (resolved.startsWith('documentation/') && resolved.endsWith('.md')) return `href="assets/${resolved}"`;
    return match;
  });
}
const snippets = {};
async function collectSnippets(directory) {
  for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const relative = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await collectSnippets(relative);
    else if (entry.name.endsWith('.txt')) snippets[relative.replace('projects/playground/src/', '')] = await readFile(path.join(root, relative), 'utf8');
  }
}
await collectSnippets('projects/playground/src/assets/code-snippets');
// Keep the displayed component code in sync with the actual demos rather than
// publishing hand-maintained copies of deprecated package APIs.
const liveExamples = {
  'modal/modal.ts.txt': 'modal/components/demo-modal/demo-modal.ts',
  'modal/modal.html.txt': 'modal/components/demo-modal/demo-modal.html',
  'modal/modal.scss.txt': 'modal/components/demo-modal/demo-modal.scss',
  'modal/confirm-close-modal.ts.txt': 'modal/components/confirm-close/confirm-close.ts',
  'modal/confirm-close-modal.html.txt': 'modal/components/confirm-close/confirm-close.html',
  'modal/confirm-close-modal.scss.txt': 'modal/components/confirm-close/confirm-close.scss',
  'toastr/demo-toast.ts.txt': 'toastr/components/demo-toast/demo-toast.ts',
  'toastr/demo-toast.html.txt': 'toastr/components/demo-toast/demo-toast.html',
  'toastr/demo-toast.scss.txt': 'toastr/components/demo-toast/demo-toast.scss'
};
for (const [key, source] of Object.entries(liveExamples)) {
  let text = await readFile(path.join(root, 'projects/playground/src/app/components/screens/library-components', source), 'utf8');
  text = text
    .replace(/'@(modal|toastr|forms)\/[^']+'/g, (_, entry) => `'@filip.mazev/blocks/${entry}'`)
    .replace(/@use 'core\/styles\/helpers'/g, "@use '@filip.mazev/blocks/core/styles/helpers'");
  snippets[`assets/code-snippets/${key}`] = text;
}
async function collectUtilitySnippets(directory, prefix = '') {
  for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) {
    const relative = `${directory}/${entry.name}`;
    const key = `${prefix}${entry.name}`;
    if (entry.isDirectory()) await collectUtilitySnippets(relative, `${key}/`);
    else if (/\.(?:ts|html|scss)$/.test(entry.name) && !entry.name.endsWith('.spec.ts')) {
      const source = await readFile(path.join(root, relative), 'utf8');
      snippets[`assets/code-snippets/utilities/${key}.txt`] = source.replace(/@use 'core\/styles\/helpers'/g, "@use '@filip.mazev/blocks/core/styles/helpers'");
    }
  }
}
await collectUtilitySnippets('projects/playground/src/app/components/screens/utilities');
const aliases = {
  'projects/blocks/forms/components/button/directives/README.md': 'projects/blocks/forms/directives/button-icon/README.md',
  'projects/blocks/forms/directives/error/README.md': 'projects/blocks/forms/components/error/README.md',
  'projects/blocks/forms/directives/hint/README.md': 'projects/blocks/forms/components/hint/README.md',
  'projects/blocks/icons/components/README.md': 'projects/blocks/icons/components/icon/README.md',
  'projects/blocks/modal/components/README.md': 'projects/blocks/modal/components/modal-core/README.md',
  'projects/blocks/toastr/components/README.md': 'projects/blocks/toastr/components/toast-core/README.md',
  'documentation/core/README.md': 'projects/blocks/core/README.md',
  'documentation/modal/README.md': 'projects/blocks/modal/README.md',
  'documentation/toastr/README.md': 'projects/blocks/toastr/README.md',
  'documentation/appearance/README.md': 'projects/playground/src/app/components/screens/appearance/README.md',

  'assets/modal-readme/README.md': 'projects/blocks/modal/README.md',
  'assets/toastr-readme/README.md': 'projects/blocks/toastr/README.md',
  'assets/blocks-core-readme/README.md': 'projects/blocks/core/README.md',
  'assets/core-readme/README.md': 'projects/blocks/core/README.md'
};
const target = path.join(root, 'projects/playground/src/app/generated/documentation.ts');
await mkdir(path.dirname(target), { recursive: true });
const generated = `// Generated by tools/docs/build-docs.mjs. Do not edit.\nexport const DOCUMENTATION: Readonly<Record<string, string>> = ${JSON.stringify(documents, null, 2)};\nexport const DOCUMENTATION_ALIASES: Readonly<Record<string, string>> = ${JSON.stringify(aliases, null, 2)};\nexport const CODE_SNIPPETS: Readonly<Record<string, string>> = ${JSON.stringify(snippets, null, 2)};\n`;
const formatted = await formatGeneratedTypeScript(generated, target);
await writeFile(target, formatted);
console.log(`Bundled ${files.length} rendered documentation pages.`);
