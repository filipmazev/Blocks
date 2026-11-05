/** A scalar spring whose target can change without resetting its velocity. */
export interface ISpringOptions {
  /** Spring stiffness; omission uses the spring preset. Optional. */
  stiffness?: number;
  /** Spring damping; omission uses the spring preset. Optional. */
  damping?: number;
  /** Spring mass; omission uses the spring preset. Optional. */
  mass?: number;
}
