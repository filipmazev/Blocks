# Popover trigger

Import `PopoverDirective`, `Popover`, `IPopoverConfig` and optional `BX_POPOVER_DEFAULTS` from `@filip.mazev/blocks/primitives`.

The directive owns positioning, focus, dismissal, dialog semantics and theme inheritance; the component supplies the visual surface. Use a native button trigger
and a named dialog. See the [popover component guide](../../components/popover/README.md) for working usage, API defaults, configuration, CSS variables and
accessibility behavior.

Playground: `/components/popover`.

## Behavior and accessibility

Opening and closing share the effects runtime's restrained opacity/scale spring without modifying collision-aware overlay positioning. The scale origin follows
the opening side. Close reports closed state and makes the panel inert immediately, then releases it after exit; reopening and teardown invalidate stale
completion. Reduced motion skips spatial movement. Existing focus restoration, Escape, outside-click and nested-overlay policies remain authoritative. Inspect
`/components/popover`.
