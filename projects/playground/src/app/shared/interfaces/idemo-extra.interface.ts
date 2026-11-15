import type { DemoEditor, DemoValue } from '@playground/types/demo.types';

/** Explicit story-only controls for projection or native host attributes. */
export interface IDemoExtra {
  description: string;
  editor: DemoEditor;
  defaultValue?: DemoValue;
  options?: readonly (string | number)[];
}
