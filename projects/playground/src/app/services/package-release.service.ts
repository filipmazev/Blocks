import type { Signal, WritableSignal } from '@angular/core';

import { afterNextRender, computed, DestroyRef, inject, Injectable, signal } from '@angular/core';

import { BLOCKS_VERSION } from '@filip.mazev/blocks';

import { PLAYGROUND_VERSION } from '@playground/generated/release';
import { resolveNpmPublication } from '@playground/services/helpers/npm-publication.helpers';

@Injectable({ providedIn: 'root' })
export class PackageReleaseService {
  private readonly destroyRef = inject(DestroyRef);

  private readonly latestVersion: WritableSignal<string> = signal(BLOCKS_VERSION);

  private readonly buildPublished: WritableSignal<boolean | null> = signal<boolean | null>(null);

  public readonly npmPackageUrl: Signal<string> = computed(() => `https://www.npmjs.com/package/@filip.mazev/blocks/v/${this.latestVersion()}`);
  public readonly unpublished: Signal<boolean> = computed(() => this.buildPublished() === false);

  constructor() {
    afterNextRender(() => void this.refresh());
  }

  //#region Helpers

  private async refresh(): Promise<void> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    this.destroyRef.onDestroy(() => controller.abort());

    try {
      const response = await fetch('https://registry.npmjs.org/@filip.mazev%2Fblocks', { signal: controller.signal, cache: 'no-cache' });

      if (!response.ok) return;

      const metadata: unknown = await response.json();
      const publication = resolveNpmPublication(metadata, PLAYGROUND_VERSION);

      if (!publication || this.destroyRef.destroyed) return;

      this.latestVersion.set(publication.latestVersion);
      this.buildPublished.set(publication.buildPublished);
    } catch {
      // Keep the package version link when registry access is unavailable; unknown publication is not reported as unpublished.
    } finally {
      clearTimeout(timeout);
    }
  }

  //#endregion
}
