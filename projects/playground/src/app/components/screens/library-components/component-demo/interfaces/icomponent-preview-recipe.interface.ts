import type { Type } from '@angular/core';

/** A real library component and the sample input values used to render its catalog still. */
export interface IComponentPreviewRecipe {
  /** Standalone library component, imported through its public package entry point. */
  readonly component: Type<unknown>;
  /** Public Angular input names and sample values. No application state or event handlers are attached. */
  readonly inputs: Record<string, unknown>;
}
