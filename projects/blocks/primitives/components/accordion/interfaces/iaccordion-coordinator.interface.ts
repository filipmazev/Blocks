/** Internal coordination contract used by direct accordion children. */
export interface IAccordionCoordinator {
  requestExpansion(panelId: string): void;
}
