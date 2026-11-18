import type { IDemoChild } from '@playground/interfaces/idemo-child.interface';
import type { IDemoConstraint } from '@playground/interfaces/idemo-constraint.interface';
import type { IDemoExtra } from '@playground/interfaces/idemo-extra.interface';
import type { IDemoPreset } from '@playground/interfaces/idemo-preset.interface';
import type { IDemoSharedView } from '@playground/interfaces/idemo-shared-view.interface';
import type { DemoArgs } from '@playground/types/demo.types';

/** Only composition and example intent belong here; the public API comes from the declarations. */
export interface IDemoRecipe {
  use?: string;
  adapter?: 'modal' | 'toast';
  symbol?: string;
  package?: string;
  styles?: string;
  sharedView?: IDemoSharedView;
  eventHandlers?: Readonly<Record<string, string>>;
  template?: string | null;
  imports?: Readonly<Record<string, readonly string[]>>;
  args?: DemoArgs;
  presets?: readonly IDemoPreset[];
  json?: readonly string[];
  exclude?: readonly string[];
  extras?: Readonly<Record<string, IDemoExtra>>;
  children?: Readonly<Record<string, IDemoChild>>;
  configFields?: Readonly<Record<string, string>>;
  constraints?: Readonly<Record<string, IDemoConstraint>>;
}
