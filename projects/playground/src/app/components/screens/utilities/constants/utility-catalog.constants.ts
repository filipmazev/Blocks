import type { IUtilityExample } from '@playground/components/screens/utilities/interfaces/iutility-example.interface';

export const UTILITY_EXAMPLES: readonly IUtilityExample[] = [
  {
    id: 'viewport',
    title: 'Viewport and breakpoints',
    description: 'Watch viewport signals update and see shared breakpoints adapt a responsive layout.',
    symbol: 'WindowDimensionsService',
    icon: 'scan',
    readme: 'projects/playground/src/app/components/screens/utilities/components/viewport/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/viewport/viewport').then((m) => m.Viewport)
  },
  {
    id: 'device',
    title: 'Device detection',
    description: 'Inspect device categories, operating systems, touch hints, and screen orientation.',
    symbol: 'DeviceTypeService',
    icon: 'smartphone',
    readme: 'projects/playground/src/app/components/screens/utilities/components/device/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/device/device').then((m) => m.Device)
  },
  {
    id: 'scroll-lock',
    title: 'Scroll locking',
    description: 'Try independent lock owners and see how shared page scrolling is restored.',
    symbol: 'ScrollLockService',
    icon: 'lock',
    readme: 'projects/playground/src/app/components/screens/utilities/components/scroll-lock/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/scroll-lock/scroll-lock').then((m) => m.ScrollLock)
  },
  {
    id: 'identifiers',
    title: 'Identifiers',
    description: 'Generate UUIDs and compare a changing preview with a stable instance identifier.',
    symbol: 'uuidv4()',
    icon: 'fingerprint',
    readme: 'projects/playground/src/app/components/screens/utilities/components/identifiers/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/identifiers/identifiers').then((m) => m.Identifiers)
  },
  {
    id: 'color-tokens',
    title: 'Color-token helpers',
    description: 'Explore CSS references, complementary colors, palette inversion, and saved palette validation.',
    symbol: 'resolveTokenToCssVar() and color helpers',
    icon: 'palette',
    readme: 'projects/playground/src/app/components/screens/utilities/components/color-tokens/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/color-tokens/color-tokens').then((m) => m.ColorTokens)
  },
  {
    id: 'overlay-positioning',
    title: 'Overlay positioning',
    description: 'Position a themed surface, track its origin, and try viewport-aware placement fallbacks.',
    symbol: 'BxOverlayPositionService and overlay helpers',
    icon: 'layers',
    readme: 'projects/playground/src/app/components/screens/utilities/components/overlay-positioning/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/overlay-positioning/overlay-positioning').then((m) => m.OverlayPositioning)
  },
  {
    id: 'date-time',
    title: 'Date and time conversions',
    description: 'Convert civil dates, zoned date-times, .NET/ISO values and Unix timestamps, and parse natural-language input deterministically.',
    symbol: 'dateTimeToInstant(), parseDotNetDateValue()',
    icon: 'calendar-clock',
    readme: 'projects/playground/src/app/components/screens/utilities/components/date-time/README.md',
    loadComponent: () => import('@playground/components/screens/utilities/components/date-time/date-time').then((m) => m.DateTimeUtility)
  }
];
