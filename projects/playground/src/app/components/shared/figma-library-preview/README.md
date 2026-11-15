# Figma library cover preview

Renders the supplied Blocks Figma cover as vector artwork with motion on its decorative glass panels.

## Import

Private playground component `FigmaLibraryPreview`.

## Usage

Place the preview inside the Figma link, which provides its accessible name and destination.

```html
<a [href]="figmaLibraryUrl" aria-label="Preview the Blocks Angular UI kit in Figma">
    <app-figma-library-preview />
</a>
```

## API

There are no public inputs. The colocated SVG is the component template, keeping one source for the original vector artwork.

## Appearance and customization

The cover preserves its intrinsic 16:9 ratio. The panel ring rotates and shrinks on hover or link focus, while individual panels turn slightly within it. Text
and the Blocks mark remain fixed. Panel fills use the same semantic colors as the Studio aperture through `shared/styles/_palette-panels.scss`, so palette and
theme edits update both illustrations.

## Behavior and accessibility

The shared exact spring retargets interrupted motion. Settled panels schedule no work. Live reduced motion removes the transforms; hidden or offscreen artwork
resets without animation. The artwork is decorative, and the parent link provides keyboard access. Observers, listeners, and animation controllers are released
on navigation.

## Playground

Open `/` and hover or focus the cover in **Design in Figma**.
