import type { DemoArgs } from '@playground/types/demo.types';

export interface IDemoChild {
  symbol: string;
  package?: string;
  label: string;
  args?: DemoArgs;
}
