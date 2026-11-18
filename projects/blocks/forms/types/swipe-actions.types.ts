/** Physical swipe directions, independent of text direction. */
export type SwipeSide = 'left' | 'right';
/** Current interaction phase for direct manipulation and settling. */
export type SwipeState = 'closed' | 'dragging' | 'settling' | 'left' | 'right' | 'pending' | 'error' | 'dismissing' | 'dismissed';
/** Presentation from which a shared action was explicitly activated. */
export type SwipeActionSource = 'swipe' | 'context' | 'full-swipe';

/** Successful command behavior: close the actions or animate the row away for application-owned removal. */
export type SwipeActionCompletion = 'collapse' | 'dismiss';
