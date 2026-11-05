import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import ts from 'typescript';

import { getModuleSpecifiers } from './helpers/module-specifier.helpers.mjs';
import { readPathAliases } from './helpers/path-alias.helpers.mjs';

const root = process.cwd();
const project = path.resolve(root, process.argv[2]);
const config = ts.readConfigFile(project, ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, path.dirname(project));
const aliases = readPathAliases(root);
const { rootDir, outDir } = parsed.options;

if (!rootDir || !outDir) {
  throw new Error('Alias rewriting requires explicit rootDir and outDir options.');
}

async function rewriteDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await rewriteDirectory(filename);

      continue;
    }

    if (!/\.(?:js|d\.ts)$/.test(filename)) {
      continue;
    }

    const source = await readFile(filename, 'utf8');
    const edits = [];

    for (const specifier of getModuleSpecifiers(source, filename)) {
      const alias = aliases.find((candidate) => specifier.value.startsWith(candidate.alias));

      if (!alias) {
        continue;
      }

      const target = path.resolve(alias.directory, specifier.value.slice(alias.alias.length));
      const relative = path.relative(rootDir, target);

      if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
        throw new Error(`Output alias '${specifier.value}' points outside the compiler root.`);
      }

      let replacement = path.relative(path.dirname(filename), path.join(outDir, relative)).split(path.sep).join('/');

      if (!replacement.startsWith('.')) {
        replacement = `./${replacement}`;
      }

      edits.push({ ...specifier, replacement });
    }

    let content = source;

    for (const edit of edits.sort((left, right) => right.start - left.start)) {
      content = content.slice(0, edit.start) + edit.replacement + content.slice(edit.end);
    }

    if (content !== source) {
      await writeFile(filename, content);
    }
  }
}

await rewriteDirectory(outDir);
