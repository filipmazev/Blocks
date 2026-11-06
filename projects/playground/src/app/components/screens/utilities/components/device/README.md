# Device detection

Inspect browser device identity, operating-system hints, and screen orientation with `DeviceTypeService`.

## Import

```typescript
import { DeviceTypeService } from '@filip.mazev/blocks/core';
```

## Usage

```typescript
import { inject } from '@angular/core';

import { DeviceTypeService } from '@filip.mazev/blocks/core';

const deviceTypeService = inject(DeviceTypeService);
const state = deviceTypeService.getDeviceState();
const isAppleDevice = state.isAppleDevice;
const landscape = state.isLandscapeOrientation();
```

Call `inject()` in an Angular injection context. Store the snapshot in a signal and refresh it from browser events when the view needs live updates.

## API

`getDeviceState(): IDeviceState` returns a snapshot of mobile/tablet/desktop and OS detection based on browser identity, including iPadOS desktop identity with
touch hardware. It exposes `isDesktop`, `isMobile`, `isTablet`, `desktopOS`, `mobileOS`, `isAppleDevice`, `isAndroidDevice`, `isWindowsDesktop`,
`isLinuxOrUnixDesktop`, and `isUnknownMobileDevice`.

`isLandscapeOrientation()` and `isPortraitOrientation()` are available on both the service and the returned state. They read the latest tracked **screen**
orientation. They are ordinary methods, not Angular signals. This page refreshes its snapshot on Screen Orientation change events and offers an explicit refresh
action. Without that browser API, the service initializes orientation from a media query; live screen rotation is not tracked there.

Viewport resizing does not change device categories. Device detection is heuristic and browser identity can be overridden. Use capabilities for interaction
decisions and viewport signals for layout. During SSR, identity is unavailable: the current fallback reports desktop/unknown OS and portrait orientation.

## Appearance and customization

The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.

## Behavior and accessibility

The demo uses Blocks cards, a tag, and a refresh button. Screen Orientation change events refresh the OnPush snapshot and the subscription is removed on
destruction.

Resizing does not change browser identity. Detection is heuristic; prefer capability checks for interaction decisions and viewport signals for layout.

## Playground

Open `/utilities/device` from **Core → Utilities → Device detection**. The demo appears first, followed by separate documentation and code tabs.

Return to the [utilities overview](../../README.md) for the coverage audit and related feature guides.
