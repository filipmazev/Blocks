import { BREAKPOINTS } from "@filip.mazev/blocks-core";

export type ModalCloseMode = "cancel" | "confirm";
export type ModalLayout = "center" | "right" | "left" | "bottom-sheet";
export type BreakpointKey = keyof typeof BREAKPOINTS;