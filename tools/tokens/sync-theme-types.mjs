 
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';
import prettier from 'prettier';
import { typescriptFormatOptions } from '../typescript-format-options.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '../..');

const baseFilesPath = path.join(
    repoRoot,
    'projects',
    'blocks',
    'core'
);

const scssPath = path.join(
    baseFilesPath,
    'styles',
    '_theme-engine.scss',
);

const tsPath = path.join(
    baseFilesPath,
    'types',
    'theme.types.ts',
);

try {
    const scssContent = fs.readFileSync(scssPath, 'utf-8');

    const match = scssContent.match(/\$required-theme-keys:\s*\(([^)]+)\)/);

    if (!match) {
        throw new Error('Could not find $required-theme-keys in the SCSS file.');
    }

    const rawKeys = match[1];
    const keys = rawKeys
        .split(',')
        .map(key => key.trim())
        .map(key => key.replace(/['"]/g, ''))
        .filter(key => key.length > 0);

    const tsDefinition = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY.
// Update the $required-theme-keys in the _theme-engine.scss file instead.

export type SemanticColorToken =
  | '${keys.join("'\n  | '")}';
`;

    const formatted = await prettier.format(tsDefinition, { ...typescriptFormatOptions, filepath: tsPath });
    fs.writeFileSync(tsPath, formatted);
    console.log(`✅ Successfully generated SemanticColorToken with ${keys.length} keys!`);

} catch (error) {
    console.error('❌ Failed to sync theme keys:', error.message);
    process.exit(1);
}
