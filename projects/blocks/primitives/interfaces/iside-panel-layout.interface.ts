/** Internal layout context shared by declarative panels and their layout host. */
export interface ISidePanelLayout {
  /** Stable positioned element containing panels and the adjacent page content. */
  readonly nativeElement: HTMLElement;
}
