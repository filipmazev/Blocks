import { LoadMoreSource } from '../types/load-more.types';

/** A transport-independent request for the next page; the application owns page/cursor state. */
export interface ILoadMoreRequest {
  /** Interaction that requested the next page. */
  source: LoadMoreSource;
}
