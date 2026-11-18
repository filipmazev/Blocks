import type { GlassinessMode, GlassQuality } from '@filip.mazev/blocks/effects/runtime';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { SimpleToastType, ToastPosition } from '@filip.mazev/blocks/toastr';

export interface IToastStoryArgs {
  /** Placement for the next notification. Existing notifications keep their position. */
  position: ToastPosition;
  /** Material refraction policy for the next toast. */
  glassiness: GlassinessMode;
  /** Rendering quality for the next toast. */
  glassQuality: GlassQuality;
  /** Application CSS class on the toast wrapper. */
  wrapperClass: string;
  /** Optional explicit close-action text. Empty uses the selected language. */
  closeLabel: string;
  /** Notification title. */
  title: string;
  /** Notification message; content patches update already-open notifications. */
  message: string;
  /** Lifetime in milliseconds. Zero keeps the notification open until dismissed. */
  durationInMs: number;
  /** Maximum visible notifications before new requests are queued. */
  maxOpened: number;
  /** Enable motion, subject to the shared accessibility preference. */
  animate: boolean;
  /** Allow vertical swipe dismissal. */
  swipeToDismiss: boolean;
  /** Semantic type of a simple notification. */
  type: SimpleToastType;
  /** Optional icon; clear to remove it. */
  icon: IconName | null;
  /** Show an activity indicator in the icon slot. */
  loading: boolean;
  /** Show the notification's close action. */
  showCloseButton: boolean;
  /** Show the remaining lifetime. */
  showProgressBar: boolean;
  /** Use the default material backing. */
  hasDefaultBackground: boolean;
  /** Language of the translated close action in the live example. */
  language: 'en' | 'es' | 'fr' | 'de';
}
