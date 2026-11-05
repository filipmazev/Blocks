import { IconName } from '@icons/types/icon.types';

/** Resolved features state used by Home. */
export interface IHomeFeaturesState {
  /** Resolved title value. */
  title: string;
  /** Resolved description value. */
  description: string;
  /** Resolved icon value. */
  icon: IconName;
  /** Resolved route value. */
  route: string;
}
