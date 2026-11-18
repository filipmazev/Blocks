import type { ResolvableText } from '@filip.mazev/blocks/core';

/** Configuration for cancelable overdrag of a physical edge action. */
export interface ISwipeFullActionConfig {
  /** Enable activation beyond normal reveal, on pointer/touch release or when trackpad input settles. Defaults to true. */
  readonly enabled?: boolean;
  /** Fraction of additional travel where the icon begins moving toward content and the caption fades. Clamped to 0–1; defaults to 0.65. */
  readonly armThreshold?: number;
  /** Fraction of additional travel required to arm the edge command; pointer/touch activates on release, while trackpads activate immediately on crossing this threshold. Clamped above armThreshold and at most 1; defaults to 0.78 for ordinary actions and 0.94 for destructive actions. */
  readonly commitThreshold?: number;
  /** Initial trackpad resistance factor, clamped to 1–12. Extra resistance is reduced for stretches wider than two action columns, bounding effort on long rows. Defaults to 1.25 for ordinary actions and 8 for destructive actions. Holds through resistancePlateau, then tapers smoothly to one at resistanceEnd. The curve always starts beyond normal reveal, including for a single action. Pointer/touch movement remains one-to-one. */
  readonly resistance?: number;
  /** Fraction of the resisted travel holding the initial ratio before tapering. Defaults to 0 for ordinary actions and 0.15 for destructive actions; clamped to 0–0.35. Travel means additional distance beyond normal reveal. Trackpad-only. */
  readonly resistancePlateau?: number;
  /** Fraction of resisted travel where movement becomes one-to-one. Defaults to 0.4 for ordinary actions and 0.9 for destructive actions; clamped above resistancePlateau and at most 1. Trackpad-only. */
  readonly resistanceEnd?: number;
  /** Translated polite announcement while completing the gesture would activate the action. Defaults to 'Release to activate'. */
  readonly readyLabel?: ResolvableText;
}
