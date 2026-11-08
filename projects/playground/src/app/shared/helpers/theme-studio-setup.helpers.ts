/** Build an Angular 22 workspace command for a supported package manager.
 * @param manager - npm, pnpm, yarn or bun; the caller controls selection from the supported list.
 */
export function studioCreateCommand(manager: string): string {
  const runner = manager === 'pnpm' ? 'pnpm dlx' : manager === 'yarn' ? 'yarn dlx' : manager === 'bun' ? 'bunx' : 'npx';

  return `${runner} @angular/cli@22 new my-blocks-app --style=scss --package-manager=${manager}`;
}
