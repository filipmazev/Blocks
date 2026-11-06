# Infinite scroll playground example

Exercises local progressive rendering and shared remote orchestration. The authoritative guide is
[InfiniteScrollDirective](../../../../../../../blocks/primitives/directives/infinite-scroll/README.md).

## Import

Use `InfiniteScrollDirective` from `@filip.mazev/blocks/primitives` for detection. Remote data uses Forms' `LoadMoreDirective`.

## Usage

Adjust local batch size and container height, reset, and scroll to append rows. The asynchronous example uses the existing mock-options store and its controls
for page size, visible loading, deliberate failure, retained results, and explicit retry through success.

## API

The owner caps local rows at 120, updates its revision on append, and disables detection at exhaustion. The displayed event count and overflow status expose
observable results. Remote state remains in the existing application-owned mock store.

## Appearance and customization

The viewport and controls use shared Blocks tokens and public form APIs. Height controls make no-scrollbar transitions reachable.

## Behavior and accessibility

The local viewport is a named focusable region with a visible outline and a Show more action. The shared remote footer retains its keyboard-accessible action
and disabled spinner during loading. No detection code performs data fetching.

## Playground

Open `/components/infinite-scroll` or the scrolling section of `/utilities`.
