# Preview scrolling

Moves demonstration content behind glass while preserving application scrolling and accessibility preferences.

## Import

Private playground `PreviewScrollDirective`, applied to the preview's actual scroll element.

## Usage

```html
<div appPreviewScroll [previewScrollRepeat]="true" [previewScrollDistance]="520" [previewScrollPaused]="paused()">
    <!-- Preview content -->
</div>
```

## API

| Member                  | Default | Purpose                                                                                                     |
| ----------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `previewScrollRepeat`   | `false` | Repeat after a quiet interval; otherwise show one initial hint.                                             |
| `previewScrollDistance` | `280`   | Maximum excursion in pixels, bounded by the available scroll range.                                         |
| `previewScrollPaused`   | `false` | Pause decorative scrolling at its current position.                                                         |
| `previewScrollTarget`   | `null`  | Optional content element to center behind a glass cover. Overrides fixed distance when paired with a cover. |
| `previewScrollCover`    | `null`  | Glass surface covering the target during the hold.                                                          |
| `previewScrollDwell`    | `0`     | Hold duration in milliseconds before the return trip.                                                       |
| `stop()`                | —       | Permanently stop after the user takes over an interactive preview.                                          |

## Appearance and customization

The existing appearance journal uses this behavior for its initial hint. Home enables repetition, uses a larger excursion to pass text beneath the glass search
bar, and provides a pause/play action.

## Behavior and accessibility

Motion starts after the element becomes substantially visible, moves out and back, then waits before repeating. Reduced motion, hidden documents, offscreen
previews, and the pause input stop frame and timer work. The directive uses the shared lazy frame scheduler and cleans up listeners and observers on teardown.
Target and cover geometry is measured for each cycle, and reader resizing restarts the measurement. It never scrolls the application or changes focus. Repeating
presentations must provide a reachable pause action.

## Playground

Open `/` for the repeating glass presentation or `/appearance` for the interactive journal and its one-time hint.
