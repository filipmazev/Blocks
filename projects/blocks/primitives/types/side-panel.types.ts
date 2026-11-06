import type { BreakpointKey } from '@filip.mazev/blocks/core';

/** Physical edge from which a declarative side panel enters its bounds. */
export type SidePanelPlacement = 'left' | 'right';

/** Whether a panel overlays its layout or reserves space beside its content. */
export type SidePanelLayoutMode = 'overlay' | 'push';

/** Minimum-width breakpoint overrides; the highest matching configured breakpoint wins. */
export type SidePanelBreakpoints = Partial<Record<BreakpointKey, SidePanelLayoutMode>>;
