import type { Type } from '@angular/core';

import type { IDemoPreset } from '@playground/interfaces/idemo-preset.interface';
import type { IDemoProperty } from '@playground/interfaces/idemo-property.interface';
import type { DemoArgs } from '@playground/types/demo.types';

export interface IDemoStory {
  id: string;
  title: string;
  hasActions: boolean;
  properties: readonly IDemoProperty[];
  args: DemoArgs;
  presets: readonly IDemoPreset[];
  template: string;
  source: string;
  styles?: string;
  componentType?: string;
  adapter?: 'modal' | 'toast';
  load: () => Promise<Type<unknown>>;
}
