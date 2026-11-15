import type { Type } from '@angular/core';

import type { IComponentPreviewRecipe } from '@playground/components/screens/library-components/component-demo/interfaces/icomponent-preview-recipe.interface';
import type { ComponentPreviewInputs } from '@playground/components/screens/library-components/component-demo/types/component-preview-inputs.types';

/**
 * Define a catalog still with sample values checked against the component's signal inputs and models.
 * Use a template vignette instead for content projection, directives, aliased inputs, or stylized layouts.
 * @typeParam T - Library component instance whose inputs are checked.
 * @param component - Standalone library component to instantiate.
 * @param inputs - Sample input values; defaults to the component's own defaults.
 * @returns Recipe consumed by the shared inert catalog renderer.
 */
export function defineComponentPreview<T>(component: Type<T>, inputs: ComponentPreviewInputs<NoInfer<T>> = {}): IComponentPreviewRecipe {
  return { component, inputs };
}
