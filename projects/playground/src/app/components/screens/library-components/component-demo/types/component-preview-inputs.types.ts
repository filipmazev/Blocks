import type { InputSignalWithTransform } from '@angular/core';

/** Extracts the writable value of a signal input/model, excluding ordinary signals and methods. */
export type ComponentPreviewInputValue<T> = T extends () => infer Read ? (T extends InputSignalWithTransform<Read, infer Write> ? Write : never) : never;

/** Accepts only signal inputs/models, using each input's writable value type, including transforms. */
export type ComponentPreviewInputs<T> = {
  [Key in keyof T as ComponentPreviewInputValue<T[Key]> extends never ? never : Key]?: ComponentPreviewInputValue<T[Key]>;
};
