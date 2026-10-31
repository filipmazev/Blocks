/** Metadata for one library release; entries are listed newest first. */
export interface IReleaseNotes {
  /** Exact version used in the permanent release-notes URL. */
  readonly version: string;
  /** Short description of the changes in this version. */
  readonly summary: string;
  /** Draft notes remain explicitly unpublished until marked released. */
  readonly status: 'draft' | 'released';
  /** npm distribution channel; omitted or latest denotes a stable release. */
  readonly channel?: 'beta' | 'latest';
  /** Repository-relative README path consumed by the documentation generator. */
  readonly readme: string;
  /** First commit in the comparison, excluded from the changes. */
  readonly fromCommit: string;
  /** Last commit covered by the notes; never inferred from the current checkout. */
  readonly toCommit: string;
}
