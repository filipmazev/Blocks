/** Decorative edge/glow pair and the animations owned by one contributed surface light. */
export type SurfaceLayer = {
  /** Border-light element rendered for this contribution. */
  edge: HTMLElement;
  /** Diffuse glow element rendered for this contribution. */
  glow: HTMLElement;
  /** Active fade animations canceled when the contribution changes or is removed. */
  animations: Animation[];
  /** Whether the contribution is fading out before removal. */
  leaving: boolean;
};
