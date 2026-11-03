# Card

A themed content surface with optional whole-card activation and controlled selection, using Blocks' shared lighting and accessibility preferences.

## Public import

```typescript
import { Card } from '@filip.mazev/blocks/primitives';
```

## Usage

```html
<bx-card title="Project" subtitle="Updated recently" variant="outlined">
  <p>Project content.</p>
  <div bxCardFooter>Last updated today</div>
</bx-card>

<button bx-card title="Open project" ariaLabel="Open project" (activated)="openProject()">
  <p>A single native button action across the entire card.</p>
</button>
```

For a selectable card, the consumer owns its selection:

```ts
import { signal } from '@angular/core';

readonly selected = signal(false);
```

```html
<bx-card title="Workspace" [clickable]="true" [(selected)]="selected" highlightColor="accent">
  <p>Press anywhere to choose this workspace.</p>
</bx-card>
```

For an exclusive choice, bind `[selected]` from the chosen value and update that value on `(activated)`. Activating an already selected choice keeps it selected. Use `[(selected)]` when each activation should toggle selection.

## API

| API | Default | Behavior |
| --- | --- | --- |
| `title`, `subtitle` | absent | Translated `ResolvableText` content |
| `headingLevel` | 3 | Title heading level, clamped to 1–6 |
| `variant: CardVariant` | outlined | Outlined, elevated or filled |
| `opaque` | inherited | Optional opaque presentation |
| `clickable` | false | Whole-card action; native `button[bx-card]` is always clickable |
| `selected` | absent | Controlled boolean selection; absence creates a plain action |
| `selectedChange` | — | Requested next boolean selection, emitted only when `selected` is supplied; supports `[(selected)]` |
| `activated` | — | Enabled pointer, Enter or Space activation, and guarded `activate()` calls |
| `highlightColor: Color` | CSS/primary | Semantic or palette token for hover, focus and selected emission |
| `disabled` | false | Suppresses activation and excludes a clickable card from keyboard navigation |
| `readonly`, `readOnly` | false | Prevents activation while preserving focus and selected appearance |
| `ariaLabel` | content | Optional translated accessible name |
| `ariaLabelledBy`, `ariaDescribedBy` | absent | Optional labeling/description IDs |
| `activate()` | — | Requests activation after checking current interactive state |
| `focus(options?)` | — | Focuses an enabled clickable card |

Slots: `bxCardMedia`, `bxCardHeader`, default body and `bxCardFooter`. Header content follows the optional generated title/subtitle. Empty sections take no space.

## Appearance and customization

Existing variables: `--bx-card-background`, `--bx-card-color`, `--bx-card-border`, `--bx-card-radius`, `--bx-card-shadow`, `--bx-card-padding` and `--bx-card-title-size`.

Interactive variables: `--bx-card-highlight` (defaults to `--bx-primary`), `--bx-card-selected-background` (element active), `--bx-card-selected-border` (ordinary card border), `--bx-card-hover-background` (element hover), `--bx-card-pressed-background` (element active), `--bx-card-focus-color` (highlight), and `--bx-card-disabled-opacity` (0.6).

`highlightColor` overrides `--bx-card-highlight` with a typed Blocks token. Selected cards resolve their highlight in their own theme scope and emit the same persistent border light as selected Blocks controls, without adding a second selection outline. Keyboard focus retains its own visible ring. Colors follow the active palette, and mounted surfaces react to theme and appearance changes.

## Behavior and accessibility

Ordinary cards remain containers whose links and buttons provide interaction. Prefer `button[bx-card]` for a native whole-card action; it uses `type="button"`. `bx-card[clickable]` adds button semantics and Enter/Space operation. Enter activates on keydown without repeats; Space activates on keyup and does not scroll the page. `selected` supplies `aria-pressed`; selection is accompanied by material and emitted-light feedback. Add a visible check or other content indicator when useful.

Use `activated` for guarded actions. Read-only cards remain focusable and announce that activation is unavailable. Disabled cards are removed from tab order and retain a readable disabled presentation. Application-driven selection updates remain possible in either state.

A whole-card action should contain descriptive, noninteractive content. Use an ordinary card for multiple independent actions; nested controls do not activate the card. Long content wraps. Combine with Grid and Container for responsive pages, and give images meaningful alternative text.

The surface engine respects reduced motion and transparency; forced colors uses a static selected border and visible keyboard focus. No decorative motion is needed to identify selection.

## Playground

`/components/card` demonstrates native actions, controlled/two-way selection, configurable highlight tokens, disabled and read-only states, and ordinary content cards. `/appearance` uses clickable cards for Light, Dark and Auto.
