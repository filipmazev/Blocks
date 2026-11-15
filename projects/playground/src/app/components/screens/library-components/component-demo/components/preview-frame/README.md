# Preview frame

A shared viewport for real catalog components. `width` and `height` define the composition's CSS-pixel dimensions (480 × 320 by default). A ResizeObserver fits
that viewport inside its catalog card, uniformly scaling the complete composition without copying component styles. Fixed-position modal children stay
contained. The observer disconnects on teardown. Use supported component variables to adapt viewport-relative dimensions to the containing frame.

`fill=true` expands the internal viewport to match the card's full aspect ratio after scaling. Use it for backdrops, right/left panels and bottom drawers so
there is no empty band around an edge-pinned component. Catalog edge previews also remove the outer preview padding. Other compositions keep the default fitted
viewport. Both paths render the actual component DOM; no captured images are used.
