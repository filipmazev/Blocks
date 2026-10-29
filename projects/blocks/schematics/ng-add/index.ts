import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

const LEGACY_PALETTES = {
  white: 'graphite-sky-blue',
  blue: 'azure-coral',
  purple: 'violet-teal',
  orange: 'tangerine-indigo',
  red: 'scarlet-cyan',
  green: 'lime-violet'
} as const;

export interface NgAddOptions {
  theme?:
    'graphite-sky-blue' | 'azure-coral' | 'violet-teal' | 'tangerine-indigo' | 'scarlet-cyan' | 'lime-violet' | 'cyberpunk' | keyof typeof LEGACY_PALETTES;
}

export function ngAdd(options: NgAddOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const selected = options.theme ?? 'graphite-sky-blue';
    const theme = Object.prototype.hasOwnProperty.call(LEGACY_PALETTES, selected) ? LEGACY_PALETTES[selected as keyof typeof LEGACY_PALETTES] : selected;
    injectStyles(tree, context, { theme });
    return tree;
  };
}

function injectStyles(tree: Tree, context: SchematicContext, options: NgAddOptions): void {
  const workspaceConfigPath = '/angular.json';
  if (!tree.exists(workspaceConfigPath)) {
    context.logger.warn('Could not find angular.json. Please configure the Blocks theme manually.');
    return;
  }

  const workspaceConfigBuffer = tree.read(workspaceConfigPath);
  if (!workspaceConfigBuffer) return;

  const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString('utf-8'));

  const projectName =
    workspaceConfig.defaultProject || Object.keys(workspaceConfig.projects ?? {}).find((name) => workspaceConfig.projects[name].projectType === 'application');

  const project = workspaceConfig.projects[projectName];

  if (!project) {
    context.logger.warn('Could not find a valid project in angular.json.');
    return;
  }

  const buildOptions = (project.architect ?? project.targets)?.build?.options;
  if (!buildOptions) {
    context.logger.warn(`Could not find styles configuration for project "${projectName}".`);
    return;
  }

  buildOptions.styles ??= [];
  const effectsStyles = 'node_modules/@filip.mazev/blocks/effects/effects.css';

  const legacyStyles = new Set(['node_modules/@filip.mazev/blocks/glass/glass.css', 'node_modules/@filip.mazev/blocks-glass/glass.css']);
  buildOptions.styles = buildOptions.styles.filter((style: string | { input: string }) => !legacyStyles.has(typeof style === 'string' ? style : style.input));

  const hasEffectsStyles = buildOptions.styles.some((style: string | { input: string }) => (typeof style === 'string' ? style : style.input) === effectsStyles);

  if (!hasEffectsStyles) buildOptions.styles.unshift(effectsStyles);
  tree.overwrite(workspaceConfigPath, JSON.stringify(workspaceConfig, null, 2) + '\n');
  context.logger.info('Configured the shared Blocks effects stylesheet.');

  let targetStylePath = '';
  for (const style of buildOptions.styles) {
    const styleString = typeof style === 'string' ? style : style.input;
    if (styleString && (styleString.endsWith('.scss') || styleString.endsWith('.sass'))) {
      targetStylePath = styleString;
      break;
    }
  }

  if (!targetStylePath || !tree.exists(targetStylePath)) {
    context.logger.warn('Could not locate a global .scss or .sass file. Please configure the Blocks theme manually.');
    return;
  }

  const targetStyle = tree.read(targetStylePath);
  if (!targetStyle) return;
  const content = targetStyle.toString('utf-8');

  // Existing themes still receive the effects stylesheet above.
  if (content.includes('@filip.mazev/blocks')) {
    context.logger.info('Blocks SCSS configuration already exists. Skipping style injection.');
    return;
  }

  const lightThemeVar = `$${options.theme ?? 'graphite-sky-blue'}-light-theme`;
  const darkThemeVar = `$${options.theme ?? 'graphite-sky-blue'}-dark-theme`;

  const blocksThemeSnippet = `
@use '@filip.mazev/blocks' as *;

@layer base {
    :root {
        @include bx-theme(${lightThemeVar});
    }

    [data-theme='dark'] {
        @include bx-theme(${darkThemeVar});
    }
}
`;

  tree.overwrite(targetStylePath, blocksThemeSnippet + '\n' + content);
  context.logger.info(`Successfully injected the ${options.theme ?? 'graphite-sky-blue'} Blocks theme configuration into ${targetStylePath}.`);
}
