import type { INpmPublication } from '@playground/services/interfaces/inpm-publication.interface';

/** Resolve only existing versions, ignoring the registry's created/modified bookkeeping timestamps. */
export function resolveNpmPublication(metadata: unknown, buildVersion: string): INpmPublication | null {
  if (!metadata || typeof metadata !== 'object' || !('versions' in metadata) || !('time' in metadata)) return null;

  const versions = metadata.versions;
  const time = metadata.time;

  if (!versions || typeof versions !== 'object' || !time || typeof time !== 'object') return null;

  const publications = Object.entries(time)
    .filter(([version, date]) => Object.hasOwn(versions, version) && typeof date === 'string' && Number.isFinite(Date.parse(date)))
    .sort((left, right) => Date.parse(right[1]) - Date.parse(left[1]));
  const latestVersion = publications[0]?.[0];

  return latestVersion ? { latestVersion, buildPublished: Object.hasOwn(versions, buildVersion) } : null;
}
