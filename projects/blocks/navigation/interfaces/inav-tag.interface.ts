import { ResolvableText } from '@filip.mazev/blocks/core';
import { ITagConfig } from '@filip.mazev/blocks/primitives';

/** A noninteractive badge displayed beside a navigation label. */
export interface INavTag {
  /** Optional translated text; number-only tags can omit it. */
  text?: ResolvableText;
  /** Optional Blocks tag appearance. Defaults to a small tonal tag. */
  config?: ITagConfig;
}
