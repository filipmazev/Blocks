# Theme Studio toolbar light

Coordinates the playground toolbar button's subtle multicolor border with four sources in the existing Blocks lighting scene.

## Import

Private playground directive, used by the application toolbar as `appStudioAurora`.

## Usage

The toolbar supplies its masked border and four invisible origin points. The border reads the same radius variable as the Blocks button. Palette primitives
provide the gradient and emitted colors; this directive does not replace the button's own surface renderer or interaction lighting.

## API

The private `appStudioAurora` boolean input enables the light when Studio overrides exist and live preview is active. The shared frame clock rotates the border
and samples matching emission colors at 20 Hz, outside Angular rendering.

## Appearance and customization

The border combines a saturated narrow rim with a diffuse halo behind the button. Both follow its shared radius and use the palette's 500 shades. The rim, halo
and emitted light gradually brighten when customization becomes active, fade away when preview is paused or overrides are reset, and return when preview
resumes. Rapid toggles continue from the current brightness. Emission is registered through `mountGlassScene()` and follows the same visibility, occlusion and
receiving-surface mechanisms as other Blocks lights. `paintMotionStyles()` prevents decorative writes from invalidating unrelated receivers.

## Behavior and accessibility

Reduced motion changes brightness immediately and keeps a static multicolor border and static light sources while active. Forced colors and application high
contrast remove both. Inactive lights stop frame work and release the scene after fading; hidden documents and offscreen buttons release it immediately.
Destruction removes observers, listeners, frame subscriptions and scene resources. Button labels, focus and hit geometry are unchanged.

## Playground

The Theme Studio action in the toolbar, including `/studio`.
