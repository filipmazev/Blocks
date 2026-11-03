# Appearance mode preview

An inert miniature of Blocks Card, Tag, Icon and ProgressBar for the playground's appearance choices.

## Import and usage

```ts
import { AppearanceModePreview } from './appearance-mode-preview/appearance-mode-preview';
```

```html
<app-appearance-mode-preview mode="light" />
```

## API and appearance

`mode` is required and accepts `light` or `dark`. The miniature uses the selected palette's existing theme class, responds to palette/high-contrast changes, and preserves its own color mode. The parent combines two previews for Auto.

## Accessibility and behavior

The preview is inert, hidden from assistive technology and contains no working actions. Its parent clickable Card owns the mode action and accessible label. It performs no animated demonstration.

## Playground

`/appearance`, in the Light, Dark and Auto choices.
