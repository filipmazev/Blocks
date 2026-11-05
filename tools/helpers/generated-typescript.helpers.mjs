import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';

const root = fileURLToPath(new URL('../../', import.meta.url));
const eslint = new ESLint({
  cwd: root,
  fix: true,
  overrideConfig: [
    {
      files: ['**/*.ts'],
      languageOptions: { parserOptions: { project: false } },
      rules: {
        '@angular-eslint/prefer-signals': ['error', { useTypeChecking: false }],
        '@angular-eslint/no-uncalled-signals': 'off'
      }
    }
  ]
});

/** Generated TypeScript must satisfy the same source rules before it reaches the working tree. */
export async function formatGeneratedTypeScript(source, filepath) {
  const filename = filepath instanceof URL ? fileURLToPath(filepath) : path.resolve(root, filepath);
  const result = (await eslint.lintText(source, { filePath: filename }))[0];

  if (result.errorCount) {
    throw new Error(
      `Generated TypeScript violates the source rules in ${filename}:\n${result.messages.map((message) => `${message.line}:${message.column} ${message.ruleId}: ${message.message}`).join('\n')}`
    );
  }

  return result.output ?? source;
}
