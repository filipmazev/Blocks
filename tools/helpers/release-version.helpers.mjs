/** Resolve the same unpublished version for the playground and the default publish flow. */
export function resolveReleaseVersion(pkg, nextVersion, bump = 'patch') {
  const channel = pkg.publishConfig?.tag ?? 'latest';
  const pattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?$/;
  const current = pattern.exec(pkg.version);

  if (!current || !['latest', 'beta', 'alpha'].includes(channel)) throw new Error('Expected a semantic package version and latest, beta or alpha channel.');

  let version = nextVersion;

  if (version == null) {
    const [major, minor, patch] = current.slice(1, 4).map(Number);
    const suffix = channel === 'latest' ? '' : `-${channel}`;
    const increments = {
      patch: `${major}.${minor}.${patch + 1}`,
      minor: `${major}.${minor + 1}.0`,
      major: `${major + 1}.0.0`
    };

    if (!(bump in increments)) throw new Error('Expected patch, minor or major.');

    version = `${increments[bump]}${suffix}`;
  }

  const target = typeof version === 'string' ? pattern.exec(version) : null;

  if (!target) throw new Error('release.config.json nextVersion must be null or a semantic version.');
  const matchesChannel = channel === 'latest' ? !target[4] : new RegExp(`^${channel}(?:\\.|$)`).test(target[4] ?? '');

  if (!matchesChannel) {
    throw new Error(`Next version ${version} must match the ${channel} publish channel.`);
  }

  return version;
}
