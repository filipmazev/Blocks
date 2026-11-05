import path from 'node:path';

import ts from 'typescript';

/** Read TypeScript's actual path mappings so linting and migration use the same aliases as the compiler. */
export function readPathAliases(root) {
  const configPath = path.join(root, 'tsconfig.json');
  const config = ts.readConfigFile(configPath, ts.sys.readFile);

  if (config.error) {
    throw new Error(ts.flattenDiagnosticMessageText(config.error.messageText, '\n'));
  }

  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);

  return Object.entries(parsed.options.paths ?? {})
    .filter(([alias, targets]) => alias.startsWith('@') && alias.endsWith('/*') && targets.length === 1 && targets[0].endsWith('/*'))
    .map(([alias, targets]) => ({ alias: alias.slice(0, -1), directory: path.resolve(root, targets[0].slice(0, -1)) }))
    .sort((left, right) => right.directory.length - left.directory.length || left.alias.localeCompare(right.alias));
}

/** Keep direct siblings relative; use a mapped alias for any other relative module path. */
export function resolvePathAlias(specifier, filename, aliases) {
  if (!specifier.startsWith('.') || !filename || filename.startsWith('<')) {
    return undefined;
  }

  const target = path.resolve(path.dirname(filename), specifier);

  if (path.dirname(target) === path.dirname(filename)) {
    return undefined;
  }

  for (const entry of aliases) {
    const relative = path.relative(entry.directory, target);

    if (relative && !relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative)) {
      return entry.alias + relative.split(path.sep).join('/');
    }
  }

  return undefined;
}
