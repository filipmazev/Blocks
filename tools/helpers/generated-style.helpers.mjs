import { fileURLToPath } from 'node:url';

import prettier from 'prettier';

/** Keep compiled style assets identical to the repository's formatter output. */
export async function formatGeneratedStyle(source, filepath) {
  const filename = filepath instanceof URL ? fileURLToPath(filepath) : filepath;
  const options = await prettier.resolveConfig(filename);

  return prettier.format(source, { ...options, filepath: filename });
}
