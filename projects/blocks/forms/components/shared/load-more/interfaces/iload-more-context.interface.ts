/** Template context supplied to a custom load-more button. */
export interface ILoadMoreContext {
  /** Current visible action label. */
  $implicit: string;
  /** Whether the action is loading. Custom templates must expose this state accessibly. */
  loading: boolean;
  /** Whether requesting another page is blocked. */
  disabled: boolean;
  /** Requests another page through the shared guard. */
  request: () => void;
}
