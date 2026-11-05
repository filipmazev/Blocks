import type { SceneRuntime } from '@effects/runtime/classes/scene-runtime';
export const runtimes = new WeakMap<Document, SceneRuntime>();

export const disabledSelector = ':disabled, [aria-disabled="true"], .is-disabled, [inert]';
