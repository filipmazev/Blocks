import type { IThemeStudioHistory } from '@playground/interfaces/itheme-studio-history.interface';
import type { IThemeStudioSnapshot } from '@playground/interfaces/itheme-studio-snapshot.interface';

import { STUDIO_HISTORY_BUDGET, STUDIO_HISTORY_LIMIT } from '@playground/shared/constants/theme-studio-history.constants';

/** Bound combined undo/redo history by entry count and estimated serialized UTF-16 storage.
 * @param past - Undo snapshots, oldest first.
 * @param future - Redo snapshots, nearest redo last.
 * @returns Fresh bounded lists, evicting oldest undo entries before farthest redo entries.
 */
export function boundStudioHistory(past: readonly IThemeStudioSnapshot[], future: readonly IThemeStudioSnapshot[]): IThemeStudioHistory {
  const undo = [...past];
  const redo = [...future];
  const size = (value: IThemeStudioSnapshot) => JSON.stringify(value).length * 2;

  let bytes = [...undo, ...redo].reduce((total, value) => total + size(value), 0);

  while (undo.length + redo.length > STUDIO_HISTORY_LIMIT || bytes > STUDIO_HISTORY_BUDGET) {
    const removed = undo.length ? undo.shift() : redo.shift();

    if (!removed) break;

    bytes -= size(removed);
  }

  return { past: undo, future: redo };
}
