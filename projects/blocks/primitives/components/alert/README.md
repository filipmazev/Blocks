# Inline alert / banner

Inline feedback and general banners for default, info, danger, warning and success states.

## Public import

```typescript
import { Alert } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-alert tone="success" title="Saved" message="Your changes are ready." />
<bx-banner tone="warning" title="Review needed" [dismissible]="true"
  [(visible)]="visible" dismissFocusTarget="restore-banner">
  Some settings need your attention.
</bx-banner>
@if (!visible) { <button id="restore-banner" (click)="visible = true">Restore banner</button> }
```

## API

| API | Default | Behavior |
| --- | --- | --- |
| `tone` | default | `AlertTone` |
| `title / message` | absent | `ResolvableText`; projected content is also supported |
| `dismissible` | false | Shows a named native close action |
| `dismissLabel` | Dismiss notification | Translatable action name |
| `emissive` | true | Steady illumination of the banner and neighboring Blocks surfaces |
| `emissionColor` | tone text color | Optional semantic light-color override |
| `emissionIntensity` | 0.75 | Neighboring light strength, clamped to 0–4 |
| `emissionRadius` | 320 | Neighboring light falloff in CSS pixels |
| `visible` | true | Two-way visibility model |
| `announcement` | off | `AlertAnnouncement`: off, polite or assertive |
| `dismissFocusTarget` | absent | Optional element or element ID to focus after keyboard dismissal |
| `dismissed` | — | Emitted on dismissal |
| `dismiss()` | — | Respects dismissible and visible |

`bx-banner` is an alternate selector for `Alert`. Project optional actions with `bxAlertActions`.

## Appearance and customization

`--bx-alert-background`, `--bx-alert-color`, `--bx-alert-border`, `--bx-alert-radius`, `--bx-alert-padding`, `--bx-alert-gap`, `--bx-alert-shadow`, `--bx-alert-min-opacity` and `--bx-alert-light-opacity`. Interior light opacity defaults to 0.4 to keep illumination gentle while preserving the glass material and exterior rim. The shared glass surface follows application glassiness and reduced transparency. Borders have a uniform width; the old `--bx-alert-accent-width` is no longer used. The severity palette, icon, soft glow and steady light follow the same material and emissive mechanisms as toasts, without entrance, exit or progress animations. Optional `data-bx-light-scope` on an owning container limits neighboring illumination to that scene.

## Behavior and accessibility

Static content is silent by default. Use polite for changing status and assertive for urgent errors; the live text excludes the action slot. Supply descriptive text as well as a tone. Content and actions wrap at narrow widths. If dismissal removes the focused control, provide dismissFocusTarget or manage focus through dismissed. Focus restoration waits for rendering, so the destination may be created conditionally after dismissal.

## Playground

`/components/alert` includes live examples and shared appearance controls.

