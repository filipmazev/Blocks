import type { IThemeStudioRandomRecipe } from '@playground/interfaces/itheme-studio-random-recipe.interface';

export const STUDIO_RANDOM_RECIPES: readonly IThemeStudioRandomRecipe[] = [
  { base: 'carbon', menu: 'default', accent: 'primary', corners: 1, elevation: 0.875 },
  { base: 'carbon', menu: 'neutral', accent: 'accent', corners: 1.5, elevation: 0.75 },
  { base: 'cyber-slate', menu: 'default', accent: 'accent', corners: 0.5, elevation: 0.75 },
  { base: 'cyber-slate', menu: 'neutral', accent: 'primary', corners: 1, elevation: 1 }
];
