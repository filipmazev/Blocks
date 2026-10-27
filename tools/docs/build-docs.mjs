import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { marked } from 'marked';
import ts from 'typescript';

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
files.sort();
const documents = {};
const catalogSource = await readFile(path.join(root, 'projects/playground/src/app/components/screens/library-components/component-demo/component-catalog.ts'), 'utf8');
// Read the TypeScript literal without executing it. Quotes, comments, property
// formatting and trailing commas must not affect documentation generation.
const catalogFile = ts.createSourceFile('component-catalog.ts', catalogSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const catalogDeclaration = catalogFile.statements
  .filter(ts.isVariableStatement)
  .flatMap(statement => [...statement.declarationList.declarations])
  .find(declaration => ts.isIdentifier(declaration.name) && declaration.name.text === 'COMPONENT_EXAMPLES');
const catalogArray = catalogDeclaration?.initializer;
if (!catalogArray || !ts.isArrayLiteralExpression(catalogArray)) throw new Error('COMPONENT_EXAMPLES must be an array literal.');
const catalog = catalogArray.elements.map(entry => {
  if (!ts.isObjectLiteralExpression(entry)) throw new Error('Component catalog entries must be object literals.');
  const readString = name => {
    const property = entry.properties.find(property => ts.isPropertyAssignment(property) &&
      (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) && property.name.text === name);
    if (!property || !ts.isStringLiteralLike(property.initializer)) throw new Error(`Catalog ${name} must be a string literal.`);
    return property.initializer.text;
  };
  return { id: readString('id'), readme: readString('readme') };
});
const routes = new Map(catalog.map(entry => [entry.readme, `components/${entry.id}`]));
routes.set('documentation/appearance/README.md', 'appearance');
routes.set('documentation/modal/README.md', 'modal');
routes.set('documentation/toastr/README.md', 'toastr');
routes.set('documentation/core/README.md', 'components');
routes.set('projects/blocks/README.md', 'home');
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
  text = text.replace(/'@(modal|toastr|forms)\/[^']+'/g, (_, entry) => `'@filip.mazev/blocks/${entry}'`)
    .replace(/@use 'core\/styles\/helpers'/g, "@use '@filip.mazev/blocks/core/styles/helpers'");
  snippets[`assets/code-snippets/${key}`] = text;
}
const aliases = {
  'assets/modal-readme/README.md': 'documentation/modal/README.md',
  'assets/toastr-readme/README.md': 'documentation/toastr/README.md',
  'assets/blocks-core-readme/README.md': 'documentation/core/README.md',
  'assets/core-readme/README.md': 'documentation/core/README.md'
};
const target = path.join(root, 'projects/playground/src/app/generated/documentation.ts');
await mkdir(path.dirname(target), { recursive: true });
await writeFile(target, `// Generated by tools/docs/build-docs.mjs. Do not edit.\nexport const DOCUMENTATION: Readonly<Record<string, string>> = ${JSON.stringify(documents, null, 2)};\nexport const DOCUMENTATION_ALIASES: Readonly<Record<string, string>> = ${JSON.stringify(aliases, null, 2)};\nexport const CODE_SNIPPETS: Readonly<Record<string, string>> = ${JSON.stringify(snippets, null, 2)};\n`);
console.log(`Bundled ${files.length} rendered documentation pages.`);
