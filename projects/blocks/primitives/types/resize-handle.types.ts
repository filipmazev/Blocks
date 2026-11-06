/** Physical edge used for resizing; left/top reduce size as the pointer moves toward increasing client coordinates. */
export type ResizeHandleEdge = 'left' | 'right' | 'top' | 'bottom';

/** Origin of a resize gesture. */
export type ResizeHandleSource = 'pointer' | 'keyboard';
