import { createHash } from 'node:crypto';
import path from 'node:path';

import remapping from '@ampproject/remapping';
import MagicString from 'magic-string';
import { findEntryPointInProgress } from 'ng-packagr/src/lib/ng-package/nodes.js';

import { getModuleSpecifiers } from '../../paths/helpers/module-specifier.helpers.mjs';

/** Resolve internal aliases in ng-packagr's emitted cache, before its bundler treats bare names as external packages. */
export function rewriteBundleAliases(graph, aliases) {
  const entry = findEntryPointInProgress(graph);
  const { destinationFiles, tsConfig } = entry.data;
  const cache = entry.cache.outputCache;

  for (const [filename, output] of cache) {
    if (!/\.(?:js|d\.ts)$/.test(filename)) {
      continue;
    }

    const code = new MagicString(output.content);
    for (const specifier of getModuleSpecifiers(output.content, filename)) {
      const alias = aliases.find((candidate) => specifier.value.startsWith(candidate.alias));

      if (alias) {
        const target = path.resolve(alias.directory, specifier.value.slice(alias.alias.length));
        const relative = path.relative(tsConfig.options.rootDir, target);

        if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
          throw new Error(`Cross-entry-point alias '${specifier.value}' must use a public @filip.mazev/blocks entry point.`);
        }

        const outputRoot = path.dirname(filename.endsWith('.d.ts') ? destinationFiles.declarations : destinationFiles.esm2022);
        const outputTarget = path.join(outputRoot, relative).replace(/\.(?:[cm]?ts|[cm]?js)$/, '');
        let relativeSpecifier = path.relative(path.dirname(filename), outputTarget).split(path.sep).join('/');

        if (!relativeSpecifier.startsWith('.')) {
          relativeSpecifier = `./${relativeSpecifier}`;
        }

        code.overwrite(specifier.start, specifier.end, relativeSpecifier);
      }
    }

    if (!code.hasChanged()) {
      continue;
    }

    const content = code.toString();
    const version = createHash('sha256').update(content).digest('hex');
    const mapKey = `${filename}.map`;
    const previousMap = cache.get(mapKey);

    if (previousMap) {
      const map = code.generateMap({ source: filename, includeContent: true, hires: true });
      const composed = remapping([JSON.parse(map.toString()), JSON.parse(previousMap.content)], () => null);

      cache.set(mapKey, { content: composed.toString(), version });
    }

    cache.set(filename, { content, version });
  }

  return graph;
}
