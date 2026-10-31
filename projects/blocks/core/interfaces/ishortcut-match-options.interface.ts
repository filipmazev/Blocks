import type { ShortcutPlatform } from '../types/shortcut.types';

/** Controls matching of one keyboard event; applications retain ownership of listeners, scopes and actions. */
export interface IShortcutMatchOptions {
  /** Optional platform override for previews or application policy. Defaults to the detected device platform. */
  platform?: ShortcutPlatform;
  /** Whether shortcuts may match in editable controls, including readonly inputs. Defaults to false. */
  allowInEditable?: boolean;
  /** Whether held-key repeat events may match. Defaults to false. */
  allowRepeat?: boolean;
}
