/** Optional keyboard behavior for a Blocks menu or menubar. */
export interface IMenuKeyboardOptions {
  /** Optional orientation. Defaults to vertical; horizontal uses Left/Right instead of Up/Down. */
  orientation?: 'horizontal' | 'vertical';
  /** Optional content direction. Defaults to false; reverses Left/Right movement when true. */
  rtl?: boolean;
  /** Optional single-tab-stop management. Defaults to true for horizontal menubars and false for vertical menus. */
  roving?: boolean;
}
