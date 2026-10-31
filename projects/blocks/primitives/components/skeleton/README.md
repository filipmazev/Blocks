# Skeleton

Reserves space while content loads, with text, rectangle and circle shapes.

## Public import

```typescript
import { Skeleton } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-skeleton [lines]="3" />
<bx-skeleton shape="circle" height="3rem" />
<bx-skeleton shape="rectangle" height="8rem" />
<bx-skeleton [decorative]="false" label="Loading profile" />
```

## API

| Input | Default | Behavior |
| --- | --- | --- |
| `shape` | `text` | `SkeletonShape`: text, rectangle or circle |
| `lines` | `1` | Text rows, clamped to 1–100 |
| `width / height` | absent | Optional CSS dimensions |
| `animated` | `true` | Enables the pulse when motion preferences permit |
| `decorative` | `true` | Hides repeated placeholders from accessibility APIs |
| `label` | Loading content | Translatable status name when nondecorative |

## Appearance and customization

`--bx-skeleton-background`, `--bx-skeleton-height`, `--bx-skeleton-gap`, `--bx-skeleton-radius`, `--bx-skeleton-duration` and `--bx-skeleton-last-line-width`. Defaults use semantic element colors.

## Behavior and accessibility

Replace skeletons with real content when the application finishes loading. Use one named status for a group of decorative placeholders. BxA11yService changes stop the pulse immediately, retaining the placeholder. Forced colors use a static system color.

## Playground

`/components/skeleton` includes live examples and shared appearance controls.

