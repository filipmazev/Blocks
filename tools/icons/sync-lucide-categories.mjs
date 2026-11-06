import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Read a checked-out official Lucide release. Normal icon generation never needs network access.
const args = process.argv.slice(2);
const option = (name) => args[args.indexOf(name) + 1];
const source = args.includes('--source') ? path.resolve(option('--source')) : undefined;
const version = args.includes('--version') ? option('--version') : undefined;
const revision = args.includes('--revision') ? option('--revision') : undefined;

if (!source || !version || !revision || !/^[a-f0-9]{40}$/.test(revision)) {
  throw new Error('Usage: node tools/icons/sync-lucide-categories.mjs --source <official checkout> --version <release> --revision <40-character commit>');
}

const categories = {};
const icons = {};

for (const file of (await readdir(path.join(source, 'categories'))).filter((file) => file.endsWith('.json')).sort()) {
  const metadata = JSON.parse(await readFile(path.join(source, 'categories', file), 'utf8'));

  if (typeof metadata.title !== 'string') throw new Error(`Missing category title: ${file}`);

  categories[file.slice(0, -5)] = metadata.title;
}

for (const file of (await readdir(path.join(source, 'icons'))).filter((file) => file.endsWith('.json')).sort()) {
  const metadata = JSON.parse(await readFile(path.join(source, 'icons', file), 'utf8'));
  const assigned = metadata.categories ?? [];

  if (!Array.isArray(assigned) || assigned.some((id) => typeof id !== 'string' || (!id.startsWith('$extends:') && !Object.hasOwn(categories, id)))) {
    throw new Error(`Unknown category in ${file}`);
  }

  const entry = { categories: [...new Set(assigned)].sort() };

  if (metadata.aliases) entry.aliases = metadata.aliases;

  icons[file.slice(0, -5)] = entry;
}

function resolveCategories(name, trail = new Set()) {
  if (!icons[name] || trail.has(name)) throw new Error(`Missing or circular category inheritance: ${name}`);

  const next = new Set(trail).add(name);

  return [...new Set(icons[name].categories.flatMap((id) => (id.startsWith('$extends:') ? resolveCategories(id.slice(9), next) : [id])))].sort();
}

for (const name of Object.keys(icons)) icons[name].categories = resolveCategories(name);

const output = fileURLToPath(new URL('./data/', import.meta.url));
const snapshot = { version, revision, source: `https://github.com/lucide-icons/lucide/tree/${revision}`, categories, icons };

await mkdir(output, { recursive: true });
await writeFile(path.join(output, 'lucide-categories.json'), `${JSON.stringify(snapshot, null, 4)}\n`);
await writeFile(path.join(output, 'LUCIDE-LICENSE'), await readFile(path.join(source, 'LICENSE'), 'utf8'));
console.log(`Synchronized official Lucide ${version} categories at ${revision}.`);
