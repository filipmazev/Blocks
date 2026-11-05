import { readFileSync } from 'node:fs';
import path from 'node:path';

import MagicString from 'magic-string';
import { isEntryPoint } from 'ng-packagr/src/lib/ng-package/nodes.js';
import ts from 'typescript';

import { getModuleSpecifiers } from '../../paths/helpers/module-specifier.helpers.mjs';

/** Let ng-packagr's relative-path analyser follow aliased modules using its dedicated analysis cache. */
export function prepareAnalysisAliases(graph, aliases) {
  for (const entry of graph.filter(isEntryPoint)) {
    if (entry.state === 'done') {
      continue;
    }

    const pending = [entry.data.entryPoint.entryFilePath];
    const visited = new Set();
    const options = entry.data.tsConfig.options;

    while (pending.length) {
      const filename = pending.pop();

      if (visited.has(filename)) {
        continue;
      }

      visited.add(filename);

      const content = readFileSync(filename, 'utf8');
      const code = new MagicString(content);

      for (const specifier of getModuleSpecifiers(content, filename)) {
        const alias = aliases.find((candidate) => specifier.value.startsWith(candidate.alias));
        let moduleName = specifier.value;

        if (alias) {
          const target = path.resolve(alias.directory, moduleName.slice(alias.alias.length));
          const relative = path.relative(options.rootDir, target);

          if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
            throw new Error(`Cross-entry-point alias '${moduleName}' must use a public @filip.mazev/blocks entry point.`);
          }

          moduleName = path.relative(path.dirname(filename), target).split(path.sep).join('/');

          if (!moduleName.startsWith('.')) {
            moduleName = `./${moduleName}`;
          }

          code.overwrite(specifier.start, specifier.end, moduleName);
        }

        if (moduleName.startsWith('.')) {
          const resolved = ts.resolveModuleName(moduleName, filename, options, ts.sys).resolvedModule?.resolvedFileName;

          if (resolved && !resolved.includes('/node_modules/')) {
            pending.push(resolved);
          }
        }
      }

      const cached = entry.cache.analyseSourcesFileCache.getOrCreate(filename);

      cached.content = code.toString();
      cached.exists = true;
    }
  }

  return graph;
}
