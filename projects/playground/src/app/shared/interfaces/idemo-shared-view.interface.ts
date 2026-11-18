/** Existing presentation expanded into a generated preview and its copyable standalone source. */
export interface IDemoSharedView {
  /** Repository-relative Angular template containing the shared row's content. */
  template: string;
  /** Repository-relative Sass file for the same presentation. */
  styles: string;
  /** Literal expression substitutions from the component's API to story args. */
  replacements: Readonly<Record<string, string>>;
  /** Story host selector replacing the component's :host style rule. */
  hostSelector: string;
}
