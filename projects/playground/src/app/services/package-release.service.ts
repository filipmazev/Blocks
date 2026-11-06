import type { Signal, WritableSignal } from '@angular/core';

import { afterNextRender, computed, DestroyRef, inject, Injectable, signal } from '@angular/core';

import { BLOCKS_VERSION } from '@filip.mazev/blocks';

import { RELEASE_NOTES } from '@playground/components/screens/release-notes/constants/release-notes.constants';
import { PLAYGROUND_VERSION } from '@playground/generated/release';
import { resolveNpmPublication } from '@playground/services/helpers/npm-publication.helpers';

@Injectable({ providedIn: 'root' })
export class PackageReleaseService {
  private readonly destroyRef = inject(DestroyRef);

  private readonly releasedBuild: boolean = RELEASE_NOTES.some((release) => release.version === PLAYGROUND_VERSION && release.status === 'released');

  private readonly latestVersion: WritableSignal<string> = signal(BLOCKS_VERSION);

  private readonly buildPublished: WritableSignal<boolean | null> = signal<boolean | null>(null);

  public readonly npmPackageUrl: Signal<string> = computed(() => `https://www.npmjs.com/package/@filip.mazev/blocks/v/${this.latestVersion()}`);
  public readonly unpublished: Signal<boolean> = computed(() => !this.releasedBuild && this.buildPublished() === false);

  private refreshTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    afterNextRender(() => void this.refresh());
    this.destroyRef.onDestroy(() => clearTimeout(this.refreshTimer));
  }

  //#region Helpers

  private async refresh(): Promise<void> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const unregister = this.destroyRef.onDestroy(() => controller.abort());

    try {
      const response = await fetch('https://registry.npmjs.org/@filip.mazev%2Fblocks', { signal: controller.signal, cache: 'no-store' });

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
      unregister();

      if (!this.destroyRef.destroyed && this.buildPublished() === false) {
        this.refreshTimer = setTimeout(() => void this.refresh(), 30000);
      }
    }
  }

  //#endregion
}
