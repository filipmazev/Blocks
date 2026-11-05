/** Internal coordination contract used by direct accordion children. */
export interface IAccordionCoordinator {
  /** Requests expansion of the identified accordion panel through its coordinator. */
  requestExpansion(panelId: string): void;
}
