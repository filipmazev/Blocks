import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BLOCKS_VERSION_LABEL } from '@filip.mazev/blocks';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button, IBxSelectOption, Select } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Tag } from '@filip.mazev/blocks/primitives';
import { Readme } from '../../shared/readme/readme';
import { RELEASE_NOTES } from './constants/release-notes.constants';

@Component({
  selector: 'app-release-notes',
  imports: [RouterLink, BxSurfaceDirective, Button, Select, Icon, Tag, Readme],
  templateUrl: './release-notes.html',
  styleUrl: './release-notes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReleaseNotes {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  protected readonly currentVersion = BLOCKS_VERSION_LABEL;
  protected readonly latestVersion = RELEASE_NOTES[0].version;
  protected readonly requestedVersion = computed(() => this.params().get('version') ?? '');
  protected readonly release = computed(() => RELEASE_NOTES.find((entry) => entry.version === this.requestedVersion()));
  protected readonly selectedVersion = computed(() => this.release()?.version ?? null);
  protected readonly releaseLabel = computed(() => {
    const release = this.release();

    if (release?.status === 'draft') return release.channel === 'alpha' ? 'Alpha · Draft' : 'Draft';

    return release?.channel === 'alpha' ? 'Alpha' : release?.channel === 'beta' ? 'Beta' : 'Released';
  });

  protected readonly releaseColor = computed(() => {
    const release = this.release();

    return release?.status === 'draft' ? 'warn' : release?.channel === 'alpha' || release?.channel === 'beta' ? 'info' : 'success';
  });

  protected readonly compareUrl = computed(() => {
    const release = this.release();

    return release?.toCommit ? `https://github.com/filipmazev/Blocks/compare/${release.fromCommit}...${release.toCommit}` : null;
  });

  protected readonly versions: readonly IBxSelectOption<string>[] = RELEASE_NOTES.map((release) => ({
    value: release.version,
    label: `v${release.version}${release.channel === 'alpha' ? ' · Alpha' : release.channel === 'beta' ? ' · Beta' : ''}${release.status === 'draft' ? ' · Draft' : ''}`
  }));

  protected selectVersion(version: string | null): void {
    if (!version || version === this.requestedVersion()) return;

    void this.router.navigate(['/release-notes', version]);
  }
}
