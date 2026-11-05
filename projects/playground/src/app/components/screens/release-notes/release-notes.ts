import type { Signal } from '@angular/core';
import type { ParamMap } from '@angular/router';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import type { IReleaseNotes } from '@playground/components/screens/release-notes/interfaces/irelease-notes.interface';
import type { ReleaseChannel } from '@playground/components/screens/release-notes/types/release-channel.types';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button, IBxSelectOption, Select } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Alert, Tag } from '@filip.mazev/blocks/primitives';

import { DEFAULT_RELEASE_VERSION, RELEASE_NOTES } from '@playground/components/screens/release-notes/constants/release-notes.constants';
import { Readme } from '@playground/components/shared/readme/readme';
import { PLAYGROUND_VERSION } from '@playground/generated/release';
import { PackageReleaseService } from '@playground/services/package-release.service';

@Component({
  selector: 'app-release-notes',
  imports: [RouterLink, BxSurfaceDirective, Button, Select, Icon, Tag, Alert, Readme],
  templateUrl: './release-notes.html',
  styleUrl: './release-notes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReleaseNotes {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly packageReleaseService = inject(PackageReleaseService);

  private readonly params: Signal<ParamMap> = toSignal(this.activatedRoute.paramMap, { initialValue: this.activatedRoute.snapshot.paramMap });

  protected readonly currentVersion: string = `v${PLAYGROUND_VERSION}`;
  protected readonly latestVersion: string = DEFAULT_RELEASE_VERSION;
  protected readonly unpublishedMessage: string = `Playground is running a build that is not yet published to NPM (v${PLAYGROUND_VERSION}).`;
  protected readonly channels: readonly IBxSelectOption<ReleaseChannel>[] = [
    { value: 'latest', label: 'Release' },
    { value: 'beta', label: 'Beta' },
    { value: 'alpha', label: 'Alpha' }
  ];

  protected readonly requestedVersion: Signal<string> = computed(() => this.params().get('version') ?? '');
  protected readonly release: Signal<IReleaseNotes | undefined> = computed(() => RELEASE_NOTES.find((entry) => entry.version === this.requestedVersion()));
  protected readonly selectedChannel: Signal<ReleaseChannel> = computed(() => this.release()?.channel ?? 'latest');
  protected readonly npmVersionUrl: Signal<string | null> = computed(() => {
    const release = this.release();

    return release?.status === 'released' ? `https://www.npmjs.com/package/@filip.mazev/blocks/v/${release.version}` : null;
  });
  protected readonly selectedVersion: Signal<string | null> = computed(() => this.release()?.version ?? null);
  protected readonly releaseLabel: Signal<'Alpha' | 'Beta' | 'Alpha · Draft' | 'Draft' | 'Released'> = computed(() => {
    const release = this.release();

    if (release?.status === 'draft') return release.channel === 'alpha' ? 'Alpha · Draft' : 'Draft';

    return release?.channel === 'alpha' ? 'Alpha' : release?.channel === 'beta' ? 'Beta' : 'Released';
  });
  protected readonly releaseColor: Signal<'warn' | 'success' | 'info'> = computed(() => {
    const release = this.release();

    return release?.status === 'draft' ? 'warn' : release?.channel === 'alpha' || release?.channel === 'beta' ? 'info' : 'success';
  });
  protected readonly compareUrl: Signal<string | null> = computed(() => {
    const release = this.release();

    return release?.toCommit ? `https://github.com/filipmazev/Blocks/compare/${release.fromCommit}...${release.toCommit}` : null;
  });
  protected readonly versions: Signal<readonly IBxSelectOption<string>[]> = computed(() =>
    RELEASE_NOTES.filter((release) => (release.channel ?? 'latest') === this.selectedChannel()).map((release) => ({
      value: release.version,
      label: `v${release.version}${release.status === 'draft' ? ' · Draft' : ''}`
    }))
  );

  protected selectChannel(channel: ReleaseChannel | null): void {
    const release = RELEASE_NOTES.find((entry) => (entry.channel ?? 'latest') === channel);

    if (release) this.selectVersion(release.version);
  }

  protected selectVersion(version: string | null): void {
    if (!version || version === this.requestedVersion()) return;

    void this.router.navigate(['/release-notes', version]);
  }
}
