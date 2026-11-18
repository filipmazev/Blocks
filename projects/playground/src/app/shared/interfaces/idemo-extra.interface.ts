import type { DemoEditor, DemoValue } from '@playground/types/demo.types';

/** Explicit story-only controls for projection or native host attributes. */
export interface IDemoExtra {
  /** Whether a story-owned value accepts matching Change events from its composed view. Defaults to false. */
  model?: boolean;
  description: string;
  editor: DemoEditor;
  defaultValue?: DemoValue;
  options?: readonly (string | number)[];
}
