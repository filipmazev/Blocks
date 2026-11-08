import type { IModalHeaderConfig } from '@filip.mazev/blocks/modal';
import type { IStepDefinition } from '@filip.mazev/blocks/navigation';
import type { StudioSetupStep } from '@playground/types/theme-studio.types';

export const STUDIO_PACKAGE_MANAGERS = ['npm', 'pnpm', 'yarn', 'bun'] as const;
export const STUDIO_INSTALL_COMMANDS: Readonly<Record<string, string>> = {
  npm: 'npm install @filip.mazev/blocks',
  pnpm: 'pnpm add @filip.mazev/blocks',
  yarn: 'yarn add @filip.mazev/blocks',
  bun: 'bun add @filip.mazev/blocks'
};
export const STUDIO_CLI_COMMANDS: Readonly<Record<string, string>> = {
  npm: 'npx ng add @filip.mazev/blocks',
  pnpm: 'pnpm exec ng add @filip.mazev/blocks',
  yarn: 'yarn ng add @filip.mazev/blocks',
  bun: 'bun run ng add @filip.mazev/blocks'
};

export const STUDIO_SETUP_IDS: readonly StudioSetupStep[] = ['configure', 'install', 'apply'];
export const STUDIO_SETUP_STEPS: readonly IStepDefinition[] = [
  { id: 'configure', label: 'Configure' },
  { id: 'install', label: 'Install' },
  { id: 'apply', label: 'Apply theme' }
];
export const STUDIO_SETUP_HEADERS: Readonly<Record<StudioSetupStep, IModalHeaderConfig>> = {
  configure: { text: 'Choose theme setup', icon: { name: 'sliders-horizontal' } },
  install: { text: 'Install Blocks', icon: { name: 'terminal' } },
  apply: { text: 'Apply your theme', icon: { name: 'palette' } }
};
