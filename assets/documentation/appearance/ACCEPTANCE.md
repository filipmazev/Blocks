# Blocks appearance acceptance

The current workspace repair supersedes the earlier ZIP’s static review. Executed checks and browser limitations are recorded in [VALIDATION.md](VALIDATION.md).

| Area | Current behavior |
| --- | --- |
| Overlay motion | Fade in and out at full size with consistent opaque backing; interrupted fades reverse from their current opacity. No scaled, clipped or stacked content. |
| Controls | One flush focus border, visible unchecked controls, synchronized radio groups, ellipsis for select values/options, inset clear buttons, and circular native range thumbs. |
| Lighting | Subtle neutral highlights; no pointer lighting feature. Registered lights and reflection proxies drive material response. Validation and toast progress supply localized semantic light. |
| Navigation and layers | Breadcrumb links, modal-safe mobile navigation stacking, body scroll locking, and focus restoration. Centered modal backdrops are siblings of the glass panel. |
| Configurators | Blocks controls throughout, inline help, and documentation panels that follow configurator height with internal scrolling. |
| Tokens | Radius helpers and exported radius tokens; responsive widths use the shared breakpoint mixins. Native demo tokens are generated from the same Sass maps. |
| Accessibility | Native form semantics, keyboard overlays, reduced motion/transparency, high contrast, forced colors, and opaque unsupported-filter fallbacks. |
| Packaging | Runtime and Angular effects entry points compile together inside Blocks. The canonical effects stylesheet, White theme and installer ship in the same npm package. |

The former native transition names remain deprecated API aliases for source compatibility. Firefox execution remains subject to the host limitation documented in the validation record.
