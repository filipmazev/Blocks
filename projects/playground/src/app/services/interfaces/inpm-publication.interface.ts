/** Verified publication metadata used by the playground's package links and build notice. */
export interface INpmPublication {
  /** Exact version with the most recent publication timestamp across all channels. */
  readonly latestVersion: string;
  /** Whether the displayed playground build exists in the registry's version map. */
  readonly buildPublished: boolean;
}
