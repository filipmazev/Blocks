# Clipboard feedback

The Playground code viewer and Theme Studio setup use the same neutral Blocks toast after a successful clipboard write.

## Import

Internal Playground integration:

```typescript
import { ClipboardFeedbackService } from '@playground/services/clipboard-feedback.service';
```

## Usage

Call `copy(text)` from a user action. It returns whether the clipboard write succeeded. Callers retain their contextual error message.

## API

`ClipboardFeedbackService.copy(text)` uses Angular CDK Clipboard and queues `CopyFeedback` through the Blocks Toastr service. Repeated copies refresh the active
notification instead of stacking duplicates. Failed writes do not show a success toast.

## Appearance and customization

The notification uses the shared neutral toast surface, primary text and a check icon. It appears at the bottom right for 2.4 seconds without a close action or
progress bar. It follows the active palette and material preferences.

In the setup wizard, both Copy buttons share a notification hosted inside the dialog, above the backdrop.

## Behavior and accessibility

The toast announces success through a polite status region without moving focus. Blocks owns timing, focus/hover pause behavior and reduced motion. The source
action retains a status message with a manual-copy fallback after failure.

## Playground

Copy a file from any component workbench, or use Copy / setup in `/studio` and copy a command or theme.
