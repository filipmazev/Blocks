import type { IThemeStudioRandomRecipe } from '@playground/interfaces/itheme-studio-random-recipe.interface';

export const STUDIO_RANDOM_RECIPES: readonly IThemeStudioRandomRecipe[] = [
  { base: 'carbon', menu: 'default', accent: 'primary', spacing: 1, corners: 1, elevation: 0.875 },
  { base: 'carbon', menu: 'neutral', accent: 'accent', spacing: 1.125, corners: 1.5, elevation: 0.75 },
  { base: 'cyber-slate', menu: 'default', accent: 'accent', spacing: 0.875, corners: 0.5, elevation: 0.75 },
  { base: 'cyber-slate', menu: 'neutral', accent: 'primary', spacing: 1, corners: 1, elevation: 1 }
];
