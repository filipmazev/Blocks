import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { resolveReleaseVersion } from './helpers/release-version.helpers.mjs';

const bump = process.argv[2] ?? 'patch';

if (process.argv.length > 3 || !['patch', 'minor', 'major'].includes(bump)) {
  console.error('Usage: npm run version:blocks -- patch|minor|major');
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(new URL('../projects/blocks/package.json', import.meta.url), 'utf8'));
const configPath = new URL('../release.config.json', import.meta.url);
const config = JSON.parse(readFileSync(configPath, 'utf8'));
const version = resolveReleaseVersion(pkg, process.argv[2] ? null : config.nextVersion, bump);

// Bump only this package, without resolving dependencies or creating a Git tag/commit.
// version-sync updates the existing workspace lock entry and display constants afterward.
execFileSync(
  'npm',
  ['version', version, '--prefix', 'projects/blocks', '--workspaces=false', '--package-lock=false', '--no-git-tag-version', '--ignore-scripts'],
  {
    cwd: fileURLToPath(new URL('..', import.meta.url)),
    stdio: 'inherit'
  }
);

// Consume a configured target after it becomes the package version.
if (config.nextVersion === version) {
  writeFileSync(configPath, JSON.stringify({ ...config, nextVersion: null }, null, 4) + '\n');
}

await import('./version-sync.mjs');
