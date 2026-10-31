import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const bump = process.argv[2] ?? 'patch';

if (process.argv.length > 3 || !['patch', 'minor', 'major'].includes(bump)) {
  console.error('Usage: npm run version:blocks -- patch|minor|major');
  process.exit(1);
}

// Bump only this package, without resolving dependencies or creating a Git tag/commit.
// version-sync updates the existing workspace lock entry and display constants afterward.
execFileSync(
  'npm',
  ['version', bump, '--prefix', 'projects/blocks', '--workspaces=false', '--package-lock=false', '--no-git-tag-version', '--ignore-scripts'],
  {
    cwd: fileURLToPath(new URL('..', import.meta.url)),
    stdio: 'inherit'
  }
);

await import('./version-sync.mjs');
