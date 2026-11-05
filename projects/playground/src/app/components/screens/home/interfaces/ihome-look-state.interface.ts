/** Resolved look state used by Home. */
export interface IHomeLookState {
  /** Resolved fx Order value. */
  fxOrder: string;
  /** Resolved stops value. */
  stops: { color: string; pos: number }[];
  /** Resolved seed value. */
  seed: number;
  /** Resolved warp value. */
  warp: number;
  /** Resolved noise Scale value. */
  noiseScale: number;
  /** Resolved detail value. */
  detail: number;
  /** Resolved contrast value. */
  contrast: number;
  /** Resolved angle value. */
  angle: number;
  /** Resolved center X value. */
  centerX: number;
  /** Resolved center Y value. */
  centerY: number;
  /** Resolved light Mode value. */
  lightMode: number;
  /** Resolved light Amount value. */
  lightAmount: number;
  /** Resolved light Size value. */
  lightSize: number;
  /** Resolved light Follow value. */
  lightFollow: number;
  /** Resolved glass Mode value. */
  glassMode: number;
  /** Resolved glass Amount value. */
  glassAmount: number;
  /** Resolved glass Count value. */
  glassCount: number;
  /** Resolved glass Angle value. */
  glassAngle: number;
  /** Resolved glass Profile value. */
  glassProfile: number;
  /** Resolved glass Bevel value. */
  glassBevel: number;
  /** Resolved glass Shadow value. */
  glassShadow: number;
  /** Resolved glass Highlight value. */
  glassHighlight: number;
  /** Resolved pointer Mode value. */
  pointerMode: number;
  /** Resolved pointer Damping value. */
  pointerDamping: number;
  /** Whether pointer Flip is enabled in the resolved state. */
  pointerFlip: boolean;
  /** Whether animate is enabled in the resolved state. */
  animate: boolean;
}
